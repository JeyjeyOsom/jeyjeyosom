import{G as zh,C as rd,R as _l,a as Bh,b as kh,c as Ls,d as ad,e as od,f as ld,g as cd,h as hd,H as ud,i as dd,j as fd,k as pd,l as md,m as gd,n as xd,o as _d,p as vd,q as Md,r as Sd,s as yd,Q as Ed,t as bd,W as aa,u as st,v as B,w as wd,x as Td,y as Ad,z as Rd,A as Cd,B as Pd,D as xr,V as Ld,E as Dd,F as Ta,I as _r}from"./index-DhV7CtcK.js";const Ie={dusk:{sun:16761510,sunI:.42,shade:10322621,shadeI:.66,sea:8284822,seaDeep:6113914,foam:15257558,sprite:15785190,lamps:!0},dawn:{sun:16773340,sunI:.48,shade:11977956,shadeI:.7,sea:10272994,seaDeep:8299727,foam:16186367,sprite:16777215,lamps:!1},night:{sun:7305432,sunI:.22,shade:4867984,shadeI:.55,sea:2894428,seaDeep:1907525,foam:9342152,sprite:11118300,lamps:!0},noon:{sun:16777215,sunI:.52,shade:13228784,shadeI:.72,sea:7320552,seaDeep:5216214,foam:16777215,sprite:16777215,lamps:!1}},Nd={"dusk-to-dawn":[Ie.dusk,Ie.night,Ie.dawn],"dawn-to-dusk":[Ie.dawn,Ie.noon,Ie.dusk]};function Ue(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,a=t>>16&255,o=t>>8&255,l=t&255,c=Math.round(n+(a-n)*e),h=Math.round(s+(o-s)*e),u=Math.round(r+(l-r)*e);return c<<16|h<<8|u}function yo(i,t,e){return{sun:Ue(i.sun,t.sun,e),sunI:i.sunI+(t.sunI-i.sunI)*e,shade:Ue(i.shade,t.shade,e),shadeI:i.shadeI+(t.shadeI-i.shadeI)*e,sea:Ue(i.sea,t.sea,e),seaDeep:Ue(i.seaDeep,t.seaDeep,e),foam:Ue(i.foam,t.foam,e),sprite:Ue(i.sprite,t.sprite,e),lamps:e<.5?i.lamps:t.lamps}}const Eo=i=>i*i*(3-2*i),Aa=[[0,Ie.night],[4.5,Ie.night],[6,Ie.dawn],[8.5,Ie.noon],[16.5,Ie.noon],[18.5,Ie.dusk],[20.5,Ie.night],[24,Ie.night]];function ps(i){return i.getHours()+i.getMinutes()/60+i.getSeconds()/3600}function Ra(i){const t=(i%24+24)%24;for(let e=1;e<Aa.length;e++){const[n,s]=Aa[e];if(t>n)continue;const[r,a]=Aa[e-1];return yo(a,s,Eo((t-r)/(n-r)))}return Ie.night}function Ca(i){const t=(i%24+24)%24;return t<5.25||t>=19.5?"night":t<7.25?"dawn":t<17.5?"day":"dusk"}function Id(i,t,e){const[n,s,r]=Nd[i],a=Math.min(Math.max(t,0),1);return a<e?yo(n,s,Eo(a/e)):yo(s,r,Eo((a-e)/(1-e)))}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="187",Ud=0,Vl=1,Fd=2,$r=1,Od=2,Hs=3,Bi=0,on=1,xn=2,ms=0,Xs=1,Wl=2,Xl=3,Yl=4,zd=5,hs=100,Bd=101,kd=102,Hd=103,Gd=104,Vd=200,Wd=201,Xd=202,Yd=203,Hh=204,Gh=205,qd=206,Kd=207,Zd=208,$d=209,Jd=210,Qd=211,jd=212,tf=213,ef=214,bo=0,wo=1,To=2,Js=3,Ao=4,Ro=5,Co=6,Po=7,Vh=0,nf=1,sf=2,oi=0,Wh=1,Xh=2,Yh=3,qh=4,Kh=5,Zh=6,$h=7,Jh=300,_s=301,Qs=302,Pa=303,La=304,js=1e3,ai=1001,Lo=1002,_e=1003,rf=1004,vr=1005,an=1006,Da=1007,Mi=1008,un=1009,Qh=1010,jh=1011,tr=1012,Ml=1013,qn=1014,In=1015,Kn=1016,Sl=1017,yl=1018,vs=1020,tu=35902,eu=35899,nu=1021,iu=1022,_n=1023,bi=1026,Si=1027,El=1028,bl=1029,ki=1030,wl=1031,Tl=1033,Jr=33776,Qr=33777,jr=33778,ta=33779,Do=35840,No=35841,Io=35842,Uo=35843,Fo=36196,Oo=37492,zo=37496,Bo=37488,ko=37489,oa=37490,Ho=37491,Go=37808,Vo=37809,Wo=37810,Xo=37811,Yo=37812,qo=37813,Ko=37814,Zo=37815,$o=37816,Jo=37817,Qo=37818,jo=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,la=36285,ol=36286,af=3200,ll=0,of=1,_i="",gn="srgb",er="srgb-linear",ca="linear",de="srgb",Na=7680,lf=519,cf=512,hf=513,uf=514,su=515,df=516,ff=517,ru=518,au=519,pf=35044,ql="300 es",Un=2e3,nr=2001;function mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){const i=ha("canvas");return i.style.display="block",i}const Kl={};function Zl(...i){const t="THREE."+i.shift();console.log(t,...i)}function ou(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=ou(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=ou(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ea(...i){const t=i.join(" ");t in Kl||(Kl[t]=!0,Vt(...i))}function xf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const _f={[bo]:bo,[To]:Co,[Ao]:Ao,[Js]:Ro,[wo]:wo,[Co]:To,[Po]:Po,[Ro]:Js};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,cl=180/Math.PI;function ws(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function vf(i,t){return(i%t+t)%t}function Ua(i,t,e){return(1-e)*i+e*t}function Mf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Al(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sf(i,t){if(t.constructor===Float32Array)return i;const e=Al(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function yf(i,t){if(t.constructor===Float32Array)return i;const e=Al(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const zl=class zl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zl.prototype.isVector2=!0;let Pt=zl;class wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);g=Math.sin(g*S)/b,o=Math.sin(o*S)/b,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bl=class Bl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fa.copy(this).projectOnVector(t),this.sub(Fa)}reflect(t){return this.sub(Fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;let O=Bl;const Fa=new O,$l=new wi,kl=class kl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],S=s[1],b=s[4],y=s[7],C=s[2],R=s[5],x=s[8];return r[0]=a*_+o*S+l*C,r[3]=a*m+o*b+l*R,r[6]=a*g+o*y+l*x,r[1]=c*_+h*S+u*C,r[4]=c*m+h*b+u*R,r[7]=c*g+h*y+u*x,r[2]=d*_+f*S+p*C,r[5]=d*m+f*b+p*R,r[8]=d*g+f*y+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kl.prototype.isMatrix3=!0;let qt=kl;const Oa=new qt,Jl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ef(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:t,whitePoint:n,transfer:ca,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const ne=Ef();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class bf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=ha("canvas")),$i.width=t.width,$i.height=t.height;const s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wf=0;class Rl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(za(s[a].image)):r.push(za(s[a]))}else r=za(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function za(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let Tf=0;const Ba=new O;class Ze extends Xi{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ai,s=ai,r=an,a=Mi,o=_n,l=un,c=Ze.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ws(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Jh;Ze.DEFAULT_ANISOTROPY=1;const Hl=class Hl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,y=(f+1)/2,C=(g+1)/2,R=(h+d)/4,x=(u+_)/4,E=(p+m)/4;return b>y&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=x/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=E/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=E/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;let Me=Hl;class Af extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ze({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lu extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const va=class va{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cf,t,Pf)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(n,cn),fi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(n,cn)),fi.normalize(),Mr.crossVectors(cn,fi),s[0]=fi.x,s[4]=Mr.x,s[8]=cn.x,s[1]=fi.y,s[5]=Mr.y,s[9]=cn.y,s[2]=fi.z,s[6]=Mr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],b=n[7],y=n[11],C=n[15],R=s[0],x=s[4],E=s[8],H=s[12],I=s[1],z=s[5],W=s[9],Z=s[13],N=s[2],K=s[6],j=s[10],X=s[14],ot=s[3],q=s[7],et=s[11],rt=s[15];return r[0]=a*R+o*I+l*N+c*ot,r[4]=a*x+o*z+l*K+c*q,r[8]=a*E+o*W+l*j+c*et,r[12]=a*H+o*Z+l*X+c*rt,r[1]=h*R+u*I+d*N+f*ot,r[5]=h*x+u*z+d*K+f*q,r[9]=h*E+u*W+d*j+f*et,r[13]=h*H+u*Z+d*X+f*rt,r[2]=p*R+_*I+m*N+g*ot,r[6]=p*x+_*z+m*K+g*q,r[10]=p*E+_*W+m*j+g*et,r[14]=p*H+_*Z+m*X+g*rt,r[3]=S*R+b*I+y*N+C*ot,r[7]=S*x+b*z+y*K+C*q,r[11]=S*E+b*W+y*j+C*et,r[15]=S*H+b*Z+y*X+C*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*f-c*d,b=o*f-c*u,y=o*d-l*u,C=a*f-c*h,R=a*d-l*h,x=a*u-o*h;return e*(_*S-m*b+g*y)-n*(p*S-m*C+g*R)+s*(p*b-_*C+g*x)-r*(p*y-_*R+m*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=e*o-n*a,b=e*l-s*a,y=e*c-r*a,C=n*l-s*o,R=n*c-r*o,x=s*c-r*l,E=h*_-u*p,H=h*m-d*p,I=h*g-f*p,z=u*m-d*_,W=u*g-f*_,Z=d*g-f*m,N=S*Z-b*W+y*z+C*I-R*H+x*E;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/N;return t[0]=(o*Z-l*W+c*z)*K,t[1]=(s*W-n*Z-r*z)*K,t[2]=(_*x-m*R+g*C)*K,t[3]=(d*R-u*x-f*C)*K,t[4]=(l*I-a*Z-c*H)*K,t[5]=(e*Z-s*I+r*H)*K,t[6]=(m*y-p*x-g*b)*K,t[7]=(h*x-d*y+f*b)*K,t[8]=(a*W-o*I+c*E)*K,t[9]=(n*I-e*W-r*E)*K,t[10]=(p*R-_*y+g*S)*K,t[11]=(u*y-h*R-f*S)*K,t[12]=(o*H-a*z-l*E)*K,t[13]=(e*z-n*H+s*E)*K,t[14]=(_*b-p*C-m*S)*K,t[15]=(h*C-u*b+d*S)*K,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,m=a*u,g=o*u,S=l*c,b=l*h,y=l*u,C=n.x,R=n.y,x=n.z;return s[0]=(1-(_+g))*C,s[1]=(f+y)*C,s[2]=(p-b)*C,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+g))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(p+b)*x,s[9]=(m-S)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),l=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);const c=1/a,h=1/o,u=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Un,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Un)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===nr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Un)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===nr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};va.prototype.isMatrix4=!0;let oe=va;const Ji=new O,Tn=new oe,Cf=new O(0,0,0),Pf=new O(1,1,1),fi=new O,Mr=new O,cn=new O,jl=new oe,tc=new wi;class Hi{constructor(t=0,e=0,n=0,s=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lf=0;const ec=new O,Qi=new wi,Jn=new oe,Sr=new O,Ds=new O,Df=new O,Nf=new wi,nc=new O(1,0,0),ic=new O(0,1,0),sc=new O(0,0,1),rc={type:"added"},If={type:"removed"},ji={type:"childadded",child:null},ka={type:"childremoved",child:null};class $e extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new O,e=new Hi,n=new wi,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ds,Sr,this.up):Jn.lookAt(Sr,Ds,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Jn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),ji.child=t,this.dispatchEvent(ji),ji.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.DEFAULT_UP=new O(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class He extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=vf(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ga(a,r,t+1/3),this.g=Ga(a,r,t),this.b=Ga(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ne.workingToColorSpace(qe.copy(this),t),Math.round(jt(qe.r*255,0,255))*65536+Math.round(jt(qe.g*255,0,255))*256+Math.round(jt(qe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=gn){ne.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(yr);const n=Ua(pi.h,yr.h,e),s=Ua(pi.s,yr.s,e),r=Ua(pi.l,yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=cu;class hu extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new O,Qn=new O,Va=new O,jn=new O,ts=new O,es=new O,ac=new O,Wa=new O,Xa=new O,Ya=new O,qa=new Me,Ka=new Me,Za=new Me;class Nn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Qn.subVectors(n,e),Va.subVectors(t,e);const a=An.dot(An),o=An.dot(Qn),l=An.dot(Va),c=Qn.dot(Qn),h=Qn.dot(Va),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return qa.setScalar(0),Ka.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),Za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qa,r.x),a.addScaledVector(Ka,r.y),a.addScaledVector(Za,r.z),a}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Qn.subVectors(t,e),An.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),Wa.subVectors(t,n);const l=ts.dot(Wa),c=es.dot(Wa);if(l<=0&&c<=0)return e.copy(n);Xa.subVectors(t,s);const h=ts.dot(Xa),u=es.dot(Xa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(ts,a);Ya.subVectors(t,r);const f=ts.dot(Ya),p=es.dot(Ya);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(es,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ac.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(ac,o);const g=1/(m+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),br.subVectors(this.max,Ns),ns.subVectors(t.a,Ns),is.subVectors(t.b,Ns),ss.subVectors(t.c,Ns),mi.subVectors(is,ns),gi.subVectors(ss,is),Li.subVectors(ns,ss);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!$a(e,ns,is,ss,br)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,ns,is,ss,br))?!1:(wr.crossVectors(mi,gi),e=[wr.x,wr.y,wr.z],$a(e,ns,is,ss,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ti=[new O,new O,new O,new O,new O,new O,new O,new O],Rn=new O,Er=new Yi,ns=new O,is=new O,ss=new O,mi=new O,gi=new O,Li=new O,Ns=new O,br=new O,wr=new O,Di=new O;function $a(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ne=new O,Tr=new Pt;let Ff=0;class Sn extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ff++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pf,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=t!==void 0?Al(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Sf(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):yf(t,this.array)}}class uu extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class du extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Of=new Yi,Is=new O,Ja=new O;class cr{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Ja)),this.expandByPoint(Is.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let zf=0;const pn=new oe,Qa=new $e,rs=new O,hn=new Yi,Us=new Yi,Be=new O;class fn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?du:uu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(hn.min,Us.min),hn.expandByPoint(Be),Be.addVectors(hn.max,Us.max),hn.expandByPoint(Be)):(hn.expandByPoint(Us.min),hn.expandByPoint(Us.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Be.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Be.add(rs)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let H=0;H<n.count;H++)o[H]=new O,l[H]=new O;const h=new O,u=new O,d=new O,f=new Pt,p=new Pt,_=new Pt,m=new O,g=new O;function S(H,I,z){c[H]=c[I]=c[z]=1,h.fromBufferAttribute(n,H),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,z),f.fromBufferAttribute(r,H),p.fromBufferAttribute(r,I),_.fromBufferAttribute(r,z),u.sub(h),d.sub(h),p.sub(f),_.sub(f);const W=1/(p.x*_.y-_.x*p.y);isFinite(W)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(W),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(W),o[H].add(m),o[I].add(m),o[z].add(m),l[H].add(g),l[I].add(g),l[z].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let H=0,I=b.length;H<I;++H){const z=b[H],W=z.start,Z=z.count;for(let N=W,K=W+Z;N<K;N+=3)S(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new O,C=new O,R=new O,x=new O;function E(H){R.fromBufferAttribute(s,H),x.copy(R);const I=o[H];y.copy(I),y.sub(R.multiplyScalar(R.dot(I))).normalize(),C.crossVectors(x,I);const W=C.dot(l[H])<0?-1:1;a.setXYZW(H,y.x,y.y,y.z,W)}for(let H=0,I=n.count;H<I;++H)c[H]&&E(H);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Sn(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new O,Bf=new O,kf=new qt;class si{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ja.subVectors(n,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ja),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kf.getNormalMatrix(t),s=this.coplanarPoint(ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Hf=0;class hr extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Xs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new si().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ei=new O,to=new O,Ar=new O,Rr=new O;class fu{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){to.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Rr.copy(this.origin).sub(to);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ar),o=Rr.dot(this.direction),l=-Rr.dot(Ar),c=Rr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(to).addScaledVector(Ar,d),f}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,b=n.z-a.z,y=Math.abs(l),C=Math.abs(c),R=Math.abs(h);let x,E,H,I,z,W,Z,N,K,j,X,ot;if(y>=C&&y>=R?(H=l,W=u,K=p,ot=g,l>=0?(x=c,E=h,I=d,z=f,Z=_,N=m,j=S,X=b):(x=h,E=c,I=f,z=d,Z=m,N=_,j=b,X=S)):C>=R?(H=c,W=d,K=_,ot=S,c>=0?(x=h,E=l,I=f,z=u,Z=m,N=p,j=b,X=g):(x=l,E=h,I=u,z=f,Z=p,N=m,j=g,X=b)):(H=h,W=f,K=m,ot=b,h>=0?(x=l,E=c,I=u,z=d,Z=p,N=_,j=g,X=S):(x=c,E=l,I=d,z=u,Z=_,N=p,j=S,X=g)),H===0)return null;const q=x/H,et=E/H,rt=1/H,wt=I-q*W,Nt=z-et*W,Q=Z-q*K,yt=N-et*K,At=j-q*ot,Ft=X-et*ot,Mt=At*yt-Ft*Q,Wt=wt*Ft-Nt*At,Se=Q*Nt-yt*wt;if(s){if(Mt<0||Wt<0||Se<0)return null}else if((Mt<0||Wt<0||Se<0)&&(Mt>0||Wt>0||Se>0))return null;const Bt=Mt+Wt+Se;if(Bt===0)return null;const se=rt*(Mt*W+Wt*K+Se*ot);return(Bt>0?se<0:se>0)?null:this.at(se/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ln extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oc=new oe,Ni=new fu,Cr=new cr,lc=new O,Pr=new O,Lr=new O,Dr=new O,eo=new O,Nr=new O,cc=new O,Ir=new O;class Ct extends $e{constructor(t=new fn,e=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(eo.fromBufferAttribute(u,t),a?Nr.addScaledVector(eo,h):Nr.addScaledVector(eo.sub(e),h))}e.add(Nr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Cr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Cr,lc)===null||Ni.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(oc.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,C=b;y<C;y+=3){const R=o.getX(y),x=o.getX(y+1),E=o.getX(y+2);s=Ur(this,g,t,n,c,h,u,R,x,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const S=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);s=Ur(this,a,t,n,c,h,u,S,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,C=b;y<C;y+=3){const R=y,x=y+1,E=y+2;s=Ur(this,g,t,n,c,h,u,R,x,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const S=m,b=m+1,y=m+2;s=Ur(this,a,t,n,c,h,u,S,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Gf(i,t,e,n,s,r,a,o){let l;if(t.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bi,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:i}}function Ur(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);const h=Gf(i,t,e,n,Pr,Lr,Dr,cc);if(h){const u=new O;Nn.getBarycoord(cc,Pr,Lr,Dr,u),s&&(h.uv=Nn.getInterpolatedAttribute(s,o,l,c,u,new Pt)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,o,l,c,u,new Pt)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Nn.getNormal(Pr,Lr,Dr,d.normal),h.face=d,h.barycoord=u}return h}class Ma extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=_e,h=_e,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc extends Sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new oe,uc=new oe,Fr=[],dc=new Yi,Vf=new oe,Fs=new Ct,Os=new cr;class ci extends Ct{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),dc.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Os.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),uc.multiplyMatrices(n,as),Fs.matrixWorld=uc,Fs.raycast(t,Fr);for(let a=0,o=Fr.length;a<o;a++){const l=Fr[a];l.instanceId=r,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ma(new Float32Array(s*this.count),s,this.count,El,In));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ii=new cr,Wf=new Pt(.5,.5),Or=new O;class ir{constructor(t=new si,e=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],b=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,g-p,C-S).normalize(),s[1].setComponents(c+a,f+h,g+p,C+S).normalize(),s[2].setComponents(c+o,f+u,g+_,C+b).normalize(),s[3].setComponents(c-o,f-u,g-_,C-b).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,g-m,C-y).normalize();else if(s[4].setComponents(c-l,f-d,g-m,C-y).normalize(),e===Un)s[5].setComponents(c+l,f+d,g+m,C+y).normalize();else if(e===nr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);const e=Wf.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const fc=new oe;class Pl{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];fc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ir),n[s].setFromProjectionMatrix(fc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ir),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Pl().copy(this)}}class pu extends Ze{constructor(t=[],e=_s,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pc extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends Ze{constructor(t,e,n=qn,s,r,a,o=_e,l=_e,c,h=bi,u=1){if(h!==bi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class mu extends Ms{constructor(t,e=qn,n=_s,s,r,a=_e,o=_e,l,c=bi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gu extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ti extends fn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function p(_,m,g,S,b,y,C,R,x,E,H){const I=y/x,z=C/E,W=y/2,Z=C/2,N=R/2,K=x+1,j=E+1;let X=0,ot=0;const q=new O;for(let et=0;et<j;et++){const rt=et*z-Z;for(let wt=0;wt<K;wt++){const Nt=wt*I-W;q[_]=Nt*S,q[m]=rt*b,q[g]=N,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[g]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(wt/x),u.push(1-et/E),X+=1}}for(let et=0;et<E;et++)for(let rt=0;rt<x;rt++){const wt=d+rt+K*et,Nt=d+rt+K*(et+1),Q=d+(rt+1)+K*(et+1),yt=d+(rt+1)+K*et;l.push(wt,Nt,yt),l.push(Nt,Q,yt),ot+=6}o.addGroup(f,ot,H),f+=ot,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Pt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],r=[],a=[],o=new O,l=new oe;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ll extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xf extends Ll{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const mc=new O,gc=new O,no=new Dl,io=new Dl,so=new Dl;class Yf extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gc.subVectors(s[0],s[1]).add(s[0]),c=gc);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),no.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,m),io.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,m),so.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),io.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),so.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(no.calc(l),io.calc(l),so.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qf(i,t){const e=1-i;return e*e*t}function Kf(i,t){return 2*(1-i)*i*t}function Zf(i,t){return i*i*t}function Ys(i,t,e,n){return qf(i,t)+Kf(i,e)+Zf(i,n)}function $f(i,t){const e=1-i;return e*e*e*t}function Jf(i,t){const e=1-i;return 3*e*e*i*t}function Qf(i,t){return 3*(1-i)*i*i*t}function jf(i,t){return i*i*i*t}function qs(i,t,e,n,s){return $f(i,t)+Jf(i,e)+Qf(i,n)+jf(i,s)}class xu extends Zn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tp extends Zn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(t,s.x,r.x,a.x,o.x),qs(t,s.y,r.y,a.y,o.y),qs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _u extends Zn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ep extends Zn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Zn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class np extends Zn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ys(t,s.x,r.x,a.x),Ys(t,s.y,r.y,a.y),Ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(xc(o,l.x,c.x,h.x,u.x),xc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}}var _c=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:Yf,CubicBezierCurve:xu,CubicBezierCurve3:tp,EllipseCurve:Ll,LineCurve:_u,LineCurve3:ep,QuadraticBezierCurve:vu,QuadraticBezierCurve3:np,SplineCurve:Mu});class ip extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _c[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Ss extends ip{constructor(t){super(),this.type="Path",this.currentPoint=new Pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _u(this.currentPoint.clone(),new Pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vu(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xu(this.currentPoint.clone(),new Pt(t,e),new Pt(n,s),new Pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Ll(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Su extends Ss{constructor(t){super(t),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ss().fromJSON(s))}return this}}function sp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return sr(r,a,e,o,l,c,0),a}function yu(i,t,e,n,s){let r;if(s===Mp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vc(a/n|0,i[a],i[a+1],r);return r&&ys(r,r.next)&&(ar(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||we(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&pp(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ap(i,n,s,r):rp(i)){t.push(l.i,i.i,c.i),ar(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=op(Gi(i),t),sr(i,t,e,n,s,r,2)):a===2&&lp(i,t,e,n,s,r):sr(Gi(i),t,e,n,s,r,1);break}}}function rp(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Gs(s,o,r,l,a,c,p.x,p.y)&&we(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ap(i,t,e,n){const s=i.prev,r=i,a=i.next;if(we(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),g=hl(f,p,t,e,n),S=hl(_,m,t,e,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=g&&y&&y.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Gs(o,h,l,u,c,d,b.x,b.y)&&we(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Gs(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=m&&b!==s&&b!==a&&Gs(o,h,l,u,c,d,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Gs(o,h,l,u,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function op(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ys(n,s)&&bu(n,e,e.next,s)&&rr(n,s)&&rr(s,n)&&(t.push(n.i,e.i,s.i),ar(e),ar(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function lp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xp(a,o)){let l=wu(a,o);a=Gi(a,a.next),l=Gi(l,l.next),sr(a,t,e,n,s,r,0),sr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cp(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=yu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gp(c))}s.sort(hp);for(let r=0;r<s.length;r++)e=up(s[r],e);return e}function hp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function up(i,t){const e=dp(i,t);if(!e)return t;const n=wu(e,i);return Gi(n,n.next),Gi(e,e.next)}function dp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Eu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);rr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&fp(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function fp(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function pp(i,t,e,n){let s=i;do s.z===0&&(s.z=hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mp(s)}function mp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Eu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Gs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Eu(i,t,e,n,s,r,a,o)}function xp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_p(i,t)&&(rr(i,t)&&rr(t,i)&&vp(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||ys(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function bu(i,t,e,n){const s=Br(we(i,t,e)),r=Br(we(i,t,n)),a=Br(we(e,n,i)),o=Br(we(e,n,t));return!!(s!==r&&a!==o||s===0&&zr(i,e,t)||r===0&&zr(i,n,t)||a===0&&zr(e,i,n)||o===0&&zr(e,t,n))}function zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Br(i){return i>0?1:i<0?-1:0}function _p(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function vp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){const e=ul(i.i,i.x,i.y),n=ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vc(i,t,e,n){const s=ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Sp{static triangulate(t,e,n=2){return sp(t,e,n)}}class Ks{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ks.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Mc(t),Sc(n,t);let a=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sc(n,e[l]);const o=Sp.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Mc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Wn extends fn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const S=g*d-a;for(let b=0;b<c;b++){const y=b*u-r;p.push(y,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const b=S+c*g,y=S+c*(g+1),C=S+1+c*(g+1),R=S+1+c*g;f.push(b,y,R),f.push(y,C,R)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sa extends fn{constructor(t=new Su([new Pt(0,.5),new Pt(-.5,-.5),new Pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(a,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Ks.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const S=p[m];Ks.isClockWise(S)===!0&&(p[m]=S.reverse())}const _=Ks.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const S=p[m];f=f.concat(S)}for(let m=0,g=f.length;m<g;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,g=_.length;m<g;m++){const S=_[m],b=S[0]+u,y=S[1]+u,C=S[2]+u;n.push(b,y,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return yp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Sa(n,t.curveSegments)}}function yp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(yc(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(yc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function yc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ep(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const bp={clone:Es,merge:je};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ap extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class na extends hr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Kt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Rp extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cp extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Au extends $e{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const ro=new oe,Ec=new O,bc=new O;class Pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ec),bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ro,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kr=new O,Hr=new wi,Hn=new O;class Nl extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Hr,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Hr,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kr,Hr,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Hr,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new O,wc=new Pt,Tc=new Pt;class Dn extends Nl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Tc),e.subVectors(Tc,wc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ua extends Nl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lp extends Pp{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dp extends Au{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Lp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Np extends Au{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const os=-90,ls=1;class dl extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(os,ls,t,e);s.layers=this.layers,this.add(s);const r=new Dn(os,ls,t,e);r.layers=this.layers,this.add(r);const a=new Dn(os,ls,t,e);a.layers=this.layers,this.add(a);const o=new Dn(os,ls,t,e);o.layers=this.layers,this.add(o);const l=new Dn(os,ls,t,e);l.layers=this.layers,this.add(l);const c=new Dn(os,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ip extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Ac=new oe;class Up{constructor(t,e,n=0,s=1/0){this.ray=new fu(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ac),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(Rc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fl(t[s],this,n,e);return n.sort(Rc),n}}function Rc(i,t){return i.distance-t.distance}function fl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)fl(r[a],t,e,!0)}}function Cc(i,t,e,n){const s=Fp(n);switch(e){case nu:return i*t;case El:return i*t/s.components*s.byteLength;case bl:return i*t/s.components*s.byteLength;case ki:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case iu:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Tl:return i*t*4/s.components*s.byteLength;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case Io:return Math.max(i,8)*Math.max(t,8)/2;case Fo:case Oo:case Bo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case oa:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case la:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(i){switch(i){case un:case Qh:return{byteLength:1,components:1};case tr:case jh:case Kn:return{byteLength:2,components:1};case Sl:case yl:return{byteLength:2,components:4};case qn:case Ml:case In:return{byteLength:4,components:1};case tu:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ru(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Op(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
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
#endif`,U0=`uniform sampler2D dfgLUT;
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
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
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform float backgroundBlurriness;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:zp,alphahash_pars_fragment:Bp,alphamap_fragment:kp,alphamap_pars_fragment:Hp,alphatest_fragment:Gp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:Yp,batching_vertex:qp,begin_vertex:Kp,beginnormal_vertex:Zp,bsdfs:$p,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:e0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:a0,common:o0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:x0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:y0,fog_pars_fragment:E0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:P0,lights_toon_pars_fragment:L0,lights_phong_fragment:D0,lights_phong_pars_fragment:N0,lights_physical_fragment:I0,lights_physical_pars_fragment:U0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:z0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:Y0,map_particle_pars_fragment:q0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:$0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:j0,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:ym,skinbase_vertex:Em,skinning_pars_vertex:bm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Nm,uv_pars_vertex:Im,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Om,background_frag:zm,backgroundCube_vert:Bm,backgroundCube_frag:km,cube_vert:Hm,cube_frag:Gm,depth_vert:Vm,depth_frag:Wm,distance_vert:Xm,distance_frag:Ym,equirect_vert:qm,equirect_frag:Km,linedashed_vert:Zm,linedashed_frag:$m,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:jm,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Vn={basic:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:je([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:je([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:je([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:je([bt.common,bt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:je([bt.lights,bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Vn.physical={uniforms:je([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Gr={r:0,b:0,g:0},xg=new oe,Cu=new qt;Cu.set(-1,0,0,0,1,0,0,0,1);function _g(i,t,e,n,s,r){const a=new Kt(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const y=S.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(S){let b=!1;const y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,b){const y=f(b);y&&y.isCubeTexture?(c===void 0&&(c=new Ct(new Ti(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Es(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cu),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ct(new Wn(2,2),new yn({name:"BackgroundMaterial",uniforms:Es(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(Gr,Tu(i)),e.buffers.color.setClear(Gr.r,Gr.g,Gr.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:p,addToRenderList:_,dispose:g}}function vg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(z,W,Z,N,K){let j=!1;const X=u(z,N,Z,W);r!==X&&(r=X,c(r.object)),j=f(z,N,Z,K),j&&p(z,N,Z,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(z,W,Z,N),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function u(z,W,Z,N){const K=N.wireframe===!0;let j=n[W.id];j===void 0&&(j={},n[W.id]=j);const X=z.isInstancedMesh===!0?z.id:0;let ot=j[X];ot===void 0&&(ot={},j[X]=ot);let q=ot[Z.id];q===void 0&&(q={},ot[Z.id]=q);let et=q[K];return et===void 0&&(et=d(l()),q[K]=et),et}function d(z){const W=[],Z=[],N=[];for(let K=0;K<e;K++)W[K]=0,Z[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:N,object:z,attributes:{},index:null}}function f(z,W,Z,N){const K=r.attributes,j=W.attributes;let X=0;const ot=Z.getAttributes();for(const q in ot)if(ot[q].location>=0){const rt=K[q];let wt=j[q];if(wt===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(wt=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(wt=z.instanceColor)),rt===void 0||rt.attribute!==wt||wt&&rt.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function p(z,W,Z,N){const K={},j=W.attributes;let X=0;const ot=Z.getAttributes();for(const q in ot)if(ot[q].location>=0){let rt=j[q];rt===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(rt=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(rt=z.instanceColor));const wt={};wt.attribute=rt,rt&&rt.data&&(wt.data=rt.data),K[q]=wt,X++}r.attributes=K,r.attributesNum=X,r.index=N}function _(){const z=r.newAttributes;for(let W=0,Z=z.length;W<Z;W++)z[W]=0}function m(z){g(z,0)}function g(z,W){const Z=r.newAttributes,N=r.enabledAttributes,K=r.attributeDivisors;Z[z]=1,N[z]===0&&(i.enableVertexAttribArray(z),N[z]=1),K[z]!==W&&(i.vertexAttribDivisor(z,W),K[z]=W)}function S(){const z=r.newAttributes,W=r.enabledAttributes;for(let Z=0,N=W.length;Z<N;Z++)W[Z]!==z[Z]&&(i.disableVertexAttribArray(Z),W[Z]=0)}function b(z,W,Z,N,K,j,X){X===!0?i.vertexAttribIPointer(z,W,Z,K,j):i.vertexAttribPointer(z,W,Z,N,K,j)}function y(z,W,Z,N){_();const K=N.attributes,j=Z.getAttributes(),X=W.defaultAttributeValues;for(const ot in j){const q=j[ot];if(q.location>=0){let et=K[ot];if(et===void 0&&(ot==="instanceMatrix"&&z.instanceMatrix&&(et=z.instanceMatrix),ot==="instanceColor"&&z.instanceColor&&(et=z.instanceColor)),et!==void 0){const rt=et.normalized,wt=et.itemSize,Nt=t.get(et);if(Nt===void 0)continue;const Q=Nt.buffer,yt=Nt.type,At=Nt.bytesPerElement,Ft=yt===i.INT||yt===i.UNSIGNED_INT||et.gpuType===Ml;if(et.isInterleavedBufferAttribute){const Mt=et.data,Wt=Mt.isInterleavedBuffer===!0?Mt.stride:Mt.itemSize,Se=et.offset;if(Mt.isInstancedInterleavedBuffer||Mt.isInstancedBufferAttribute){for(let Bt=0;Bt<q.locationSize;Bt++)g(q.location+Bt,Mt.meshPerAttribute);z.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)m(q.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Bt=0;Bt<q.locationSize;Bt++)b(q.location+Bt,wt/q.locationSize,yt,rt,Wt*At,(Se+wt/q.locationSize*Bt)*At,Ft)}else{if(et.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)g(q.location+Mt,et.meshPerAttribute);z.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)m(q.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Mt=0;Mt<q.locationSize;Mt++)b(q.location+Mt,wt/q.locationSize,yt,rt,wt*At,wt/q.locationSize*Mt*At,Ft)}}else if(X!==void 0){const rt=X[ot];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(q.location,rt);break;case 3:i.vertexAttrib3fv(q.location,rt);break;case 4:i.vertexAttrib4fv(q.location,rt);break;default:i.vertexAttrib1fv(q.location,rt)}}}}S()}function C(){H();for(const z in n){const W=n[z];for(const Z in W){const N=W[Z];for(const K in N){const j=N[K];for(const X in j)h(j[X].object),delete j[X];delete N[K]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;const W=n[z.id];for(const Z in W){const N=W[Z];for(const K in N){const j=N[K];for(const X in j)h(j[X].object),delete j[X];delete N[K]}}delete n[z.id]}function x(z){for(const W in n){const Z=n[W];for(const N in Z){const K=Z[N];if(K[z.id]===void 0)continue;const j=K[z.id];for(const X in j)h(j[X].object),delete j[X];delete K[z.id]}}}function E(z){for(const W in n){const Z=n[W],N=z.isInstancedMesh===!0?z.id:0,K=Z[N];if(K!==void 0){for(const j in K){const X=K[j];for(const ot in X)h(X[ot].object),delete X[ot];delete K[j]}delete Z[N],Object.keys(Z).length===0&&delete n[W]}}}function H(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Mg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Sg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==_n&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const E=x===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==un&&x!==In&&!E&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,maxSamples:C,samples:R}}function yg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new si,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,b=S*4;let y=g.clippingState||null;l.value=y,y=h(p,d,b,f);for(let C=0;C!==b;++C)y[C]=e[C];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class Il extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ti(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ms});r.uniforms.tEquirect.value=e;const a=new Ct(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=an),new dl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Pc=256,Eg=3,bg=20,Pu=256,Lu=16,wg=3,Tg=new O,Ag=new Kt;class da{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dl(1,10,null),this._boxMesh=new Ct(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tg}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Ag));const m=new dl(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Pc,Mf(t))}_fromTexture(t,e){t.mapping===_s||t.mapping===Qs?this._setSize(t.image.length===0?Pc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Lc(t,!1,!1),n=Math.log2(t)-Eg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Lc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===_s||t.mapping===Qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Rg(),this._integrationMaterial=Cg());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Lu);for(let a=0;a<=n;a++){const o=da.lodToRoughness(a,n);if(a>n-wg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Pg());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Lc(i,t,e){return new Il(i,{minFilter:Mi,generateMipmaps:t,type:Kn,colorSpace:er,depthBuffer:e})}function ur(i,t,e){return new yn({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:on,blending:ms,depthTest:!1,depthWrite:!1})}function Rg(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pu}u

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
	`)}function Cg(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Lu}},`

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
	`)}function Pg(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bg}
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
	`)}function Dc(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Nc(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Pa||f===La)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Il(p.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===Pa||f===La,_=f===_s||f===Qs;if(p||_){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new da(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new da(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Pa?d.mapping=_s:f===La&&(d.mapping=Qs),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Dg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ea("WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){const _=p.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function u(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const S=_!==null?_.array.length:m.array.length/3-1,b=m.count>=65535?du:uu,y=new b(Math.ceil(S/3)*6,1),C=y.array;if(_!==null){const x=_.array;g=_.version;for(let E=0,H=0;E<S;E+=3){const I=x[E+0],z=x[E+1],W=x[E+2];C[H++]=I,C[H++]=z,C[H++]=z,C[H++]=W,C[H++]=W,C[H++]=I}}else{g=m.version;for(let x=0,E=0;x<S;x+=3){const H=x+0,I=x+1,z=x+2;C[E++]=H,C[E++]=I,C[E++]=I,C[E++]=z,C[E++]=z,C[E++]=H}}y.version=g;const R=r.get(p);R&&t.remove(R),r.set(p,y)}function d(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Ig(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ug(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,t,e){const n=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let H=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*C*4*u),x=new lu(R,y,C,u);x.type=In,x.needsUpdate=!0;const E=b*4;for(let I=0;I<u;I++){const z=m[I],W=g[I],Z=S[I],N=y*C*4*I;for(let K=0;K<z.count;K++){const j=K*E;f===!0&&(s.fromBufferAttribute(z,K),R[N+j+0]=s.x,R[N+j+1]=s.y,R[N+j+2]=s.z,R[N+j+3]=0),p===!0&&(s.fromBufferAttribute(W,K),R[N+j+4]=s.x,R[N+j+5]=s.y,R[N+j+6]=s.z,R[N+j+7]=0),_===!0&&(s.fromBufferAttribute(Z,K),R[N+j+8]=s.x,R[N+j+9]=s.y,R[N+j+10]=s.z,R[N+j+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new Pt(y,C)},n.set(o,d),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Og(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const zg={[Wh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[Zh]:"AGX_TONE_MAPPING",[$h]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function Bg(i,t,e,n,s,r){const a=new Xn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new fn;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));const u=new Ap({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(h,u),f=new ua(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,S=null,b=[],y=!1;this.setSize=function(C,R){a.setSize(C,R),o!==null&&o.setSize(C,R),l!==null&&l.setSize(C,R);for(let x=0;x<b.length;x++){const E=b[x];E.setSize&&E.setSize(C,R)}},this.setEffects=function(C){b=C,y=b.length>0&&b[0].isRenderPass===!0;const R=a.width,x=a.height;b.length>0&&o===null&&(o=new Xn(R,x,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Xn(R,x,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&b.some(H=>H.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ms(R,x),r===!0&&(c.format=Si,c.type=vs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let H=0;H<b.length;H++){const I=b[H];I.setSize&&I.setSize(R,x),E&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(C,R){if(m||C.toneMapping===oi&&b.length===0)return!1;if(S=R,R!==null){const x=R.width,E=R.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return y===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=oi,!0},this.hasRenderPass=function(){return y},this.end=function(C,R){C.toneMapping=g,m=!0;let x=a,E=o;for(let H=0;H<b.length;H++){const I=b[H];I.enabled!==!1&&(I.render(C,E,x,R),I.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(p!==C.outputColorSpace||_!==C.toneMapping){p=C.outputColorSpace,_=C.toneMapping,u.defines={},ne.getTransfer(p)===de&&(u.defines.SRGB_TRANSFER="");const H=zg[_];H&&(u.defines[H]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(S),C.render(d,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Du=new Ze,Nu=new Ms(1,1),Iu=new mu(1),Uu=new lu,Fu=new Rf,Ou=new pu,Ic=[],Uc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),zc=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ic[s];if(r===void 0&&(r=new Float32Array(s),Ic[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ya(i,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),Oe(e,n)}}function Xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),Oe(e,n)}}function Yg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),Oe(e,n)}}function qg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Ea(i){return i.version===0&&(i.compareFunction=au,i.needsUpdate=!0),i}function ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ea(Nu):r=Du,e.setTexture2D(t||r,s)}function nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fu,s)}function ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ea(Iu):r=Ou,e.setTextureCube(t||r,s)}function sx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function rx(i){switch(i){case 5126:return kg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return Kg;case 35668:case 35672:return Zg;case 35669:case 35673:return $g;case 5125:return Jg;case 36294:return Qg;case 36295:return jg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ax(i,t){i.uniform1fv(this.addr,t)}function ox(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function cx(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dx(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fx(i,t){i.uniform1iv(this.addr,t)}function px(i,t){i.uniform2iv(this.addr,t)}function mx(i,t){i.uniform3iv(this.addr,t)}function gx(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function vx(i,t){i.uniform3uiv(this.addr,t)}function Mx(i,t){i.uniform4uiv(this.addr,t)}function Sx(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ea(Nu):a=Du;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function yx(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Fu,r[a])}function Ex(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ea(Iu):a=Ou;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function bx(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uu,r[a])}function wx(i){switch(i){case 5126:return ax;case 35664:return ox;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return dx;case 5124:case 35670:return fx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return vx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return bx}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}}class Ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}}class Rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function Bc(i,t){i.seq.push(t),i.map[t.id]=t}function Cx(i,t,e){const n=i.name,s=n.length;for(ao.lastIndex=0;;){const r=ao.exec(n),a=ao.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bc(e,c===void 0?new Tx(o,i,t):new Ax(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Rx(o),Bc(e,u)),e=u}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Cx(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function kc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Px=37297;let Lx=0;function Dx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Hc=new qt;function Nx(i){ne._getMatrix(Hc,ne.workingColorSpace,i);const t=`mat3( ${Hc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case ca:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dx(i.getShaderSource(t),o)}else return r}function Ix(i,t){const e=Nx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ux={[Wh]:"Linear",[Xh]:"Reinhard",[Yh]:"Cineon",[qh]:"ACESFilmic",[Zh]:"AgX",[$h]:"Neutral",[Kh]:"Custom"};function Fx(i,t){const e=Ux[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new O;function Ox(){ne.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Bx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vs(i){return i!==""}function Vc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(Hx,Gx)}function Gx(i,t){const e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return pl(e)}const Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(Vx,Wx)}function Wx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Xx={[$r]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function Yx(i){return Xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qx={[Qs]:"ENVMAP_MODE_REFRACTION"};function Kx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zx={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[nf]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function $x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zx[i.combine]||"ENVMAP_BLENDING_NONE"}function Jx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Yx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Kx(e),u=$x(e),d=zx(e),f=Bx(r),p=s.createProgram();let _,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Vs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(_=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Ix("linearToOutputTexel",e.outputColorSpace),Ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=pl(a),a=Vc(a,e),a=Wc(a,e),o=pl(o),o=Vc(o,e),o=Wc(o,e),a=Xc(a),o=Xc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+_+a,b=g+m+o,y=kc(s,s.VERTEX_SHADER,S),C=kc(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,C),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(p)||"",W=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(C)||"",N=z.trim(),K=W.trim(),j=Z.trim();let X=!0,ot=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,C);else{const q=Gc(s,y,"vertex"),et=Gc(s,C,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+q+`
`+et)}else N!==""?Vt("WebGLProgram: Program Info Log:",N):(K===""||j==="")&&(ot=!1);ot&&(I.diagnostics={runnable:X,programLog:N,vertexShader:{log:K,prefix:_},fragmentShader:{log:j,prefix:m}})}s.deleteShader(y),s.deleteShader(C),x=new ia(s,p),E=kx(s,p)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(p,Px)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=C,this}let Qx=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new t_(t),e.set(t,n)),n}}class t_{constructor(t){this.id=Qx++,this.code=t,this.usedTimes=0}}function e_(i){return i===ki||i===oa||i===la}function n_(i,t,e,n,s,r){const a=new Cl,o=new jx,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,E,H,I,z,W){const Z=I.fog,N=z.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||K,j),ot=d[x.type];let q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));const et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=et!==void 0?et.length:0;let wt=0;N.morphAttributes.position!==void 0&&(wt=1),N.morphAttributes.normal!==void 0&&(wt=2),N.morphAttributes.color!==void 0&&(wt=3);let Nt,Q,yt,At;if(ot){const vt=Vn[ot];Nt=vt.vertexShader,Q=vt.fragmentShader}else{Nt=x.vertexShader,Q=x.fragmentShader;const vt=o.getVertexShaderStage(x),Qt=o.getFragmentShaderStage(x);o.update(x,vt,Qt),yt=vt.id,At=Qt.id}const Ft=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Wt=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,Bt=!!x.map,se=!!x.matcap,te=!!X,Gt=te&&X.isPMREMTexture===!0,ve=!!x.aoMap,Ae=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,ue=!!x.displacementMap,Ce=!!x.emissiveMap,ye=!!x.metalnessMap,sn=!!x.roughnessMap,Ve=x.anisotropy>0,F=x.clearcoat>0,Je=x.diffuseRoughness>0,ce=x.dispersion>0,fe=x.retroreflectivity>0,mt=x.iridescence>0,Pe=x.sheen>0,Ot=x.transmission>0,Ht=Ve&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,k=F&&!!x.clearcoatRoughnessMap,it=Je&&!!x.diffuseRoughnessMap,tt=mt&&!!x.iridescenceMap,ut=mt&&!!x.iridescenceThicknessMap,gt=Pe&&!!x.sheenColorMap,Y=Pe&&!!x.sheenRoughnessMap,J=!!x.specularMap,ft=!!x.specularColorMap,P=!!x.specularIntensityMap,$=Ot&&!!x.transmissionMap,V=Ot&&!!x.thicknessMap,dt=!!x.gradientMap,ct=!!x.alphaMap,pt=x.alphaTest>0,It=!!x.alphaHash,Xt=!!x.extensions;let at=oi;x.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(at=i.toneMapping);const Ut=Gt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Yt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Nt,fragmentShader:Q,defines:x.defines,customVertexShaderID:yt,customFragmentShaderID:At,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&z.instanceColor!==null,instancingMorph:Wt&&z.morphTexture!==null,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:se,envMap:te,envMapMode:te&&X.mapping,envMapPMREM:Gt,envMapMaxLod:Gt?Ut.length-1:null,envMapSize:Gt?Ut[0].width:null,aoMap:ve,lightMap:Ae,bumpMap:Ge,normalMap:xe,displacementMap:ue,emissiveMap:Ce,normalMapObjectSpace:xe&&x.normalMapType===of,normalMapTangentSpace:xe&&x.normalMapType===ll,packedNormalMap:xe&&x.normalMapType===ll&&e_(x.normalMap.format),metalnessMap:ye,roughnessMap:sn,anisotropy:Ve,anisotropyMap:Ht,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:Je,diffuseRoughnessMap:it,dispersion:ce,retroreflection:fe,iridescence:mt,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:Pe,sheenColorMap:gt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:ft,specularIntensityMap:P,transmission:Ot,transmissionMap:$,thicknessMap:V,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Xs&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:pt,alphaHash:It,combine:x.combine,mapUv:Bt&&f(x.map.channel),aoMapUv:ve&&f(x.aoMap.channel),lightMapUv:Ae&&f(x.lightMap.channel),bumpMapUv:Ge&&f(x.bumpMap.channel),normalMapUv:xe&&f(x.normalMap.channel),displacementMapUv:ue&&f(x.displacementMap.channel),emissiveMapUv:Ce&&f(x.emissiveMap.channel),metalnessMapUv:ye&&f(x.metalnessMap.channel),roughnessMapUv:sn&&f(x.roughnessMap.channel),anisotropyMapUv:Ht&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:ft&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:V&&f(x.thicknessMap.channel),alphaMapUv:ct&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xe||Ve),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Bt||ct),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:wt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===de,decodeVideoTextureEmissive:Ce&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&x.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function _(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)E.push(H),E.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(m(E,x),g(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const E=d[x.type];let H;if(E){const I=Vn[E];H=bp.clone(I.uniforms)}else H=x.uniforms;return H}function b(x,E){let H=h.get(E);return H!==void 0?++H.usedTimes:(H=new Jx(i,E,x,s),c.push(H),h.set(E,H)),H}function y(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function R(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:b,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:R}}function i_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);const b=o(d,f,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(d,f,p,_,m,g){const S=o(d,f,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||s_),n.length>1&&n.sort(f||qc),s.length>1&&s.sort(f||qc)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function r_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Kt};break;case"SpotLight":e={position:new O,direction:new O,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function o_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let l_=0;function c_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i){const t=new a_,e=o_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,S=0,b=0,y=0,C=0,R=0,x=0,E=0,H=0,I=0;c.sort(c_);for(let W=0,Z=c.length;W<Z;W++){const N=c[W],K=N.color,j=N.intensity,X=N.distance;let ot=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ki?ot=N.shadow.map.texture:ot=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=K.r*j,u+=K.g*j,d+=K.b*j;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],j);I++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,rt=e.get(N);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[p]=rt,n.sunShadowMap[p]=ot;const wt=et.getViewportCount();for(let Nt=0;Nt<wt;Nt++)n.sunShadowMatrix[_+Nt]=et.getMatrix(Nt),n.sunShadowCascade[_+Nt]=et._cascadeData[Nt];_+=wt,p++}n.sun[f]=q,f++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const et=N.shadow,rt=e.get(N);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=N.shadow.matrix,C++}n.directional[m]=q,m++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(K).multiplyScalar(j),q.distance=X,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[S]=q;const et=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,et.updateMatrices(N),N.castShadow&&H++),n.spotLightMatrix[S]=et.matrix,N.castShadow){const rt=e.get(N);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.spotShadow[S]=rt,n.spotShadowMap[S]=ot,x++}S++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(K).multiplyScalar(j),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=q,b++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const et=N.shadow,rt=e.get(N);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,n.pointShadow[g]=rt,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=N.shadow.matrix,R++}n.point[g]=q,g++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(j),q.groundColor.copy(N.groundColor).multiplyScalar(j),n.hemi[y]=q,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const z=n.hash;(z.sunLength!==f||z.directionalLength!==m||z.pointLength!==g||z.spotLength!==S||z.rectAreaLength!==b||z.hemiLength!==y||z.numSunShadows!==p||z.numDirectionalShadows!==C||z.numPointShadows!==R||z.numSpotShadows!==x||z.numSpotMaps!==E||z.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+E-H,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=I,z.sunLength=f,z.directionalLength=m,z.pointLength=g,z.spotLength=S,z.rectAreaLength=b,z.hemiLength=y,z.numSunShadows=p,z.numDirectionalShadows=C,z.numPointShadows=R,z.numSpotShadows=x,z.numSpotMaps=E,z.numLightProbes=I,n.version=l_++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let S=0,b=c.length;S<b;S++){const y=c[S];if(y.isSunLight){const C=n.sun[u];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),u++}else if(y.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(y.isSpotLight){const C=n.spot[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Zc(i){const t=new h_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function u_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zc(i),t.set(s,[o])):r>=a.length?(o=new Zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
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
}`,p_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],m_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],$c=new oe,zs=new O,oo=new O;function g_(i,t,e){let n=new ir;const s=new Pt,r=new Pt,a=new Me,o=new Rp,l=new Cp,c={},h=e.maxTextureSize,u={[Bi]:on,[on]:Bi,[xn]:xn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new fn;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let g=this.type;this.render=function(R,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Od&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);const H=i.getRenderTarget(),I=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ms),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=g!==this.type;Z&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(K=>K.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,K=R.length;N<K;N++){const j=R[N],X=j.shadow;if(X===void 0){Vt("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ot=X.getFrameExtents();s.multiply(ot),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,X.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||Z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Hs){if(j.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Xn(s.x,s.y,{format:ki,type:Kn,minFilter:an,magFilter:an,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new Ms(s.x,s.y,In),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=bi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_e,X.map.depthTexture.magFilter=_e}else j.isPointLight?(X.map=new Il(s.x),X.map.depthTexture=new mu(s.x,qn)):(X.map=new Xn(s.x,s.y),X.map.depthTexture=new Ms(s.x,s.y,qn)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=bi,this.type===$r?(X.map.depthTexture.compareFunction=q?ru:su,X.map.depthTexture.minFilter=an,X.map.depthTexture.magFilter=an):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_e,X.map.depthTexture.magFilter=_e);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();j.isPointLight!==!0&&X.updateMatrices(j,E);const rt=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:E.layers;for(let wt=0;wt<et;wt++){const Nt=X.getCamera(wt);if(j.isPointLight){const Q=X.camera,yt=X.matrix,At=j.distance||Q.far;At!==Q.far&&(Q.far=At,Q.updateProjectionMatrix()),zs.setFromMatrixPosition(j.matrixWorld),Q.position.copy(zs),oo.copy(Q.position),oo.add(p_[wt]),Q.up.copy(m_[wt]),Q.lookAt(oo),Q.updateMatrixWorld(),yt.makeTranslation(-zs.x,-zs.y,-zs.z),$c.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),X._frustum.setFromProjectionMatrix($c,Q.coordinateSystem,Q.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(X.map),i.clear());const Q=X.getViewport(wt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),W.viewport(a)}n=X.getFrustum(wt),y(x,E,Nt,j,rt,this.type)}X.isPointLightShadow!==!0&&this.type===Hs&&S(X,E),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(H,I,z)};function S(R,x){const E=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Xn(s.x,s.y,{format:ki,type:Kn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,E,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,E,f,_,null)}function b(R,x,E,H){let I=null;const z=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)I=z;else if(I=E.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const W=I.uuid,Z=x.uuid;let N=c[W];N===void 0&&(N={},c[W]=N);let K=N[Z];K===void 0&&(K=I.clone(),N[Z]=K,x.addEventListener("dispose",C)),I=K}if(I.visible=x.visible,I.wireframe=x.wireframe,H===Hs?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:u[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const W=i.properties.get(I);W.light=E}return I}function y(R,x,E,H,I,z){if(R.visible===!1)return;if(R.layers.test(I)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===Hs)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const N=t.update(R),K=R.material;if(Array.isArray(K)){const j=N.groups;for(let X=0,ot=j.length;X<ot;X++){const q=j[X],et=K[q.materialIndex];if(et&&et.visible){const rt=b(R,et,H,z);R.onBeforeShadow(i,R,x,E,N,rt,q),i.renderBufferDirect(E,null,N,rt,R,q),R.onAfterShadow(i,R,x,E,N,rt,q)}}}else if(K.visible){const j=b(R,K,H,z);R.onBeforeShadow(i,R,x,E,N,j,null),i.renderBufferDirect(E,null,N,j,R,null),R.onAfterShadow(i,R,x,E,N,j,null)}}const Z=R.children;for(let N=0,K=Z.length;N<K;N++)y(Z[N],x,E,H,I,z)}function C(R){R.target.removeEventListener("dispose",C);for(const E in c){const H=c[E],I=R.target.uuid;I in H&&(H[I].dispose(),delete H[I])}}}function x_(i,t){function e(){let P=!1;const $=new Me;let V=null;const dt=new Me(0,0,0,0);return{setMask:function(ct){V!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){P=ct},setClear:function(ct,pt,It,Xt,at){at===!0&&(ct*=Xt,pt*=Xt,It*=Xt),$.set(ct,pt,It,Xt),dt.equals($)===!1&&(i.clearColor(ct,pt,It,Xt),dt.copy($))},reset:function(){P=!1,V=null,dt.set(-1,0,0,0)}}}function n(){let P=!1,$=!1,V=null,dt=null,ct=null;return{setReversed:function(pt){if($!==pt){const It=t.get("EXT_clip_control");pt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),$=pt;const Xt=ct;ct=null,this.setClear(Xt)}},getReversed:function(){return $},setTest:function(pt){pt?Mt(i.DEPTH_TEST):Wt(i.DEPTH_TEST)},setMask:function(pt){V!==pt&&!P&&(i.depthMask(pt),V=pt)},setFunc:function(pt){if($&&(pt=_f[pt]),dt!==pt){switch(pt){case bo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=pt}},setLocked:function(pt){P=pt},setClear:function(pt){ct!==pt&&(ct=pt,$&&(pt=1-pt),i.clearDepth(pt))},reset:function(){P=!1,V=null,dt=null,ct=null,$=!1}}}function s(){let P=!1,$=null,V=null,dt=null,ct=null,pt=null,It=null,Xt=null,at=null;return{setTest:function(Ut){P||(Ut?Mt(i.STENCIL_TEST):Wt(i.STENCIL_TEST))},setMask:function(Ut){$!==Ut&&!P&&(i.stencilMask(Ut),$=Ut)},setFunc:function(Ut,Yt,vt){(V!==Ut||dt!==Yt||ct!==vt)&&(i.stencilFunc(Ut,Yt,vt),V=Ut,dt=Yt,ct=vt)},setOp:function(Ut,Yt,vt){(pt!==Ut||It!==Yt||Xt!==vt)&&(i.stencilOp(Ut,Yt,vt),pt=Ut,It=Yt,Xt=vt)},setLocked:function(Ut){P=Ut},setClear:function(Ut){at!==Ut&&(i.clearStencil(Ut),at=Ut)},reset:function(){P=!1,$=null,V=null,dt=null,ct=null,pt=null,It=null,Xt=null,at=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,b=null,y=null,C=null,R=null,x=null,E=new Kt(0,0,0),H=0,I=!1,z=null,W=null,Z=null,N=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ot=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ot>=1):q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ot>=2);let et=null,rt={};const wt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Q=new Me().fromArray(wt),yt=new Me().fromArray(Nt);function At(P,$,V,dt){const ct=new Uint8Array(4),pt=i.createTexture();i.bindTexture(P,pt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<V;It++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D($+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return pt}const Ft={};Ft[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Mt(i.DEPTH_TEST),a.setFunc(Js),Ge(!1),xe(Vl),Mt(i.CULL_FACE),ve(ms);function Mt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Wt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Se(P,$){return d[P]!==$?(i.bindFramebuffer(P,$),d[P]=$,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Bt(P,$){let V=p,dt=!1;if(P){V=f.get($),V===void 0&&(V=[],f.set($,V));const ct=P.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,It=ct.length;pt<It;pt++)V[pt]=i.COLOR_ATTACHMENT0+pt;V.length=ct.length,dt=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,dt=!0);dt&&i.drawBuffers(V)}function se(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const te={[hs]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};te[Hd]=i.MIN,te[Gd]=i.MAX;const Gt={[Vd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[Hh]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Yd]:i.ONE_MINUS_SRC_COLOR,[Gh]:i.ONE_MINUS_SRC_ALPHA,[$d]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(P,$,V,dt,ct,pt,It,Xt,at,Ut){if(P===ms){m===!0&&(Wt(i.BLEND),m=!1);return}if(m===!1&&(Mt(i.BLEND),m=!0),P!==zd){if(P!==g||Ut!==I){if((S!==hs||C!==hs)&&(i.blendEquation(i.FUNC_ADD),S=hs,C=hs),Ut)switch(P){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",P);break}else switch(P){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",P);break}b=null,y=null,R=null,x=null,E.set(0,0,0),H=0,g=P,I=Ut}return}ct=ct||$,pt=pt||V,It=It||dt,($!==S||ct!==C)&&(i.blendEquationSeparate(te[$],te[ct]),S=$,C=ct),(V!==b||dt!==y||pt!==R||It!==x)&&(i.blendFuncSeparate(Gt[V],Gt[dt],Gt[pt],Gt[It]),b=V,y=dt,R=pt,x=It),(Xt.equals(E)===!1||at!==H)&&(i.blendColor(Xt.r,Xt.g,Xt.b,at),E.copy(Xt),H=at),g=P,I=!1}function Ae(P,$){P.side===xn?Wt(i.CULL_FACE):Mt(i.CULL_FACE);let V=P.side===on;$&&(V=!V),Ge(V),P.blending===Xs&&P.transparent===!1?ve(ms):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const dt=P.stencilWrite;o.setTest(dt),dt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ce(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):Wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){z!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),z=P)}function xe(P){P!==Ud?(Mt(i.CULL_FACE),P!==W&&(P===Vl?i.cullFace(i.BACK):P===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Wt(i.CULL_FACE),W=P}function ue(P){P!==Z&&(X&&i.lineWidth(P),Z=P)}function Ce(P,$,V){P?(Mt(i.POLYGON_OFFSET_FILL),(N!==$||K!==V)&&(N=$,K=V,a.getReversed()&&($=-$,V=-V),i.polygonOffset($,V))):Wt(i.POLYGON_OFFSET_FILL)}function ye(P){P?Mt(i.SCISSOR_TEST):Wt(i.SCISSOR_TEST)}function sn(P){P===void 0&&(P=i.TEXTURE0+j-1),et!==P&&(i.activeTexture(P),et=P)}function Ve(P,$,V){V===void 0&&(et===null?V=i.TEXTURE0+j-1:V=et);let dt=rt[V];dt===void 0&&(dt={type:void 0,texture:void 0},rt[V]=dt),(dt.type!==P||dt.texture!==$)&&(et!==V&&(i.activeTexture(V),et=V),i.bindTexture(P,$||Ft[P]),dt.type=P,dt.texture=$)}function F(){const P=rt[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function fe(){try{i.texSubImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function mt(){try{i.texSubImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Pe(){try{i.compressedTexSubImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function Ht(){try{i.texStorage2D(...arguments)}catch(P){le("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){le("WebGLState:",P)}}function M(){try{i.texImage2D(...arguments)}catch(P){le("WebGLState:",P)}}function k(){try{i.texImage3D(...arguments)}catch(P){le("WebGLState:",P)}}function it(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function tt(P,$){u[P]!==$&&(i.pixelStorei(P,$),u[P]=$)}function ut(P){Q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function gt(P){yt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),yt.copy(P))}function Y(P,$){let V=c.get($);V===void 0&&(V=new WeakMap,c.set($,V));let dt=V.get(P);dt===void 0&&(dt=i.getUniformBlockIndex($,P.name),i.uniformBlockBinding($,dt,dt),V.set(P,dt))}function J(P,$,V){const ct=c.get($).get(P);l[ct]!==V&&(i.bindBufferBase(i.UNIFORM_BUFFER,ct,V),l[ct]=V)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,rt={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,b=null,y=null,C=null,R=null,x=null,E=new Kt(0,0,0),H=0,I=!1,z=null,W=null,Z=null,N=null,K=null,Q.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Mt,disable:Wt,bindFramebuffer:Se,drawBuffers:Bt,useProgram:se,setBlending:ve,setMaterial:Ae,setFlipSided:Ge,setCullFace:xe,setLineWidth:ue,setPolygonOffset:Ce,setScissorTest:ye,activeTexture:sn,bindTexture:Ve,unbindTexture:F,compressedTexImage2D:Je,compressedTexImage3D:ce,texImage2D:M,texImage3D:k,pixelStorei:tt,getParameter:it,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Ht,texStorage3D:A,texSubImage2D:fe,texSubImage3D:mt,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ot,scissor:ut,viewport:gt,reset:ft}}function __(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):ha("canvas")}function S(A,M,k){let it=1;const tt=Ht(A);if((tt.width>k||tt.height>k)&&(it=k/Math.max(tt.width,tt.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ut=Math.floor(it*tt.width),gt=Math.floor(it*tt.height);d===void 0&&(d=g(ut,gt));const Y=M?g(ut,gt):d;return Y.width=ut,Y.height=gt,Y.getContext("2d").drawImage(A,0,0,ut,gt),Vt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ut+"x"+gt+")."),Y}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function b(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,M,k,it,tt,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;it&&(gt=t.get("EXT_texture_norm16"),gt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&gt&&(Y=gt.R16_EXT),k===i.SHORT&&gt&&(Y=gt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),M===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&gt&&(Y=gt.RG16_EXT),k===i.SHORT&&gt&&(Y=gt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&gt&&(Y=gt.RGB16_EXT),k===i.SHORT&&gt&&(Y=gt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),M===i.RGBA){const J=ut?ca:ne.getTransfer(tt);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=J===de?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&gt&&(Y=gt.RGBA16_EXT),k===i.SHORT&&gt&&(Y=gt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(A,M){let k;return A?M===null||M===qn||M===vs?k=i.DEPTH24_STENCIL8:M===In?k=i.DEPTH32F_STENCIL8:M===tr&&(k=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===qn||M===vs?k=i.DEPTH_COMPONENT24:M===In?k=i.DEPTH_COMPONENT32F:M===tr&&(k=i.DEPTH_COMPONENT16),k}function E(A,M){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==_e&&A.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function H(A){const M=new WeakRef(A);n.get(A).__ref=M,p.add(M),_.register(A,M,M)}function I(A){const M=n.get(A).__ref;M!==void 0&&(p.delete(M),_.unregister(M))}function z(A){Z(A.target)}function W(A){N(A.target)}function Z(A){A.removeEventListener("dispose",z),I(A),j(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function N(A){A.removeEventListener("dispose",W),I(A),ot(A)}function K(){for(const A of p){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):Z(M))}p.clear(),u.clear()}function j(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,it=f.get(k);if(it){const tt=it[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&X(A),Object.keys(it).length===0&&f.delete(k)}n.remove(A)}function X(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const k=A.source,it=f.get(k);delete it[M.__cacheKey],a.memory.textures--}function ot(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&Z(k),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ut=0;ut<M.__webglFramebuffer[tt].length;ut++)i.deleteFramebuffer(M.__webglFramebuffer[tt][ut]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const it=A.textures;for(let tt=0,ut=it.length;tt<ut;tt++){const gt=n.get(it[tt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(it[tt])}n.remove(A)}let q=0;function et(){q=0}function rt(){return q}function wt(A){q=A}function Nt(){const A=q;return A>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function Q(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function yt(A,M){const k=n.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const it=A.image;if(it===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(k,A,M);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function At(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ae(k,A,M);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function Ft(A,M){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Ae(k,A,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function Mt(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Ge(k,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const Wt={[js]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},Se={[_e]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},Bt={[cf]:i.NEVER,[au]:i.ALWAYS,[hf]:i.LESS,[su]:i.LEQUAL,[uf]:i.EQUAL,[ru]:i.GEQUAL,[df]:i.GREATER,[ff]:i.NOTEQUAL};function se(A,M){if(M.type===In&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Da||M.magFilter===vr||M.magFilter===Mi||M.minFilter===an||M.minFilter===Da||M.minFilter===vr||M.minFilter===Mi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Wt[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Wt[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Wt[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Se[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_e||M.minFilter!==vr&&M.minFilter!==Mi||M.type===In&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function te(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",z),H(M));const it=M.source;let tt=f.get(it);tt===void 0&&(tt={},f.set(it,tt));const ut=Q(M);if(ut!==A.__cacheKey){tt[ut]===void 0&&(tt[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),tt[ut].usedTimes++;const gt=tt[A.__cacheKey];gt!==void 0&&(tt[A.__cacheKey].usedTimes--,gt.usedTimes===0&&X(M)),A.__cacheKey=ut,A.__webglTexture=tt[ut].texture}return k}function Gt(A,M,k){return Math.floor(Math.floor(A/k)/M)}function ve(A,M,k,it){const ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,it,M.data);else{ut.sort((P,$)=>P.start-$.start);let gt=0;for(let P=1;P<ut.length;P++){const $=ut[gt],V=ut[P],dt=$.start+$.count,ct=Gt(V.start,M.width,4),pt=Gt($.start,M.width,4);V.start<=dt+1&&ct===pt&&Gt(V.start+V.count-1,M.width,4)===ct?$.count=Math.max($.count,V.start+V.count-$.start):(++gt,ut[gt]=V)}ut.length=gt+1;const Y=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let P=0,$=ut.length;P<$;P++){const V=ut[P],dt=Math.floor(V.start/4),ct=Math.ceil(V.count/4),pt=dt%M.width,It=Math.floor(dt/M.width),Xt=ct,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,It),e.texSubImage2D(i.TEXTURE_2D,0,pt,It,Xt,at,k,it,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function Ae(A,M,k){let it=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=i.TEXTURE_3D);const tt=te(A,M),ut=M.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+k);const gt=n.get(ut);if(ut.version!==gt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const at=ne.getPrimaries(ne.workingColorSpace),Ut=M.colorSpace===_i?null:ne.getPrimaries(M.colorSpace),Yt=M.colorSpace===_i||at===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let J=S(M.image,!1,s.maxTextureSize);J=Ot(M,J);const ft=r.convert(M.format,M.colorSpace),P=r.convert(M.type);let $=R(M.internalFormat,ft,P,M.normalized,M.colorSpace,M.isVideoTexture);se(it,M);let V;const dt=M.mipmaps,ct=M.isVideoTexture!==!0,pt=gt.__version===void 0||tt===!0,It=ut.dataReady,Xt=E(M,J);if(M.isDepthTexture)$=x(M.format===Si,M.type),pt&&(ct?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ft,P,null));else if(M.isDataTexture)if(dt.length>0){ct&&pt&&e.texStorage2D(i.TEXTURE_2D,Xt,$,dt[0].width,dt[0].height);for(let at=0,Ut=dt.length;at<Ut;at++)V=dt[at],ct?It&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,V.width,V.height,ft,P,V.data):e.texImage2D(i.TEXTURE_2D,at,$,V.width,V.height,0,ft,P,V.data);M.generateMipmaps=!1}else ct?(pt&&e.texStorage2D(i.TEXTURE_2D,Xt,$,J.width,J.height),It&&ve(M,J,ft,P)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ft,P,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ct&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,$,dt[0].width,dt[0].height,J.depth);for(let at=0,Ut=dt.length;at<Ut;at++)if(V=dt[at],M.format!==_n)if(ft!==null)if(ct){if(It)if(M.layerUpdates.size>0){const Yt=Cc(V.width,V.height,M.format,M.type);for(const vt of M.layerUpdates){const Qt=V.data.subarray(vt*Yt/V.data.BYTES_PER_ELEMENT,(vt+1)*Yt/V.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,vt,V.width,V.height,1,ft,Qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,V.width,V.height,J.depth,ft,V.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,$,V.width,V.height,J.depth,0,V.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?It&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,V.width,V.height,J.depth,ft,P,V.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,$,V.width,V.height,J.depth,0,ft,P,V.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ct&&pt&&e.texStorage2D(i.TEXTURE_2D,Xt,$,dt[0].width,dt[0].height);for(let at=0,Ut=dt.length;at<Ut;at++)V=dt[at],M.format!==_n?ft!==null?ct?It&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,V.width,V.height,ft,V.data):e.compressedTexImage2D(i.TEXTURE_2D,at,$,V.width,V.height,0,V.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?It&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,V.width,V.height,ft,P,V.data):e.texImage2D(i.TEXTURE_2D,at,$,V.width,V.height,0,ft,P,V.data)}else if(M.isDataArrayTexture)if(ct){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,$,J.width,J.height,J.depth),It)if(M.layerUpdates.size>0){const at=Cc(J.width,J.height,M.format,M.type);for(const Ut of M.layerUpdates){const Yt=J.data.subarray(Ut*at/J.data.BYTES_PER_ELEMENT,(Ut+1)*at/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,J.width,J.height,1,ft,P,Yt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,P,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,ft,P,J.data);else if(M.isData3DTexture)ct?(pt&&e.texStorage3D(i.TEXTURE_3D,Xt,$,J.width,J.height,J.depth),It&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,P,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,ft,P,J.data);else if(M.isFramebufferTexture){if(pt)if(ct)e.texStorage2D(i.TEXTURE_2D,Xt,$,J.width,J.height);else{let at=J.width,Ut=J.height;for(let Yt=0;Yt<Xt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,$,at,Ut,0,ft,P,null),at>>=1,Ut>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),J.parentNode!==at){at.appendChild(J),u.add(M),at.onpaint=Ut=>{const Yt=Ut.changedElements;for(const vt of u)Yt.includes(vt.image)&&(vt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Yt=i.RGBA,vt=i.RGBA,Qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,vt,Qt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ct&&pt){const at=Ht(dt[0]);e.texStorage2D(i.TEXTURE_2D,Xt,$,at.width,at.height)}for(let at=0,Ut=dt.length;at<Ut;at++)V=dt[at],ct?It&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ft,P,V):e.texImage2D(i.TEXTURE_2D,at,$,ft,P,V);M.generateMipmaps=!1}else if(ct){if(pt){const at=Ht(J);e.texStorage2D(i.TEXTURE_2D,Xt,$,at.width,at.height)}It&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,P,J)}else e.texImage2D(i.TEXTURE_2D,0,$,ft,P,J);b(M)&&M.mipmapsAutoUpdate===!0&&y(it),gt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ge(A,M,k){if(M.image.length!==6)return;const it=te(A,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const ut=n.get(tt);if(tt.version!==ut.__version||it===!0){e.activeTexture(i.TEXTURE0+k);const gt=ne.getPrimaries(ne.workingColorSpace),Y=M.colorSpace===_i?null:ne.getPrimaries(M.colorSpace),J=M.colorSpace===_i||gt===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ft=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,$=[];for(let vt=0;vt<6;vt++)!ft&&!P?$[vt]=S(M.image[vt],!0,s.maxCubemapSize):$[vt]=P?M.image[vt].image:M.image[vt],$[vt]=Ot(M,$[vt]);const V=$[0],dt=r.convert(M.format,M.colorSpace),ct=r.convert(M.type);let pt=R(M.internalFormat,dt,ct,M.normalized,M.colorSpace);const It=M.isVideoTexture!==!0,Xt=ut.__version===void 0||it===!0,at=tt.dataReady;let Ut=E(M,V);se(i.TEXTURE_CUBE_MAP,M);let Yt;if(M.isDepthTexture){if(pt=x(M.format===Si,M.type),Xt)if(It)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,pt,V.width,V.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pt,V.width,V.height,0,dt,ct,null)}else if(ft){It&&Xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,pt,V.width,V.height);for(let vt=0;vt<6;vt++){Yt=$[vt].mipmaps;for(let Qt=0;Qt<Yt.length;Qt++){const pe=Yt[Qt];M.format!==_n?dt!==null?It?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,0,0,pe.width,pe.height,dt,pe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,pt,pe.width,pe.height,0,pe.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,0,0,pe.width,pe.height,dt,ct,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt,pt,pe.width,pe.height,0,dt,ct,pe.data)}}}else{if(Yt=M.mipmaps,It&&Xt){Yt.length>0&&Ut++;const vt=Ht($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,pt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(P){It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,$[vt].width,$[vt].height,dt,ct,$[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pt,$[vt].width,$[vt].height,0,dt,ct,$[vt].data);for(let Qt=0;Qt<Yt.length;Qt++){const En=Yt[Qt].image[vt].image;It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,0,0,En.width,En.height,dt,ct,En.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,pt,En.width,En.height,0,dt,ct,En.data)}}else{It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,ct,$[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,pt,dt,ct,$[vt]);for(let Qt=0;Qt<Yt.length;Qt++){const pe=Yt[Qt];It?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,0,0,dt,ct,pe.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Qt+1,pt,dt,ct,pe.image[vt])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ut.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function xe(A,M,k,it,tt,ut){const gt=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),J=R(k.internalFormat,gt,Y,k.normalized,k.colorSpace),ft=n.get(M),P=n.get(k);if(P.__renderTarget=M,!ft.__hasExternalTextures){const $=Math.max(1,M.width>>ut),V=Math.max(1,M.height>>ut);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ut,J,$,V,M.depth,0,gt,Y,null):e.texImage2D(tt,ut,J,$,V,0,gt,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,P.__webglTexture,0,fe(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,P.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(A,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const it=M.depthTexture,tt=it&&it.isDepthTexture?it.type:null,ut=x(M.stencilBuffer,tt),gt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(M),ut,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(M),ut,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ut,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,A)}else{const it=M.textures;for(let tt=0;tt<it.length;tt++){const ut=it[tt],gt=r.convert(ut.format,ut.colorSpace),Y=r.convert(ut.type),J=R(ut.internalFormat,gt,Y,ut.normalized,ut.colorSpace);mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(M),J,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(M),J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(A,M,k){const it=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(M.depthTexture);tt.__renderTarget=M;const ut=it?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||ut.width!==M.width||ut.height!==M.height)&&(ut.width=M.width,ut.height=M.height,M.depthTexture.needsUpdate=!0),it?Mt(M.depthTexture,0):yt(M.depthTexture,0);const gt=tt.__webglTexture,Y=fe(M),J=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ft=M.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===bi)mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,J,gt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ft,J,gt,0);else if(M.depthTexture.format===Si)mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,J,gt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ft,J,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const it=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",tt)};it.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=it}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let it=0;it<6;it++)Ce(M.__webglFramebuffer[it],A,it);else A.texture.mipmaps.length>0?Ce(M.__webglFramebuffer[0],A,0):Ce(M.__webglFramebuffer,A,0);else if(k){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=i.createRenderbuffer(),ue(M.__webglDepthbuffer[it],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ue(M.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(A,M,k){const it=n.get(A);M!==void 0&&xe(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ye(A)}function Ve(A){const M=A.texture,k=n.get(A),it=n.get(M);A.addEventListener("dispose",W),H(A);const tt=A.textures,ut=A.isWebGLCubeRenderTarget===!0,gt=tt.length>1;if(gt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=M.version,a.memory.textures++),ut){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let J=0;J<M.mipmaps.length;J++)k.__webglFramebuffer[Y][J]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Y=0,J=tt.length;Y<J;Y++){const ft=n.get(tt[Y]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<tt.length;Y++){const J=tt[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ft=r.convert(J.format,J.colorSpace),P=r.convert(J.type),$=R(J.internalFormat,ft,P,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),V=fe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),se(i.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)xe(k.__webglFramebuffer[Y][J],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else xe(k.__webglFramebuffer[Y],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Y=0,J=tt.length;Y<J;Y++){const ft=tt[Y],P=n.get(ft);let $=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,P.__webglTexture),se($,ft),xe(k.__webglFramebuffer,A,ft,i.COLOR_ATTACHMENT0+Y,$,0),b(ft)&&y($)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,it.__webglTexture),se(Y,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)xe(k.__webglFramebuffer[J],A,M,i.COLOR_ATTACHMENT0,Y,J);else xe(k.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Y,0);b(M)?y(Y):M.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ye(A)}function F(A){const M=A.textures;for(let k=0,it=M.length;k<it;k++){const tt=M[k];if(b(tt)&&tt.mipmapsAutoUpdate===!0){const ut=C(A),gt=n.get(tt).__webglTexture;e.bindTexture(ut,gt),y(ut),e.unbindTexture()}}}const Je=[];function ce(A){if(A.samples>0){if(mt(A)===!1){const M=A.textures,k=A.width,it=A.height;let tt=i.COLOR_BUFFER_BIT;const ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),Y=M.length>1;if(Y)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);const P=n.get(M[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,k,it,0,0,k,it,tt,i.NEAREST),l===!0&&(Je.length=0,Je.push(i.COLOR_ATTACHMENT0+ft),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Je.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ft]);const P=n.get(M[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function fe(A){return Math.min(s.maxSamples,A.samples)}function mt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pe(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Ot(A,M){const k=A.colorSpace,it=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==er&&k!==_i&&(ne.getTransfer(k)===de?(it!==_n||tt!==un)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",k)),M}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=et,this.getTextureUnits=rt,this.setTextureUnits=wt,this.setTexture2D=yt,this.setTexture2DArray=At,this.setTexture3D=Ft,this.setTextureCube=Mt,this.rebindTextures=sn,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=mt,this.dispose=K}function v_(i,t){function e(n,s=_i){let r;const a=ne.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===jh)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===_n)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===Jr||n===Qr||n===jr||n===ta)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===No||n===Io||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===oa||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===Oo)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bo)return r.COMPRESSED_R11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===Ko||n===Zo||n===$o||n===Jo||n===Qo||n===jo||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===al||n===la||n===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new y_,g={},S=e.getContextAttributes();let b=null,y=null;const C=[],R=[],x=new Pt;let E=null,H=null;const I=new Dn;I.viewport=new Me;const z=new Dn;z.viewport=new Me;const W=[I,z],Z=new Ip;let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let yt=C[Q];return yt===void 0&&(yt=new Ha,C[Q]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(Q){let yt=C[Q];return yt===void 0&&(yt=new Ha,C[Q]=yt),yt.getGripSpace()},this.getHand=function(Q){let yt=C[Q];return yt===void 0&&(yt=new Ha,C[Q]=yt),yt.getHandSpace()};function j(Q){const yt=R.indexOf(Q.inputSource);if(yt===-1)return;const At=C[yt];At!==void 0&&(At.update(Q.inputSource,Q.frame,c||a),At.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ot);for(let Q=0;Q<C.length;Q++){const yt=R[Q];yt!==null&&(R[Q]=null,C[Q].disconnect(yt))}N=null,K=null,m.reset();for(const Q in g)delete g[Q];if(t.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),H!==null){const Q=H.camera;Q.fov=H.fov,Q.zoom=H.zoom,Q.updateProjectionMatrix(),H=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ot),S.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ft=null,Mt=null;S.depth&&(Mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=S.stencil?Si:bi,Ft=S.stencil?vs:qn);const Wt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Xn(d.textureWidth,d.textureHeight,{format:_n,type:un,depthTexture:new Ms(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const At={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:un,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(Q){for(let yt=0;yt<Q.removed.length;yt++){const At=Q.removed[yt],Ft=R.indexOf(At);Ft>=0&&(R[Ft]=null,C[Ft].disconnect(At))}for(let yt=0;yt<Q.added.length;yt++){const At=Q.added[yt];let Ft=R.indexOf(At);if(Ft===-1){for(let Wt=0;Wt<C.length;Wt++)if(Wt>=R.length){R.push(At),Ft=Wt;break}else if(R[Wt]===null){R[Wt]=At,Ft=Wt;break}if(Ft===-1)break}const Mt=C[Ft];Mt&&Mt.connect(At)}}function q(Q,yt){yt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(yt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let yt=Q.near,At=Q.far;m.texture!==null&&(m.depthNear>0&&(yt=m.depthNear),m.depthFar>0&&(At=m.depthFar)),Z.near=z.near=I.near=yt,Z.far=z.far=I.far=At,(N!==Z.near||K!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),N=Z.near,K=Z.far),Z.layers.mask=Q.layers.mask|6,I.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const Ft=Q.parent,Mt=Z.cameras;q(Z,Ft);for(let Wt=0;Wt<Mt.length;Wt++)q(Mt[Wt],Ft);Z.projectionMatrix.copy(I.projectionMatrix),Z.projectionMatrixInverse.copy(I.projectionMatrixInverse),H===null&&Q.isPerspectiveCamera&&(H={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,Z,Ft)};function et(Q,yt,At){At===null?Q.matrix.copy(yt.matrixWorld):(Q.matrix.copy(At.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(yt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(yt.projectionMatrix),Q.projectionMatrixInverse.copy(yt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(Q){return g[Q]};let rt=null;function wt(Q,yt){if(h=yt.getViewerPose(c||a),p=yt,h!==null){const At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ft=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Ft=!0);for(let Bt=0;Bt<At.length;Bt++){const se=At[Bt];let te=null;if(f!==null)te=f.getViewport(se);else{const ve=u.getViewSubImage(d,se);te=ve.viewport,Bt===0&&(t.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(y))}let Gt=W[Bt];Gt===void 0&&(Gt=new Dn,Gt.layers.enable(Bt),Gt.viewport=new Me,W[Bt]=Gt),Gt.matrix.fromArray(se.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(se.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(te.x,te.y,te.width,te.height),Bt===0&&(Z.matrix.copy(Gt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ft===!0&&Z.cameras.push(Gt)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Bt=u.getDepthInformation(At[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Bt=0;Bt<At.length;Bt++){const se=At[Bt].camera;if(se){let te=g[se];te||(te=new gu,g[se]=te);const Gt=u.getCameraImage(se);te.sourceTexture=Gt}}}}for(let At=0;At<C.length;At++){const Ft=R[At],Mt=C[At];Ft!==null&&Mt!==void 0&&Mt.update(Ft,yt,c||a)}rt&&rt(Q,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),p=null}const Nt=new Ru;Nt.setAnimationLoop(wt),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}}const b_=new oe,zu=new qt;zu.set(-1,0,0,0,1,0,0,0,1);function w_(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Tu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,t,e,n){let s={},r={};function a(S,b){const y=b.program;n.uniformBlockBinding(S,y,s[S.id])}function o(S,b){let y=s[S.id];y===void 0&&(p(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(S,C);const R=t.render.frame;r[S.id]!==R&&(c(S),r[S.id]=R)}function l(S){const b=i.createBuffer(),y=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(S){const b=s[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,x=y.length;R<x;R++){const E=y[R];if(Array.isArray(E))for(let H=0,I=E.length;H<I;H++)h(E[H],R,H,C);else h(E,R,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,b,y,C){if(d(S,b,y,C)===!0){const R=S.__offset,x=S.value;if(Array.isArray(x)){let E=0;for(let H=0;H<x.length;H++){const I=x[H],z=_(I,!0);u(I,S.__data,E),E+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,S.__data)}}function u(S,b,y){typeof S=="number"||typeof S=="boolean"?b[y]=S:S.isMatrix3?(b[y]=S.elements[0],b[y+1]=S.elements[1],b[y+2]=S.elements[2],b[y+3]=0,b[y+4]=S.elements[3],b[y+5]=S.elements[4],b[y+6]=S.elements[5],b[y+7]=0,b[y+8]=S.elements[6],b[y+9]=S.elements[7],b[y+10]=S.elements[8],b[y+11]=0):ArrayBuffer.isView(S)?b.set(S.subarray(0,b.length-y),y):S.toArray(b,y)}function d(S,b,y,C){const R=S.value,x=b+"_"+y;if(Array.isArray(R)){C[x]===void 0&&(C[x]=[]);const E=C[x];let H=!1;for(let I=0;I<R.length;I++)f(R[I],E,I)===!0&&(H=!0);return H}return f(R,C,x)}function f(S,b,y){if(b[y]===void 0)return typeof S=="number"||typeof S=="boolean"?b[y]=S:ArrayBuffer.isView(S)?b[y]=S.slice():b[y]=S.clone(),!0;{const C=b[y];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return b[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function p(S){const b=S.uniforms;let y=0;const C=16;for(let x=0,E=b.length;x<E;x++){const H=Array.isArray(b[x])?b[x]:[b[x]];for(let I=0,z=H.length;I<z;I++){const W=H[I],Z=Array.isArray(W.value)?W.value:[W.value],N=Array.isArray(b[x])||Array.isArray(W.value);let K=y;for(let X=0,ot=Z.length;X<ot;X++){const q=Z[X],et=_(q,N),rt=y%C,wt=rt%et.boundary,Nt=rt+wt;y+=wt,Nt!==0&&C-Nt<et.storage&&(y+=C-Nt),X===0&&(K=y),y+=et.storage}const j=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new j((y-K)/Float32Array.BYTES_PER_ELEMENT),W.__offset=K}}const R=y%C;return R>0&&(y+=C-R),S.__size=y,S.__cache={},this}function _(S,b){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(S){const b=S.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}const A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function R_(){return Gn===null&&(Gn=new Ma(A_,16,16,ki,Kn),Gn.name="DFG_LUT",Gn.minFilter=an,Gn.magFilter=an,Gn.wrapS=ai,Gn.wrapT=ai,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class C_{constructor(t={}){const{canvas:e=gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([Tl,wl,bl]),g=new Set([un,qn,tr,vs,Sl,yl]),S=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let C=null,R=null;const x=[],E=[];let H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let z=!1,W=null,Z=null,N=null,K=null;this._outputColorSpace=gn;let j=0,X=0,ot=null,q=-1,et=null;const rt=new Me,wt=new Me;let Nt=null;const Q=new Kt(0);let yt=0,At=e.width,Ft=e.height,Mt=1,Wt=null,Se=null;const Bt=new Me(0,0,At,Ft),se=new Me(0,0,At,Ft);let te=!1;const Gt=new ir,ve=new Pl;let Ae=!1,Ge=!1;const xe=new oe,ue=new O,Ce=new Me,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let sn=!1;function Ve(){return ot===null?Mt:1}let F=n;function Je(v,D){return e.getContext(v,D)}let ce,fe,mt,Pe,Ot,Ht,A,M,k,it,tt,ut,gt,Y,J,ft,P,$,V,dt,ct,pt,It;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),F===null){const D="webgl2";if(F=Je(D,v),F===null)throw Je(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(v){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),le("WebGLRenderer: "+v.message),v}function Xt(){ce=new Dg(F),ce.init(),ct=new v_(F,ce),fe=new Sg(F,ce,t,ct),mt=new x_(F,ce),fe.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Z=F.createFramebuffer(),N=F.createFramebuffer(),K=F.createFramebuffer(),Pe=new Ug(F),Ot=new i_,Ht=new __(F,ce,mt,Ot,fe,ct,Pe),A=new Lg(I),M=new Op(F),pt=new vg(F,M),k=new Ng(F,M,Pe,pt),it=new Og(F,k,M,pt,Pe),$=new Fg(F,fe,Ht),J=new yg(Ot),tt=new n_(I,A,ce,fe,pt,J),ut=new w_(I,Ot),gt=new r_,Y=new u_(ce),P=new _g(I,A,mt,it,p,l),ft=new g_(I,it,fe),It=new T_(F,Pe,fe,mt),V=new Mg(F,ce,Pe),dt=new Ig(F,ce,Pe),Pe.programs=tt.programs,I.capabilities=fe,I.extensions=ce,I.properties=Ot,I.renderLists=gt,I.shadowMap=ft,I.state=mt,I.info=Pe}_!==un&&(H=new Bg(_,e.width,e.height,o,s,r));const at=new E_(I,F);this.xr=at,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const v=ce.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ce.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(v){v!==void 0&&(Mt=v,this.setSize(At,Ft,!1))},this.getSize=function(v){return v.set(At,Ft)},this.setSize=function(v,D,G=!0){if(at.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=v,Ft=D,e.width=Math.floor(v*Mt),e.height=Math.floor(D*Mt),G===!0&&(e.style.width=v+"px",e.style.height=D+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(At*Mt,Ft*Mt).floor()},this.setDrawingBufferSize=function(v,D,G){At=v,Ft=D,Mt=G,e.width=Math.floor(v*G),e.height=Math.floor(D*G),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(_===un){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(rt)},this.getViewport=function(v){return v.copy(Bt)},this.setViewport=function(v,D,G,L){v.isVector4?Bt.set(v.x,v.y,v.z,v.w):Bt.set(v,D,G,L),mt.viewport(rt.copy(Bt).multiplyScalar(Ve()).round())},this.getScissor=function(v){return v.copy(se)},this.setScissor=function(v,D,G,L){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,D,G,L),mt.scissor(wt.copy(se).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){mt.setScissorTest(te=v)},this.setOpaqueSort=function(v){Wt=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,G=!0){let L=0;if(v){let U=!1;if(ot!==null){const ht=ot.texture.format;U=m.has(ht)}if(U){const ht=ot.texture.type,_t=g.has(ht),nt=P.getClearColor(),xt=P.getClearAlpha(),St=nt.r,zt=nt.g,$t=nt.b;_t?(S[0]=St,S[1]=zt,S[2]=$t,S[3]=xt,F.clearBufferuiv(F.COLOR,0,S)):(b[0]=St,b[1]=zt,b[2]=$t,b[3]=xt,F.clearBufferiv(F.COLOR,0,b))}else L|=F.COLOR_BUFFER_BIT}D&&(L|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(L|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&F.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),W=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),P.dispose(),gt.dispose(),Y.dispose(),Ht.dispose(),Ot.dispose(),A.dispose(),it.dispose(),k.dispose(),pt.dispose(),It.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",zn),at.removeEventListener("sessionend",hi),bn.stop()};function Ut(v){v.preventDefault(),Zl("WebGLRenderer: Context Lost."),z=!0}function Yt(){Zl("WebGLRenderer: Context Restored."),z=!1;const v=Pe.autoReset,D=ft.enabled,G=ft.autoUpdate,L=ft.needsUpdate,U=ft.type;Xt(),Pe.autoReset=v,ft.enabled=D,ft.autoUpdate=G,ft.needsUpdate=L,ft.type=U}function vt(v){le("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qt(v){const D=v.target;D.removeEventListener("dispose",Qt),pe(D)}function pe(v){En(v),Ot.remove(v)}function En(v){const D=Ot.get(v).programs;D!==void 0&&(D.forEach(function(G){tt.releaseProgram(G)}),v.isShaderMaterial&&tt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,G,L,U,ht){D===null&&(D=ye);const _t=U.isMesh&&U.matrixWorld.determinantAffine()<0,nt=ui(v,D,G,L,U);mt.setMaterial(L,_t);let xt=G.index,St=1;if(L.wireframe===!0){if(xt=k.getWireframeAttribute(G),xt===void 0)return;St=2}const zt=G.drawRange,$t=G.attributes.position;let Lt=zt.start*St,ee=(zt.start+zt.count)*St;ht!==null&&(Lt=Math.max(Lt,ht.start*St),ee=Math.min(ee,(ht.start+ht.count)*St)),xt!==null?(Lt=Math.max(Lt,0),ee=Math.min(ee,xt.count)):$t!=null&&(Lt=Math.max(Lt,0),ee=Math.min(ee,$t.count));const De=ee-Lt;if(De<0||De===1/0)return;pt.setup(U,L,nt,G,xt);let ge,me=V;if(xt!==null&&(ge=M.get(xt),me=dt,me.setIndex(ge)),U.isMesh)L.wireframe===!0?(mt.setLineWidth(L.wireframeLinewidth*Ve()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(U.isLine){let We=L.linewidth;We===void 0&&(We=1),mt.setLineWidth(We*Ve()),U.isLineSegments?me.setMode(F.LINES):U.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else U.isPoints?me.setMode(F.POINTS):U.isSprite&&me.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))me.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const We=U._multiDrawStarts,Dt=U._multiDrawCounts,Qe=U._multiDrawCount,he=xt?M.get(xt).bytesPerElement:1,Ci=Ot.get(L).currentProgram.getUniforms();for(let Xe=0;Xe<Qe;Xe++)Ci.setValue(F,"_gl_DrawID",Xe),me.render(We[Xe]/he,Dt[Xe])}else if(U.isInstancedMesh)me.renderInstances(Lt,De,U.count);else if(G.isInstancedBufferGeometry){const We=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dt=Math.min(G.instanceCount,We);me.renderInstances(Lt,De,Dt)}else me.render(Lt,De)};function As(v,D,G,L){W!==null&&v.isNodeMaterial&&W.setObject(L,v),Ae===!0&&J.setState(v,G,!1),v.transparent===!0&&v.side===xn&&v.forceSinglePass===!1?(v.side=on,v.needsUpdate=!0,Ri(v,D,L),v.side=Bi,v.needsUpdate=!0,Ri(v,D,L),v.side=xn):Ri(v,D,L)}this.compile=function(v,D,G=null){G===null&&(G=v),W!==null&&W.renderStart(v,D,G),R=Y.get(G),R.init(D),E.push(R),G.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(R.pushLight(U),U.castShadow&&R.pushShadow(U))}),v!==G&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(R.pushLight(U),U.castShadow&&R.pushShadow(U))}),R.setupLights(),W!==null&&W.updateLights(R.state.lightsArray),Ge=this.localClippingEnabled,Ae=J.init(this.clippingPlanes,Ge),Ae===!0&&J.setGlobalState(this.clippingPlanes,D),W!==null&&ft.render(R.state.shadowsArray,G,D);const L=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ht=U.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){const nt=ht[_t];As(nt,G,D,U),L.add(nt)}else As(ht,G,D,U),L.add(ht)}),R=E.pop(),W!==null&&W.renderEnd(),L},this.compileAsync=function(v,D,G=null){const L=this.compile(v,D,G);return new Promise(U=>{function ht(){if(L.forEach(function(_t){const xt=Ot.get(_t).currentProgram;(xt===void 0||xt.isReady())&&L.delete(_t)}),L.size===0){U(v);return}setTimeout(ht,10)}ce.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let qi=null;function fr(v){qi&&qi(v)}function zn(){bn.stop()}function hi(){bn.start()}const bn=new Ru;bn.setAnimationLoop(fr),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(v){qi=v,at.setAnimationLoop(v),v===null?bn.stop():bn.start()},at.addEventListener("sessionstart",zn),at.addEventListener("sessionend",hi),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;W!==null&&W.renderStart(v,D);const G=at.enabled===!0&&at.isPresenting===!0,L=H!==null&&(ot===null||G)&&H.begin(I,ot);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(D),D=at.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,D,ot),R=Y.get(v,E.length),R.init(D),R.state.textureUnits=Ht.getTextureUnits(),E.push(R),xe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ve.setFromArrayCamera(D):Gt.setFromProjectionMatrix(xe,Un,D.reversedDepth),Ge=this.localClippingEnabled,Ae=J.init(this.clippingPlanes,Ge),C=gt.get(v,x.length),C.init(),x.push(C),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){const _t=I.xr.getDepthSensingMesh();_t!==null&&Ki(_t,D,-1/0,I.sortObjects)}Ki(v,D,0,I.sortObjects),C.finish(),W!==null&&W.updateLights(R.state.lightsArray),I.sortObjects===!0&&C.sort(Wt,Se),sn=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,sn&&P.addToRenderList(C,v),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&J.beginShadows();const U=R.state.shadowsArray;if(ft.render(U,v,D),Ae===!0&&J.endShadows(),(L&&H.hasRenderPass())===!1){const _t=C.opaque,nt=C.transmissive;if(R.setupLights(),D.isArrayCamera){const xt=D.cameras;if(nt.length>0)for(let St=0,zt=xt.length;St<zt;St++){const $t=xt[St];Zi(_t,nt,v,$t)}sn&&P.render(v);for(let St=0,zt=xt.length;St<zt;St++){const $t=xt[St];Rs(C,v,$t,$t.viewport)}}else nt.length>0&&Zi(_t,nt,v,D),sn&&P.render(v),Rs(C,v,D)}ot!==null&&X===0&&(Ht.updateMultisampleRenderTarget(ot),Ht.updateRenderTargetMipmap(ot)),L&&H.end(I),v.isScene===!0&&v.onAfterRender(I,v,D),pt.resetDefaultState(),q=-1,et=null,E.pop(),E.length>0?(R=E[E.length-1],Ht.setTextureUnits(R.state.textureUnits),Ae===!0&&J.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,W!==null&&W.renderEnd()};function Ki(v,D,G,L){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){const _t=D.isArrayCamera?ve:Gt;if(!v.frustumCulled||v.intersectsFrustum(_t)){L&&Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4(xe);const nt=it.update(v),xt=v.material;xt.visible&&C.push(v,nt,xt,G,Ce.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){const _t=D.isArrayCamera?ve:Gt;if(!v.frustumCulled||v.intersectsFrustum(_t)){const nt=it.update(v),xt=v.material;if(L&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ce.copy(v.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),Ce.copy(nt.boundingSphere.center)),Ce.applyMatrix4(v.matrixWorld).applyMatrix4(xe)),Array.isArray(xt)){const St=nt.groups;for(let zt=0,$t=St.length;zt<$t;zt++){const Lt=St[zt],ee=xt[Lt.materialIndex];ee&&ee.visible&&C.push(v,nt,ee,G,Ce.z,Lt,D)}}else xt.visible&&C.push(v,nt,xt,G,Ce.z,null,D)}}}const ht=v.children;for(let _t=0,nt=ht.length;_t<nt;_t++)Ki(ht[_t],D,G,L)}function Rs(v,D,G,L){const{opaque:U,transmissive:ht,transparent:_t}=v;R.setupLightsView(G),Ae===!0&&J.setGlobalState(I.clippingPlanes,G),L&&mt.viewport(rt.copy(L)),U.length>0&&Ai(U,D,G),ht.length>0&&Ai(ht,D,G),_t.length>0&&Ai(_t,D,G),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Zi(v,D,G,L){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[L.id]===void 0){const Lt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[L.id]=new Xn(1,1,{generateMipmaps:!0,type:Lt?Kn:un,minFilter:Mi,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}const ht=R.state.transmissionRenderTarget[L.id],_t=L.viewport||rt;ht.setSize(_t.z*I.transmissionResolutionScale,_t.w*I.transmissionResolutionScale);const nt=I.getRenderTarget(),xt=I.getActiveCubeFace(),St=I.getActiveMipmapLevel();I.setRenderTarget(ht),I.getClearColor(Q),yt=I.getClearAlpha(),yt<1&&I.setClearColor(16777215,.5),I.clear(),sn&&P.render(G);const zt=I.toneMapping;I.toneMapping=oi;const $t=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),R.setupLightsView(L),Ae===!0&&J.setGlobalState(I.clippingPlanes,L),Ai(v,G,L),Ht.updateMultisampleRenderTarget(ht),Ht.updateRenderTargetMipmap(ht),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ee=0,De=D.length;ee<De;ee++){const ge=D[ee],{object:me,geometry:We,material:Dt,group:Qe}=ge;if(Dt.side===xn&&me.layers.test(L.layers)){const he=Dt.side;Dt.side=on,Dt.needsUpdate=!0,Bn(me,G,L,We,Dt,Qe),Dt.side=he,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ht.updateMultisampleRenderTarget(ht),Ht.updateRenderTargetMipmap(ht))}I.setRenderTarget(nt,xt,St),I.setClearColor(Q,yt),$t!==void 0&&(L.viewport=$t),I.toneMapping=zt}function Ai(v,D,G){const L=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ht=v.length;U<ht;U++){const _t=v[U],{object:nt,geometry:xt,group:St}=_t;let zt=_t.material;zt.allowOverride===!0&&L!==null&&(zt=L),nt.layers.test(G.layers)&&Bn(nt,D,G,xt,zt,St)}}function Bn(v,D,G,L,U,ht){W!==null&&U.isNodeMaterial&&W.setObject(v,U),v.onBeforeRender(I,D,G,L,U,ht),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(I,D,G,L,v,ht),U.transparent===!0&&U.side===xn&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,I.renderBufferDirect(G,D,L,U,v,ht),U.side=Bi,U.needsUpdate=!0,I.renderBufferDirect(G,D,L,U,v,ht),U.side=xn):I.renderBufferDirect(G,D,L,U,v,ht),v.onAfterRender(I,D,G,L,U,ht)}function Cs(v){let D=0;for(const G of v)G.texture!==null&&D++;return D}function Ri(v,D,G){D.isScene!==!0&&(D=ye);const L=Ot.get(v),U=R.state.lights,ht=R.state.shadowsArray,_t=U.state.version,nt=tt.getParameters(v,U.state,ht,D,G,R.state.lightProbeGridArray),xt=tt.getProgramCacheKey(nt);let St=L.programs;L.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,L.fog=D.fog;const zt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;L.envMap=A.get(v.envMap||L.environment,zt),L.envMapRotation=L.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,St===void 0&&(v.addEventListener("dispose",Qt),St=new Map,L.programs=St,L.programVariants=new Map);let $t=St.get(xt);if($t!==void 0){if(L.currentProgram===$t&&L.lightsStateVersion===_t)return Ps(v,nt),$t}else nt.uniforms=tt.getUniforms(v),W!==null&&v.isNodeMaterial&&W.build(v,G,nt),v.onBeforeCompile(nt,I),$t=tt.acquireProgram(nt,xt),St.set(xt,$t),L.uniforms=nt.uniforms;const Lt=L.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Lt.clippingPlanes=J.uniform),Ps(v,nt),L.needsLights=lt(v),L.lightsStateVersion=_t,L.needsLights&&(Lt.ambientLightColor.value=U.state.ambient,Lt.lightProbe.value=U.state.probe,Lt.sunLights.value=U.state.sun,Lt.sunLightShadows.value=U.state.sunShadow,Lt.directionalLights.value=U.state.directional,Lt.directionalLightShadows.value=U.state.directionalShadow,Lt.spotLights.value=U.state.spot,Lt.spotLightShadows.value=U.state.spotShadow,Lt.rectAreaLights.value=U.state.rectArea,Lt.ltc_1.value=U.state.rectAreaLTC1,Lt.ltc_2.value=U.state.rectAreaLTC2,Lt.pointLights.value=U.state.point,Lt.pointLightShadows.value=U.state.pointShadow,Lt.hemisphereLights.value=U.state.hemi,Lt.sunShadowMatrix.value=U.state.sunShadowMatrix,Lt.sunShadowCascade.value=U.state.sunShadowCascade,Lt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Lt.spotLightMatrix.value=U.state.spotLightMatrix,Lt.spotLightMap.value=U.state.spotLightMap,Lt.pointShadowMatrix.value=U.state.pointShadowMatrix),L.numLightProbeGrids=Cs(R.state.lightProbeGridArray),L.currentProgram=$t,L.uniformsList=null,$t}function pr(v,D,G,L,U){const ht=Ot.get(v),_t=ht.currentProgram.id+","+L+","+U;let nt=ht.programVariants.get(_t);return nt===void 0?(nt=Ri(v,D,G),ht.programVariants.set(_t,nt)):(ht.currentProgram=nt,ht.uniformsList=null,ht.outputColorSpace=L,ht.toneMapping=U),nt}function kn(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=ia.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Ps(v,D){const G=Ot.get(v);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function ui(v,D,G,L,U){D.isScene!==!0&&(D=ye),Ht.resetTextureUnits();const ht=D.fog,_t=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?D.environment:null,nt=ot===null?I.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ne.workingColorSpace,xt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,St=A.get(L.envMap||_t,xt),zt=L.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$t=!!G.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Lt=!!G.morphAttributes.position,ee=!!G.morphAttributes.normal,De=!!G.morphAttributes.color;let ge=oi;L.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ge=I.toneMapping);const me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,We=me!==void 0?me.length:0,Dt=Ot.get(L),Qe=R.state.lights;if(Ae===!0&&(Ge===!0||v!==et)){const Ee=v===et&&L.id===q;J.setState(L,v,Ee)}let he=!1,Ci=!1;L.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==Qe.state.version||U.isBatchedMesh&&Dt.batching===!1||!U.isBatchedMesh&&Dt.batching===!0||U.isBatchedMesh&&Dt.batchingColor===!0&&U._colorsTexture===null||U.isBatchedMesh&&Dt.batchingColor===!1&&U._colorsTexture!==null||U.isInstancedMesh&&Dt.instancing===!1||!U.isInstancedMesh&&Dt.instancing===!0||U.isSkinnedMesh&&Dt.skinning===!1||!U.isSkinnedMesh&&Dt.skinning===!0||U.isInstancedMesh&&Dt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Dt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Dt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Dt.instancingMorph===!1&&U.morphTexture!==null||Dt.envMap!==St||L.fog===!0&&Dt.fog!==ht||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==J.numPlanes||Dt.numIntersection!==J.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==$t||Dt.morphTargets!==Lt||Dt.morphNormals!==ee||Dt.morphColors!==De||Dt.morphTargetsCount!==We||Dt.numLightProbeGrids!==Cs(R.state.lightProbeGridArray)?he=!0:(Dt.outputColorSpace!==nt||Dt.toneMapping!==ge)&&(Ci=!0):(he=!0,Dt.__version=L.version);let Xe=Dt.currentProgram;(he===!0||Ci===!0)&&(Xe=Ci===!0?pr(L,D,U,nt,ge):Ri(L,D,U),W&&L.isNodeMaterial&&W.onUpdateProgram(L,Xe,Dt));let gr=!1,di=!1,Pi=!1;const re=Xe.getUniforms(),ke=Dt.uniforms;if(mt.useProgram(Xe.program)&&(gr=!0,di=!0,Pi=!0),L.id!==q&&(q=L.id,di=!0),gr||et!==v){mt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),re.setValue(F,"projectionMatrix",v.projectionMatrix),re.setValue(F,"viewMatrix",v.matrixWorldInverse);const ze=re.map.cameraPosition;ze!==void 0&&ze.setValue(F,ue.setFromMatrixPosition(v.matrixWorld)),fe.logarithmicDepthBuffer&&re.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&re.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),et!==v&&(et=v,di=!0,Pi=!0)}if(Dt.needsLights&&(Qe.state.sunShadowMap.length>0&&re.setValue(F,"sunShadowMap",Qe.state.sunShadowMap,Ht),Qe.state.directionalShadowMap.length>0&&re.setValue(F,"directionalShadowMap",Qe.state.directionalShadowMap,Ht),Qe.state.spotShadowMap.length>0&&re.setValue(F,"spotShadowMap",Qe.state.spotShadowMap,Ht),Qe.state.pointShadowMap.length>0&&re.setValue(F,"pointShadowMap",Qe.state.pointShadowMap,Ht)),U.isSkinnedMesh){re.setOptional(F,U,"bindMatrix"),re.setOptional(F,U,"bindMatrixInverse");const Ee=U.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),re.setValue(F,"boneTexture",Ee.boneTexture,Ht))}U.isBatchedMesh&&(re.setOptional(F,U,"batchingTexture"),re.setValue(F,"batchingTexture",U._matricesTexture,Ht),re.setOptional(F,U,"batchingIdTexture"),re.setValue(F,"batchingIdTexture",U._indirectTexture,Ht),re.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&re.setValue(F,"batchingColorTexture",U._colorsTexture,Ht));const wn=G.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&$.update(U,G,Xe),(di||Dt.receiveShadow!==U.receiveShadow)&&(Dt.receiveShadow=U.receiveShadow,re.setValue(F,"receiveShadow",U.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&D.environment!==null&&(ke.envMapIntensity.value=D.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=R_()),di){if(re.setValue(F,"toneMappingExposure",I.toneMappingExposure),Dt.needsLights&&mr(ke,Pi),ht&&L.fog===!0&&ut.refreshFogUniforms(ke,ht),ut.refreshMaterialUniforms(ke,L,Mt,Ft,R.state.transmissionRenderTarget[v.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){const Ee=y;let ze=0;for(const $n of R.state.lightProbeGridArray)$n.texture!==null&&(Ee.textures[ze]=$n.texture,Ee.min[ze]=$n.boundingBox.min,Ee.max[ze]=$n.boundingBox.max,Ee.resolution[ze]=$n.resolution,ze++);for(const $n in Ee)Ee[$n].length=ze;ke.probesSH.value=Ee.textures,ke.probesMin.value=Ee.min,ke.probesMax.value=Ee.max,ke.probesResolution.value=Ee.resolution}ia.upload(F,kn(Dt),ke,Ht)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(ia.upload(F,kn(Dt),ke,Ht),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&re.setValue(F,"center",U.center),re.setValue(F,"modelViewMatrix",U.modelViewMatrix),re.setValue(F,"normalMatrix",U.normalMatrix),re.setValue(F,"modelMatrix",U.matrixWorld),L.uniformsGroups!==void 0){const Ee=L.uniformsGroups;for(let ze=0,$n=Ee.length;ze<$n;ze++){const Gl=Ee[ze];It.update(Gl,Xe),It.bind(Gl,Xe)}}return Xe}function mr(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function lt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(v,D,G){const L=Ot.get(v);L.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Ot.get(v.texture).__webglTexture=D,Ot.get(v.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:G,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const G=Ot.get(v);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,G=0){ot=v,j=D,X=G;let L=null,U=!1,ht=!1;if(v){const nt=Ot.get(v);if(nt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(F.FRAMEBUFFER,nt.__webglFramebuffer),rt.copy(v.viewport),wt.copy(v.scissor),Nt=v.scissorTest,mt.viewport(rt),mt.scissor(wt),mt.setScissorTest(Nt),q=-1;return}else if(nt.__webglFramebuffer===void 0)Ht.setupRenderTarget(v);else if(nt.__hasExternalTextures)Ht.rebindTextures(v,Ot.get(v.texture).__webglTexture,Ot.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const zt=v.depthTexture;if(nt.__boundDepthTexture!==zt){if(zt!==null&&Ot.has(zt)&&(v.width!==zt.image.width||v.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(v)}}const xt=v.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ht=!0);const St=Ot.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(St[D])?L=St[D][G]:L=St[D],U=!0):v.samples>0&&Ht.useMultisampledRTT(v)===!1?L=Ot.get(v).__webglMultisampledFramebuffer:Array.isArray(St)?L=St[G]:L=St,rt.copy(v.viewport),wt.copy(v.scissor),Nt=v.scissorTest}else rt.copy(Bt).multiplyScalar(Mt).floor(),wt.copy(se).multiplyScalar(Mt).floor(),Nt=te;if(G!==0&&(L=Z),mt.bindFramebuffer(F.FRAMEBUFFER,L)&&mt.drawBuffers(v,L),mt.viewport(rt),mt.scissor(wt),mt.setScissorTest(Nt),U){const nt=Ot.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,nt.__webglTexture,G)}else if(ht){const nt=D;for(let xt=0;xt<v.textures.length;xt++){const St=Ot.get(v.textures[xt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+xt,St.__webglTexture,G,nt)}}else if(v!==null&&G!==0){const nt=Ot.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nt.__webglTexture,G)}q=-1};function Et(v){const D=Ot.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=fe.textureFormatReadable(v.format),D.__typeReadable=fe.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,G,L,U,ht,_t,nt=0){if(!(v&&v.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t],Array.isArray(xt)&&(xt=xt[0])),xt){mt.bindFramebuffer(F.FRAMEBUFFER,xt);try{const St=v.textures[nt],zt=St.format,$t=St.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+nt);const Lt=Et(St);if(Lt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-L&&G>=0&&G<=v.height-U&&F.readPixels(D,G,L,U,ct.convert(zt),ct.convert($t),ht)}finally{const St=ot!==null?Ot.get(ot).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,D,G,L,U,ht,_t,nt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ot.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(xt=xt[_t],Array.isArray(xt)&&(xt=xt[0])),xt)if(D>=0&&D<=v.width-L&&G>=0&&G<=v.height-U){mt.bindFramebuffer(F.FRAMEBUFFER,xt);const St=v.textures[nt],zt=St.format,$t=St.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+nt);const Lt=Et(St);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(D,G,L,U,ct.convert(zt),ct.convert($t),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const De=ot!==null?Ot.get(ot).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,De);const ge=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xf(F,ge,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(ge),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,G=0){const L=Math.pow(2,-G),U=Math.floor(v.image.width*L),ht=Math.floor(v.image.height*L),_t=D!==null?D.x:0,nt=D!==null?D.y:0;Ht.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,_t,nt,U,ht),mt.unbindTexture()},this.copyTextureToTexture=function(v,D,G=null,L=null,U=0,ht=0){let _t,nt,xt,St,zt,$t,Lt,ee,De;const ge=v.isCompressedTexture?v.mipmaps[ht]:v.image;if(G!==null)_t=G.max.x-G.min.x,nt=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,St=G.min.x,zt=G.min.y,$t=G.isBox3?G.min.z:0;else{const re=Math.pow(2,-U);_t=Math.floor(ge.width*re),nt=Math.floor(ge.height*re),v.isDataArrayTexture?xt=ge.depth:v.isData3DTexture?xt=Math.floor(ge.depth*re):xt=1,St=0,zt=0,$t=0}L!==null?(Lt=L.x,ee=L.y,De=L.z):(Lt=0,ee=0,De=0);const me=ct.convert(D.format),We=ct.convert(D.type);let Dt;D.isData3DTexture?(Ht.setTexture3D(D,0),Dt=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ht.setTexture2DArray(D,0),Dt=F.TEXTURE_2D_ARRAY):(Ht.setTexture2D(D,0),Dt=F.TEXTURE_2D),mt.activeTexture(F.TEXTURE0),mt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),mt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),mt.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Qe=mt.getParameter(F.UNPACK_ROW_LENGTH),he=mt.getParameter(F.UNPACK_IMAGE_HEIGHT),Ci=mt.getParameter(F.UNPACK_SKIP_PIXELS),Xe=mt.getParameter(F.UNPACK_SKIP_ROWS),gr=mt.getParameter(F.UNPACK_SKIP_IMAGES);mt.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,St),mt.pixelStorei(F.UNPACK_SKIP_ROWS,zt),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,$t);const di=v.isDataArrayTexture||v.isData3DTexture,Pi=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const re=Ot.get(v),ke=Ot.get(D),wn=Ot.get(re.__renderTarget),Ee=Ot.get(ke.__renderTarget);mt.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ze=0;ze<xt;ze++)di&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(v).__webglTexture,U,$t+ze),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.get(D).__webglTexture,ht,De+ze)),F.blitFramebuffer(St,zt,St+_t,zt+nt,Lt,ee,Lt+_t,ee+nt,F.DEPTH_BUFFER_BIT,F.NEAREST);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Ot.has(v)){const re=Ot.get(v),ke=Ot.get(D);mt.bindFramebuffer(F.READ_FRAMEBUFFER,N),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,K);for(let wn=0;wn<xt;wn++)di?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,re.__webglTexture,U,$t+wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,re.__webglTexture,U),Pi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.__webglTexture,ht,De+wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,ht),U!==0?F.blitFramebuffer(St,zt,St+_t,zt+nt,Lt,ee,Lt+_t,ee+nt,F.COLOR_BUFFER_BIT,F.NEAREST):Pi?F.copyTexSubImage3D(Dt,ht,Lt,ee,De+wn,St,zt,_t,nt):F.copyTexSubImage2D(Dt,ht,Lt,ee,St,zt,_t,nt);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pi?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(Dt,ht,Lt,ee,De,_t,nt,xt,me,We,ge.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Dt,ht,Lt,ee,De,_t,nt,xt,me,ge.data):F.texSubImage3D(Dt,ht,Lt,ee,De,_t,nt,xt,me,We,ge):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ht,Lt,ee,_t,nt,me,We,ge.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ht,Lt,ee,ge.width,ge.height,me,ge.data):F.texSubImage2D(F.TEXTURE_2D,ht,Lt,ee,_t,nt,me,We,ge);mt.pixelStorei(F.UNPACK_ROW_LENGTH,Qe),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ci),mt.pixelStorei(F.UNPACK_SKIP_ROWS,Xe),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,gr),ht===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(Dt),mt.unbindTexture()},this.initRenderTarget=function(v){Ot.get(v).__webglFramebuffer===void 0&&Ht.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ht.setTextureCube(v,0):v.isData3DTexture?Ht.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ht.setTexture2DArray(v,0):Ht.setTexture2D(v,0),mt.unbindTexture()},this.resetState=function(){j=0,X=0,ot=null,mt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Ul=42*Math.PI/180,Vi={x:1/16,z:1/(16*Math.sin(Ul))},dn=86,ln=66;function or(i){return 1+.045*Math.sin(3*i+1.1)+.03*Math.sin(5*i+2.3)+.02*Math.sin(7*i+.4)}function On(i,t){const e=i/dn,n=t/ln;return Math.hypot(e,n)/or(Math.atan2(n,e))}const vn=.89,fa=.965;function bs(i,t){const e=t*or(i);return{x:Math.cos(i)*e*dn,z:Math.sin(i)*e*ln}}function Mn(i,t=180){const e=[];for(let n=0;n<t;n++){const s=n/t*Math.PI*2,r=i*or(s);e.push({x:Math.cos(s)*r*dn,z:Math.sin(s)*r*ln})}return e}const Le={cx:0,cz:4,hx:58,hz:40,r:18,halfWidth:1.5},Fl=(()=>{const{cx:i,cz:t,hx:e,hz:n,r:s}=Le,r=e-s,a=n-s,o=Math.PI*s/2,l=(h,u,d,f,p)=>({kind:"line",length:p,x0:i+h,z0:t+u,tx:d,tz:f}),c=(h,u,d)=>({kind:"arc",length:o,cx:i+h,cz:t+u,a0:d});return[l(0,n,1,0,r),c(r,a,Math.PI/2),l(e,a,0,-1,a*2),c(r,-a,0),l(r,-n,-1,0,r*2),c(-r,-a,-Math.PI/2),l(-e,-a,0,1,a*2),c(-r,a,-Math.PI),l(-r,n,1,0,r)]})(),be=Fl.reduce((i,t)=>i+t.length,0);function nn(i){let t=(i%be+be)%be;for(const e of Fl){if(t>e.length){t-=e.length;continue}let n,s,r,a;if(e.kind==="line")n=e.x0+e.tx*t,s=e.z0+e.tz*t,r=e.tx,a=e.tz;else{const o=e.a0-t/Le.r;n=e.cx+Math.cos(o)*Le.r,s=e.cz+Math.sin(o)*Le.r,r=Math.sin(o),a=-Math.cos(o)}return{x:n,z:s,tx:r,tz:a,nx:-a,nz:r}}return nn(0)}function dr(i,t){const{cx:e,cz:n,hx:s,hz:r,r:a}=Le,o=Math.abs(i-e)-(s-a),l=Math.abs(t-n)-(r-a),c=Math.hypot(Math.max(o,0),Math.max(l,0)),h=Math.min(Math.max(o,l),0);return Math.abs(c+h-a)}function Bu(i,t){let e=1/0,n=0,s=0;for(const r of Fl){let a,o,l;if(r.kind==="line")a=Math.min(Math.max((i-r.x0)*r.tx+(t-r.z0)*r.tz,0),r.length),o=r.x0+r.tx*a,l=r.z0+r.tz*a;else{let h=(r.a0-Math.atan2(t-r.cz,i-r.cx))%(Math.PI*2);h<0&&(h+=Math.PI*2);const u=r.length/Le.r;h>u&&(h=h>u+(Math.PI*2-u)/2?0:u),a=h*Le.r,o=r.cx+Math.cos(r.a0-h)*Le.r,l=r.cz+Math.sin(r.a0-h)*Le.r}const c=Math.hypot(i-o,t-l);c<e&&(e=c,n=s+a),s+=r.length}return n}const ku={title:{s:10,side:-1},about:{s:90,side:1},experience:{s:160,side:1},skills:{s:205,side:1},projects:{s:270,side:1},running:{s:327,side:-1},contact:{s:343,side:-1}},P_=6,L_=3.6,D_=2.6,Zs=10;function N_(i,t=0){const e=Math.sin(t),n=Math.cos(t),s=Math.cos(t),r=-Math.sin(t),a=P_/2,o=L_/2,l=a*Math.abs(s)+o*Math.abs(e),c=a*Math.abs(r)+o*Math.abs(n);return i.flatMap(h=>{const u=ku[h];if(!u)return[];const d=nn(u.s),f=d.nx*u.side,p=d.nz*u.side,_=a*Math.abs(s*f+r*p)+o*Math.abs(e*f+n*p),m=Le.halfWidth+1.2+_,g=d.x+f*m,S=d.z+p*m;return[{zoneId:h,s:u.s,x:g,z:S,angle:t,facing:{x:e,z:n},door:{x:g+e*(o+1),z:S+n*(o+1)},hx:a,hz:o,minX:g-l,maxX:g+l,minZ:S-c,maxZ:S+c}]})}function Hu(i,t,e){const n=t-i.x,s=e-i.z,r=Math.cos(i.angle),a=Math.sin(i.angle);return{x:n*r-s*a,z:n*a+s*r}}const Re={minX:-12,maxX:20,minZ:-8,maxZ:12},Zt={x:-32,z:-6,rx:9,rz:6},ie={x:-8,z:-56,baseHalfX:34,baseHalfZ:9,layers:6,layerHeight:2.2};function vi(i){const t=ie.baseHalfX*(1-i*.16),e=ie.baseHalfZ*(1-i*.12),n=ie.x-i*2.4;return{cx:n,hx:t,hz:e,minX:n-t,maxX:n+t,front:ie.z+e,y:i*ie.layerHeight,top:(i+1)*ie.layerHeight,ledge:{minX:n+t*.3,maxX:n+t*.8,front:ie.z+e*.85}}}const Pn={x:-30,fromLayer:3,halfWidth:.56},tn={x:-30,z:-45.9,rx:2.4,rz:1.3},en={x:24,z0:57.5,z1:71,halfWidth:.8};function pa(i,t,e=0){return Math.abs(i-en.x)<en.halfWidth+e&&t>en.z0-e&&t<en.z1+e}function I_(i,t,e=0){const n=(i-tn.x)/(tn.rx+e),s=(t-tn.z)/(tn.rz+e);return n*n+s*s<1}function Gu(i,t,e=0){const n=(i-Zt.x)/(Zt.rx+e),s=(t-Zt.z)/(Zt.rz+e);return n*n+s*s<1}function Vu(i,t,e=0){return i>Re.minX-e&&i<Re.maxX+e&&t>Re.minZ-e&&t<Re.maxZ+e}function Fn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function U_(i,t,e){return Math.abs(i-ie.x)<ie.baseHalfX+e&&Math.abs(t-ie.z)<ie.baseHalfZ+e+4}function F_(i){const t=Fn(42087),e=(m,g,S)=>i.some(b=>m>b.minX-S&&m<b.maxX+S&&g>b.minZ-S&&g<b.maxZ+S||Math.hypot(m-b.door.x,g-b.door.z)<S+2),n=(m,g,S)=>On(m,g)>fa-.02||dr(m,g)<Le.halfWidth+S||Gu(m,g,S)||Vu(m,g,S)||U_(m,g,S)||pa(m,g,S+.6)||e(m,g,S),s=(m,g,S,b,y=[])=>{const C=[];let R=0;for(;C.length<m&&R<m*40;){R++;const x=b();n(x.x,x.z,g)||[...y,...C].some(E=>Math.hypot(E.x-x.x,E.z-x.z)<S)||C.push({x:x.x,z:x.z,rot:t()*Math.PI*2,scale:.92+t()*.2,variant:Math.floor(t()*3)})}return C},r=()=>({x:(t()*2-1)*dn,z:(t()*2-1)*ln}),a=()=>{const m=t()*Math.PI*2,g=.8+t()*.12;return{x:Math.cos(m)*g*dn*or(m),z:Math.sin(m)*g*ln*or(m)}},o=()=>{const m=t()*Math.PI*2,g=1.2+t()*.9;return{x:Zt.x+Math.cos(m)*Zt.rx*g,z:Zt.z+Math.sin(m)*Zt.rz*g}},l=[...s(46,1.4,3.2,a),...s(14,1.4,3,o)];l.push(...s(26,1.6,4.5,r,l));const c=s(26,1,3,r,l),h=s(70,.9,2.5,r,[...l,...c]),u=s(620,.3,.9,r),d=s(190,.4,.7,r,u),f=s(260,.6,2.2,r).map(m=>({...m,rot:0})),p=m=>On(m.x,m.z)<vn-.02,_=[{x:-6,z:-2,rot:.4,scale:1,variant:0},{x:3,z:5,rot:2.2,scale:1,variant:1},{x:11,z:-3,rot:-.6,scale:1,variant:0},{x:15,z:7,rot:3.6,scale:1,variant:1},{x:-2,z:8,rot:1.5,scale:1,variant:1}];return{palms:l,rocks:c,tufts:u.filter(p),flowers:d.filter(p),bushes:h.filter(p),patches:f.filter(p),cows:_}}function sa(i,t){return dr(i,t)<Le.halfWidth?"road":On(i,t)>vn?"sand":"grass"}function Yn(i,t){return pa(i,t,-.25)?!0:On(i,t)<fa&&!Gu(i,t)&&!I_(i,t)}function O_(){const{minX:i,maxX:t,minZ:e,maxZ:n}=Re,s=[];for(let r=i;r<=t+.01;r+=2)s.push({x:r,z:e}),Math.abs(r-(i+t)/2)>2.5&&s.push({x:r,z:n});for(let r=e+2;r<n-.01;r+=2)s.push({x:i,z:r}),s.push({x:t,z:r});return s}function z_(){const{minX:i,maxX:t,minZ:e,maxZ:n}=Re,s=(i+t)/2,r=.15;return[{kind:"box",minX:i,maxX:t,minZ:e-r,maxZ:e+r},{kind:"box",minX:i,maxX:s-2.5,minZ:n-r,maxZ:n+r},{kind:"box",minX:s+2.5,maxX:t,minZ:n-r,maxZ:n+r},{kind:"box",minX:i-r,maxX:i+r,minZ:e,maxZ:n},{kind:"box",minX:t-r,maxX:t+r,minZ:e,maxZ:n}]}function B_(i,t){const e=[];for(const n of i)e.push({kind:"obb",x:n.x,z:n.z,hx:n.hx,hz:n.hz,angle:n.angle});for(const n of t.palms)e.push({kind:"circle",x:n.x,z:n.z,r:.35});for(const n of t.rocks)e.push({kind:"circle",x:n.x,z:n.z,r:.45*n.scale});for(const n of t.bushes)e.push({kind:"circle",x:n.x,z:n.z,r:.5*n.scale});return e.push(...z_()),e.push({kind:"box",minX:ie.x-ie.baseHalfX,maxX:ie.x+ie.baseHalfX,minZ:ie.z-ie.baseHalfZ,maxZ:ie.z+ie.baseHalfZ}),e}function k_(i){const t=[],e=be*i;for(let r=50;r<e-10;r+=50)t.push({s:Zs+r/i,metres:r});const n=[...Object.values(ku).map(r=>r.s),...t.map(r=>r.s)],s=[];for(let r=Zs+22;r<Zs+be-8;r+=34){let a=r;for(;n.some(o=>Math.abs((a-o+be*1.5)%be-be/2)<7);)a+=2;s.push(a%be)}return{posts:t,lamps:s}}const Wu=4.5,H_=6.3,G_=40,V_=22,W_=5.6,X_=24,Y_=.32;function Jc(i,t,e="right"){return{x:i,z:t,vx:0,vz:0,h:0,vh:0,airborne:!1,facing:e,moving:!1,sprinting:!1}}function Qc(i,t,e){return Math.abs(t-i)<=e?t:i+Math.sign(t-i)*e}function Xu(i,t,e,n){if(n.kind==="obb"){const h=Math.cos(n.angle),u=Math.sin(n.angle),d=i-n.x,f=t-n.z,p=Xu(d*h-f*u,d*u+f*h,e,{kind:"box",minX:-n.hx,maxX:n.hx,minZ:-n.hz,maxZ:n.hz});return{x:n.x+p.x*h+p.z*u,z:n.z-p.x*u+p.z*h}}if(n.kind==="circle"){const h=i-n.x,u=t-n.z,d=Math.hypot(h,u),f=e+n.r;return d>=f?{x:i,z:t}:d<1e-6?{x:n.x+f,z:t}:{x:n.x+h/d*f,z:n.z+u/d*f}}const s=Math.min(Math.max(i,n.minX),n.maxX),r=Math.min(Math.max(t,n.minZ),n.maxZ),a=i-s,o=t-r,l=Math.hypot(a,o);if(l>=e)return{x:i,z:t};if(l>1e-6)return{x:s+a/l*e,z:r+o/l*e};const c=[{x:n.minX-e,z:t,depth:i-n.minX},{x:n.maxX+e,z:t,depth:n.maxX-i},{x:i,z:n.minZ-e,depth:t-n.minZ},{x:i,z:n.maxZ+e,depth:n.maxZ-t}];return c.sort((h,u)=>h.depth-u.depth),{x:c[0].x,z:c[0].z}}function ma(i,t,e,n,s,r,a=Y_){let o={x:e,z:n};for(let l=0;l<3;l++)for(const c of s)o=Xu(o.x,o.z,a,c);return r(o.x,o.z)?o:r(o.x,t)?{x:o.x,z:t}:r(i,o.z)?{x:i,z:o.z}:{x:i,z:t}}function q_(i,t,e){return i===0&&t===0?e:Math.abs(i)>=Math.abs(t)?i>0?"right":"left":t>0?"up":"down"}function K_(i,t,e,n,s,r){const a=Math.hypot(t.x,t.y),o=a>1?t.x/a:t.x,l=a>1?t.y/a:t.y,c=a>0,h=t.sprint?H_:Wu,u=(n.right.x*o+n.up.x*l)*h,d=(n.right.z*o+n.up.z*l)*h,f=(c?G_:V_)*e,p=Qc(i.vx,u,f),_=Qc(i.vz,d,f),m=ma(i.x,i.z,i.x+p*e,i.z+_*e,s,r);let{h:g,vh:S,airborne:b}=i;t.jump&&!b&&(b=!0,S=W_),b&&(S-=X_*e,g+=S*e,g<=0&&(g=0,S=0,b=!1));let y=(m.x-i.x)/e,C=(m.z-i.z)/e;const R=Math.hypot(p,_),x=Math.hypot(y,C);if(x>R){const E=x>1e-9?R/x:0;y*=E,C*=E}return{x:m.x,z:m.z,vx:y,vz:C,h:g,vh:S,airborne:b,facing:q_(o,l,i.facing),moving:c,sprinting:c&&t.sprint}}const Yu=1e3/343/Wu;function Z_(i){if(i<.4)return null;const t=1e3/(i*Yu);if(t>3540)return null;const e=Math.round(t),n=Math.floor(e/60),s=e%60;return`${n}:${String(s).padStart(2,"0")}`}const $_=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}];function kt(i,t=!0){const e=[],n=[],s=[],r=new Kt;for(const o of i){r.setHex(o.color);for(const l of $_){if(t&&l.n[1]===-1&&o.y<=.001)continue;const c=l.c.map(([h,u,d])=>[o.x+h*o.w,o.y+u*o.h,o.z+d*o.d]);for(const h of[0,1,2,0,2,3])e.push(...c[h]),n.push(...l.n),s.push(r.r,r.g,r.b)}}const a=new fn;return a.setAttribute("position",new Te(e,3)),a.setAttribute("normal",new Te(n,3)),a.setAttribute("color",new Te(s,3)),a.computeBoundingSphere(),a}function J_(i){return!i.startsWith("#")||i.length!==7?null:parseInt(i.slice(1),16)}function Q_(i,t,e,n,s){const r=[];for(const[a,o,l,c,h]of i){const u=J_(h);u!==null&&r.push({x:(a-t/2)*n,y:(e-o-c)*n,z:-s/2,w:l*n,h:c*n,d:s,color:u})}return r}function T(i,t,e,n,s,r,a){return{x:i-n/2,y:t,z:e-r/2,w:n,h:s,d:r,color:a}}function lo(i,t){const e=[],n=[],s=new Kt;for(const o of i){s.setHex(o.color);const l=o.x+o.w,c=o.z+o.d;for(const[h,u]of[[o.x,o.z],[o.x,c],[l,c],[o.x,o.z],[l,c],[l,o.z]])e.push(h,t,u),n.push(s.r,s.g,s.b)}const r=new fn;r.setAttribute("position",new Te(e,3)),r.setAttribute("color",new Te(n,3));const a=new Float32Array(e.length);for(let o=1;o<a.length;o+=3)a[o]=1;return r.setAttribute("normal",new Sn(a,3)),r.computeBoundingSphere(),r}const w={grass:7248469,grassDark:6063175,grassLight:8564066,sand:15258274,sandDark:14138248,asphalt:5130846,roadLine:15722198,roadDash:16763213,trunk:9399371,trunkDark:7755578,frond:5214026,frondDark:4093505,frondLight:6727254,coconut:7031342,rock:9406105,rockLight:10985392,rockDark:7761539,cowWhite:15919835,cowTan:15260357,cowSpot:4866104,muzzle:13215136,hoof:9075302,fence:13280379,fencePost:11109470,mountainLow:5995098,mountainMid:5599322,mountainHigh:7301760,mountainPeak:9208986,purple:5587087,purpleLight:7230888,purpleDark:4074099,gold:16763213,sunset:16742973,sunsetLight:16752732,magenta:12727915,cream:16774371,sky:8308968,ink:2302510,wood:10253394,woodDark:8346687,stone:7761284,stoneLight:9406112,canvas:14275299};function j_(){const i=[];for(let r=0;r<6;r++)i.push(T(r*.07,r*.5,0,.34,.5,.34,r%2?w.trunkDark:w.trunk));const e=3,n=6*.07;return[[1,0],[-1,0],[0,1],[0,-1],[.7,.7],[-.7,.7],[.7,-.7],[-.7,-.7]].forEach(([r,a],o)=>{const l=o%3===0?w.frondLight:o%3===1?w.frond:w.frondDark,c=[[.35,.05,.5],[.8,-.05,.46],[1.2,-.25,.4],[1.5,-.55,.32]];for(const[h,u,d]of c)i.push(T(n+r*h,e+u,a*h,d,.14,d,l))}),i.push(T(n,e+.05,0,.6,.22,.6,w.frond)),i.push(T(n+.18,e-.22,.12,.2,.2,.2,w.coconut)),i.push(T(n-.16,e-.24,-.08,.2,.2,.2,w.coconut)),i.push(T(n+.02,e-.26,-.2,.2,.2,.2,w.coconut)),i}function qu(i,t,e,n,s=2){const r=Vi.x*s,a=Vi.z*s,o=Math.floor(i.minX/r),l=Math.ceil(i.maxX/r),c=Math.floor(i.minZ/a),h=Math.ceil(i.maxZ/a),u=[];for(let d=c;d<h;d++){let f=null;for(let p=o;p<=l;p++){const _=p<l?t((p+.5)*r,(d+.5)*a):1/0,m=_<1||_<e&&(p+d&1)===0;m&&f===null&&(f=p),!m&&f!==null&&(u.push({x:f*r,z:d*a,w:(p-f)*r,d:a,color:n}),f=null)}}return u}function tv(i,t){const e=t===0?w.grassDark:w.grassLight,n=[];for(const s of i){const r=Fn(Math.round(s.x*977)^Math.round(s.z*131)),a=s.scale,o=[{x:0,z:0,rx:1.4*a,rz:.62*a}];for(let h=0;h<2;h++)o.push({x:(r()-.5)*1.8*a,z:(r()-.5)*.7*a,rx:(.45+r()*.5)*a,rz:(.3+r()*.28)*a});const l=(h,u)=>Math.min(...o.map(d=>Math.hypot((h-s.x-d.x)/d.rx,(u-s.z-d.z)/d.rz))),c=2.6*a;n.push(...qu({minX:s.x-c,maxX:s.x+c,minZ:s.z-c/2,maxZ:s.z+c/2},l,1.28,e))}return n}function ev(i){const[t,e]=i===0?[w.frond,w.frondDark]:[w.frondLight,w.frond];return[T(0,0,0,1,.5,.8,e),T(-.1,.5,.05,.7,.3,.6,t),T(.38,0,.1,.5,.36,.5,t)]}function nv(i){return i===0?[T(0,0,0,.9,.42,.7,w.rock),T(.08,.42,-.04,.58,.26,.48,w.rockLight)]:i===1?[T(0,0,0,.6,.34,.6,w.rockDark),T(.42,0,.1,.4,.22,.4,w.rock)]:[T(0,0,0,1,.5,.8,w.rock),T(-.1,.5,.05,.7,.32,.55,w.rockLight),T(-.05,.82,0,.36,.18,.3,w.rockLight)]}function iv(){return[T(-.1,0,0,.07,.24,.07,w.grassLight),T(.04,0,.05,.07,.32,.07,w.grassDark),T(.13,0,-.04,.07,.2,.07,w.grassLight)]}const jc=[16769955,16164544,16774371];function sv(i){return[T(0,0,0,.06,.2,.06,w.frondDark),T(0,.2,0,.18,.12,.18,jc[i%jc.length])]}function th(i){const t=i===0?w.cowWhite:w.cowTan,e=[T(0,.5,0,1.4,.7,.72,t),T(-.72,.85,0,.1,.4,.1,t),T(-.74,.62,0,.14,.14,.14,w.cowSpot)];for(const[n,s]of[[.5,.25],[.5,-.25],[-.5,.25],[-.5,-.25]])e.push(T(n,.1,s,.18,.4,.18,t)),e.push(T(n,0,s,.2,.12,.2,w.hoof));return i===0&&(e.push(T(-.2,.9,.2,.5,.31,.34,w.cowSpot)),e.push(T(.35,.75,-.25,.34,.3,.24,w.cowSpot))),e}function eh(i){const t=i===0?w.cowWhite:w.cowTan;return[T(.22,-.2,0,.44,.42,.46,t),T(.48,-.2,0,.12,.22,.36,w.muzzle),T(.3,.14,.3,.12,.1,.18,t),T(.3,.14,-.3,.12,.1,.18,t),T(.38,0,.17,.06,.08,.06,w.cowSpot),T(.38,0,-.17,.06,.08,.06,w.cowSpot)]}const Wr=11064552,rv=1512223,nh=2302510,ih=16769955,sh=15222063,av=[[11945274,9319212],[4157068,3101289]];function ov(){return[T(1.13,.43,.34,.06,.16,.24,16774358),T(1.13,.43,-.34,.06,.16,.24,16774358),T(-1.13,.43,.34,.06,.16,.24,16734780),T(-1.13,.43,-.34,.06,.16,.24,16734780)]}function lv(){return[T(-1.14,.41,.34,.06,.2,.28,16726826),T(-1.14,.41,-.34,.06,.2,.28,16726826)]}function cv(i,t){const e=[T(0,.22,0,2.2,.5,1.1,i),T(-.12,.72,0,1.2,.42,1,t),T(.49,.76,0,.06,.32,.86,Wr),T(-.73,.76,0,.06,.32,.86,Wr),T(-.12,.79,.5,.96,.24,.02,Wr),T(-.12,.79,-.5,.96,.24,.02,Wr),T(1.12,.24,0,.06,.16,1,nh),T(-1.12,.24,0,.06,.16,1,nh),T(1.12,.44,.34,.04,.14,.22,ih),T(1.12,.44,-.34,.04,.14,.22,ih),T(-1.12,.44,.34,.04,.14,.22,sh),T(-1.12,.44,-.34,.04,.14,.22,sh)];for(const[n,s]of[[.68,.5],[.68,-.5],[-.68,.5],[-.68,-.5]])e.push(T(n,0,s,.48,.46,.2,rv));return e}function hv(){const i=[];for(const o of O_())i.push(T(o.x,0,o.z,.18,.9,.18,w.fencePost));const{minX:t,maxX:e,minZ:n,maxZ:s}=Re,r=(t+e)/2,a=[[t,e,n],[t,r-2.5,s],[r+2.5,e,s]];for(const[o,l,c]of a)for(const h of[.32,.66])i.push({x:o,y:h,z:c-.05,w:l-o,h:.1,d:.1,color:w.fence});for(const o of[t,e])for(const l of[.32,.66])i.push({x:o-.05,y:l,z:n,w:.1,h:.1,d:s-n,color:w.fence});return kt(i)}function co(i,t,e,n,s){return[T(i,t,e,.18*n,.4*n,.18*n,w.trunkDark),T(i,t+.32*n,e,.86*n,.5*n,.74*n,s?w.frondDark:w.frond),T(i+.06*n,t+.82*n,e-.04*n,.52*n,.32*n,.46*n,s?w.frond:w.frondLight)]}function uv(){const i=[],t=Fn(5143),{z:e,layers:n,layerHeight:s}=ie,r=[w.mountainLow,w.mountainLow,w.mountainMid,w.mountainMid,w.mountainHigh,w.mountainPeak],a=[8824703,8824703,8362624,8362624,9407139,10854068],o=[w.grassDark,w.grassDark,6982239,6982239,w.rockLight,w.rockLight],l=[4875849,4875849,4677708,4677708,6117488,7498626],c={minX:Pn.x-Pn.halfWidth-.45,maxX:Pn.x+Pn.halfWidth+.45},h=(p,_)=>_<c.minX||p>c.maxX,u=p=>Math.round(p*16)/16;for(let p=0;p<n;p++){const _=vi(p),m=_.ledge;i.push(T(_.cx,_.y,e,_.hx*2,s,_.hz*2,r[p])),i.push({x:m.minX,y:_.y,z:e-_.hz*.55,w:m.maxX-m.minX,h:s*1.35,d:_.hz*1.4,color:r[p]}),i.push({x:_.minX,y:_.y,z:_.front,w:_.hx*2,h:s-.01,d:.015,color:a[p]}),i.push({x:m.minX,y:_.top,z:m.front,w:m.maxX-m.minX,h:s*.35-.01,d:.015,color:a[p]});for(let g=0;g<Math.round(_.hx/3);g++){const S=u(1.4+t()*4.6),b=u(_.minX+.3+t()*(_.hx*2-S-.6)),y=_.y+.35+Math.floor(t()*(s-.75)*8)/8;h(b,b+S)&&i.push({x:b,y,z:_.front-.02,w:S,h:.1,d:.2,color:o[p]})}for(let g=0;g<Math.round(_.hx/4);g++){const S=u(.12+t()*.14),b=u(.5+t()*1),y=u(_.minX+.4+t()*(_.hx*2-.8)),C=_.y+t()*(s-b);h(y,y+S)&&i.push({x:y,y:C,z:_.front-.02,w:S,h:b,d:.05,color:l[p]})}if(p<n-1){const g=vi(p+1),S=p<3?Math.round(_.hx/2.2):Math.round(_.hx/4);for(let b=0;b<S;b++){const y=_.minX+.6+t()*(_.hx*2-1.2),C=.8+t()*.45,R=t()<.55;if(!h(y-.5,y+.5)||y>m.minX-.6&&y<m.maxX+.6)continue;const E=y<g.minX-.6||y>g.maxX+.6?e-_.hz+.5:g.front+.45,H=E+t()*Math.max(0,_.front-.45-E);i.push(...co(y,_.top,H,C,R))}}}const d=vi(0);for(let p=d.minX+1.2;p<d.maxX-1;p+=2.6+t()*3){if(Math.abs(p-tn.x)<tn.rx+1.2)continue;const _=.7+t()*.8;i.push(T(p,0,d.front-.25,_,.35+t()*.5,.7,t()<.5?w.rock:w.rockDark))}for(const p of[-1,1])i.push(T(tn.x+p*(tn.rx+.5),0,d.front-.2,1,.7,.8,w.rock)),i.push(T(tn.x+p*(tn.rx+.45),.7,d.front-.25,.6,.3,.5,w.rockLight));const f=vi(Pn.fromLayer);i.push(T(Pn.x,f.top,f.front-1.35,2.4,.65,.9,w.rockDark));for(let p=Pn.fromLayer-1;p>=0;p--){const _=vi(p);for(const m of[-1,1])i.push(T(Pn.x+m*(Pn.halfWidth+.28),_.top,_.front-.3,.42,.28,.4,w.rock))}return i.push(T(ie.x+30,0,e+2,14,2.4,10,w.mountainLow)),i.push(T(ie.x+31,2.4,e+2,8,1.8,6,w.mountainMid)),i.push(...co(ie.x+26,2.4,e+6.2,1,!0)),i.push(...co(ie.x+35.5,2.4,e+6.4,.9,!1)),kt(i)}function dv(){const{x:i,halfWidth:t,fromLayer:e}=Pn,n=vi(e),s=[[n.top,n.front-.9]];for(let c=e;c>=0;c--){const h=vi(c);s.push([h.top,h.front],[h.y,h.front])}s.push([0,vi(0).front+.9]);const r=[],a=[];let o=0;for(let c=0;c<s.length-1;c++){const[h,u]=s[c],[d,f]=s[c+1],p=Math.hypot(d-h,f-u),_=h===d?.02:0,m=u===f?.03:0,g=o/2,S=(o+p)/2,b=[[i-t,h+_,u+m,0,g],[i+t,h+_,u+m,1,g],[i+t,d+_,f+m,1,S],[i-t,d+_,f+m,0,S]];for(const y of[0,1,2,0,2,3]){const[C,R,x,E,H]=b[y];r.push(C,R,x),a.push(E,H)}o+=p}const l=new fn;return l.setAttribute("position",new Te(r,3)),l.setAttribute("uv",new Te(a,2)),l.computeBoundingSphere(),l}function yi(i){const t=new Su;return i.forEach((e,n)=>n===0?t.moveTo(e.x,-e.z):t.lineTo(e.x,-e.z)),t.closePath(),t}function rh(i,t,e){const n=new Sa(i,1);n.rotateX(-Math.PI/2),n.translate(0,t,0);const s=n.getAttribute("position").count,r=new Kt(e),a=new Float32Array(s*3);for(let o=0;o<s;o++)a.set([r.r,r.g,r.b],o*3);return n.setAttribute("color",new Sn(a,3)),n}function fv(){const i=rh(yi(Mn(1)),0,w.sand),t=rh(yi(Mn(vn)),.004,w.grass),e=Mn(1),n=[];return e.forEach((s,r)=>{const a=e[(r+1)%e.length],o=Math.min(s.x,a.x),l=Math.min(s.z,a.z);n.push({x:o-.2,y:-.42,z:l-.2,w:Math.abs(a.x-s.x)+.4,h:.41,d:Math.abs(a.z-s.z)+.4,color:w.sandDark})}),[i,t,kt(n,!1)]}function ho(i,t,e,n,s=48){const r=[];for(let a=0;a<s;a++){const o=a/s*Math.PI*2;r.push({x:i+Math.cos(o)*e,z:t+Math.sin(o)*n})}return r}function pv(){const i=yi(Mn(.992));return i.holes.push(new Ss(Mn(.983).map(t=>new Pt(t.x,-t.z)))),i}function mv(){const{x:i,z:t,rx:e,rz:n}=tn,s=yi(ho(i,t,e,n,32));return s.holes.push(new Ss(ho(i,t+.05,e-.2,n-.16,32).map(r=>new Pt(r.x,-r.z)))),{pool:yi(ho(i,t,e,n,32)),foam:s}}function gv(){const i=yi(Mn(1.16));i.holes.push(new Ss(Mn(1).map(n=>new Pt(n.x,-n.z))));const t=yi(Mn(1.016));t.holes.push(new Ss(Mn(.997).map(n=>new Pt(n.x,-n.z))));const e=[];for(let n=0;n<48;n++){const s=n/48*Math.PI*2;e.push({x:Zt.x+Math.cos(s)*Zt.rx,z:Zt.z+Math.sin(s)*Zt.rz})}return{shallow:i,foam:t,pond:yi(e)}}const ah=be/Math.round(be/2);function xv(i=0,t=be){const e=[],n=[],s=new Kt,r=(d,f,p,_,m,g)=>{s.setHex(g);for(const S of[d,p,f,d,_,p])e.push(S.x,m,S.z),n.push(s.r,s.g,s.b)},a=.5,o=Math.ceil(be/a),l=Le.halfWidth,c=.12;for(let d=Math.floor(i/a);d<Math.min(o,Math.ceil(t/a));d++){const f=d*a,p=Math.min((d+1)*a,be),_=nn(f),m=nn(p),g=(S,b)=>({x:S.x+S.nx*b,z:S.z+S.nz*b});r(g(_,-l),g(m,-l),g(m,l),g(_,l),.012,w.asphalt),r(g(_,l-.2-c),g(m,l-.2-c),g(m,l-.2),g(_,l-.2),.016,w.roadLine),r(g(_,-l+.2),g(m,-l+.2),g(m,-l+.2+c),g(_,-l+.2+c),.016,w.roadLine),f%ah<ah/2-.01&&r(g(_,-c/2),g(m,-c/2),g(m,c/2),g(_,c/2),.016,w.roadDash)}const h=new fn;h.setAttribute("position",new Te(e,3)),h.setAttribute("color",new Te(n,3));const u=new Float32Array(e.length);for(let d=1;d<u.length;d+=3)u[d]=1;return h.setAttribute("normal",new Sn(u,3)),h}const Xr=15722198,oh=4143949;function ni(i,t,e,n,s,r,a,o=.25){const l=new Kt(a);for(let c=t;c<e-1e-6;c+=o){const h=nn(c),u=nn(Math.min(c+o,e)),d=(p,_)=>({x:p.x+p.nx*_,z:p.z+p.nz*_}),f=[d(h,n),d(u,n),d(u,s),d(h,s)];for(const p of[0,2,1,0,3,2])i.positions.push(f[p].x,r,f[p].z),i.colors.push(l.r,l.g,l.b)}}function _v(i){const t=new fn;t.setAttribute("position",new Te(i.positions,3)),t.setAttribute("color",new Te(i.colors,3));const e=new Float32Array(i.positions.length);for(let n=1;n<e.length;n+=3)e[n]=1;return t.setAttribute("normal",new Sn(e,3)),t.computeBoundingSphere(),t}function vv(i,t){const e={positions:[],colors:[]},n=Le.halfWidth,s=.019;for(let r=0;r<3;r++)for(let a=0;a<10;a++){const o=-n+a*2*n/10;ni(e,t-.45+r*.3,t-.15+r*.3,o,o+2*n/10,s,(r+a)%2?w.ink:Xr,.3)}for(const r of i)for(let a=0;a<6;a++){const o=-n+.25+a*.45;ni(e,r-.7,r+.7,o,o+.25,s,Xr,.35)}for(const r of[30,100,190,280])ni(e,r,r+1,-.75-.06,-.75+.06,s,Xr,.25),[.5,.36,.22,.08].forEach((o,l)=>{ni(e,r+1+l*.125,r+1.125+l*.125,-.75-o/2,-.75+o/2,s,Xr,.125)});for(const[r,a,o]of[[44,56,.55],[222,232,-.6]])ni(e,r,a,o,o+.07,s,oh,.5),ni(e,r+.4,a-.6,o+.3,o+.37,s,oh,.5);for(const[r,a]of[[120,-.6],[262,.5],[335,-.4]])ni(e,r,r+.4,a-.2,a+.2,s,3815239,.4),ni(e,r+.17,r+.23,a-.2,a+.2,s+.001,6117488,.06),ni(e,r,r+.4,a-.03,a+.03,s+.001,6117488,.4);return _v(e)}function Mv(){const i=[],t=Le.halfWidth;let e=0;for(let n=0;n<be-1e-6;e++){const s=nn(n+.125),r=Math.abs(s.tx)>.02&&Math.abs(s.tz)>.02,a=r?.25:.5,o=nn(n+a/2);for(const l of[-1,1]){const c=o.x+o.nx*l*(t+.1),h=o.z+o.nz*l*(t+.1);if(r)i.push(T(c,0,h,.2,.05,.2,Math.floor(e/2)%2?w.cream:w.magenta));else{const u=Math.abs(o.tx)>=Math.abs(o.tz);i.push(T(c,0,h,u?a+.02:.14,.05,u?.14:a+.02,e%2?w.rock:w.rockLight))}}n+=a}return i}function Sv(i,t){const e=String(i),n=(e.length*4+3)/16;return[T(0,0,0,.1,.62,.1,w.cream),T(0,.62,0,n,.5,.06,w.cream),T(0,.62,.031,n-2/16,.07,.01,w.sunset),...t(e,0,1.03,.035,w.ink)]}function yv(){return{pole:[T(0,0,0,.26,.12,.26,4867672),T(0,0,0,.12,2.5,.12,6117488),{x:0,y:2.42,z:-.05,w:1,h:.08,d:.1,color:6117488},T(1,2.32,0,.36,.14,.22,4867672)],bulb:[T(1,2.26,0,.24,.06,.14,16773572)]}}function uo(i,t,e,n,s,r=0){const a=Vi.x*2,o=Vi.z*2,l=i-e,c=t+n,h=[];for(let u=Math.floor(-c*1.1*ln/o);u<=Math.ceil(c*1.1*ln/o);u++){const d=(u+.5)*o,f=d/ln,p=dn*Math.sqrt(Math.max(0,(c*1.1)**2-f*f)),_=dn*Math.sqrt(Math.max(0,(l*.9)**2-f*f));for(const m of[-1,1]){let g=null;const S=Math.floor(_/a),b=Math.ceil(p/a),y=C=>{if(g===null)return;const R=m>0?g:-C;h.push({x:R*a,z:u*o,w:(C-g)*a,d:o,color:s}),g=null};for(let C=S;C<=b;C++){const R=m*(C+.5)*a,x=C<b?On(R,d):1/0,E=x>=i&&x<=t||(x>=l&&x<i||x>t&&x<=c)&&(C+u+r+(m>0?0:1)&1)===0;E&&g===null&&(g=C),E||y(C)}y(b)}}return h}function Ev(){const i=Fn(77),t=[];for(let e=0;e<8;e++){const n=i()*Math.PI*2,s=.25+i()*.5,r=Zt.x+Math.cos(n)*Zt.rx*s,a=Zt.z+Math.sin(n)*Zt.rz*s,o=.35+i()*.25;t.push(...qu({minX:r-o,maxX:r+o,minZ:a-o,maxZ:a+o},(l,c)=>{const h=Math.atan2(c-a,l-r);return Math.abs(h-n)<.35?9:Math.hypot((l-r)/o,(c-a)/(o*.8))},1,e%2?w.frond:w.frondLight))}return t}function bv(){const i=Fn(77),t=[];for(let e=0;e<8;e++){const n=i()*Math.PI*2,s=.25+i()*.5;i(),!(e%3)&&t.push(T(Zt.x+Math.cos(n)*Zt.rx*s,.012,Zt.z+Math.sin(n)*Zt.rz*s,.14,.08,.14,16164544))}return t}function wv(){const i=Fn(31),t=[];for(let e=0;e<7;e++){const n=-Math.PI*.95+i()*Math.PI*.9,s=Zt.x+Math.cos(n)*Zt.rx*1.02,r=Zt.z+Math.sin(n)*Zt.rz*1.02;for(let a=0;a<5;a++){const o=s+(i()-.5)*.8,l=r+(i()-.5)*.4,c=.45+i()*.35;t.push(T(o,0,l,.05,c,.05,a%2?w.frondDark:w.frond)),a%2===0&&t.push(T(o,c-.04,l,.08,.16,.08,w.trunkDark))}}return t}function Tv(){const{x:i,z0:t,z1:e,halfWidth:n}=en,s=[];let r=0;for(let a=t;a<e-1e-6;a+=.25,r++)s.push({x:i-n,y:-.14,z:a,w:n*2-(r%5===2?.25:0),h:.16,d:.23,color:r%2?w.wood:w.woodDark});s.push({x:i-n-.04,y:-.2,z:t,w:.12,h:.12,d:e-t,color:w.trunkDark}),s.push({x:i+n-.08,y:-.2,z:t,w:.12,h:.12,d:e-t,color:w.trunkDark});for(let a=t+2.5;a<=e;a+=2)for(const o of[-1,1])s.push(T(i+o*(n-.05),-.7,a,.18,.95,.18,w.trunk));return s.push(T(i+n-.15,0,e-.3,.12,1.3,.12,w.trunkDark)),s.push(T(i-n+.35,.02,e-.6,.34,.08,.34,w.canvas)),kt(s,!1)}function Av(){return[T(-.1,0,0,1.8,.3,.84,w.purpleDark),T(.95,.04,0,.3,.26,.56,w.purpleDark),T(1.18,.08,0,.16,.22,.28,w.purpleDark),T(-.1,.3,0,1.7,.02,.66,w.woodDark),T(-.45,.3,0,.18,.08,.66,w.wood),T(.35,.3,0,.18,.08,.66,w.wood),T(-.1,.3,.38,1.8,.08,.08,w.cream),T(-.1,.3,-.38,1.8,.08,.08,w.cream),T(-.98,.3,0,.08,.08,.84,w.cream),T(.95,.3,.26,.3,.08,.08,w.cream),T(.95,.3,-.26,.3,.08,.08,w.cream),T(1.15,.3,0,.12,.08,.3,w.cream),T(-.05,.38,.1,1.3,.04,.06,w.trunk),T(.62,.38,.1,.24,.04,.14,w.trunk)]}const lh={0:"111101101101111",1:"010110010010111",2:"111001111100111",3:"111001011001111",4:"101101111001001",5:"111100111001111",6:"111100111101111",7:"111001010010010",8:"111101111101111",9:"111101111001111",":":"000010000010000",".":"000000000000010","-":"000000111000000","!":"010010010000010","?":"111001011000010"," ":"000000000000000",A:"010101111101101",B:"110101110101110",C:"011100100100011",D:"110101101101110",E:"111100110100111",F:"111100110100100",G:"011100101101011",H:"101101111101101",I:"111010010010111",J:"001001001101010",K:"101101110101101",L:"100100100100111",M:"101111111101101",N:"110101101101101",O:"010101101101010",P:"110101110100100",R:"110101110101101",S:"011100010001110",T:"111010010010010",U:"101101101101111",V:"101101101101010",W:"101101111111101",X:"101101010101101",Y:"101101010010010"},Ws=3,Rv=5;function ba(i){return i.length===0?0:i.length*(Ws+1)-1}function Ol(i,t,e,n){const s=[];return[...i.toUpperCase()].forEach((r,a)=>{const o=lh[r]??lh["?"];for(let l=0;l<Rv;l++){let c=-1;for(let h=0;h<=Ws;h++){const u=h<Ws&&o[l*Ws+h]==="1";u&&c<0&&(c=h),!u&&c>=0&&(s.push([t+a*(Ws+1)+c,e+l,h-c,1,n]),c=-1)}}}),s}function $s(i,t,e,n,s){for(const[r,a,o,l,c]of Ol(t,e,n,s))i.fillStyle=c,i.fillRect(r,a,o,l)}const fo=8,Cv=Le.halfWidth+1.5,ch=10,hh="roam-lap";class Pv{running=!1;time=0;best=null;ghost=null;recording=[];nextCheckpoint=0;prevLapS=null;constructor(){try{const t=localStorage.getItem(hh);if(!t)return;const e=JSON.parse(t);typeof e.best=="number"&&e.best>0&&(this.best=e.best),Array.isArray(e.ghost)&&e.ghost.every(n=>typeof n=="number")&&(this.ghost=e.ghost)}catch{}}reset(){this.running=!1,this.time=0,this.prevLapS=null}update(t,e,n,s){const r=be,a=dr(e,n)<Cv,o=((Bu(e,n)-Zs)%r+r)%r,l=this.prevLapS;if(this.prevLapS=a?o:null,this.running&&s)for(this.time+=t;this.recording.length/2<Math.floor(this.time*ch)+1;)this.recording.push(e,n);if(!a||l===null)return null;const c=l>r-8&&o<8;if(l<8&&o>r-8)return this.running=!1,null;if(this.running&&this.nextCheckpoint<fo){const d=this.nextCheckpoint*r/fo;o>=d&&o<d+12&&this.nextCheckpoint++}if(!c)return null;let u=null;if(this.running&&this.nextCheckpoint>=fo){const d=this.time,f=this.best===null||d<this.best;f&&(this.best=d,this.ghost=this.recording.map(p=>Math.round(p*100)/100),this.save()),u={time:d,newBest:f}}return this.running=!0,this.time=0,this.nextCheckpoint=1,this.recording=[e,n],u}ghostAt(t){const e=this.ghost;if(!e)return null;const n=t*ch,s=Math.floor(n);if(s+1>=e.length/2)return null;const r=n-s,a=e[s*2],o=e[s*2+1],l=e[s*2+2],c=e[s*2+3];return{x:a+(l-a)*r,z:o+(c-o)*r,dx:l-a,dz:c-o}}save(){try{localStorage.setItem(hh,JSON.stringify({best:this.best,ghost:this.ghost}))}catch{}}}function fs(i){const t=Math.floor(i*10),e=Math.floor(t/600),n=Math.floor(t%600/10);return`${e}:${String(n).padStart(2,"0")}.${t%10}`}const Rt=1/16,Tt=1/(16*Math.cos(Ul));function Wi(i,t,e,n,s,r=1,a=.03){const o=t-ba(i)*Rt*r/2;return Ol(i,0,0,"").map(([l,c,h,u])=>({x:o+l*Rt*r,y:e-(c+u)*Tt*r,z:n,w:h*Rt*r,h:u*Tt*r,d:a,color:s}))}function Lv(i,t,e,n,s,r=1){const a=Vi.z*r,o=t-ba(i)*Rt*r/2,l=e-5*a/2;return Ol(i,0,0,"").map(([c,h,u,d])=>({x:o+c*Rt*r,y:n,z:l+h*a,w:u*Rt*r,h:.01,d:d*a,color:s}))}function Ku(i,t,e,n,s=.02){return i.flatMap(([r,a,o,l,c])=>c.startsWith("#")?[{x:t+r*Rt,y:e-(a+l)*Tt,z:n,w:o*Rt,h:l*Tt,d:s,color:parseInt(c.slice(1),16)}]:[])}function Zu(i,t,e,n){for(const[s,r,a,o,l]of t)i.fillStyle=l,i.fillRect(s+e,r+n,a,o)}const lr=(i,t,e,n=0)=>Math.floor(((i/t+n)%1+1)%1<.5?0:e)*Tt;function Dv(i,t,e,n,s,r,a=.42){const o=[],l=[[],[]],c=Math.max(2,Math.round((t-i)/a));for(let h=0;h<=c*3;h++){const u=i+(t-i)*h/(c*3),d=(u-(i+t)/2)/((t-i)/2);o.push({x:u,y:e-s*(1-d*d),z:n,w:(t-i)/(c*3)+.01,h:Tt,d:.03,color:w.ink})}for(let h=1;h<c;h++){const u=i+(t-i)*h/c,d=(u-(i+t)/2)/((t-i)/2),f=e-s*(1-d*d),p=r[h%r.length];l[h%2].push({x:u-1.5*Rt,y:f-2*Tt,z:n,w:3*Rt,h:2*Tt,d:.03,color:p},{x:u-.5*Rt,y:f-4*Tt,z:n,w:1*Rt,h:2*Tt,d:.03,color:p})}return{line:o,flags:l}}const uh=i=>(t,e)=>{t.position.y=e.wake>.5&&Math.floor(e.t*5)%2===i?Tt:0};function dh(i,t,e,n,s,r,a){const o=[];for(let l=0;l<n;l++)for(let c=0;c<e;c++)o.push({x:i+c*2*Rt,y:t+(n-1-l)*2*Tt,z:s,w:2*Rt,h:2*Tt,d:.03,color:(l+c)%2?r:a});return o}function Nv(){const i=[];for(const n of[-2.6,2.6])i.push(T(n,0,0,.92,.32,.92,w.purpleDark),T(n,.32,0,.8,.08,.8,w.purpleLight),T(n,0,0,.7,3.55,.7,w.purple),T(n,3.55,0,.84,.14,.84,w.gold),T(n,1,.36,.46,.95,.02,w.cream),T(n,1.15,.375,.34,2*Tt,.01,w.sunset),T(n,1.3,.375,.34,2*Tt,.01,w.magenta),T(n-.18,1.9,.36,Rt*2,Tt*2,.02,w.purpleDark),T(n+.18,1.9,.36,Rt*2,Tt*2,.02,w.purpleDark));i.push(T(0,2.35,0,4.6,1.1,.4,w.sunset),T(0,2.27,0,4.6,.08,.46,w.gold),T(0,3.45,0,4.6,.08,.46,w.gold),...Wi("START",Rt*2,3.32-Tt*2,.2,w.purpleDark,2,.02),...dh(-2.05,2.55,4,3,.2,w.ink,w.cream),...dh(2.05-8*Rt,2.55,4,3,.2,w.ink,w.cream),T(0,3.53,0,1.85,.72,.36,w.ink),T(0,3.53,0,1.95,.06,.42,w.purpleDark));for(let n=0;n<12;n++)i.push({x:-3+n*.5,y:0,z:1.6,w:.5,h:.02,d:.25,color:n%2?w.ink:w.cream}),i.push({x:-3+n*.5,y:0,z:1.85,w:.5,h:.02,d:.25,color:n%2?w.cream:w.ink});i.push({x:-2.2,y:0,z:1.05,w:4.4,h:.015,d:.45,color:w.ink});for(let n=0;n<9;n++)i.push(T(-2+n*.5,.015,1.27,Rt*2,.01,.06,w.gold));const t=Dv(-2.25,2.25,2.2,.22,.3,[w.gold,w.magenta,w.sky,w.cream]);i.push(...t.line);const e=n=>{const s=[],r=[[-.2,.62,w.magenta],[.18,.72,w.sky],[0,.98,w.gold]];for(const[a,o,l]of r)s.push(T(a,o,0,.36,.38,.3,l)),s.push(T(a,o+.05,0,.44,.26,.24,l)),s.push(T(a-.09,o+.27,.15,Rt*2,Tt*2,.01,w.cream)),s.push(T(a,o-.06,0,Rt*2,.06,Rt*2,l)),s.push(T(a*.5,0,0,Rt,o-.06,Rt,w.ink));return{boxes:s,at:[n*2.6,3.69,0],animate:(a,o)=>a.position.y=3.69+lr(o.t,1.6,1,n>0?.5:0)}};return{boxes:i,parts:[{boxes:Wi("START",0,3.32,.21,w.cream,2,.03),glow:!0,animate:(n,s)=>{n.material.uniforms.uBoost.value=s.wake>.9&&Math.floor(s.t*2.5)%2?.82:1}},{boxes:t.flags[0],animate:uh(0)},{boxes:t.flags[1],animate:uh(1)},e(-1),e(1)],screens:[{cols:25,rows:7,at:[0,3.53+.36,.19],fps:10,draw:(n,s)=>{n.fillStyle="#23222E",n.fillRect(0,0,25,7);let r,a=s.wake>.5?"#FFE3A3":"#FFC94D";if(s.lap!==null)r=fs(s.lap);else if(s.best!==null)r=Math.floor(s.t/1.5)%2===0||s.still?"BEST":fs(s.best),a="#7EC8E8";else{const o=Math.floor(s.elapsed),l=Math.floor(s.t*2)%2===0||s.still?":":" ";r=`${String(Math.floor(o/60)%100).padStart(2,"0")}${l}${String(o%60).padStart(2,"0")}`}$s(n,r,Math.floor((25-ba(r))/2),1,a)}}],shadows:[{x:-2.6,z:0,w:.95,d:.95,lift:.5},{x:2.6,z:0,w:.95,d:.95,lift:.5},{x:0,z:0,w:4.6,d:.4,lift:2.9}],height:4.6}}const Iv=[..._l,...Bh],Uv=[..._l,...kh];function Fv(){const i=[T(0,0,-.55,4.4,3,2.2,w.purple),T(0,3,-.55,4.5,.1,2.3,w.purpleDark),T(0,.84,.57,2.95,2.18,.04,w.ink),T(0,0,.85,4.6,.85,.6,w.purpleLight),T(0,.85,.85,4.7,.08,.68,w.gold),T(0,.2,1.16,4.2,.4,.02,w.purpleDark),T(-1.85,1.3,.56,.6,.95,.02,w.cream),T(-1.85,1.4,.575,.48,.5,.01,w.sunsetLight),T(-1.85,1.4,.58,.48,.16,.01,w.magenta),T(-1.85,1.75,.58,.2,.12,.01,w.gold),T(1.85,1.3,.56,.6,.95,.02,w.cream),T(1.85,1.4,.575,.48,.5,.01,w.sky),T(1.85,1.4,.58,.48,.2,.01,w.mountainLow),T(1.8,1.6,.585,.2,.18,.01,w.mountainHigh),T(1.7,0,1.45,.1,.55,.1,w.ink),T(1.7,.18,1.45,.34,.05,.34,w.ink),T(1.7,.55,1.45,.46,.1,.46,w.magenta)];for(let e=0;e<8;e++){const n=e%2?w.cream:w.sunset;i.push({x:-2.4+e*.6,y:3,z:-1.75,w:.6,h:.16,d:2.4,color:n})}i.push({x:-2.45,y:3,z:.62,w:4.9,h:.16,d:.04,color:w.gold});const t=e=>{const n=[];for(let s=e;s<9;s+=2)n.push(T(-2.4+s*.6,3.04,.68,Rt*2,Tt*2,Rt*2,16769955));return{boxes:n,glow:!0,duskOnly:!0,animate:(s,r)=>s.visible=r.lit&&(r.wake<.5||Math.floor(r.t*3)%2===e)}};return{boxes:i,parts:[t(0),t(1)],screens:[{cols:44,rows:24,at:[0,.9+24*Tt/2,.6],fps:10,draw:(e,n)=>{if(e.fillStyle="#140B2E",e.fillRect(0,0,44,24),n.wake<.12){Math.floor(n.t*1.5)%2===0&&(e.fillStyle="#FFC94D",e.fillRect(3,18,3,3));return}e.fillStyle="#FFC94D",e.fillRect(0,0,44,1),e.fillRect(0,23,44,1),e.fillRect(0,0,1,24),e.fillRect(43,0,1,24),e.fillStyle="#2B1B57",e.fillRect(2,2,17,20);const s=n.wake>.95&&Math.floor(n.t/.45)%2===1;Zu(e,s?Uv:Iv,2,2),$s(e,"JUAN",22,3,"#FFF4E3"),e.fillStyle="#6E55A8",e.fillRect(22,9,20,1),$s(e,"42087",22,11,"#FFC94D"),$s(e,"P1",22,17,"#C2366B"),Math.floor(n.t*2)%2===0&&(e.fillStyle="#FFF4E3",e.fillRect(31,17,3,5));const r=Math.min(24,Math.ceil((n.wake-.12)/.6*24));r<24&&(e.fillStyle="#140B2E",e.fillRect(0,r,44,24-r),e.fillStyle="#7EC8E8",e.fillRect(0,r,44,1))}}],shadows:[{x:.3,z:-.3,w:4.6,d:2.6}],height:3.5}}function Ov(){const i=[];for(const o of[-2.4,2.4])i.push(T(o,0,0,.35,2.95,.35,w.trunk),T(o,0,0,.45,.25,.45,w.trunkDark),T(o-.09,.4,.18,Rt,2.2,.01,w.trunkDark));i.push(T(0,.85,0,5.2,1.85,.26,w.wood),T(0,.85,.02,5.4,.12,.3,w.woodDark),T(0,2.62,.02,5.4,.12,.3,w.woodDark));for(const o of[1.3,1.75,2.2])i.push(T(0,o,.135,5.2,Tt,.01,w.woodDark));i.push(T(0,2.9,0,5.9,.16,1,w.purpleDark),T(0,3.06,-.05,5.6,.16,.8,w.purple),T(0,3.22,-.1,5.3,.1,.5,w.purpleLight));for(let o=0;o<14;o++)i.push(T(-2.75+o*.42,2.9,.49,Rt,.16,.02,w.purple));[[-1.6,1.4,.8,.9,w.cream],[-.5,1.15,.8,1,w.cream],[.6,1.45,.9,.8,w.cream],[1.65,1.1,.7,.9,w.sunsetLight]].forEach(([o,l,c,h,u],d)=>{i.push(T(o,l,.16,c,h,.04,u)),i.push(T(o,l+h-Tt*2,.185,Rt*2,Tt*2,.02,d%2?w.gold:w.magenta));for(let _=0;_<3;_++){const m=c*(.7-(_+d)%3*.15);i.push({x:o-c/2+.1,y:l+h-.28-_*Tt*3,z:.18,w:m,h:Tt,d:.01,color:w.ink})}const f=o+c/2-.22,p=l+.12;i.push({x:f,y:p+Tt,z:.18,w:Rt,h:Tt,d:.012,color:w.gold},{x:f+Rt,y:p,z:.18,w:Rt,h:Tt,d:.012,color:w.gold},{x:f+2*Rt,y:p+Tt,z:.18,w:Rt,h:Tt,d:.012,color:w.gold},{x:f+3*Rt,y:p+2*Tt,z:.18,w:Rt,h:Tt,d:.012,color:w.gold})}),i.push(T(-2.85,0,.95,.6,.55,.55,w.wood),T(-2.85,.27,1.23,.6,Tt,.01,w.woodDark),T(-2.85,0,1.23,Rt*2,.55,.01,w.woodDark),T(2.85,0,1,.5,.7,.5,w.trunk),T(2.85,.12,1,.56,.08,.56,w.trunkDark),T(2.85,.5,1,.56,.08,.56,w.trunkDark),T(2.85,.7,1,.42,.02,.42,w.woodDark));const e=(o,l)=>o.position.y=3.3+(l.wake>.5?lr(l.t,.5,2):lr(l.t,2.4,1)),n={boxes:[T(0,0,0,.62,1.1,.1,w.purpleDark),T(0,-.25,0,Rt*2,.25,Rt*2,w.ink)],at:[0,3.3,0],animate:e},s={boxes:[{x:-2*Rt,y:1.1-6*Tt,z:.05,w:4*Rt,h:5*Tt,d:.03,color:w.gold},{x:-1*Rt,y:1.1-8*Tt,z:.05,w:2*Rt,h:2*Tt,d:.03,color:w.gold},{x:-2*Rt,y:1.1-11*Tt,z:.05,w:4*Rt,h:2*Tt,d:.03,color:w.gold}],glow:!0,at:[0,3.3,0],animate:e},r={boxes:[T(0,-.12,0,Rt,.12,Rt,w.ink),T(0,-.18,0,.3,.06,.3,w.ink),T(0,-.48,0,.3,.06,.3,w.ink),...[-1,1].flatMap(o=>[-1,1].map(l=>T(o*.12,-.42,l*.12,Rt,.24,Rt,w.ink)))],at:[2,2.9,.45],animate:(o,l)=>o.rotation.z=l.wake>.5?[0,.12,0,-.12][Math.floor(l.t*3)%4]:0},a={boxes:[T(0,-.41,0,.16,.2,.16,16763213),T(0,-.36,0,Rt*2,.1,.17,16774371)],glow:!0,duskOnly:!0,at:[2,2.9,.45],animate:(o,l)=>{o.visible=l.lit,o.rotation.z=l.wake>.5?[0,.12,0,-.12][Math.floor(l.t*3)%4]:0}};return{boxes:i,parts:[n,s,r,a],pools:[{x:2,z:.85,rx:.95,rz:.65,color:16763213}],shadows:[{x:.35,z:.3,w:5.6,d:.6}],height:4.3}}function zv(){const i=[T(0,.78,.6,4.6,.16,1.3,w.cream),T(0,.3,1.24,4.6,.48,.03,w.cream),T(0,.3,1.255,4.6,Tt*2,.02,w.sunset),T(-2.1,0,.6,.14,.78,1.1,w.canvas),T(2.1,0,.6,.14,.78,1.1,w.canvas),T(0,0,-.9,1.6,.9,.9,w.wood),T(0,.9,-.9,1.7,.12,1,w.woodDark),T(-.2,1.02,-.9,.9,.42,.6,w.gold),...Ku(zh,-.2-3*Rt,1.4,-.59),T(1.5,.94,.65,.5,.6,.5,w.sky),T(1.5,1.54,.65,.2,.12,.2,w.cream),T(1.5,1.1,.92,.1,.08,.06,w.ink),T(2.75,0,1.45,.45,.6,.45,w.frondDark),T(2.75,.6,1.45,.5,.06,.5,w.ink),T(2.68,.66,1.4,Rt*3,Tt*2,Rt*3,w.cream),T(2.85,.66,1.5,Rt*2,Tt*2,Rt*2,w.cream)],t=[w.cream,w.cream,w.cream];for(let s=0;s<3;s++)for(let r=0;r<3-s;r++){const a=-1.95+r*.24+s*.12,o=.94+s*.22;i.push(T(a,o,.5,.18,.2,.18,t[s])),i.push(T(a,o+.2-Tt,.5,.2,Tt,.2,w.sky))}[w.gold,w.sunset,w.sky,w.magenta].forEach((s,r)=>{i.push(T(-1+r*.3,.94,.75,.2,.24,.2,w.cream)),i.push(T(-1+r*.3,1.16,.75,.16,Tt,.16,s))});for(let s=0;s<4;s++){const r=.55+s*.1;i.push(T(r,.94,.55,.08,.08,.32,16767050),T(r,1,.36,.08,.08,.1,16767050),T(r,1,.74,.08,.08,.1,16767050),T(r,1.06,.31,.08,.06,.06,7031342))}for(const[s,r]of[[-2.5,-1.5],[2.5,-1.5],[-2.5,1.5],[2.5,1.5]])i.push(T(s,0,r,.14,2.6,.14,w.canvas)),i.push(T(s,0,r,.24,.08,.24,w.ink));for(let s=0;s<6;s++)i.push({x:-3+s,y:2.6,z:-1.8,w:1,h:.3,d:3.6,color:s%2?w.cream:w.sunset});i.push(T(0,2.9,0,6.2,.14,3.8,w.sunsetLight)),i.push(...Lv("AID",0,-.2,3.04,w.cream,3));for(let s=0;s<12;s++)i.push({x:-3+s*.5+.1,y:2.5,z:1.76,w:.3,h:.1,d:.04,color:s%2?w.cream:w.sunset});const e={boxes:[T(0,0,0,.2,.24,.2,w.cream),T(0,.22,0,.16,Tt,.16,w.sky)],at:[.2,.94,1.05],animate:(s,r)=>{s.visible=r.since>5,s.position.y=.94+(r.wake>.5?lr(r.t,.6,2):0)}},n={boxes:[T(0,0,0,Rt*2,Tt*2,Rt*2,w.sky)],at:[1.5,1,.95],animate:(s,r)=>{const a=r.t*1.4%1;s.visible=r.wake>.5,s.position.y=1.05-Math.floor(a*4)*Tt*2}};return{boxes:i,parts:[e,n],shadows:[{x:.3,z:.35,w:5.4,d:3.3}],height:3.2}}const po="#140B2E";function Bv(){const i=[],t=[],e=[];return[-1.25,1.25].forEach((n,s)=>{i.push(T(n,0,-.1,1.6,1,1.2,w.purple),T(n,1,-.2,1.6,1.9,1,w.purple),T(n,1,.45,1.6,.22,.66,w.purpleLight),T(n,2.9,-.15,1.7,.62,1.1,w.purpleDark),T(n,3.52,-.15,1.75,.08,1.15,w.gold),T(n,1.22,.31,1.36,1.38,.03,w.ink),T(n+.05,1.22,.62,.14,.06,.14,w.gold),T(n+.3,1.22,.6,.14,.06,.14,w.magenta),T(n+.55,1.22,.58,.14,.06,.14,w.sky),T(n,.25,.51,.7,.5,.02,w.purpleDark),...[0,1,2,3].map(r=>T(n-.62+r*.08,.1+r*.1,.505,.08,.1,.02,r%2?w.sunset:w.gold))),t.push({boxes:[T(0,0,0,1.5,.56,.03,s?w.magenta:w.sky),...Wi(s?"SELECT":"LEVEL",0,.56-Tt*1,.03,w.cream,1,.02)],glow:!0,at:[n,2.92,.42]}),t.push({boxes:[T(-.12,0,0,Rt*2,Tt*3,.02,16734780),T(.12,0,0,Rt*2,Tt*3,.02,16734780)],glow:!0,at:[n,.45,.53]});for(const r of[0,1]){const a=[];for(let o=r;o<8;o+=2)a.push(T(-.75+o*.214,0,0,Rt*2,Tt*2,.03,16769955));t.push({boxes:a,glow:!0,at:[n,2.88,.44],animate:(o,l)=>o.visible=l.wake<.5||Math.floor(l.t*6)%2===r})}t.push({boxes:[T(0,0,0,.18,.04,.18,w.ink),T(0,0,0,Rt*2,.22,Rt*2,w.ink),T(0,.2,0,.12,.1,.12,15222063)],at:[n-.42,1.22,.55],animate:(r,a)=>r.rotation.z=a.wake>.5?[0,.35,0,-.35][Math.floor(a.t*4+s)%4]:0}),e.push({cols:18,rows:13,at:[n,1.22+.04+13*Tt/2+.08,.335],fps:12,draw:(r,a)=>{if(r.fillStyle=po,r.fillRect(0,0,18,13),a.wake<.2)Math.floor(a.t*1.2+s*.5)%2===0&&$s(r,"COIN",2,4,"#FFC94D");else{const o=a.t/1.8+s*.5,l=Math.floor(o)%Ls.length;Zu(r,Ls[(l+s*2)%Ls.length],0,-6),r.fillStyle=po,r.fillRect(0,11,18,2);for(let h=0;h<Ls.length;h++)r.fillStyle=h===(l+s*2)%Ls.length?"#FFC94D":"#3E2A73",r.fillRect(4+h*2,11,1,1);const c=o%1;if(c<.15&&!a.still){const h=Math.ceil(c/.15*11);r.fillStyle=po,r.fillRect(0,h,18,11-h),r.fillStyle="#FFF4E3",r.fillRect(0,h,18,1)}}r.fillStyle="rgba(0,0,0,0.22)";for(let o=1;o<13;o+=2)r.fillRect(0,o,18,1)}})}),{boxes:i,parts:t,screens:e,floor:Array.from({length:48},(n,s)=>{const r=s%12,a=Math.floor(s/12);return{x:-2.4+r*.4,z:.85+a*.24,w:.4,d:.24,color:(r+a)%2?w.purpleDark:8006748}}),shadows:[{x:.3,z:-.1,w:4.4,d:1.5}],height:3.5}}function kv(){const i=Q_(rd.slice(0,7),11,11,.17,.5),t=[T(0,0,0,2.8,.3,2.8,w.stone),T(0,.3,0,2.3,.3,2.3,w.stoneLight),T(0,.6,0,1.8,.22,1.8,w.stone),T(0,.3,1.155,2.3,Tt,.01,w.gold)];for(const o of[-2.4,2.4])t.push(T(o,0,.6,.42,.2,.42,w.stone),T(o,0,.6,.3,1.7,.3,w.stone),T(o-.08,.3,.755,Rt,1.2,.01,w.stoneLight),T(o,1.7,.6,.55,.18,.55,w.ink),T(o,1.88,.6,.62,.06,.62,w.gold));const e=[];["010111010","101010101","111010010","100111001","011010110"].forEach((o,l)=>{const c=-.85+l*.4;for(let h=0;h<9;h++)o[h]==="1"&&e.push({x:c+h%3*Rt,y:.5-Math.floor(h/3)*Tt,z:0,w:Rt,h:Tt,d:.01,color:8308968})});const s=(o,l)=>(c,h)=>{const u=h.wake>.5?[o,1,l,1]:[o,1,1,1];c.material.uniforms.uBoost.value=u[Math.floor(h.t/(h.wake>.5?.15:.26))%4]},r=[{boxes:i,glow:!0,at:[0,1.1,0],animate:(o,l)=>{o.rotation.y=l.t*(.9+l.wake*1.2),o.position.y=1.1+lr(l.t,1.1,1)+l.wake*Tt*2,s(.92,1.1)(o,l)}},{boxes:e,glow:!0,at:[0,0,1.16],animate:s(.8,1.25)}];for(const o of[-2.4,2.4])[[T(0,0,0,.36,.2,.36,16742973),T(0,.2,0,.24,.2,.24,16763213),T(0,.4,0,.1,.12,.1,16774371)],[T(0,0,0,.36,.24,.36,16742973),T(.04,.24,0,.2,.16,.2,16763213),T(-.04,.4,0,.1,.08,.1,16763213)],[T(0,0,0,.36,.18,.36,16742973),T(-.03,.18,0,.24,.24,.24,16763213),T(.03,.42,0,.1,.14,.1,16774371)]].forEach((c,h)=>r.push({boxes:c,glow:!0,at:[o,1.94,.6],animate:(u,d)=>u.visible=Math.floor(d.t*7+(o>0?1:0))%3===h}));for(let o=0;o<7;o++){const l=o/7*Math.PI*2;r.push({boxes:[T(0,0,0,Rt*2,Tt*2,Rt*2,o%2?16774371:16769955)],glow:!0,at:[Math.cos(l)*.7,1.2,Math.sin(l)*.5],animate:(c,h)=>{const u=(h.t*.5+o/7)%1;c.visible=o<2||h.wake>.5,c.position.y=1+Math.floor(u*20)*Tt,c.position.x=Math.cos(l)*.7+(Math.floor(u*6)%2?Rt:0)}})}const a=[];for(let o=-6;o<6;o++)for(let l=-4;l<5;l++){const c=o*.5+.25,h=l*.42+.21;Math.hypot(c/3.1,h/2)>1||Math.abs(c)<1.4&&Math.abs(h)<1.4||a.push({x:c-.23,z:h-.19,w:.46,d:.38,color:(o+l)%2?w.stone:w.stoneLight})}return{boxes:t,parts:r,floor:a,pools:[{x:0,z:.2,rx:2.4,rz:2,color:w.gold},{x:-2.4,z:1,rx:.8,rz:.55,color:w.sunsetLight},{x:2.4,z:1,rx:.8,rz:.55,color:w.sunsetLight}],shadows:[{x:.3,z:.25,w:3,d:3}],height:3.2}}function $u(){return{boxes:[T(0,0,0,1.2,3,.8,w.purple),T(0,2,.42,2.6,.9,.12,w.ink),...Wi("0:00",0,2.75,.48,w.gold,2,.03)],height:3.2}}const Hv={title:Nv,about:Fv,experience:Ov,skills:zv,projects:Bv,contact:kv,running:$u};function Gv(i){return(Hv[i]??$u)()}function fh(i){const t=i===2?[0,255]:[0,128,255],e=new Uint8Array(t.length*4);t.forEach((s,r)=>e.set([s,s,s,255],r*4));const n=new Ma(e,t.length,1,_n);return n.minFilter=_e,n.magFilter=_e,n.generateMipmaps=!1,n.needsUpdate=!0,n}const Vv=`
  varying vec2 vUv;
  varying vec2 vWorld;
  void main() {
    vUv = uv;
    vec4 p = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
    #endif
    vWorld = (modelMatrix * p).xz;
    gl_Position = projectionMatrix * modelViewMatrix * p;
  }
`,Wv=`
  uniform vec3 uColor;
  uniform float uDensity;
  uniform float uShape;
  uniform float uFalloff;
  varying vec2 vUv;
  varying vec2 vWorld;
  const float BAYER[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
  void main() {
    #ifdef LAND
      vec2 e = vWorld / vec2(${dn.toFixed(1)}, ${ln.toFixed(1)});
      float th = atan(e.y, e.x);
      float wobble = 1.0 + 0.045 * sin(3.0 * th + 1.1) + 0.03 * sin(5.0 * th + 2.3) + 0.02 * sin(7.0 * th + 0.4);
      if (length(e) / wobble > 0.99) discard;
    #endif
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
`,Xv={disc:0,cone:1,rect:2,ring:3};function mn(i,t,e={}){return new yn({defines:e.land?{LAND:""}:{},uniforms:{uColor:{value:new Kt(i)},uDensity:{value:t},uShape:{value:Xv[e.shape??"disc"]},uFalloff:{value:e.falloff?1:0}},vertexShader:Vv,fragmentShader:Wv,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}const Yv=`
  varying vec3 vColor;
  varying float vShade;
  void main() {
    vColor = color;
    vec3 n = normalize(mat3(modelMatrix) * normal);
    vShade = n.y > 0.5 ? 1.0 : (n.z > 0.5 ? 0.9 : 0.78);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,qv=`
  uniform float uBoost;
  varying vec3 vColor;
  varying float vShade;
  void main() {
    gl_FragColor = vec4(min(vColor * vShade * uBoost, vec3(1.0)), 1.0);
  }
`;function ml(){return new yn({uniforms:{uBoost:{value:1}},vertexShader:Yv,fragmentShader:qv,vertexColors:!0})}const ii=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),cs=(i,t)=>Math.atan2(-t,i);function ph(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+Math.max(-e,Math.min(e,n))}function gl(i){const t=(ba(i)+4)/16,e=9*Tt;return[T(0,0,0,t,e,.04,w.ink),T(0,-2*Tt,0,2/16,2*Tt,.04,w.ink),...Wi(i,0,e-2*Tt,.02,w.cream,1,.03)]}class Kv{mesh;items=[];m=new oe;c=new Kt;max;constructor(t,e=160){this.max=e,this.mesh=new ci(new Ti(1,1,1),new Ln,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.setColorAt(0,this.c.setHex(16777215)),t.add(this.mesh)}spawn(t){this.items.length>=this.max&&this.items.shift(),this.items.push({...t,life:0})}update(t){let e=0;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];if(s.life+=t,s.life>=s.max){this.items.splice(n,1);continue}s.vy-=s.gravity*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<0&&(s.y=0,s.vy=0,s.vx*=.4,s.vz*=.4);const r=s.life/s.max<.6?s.size:s.size/2;this.m.makeScale(r,r,r),this.m.setPosition(s.x,s.y+r/2,s.z),this.mesh.setMatrixAt(e,this.m),this.mesh.setColorAt(e,this.c.setHex(s.color)),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}setTint(t){this.mesh.material.color.setHex(t)}}function Zv(i,t,e){const n=Hu(i,t,e);return Math.abs(n.x)<2.3&&n.z>i.hz&&n.z<i.hz+1.6}class $v{scene;o;rand=Fn(1206);glow=ml();particles;cows=[];flocks=[];crabs=[];fish;ripples;rippleMat=mn(16186367,.6,{shape:"ring"});jump=null;nextJump=4;fireflies;fireflyHomes=[];butterflies=[];footprints;footprintMat;prints=[];lastPrint=null;printSide=1;lastDust=0;cup;takenAt=-1/0;yaw=0;carryUntil=-1/0;tossed=!0;m=new oe;constructor(t,e){this.scene=t,this.o=e,this.particles=new Kv(t),this.buildHerd(),this.buildBirds(),this.buildCrabs(),this.fish=new Ct(kt([T(0,0,0,.32,.12,.1,16747082),T(.06,.08,0,.12,.04,.06,16774371),T(-.2,0,0,.08,.14,.04,16742973)]),this.o.occluder),this.fish.visible=!1,t.add(this.fish),this.ripples=[0,1].map(()=>{const o=new Ct(this.o.flatDisc(),this.rippleMat);return o.visible=!1,o.renderOrder=1,t.add(o),o}),this.fireflies=new ci(new Ti(1,1,1),new Ln({color:16773536}),48),this.fireflies.frustumCulled=!1;const n=[...this.o.bushes];for(let o=0;o<48;o++){const l=o%4===0?{x:Zt.x+(this.rand()-.5)*Zt.rx*2.4,z:Zt.z+(this.rand()-.5)*Zt.rz*2.4}:n[Math.floor(this.rand()*n.length)];l&&this.fireflyHomes.push({x:l.x+(this.rand()-.5)*1.6,z:l.z+(this.rand()-.5)*1.2,phase:this.rand()*10})}t.add(this.fireflies);const s=[16164544,16769955,8308968,16774371];[...this.o.flowers].sort(()=>this.rand()-.5).slice(0,16).forEach((o,l)=>{const c=s[l%s.length],h=new He,u=new Ct(kt([T(0,0,.1,.19,.02,.16,c),T(0,0,-.1,.19,.02,.16,c),T(0,-.01,0,.14,.04,.04,w.ink)]),this.o.occluder),d=new Ct(kt([T(0,0,0,.16,.19,.03,c),T(0,-.01,0,.14,.04,.04,w.ink)]),this.o.occluder);h.add(u,d),t.add(h),this.butterflies.push({group:h,open:u,shut:d,home:{x:o.x,z:o.z},phase:this.rand()*10})}),this.footprintMat=new na({color:12887151,gradientMap:this.o.gradient});const a=new Wn(1,1);a.rotateX(-Math.PI/2),this.footprints=new ci(a,this.footprintMat,80),this.footprints.count=0,this.footprints.frustumCulled=!1,t.add(this.footprints),this.cup=new Ct(kt([T(0,0,0,.18,.22,.18,w.cream),T(0,.2,0,.14,Tt,.14,w.sky)]),this.o.occluder),this.cup.visible=!1,t.add(this.cup)}pointables(){return[...this.cows.map((t,e)=>({obj:t.group,caption:()=>t.watching?"A COW. SHE'S WATCHING YOU.":"A COW. SHE'S BUSY.",click:()=>this.moo(e)})),...this.crabs.map(t=>({obj:t.group,caption:()=>"A CRAB, SIDEWAYS.",click:()=>{t.state==="hidden"||this.o.reduceMotion||(t.state="flee",t.until=performance.now()/1e3+.6)}})),...this.flocks.flatMap(t=>t.birds.map(e=>({obj:e.group,caption:()=>"A LITTLE BROWN BIRD."})))]}moo(t){const e=this.cows[t],n=performance.now()/1e3;n-e.lastMoo<.8||(e.lastMoo=n,e.mooUntil=n+1.3,this.o.sfx("moo",e),this.o.event({kind:"moo",cow:t}))}sinceCup(t){return t-this.takenAt}setYaw(t){this.yaw=t;for(const e of this.cows)e.bang.rotation.y=t,e.moo.rotation.y=t}setGradient(t){this.footprintMat.gradientMap=t,this.footprintMat.needsUpdate=!0}setSky(t){this.particles.setTint(t.sprite),this.rippleMat.uniforms.uColor.value.setHex(t.foam)}update(t){if(this.updateHerd(t),this.updateCup(t),this.updateFootprints(t),this.o.reduceMotion){this.updateFireflies(t,!0),this.updateButterflies(t,!0);return}this.updateDust(t),this.updateBirds(t),this.updateCrabs(t),this.updateFish(t),this.updateFireflies(t,!1),this.updateButterflies(t,!1),this.particles.update(t.dt)}buildHerd(){const t=[kt(th(0)),kt(th(1))],e=[kt(eh(0)),kt(eh(1))],n=kt(gl("!")),s=kt(gl("MOO"));this.o.cows.forEach((r,a)=>{const o=new He,l=new Ct(t[r.variant],this.o.occluder),c=new Ct(e[r.variant],this.o.occluder);c.position.set(.68,1,0),c.rotation.z=-.55;const h=new Ct(this.o.flatDisc(),this.o.shadow);h.scale.set(2,1,1.1),h.renderOrder=1,o.add(l,c,h),this.scene.add(o);const u=[n,s].map(f=>{const p=new Ct(f,this.glow);return p.visible=!1,this.scene.add(p),p}),d={kind:"circle",x:r.x,z:r.z,r:.85};this.o.solids.push(d),this.cows.push({group:o,head:c,bang:u[0],moo:u[1],solid:d,x:r.x,z:r.z,rot:r.rot,target:null,until:2+a*1.3,watching:!1,bangUntil:0,mooUntil:0,lastMoo:-10,phase:a*1.7})})}pickPasture(t){for(let e=0;e<12;e++){const n={x:Re.minX+1.6+this.rand()*(Re.maxX-Re.minX-3.2),z:Re.minZ+1.6+this.rand()*(Re.maxZ-Re.minZ-3.2)};if(!(ii(n,t)<2||ii(n,t)>8)&&!this.cows.some(s=>s!==t&&(ii(n,s)<2.4||s.target&&ii(n,s.target)<2.4)))return n}return null}updateHerd(t){const{t:e,dt:n,runner:s}=t;for(const r of this.cows){const a=ii(s,r);if(a<5&&!r.watching?(r.watching=!0,r.bangUntil=e+.9):a>6.5&&r.watching&&(r.watching=!1,r.until=e+1.5+this.rand()*2,r.target=null),t.jumped&&a<3.6&&e-r.lastMoo>1.6&&(r.lastMoo=e,r.mooUntil=e+1.3,this.o.sfx("moo",r),this.o.event({kind:"moo",cow:this.cows.indexOf(r)})),this.o.reduceMotion)r.group.position.set(r.x,0,r.z),r.group.rotation.y=r.rot;else{if(r.group.position.y=0,r.watching)r.rot=ph(r.rot,cs(s.x-r.x,s.z-r.z),n*2.2),r.head.rotation.z=.1;else if(r.target){const o=r.target.x-r.x,l=r.target.z-r.z,c=Math.hypot(o,l);if(c<.08)r.target=null,r.until=e+3+this.rand()*6;else{const h=cs(o,l);r.rot=ph(r.rot,h,n*1.6);const u=Math.max(0,Math.cos(h-r.rot)),d=Math.min(c,.55*u*n);r.x+=o/c*d,r.z+=l/c*d,r.head.rotation.z=.1,r.group.position.y=Math.floor(e*4+r.phase)%2?Tt:0}}else{const o=(e+r.phase)%2.6/2.6;r.head.rotation.z=o<.64?-.55:.1,e>r.until&&(r.target=this.pickPasture(r)),!r.target&&e>r.until&&(r.until=e+2)}r.group.position.x=r.x,r.group.position.z=r.z,r.group.rotation.y=r.rot,r.solid.x=r.x,r.solid.z=r.z}for(const[o,l]of[[r.bang,r.bangUntil],[r.moo,r.mooUntil]])o.visible=e<l,o.position.set(r.x+Math.sin(this.yaw)*.2,1.75,r.z+Math.cos(this.yaw)*.2);r.moo.visible&&(r.bang.visible=!1)}}grassSpot(t,e){for(let n=0;n<40;n++){let s;if(t&&e){const a=Math.atan2(t.z-e.z,t.x-e.x)+(this.rand()-.5)*1.4,o=12+this.rand()*12;s={x:t.x+Math.cos(a)*o,z:t.z+Math.sin(a)*o}}else s={x:(this.rand()*2-1)*70,z:(this.rand()*2-1)*50};if(!(!Yn(s.x,s.z)||sa(s.x,s.z)!=="grass"||Vu(s.x,s.z,2))&&!(dr(s.x,s.z)<3.5||On(s.x,s.z)>vn-.06))return s}return null}buildBirds(){const t=kt([T(0,.06,0,.2,.12,.12,6114111),T(-.13,.12,0,.08,.04,.08,4864817),T(.02,0,.03,.02,.06,.02,w.gold),T(.02,0,-.03,.02,.06,.02,w.gold)]),e=kt([T(0,0,0,.09,.09,.09,4141867),T(.06,.03,0,.04,.03,.03,w.gold)]),n=kt([T(-.02,.16,.1,.1,.14,.03,8020818),T(-.02,.16,-.1,.1,.14,.03,8020818)]),s=kt([T(-.02,.1,.1,.12,.03,.1,8020818),T(-.02,.1,-.1,.12,.03,.1,8020818)]);for(let r=0;r<4;r++){const a=this.grassSpot();if(!a)continue;const o=[];for(let l=0;l<4;l++){const c=new He,h=new Ct(t,this.o.occluder),u=new Ct(e,this.o.occluder);u.position.set(.11,.16,0);const d=new Ct(n,this.o.occluder),f=new Ct(s,this.o.occluder);d.visible=f.visible=!1,c.add(h,u,d,f),c.rotation.y=this.rand()*Math.PI*2,this.scene.add(c);const p={x:(this.rand()-.5)*1.6,z:(this.rand()-.5)*1.1};c.position.set(a.x+p.x,0,a.z+p.z),o.push({group:c,head:u,wingsUp:d,wingsDown:f,off:p,phase:this.rand()*10})}this.flocks.push({birds:o,at:a,from:a,to:a,flying:!1,t0:0,dur:1})}}updateBirds(t){const{t:e,runner:n}=t;for(const s of this.flocks){if(!s.flying){const o=ii(n,s.at);if(o<2.8||n.sprinting&&o<5){const l=this.grassSpot(s.at,n);l&&(s.flying=!0,s.from=s.at,s.to=l,s.t0=e,s.dur=ii(s.at,l)/6,this.o.sfx("flap",s.at),this.o.event({kind:"birds"}))}if(Math.abs(s.at.x-t.focus.x)>22||Math.abs(s.at.z-t.focus.z)>18)continue;for(const l of s.birds){const c=Math.floor(e*2.5+l.phase*7)%3===0;l.head.position.y=c?.08:.16,l.head.position.x=c?.14:.11,l.wingsUp.visible=l.wingsDown.visible=!1}continue}let r=0;const a=cs(s.to.x-s.from.x,s.to.z-s.from.z);if(s.birds.forEach((o,l)=>{const c=Math.min(1,Math.max(0,(e-s.t0-l*.07)/s.dur));c>=1&&r++;const h=s.from.x+(s.to.x-s.from.x)*c+o.off.x,u=s.from.z+(s.to.z-s.from.z)*c+o.off.z;o.group.position.set(h,Math.sin(Math.PI*c)*(2.4+l%2*.4),u),o.group.rotation.y=a;const d=Math.floor(e*12+l)%2===0;o.wingsUp.visible=c>0&&c<1&&d,o.wingsDown.visible=c>0&&c<1&&!d,o.head.position.set(.11,.16,0)}),r===s.birds.length){s.flying=!1,s.at=s.to;for(const o of s.birds)o.group.rotation.y=this.rand()*Math.PI*2}}}beachSpot(){const t=this.rand()*Math.PI*2,e=vn+.025+this.rand()*(fa-vn-.045),n=bs(t,e),s=bs(t+.01,e),r=Math.hypot(s.x-n.x,s.z-n.z);return{p:n,tx:(s.x-n.x)/r,tz:(s.z-n.z)/r}}buildCrabs(){const n=kt([T(0,.03,0,.3,.1,.2,14243643),T(0,.13,0,.22,.04,.14,15234127),T(-.06,.13,.07,.03,.08,.03,w.ink),T(.06,.13,.07,.03,.08,.03,w.ink),T(-.2,.04,.1,.1,.08,.1,15234127),T(.2,.04,.1,.1,.08,.1,15234127),T(-.19,0,-.04,.12,.03,.03,12076076),T(.19,0,-.04,.12,.03,.03,12076076),T(-.18,0,-.1,.1,.03,.03,12076076),T(.18,0,-.1,.1,.03,.03,12076076)]);for(let s=0;s<8;s++){const{p:r,tx:a,tz:o}=this.beachSpot(),l=new He;l.add(new Ct(n,this.o.occluder)),l.position.set(r.x,0,r.z),l.rotation.y=cs(a,o),this.scene.add(l),this.crabs.push({group:l,x:r.x,z:r.z,tx:a,tz:o,state:"idle",until:this.rand()*3,dir:1})}}onBeach(t,e){const n=On(t,e);return n>vn+.015&&n<fa-.01}updateCrabs(t){const{t:e,dt:n,runner:s}=t;for(const r of this.crabs){const a=ii(s,r);if(r.state==="hidden"){if(e>r.until){const{p:c,tx:h,tz:u}=this.beachSpot();Object.assign(r,{x:c.x,z:c.z,tx:h,tz:u,state:"idle",until:e+1}),r.group.visible=!0,r.group.rotation.y=cs(h,u)}continue}if(r.state!=="flee"&&a<2.2){const c=(r.x-s.x)*r.tx+(r.z-s.z)*r.tz;r.dir=c>=0?1:-1,r.state="flee",r.until=e+.6}if(r.state==="idle"&&e>r.until?(r.state="scuttle",r.dir=this.rand()<.5?-1:1,r.until=e+.5+this.rand()*.8):r.state==="scuttle"&&e>r.until&&(r.state="idle",r.until=e+1+this.rand()*3),r.state==="flee"&&e>r.until){this.o.event({kind:"crab"}),r.state="hidden",r.until=e+7+this.rand()*6,r.group.visible=!1;continue}const o=r.state==="flee"?3.6:r.state==="scuttle"?1.1:0;if(o>0){const c=r.x+r.tx*r.dir*o*n,h=r.z+r.tz*r.dir*o*n;this.onBeach(c,h)?(r.x=c,r.z=h):r.dir=-r.dir}const l=r.state==="flee"&&e>r.until-.2?-.1:0;r.group.position.set(r.x,l+(o>0&&Math.floor(e*10)%2?Tt:0),r.z)}}updateFish(t){const{t:e}=t,n=Math.abs(Zt.x-t.focus.x)<26&&Math.abs(Zt.z-t.focus.z)<22;if(this.jump){const s=(e-this.jump.t0)/.7;if(s>=1)this.ripple(1,this.jump.to,e),this.o.sfx("splash",this.jump.to),this.jump=null,this.nextJump=e+3+this.rand()*6;else{const{from:r,to:a}=this.jump;this.fish.visible=!0,this.fish.position.set(r.x+(a.x-r.x)*s,.05+4*.7*s*(1-s),r.z+(a.z-r.z)*s),this.fish.rotation.set(0,cs(a.x-r.x,a.z-r.z),(.5-s)*1.6)}}else if(this.fish.visible=!1,e>this.nextJump&&n){const s=this.rand()*Math.PI*2,r=this.rand()*.55,a={x:Zt.x+Math.cos(s)*Zt.rx*r,z:Zt.z+Math.sin(s)*Zt.rz*r},o=this.rand()*Math.PI*2;this.jump={from:a,to:{x:a.x+Math.cos(o)*.9,z:a.z+Math.sin(o)*.6},t0:e},this.ripple(0,a,e)}this.ripples.forEach(s=>{const r=s.userData.born;if(r===void 0)return;const a=Math.floor((e-r)/.16);s.visible=a<4;const o=.5+a*.35;s.scale.set(o*1.3,1,o*.9)})}ripple(t,e,n){const s=this.ripples[t];s.position.set(e.x,.012,e.z),s.userData.born=n}updateFireflies(t,e){if(this.fireflies.visible=t.lit&&t.rain<.3,!this.fireflies.visible)return;const n=e?0:t.t;this.fireflyHomes.forEach((s,r)=>{const a=e||(n*.7+s.phase)%1<.55,o=s.x+Math.round(Math.sin(n*.6+s.phase)*10)/16,l=s.z+Math.round(Math.cos(n*.45+s.phase*1.3)*6)*Vi.z,c=.45+Math.round(Math.sin(n*1.1+s.phase*2)*4)*Tt,h=a?.09:0;this.m.makeScale(h,h,h),this.m.setPosition(o,c,l),this.fireflies.setMatrixAt(r,this.m)}),this.fireflies.count=this.fireflyHomes.length,this.fireflies.instanceMatrix.needsUpdate=!0}updateButterflies(t,e){const n=e?0:t.t;for(const s of this.butterflies){if(s.group.visible=!t.lit&&t.rain<.3,!s.group.visible||!e&&(Math.abs(s.home.x-t.focus.x)>22||Math.abs(s.home.z-t.focus.z)>18))continue;const r=e||Math.floor(n*7+s.phase)%2===0;s.open.visible=r,s.shut.visible=!r,s.group.position.set(s.home.x+Math.sin(n*.8+s.phase)*.9,.45+Math.round(Math.abs(Math.sin(n*2.6+s.phase))*3)*Tt,s.home.z+Math.cos(n*.6+s.phase*1.3)*.6),s.group.rotation.y=Math.cos(n*.8+s.phase)>0?0:Math.PI}}updateDust(t){const{t:e,runner:n}=t,s=sa(n.x,n.z),a=t.wet>.5&&s!=="sand"?11060448:s==="road"?10130856:s==="sand"?15785912:13220239;if(t.landed)for(let l=0;l<7;l++){const c=l/7*Math.PI*2;this.particles.spawn({x:n.x+Math.cos(c)*.2,y:.02,z:n.z+Math.sin(c)*.12,vx:Math.cos(c)*1.3,vy:.7,vz:Math.sin(c)*.8,max:.42,size:.125,gravity:2,color:a})}const o=Math.hypot(n.vx,n.vz);n.sprinting&&!n.airborne&&o>5&&e-this.lastDust>.08&&(this.lastDust=e,this.particles.spawn({x:n.x-n.vx/o*.25+(this.rand()-.5)*.2,y:.02,z:n.z-n.vz/o*.25,vx:-n.vx*.12,vy:.6+this.rand()*.4,vz:-n.vz*.12,max:.5,size:.125,gravity:.6,color:a}))}updateFootprints(t){const{t:e,runner:n}=t;if(n.moving&&!n.airborne&&sa(n.x,n.z)==="sand"&&(!this.lastPrint||ii(this.lastPrint,n)>.45)){const s=Math.hypot(n.vx,n.vz)||1;this.printSide=-this.printSide,this.prints.push({x:n.x-n.vz/s*.12*this.printSide,z:n.z+n.vx/s*.12*this.printSide,born:e}),this.prints.length>80&&this.prints.shift(),this.lastPrint={x:n.x,z:n.z}}for(;this.prints.length&&e-this.prints[0].born>9;)this.prints.shift();this.prints.forEach((s,r)=>{this.m.makeScale(2/16,1,Vi.z),this.m.setPosition(Math.round(s.x*16)/16,.003,s.z),this.footprints.setMatrixAt(r,this.m)}),this.footprints.count=this.prints.length,this.footprints.instanceMatrix.needsUpdate=!0}updateCup(t){const{t:e,runner:n}=t,s=this.o.aidStation;if(!s)return;const r=Math.hypot(n.vx,n.vz);if(e-this.takenAt>6&&r>3&&!n.airborne&&Zv(s,n.x,n.z)&&(this.takenAt=e,this.carryUntil=e+1.4,this.tossed=!1,this.o.sfx("cup",n),this.o.event({kind:"cup"})),this.cup.visible=e<this.carryUntil,this.cup.visible){const a=n.facing==="left"?-.35:n.facing==="right"?.35:0;this.cup.position.set(n.x+Math.cos(this.yaw)*a,1.35+n.h,n.z-Math.sin(this.yaw)*a+.05)}else if(!this.tossed){if(this.tossed=!0,this.o.reduceMotion)return;for(let a=0;a<6;a++)this.particles.spawn({x:n.x,y:1.4+n.h,z:n.z,vx:(this.rand()-.5)*1.6,vy:1.2+this.rand(),vz:(this.rand()-.5)*.8,max:.6,size:.0625,gravity:9,color:w.sky});this.particles.spawn({x:n.x,y:1.4,z:n.z,vx:-n.vx*.3-.6,vy:3,vz:-n.vz*.3,max:1,size:.16,gravity:9,color:w.cream})}}}const mh="roam-dog",wa=13142346,gh=11038266,Ei=15918800,mo=2827554,xh=.25,_h={x:(Re.minX+Re.maxX)/2+1.2,z:Re.maxZ+1.4};function Jv(){return[T(0,.32,0,.62,.3,.3,wa),T(.08,.3,0,.3,.06,.26,Ei),T(.36,.4,0,.12,.24,.26,Ei)]}function Qv(){return[T(0,0,0,.26,.24,.26,wa),T(.17,.02,0,.14,.12,.16,Ei),T(.24,.08,0,.04,.05,.06,mo),T(.07,.12,.08,.04,.05,.04,mo),T(.07,.12,-.08,.04,.05,.04,mo),T(-.05,.24,.09,.08,.1,.06,gh),T(-.05,.24,-.09,.08,.1,.06,gh)]}function jv(i,t){return[T(i,0,t,.08,.32,.08,wa),T(i,0,t,.09,.05,.09,Ei)]}function tM(){return[T(-.04,0,0,.08,.16,.08,wa),T(0,.14,0,.1,.08,.08,Ei)]}class eM{host;group=new He;body=new He;head;tail;legs=[];woof;poof;following;x=_h.x;z=_h.z;heading=Math.PI/2;h=0;vh=0;hopAt=1/0;woofUntil=0;poofUntil=0;side=1;stillSince=0;lastDir={x:0,z:1};constructor(t,e){this.host=e;let n=!1;try{n=localStorage.getItem(mh)==="1"}catch{}this.following=n;const s=new Ct(kt(Jv()),e.occluder);this.head=new Ct(kt(Qv()),e.occluder),this.head.position.set(.38,.52,0),this.tail=new Ct(kt(tM()),e.occluder),this.tail.position.set(-.31,.56,0),this.tail.rotation.z=.5;for(const[a,o]of[[.2,.1],[.2,-.1],[-.2,.1],[-.2,-.1]]){const l=new Ct(kt(jv(0,0)),e.occluder);l.position.set(a,0,o),this.legs.push(l)}this.body.add(s,this.head,this.tail,...this.legs);const r=new Ct(e.flatDisc(),e.shadow);r.scale.set(.9,1,.5),r.renderOrder=1,this.group.add(this.body,r),t.add(this.group),this.woof=new Ct(kt(gl("WOOF")),e.glow),this.woof.visible=!1,t.add(this.woof),this.poof=new Ct(kt([T(-.2,.05,.1,.16,.12,.16,Ei),T(.18,.12,-.05,.14,.1,.14,Ei),T(0,.25,0,.12,.1,.12,Ei)]),e.occluder),this.poof.visible=!1,t.add(this.poof),this.place()}get object(){return this.group}get isFollowing(){return this.following}get position(){return{x:this.x,z:this.z}}bark(t){this.woofUntil=t+1.1,this.host.sfx("bark",this.position)}arrive(t,e,n){this.following&&(this.lastDir={x:-n.x,z:-n.z},this.besides(t),this.poofUntil=e+.35)}update(t,e,n,s){if(!this.following){if(Math.hypot(n.x-this.x,n.z-this.z)<4){this.following=!0,this.bark(e);try{localStorage.setItem(mh,"1")}catch{}}this.pose(e,!1,!0);return}s&&(this.hopAt=e+.18),e>=this.hopAt&&this.h===0&&(this.vh=4.6,this.hopAt=1/0),(this.h>0||this.vh>0)&&(this.vh-=22*t,this.h=Math.max(0,this.h+this.vh*t),this.h===0&&(this.vh=0)),Math.hypot(n.x-this.x,n.z-this.z)>14&&(this.besides(n),this.poofUntil=e+.35);const r=Math.hypot(n.vx,n.vz);r>.3&&(this.lastDir={x:n.vx/r,z:n.vz/r});const a=this.spot(n),o=a.x-this.x,l=a.z-this.z,c=Math.hypot(o,l);let h=!1;if(c>.25){const u=Math.min(Math.max(r*1.15,2.2),8)*Math.min(1,c/.9),d=Math.min(c,u*t),f=ma(this.x,this.z,this.x+o/c*d,this.z+l/c*d,this.host.solids,Yn,xh);h=Math.hypot(f.x-this.x,f.z-this.z)>.002,this.x=f.x,this.z=f.z,h&&(this.heading=Math.atan2(-l,o))}(h||r>.3)&&(this.stillSince=e),!h&&r<.3&&(this.heading=Math.atan2(-(n.z-this.z),n.x-this.x)),this.pose(e,h,!1)}free(t,e){if(!Yn(t,e))return!1;const n=ma(t,e,t,e,this.host.solids,Yn,xh);return Math.abs(n.x-t)<.001&&Math.abs(n.z-e)<.001}spot(t){const e=this.lastDir,n=(s,r)=>({x:t.x-e.x*s-e.z*.75*r,z:t.z-e.z*s+e.x*.75*r});for(const[s,r]of[[.9,1],[.9,-1],[-.6,1],[-.6,-1]]){const a=n(s,this.side*r);if(this.free(a.x,a.z))return this.side*=r,a}return n(.9,this.side)}besides(t){this.side=-this.side;const e=this.spot(t);this.x=e.x,this.z=e.z}pose(t,e,n){const s=this.host.reduceMotion,r=!n&&!e&&t-this.stillSince>1.2,a=!s&&e&&Math.floor(t*9)%2===1;this.legs.forEach((l,c)=>{const h=c<2;l.position.y=n?-.22:r&&!h?-.14:0,l.position.x=(h?.2:-.2)+(a?c%2?.05:-.05:0)}),this.body.position.y=n?-.2:r?-.06:this.h,this.body.rotation.z=r?.25:0;const o=t<this.woofUntil||r||e;this.tail.rotation.z=s?.5:o?[.2,.8][Math.floor(t*(e?10:6))%2]:.5,this.head.position.y=n?.42:.52,this.place(),this.woof.visible=t<this.woofUntil,this.woof.position.set(this.x,1.25+this.h,this.z),this.poof.visible=!s&&t<this.poofUntil,this.poof.position.set(this.x,0,this.z),this.poof.scale.setScalar(1+(this.poofUntil-t)*1.5)}place(){this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.heading}setYaw(t){this.woof.rotation.y=t}near(t,e,n){return Math.hypot(t-this.x,e-this.z)<n}}const nM="A GOOD DOG. AN ASPIN, IN FACT.",iM=2.4,vh=.95,Mh=.16,sM=.75,rM=.3;function Sh(i,t,e){const n=Math.cos(i.angle),s=Math.sin(i.angle);return{x:i.x+t*n+e*s,z:i.z-t*s+e*n}}function yh(i){const t=nn(i.s);return Math.sign((i.x-t.x)*t.nx+(i.z-t.z)*t.nz)||1}function go(i,t){const e=nn(i);return{x:e.x+e.nx*t*vh,z:e.z+e.nz*t*vh}}function Eh(i,t){const e=Hu(i,t.x,t.z),n=i.hz+1;if(e.z>=n-.4)return[t,i.door];const s=(e.x>=0?1:-1)*(i.hx+1);return[t,Sh(i,s,e.z),Sh(i,s,n),i.door]}function aM(i,t){const e=yh(i),n=yh(t),s=t.s>i.s?t.s:t.s+be,r=Eh(i,go(i.s,e)).reverse();for(let c=i.s+1;c<s;c+=1){const h=Math.min(1,(c-i.s)/6);r.push(go(c,e+(n-e)*h))}r.push(...Eh(t,go(s,n)));const a=[];let o=1.6,l=0;for(let c=1;c<r.length;c++){const h=r[c-1],u=r[c],d=Math.hypot(u.x-h.x,u.z-h.z);for(;o<=l+d;){const f=(o-l)/d;a.push({x:h.x+(u.x-h.x)*f,z:h.z+(u.z-h.z)*f}),o+=iM}l+=d}for(;a.length&&Math.hypot(a[a.length-1].x-t.door.x,a[a.length-1].z-t.door.z)<.6;)a.pop();return a}class oM{scene;host;order;visited;geometry;disc;gels=[];target=null;yaw=0;constructor(t,e,n,s){this.scene=t,this.host=s,this.order=[...e].sort((r,a)=>r.s-a.s),this.visited=new Set(n),this.geometry=kt(Ku(zh,-3*Rt,8*Tt,0,.06)),this.disc=s.flatDisc(),this.lay(null)}get leadsTo(){return this.target}visit(t){this.visited.has(t)||(this.visited.add(t),t===this.target&&this.lay(this.order.find(e=>e.zoneId===t)??null))}setYaw(t){this.yaw=t;for(const e of this.gels)e.gel.rotation.y=t}update(t,e){const n=this.host.reduceMotion;for(let s=this.gels.length-1;s>=0;s--){const r=this.gels[s];if(r.takenAt!==null){const a=(t-r.takenAt)/rM;if(a>=1||n){this.scene.remove(r.group),this.gels.splice(s,1);continue}r.gel.position.y=Mh+a*.6,r.gel.scale.setScalar(1-a*.7);continue}r.gel.position.y=Mh+(n||(t/.9+r.phase)%1<.5?0:Tt),e.h<.9&&Math.hypot(e.x-r.x,e.z-r.z)<sM&&(r.takenAt=t,r.shadow.visible=!1,this.host.picked({x:r.x,z:r.z}))}}dispose(){this.clear(),this.geometry.dispose(),this.disc.dispose()}clear(){for(const t of this.gels)this.scene.remove(t.group);this.gels=[]}lay(t){this.clear();const e=this.order.length,n=this.order.findIndex(a=>!this.visited.has(a.zoneId));if(n<0||e<2){this.target=null;return}const s=this.order[n],r=t&&t!==s?t:this.order[(n-1+e)%e];this.target=s.zoneId,aM(r,s).forEach((a,o)=>{if(!this.clearAt(a))return;const l=new He;l.position.set(a.x,0,a.z);const c=new Ct(this.geometry,this.host.glow);c.rotation.y=this.yaw;const h=new Ct(this.disc,this.host.shadow);h.scale.set(.24,1,.14),h.renderOrder=1,l.add(c,h),this.scene.add(l),this.gels.push({group:l,gel:c,shadow:h,x:a.x,z:a.z,phase:o*.17%1,takenAt:null})})}clearAt(t){if(!Yn(t.x,t.z))return!1;const e=ma(t.x,t.z,t.x,t.z,this.host.solids,Yn,.2);return Math.abs(e.x-t.x)<.001&&Math.abs(e.z-t.z)<.001}}const bh=16052974,Ju=12831190,lM=14672874,cM=3816008,hM=15905597;function wh(){return[T(0,0,0,.34,.09,.1,bh),T(.2,.03,0,.1,.09,.09,bh),T(.28,.04,0,.06,.03,.03,hM),T(-.21,.02,0,.08,.04,.12,Ju)]}function Th(i){const t=[];for(const e of[-1,1]){const n=i?2.4:1;t.push(T(.01,.05*n,e*.16,.14,.03,.2,lM),T(-.01,.08*n,e*(i?.3:.34),.11,.03,.17,Ju),T(-.02,.09*n,e*(i?.39:.45),.08,.03,.06,cM))}return t}class uM{host;gulls=[];rand=Fn(5150);present=1;constructor(t,e){this.host=e;const n=kt([...wh(),...Th(!1)]),s=kt([...wh(),...Th(!0)]),r=e.flatDisc();for(let a=0;a<4;a++){const o=new He,l=new Ct(n,e.occluder),c=new Ct(s,e.occluder);c.visible=!1,o.add(l,c),t.add(o);const h=new Ct(r,e.shadow);h.scale.set(.5,1,.3),h.renderOrder=1,t.add(h),this.gulls.push({group:o,glide:l,beat:c,shadow:h,theta:this.rand()*Math.PI*2,dir:a%2?1:-1,speed:.028+this.rand()*.014,height:3.4+this.rand()*1.4,phase:this.rand()*10,nextBeats:this.rand()*6,beatsUntil:0,nextCry:4+this.rand()*14})}}pointables(){return this.gulls.map(t=>({obj:t.group,caption:()=>"A GULL, RIDING THE SEA BREEZE."}))}update(t,e,n){const s=this.host.reduceMotion;this.present=Math.max(0,Math.min(1,this.present+(n>.3?-t/3:t/6)));for(const r of this.gulls){s||(r.theta+=r.dir*r.speed*t);const a=.97+.07*Math.sin(r.theta*3+r.phase),o=bs(r.theta,a),l=bs(r.theta+r.dir*.01,.97+.07*Math.sin((r.theta+r.dir*.01)*3+r.phase)),c=(1-this.present)*14,h=s?0:Math.round(Math.sin(e*.7+r.phase)*2)/16;r.group.position.set(o.x,r.height+h+c,o.z),r.group.rotation.y=Math.atan2(-(l.z-o.z),l.x-o.x),r.group.visible=this.present>.02,!s&&e>r.nextBeats&&(r.beatsUntil=e+.6+this.rand()*.6,r.nextBeats=e+5+this.rand()*8);const u=!s&&e<r.beatsUntil&&Math.floor(e/.14)%2===0;r.glide.visible=!u,r.beat.visible=u,r.shadow.position.set(o.x,0,o.z),r.shadow.visible=r.group.visible&&this.present>.9&&On(o.x,o.z)<.99,!s&&this.present>.9&&e>r.nextCry&&(r.nextCry=e+9+this.rand()*18,this.host.sfx("gull",o))}}}const ae={A:0,B:1,X:2,Y:3,LB:4,RB:5,RT:7,BACK:8,START:9,UP:12,DOWN:13,LEFT:14,RIGHT:15};function us(){let i=[];try{i=Array.from(navigator.getGamepads?.()??[])}catch{return null}const t=i.filter(e=>!!e&&e.connected);return t.find(e=>e.mapping==="standard")??t[0]??null}function Ke(i,t){const e=i.buttons[t];return!!e&&(e.pressed||e.value>.5)}function xl(i,t,e,n=.22){const s=i.axes[t]??0,r=i.axes[e]??0,a=Math.hypot(s,r);if(a<n)return{x:0,y:0};const o=Math.min(1,(a-n)/(1-n))/a;return{x:s*o,y:r*o}}class Qu{before=[];now=[];update(t){this.before=this.now,this.now=t?t.buttons.map((e,n)=>Ke(t,n)):[]}down(t){return!!this.now[t]&&!this.before[t]}anyDown(){return this.now.some((t,e)=>t&&!this.before[e])}}const dM={A:"A",B:"B",X:"X",Y:"Y",START:"START",BACK:"VIEW"},fM={A:"✕",B:"○",X:"□",Y:"△",START:"OPTIONS",BACK:"SHARE"};function xo(i){const t=i?.id.toLowerCase()??"";return t.includes("054c")||t.includes("dualsense")||t.includes("dualshock")||t.includes("playstation")?fM:dM}function pM(i,t,e,n){i?.vibrationActuator?.playEffect?.("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:n})?.catch(()=>{})}const Fi=44,ga=1.5;class mM{host;held={up:!1,down:!1,left:!1,right:!1,sprint:!1};jumpQueued=!1;drag=null;stickTouch=null;panTouch=null;padEdges=new Qu;lastWheel=0;constructor(t){this.host=t,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onWheel=this.onWheel.bind(this),this.release=this.release.bind(this),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.release),t.canvas.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),t.canvas.addEventListener("wheel",this.onWheel,{passive:!0})}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.release),this.host.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),this.host.canvas.removeEventListener("wheel",this.onWheel)}steer(t){const e={x:(this.held.right?1:0)-(this.held.left?1:0),y:(this.held.up?1:0)-(this.held.down?1:0),sprint:this.held.sprint};return this.readGamepad(e,t),this.readStick(e),e}takeJump(){const t=this.jumpQueued;return this.jumpQueued=!1,t}jump(){this.host.enabled()&&(this.jumpQueued=!0)}release(){this.held.up=this.held.down=this.held.left=this.held.right=this.held.sprint=!1,this.jumpQueued=!1,this.drag=null,this.panTouch=null,this.stickTouch&&(this.stickTouch=null,this.host.stick(null))}isTyping(t){const e=t.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable)}onKeyDown(t){if(!this.host.enabled()||this.isTyping(t)||t.metaKey||t.ctrlKey||t.altKey)return;let e=!0;switch(t.code){case"ArrowUp":case"KeyW":this.held.up=!0;break;case"ArrowDown":case"KeyS":this.held.down=!0;break;case"ArrowLeft":case"KeyA":this.held.left=!0;break;case"ArrowRight":case"KeyD":this.held.right=!0;break;case"ShiftLeft":case"ShiftRight":this.held.sprint=!0;break;case"Space":t.repeat||(this.jumpQueued=!0);break;case"KeyZ":t.repeat||this.host.zoom("cycle");break;case"Minus":this.host.zoom(1);break;case"Equal":this.host.zoom(-1);break;case"KeyR":t.repeat||this.host.respawn();break;default:e=!1}e&&t.preventDefault()}onKeyUp(t){switch(t.code){case"ArrowUp":case"KeyW":this.held.up=!1;break;case"ArrowDown":case"KeyS":this.held.down=!1;break;case"ArrowLeft":case"KeyA":this.held.left=!1;break;case"ArrowRight":case"KeyD":this.held.right=!1;break;case"ShiftLeft":case"ShiftRight":this.held.sprint=!1;break}}onPointerDown(t){if(this.host.enabled()){if(t.pointerType==="touch"){this.stickTouch?this.panTouch||(this.panTouch={id:t.pointerId,x:t.clientX,y:t.clientY}):(this.stickTouch={id:t.pointerId,ox:t.clientX,oy:t.clientY,x:t.clientX,y:t.clientY,t0:performance.now(),moved:0},this.reportStick());return}t.button===0&&(this.drag={x:t.clientX,y:t.clientY,moved:0})}}onPointerMove(t){if(t.pointerType==="touch"){const r=this.stickTouch;r&&r.id===t.pointerId?(r.moved+=Math.abs(t.clientX-r.x)+Math.abs(t.clientY-r.y),r.x=t.clientX,r.y=t.clientY,this.reportStick()):this.panTouch&&this.panTouch.id===t.pointerId&&(this.host.panBy(t.clientX-this.panTouch.x,t.clientY-this.panTouch.y),this.panTouch={id:t.pointerId,x:t.clientX,y:t.clientY});return}this.host.hover(t.target===this.host.canvas||this.drag?{x:t.clientX,y:t.clientY}:null);const e=this.drag;if(!e)return;const n=t.clientX-e.x,s=t.clientY-e.y;e.x=t.clientX,e.y=t.clientY,e.moved+=Math.abs(n)+Math.abs(s),e.moved>=5&&this.host.panBy(n,s)}onPointerUp(t){if(t.pointerType==="touch"){const n=this.stickTouch;n&&n.id===t.pointerId?(this.stickTouch=null,this.reportStick(),t.type==="pointerup"&&n.moved<12&&performance.now()-n.t0<350&&this.host.enabled()&&this.host.act(t.clientX,t.clientY,!0)):this.panTouch&&this.panTouch.id===t.pointerId&&(this.panTouch=null);return}const e=this.drag;this.drag=null,!(!e||e.moved>=5||t.target!==this.host.canvas||!this.host.enabled())&&this.host.act(t.clientX,t.clientY,!1)}onWheel(t){const e=performance.now();e-this.lastWheel<180||t.deltaY===0||(this.lastWheel=e,this.host.zoom(t.deltaY>0?1:-1))}reportStick(){const t=this.stickTouch;if(!t){this.host.stick(null);return}const e=Math.hypot(t.x-t.ox,t.y-t.oy);this.host.stick({ox:t.ox,oy:t.oy,x:t.x,y:t.y,sprint:e>Fi*ga})}readStick(t){const e=this.stickTouch;if(!e||!this.host.enabled()||t.x||t.y)return;const n=e.x-e.ox,s=e.y-e.oy,r=Math.hypot(n,s);if(r<8)return;const a=Math.min(1,r/Fi)/r;t.x=n*a,t.y=-s*a,r>Fi*ga&&(t.sprint=!0)}readGamepad(t,e){const n=us();if(this.padEdges.update(n),!n||!this.host.enabled())return;const s=xl(n,0,1);let r=s.x,a=-s.y;(Ke(n,ae.LEFT)||Ke(n,ae.RIGHT))&&(r=(Ke(n,ae.RIGHT)?1:0)-(Ke(n,ae.LEFT)?1:0)),(Ke(n,ae.UP)||Ke(n,ae.DOWN))&&(a=(Ke(n,ae.UP)?1:0)-(Ke(n,ae.DOWN)?1:0));const o=Ke(n,ae.B)||(n.buttons[ae.RT]?.value??0)>.5;!t.x&&!t.y&&(t.x=r,t.y=a),t.sprint||=o,this.padEdges.down(ae.A)&&(this.jumpQueued=!0),this.padEdges.down(ae.LB)&&this.host.zoom(1),this.padEdges.down(ae.RB)&&this.host.zoom(-1),this.padEdges.down(ae.BACK)&&this.host.respawn();const l=xl(n,2,3);(l.x||l.y)&&this.host.look(l.x,l.y,e),(r||a||o||l.x||l.y||this.padEdges.anyDown())&&this.host.usedPad()}}const Oi=["stand","a","b","jump","watch"],ra=3*Oi.length,Ah={right:0,left:0,down:1,up:2},gM={right:0,up:Math.PI/2,left:Math.PI,down:-Math.PI/2};function Rh(i=document.createElement("canvas"),t){i.width=16*ra,i.height=40;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const n=r=>{const a=r.toUpperCase();return t&&a==="#FF9A4A"?t.top:t&&a==="#7EC8E8"?t.bottom:r},s=[{shared:dd,lamp:ud,poses:{stand:hd,a:cd,b:ld,jump:od,watch:ad}},{shared:_l,lamp:gd,poses:{stand:Bh,a:md,b:pd,jump:kh,watch:fd}},{shared:yd,lamp:[],poses:{stand:Sd,a:Md,b:vd,jump:_d,watch:xd}}];for(let r=0;r<2;r++)s.forEach(({shared:a,lamp:o,poses:l},c)=>{Oi.forEach((h,u)=>{const d=l[h],f=(c*Oi.length+u)*16,p=r*20;for(const[_,m,g,S,b]of[...a,...d,...r?o:[]])e.fillStyle=n(b),e.fillRect(f+_,p+m,g,S)})});return i}const rn=12,xM=(()=>{const i=new Uint8Array(rn*rn);let t=7;const e=()=>(t=t*16807%2147483647)/2147483647,n=(s,r,a,o)=>{const l=Math.floor(e()*rn),c=a+Math.floor(e()*(o-a+1));for(let h=0;h<c;h++)i[(l+h)%rn*rn+s]=r};for(let s=0;s<rn;s++){const r=s===0||s===rn-1;for(let a=0;a<rn;a++)i[a*rn+s]=r?2:0;if(r){n(s,1,2,4);continue}s%3!==1&&n(s,1,3,7),e()<.45&&n(s,2,1,2)}return i})(),_o={yaw:45,lens:"perspective",rows:180,tones:2},_M=118,vM=10;class MM{stones=[];reduceMotion;constructor(t,e){this.reduceMotion=e.reduceMotion,[...e.years].sort((s,r)=>s-r).forEach((s,r)=>{const a=_M+r*vM,o=nn(a),l=Le.halfWidth+1.15,c={x:o.x-o.nx*l,z:o.z-o.nz*l},h=String(s),u=Math.max(1,(h.length*4+5)/16),d=new He;d.add(new Ct(kt([T(0,0,0,u+.12,1,.36,w.stone),T(0,1,0,u-.1,.12,.28,w.stoneLight),T(0,0,0,u+.3,.14,.5,w.rockDark),T(0,.32,.18,u-.06,9*Tt,.03,w.gold),...Wi(h,0,.32+7*Tt,.21,w.ink,1,.02)]),e.occluder));const f=new Ct(e.flatDisc(),e.shadow);f.scale.set(u+.6,1,.7),f.position.set(.2,0,.25),f.renderOrder=1,f.visible=this.reduceMotion,d.add(f),d.position.set(c.x,this.reduceMotion?0:-1.2,c.z),d.visible=this.reduceMotion,t.add(d);const p=new Ct(kt([T(0,0,0,u,.01,.18,w.trunkDark),T(-u/4,0,.1,u/3,.01,.1,w.trunkDark)]),e.solid);p.position.set(c.x,.005,c.z),p.visible=!this.reduceMotion,t.add(p);const _={kind:"circle",x:c.x,z:c.z,r:this.reduceMotion?.45:0};e.solids.push(_),this.stones.push({s:a,year:s,group:d,scar:p,at:c,risenAt:this.reduceMotion?0:null,solid:_})})}pointables(){return this.stones.map(t=>({obj:t.group,caption:()=>`A STONE FOR ${t.year}.`}))}allRisen(){return this.stones.every(t=>t.risenAt!==null)}update(t,e,n){const s=[];if(this.stones.length===0)return{year:null,rising:s};const r=dr(e,n)<Le.halfWidth+3,a=Bu(e,n);for(const c of this.stones)if(c.risenAt===null&&r&&a>=c.s-3&&a<c.s+20&&(c.risenAt=t,c.group.visible=!0,s.push(c.at)),c.risenAt!==null&&!this.reduceMotion){const h=Math.min(6,Math.floor((t-c.risenAt)/.1));c.group.position.y=-1.2+h/6*1.2,c.group.children[1].visible=h===6,h===6&&(c.scar.visible=!1,c.solid.r=.45)}const o=this.stones[0],l=this.stones[this.stones.length-1];if(!r||a<o.s-6||a>l.s+10)return{year:null,rising:s};if(a<=o.s)return{year:o.year,rising:s};for(let c=0;c<this.stones.length-1;c++){const h=this.stones[c],u=this.stones[c+1];if(a<u.s)return{year:Math.floor(h.year+(u.year-h.year)*(a-h.s)/(u.s-h.s)),rising:s}}return{year:l.year,rising:s}}}const Ch={x:1.3,z:.5},Yr={x:125,z:95},SM=.22,yM=1.8,EM=`
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,bM=`
  uniform float uTime;
  uniform float uDensity;
  uniform float uShear;
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
    if (drop(p, uShear, 190.0, 110.0, 70.0, 90.0, 0.0)) {
      gl_FragColor = vec4(uNear, 1.0);
    } else if (drop(p, uShear * 0.73, 120.0, 60.0, 50.0, 70.0, 431.0)) {
      gl_FragColor = vec4(uFar, 1.0);
    } else {
      discard;
    }
  }
`;function wM(i,t){return t<=0?i:{...i,sun:Ue(i.sun,15922431,t*.85),sunI:i.sunI*(1+1.8*t),shade:Ue(i.shade,12108520,t*.6),shadeI:i.shadeI*(1+.7*t),sea:Ue(i.sea,13160688,t*.5),foam:Ue(i.foam,16777215,t*.6)}}function TM(i,t){return t<=0?i:{sun:Ue(i.sun,10134720,t*.7),sunI:i.sunI*(1-.42*t),shade:Ue(i.shade,8160936,t*.5),shadeI:i.shadeI*(1-.1*t),sea:Ue(i.sea,5990020,t*.5),seaDeep:Ue(i.seaDeep,4608108,t*.5),foam:Ue(i.foam,13160672,t*.4),sprite:Ue(i.sprite,13028316,t*.4),lamps:i.lamps||t>.6}}class AM{mode="auto";intensity=0;wetness=0;gust=0;flash=0;reduceMotion;raining=!1;strength=1;nextChange;rand=Fn(2207);gustAt=-1/0;nextGust=0;heavy=!1;boltAt=-1/0;nextBolt=0;thunderAt=null;puddleSpots=[];clouds;cloudMat=mn(2825047,0,{falloff:!0,land:!0});cloudLobes=[];sunny=1;overlay=new hu;overlayCamera=new Nl;rainMat;ripples;rippleMat=mn(16186367,.7,{shape:"ring"});rippleLife=[];puddleMat=mn(4608108,0,{falloff:!0});m=new oe;constructor(t,e,n,s){this.reduceMotion=n,this.nextChange=s+70+this.rand()*80,this.rainMat=new yn({uniforms:{uTime:{value:0},uDensity:{value:0},uShear:{value:.3},uNear:{value:new Kt(14213360)},uFar:{value:new Kt(10135236)}},vertexShader:EM,fragmentShader:bM,depthTest:!1,depthWrite:!1});const r=new Ct(new Wn(2,2),this.rainMat);r.frustumCulled=!1,this.overlay.add(r),this.ripples=new ci(e(),this.rippleMat,28),this.ripples.count=0,this.ripples.frustumCulled=!1,this.ripples.renderOrder=1,t.add(this.ripples);const a=[],o=Fn(919);for(let d=0;d<70;d++){const f=nn(o()*be),p=(o()<.5?-1:1)*(Le.halfWidth*(.4+o()*.9));a.push({x:f.x+f.nx*p,z:f.z+f.nz*p,rot:Math.atan2(-f.tz,f.tx),sx:1+o()*1.6,sz:.5+o()*.5})}for(let d=0;d<40;d++){const f=(o()*2-1)*70,p=(o()*2-1)*50;!Yn(f,p)||On(f,p)>.88||a.push({x:f,z:p,rot:o()*Math.PI,sx:.8+o()*1.4,sz:.5+o()*.6})}this.puddleSpots=a;const l=new ci(e(),this.puddleMat,a.length),c=new wi,h=new O(0,1,0);a.forEach((d,f)=>{c.setFromAxisAngle(h,d.rot),this.m.compose(new O(d.x,.003,d.z),c,new O(d.sx,1,d.sz)),l.setMatrixAt(f,this.m)}),l.instanceMatrix.needsUpdate=!0,l.renderOrder=1,l.frustumCulled=!1,t.add(l);const u=Fn(4471);for(let d=0;d<9;d++){const f=(u()*2-1)*Yr.x,p=(u()*2-1)*Yr.z,_=5+u()*6;for(let m=0;m<3;m++)this.cloudLobes.push({x:f+(m-1)*_*.45+u()*1.5,z:p+(u()*2-1)*_*.2,sx:_*(m===1?1.1:.75),sz:_*(m===1?.7:.5)})}this.clouds=new ci(e(),this.cloudMat,this.cloudLobes.length),this.clouds.renderOrder=1,this.clouds.frustumCulled=!1,this.clouds.position.y=.002,t.add(this.clouds),this.moveClouds(s)}moveClouds(t){const e=this.reduceMotion?0:t,n=(s,r)=>((s+r)%(2*r)+2*r)%(2*r)-r;this.cloudLobes.forEach((s,r)=>{this.m.makeScale(s.sx,1,s.sz),this.m.setPosition(n(s.x+Ch.x*e,Yr.x),0,n(s.z+Ch.z*e,Yr.z)),this.clouds.setMatrixAt(r,this.m)}),this.clouds.instanceMatrix.needsUpdate=!0}puddleAt(t,e){return this.wetness<.35?!1:this.puddleSpots.some(n=>{const s=t-n.x,r=e-n.z;if(Math.abs(s)>1.5||Math.abs(r)>1.5)return!1;const a=Math.cos(n.rot),o=Math.sin(n.rot),l=s*a-r*o,c=s*o+r*a;return(l/(.45*n.sx))**2+(c/(.45*n.sz))**2<1})}splashPuddle(t,e,n){this.ripple(t,.006,e,n),this.ripple(t+.15,.006,e-.1,n+.08)}get wind(){return this.reduceMotion?0:Math.min(1.4,this.intensity*.6+this.gust*.8)}setMode(t,e){this.mode=t,this.nextChange=e+60+this.rand()*60}update(t,e,n){this.mode==="auto"&&!this.reduceMotion&&e>this.nextChange&&(this.raining=!this.raining,this.nextChange=e+(this.raining?60+this.rand()*60:160+this.rand()*160),this.raining&&(this.strength=.55+this.rand()*.45));const s=this.mode==="rain"?1:this.mode==="clear"||this.reduceMotion?0:this.raining?this.strength:0,r=(u,d,f,p)=>u>d?Math.min(u,d+t/f):Math.max(u,d-t/p);this.intensity=r(s,this.intensity,6,8),this.wetness=r(s,this.wetness,18,40),this.intensity>.2&&!this.reduceMotion&&e>this.nextGust&&(this.gustAt=e,this.nextGust=e+4+this.rand()*6);const a=(e-this.gustAt)/yM;this.gust=a>=0&&a<1?Math.sin(Math.PI*a)*Math.min(1,this.intensity*1.3):0;const o=this.intensity>=.85;o&&!this.heavy&&(this.nextBolt=e+3+this.rand()*6),this.heavy=o;let l=!1;o&&e>this.nextBolt&&(this.boltAt=e,this.thunderAt=e+.6+this.rand()*1.8,this.nextBolt=e+14+this.rand()*22),this.thunderAt!==null&&e>=this.thunderAt&&(this.thunderAt=null,l=!0);const c=e-this.boltAt;this.flash=this.reduceMotion||c<0||c>.5?0:c<.07?1:c<.15?.3:c<.21?.8:.8*(1-(c-.21)/.29),this.rainMat.uniforms.uTime.value=this.reduceMotion?3.7:e,this.rainMat.uniforms.uDensity.value=this.intensity*.32,this.rainMat.uniforms.uShear.value=.3+this.gust*.35,this.puddleMat.uniforms.uDensity.value=this.wetness*.6,this.cloudMat.uniforms.uDensity.value=SM*this.sunny*Math.max(0,1-this.intensity*2.5)*(1-this.wetness*.5),this.reduceMotion||this.moveClouds(e);const h=[];if(this.intensity>.05&&!this.reduceMotion){const u=Math.floor(this.intensity*60*t+this.rand());for(let d=0;d<u;d++){const f=n.x+(this.rand()*2-1)*13,p=n.z+(this.rand()*2-1)*10,_=On(f,p);((f-Zt.x)/Zt.rx)**2+((p-Zt.z)/Zt.rz)**2<.9?this.ripple(f,.013,p,e):_>1.02?this.ripple(f,-.33,p,e):Yn(f,p)&&h.push({x:f,z:p})}}return this.updateRipples(e),{splashes:h,thunder:l}}ripple(t,e,n,s){this.rippleLife.length>=28&&this.rippleLife.shift(),this.rippleLife.push({x:t,y:e,z:n,born:s})}updateRipples(t){for(;this.rippleLife.length&&t-this.rippleLife[0].born>.45;)this.rippleLife.shift();this.rippleLife.forEach((e,n)=>{const s=.3+Math.floor(Math.max(0,t-e.born)/.15)*.22;this.m.makeScale(s*1.3,1,s),this.m.setPosition(e.x,e.y,e.z),this.ripples.setMatrixAt(n,this.m)}),this.ripples.count=this.rippleLife.length,this.ripples.instanceMatrix.needsUpdate=!0}setSky(t){this.sunny=Math.min(1,Math.max(0,(t.sunI-.25)/.25)),this.rainMat.uniforms.uNear.value.setHex(Ue(t.foam,16777215,.2)),this.rainMat.uniforms.uFar.value.setHex(Ue(t.sea,t.foam,.45)),this.rippleMat.uniforms.uColor.value.setHex(t.foam),this.puddleMat.uniforms.uColor.value.setHex(Ue(t.seaDeep,2302510,.35))}render(t){if(this.intensity<=.01)return;const e=t.autoClear;t.autoClear=!1,t.render(this.overlay,this.overlayCamera),t.autoClear=e}dispose(){this.rainMat.dispose(),this.overlay.traverse(t=>{t instanceof Ct&&t.geometry.dispose()})}}ne.enabled=!1;const Cn=16,Ui=Ul,vo=60,Mo=1/120,Ph=1.25/Math.cos(Ui),Lh=20,qr=[1,4/3,2],Dh="roam-zoom",Nh=24,Ih=30;function So(i,t){const e=new Map;for(const n of i){const s=t(n),r=`${Math.floor(s.x/Nh)},${Math.floor(s.z/Nh)}`,a=e.get(r);a?a.push(n):e.set(r,[n])}return e}const RM=7,Kr=2.4;class CM{host;canvas;renderer;scene=new hu;camera;look;cb;reduceMotion;landmarks;scenery;solids;labelAnchors=[];stations=[];openedAt=performance.now();life=null;dog=null;trail=null;gulls=null;weather=null;baseLight=Ie.dusk;gradedAt=-1;lastRain=-1;lap=new Pv;lastLapReport="";questRoad=null;lastYear=void 0;ghostMesh;ghostTex;zoom=0;goal=null;goalMarker;pointer=null;hoverAt=0;hoverDirty=!1;lastCaption=null;hovered=null;pointables=[];raycaster=new Up;stridePhase=0;lastWaves=-1;told=new Set;banana=null;kit={top:"#FF9A4A",bottom:"#7EC8E8"};swayTime={value:0};swayWind={value:0};swayClock=0;gradedFlash=0;swayDir={value:new Pt(1,0)};facers=[];swayMats=[];wash=null;boat=null;glints=null;glintSpots=[];cars=[];lamps=[];glowPools=[];gradient;solidMat;occluderMat;seaMat=new Ln;shallowMat=new Ln;foamMat=new Ln;shadowMat;glowMat=ml();rectShadowMat=mn(2825047,.5,{shape:"rect"});beamMat=mn(16769955,.5,{shape:"cone",falloff:!0});tailPoolMat=mn(15222063,.34,{falloff:!0});waterTex;waterMat;runnerMat;runnerTex;sun=new Dp;shade=new Np;seeThrough={value:new Me(-1e3,-1e3,Lh,0)};runner;runnerMesh;runnerShadow;animClock=0;lampsLit=!1;stillSince=performance.now();checkingWatch=!1;jumped=!1;landed=!1;lampPool;focus=new O;pan=new O;axes={right:{x:1,z:0},up:{x:0,z:-1}};size={iw:320,ih:180,scale:1,left:0,top:0};controls;inputEnabled=!0;raf=0;running=!1;paused=!0;hidden=!1;last=0;acc=0;frameTimes=[];frameTimeAt=0;lastPrompt=void 0;lastNearest="";lastPace=void 0;paceSpeed=0;moved=!1;stuck={timer:0,origin:{x:0,z:0},on:!1};sky;cycle=null;clock=!1;clockAt=0;cycleMs=2800;cycleMid=.45;resizeObserver;tmp=new O;constructor(t,e,n){this.host=t,this.cb=n,this.look=e.look,this.reduceMotion=e.reduceMotion,this.sky=e.sky,this.canvas=document.createElement("canvas"),this.canvas.className="roam-canvas",this.canvas.setAttribute("aria-hidden","true"),t.appendChild(this.canvas);try{this.renderer=new C_({canvas:this.canvas,antialias:!1,powerPreference:"default"})}catch(l){throw this.canvas.remove(),l}this.renderer.outputColorSpace=er,this.renderer.setPixelRatio(1),this.gradient=fh(this.look.tones),this.solidMat=new na({vertexColors:!0,gradientMap:this.gradient}),this.occluderMat=new na({vertexColors:!0,gradientMap:this.gradient}),this.installSeeThrough(this.occluderMat),this.shadowMat=mn(2825047,.5),this.waterTex=new Ma(new Uint8Array(rn*rn*4),rn,rn,_n),this.waterTex.magFilter=_e,this.waterTex.minFilter=_e,this.waterTex.wrapS=js,this.waterTex.wrapT=js,this.waterTex.generateMipmaps=!1,this.waterMat=new Ln({map:this.waterTex,side:xn}),this.runnerTex=new pc(Rh()),this.runnerTex.magFilter=_e,this.runnerTex.minFilter=_e,this.runnerTex.generateMipmaps=!1,this.runnerTex.repeat.set(1/ra,.5),this.runnerMat=new Ln({map:this.runnerTex,alphaTest:.5,side:xn}),this.sun.position.set(-.416,.885,-.208),this.scene.add(this.sun,this.shade),this.landmarks=N_(e.zoneIds,e.look.yaw*Math.PI/180),this.scenery=F_(this.landmarks),this.solids=B_(this.landmarks,this.scenery),this.buildWorld(),this.life=new $v(this.scene,{reduceMotion:this.reduceMotion,cows:this.scenery.cows,flowers:this.scenery.flowers,bushes:this.scenery.bushes,aidStation:this.landmarks.find(l=>l.zoneId==="skills"),solids:this.solids,occluder:this.occluderMat,shadow:this.shadowMat,gradient:this.gradient,flatDisc:()=>this.flatDisc(),sfx:(l,c)=>this.sfxAt(l,c),event:l=>this.cb.onEvent(l)}),this.buildBanana(),this.pointables.push(...this.life.pointables());const s=new eM(this.scene,{occluder:this.occluderMat,glow:this.glowMat,shadow:this.shadowMat,flatDisc:()=>this.flatDisc(),solids:this.solids,reduceMotion:this.reduceMotion,sfx:(l,c)=>this.sfxAt(l,c)});this.dog=s,this.pointables.push({obj:s.object,caption:()=>nM,click:()=>s.bark(performance.now()/1e3)}),this.gulls=new uM(this.scene,{occluder:this.occluderMat,shadow:this.shadowMat,flatDisc:()=>this.flatDisc(),reduceMotion:this.reduceMotion,sfx:(l,c)=>this.sfxAt(l,c)}),this.pointables.push(...this.gulls.pointables()),e.trail&&(this.trail=new oM(this.scene,this.landmarks,e.trail,{glow:this.glowMat,shadow:this.shadowMat,flatDisc:()=>this.flatDisc(),solids:this.solids,reduceMotion:this.reduceMotion,picked:l=>{this.sfxAt("gel",l);for(let c=0;c<5;c++){const h=c/5*Math.PI*2;this.life?.particles.spawn({x:l.x,y:.4,z:l.z,vx:Math.cos(h)*.9,vy:1.6,vz:Math.sin(h)*.5,max:.4,size:1/16,gravity:5,color:16763213})}}})),this.weather=new AM(this.scene,()=>this.flatDisc(),this.reduceMotion,performance.now()/1e3),this.lampPool=new Ct(this.flatDisc(),mn(16769955,.42,{shape:"cone",falloff:!0})),this.lampPool.scale.set(3.2,1,2.2),this.scene.add(this.lampPool),this.goalMarker=new Ct(this.flatDisc(),mn(16774371,.7,{shape:"ring"})),this.goalMarker.visible=!1,this.scene.add(this.goalMarker);try{const l=Number(localStorage.getItem(Dh));(l===1||l===2)&&(this.zoom=l)}catch{}this.questRoad=new MM(this.scene,{years:Ed.map(bd).filter(l=>l!==null),occluder:this.occluderMat,solid:this.solidMat,shadow:this.shadowMat,flatDisc:()=>this.flatDisc(),solids:this.solids,reduceMotion:this.reduceMotion}),this.pointables.push(...this.questRoad.pointables()),this.facers.push(...this.questRoad.pointables().map(l=>l.obj));const r=new Wn(1,Ph);r.translate(0,Ph/2,0),this.runnerMesh=new Ct(r,this.runnerMat),this.runnerMesh.renderOrder=2,this.ghostTex=this.runnerTex.clone(),this.ghostTex.needsUpdate=!0;const a=new Ln({map:this.ghostTex,alphaTest:.5,side:xn,color:14208511});a.onBeforeCompile=l=>{l.fragmentShader=l.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
 if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;`)},this.ghostMesh=new Ct(r,a),this.ghostMesh.renderOrder=2,this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh),this.runnerShadow=new Ct(this.flatDisc(),this.shadowMat),this.scene.add(this.runnerMesh,this.runnerShadow),this.stirStations(0,performance.now(),!0),this.scene.traverse(l=>{l instanceof Ct&&l.material instanceof yn&&"uDensity"in l.material.uniforms&&(l.renderOrder=Math.max(l.renderOrder,1))});const o=this.landmarks[0];this.runner=Jc(o?.door.x??0,o?.door.z??40),this.camera=this.makeCamera(),this.clock=e.clock,this.applySky(this.clock?Ra(ps(new Date)):Ie[this.sky]),this.onVisibility=this.onVisibility.bind(this),this.onContextLost=this.onContextLost.bind(this),this.tick=this.tick.bind(this),document.addEventListener("visibilitychange",this.onVisibility),this.canvas.addEventListener("webglcontextlost",this.onContextLost),this.controls=new mM({canvas:this.canvas,enabled:()=>this.inputEnabled,panBy:(l,c)=>this.panBy(l,c),look:(l,c,h)=>this.lookBy(l,c,h),zoom:l=>this.setZoom(l==="cycle"?(this.zoom+1)%qr.length:Math.max(0,Math.min(qr.length-1,this.zoom+l))),respawn:()=>this.cb.onRespawn(),act:(l,c,h)=>this.actAt(l,c,h),hover:l=>{if(l)this.pointer=l;else{if(this.lastCaption===null)return;this.pointer=null}this.hoverDirty=!0},stick:l=>this.cb.onStick(l),usedPad:()=>this.cb.onPad()}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize()}resume(){this.paused=!1,this.wake()}pause(){this.paused=!0,this.controls.release(),this.stop(),this.goal=null,this.pointer=null,this.hovered=null,this.lastCaption!==null&&(this.lastCaption=null,this.cb.onHover(null))}setInputEnabled(t){this.inputEnabled=t,t||this.controls.release()}placeAt(t,e="down"){const n=this.landmarks.find(s=>s.zoneId===t)??this.landmarks[0];n&&(this.runner=Jc(n.door.x,n.door.z,e),this.lap.reset(),this.dog?.arrive(this.runner,performance.now()/1e3,n.facing),this.pan.set(0,0,0),this.focus.set(this.runner.x+this.axes.up.x*Kr,0,this.runner.z+this.axes.up.z*Kr),this.stuck={timer:0,origin:{x:n.door.x,z:n.door.z},on:!1},this.cb.onStuck(!1),this.lastPrompt=void 0,this.running||this.renderOnce())}nearestZone(){return this.nearest().zoneId}runnerPosition(){return{x:this.runner.x,z:this.runner.z}}landmarkPlacements(){return this.landmarks}runnerOnScreen(){return this.toScreen(this.runner.x,.7+this.runner.h,this.runner.z)}setSky(t,e,n,s){if(this.cycleMs=n,this.cycleMid=s,this.clock){this.sky=t;return}if(e&&!this.reduceMotion){(!this.cycle||this.cycle.kind!==e)&&(this.cycle={kind:e,start:performance.now()});return}this.cycle=null,this.sky=t,this.applySky(Ie[t]),this.running||this.renderOnce()}setClock(t){t!==this.clock&&(this.clock=t,this.cycle=null,this.clockAt=performance.now(),this.applySky(t?Ra(ps(new Date)):Ie[this.sky]),this.running||this.renderOnce())}setLook(t){const e=t.tones!==this.look.tones;if(this.look=t,e){const n=this.gradient;this.gradient=fh(t.tones),this.solidMat.gradientMap=this.gradient,this.occluderMat.gradientMap=this.gradient;for(const s of this.swayMats)s.gradientMap=this.gradient;this.life?.setGradient(this.gradient),n.dispose()}this.camera=this.makeCamera(),this.resize()}dispose(){this.stop(),this.trail?.dispose(),this.resizeObserver.disconnect(),this.controls.dispose(),document.removeEventListener("visibilitychange",this.onVisibility),this.canvas.removeEventListener("webglcontextlost",this.onContextLost);const t=new Set;this.scene.traverse(e=>{if(e instanceof Ct||e instanceof ci){e.geometry.dispose();const n=e.material;(Array.isArray(n)?n:[n]).forEach(s=>t.add(s))}}),t.forEach(e=>e.dispose()),this.gradient.dispose(),this.runnerTex.dispose(),this.waterTex.dispose(),this.weather?.dispose(),this.ghostTex.dispose();for(const e of this.stations)for(const n of e.screens)n.tex.dispose();this.renderer.dispose(),this.renderer.forceContextLoss(),this.canvas.remove()}flatDisc(){const t=new Wn(1,1);return t.rotateX(-Math.PI/2),t.translate(0,.02,0),t}point(t,e){return this.pointables.push({obj:t,caption:()=>e}),t}add(t,e,n=0){const s=new Ct(t,e);return s.renderOrder=n,s.matrixAutoUpdate=!1,s.updateMatrix(),this.scene.add(s),s}instanced(t,e,n,s){const r=new oe,a=new wi,o=new O(0,1,0);return[...So(n,l=>l).values()].map(l=>{const c=new ci(t,e,l.length);return l.forEach((h,u)=>{a.setFromAxisAngle(o,h.rot);const[d,f]=s?s(h.scale):[h.scale,h.scale];r.compose(new O(h.x,0,h.z),a,new O(d,h.scale,f)),c.setMatrixAt(u,r)}),c.instanceMatrix.needsUpdate=!0,c.computeBoundingSphere(),this.scene.add(c),c})}addCells(t,e,n){for(const s of So(t,r=>({x:r.x+r.w/2,z:r.z+r.d/2})).values())this.add(lo(s,e),n)}buildWorld(){const t=new Wn(1400,1400);t.rotateX(-Math.PI/2),t.translate(0,-.36,0),this.add(t,this.seaMat);const e=gv(),n=(l,c)=>{const h=new Sa(l,1);return h.rotateX(-Math.PI/2),h.translate(0,c,0),h};this.add(n(e.shallow,-.35),this.shallowMat),this.add(n(e.foam,-.345),this.foamMat);for(const l of fv())this.add(l,this.solidMat);this.point(this.add(n(e.pond,.008),this.shallowMat),"THE POND. SOMETHING SPLASHES.");const s=mv();this.add(n(s.pool,.008),this.shallowMat),this.add(n(s.foam,.01),this.foamMat),this.wash=this.add(n(pv(),.003),this.foamMat),this.addCells(uo(.976,1,.012,0,12887670),.002,this.solidMat),this.addCells(uo(vn,vn,0,.011,w.grass),.004,this.solidMat),this.addCells(uo(vn,vn,.011,0,w.sand,1),.0045,this.solidMat);for(let l=0;l<be;l+=Ih)this.add(xv(l,l+Ih),this.solidMat);this.add(vv(this.landmarks.filter(l=>l.zoneId!=="title").map(l=>l.s),Zs),this.solidMat);for(const l of So(Mv(),c=>({x:c.x+c.w/2,z:c.z+c.d/2})).values())this.add(kt(l),this.solidMat);this.buildRoadside(),this.point(this.add(Tv(),this.occluderMat),"THE PIER.");const r=new Ct(kt(Av(),!1),this.occluderMat);r.position.set(en.x+1.9,-.42,en.z1-2.2),r.rotation.y=Math.PI/2,this.scene.add(r),this.boat=r,this.point(r,"A ROWING BOAT. NOT FOR HIRE."),this.add(lo(Ev(),.011),this.solidMat),this.add(kt(bv()),this.solidMat),this.add(kt(wv()),this.swayMaterial("occluder",.2,.7)),this.buildGlints(),this.point(this.add(uv(),this.occluderMat),"THE MOUNTAIN. ANOTHER DAY."),this.point(this.add(dv(),this.waterMat,1),"THE WATERFALL."),this.point(this.add(hv(),this.solidMat),"THE PASTURE FENCE.");const a=this.scenery;for(const l of this.instanced(kt(j_()),this.swayMaterial("occluder",1.6,2.4),a.palms))this.point(l,"A PALM.");this.instanced(this.flatDisc(),this.shadowMat,a.palms,l=>[1.5*l,1.1*l]);for(let l=0;l<3;l++){const c=a.rocks.filter(h=>h.variant===l);this.instanced(kt(nv(l)),this.occluderMat,c),this.instanced(this.flatDisc(),this.shadowMat,c,h=>[1.1*h,.8*h])}for(let l=0;l<2;l++){const c=a.patches.filter(h=>h.variant%2===l);this.addCells(tv(c,l),.006+l*5e-4,this.solidMat)}for(let l=0;l<2;l++){const c=a.bushes.filter(h=>h.variant%2===l);this.instanced(kt(ev(l)),this.occluderMat,c),this.instanced(this.flatDisc(),this.shadowMat,c,h=>[1.4*h,1*h])}this.instanced(kt(iv()),this.swayMaterial("solid",.08,.3),a.tufts);for(let l=0;l<3;l++)this.instanced(kt(sv(l)),this.swayMaterial("solid",.12,.3),a.flowers.filter(c=>c.variant===l));const o=av.map(([l,c])=>kt(cv(l,c)));[.18,.5,.83].forEach((l,c)=>{const h=new He;h.add(new Ct(o[c%o.length],this.occluderMat));const u=new Ct(this.flatDisc(),this.shadowMat);u.scale.set(2.7,1,1.5),h.add(u);const d=new Ct(kt(ov()),this.glowMat),f=new Ct(this.flatDisc(),this.beamMat);f.scale.set(3.6,1,2.4),f.position.x=1.15+1.8;const p=new Ct(this.flatDisc(),this.tailPoolMat);p.scale.set(1.3,1,1.7),p.position.x=-1.75;const _=new Ct(kt(lv()),this.glowMat);_.visible=!1,h.add(d,f,p,_),this.lamps.push(d,f,p),this.scene.add(h),this.point(h,"ONCOMING TRAFFIC. IT STOPS FOR YOU.");const m=[0,1].map(()=>({kind:"circle",x:0,z:0,r:.6}));this.solids.push(...m);const g={group:h,s:l*be,speed:0,solids:m,brake:_,waited:0,honked:-1/0};this.cars.push(g),this.moveCar(g,0)});for(const l of this.landmarks){const c=Gv(l.zoneId),h=new He;h.position.set(l.x,0,l.z),h.rotation.y=Math.atan2(l.facing.x,l.facing.z),h.add(new Ct(kt(c.boxes),this.occluderMat));const u={zoneId:l.zoneId,door:l.door,centre:{x:l.x,z:l.z},wake:this.reduceMotion?1:0,parts:[],screens:[]};for(const f of c.parts??[]){const p=new Ct(kt(f.boxes),f.glow?ml():this.occluderMat),[_,m,g]=f.at??[0,0,0];p.position.set(_,m,g),h.add(p),u.parts.push({mesh:p,part:f})}for(const f of c.screens??[]){const p=document.createElement("canvas");p.width=f.cols,p.height=f.rows;const _=new pc(p);_.magFilter=_e,_.minFilter=_e,_.generateMipmaps=!1;const m=new Ct(new Wn(f.cols/16,f.rows*Tt),new Ln({map:_}));m.position.set(...f.at),h.add(m),u.screens.push({screen:f,g:p.getContext("2d"),tex:_,drawnAt:-1/0})}c.floor&&h.add(new Ct(lo(c.floor,.007),this.solidMat));for(const f of c.shadows??[]){const p=new Ct(this.flatDisc(),this.rectShadowMat);p.scale.set(f.w,1,f.d);const _=this.sun.position,m=(f.lift??0)/_.y,g=-_.x*m,S=-_.z*m,b=Math.cos(l.angle),y=Math.sin(l.angle);p.position.set(f.x+g*b-S*y,0,f.z+g*y+S*b),h.add(p)}for(const f of c.pools??[]){const p=mn(f.color,.3,{falloff:!0}),_=new Ct(this.flatDisc(),p);_.scale.set(f.rx*2,1,f.rz*2),_.position.set(f.x,0,f.z),h.add(_),this.glowPools.push(p)}this.stations.push(u);const d=l.zoneId;this.pointables.push({obj:h,caption:()=>"A DOOR INTO THE PAGE.",click:()=>this.cb.onOpen(d)}),this.scene.add(h),this.labelAnchors.push({zoneId:l.zoneId,pos:new O(l.x,c.height+.45,l.z)})}}moveCar(t,e){const r=_=>{const m=nn(_);return{x:m.x+m.nx*.75,z:m.z+m.nz*.75,p:m}},a=r(t.s),o=r(t.s-2.4),l=this.runner,c=!!l&&(Math.hypot(l.x-o.x,l.z-o.z)<1.7||Math.hypot(l.x-a.x,l.z-a.z)<1.6)||!!this.dog?.near(o.x,o.z,1.4)||!!this.dog?.near(a.x,a.z,1.3),h=c||this.reduceMotion?0:5;t.brake.visible=!this.reduceMotion&&(c||h<t.speed-.05),t.waited=c&&!this.reduceMotion?t.waited+e:0;const u=performance.now()/1e3;t.waited>1.4&&u-t.honked>4&&(t.honked=u,this.sfxAt("horn",t.solids[0]),this.tellOnce("honk"));const d=h<t.speed?14:3;t.speed=h>t.speed?Math.min(h,t.speed+d*e):Math.max(h,t.speed-d*e),t.s=(t.s-t.speed*e+be)%be;const f=r(t.s),p=this.camera?this.snapToPixels(f.x,f.z):f;t.group.position.set(p.x,0,p.z),t.group.rotation.y=Math.atan2(f.p.tz,-f.p.tx),t.solids.forEach((_,m)=>{const g=m===0?.55:-.55;_.x=f.x+f.p.tx*g,_.z=f.z+f.p.tz*g})}swayMaterial(t,e,n){const s=new na({vertexColors:!0,gradientMap:this.gradient});t==="occluder"&&this.installSeeThrough(s);const r=s.onBeforeCompile.bind(s),a=this.swayTime,o=this.swayDir,l=this.swayWind;return s.onBeforeCompile=(c,h)=>{r(c,h),c.uniforms.uSwayTime=a,c.uniforms.uSwayDir=o,c.uniforms.uWind=l,c.vertexShader=`uniform float uSwayTime;
uniform vec2 uSwayDir;
uniform float uWind;
`+c.vertexShader.replace("#include <project_vertex>",`vec4 mvPosition = vec4( transformed, 1.0 );
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          {
            float swayK = clamp((transformed.y - ${e.toFixed(3)}) / ${(n-e).toFixed(3)}, 0.0, 1.0);
            // in the wind, more of the trees lean, and further: two pixels in a gust
            float gust = sin(uSwayTime * 1.7 + mvPosition.x * 0.31 + mvPosition.z * 0.17);
            float lean = step(0.3 - 0.55 * min(uWind, 1.0), gust) * (1.0 + uWind);
            mvPosition.xz += uSwayDir * floor(swayK * lean + 0.5) / 16.0;
          }
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>`sway-${t}-${e}-${n}`,this.swayMats.push(s),s}buildRoadside(){const{posts:t,lamps:e}=k_(Yu),n=(l,c)=>{const h=nn(l);return{p:h,x:h.x-h.nx*c,z:h.z-h.nz*c}};for(const l of t){const{x:c,z:h}=n(l.s,Le.halfWidth+.7),u=this.add(kt(Sv(l.metres,Wi)),this.occluderMat);u.position.set(c,0,h),u.updateMatrix(),this.facers.push(u),this.point(u,`${l.metres} METRES INTO THE LAP.`),this.solids.push({kind:"circle",x:c,z:h,r:.12})}const{pole:s,bulb:r}=yv(),a=kt(s),o=kt(r);for(const l of e){const{p:c,x:h,z:u}=n(l,Le.halfWidth+.9),d=new He;d.position.set(h,0,u),d.rotation.y=Math.atan2(-c.nz,c.nx);const f=new Ct(o,this.glowMat),p=new Ct(this.flatDisc(),mn(16769955,.36,{falloff:!0}));p.scale.set(2.6,1,2),p.position.x=1,d.add(new Ct(a,this.occluderMat),f,p),this.scene.add(d),this.point(d,"A STREET LAMP."),this.lamps.push(f,p),this.solids.push({kind:"circle",x:h,z:u,r:.15})}}buildGlints(){for(let t=0;t<70;t++){const e=bs(Math.random()*Math.PI*2,1.05+Math.random()*.4);this.glintSpots.push({...e,phase:Math.random()})}this.glints=new ci(new Ti(1,1,1),new Ln({color:16777215}),this.glintSpots.length),this.glints.frustumCulled=!1,this.scene.add(this.glints),this.updateGlints(0)}updateGlints(t){const e=this.glints;if(!e)return;const n=new oe;this.glintSpots.forEach((s,r)=>{const a=this.reduceMotion?r%4===0:(t*.45+s.phase)%1<.12;n.makeScale(a?2/16:0,.01,a?.09:0),n.setPosition(s.x,-.34,s.z),e.setMatrixAt(r,n)}),e.instanceMatrix.needsUpdate=!0}installSeeThrough(t){const e=this.seeThrough;t.onBeforeCompile=n=>{n.uniforms.uSeeThrough=e,n.fragmentShader=`uniform vec4 uSeeThrough;
`+n.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          {
            vec2 seeD = gl_FragCoord.xy - uSeeThrough.xy;
            if (dot(seeD, seeD) < uSeeThrough.z * uSeeThrough.z && gl_FragCoord.z < uSeeThrough.w - 0.0004) {
              if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;
            }
          }`)},t.customProgramCacheKey=()=>"see-through"}makeCamera(){const t=this.look.yaw*Math.PI/180;this.axes={right:{x:Math.cos(t),z:-Math.sin(t)},up:{x:-Math.sin(t),z:-Math.cos(t)}},this.runnerMesh.rotation.y=t,this.runnerShadow.rotation.y=t,this.swayDir.value.set(this.axes.right.x,this.axes.right.z);for(const e of this.facers)e.rotation.y=t,e.matrixAutoUpdate||e.updateMatrix();return this.life?.setYaw(t),this.dog?.setYaw(t),this.trail?.setYaw(t),this.look.lens==="ortho"?new ua(-1,1,1,-1,.1,400):new Dn(30,1,1,400)}resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight),n=Math.max(1,Math.floor(Math.min(t,e)/(this.look.rows*qr[this.zoom]))),s=Math.ceil(t/n/2)*2,r=Math.ceil(e/n/2)*2;this.size={iw:s,ih:r,scale:n,left:Math.floor((t-s*n)/2),top:Math.floor((e-r*n)/2)},this.renderer.setSize(s,r,!1),Object.assign(this.canvas.style,{width:`${s*n}px`,height:`${r*n}px`,left:`${this.size.left}px`,top:`${this.size.top}px`});const a=s/2/Cn,o=r/2/Cn;this.camera instanceof ua?Object.assign(this.camera,{left:-a,right:a,top:o,bottom:-o}):(this.camera.fov=2*Math.atan(o/vo)*180/Math.PI,this.camera.aspect=s/r),this.camera.updateProjectionMatrix(),this.running||this.renderOnce()}placeCamera(){const t=this.look.yaw*Math.PI/180,e=Math.cos(Ui)*vo,n=this.camera;n.position.set(this.focus.x+Math.sin(t)*e,Math.sin(Ui)*vo,this.focus.z+Math.cos(t)*e),n.lookAt(this.focus),n.updateMatrixWorld();const s=new O().setFromMatrixColumn(n.matrixWorld,0),r=new O().setFromMatrixColumn(n.matrixWorld,1),a=new O().setFromMatrixColumn(n.matrixWorld,2),o=n.position,l=d=>Math.round(d*Cn)/Cn,c=l(o.dot(s)),h=l(o.dot(r)),u=o.dot(a);n.position.copy(s.multiplyScalar(c)).add(r.multiplyScalar(h)).add(a.multiplyScalar(u)),n.updateMatrixWorld()}toScreen(t,e,n){const s=this.tmp.set(t,e,n).project(this.camera),{iw:r,ih:a,scale:o,left:l,top:c}=this.size;return{x:l+Math.round((s.x*.5+.5)*r)*o,y:c+Math.round((1-(s.y*.5+.5))*a)*o}}applySky(t){this.baseLight=t;const e=this.weather?.intensity??0,n=this.weather?.flash??0;this.gradedAt=e,this.gradedFlash=n;const s=wM(TM(t,e),n);this.weather?.setSky(s),this.paintSky(s)}paintSky(t){this.sun.color.setHex(t.sun),this.sun.intensity=t.sunI*Math.PI,this.shade.color.setHex(t.shade),this.shade.intensity=t.shadeI*Math.PI,this.seaMat.color.setHex(t.seaDeep),this.shallowMat.color.setHex(t.sea),this.foamMat.color.setHex(t.foam),this.glints?.material?.color.setHex(t.foam),this.renderer.setClearColor(t.seaDeep),this.runnerMat.color.setHex(t.sprite);const e=new Kt(t.shade).multiplyScalar(.42);this.shadowMat.uniforms.uColor.value.copy(e),this.rectShadowMat.uniforms.uColor.value.copy(e),this.lampsLit=t.lamps;for(const n of this.stations)for(const{mesh:s,part:r}of n.parts)r.duskOnly&&(s.visible=t.lamps);for(const n of this.lamps)n.visible=t.lamps;for(const n of this.glowPools)n.uniforms.uDensity.value=t.lamps?.34:.16;this.life?.setSky(t),this.paintWater(t)}paintWater(t){const e=new Kt(t.sea),n=new Kt(t.foam),s=[e,e.clone().lerp(n,.45),n].map(a=>[a.r*255,a.g*255,a.b*255]),r=this.waterTex.image.data;xM.forEach((a,o)=>r.set([...s[a],255],o*4)),this.waterTex.needsUpdate=!0}onVisibility(){this.hidden=document.visibilityState==="hidden",this.hidden?(this.controls.release(),this.stop()):this.wake()}panBy(t,e){const n=1/(this.size.scale*Cn),{right:s,up:r}=this.axes,a=-t*n,o=e*n/Math.sin(Ui);this.pan.x+=s.x*a+r.x*o,this.pan.z+=s.z*a+r.z*o;const l=Math.hypot(this.pan.x,this.pan.z);l>24&&this.pan.multiplyScalar(24/l)}actAt(t,e,n){if(n&&(this.pointer={x:t,y:e},this.lastCaption=null),this.hoverNow(),n&&(this.pointer=null),this.hovered?.click){this.hovered.click();return}const s=this.groundAt(t,e);s&&Yn(s.x,s.z)&&(this.goal=s,this.goalMarker.position.set(s.x,0,s.z))}get trailLeadsTo(){return this.trail?.leadsTo??null}get dogWithYou(){return!!this.dog?.isFollowing}jump(){this.controls.jump()}lookBy(t,e,n){const{right:s,up:r}=this.axes;this.pan.x+=(s.x*t-r.x*e)*14*n,this.pan.z+=(s.z*t-r.z*e)*14*n;const a=Math.hypot(this.pan.x,this.pan.z);a>24&&this.pan.multiplyScalar(24/a)}cycleZoom(){this.setZoom((this.zoom+1)%qr.length)}setZoom(t){if(t!==this.zoom){this.zoom=t;try{localStorage.setItem(Dh,String(t))}catch{}this.resize()}}ndc(t,e){const n=this.canvas.getBoundingClientRect();return new Pt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}groundAt(t,e){this.raycaster.setFromCamera(this.ndc(t,e),this.camera);const n=this.raycaster.ray.intersectPlane(new si(new O(0,1,0),0),new O);return n?{x:n.x,z:n.z}:null}hoverNow(){this.hoverDirty=!1,this.hoverAt=performance.now();let t=null;if(this.pointer&&this.inputEnabled){this.raycaster.setFromCamera(this.ndc(this.pointer.x,this.pointer.y),this.camera);const n=this.raycaster.intersectObjects(this.pointables.map(s=>s.obj),!0);for(const s of n){const r=s.object.material;if(r instanceof yn&&"uDensity"in r.uniforms||!s.object.visible)continue;let a=s.object;for(;a&&!t;)t=this.pointables.find(o=>o.obj===a)??null,a=a.parent;if(t)break}}this.hovered=t;const e=t?t.caption():null;this.canvas.style.cursor=t?.click?"pointer":"",e!==this.lastCaption&&(this.lastCaption=e,this.cb.onHover(e))}onContextLost(t){t.preventDefault(),this.paused=!0,this.stop(),this.cb.onContextLost()}wake(){this.running||this.paused||this.hidden||(this.running=!0,this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}updateWeather(t,e){const n=this.weather;if(!n)return;const{splashes:s,thunder:r}=n.update(t,e/1e3,{x:this.focus.x,z:this.focus.z});(Math.abs(n.intensity-this.gradedAt)>.01||n.intensity===0&&this.gradedAt>0||n.flash!==this.gradedFlash)&&this.applySky(this.baseLight),r&&this.cb.onSfx("thunder"),this.swayWind.value=n.wind;for(const o of s)for(const l of[-1,1])this.life?.particles.spawn({x:o.x,y:.01,z:o.z,vx:l*.5,vy:.9,vz:0,max:.16,size:1/16,gravity:6,color:15002872});const a=Math.round(n.intensity*20)/20;a!==this.lastRain&&(this.lastRain=a,this.cb.onRain(a))}splash(t,e,n){if(this.reduceMotion)return;const s=this.runner;for(let r=0;r<7;r++){const a=r/7*Math.PI*2+n;this.life?.particles.spawn({x:t+Math.cos(a)*.12,y:.04,z:e+Math.sin(a)*.08,vx:Math.cos(a)*1.1+s.vx*.15,vy:1.5+r%3*.35,vz:Math.sin(a)*.7+s.vz*.15,max:.32,size:1/16,gravity:9,color:14214388})}this.weather?.splashPuddle(t,e,n)}setWeather(t){this.weather?.setMode(t,performance.now()/1e3)}updateLap(t){const e=this.runner,n=this.lap.update(t,e.x,e.z,this.inputEnabled),s={running:this.lap.running,time:Math.floor(this.lap.time*10)/10,best:this.lap.best,finished:n},r=`${s.running}|${s.time}|${s.best}`;(n||r!==this.lastLapReport)&&(this.lastLapReport=r,this.cb.onLap(s))}updateGhost(t){const e=this.lap.running?this.lap.ghostAt(this.lap.time):null;if(this.ghostMesh.visible=!!e,!e)return;const n=e.dx*this.axes.right.x+e.dz*this.axes.right.z,s=e.dx*this.axes.up.x+e.dz*this.axes.up.z,r=Math.abs(n)>=Math.abs(s)*.8?n>=0?"right":"left":s>0?"up":"down",o=Math.hypot(e.dx,e.dz)>.02?this.reduceMotion||Math.floor(t/130)%2?"a":"b":"stand",l=Ah[r]*Oi.length+Oi.indexOf(o);this.ghostTex.offset.set(l/ra,.5);const c=this.snapToPixels(e.x,e.z);this.ghostMesh.position.set(c.x,0,c.z),this.ghostMesh.scale.x=r==="left"?-1:1,this.ghostMesh.rotation.y=this.runnerMesh.rotation.y}tellOnce(t){this.told.has(t)||(this.told.add(t),this.cb.onEvent({kind:t}))}buildBanana(){const t=bs(-.62,.935),e=new He,n=[0,1,2].flatMap(a=>[{x:-.12+a*.09,y:.02,z:-.16,w:.08,h:.08,d:.32,color:16767050},{x:-.12+a*.09,y:.08,z:-.22,w:.08,h:.08,d:.08,color:16767050},{x:-.12+a*.09,y:.08,z:.14,w:.08,h:.08,d:.08,color:16767050}]);n.push({x:-.12,y:.12,z:-.27,w:.26,h:.06,d:.06,color:7031342}),e.add(new Ct(kt(n),this.occluderMat));const s=new Ct(kt([{x:.12,y:.22,z:0,w:2/16,h:.1,d:.02,color:16774371}]),this.glowMat);e.add(s);const r=new Ct(this.flatDisc(),this.shadowMat);r.scale.set(.6,1,.4),e.add(r),e.position.set(t.x,0,t.z),this.scene.add(e),this.banana=e,this.point(e,"A BANANA?!")}hideBanana(){this.banana&&(this.banana.visible=!1),this.told.add("banana")}updateBanana(t){const e=this.banana,n=this.runner;!e||!e.visible||!n||(this.reduceMotion||(e.children[0].position.y=Math.floor(t/600)%2?1/16:0,e.children[1].visible=Math.floor(t/250)%8===0),Math.hypot(n.x-e.position.x,n.z-e.position.z)<.75&&(e.visible=!1,this.cb.onSfx("cup"),this.tellOnce("banana")))}setKit(t,e){this.kit={top:t,bottom:e};const n=this.runnerTex.image;Rh(n,this.kit),this.runnerTex.needsUpdate=!0,this.ghostTex.needsUpdate=!0,this.running||this.renderOnce()}sfxAt(t,e){Math.abs(e.x-this.focus.x)<14&&Math.abs(e.z-this.focus.z)<12&&this.cb.onSfx(t)}nearest(){let t=this.landmarks[0],e=1/0;for(const n of this.landmarks){const s=Math.hypot(n.door.x-this.runner.x,n.door.z-this.runner.z);s<e&&(e=s,t=n)}return t}tick(t){if(!this.running)return;const e=Math.min((t-this.last)/1e3,1/30),n=t-this.last;this.last=t;for(const c of this.cars)this.moveCar(c,e);const s={...this.controls.steer(e),jump:!1};if((s.x||s.y||!this.inputEnabled||this.stuck.on)&&(this.goal=null),this.goal){const c=this.goal.x-this.runner.x,h=this.goal.z-this.runner.z,u=Math.hypot(c,h);u<.3?this.goal=null:(s.x=(c*this.axes.right.x+h*this.axes.right.z)/u,s.y=(c*this.axes.up.x+h*this.axes.up.z)/u)}if(this.goalMarker.visible=!!this.goal,this.goal){const c=this.reduceMotion||Math.floor(t/300)%2?.9:.7;this.goalMarker.scale.set(c,1,c*.75)}for(this.hoverDirty&&t-this.hoverAt>60&&this.hoverNow(),this.acc+=e,this.jumped=this.landed=!1;this.acc>=Mo;){s.jump=this.controls.takeJump();const c=this.runner.airborne;this.runner=K_(this.runner,s,Mo,this.axes,this.solids,Yn),this.runner.airborne&&!c&&(this.jumped=!0,this.cb.onJump()),!this.runner.airborne&&c&&(this.landed=!0),this.acc-=Mo}const r=this.runner;r.moving&&!this.moved&&(this.moved=!0,this.cb.onMoved()),this.updateStuck(e,r.moving),this.updateLap(e),r.moving&&this.pan.multiplyScalar(Math.exp(-e*6));const a=r.x+this.pan.x+this.axes.up.x*Kr,o=r.z+this.pan.z+this.axes.up.z*Kr,l=1-Math.exp(-e*8);if(this.focus.x+=(a-this.focus.x)*l,this.focus.z+=(o-this.focus.z)*l,this.focus.x=Math.max(-dn,Math.min(dn,this.focus.x)),this.focus.z=Math.max(-ln,Math.min(ln,this.focus.z)),this.placeCamera(),this.animate(e,t),this.cycle){const c=(t-this.cycle.start)/this.cycleMs;this.applySky(Id(this.cycle.kind,c,this.cycleMid))}else this.clock&&t-this.clockAt>5e3&&(this.clockAt=t,this.applySky(Ra(ps(new Date))));this.updateWeather(e,t),this.render(),this.report(e,n,t),this.raf=requestAnimationFrame(this.tick)}updateStuck(t,e){const n=this.stuck,s=this.runner;if(!e){n.timer=0,n.origin={x:s.x,z:s.z},n.on&&(n.on=!1,this.cb.onStuck(!1));return}n.timer+=t,Math.hypot(s.x-n.origin.x,s.z-n.origin.z)>.6?(n.timer=0,n.origin={x:s.x,z:s.z},n.on&&(n.on=!1,this.cb.onStuck(!1))):n.timer>1.6&&!n.on&&(n.on=!0,this.cb.onStuck(!0))}animate(t,e){const n=this.runner,s=Math.hypot(n.vx,n.vz);this.animClock+=t,(n.moving||n.airborne||s>.4)&&(this.stillSince=e);const r=(e-this.stillSince)/1e3;let a=r>4&&(r-4)%7<1.8?"watch":"stand";if(a==="watch"&&!this.checkingWatch&&this.cb.onEvent({kind:"watch"}),this.checkingWatch=a==="watch",n.airborne)a="jump";else if(s>.4)if(this.reduceMotion)a="a";else{const f=n.sprinting?.11:.15;a=Math.floor(this.animClock/f)%2===0?"a":"b"}const o=Ah[n.facing]*Oi.length+Oi.indexOf(a);this.runnerTex.offset.set(o/ra,this.lampsLit?0:.5);const l=Math.floor(this.animClock/(n.sprinting?.11:.15));if(l!==this.stridePhase&&(this.stridePhase=l,!n.airborne&&s>.4&&t>0)){const f=pa(n.x,n.z,-.25)?"wood":sa(n.x,n.z),p=f!=="wood"&&!!this.weather?.puddleAt(n.x,n.z),_=p||(this.weather?.wetness??0)>.5&&(f==="road"||f==="grass");this.cb.onStep(_?"puddle":f),p&&this.splash(n.x,n.z,e/1e3)}const c=Math.round(n.h*Math.cos(Ui)*Cn)/(Math.cos(Ui)*Cn),h=this.snapToPixels(n.x,n.z);this.runnerMesh.position.set(h.x,c,h.z),this.runnerMesh.scale.x=n.facing==="left"?-1:1;const u=1-Math.min(n.h/1.5,.4);this.runnerShadow.position.set(h.x,0,h.z),this.runnerShadow.scale.set(.95*u,1,.5*u),this.lampPool.visible=this.lampsLit;const d=gM[n.facing]+this.look.yaw*Math.PI/180;if(this.lampPool.position.set(h.x+Math.cos(d)*1.75,0,h.z-Math.sin(d)*1.75),this.lampPool.rotation.y=d,this.stirStations(t,e,!1),this.life?.update({dt:t,t:e/1e3,runner:n,jumped:this.jumped,landed:this.landed,lit:this.lampsLit,focus:{x:this.focus.x,z:this.focus.z},rain:this.weather?.intensity??0,wet:this.weather?.wetness??0}),this.dog?.update(t,e/1e3,n,this.jumped),this.trail?.update(e/1e3,n),this.gulls?.update(t,e/1e3,this.weather?.intensity??0),this.jumped=this.landed=!1,this.updateGhost(e),this.questRoad&&n){const{year:f,rising:p}=this.questRoad.update(e/1e3,n.x,n.z);for(const _ of p)if(this.sfxAt("stone",_),!this.reduceMotion)for(let m=0;m<8;m++){const g=m/8*Math.PI*2;this.life?.particles.spawn({x:_.x+Math.cos(g)*.5,y:.05,z:_.z+Math.sin(g)*.3,vx:Math.cos(g)*1.2,vy:1,vz:Math.sin(g)*.6,max:.6,size:.125,gravity:2,color:13220239})}f!==this.lastYear&&(this.lastYear=f,this.cb.onYear(f)),p.length&&this.questRoad.allRisen()&&this.tellOnce("stones")}n&&n.z>en.z1-1&&Math.abs(n.x-en.x)<en.halfWidth&&this.tellOnce("pier"),this.updateBanana(e),!this.reduceMotion&&(this.waterTex.offset.y=-Math.floor(e/85)/rn,this.swayClock+=t*(1+this.swayWind.value*.9),this.swayTime.value=this.swayClock,this.wash&&(this.wash.visible=Math.floor(e/850)%3===0),this.boat&&(this.boat.position.y=-.42+(Math.floor(e/760)%2?1/16:0)),this.updateGlints(e/1e3))}stirStations(t,e,n){const s=this.runner,r=this.reduceMotion?0:e/1e3,a=(e-this.openedAt)/1e3;for(const o of this.stations){if(!this.reduceMotion&&s){const u=Math.hypot(o.door.x-s.x,o.door.z-s.z)<RM?1:0,d=t*1.6;o.wake=u>o.wake?Math.min(u,o.wake+d):Math.max(u,o.wake-d)}const l=Math.abs(o.centre.x-this.focus.x)<18&&Math.abs(o.centre.z-this.focus.z)<16;if(!n&&!l)continue;const c=o.zoneId==="skills"&&this.life?this.life.sinceCup(e/1e3):1/0,h={t:r,wake:o.wake,lit:this.lampsLit,elapsed:a,still:this.reduceMotion,since:c,lap:this.lap.running?this.lap.time:null,best:this.lap.best};if(n||!this.reduceMotion)for(const{mesh:u,part:d}of o.parts)d.duskOnly&&(u.visible=this.lampsLit),d.animate?.(u,h);for(const u of o.screens)!n&&e-u.drawnAt<1e3/u.screen.fps||(u.drawnAt=e,u.screen.draw(u.g,h),u.tex.needsUpdate=!0)}}snapToPixels(t,e){const n=this.camera,s=new O().setFromMatrixColumn(n.matrixWorld,0),r=new O().setFromMatrixColumn(n.matrixWorld,1),a=new O(t,0,e),o=a.dot(s),l=a.dot(r),c=Math.round(o*Cn)/Cn-o,h=Math.round(l*Cn)/Cn-l,u=this.axes.up,d=h/Math.sin(Ui);return{x:t+s.x*c+u.x*d,z:e+s.z*c+u.z*d}}render(){const t=this.runner,e=this.tmp.set(this.runnerMesh.position.x,.6+t.h,this.runnerMesh.position.z).project(this.camera),{iw:n,ih:s}=this.size;this.seeThrough.value.set((e.x*.5+.5)*n,(e.y*.5+.5)*s,Lh,e.z*.5+.5),this.renderer.render(this.scene,this.camera),this.weather?.render(this.renderer)}renderOnce(){this.placeCamera(),this.animate(0,performance.now()),this.render(),this.report(0,0,performance.now())}report(t,e,n){const s=this.nearest(),r=this.runner,o=(s?Math.hypot(s.door.x-r.x,s.door.z-r.z):1/0)<D_&&!r.airborne?s.zoneId:null;o!==this.lastPrompt&&(this.lastPrompt=o,o&&this.trail?.visit(o),this.cb.onPrompt(o)),s&&s.zoneId!==this.lastNearest&&(this.lastNearest=s.zoneId,this.cb.onNearest(s.zoneId));const l=Math.hypot(r.vx,r.vz);this.paceSpeed+=(l-this.paceSpeed)*Math.min(1,t*5);const c=r.moving?Z_(this.paceSpeed):null;c!==this.lastPace&&(this.lastPace=c,this.cb.onPace(c));const h=this.labelAnchors.map(({zoneId:d,pos:f})=>{const p=this.toScreen(f.x,f.y,f.z),_=p.x>0&&p.y>0&&p.x<this.host.clientWidth&&p.y<this.host.clientHeight;return{zoneId:d,x:p.x,y:p.y,onScreen:_}});this.cb.onFrame({labels:h,runner:this.runnerOnScreen(),world:{x:r.x,z:r.z},speed:Math.hypot(r.vx,r.vz)});const u=pa(r.x,r.z)?1:Math.max(0,Math.min(1,(On(r.x,r.z)-.62)/.33));Math.abs(u-this.lastWaves)>.04&&(this.lastWaves=u,this.cb.onAmbience(u)),e>0&&(this.frameTimes.push(e),this.frameTimes.length>120&&this.frameTimes.shift(),n-this.frameTimeAt>500&&(this.frameTimeAt=n,this.cb.onFrameTime(this.frameTimes.reduce((d,f)=>d+f,0)/this.frameTimes.length)))}}const ju=15,PM=ju-4,LM=.9,DM=160,NM="　";function IM(i){const t=(i%290+290)%290;return t%11===0?"🌴":t%29===7?"🐄":NM}class UM{original=null;pos=0;lastText="";lastWrite=0;still;constructor(t){this.still=t}get running(){return this.original!==null}start(){this.original===null&&(this.original=document.title),this.write(!0)}update(t,e,n){this.original!==null&&(this.still||(this.pos+=t*LM),this.write(!1,e,n))}stop(){this.original!==null&&(document.title=this.original,this.original=null,this.lastText="")}write(t,e=!1,n=null){const s=this.original??document.title;let r;if(this.still)r=`🏃 The Overworld · ${s}`;else{const o=Math.floor(this.pos);let l="";for(let c=0;c<ju;c++)l+=c===PM?"🏃":IM(c-o);r=`${e?"🌧":""}${l}${n?`⏱${n}`:""} · ${s}`}const a=performance.now();r===this.lastText||!t&&a-this.lastWrite<DM||(this.lastText=r,this.lastWrite=a,document.title=r)}}const xa=[{id:"first-steps",name:"FIRST STEPS",hint:"Take your first stride on the island."},{id:"sightseer",name:"SIGHTSEER",hint:"Stand at every Landmark's door.",needs:aa.length},{id:"door",name:"THROUGH THE DOOR",hint:"Open a Landmark."},{id:"travel",name:"FAST TRAVEL",hint:"Jump to a Landmark from the map."},{id:"finisher",name:"FINISHER",hint:"Run a full Lap."},{id:"negative-split",name:"NEGATIVE SPLIT",hint:"Beat your best Lap."},{id:"sub-60",name:"SUB-60",hint:"Run a Lap in under a minute."},{id:"hydrated",name:"HYDRATED",hint:"Grab a cup at the aid station on the run."},{id:"herd",name:"HERD WHISPERER",hint:"Get a moo out of every cow.",needs:5},{id:"birds",name:"BIRDWATCHER",hint:"Send a flock into the air."},{id:"crab",name:"SIDESTEP",hint:"Spook a crab into the sand."},{id:"pier",name:"END OF THE PIER",hint:"Run to the end of the pier."},{id:"historian",name:"HISTORIAN",hint:"Raise every stone on the Quest Road."},{id:"skies",name:"DUSK TO DAWN",hint:"Run the island under both skies.",needs:2},{id:"rain",name:"RAIN RUNNER",hint:"Finish a Lap in the rain."},{id:"dog",name:"BEST FRIEND",hint:"Finish a Lap with the dog at your side."},{id:"honk",name:"ROAD SENSE",hint:"Get honked at. Then move."},{id:"watch",name:"SPLIT CHECK",hint:"Stand still and check your watch, three times over.",needs:3},{id:"banana",name:"BANANA",hint:"Somewhere on the island.",secret:!0,cheer:"Yep, that's my banana."}],ds=[{id:"race",name:"RACE KIT",needs:0,top:"#FF9A4A",bottom:"#7EC8E8"},{id:"dawn",name:"DAWN KIT",needs:4,top:"#7EC8E8",bottom:"#FFF4E3"},{id:"sunset",name:"SUNSET KIT",needs:8,top:"#C2366B",bottom:"#FFC94D"},{id:"night",name:"NIGHT KIT",needs:12,top:"#6E55A8",bottom:"#7EC8E8"},{id:"gold",name:"GOLD KIT",needs:xa.length,top:"#FFC94D",bottom:"#FFF4E3"}],Uh="roam-medals";class FM{data={earned:{},sets:{},kit:"race"};constructor(){try{const t=localStorage.getItem(Uh);if(!t)return;const e=JSON.parse(t),n=new Set(xa.map(s=>s.id));for(const[s,r]of Object.entries(e.earned??{}))n.has(s)&&typeof r=="number"&&(this.data.earned[s]=r);for(const[s,r]of Object.entries(e.sets??{}))n.has(s)&&Array.isArray(r)&&(this.data.sets[s]=r.filter(a=>typeof a=="string"));ds.some(s=>s.id===e.kit)&&(this.data.kit=e.kit),this.unlocked(this.data.kit)||(this.data.kit="race")}catch{}}has(t){return this.data.earned[t]!==void 0}count(){return Object.keys(this.data.earned).length}keys(t){return[...this.data.sets[t]??[]]}progress(t){return this.data.sets[t]?.length??0}record(t,e){const n=xa.find(a=>a.id===t);if(!n||this.has(t))return null;if(n.needs){const a=new Set(this.data.sets[t]??[]);if(e===void 0||a.has(e))return null;if(a.add(e),this.data.sets[t]=[...a],a.size<n.needs)return this.save(),null}const s=this.count();this.data.earned[t]=Date.now(),this.save();const r=ds.filter(a=>a.needs>s&&a.needs<=s+1);return{medal:n,kits:r}}unlocked(t){const e=ds.find(n=>n.id===t);return!!e&&this.count()>=e.needs}kit(){return ds.find(t=>t.id===this.data.kit)??ds[0]}setKit(t){this.unlocked(t)&&(this.data.kit=t,this.save())}save(){try{localStorage.setItem(Uh,JSON.stringify(this.data))}catch{}}}const _a=6,zi=dn*2+_a*2,xs=ln*2+_a*2,ri=i=>({x:i.x+dn+_a,y:i.z+ln+_a});function td(i){const t=i.getContext("2d");if(!t)return;t.imageSmoothingEnabled=!1,t.fillStyle="#3E2A73",t.fillRect(0,0,zi,xs);const e=(c,h)=>{t.fillStyle=h,t.beginPath(),c.forEach((u,d)=>{const f=ri(u);d===0?t.moveTo(f.x,f.y):t.lineTo(f.x,f.y)}),t.closePath(),t.fill()};e(Mn(1.14),"#55408F"),e(Mn(1),"#E8D2A2"),e(Mn(vn),"#6E9A55");const n=[];for(let c=0;c<32;c++){const h=c/32*Math.PI*2;n.push({x:Zt.x+Math.cos(h)*Zt.rx,z:Zt.z+Math.sin(h)*Zt.rz})}e(n,"#7EC8E8");const s=ri({x:ie.x-ie.baseHalfX,z:ie.z-ie.baseHalfZ});t.fillStyle="#4F6852",t.fillRect(s.x,s.y,ie.baseHalfX*2,ie.baseHalfZ*2),t.fillStyle="#6F6A80",t.fillRect(s.x+10,s.y+4,ie.baseHalfX*2-26,ie.baseHalfZ*2-8);const r=ri({x:Pn.x,z:ie.z-2});t.fillStyle="#A8D4E8",t.fillRect(Math.round(r.x)-1,Math.round(r.y),2,Math.round(ie.baseHalfZ+2));const a=[];for(let c=0;c<20;c++){const h=c/20*Math.PI*2;a.push({x:tn.x+Math.cos(h)*tn.rx,z:tn.z+Math.sin(h)*tn.rz})}e(a,"#7EC8E8");const o=ri({x:en.x-en.halfWidth,z:en.z0});t.fillStyle="#9C7452",t.fillRect(Math.round(o.x),Math.round(o.y),2,Math.round(en.z1-en.z0));const l=ri({x:Re.minX,z:Re.minZ});t.fillStyle="#82AD62",t.fillRect(l.x,l.y,Re.maxX-Re.minX,Re.maxZ-Re.minZ),t.fillStyle="#4E4A5E";for(let c=0;c<be;c+=.5){const h=ri(nn(c));t.fillRect(Math.round(h.x)-1,Math.round(h.y)-1,3,3)}}function OM({landmarks:i,dotRef:t,onOpen:e}){const n=st.useRef(null);return st.useEffect(()=>{const s=n.current;if(!s)return;td(s);const r=s.getContext("2d");if(r){r.fillStyle="#FFC94D";for(const a of i){const o=ri({x:a.x,z:a.z});r.fillRect(Math.round(o.x)-2,Math.round(o.y)-2,4,4)}}},[i]),B.jsx("button",{onClick:e,"aria-label":"Open the map",className:"hidden md:block fixed left-6 bottom-6 z-[65] pixel-border bg-dusk-950/90 mx-1 p-1.5 focus-ring",children:B.jsxs("span",{className:"relative block",style:{width:zi,height:xs},children:[B.jsx("canvas",{ref:n,width:zi,height:xs,className:"crisp block","aria-hidden":"true"}),B.jsx("span",{ref:t,"aria-hidden":"true",className:"absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-sunset-500 animate-blink"})]})})}function zM({landmarks:i,runner:t,onTravel:e,onClose:n}){const s=st.useRef(null),r=st.useRef(null);st.useEffect(()=>{s.current&&td(s.current),r.current?.focus()},[]);const a=aa.filter(l=>i.some(c=>c.zoneId===l.id)),o=ri(t);return B.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4",onClick:n,children:B.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"roam-map-title",className:"pixel-border bg-dusk-900 mx-1 p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8 max-h-full overflow-auto",onClick:l=>l.stopPropagation(),children:[B.jsxs("div",{className:"relative shrink-0 self-center",style:{width:zi*2,maxWidth:"100%"},children:[B.jsx("canvas",{ref:s,width:zi,height:xs,className:"crisp block w-full h-auto","aria-hidden":"true"}),a.map((l,c)=>{const h=i.find(d=>d.zoneId===l.id),u=ri({x:h.x,z:h.z});return B.jsx("button",{tabIndex:-1,"aria-hidden":"true",onClick:()=>e(l.id),title:l.zoneName,className:"absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gold-400 hover:bg-gold-300 text-dusk-950 font-arcade text-[9px] flex items-center justify-center",style:{left:`${u.x/zi*100}%`,top:`${u.y/xs*100}%`},children:c+1},l.id)}),B.jsx("span",{"aria-hidden":"true",className:"absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-sunset-500 animate-blink",style:{left:`${o.x/zi*100}%`,top:`${o.y/xs*100}%`}})]}),B.jsxs("div",{className:"min-w-[14rem]",children:[B.jsx("h2",{id:"roam-map-title",className:"font-arcade text-[11px] text-gold-400",children:"MAP"}),B.jsx("p",{className:"mt-3 font-body text-sm text-mist-300",children:"Fast travel to a Landmark."}),B.jsx("ol",{className:"mt-4 space-y-2",children:a.map((l,c)=>B.jsx("li",{children:B.jsxs("button",{ref:c===0?r:void 0,onClick:()=>e(l.id),className:"group w-full text-left font-arcade text-[9px] md:text-[10px] text-cream-100 hover:text-gold-300 focus-ring py-1",children:[B.jsx("span",{className:"text-gold-400",children:c+1})," ",B.jsx("span",{className:"opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"▸"})," ",l.zoneName]})},l.id))}),B.jsxs("p",{className:"mt-5 font-arcade text-[8px] text-mist-300",children:[B.jsx("span",{className:"inline-block w-2 h-2 bg-sunset-500 mr-2","aria-hidden":"true"}),"YOU · M OR ESC TO CLOSE"]}),B.jsx("button",{onClick:n,className:"mt-4 font-arcade text-[9px] text-gold-400 hover:text-gold-300 focus-ring",children:"▸ CLOSE MAP"})]})]})})}const BM=[["WASD / ARROWS","Run"],["SHIFT","Sprint"],["SPACE","Jump"],["ENTER / E","Open a Landmark"],["CLICK","Run there, or open what you click"],["M","Map"],["Z / WHEEL","Zoom out and in"],["R","Back to the nearest Landmark"],["DRAG","Look around"],["ESC","Menu"]],Fh={yaw:[[0,"STRAIGHT"],[45,"45°"]],lens:[["ortho","FLAT"],["perspective","DEPTH"]],rows:[[180,"320×180"],[270,"480×270"]],tones:[[2,"TWO"],[3,"THREE"]]},kM={yaw:"ANGLE",lens:"LENS",rows:"PIXELS",tones:"TONES"};function HM({muted:i,sky:t,look:e,showLook:n,frameMs:s,onResume:r,onToggleSound:a,onToggleSky:o,weather:l,onWeather:c,clock:h,onClock:u,onLook:d,onExit:f,medals:p,medalCount:_,kits:m,kit:g,onKit:S,pad:b}){const y=st.useRef(null);st.useEffect(()=>y.current?.focus(),[]);const C="group block w-full text-left font-arcade text-[10px] md:text-[11px] text-cream-100 hover:text-gold-300 focus-ring py-1.5",R=B.jsx("span",{className:"opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"▸ "});return B.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4",onClick:r,children:B.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"roam-menu-title",className:"pixel-border bg-dusk-900 mx-1 p-6 md:p-8 w-full max-w-lg max-h-full overflow-auto",onClick:x=>x.stopPropagation(),children:[B.jsx("h2",{id:"roam-menu-title",className:"font-pixel font-bold text-3xl text-cream-100",children:"PAUSED"}),B.jsxs("div",{className:"mt-5 space-y-1",children:[B.jsxs("button",{ref:y,onClick:r,className:C,children:[R,"RESUME"]}),B.jsxs("button",{onClick:a,className:C,children:[R,"SOUND: ",i?"OFF":"ON"]}),B.jsxs("button",{onClick:o,className:C,children:[R,"SKY: ",t==="dusk"?"DUSK":"DAWN",h&&B.jsx("span",{className:"text-mist-300",children:" (THE SITE; THE ISLAND KEEPS YOUR CLOCK)"})]}),B.jsxs("button",{onClick:u,className:C,"aria-pressed":!!h,children:[R,"YOUR CLOCK: ",h?`ON · ${h==="day"?"DAYTIME":h.toUpperCase()}`:"OFF"]}),B.jsxs("button",{onClick:c,className:C,children:[R,"WEATHER: ",l==="auto"?"AUTO (SHOWERS)":l==="rain"?"RAIN":"CLEAR"]}),B.jsxs("button",{onClick:f,className:C,children:[R,"EXIT THE OVERWORLD"]})]}),n&&B.jsxs(B.Fragment,{children:[B.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"LOOK (PROTOTYPE)"}),B.jsxs("div",{className:"mt-3 space-y-2",children:[Object.keys(Fh).map(x=>B.jsxs("div",{className:"flex items-center gap-3",children:[B.jsx("span",{className:"w-16 font-arcade text-[8px] text-mist-300",children:kM[x]}),Fh[x].map(([E,H])=>B.jsx("button",{"aria-pressed":e[x]===E,onClick:()=>d({...e,[x]:E}),className:`font-arcade text-[8px] px-2 py-1 focus-ring ${e[x]===E?"bg-gold-400 text-dusk-950":"bg-dusk-800 text-cream-100"}`,children:H},String(E)))]},x)),B.jsxs("p",{className:"font-arcade text-[8px] text-mist-300",children:["FRAME ",s?s.toFixed(1):"--"," MS"]})]})]}),B.jsxs("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:["MEDALS"," ",B.jsxs("span",{className:"text-mist-300",children:[_,"/",p.length]})]}),B.jsx("ul",{className:"mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2",children:p.map(x=>{const E=x.secret&&!x.earned;return B.jsxs("li",{className:"flex items-start gap-2",children:[B.jsx("span",{"aria-hidden":"true",className:`mt-0.5 inline-block w-3 h-3 shrink-0 ${x.earned?"bg-gold-400":"bg-dusk-700"}`}),B.jsxs("span",{className:"min-w-0",children:[B.jsxs("span",{className:`block font-arcade text-[8px] ${x.earned?"text-cream-100":"text-mist-300"}`,children:[E?"???":x.name,B.jsx("span",{className:"sr-only",children:x.earned?" (earned)":" (not yet)"})]}),B.jsxs("span",{className:"block font-body text-xs text-mist-300",children:[E?"A secret.":x.earned&&x.cheer?x.cheer:x.hint,!x.earned&&x.needs?` ${x.progress}/${x.needs}`:""]})]})]},x.id)})}),B.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"KIT"}),B.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:m.map(x=>B.jsxs("button",{disabled:!x.unlocked,"aria-pressed":g===x.id,onClick:()=>S(x.id),className:`flex items-center gap-2 font-arcade text-[8px] px-2 py-1.5 focus-ring disabled:opacity-50 ${g===x.id?"bg-gold-400 text-dusk-950":"bg-dusk-800 text-cream-100 hover:text-gold-300"}`,children:[B.jsxs("span",{"aria-hidden":"true",className:"inline-flex",children:[B.jsx("span",{className:"inline-block w-2 h-2",style:{background:x.top}}),B.jsx("span",{className:"inline-block w-2 h-2",style:{background:x.bottom}})]}),x.unlocked?x.name:`${x.name} · ${x.needs} MEDALS`]},x.id))}),B.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"CONTROLS"}),B.jsx("table",{className:"mt-3 w-full font-body text-sm",children:B.jsx("tbody",{children:BM.map(([x,E])=>B.jsxs("tr",{children:[B.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:x}),B.jsx("td",{className:"py-1 text-mist-300",children:E})]},x))})}),B.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"TOUCH"}),B.jsx("table",{className:"mt-3 w-full font-body text-sm",children:B.jsx("tbody",{children:[["DRAG","Run, the way you drag (further is faster)"],["DRAG FAR","Sprint"],["TAP","Run there, or open what you tap"],["JUMP","Jump"],["TWO FINGERS","Look around"],["ZOOM","Zoom out and in"]].map(([x,E])=>B.jsxs("tr",{children:[B.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:x}),B.jsx("td",{className:"py-1 text-mist-300",children:E})]},x))})}),B.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"GAMEPAD"}),B.jsx("table",{className:"mt-3 w-full font-body text-sm",children:B.jsx("tbody",{children:[["LEFT STICK / D-PAD","Run (tilt gently to jog)"],[`${b.B} / RT`,"Sprint"],[b.A,"Jump"],[b.X,"Open a Landmark"],[b.Y,"Map"],["LB / RB","Zoom out and in"],["RIGHT STICK","Look around"],[b.BACK,"Back to the nearest Landmark"],[b.START,"Menu"]].map(([x,E])=>B.jsxs("tr",{children:[B.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:x}),B.jsx("td",{className:"py-1 text-mist-300",children:E})]},E))})})]})})}const ed="roam-look",nd="roam-weather",id="roam-clock";function GM(){try{return localStorage.getItem(id)==="1"}catch{return!1}}function VM(){try{const i=localStorage.getItem(nd);return i==="clear"||i==="rain"?i:"auto"}catch{return"auto"}}const sd=new URLSearchParams(window.location.search).has("look");function WM(){if(!sd)return _o;try{const i=localStorage.getItem(ed);if(!i)return _o;const t=JSON.parse(i);return{yaw:t.yaw===45?45:0,lens:t.lens==="perspective"?"perspective":"ortho",rows:t.rows===270?270:180,tones:t.tones===3?3:2}}catch{return _o}}const Bs=()=>new Promise(i=>requestAnimationFrame(()=>i())),XM=dn+6,YM=ln+6,Zr={left:30,right:30,top:100,bottom:88};function qM(i,t,e,n){const s=e/2,r=n/2,a=i-s,o=t-r,l=a>0?(e-Zr.right-s)/a:a<0?(Zr.left-s)/a:1/0,c=o>0?(n-Zr.bottom-r)/o:o<0?(Zr.top-r)/o:1/0,h=Math.min(l,c),u=Math.round(Math.atan2(o,a)*180/Math.PI/45)*45;return{x:Math.round(s+a*h),y:Math.round(r+o*h),angle:u}}function KM(i){const t=st.useRef(null),e=st.useRef(0),n=st.useCallback((h,u,d)=>{const f=t.current;if(!f)return;f.style.display="block";const p=d===null?"none":`radial-gradient(circle at ${h}px ${u}px, transparent ${d}px, #000 ${d+1}px)`;f.style.maskImage=p,f.style.setProperty("-webkit-mask-image",p)},[]),s=st.useCallback(()=>{t.current&&(t.current.style.display="none")},[]),r=st.useCallback((h,u,d,f,p)=>new Promise(_=>{cancelAnimationFrame(e.current);const m=performance.now(),g=S=>{const b=Math.min(1,(S-m)/p);n(d,f,Math.round((h+(u-h)*b)/12)*12),b<1?e.current=requestAnimationFrame(g):_()};e.current=requestAnimationFrame(g)}),[n]),a=(h,u)=>Math.hypot(Math.max(h,window.innerWidth-h),Math.max(u,window.innerHeight-u))+12,o=st.useCallback(async(h,u)=>{i||await r(a(h,u),0,h,u,380),n(0,0,null)},[i,r,n]),l=st.useCallback(async(h,u)=>{i||await r(0,a(h,u),h,u,440),s()},[i,r,s]),c=st.useCallback(()=>n(0,0,null),[n]);return st.useEffect(()=>()=>cancelAnimationFrame(e.current),[]),st.useMemo(()=>({ref:t,close:o,open:l,cover:c}),[o,l,c])}function ks({glyph:i}){return B.jsx("span",{className:"inline-block border border-gold-400 text-gold-400 px-1 leading-tight",children:i})}function Oh(i){const t=document.querySelector('[role="dialog"][aria-modal="true"]');if(!t)return;const e=Array.from(t.querySelectorAll("button:not([disabled]), a[href]")).filter(r=>r.offsetParent!==null&&r.tabIndex>=0&&r.getAttribute("aria-hidden")!=="true");if(e.length===0)return;const n=e.indexOf(document.activeElement),s=e[(n+i+e.length)%e.length];s.focus({focusVisible:!0}),s.scrollIntoView({block:"nearest"})}const ZM=i=>{const t=i.target;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable)};function JM(){const i=wd(),{view:t,doorZone:e,arrival:n,startedByGesture:s,setCovering:r,reportNearest:a}=i,{theme:o,cycle:l,toggle:c}=Td(),{muted:h,toggleMuted:u,playSfx:d,playStep:f,setAmbience:p,setMode:_}=Ad(),[m]=st.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),[g]=st.useState(()=>new URLSearchParams(window.location.search).has("look")),S=st.useRef(null),b=st.useRef(null),y=KM(m),C=st.useRef(new Map),[R,x]=st.useState(!1),[E,H]=st.useState("loading"),[I,z]=st.useState(null),[W,Z]=st.useState(null),[N,K]=st.useState("title"),[j,X]=st.useState(null),[ot,q]=st.useState(!1),[et,rt]=st.useState(!1),[wt,Nt]=st.useState("none"),[Q,yt]=st.useState(0),[At,Ft]=st.useState(null),[Mt,Wt]=st.useState(null),[Se,Bt]=st.useState(null),se=st.useRef(0),te=st.useRef(null);te.current||(te.current=new FM);const Gt=te.current,[ve,Ae]=st.useState([]),[Ge,xe]=st.useState(()=>Gt.count()),[ue,Ce]=st.useState(()=>_r.pad?xo(us()):null),[ye,sn]=st.useState(()=>!_r.pad&&window.matchMedia("(pointer: coarse)").matches),Ve=st.useRef(ye),F=st.useRef(null),Je=st.useRef(null),ce=st.useRef(ue),fe=st.useCallback(()=>{_r.pad=!0,!ce.current&&(ce.current=xo(us()),Ce(ce.current))},[]);st.useEffect(()=>{const lt=Et=>{_r.pad=!1;const v=Et instanceof PointerEvent&&Et.pointerType==="touch";Ve.current!==v&&(Ve.current=v,sn(v)),ce.current&&(ce.current=null,Ce(null))};return window.addEventListener("keydown",lt),window.addEventListener("pointerdown",lt),()=>{window.removeEventListener("keydown",lt),window.removeEventListener("pointerdown",lt)}},[]);const mt=st.useCallback((lt,Et,v)=>{ce.current&&pM(us(),lt,Et,v)},[]),[Pe,Ot]=st.useState(()=>Gt.kit().id),Ht=st.useRef(0),A=st.useRef(null),M=st.useRef(()=>{});M.current=(lt,Et)=>{const v=Gt.record(lt,Et);if(!v)return;d("medal"),mt(160,.3,.6),xe(Gt.count());const D=[{key:++Ht.current,title:`MEDAL · ${v.medal.name}`,line:v.medal.cheer??v.medal.hint}];for(const G of v.kits)D.push({key:++Ht.current,title:`${G.name} UNLOCKED`,line:"Wear it from the menu."});Ae(G=>[...G,...D])};const k=st.useCallback((lt,Et)=>M.current(lt,Et),[]);st.useEffect(()=>{if(ve.length===0)return;const lt=window.setTimeout(()=>Ae(Et=>Et.slice(1)),3400);return()=>window.clearTimeout(lt)},[ve]);const[it,tt]=st.useState(WM),[ut,gt]=st.useState(VM),[Y,J]=st.useState(GM),[ft,P]=st.useState(()=>Ca(ps(new Date)));st.useEffect(()=>{if(!Y)return;P(Ca(ps(new Date)));const lt=window.setInterval(()=>P(Ca(ps(new Date))),6e4);return()=>window.clearInterval(lt)},[Y]);const $=Y?ft==="dusk"||ft==="night":o==="dusk",V=st.useRef({roam:i,panel:wt,playSfx:d,playStep:f,setAmbience:p,view:t,dark:$,openDoor:(lt=>{})});V.current={...V.current,roam:i,panel:wt,playSfx:d,playStep:f,setAmbience:p,view:t,dark:$};const dt=st.useRef(null),ct=st.useRef(0),pt=st.useRef(null),It=st.useRef(0),Xt=st.useRef(0),at=st.useRef(null),Ut=st.useRef(null),Yt=st.useRef(0),vt=st.useRef(Promise.resolve()),Qt=st.useRef(!1),pe=st.useCallback(lt=>{vt.current=vt.current.then(async()=>{Qt.current=!0;try{await lt()}finally{Qt.current=!1}})},[]),En=st.useRef(()=>{}),As=st.useRef(it);As.current=it;const qi=st.useRef(o);qi.current=o;const fr=st.useRef(Y);fr.current=Y,st.useEffect(()=>{const lt=S.current;if(!lt)return;const Et={onPrompt:L=>{Z(L),L&&(V.current.playSfx("prompt"),M.current("sightseer",L))},onNearest:L=>{K(L),a(L)},onPace:X,onStuck:q,onRespawn:()=>En.current(),onMoved:()=>{rt(!0),M.current("first-steps")},onJump:()=>V.current.playSfx("jump"),onSfx:L=>V.current.playSfx(L),onLap:L=>{if(Ut.current=L.running?fs(L.time):null,Ft(L.running||L.best!==null?L:null),L.finished){const U=L.finished;V.current.playSfx(U.newBest?"best":"lap"),mt(U.newBest?320:180,.5,.8),Wt(U),window.clearTimeout(se.current),se.current=window.setTimeout(()=>Wt(null),3600),M.current("finisher"),U.newBest&&A.current!==null&&M.current("negative-split"),U.time<60&&M.current("sub-60"),Xt.current>=.5&&M.current("rain"),b.current?.dogWithYou&&M.current("dog")}A.current=L.best},onYear:Bt,onEvent:L=>{const U=M.current;L.kind==="moo"?U("herd",String(L.cow)):L.kind==="birds"?U("birds"):L.kind==="crab"?U("crab"):L.kind==="cup"?U("hydrated"):L.kind==="pier"?U("pier"):L.kind==="stones"?U("historian"):L.kind==="honk"?U("honk"):L.kind==="watch"?U("watch",String(te.current.progress("watch")+1)):L.kind==="banana"&&U("banana")},onFrame:L=>{const U=performance.now(),ht=Yt.current?Math.min((U-Yt.current)/1e3,.1):0;Yt.current=U,at.current?.update(L.speed*ht,Xt.current>=.5,Ut.current);const _t=pt.current;_t&&(_t.style.left=`${(L.world.x/(2*XM)+.5)*100}%`,_t.style.top=`${(L.world.z/(2*YM)+.5)*100}%`);const nt=window.innerWidth,xt=window.innerHeight;for(const St of L.labels){const zt=C.current.get(St.zoneId);if(zt)if(zt.style.visibility="visible",St.onScreen)zt.dataset.pin="false",zt.style.transform=`translate(${St.x}px, ${St.y}px) translate(-50%, -100%)`;else{const $t=qM(St.x,St.y,nt,xt);zt.dataset.pin="true",zt.style.setProperty("--pin-angle",`${$t.angle}deg`),zt.style.transform=`translate(${$t.x}px, ${$t.y}px) translate(-50%, -50%)`}}},onFrameTime:yt,onContextLost:()=>z("The graphics device stopped responding."),onStep:L=>V.current.playStep(L),onAmbience:L=>{It.current=L,V.current.setAmbience({waves:L,dusk:V.current.dark,rain:Xt.current})},onPad:fe,onHover:L=>{const U=dt.current;U&&(U.textContent=L??"",U.style.display=L?"block":"none",window.clearTimeout(ct.current),L&&Ve.current&&(ct.current=window.setTimeout(()=>U.style.display="none",1600)))},onStick:L=>{const U=F.current,ht=Je.current;if(!U||!ht||(U.style.display=ht.style.display=L?"block":"none",!L))return;const _t=L.x-L.ox,nt=L.y-L.oy,xt=Math.hypot(_t,nt),St=xt>Fi*ga?Fi*ga/xt:1;U.style.transform=`translate(${L.ox}px, ${L.oy}px) translate(-50%, -50%)`,ht.style.transform=`translate(${L.ox+_t*St}px, ${L.oy+nt*St}px) translate(-50%, -50%)`,ht.dataset.sprint=String(L.sprint)},onOpen:L=>V.current.openDoor(L),onRain:L=>{Xt.current=L,V.current.setAmbience({waves:It.current,dusk:V.current.dark,rain:L})}};let v;try{v=new CM(lt,{zoneIds:aa.map(L=>L.id),look:As.current,reduceMotion:m,sky:qi.current,clock:fr.current,trail:te.current?.has("sightseer")?null:te.current?.keys("sightseer")??[]},Et)}catch{z("This browser couldn't start WebGL2.");return}b.current=v,v.setInputEnabled(!1);const D=te.current?.kit();D&&v.setKit(D.top,D.bottom),te.current?.has("banana")&&v.hideBanana(),x(!0);const G=window;return new URLSearchParams(window.location.search).has("look")&&(G.__overworld=v),()=>{v.dispose(),b.current=null,delete G.__overworld,window.clearTimeout(se.current)}},[]),st.useEffect(()=>{R&&H(s?"live":"start")},[R]),st.useEffect(()=>{b.current?.setSky(o,l,Rd,Cd)},[o,l,R]),st.useEffect(()=>{b.current?.setClock(Y);try{localStorage.setItem(id,Y?"1":"0")}catch{}},[Y,R]);const zn=E==="live"&&!I&&t==="overworld";st.useEffect(()=>{if(zn)return _("roam"),()=>_("browse")},[zn,_]),st.useEffect(()=>{if(zn)return p({waves:It.current,dusk:$,rain:Xt.current}),()=>p(null)},[zn,$,p]),st.useEffect(()=>{at.current||(at.current=new UM(m));const lt=at.current;zn?lt.start():lt.stop()},[zn,m]),st.useEffect(()=>()=>at.current?.stop(),[]),st.useEffect(()=>{!zn&&dt.current&&(dt.current.style.display="none")}),st.useEffect(()=>{const lt=Et=>{const v=dt.current;v&&(v.style.transform=`translate(${Et.clientX+14}px, ${Et.clientY+16}px)`)};return window.addEventListener("pointermove",lt),window.addEventListener("pointerdown",lt),()=>{window.removeEventListener("pointermove",lt),window.removeEventListener("pointerdown",lt)}},[]),st.useEffect(()=>{et&&E==="live"&&t==="overworld"&&k("skies",o)},[et,E,t,o,k]),st.useEffect(()=>{if(R){b.current?.setWeather(ut);try{localStorage.setItem(nd,ut)}catch{}}},[ut,R]),st.useEffect(()=>{if(b.current?.setLook(it),!!sd)try{localStorage.setItem(ed,JSON.stringify(it))}catch{}},[it]);const hi=st.useRef("none"),bn=st.useRef(!1),Ki=st.useCallback(async()=>{const lt=b.current;if(!lt)return;hi.current==="door"?await y.close(window.innerWidth/2,window.innerHeight/2):y.cover(),r(!0);const{arrivalZone:Et}=V.current.roam;lt.placeAt(Et,hi.current==="none"&&Et==="title"?"right":"down"),S.current&&(S.current.style.visibility="visible"),lt.resume(),hi.current="overworld",await Bs(),await Bs();const v=lt.runnerOnScreen();await y.open(v.x,v.y),lt.setInputEnabled(V.current.panel==="none")},[y,r]),Rs=st.useCallback(async lt=>{const Et=b.current;if(Et){if(hi.current==="overworld"&&!bn.current){const v=Et.runnerOnScreen();await y.close(v.x,v.y)}else y.cover();bn.current=!1,Et.pause(),Nt("none"),S.current&&(S.current.style.visibility="hidden"),Pd(lt),hi.current="door",await Bs(),await y.open(window.innerWidth/2,window.innerHeight/2)}},[y]),Zi=st.useRef(""),Ai=st.useRef(-1);st.useEffect(()=>{!R||E!=="live"||(t==="overworld"&&(Zi.current!=="overworld"||n!==Ai.current)?pe(Ki):t==="door"&&Zi.current!=="door"&&e&&pe(()=>Rs(e)),Zi.current=t,Ai.current=n)},[t,n,e,R,E,pe,Ki,Rs]);const Bn=st.useCallback(lt=>{Qt.current||V.current.view!=="overworld"||pe(async()=>{const Et=b.current;if(!Et)return;Et.setInputEnabled(!1),V.current.playSfx("door"),mt(90,.2,.4);const v=Et.runnerOnScreen();await y.close(v.x,v.y),bn.current=!0,M.current("door"),V.current.roam.openDoor(lt)})},[pe,y,mt]);V.current.openDoor=Bn;const Cs=st.useCallback(lt=>{Nt("none"),pe(async()=>{const Et=b.current;if(!Et)return;Et.setInputEnabled(!1),V.current.playSfx("warp");const v=Et.runnerOnScreen();await y.close(v.x,v.y),Et.placeAt(lt,"down"),await Bs(),await Bs();const D=Et.runnerOnScreen();await y.open(D.x,D.y),Et.setInputEnabled(V.current.panel==="none")})},[pe,y]);En.current=()=>{!Qt.current&&b.current&&Cs(b.current.nearestZone())};const Ri=st.useCallback(()=>{Nt("none"),pe(async()=>{const lt=b.current;lt?.setInputEnabled(!1);const Et=lt?.runnerOnScreen()??{x:window.innerWidth/2,y:window.innerHeight/2};await y.close(Et.x,Et.y),V.current.roam.exit()})},[pe,y]);st.useEffect(()=>{!R||E!=="live"||t!=="overworld"||Qt.current||(b.current?.setInputEnabled(wt==="none"),wt==="none"&&document.activeElement instanceof HTMLElement&&document.activeElement.blur())},[wt,R,E,t]);const pr=st.useRef({stage:E,view:t,panel:wt,prompt:W,failure:I,roam:i,openDoor:Bn,playSfx:d});pr.current={stage:E,view:t,panel:wt,prompt:W,failure:I,roam:i,openDoor:Bn,playSfx:d},st.useEffect(()=>{const lt=new Qu;let Et=0,v=performance.now(),D=0,G=0;const L=U=>{Et=requestAnimationFrame(L);const ht=Math.min((U-v)/1e3,1/20);v=U;const _t=us();if(lt.update(_t),!_t)return;const nt=pr.current;if(lt.anyDown()&&fe(),nt.failure){(lt.down(ae.A)||lt.down(ae.B))&&nt.roam.exit();return}if(nt.stage==="start"){lt.down(ae.A)||lt.down(ae.START)?H("live"):lt.down(ae.B)&&nt.roam.exit();return}if(nt.stage!=="live"||Qt.current)return;const xt=xl(_t,0,1);if(nt.view==="door"){const St=Ke(_t,ae.DOWN)?1:Ke(_t,ae.UP)?-1:xt.y;St&&window.scrollBy(0,St*900*ht),lt.down(ae.B)&&nt.roam.backToOverworld();return}if(nt.view==="overworld"){if(nt.panel!=="none"){const St=Ke(_t,ae.DOWN)||Ke(_t,ae.RIGHT)||xt.y>.6?1:Ke(_t,ae.UP)||Ke(_t,ae.LEFT)||xt.y<-.6?-1:0;St?D?U-D>350&&U-G>140&&(G=U,Oh(St)):(D=U,G=U,Oh(St)):D=0,lt.down(ae.A)&&document.activeElement instanceof HTMLElement?document.activeElement.click():(lt.down(ae.B)||lt.down(ae.START)||nt.panel==="map"&&lt.down(ae.Y))&&Nt("none");return}lt.down(ae.X)&&nt.prompt?nt.openDoor(nt.prompt):lt.down(ae.Y)?(nt.playSfx("menu"),Nt("map")):lt.down(ae.START)&&(nt.playSfx("menu"),Nt("menu"))}};return Et=requestAnimationFrame(L),()=>cancelAnimationFrame(Et)},[fe]),st.useEffect(()=>{const lt=Et=>{if(!(ZM(Et)||Et.repeat||Et.metaKey||Et.ctrlKey||Et.altKey)&&!I){if(E==="start"){(Et.key==="Enter"||Et.code==="Space")&&(Et.preventDefault(),H("live"));return}if(!(E!=="live"||Qt.current)){if(t==="door"){Et.key==="Escape"&&(Et.preventDefault(),i.backToOverworld());return}if(wt==="map"){(Et.key==="Escape"||Et.code==="KeyM")&&(Et.preventDefault(),Nt("none"));return}if(wt==="menu"){Et.key==="Escape"&&(Et.preventDefault(),Nt("none"));return}if(Et.key==="Escape")Et.preventDefault(),d("menu"),Nt("menu");else if(Et.code==="KeyM")Et.preventDefault(),d("menu"),Nt("map");else{if(Et.key==="Enter"&&Et.target instanceof HTMLButtonElement)return;(Et.key==="Enter"||Et.code==="KeyE")&&W&&(Et.preventDefault(),Bn(W))}}}};return window.addEventListener("keydown",lt),()=>window.removeEventListener("keydown",lt)},[E,t,wt,W,I,i,Bn,d]);const kn=lt=>Et=>{Et.currentTarget.blur(),lt()},Ps=E==="live"&&!I,ui=Ps&&t==="overworld",mr=b.current?.landmarkPlacements()??[];return B.jsxs(B.Fragment,{children:[B.jsx("div",{ref:S,className:"fixed inset-0 z-[60] overflow-hidden bg-dusk-950"}),B.jsx("div",{className:"fixed inset-0 z-[62] overflow-hidden pointer-events-none",style:{display:ui?"block":"none"},children:aa.map((lt,Et)=>B.jsxs("button",{ref:v=>{v?C.current.set(lt.id,v):C.current.delete(lt.id)},onClick:kn(()=>Bn(lt.id)),"aria-label":`Open the ${xr(lt.id).toLowerCase()}`,title:lt.zoneName,"data-pin":"false",className:`group absolute left-0 top-0 pointer-events-auto whitespace-nowrap px-2 py-1 font-arcade text-[8px] md:text-[9px] focus-ring data-[pin=true]:px-1.5 data-[pin=true]:opacity-80 data-[pin=true]:hover:opacity-100 ${W===lt.id?"bg-gold-400 text-dusk-950":"bg-dusk-950/85 text-gold-300 hover:text-gold-400"}`,style:{visibility:"hidden"},children:[B.jsx("span",{className:"group-data-[pin=true]:hidden",children:lt.zoneName}),B.jsxs("span",{"aria-hidden":"true",className:"hidden group-data-[pin=true]:inline-flex items-center gap-1",children:[Et+1,B.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",className:"crisp",style:{transform:"rotate(var(--pin-angle, 0deg))"},children:B.jsx("path",{d:"M0 0h2v8h-2zM2 2h2v4h-2zM4 3h2v2h-2z",fill:"currentColor"})})]})]},lt.id))}),ui&&B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"fixed inset-x-0 top-0 z-[65] flex items-start justify-between gap-3 px-4 md:px-6 py-3",children:[B.jsxs("div",{className:"hidden sm:block pixel-border bg-dusk-950/90 mx-1 px-3 py-2",children:[B.jsx("p",{className:"font-arcade text-[9px] md:text-[10px] text-gold-400",children:"THE OVERWORLD"}),B.jsx("p",{className:"mt-2 font-arcade text-[8px] text-mist-300",children:Se!==null?B.jsxs(B.Fragment,{children:["QUEST ROAD · ",B.jsx("span",{className:"text-gold-300",children:Se})]}):B.jsxs(B.Fragment,{children:["NEAR ",xr(N)]})})]}),B.jsxs("div",{className:"flex flex-wrap items-start justify-end gap-3",children:[At&&B.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right",children:[B.jsxs("p",{className:"font-arcade text-[8px] text-mist-300",children:["LAP"," ",B.jsx("span",{className:"text-[10px] md:text-[11px] text-gold-300 tabular-nums",children:At.running?fs(At.time):"-:--.-"})]}),B.jsxs("p",{className:"mt-2 font-arcade text-[8px] text-mist-300",children:["BEST ",B.jsx("span",{className:"text-sunset-300 tabular-nums",children:At.best!==null?fs(At.best):"-:--.-"})]})]}),B.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right",children:[B.jsx("p",{className:"font-arcade text-[8px] text-mist-300",children:"PACE"}),B.jsxs("p",{className:"mt-2 font-arcade text-[10px] md:text-[11px] text-gold-300",children:[j??"--:--",B.jsx("span",{className:"text-[8px] text-mist-300",children:" /KM"})]})]}),B.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 flex items-center gap-4",children:[B.jsxs("button",{onClick:kn(()=>Nt("map")),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:["MAP ",!ye&&B.jsx("span",{className:"text-mist-300",children:ue?ue.Y:"M"})]}),B.jsxs("button",{onClick:kn(()=>Nt("menu")),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:["MENU ",!ye&&B.jsx("span",{className:"text-mist-300",children:ue?ue.START:"ESC"})]}),ye&&B.jsx("button",{onClick:kn(()=>b.current?.cycleZoom()),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:"ZOOM"}),B.jsx("button",{onClick:kn(u),"aria-label":h?"Unmute sound":"Mute sound",className:"text-mist-300 hover:text-gold-400 focus-ring",children:h?B.jsx(Ld,{size:14}):B.jsx(Dd,{size:14})})]})]})]}),B.jsxs("div",{"aria-live":"polite",className:`fixed inset-x-0 ${ye?"bottom-48":"bottom-24"} z-[65] flex flex-col-reverse items-center gap-3 px-4 pointer-events-none`,children:[ve[0]&&B.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 text-center",children:[B.jsx("span",{className:"block font-arcade text-[9px] md:text-[10px] text-gold-400",children:ve[0].title}),B.jsx("span",{className:"mt-2 block font-body text-sm text-cream-100",children:ve[0].line})]},ve[0].key),Mt&&B.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[10px] md:text-[11px] text-cream-100 text-center leading-relaxed",children:["LAP ",B.jsx("span",{className:"text-gold-300",children:fs(Mt.time)}),Mt.newBest&&B.jsxs(B.Fragment,{children:[B.jsx("br",{}),B.jsx("span",{className:"text-gold-400 animate-blink",children:"NEW BEST!"})]})]})]}),B.jsx("div",{"aria-live":"polite",className:`fixed inset-x-0 ${ye?"bottom-28":"bottom-6"} z-[65] flex justify-center px-4 pointer-events-none`,children:W&&ye&&!ue?B.jsxs("button",{onClick:kn(()=>Bn(W)),className:"pointer-events-auto select-none touch-manipulation pixel-border bg-gold-400 text-dusk-950 mx-1 px-5 py-4 font-arcade text-[10px] md:text-[11px] focus-ring",children:["▸ OPEN THE ",xr(W)]}):W?B.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-cream-100",children:[ue?B.jsx(ks,{glyph:ue.X}):B.jsx("span",{className:"text-gold-400 animate-blink",children:"ENTER"})," ▸ OPEN THE"," ",xr(W)]}):ot?B.jsx("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] text-cream-100",children:ye&&!ue?B.jsxs(B.Fragment,{children:["STUCK? ",B.jsx("span",{className:"text-gold-400",children:"TAP MAP"})," TO JUMP AHEAD"]}):B.jsxs(B.Fragment,{children:["STUCK? PRESS ",ue?B.jsx(ks,{glyph:ue.BACK}):B.jsx("span",{className:"text-gold-400",children:"R"})]})}):et?null:B.jsx("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[8px] md:text-[9px] text-cream-100 text-center leading-relaxed",children:ue?B.jsxs(B.Fragment,{children:[B.jsx("span",{className:"text-gold-400",children:"STICK"})," RUN · ",B.jsx(ks,{glyph:ue.B})," SPRINT · ",B.jsx(ks,{glyph:ue.A})," JUMP ·"," ",B.jsx(ks,{glyph:ue.Y})," MAP"]}):ye?B.jsxs(B.Fragment,{children:[B.jsx("span",{className:"text-gold-400",children:"DRAG"})," TO RUN · ",B.jsx("span",{className:"text-gold-400",children:"FAR"})," TO SPRINT ·"," ",B.jsx("span",{className:"text-gold-400",children:"TAP"})," TO GO THERE"]}):B.jsxs(B.Fragment,{children:[B.jsx("span",{className:"text-gold-400",children:"WASD"})," RUN · ",B.jsx("span",{className:"text-gold-400",children:"SHIFT"})," SPRINT ·"," ",B.jsx("span",{className:"text-gold-400",children:"SPACE"})," JUMP · ",B.jsx("span",{className:"text-gold-400",children:"M"})," MAP"]})})})]}),B.jsx("div",{ref:F,"aria-hidden":"true",className:"fixed left-0 top-0 z-[64] pointer-events-none rounded-full border-2 border-cream-100/60 bg-dusk-950/20",style:{display:"none",width:Fi*2,height:Fi*2}}),B.jsx("div",{ref:Je,"aria-hidden":"true",className:"fixed left-0 top-0 z-[64] pointer-events-none rounded-full bg-cream-100/70 data-[sprint=true]:bg-gold-400",style:{display:"none",width:36,height:36}}),ui&&ye&&wt==="none"&&B.jsx("button",{onPointerDown:lt=>{lt.preventDefault(),b.current?.jump()},"aria-label":"Jump",className:"fixed right-5 bottom-6 z-[65] w-20 h-20 rounded-full select-none touch-manipulation pixel-border bg-dusk-950/80 font-arcade text-[10px] text-gold-400 active:bg-gold-400 active:text-dusk-950",children:"JUMP"}),B.jsx("div",{ref:dt,"aria-hidden":"true",className:"fixed left-0 top-0 z-[66] pointer-events-none pixel-border bg-dusk-950/90 px-2 py-1 font-arcade text-[8px] text-cream-100 whitespace-nowrap",style:{display:"none"}}),ui&&b.current&&B.jsx(OM,{landmarks:mr,dotRef:pt,onOpen:kn(()=>Nt("map"))}),Ps&&t==="door"&&B.jsx("div",{className:"fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none",children:B.jsxs("button",{onClick:i.backToOverworld,className:"pointer-events-auto pixel-border bg-dusk-950/95 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring",children:["◂ BACK TO THE OVERWORLD ",B.jsx("span",{className:"text-mist-300",children:ue?ue.B:"ESC"})]})}),ui&&wt==="map"&&b.current&&B.jsx(zM,{landmarks:mr,runner:b.current.runnerPosition(),onTravel:lt=>{k("travel"),Cs(lt)},onClose:()=>Nt("none")}),ui&&wt==="menu"&&B.jsx(HM,{muted:h,sky:o,look:it,showLook:g,frameMs:Q,onResume:()=>Nt("none"),onToggleSound:u,onToggleSky:()=>{Nt("none"),c()},weather:ut,onWeather:()=>gt(lt=>lt==="auto"?"rain":lt==="rain"?"clear":"auto"),clock:Y?ft:null,onClock:()=>J(lt=>!lt),onLook:tt,onExit:Ri,pad:ue??xo(us()),medals:xa.map(lt=>({...lt,earned:Gt.has(lt.id),progress:Gt.progress(lt.id)})),medalCount:Ge,kits:ds.map(lt=>({...lt,unlocked:Gt.unlocked(lt.id)})),kit:Pe,onKit:lt=>{Gt.setKit(lt),Ot(Gt.kit().id);const Et=Gt.kit();b.current?.setKit(Et.top,Et.bottom)}}),B.jsx("div",{ref:y.ref,"aria-hidden":"true",className:"fixed inset-0 z-[75] bg-ground"}),I?B.jsx(Ta,{title:"THE OVERWORLD COULDN'T START",message:I,action:{label:"BACK TO THE PAGE",onClick:i.exit}}):E==="loading"?B.jsx(Ta,{title:"LOADING THE OVERWORLD"}):E==="start"?B.jsx(Ta,{title:"THE OVERWORLD",message:"Run the island. Every Landmark is a door into the page.",action:{label:"PRESS START",onClick:()=>H("live"),blink:!0},secondary:{label:"BACK TO THE PAGE",onClick:i.exit}}):null]})}export{JM as default};

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).setMemoizedReadOnly=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(r){return i.call(r)},o=Object.prototype.hasOwnProperty;var u=function(r,e){return null!=r&&o.call(r,e)},c="function"==typeof Symbol?Symbol.toStringTag:"",f=u,l=c,s=n;var p=a,v=function(r){var e,t,n;if(null==r)return s.call(r);t=r[l],e=f(r,l);try{r[l]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[l]=t:delete r[l],n},g=t()?v:p,d=g;var m=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)},b=m;var h=function(r){return"object"==typeof r&&null!==r&&!b(r)},w=/./,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var E=function(){try{return y({},"x",{}),!0}catch(r){return!1}},j=Object.defineProperty,P=Object.prototype,T=P.toString,_=P.__defineGetter__,O=P.__defineSetter__,V=P.__lookupGetter__,x=P.__lookupSetter__;var S=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(V.call(r,e)||x.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&_&&_.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r},k=j,I=S,A=E()?k:I,F=A;var R=function(r,e,t){F(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},$=R;var M=function(r){return"boolean"==typeof r},C=Boolean.prototype.toString;var N=g,B=function(r){try{return C.call(r),!0}catch(r){return!1}},G=t();var L=function(r){return"object"==typeof r&&(r instanceof Boolean||(G?B(r):"[object Boolean]"===N(r)))},Z=M,W=L;var X=$,z=function(r){return Z(r)||W(r)},U=L;X(z,"isPrimitive",M),X(z,"isObject",U);var Y=z;var D=function(){return new Function("return this;")()},q="object"==typeof self?self:null,H="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},K="object"==typeof J?J:null;module.exports=K;var Q=Y.isPrimitive,rr=D,er=q,tr=H,nr=r(Object.freeze({__proto__:null}));var ir=function(r){if(arguments.length){if(!Q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return rr()}if(er)return er;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")},ar=ir(),or=ar.document&&ar.document.childNodes,ur=Int8Array,cr=w,fr=or,lr=ur;var sr=function(){return"function"==typeof cr||"object"==typeof lr||"function"==typeof fr};var pr=function(){return/^\s*function\s*([^(]*)/i},vr=pr;$(vr,"REGEXP",pr());var gr=vr,dr=m;var mr=function(r){return null!==r&&"object"==typeof r};$(mr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(mr));var br=mr;var hr=g,wr=gr.REGEXP,yr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Er=function(r){var e,t,n;if(("Object"===(t=hr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=wr.exec(n.toString()))return e[1]}return yr(r)?"Buffer":t},jr=Er;var Pr=Er;var Tr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e},_r=function(r){return Pr(r).toLowerCase()},Or=sr()?_r:Tr;var Vr=function(r){return"function"===Or(r)},xr=h,Sr=Vr,kr=A;var Ir=function(r,e,t){if(!xr(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(!xr(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(!Sr(t.value))throw new TypeError("invalid argument. The `value` property of the property descriptor must be a function. Value: `"+t.value+"`.");function n(n){t.value=n,kr(r,e,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},kr(r,e,{configurable:!0,enumerable:t.enumerable,get:function(){var e=t.value.call(r);return n(e),e},set:t.writable?n:void 0})},Ar=Ir;var Fr=function(r){return"string"==typeof r},Rr=String.prototype.valueOf;var $r=g,Mr=function(r){try{return Rr.call(r),!0}catch(r){return!1}},Cr=t();var Nr=function(r){return"object"==typeof r&&(r instanceof String||(Cr?Mr(r):"[object String]"===$r(r)))},Br=Fr,Gr=Nr;var Lr=$,Zr=function(r){return Br(r)||Gr(r)},Wr=Nr;Lr(Zr,"isPrimitive",Fr),Lr(Zr,"isObject",Wr);var Xr=Zr,zr=Math.floor;var Ur=function(r){return zr(r)===r},Yr=Ur;var Dr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Yr(r.length)&&r.length>=0&&r.length<=9007199254740991};var qr=function(r){return"number"==typeof r},Hr=Number,Jr=Hr.prototype.toString;var Kr=g,Qr=Hr,re=function(r){try{return Jr.call(r),!0}catch(r){return!1}},ee=t();var te=function(r){return"object"==typeof r&&(r instanceof Qr||(ee?re(r):"[object Number]"===Kr(r)))},ne=qr,ie=te;var ae=$,oe=function(r){return ne(r)||ie(r)},ue=te;ae(oe,"isPrimitive",qr),ae(oe,"isObject",ue);var ce=oe,fe=Number.POSITIVE_INFINITY,le=Hr.NEGATIVE_INFINITY,se=fe,pe=le,ve=Ur;var ge=function(r){return r<se&&r>pe&&ve(r)},de=ce.isPrimitive,me=ge;var be=function(r){return de(r)&&me(r)},he=ce.isObject,we=ge;var ye=function(r){return he(r)&&we(r.valueOf())},Ee=be,je=ye;var Pe=$,Te=function(r){return Ee(r)||je(r)},_e=ye;Pe(Te,"isPrimitive",be),Pe(Te,"isObject",_e);var Oe=Te;var Ve=function(r){return r!=r},xe=ce.isPrimitive,Se=Ve;var ke=function(r){return xe(r)&&Se(r)},Ie=ce.isObject,Ae=Ve;var Fe=function(r){return Ie(r)&&Ae(r.valueOf())},Re=ke,$e=Fe;var Me=$,Ce=function(r){return Re(r)||$e(r)},Ne=Fe;Me(Ce,"isPrimitive",ke),Me(Ce,"isObject",Ne);var Be=Dr,Ge=Oe.isPrimitive,Le=Xr.isPrimitive,Ze=Ce.isPrimitive;var We=function(r,e,t){var n,i,a;if(!Be(r)&&!Le(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ge(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Le(r)){if(!Le(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ze(e)){for(a=i;a<n;a++)if(Ze(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Xe=We,ze=Xr.isPrimitive;var Ue=function(r){if(!ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ye=Xr.isPrimitive;var De=function(r){if(!Ye(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},qe=Ue,He=De,Je=Xr.isPrimitive;var Ke=function(r){return Je(r)&&r===He(r)&&r!==qe(r)},Qe=fe,rt=le;var et=function(r){return r==r&&r>rt&&r<Qe},tt=Oe.isPrimitive;var nt=function(r){return tt(r)&&r>=0},it=Oe.isObject;var at=function(r){return it(r)&&r.valueOf()>=0},ot=nt,ut=at;var ct=$,ft=function(r){return ot(r)||ut(r)},lt=at;ct(ft,"isPrimitive",nt),ct(ft,"isObject",lt);var st=ft.isPrimitive,pt=Xr.isPrimitive;var vt=function(r,e){var t,n;if(!pt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!st(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},gt=Oe.isPrimitive,dt=Xr.isPrimitive;var mt=function(r,e,t){var n,i;if(!dt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!dt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!gt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},bt=vt,ht=mt;var wt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ht(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+bt("0",i):bt("0",i)+r,n&&(r="-"+r)),r},yt=Ke,Et=De,jt=Ue,Pt=et,Tt=ce.isPrimitive,_t=wt;var Ot=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Pt(n)){if(!Tt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_t(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_t(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=yt(r.specifier)?Et(t):jt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Vt=Xr.isPrimitive,xt=/[-\/\\^$*+?.()|[\]{}]/g;var St=function(r){var e,t;if(!Vt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(xt,"\\$&"):(e=(e=r.substring(1,t)).replace(xt,"\\$&"),r=r[0]+e+r.substring(t))},kt=RegExp.prototype.exec;var It=g,At=function(r){try{return kt.call(r),!0}catch(r){return!1}},Ft=t();var Rt=St,$t=Vr,Mt=Xr.isPrimitive,Ct=function(r){return"object"==typeof r&&(r instanceof RegExp||(Ft?At(r):"[object RegExp]"===It(r)))};var Nt=Ke,Bt=De,Gt=Ue,Lt=function(r,e,t){if(!Mt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Mt(e))e=Rt(e),e=new RegExp(e,"g");else if(!Ct(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Mt(t)&&!$t(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Zt=et,Wt=ce.isPrimitive,Xt=function(r){return Math.abs(r)},zt=/e\+(\d)$/,Ut=/e-(\d)$/,Yt=/^(\d+)$/,Dt=/^(\d+)e/,qt=/\.0$/,Ht=/\.0*e/,Jt=/(\..*[^0])0*e/;var Kt=function(r){var e,t,n=parseFloat(r.arg);if(!Zt(n)){if(!Wt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Xt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Lt(t,Jt,"$1e"),t=Lt(t,Ht,"e"),t=Lt(t,qt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Lt(t,zt,"e+0$1"),t=Lt(t,Ut,"e-0$1"),r.alternate&&(t=Lt(t,Yt,"$1."),t=Lt(t,Dt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Nt(r.specifier)?Bt(t):Gt(t)},Qt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var rn=vt;var en=Xr.isPrimitive,tn=Xe,nn=Ve,an=Ot,on=Kt,un=function(r){var e,t,n,i,a;for(e=0,n=[],a=Qt.exec(r);a;)(t=r.slice(e,Qt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Qt.lastIndex,a=Qt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},cn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+rn(" ",n):rn(" ",n)+r},fn=wt,ln=String.fromCharCode;var sn=function(r){var e,t,n,i,a,o,u,c,f;if(!en(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=un(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],en(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!tn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,nn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,nn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=an(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!nn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=nn(a)?String(n.arg):ln(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=on(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=fn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=cn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},pn=h,vn=Vr,gn=Ar,dn=sn;var mn=function(r,e,t){if(!pn(r))throw new TypeError(dn("invalid argument. First argument must be an object. Value: `%s`.",r));if(!vn(t))throw new TypeError(dn("invalid argument. Third argument must be a function. Value: `%s`.",t));gn(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})};return mn}));
//# sourceMappingURL=bundle.js.map

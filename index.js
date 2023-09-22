// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).setMemoizedReadOnly=r()}(this,(function(){"use strict";function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=e();var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function n(e,r){return null!=e&&i.call(e,r)}var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var c=r&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,a;if(null==e)return t.call(e);i=e[o],r=n(e,o);try{e[o]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[o]=i:delete e[o],a}:function(e){return t.call(e)};var s=Array.isArray?Array.isArray:function(e){return"[object Array]"===c(e)};function l(e){return"object"==typeof e&&null!==e&&!s(e)}var p=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function g(e){return"number"==typeof e}function d(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function h(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+d(n):d(n)+e,i&&(e="-"+e)),e}var b=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function v(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!g(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=h(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=h(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var m=Math.abs,_=String.prototype.toLowerCase,E=String.prototype.toUpperCase,k=String.prototype.replace,x=/e\+(\d)$/,S=/e-(\d)$/,j=/^(\d+)$/,T=/^(\d+)e/,V=/\.0$/,$=/\.0*e/,A=/(\..*[^0])0*e/;function F(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!g(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":m(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=k.call(t,A,"$1e"),t=k.call(t,$,"e"),t=k.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=k.call(t,x,"e+0$1"),t=k.call(t,S,"e-0$1"),e.alternate&&(t=k.call(t,j,"$1."),t=k.call(t,T,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===E.call(e.specifier)?E.call(t):_.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function C(e,r,t){var i=r-e.length;return i<0?e:e=t?e+I(i):I(i)+e}var O=String.fromCharCode,R=isNaN,P=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function G(e){var r,t,i,n,a,o,c,s,l;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(y(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Z(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,R(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,R(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=v(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!R(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=R(a)?String(i.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=F(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=h(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=C(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,i,n;for(t=[],n=0,i=L.exec(e);i;)(r=e.slice(n,L.lastIndex-i[0].length)).length&&t.push(r),t.push(W(i)),n=L.lastIndex,i=L.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function U(e){return"string"==typeof e}function X(e){var r,t,i;if(!U(e))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return G.apply(null,t)}var B,M=Object.prototype,z=M.toString,q=M.__defineGetter__,D=M.__defineSetter__,H=M.__lookupGetter__,J=M.__lookupSetter__;B=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?f:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(H.call(e,r)||J.call(e,r)?(i=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&q&&q.call(e,r,t.get),o&&D&&D.call(e,r,t.set),e};var K=B;function Q(e,r,t){K(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(e){return"boolean"==typeof e}var ee=e();function re(){return ee&&"symbol"==typeof Symbol.toStringTag}var te=Object.prototype.toString;var ie="function"==typeof a?a.toStringTag:"";var ne=re()?function(e){var r,t,i;if(null==e)return te.call(e);t=e[ie],r=n(e,ie);try{e[ie]=void 0}catch(r){return te.call(e)}return i=te.call(e),r?e[ie]=t:delete e[ie],i}:function(e){return te.call(e)},ae=Boolean,oe=Boolean.prototype.toString;var ce=re();function se(e){return"object"==typeof e&&(e instanceof ae||(ce?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ne(e)))}function le(e){return Y(e)||se(e)}function pe(){return new Function("return this;")()}Q(le,"isPrimitive",Y),Q(le,"isObject",se);var ue="object"==typeof self?self:null,fe="object"==typeof window?window:null,ge="object"==typeof global?global:null,de="object"==typeof globalThis?globalThis:null;var he=function(e){if(arguments.length){if(!Y(e))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return pe()}if(de)return de;if(ue)return ue;if(fe)return fe;if(ge)return ge;throw new Error("unexpected error. Unable to resolve global object.")}(),be=he.document&&he.document.childNodes,we=Int8Array;var ve=e();var ye=Object.prototype.toString;var me="function"==typeof a?a.toStringTag:"";var _e=ve&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return ye.call(e);t=e[me],r=n(e,me);try{e[me]=void 0}catch(r){return ye.call(e)}return i=ye.call(e),r?e[me]=t:delete e[me],i}:function(e){return ye.call(e)},Ee="function"==typeof Object.defineProperty?Object.defineProperty:null;var ke=Object.defineProperty;function xe(e){return"number"==typeof e}function Se(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function je(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Se(n):Se(n)+e,i&&(e="-"+e)),e}var Te=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase;function $e(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!xe(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=je(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=je(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):Te.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ae(e){return"string"==typeof e}var Fe=Math.abs,Ie=String.prototype.toLowerCase,Ce=String.prototype.toUpperCase,Oe=String.prototype.replace,Re=/e\+(\d)$/,Pe=/e-(\d)$/,Ze=/^(\d+)$/,Ge=/^(\d+)e/,Le=/\.0$/,We=/\.0*e/,Ne=/(\..*[^0])0*e/;function Ue(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!xe(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Fe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Oe.call(t,Ne,"$1e"),t=Oe.call(t,We,"e"),t=Oe.call(t,Le,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Oe.call(t,Re,"e+0$1"),t=Oe.call(t,Pe,"e-0$1"),e.alternate&&(t=Oe.call(t,Ze,"$1."),t=Oe.call(t,Ge,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ce.call(e.specifier)?Ce.call(t):Ie.call(t)}function Xe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Be(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Xe(i):Xe(i)+e}var Me=String.fromCharCode,ze=isNaN,qe=Array.isArray;function De(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function He(e){var r,t,i,n,a,o,c,s,l;if(!qe(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ae(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=De(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ze(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ze(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=$e(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!ze(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ze(a)?String(i.arg):Me(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ue(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=je(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Be(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Je=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ke(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Qe(e){var r,t,i,n;for(t=[],n=0,i=Je.exec(e);i;)(r=e.slice(n,Je.lastIndex-i[0].length)).length&&t.push(r),t.push(Ke(i)),n=Je.lastIndex,i=Je.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ye(e){return"string"==typeof e}function er(e){var r,t,i;if(!Ye(e))throw new TypeError(er("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Qe(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return He.apply(null,t)}var rr,tr=Object.prototype,ir=tr.toString,nr=tr.__defineGetter__,ar=tr.__defineSetter__,or=tr.__lookupGetter__,cr=tr.__lookupSetter__;rr=function(){try{return Ee({},"x",{}),!0}catch(e){return!1}}()?ke:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===ir.call(e))throw new TypeError(er("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===ir.call(t))throw new TypeError(er("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(or.call(e,r)||cr.call(e,r)?(i=e.__proto__,e.__proto__=tr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&nr&&nr.call(e,r,t.get),o&&ar&&ar.call(e,r,t.set),e};var sr=rr;function lr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;!function(e,r,t){sr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(lr,"REGEXP",pr);var ur="function"==typeof Object.defineProperty?Object.defineProperty:null;var fr=Object.defineProperty;function gr(e){return"number"==typeof e}function dr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function hr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+dr(n):dr(n)+e,i&&(e="-"+e)),e}var br=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function vr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!gr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=hr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=hr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===wr.call(e.specifier)?wr.call(t):br.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function yr(e){return"string"==typeof e}var mr=Math.abs,_r=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,kr=String.prototype.replace,xr=/e\+(\d)$/,Sr=/e-(\d)$/,jr=/^(\d+)$/,Tr=/^(\d+)e/,Vr=/\.0$/,$r=/\.0*e/,Ar=/(\..*[^0])0*e/;function Fr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!gr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":mr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=kr.call(t,Ar,"$1e"),t=kr.call(t,$r,"e"),t=kr.call(t,Vr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=kr.call(t,xr,"e+0$1"),t=kr.call(t,Sr,"e-0$1"),e.alternate&&(t=kr.call(t,jr,"$1."),t=kr.call(t,Tr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Er.call(e.specifier)?Er.call(t):_r.call(t)}function Ir(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Cr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Ir(i):Ir(i)+e}var Or=String.fromCharCode,Rr=isNaN,Pr=Array.isArray;function Zr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Gr(e){var r,t,i,n,a,o,c,s,l;if(!Pr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(yr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Zr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Rr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Rr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=vr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Rr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Rr(a)?String(i.arg):Or(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Fr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=hr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Cr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Nr(e){var r,t,i,n;for(t=[],n=0,i=Lr.exec(e);i;)(r=e.slice(n,Lr.lastIndex-i[0].length)).length&&t.push(r),t.push(Wr(i)),n=Lr.lastIndex,i=Lr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ur(e){return"string"==typeof e}function Xr(e){var r,t,i;if(!Ur(e))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Nr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Gr.apply(null,t)}var Br,Mr=Object.prototype,zr=Mr.toString,qr=Mr.__defineGetter__,Dr=Mr.__defineSetter__,Hr=Mr.__lookupGetter__,Jr=Mr.__lookupSetter__;Br=function(){try{return ur({},"x",{}),!0}catch(e){return!1}}()?fr:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===zr.call(e))throw new TypeError(Xr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===zr.call(t))throw new TypeError(Xr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Hr.call(e,r)||Jr.call(e,r)?(i=e.__proto__,e.__proto__=Mr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&qr&&qr.call(e,r,t.get),o&&Dr&&Dr.call(e,r,t.set),e};var Kr=Br;function Qr(e){return null!==e&&"object"==typeof e}function Yr(e){var r,t,i,n;if(("Object"===(t=_e(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=pr.exec(i.toString()))return r[1]}return Qr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}!function(e,r,t){Kr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Qr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Xr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!s(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Qr));var et="function"==typeof p||"object"==typeof we||"function"==typeof be?function(e){return Yr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Yr(e).toLowerCase():r};function rt(e){return"function"===et(e)}var tt="function"==typeof Object.defineProperty?Object.defineProperty:null;var it=Object.defineProperty;function nt(e){return"number"==typeof e}function at(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ot(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+at(n):at(n)+e,i&&(e="-"+e)),e}var ct=String.prototype.toLowerCase,st=String.prototype.toUpperCase;function lt(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!nt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ot(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ot(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===st.call(e.specifier)?st.call(t):ct.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function pt(e){return"string"==typeof e}var ut=Math.abs,ft=String.prototype.toLowerCase,gt=String.prototype.toUpperCase,dt=String.prototype.replace,ht=/e\+(\d)$/,bt=/e-(\d)$/,wt=/^(\d+)$/,vt=/^(\d+)e/,yt=/\.0$/,mt=/\.0*e/,_t=/(\..*[^0])0*e/;function Et(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!nt(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ut(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=dt.call(t,_t,"$1e"),t=dt.call(t,mt,"e"),t=dt.call(t,yt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=dt.call(t,ht,"e+0$1"),t=dt.call(t,bt,"e-0$1"),e.alternate&&(t=dt.call(t,wt,"$1."),t=dt.call(t,vt,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===gt.call(e.specifier)?gt.call(t):ft.call(t)}function kt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function xt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+kt(i):kt(i)+e}var St=String.fromCharCode,jt=isNaN,Tt=Array.isArray;function Vt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $t(e){var r,t,i,n,a,o,c,s,l;if(!Tt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(pt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Vt(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,jt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,jt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=lt(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!jt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=jt(a)?String(i.arg):St(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Et(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ot(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=xt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var At=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ft(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function It(e){var r,t,i,n;for(t=[],n=0,i=At.exec(e);i;)(r=e.slice(n,At.lastIndex-i[0].length)).length&&t.push(r),t.push(Ft(i)),n=At.lastIndex,i=At.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ct(e){return"string"==typeof e}function Ot(e){var r,t,i;if(!Ct(e))throw new TypeError(Ot("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=It(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return $t.apply(null,t)}var Rt,Pt=Object.prototype,Zt=Pt.toString,Gt=Pt.__defineGetter__,Lt=Pt.__defineSetter__,Wt=Pt.__lookupGetter__,Nt=Pt.__lookupSetter__;Rt=function(){try{return tt({},"x",{}),!0}catch(e){return!1}}()?it:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Zt.call(e))throw new TypeError(Ot("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Zt.call(t))throw new TypeError(Ot("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(Wt.call(e,r)||Nt.call(e,r)?(i=e.__proto__,e.__proto__=Pt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gt&&Gt.call(e,r,t.get),o&&Lt&&Lt.call(e,r,t.set),e};var Ut=Rt;function Xt(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}return function(e,r,t){if(!l(e))throw new TypeError(Xt("1Sj3L,Gc",e));if(!rt(t))throw new TypeError(Xt("1Sj3N,G4",t));!function(e,r,t){if(!l(e))throw new TypeError(Ot("invalid argument. First argument must be an object. Value: `%s`.",e));if(!l(t))throw new TypeError(Ot("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(!rt(t.value))throw new TypeError(Ot("invalid argument. The `value` property of the property descriptor must be a function. Value: `%s`.",t.value));function i(i){t.value=i,Ut(e,r,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},Ut(e,r,{configurable:!0,enumerable:t.enumerable,get:function(){var r=t.value.call(e);return i(r),r},set:t.writable?i:void 0})}(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}}));
//# sourceMappingURL=index.js.map

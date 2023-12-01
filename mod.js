// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,o="function"==typeof i?i.toStringTag:"";var a=r()?function(e){var r,i,a,c,u;if(null==e)return t.call(e);i=e[o],u=o,r=null!=(c=e)&&n.call(c,u);try{e[o]=void 0}catch(r){return t.call(e)}return a=t.call(e),r?e[o]=i:delete e[o],a}:function(e){return t.call(e)};var c=Array.isArray?Array.isArray:function(e){return"[object Array]"===a(e)};function u(e){return"object"==typeof e&&null!==e&&!c(e)}var l=/./,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function p(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function h(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===y.call(e.specifier)?y.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(e){return"string"==typeof e}var v=Math.abs,m=String.prototype.toLowerCase,j=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,S=/e-(\d)$/,x=/^(\d+)$/,T=/^(\d+)e/,k=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function F(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=E.call(t,A,"$1e"),t=E.call(t,V,"e"),t=E.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=E.call(t,_,"e+0$1"),t=E.call(t,S,"e-0$1"),e.alternate&&(t=E.call(t,x,"$1."),t=E.call(t,T,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===j.call(e.specifier)?j.call(t):m.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function C(e,r,t){var n=r-e.length;return n<0?e:e=t?e+O(n):O(n)+e}var I=String.fromCharCode,$=isNaN,P=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,n,i,o,a,c,u,l;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(w(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,n,i;for(t=[],i=0,n=G.exec(e);n;)(r=e.slice(i,G.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=G.lastIndex,n=G.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function N(e){return"string"==typeof e}function U(e){var r,t,n;if(!N(e))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Z(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return B.apply(null,t)}var W,M=Object.prototype,X=M.toString,z=M.__defineGetter__,q=M.__defineSetter__,D=M.__lookupGetter__,H=M.__lookupSetter__;W=function(){try{return s({},"x",{}),!0}catch(e){return!1}}()?f:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===X.call(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===X.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(D.call(e,r)||H.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};var J=W;function K(e,r,t){J(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(e){return"boolean"==typeof e}var Y=Boolean,ee=Boolean.prototype.toString;var re=r();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===a(e)))}function ne(e){return Q(e)||te(e)}function ie(){return new Function("return this;")()}K(ne,"isPrimitive",Q),K(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ue="object"==typeof ce?ce:null,le="object"==typeof globalThis?globalThis:null;var se=function(e){if(arguments.length){if(!Q(e))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(le)return le;if(oe)return oe;if(ae)return ae;if(ue)return ue;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=se.document&&se.document.childNodes,pe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var de=/^\s*function\s*([^(]*)/i;function be(e){return null!==e&&"object"==typeof e}function ye(e){var r,t,n,i;if(("Object"===(t=a(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}K(ge,"REGEXP",de),K(be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!c(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(be));var he="function"==typeof l||"object"==typeof pe||"function"==typeof fe?function(e){return ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ye(e).toLowerCase():r};function we(e){return"function"===he(e)}function ve(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function me(e,r,t){if(!u(e))throw new TypeError(ve("1Sj3L,Gc",e));if(!we(t))throw new TypeError(ve("1Sj3N,G4",t));!function(e,r,t){if(!u(e))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",e));if(!u(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(!we(t.value))throw new TypeError(U("invalid argument. The `value` property of the property descriptor must be a function. Value: `%s`.",t.value));function n(n){t.value=n,J(e,r,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},J(e,r,{configurable:!0,enumerable:t.enumerable,get:function(){var r=t.value.call(e);return n(r),r},set:t.writable?n:void 0})}(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}export{me as default};
//# sourceMappingURL=mod.js.map

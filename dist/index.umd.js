!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Hello={})}(this,function(e){"use strict";var i=function(e,t,n){var r=-1,o=e.length;t<0&&(t=o<-t?0:o+t),(n=o<n?o:n)<0&&(n+=o),o=n<t?0:n-t>>>0,t>>>=0;for(var u=Array(o);++r<o;)u[r]=e[r+t];return u};var o=function(e,t){return e===t||e!=e&&t!=t},t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="object"==typeof t&&t&&t.Object===Object&&t,r="object"==typeof self&&self&&self.Object===Object&&self,u=(n||r||Function("return this")()).Symbol,f=Object.prototype,l=f.hasOwnProperty,a=f.toString,c=u?u.toStringTag:void 0;var v=function(e){var t=l.call(e,c),n=e[c];try{var r=!(e[c]=void 0)}catch(e){}var o=a.call(e);return r&&(t?e[c]=n:delete e[c]),o},b=Object.prototype.toString;var s=function(e){return b.call(e)},d=u?u.toStringTag:void 0;var y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(d&&d in Object(e)?v:s)(e)};var p=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var g=function(e){if(!p(e))return!1;var t=y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var j=function(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991};var h=function(e){return null!=e&&j(e.length)&&!g(e)},m=/^(?:0|[1-9]\d*)$/;var O=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&m.test(e))&&-1<e&&e%1==0&&e<t};var x=function(e,t,n){if(!p(n))return!1;var r=typeof t;return!!("number"==r?h(n)&&O(t,n.length):"string"==r&&t in n)&&o(n[t],e)};var S=function(e){return null!=e&&"object"==typeof e};var T=function(e){return"symbol"==typeof e||S(e)&&"[object Symbol]"==y(e)},w=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,F=/^0o[0-7]+$/i,A=parseInt;var M=function(e){if("number"==typeof e)return e;if(T(e))return NaN;var t;if(p(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=p(t)?t+"":t),"string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var n=$.test(e);return n||F.test(e)?A(e.slice(2),n?2:8):N.test(e)?NaN:+e};var P=function(e){return e?(e=M(e))!==1/0&&e!==-1/0?e==e?e:0:17976931348623157e292*(e<0?-1:1):0===e?e:0};var H=function(e){var t=P(e),n=t%1;return t==t?n?t-n:t:0},W=Math.ceil,_=Math.max;var G=function(e,t,n){t=(n?x(e,t,n):void 0===t)?1:_(H(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var o=0,u=0,f=Array(W(r/t));o<r;)f[u++]=i(e,o,o+=t);return f};e.helloWorld=function(){console.log("Hello World!");var e=G(["a","b","c","d"],2);console.log(e)},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map

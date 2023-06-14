/*! For license information please see 8357.9761cd063b3125b3ac7b.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[8357,5797,2968,8391,8471,7347,1157,704,6681],{52643:(t,e,r)=>{"use strict";r.d(e,{b:()=>c});var n=r(70655),o=r(92950),i=r(38296),a=r(66042);const c=t=>{var{children:e=null,className:r="",component:c="div"}=t,u=(0,n.__rest)(t,["children","className","component"]);const s=c;return o.createElement(s,Object.assign({className:(0,i.i)(a.Z.bullseye,r)},u),e)};c.displayName="Bullseye"},66042:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n}),r(87234);const n={bullseye:"pf-l-bullseye"}},17558:(t,e,r)=>{"use strict";r.d(e,{Dv:()=>o,Kf:()=>i,wt:()=>a});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(n,"ADD_NOTIFICATION"),i="".concat(n,"REMOVE_NOTIFICATION"),a="".concat(n,"CLEAR_NOTIFICATIONS")},21458:(t,e,r)=>{"use strict";r.d(e,{FV:()=>a,L1:()=>c,wN:()=>i});var n=r(17558),o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)},i=function(t){return{type:n.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},t)}},a=function(t){return{type:n.Kf,payload:t}},c=function(){return{type:n.wt}}},83215:(t,e,r)=>{"use strict";r.d(e,{wN:()=>o.wN,ee:()=>c});var n=r(17558),o=r(21458),i=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},a=[];const c=function(t,e){switch(void 0===t&&(t=a),e.type){case n.Dv:return function(t,e){var r=e.payload;return i(i([],t,!0),[r],!1)}(t,e);case n.Kf:return function(t,e){var r=e.payload,n=t.findIndex((function(t){return t.id===r}));return i(i([],t.slice(0,n),!0),t.slice(n+1),!0)}(t,e);case n.wt:return[];default:return t}}},9192:(t,e,r)=>{"use strict";r.d(e,{_:()=>n});var n={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailUpdate:"/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources"}},34865:(t,e,r)=>{var n=r(89465),o=r(77813),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var a=t[e];i.call(t,e)&&o(a,r)&&(void 0!==r||e in t)||n(t,e,r)}},3118:(t,e,r)=>{var n=r(13218),o=Object.create,i=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=i},10313:(t,e,r)=>{var n=r(13218),o=r(25726),i=r(33498),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=o(t),r=[];for(var c in t)("constructor"!=c||!e&&a.call(t,c))&&r.push(c);return r}},74318:(t,e,r)=>{var n=r(11149);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},64626:(t,e,r)=>{t=r.nmd(t);var n=r(55639),o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.Buffer:void 0,c=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=c?c(r):new t.constructor(r);return t.copy(n),n}},77133:(t,e,r)=>{var n=r(74318);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},98363:(t,e,r)=>{var n=r(34865),o=r(89465);t.exports=function(t,e,r,i){var a=!r;r||(r={});for(var c=-1,u=e.length;++c<u;){var s=e[c],l=i?i(r[s],t[s],s,r,t):void 0;void 0===l&&(l=t[s]),a?o(r,s,l):n(r,s,l)}return r}},85924:(t,e,r)=>{var n=r(5569)(Object.getPrototypeOf,Object);t.exports=n},38517:(t,e,r)=>{var n=r(3118),o=r(85924),i=r(25726);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:n(o(t))}},33498:t=>{t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},81704:(t,e,r)=>{var n=r(14636),o=r(10313),i=r(98612);t.exports=function(t){return i(t)?n(t,!0):o(t)}},45467:()=>{},70347:()=>{},11452:()=>{},34946:()=>{},25238:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},11177:()=>{},17061:(t,e,r)=>{var n=r(18698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new j(n||[]);return a(i,"_invoke",{value:L(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var v={};function d(){}function y(){}function g(){}var m={};f(m,u,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==r&&i.call(x,u)&&(m=x);var b=g.prototype=d.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:T}}function T(){return{value:void 0,done:!0}}return y.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},O(I.prototype),f(I.prototype,s,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new I(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(b),f(b,l,"Generator"),f(b,u,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},18698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},64687:(t,e,r)=>{var n=r(17061)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},15861:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:()=>o})}}]);
//# sourceMappingURL=../sourcemaps/8357.ea4cd49cbcd584de72adcb39fac64dbe.js.map
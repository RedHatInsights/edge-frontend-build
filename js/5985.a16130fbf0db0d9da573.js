(self.webpackChunkedge=self.webpackChunkedge||[]).push([[5985],{43655:(r,e,t)=>{"use strict";t.d(e,{D8:()=>s});var n=t(58156),o=t.n(n),i=t(61448),u=t.n(i),c=t(14190),a=t(23780),f=function(){return f=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},f.apply(this,arguments)},l=function(r,e,t){if("string"==typeof r)return{title:"Error",description:r};var n=e;Array.isArray(e)&&(n=e.find((function(e){return u()(r,e)})));var i=t;return Array.isArray(t)&&(i=t.find((function(e){return u()(r,e)}))),{title:o()(r,n)||"Error",description:o()(r,i),sentryId:null==r?void 0:r.sentryId,requestId:null==r?void 0:r.requestId}};const s=function(r){var e=f(f({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),r),t=function(r){return Boolean(r.match(new RegExp("^.*".concat(e.rejectedSuffix,"$"))))},n={dismissable:!e.autoDismiss,dismissDelay:e.dismissDelay};return function(r){var i=r.dispatch;return function(r){return function(s){var p=s.meta,d=s.type;if(p&&p.notifications){var y=p.notifications;(function(r){return Boolean(r.match(new RegExp("^.*".concat(e.pendingSuffix,"$"))))})(d)&&y.pending?("function"==typeof y.pending&&(y.pending=y.pending(s.payload)),i((0,c.z8)(f(f({},n),y.pending)))):function(r){return Boolean(r.match(new RegExp("^.*".concat(e.fulfilledSuffix,"$"))))}(d)&&y.fulfilled?("function"==typeof y.fulfilled&&(y.fulfilled=y.fulfilled(s.payload)),i((0,c.z8)(f(f({},n),y.fulfilled)))):t(d)&&y.rejected&&("function"==typeof y.rejected&&(y.rejected=y.rejected(s.payload)),i((0,c.z8)(f(f(f({},n),y.rejected),{sentryId:s.payload&&s.payload.sentryId,requestId:s.payload&&s.payload.requestId}))))}if(function(r){return r.isRejected&&!r.hasCustomNotification&&!r.noErrorOverride&&r.dispatchDefaultFailure}({isRejected:t(d),hasCustomNotification:p&&p.notifications&&p.notifications.rejected,noErrorOverride:p&&p.noError,dispatchDefaultFailure:e.dispatchDefaultFailure}))if(e.useStatusText)i((0,c.z8)(f({variant:a.AlertVariant.danger,dismissable:!0},l(s.payload,e.errorTitleKey,"statusText"))));else{var v=Array.isArray(e.errorNamespaceKey)&&e.errorNamespaceKey.find((function(r){return u()(s.payload,r)}));v?o()(s.payload,v).map((function(r){i((0,c.z8)(f({variant:a.AlertVariant.danger,dismissable:!0},l(r,e.errorTitleKey,e.errorDescriptionKey))))})):Array.isArray(s.payload)?s.payload.map((function(r){i((0,c.z8)(f({variant:a.AlertVariant.danger,dismissable:!0},l(r,e.errorTitleKey,e.errorDescriptionKey))))})):i((0,c.z8)(f({variant:a.AlertVariant.danger,dismissable:!0},l(s.payload,e.errorTitleKey,e.errorDescriptionKey))))}r(s)}}}}},62794:(r,e,t)=>{"use strict";t.d(e,{MJ:()=>h,Lr:()=>v});var n=t(64467);function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,n.A)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var c="function"==typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function l(r,e,t){var n;if("function"==typeof e&&"function"==typeof t||"function"==typeof t&&"function"==typeof arguments[3])throw new Error(u(0));if("function"==typeof e&&void 0===t&&(t=e,e=void 0),void 0!==t){if("function"!=typeof t)throw new Error(u(1));return t(l)(r,e)}if("function"!=typeof r)throw new Error(u(2));var o=r,i=e,a=[],s=a,p=!1;function d(){s===a&&(s=a.slice())}function y(){if(p)throw new Error(u(3));return i}function v(r){if("function"!=typeof r)throw new Error(u(4));if(p)throw new Error(u(5));var e=!0;return d(),s.push(r),function(){if(e){if(p)throw new Error(u(6));e=!1,d();var t=s.indexOf(r);s.splice(t,1),a=null}}}function h(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var e=r;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}(r))throw new Error(u(7));if(void 0===r.type)throw new Error(u(8));if(p)throw new Error(u(9));try{p=!0,i=o(i,r)}finally{p=!1}for(var e=a=s,t=0;t<e.length;t++)(0,e[t])();return r}return h({type:f.INIT}),(n={dispatch:h,subscribe:v,getState:y,replaceReducer:function(r){if("function"!=typeof r)throw new Error(u(10));o=r,h({type:f.REPLACE})}})[c]=function(){var r,e=v;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(u(11));function t(){r.next&&r.next(y())}return t(),{unsubscribe:e(t)}}})[c]=function(){return this},r},n}function s(r){for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var o=e[n];"function"==typeof r[o]&&(t[o]=r[o])}var i,c=Object.keys(t);try{!function(r){Object.keys(r).forEach((function(e){var t=r[e];if(void 0===t(void 0,{type:f.INIT}))throw new Error(u(12));if(void 0===t(void 0,{type:f.PROBE_UNKNOWN_ACTION()}))throw new Error(u(13))}))}(t)}catch(r){i=r}return function(r,e){if(void 0===r&&(r={}),i)throw i;for(var n=!1,o={},a=0;a<c.length;a++){var f=c[a],l=t[f],s=r[f],p=l(s,e);if(void 0===p)throw e&&e.type,new Error(u(14));o[f]=p,n=n||p!==s}return(n=n||c.length!==Object.keys(r).length)?o:r}}function p(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return 0===e.length?function(r){return r}:1===e.length?e[0]:e.reduce((function(r,e){return function(){return r(e.apply(void 0,arguments))}}))}function d(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return function(){var t=r.apply(void 0,arguments),n=function(){throw new Error(u(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},c=e.map((function(r){return r(o)}));return n=p.apply(void 0,c)(t.dispatch),i(i({},t),{},{dispatch:n})}}}var y=function(){return y=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},y.apply(this,arguments)};function v(r,e){return void 0===e&&(e={}),function(t,n){return void 0===t&&(t=e),Object.prototype.hasOwnProperty.call(r,n.type)?r[n.type](t,n):t}}var h=function(){function r(r,e,t){void 0===r&&(r={}),void 0===e&&(e=[]),void 0===t&&(t=p);var n="undefined"!=typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||t;this.store=l((function(e){return void 0===e&&(e=r),e}),r,n(d.apply(void 0,e))),this.reducers={}}return r.prototype.getStore=function(){return this.store},r.prototype.register=function(r){var e=this;return this.reducers=y(y({},this.reducers),r),this.store.replaceReducer(s(y({},this.reducers))),function(){e.reducers=Object.entries(e.reducers).filter((function(e){var t=e[0];return!Object.keys(r).includes(t)})).reduce((function(r,e){var t,n=e[0],o=e[1];return y(y({},r),((t={})[n]=o,t))}),{}),e.store.replaceReducer(s(y({},e.reducers)))}},r}();new h},20426:r=>{var e=Object.prototype.hasOwnProperty;r.exports=function(r,t){return null!=r&&e.call(r,t)}},61448:(r,e,t)=>{var n=t(20426),o=t(49326);r.exports=function(r,e){return null!=r&&o(r,e,n)}},64784:(r,e,t)=>{"use strict";function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(r)}function o(r){return null!==r&&"object"===n(r)&&r&&"function"==typeof r.then}t.d(e,{Ay:()=>l});var i=t(65606);function u(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var r=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).dispatch;return"function"==typeof r?function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[f.Pending,f.Fulfilled,f.Rejected],t=r.promiseTypeSuffixes||e,n=void 0===r.promiseTypeDelimiter?"_":r.promiseTypeDelimiter;return function(r){var e=r.dispatch;return function(r){return function(i){var u,a;if(!i.payload)return r(i);var f=i.payload;if(o(f))u=f;else if(o(f.promise))u=f.promise,a=f.data;else{if("function"!=typeof f&&"function"!=typeof f.promise)return r(i);if(u=f.promise?f.promise():f(),a=f.promise?f.data:void 0,!o(u))return r(c({},i,{payload:u}))}var l,s,p=i.type,d=i.meta,y=(s=3,function(r){if(Array.isArray(r))return r}(l=t)||function(r,e){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var t=[],n=!0,o=!1,i=void 0;try{for(var u,c=r[Symbol.iterator]();!(n=(u=c.next()).done)&&(t.push(u.value),!e||t.length!==e);n=!0);}catch(r){o=!0,i=r}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return t}}(l,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),v=y[0],h=y[1],b=y[2],O=function(r,e){return c({type:[p,e?b:h].join(n)},null==r?{}:{payload:r},{},void 0!==d?{meta:d}:{},{},e?{error:!0}:{})};return r(c({type:[p,v].join(n)},void 0!==a?{payload:a}:{},{},void 0!==d?{meta:d}:{})),u.then((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=O(r,!1);return e(t),{value:r,action:t}}),(function(r){var t=O(r,!0);throw e(t),r}))}}}}()({dispatch:r}):(i&&i.env,null)}}}]);
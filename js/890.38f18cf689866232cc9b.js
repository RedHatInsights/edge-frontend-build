(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[890],{14890:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__DO_NOT_USE__ActionTypes:()=>i,applyMiddleware:()=>b,bindActionCreators:()=>d,combineReducers:()=>s,compose:()=>y,createStore:()=>a});var n=r(67121),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,r){var o;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,f=[],d=f,l=!1;function p(){d===f&&(d=f.slice())}function h(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var r=d.indexOf(e);d.splice(r,1),f=null}}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=c(s,e)}finally{l=!1}for(var t=f=d,r=0;r<t.length;r++)(0,t[r])();return e}function w(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}function v(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(h())}return r(),{unsubscribe:t(r)}}})[n.Z]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:y,getState:h,replaceReducer:w})[n.Z]=v,o}function c(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var u,a=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){u=e}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var n=!1,o={},i=0;i<a.length;i++){var s=a[i],f=r[s],d=e[s],l=f(d,t);if(void 0===l){var p=c(s,t);throw new Error(p)}o[s]=l,n=n||l!==d}return(n=n||a.length!==Object.keys(e).length)?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"==typeof e)return f(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=f(o,t))}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return h({},r,{dispatch:n=y.apply(void 0,i)(r.dispatch)})}}}},67121:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n}),e=r.hmd(e);const n=(o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r.g?r.g:e,"function"==typeof(u=o.Symbol)?u.observable?i=u.observable:(i=u("observable"),u.observable=i):i="@@observable",i);var o,i,u}}]);
//# sourceMappingURL=../sourcemaps/890.50e6643fdb8830842bd4.js.map
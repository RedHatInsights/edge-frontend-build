(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1324,8471],{56591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(92950).createContext)({})},32650:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(93433),a=r(4942),i=r(41609),o=r.n(i),s=r(27361),u=r.n(s);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){return"number"!=typeof e&&!0!==e&&o()(e)},p=function(e,t){if(t.isNotEmpty)return!f(e);if(t.isEmpty)return f(e);if(t.pattern){var r=RegExp(t.pattern,t.flags);return t.notMatch?!r.test(e):r.test(e)}if("function"==typeof t.is)return t.is(e,t);if(Object.prototype.hasOwnProperty.call(t,"greaterThan"))return e>t.greaterThan;if(Object.prototype.hasOwnProperty.call(t,"greaterThanOrEqualTo"))return e>=t.greaterThanOrEqualTo;if(Object.prototype.hasOwnProperty.call(t,"lessThan"))return e<t.lessThan;if(Object.prototype.hasOwnProperty.call(t,"lessThanOrEqualTo"))return e<=t.lessThanOrEqualTo;var n=Array.isArray(t.is)?!!t.is.includes(e):e===t.is;return t.notMatch?!n:n};const g=function e(t,r,a){var i=l(l({visible:!0},t.then),{},{result:!0}),o=l(l({visible:!1},t.else),{},{result:!1});if(Array.isArray(t))return t.map((function(t){return e(t,r,a)})).some((function(e){return!1===e.result}))?o:i;if(t.and)return t.and.map((function(t){return e(t,r,a)})).some((function(e){return!1===e.result}))?o:i;if(t.sequence)return t.sequence.reduce((function(t,a){var i=e(a,r);return{sets:[].concat((0,n.Z)(t.sets),(0,n.Z)(i.set?[i.set]:[])),visible:t.visible||i.visible,result:t.result||i.result}}),l(l({},o),{},{sets:[]}));if(t.or)return t.or.map((function(t){return e(t,r,a)})).some((function(e){return!0===e.result}))?i:o;if(t.not)return e(t.not,r).result?o:i;var s="function"==typeof t.when?t.when(a):t.when;return"string"==typeof s?p(u()(r,s),t)?i:o:Array.isArray(s)&&s.map((function(e){return p(u()(r,"function"==typeof e?e(a):e),t)})).find((function(e){return!!e}))?i:o}},21458:(e,t,r)=>{"use strict";r.d(t,{FV:()=>o,L1:()=>s,wN:()=>i});var n=r(17558),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=function(e){return{type:n.Dv,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},o=function(e){return{type:n.Kf,payload:e}},s=function(){return{type:n.wt}}},9192:(e,t,r)=>{"use strict";r.d(t,{_:()=>n});var n={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailUpdate:"/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources"}},27361:(e,t,r)=>{var n=r(97786);e.exports=function(e,t,r){var a=null==e?void 0:n(e,t);return void 0===a?r:a}},41609:(e,t,r)=>{var n=r(280),a=r(64160),i=r(35694),o=r(1469),s=r(98612),u=r(44144),c=r(25726),l=r(36719),f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||l(e)||i(e)))return!e.length;var t=a(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(c(e))return!n(e).length;for(var r in e)if(f.call(e,r))return!1;return!0}},45467:()=>{},70347:()=>{},11452:()=>{},34946:()=>{},25238:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},11177:()=>{},64687:(e,t,r)=>{var n=r(17061)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=../sourcemaps/1324.5d0cc9560b116c27e01346954c5386d4.js.map
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[557],{1557:(t,e,r)=>{(()=>{var e={60:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>c,useAsyncStorage:()=>a});const n=r(942).bind({concatArrays:!0,ignoreUndefined:!0}),o=(t,e)=>new Promise(((r,n)=>{try{const n=t();e&&e(null,n),r(n)}catch(t){e&&e(t),n(t)}})),i=(t,e,r)=>Promise.all(t).then((t=>{const n=r?r(t):null;return e&&e(null,n),Promise.resolve(n)}),(t=>(e&&e(t),Promise.reject(t))));class s{static getItem(t,e){return o((()=>window.localStorage.getItem(t)),e)}static setItem(t,e,r){return o((()=>{window.localStorage.setItem(t,e)}),r)}static removeItem(t,e){return o((()=>window.localStorage.removeItem(t)),e)}static mergeItem(t,e,r){return o((()=>{((t,e)=>{const r=window.localStorage.getItem(t),o=JSON.parse(r),i=JSON.parse(e),s=JSON.stringify(n(o,i));window.localStorage.setItem(t,s)})(t,e)}),r)}static clear(t){return o((()=>{window.localStorage.clear()}),t)}static getAllKeys(t){return o((()=>{const t=window.localStorage.length,e=[];for(let r=0;r<t;r+=1){const t=window.localStorage.key(r);e.push(t)}return e}),t)}static flushGetRequests(){}static multiGet(t,e){const r=t.map((t=>s.getItem(t)));return i(r,e,(e=>e.map(((e,r)=>[t[r],e]))))}static multiSet(t,e){const r=t.map((t=>s.setItem(t[0],t[1])));return i(r,e)}static multiRemove(t,e){const r=t.map((t=>s.removeItem(t)));return i(r,e)}static multiMerge(t,e){const r=t.map((t=>s.mergeItem(t[0],t[1])));return i(r,e)}}function a(t){return{getItem:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return s.getItem(t,...r)},setItem:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return s.setItem(t,...r)},mergeItem:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return s.mergeItem(t,...r)},removeItem:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return s.removeItem(t,...r)}}}const c=s},310:t=>{"use strict";t.exports=t=>{if("[object Object]"!==Object.prototype.toString.call(t))return!1;const e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}},942:function(t,e,r){"use strict";const n=r(310),{hasOwnProperty:o}=Object.prototype,{propertyIsEnumerable:i}=Object,s=(t,e,r)=>Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!0,configurable:!0}),a=this,c={concatArrays:!1,ignoreUndefined:!1},u=t=>{const e=[];for(const r in t)o.call(t,r)&&e.push(r);if(Object.getOwnPropertySymbols){const r=Object.getOwnPropertySymbols(t);for(const n of r)i.call(t,n)&&e.push(n)}return e};function l(t){return Array.isArray(t)?function(t){const e=t.slice(0,0);return u(t).forEach((r=>{s(e,r,l(t[r]))})),e}(t):n(t)?function(t){const e=null===Object.getPrototypeOf(t)?Object.create(null):{};return u(t).forEach((r=>{s(e,r,l(t[r]))})),e}(t):t}const f=(t,e,r,n)=>(r.forEach((r=>{void 0===e[r]&&n.ignoreUndefined||(r in t&&t[r]!==Object.getPrototypeOf(t)?s(t,r,h(t[r],e[r],n)):s(t,r,l(e[r])))})),t);function h(t,e,r){return r.concatArrays&&Array.isArray(t)&&Array.isArray(e)?((t,e,r)=>{let n=t.slice(0,0),i=0;return[t,e].forEach((e=>{const a=[];for(let r=0;r<e.length;r++)o.call(e,r)&&(a.push(String(r)),s(n,i++,e===t?e[r]:l(e[r])));n=f(n,e,u(e).filter((t=>!a.includes(t))),r)})),n})(t,e,r):n(e)&&n(t)?f(t,e,u(e),r):l(e)}t.exports=function(...t){const e=h(l(c),this!==a&&this||{},c);let r={_:{}};for(const o of t)if(void 0!==o){if(!n(o))throw new TypeError("`"+o+"` is not an Option Object");r=h(r,{_:o},e)}return r._}},279:t=>{function e(){}e.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,s=n.length;i<s;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},t.exports=e,t.exports.TinyEmitter=e},9:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},s=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},c=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.InMemoryStorageProvider=e.LocalStorageProvider=e.UnleashClient=e.EVENTS=void 0;var u=r(279),l=r(524),f=r(432);e.LocalStorageProvider=f.default;var h=r(475);e.InMemoryStorageProvider=h.default;var p=["userId","sessionId","remoteAddress"];e.EVENTS={INIT:"initialized",ERROR:"error",READY:"ready",UPDATE:"update"};var d={name:"disabled"},y="repo",v=function(t){function r(r){var n=r.storageProvider,o=r.url,c=r.clientKey,u=r.disableRefresh,h=void 0!==u&&u,p=r.refreshInterval,d=void 0===p?30:p,y=r.metricsInterval,v=void 0===y?30:y,g=r.disableMetrics,b=void 0!==g&&g,m=r.appName,w=r.environment,x=void 0===w?"default":w,S=r.context,E=r.fetch,I=void 0===E?function(){try{if("fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}}():E,O=r.bootstrap,_=r.bootstrapOverride,P=void 0===_||_,k=r.headerName,T=void 0===k?"Authorization":k,j=t.call(this)||this;if(j.toggles=[],j.etag="",!o)throw new Error("url is required");if(!c)throw new Error("clientKey is required");if(!m)throw new Error("appName is required.");return j.toggles=O&&O.length>0?O:[],j.url=new URL(""+o),j.clientKey=c,j.headerName=T,j.storage=n||new f.default,j.refreshInterval=h?0:1e3*d,j.context=i({appName:m,environment:x},S),j.ready=new Promise((function(t){return s(j,void 0,void 0,(function(){var r;return a(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.init()];case 1:return n.sent(),[3,3];case 2:return r=n.sent(),console.error(r),this.emit(e.EVENTS.ERROR,r),[3,3];case 3:return t(),[2]}}))}))})),I||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),j.fetch=I,j.bootstrap=O&&O.length>0?O:void 0,j.bootstrapOverride=P,j.metrics=new l.default({appName:m,metricsInterval:v,disableMetrics:b,url:o,clientKey:c,fetch:I,headerName:T}),j}return o(r,t),r.prototype.getAllToggles=function(){return c([],this.toggles,!0)},r.prototype.isEnabled=function(t){var e=this.toggles.find((function(e){return e.name===t})),r=!!e&&e.enabled;return this.metrics.count(t,r),r},r.prototype.getVariant=function(t){var e=this.toggles.find((function(e){return e.name===t}));return e?(this.metrics.count(t,!0),e.variant):(this.metrics.count(t,!1),d)},r.prototype.updateContext=function(t){return s(this,void 0,void 0,(function(){var e;return a(this,(function(r){switch(r.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),e={environment:this.context.environment,appName:this.context.appName},this.context=i(i({},e),t),this.timerRef?[4,this.fetchToggles()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},r.prototype.getContext=function(){return i({},this.context)},r.prototype.setContextField=function(t,e){var r,n;if(p.includes(t))this.context=i(i({},this.context),((r={})[t]=e,r));else{var o=i(i({},this.context.properties),((n={})[t]=e,n));this.context=i(i({},this.context),{properties:o})}this.timerRef&&this.fetchToggles()},r.prototype.init=function(){return s(this,void 0,void 0,(function(){var t,r;return a(this,(function(n){switch(n.label){case 0:return[4,this.resolveSessionId()];case 1:return t=n.sent(),this.context=i({sessionId:t},this.context),r=this,[4,this.storage.get(y)];case 2:return r.toggles=n.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(y,this.bootstrap)];case 3:n.sent(),this.toggles=this.bootstrap,this.emit(e.EVENTS.READY),n.label=4;case 4:return this.emit(e.EVENTS.INIT),[2]}}))}))},r.prototype.start=function(){return s(this,void 0,void 0,(function(){var t,r=this;return a(this,(function(n){switch(n.label){case 0:return this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return n.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return n.sent(),this.bootstrap||this.emit(e.EVENTS.READY),t>0&&(this.timerRef=setInterval((function(){return r.fetchToggles()}),t)),[2]}}))}))},r.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},r.prototype.resolveSessionId=function(){return s(this,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[3,1];case 1:return[4,this.storage.get("sessionId")];case 2:return(t=e.sent())?[3,4]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 3:e.sent(),e.label=4;case 4:return[2,t]}}))}))},r.prototype.storeToggles=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(r){switch(r.label){case 0:return this.toggles=t,this.emit(e.EVENTS.UPDATE),[4,this.storage.save(y,t)];case 1:return r.sent(),[2]}}))}))},r.prototype.fetchToggles=function(){return s(this,void 0,void 0,(function(){var t,r,n,o,i,s;return a(this,(function(a){switch(a.label){case 0:if(!this.fetch)return[3,7];a.label=1;case 1:return a.trys.push([1,6,,7]),t=this.context,r=new URL(this.url.toString()),Object.entries(t).forEach((function(t){var e=t[0],n=t[1];"properties"===e&&n?Object.entries(n).forEach((function(t){var e=t[0],n=t[1];return r.searchParams.append("properties["+e+"]",n)})):r.searchParams.append(e,n)})),[4,this.fetch(r.toString(),{cache:"no-cache",headers:(s={},s[this.headerName]=this.clientKey,s.Accept="application/json",s["Content-Type"]="application/json",s["If-None-Match"]=this.etag,s)})];case 2:return(n=a.sent()).ok&&304!==n.status?(this.etag=n.headers.get("ETag")||"",[4,n.json()]):[3,5];case 3:return o=a.sent(),[4,this.storeToggles(o.toggles)];case 4:a.sent(),a.label=5;case 5:return[3,7];case 6:return i=a.sent(),console.error("Unleash: unable to fetch feature toggles",i),this.emit(e.EVENTS.ERROR,i),[3,7];case 7:return[2]}}))}))},r}(u.TinyEmitter);e.UnleashClient=v},524:function(t,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=t.appName,r=t.metricsInterval,n=t.disableMetrics,o=void 0!==n&&n,i=t.url,s=t.clientKey,a=t.fetch,c=t.headerName;this.disabled=o,this.metricsInterval=1e3*r,this.appName=e,this.url=i,this.clientKey=s,this.bucket=this.createEmptyBucket(),this.fetch=a,this.headerName=c}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&setTimeout((function(){t.startTimer(),t.sendMetrics()}),2e3)},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.sendMetrics=function(){return n(this,void 0,void 0,(function(){var t,e,r;return o(this,(function(n){switch(n.label){case 0:return t=this.url+"/client/metrics",e=this.getPayload(),this.bucketIsEmpty(e)?[2]:[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:(r={},r[this.headerName]=this.clientKey,r.Accept="application/json",r["Content-Type"]="application/json",r),body:JSON.stringify(e)})];case 1:return n.sent(),[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,0))},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=r(r({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}();e.default=i},475:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){return n(this,(function(r){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,this.store.get(t)]}))}))},t}();e.default=o},432:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function s(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(60),s=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return n(this,void 0,void 0,(function(){var r,n,s;return o(this,(function(o){switch(o.label){case 0:r=JSON.stringify(e),n=this.prefix+":"+t,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,i.default.setItem(n,r)];case 2:return o.sent(),[3,4];case 3:return s=o.sent(),console.error(s),[3,4];case 4:return[2]}}))}))},t.prototype.get=function(t){return n(this,void 0,void 0,(function(){var e,r,n;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),e=this.prefix+":"+t,[4,i.default.getItem(e)];case 1:return[2,(r=o.sent())?JSON.parse(r):void 0];case 2:return n=o.sent(),console.error(n),[3,3];case 3:return[2]}}))}))},t}();e.default=s}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{"use strict";o.r(i),o.d(i,{FlagProvider:()=>a,InMemoryStorageProvider:()=>t.InMemoryStorageProvider,LocalStorageProvider:()=>t.LocalStorageProvider,UnleashClient:()=>t.UnleashClient,default:()=>h,useFlag:()=>c,useFlagsStatus:()=>u,useUnleashContext:()=>f,useVariant:()=>l});var t=o(9);const e=r(75418),n=o.n(e)().createContext(null);var s=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};const a=function(r){var o=r.config,i=r.children,a=r.unleashClient,c=e.useRef(a),u=e.useState(!1),l=u[0],f=u[1],h=e.useState(null),p=h[0],d=h[1];o||a||console.warn("You must provide either a config or an unleash client to the flag provider. If you are initializing the client in useEffect, you can avoid this warning by\n      checking if the client exists before rendering."),c.current||(c.current=new t.UnleashClient(o)),c.current.on("ready",(function(){f(!0)})),c.current.on("error",(function(t){d(t)})),e.useEffect((function(){c.current.start()}),[]);var y=function(t){return r=function(){return function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(e){switch(e.label){case 0:return[4,c.current.updateContext(t)];case 1:return e.sent(),[2]}}))},new((e=void 0)||(e=Promise))((function(t,n){function o(t){try{s(r.next(t))}catch(t){n(t)}}function i(t){try{s(r.throw(t))}catch(t){n(t)}}function s(r){var n;r.done?t(r.value):(n=r.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,i)}s((r=r.apply(void 0,[])).next())}));var e,r},v=function(t){return c.current.isEnabled(t)},g=function(t){return c.current.getVariant(t)},b=function(t){for(var e,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return(e=c.current).on.apply(e,s([t],r,!1))},m=e.useMemo((function(){return{on:b,updateContext:y,isEnabled:v,getVariant:g,client:c.current,flagsReady:l,flagsError:p,setFlagsReady:f,setFlagsError:d}}),[l,p]);return e.createElement(n.Provider,{value:m},i)},c=function(t){var r=(0,e.useContext)(n),o=r.isEnabled,i=r.client,s=(0,e.useState)(!!o(t)),a=s[0],c=s[1],u=(0,e.useRef)();return u.current=a,(0,e.useEffect)((function(){i&&(i.on("update",(function(){var e=o(t);e!==u.current&&(u.current=e,c(!!e))})),i.on("ready",(function(){var e=o(t);c(e)})))}),[i]),a},u=function(){var t=(0,e.useContext)(n);return{flagsReady:t.flagsReady,flagsError:t.flagsError}},l=function(t){var r=(0,e.useContext)(n),o=r.getVariant,i=r.client,s=(0,e.useState)(o(t)),a=s[0],c=s[1],u=(0,e.useRef)();return u.current=a,(0,e.useEffect)((function(){i&&(i.on("update",(function(){var e=o(t);u.current.name===e.name&&u.current.enabled===e.enabled||(c(e),u.current=e)})),i.on("ready",(function(){var e=o(t);c(e)})))}),[i]),a||{}},f=function(){return(0,e.useContext)(n).updateContext},h=a})(),t.exports=i})()}}]);
/*! For license information please see 740.f36bea48ac988d10a0a8.js.LICENSE.txt */
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[740],{68551:(t,e,n)=>{var r=n(22858),o=n(46860),i=n(60379),a=n(80521);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},40688:function(t,e){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.processManifest=e.injectScript=e.getAppsByRootLocation=e.getAppData=e.getApp=e.initializeApp=e.unmountAll=e.unmountAppsFromRoute=e.removeActiveApp=e.setActiveApp=e.initialize=e.setPendingInjection=e.getScalprum=e.GLOBAL_NAMESPACE=void 0,e.GLOBAL_NAMESPACE="__scalprum__",e.getScalprum=function(){return window[e.GLOBAL_NAMESPACE]};var i=function(t){var e={};return Object.values(t).forEach((function(t){var n=t.rootLocation,r=t.name;n&&e[n]?e[n].push(r):n&&(e[n]=[r])})),e};e.setPendingInjection=function(t,n){window[e.GLOBAL_NAMESPACE].pendingInjections[t]=n},e.initialize=function(t){var r=t.scalpLets,o=t.api;window[e.GLOBAL_NAMESPACE]=n({apps:{},appsMetaData:r,activeApps:{},scalpletRoutes:i(r),pendingInjections:{}},o)},e.setActiveApp=function(t){window[e.GLOBAL_NAMESPACE].activeApps[t]=!0},e.removeActiveApp=function(t){window[e.GLOBAL_NAMESPACE].activeApps[t]=!1},e.unmountAppsFromRoute=function(t){var n;null===(n=window[e.GLOBAL_NAMESPACE].scalpletRoutes[t])||void 0===n||n.forEach((function(t){return window[e.GLOBAL_NAMESPACE].apps[t].unmount()}))},e.unmountAll=function(){Object.entries(window[e.GLOBAL_NAMESPACE].activeApps).filter((function(t){var n=t[0];t[1]&&window[e.GLOBAL_NAMESPACE].apps[n].unmount()}))},e.initializeApp=function(t){if(void 0===window[e.GLOBAL_NAMESPACE])throw"Cannot inititlize app. Scalprum was not inititliazed!";window[e.GLOBAL_NAMESPACE].apps[t.name]={mount:function(r){var o=n(n({},r),window[e.GLOBAL_NAMESPACE]);return e.setActiveApp(t.name),t.mount(o)},unmount:function(){e.removeActiveApp(t.name),t.unmount()},update:t.update,nodeId:t.id},window[e.GLOBAL_NAMESPACE].pendingInjections[t.name]()},e.getApp=function(t){return window[e.GLOBAL_NAMESPACE].apps[t]},e.getAppData=function(t){return window[e.GLOBAL_NAMESPACE].appsMetaData[t]},e.getAppsByRootLocation=function(t){return Object.keys(window[e.GLOBAL_NAMESPACE].appsMetaData).filter((function(n){return window[e.GLOBAL_NAMESPACE].appsMetaData[n].rootLocation===t})).map((function(t){return n(n({},window[e.GLOBAL_NAMESPACE].appsMetaData[t]),{name:t})}))},e.injectScript=function(t,n,r){void 0===r&&(r=!1);var o=void 0,i=new Promise((function(i,a){(o=document.createElement("script")).src=n,o.id=t,r?o.onload=function(){i([name,o])}:e.setPendingInjection(t,(function(){return i([name,o])})),o.onerror=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];console.log(n),r?a([n,o]):e.setPendingInjection(t,(function(){return a([n,o])}))}}));return void 0!==o&&document.body.appendChild(o),i},e.processManifest=function(t,n,i,a){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(t)];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),[2,Promise.all(Object.entries(r).filter((function(t){var e=t[0];return!i||e===i})).flatMap(a||function(t){return t[1].entry||t}).map((function(t){return e.injectScript(n,t,!0)})))]}}))}))}},35092:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.loadComponent=void 0;var a=i(n(1427)),u=function(){return a.default.createElement("span",null,"Error while loading component!")};e.loadComponent=function(t,e,i){var a=this;return void 0===i&&(i=u),function(){return r(a,void 0,void 0,(function(){var r,a,u;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,n.I("default")];case 1:return o.sent(),[4,window[t].init(n.S.default)];case 2:return o.sent(),[4,window[t].get(e)];case 3:return a=o.sent(),r=a(),[3,5];case 4:return u=o.sent(),console.error(u),r={default:i},[3,5];case 5:return[2,r]}}))}))}}},45370:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||o(e,t,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.useScalprum=void 0;var a=n(1427),u=n(40688);i(n(115),e),i(n(49518),e),i(n(44368),e),e.useScalprum=function(t,e){var n=a.useState({initialized:!1,config:{},api:e}),o=n[0],i=n[1];return a.useEffect((function(){"object"==typeof t&&(u.initialize({scalpLets:t,api:e}),i((function(e){return r(r({},e),{initialized:!0,config:t})}))),"function"==typeof t&&Promise.resolve(t()).then((function(t){i((function(e){return r(r({},e),{initialized:!0,config:t})})),u.initialize({scalpLets:t,api:e})}))}),[t]),o}},44368:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),u=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),c=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&a(e,t,n);return u(e,t),e},l=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},f=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumComponent=void 0;var s=c(n(1427)),p=n(40688),d=f(n(18446)),h=n(35092),v=function(){return s.default.createElement("span",null,"Error while loading component!")},y=function(t){var e=t.fallback,n=void 0===e?"loading":e,r=t.appName,o=t.api,a=t.scope,u=t.module,c=t.ErrorComponent,f=t.processor,d=t.innerRef,v=l(t,["fallback","appName","api","scope","module","ErrorComponent","processor","innerRef"]),y=p.getAppData(r),b=y.scriptLocation,m=y.manifestLocation,O=s.useState(void 0),_=O[0],g=O[1],A=s.useState(),w=A[0],E=A[1];return s.useEffect((function(){var t=p.getApp(r);return t?(null==t||t.mount(o),g((function(){return s.default.lazy(h.loadComponent(a,u,c))}))):b?p.injectScript(r,b).then((function(t){var e=t[1],n=p.getApp(r);null==n||n.mount(o),g((function(){return s.default.lazy(h.loadComponent(a,u,c))})),E((function(){return e}))})).catch((function(){g((function(){return c}))})):m&&p.processManifest(m,r,a,f).then((function(t){E((function(){return t.map((function(t){return t[1]}))}));var e=p.getApp(r);null==e||e.mount(o),g((function(){return s.default.lazy(h.loadComponent(a,u,c))}))})).catch((function(){g((function(){return c}))})),function(){var t=p.getApp(r);null==t||t.unmount(),w&&(Array.isArray(w)?w.forEach((function(t){return document.body.removeChild(t)})):document.body.removeChild(w))}}),[]),s.default.createElement(s.Suspense,{fallback:n},_?s.default.createElement(_,i({ref:d},v)):n)},b=function(t){function e(e){var n=t.call(this,e)||this;return n.state={hasError:!1},n}return o(e,t),e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.hasError!==e.hasError||!d.default(t,this.props)},e.prototype.render=function(){var t=this.props,e=t.ErrorComponent,n=void 0===e?s.default.createElement(v,null):e,r=l(t,["ErrorComponent"]);return this.state.hasError?n:s.default.createElement(y,i({},r,{ErrorComponent:function(){return s.default.createElement(s.Fragment,null,n)}}))},e.defaultProps={ErrorComponent:s.default.createElement(v,null)},e}(s.default.Component);e.ScalprumComponent=s.default.forwardRef((function(t,e){return s.default.createElement(b,i({},t,{innerRef:e}))}))},49518:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumLink=void 0;var a=i(n(1427)),u=(n(40688),n(16530));e.ScalprumLink=function(t){var e=t.to,n=t.onClick,i=t.shouldUnmount,c=(t.unmount,o(t,["to","onClick","shouldUnmount","unmount"])),l=u.useLocation().pathname;return a.default.createElement(u.Link,r({onClick:function(t){void 0===i?"string"==typeof e&&l!==e||"object"==typeof e&&e.pathname:"boolean"==typeof i||"function"==typeof i&&i(l,e),n&&n(t)},to:e},c))}},115:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},u=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0}),e.ScalprumRoute=void 0;var c=n(40688),l=a(n(1427)),f=n(88696),s=n(16530);e.ScalprumRoute=function(t){var e,n=t.Placeholder,o=void 0===n?l.Fragment:n,i=t.elementId,a=t.appName,p=t.path,d=t.api,h=u(t,["Placeholder","elementId","appName","path","api"]),v=(null===(e=c.getAppsByRootLocation(p))||void 0===e?void 0:e[0]).scriptLocation;return l.useEffect((function(){var t=c.getApp(a),e=document.getElementById(i);if(t){var n=t.mount(d);f.render(n,e)}else c.injectScript(a,v).then((function(){var t=c.getApp(a).mount(d);f.render(t,e)}));return function(){c.getApp(a).unmount(),f.unmountComponentAtNode(e)}}),[p]),l.default.createElement(s.Route,r({},h,{path:p}),l.default.createElement("div",{id:i},l.default.createElement(o,null)))}},63367:(t,e,n)=>{var r,o;void 0===(o="function"==typeof(r=function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?u(t):e}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var s=function(){function e(){t(this,e),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return r(e,[{key:"addEventListener",value:function(t,e,n){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push({callback:e,options:n})}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var n=this.listeners[t],r=0,o=n.length;r<o;r++)if(n[r].callback===e)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(t){if(t.type in this.listeners){for(var e=this.listeners[t.type].slice(),n=0,r=e.length;n<r;n++){var o=e[n];try{o.callback.call(this,t)}catch(t){Promise.resolve().then((function(){throw t}))}o.options&&o.options.once&&this.removeEventListener(t.type,o.callback)}return!t.defaultPrevented}}}]),e}(),p=function(e){o(a,e);var n=l(a);function a(){var e;return t(this,a),(e=n.call(this)).listeners||s.call(u(e)),Object.defineProperty(u(e),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(u(e),"onabort",{value:null,writable:!0,configurable:!0}),e}return r(a,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),f(i(a.prototype),"dispatchEvent",this).call(this,t)}}]),a}(s),d=function(){function e(){t(this,e),Object.defineProperty(this,"signal",{value:new p,writable:!0,configurable:!0})}return r(e,[{key:"abort",value:function(){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),e}();function h(t){return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof t.Request&&!t.Request.prototype.hasOwnProperty("signal")||!t.AbortController}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(d.prototype[Symbol.toStringTag]="AbortController",p.prototype[Symbol.toStringTag]="AbortSignal"),function(t){if(h(t))if(t.fetch){var e=function(t){"function"==typeof t&&(t={fetch:t});var e=t,n=e.fetch,r=e.Request,o=void 0===r?n.Request:r,i=e.AbortController,a=e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,u=void 0!==a&&a;if(!h({fetch:n,Request:o,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:u}))return{fetch:n,Request:c};var c=o;(c&&!c.prototype.hasOwnProperty("signal")||u)&&((c=function(t,e){var n;e&&e.signal&&(n=e.signal,delete e.signal);var r=new o(t,e);return n&&Object.defineProperty(r,"signal",{writable:!1,enumerable:!1,configurable:!0,value:n}),r}).prototype=o.prototype);var l=n;return{fetch:function(t,e){var n=c&&c.prototype.isPrototypeOf(t)?t.signal:e?e.signal:void 0;if(n){var r;try{r=new DOMException("Aborted","AbortError")}catch(t){(r=new Error("Aborted")).name="AbortError"}if(n.aborted)return Promise.reject(r);var o=new Promise((function(t,e){n.addEventListener("abort",(function(){return e(r)}),{once:!0})}));return e&&e.signal&&delete e.signal,Promise.race([o,l(t,e)])}return l(t,e)},Request:c}}(t),n=e.fetch,r=e.Request;t.fetch=n,t.Request=r,Object.defineProperty(t,"AbortController",{writable:!0,enumerable:!1,configurable:!0,value:d}),Object.defineProperty(t,"AbortSignal",{writable:!0,enumerable:!1,configurable:!0,value:p})}else console.warn("fetch() is not available, cannot install abortcontroller-polyfill")}("undefined"!=typeof self?self:n.g)})?r.call(e,n,e,t):r)||(t.exports=o)},94184:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&t.push(a)}else if("object"===i)for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},85564:(t,e,n)=>{var r=n(21078);t.exports=function(t){return null!=t&&t.length?r(t,1):[]}}}]);
//# sourceMappingURL=../sourcemaps/740.5b58eb8065852320f36a.js.map
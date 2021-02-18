/*! For license information please see 692.9f815591aeefd894ef4d.js.LICENSE.txt */
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[692],{40688:function(t,n){"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},r=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},o=this&&this.__generator||function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.processManifest=n.injectScript=n.getAppsByRootLocation=n.getAppData=n.getApp=n.initializeApp=n.unmountAll=n.unmountAppsFromRoute=n.removeActiveApp=n.setActiveApp=n.initialize=n.setPendingInjection=n.getScalprum=n.GLOBAL_NAMESPACE=void 0,n.GLOBAL_NAMESPACE="__scalprum__",n.getScalprum=function(){return window[n.GLOBAL_NAMESPACE]};var i=function(t){var n={};return Object.values(t).forEach((function(t){var e=t.rootLocation,r=t.name;e&&n[e]?n[e].push(r):e&&(n[e]=[r])})),n};n.setPendingInjection=function(t,e){window[n.GLOBAL_NAMESPACE].pendingInjections[t]=e},n.initialize=function(t){var r=t.scalpLets,o=t.api;window[n.GLOBAL_NAMESPACE]=e({apps:{},appsMetaData:r,activeApps:{},scalpletRoutes:i(r),pendingInjections:{}},o)},n.setActiveApp=function(t){window[n.GLOBAL_NAMESPACE].activeApps[t]=!0},n.removeActiveApp=function(t){window[n.GLOBAL_NAMESPACE].activeApps[t]=!1},n.unmountAppsFromRoute=function(t){var e;null===(e=window[n.GLOBAL_NAMESPACE].scalpletRoutes[t])||void 0===e||e.forEach((function(t){return window[n.GLOBAL_NAMESPACE].apps[t].unmount()}))},n.unmountAll=function(){Object.entries(window[n.GLOBAL_NAMESPACE].activeApps).filter((function(t){var e=t[0];t[1]&&window[n.GLOBAL_NAMESPACE].apps[e].unmount()}))},n.initializeApp=function(t){if(void 0===window[n.GLOBAL_NAMESPACE])throw"Cannot inititlize app. Scalprum was not inititliazed!";window[n.GLOBAL_NAMESPACE].apps[t.name]={mount:function(r){var o=e(e({},r),window[n.GLOBAL_NAMESPACE]);return n.setActiveApp(t.name),t.mount(o)},unmount:function(){n.removeActiveApp(t.name),t.unmount()},update:t.update,nodeId:t.id},window[n.GLOBAL_NAMESPACE].pendingInjections[t.name]()},n.getApp=function(t){return window[n.GLOBAL_NAMESPACE].apps[t]},n.getAppData=function(t){return window[n.GLOBAL_NAMESPACE].appsMetaData[t]},n.getAppsByRootLocation=function(t){return Object.keys(window[n.GLOBAL_NAMESPACE].appsMetaData).filter((function(e){return window[n.GLOBAL_NAMESPACE].appsMetaData[e].rootLocation===t})).map((function(t){return e(e({},window[n.GLOBAL_NAMESPACE].appsMetaData[t]),{name:t})}))},n.injectScript=function(t,e,r){void 0===r&&(r=!1);var o=void 0,i=new Promise((function(i,u){(o=document.createElement("script")).src=e,o.id=t,r?o.onload=function(){i([name,o])}:n.setPendingInjection(t,(function(){return i([name,o])})),o.onerror=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];console.log(e),r?u([e,o]):n.setPendingInjection(t,(function(){return u([e,o])}))}}));return void 0!==o&&document.body.appendChild(o),i},n.processManifest=function(t,e,i,u){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,fetch(t)];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),[2,Promise.all(Object.entries(r).filter((function(t){var n=t[0];return!i||n===i})).flatMap(u||function(t){return t[1].entry||t}).map((function(t){return n.injectScript(e,t,!0)})))]}}))}))}},35092:function(t,n,e){"use strict";var r=this&&this.__awaiter||function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))},o=this&&this.__generator||function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.loadComponent=void 0;var u=i(e(1427)),a=function(){return u.default.createElement("span",null,"Error while loading component!")};n.loadComponent=function(t,n,i){var u=this;return void 0===i&&(i=a),function(){return r(u,void 0,void 0,(function(){var r,u,a;return o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,4,,5]),[4,e.I("default")];case 1:return o.sent(),[4,window[t].init(e.S.default)];case 2:return o.sent(),[4,window[t].get(n)];case 3:return u=o.sent(),r=u(),[3,5];case 4:return a=o.sent(),console.error(a),r={default:i},[3,5];case 5:return[2,r]}}))}))}}},45370:function(t,n,e){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),i=this&&this.__exportStar||function(t,n){for(var e in t)"default"===e||Object.prototype.hasOwnProperty.call(n,e)||o(n,t,e)};Object.defineProperty(n,"__esModule",{value:!0}),n.useScalprum=void 0;var u=e(1427),a=e(40688);i(e(115),n),i(e(49518),n),i(e(44368),n),n.useScalprum=function(t,n){var e=u.useState({initialized:!1,config:{},api:n}),o=e[0],i=e[1];return u.useEffect((function(){"object"==typeof t&&(a.initialize({scalpLets:t,api:n}),i((function(n){return r(r({},n),{initialized:!0,config:t})}))),"function"==typeof t&&Promise.resolve(t()).then((function(t){i((function(n){return r(r({},n),{initialized:!0,config:t})})),a.initialize({scalpLets:t,api:n})}))}),[]),o}},44368:function(t,n,e){"use strict";var r,o=this&&this.__extends||(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},u=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),a=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),c=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&u(n,t,e);return a(n,t),n},l=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e};Object.defineProperty(n,"__esModule",{value:!0}),n.ScalprumComponent=void 0;var p=c(e(1427)),f=e(40688),s=e(35092),d=function(){return p.default.createElement(p.Fragment,null)},v=function(){return p.default.createElement("span",null,"Error while loading component!")},h=function(t){var n=t.fallback,e=void 0===n?"loading":n,r=t.appName,o=t.api,u=t.scope,a=t.module,c=t.ErrorComponent,v=t.processor,h=t.LoadingComponent,m=void 0===h?d:h,y=t.innerRef,b=l(t,["fallback","appName","api","scope","module","ErrorComponent","processor","LoadingComponent","innerRef"]),A=f.getAppData(r),_=A.scriptLocation,O=A.manifestLocation,w=p.useState((function(){return function(){return p.default.createElement(m,null)}})),g=w[0],E=w[1],j=p.useState(),P=j[0],L=j[1];return p.useEffect((function(){var t=f.getApp(r);return t?(null==t||t.mount(o),E((function(){return p.default.lazy(s.loadComponent(u,a,c))}))):_?f.injectScript(r,_).then((function(t){var n=t[1],e=f.getApp(r);null==e||e.mount(o),E((function(){return p.default.lazy(s.loadComponent(u,a,c))})),L((function(){return n}))})).catch((function(){E((function(){return c}))})):O&&f.processManifest(O,r,u,v).then((function(t){L((function(){return t.map((function(t){return t[1]}))}));var n=f.getApp(r);null==n||n.mount(o),E((function(){return p.default.lazy(s.loadComponent(u,a,c))}))})).catch((function(){E((function(){return c}))})),function(){var t=f.getApp(r);null==t||t.unmount(),P&&(Array.isArray(P)?P.forEach((function(t){return document.body.removeChild(t)})):document.body.removeChild(P))}}),[]),p.default.createElement(p.Suspense,{fallback:e},p.default.createElement(g,i({ref:y},b)))},m=function(t){function n(n){var e=t.call(this,n)||this;return e.state={hasError:!1},e}return o(n,t),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.render=function(){var t=this.props,n=t.ErrorComponent,e=void 0===n?p.default.createElement(v,null):n,r=l(t,["ErrorComponent"]);return this.state.hasError?e:p.default.createElement(h,i({},r,{ErrorComponent:function(){return p.default.createElement(p.Fragment,null,e)}}))},n.defaultProps={ErrorComponent:p.default.createElement(v,null)},n}(p.default.Component);n.ScalprumComponent=p.default.forwardRef((function(t,n){return p.default.createElement(m,i({},t,{innerRef:n}))}))},49518:function(t,n,e){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.ScalprumLink=void 0;var u=i(e(1427)),a=(e(40688),e(55399));n.ScalprumLink=function(t){var n=t.to,e=t.onClick,i=t.shouldUnmount,c=(t.unmount,o(t,["to","onClick","shouldUnmount","unmount"])),l=a.useLocation().pathname;return u.default.createElement(a.Link,r({onClick:function(t){void 0===i?"string"==typeof n&&l!==n||"object"==typeof n&&n.pathname:"boolean"==typeof i||"function"==typeof i&&i(l,n),e&&e(t)},to:n},c))}},115:function(t,n,e){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),i=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&o(n,t,e);return i(n,t),n},a=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e};Object.defineProperty(n,"__esModule",{value:!0}),n.ScalprumRoute=void 0;var c=e(40688),l=u(e(1427)),p=e(88696),f=e(55399);n.ScalprumRoute=function(t){var n,e=t.Placeholder,o=void 0===e?l.Fragment:e,i=t.elementId,u=t.appName,s=t.path,d=t.api,v=a(t,["Placeholder","elementId","appName","path","api"]),h=(null===(n=c.getAppsByRootLocation(s))||void 0===n?void 0:n[0]).scriptLocation;return l.useEffect((function(){var t=c.getApp(u),n=document.getElementById(i);if(t){var e=t.mount(d);p.render(e,n)}else c.injectScript(u,h).then((function(){var t=c.getApp(u).mount(d);p.render(t,n)}));return function(){c.getApp(u).unmount(),p.unmountComponentAtNode(n)}}),[s]),l.default.createElement(f.Route,r({},v,{path:s}),l.default.createElement("div",{id:i},l.default.createElement(o,null)))}},94184:(t,n)=>{var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)&&e.length){var u=o.apply(null,e);u&&t.push(u)}else if("object"===i)for(var a in e)r.call(e,a)&&e[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(n,[]))||(t.exports=e)}()},44174:t=>{t.exports=function(t,n,e,r){for(var o=-1,i=null==t?0:t.length;++o<i;){var u=t[o];n(r,u,e(u),t)}return r}},81119:(t,n,e)=>{var r=e(89881);t.exports=function(t,n,e,o){return r(t,(function(t,r,i){n(o,t,e(t),i)})),o}},89881:(t,n,e)=>{var r=e(47816),o=e(99291)(r);t.exports=o},21078:(t,n,e)=>{var r=e(62488),o=e(37285);t.exports=function t(n,e,i,u,a){var c=-1,l=n.length;for(i||(i=o),a||(a=[]);++c<l;){var p=n[c];e>0&&i(p)?e>1?t(p,e-1,i,u,a):r(a,p):u||(a[a.length]=p)}return a}},69199:(t,n,e)=>{var r=e(89881),o=e(98612);t.exports=function(t,n){var e=-1,i=o(t)?Array(t.length):[];return r(t,(function(t,r,o){i[++e]=n(t,r,o)})),i}},55189:(t,n,e)=>{var r=e(44174),o=e(81119),i=e(67206),u=e(1469);t.exports=function(t,n){return function(e,a){var c=u(e)?r:o,l=n?n():{};return c(e,t,i(a,2),l)}}},99291:(t,n,e)=>{var r=e(98612);t.exports=function(t,n){return function(e,o){if(null==e)return e;if(!r(e))return t(e,o);for(var i=e.length,u=n?i:-1,a=Object(e);(n?u--:++u<i)&&!1!==o(a[u],u,a););return e}}},37285:(t,n,e)=>{var r=e(62705),o=e(35694),i=e(1469),u=r?r.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(u&&t&&t[u])}},94654:(t,n,e)=>{var r=e(21078),o=e(35161);t.exports=function(t,n){return r(o(t,n),1)}},24350:(t,n,e)=>{var r=e(89465),o=e(55189)((function(t,n,e){r(t,e,n)}));t.exports=o},35161:(t,n,e)=>{var r=e(29932),o=e(67206),i=e(69199),u=e(1469);t.exports=function(t,n){return(u(t)?r:i)(t,o(n,3))}}}]);
//# sourceMappingURL=692.9f815591aeefd894ef4d.js.map
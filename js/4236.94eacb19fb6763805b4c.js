/*! For license information please see 4236.94eacb19fb6763805b4c.js.LICENSE.txt */
(self.webpackChunkedge=self.webpackChunkedge||[]).push([[4236],{37560:(t,n,e)=>{"use strict";e.d(n,{A:()=>d});var r=e(74848),o=e(93345),a=e.n(o),i=e(9694),c=e(35464),u=e(79704),l=e(46942),s=e.n(l),f=function(){return f=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},f.apply(this,arguments)},p=function(t){var n=t.appName,e=t.scope,o=t.module,a=t.fallback,l=void 0===a?(0,r.jsx)(c.Bullseye,{children:(0,r.jsx)(u.Spinner,{size:"xl"})}):a,p=t.innerRef,d=t.className,v=t.component,h=void 0===v?"section":v,y=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(t,["appName","scope","module","fallback","innerRef","className","component"]),g=f({className:d,appName:n,module:o,scope:null!=e?e:n,ref:p,fallback:l},y);return(0,r.jsx)(h,{className:s()(d,n),children:(0,r.jsx)(i.ScalprumComponent,f({},g))})};const d=a().forwardRef((function(t,n){return(0,r.jsx)(p,f({innerRef:n},t))}))},63767:(t,n,e)=>{"use strict";e.d(n,{A:()=>g});var r=e(74848),o=e(93345),a=e.n(o),i=e(59304),c=function(){return c=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},c.apply(this,arguments)},u=36e5,l=24*u,s=30*l,f=365*l,p=function(t,n){return"".concat(t," ").concat(t>1?"".concat(n,"s"):n," ago")},d=[{rightBound:1/0,description:function(t){return p(Math.round(t/f),"year")}},{rightBound:f,description:function(t){return p(Math.round(t/s),"month")}},{rightBound:s,description:function(t){return p(Math.round(t/l),"day")}},{rightBound:l,description:function(t){return p(Math.round(t/u),"hour")}},{rightBound:u,description:function(t){return p(Math.round(t/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],v=function(t){return t.toUTCString().split(",")[1].slice(0,-7).trim()},h=function(t){return{exact:function(t){return v(t)+" UTC"},onlyDate:function(t){return v(t).slice(0,-6)},relative:function(t){return d.reduce((function(n,e){return e.rightBound>Date.now()-t.getTime()?e.description(Date.now()-t.getTime()):n}),v(t))},invalid:function(){return"Invalid date"}}[t]},y=function(t,n,e){return{exact:function(n){return h(t)(n)},onlyDate:function(n){return h(t)(n)},relative:function(o){return function(t,n,e,o){return void 0===o&&(o=""),(0,r.jsx)(i.Tooltip,c({},e,{content:(0,r.jsxs)("div",{children:[o,t]}),children:n}))}(h("exact")(o),(0,r.jsx)("span",{children:h(t)(o)}),n,e)},invalid:function(){return"Invalid date"}}[t]};const g=function(t){var n=t.date,e=t.type,o=void 0===e?"relative":e,i=t.extraTitle,c=t.tooltipProps,u=n instanceof Date?n:new Date(n),l=null==n||"Invalid Date"===u.toString()?"invalid":o;return(0,r.jsx)(a().Fragment,{children:y(l,c,i)(u)})}},16594:(t,n,e)=>{"use strict";e.d(n,{A:()=>s});var r=e(74848),o=e(46942),a=e.n(o),i=e(93345);const c=e.n(i)().createContext("light");var u=e(69),l=function(){return l=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},l.apply(this,arguments)};const s=function(t){var n=t.className,e=t.children,o=t.ouiaId,i=t.ouiaSafe,s=void 0===i||i,f=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(t,["className","children","ouiaId","ouiaSafe"]),p=a()(n,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section"),d="RHI/Header",v=(0,u.useOUIAId)(d,o,s);return(0,r.jsx)(c.Consumer,{children:function(t){var n,o;void 0===t&&(t="light");var i=a()(((n={})["pf-m-".concat(t,"-200")]="dark"===t,n),((o={})["pf-m-light"]="light"===t,o));return(0,r.jsx)("section",l({"data-ouia-component-type":d,"data-ouia-component-id":v,"data-ouia-safe":s},f,{className:"".concat(p," ").concat(i),"widget-type":"InsightsPageHeader",children:e}))}})}},16401:(t,n,e)=>{"use strict";e.d(n,{A:()=>s});var r=e(74848),o=e(46942),a=e.n(o),i=e(63068),c=e(69),u=e(86228),l=function(){return l=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},l.apply(this,arguments)};const s=function(t){var n=t.className,e=t.title,o=t.actionsContent,s=t.ouiaId,f=t.ouiaSafe,p=void 0===f||f,d=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}(t,["className","title","actionsContent","ouiaId","ouiaSafe"]),v=a()(n),h="RHI/Header",y=(0,c.useOUIAId)(h,s,p);return(0,r.jsxs)(u.Flex,{justifyContent:{default:"justifyContentSpaceBetween"},children:[(0,r.jsx)(u.FlexItem,{className:"pf-v5-u-flex-grow-1",children:(0,r.jsx)(i.Title,l({headingLevel:"h1",size:"2xl",className:v,"widget-type":"InsightsPageHeaderTitle","data-ouia-component-type":h,"data-ouia-component-id":y,"data-ouia-safe":p},d,{children:e}))}),o?(0,r.jsx)(u.FlexItem,{children:o}):null]})}},63945:t=>{t.exports=function(t,n,e,r){for(var o=-1,a=null==t?0:t.length;++o<a;){var i=t[o];n(r,i,e(i),t)}return r}},62429:(t,n,e)=>{var r=e(80909);t.exports=function(t,n,e,o){return r(t,(function(t,r,a){n(o,t,e(t),a)})),o}},80909:(t,n,e)=>{var r=e(30641),o=e(38329)(r);t.exports=o},83120:(t,n,e)=>{var r=e(14528),o=e(45891);t.exports=function t(n,e,a,i,c){var u=-1,l=n.length;for(a||(a=o),c||(c=[]);++u<l;){var s=n[u];e>0&&a(s)?e>1?t(s,e-1,a,i,c):r(c,s):i||(c[c.length]=s)}return c}},5128:(t,n,e)=>{var r=e(80909),o=e(64894);t.exports=function(t,n){var e=-1,a=o(t)?Array(t.length):[];return r(t,(function(t,r,o){a[++e]=n(t,r,o)})),a}},42e3:(t,n,e)=>{var r=e(63945),o=e(62429),a=e(15389),i=e(56449);t.exports=function(t,n){return function(e,c){var u=i(e)?r:o,l=n?n():{};return u(e,t,a(c,2),l)}}},38329:(t,n,e)=>{var r=e(64894);t.exports=function(t,n){return function(e,o){if(null==e)return e;if(!r(e))return t(e,o);for(var a=e.length,i=n?a:-1,c=Object(e);(n?i--:++i<a)&&!1!==o(c[i],i,c););return e}}},45891:(t,n,e)=>{var r=e(51873),o=e(72428),a=e(56449),i=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||o(t)||!!(i&&t&&t[i])}},47307:(t,n,e)=>{var r=e(83120),o=e(55378);t.exports=function(t,n){return r(o(t,n),1)}},38970:(t,n,e)=>{var r=e(43360),o=e(42e3)((function(t,n,e){r(t,e,n)}));t.exports=o},55378:(t,n,e)=>{var r=e(34932),o=e(15389),a=e(5128),i=e(56449);t.exports=function(t,n){return(i(t)?r:a)(t,o(n,3))}},46942:(t,n)=>{var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",n=0;n<arguments.length;n++){var e=arguments[n];e&&(t=i(t,a(e)))}return t}function a(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var n="";for(var e in t)r.call(t,e)&&t[e]&&(n=i(n,e));return n}function i(t,n){return n?t?t+" "+n:t+n:t}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(n,[]))||(t.exports=e)}()}}]);
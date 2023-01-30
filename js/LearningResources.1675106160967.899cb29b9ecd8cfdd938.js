/*! For license information please see LearningResources.1675106160967.899cb29b9ecd8cfdd938.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[5018],{68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>a,x:()=>l});var a,r=n(70655),i=n(92950),s=n(38296),c=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(a||(a={}));const l=e=>{var{children:t=null,className:n="",component:m=a.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:d=!0}=e,f=(0,r.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const g=m,h=(0,o.S$)(l.displayName,p,d);return i.createElement(g,Object.assign({},h,f,{"data-pf-content":!0,className:(0,s.i)(u&&m===a.a&&c.Z.modifiers.visited,n)}),t)};l.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>c});var a=n(70655),r=n(92950),i=n(62873),s=n(38296);const c=e=>{var{children:t=null,className:n="",isVisited:c=!1}=e,o=(0,a.__rest)(e,["children","className","isVisited"]);return r.createElement("div",Object.assign({},o,{className:(0,s.i)(i.Z.content,c&&i.Z.modifiers.visited,n)}),t)};c.displayName="TextContent"},85979:(e,t,n)=>{"use strict";n.d(t,{r:()=>c});var a=n(70655),r=n(92950),i=n(38296);n(51934);const s="pf-m-gutter",c=e=>{var{children:t=null,className:n="",component:c="div",hasGutter:o=!1,minWidths:l,maxWidths:m}=e,u=(0,a.__rest)(e,["children","className","component","hasGutter","minWidths","maxWidths"]);const p={},d=c;l&&Object.entries(l||{}).map((([e,t])=>p["--pf-l-gallery--GridTemplateColumns--min"+("default"!==e?`-on-${e}`:"")]=t));const f={};m&&Object.entries(m||{}).map((([e,t])=>f["--pf-l-gallery--GridTemplateColumns--max"+("default"!==e?`-on-${e}`:"")]=t));const g=Object.assign(Object.assign({},p),f);return r.createElement(d,Object.assign({className:(0,i.i)("pf-l-gallery",o&&s,n)},u,(l||m)&&{style:Object.assign(Object.assign({},g),u.style)}),t)};c.displayName="Gallery"},45023:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});var a=n(70655),r=n(92950);const i=e=>{var{children:t=null,component:n="div"}=e,i=(0,a.__rest)(e,["children","component"]);const s=n;return r.createElement(s,Object.assign({},i),t)};i.displayName="GalleryItem"},14505:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s,u3:()=>r,vJ:()=>i});var a=n(40400);const r={name:"BookIcon",height:512,width:448,svgPath:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z",yOffset:0,xOffset:0},i=(0,a.IU)(r),s=i},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(10108);const a={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(85893),r=n(94184),i=n.n(r),s=n(92950);const c=n.n(s)().createContext("light");var o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)};const l=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),s=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(c.Consumer,{children:function(e){var t,c;void 0===e&&(e="light");var l=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((c={})["pf-m-light"]="light"===e,c));return(0,a.jsx)("section",o({},r,{className:"".concat(s," ").concat(l),"widget-type":"InsightsPageHeader"},{children:n}))}})}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(85893),r=n(94184),i=n.n(r),s=n(48335),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};const o=function(e){var t=e.className,n=e.title,r=i()(t);return(0,a.jsx)(s.Title,c({headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},57975:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var a=n(92950),r=n.n(a),i=n(89376),s=n(39173),c=n(41382),o=n(85979),l=n(45023),m=n(68774),u=n(68340),p=n(14505),d=[{apiVersion:"5",kind:"documentation",metadata:{name:"build-register-images"},spec:{displayName:"Create RHEL for Edge images and configure automated management",icon:r().createElement(p.ZP,null),description:"With the edge management application, you can create an image and manage the packages associated with an image. You can build an image, download it, install it on a node, and then register that node so it can receive updates.",link:{href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index"},type:{text:"Documentation",color:"orange"}}},{apiVersion:"5",kind:"documentation",metadata:{name:"working-with-systems"},spec:{displayName:"Working with systems in the edge management application",icon:r().createElement(p.ZP,null),description:"Group, connect, and manage edge systems after registering them with the edge management console.",link:{href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"},type:{text:"Documentation",color:"orange"}}}];const f=function(){return r().createElement(c.QuickStartCatalogSection,null,r().createElement(m.D,{className:"pf-u-mb-md"},r().createElement(u.x,{component:"h2"},"Documentation"),r().createElement(u.x,{component:"p",className:"catalog-sub"},"Technical information for using the service")),r().createElement(o.r,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},d.map((function(e,t){return r().createElement(l.L,{key:t,className:"pfext-quick-start-catalog__gallery-item"},r().createElement(c.QuickStartTile,{quickStart:e}))}))))},g=function(){return r().createElement(r().Fragment,null,r().createElement(i.Z,null,r().createElement(s.Z,{title:"Learning Resources"})),r().createElement(f,null))}},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var s,c,o=r(e),l=1;l<arguments.length;l++){for(var m in s=Object(arguments[l]))n.call(s,m)&&(o[m]=s[m]);if(t){c=t(s);for(var u=0;u<c.length;u++)a.call(s,c[u])&&(o[c[u]]=s[c[u]])}}return o}},75251:(e,t,n)=>{"use strict";n(27418);var a=n(92950),r=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,i={},l=null,m=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(m=t.ref),t)c.call(t,a)&&!o.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:m,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{"use strict";e.exports=n(75251)},10108:()=>{},51934:()=>{}}]);
//# sourceMappingURL=../sourcemaps/LearningResources.cbe540176e0f0fc7116f6fb32e4a3514.js.map
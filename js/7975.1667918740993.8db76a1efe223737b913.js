/*! For license information please see 7975.1667918740993.8db76a1efe223737b913.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7975],{68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>l});var r,a=n(70655),i=n(92950),s=n(38296),c=n(62873),o=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const l=e=>{var{children:t=null,className:n="",component:m=r.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:d=!0}=e,f=(0,a.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const g=m,h=(0,o.S$)(l.displayName,p,d);return i.createElement(g,Object.assign({},h,f,{"data-pf-content":!0,className:(0,s.i)(u&&m===r.a&&c.Z.modifiers.visited,n)}),t)};l.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>c});var r=n(70655),a=n(92950),i=n(62873),s=n(38296);const c=e=>{var{children:t=null,className:n="",isVisited:c=!1}=e,o=(0,r.__rest)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},o,{className:(0,s.i)(i.Z.content,c&&i.Z.modifiers.visited,n)}),t)};c.displayName="TextContent"},21877:(e,t,n)=>{"use strict";n.d(t,{r:()=>c});var r=n(70655),a=n(92950),i=n(38296),s=n(9259);const c=e=>{var{children:t=null,className:n="",component:c="div",hasGutter:o=!1,minWidths:l,maxWidths:m}=e,u=(0,r.__rest)(e,["children","className","component","hasGutter","minWidths","maxWidths"]);const p={},d=c;l&&Object.entries(l||{}).map((([e,t])=>p["--pf-l-gallery--GridTemplateColumns--min"+("default"!==e?`-on-${e}`:"")]=t));const f={};m&&Object.entries(m||{}).map((([e,t])=>f["--pf-l-gallery--GridTemplateColumns--max"+("default"!==e?`-on-${e}`:"")]=t));const g=Object.assign(Object.assign({},p),f);return a.createElement(d,Object.assign({className:(0,i.i)(s.Z.gallery,o&&s.Z.modifiers.gutter,n)},u,(l||m)&&{style:Object.assign(Object.assign({},g),u.style)}),t)};c.displayName="Gallery"},45023:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});var r=n(70655),a=n(92950);const i=e=>{var{children:t=null,component:n="div"}=e,i=(0,r.__rest)(e,["children","component"]);const s=n;return a.createElement(s,Object.assign({},i),t)};i.displayName="GalleryItem"},14505:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s,u3:()=>a,vJ:()=>i});var r=n(40400);const a={name:"BookIcon",height:512,width:448,svgPath:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z",yOffset:0,xOffset:0},i=(0,r.IU)(a),s=i},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},9259:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(51934);const r={gallery:"pf-l-gallery",modifiers:{gutter:"pf-m-gutter"}}},53754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(92950);const a=n.n(r)().createContext("light")},80123:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(85893),a=n(94184),i=n.n(a),s=n(53754),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const o=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),o=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(s.Z.Consumer,{children:function(e){var t,s;void 0===e&&(e="light");var l=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((s={})["pf-m-light"]="light"===e,s));return(0,r.jsx)("section",c({},a,{className:"".concat(o," ").concat(l),"widget-type":"InsightsPageHeader"},{children:n}))}})}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(85893),a=n(94184),i=n.n(a),s=n(76857),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const o=function(e){var t=e.className,n=e.title,a=i()(t);return(0,r.jsx)(s.Title,c({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},57975:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(92950),a=n.n(r),i=n(80123),s=n(39173),c=n(3812),o=n(21877),l=n(45023),m=n(68774),u=n(68340),p=n(14505),d=[{apiVersion:"5",kind:"documentation",metadata:{name:"build-register-images"},spec:{displayName:"Create RHEL for Edge images and configure automated management",icon:a().createElement(p.ZP,null),description:"With the edge management application, you can create an image and manage the packages associated with an image. You can build an image, download it, install it on a node, and then register that node so it can receive updates.",link:{href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index"},type:{text:"Documentation",color:"orange"}}},{apiVersion:"5",kind:"documentation",metadata:{name:"working-with-systems"},spec:{displayName:"Working with systems in the edge management application",icon:a().createElement(p.ZP,null),description:"Group, connect, and manage edge systems after registering them with the edge management console.",link:{href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"},type:{text:"Documentation",color:"orange"}}}];const f=function(){return a().createElement(c.QuickStartCatalogSection,null,a().createElement(m.D,{className:"pf-u-mb-md"},a().createElement(u.x,{component:"h2"},"Documentation"),a().createElement(u.x,{component:"p",className:"catalog-sub"},"Technical information for using the service")),a().createElement(o.r,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},d.map((function(e,t){return a().createElement(l.L,{key:t,className:"pfext-quick-start-catalog__gallery-item"},a().createElement(c.QuickStartTile,{quickStart:e}))}))))},g=function(){return a().createElement(a().Fragment,null,a().createElement(i.Z,null,a().createElement(s.Z,{title:"Learning Resources"})),a().createElement(f,null))}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var s,c,o=a(e),l=1;l<arguments.length;l++){for(var m in s=Object(arguments[l]))n.call(s,m)&&(o[m]=s[m]);if(t){c=t(s);for(var u=0;u<c.length;u++)r.call(s,c[u])&&(o[c[u]]=s[c[u]])}}return o}},75251:(e,t,n)=>{"use strict";n(27418);var r=n(92950),a=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,m=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(m=t.ref),t)c.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:m,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{"use strict";e.exports=n(75251)},10108:()=>{},51934:()=>{}}]);
/*! For license information please see LearningResources.75adddd86d87a567665a.js.LICENSE.txt */
(self.webpackChunkedge=self.webpackChunkedge||[]).push([[692,1575],{16594:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(74848),r=n(46942),o=n.n(r),i=n(93345);const c=n.n(i)().createContext("light");var l=n(69),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};const u=function(e){var t=e.className,n=e.children,r=e.ouiaId,i=e.ouiaSafe,u=void 0===i||i,m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children","ouiaId","ouiaSafe"]),p=o()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section"),d="RHI/Header",g=(0,l.useOUIAId)(d,r,u);return(0,a.jsx)(c.Consumer,{children:function(e){var t,r;void 0===e&&(e="light");var i=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((r={})["pf-m-light"]="light"===e,r));return(0,a.jsx)("section",s({"data-ouia-component-type":d,"data-ouia-component-id":g,"data-ouia-safe":u},m,{className:"".concat(p," ").concat(i),"widget-type":"InsightsPageHeader",children:n}))}})}},16401:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var a=n(74848),r=n(46942),o=n.n(r),i=n(63068),c=n(69),l=n(86228),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};const u=function(e){var t=e.className,n=e.title,r=e.actionsContent,u=e.ouiaId,m=e.ouiaSafe,p=void 0===m||m,d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","title","actionsContent","ouiaId","ouiaSafe"]),g=o()(t),f="RHI/Header",h=(0,c.useOUIAId)(f,u,p);return(0,a.jsxs)(l.Flex,{justifyContent:{default:"justifyContentSpaceBetween"},children:[(0,a.jsx)(l.FlexItem,{className:"pf-v5-u-flex-grow-1",children:(0,a.jsx)(i.Title,s({headingLevel:"h1",size:"2xl",className:g,"widget-type":"InsightsPageHeaderTitle","data-ouia-component-type":f,"data-ouia-component-id":h,"data-ouia-safe":p},d,{children:n}))}),r?(0,a.jsx)(l.FlexItem,{children:r}):null]})}},71865:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var a=n(93345),r=n.n(a),o=n(16594),i=n(16401),c=n(42356),l=n(51197),s=n(55729),u=n(42402),m=n.n(u);const p=[{apiVersion:"5",kind:"documentation",metadata:{name:"build-register-images"},spec:{displayName:"Create RHEL for Edge images and configure automated management",icon:r().createElement(m(),null),description:"With the edge management application, you can create an image and manage the packages associated with an image. You can build an image, download it, install it on a node, and then register that node so it can receive updates.",link:{href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index"},type:{text:"Documentation",color:"orange"}}},{apiVersion:"5",kind:"documentation",metadata:{name:"working-with-systems"},spec:{displayName:"Working with systems in the edge management application",icon:r().createElement(m(),null),description:"Group, connect, and manage edge systems after registering them with the edge management console.",link:{href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"},type:{text:"Documentation",color:"orange"}}}],d=()=>r().createElement(c.QuickStartCatalogSection,null,r().createElement(s.TextContent,{className:"pf-u-mb-md"},r().createElement(s.Text,{component:"h2"},"Documentation"),r().createElement(s.Text,{component:"p",className:"catalog-sub"},"Technical information for using the service")),r().createElement(l.Gallery,{className:"pfext-quick-start-catalog__gallery",hasGutter:!0},p.map(((e,t)=>r().createElement(l.GalleryItem,{key:t,className:"pfext-quick-start-catalog__gallery-item"},r().createElement(c.QuickStartTile,{quickStart:e})))))),g=()=>r().createElement(r().Fragment,null,r().createElement(o.A,null,r().createElement(i.A,{title:"Learning Resources"})),r().createElement(d,null))},46942:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);
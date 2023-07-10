/*! For license information please see 4570.19b30734ad35dae5dbad.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[4570,2672],{50383:(e,t,n)=>{"use strict";n.d(t,{O:()=>s});var a=n(70655),r=n(92950);n(53336);const i={circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"};var o=n(38296);const s=e=>{var{className:t,width:n,height:s,fontSize:l,shape:c,screenreaderText:u}=e,m=(0,a.__rest)(e,["className","width","height","fontSize","shape","screenreaderText"]);const d=l?Object.values(i).find((e=>e===`pf-m-text-${l}`)):void 0;return r.createElement("div",Object.assign({},m,{className:(0,o.i)("pf-c-skeleton",l&&d,"circle"===c&&i.circle,"square"===c&&i.square,t)},(n||s)&&{style:Object.assign({"--pf-c-skeleton--Width":n||void 0,"--pf-c-skeleton--Height":s||void 0},m.style)}),r.createElement("span",{className:"pf-u-screen-reader"},u))};s.displayName="Skeleton"},22663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(85893),r=n(92950),i=n.n(r),o=n(59823),s=n(2833),l=n(94184),c=n.n(l),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},m=function(e){var t=e.appName,n=e.scope,r=e.module,i=e.fallback,l=void 0===i?(0,a.jsx)(s.Bullseye,{children:(0,a.jsx)(s.Spinner,{size:"xl"})}):i,m=e.innerRef,d=e.className,p=e.component,v=void 0===p?"section":p,g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["appName","scope","module","fallback","innerRef","className","component"]),f=u({className:d,appName:t,module:r,scope:null!=n?n:t,ErrorComponent:l,ref:m,fallback:l},g);return(0,a.jsx)(v,u({className:c()(d,t)},{children:(0,a.jsx)(o.ScalprumComponent,u({},f))}))};const d=i().forwardRef((function(e,t){return(0,a.jsx)(m,u({innerRef:t},e))}))},35664:(e,t,n)=>{"use strict";n.d(t,{i:()=>l,Z:()=>c});var a=n(85893),r=n(2833),i=n(94184),o=n.n(i),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)},l={xs:"xs",sm:"sm",md:"md",lg:"lg"};const c=function(e){var t,n=e.size,i=void 0===n?l.md:n,c=e.isDark,u=void 0!==c&&c,m=e.className,d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["size","isDark","className"]);return(0,a.jsx)(r.Skeleton,s({className:o()("ins-c-skeleton","ins-c-skeleton__".concat(i),(t={},t["ins-m-dark"]=u,t),m)},d))}},93597:(e,t,n)=>{"use strict";n.d(t,{$c:()=>b,Bi:()=>u,Dk:()=>f,EC:()=>g,EV:()=>h,H1:()=>c,Kz:()=>y,L0:()=>p,QY:()=>v,Sj:()=>I,dj:()=>d,dt:()=>m});var a=n(15861),r=n(29439),i=n(64687),o=n.n(i),s=n(66702),l=n(93454),c=function(e){var t={name:e};return l.instance.post("".concat(s.Ds,"/images/checkImageName"),t)},u=function(e){var t=e.Id,n=e.name,a=e.version,i=e.description,o=e.release,c=e.architecture,u=e.username,m=e.credentials,d=e.imageType,p=e["selected-packages"],v=e["third-party-repositories"],g=e["custom-packages"],f=d||[],h=(0,r.Z)(f,1)[0];d.length>1&&(h="rhel-edge-installer");var y={name:n,version:a,description:i,distribution:o,imageType:h,packages:null==p?void 0:p.map((function(e){return{name:e.name}})),outputTypes:d,commit:{arch:c},installer:{username:u,sshkey:m},thirdPartyRepositories:null==v?void 0:v.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}}))},b="".concat(s.Ds,"/images");return a>1&&(b+="/".concat(t,"/update")),l.instance.post(b,y)},m=function(e){var t=e.id,n=e.q,a=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,r=(0,s.Vs)(a);return l.instance.get("".concat(s.Ds,"/image-sets/").concat(t,"?").concat(r))},d=function(e){var t=e.imageSetID,n=e.query,a=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,r=(0,s.Vs)(a);return l.instance.get("".concat(s.Ds,"/image-sets/view/").concat(t,"/versions?").concat(r))},p=function(e){var t=e.id;return l.instance.get("".concat(s.Ds,"/image-sets/view/").concat(t))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,s.Vs)(e);return l.instance.get("".concat(s.Ds,"/image-sets?").concat(t))},g=function(e){return l.instance.get("".concat(s.Ds,"/images/").concat(e,"/status"))},f=function(e){return l.instance.get("".concat(s.Ds,"/updates/device/").concat(e,"/image"))},h=function(){var e=(0,a.Z)(o().mark((function e(t,n,a){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({distribution:t,architecture:n,search:a}),e.abrupt("return",(0,l.instance)("".concat(s.DO,"/packages?").concat(r.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(e){var t=e.id;return l.instance.get("".concat(s.Ds,"/images/").concat(t,"/details"))},b=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,s.Vs)(t);return l.instance.get("".concat(s.Ds,"/image-sets/view?").concat(n))},I=function(e,t){return l.instance.post("".concat(s.$J,"/rpms/names"),{urls:e,search:t})}},66702:(e,t,n)=>{"use strict";n.d(t,{$J:()=>o,DO:()=>r,Ds:()=>i,Vs:()=>s});var a=n(71002),r="/api/image-builder/v1",i="/api/edge/v1",o="/api/content-sources/v1",s=function(e){return void 0===e?"":Object.keys(e).reduce((function(t,n){var r=void 0;return"object"===(0,a.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(r=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,a.Z)(e[n]))&&""!==e[n]&&(r="".concat(n,"=").concat(e[n])),void 0===r?t:""===t?"".concat(r):"".concat(t,"&").concat(r)}),"")}},17939:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(92950),r=n.n(a),i=n(50383),o=n(45697),s=function(e){for(var t=e.numberOfRows,n=[],a=0;a<t;a++)n.push(r().createElement(r().Fragment,{key:a},r().createElement(i.O,null),r().createElement("br",null)));return r().createElement(r().Fragment,null,n)};const l=s;s.propTypes={numberOfRows:o.PropTypes.number}},84570:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var a=n(15861),r=n(29439),i=n(87462),o=n(64687),s=n.n(o),l=n(92950),c=n.n(l),u=n(93597),m=n(9192),d=n(5513),p=n(77760),v=n(22663),g=n(35664),f=n(17939),h=n(45697),y=function(e){return c().createElement(v.Z,(0,i.Z)({appName:"inventory",module:"./LoadingCard",fallback:c().createElement(f.Z,{numberOfRows:5})},e))},b=function(e){var t,n,i,o,v,f,h,b,I,_,x,k,w,O,S,D,E,j,R,N,Z,P=e.deviceIdProps,U=null!=P?P:(0,p.useSelector)((function(e){var t,n=e.entityDetails;return null==n||null===(t=n.entity)||void 0===t?void 0:t.id})),z=(0,l.useState)(!0),V=(0,r.Z)(z,2),T=V[0],L=V[1],A=(0,l.useState)(!1),C=(0,r.Z)(A,2),q=C[0],M=C[1],$=(0,l.useState)(null),B=(0,r.Z)($,2),F=B[0],H=B[1];(0,l.useEffect)((function(){(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Dk)(U);case 3:t=e.sent,H(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),M(!0);case 10:L(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);var J=[{title:"Running image",value:T?c().createElement(g.Z,{size:g.i.sm}):F?c().createElement(d.rU,{to:"".concat(m._.manageImages,"/").concat(null==F||null===(t=F.Image)||void 0===t?void 0:t.ImageSetID,"/details")},null==F||null===(n=F.Image)||void 0===n?void 0:n.Name):"unavailable"},{title:"Running version",value:T?c().createElement(g.Z,{size:g.i.sm}):F?c().createElement(d.rU,{to:"".concat(m._.manageImages,"/").concat(null==F||null===(i=F.Image)||void 0===i?void 0:i.ImageSetID,"/versions/").concat(null==F||null===(o=F.Image)||void 0===o?void 0:o.ID,"/details")},null==F||null===(v=F.Image)||void 0===v?void 0:v.Version):"unavailable"},{title:"Target version",value:T?c().createElement(g.Z,{size:g.i.sm}):null!=F&&F.UpdatesAvailable?c().createElement(d.rU,{to:"".concat(m._.manageImages,"/").concat(null==F||null===(f=F.UpdatesAvailable[0])||void 0===f||null===(h=f.Image)||void 0===h?void 0:h.ImageSetID,"/versions/").concat(null==F||null===(b=F.UpdatesAvailable[0])||void 0===b||null===(I=b.Image)||void 0===I?void 0:I.ID,"/details")},null==F||null===(_=F.UpdatesAvailable[0])||void 0===_||null===(x=_.Image)||void 0===x?void 0:x.Version):q?"unavailable":"Same as running"},{title:"Rollback version",value:T?c().createElement(g.Z,{size:g.i.sm}):null!=F&&null!==(k=F.RollbackImage)&&void 0!==k&&k.ID?c().createElement(d.rU,{to:"".concat(m._.manageImages,"/").concat(null==F||null===(w=F.RollbackImage)||void 0===w?void 0:w.ImageSetID,"/versions/").concat(null==F||null===(O=F.RollbackImage)||void 0===O?void 0:O.ID,"/details")},null==F||null===(S=F.RollbackImage)||void 0===S?void 0:S.Version):q?"unavailable":"None"}],W=[{title:"Running image",value:T?c().createElement(g.Z,{size:g.i.sm}):F?null==F||null===(D=F.Image)||void 0===D?void 0:D.Name:"unavailable"},{title:"Running version",value:T?c().createElement(g.Z,{size:g.i.sm}):F?null==F||null===(E=F.Image)||void 0===E?void 0:E.Version:"unavailable"},{title:"Target version",value:T?c().createElement(g.Z,{size:g.i.sm}):null!=F&&F.UpdatesAvailable?null==F||null===(j=F.UpdatesAvailable[0])||void 0===j||null===(R=j.Image)||void 0===R?void 0:R.Version:q?"unavailable":"Same as running"},{title:"Rollback version",value:T?c().createElement(g.Z,{size:g.i.sm}):null!=F&&null!==(N=F.RollbackImage)&&void 0!==N&&N.ID?null==F||null===(Z=F.RollbackImage)||void 0===Z?void 0:Z.Version:q?"unavailable":"None"}];return c().createElement(l.Suspense,{fallback:""},c().createElement(y,{title:"Image information",isLoading:!1,items:P?W:J}))};b.propTypes={deviceIdProps:n.n(h)().string};const I=b},9192:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var a={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailUpdate:"/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources"}},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},75251:(e,t,n)=>{"use strict";n(27418);var a=n(92950),r=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{"use strict";e.exports=n(75251)},53336:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4570.ed202e7072a39abe7b76447aa83b3012.js.map
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[673],{67645:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var n=r(59713),o=r.n(n),i=r(1427),c=r.n(i),a=r(55399),l=r(50693),u=r(16475),s=r(64029),p=r(32835),f=r(56455),v=r(48716),d=r(86350),O=r(38775),b=r(53895),g=r(33902),y=r(69859),m=r(67154),h=r.n(m),P=r(42065),j=r(16545),E=r(58753),w=(0,i.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(291),r.e(397)]).then(r.bind(r,22994))})),D=(0,i.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(291),r.e(397)]).then(r.bind(r,44621))})),L=(0,i.lazy)((function(){return Promise.all([r.e(410),r.e(252)]).then(r.bind(r,18569))})),_=(0,i.lazy)((function(){return Promise.all([r.e(410),r.e(252)]).then(r.bind(r,38514))}));const S=function(){var e=(0,y.useSelector)((function(e){var t=e.permissionsReducer;return null==t?void 0:t.writePermissions})),t=(0,y.useSelector)((function(e){var t,r,n,o,i,c=e.systemProfileStore;return{runningVersion:null==c||null===(t=c.systemProfile)||void 0===t?void 0:t.running_rpm_os_tree_version,stagedVersion:null==c||null===(r=c.systemProfile)||void 0===r?void 0:r.staged_rpm_os_tree_version,nonActiveVersion:(null==c||null===(n=c.systemProfile)||void 0===n?void 0:n.non_active_rpm_os_tree_version)||[],heathCheck:null==c||null===(o=c.systemProfile)||void 0===o?void 0:o.health_check,rhcHealth:null==c||null===(i=c.systemProfile)||void 0===i?void 0:i.rhc_health}})),r=t.runningVersion,n=t.stagedVersion,o=t.nonActiveVersion,a=t.heathCheck,l=t.rhcHealth;return c().createElement(i.Suspense,{fallback:""},c().createElement(w,{store:(0,y.useStore)(),writePermissions:e,ConfigurationCardWrapper:!1,SystemCardWrapper:function(e){return c().createElement(i.Suspense,{fallback:""},c().createElement(D,h()({},e,{hasSAP:!1})))},OperatingSystemCardWrapper:function(e){return c().createElement(i.Suspense,{fallback:""},c().createElement(L,h()({},e,{hasKernelModules:!1,extra:[{title:"Running rpm-ostree version",value:r},{title:"Staged rpm-ostree version",value:n},{title:"Non-active (available rollback version(s))",value:null==o?void 0:o.length,plural:"versions",singular:"version",onClick:function(e,t){return t("Non-active (available rollback version(s))",(0,E.se)(o||[],"Version"),"small")}},{title:"Health check status",value:E.qi[null==a?void 0:a.toUpperCase()]||c().createElement(j.u,{content:"Unknown service status"},c().createElement(P.ZP,{className:"ins-c-inventory__detail--unknown"}))}]})))},CollectionCardWrapper:function(e){return c().createElement(i.Suspense,{fallback:""},c().createElement(_,h()({},e,{extra:[{title:"RHC Health (broker functioning)",value:E.qi[null==l?void 0:l.toUpperCase()]||c().createElement(j.u,{content:"Unknown service status"},c().createElement(P.ZP,{className:"ins-c-inventory__detail--unknown"}))}]})))}}))};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=(0,r(18546).Gg)({LOAD_ENTITY_FULFILLED:function(e){return I(I({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:S}]})}}),C=r(55206),Z=r(32002);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const F=function(){var e=(0,i.useContext)(C.g).getRegistry,t=(0,a.useParams)(),r=t.inventoryId,n=t.uuid,m=(0,y.useSelector)((function(e){var t,r=e.entityDetails;return null==r||null===(t=r.entity)||void 0===t?void 0:t.display_name})),h=(0,y.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.name}));return(0,i.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail")}),[]),(0,i.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appObjectId)||void 0===n||n.call(t,r)}),[r]),c().createElement(O.Z,{hideInvLink:!0,showTags:!0,onLoad:function(t){var r=t.mergeWithDetail;e().register(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({systemProfileStore:Z.ZP},r(N)))}},c().createElement(v.Z,null,c().createElement(s.a,{ouiaId:"systems-list"},c().createElement(p.g,null,c().createElement(a.Link,{to:n?"/groups":"/devices"},n?"Groups":"Devices")),n&&c().createElement(p.g,null,h?c().createElement(a.Link,{to:"/groups/".concat(n)},h):c().createElement(f.Z,{size:f.i.xs})),c().createElement(p.g,{isActive:!0},c().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},m||c().createElement(f.Z,{size:f.i.xs})))),c().createElement(b.Z,{fallback:"",hideBack:!0,showTags:!0,hideInvDrawer:!0})),c().createElement(d.Z,{className:"edge-c-device--detail"},c().createElement(l.r,{gutter:"md"},c().createElement(u.P,{span:12},c().createElement(g.Z,{showTags:!0,fallback:""})))))}},54341:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ve});var n=r(59713),o=r.n(n),i=r(87757),c=r.n(i),a=r(48926),l=r.n(a),u=r(63038),s=r.n(u),p=r(1427),f=r.n(p),v=r(69859),d=r(48716),O=r(39173),b=r(55399),g=r(86350),y=r(33739),m=r(24350),h=r.n(m),P=r(94654),j="LOAD_ACTIVE_IMAGES",E="LOAD_GROUPS",w="LOAD_GROUP_DETAIL",D="LOAD_TRESHOLD",L="LOAD_DEVICES_INFO",_="LOAD_CANARIES_INFO",S="LOAD_GROUP_DEVICES_INFO",k=r.n(P)()([j,E,w,D,L,_,S],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),I=(h()(k,(function(e){return e})),r(319),r(68778)),N=r(43047),C=r(69957),Z=r(34143),A=r(53636),F=r(54340),G=r(17542),R=r(12990),U=r(37655),T=r(4088),x=r(14206);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}I.ZP,T.Z.value,N.ZP,R.Z.value,A.ZP,F.ZP,G.ZP,C.ZP,U.Z.value,Z.ZP,x.Z.value;var H=function(e){return Object.values(e).find((function(e){var t;return(null==e||null===(t=e.value)||void 0===t?void 0:t.length)>0||(null==e?void 0:e.length)>0}))},W=function(e,t){return Object.entries(e).map((function(e){var r=s()(e,2),n=r[0],o=r[1],i=(o=void 0===o?{}:o).label,c=o.value;return{category:i,chipKey:n,chips:(null==c?void 0:c.length)>0?Array.isArray(c)?c.map((function(e){return{name:(null==t?void 0:t(e))||e,value:e}})):[{name:(null==t?void 0:t(c))||c,value:c}]:[]}}))},K=r(93454),q=function(){return K.eE.get("/api/image-builder/v1/composes")},B=r(55206),J=r(28191),M=r(92298),Y=r(32203),$=r(70),Q=r(62394),X=r(49734),ee=r(47173),te=r(2372),re=r(52643),ne=r(45697),oe=r.n(ne),ie=function(e){var t=e.children;return f().createElement(Y.Z,null,f().createElement($.l,null,"Available images"),t)};ie.propTypes={children:oe().children};const ce=function(){var e=(0,v.useSelector)((function(e){var t=e.imagesReducer;return{isLoading:void 0===(null==t?void 0:t.isLoading)||(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,data:(null==t?void 0:t.data)||null}}),v.shallowEqual),t=e.isLoading,r=e.hasError,n=e.data;return t?f().createElement(ie,null,f().createElement(Q.e,null,f().createElement(re.b,null,f().createElement(te.$,null)))):r?f().createElement(ie,null,f().createElement(Q.e,null,n)):f().createElement(ie,null,f().createElement(Q.e,null,f().createElement(ee.zx,{variant:"link",style:{paddingLeft:0}},n.meta.count," images")),f().createElement(X.e,null,f().createElement(ee.zx,{variant:"primary"},"Create new image")))};var ae,le=r(83215),ue=r(18546);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const fe=(0,ue.Gg)((ae={},o()(ae,"".concat(j,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),o()(ae,"".concat(j,"_FULFILLED"),(function(e,t){var r=t.payload;return pe(pe({},e),{},{isLoading:!1,hasError:!1,data:r})})),o()(ae,"".concat(j,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No images to view"}})),ae),{});var ve,de,Oe,be;function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(0,ue.Gg)((ve={},o()(ve,"".concat(E,"_PENDING"),(function(e){return ye(ye({},e),{},{groups:[],isLoading:!0})})),o()(ve,"".concat(E,"_FULFILLED"),(function(e,t){var r=t.payload;return ye(ye({},e),{},{isLoading:!1,groups:(null==r?void 0:r.results)||[],meta:(null==r?void 0:r.meta)||{}})})),ve),{}),(0,ue.Gg)((de={},o()(de,"".concat(D,"_PENDING"),(function(e){return he(he({},e),{},{threshold:{},isLoading:!0})})),o()(de,"".concat(D,"_FULFILLED"),(function(e,t){var r=t.payload;return he(he({},e),{},{threshold:(null==r?void 0:r.results)||{},isLoading:!1})})),de),{}),(0,ue.Gg)((Oe={},o()(Oe,"".concat(L,"_PENDING"),(function(e){return je(je({},e),{},{devicesInfo:{},isLoading:!0})})),o()(Oe,"".concat(L,"_FULFILLED"),(function(e,t){var r=t.payload;return je(je({},e),{},{devicesInfo:(null==r?void 0:r.results)||{},isLoading:!1})})),Oe),{}),(0,ue.Gg)((be={},o()(be,"".concat(_,"_PENDING"),(function(e){return we(we({},e),{},{canariesInfo:[],isLoading:!0})})),o()(be,"".concat(_,"_FULFILLED"),(function(e,t){var r=t.payload;return we(we({},e),{},{canariesInfo:(null==r?void 0:r.results)||[],isLoading:!1})})),be),{});r(67154);var De=r(6479),Le=r.n(De);r(16545);oe().oneOf(["done","error","pending","unknown","updating","warning","notification"]);var _e,Se,ke=r(99332),Ie=r(21314),Ne=function(e){var t=e.isSecure,r=Le()(e,["isSecure"]),n=t?ke.ZP:Ie.ZP;return f().createElement(n,r)};function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Ne.propTypes={isSecure:oe().bool},Ne.defaultProps={isSecure:!1},(0,ue.Gg)((_e={},o()(_e,"".concat(w,"_PENDING"),(function(e){return Ze(Ze({},e),{},{isLoading:!0})})),o()(_e,"".concat(w,"_FULFILLED"),(function(e,t){var r=t.payload;return Ze(Ze({},e),{},{isLoading:!1,name:(null==r?void 0:r.name)||"",uuid:(null==r?void 0:r.uuid)||"",devices:(null==r?void 0:r.results)||[],meta:(null==r?void 0:r.meta)||{}})})),_e),{}),(0,ue.Gg)((Se={},o()(Se,"".concat(S,"_PENDING"),(function(e){return Fe(Fe({},e),{},{devicesInfo:{},isLoading:!0})})),o()(Se,"".concat(S,"_FULFILLED"),(function(e,t){var r=t.payload;return Fe(Fe({},e),{},{devicesInfo:r,isLoading:!1})})),Se),{});var Ge=function(){var e=(0,p.useContext)(B.g).getRegistry,t=(0,v.useDispatch)();return(0,p.useEffect)((function(){var r=e().register({imagesReducer:fe,notifications:le.ee});return function(e){e({type:j,payload:q,meta:{notifications:{rejected:{variant:"danger",title:"Can not show images data",description:"Failed receiving images from image-builder"}}}}).catch((function(){return null}))}(t),function(){return r()}}),[t]),f().createElement(J.k,{style:{paddingBottom:"1rem"}},f().createElement(M.B,null,f().createElement(ce,null)))};function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te={deviceStatus:{label:"Device status",value:[],titles:[]}},xe=[{value:"approval",label:"Required approval"},{value:"ophaned",label:"Orphaned"},{value:"delivering",label:"On the way"}];const Ve=function(){var e,t,r=(0,p.useState)(),n=s()(r,2),i=n[0],a=n[1],u=(0,p.useState)(Te),m=s()(u,2),h=m[0],P=m[1],j=(0,p.useContext)(B.g).getRegistry,E=(0,p.useRef)(null),w=(0,b.useHistory)(),D=(0,v.useDispatch)();return(0,p.useEffect)((function(){return function(){return D({type:"CLEAN_ENTITIES"})}}),[]),f().createElement(p.Fragment,null,f().createElement(d.Z,{className:"pf-m-light"},f().createElement(O.Z,{title:"Available devices"})),f().createElement(g.Z,{className:"edge-devices"},f().createElement(Ge,null),f().createElement(y.Z,{ref:E,onRefresh:function(e,t){!t&&E&&E.current?E.current.onRefreshData(e):t&&t(e)},tableProps:{canSelectAll:!1},getEntities:function(){var e=l()(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(void 0,r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),hideFilters:{registeredWith:!0},filterConfig:{items:[{label:null==h||null===(e=h.deviceStatus)||void 0===e?void 0:e.label,type:"checkbox",filterValues:{onChange:function(e,t){P((function(){return Ue(Ue({},h||{}),{},{deviceStatus:Ue(Ue({},(null==h?void 0:h.deviceStatus)||{}),{},{value:t})})})),E.current.onRefreshData()},items:xe,value:(null==h||null===(t=h.deviceStatus)||void 0===t?void 0:t.value)||[]}}]},activeFiltersConfig:Ue(Ue({},H(h)&&{filters:W(h,(function(e){var t;return null===(t=xe.find((function(t){return t.value===e})))||void 0===t?void 0:t.label}))}),{},{onDelete:function(e,t,r){P(r?Te:function(){return function(e,t){var r,n,i,c=t[0];return z(z({},e),{},o()({},null==c?void 0:c.chipKey,z(z({},e[null==c?void 0:c.chipKey]||{}),{},{value:Array.isArray(null===(r=e[null==c?void 0:c.chipKey])||void 0===r?void 0:r.value)?null===(n=e[null==c?void 0:c.chipKey])||void 0===n||null===(i=n.value)||void 0===i?void 0:i.filter((function(e){var t;return!(null==c||null===(t=c.chips)||void 0===t?void 0:t.find((function(t){return t.value===e})))})):""})))}(h,t)}),E.current.onRefreshData()}}),onRowClick:function(e,t){return w.push("/devices/".concat(t))},onLoad:function(e){var t,r,n=e.mergeWithEntities,o=e.api;a((function(){return null==o?void 0:o.getEntities})),null===(t=j())||void 0===t||null===(r=t.register)||void 0===r||r.call(t,Ue({},n()))}})))}}}]);
//# sourceMappingURL=GroupsDetailPage.cb9f4e60ff34ca2b968f.js.map
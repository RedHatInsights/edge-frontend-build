(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[673],{3611:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(59713),a=n.n(r),l=n(1427),i=n.n(l),o=n(16530),c=n(50693),u=n(16475),s=n(64029),m=n(32835),p=n(56455),d=n(48716),f=n(86350),v=n(38775),g=n(53895),E=n(33902),b=n(80962),h=n(67154),y=n.n(h),O=n(42065),P=n(44479),S=n(58753),R=(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(291),n.e(642)]).then(n.bind(n,22994))})),j=(0,l.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(291),n.e(642)]).then(n.bind(n,44621))})),D=(0,l.lazy)((function(){return n.e(252).then(n.bind(n,18569))})),w=(0,l.lazy)((function(){return n.e(252).then(n.bind(n,38514))}));const k=function(){var e=(0,b.useSelector)((function(e){var t=e.permissionsReducer;return null==t?void 0:t.writePermissions})),t=(0,b.useSelector)((function(e){var t,n,r,a,l,i=e.systemProfileStore;return{runningVersion:null==i||null===(t=i.systemProfile)||void 0===t?void 0:t.running_rpm_os_tree_version,stagedVersion:null==i||null===(n=i.systemProfile)||void 0===n?void 0:n.staged_rpm_os_tree_version,nonActiveVersion:(null==i||null===(r=i.systemProfile)||void 0===r?void 0:r.non_active_rpm_os_tree_version)||[],heathCheck:null==i||null===(a=i.systemProfile)||void 0===a?void 0:a.health_check,rhcHealth:null==i||null===(l=i.systemProfile)||void 0===l?void 0:l.rhc_health}})),n=t.runningVersion,r=t.stagedVersion,a=t.nonActiveVersion,o=t.heathCheck,c=t.rhcHealth;return i().createElement(l.Suspense,{fallback:""},i().createElement(R,{store:(0,b.useStore)(),writePermissions:e,ConfigurationCardWrapper:!1,SystemCardWrapper:function(e){return i().createElement(l.Suspense,{fallback:""},i().createElement(j,y()({},e,{hasSAP:!1})))},OperatingSystemCardWrapper:function(e){return i().createElement(l.Suspense,{fallback:""},i().createElement(D,y()({},e,{hasKernelModules:!1,extra:[{title:"Running rpm-ostree version",value:n},{title:"Staged rpm-ostree version",value:r},{title:"Non-active (available rollback version(s))",value:null==a?void 0:a.length,plural:"versions",singular:"version",onClick:function(e,t){return t("Non-active (available rollback version(s))",(0,S.se)(a||[],"Version"),"small")}},{title:"Health check status",value:S.qi[null==o?void 0:o.toUpperCase()]||i().createElement(P.u,{content:"Unknown service status"},i().createElement(O.ZP,{className:"ins-c-inventory__detail--unknown"}))}]})))},CollectionCardWrapper:function(e){return i().createElement(l.Suspense,{fallback:""},i().createElement(w,y()({},e,{extra:[{title:"RHC Health (broker functioning)",value:S.qi[null==c?void 0:c.toUpperCase()]||i().createElement(P.u,{content:"Unknown service status"},i().createElement(O.ZP,{className:"ins-c-inventory__detail--unknown"}))}]})))}}))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=(0,n(18546).Gg)({LOAD_ENTITY_FULFILLED:function(e){return L(L({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:k}]})}}),I=n(32511),N=n(32002);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const Z=function(){var e=(0,l.useContext)(I.g).getRegistry,t=(0,o.useParams)(),n=t.inventoryId,r=t.uuid,h=(0,b.useSelector)((function(e){var t,n=e.entityDetails;return null==n||null===(t=n.entity)||void 0===t?void 0:t.display_name})),y=(0,b.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.name}));return(0,l.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail")}),[]),(0,l.useEffect)((function(){var e,t,r;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(r=t.appObjectId)||void 0===r||r.call(t,n)}),[n]),i().createElement(v.Z,{hideInvLink:!0,showTags:!0,onLoad:function(t){var n=t.mergeWithDetail;e().register(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({systemProfileStore:N.ZP},n(_)))}},i().createElement(d.Z,null,i().createElement(s.a,{ouiaId:"systems-list"},i().createElement(m.g,null,i().createElement(o.Link,{to:r?"/groups":"/fleet-management"},r?"Groups":"Fleet management")),r&&i().createElement(m.g,null,y?i().createElement(o.Link,{to:"/groups/".concat(r)},y):i().createElement(p.Z,{size:p.i.xs})),i().createElement(m.g,{isActive:!0},i().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},h||i().createElement(p.Z,{size:p.i.xs})))),i().createElement(g.Z,{fallback:"",hideBack:!0,showTags:!0,hideInvDrawer:!0})),i().createElement(f.Z,{className:"edge-c-device--detail"},i().createElement(c.r,{gutter:"md"},i().createElement(u.P,{span:12},i().createElement(E.Z,{showTags:!0,fallback:""})))))}},51188:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>J});var r=n(87757),a=n.n(r),l=n(319),i=n.n(l),o=n(59713),c=n.n(o),u=n(48926),s=n.n(u),m=n(63038),p=n.n(m),d=n(1427),f=n.n(d),v=n(80962),g=n(16530),E=n(48716),b=n(39173),h=n(86350),y=n(33739),O=n(94778),P=n(32511),S=n(58061),R=n(28191),j=n(92298),D=n(32203),w=n(70),k=n(62394),C=n(47173),L=n(52643),_=n(2372),I=n(50693),N=n(16475),T=n(49739),Z=n(83826),A=n(45697),F=n.n(A),x=function(e){var t=e.orphaned,n=e.active,r=e.noReports,a=e.neverReported;return f().createElement(D.Z,{className:"tiles-card"},f().createElement(w.l,null,"Device summary"),f().createElement(k.e,null,f().createElement(I.r,null,f().createElement(N.P,{span:6},f().createElement(T.K,{hasGutter:!0},f().createElement(Z.v,null,f().createElement(C.zx,{isInline:!0,className:"pf-u-pr-md",variant:"link"},n)," ","Active"),f().createElement(Z.v,null,f().createElement(C.zx,{isInline:!0,className:"pf-u-pr-md",variant:"link"},t)," ","Orphaned"))),f().createElement(N.P,{span:6},f().createElement(T.K,{hasGutter:!0},f().createElement(Z.v,null,f().createElement(C.zx,{isInline:!0,className:"pf-u-pr-md",variant:"link"},r),"Stale"),f().createElement(Z.v,null,f().createElement(C.zx,{isInline:!0,className:"pf-u-pr-md",variant:"link"},a),"Registered but never reported"))))))};x.propTypes={orphaned:F().number,active:F().number,noReports:F().number,neverReported:F().number};const U=function(){var e=(0,v.useSelector)((function(e){var t=e.deviceSummaryReducer;return{isLoading:void 0===(null==t?void 0:t.isLoading)||(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,data:(null==t?void 0:t.data)||null}}),v.shallowEqual),t=e.isLoading,n=e.hasError,r=e.data;return t?f().createElement(D.Z,{className:"tiles-card"},f().createElement(w.l,null,"Device summary information"),f().createElement(k.e,null,f().createElement(L.b,null,f().createElement(_.$,null)))):n?f().createElement(D.Z,{className:"tiles-card"},f().createElement(w.l,null,"Device summary information"),f().createElement(k.e,null,r)):f().createElement(x,{orphaned:r.orphaned,active:r.active,noReports:r.noReports,neverReported:r.neverReported})};var z=n(23887),q=function(){var e=(0,d.useContext)(P.g).getRegistry,t=(0,v.useDispatch)();return(0,d.useEffect)((function(){var n=e().register({imagesReducer:z.b4,deviceSummaryReducer:z.mR});return(0,O.lL)(t),(0,O.MB)(t),function(){return n()}}),[t]),f().createElement(R.k,{className:"tiles"},f().createElement(j.B,null,f().createElement(U,null)))};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}q.propTypes={onNewImageClick:F().func};var G=f().lazy((function(){return Promise.all([n.e(410),n.e(291),n.e(140),n.e(293),n.e(344)]).then(n.bind(n,27026))})),H={deviceStatus:{label:"Device status",value:[],titles:[]}},W=[{value:"approval",label:"Required approval"},{value:"ophaned",label:"Orphaned"},{value:"delivering",label:"On the way"}];const J=function(){var e,t,n=(0,d.useState)(),r=p()(n,2),l=r[0],o=r[1],c=(0,d.useState)(!1),u=p()(c,2),m=u[0],R=u[1],j=(0,d.useState)(H),D=p()(j,2),w=D[0],k=D[1],C=(0,d.useContext)(P.g).getRegistry,I=(0,d.useRef)(null),N=(0,g.useHistory)(),T=(0,v.useDispatch)();return(0,d.useEffect)((function(){return"true"===new URLSearchParams(N.location.search).get("create_image")&&R((function(){return!0})),function(){return T((0,O.Qo)())}}),[]),f().createElement(d.Fragment,null,f().createElement(E.Z,{className:"pf-m-light"},f().createElement(b.Z,{title:"Fleet management"})),f().createElement(h.Z,{className:"edge-devices"},f().createElement(q,{onNewImageClick:function(){N.push({pathname:N.location.pathname,search:new URLSearchParams({create_image:!0}).toString()}),R(!0)}}),f().createElement(y.Z,{ref:I,onRefresh:function(e,t){!t&&I&&I.current?I.current.onRefreshData(e):t&&t(e)},tableProps:{canSelectAll:!1},getEntities:function(){var e=s()(a().mark((function e(t,n){var r,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(void 0,V(V({},n),{},{filter:V(V({},n.filter),{},{system_profile:V(V({},null===(r=n.filter)||void 0===r?void 0:r.system_profile),{},{host_type:"edge"})}),fields:V(V({},null==n?void 0:n.fields),{},{system_profile:[].concat(i()((null==n||null===(o=n.fields)||void 0===o?void 0:o.system_profile)||[]),["host_type"])})}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),hideFilters:{registeredWith:!0},filterConfig:{items:[{label:null==w||null===(e=w.deviceStatus)||void 0===e?void 0:e.label,type:"checkbox",filterValues:{onChange:function(e,t){k((function(){return V(V({},w||{}),{},{deviceStatus:V(V({},(null==w?void 0:w.deviceStatus)||{}),{},{value:t})})})),I.current.onRefreshData()},items:W,value:(null==w||null===(t=w.deviceStatus)||void 0===t?void 0:t.value)||[]}}]},activeFiltersConfig:V(V({},(0,S.pM)(w)&&{filters:(0,S.I)(w,(function(e){var t;return null===(t=W.find((function(t){return t.value===e})))||void 0===t?void 0:t.label}))}),{},{onDelete:function(e,t,n){k(n?H:function(){return(0,S.Jr)(w,t)}),I.current.onRefreshData()}}),onRowClick:function(e,t){return N.push("/fleet-management/".concat(t))},onLoad:function(e){var t,n,r=e.mergeWithEntities,a=e.api;o((function(){return null==a?void 0:a.getEntities})),null===(t=C())||void 0===t||null===(n=t.register)||void 0===n||n.call(t,V({},r()))}})),m&&f().createElement(d.Suspense,{fallback:f().createElement(L.b,null,f().createElement(_.$,null))},f().createElement(G,{navigateBack:function(){N.push({pathname:N.location.pathname}),R(!1)}})))}},98364:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Y});var r=n(63038),a=n.n(r),l=n(59713),i=n.n(l),o=n(1427),c=n.n(o),u=n(48716),s=n(39173),m=n(86350),p=n(86748),d=n(9947),f=n(38424),v=n(35293),g=n(60485),E=n(47173),b=n(2372),h=n(52643),y=n(68920),O=n(16530),P=n(62410),S=n(9043),R=n(94778),j=n(80962),D=n(7081),w=n(80810),k=n(60306);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return(null==t||null===(e=t.chips)||void 0===e?void 0:e.map((function(e){return e.value})).join("."))||void 0},I=n(45697),N=n.n(I);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.filters,n=e.pagination,r=e.openWizard,l=e.clearFilters,u=(0,o.useState)({index:4,direction:"desc"}),s=a()(u,2),m=s[0],C=s[1],I=(0,j.useDispatch)(),N=(0,j.useSelector)((function(e){var t=e.edgeImagesReducer;return{data:(null==t?void 0:t.data)||null,isLoading:void 0===(null==t?void 0:t.isLoading)||t.isLoading,hasError:null==t?void 0:t.hasError}}),j.shallowEqual),T=N.data,A=N.isLoading,F=N.hasError,x=[{title:"Name",type:"name",transforms:U?[]:[p.sortable]},"Version",{title:"Distribution",type:"distribution",transforms:U?[]:[p.sortable]},{title:"Type",type:"image_type",transforms:[]},{title:"Created",type:"created_at",transforms:U?[]:[p.sortable]},{title:"Status",type:"status",transforms:U?[]:[p.sortable]}],U=A||F||!(null==T?void 0:T.length)&&z;(0,o.useEffect)((function(){var e,r;(0,R.Z5)(I,Z(Z(Z({},function(e){return e.reduce((function(e,t){return t.chipKey&&0!==t.chips.length?L(L({},e),{},i()({},t.chipKey,t.chips.map((function(e){return e.value})))):e}),{})}(t)),function(e){var t=e.perPage;return{limit:t,offset:(e.page-1)*t}}(n)),(r=(e={direction:m.direction,name:x[m.index].type}).name,{sort_by:"asc"===e.direction?r:"-".concat(r)})))}),[n.perPage,n.page,m.index,m.direction,_(t[0]),_(t[1]),_(t[2])]);var z=Object.keys(t).some((function(e){return e})),q=[{heightAuto:!0,cells:[{props:{colSpan:8},title:c().createElement(h.b,null,c().createElement(d.u,{variant:"small"},c().createElement(f.k,{icon:b.$})))}]}];return!1===A&&!1===F&&((null==T?void 0:T.length)||z||(q=[{heightAuto:!0,cells:[{props:{colSpan:8},title:c().createElement(h.b,null,c().createElement(d.u,{variant:"small"},c().createElement(f.k,{icon:D.ZP}),c().createElement(g.D,{headingLevel:"h2",size:"lg"},"No images found"),c().createElement(E.zx,{onClick:r,isDisabled:!1!==A},"Create new images")))}]}]),!(null==T?void 0:T.length)&&z&&(q=[{heightAuto:!0,cells:[{props:{colSpan:8},title:c().createElement(h.b,null,c().createElement(d.u,{variant:"small"},c().createElement(f.k,{icon:w.ZP}),c().createElement(g.D,{headingLevel:"h2",size:"lg"},"No match found"),c().createElement(v.i,null,c().createElement(E.zx,{onClick:l,variant:"link"},"Clear all filters"))))}]}]),(null==T?void 0:T.length)&&(q=T.map((function(e){var t;return{id:e.ID,cells:[{title:c().createElement(O.Link,{to:"".concat(k._j.gb,"/").concat(e.ID)},e.Name)},null==e?void 0:e.Version,{title:y.aN[null==e?void 0:e.Distribution]},{title:y.bd[null==e?void 0:e.ImageType]},{title:c().createElement(P.Z,{date:null==e?void 0:e.CreatedAt})},{title:c().createElement(S.Z,{status:null==e?void 0:e.Status})}],isoURL:null==e||null===(t=e.Installer)||void 0===t?void 0:t.ImageBuildISOURL}})))),c().createElement(p.Table,{variant:"compact","aria-label":"Manage Images table",sortBy:m,onSort:function(e,t,n){C({index:t,direction:n})},actionResolver:function(e){return void 0===(null==e?void 0:e.isoURL)?[]:[{title:c().createElement("a",{href:e.isoURL,rel:"noopener noreferrer",target:"_blank",download:!0},"Download")}]},cells:x,rows:q},c().createElement(p.TableHeader,null),c().createElement(p.TableBody,null))};A.propTypes={clearFilters:N().func.isRequired,openWizard:N().func.isRequired,filters:N().array.isRequired,pagination:N().shape({page:N().number,perPage:N().number}).isRequired};const F=A;var x=n(57277),U=n(58061);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.setPagination,n=e.pagination,r=e.filterConfig,a=e.activeFilters,l=e.dispatchActiveFilters,i=e.defaultFilters,o=e.openWizard,u=(0,j.useSelector)((function(e){var t=e.edgeImagesReducer;return{isLoading:void 0===(null==t?void 0:t.isLoading)||t.isLoading}}),j.shallowEqual).isLoading;return c().createElement(x.Z,{filterConfig:r,pagination:q(q({itemCount:100},n),{},{onSetPage:function(e,n){return t({page:n})},onPerPageSelect:function(e,n){return t({page:1,perPage:n})}}),activeFiltersConfig:{filters:(0,U.pM)(a)?(0,U.I)(a):[],onDelete:function(e,t,n){l(n?{type:"DELETE_FILTER",payload:i}:{type:"DELETE_FILTER",payload:(0,U.Jr)(a,t)})}},dedicatedAction:c().createElement(E.zx,{onClick:o,isDisabled:!1!==u},"Create new image")})};B.propTypes={setPagination:N().func.isRequired,filterConfig:N().shape({items:N().array}),defaultFilters:N().shape({name:N().object,distribution:N().object,status:N().object}),activeFilters:N().shape({name:N().object,distribution:N().object,status:N().object}),dispatchActiveFilters:N().func.isRequired,openWizard:N().func.isRequired,filters:N().array.isRequired,pagination:N().shape({page:N().number,perPage:N().number}).isRequired};const V=B;var G=n(18546),H=n(32511),W=n(23887);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=c().lazy((function(){return Promise.all([n.e(410),n.e(291),n.e(140),n.e(293),n.e(344)]).then(n.bind(n,27026))})),X={name:{label:"Name",key:"name",value:""},distribution:{label:"Distribution",key:"distribution",value:[]},status:{label:"Status",key:"status",value:[]}},$={UPDATE_FILTER:function(e,t){return K(K({},e),{},i()({},t.property,K(K({},e[t.property]||{}),{},{value:t.value})))},DELETE_FILTER:function(e,t){return t.payload}},Q=(0,G.Gg)($,X);const Y=function(){var e,t,n,r=(0,o.useContext)(H.g).getRegistry,l=(0,o.useState)({page:1,perPage:100}),i=a()(l,2),p=i[0],d=i[1],f=(0,o.useState)(!1),v=a()(f,2),g=v[0],E=v[1],P=(0,O.useHistory)(),S=(0,o.useReducer)(Q,X),R=a()(S,2),j=R[0],D=R[1],w=function(){P.push({pathname:P.location.pathname,search:new URLSearchParams({create_image:!0}).toString()}),E(!0)},k={items:[{label:X.name.label,type:"text",filterValues:{key:"name-filter",onChange:function(e,t){return D({type:"UPDATE_FILTER",property:"name",value:t})},value:(null==j||null===(e=j.name)||void 0===e?void 0:e.value)||"",placeholder:"Filter by name"}},{label:X.distribution.label,type:"text",filterValues:{key:"distribution-filter",onChange:function(e,t){return D({type:"UPDATE_FILTER",property:"distribution",value:t})},value:(null==j||null===(t=j.distribution)||void 0===t?void 0:t.value)||""}},{label:X.status.label,type:"checkbox",filterValues:{key:"status-filter",onChange:function(e,t){return D({type:"UPDATE_FILTER",property:"status",value:t})},items:y.sX.map((function(e){return{value:e,label:e}})),value:(null==j||null===(n=j.status)||void 0===n?void 0:n.value)||[]}}]};return(0,o.useEffect)((function(){var e=r().register({edgeImagesReducer:W.QJ});return function(){return e()}}),[]),c().createElement(o.Fragment,null,c().createElement(u.Z,{className:"pf-m-light"},c().createElement(s.Z,{title:"Manage images"})),c().createElement(m.Z,{className:"edge-devices"},c().createElement(V,{setPagination:d,pagination:p,filterConfig:k,activeFilters:j,dispatchActiveFilters:D,defaultFilters:X,openWizard:w}),c().createElement(F,{clearFilters:function(){return D({type:"DELETE_FILTER",payload:X})},openWizard:w,filters:(0,U.pM)(j)?(0,U.I)(j):[],pagination:p})),g&&c().createElement(o.Suspense,{fallback:c().createElement(h.b,null,c().createElement(b.$,null))},c().createElement(M,{navigateBack:function(){P.push({pathname:P.location.pathname}),E(!1)}})))}},37097:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var r=n(1427),a=n.n(r),l=n(48716),i=n(16530),o=n(49739),c=n(83826),u=n(68340),s=n(80962),m=n(32511),p=n(94778),d=n(23887),f=n(25834),v=n(45454),g=n(68774),E=n(15209),b=n(64029),h=n(32835),y=n(9043),O=n(60306);const P=function(){var e=(0,s.useSelector)((function(e){var t=e.imageStatusReducer;return{isLoading:void 0===(null==t?void 0:t.isLoading)||(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,data:(null==t?void 0:t.data)||null}}),s.shallowEqual),t=e.isLoading,n=e.hasError,r=e.data,l=t||n?null:r.Status;return a().createElement(a().Fragment,null,a().createElement(b.a,null,a().createElement(h.g,null,a().createElement(i.Link,{to:O._j.gb},"Manage Images")),a().createElement(h.g,{isActive:!0},null==r?void 0:r.Name)),a().createElement(g.D,null,a().createElement(f.G,{component:"dl"},a().createElement(v.T,{component:"h1",className:"grid-align-center"},null==r?void 0:r.Name),a().createElement(v.T,{className:"pf-u-pt-xs",component:"dd"},t?a().createElement(E.O,null):a().createElement(y.Z,{status:l})))))};var S=n(63038),R=n.n(S),j=n(41316),D=n(48099),w=n(29873),k=n(62410),C=n(68920);const L=function(){var e=(0,s.useSelector)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),s.shallowEqual).data,t={"Image name":"Name",Version:"Version",Created:function(){return a().createElement(k.Z,{date:e.CreatedAt})},Release:function(){return C.aN[e.Distribution]},"Output type":function(){return C.bd[e.ImageType]},"Added packages":function(){return e.Commit.Packages.length},"Base Packages":function(){return 0},Dependancies:function(){return 0}};return a().createElement(g.D,{className:"pf-u-ml-lg pf-u-mt-md"},a().createElement(f.G,{component:f.F.dl},e?Object.entries(t).map((function(t){var n=R()(t,2),r=n[0],l=n[1];return a().createElement(a().Fragment,null,a().createElement(v.T,{component:v.v.dt},r),a().createElement(v.T,{component:v.v.dd},"function"==typeof l?l():e[l]))})):null))};var _=n(9947),I=n(60485),N=n(52643),T=n(86748),Z=n(57277),A=n(85564),F=n.n(A);const x=function(){var e=(0,r.useState)(100),t=R()(e,2),n=t[0],l=t[1],i=(0,r.useState)(1),o=R()(i,2),c=o[0],m=o[1],p=(0,r.useState)({}),d=R()(p,2),f=d[0],v=d[1],E=(0,r.useState)([]),b=R()(E,2),h=b[0],y=b[1],O=(0,s.useSelector)((function(e){var t,n,r,a=e.imageDetailReducer;return{data:(null==a||null===(t=a.data)||void 0===t||null===(n=t.Commit)||void 0===n?void 0:n.Packages)||null,imageName:(null==a||null===(r=a.data)||void 0===r?void 0:r.Name)||null}}),s.shallowEqual),P=O.data,S=O.imageName,j=[{title:"Name",type:"name",transforms:[T.sortable]}];return(0,r.useEffect)((function(){y(null!==P&&P.length>0?F()(P.map((function(e){return[{id:null==e?void 0:e.ID,rowArray:[e.Name],cells:[{title:a().createElement(g.D,null,a().createElement(u.x,{component:u.q.p},null==e?void 0:e.Name))}]}]}))):[{heightAuto:!0,cells:[{props:{colSpan:8},title:a().createElement(N.b,null,a().createElement(_.u,{variant:"small"},a().createElement(I.D,{headingLevel:"h2",size:"lg"},S," has no packages")))}]}])}),[P]),a().createElement(r.Fragment,null,P?a().createElement(Z.Z,{pagination:{itemCount:(null==P?void 0:P.length)||0,page:c,perPage:n,onSetPage:function(e,t){return m(t)},onPerPageSelect:function(e,t){return l(t)},isCompact:!0}}):null,a().createElement(T.Table,{"aria-label":"Image packages table",ariaLabel:"packages table",variant:"compact",sortBy:f,onSort:function(e,t,n){var r=h.sort((function(e,n){return e.rowArray[t]<n.rowArray[t]?-1:e.rowArray[t]>n.rowArray[t]?1:0}));v({index:t,direction:n}),y(n===T.SortByDirection.asc?r:r.reverse())},cells:j,rows:h},a().createElement(T.TableHeader,null),a().createElement(T.TableBody,null)))},U=function(){var e=(0,r.useState)(0),t=R()(e,2),n=t[0],l=t[1];return a().createElement("div",{className:"edge-c-device--detail add-100vh"},a().createElement(j.m,{className:"pf-u-ml-md",activeKey:n,onSelect:function(e,t){return l(t)}},a().createElement(D.O,{eventKey:0,title:a().createElement(w.T,null,"Details")},a().createElement(L,null)),a().createElement(D.O,{eventKey:1,title:a().createElement(w.T,null,"Packages")},a().createElement(x,null))))},z=function(){var e=(0,i.useParams)().imageId,t=(0,r.useContext)(m.g).getRegistry,n=(0,s.useDispatch)(),f=(0,s.useSelector)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),s.shallowEqual).data;return(0,r.useEffect)((function(){var r=t().register({imageStatusReducer:d.km,imageDetailReducer:d.OD});return(0,p.UZ)(n,e),(0,p.J_)(n,e),function(){return r()}}),[n]),a().createElement(r.Fragment,null,a().createElement(l.Z,{className:"pf-m-light"},a().createElement(o.K,{hasGutter:!0},a().createElement(c.v,null,a().createElement(P,null))),a().createElement(c.v,null,a().createElement(u.x,null,null==f?void 0:f.Description))),a().createElement(U,null))}},9043:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(1427),a=n.n(r),l=n(79851),i=n(34512),o=n(45697),c=n.n(o),u=n(68920),s=function(e){var t=e.status,n=u.Jl.unknown,r=u.Bh.unknown,o="Unknown";return u.sX.includes(t)&&(n=u.Jl[t],r=u.Bh[t],o=(o=u.mq[t]).charAt(0).toUpperCase()+o.slice(1).toLowerCase()),a().createElement(l.P,null,a().createElement(i.J,{className:"pf-u-mr-sm"},n(r)),a().createElement(i.J,null,o))};s.propTypes={status:c().oneOf(u.sX)};const m=s},68920:(e,t,n)=>{"use strict";n.d(t,{sX:()=>u,az:()=>s,Jl:()=>m,Bh:()=>p,mq:()=>d,aN:()=>f,Ei:()=>v,bd:()=>g});var r=n(1427),a=n.n(r),l=n(35451),i=n(18802),o=n(77669),c=n(87673),u=["CREATED","BUILDING","ERROR","SUCCESS"],s="rhel-84",m={unknown:function(e){return a().createElement(c.ZP,{color:e})},CREATED:function(e){return a().createElement(l.ZP,{color:e})},BUILDING:function(e){return a().createElement(i.ZP,{color:e})},ERROR:function(e){return a().createElement(o.ZP,{color:e})},SUCCESS:function(e){return a().createElement(l.ZP,{color:e})}},p={unknown:"grey",CREATED:"green",BUILDING:"blue",ERROR:"red",SUCCESS:"green"},d={CREATED:"CREATED",BUILDING:"Image build in progress",ERROR:"ERROR",SUCCESS:"SUCCESS"},f={"rhel-84":"RHEL 8.4"},v={"rhel-84":"Red Hat Enterprise Linux (RHEL) 8.4"},g={"rhel-edge-installer":"RHEL for Edge Installer (.iso)","rhel-edge-commit":"RHEL for Edge Commit (.tar)"}}}]);
//# sourceMappingURL=../sourcemaps/GroupsDetailPage.31bd80749ed2d13cac16.js.map
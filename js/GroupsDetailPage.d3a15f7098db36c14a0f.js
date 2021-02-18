(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[673],{99228:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(1427),l=n.n(r);const a=function(){return l().createElement("div",null,"Canaries page")}},67645:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(59713),l=n.n(r),a=n(1427),c=n.n(a),u=n(55399),i=n(50693),o=n(16475),s=n(64029),m=n(32835),v=n(56455),d=n(48716),f=n(86350),p=n(38775),E=n(53895),g=n(33902),b=n(69859),h=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(685),n.e(724),n.e(237),n.e(654)]).then(n.bind(n,6226))}));const O=function(){var e=(0,b.useSelector)((function(e){var t=e.permissionsReducer;return null==t?void 0:t.writePermissions}));return c().createElement(a.Suspense,{fallback:""},c().createElement(h,{store:(0,b.useStore)(),writePermissions:e}))};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=(0,n(18546).Gg)({LOAD_ENTITY_FULFILLED:function(e){return D(D({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:O}]})}}),j=n(55206),w=n(32002);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const k=function(){var e=(0,a.useContext)(j.g).getRegistry,t=(0,u.useParams)(),n=t.inventoryId,r=t.uuid,h=(0,b.useSelector)((function(e){var t,n=e.entityDetails;return null==n||null===(t=n.entity)||void 0===t?void 0:t.display_name})),O=(0,b.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.name}));return(0,a.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail")}),[]),(0,a.useEffect)((function(){var e,t,r;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(r=t.appObjectId)||void 0===r||r.call(t,n)}),[n]),c().createElement(p.Z,{hideInvLink:!0,showTags:!0,onLoad:function(t){var n=t.mergeWithDetail;e().register(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({systemProfileStore:w.ZP},n(P)))}},c().createElement(d.Z,null,c().createElement(s.a,{ouiaId:"systems-list"},c().createElement(m.g,null,c().createElement(u.Link,{to:r?"/groups":"/devices"},r?"Groups":"Devices")),r&&c().createElement(m.g,null,O?c().createElement(u.Link,{to:"/groups/".concat(r)},O):c().createElement(v.Z,{size:v.i.xs})),c().createElement(m.g,{isActive:!0},c().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},h||c().createElement(v.Z,{size:v.i.xs})))),c().createElement(E.Z,{fallback:"",hideBack:!0,showTags:!0,hideInvDrawer:!0})),c().createElement(f.Z,{className:"edge-c-device--detail"},c().createElement(i.r,{gutter:"md"},c().createElement(o.P,{span:12},c().createElement(g.Z,{showTags:!0,fallback:""})))))}},27168:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(59713),l=n.n(r),a=n(87757),c=n.n(a),u=n(48926),i=n.n(u),o=n(63038),s=n.n(o),m=n(1427),v=n.n(m),d=n(69859),f=n(48716),p=n(39173),E=n(55399),g=n(86350),b=n(33739),h=n(4250),O=n(55206),y=n(8969);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={deviceStatus:{label:"Device status",value:[],titles:[]}},w=[{value:"approval",label:"Required approval"},{value:"ophaned",label:"Orphaned"},{value:"delivering",label:"On the way"}];const S=function(){var e,t,n=(0,m.useState)(),r=s()(n,2),l=r[0],a=r[1],u=(0,m.useState)(j),o=s()(u,2),D=o[0],S=o[1],k=(0,m.useContext)(O.g).getRegistry,x=(0,m.useRef)(null),R=(0,E.useHistory)(),L=(0,d.useDispatch)();return(0,m.useEffect)((function(){return function(){return L((0,h.Qo)())}}),[]),v().createElement(m.Fragment,null,v().createElement(f.Z,{className:"pf-m-light"},v().createElement(p.Z,{title:"Available devices"})),v().createElement(g.Z,{className:"edge-devices"},v().createElement(b.Z,{ref:x,onRefresh:function(e,t){!t&&x&&x.current?x.current.onRefreshData(e):t&&t(e)},tableProps:{canSelectAll:!1},getEntities:function(){var e=i()(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(void 0,n);case 2:return r=e.sent,console.log(r,D,"This is data!"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),hideFilters:{registeredWith:!0},filterConfig:{items:[{label:null==D||null===(e=D.deviceStatus)||void 0===e?void 0:e.label,type:"checkbox",filterValues:{onChange:function(e,t){S((function(){return P(P({},D||{}),{},{deviceStatus:P(P({},(null==D?void 0:D.deviceStatus)||{}),{},{value:t})})})),x.current.onRefreshData()},items:w,value:(null==D||null===(t=D.deviceStatus)||void 0===t?void 0:t.value)||[]}}]},activeFiltersConfig:P(P({},(0,y.pM)(D)&&{filters:(0,y.I)(D,(function(e){var t;return null===(t=w.find((function(t){return t.value===e})))||void 0===t?void 0:t.label}))}),{},{onDelete:function(e,t,n){S(n?j:function(){return(0,y.Jr)(D,t)}),x.current.onRefreshData()}}),onRowClick:function(e,t){return R.push("/devices/".concat(t))},onLoad:function(e){var t,n,r=e.mergeWithEntities,l=e.api;a((function(){return null==l?void 0:l.getEntities})),null===(t=k())||void 0===t||null===(n=t.register)||void 0===n||n.call(t,P({},r()))}})))}},56311:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>X});var r=n(87757),l=n.n(r),a=n(48926),c=n.n(a),u=n(59713),i=n.n(u),o=n(6479),s=n.n(o),m=n(63038),v=n.n(m),d=n(1427),f=n.n(d),p=n(55399),E=n(69859),g=n(48716),b=n(86350),h=n(64029),O=n(32835),y=n(15209),D=n(49739),P=n(83826),j=n(47173),w=n(60306),S=n(4250),k=n(96416),x=n(50693),R=n(16475),L=n(32203),C=n(62394),T=n(70401),_=n(60485),Z=n(52643),I=n(68774),A=n(68340),F=n(45454),N=n(25834),q=n(45697),G=function(e){var t=e.uuid,n=(0,E.useDispatch)(),r=(0,E.useSelector)((function(e){var t=e.groupDevicesInfoReducer;return null==t?void 0:t.isLoading})),l=(0,E.useSelector)((function(e){var t=e.groupDevicesInfoReducer;return null==t?void 0:t.devicesInfo}));return(0,d.useEffect)((function(){n((0,S.MW)())}),[]),f().createElement(x.r,{hasGutter:!0},f().createElement(R.P,{span:3},f().createElement(L.Z,null,f().createElement(T.O,null,f().createElement(_.D,{headingLevel:"h3"},"Health threshold")),f().createElement(C.e,null))),f().createElement(R.P,{span:3},f().createElement(L.Z,null,f().createElement(T.O,null,f().createElement(_.D,{headingLevel:"h3"},"Devices info")),f().createElement(C.e,null,f().createElement(I.D,null,f().createElement(N.G,{component:N.F.dl},f().createElement(F.T,{component:F.v.dt},!1===r?f().createElement(A.x,{component:A.q.h1},null==l?void 0:l.total):f().createElement(y.O,null)),f().createElement(F.T,{component:F.v.dd},f().createElement(A.x,{component:A.q.h3},"Total devices")),f().createElement(F.T,{component:F.v.dt},!1===r?f().createElement(A.x,{component:A.q.h1},f().createElement(p.Link,{to:"/groups/".concat(t)},null==l?void 0:l.newDevices)):f().createElement(y.O,null)),f().createElement(F.T,{component:F.v.dd},"New devices added"),f().createElement(F.T,{component:F.v.dt},!1===r?f().createElement(A.x,{component:A.q.h1},f().createElement(p.Link,{to:"/groups/".concat(t)},null==l?void 0:l.offlineDevices)):f().createElement(y.O,null)),f().createElement(F.T,{component:F.v.dd},"Devices offline"),f().createElement(F.T,{component:F.v.dt},!1===r?f().createElement(A.x,{component:A.q.h1},f().createElement(p.Link,{to:"/groups/".concat(t)},null==l?void 0:l.deliveringDevices)):f().createElement(y.O,null)),f().createElement(F.T,{component:F.v.dd},"Devices on the way")))))),f().createElement(R.P,{span:6},f().createElement(L.Z,{className:"edge-groups--detail__complex"},f().createElement(T.O,null,f().createElement(x.r,null,f().createElement(R.P,{span:6},f().createElement(_.D,{headingLevel:"h3"},"Canary parameters")),f().createElement(R.P,{span:6},f().createElement(_.D,{headingLevel:"h3"},"Last Canaries")))),f().createElement(C.e,null,f().createElement(x.r,{hasGutter:!0},f().createElement(R.P,{span:6},f().createElement(_.D,{headingLevel:"h3"},f().createElement(Z.b,null,f().createElement(I.D,null,f().createElement(A.x,{component:A.q.h1},f().createElement(Z.b,null,"10% (89)")),f().createElement(A.x,{component:A.q.h4},f().createElement(Z.b,null,"Of systems tested")))))),f().createElement(R.P,{span:6}))))))};G.propTypes={uuid:n.n(q)().string};const z=G;var V=n(33739),W=n(67139);const H={fields:[{component:n(86163).k,name:"select-system"}]};var J=n(83958),M=n(8969),Y=n(55206);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=(0,d.lazy)((function(){return Promise.all([n.e(410),n.e(0),n.e(242),n.e(459)]).then(n.bind(n,75459))})),K={name:{label:"Name",value:""},version:{label:"Version",value:[]},status:{label:"Status",value:[]}};const X=function(){var e,t,n,r,a,u,i=(0,d.useContext)(Y.g).getRegistry,o=(0,d.useState)(!1),m=v()(o,2),x=m[0],R=m[1],L=(0,d.useState)(),C=v()(L,2),T=C[0],_=C[1],Z=(0,d.useState)(),I=v()(Z,2),A=I[0],F=I[1],N=(0,d.useState)(K),q=v()(N,2),G=q[0],B=q[1],X=(0,p.useHistory)(),$=(0,d.useRef)(null),ee=(0,p.useParams)().uuid,te=(0,E.useDispatch)(),ne=(0,E.useSelector)((function(e){var t=e.groupsDetailReducer;return(null==t?void 0:t.name)||""})),re=(0,E.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.isLoading})),le=(0,E.useSelector)((function(e){var t,n=e.groupsDetailReducer;return null==n||null===(t=n.devices)||void 0===t?void 0:t.map((function(e){return Q({id:e.uuid},s()(e,["uuid"]))}))}),E.shallowEqual);return(0,d.useEffect)((function(){var e=i().register({groupsDetailReducer:k.Br,groupDevicesInfoReducer:k.JR});return te((0,S.tF)(ee)),function(){null==e||e(),null==A||A(),te((0,S.Qo)())}}),[]),f().createElement(d.Fragment,null,f().createElement(g.Z,null,f().createElement(h.a,null,f().createElement(O.g,null,f().createElement(p.Link,{to:w._j.Xx},"Groups")),f().createElement(O.g,{isActive:!0},!1===re?ne:f().createElement(y.O,null)))),f().createElement(b.Z,{className:"edge-groups--detail"},f().createElement(D.K,{hasGutter:!0},f().createElement(P.v,{className:"edge-groups--detail__info"},f().createElement(z,{uuid:ee})),f().createElement(P.v,{isFilled:!0},f().createElement(V.Z,{ref:$,page:1,tableProps:{canSelectAll:!1},hideFilters:{all:!0},getEntities:function(){var e=c()(l().mark((function e(t,n){var r,a,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,J.kr)(ee,{});case 2:return r=e.sent,a=r.results,e.next=6,null==T?void 0:T((a||[]).map((function(e){return e.uuid})),Q(Q({},n),{},{hasItems:!0}),!1);case 6:return c=e.sent,e.abrupt("return",Q(Q({},c),{},{results:c.results.map((function(e){return Q(Q({},e),a.find((function(t){return t.uuid===e.id})))}))}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),filterConfig:{items:[{label:null==G||null===(e=G.name)||void 0===e?void 0:e.label,filterValues:{key:"text-filter",onChange:function(e,t){return B((function(){return Q(Q({},G),{},{name:Q(Q({},(null==G?void 0:G.name)||{}),{},{value:t})})}))},value:(null==G||null===(t=G.name)||void 0===t?void 0:t.value)||""}},{label:null==G||null===(n=G.version)||void 0===n?void 0:n.label,type:"checkbox",filterValues:{onChange:function(e,t){return B((function(){return Q(Q({},G||{}),{},{version:Q(Q({},(null==G?void 0:G.version)||{}),{},{value:t})})}))},value:(null==G||null===(r=G.version)||void 0===r?void 0:r.value)||[],items:[{label:"All versions",value:"all"}]}},{label:null==G||null===(a=G.status)||void 0===a?void 0:a.label,type:"checkbox",filterValues:{onChange:function(e,t){return B((function(){return Q(Q({},G||{}),{},{status:Q(Q({},(null==G?void 0:G.status)||{}),{},{value:t})})}))},items:M.Op.map((function(e){return{value:e,label:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}})),value:(null==G||null===(u=G.status)||void 0===u?void 0:u.value)||[]}}]},activeFiltersConfig:Q(Q({},(0,M.pM)(G)&&{filters:(0,M.I)(G)}),{},{onDelete:function(e,t,n){B(n?K:function(){return(0,M.Jr)(G,t)})}}),onRowClick:function(e,t){return X.push("/groups/".concat(ee,"/").concat(t))},onLoad:function(e){var t=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES,r=e.api;_((function(){return null==r?void 0:r.getEntities})),F((function(){return i().register(Q({},t((0,W.z)(n))))}))}},f().createElement(j.zx,{onClick:function(){return R(!0)}},"Add device"))))),x&&f().createElement(d.Suspense,{fallback:""},f().createElement(U,{selectedSystems:le,schema:H,isOpened:x,title:"Add new device",onAction:function(e,t){e&&c()(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,J.mD)({uuid:ee,systemIDs:t.selected});case 2:te((0,S.tF)(ee)),$.current.onRefreshData();case 4:case"end":return e.stop()}}),e)})))(),R(!1)}})))}}}]);
//# sourceMappingURL=GroupsDetailPage.d3a15f7098db36c14a0f.js.map
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[673],{7989:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var l=n(1427),r=n.n(l),a=n(55399),c=n(50693),u=n(16475),o=n(64029),i=n(32835),s=n(75061),m=n(73559),d=n(68433),v=n(44510),p=n(58135),E=n(69859);const f=function(){var e=(0,a.useParams)(),t=e.inventoryId,n=e.uuid,f=(0,E.useSelector)((function(e){var t,n=e.entityDetails;return null==n||null===(t=n.entity)||void 0===t?void 0:t.display_name})),h=(0,E.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.name}));return(0,l.useEffect)((function(){var e,t;null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail")}),[]),(0,l.useEffect)((function(){var e,n,l;null===(e=insights)||void 0===e||null===(n=e.chrome)||void 0===n||null===(l=n.appObjectId)||void 0===l||l.call(n,t)}),[t]),r().createElement(p.c0,{hideInvLink:!0,showTags:!0,onLoad:function(e){var t=e.mergeWithDetail;(0,s.JH)().register(t())}},r().createElement(d.m,null,r().createElement(o.a,{ouiaId:"systems-list"},r().createElement(i.g,null,r().createElement(a.Link,{to:"/groups"},"Groups")),r().createElement(i.g,null,h?r().createElement(a.Link,{to:"/groups/".concat(n)},h):r().createElement(m.O,{size:m.i.xs})),r().createElement(i.g,{isActive:!0},r().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},f||r().createElement(m.O,{size:m.i.xs})))),r().createElement(p.$w,{fallback:"",hideBack:!0,showTags:!0,hideInvLink:!0,hideInvDrawer:!0})),r().createElement(v.o,null,r().createElement(c.r,{gutter:"md"},r().createElement(u.P,{span:12},r().createElement(p.my,{showTags:!0,fallback:""})))))}},56311:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var l=n(87757),r=n.n(l),a=n(48926),c=n.n(a),u=n(59713),o=n.n(u),i=n(6479),s=n.n(i),m=n(63038),d=n.n(m),v=n(1427),p=n.n(v),E=n(55399),f=n(69859),h=n(68433),g=n(44510),b=n(64029),D=n(32835),O=n(15209),y=n(49739),k=n(83826),w=n(47173),P=n(75061),L=n(60306),x=n(4250),_=n(96416),S=n(50693),T=n(16475),I=n(32203),R=n(62394),j=n(70401),C=n(60485),A=n(52643),N=n(68774),q=n(68340),F=n(45454),G=n(25834),z=n(45697),H=function(e){var t=e.uuid,n=(0,f.useDispatch)(),l=(0,f.useSelector)((function(e){var t=e.groupDevicesInfoReducer;return null==t?void 0:t.isLoading})),r=(0,f.useSelector)((function(e){var t=e.groupDevicesInfoReducer;return null==t?void 0:t.devicesInfo}));return(0,v.useEffect)((function(){n((0,x.MW)())}),[]),p().createElement(S.r,{hasGutter:!0},p().createElement(T.P,{span:3},p().createElement(I.Z,null,p().createElement(j.O,null,p().createElement(C.D,{headingLevel:"h3"},"Health threshold")),p().createElement(R.e,null))),p().createElement(T.P,{span:3},p().createElement(I.Z,null,p().createElement(j.O,null,p().createElement(C.D,{headingLevel:"h3"},"Devices info")),p().createElement(R.e,null,p().createElement(N.D,null,p().createElement(G.G,{component:G.F.dl},p().createElement(F.T,{component:F.v.dt},!1===l?p().createElement(q.x,{component:q.q.h1},null==r?void 0:r.total):p().createElement(O.O,null)),p().createElement(F.T,{component:F.v.dd},p().createElement(q.x,{component:q.q.h3},"Total devices")),p().createElement(F.T,{component:F.v.dt},!1===l?p().createElement(q.x,{component:q.q.h1},p().createElement(E.Link,{to:"/groups/".concat(t)},null==r?void 0:r.newDevices)):p().createElement(O.O,null)),p().createElement(F.T,{component:F.v.dd},"New devices added"),p().createElement(F.T,{component:F.v.dt},!1===l?p().createElement(q.x,{component:q.q.h1},p().createElement(E.Link,{to:"/groups/".concat(t)},null==r?void 0:r.offlineDevices)):p().createElement(O.O,null)),p().createElement(F.T,{component:F.v.dd},"Devices offline"),p().createElement(F.T,{component:F.v.dt},!1===l?p().createElement(q.x,{component:q.q.h1},p().createElement(E.Link,{to:"/groups/".concat(t)},null==r?void 0:r.deliveringDevices)):p().createElement(O.O,null)),p().createElement(F.T,{component:F.v.dd},"Devices on the way")))))),p().createElement(T.P,{span:6},p().createElement(I.Z,{className:"edge-groups--detail__complex"},p().createElement(j.O,null,p().createElement(S.r,null,p().createElement(T.P,{span:6},p().createElement(C.D,{headingLevel:"h3"},"Canary parameters")),p().createElement(T.P,{span:6},p().createElement(C.D,{headingLevel:"h3"},"Last Canaries")))),p().createElement(R.e,null,p().createElement(S.r,{hasGutter:!0},p().createElement(T.P,{span:6},p().createElement(C.D,{headingLevel:"h3"},p().createElement(A.b,null,p().createElement(N.D,null,p().createElement(q.x,{component:q.q.h1},p().createElement(A.b,null,"10% (89)")),p().createElement(q.x,{component:q.q.h4},p().createElement(A.b,null,"Of systems tested")))))),p().createElement(T.P,{span:6}))))))};H.propTypes={uuid:n.n(z)().string};const J=H;var V=n(58135),W=n(67139);const Z={fields:[{component:n(86163).k,name:"select-system"}]};var B=n(83958),M=n(8969);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=(0,v.lazy)((function(){return Promise.all([n.e(410),n.e(0),n.e(242),n.e(459)]).then(n.bind(n,75459))})),X={name:{label:"Name",value:""},version:{label:"Version",value:[]},status:{label:"Status",value:[]}};const $=function(){var e,t,n,l,a,u,o=(0,v.useState)(!1),i=d()(o,2),m=i[0],S=i[1],T=(0,v.useState)(X),I=d()(T,2),R=I[0],j=I[1],C=(0,E.useHistory)(),A=(0,v.useRef)(null),N=(0,E.useParams)().uuid,q=(0,f.useDispatch)(),F=(0,f.useSelector)((function(e){var t=e.groupsDetailReducer;return(null==t?void 0:t.name)||""})),G=(0,f.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.isLoading})),z=(0,f.useSelector)((function(e){var t,n=e.groupsDetailReducer;return null==n||null===(t=n.devices)||void 0===t?void 0:t.map((function(e){return K({id:e.uuid},s()(e,["uuid"]))}))}),f.shallowEqual);return(0,v.useEffect)((function(){(0,P.JH)().register({groupsDetailReducer:_.Br,groupDevicesInfoReducer:_.JR}),q((0,x.tF)(N))}),[]),p().createElement(v.Fragment,null,p().createElement(h.m,null,p().createElement(b.a,null,p().createElement(D.g,null,p().createElement(E.Link,{to:L._j.Xx},"Groups")),p().createElement(D.g,{isActive:!0},!1===G?F:p().createElement(O.O,null)))),p().createElement(g.o,{className:"edge-groups--detail"},p().createElement(y.K,{hasGutter:!0},p().createElement(k.v,{className:"edge-groups--detail__info"},p().createElement(J,{uuid:N})),p().createElement(k.v,{isFilled:!0},p().createElement(V.e_,{ref:A,items:z||[],total:(null==z?void 0:z.length)||0,page:1,tableProps:{canSelectAll:!1},isLoaded:!G,onRefresh:function(e,t){!t&&A&&A.current?A.current.onRefreshData(e):t&&t(e)},filterConfig:{items:[{label:null==R||null===(e=R.name)||void 0===e?void 0:e.label,filterValues:{key:"text-filter",onChange:function(e,t){return j((function(){return K(K({},R),{},{name:K(K({},(null==R?void 0:R.name)||{}),{},{value:t})})}))},value:(null==R||null===(t=R.name)||void 0===t?void 0:t.value)||""}},{label:null==R||null===(n=R.version)||void 0===n?void 0:n.label,type:"checkbox",filterValues:{onChange:function(e,t){return j((function(){return K(K({},R||{}),{},{version:K(K({},(null==R?void 0:R.version)||{}),{},{value:t})})}))},value:(null==R||null===(l=R.version)||void 0===l?void 0:l.value)||[],items:[{label:"All versions",value:"all"}]}},{label:null==R||null===(a=R.status)||void 0===a?void 0:a.label,type:"checkbox",filterValues:{onChange:function(e,t){return j((function(){return K(K({},R||{}),{},{status:K(K({},(null==R?void 0:R.status)||{}),{},{value:t})})}))},items:M.Op.map((function(e){return{value:e,label:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}})),value:(null==R||null===(u=R.status)||void 0===u?void 0:u.value)||[]}}]},activeFiltersConfig:K(K({},(0,M.pM)(R)&&{filters:(0,M.I)(R)}),{},{onDelete:function(e,t,n){j(n?X:function(){return(0,M.Jr)(R,t)})}}),onRowClick:function(e,t){return C.push("/groups/".concat(N,"/").concat(t))},onLoad:function(e){var t=e.mergeWithEntities,n=e.INVENTORY_ACTION_TYPES;(0,P.JH)().register(K({},t((0,W.z)(n))))}},p().createElement(w.zx,{onClick:function(){return S(!0)}},"Add device"))))),m&&p().createElement(v.Suspense,{fallback:""},p().createElement(U,{selectedSystems:z,schema:Z,isOpened:m,title:"Add new device",onAction:function(e,t){e&&c()(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,B.mD)({uuid:N,systemIDs:t.selected});case 2:q((0,x.tF)(N));case 3:case"end":return e.stop()}}),e)})))(),S(!1)}})))}}}]);
//# sourceMappingURL=GroupsDetailPage.39e037649c7dac202fc9.js.map
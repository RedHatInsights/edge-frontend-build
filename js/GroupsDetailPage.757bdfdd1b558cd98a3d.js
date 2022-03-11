"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[673],{38857:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var a=n(4942),l=n(15861),r=n(29439),i=n(87757),o=n.n(i),u=n(93264),c=n.n(u),s=n(75662),d=n(50693),m=n(16475),p=n(64029),v=n(32835),f=n(69174),g=n(52643),E=n(2372),b=n(56455),y=n(48716),h=n(38775),O=n(53895),I=n(82041),D=n(87462),S=n(91290),P=n(35224),C=n(79706),k=n(47173),Z=n(45697),j=n.n(Z),w=function(e){var t=e.title,n=e.content;return c().createElement(c().Fragment,null,c().createElement("span",null,t),c().createElement(C.J,{headerContent:c().createElement("div",null,t),bodyContent:c().createElement("div",null,n)},c().createElement(k.zx,{variant:"plain","aria-label":"Action for ".concat(t),className:"ins-active-general_information__popover-icon"},c().createElement(S.ZP,null))))};w.propTypes={title:j().string,content:j().string};const _=w;var N=n(35451),R=n(84564),U=n(18802),T=function(e){var t=e.status;return"green"===t?c().createElement(c().Fragment,null,c().createElement(N.ZP,{color:"green",className:"pf-u-mr-sm"}),c().createElement("span",{className:"pf-u-success-color-200"},"Passed")):"red"===t?c().createElement(c().Fragment,null,c().createElement(R.ZP,{color:"red",className:"pf-u-mr-sm"}),c().createElement("span",{className:"pf-u-danger-color-200"},"Failed and reverted")):c().createElement(c().Fragment,null,c().createElement(U.ZP,{className:"pf-u-mr-sm"}),c().createElement("span",null,"Waiting for update"))};T.propTypes={status:j().string};const L=T;var x=n(58753),A=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736)]).then(n.bind(n,92373))})),M=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736)]).then(n.bind(n,20786))})),F=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252)]).then(n.bind(n,18569))})),B=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252)]).then(n.bind(n,91768))})),z=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252)]).then(n.bind(n,38514))})),G=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252)]).then(n.bind(n,10392))})),W=(0,u.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(570)]).then(n.bind(n,84570))}));const q=function(){var e=(0,I.useSelector)((function(e){var t=e.permissionsReducer;return null==t?void 0:t.writePermissions})),t=(0,I.useSelector)((function(e){var t,n=e.systemProfileStore;return{greenbootStatus:null==n||null===(t=n.systemProfile)||void 0===t?void 0:t.greenboot_status,rhcHealth:null}})),n=t.greenbootStatus,a=t.rhcHealth;return c().createElement(u.Suspense,{fallback:""},c().createElement(A,{store:(0,I.useStore)(),writePermissions:e,SystemCardWrapper:function(e){return c().createElement(u.Suspense,{fallback:""},c().createElement(M,(0,D.Z)({},e,{hasCPUs:!1,hasSockets:!1,hasCores:!1,hasCPUFlags:!1,hasRAM:!1,hasSAP:!1,extra:[{title:c().createElement(_,{title:"GreenBoot Status",content:"This is a description about greenboot status"}),value:c().createElement(L,{status:n})}]})))},OperatingSystemCardWrapper:function(e){return c().createElement(u.Suspense,{fallback:""}," ",c().createElement(G,e))},BiosCardWrapper:function(e){return c().createElement(u.Suspense,{fallback:""}," ",c().createElement(W,e))},InfrastructureCardWrapper:function(e){return c().createElement(u.Suspense,{fallback:""},c().createElement(B,e))},ConfigurationCardWrapper:function(e){return c().createElement(u.Suspense,{fallback:""},c().createElement(F,(0,D.Z)({},e,{hasKernelModules:!0})))},CollectionCardWrapper:function(e){return c().createElement(u.Suspense,{fallback:""},c().createElement(z,(0,D.Z)({},e,{extra:[{title:"RHC Health (broker functioning)",value:x.qi[null==a?void 0:a.toUpperCase()]||c().createElement(P.u,{content:"Unknown service status"},c().createElement(S.ZP,{className:"ins-c-inventory__detail--unknown"}))}]})))}}))};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=(0,n(18546).Gg)({LOAD_ENTITY_FULFILLED:function(e){return Q(Q({},e),{},{loaded:!0,activeApps:[{title:"General information",name:"general_information",component:q}]})}}),K=n(59245),$=n(32002),J=n(14638),Y=n(28883),X=n(29873),ee=n(33902),te=n(22663),ne=n(87116),ae=n(86350),le=n(94768),re=n(80236),ie=n(68340),oe=n(68774),ue=n(78140),ce=n(25834),se=n(29390),de=n(68920),me=n(5230),pe=n(94778),ve=n(83215),fe=n(66702);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=function(e){var t,n,a,l,r,i,o=e.updateCveModal,s=e.setUpdateCveModal,d=e.setReload,m=(0,I.useDispatch)(),p=(0,u.useContext)(K.g).getRegistry,v=(0,I.useSelector)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),I.shallowEqual).data;(0,u.useEffect)((function(){var e=p().register({imageDetailReducer:me.OD});return(null==o?void 0:o.imageId)&&(0,pe.J_)(m,null==o?void 0:o.imageId),function(){return e()}}),[m]);var f=function(){s((function(e){return Ee(Ee({},e),{},{isOpen:!1})}))};return v?c().createElement(re.u,{variant:"medium",title:"Update image: ".concat(null==v||null===(t=v.image)||void 0===t?void 0:t.Name),description:"Review the information and click Create image to start the build process",isOpen:o.isOpen,onClose:f,actions:[c().createElement(k.zx,{key:"confirm",variant:"primary",onClick:function(){var e,t,n,a,l,r,i,o,u,c,s={Id:null==v||null===(e=v.image)||void 0===e?void 0:e.ID,description:null==v||null===(t=v.image)||void 0===t?void 0:t.Description,name:null==v||null===(n=v.image)||void 0===n?void 0:n.Name,version:(null==v||null===(a=v.image)||void 0===a?void 0:a.Version)+1,architecture:"x86_64",credentials:null==v||null===(l=v.image)||void 0===l?void 0:l.Installer.SshKey,username:null==v||null===(r=v.image)||void 0===r?void 0:r.Installer.Username,imageType:null==v||null===(i=v.image)||void 0===i?void 0:i.OutputTypes,"selected-packages":null==v||null===(o=v.image)||void 0===o||null===(u=o.Packages)||void 0===u?void 0:u.map((function(e){return{name:e.Name}})),release:null==v||null===(c=v.image)||void 0===c?void 0:c.Distribution};f(),d(!0),(0,pe.Es)(m,s,(function(e){var t,n;m(Ee(Ee({},(0,ve.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,fe.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,ve.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,ve.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,pe.n9)(e)}]}}}})),(0,pe.n9)(m),m((0,pe.Fj)({name:null==v||null===(t=v.image)||void 0===t?void 0:t.Name,id:null==v||null===(n=v.image)||void 0===n?void 0:n.ID}))}))}},"Create Image"),c().createElement(k.zx,{key:"cancel",variant:"link",onClick:f},"Cancel")]},c().createElement(oe.D,null,c().createElement(ue.T,{component:ie.q.h3},c().createElement(ie.x,{component:"b"},"Details")),c().createElement(ce.G,{component:ce.F.dl},c().createElement(ue.T,{component:ue.v.dt},"Name"),c().createElement(ue.T,{component:ue.v.dd},null==v||null===(n=v.image)||void 0===n?void 0:n.Name),c().createElement(ue.T,{component:ue.v.dt},"Version"),c().createElement(ue.T,{component:ue.v.dd},(null==v||null===(a=v.image)||void 0===a?void 0:a.Version)+1),c().createElement(ue.T,{component:ue.v.dt},"Description"),c().createElement(ue.T,{component:ue.v.dd},null==v||null===(l=v.image)||void 0===l?void 0:l.Description)),c().createElement(ue.T,{component:ie.q.h3},c().createElement(ie.x,{component:"b"},"Output")),c().createElement(ce.G,{component:ce.F.dl},c().createElement(ue.T,{component:ue.v.dt},"Release"),c().createElement(ue.T,{component:ue.v.dd},de.Ei[null==v||null===(r=v.image)||void 0===r?void 0:r.Distribution]),c().createElement(ue.T,{component:ue.v.dt},"Output type"),c().createElement(ue.T,{component:ue.v.dd},de.bd[null==v||null===(i=v.image)||void 0===i?void 0:i.ImageType])),c().createElement(ue.T,{component:ie.q.h3},c().createElement(ie.x,{component:"b"},"Packages")),c().createElement(ce.G,{component:ce.F.dl},c().createElement(ue.T,{component:ue.v.dt},"Updated"),c().createElement(ue.T,{className:"pf-u-pl-lg",component:ue.v.dd},null==o?void 0:o.cveCount)))):c().createElement(se.Y,null,c().createElement(g.b,null,c().createElement(E.$,{isSVG:!0,diameter:"100px"})))};be.propTypes={updateCveModal:j().shape({isOpen:j().bool.isRequired,imageId:j().string,cveCount:j().number}).isRequired,setUpdateCveModal:j().func.isRequired,setReload:j().bool};const ye=be;function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=function(e){var t=e.systemProfile,n=e.setUpdateModal,a=e.imageId,i=e.setReload,d=(0,s.useRouteMatch)("/inventory/:deviceId").params,m=(0,u.useContext)(K.g).getRegistry,p=(0,u.useState)({isOpen:!1,imageId:null,cveCount:0}),v=(0,r.Z)(p,2),f=v[0],g=v[1],E=(0,u.useState)(null),b=(0,r.Z)(E,2),y=b[0],h=b[1],O=(0,u.useState)(null),I=(0,r.Z)(O,2),D=I[0],S=I[1],P=(0,u.useState)("noAlert"),C=(0,r.Z)(P,2),Z=C[0],j=C[1];(0,u.useEffect)((function(){g((function(e){return Oe(Oe({},e),{},{imageId:a})}))}),[a]),(0,u.useEffect)((function(){(0,l.Z)(o().mark((function e(){var n,a,l,r,i,u,c,s,d,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&t.system_profile){e.next=2;break}return e.abrupt("return");case 2:return d={id:null==t||null===(n=t.system_profile)||void 0===n||null===(a=n.image_data)||void 0===a||null===(l=a.ImageInfo)||void 0===l||null===(r=l.Image)||void 0===r?void 0:r.ImageSetID},e.next=5,(0,fe.dt)(d);case 5:m=e.sent,S(null==m||null===(i=m.Data)||void 0===i||null===(u=i.images)||void 0===u||null===(c=u[0])||void 0===c||null===(s=c.image)||void 0===s?void 0:s.Status);case 7:case"end":return e.stop()}}),e)})))()}),[t]),(0,u.useEffect)((function(){var e;(null==y||!y.isLoading)&&(null==y||null===(e=y.meta)||void 0===e||!e.filter)&&g((function(e){var t;return Oe(Oe({},e),{},{cveCount:null==y||null===(t=y.data)||void 0===t?void 0:t.length})})),j((function(e){return function(e,t,n,a,l){var r,i,o,u,c,s,d,m;return null!=e&&e.isLoading||null!=e&&null!==(r=e.meta)&&void 0!==r&&r.filter||null==t||!t.system_profile?l:!(null!=e&&null!==(i=e.data)&&void 0!==i&&i.length)>0||!a?"noAlert":"BUILDING"===(null==t||null===(o=t.system_profile)||void 0===o?void 0:o.status)||"CREATED"===(null==t||null===(u=t.system_profile)||void 0===u?void 0:u.status)?"systemUpdating":(null==t||null===(c=t.system_profile)||void 0===c||null===(s=c.image_data)||void 0===s||null===(d=s.ImageInfo)||void 0===d||null===(m=d.UpdatesAvailable)||void 0===m?void 0:m.length)>0?"updateDevice":"BUILDING"===n||"CREATED"===n?"imageBuilding":"updateImage"}(y,t,D,a,e)}))}),[y,t,D]);var w={updateImage:c().createElement(ne.b,{className:"pf-u-mb-md",variant:"info",isInline:!0,title:"To remediate CVEs, update the image.",actionLinks:c().createElement(k.zx,{className:"pf-u-mt-sm",isSmall:!0,onClick:function(){g((function(e){return Oe(Oe({},e),{},{isOpen:!0})}))}},"Update Image")}),imageBuilding:c().createElement(ne.b,{className:"pf-u-mb-md",customIcon:c().createElement(le.ZP,null),variant:"info",isInline:!0,title:"Image build in progress. Once completed, you'll need to update your device."}),updateDevice:c().createElement(ne.b,{className:"pf-u-mb-md",variant:"warning",isInline:!0,title:" Image build completed. Update device to the newest image version to remediate CVEs.",actionLinks:c().createElement(k.zx,{className:"pf-u-mt-sm",isSmall:!0,onClick:function(){n((function(e){return Oe(Oe({},e),{},{isOpen:!0})}))}},"Update Device")}),systemUpdating:c().createElement(ne.b,{className:"pf-u-mb-md",customIcon:c().createElement(le.ZP,null),variant:"info",isInline:!0,title:"Device updating. No additional actions required."}),noAlert:c().createElement(c().Fragment,null)};return c().createElement(c().Fragment,null,c().createElement(ae.Z,{className:"add-100vh"},w[Z],c().createElement(te.Z,{appName:"vulnerability",module:"./SystemDetail",getRegistry:m,customIntlProvider:!0,entity:{id:d.deviceId},canSelect:!1,canEditPairStatus:!1,canManageColumns:!1,linkToCustomerPortal:!0,defaultColumns:["synopsis","public_date","impact","cvss_score","advisory"],filters:["filter","security_rule","known_exploit","impact","cvss_score","advisory"],customAction:function(e){h(e)}})),f.isOpen&&c().createElement(ye,{updateCveModal:f,setUpdateCveModal:g,setReload:i}))};Ie.propTypes={imageId:j().string,systemProfile:j().object,setUpdateModal:j().func,setReload:j().bool};const De=Ie;var Se=function(e){var t=e.systemProfile,n=e.imageId,a=e.setUpdateModal,l=e.setReload,i=(0,u.useState)(0),o=(0,r.Z)(i,2),s=o[0],d=o[1];return c().createElement("div",{className:"edge-c-device--detail add-100vh"},c().createElement(J.m,{className:"pf-u-ml-md",activeKey:s,onSelect:function(e,t){return d(t)}},c().createElement(Y.O,{eventKey:0,title:c().createElement(X.T,null,"Details")},c().createElement(ee.Z,{showTags:!0,fallback:""})),c().createElement(Y.O,{eventKey:1,title:c().createElement(X.T,null,"Vulnerability")},c().createElement(De,{systemProfile:t,setUpdateModal:a,imageId:n,setReload:l}))))};Se.propTypes={imageId:j().string,systemProfile:j().object,setUpdateModal:j().func,setReload:j().bool};const Pe=Se;var Ce=n(19694);function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=c().lazy((function(){return Promise.all([n.e(410),n.e(736),n.e(735),n.e(344)]).then(n.bind(n,79358))}));const we=function(){var e,t,n,a,i,D,S,P,C,k,Z,j,w,_,R,T,L,x,A,M,F,B,z,G,W,q,V,Q,J,Y,X=(0,u.useState)(null),ee=(0,r.Z)(X,2),te=ee[0],ne=ee[1],ae=(0,u.useContext)(K.g).getRegistry,le=(0,s.useParams)(),re=le.inventoryId,ie=le.uuid,oe=(0,I.useSelector)((function(e){var t=e.entityDetails;return null==t?void 0:t.entity})),ue=(0,I.useSelector)((function(e){var t=e.groupsDetailReducer;return null==t?void 0:t.name})),ce=(0,I.useSelector)((function(e){var t,n=e.entityDetails;return null==n||null===(t=n.entity)||void 0===t?void 0:t.id})),se=(0,u.useState)({isOpen:!1,deviceData:null}),de=(0,r.Z)(se,2),me=de[0],pe=de[1],ve=(0,u.useState)(!0),ge=(0,r.Z)(ve,2),Ee=ge[0],be=ge[1],ye=(0,u.useState)(!1),he=(0,r.Z)(ye,2),Oe=he[0],Ie=he[1];return(0,u.useEffect)((function(){var e,t;insights.chrome.registerModule("inventory"),null===(e=insights.chrome)||void 0===e||null===(t=e.hideGlobalFilter)||void 0===t||t.call(e,!0),insights.chrome.appAction("system-detail")}),[]),(0,u.useEffect)((function(){(0,l.Z)(o().mark((function e(){var t,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=oe&&oe.display_name){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,fe.Z4)(ce);case 4:a=e.sent,be(!1),pe((function(e){var t,n,l,r;return Ze(Ze({},e),{},{deviceData:{display_name:oe.display_name,id:oe.id,system_profile:{image_data:a,status:null==a||null===(t=a.UpdateTransactions)||void 0===t||null===(n=t[a.UpdateTransactions.length-1])||void 0===n?void 0:n.Status}},imageData:null==a||null===(l=a.ImageInfo)||void 0===l||null===(r=l.UpdatesAvailable)||void 0===r?void 0:r[0]})})),ne(null==a||null===(t=a.ImageInfo)||void 0===t||null===(n=t.Image)||void 0===n?void 0:n.ID);case 8:case"end":return e.stop()}}),e)})))()}),[oe,Oe]),(0,u.useEffect)((function(){var e,t,n;null===(e=insights)||void 0===e||null===(t=e.chrome)||void 0===t||null===(n=t.appObjectId)||void 0===n||n.call(t,re)}),[re]),c().createElement(c().Fragment,null,c().createElement(h.Z,{hideInvLink:!0,showTags:!0,onLoad:function(e){var t=e.mergeWithDetail;ae().register(Ze({systemProfileStore:$.ZP},t(H)))}},c().createElement(y.Z,null,c().createElement(p.a,{ouiaId:"systems-list"},c().createElement(v.g,null,c().createElement(s.Link,{to:ie?"/groups":"/inventory"},ie?"Groups":"Inventory")),ie&&c().createElement(v.g,null,ue?c().createElement(s.Link,{to:"/groups/".concat(ie)},ue):c().createElement(b.Z,{size:b.i.xs})),c().createElement(v.g,{isActive:!0},c().createElement("div",{className:"ins-c-inventory__detail--breadcrumb-name"},(null==oe?void 0:oe.display_name)||c().createElement(b.Z,{size:b.i.xs})))),c().createElement(O.Z,{fallback:"",actions:[{title:"Update",isDisabled:"BUILDING"===(null===(e=me.deviceData)||void 0===e||null===(t=e.system_profile)||void 0===t||null===(n=t.image_data)||void 0===n||null===(a=n.UpdateTransactions)||void 0===a||null===(i=a[(null===(D=me.deviceData)||void 0===D||null===(S=D.system_profile)||void 0===S||null===(P=S.image_data)||void 0===P?void 0:P.UpdateTransactions.length)-1])||void 0===i?void 0:i.Status)||"CREATED"===(null===(C=me.deviceData)||void 0===C||null===(k=C.system_profile)||void 0===k||null===(Z=k.image_data)||void 0===Z||null===(j=Z.UpdateTransactions)||void 0===j||null===(w=j[(null===(_=me.deviceData)||void 0===_||null===(R=_.system_profile)||void 0===R||null===(T=R.image_data)||void 0===T?void 0:T.UpdateTransactions.length)-1])||void 0===w?void 0:w.Status)||!(null!==(L=me.deviceData)&&void 0!==L&&null!==(x=L.system_profile)&&void 0!==x&&null!==(A=x.image_data)&&void 0!==A&&null!==(M=A.ImageInfo)&&void 0!==M&&null!==(F=M.UpdatesAvailable)&&void 0!==F&&F.length)>0,onClick:function(){pe((function(e){return Ze(Ze({},e),{},{isOpen:!0})}))}}],hideBack:!0,hideInvDrawer:!0}),Ee?c().createElement(b.Z,{size:b.i.xs}):"BUILDING"===(null==me||null===(B=me.deviceData)||void 0===B||null===(z=B.system_profile)||void 0===z?void 0:z.status)||"CREATED"===(null==me||null===(G=me.deviceData)||void 0===G||null===(W=G.system_profile)||void 0===W?void 0:W.status)?c().createElement(f._,{className:"pf-u-mt-sm",color:"blue",icon:c().createElement(U.ZP,null)},"Updating"):(null==me||null===(q=me.deviceData)||void 0===q||null===(V=q.system_profile)||void 0===V||null===(Q=V.image_data)||void 0===Q||null===(J=Q.ImageInfo)||void 0===J||null===(Y=J.UpdatesAvailable)||void 0===Y?void 0:Y.length)>0?c().createElement(f._,{className:"pf-u-mt-sm",color:"orange",icon:c().createElement(Ce.ZP,null)},"Update Available"):c().createElement(f._,{className:"pf-u-mt-sm",color:"green",icon:c().createElement(N.ZP,{color:"green"})},"Running")),c().createElement(d.r,{gutter:"md"},c().createElement(m.P,{span:12},c().createElement(Pe,{systemProfile:null==me?void 0:me.deviceData,imageId:te,setUpdateModal:pe,setReload:Ie}))),me.isOpen&&c().createElement(u.Suspense,{fallback:c().createElement(g.b,null,c().createElement(E.$,null))},c().createElement(je,{navigateBack:function(){history.push({pathname:history.location.pathname}),pe((function(e){return Ze(Ze({},e),{},{isOpen:!1})}))},setUpdateModal:pe,updateModal:me,refreshTable:function(){return Ie(!0)}}))))}},15656:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(4942),l=n(29439),r=n(93264),i=n.n(r),o=n(383),u=n(45697),c=n.n(u),s=n(82041),d=n(4147),m=n(75662),p=n(62410),v=n(27577),f=n(69174),g=n(52643),E=n(2372),b=n(94778),y=n(59245),h=n(5230),O=n(68778),I=n(69957),D=n(94768);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=i().lazy((function(){return Promise.all([n.e(410),n.e(736),n.e(735),n.e(344)]).then(n.bind(n,79358))})),k=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],Z=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,v.cellWidth)(35)]},{title:"Groups",type:"groups",sort:!1,columnTransforms:[(0,v.cellWidth)(15)]},{title:"Last Seen",type:"last_seen",sort:!0,columnTransforms:[(0,v.cellWidth)(15)]},{title:"Image",type:"image",sort:!1,columnTransforms:[(0,v.cellWidth)(20)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,v.cellWidth)(15)]}],j=function(e){var t=e.Device,n=w(t);return{booting:i().createElement(f._,{className:"pf-u-mt-sm",color:"blue",icon:i().createElement(D.ZP,{color:"blue"})},"Booting"),running:i().createElement(f._,{className:"pf-u-mt-sm",color:"green",icon:i().createElement(O.ZP,{color:"green"})},"Running"),updateAvailable:i().createElement(f._,{className:"pf-u-mt-sm",color:"orange",icon:i().createElement(I.ZP,null)},"Update Available")}[n]},w=function(e){var t,n;return null!=e&&null!==(t=e.ImageInfo)&&void 0!==t&&t.UpdatesAvailable?"updateAvailable":null!=e&&null!==(n=e.Device)&&void 0!==n&&n.Booted?"running":"booting"},_=function(e){var t=e.skeletonRowQuantity,n=(0,r.useContext)(y.g).getRegistry,a=(0,r.useState)([]),u=(0,l.Z)(a,2),c=u[0],v=u[1],f=(0,r.useState)([]),O=(0,l.Z)(f,2),I=O[0],D=O[1],S=(0,s.useDispatch)(),_=(0,r.useState)({isOpen:!1,deviceData:null,imageData:null}),N=(0,l.Z)(_,2),R=N[0],U=N[1],T=(0,s.useSelector)((function(e){var t,n,a=e.deviceTableReducer;return{count:(null==a||null===(t=a.data)||void 0===t?void 0:t.count)||0,data:(null==a||null===(n=a.data)||void 0===n?void 0:n.data)||null,isLoading:null==a?void 0:a.isLoading,hasError:null==a?void 0:a.hasError}}),s.shallowEqual),L=T.count,x=T.data,A=T.isLoading,M=T.hasError;return(0,r.useEffect)((function(){var e=n().register({deviceTableReducer:h.p});return(0,b.MQ)(S),function(){return e()}}),[I]),(0,r.useEffect)((function(){var e;x&&v(null==(e=x)?void 0:e.map((function(e){var t,n,a,l,r,o,u,c,s,v,f,g,E,b,y,h,O;return{id:null==e||null===(t=e.Device)||void 0===t?void 0:t.UUID,display_name:null==e||null===(n=e.Device)||void 0===n?void 0:n.DeviceName,updateImageData:null==e||null===(a=e.ImageInfo)||void 0===a||null===(l=a.UpdatesAvailable)||void 0===l?void 0:l[0],deviceStatus:w(e),noApiSortFilter:[null==e||null===(r=e.Device)||void 0===r?void 0:r.DeviceName,"",null==e||null===(o=e.Device)||void 0===o?void 0:o.LastSeen,(null==e||null===(u=e.ImageInfo)||void 0===u||null===(c=u.Image)||void 0===c?void 0:c.Name)||"",w(e)],cells:[{title:i().createElement(m.Link,{to:"".concat(d._j.OJ,"/").concat(null==e||null===(s=e.Device)||void 0===s?void 0:s.UUID)},null==e||null===(v=e.Device)||void 0===v?void 0:v.DeviceName)},{title:"-"},{title:i().createElement(p.Z,{date:null==e||null===(f=e.Device)||void 0===f?void 0:f.LastSeen})},{title:i().createElement(m.Link,{to:"".concat(d._j.gb,"/").concat(null==e||null===(g=e.ImageInfo)||void 0===g||null===(E=g.Image)||void 0===E?void 0:E.ImageSetID,"/versions/").concat(null==e||null===(b=e.ImageInfo)||void 0===b||null===(y=b.Image)||void 0===y?void 0:y.ID,"/details")},null==e||null===(h=e.ImageInfo)||void 0===h||null===(O=h.Image)||void 0===O?void 0:O.Name)},{title:i().createElement(j,{Device:e})}]}})))}),[x]),i().createElement(i().Fragment,null,i().createElement(o.Z,{apiFilterSort:!1,filters:k,loadTableData:b.MQ,tableData:{count:L,isLoading:A,hasError:M},columnNames:Z,rows:c||[],actionResolver:function(){return[{title:"Update Device",onClick:function(e,t,n){U((function(e){return P(P({},e),{},{isOpen:!0,deviceData:{id:null==n?void 0:n.id,display_name:null==n?void 0:n.display_name},imageData:null==n?void 0:n.updateImageData})}))}}]},areActionsDisabled:function(e){return"updateAvailable"!==(null==e?void 0:e.deviceStatus)},defaultSort:{index:2,direction:"desc"},hasCheckbox:!0,skeletonRowQuantity:t}),R.isOpen&&i().createElement(r.Suspense,{fallback:i().createElement(g.b,null,i().createElement(E.$,null))},i().createElement(C,{navigateBack:function(){history.push({pathname:history.location.pathname}),U((function(e){return P(P({},e),{},{isOpen:!1})}))},setUpdateModal:U,updateModal:R,refreshTable:function(){return D(!0)}})))};_.propTypes={imageData:c().object,urlParam:c().string,openUpdateWizard:c().func,skeletonRowQuantity:c().number};const N=_},99997:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(93264),l=n.n(a),r=n(48716),i=n(39173),o=n(86350),u=n(15656);const c=function(){return l().createElement(a.Fragment,null,l().createElement(r.Z,{className:"pf-m-light"},l().createElement(i.Z,{title:"Inventory"})),l().createElement(o.Z,{className:"edge-devices"},l().createElement(u.Z,null)))}},23537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(15861),l=n(29439),r=n(87757),i=n.n(r),o=n(93264),u=n.n(o),c=n(15209),s=n(28191),d=n(48716),m=n(39173),p=n(86350),v=n(45697),f=n.n(v),g=n(383),E=n(75662),b=n(4147),y=n(35224),h=[{label:"Name",type:"text"}],O=[{title:"Name",type:"name",sort:!0},{title:"Systems",type:"name",sort:!1},{title:"Image",type:"name",sort:!1}],I=function(e){var t=e.data,n=e.isLoading,a=e.openModal,l=e.handleRenameModal,r=t.map((function(e){var t=e.ID,n=e.Name,a=e.Devices,l=null!=a?a:[],r=u().createElement("div",null,u().createElement(y.u,{content:u().createElement("div",null,u().createElement("p",null,"Golden Image"),u().createElement("p",null," Super Golden Image"))},u().createElement("span",null,"Multiple images")));return{id:t,title:n,noApiSortFilter:[n],cells:[{title:u().createElement(E.Link,{to:"".concat(b._j.r9,"/").concat(t)},n)},{title:l.length},{title:1===t?r:"Golden image"}]}}));return u().createElement(g.Z,{apiFilterSort:!1,filters:h,tableData:{count:t.length,data:t,isLoading:n,hasError:!1},columnNames:O,rows:r,emptyFilterIcon:"",emptyFilterMessage:"No matching groups found",emptyFilterBody:"To continue, edit your filter settings and try again",actionResolver:function(e){var t=e.id,n=e.title;return[{title:"Rename",onClick:function(){return l(t,{name:n})}},{title:"Delete",onClick:function(){return console.log("updating")}}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"desc"},toolbarButtons:[{title:"Create group",click:a}]})};I.propTypes={data:f().array,openModal:f().func,isLoading:f().bool,handleRenameModal:f().func};const D=I;var S=n(3035),P=n(60722),C=n(66702),k=n(64124),Z=n(58061),j={title:"Create group",onSubmit:function(e){return(0,C.sS)(e)},submitLabel:"Create",initialValues:{}};const w=function(){var e=(0,o.useState)([]),t=(0,l.Z)(e,2),n=t[0],r=t[1],v=(0,o.useState)(!1),f=(0,l.Z)(v,2),g=f[0],E=f[1],b=(0,o.useState)(!0),y=(0,l.Z)(b,2),h=y[0],O=y[1],I=(0,o.useState)(j),w=(0,l.Z)(I,2),_=w[0],N=w[1],R=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.jA)();case 2:t=e.sent,r(t.data),O(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){R()}),[]),u().createElement(u().Fragment,null,u().createElement(d.Z,{className:"pf-m-light"},u().createElement(m.Z,{title:"Groups"})),u().createElement(p.Z,{className:"edge-devices"},h?u().createElement(c.O,null):(null==n?void 0:n.length)>0?u().createElement(D,{data:n,isLoading:h,handleRenameModal:function(e,t){N({title:"Rename group",onSubmit:function(t){return(0,C.OS)(e,t)},submitLabel:"Save",initialValues:t}),E(!0)},openModal:function(){N(j),E(!0)}}):u().createElement(s.k,{justifyContent:{default:"justifyContentCenter"}},u().createElement(S.Z,{icon:"module",title:"Create a system group",body:"Create system groups to help manage your devices more effectively",primaryAction:{text:"Create group",click:function(){return E(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"#"}]}))),u().createElement(P.Z,{isOpen:g,openModal:function(){return E(!1)},title:_.title,submitLabel:_.submitLabel,schema:{fields:[{component:"text-field",name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:k.Z.REQUIRED},Z.qg]}]},initialValues:_.initialValues,onSubmit:_.onSubmit,reloadData:function(){return R()}}))}},17761:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(15861),l=n(29439),r=n(87757),i=n.n(r),o=n(93264),u=n.n(o),c=n(64029),s=n(32835),d=n(56787),m=n(84457),p=n(75728),v=n(99355),f=n(28191),g=n(92298),E=n(15209),b=n(48716),y=n(39173),h=n(86350),O=n(3035),I=n(60722),D=n(75662),S=n(4147),P=n(5964),C=n(15656),k=n(66702);const Z=function(){var e,t=(0,o.useState)({}),n=(0,l.Z)(t,2),r=n[0],Z=n[1],j=(0,o.useState)(!1),w=(0,l.Z)(j,2),_=w[0],N=w[1],R=(0,o.useState)(!1),U=(0,l.Z)(R,2),T=U[0],L=U[1],x=(0,D.useParams)();return(0,o.useEffect)((function(){(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.groupId,e.next=3,(0,k.VL)(t);case 3:n=e.sent,Z(n);case 5:case"end":return e.stop()}}),e)})))()}),[]),u().createElement(u().Fragment,null,u().createElement(b.Z,{className:"pf-m-light"},null!=r&&r.Name?u().createElement(c.a,null,u().createElement(s.g,null,u().createElement(D.Link,{to:"".concat(S._j.r9)},"Fleet Management")),u().createElement(s.g,null,r.Name)):u().createElement(c.a,{isActive:!0},u().createElement(E.O,{width:"100px"})),u().createElement(f.k,{justifyContent:{default:"justifyContentSpaceBetween"}},u().createElement(g.B,null,null!=r&&r.Name?u().createElement(y.Z,{title:null==r?void 0:r.Name}):u().createElement(E.O,{width:"150px"})),u().createElement(g.B,null,u().createElement(d.L,{position:v.ir.right,toggle:u().createElement(p.Z,{id:"image-set-details-dropdown",toggleIndicator:P.ZP,onToggle:function(e){return N(e)},isDisabled:!1},"Actions"),isOpen:_,dropdownItems:[u().createElement(m.h,{key:"update-all-devices"},"Delete")]})))),u().createElement(h.Z,{className:"edge-devices"},(null==r||null===(e=r.devices)||void 0===e?void 0:e.length)>0?u().createElement(C.Z,null):u().createElement(f.k,{justifyContent:{default:"justifyContentCenter"}},u().createElement(O.Z,{icon:"cube",title:"Add systems to the group",body:"Create system groups to help manage your devices more effectively",primaryAction:{text:"Add systems",click:function(){return L(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"#"}]}))),u().createElement(I.Z,{isOpen:T,openModal:function(){return L(!1)},title:"Add systems",submitLabel:"Add selected",additionalMappers:{"device-table":{component:C.Z,skeletonRowQuantity:15}},schema:{fields:[{component:"device-table",name:"device-table"}]},onSubmit:function(){return console.log("submitted")},reloadData:function(){return console.log("data reloaded")},size:"large"}))}},14511:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(4942),l=n(29439),r=n(93264),i=n.n(r),o=n(48716),u=n(39173),c=n(86350),s=n(2372),d=n(52643),m=n(75662),p=n(59245),v=n(5230),f=n(383),g=n(45697),E=n.n(g),b=n(82041),y=n(4147),h=n(68340),O=n(35224),I=n(62410),D=n(9043),S=n(94778),P=n(27577),C=function(e){var t=e.index;return i().createElement("div",null,i().createElement(O.u,{content:i().createElement("div",null,"More options"),reference:function(){return document.getElementById("pf-dropdown-toggle-id-".concat(t))}}))};C.propTypes={index:E().number};var k=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],Z=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,P.cellWidth)(35)]},{title:"Current Version",type:"version",sort:!1,columnTransforms:[(0,P.cellWidth)(15)]},{title:"Last Updated",type:"updated_at",sort:!0,columnTransforms:[(0,P.cellWidth)(25)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,P.cellWidth)(30)]}],j=function(e){return e.map((function(e,t){var n=e.image_set,a=e.image_build_iso_url;return{id:null==n?void 0:n.ID,cells:[{title:i().createElement(m.Link,{to:"".concat(y._j.gb,"/").concat(null==n?void 0:n.ID)},null==n?void 0:n.Name)},null==n?void 0:n.Images[0].Version,{title:i().createElement(I.Z,{date:null==n?void 0:n.UpdatedAt})},{title:i().createElement(i().Fragment,null,i().createElement(C,{index:t}),i().createElement(D.Z,{status:null==n?void 0:n.Images[0].Status}))}],imageStatus:null==n?void 0:n.Images[0].Status,isoURL:a||null,latestImageID:null==n?void 0:n.Images[0].ID}}))},w=function(e){var t=e.openCreateWizard,n=e.openUpdateWizard,a=(0,b.useSelector)((function(e){var t,n,a=e.edgeImageSetsReducer;return{count:(null==a||null===(t=a.data)||void 0===t?void 0:t.Count)||0,data:(null==a||null===(n=a.data)||void 0===n?void 0:n.Data)||null,isLoading:void 0===(null==a?void 0:a.isLoading)||a.isLoading,hasError:null==a?void 0:a.hasError}}),b.shallowEqual),l=a.count,r=a.data,o=a.isLoading,u=a.hasError;return i().createElement(f.Z,{apiFilterSort:!0,filters:k,loadTableData:S.n9,tableData:{count:l,data:r,isLoading:o,hasError:u},columnNames:Z,rows:r?j(r):[],emptyStateMessage:"No images found",emptyStateActionMessage:"Create new image",emptyStateAction:t,actionResolver:function(e){var t=[];return null!=e&&e.isoURL&&t.push({title:i().createElement(h.x,{className:"force-text-black remove-underline",component:"a",href:e.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),"SUCCESS"!==(null==e?void 0:e.imageStatus)&&"ERROR"!==(null==e?void 0:e.imageStatus)||t.push({title:"Update Image",onClick:function(e,t,a){n(a.latestImageID)}}),"BUILDING"===(null==e?void 0:e.imageStatus)&&null!=e&&e.id&&t.push({title:""}),t},areActionsDisabled:function(e){return"BUILDING"===(null==e?void 0:e.imageStatus)},defaultSort:{index:2,direction:"desc"},toolbarButtons:[{title:"Create new image",click:function(){return t()}}]})};w.propTypes={clearFilters:E().func,openCreateWizard:E().func,openUpdateWizard:E().func,filters:E().array,pagination:E().shape({page:E().number,perPage:E().number})};const _=w;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=i().lazy((function(){return Promise.all([n.e(410),n.e(736),n.e(735),n.e(344)]).then(n.bind(n,49477))})),T=i().lazy((function(){return Promise.all([n.e(410),n.e(736),n.e(735),n.e(46)]).then(n.bind(n,53010))}));const L=function(){var e=(0,r.useContext)(p.g).getRegistry,t=(0,r.useState)(!1),n=(0,l.Z)(t,2),a=n[0],f=n[1],g=(0,r.useState)({isOpen:!1,imageId:null}),E=(0,l.Z)(g,2),b=E[0],y=E[1],h=(0,m.useHistory)();return(0,r.useEffect)((function(){var t=e().register({edgeImageSetsReducer:v.Mx});return function(){return t()}}),[]),i().createElement(r.Fragment,null,i().createElement(o.Z,{className:"pf-m-light"},i().createElement(u.Z,{title:"Images"})),i().createElement(c.Z,{className:"edge-devices"},i().createElement(_,{openCreateWizard:function(){h.push({pathname:h.location.pathname,search:new URLSearchParams({create_image:!0}).toString()}),f(!0)},openUpdateWizard:function(e){h.push({pathname:h.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),y({isOpen:!0,imageId:e})}})),a&&i().createElement(r.Suspense,{fallback:i().createElement(d.b,null,i().createElement(s.$,null))},i().createElement(U,{navigateBack:function(){h.push({pathname:h.location.pathname}),f(!1)}})),b.isOpen&&i().createElement(r.Suspense,{fallback:i().createElement(d.b,null,i().createElement(s.$,null))},i().createElement(T,{navigateBack:function(){h.push({pathname:h.location.pathname}),y((function(e){return R(R({},e),{},{isOpen:!1})}))},updateImageID:b.imageId})))}}}]);
//# sourceMappingURL=../sourcemaps/GroupsDetailPage.43a33b421e93c1452d7d64494d01d2f3.js.map
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1286],{8458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(87462),a=n(29439),i=n(92950),s=n.n(i),o=n(15656),u=n(96094),c=n(45697),d=n.n(c),l=n(8027),g=function(e){var t,n,i=(0,u.Z)({api:null!=e&&e.groupUUID?l.n3:l.$v,id:null!=e&&e.groupUUID?null==e?void 0:e.groupUUID.toString():"",tableReload:!0}),c=(0,a.Z)(i,2),d=c[0],g=c[1],p=d.data,v=d.isLoading,f=d.hasError;return s().createElement(o.default,(0,r.Z)({isLoading:v,hasError:f,count:null==p?void 0:p.count,data:(null==p||null===(t=p.data)||void 0===t?void 0:t.devices)||[],fetchDevices:g,enforceEdgeGroups:null==p||null===(n=p.data)||void 0===n?void 0:n.enforce_edge_groups},e))};g.propTypes={groupUUID:d().string};const p=g},9192:(e,t,n)=>{"use strict";n.d(t,{_:()=>r});var r={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",insightsInventory:"/insights/inventory/manage-edge-inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailModal:"/inventory/:deviceId/:modalId",inventoryDetailUpdate:"/inventory/:deviceId/update",insightsInventoryDetailUpdate:"/insights/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources",contentSourcesRepositories:"/preview/insights/content"}},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(4942),a=n(15861),i=n(29439),s=n(64687),o=n.n(s),u=n(83215),c=n(92950),d=n(77760);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=function(e){var t,n=e.api,r=e.id,s=void 0===r?null:r,l=e.statusMessages,p=e.tableReload,v=void 0!==p&&p,f=(0,d.useDispatch)(),m=(0,c.useState)([]),y=(0,i.Z)(m,2),h=y[0],I=y[1],D=(0,c.useState)(!0),b=(0,i.Z)(D,2),O=b[0],S=b[1],w=(0,c.useState)(!1),j=(0,i.Z)(w,2),E=j[0],U=j[1],Z=(0,c.useState)((function(){return n})),k=(0,i.Z)(Z,2),P=k[0],M=k[1],_=null===(t=l)||void 0===t?void 0:t.onSuccess;l||(l={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var R=function(){var e=(0,a.Z)(o().mark((function e(){var t,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",S(!0),e.prev=2,e.next=5,P({id:s,query:t});case 5:n=e.sent,I(n),_&&f(g({},(0,u.wN)(g({variant:"success"},l.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),U(!0),f(g({},(0,u.wN)(g({variant:"danger"},l.onError))));case 14:return e.prev=14,S(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){v||R()}),[]),[{data:h,isLoading:O,hasError:E},R,P,M]}},45467:()=>{},11452:()=>{},34946:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1286.78d23bbddce6f9f31a474c8fb7ababbd.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[358],{79358:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(4942),o=n(15861),r=n(87757),c=n.n(r),l=n(93264),i=n.n(l),d=n(80236),p=n(47173),s=n(68340),m=n(68774),u=n(78140),v=n(25834),f=n(69957),g=n(62410),E=n(68920),h=n(45697),b=n.n(h),D=n(66702),O=n(82041),T=n(83215);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t,n,a,r,l,h,b,y,w=e.updateModal,j=e.setUpdateModal,P=e.refreshTable,U=(0,O.useDispatch)(),C=null==w?void 0:w.imageData,x=null==w||null===(t=w.deviceData)||void 0===t?void 0:t.id,I=null==w||null===(n=w.deviceData)||void 0===n?void 0:n.display_name,R=function(){var e=(0,o.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,D.g5)({DeviceUUID:x,CommitId:null==C||null===(t=C.Image)||void 0===t?void 0:t.CommitID});case 3:U(k({},(0,T.wN)({variant:"info",title:"Updating device",description:" ".concat(I," was added to the queue.")}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),U(k({},(0,T.wN)({variant:"danger",title:"Updating a device was unsuccessful",description:"Response: ".concat(e.t0.statusText)})));case 9:q(),P&&P();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),q=function(){j((function(e){return k(k({},e),{},{isOpen:!1})}))};return i().createElement(d.u,{variant:"medium",title:"Update ".concat(I," to latest image"),description:"Update this device to use the latest version of the image linked to it.",isOpen:w.isOpen,onClose:q,actions:[i().createElement(p.zx,{key:"confirm",variant:"primary",onClick:R},"Update Device"),i().createElement(p.zx,{key:"cancel",variant:"link",onClick:q},"Cancel")]},i().createElement(m.D,null,i().createElement(u.T,{component:s.q.h3},i().createElement(s.x,{component:"b"},"Update to")),i().createElement(v.G,{component:v.F.dl},i().createElement(u.T,{component:u.v.dt},"Image Name"),i().createElement(u.T,{component:u.v.dd},null==C?void 0:C.Image.Name),i().createElement(u.T,{component:u.v.dt},"Version"),i().createElement(u.T,{component:u.v.dd},null==C?void 0:C.Image.Version),i().createElement(u.T,{component:u.v.dt},"Created"),i().createElement(u.T,{component:u.v.dd},i().createElement(g.Z,{date:null==C?void 0:C.Image.CreatedAt})),i().createElement(u.T,{component:u.v.dt},"Release"),i().createElement(u.T,{component:u.v.dd},E.aN[null==C?void 0:C.Image.Distribution])),i().createElement(u.T,{component:s.q.h3},i().createElement(s.x,{component:"b"},"Package Details")),i().createElement(v.G,{component:v.F.dl},i().createElement(u.T,{component:u.v.dt},"Added"),i().createElement(u.T,{component:u.v.dd},(null==C||null===(a=C.PackageDiff)||void 0===a||null===(r=a.Added)||void 0===r?void 0:r.length)||0),i().createElement(u.T,{component:u.v.dt},"Removed"),i().createElement(u.T,{component:u.v.dd},(null==C||null===(l=C.PackageDiff)||void 0===l||null===(h=l.Removed)||void 0===h?void 0:h.length)||0),i().createElement(u.T,{component:u.v.dt},"Updated"),i().createElement(u.T,{component:u.v.dd},(null==C||null===(b=C.PackageDiff)||void 0===b||null===(y=b.Updated)||void 0===y?void 0:y.length)||0))),i().createElement(m.D,{className:"pf-u-pt-md"},i().createElement(s.x,{style:{color:"var(--pf-global--palette--gold-500)"},component:"small"},i().createElement(f.ZP,null)," After the update is installed, the device will apply the changes.")))};w.propTypes={refreshTable:b().func,updateModal:b().shape({isOpen:b().bool.isRequired,deviceData:b().object.isRequired,imageData:b().object}).isRequired,setUpdateModal:b().func.isRequired};const j=w}}]);
//# sourceMappingURL=../sourcemaps/358.39845fa0ee79f2ef217218ba97a3480a.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[344],{79358:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(59713),r=n.n(a),o=n(1427),i=n.n(o),c=n(87502),l=n(47173),d=n(68340),u=n(68774),s=n(78140),m=n(25834),p=n(69957),v=n(62410),f=n(68920),g=n(45697),b=n.n(g),E=n(66702);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t,n,a,r,o,g,b,h,y,D,w,j=e.updateModal,T=e.setUpdateModal,P=null===(t=j.deviceData)||void 0===t||null===(n=t.system_profile)||void 0===n?void 0:n.image_data[(null===(a=j.deviceData)||void 0===a||null===(r=a.system_profile)||void 0===r?void 0:r.image_data.length)-1],k=function(){T((function(e){return O(O({},e),{},{isOpen:!1})}))};return i().createElement(c.u,{variant:"medium",title:"Update ".concat(null===(o=j.deviceData)||void 0===o?void 0:o.display_name," to latest image"),description:"Update this device to use the latest version of the image linked to it.",isOpen:j.isOpen,onClose:k,actions:[i().createElement(l.zx,{key:"confirm",variant:"primary",onClick:function(){var e;(0,E.g5)({DeviceUUID:null===(e=j.deviceData)||void 0===e?void 0:e.id,CommitId:null==P?void 0:P.Image.CommitID}),k()}},"Update Device"),i().createElement(l.zx,{key:"cancel",variant:"link",onClick:k},"Cancel")]},i().createElement(u.D,null,i().createElement(s.T,{component:d.q.h3},i().createElement(d.x,{component:"b"},"Update to")),i().createElement(m.G,{component:m.F.dl},i().createElement(s.T,{component:s.v.dt},"Image Name"),i().createElement(s.T,{component:s.v.dd},null==P?void 0:P.Image.Name),i().createElement(s.T,{component:s.v.dt},"Version"),i().createElement(s.T,{component:s.v.dd},null==P?void 0:P.Image.Version),i().createElement(s.T,{component:s.v.dt},"Created"),i().createElement(s.T,{component:s.v.dd},i().createElement(v.Z,{date:null==P?void 0:P.Image.CreatedAt})),i().createElement(s.T,{component:s.v.dt},"Release"),i().createElement(s.T,{component:s.v.dd},f.aN[null==P?void 0:P.Image.Distribution])),i().createElement(s.T,{component:d.q.h3},i().createElement(d.x,{component:"b"},"Package Details")),i().createElement(m.G,{component:m.F.dl},i().createElement(s.T,{component:s.v.dt},"Added"),i().createElement(s.T,{component:s.v.dd},(null==P||null===(g=P.PackageDiff)||void 0===g||null===(b=g.Added)||void 0===b?void 0:b.length)||0),i().createElement(s.T,{component:s.v.dt},"Removed"),i().createElement(s.T,{component:s.v.dd},(null==P||null===(h=P.PackageDiff)||void 0===h||null===(y=h.Removed)||void 0===y?void 0:y.length)||0),i().createElement(s.T,{component:s.v.dt},"Updated"),i().createElement(s.T,{component:s.v.dd},(null==P||null===(D=P.PackageDiff)||void 0===D||null===(w=D.Updated)||void 0===w?void 0:w.length)||0))),i().createElement(u.D,{className:"pf-u-pt-md"},i().createElement(d.x,{style:{color:"var(--pf-global--palette--gold-500)"},component:"small"},i().createElement(p.ZP,null)," After the update is installed, the device will apply the changes.")))};y.propTypes={updateModal:b().shape({isOpen:b().bool.isRequired,deviceData:b().object.isRequired}).isRequired,setUpdateModal:b().func.isRequired};const D=y},49477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(59713),r=n.n(a),o=n(87757),i=n.n(o),c=n(48926),l=n.n(c),d=n(63038),u=n.n(d),s=n(1427),m=n.n(s),p=n(67098),v=n(96354),f=n(1005),g=n(2372),b=n(45697),E=n.n(b),h=n(20873),O=n(94778),y=n(59086),D=n(80962),w=n(83215),j=n(66702);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.navigateBack,n=(0,s.useState)(),a=u()(n,2),r=a[0],o=a[1],c=(0,D.useDispatch)(),d=function(){t(),c({type:y.G})};return(0,s.useEffect)((function(){l()(i().mark((function e(){var t,n,a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:r=e.t0,o((function(){return r}));case 7:case"end":return e.stop()}}),e)})))()}),[]),r?m().createElement(p.Z,{onClose:d,customComponentMapper:{review:h.Z},onSubmit:function(e){var t=e.values;(0,e.setIsSaving)((function(){return!0}));var n=P(P({},t),{},{architecture:"x86_64"});(0,O.Es)(c,n,(function(e){c(P(P({},(0,w.wN)({variant:"info",title:"Created image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,j.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,w.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,w.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,O.Z5)(e)}]}}}})),d(),(0,O.Z5)(c)}))},defaultArch:"x86_64",initialValues:{version:0},schema:{fields:[{component:v.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["target-environment","release","imageType"],fields:[f.oG,f.Ud,f.l9,f.B9,f.j7]}]}}):m().createElement(g.$,null)};k.propTypes={navigateBack:E().func},k.defaultProps={navigateBack:function(){}};const I=k}}]);
//# sourceMappingURL=../sourcemaps/CreateImageWizard.20ae6a307acca3fde489.js.map
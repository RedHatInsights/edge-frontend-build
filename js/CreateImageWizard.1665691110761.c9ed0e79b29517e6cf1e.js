"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[344,940],{68940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(4942),r=n(15861),i=n(29439),l=n(87757),o=n.n(l),s=n(93264),c=n.n(s),u=n(68774),d=n(68340),m=n(52643),p=n(29390),f=n(37619),v=n(69957),g=n(45697),b=n.n(g),y=n(93597),h=n(8027),O=n(28216),w=n(83215),E=n(60722),D=n(96354),j=n(38779),S=n(78140),I=n(25834),_=function(e){var t=e.reviewObject,n=e.key;return c().createElement(u.D,null,c().createElement(j.D,{headingLevel:"h3"},c().createElement(d.x,{component:"b"},t.title)),c().createElement(I.G,{component:I.F.dl},t.rows.map((function(e){return c().createElement(s.Fragment,{key:e.title+n},c().createElement(S.T,{component:S.v.dt},e.title),c().createElement(S.T,{component:S.v.dd},e.value))}))))};_.propTypes={reviewObject:b().object,key:b().string};const P=_;var T=n(62410),k=n(98309);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t,n=e.updateModal,a=e.setUpdateModal,l=e.refreshTable,g=(0,s.useState)(null),b=(0,i.Z)(g,2),j=b[0],S=b[1],I=(0,O.I0)(),_=n.deviceData.length>1,N=n.deviceData.map((function(e){return e.id})),U=_?n.deviceData.map((function(e){return e.display_name})):null==n||null===(t=n.deviceData[0])||void 0===t?void 0:t.display_name;(0,s.useEffect)((function(){var e;null!=n&&n.imageSetId?(0,y.dt)({id:n.imageSetId,q:{limit:1,sort_by:"-created_at",status:"SUCCESS"}}).then((function(e){return S(e.Data.images[0])})):(e=n.imageId,(0,y.Kz)({id:e}).then((function(e){var t;return(0,y.dt)({id:null==e||null===(t=e.image)||void 0===t?void 0:t.ImageSetID,q:{limit:1,sort_by:"-created_at"}})}))).then((function(e){return S(e.Data.images[0])}))}),[]);var C=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.g5)({DevicesUUID:N});case 3:I(Z({},(0,w.wN)({variant:"info",title:"Updating system",description:_?" ".concat(U.length," systems were added to the queue."):" ".concat(U," was added to the queue.")}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),I(Z({},(0,w.wN)({variant:"danger",title:"Updating a system was unsuccessful",description:"Response: ".concat(e.t0.statusText)})));case 9:R(),l&&l();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),R=function(){a((function(e){return Z(Z({},e),{},{isOpen:!1})}))},x={title:"Update to version ".concat(null==j?void 0:j.image.Version),rows:[{title:"Image Name",value:null==j?void 0:j.image.Name},{title:"Version",value:null==j?void 0:j.image.Version},{title:"Created",value:c().createElement(T.Z,{date:null==j?void 0:j.image.CreatedAt})},{title:"Release",value:k.aN[null==j?void 0:j.image.Distribution]}]},A={title:"Changes from version ".concat((null==j?void 0:j.image.Version)-1),rows:[{title:"Added",value:(null==j?void 0:j.update_added)||0},{title:"Removed",value:(null==j?void 0:j.update_removed)||0},{title:"Updated",value:(null==j?void 0:j.update_updated)||0}]},q={fields:[{component:D.Z.PLAIN_TEXT,name:"description",label:c().createElement(u.D,null,c().createElement(d.x,null,"Update"," ",c().createElement("span",{className:"pf-u-font-weight-bold pf-u-font-size-md"},_?"".concat(U.length," systems"):U)," ","to latest version of the image linked to it."))},{component:D.Z.PLAIN_TEXT,name:"update-details",label:P({reviewObject:x,key:"update-details"})},{component:D.Z.PLAIN_TEXT,name:"package-details",label:P({reviewObject:A,key:"package-details"})},{component:D.Z.PLAIN_TEXT,name:"warning-text",label:c().createElement(u.D,{className:"pf-u-pt-md"},c().createElement(d.x,{style:{color:"var(--pf-global--palette--gold-500)"},component:"small"},c().createElement(v.ZP,null)," After the update is installed, the system will apply the changes.",n.deviceData.some((function(e){return"updateAvailable"!==e.deviceStatus&&"error"!==e.deviceStatus}))&&c().createElement("div",null,c().createElement(v.ZP,null)," Some selected systems have a status of unresponsive and may not successfully update.")))}]};return c().createElement(c().Fragment,null,j?c().createElement(E.Z,{size:"medium",title:"Update system".concat(_?"s":""," to latest image version"),isOpen:n.isOpen,closeModal:function(){return a((function(e){return Z(Z({},e),{},{isOpen:!1})}))},submitLabel:"Update system",schema:q,onSubmit:C,reloadData:l}):c().createElement(p.Y,null,c().createElement(m.b,null,c().createElement(f.$,{isSVG:!0,diameter:"100px"}))))};U.propTypes={refreshTable:b().func,updateModal:b().shape({isOpen:b().bool.isRequired,deviceData:b().array.isRequired,imageData:b().object,imageId:b().number,imageSetId:b().number}).isRequired,setUpdateModal:b().func.isRequired};const C=U},49477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(4942),r=n(15861),i=n(29439),l=n(87757),o=n.n(l),s=n(93264),c=n.n(s),u=n(69185),d=n(96354),m=n(52251),p=n(37619),f=n(45697),v=n.n(f),g=n(20873),b=n(94778),y=n(28216),h=n(83215),O=n(93597),w=n(48903),E=n(98309);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t=e.navigateBack,n=e.reload,a=(0,s.useState)(),l=(0,i.Z)(a,2),f=l[0],v=l[1],D=(0,y.I0)(),S=(0,w.gV)("fleet-management.custom-repos"),I=(0,w.gV)("fleet-management.temporary-releases"),_=function(){t(),n&&n()};return(0,s.useEffect)((function(){(0,r.Z)(o().mark((function e(){var t,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return v(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),f?c().createElement(u.Z,{onClose:_,customComponentMapper:{review:g.Z},onSubmit:function(e){var t=e.values;(0,e.setIsSaving)((function(){return!0}));var n=j(j({},t),{},{architecture:"x86_64"});(0,b.Es)(D,n,(function(e){D(j(j({},(0,h.wN)({variant:"info",title:"Created image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,O.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,h.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,h.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),_()}))},defaultArch:"x86_64",initialValues:{version:0,release:I?E.ml:E.az,includesCustomRepos:S},schema:{fields:[{component:d.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["target-environment","release","imageType","third-party-repositories","imageOutput","imageSetDetails","includesCustomRepos"],fields:[m.oG,m.Ud,m.l9,m.jS,m.B9,m.j7,m.Sp]}]}}):c().createElement(p.$,null)};S.propTypes={navigateBack:v().func,reload:v().func},S.defaultProps={navigateBack:function(){}};const I=S}}]);
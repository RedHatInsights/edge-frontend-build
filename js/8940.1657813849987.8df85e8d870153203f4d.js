"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[8940],{68940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(4942),r=n(15861),i=n(29439),l=n(87757),o=n.n(l),c=n(75418),s=n.n(c),u=n(68774),d=n(68340),p=n(52643),m=n(29390),v=n(37619),f=n(69957),g=n(45697),b=n.n(g),h=n(93597),y=n(8027),E=n(28216),O=n(83215),w=n(60722),D=n(96354),_=n(38779),j=n(78140),k=n(25834),T=function(e){var t=e.reviewObject,n=e.key;return s().createElement(u.D,null,s().createElement(_.D,{headingLevel:"h3"},s().createElement(d.x,{component:"b"},t.title)),s().createElement(k.G,{component:k.F.dl},t.rows.map((function(e){return s().createElement(c.Fragment,{key:e.title+n},s().createElement(j.T,{component:j.v.dt},e.title),s().createElement(j.T,{component:j.v.dd},e.value))}))))};T.propTypes={reviewObject:b().object,key:b().string};const I=T;var P=n(62410),S=n(98309);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t,n=e.updateModal,a=e.setUpdateModal,l=e.refreshTable,g=(0,c.useState)(null),b=(0,i.Z)(g,2),_=b[0],j=b[1],k=(0,E.I0)(),T=n.deviceData.length>1,U=n.deviceData.map((function(e){return e.id})),Z=T?n.deviceData.map((function(e){return e.display_name})):null==n||null===(t=n.deviceData[0])||void 0===t?void 0:t.display_name;(0,c.useEffect)((function(){var e;null!=n&&n.imageSetId?(0,h.dt)({id:n.imageSetId,q:{limit:1,sort_by:"-created_at",status:"SUCCESS"}}).then((function(e){return j(e.Data.images[0])})):(e=n.imageId,(0,h.Kz)({id:e}).then((function(e){var t;return(0,h.dt)({id:null==e||null===(t=e.image)||void 0===t?void 0:t.ImageSetID,q:{limit:1,sort_by:"-created_at"}})}))).then((function(e){return j(e.Data.images[0])}))}),[]);var x=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.g5)({DevicesUUID:U});case 3:k(N({},(0,O.wN)({variant:"info",title:"Updating device",description:T?" ".concat(Z.length," systems were added to the queue."):" ".concat(Z," was added to the queue.")}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),k(N({},(0,O.wN)({variant:"danger",title:"Updating a device was unsuccessful",description:"Response: ".concat(e.t0.statusText)})));case 9:q(),l&&l();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),q=function(){a((function(e){return N(N({},e),{},{isOpen:!1})}))},A={title:"Update to version ".concat(null==_?void 0:_.image.Version),rows:[{title:"Image Name",value:null==_?void 0:_.image.Name},{title:"Version",value:null==_?void 0:_.image.Version},{title:"Created",value:s().createElement(P.Z,{date:null==_?void 0:_.image.CreatedAt})},{title:"Release",value:S.aN[null==_?void 0:_.image.Distribution]}]},C={title:"Changes from version ".concat((null==_?void 0:_.image.Version)-1),rows:[{title:"Added",value:(null==_?void 0:_.update_added)||0},{title:"Removed",value:(null==_?void 0:_.update_removed)||0},{title:"Updated",value:(null==_?void 0:_.update_updated)||0}]},R={fields:[{component:D.Z.PLAIN_TEXT,name:"description",label:s().createElement(u.D,null,s().createElement(d.x,null,"Update"," ",s().createElement("span",{className:"pf-u-font-weight-bold pf-u-font-size-md"},T?"".concat(Z.length," systems"):Z)," ","to latest version of the image linked to it."))},{component:D.Z.PLAIN_TEXT,name:"update-details",label:I({reviewObject:A,key:"update-details"})},{component:D.Z.PLAIN_TEXT,name:"package-details",label:I({reviewObject:C,key:"package-details"})},{component:D.Z.PLAIN_TEXT,name:"warning-text",label:s().createElement(u.D,{className:"pf-u-pt-md"},s().createElement(d.x,{style:{color:"var(--pf-global--palette--gold-500)"},component:"small"},s().createElement(f.ZP,null)," After the update is installed, the device will apply the changes."))}]};return s().createElement(s().Fragment,null,_?s().createElement(w.Z,{size:"medium",title:"Update system".concat(T?"s":""," to latest image version"),isOpen:n.isOpen,openModal:function(){return a((function(e){return N(N({},e),{},{isOpen:!1})}))},submitLabel:"Update Device",schema:R,onSubmit:x,reloadData:l}):s().createElement(m.Y,null,s().createElement(p.b,null,s().createElement(v.$,{isSVG:!0,diameter:"100px"}))))};Z.propTypes={refreshTable:b().func,updateModal:b().shape({isOpen:b().bool.isRequired,deviceData:b().array.isRequired,imageData:b().object,imageId:b().number,imageSetId:b().number}).isRequired,setUpdateModal:b().func.isRequired};const x=Z}}]);
//# sourceMappingURL=../sourcemaps/8940.a719223255521307ed0cc1a74add34e9.js.map
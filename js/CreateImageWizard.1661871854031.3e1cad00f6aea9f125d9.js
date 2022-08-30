"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[5344,8940],{49739:(e,t,n)=>{n.d(t,{K:()=>s});var a=n(21988),r=n(93264),i=n(73976),l=n(38296);const s=e=>{var{hasGutter:t=!1,className:n="",children:s=null,component:c="div"}=e,o=(0,a._T)(e,["hasGutter","className","children","component"]);const u=c;return r.createElement(u,Object.assign({},o,{className:(0,l.i)(i.Z.stack,t&&i.Z.modifiers.gutter,n)}),s)};s.displayName="Stack"},83826:(e,t,n)=>{n.d(t,{v:()=>s});var a=n(21988),r=n(93264),i=n(73976),l=n(38296);const s=e=>{var{isFilled:t=!1,className:n="",children:s=null}=e,c=(0,a._T)(e,["isFilled","className","children"]);return r.createElement("div",Object.assign({},c,{className:(0,l.i)(i.Z.stackItem,t&&i.Z.modifiers.fill,n)}),s)};s.displayName="StackItem"},73976:(e,t,n)=>{n.d(t,{Z:()=>a}),n.e(3519).then(n.t.bind(n,53519,23));const a={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},68940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(4942),r=n(15861),i=n(29439),l=n(87757),s=n.n(l),c=n(93264),o=n.n(c),u=n(68774),d=n(68340),m=n(52643),p=n(29390),f=n(37619),v=n(69957),g=n(45697),b=n.n(g),h=n(93597),y=n(8027),O=n(28216),w=n(83215),E=n(60722),j=n(96354),D=n(38779),_=n(78140),k=n(25834),I=function(e){var t=e.reviewObject,n=e.key;return o().createElement(u.D,null,o().createElement(D.D,{headingLevel:"h3"},o().createElement(d.x,{component:"b"},t.title)),o().createElement(k.G,{component:k.F.dl},t.rows.map((function(e){return o().createElement(c.Fragment,{key:e.title+n},o().createElement(_.T,{component:_.v.dt},e.title),o().createElement(_.T,{component:_.v.dd},e.value))}))))};I.propTypes={reviewObject:b().object,key:b().string};const N=I;var S=n(62410),T=n(98309);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t,n=e.updateModal,a=e.setUpdateModal,l=e.refreshTable,g=(0,c.useState)(null),b=(0,i.Z)(g,2),D=b[0],_=b[1],k=(0,O.I0)(),I=n.deviceData.length>1,P=n.deviceData.map((function(e){return e.id})),U=I?n.deviceData.map((function(e){return e.display_name})):null==n||null===(t=n.deviceData[0])||void 0===t?void 0:t.display_name;(0,c.useEffect)((function(){var e;null!=n&&n.imageSetId?(0,h.dt)({id:n.imageSetId,q:{limit:1,sort_by:"-created_at",status:"SUCCESS"}}).then((function(e){return _(e.Data.images[0])})):(e=n.imageId,(0,h.Kz)({id:e}).then((function(e){var t;return(0,h.dt)({id:null==e||null===(t=e.image)||void 0===t?void 0:t.ImageSetID,q:{limit:1,sort_by:"-created_at"}})}))).then((function(e){return _(e.Data.images[0])}))}),[]);var C=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,y.g5)({DevicesUUID:P});case 3:k(Z({},(0,w.wN)({variant:"info",title:"Updating system",description:I?" ".concat(U.length," systems were added to the queue."):" ".concat(U," was added to the queue.")}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),k(Z({},(0,w.wN)({variant:"danger",title:"Updating a system was unsuccessful",description:"Response: ".concat(e.t0.statusText)})));case 9:R(),l&&l();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),R=function(){a((function(e){return Z(Z({},e),{},{isOpen:!1})}))},x={title:"Update to version ".concat(null==D?void 0:D.image.Version),rows:[{title:"Image Name",value:null==D?void 0:D.image.Name},{title:"Version",value:null==D?void 0:D.image.Version},{title:"Created",value:o().createElement(S.Z,{date:null==D?void 0:D.image.CreatedAt})},{title:"Release",value:T.aN[null==D?void 0:D.image.Distribution]}]},A={title:"Changes from version ".concat((null==D?void 0:D.image.Version)-1),rows:[{title:"Added",value:(null==D?void 0:D.update_added)||0},{title:"Removed",value:(null==D?void 0:D.update_removed)||0},{title:"Updated",value:(null==D?void 0:D.update_updated)||0}]},q={fields:[{component:j.Z.PLAIN_TEXT,name:"description",label:o().createElement(u.D,null,o().createElement(d.x,null,"Update"," ",o().createElement("span",{className:"pf-u-font-weight-bold pf-u-font-size-md"},I?"".concat(U.length," systems"):U)," ","to latest version of the image linked to it."))},{component:j.Z.PLAIN_TEXT,name:"update-details",label:N({reviewObject:x,key:"update-details"})},{component:j.Z.PLAIN_TEXT,name:"package-details",label:N({reviewObject:A,key:"package-details"})},{component:j.Z.PLAIN_TEXT,name:"warning-text",label:o().createElement(u.D,{className:"pf-u-pt-md"},o().createElement(d.x,{style:{color:"var(--pf-global--palette--gold-500)"},component:"small"},o().createElement(v.ZP,null)," After the update is installed, the system will apply the changes."))}]};return o().createElement(o().Fragment,null,D?o().createElement(E.Z,{size:"medium",title:"Update system".concat(I?"s":""," to latest image version"),isOpen:n.isOpen,openModal:function(){return a((function(e){return Z(Z({},e),{},{isOpen:!1})}))},submitLabel:"Update system",schema:q,onSubmit:C,reloadData:l}):o().createElement(p.Y,null,o().createElement(m.b,null,o().createElement(f.$,{isSVG:!0,diameter:"100px"}))))};U.propTypes={refreshTable:b().func,updateModal:b().shape({isOpen:b().bool.isRequired,deviceData:b().array.isRequired,imageData:b().object,imageId:b().number,imageSetId:b().number}).isRequired,setUpdateModal:b().func.isRequired};const C=U},49477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(4942),r=n(15861),i=n(29439),l=n(87757),s=n.n(l),c=n(93264),o=n.n(c),u=n(69185),d=n(96354),m=n(52251),p=n(37619),f=n(45697),v=n.n(f),g=n(20873),b=n(94778),h=n(28216),y=n(83215),O=n(93597),w=n(48903),E=n(98309);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.navigateBack,n=e.reload,a=(0,c.useState)(),l=(0,i.Z)(a,2),f=l[0],v=l[1],j=(0,h.I0)(),_=(0,w.gV)("fleet-management.custom-repos"),k=(0,w.gV)("fleet-management.temporary-releases"),I=function(){t(),n&&n()};return(0,c.useEffect)((function(){(0,r.Z)(s().mark((function e(){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return v(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),f?o().createElement(u.Z,{onClose:I,customComponentMapper:{review:g.Z},onSubmit:function(e){var t=e.values;(0,e.setIsSaving)((function(){return!0}));var n=D(D({},t),{},{architecture:"x86_64"});(0,b.Es)(j,n,(function(e){j(D(D({},(0,y.wN)({variant:"info",title:"Created image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,O.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,y.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,y.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),I()}))},defaultArch:"x86_64",initialValues:{version:0,release:k?E.ml:E.az,includesCustomRepos:_},schema:{fields:[{component:d.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["target-environment","release","imageType","third-party-repositories","imageOutput","imageSetDetails","includesCustomRepos"],fields:[m.oG,m.Ud,m.l9,m.jS,m.B9,m.j7,m.Sp]}]}}):o().createElement(p.$,null)};_.propTypes={navigateBack:v().func,reload:v().func},_.defaultProps={navigateBack:function(){}};const k=_}}]);
//# sourceMappingURL=../sourcemaps/CreateImageWizard.a2750667924a2796fab725bcacc9b89f.js.map
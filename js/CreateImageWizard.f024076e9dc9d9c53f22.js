"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[5344],{49477:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(4942),a=n(15861),i=n(29439),c=n(64687),u=n.n(c),o=n(92950),s=n.n(o),l=n(61094),f=n(96354),d=n(25563),m=n(37619),p=n(45697),g=n.n(p),v=n(20873),b=n(94778),h=n(86706),w=n(83215),O=n(93597),y=n(48903),j=n(98309);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.navigateBack,n=e.reload,r=(0,o.useState)(),c=(0,i.Z)(r,2),p=c[0],g=c[1],E=(0,h.I0)(),D=(0,y.gV)("fleet-management.temporary-releases"),S=(0,y.gV)("edge-management.image_wizard_ui"),_=function(){t(),n&&n()};(0,o.useEffect)((function(){(0,a.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.auth)||void 0===r||r.getUser().then((function(e){return g(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]);var k=(0,d.tW)();return p?s().createElement(l.Z,{onClose:_,customComponentMapper:{review:v.Z},onSubmit:function(e){var t=e.values;(0,e.setIsSaving)((function(){return!0}));var n=I(I({},t),{},{architecture:"x86_64"});(0,b.Es)(E,n,(function(e){E(I(I({},(0,w.wN)({variant:"info",title:"Creating image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,O.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,w.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,w.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),_()}))},defaultArch:"x86_64",initialValues:{version:0,release:D?j.ml:j.az},schema:{fields:[{component:f.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["release","imageType","third-party-repositories","imageOutput"],fields:[k,d.Ud,d.l9,(0,d.jS)(S),d.B9,d.j7,d.Sp,d.$B]}]}}):s().createElement(m.$,null)};D.propTypes={navigateBack:g().func,reload:g().func},D.defaultProps={navigateBack:function(){}};const S=D}}]);
//# sourceMappingURL=../sourcemaps/CreateImageWizard.563bf4ff2d28bd7ff0bbe92d20252668.js.map
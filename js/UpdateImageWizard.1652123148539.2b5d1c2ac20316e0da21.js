"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[46],{53010:(e,n,t)=>{t.r(n),t.d(n,{default:()=>U});var i=t(4942),a=t(15861),r=t(29439),l=t(87757),u=t.n(l),o=t(75418),s=t.n(o),c=t(82951),d=t(96354),m=t(52251),v=t(52643),p=t(29390),g=t(2372),f=t(45697),b=t.n(f),h=t(20873),y=t(94778),I=t(59086),D=t(28216),w=t(59245),O=t(5230),j=t(66702),N=t(83215),S=t(58061),E=t(68920);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t,i,l,f,b,_,P,U,C,R,T,Z,B,x=e.navigateBack,V=e.updateImageID,A=(0,o.useState)(),G=(0,r.Z)(A,2),L=G[0],M=G[1],F=(0,D.I0)(),K=function(){x(),F({type:I.G})},q=(0,S.gV)("fleet-management.custom-repos"),z=(0,o.useContext)(w.g).getRegistry,H=(0,D.v9)((function(e){var n=e.imageDetailReducer;return{data:(null==n?void 0:n.data)||null}}),D.wU).data;return(0,o.useEffect)((function(){var e=z().register({imageDetailReducer:O.OD});return V&&(0,y.J_)(F,V),function(){return e()}}),[F]),(0,o.useEffect)((function(){(0,a.Z)(u().mark((function e(){var n,t,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=insights)||void 0===n||null===(t=n.chrome)||void 0===t||null===(i=t.auth)||void 0===i||i.getUser().then((function(e){return M(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),L&&H?s().createElement(c.Z,{onClose:K,customComponentMapper:{review:h.Z},onSubmit:function(e){var n,t,i,a,r,l=e.values;(0,e.setIsSaving)((function(){return!0}));var u=k(k({},l),{},{Id:null==H||null===(n=H.image)||void 0===n?void 0:n.ID,name:null==H||null===(t=H.image)||void 0===t?void 0:t.Name,version:(null==H||null===(i=H.image)||void 0===i?void 0:i.Version)+1,architecture:"x86_64",credentials:l.credentials?l.credentials:null==H||null===(a=H.image)||void 0===a?void 0:a.Installer.SshKey,username:l.username?l.username:null==H||null===(r=H.image)||void 0===r?void 0:r.Installer.Username});(0,y.Es)(F,u,(function(e){F(k(k({},(0,N.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,j.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(n){return n((0,N.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(n){return n((0,N.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,y.n9)(e)}]}}}})),K(),(0,y.n9)(F),F((0,y.Fj)({name:H.value.Name,id:H.value.ID}))}))},defaultArch:"x86_64",initialValues:{name:null==H||null===(n=H.image)||void 0===n?void 0:n.Name,isUpdate:!0,description:null==H||null===(t=H.image)||void 0===t?void 0:t.Description,credentials:null==H||null===(i=H.image)||void 0===i?void 0:i.Installer.SshKey,username:null==H||null===(l=H.image)||void 0===l?void 0:l.Installer.Username,version:null==H||null===(f=H.image)||void 0===f?void 0:f.Version,release:null==H||null===(b=H.image)||void 0===b?void 0:b.Distribution,release_options:(0,E.pS)(null==H||null===(_=H.image)||void 0===_?void 0:_.Distribution),imageType:["rhel-edge-commit"],includesCustomRepos:q,"selected-packages":null==H||null===(P=H.image)||void 0===P||null===(U=P.Packages)||void 0===U?void 0:U.map((function(e){return k(k({},e),{},{name:e.Name})})),"third-party-repositories":null==H||null===(C=H.image)||void 0===C||null===(R=C.ThirdPartyRepositories)||void 0===R?void 0:R.map((function(e){return k({id:e.ID,name:e.Name},e)})),"custom-packages":null==H||null===(T=H.image)||void 0===T||null===(Z=T.CustomPackages)||void 0===Z?void 0:Z.map((function(e){return k(k({},e),{},{name:e.Name})}))},schema:{fields:[{component:d.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==H||null===(B=H.image)||void 0===B?void 0:B.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[m.bR,m.Ud,m.l9,m.jS,m.B9,m.jS,m.j7,m.Sp]}]}}):s().createElement(p.Y,null,s().createElement(v.b,null,s().createElement(g.$,{isSVG:!0,diameter:"100px"})))};P.propTypes={navigateBack:b().func,updateImageID:b().number},P.defaultProps={navigateBack:function(){}};const U=P}}]);
//# sourceMappingURL=../sourcemaps/UpdateImageWizard.b4d5c0accbbd176eaa66c4d9e6259358.js.map
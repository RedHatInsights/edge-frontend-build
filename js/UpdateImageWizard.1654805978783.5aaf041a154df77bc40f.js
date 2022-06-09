"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[46],{53010:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var i=t(93433),a=t(4942),r=t(15861),l=t(29439),u=t(87757),o=t.n(u),s=t(75418),c=t.n(s),d=t(57866),m=t(96354),v=t(52251),p=t(52643),g=t(29390),f=t(37619),b=t(45697),h=t.n(b),y=t(20873),I=t(94778),D=t(28216),w=t(59245),O=t(5230),S=t(93597),j=t(83215),N=t(48903),k=t(98309);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t,a,u,b,h,E,P,R,U,C,Z,T,B,V,x=e.navigateBack,A=e.updateImageID,G=e.reload,L=(0,s.useState)(),M=(0,l.Z)(L,2),F=M[0],K=M[1],q=(0,D.I0)(),z=function(){x(),G&&G()},H=(0,N.gV)("fleet-management.custom-repos"),J=(0,N.gV)("fleet-management.temporary-releases"),W=(0,s.useContext)(w.g).getRegistry,Y=(0,D.v9)((function(e){var n=e.imageDetailReducer;return{data:(null==n?void 0:n.data)||null}}),D.wU).data;return(0,s.useEffect)((function(){var e=W().register({imageDetailReducer:O.OD});return A&&(0,I.J_)(q,A),function(){return e()}}),[q]),(0,s.useEffect)((function(){(0,r.Z)(o().mark((function e(){var n,t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=insights)||void 0===n||null===(t=n.chrome)||void 0===t||null===(i=t.auth)||void 0===i||i.getUser().then((function(e){return K(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),F&&Y?c().createElement(d.Z,{onClose:z,customComponentMapper:{review:y.Z},onSubmit:function(e){var n,t,i,a,r,l=e.values;(0,e.setIsSaving)((function(){return!0}));var u=_(_({},l),{},{Id:null==Y||null===(n=Y.image)||void 0===n?void 0:n.ID,name:null==Y||null===(t=Y.image)||void 0===t?void 0:t.Name,version:(null==Y||null===(i=Y.image)||void 0===i?void 0:i.Version)+1,architecture:"x86_64",credentials:l.credentials?l.credentials:null==Y||null===(a=Y.image)||void 0===a?void 0:a.Installer.SshKey,username:l.username?l.username:null==Y||null===(r=Y.image)||void 0===r?void 0:r.Installer.Username});(0,I.Es)(q,u,(function(e){q(_(_({},(0,j.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,S.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(n){return n((0,j.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(n){return n((0,j.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),z(),q((0,I.Fj)({name:Y.value.Name,id:Y.value.ID}))}))},defaultArch:"x86_64",initialValues:{name:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Name,isUpdate:!0,description:null==Y||null===(t=Y.image)||void 0===t?void 0:t.Description,credentials:null==Y||null===(a=Y.image)||void 0===a?void 0:a.Installer.SshKey,username:null==Y||null===(u=Y.image)||void 0===u?void 0:u.Installer.Username,version:null==Y||null===(b=Y.image)||void 0===b?void 0:b.Version,release:null==Y||null===(h=Y.image)||void 0===h?void 0:h.Distribution,release_options:J?(0,N.pS)(null==Y||null===(E=Y.image)||void 0===E?void 0:E.Distribution,[].concat((0,i.Z)(k.vk),(0,i.Z)(k.R8))):(0,N.pS)(null==Y||null===(P=Y.image)||void 0===P?void 0:P.Distribution),imageType:["rhel-edge-commit"],includesCustomRepos:H,"selected-packages":null==Y||null===(R=Y.image)||void 0===R||null===(U=R.Packages)||void 0===U?void 0:U.map((function(e){return _(_({},e),{},{name:e.Name})})),"third-party-repositories":null==Y||null===(C=Y.image)||void 0===C||null===(Z=C.ThirdPartyRepositories)||void 0===Z?void 0:Z.map((function(e){return _({id:e.ID,name:e.Name},e)})),"custom-packages":null==Y||null===(T=Y.image)||void 0===T||null===(B=T.CustomPackages)||void 0===B?void 0:B.map((function(e){return _(_({},e),{},{name:e.Name})}))},schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==Y||null===(V=Y.image)||void 0===V?void 0:V.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,v.jS,v.B9,v.jS,v.j7,v.Sp]}]}}):c().createElement(g.Y,null,c().createElement(p.b,null,c().createElement(f.$,{isSVG:!0,diameter:"100px"})))};P.propTypes={navigateBack:h().func,updateImageID:h().number,reload:h().func},P.defaultProps={navigateBack:function(){}};const R=P}}]);
//# sourceMappingURL=../sourcemaps/UpdateImageWizard.bddde606eea63cd60ac38af1da0a3d62.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[46],{49739:(e,t,n)=>{n.d(t,{K:()=>s});var i=n(21988),a=n(93264),l=n(73976),r=n(38296);const s=e=>{var{hasGutter:t=!1,className:n="",children:s=null,component:o="div"}=e,u=(0,i._T)(e,["hasGutter","className","children","component"]);const c=o;return a.createElement(c,Object.assign({},u,{className:(0,r.i)(l.Z.stack,t&&l.Z.modifiers.gutter,n)}),s)};s.displayName="Stack"},83826:(e,t,n)=>{n.d(t,{v:()=>s});var i=n(21988),a=n(93264),l=n(73976),r=n(38296);const s=e=>{var{isFilled:t=!1,className:n="",children:s=null}=e,o=(0,i._T)(e,["isFilled","className","children"]);return a.createElement("div",Object.assign({},o,{className:(0,r.i)(l.Z.stackItem,t&&l.Z.modifiers.fill,n)}),s)};s.displayName="StackItem"},73976:(e,t,n)=>{n.d(t,{Z:()=>i}),n.e(3519).then(n.t.bind(n,53519,23));const i={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},53010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var i=n(93433),a=n(4942),l=n(15861),r=n(29439),s=n(87757),o=n.n(s),u=n(93264),c=n.n(u),d=n(69185),m=n(96354),v=n(52251),p=n(52643),g=n(29390),f=n(37619),h=n(45697),b=n.n(h),I=n(20873),y=n(94778),D=n(28216),N=n(59245),k=n(5230),O=n(93597),w=n(83215),S=n(48903),_=n(98309);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t,n,a,s,h,b,j,Z,P,R,U,T,C,B,V,x,G,A=e.navigateBack,F=e.updateImageID,K=e.reload,L=(0,u.useState)(),M=(0,r.Z)(L,2),q=M[0],z=M[1],H=(0,D.I0)(),J=function(){A(),K&&K()},W=(0,S.gV)("fleet-management.custom-repos"),Y=(0,S.gV)("fleet-management.temporary-releases"),$=(0,u.useContext)(N.g).getRegistry,Q=(0,D.v9)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),D.wU).data;return(0,u.useEffect)((function(){var e=$().register({imageDetailReducer:k.OD});return F&&(0,y.J_)(H,F),function(){return e()}}),[H]),(0,u.useEffect)((function(){(0,l.Z)(o().mark((function e(){var t,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(i=n.auth)||void 0===i||i.getUser().then((function(e){return z(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),q&&Q?c().createElement(d.Z,{onClose:J,customComponentMapper:{review:I.Z},onSubmit:function(e){var t,n,i,a,l,r=e.values;(0,e.setIsSaving)((function(){return!0}));var s=E(E({},r),{},{Id:null==Q||null===(t=Q.image)||void 0===t?void 0:t.ID,name:null==Q||null===(n=Q.image)||void 0===n?void 0:n.Name,version:(null==Q||null===(i=Q.image)||void 0===i?void 0:i.Version)+1,architecture:"x86_64",credentials:r.credentials?r.credentials:null==Q||null===(a=Q.image)||void 0===a?void 0:a.Installer.SshKey,username:r.username?r.username:null==Q||null===(l=Q.image)||void 0===l?void 0:l.Installer.Username});(0,y.Es)(H,s,(function(e){H(E(E({},(0,w.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,O.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,w.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,w.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),J(),H((0,y.Fj)({name:Q.value.Name,id:Q.value.ID}))}))},defaultArch:"x86_64",initialValues:{imageID:null==Q?void 0:Q.image.ID,name:null==Q||null===(t=Q.image)||void 0===t?void 0:t.Name,isUpdate:!0,description:null==Q||null===(n=Q.image)||void 0===n?void 0:n.Description,credentials:null==Q||null===(a=Q.image)||void 0===a?void 0:a.Installer.SshKey,username:null==Q||null===(s=Q.image)||void 0===s?void 0:s.Installer.Username,version:null==Q||null===(h=Q.image)||void 0===h?void 0:h.Version,release:null==Q||null===(b=Q.image)||void 0===b?void 0:b.Distribution,release_options:Y?(0,S.pS)(null==Q||null===(j=Q.image)||void 0===j?void 0:j.Distribution,[].concat((0,i.Z)(_.vk),(0,i.Z)(_.R8))):(0,S.pS)(null==Q||null===(Z=Q.image)||void 0===Z?void 0:Z.Distribution),imageType:["rhel-edge-commit"],includesCustomRepos:W,"selected-packages":null==Q||null===(P=Q.image)||void 0===P||null===(R=P.Packages)||void 0===R?void 0:R.map((function(e){return E(E({},e),{},{name:e.Name})})),"third-party-repositories":null==Q||null===(U=Q.image)||void 0===U||null===(T=U.ThirdPartyRepositories)||void 0===T?void 0:T.map((function(e){return E({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==Q||null===(C=Q.image)||void 0===C||null===(B=C.ThirdPartyRepositories)||void 0===B?void 0:B.map((function(e){return E({id:e.ID,name:e.Name},e)})),"custom-packages":null==Q||null===(V=Q.image)||void 0===V||null===(x=V.CustomPackages)||void 0===x?void 0:x.map((function(e){return E(E({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Update image"},showTitles:!0,title:"Update image: ".concat(null==Q||null===(G=Q.image)||void 0===G?void 0:G.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,v.jS,v.B9,v.jS,v.j7,v.Sp]}]}}):c().createElement(g.Y,null,c().createElement(p.b,null,c().createElement(f.$,{isSVG:!0,diameter:"100px"})))};Z.propTypes={navigateBack:b().func,updateImageID:b().number,reload:b().func},Z.defaultProps={navigateBack:function(){}};const P=Z}}]);
//# sourceMappingURL=../sourcemaps/UpdateImageWizard.84546a9fc37c93e8a48def10da58cf29.js.map
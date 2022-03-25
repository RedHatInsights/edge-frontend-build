"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[46],{53010:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var i=t(4942),a=t(15861),r=t(29439),l=t(87757),u=t.n(l),o=t(93264),s=t.n(o),c=t(66496),d=t(96354),m=t(76362),v=t(52643),p=t(29390),g=t(2372),f=t(45697),b=t.n(f),h=t(20873),y=t(94778),I=t(59086),D=t(82041),w=t(59245),O=t(5230),j=t(66702),E=t(83215);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=function(e){var n,t,i,l,f,b,S,k,_,P,U,C,R=e.navigateBack,T=e.updateImageID,Z=(0,o.useState)(),B=(0,r.Z)(Z,2),x=B[0],A=B[1],G=(0,D.useDispatch)(),V=function(){R(),G({type:I.G})},L=(0,o.useContext)(w.g).getRegistry,M=(0,D.useSelector)((function(e){var n=e.imageDetailReducer;return{data:(null==n?void 0:n.data)||null}}),D.shallowEqual).data;return(0,o.useEffect)((function(){var e=L().register({imageDetailReducer:O.OD});return T&&(0,y.J_)(G,T),function(){return e()}}),[G]),(0,o.useEffect)((function(){(0,a.Z)(u().mark((function e(){var n,t,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=insights)||void 0===n||null===(t=n.chrome)||void 0===t||null===(i=t.auth)||void 0===i||i.getUser().then((function(e){return A(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),x&&M?s().createElement(c.Z,{onClose:V,customComponentMapper:{review:h.Z},onSubmit:function(e){var n,t,i,a,r,l=e.values;(0,e.setIsSaving)((function(){return!0}));var u=N(N({},l),{},{Id:null==M||null===(n=M.image)||void 0===n?void 0:n.ID,name:null==M||null===(t=M.image)||void 0===t?void 0:t.Name,version:(null==M||null===(i=M.image)||void 0===i?void 0:i.Version)+1,architecture:"x86_64",credentials:l.credentials?l.credentials:null==M||null===(a=M.image)||void 0===a?void 0:a.Installer.SshKey,username:l.username?l.username:null==M||null===(r=M.image)||void 0===r?void 0:r.Installer.Username});(0,y.Es)(G,u,(function(e){G(N(N({},(0,E.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,j.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(n){return n((0,E.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(n){return n((0,E.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,y.n9)(e)}]}}}})),V(),(0,y.n9)(G),G((0,y.Fj)({name:M.value.Name,id:M.value.ID}))}))},defaultArch:"x86_64",initialValues:{name:null==M||null===(n=M.image)||void 0===n?void 0:n.Name,isUpdate:!0,description:null==M||null===(t=M.image)||void 0===t?void 0:t.Description,credentials:null==M||null===(i=M.image)||void 0===i?void 0:i.Installer.SshKey,username:null==M||null===(l=M.image)||void 0===l?void 0:l.Installer.Username,version:null==M||null===(f=M.image)||void 0===f?void 0:f.Version,release:null==M||null===(b=M.image)||void 0===b?void 0:b.Distribution,imageType:["rhel-edge-commit"],"selected-packages":null==M||null===(S=M.image)||void 0===S||null===(k=S.Packages)||void 0===k?void 0:k.map((function(e){return N(N({},e),{},{name:e.Name})})),"third-party-repositories":null==M||null===(_=M.image)||void 0===_?void 0:_.ThirdPartyRepositories,"custom-packages":null==M||null===(P=M.image)||void 0===P||null===(U=P.CustomPackages)||void 0===U?void 0:U.map((function(e){return N(N({},e),{},{name:e.Name})}))},schema:{fields:[{component:d.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==M||null===(C=M.image)||void 0===C?void 0:C.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[m.bR,m.Ud,m.l9,m.jS,m.B9,m.jS,m.j7,m.Sp]}]}}):s().createElement(p.Y,null,s().createElement(v.b,null,s().createElement(g.$,{isSVG:!0,diameter:"100px"})))};k.propTypes={navigateBack:b().func,updateImageID:b().number},k.defaultProps={navigateBack:function(){}};const _=k}}]);
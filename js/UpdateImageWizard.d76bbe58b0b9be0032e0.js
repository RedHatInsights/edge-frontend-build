"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[46],{53010:(e,n,i)=>{i.r(n),i.d(n,{default:()=>R});var t=i(93433),a=i(4942),l=i(15861),r=i(29439),u=i(64687),o=i.n(u),s=i(92950),c=i.n(s),d=i(61094),m=i(96354),v=i(25563),g=i(52643),p=i(29390),f=i(37619),b=i(45697),h=i.n(b),D=i(20873),y=i(94778),I=i(77760),w=i(59245),O=i(5230),N=i(93597),S=i(83215),E=i(48903),j=i(98309);function k(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function P(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?k(Object(i),!0).forEach((function(n){(0,a.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var _=function(e){var n,i,a,u,b,h,k,_,R,U,T,Z,C,B,V,x,A,G=e.navigateBack,L=e.updateImageID,M=e.reload,q=(0,s.useState)(),z=(0,r.Z)(q,2),F=z[0],K=z[1],$=(0,I.useDispatch)(),H=function(){G(),M&&M()},J=(0,E.gV)("fleet-management.temporary-releases"),W=(0,E.gV)("edge-management.image_wizard_ui"),Y=(0,s.useContext)(w.g).getRegistry,Q=(0,I.useSelector)((function(e){var n=e.imageDetailReducer;return{data:(null==n?void 0:n.data)||null}}),I.shallowEqual).data;return(0,s.useEffect)((function(){var e=Y().register({imageDetailReducer:O.OD});return L&&(0,y.J_)($,L),function(){return e()}}),[$]),(0,s.useEffect)((function(){(0,l.Z)(o().mark((function e(){var n,i,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=insights)||void 0===n||null===(i=n.chrome)||void 0===i||null===(t=i.auth)||void 0===t||t.getUser().then((function(e){return K(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),F&&Q?c().createElement(d.Z,{onClose:H,customComponentMapper:{review:D.Z},onSubmit:function(e){var n,i,t,a,l,r=e.values;(0,e.setIsSaving)((function(){return!0}));var u=P(P({},r),{},{Id:null==Q||null===(n=Q.image)||void 0===n?void 0:n.ID,name:null==Q||null===(i=Q.image)||void 0===i?void 0:i.Name,version:(null==Q||null===(t=Q.image)||void 0===t?void 0:t.Version)+1,architecture:"x86_64",credentials:r.credentials?r.credentials:null==Q||null===(a=Q.image)||void 0===a?void 0:a.Installer.SshKey,username:r.username?r.username:null==Q||null===(l=Q.image)||void 0===l?void 0:l.Installer.Username});(0,y.Es)($,u,(function(e){$(P(P({},(0,S.wN)({variant:"info",title:"Updating image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,N.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(n){return n((0,S.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(n){return n((0,S.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),H(),$((0,y.Fj)({name:Q.value.Name,id:Q.value.ID}))}))},defaultArch:"x86_64",initialValues:{imageID:null==Q?void 0:Q.image.ID,name:null==Q||null===(n=Q.image)||void 0===n?void 0:n.Name,isUpdate:!0,description:null==Q||null===(i=Q.image)||void 0===i?void 0:i.Description,credentials:null==Q||null===(a=Q.image)||void 0===a?void 0:a.Installer.SshKey,username:null==Q||null===(u=Q.image)||void 0===u?void 0:u.Installer.Username,version:null==Q||null===(b=Q.image)||void 0===b?void 0:b.Version,release:null==Q||null===(h=Q.image)||void 0===h?void 0:h.Distribution,release_options:J?(0,E.pS)(null==Q||null===(k=Q.image)||void 0===k?void 0:k.Distribution,[].concat((0,t.Z)(j.vk),(0,t.Z)(j.R8))):(0,E.pS)(null==Q||null===(_=Q.image)||void 0===_?void 0:_.Distribution),imageType:["rhel-edge-commit"],"selected-packages":null==Q||null===(R=Q.image)||void 0===R||null===(U=R.Packages)||void 0===U?void 0:U.map((function(e){return P(P({},e),{},{name:e.Name})})),"third-party-repositories":null==Q||null===(T=Q.image)||void 0===T||null===(Z=T.ThirdPartyRepositories)||void 0===Z?void 0:Z.map((function(e){return P({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==Q||null===(C=Q.image)||void 0===C||null===(B=C.ThirdPartyRepositories)||void 0===B?void 0:B.map((function(e){return P({id:e.ID,name:e.Name},e)})),"custom-packages":null==Q||null===(V=Q.image)||void 0===V||null===(x=V.CustomPackages)||void 0===x?void 0:x.map((function(e){return P(P({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Update image"},showTitles:!0,title:"Update image: ".concat(null==Q||null===(A=Q.image)||void 0===A?void 0:A.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,(0,v.jS)(W),v.B9,v.$B,v.j7,v.Sp]}]}}):c().createElement(p.Y,null,c().createElement(g.b,null,c().createElement(f.$,{isSVG:!0,diameter:"100px"})))};_.propTypes={navigateBack:h().func,updateImageID:h().number,reload:h().func},_.defaultProps={navigateBack:function(){}};const R=_}}]);
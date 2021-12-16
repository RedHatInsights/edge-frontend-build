"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[877],{12877:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ve});var l=n(4942),a=n(29439),i=n(93264),o=n.n(i),r=n(48716),u=n(49739),d=n(83826),c=n(68340),s=n(2372),m=n(52643),v=n(82041),p=n(59245),g=n(94778),f=n(24672),E=n(75662),h=n(45697),b=n.n(h),D=n(25834),S=n(78140),y=n(68774),I=n(15209),k=n(64029),O=n(32835),U=n(79851),w=n(34512),N=n(56787),C=n(84457),_=n(75728),P=n(99355),T=n(9043),x=n(4147),R=n(5964),j=function(e,t,n){var l,a,i,r,u,d,s,m=t||(null==e||null===(l=e.images)||void 0===l?void 0:l[(null==e||null===(a=e.images)||void 0===a?void 0:a.length)-1]),v=[];return(null==m||null===(i=m.image)||void 0===i?void 0:i.ID)&&v.push(o().createElement(C.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return n(null==m||null===(e=m.image)||void 0===e?void 0:e.ID)}},"Create new version")),(null==m||null===(r=m.image)||void 0===r||null===(u=r.Installer)||void 0===u?void 0:u.ImageBuildISOURL)&&v.push(o().createElement(C.h,{key:"download-button",component:"button"},o().createElement(c.x,{className:"force-text-black remove-underline",component:"a",href:null==m||null===(d=m.image)||void 0===d||null===(s=d.Installer)||void 0===s?void 0:s.ImageBuildISOURL,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),v},V=function(e){var t,n,l,r,u,d,c,s,m,v,p,g,f,h,b,C,V,Z=e.imageData,L=e.imageVersion,A=e.openUpdateWizard,F=(0,i.useState)(!1),z=(0,a.Z)(F,2),G=z[0],B=z[1],W=(0,i.useState)({}),K=(0,a.Z)(W,2),M=K[0],q=K[1];return(0,i.useEffect)((function(){var e;q(null==Z||null===(e=Z.data)||void 0===e?void 0:e.Data)}),[Z]),o().createElement(o().Fragment,null,o().createElement(k.a,null,o().createElement(O.g,null,o().createElement(E.Link,{to:x._j.gb},"Manage Images")),L?o().createElement(O.g,null,o().createElement(E.Link,{to:"".concat(x._j.gb,"/").concat(null==M||null===(t=M.image_set)||void 0===t?void 0:t.ID)},null==M||null===(n=M.image_set)||void 0===n?void 0:n.Name)):o().createElement(O.g,{isActive:!0},(null==M||null===(l=M.image_set)||void 0===l?void 0:l.Name)||o().createElement(I.O,{width:"100px"})),L&&o().createElement(O.g,{isActive:!0},null==L||null===(r=L.image)||void 0===r?void 0:r.Version)),o().createElement(y.D,null,o().createElement(U.P,null,o().createElement(w.J,null,o().createElement(D.G,{component:"dl"},o().createElement(S.T,{component:"h1",className:"grid-align-center"},(null==M||null===(u=M.image_set)||void 0===u?void 0:u.Name)||o().createElement(I.O,{width:"150px"})),o().createElement(S.T,{component:"dd"},null!=M&&M.Status||null!=M&&null!==(d=M.images)&&void 0!==d&&null!==(c=d[(null==M||null===(m=M.images)||void 0===m?void 0:m.length)-1])&&void 0!==c&&null!==(s=c.image)&&void 0!==s&&s.Status?o().createElement(T.Z,{status:null==M||null===(v=M.images)||void 0===v||null===(p=v[(null==M||null===(f=M.images)||void 0===f?void 0:f.length)-1])||void 0===p||null===(g=p.image)||void 0===g?void 0:g.Status}):o().createElement(I.O,{width:"100px"})))),o().createElement(w.J,{isFilled:!0}),o().createElement(w.J,null,o().createElement(N.L,{position:P.ir.right,toggle:o().createElement(_.Z,{id:"image-set-details-dropdown",toggleIndicator:R.ZP,onToggle:function(e){return B(e)},isDisabled:"BUILDING"===(L?null==L||null===(h=L.image)||void 0===h?void 0:h.Status:null==M||null===(b=M.Images)||void 0===b||null===(C=b[(null==M||null===(V=M.Images)||void 0===V?void 0:V.length)-1])||void 0===C?void 0:C.Status)||!1},"Actions"),isOpen:G,dropdownItems:j(M,L,A)})))))};V.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func};const Z=V;var L=n(14638),A=n(28883),F=n(29873),z=n(93433),G=n(50693),B=n(16475),W=n(66435),K=n(62410),M=n(68920),q=function(e){var t,n=e.imageData,l=e.imageVersion,r=(0,i.useState)({}),u=(0,a.Z)(r,2),d=u[0],s=u[1];(0,i.useEffect)((function(){var e,t,a,i,o,r;s(l||(null==n||null===(e=n.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(a=t.images)||void 0===a?void 0:a[(null==n||null===(i=n.data)||void 0===i||null===(o=i.Data)||void 0===o||null===(r=o.images)||void 0===r?void 0:r.length)-1]))}),[n,l]);var m=function(e){return(0,z.Z)(Array(2*e)).map((function(e){return o().createElement(I.O,{width:"180px",key:e})}))},v={"Image name":"Name",Version:"Version",Created:function(){return o().createElement(K.Z,{date:null==d||null===(e=d.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==d||null===(e=d.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return o().createElement("div",{key:t},e)}))},Release:function(){var e;return null===M.aN||void 0===M.aN?void 0:M.aN[null==d||null===(e=d.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},p={Username:function(){var e,t;return null==d||null===(e=d.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH Key":function(){var e,t;return null==d||null===(e=d.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},g={"Total Additional Packages":function(){return null==d?void 0:d.additional_packages},"Total Packages":function(){return null==d?void 0:d.packages}},f={Added:function(){return null==d?void 0:d.update_added},Removed:function(){return null==d?void 0:d.update_removed},Updated:function(){return null==d?void 0:d.update_updated}};null!=d&&null!==(t=d.Installer)&&void 0!==t&&t.Checksum&&(v["SHA-256 Checksum"]=function(){var e,t;return null==d||null===(e=d.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum});var E=function(e){return d?Object.entries(e).map((function(e){var t,n,l=(0,a.Z)(e,2),i=l[0],r=l[1];return o().createElement(o().Fragment,null,o().createElement(S.T,{className:"details-label",component:S.v.dt},i),"SHA-256 Checksum"===i||"SSH Key"===i&&r()?o().createElement(S.T,{component:S.v.dd},o().createElement(W.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word"},"function"==typeof r?r()||"Unavailable":(null==d||null===(t=d.image)||void 0===t?void 0:t[r])||"Unavailable")):o().createElement(S.T,{className:"pf-u-text-break-word",component:S.v.dd},"function"==typeof r?0===r()?0:r()||"Unavailable":(null==d||null===(n=d.image)||void 0===n?void 0:n[r])||"Unavailable"))})):null};return o().createElement(y.D,{className:"pf-u-ml-lg pf-u-mt-md"},o().createElement(G.r,{span:12},o().createElement(B.P,{span:6},o().createElement(c.x,{component:c.q.h2},l?"Details":"Most recent image"),o().createElement(D.G,{component:D.F.dl},E(v)||m(6)),o().createElement(c.x,{component:c.q.h2},"User Information "),o().createElement(D.G,{component:D.F.dl},E(p)||m(2))),o().createElement(B.P,{span:6},o().createElement(c.x,{component:c.q.h2},"Packages "),o().createElement(D.G,{component:D.F.dl},E(g)||m(3)),o().createElement(c.x,{component:c.q.h2},"Changes from previous version"),o().createElement(D.G,{component:D.F.dl},E(f)||m(3)))))};q.propTypes={imageData:b().object,imageVersion:b().object};const H=q;var J=n(383),Q=[{label:"Status",type:"checkbox",options:[{option:"CREATED"},{option:"BUILDING"},{option:"ERROR"},{option:"SUCCESS"}]}],$=[{title:"Version",type:"version",sort:!0},{title:"Output",type:"image_type",sort:!1},{title:"Created",type:"created_at",sort:!0},{title:"Status",type:"status",sort:!1}],X=function(e){var t,n=e.imageData,l=e.openUpdateWizard,r=(0,i.useState)([]),u=(0,a.Z)(r,2),d=u[0],s=u[1];return(0,i.useEffect)((function(){var e,t,l,a,i,r,u;null!=n&&n.data&&s((r=null==n||null===(e=n.data)||void 0===e||null===(t=e.Data)||void 0===t?void 0:t.images,u=null==n||null===(l=n.data)||void 0===l||null===(a=l.Data)||void 0===a||null===(i=a.image_set)||void 0===i?void 0:i.ID,null==r?void 0:r.map((function(e){var t,n=e.image;return{id:null==n?void 0:n.ID,noApiSortFilter:[null==n?void 0:n.Version,M.bd[null==n?void 0:n.ImageType],null==n?void 0:n.CreatedAt,null==n?void 0:n.Status],cells:[{title:o().createElement(E.Link,{to:"".concat(x._j.gb,"/").concat(u,"/").concat(n.ID)},null==n?void 0:n.Version)},{title:M.bd[null==n?void 0:n.ImageType]},{title:o().createElement(K.Z,{date:null==n?void 0:n.CreatedAt})},{title:o().createElement(T.Z,{status:null==n?void 0:n.Status})}],imageStatus:null==n?void 0:n.Status,isoURL:null==n||null===(t=n.Installer)||void 0===t?void 0:t.ImageBuildISOURL}}))))}),[n]),o().createElement(J.Z,{apiFilterSort:!1,filters:Q,loadTableData:g.VR,tableData:{count:null==n||null===(t=n.data)||void 0===t?void 0:t.Count,isLoading:null==n?void 0:n.isLoading,hasError:null==n?void 0:n.hasError},columnNames:$,rows:d||[],actionResolver:function(e){var t=[];return null!=e&&e.isoURL&&t.push({title:o().createElement(c.x,{className:"force-text-black remove-underline",component:"a",href:e.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),"SUCCESS"!==(null==e?void 0:e.imageStatus)&&"ERROR"!==(null==e?void 0:e.imageStatus)||t.push({title:"Update Image",onClick:function(e,t,n){l(n.id)}}),"BUILDING"===(null==e?void 0:e.imageStatus)&&null!=e&&e.id&&t.push({title:""}),t},areActionsDisabled:function(e){return"BUILDING"===(null==e?void 0:e.imageStatus)},defaultSort:{index:2,direction:"desc"}})};X.propTypes={imageData:b().object,urlParam:b().string,openUpdateWizard:b().func};const Y=X;var ee=n(47173),te=n(15265),ne=[{label:"Name",type:"text"}],le=[{title:"Name",type:"name",sort:!0},{title:"Version",type:"version",sort:!1},{title:"Release",type:"release",sort:!1},{title:"Type",type:"type",sort:!1}],ae=function(e,t,n){return(0===n?e.filter((function(e){return t.filter((function(t){return e.name===t.Name})).length>0})):e).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,null==e?void 0:e.type],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,null==e?void 0:e.type,{title:o().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---8/x86_64/7416/".concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},o().createElement(ee.zx,{variant:"link",isSmall:!0,icon:o().createElement(te.ZP,null),iconPosition:"right"},"More information"))}]}}))},ie=function(e){var t,n,l,r,u,d=e.imageVersion,c=(0,i.useState)({}),s=(0,a.Z)(c,2),m=s[0],v=s[1],p=(0,i.useState)(1),g=(0,a.Z)(p,2),f=g[0],E=g[1];return(0,i.useEffect)((function(){v(d)}),[d]),o().createElement(J.Z,{apiFilterSort:!1,filters:ne,tableData:{count:0===f?null==m?void 0:m.additional_packages:null==m?void 0:m.packages,isLoading:!1,hasError:!1},columnNames:le,rows:null!=m&&null!==(t=m.image)&&void 0!==t&&null!==(n=t.Commit)&&void 0!==n&&n.InstalledPackages?ae(null==m||null===(l=m.image)||void 0===l||null===(r=l.Commit)||void 0===r?void 0:r.InstalledPackages,null==m||null===(u=m.image)||void 0===u?void 0:u.Packages,f):[],actionResolver:[],areActionsDisabled:!0,defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:E,toggleState:f,emptyStateMessage:"No packages to display"})};ie.propTypes={imageVersion:b().object};const oe=ie;var re=function(e){var t=e.imageData,n=e.openUpdateWizard,l=e.imageVersion,r=(0,i.useState)(0),u=(0,a.Z)(r,2),d=u[0],c=u[1];return o().createElement("div",{className:"edge-c-device--detail add-100vh"},o().createElement(L.m,{className:"pf-u-ml-md",activeKey:d,onSelect:function(e,t){return c(t)}},o().createElement(A.O,{eventKey:0,title:o().createElement(F.T,null,"Details")},o().createElement(H,{imageData:t,imageVersion:l})),l?o().createElement(A.O,{eventKey:1,title:o().createElement(F.T,null,"Packages")},o().createElement(oe,{imageVersion:l})):o().createElement(A.O,{eventKey:1,title:o().createElement(F.T,null,"Versions")},o().createElement(Y,{imageData:t,openUpdateWizard:n}))))};re.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func};const ue=re;var de=n(53010),ce=n(86350);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ve=function(){var e,t,n,l,h,b,D,S,y=(0,E.useParams)(),I=y.imageId,k=y.imageVersionId,O=(0,i.useContext)(p.g).getRegistry,U=(0,v.useDispatch)(),w=(0,E.useHistory)(),N=(0,i.useState)({isOpen:!1,updateId:null}),C=(0,a.Z)(N,2),_=C[0],P=C[1],T=(0,i.useState)(null),x=(0,a.Z)(T,2),R=x[0],j=x[1],V=(0,v.useSelector)((function(e){var t=e.imageSetDetailReducer;return{data:(null==t?void 0:t.data)||null,isLoading:null==t?void 0:t.isLoading,hasError:null==t?void 0:t.hasError}}),v.shallowEqual),L=function(e){w.push({pathname:w.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),P((function(t){return me(me({},t),{},{isOpen:!t.isLoading,updateId:e})}))};return(0,i.useEffect)((function(){var e,t,n,l,a,i;j(k?null==V||null===(e=V.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(n=t.images)||void 0===n?void 0:n[null==V||null===(l=V.data)||void 0===l||null===(a=l.Data)||void 0===a||null===(i=a.images)||void 0===i?void 0:i.findIndex((function(e){var t;return(null==e||null===(t=e.image)||void 0===t?void 0:t.ID)==k}))]:null)}),[V,k]),(0,i.useEffect)((function(){var e=O().register({imageSetDetailReducer:f.MQ});return(0,g.VR)(U,I),function(){return e()}}),[I]),o().createElement(i.Fragment,null,o().createElement(r.Z,{className:"pf-m-light"},o().createElement(u.K,{hasGutter:!0},o().createElement(d.v,null,o().createElement(Z,{imageData:V,imageVersion:R,openUpdateWizard:L}))),o().createElement(d.v,null,o().createElement(c.x,null,R?null==R||null===(e=R.image)||void 0===e?void 0:e.Description:null==V||null===(t=V.data)||void 0===t||null===(n=t.Data)||void 0===n||null===(l=n.images)||void 0===l||null===(h=l[(null==V||null===(b=V.data)||void 0===b||null===(D=b.Data)||void 0===D||null===(S=D.images)||void 0===S?void 0:S.length)-1].image)||void 0===h?void 0:h.Description))),o().createElement(ce.Z,null,o().createElement(ue,{imageData:V,urlParam:I,imageVersion:R,openUpdateWizard:L})),_.isOpen&&o().createElement(i.Suspense,{fallback:o().createElement(m.b,null,o().createElement(s.$,null))},o().createElement(de.default,{navigateBack:function(){w.push({pathname:w.location.pathname}),P((function(e){return me(me({},e),{},{isOpen:!1})}))},updateImageID:_.updateId})))}}}]);
//# sourceMappingURL=../sourcemaps/877.409af67c7b5a16b5389d7e7fb7da977d.js.map
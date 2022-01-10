"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[877],{12877:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var l=n(4942),a=n(29439),i=n(93264),o=n.n(i),r=n(48716),u=n(49739),c=n(83826),d=n(68340),s=n(2372),m=n(52643),v=n(82041),p=n(59245),g=n(94778),f=n(24672),E=n(75662),h=n(45697),b=n.n(h),S=n(25834),y=n(78140),D=n(68774),k=n(15209),I=n(64029),O=n(32835),U=n(79851),C=n(34512),w=n(56787),L=n(84457),T=n(75728),j=n(99355),_=n(9043),P=n(4147),N=n(5964),x=function(e,t,n){var l,a,i,r,u,c,s=t||(null==e||null===(l=e.images)||void 0===l?void 0:l[0]),m=[];return(null==s||null===(a=s.image)||void 0===a?void 0:a.ID)&&m.push(o().createElement(L.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return n(null==s||null===(e=s.image)||void 0===e?void 0:e.ID)}},"Create new version")),(null==s||null===(i=s.image)||void 0===i||null===(r=i.Installer)||void 0===r?void 0:r.ImageBuildISOURL)&&m.push(o().createElement(L.h,{key:"download-button",component:"button"},o().createElement(d.x,{className:"force-text-black remove-underline",component:"a",href:null==s||null===(u=s.image)||void 0===u||null===(c=u.Installer)||void 0===c?void 0:c.ImageBuildISOURL,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),m},R=function(e){var t,n,l,r,u,c,d,s,m,v,p,g,f,h,b=e.imageData,L=e.imageVersion,R=e.openUpdateWizard,Z=(0,i.useState)(!1),A=(0,a.Z)(Z,2),V=A[0],W=A[1],F=(0,i.useState)({}),z=(0,a.Z)(F,2),B=z[0],G=z[1];return(0,i.useEffect)((function(){var e;G(null==b||null===(e=b.data)||void 0===e?void 0:e.Data)}),[b]),o().createElement(o().Fragment,null,o().createElement(I.a,null,o().createElement(O.g,null,o().createElement(E.Link,{to:P._j.gb},"Manage Images")),L?o().createElement(O.g,null,o().createElement(E.Link,{to:"".concat(P._j.gb,"/").concat(null==B||null===(t=B.image_set)||void 0===t?void 0:t.ID)},null==B||null===(n=B.image_set)||void 0===n?void 0:n.Name)):o().createElement(O.g,{isActive:!0},(null==B||null===(l=B.image_set)||void 0===l?void 0:l.Name)||o().createElement(k.O,{width:"100px"})),L&&o().createElement(O.g,{isActive:!0},null==L||null===(r=L.image)||void 0===r?void 0:r.Version)),o().createElement(D.D,null,o().createElement(U.P,null,o().createElement(C.J,null,o().createElement(S.G,{component:"dl"},o().createElement(y.T,{component:"h1",className:"grid-align-center"},(null==B||null===(u=B.image_set)||void 0===u?void 0:u.Name)||o().createElement(k.O,{width:"150px"})),o().createElement(y.T,{component:"dd"},null!=B&&B.Status||null!=B&&null!==(c=B.images)&&void 0!==c&&null!==(d=c[0])&&void 0!==d&&null!==(s=d.image)&&void 0!==s&&s.Status?o().createElement(_.Z,{status:null==B||null===(m=B.images)||void 0===m||null===(v=m[0])||void 0===v||null===(p=v.image)||void 0===p?void 0:p.Status}):o().createElement(k.O,{width:"100px"})))),o().createElement(C.J,{isFilled:!0}),o().createElement(C.J,null,o().createElement(w.L,{position:j.ir.right,toggle:o().createElement(T.Z,{id:"image-set-details-dropdown",toggleIndicator:N.ZP,onToggle:function(e){return W(e)},isDisabled:"BUILDING"===(L?null==L||null===(g=L.image)||void 0===g?void 0:g.Status:null==B||null===(f=B.Images)||void 0===f||null===(h=f[0])||void 0===h?void 0:h.Status)||!1},"Actions"),isOpen:V,dropdownItems:x(B,L,R)})))))};R.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func};const Z=R;var A=n(14638),V=n(28883),W=n(29873),F=n(93433),z=n(50693),B=n(16475),G=n(66435),K=n(62410),H=n(68920),M=function(e){var t,n=e.imageData,l=e.imageVersion,r=(0,i.useState)({}),u=(0,a.Z)(r,2),c=u[0],s=u[1];(0,i.useEffect)((function(){var e,t,a;s(l||(null==n||null===(e=n.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(a=t.images)||void 0===a?void 0:a[0]))}),[n,l]);var m=function(e){return(0,F.Z)(Array(2*e)).map((function(e){return o().createElement(k.O,{width:"180px",key:e})}))},v={Version:"Version",Created:function(){return o().createElement(K.Z,{date:null==c||null===(e=c.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return o().createElement("div",{key:t},e)}))},Release:function(){var e;return null===H.aN||void 0===H.aN?void 0:H.aN[null==c||null===(e=c.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},p={Username:function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH Key":function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},g={"Total Additional Packages":function(){var e,t;return o().createElement(E.Link,{to:"".concat(P._j.gb,"/").concat(null==c||null===(e=c.image)||void 0===e?void 0:e.ImageSetID,"/").concat(null==c||null===(t=c.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==c?void 0:c.additional_packages)},"Total Packages":function(){var e,t;return o().createElement(E.Link,{to:"".concat(P._j.gb,"/").concat(null==c||null===(e=c.image)||void 0===e?void 0:e.ImageSetID,"/").concat(null==c||null===(t=c.image)||void 0===t?void 0:t.ID,"/packages/all")},null==c?void 0:c.packages)}},f={Added:function(){return null==c?void 0:c.update_added},Removed:function(){return null==c?void 0:c.update_removed},Updated:function(){return null==c?void 0:c.update_updated}};null!=c&&null!==(t=c.Installer)&&void 0!==t&&t.Checksum&&(v["SHA-256 Checksum"]=function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum});var h=function(e){return c?Object.entries(e).map((function(e){var t,n,l=(0,a.Z)(e,2),i=l[0],r=l[1];return o().createElement(o().Fragment,null,o().createElement(y.T,{className:"details-label",component:y.v.dt},i),"SHA-256 Checksum"===i||"SSH Key"===i&&r()?o().createElement(y.T,{component:y.v.dd},o().createElement(G.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word"},"function"==typeof r?r()||"Unavailable":(null==c||null===(t=c.image)||void 0===t?void 0:t[r])||"Unavailable")):o().createElement(y.T,{className:"pf-u-text-break-word",component:y.v.dd},"function"==typeof r?0===r()?0:r()||"Unavailable":(null==c||null===(n=c.image)||void 0===n?void 0:n[r])||"Unavailable"))})):null};return o().createElement(D.D,{className:"pf-u-ml-lg pf-u-mt-md"},o().createElement(z.r,{span:12},o().createElement(B.P,{span:5},o().createElement(d.x,{component:d.q.h2},l?"Details":"Most recent image"),o().createElement(S.G,{component:S.F.dl},h(v)||m(6)),o().createElement(d.x,{component:d.q.h2},"User Information "),o().createElement(S.G,{component:S.F.dl},h(p)||m(2))),o().createElement(B.P,{span:1}),o().createElement(B.P,{span:6},o().createElement(d.x,{component:d.q.h2},"Packages "),o().createElement(S.G,{component:S.F.dl},h(g)||m(3)),o().createElement(d.x,{component:d.q.h2},"Changes from previous version"),o().createElement(S.G,{component:S.F.dl},h(f)||m(3)))))};M.propTypes={imageData:b().object,imageVersion:b().object};const q=M;var J=n(383),Q=n(27577),$=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],X=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,Q.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,Q.cellWidth)(25)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]}],Y=function(e){var t,n=e.imageData,l=e.openUpdateWizard,r=(0,i.useState)([]),u=(0,a.Z)(r,2),c=u[0],s=u[1];return(0,i.useEffect)((function(){var e,t,l,a,i,r,u;null!=n&&n.data&&s((r=null==n||null===(e=n.data)||void 0===e||null===(t=e.Data)||void 0===t?void 0:t.images,u=null==n||null===(l=n.data)||void 0===l||null===(a=l.Data)||void 0===a||null===(i=a.image_set)||void 0===i?void 0:i.ID,null==r?void 0:r.map((function(e){var t,n=e.image;return{id:null==n?void 0:n.ID,noApiSortFilter:[null==n?void 0:n.Version,H.bd[null==n?void 0:n.ImageType],null==n?void 0:n.CreatedAt,null==n?void 0:n.Status],cells:[{title:o().createElement(E.Link,{to:"".concat(P._j.gb,"/").concat(u,"/").concat(n.ID,"/details")},null==n?void 0:n.Version)},{title:H.bd[null==n?void 0:n.ImageType]},{title:o().createElement(K.Z,{date:null==n?void 0:n.CreatedAt})},{title:o().createElement(_.Z,{status:null==n?void 0:n.Status})}],imageStatus:null==n?void 0:n.Status,isoURL:null==n||null===(t=n.Installer)||void 0===t?void 0:t.ImageBuildISOURL}}))))}),[n]),o().createElement(J.Z,{apiFilterSort:!1,filters:$,loadTableData:g.VR,tableData:{count:null==n||null===(t=n.data)||void 0===t?void 0:t.Count,isLoading:null==n?void 0:n.isLoading,hasError:null==n?void 0:n.hasError},columnNames:X,rows:c||[],actionResolver:function(e){var t=[];return null!=e&&e.isoURL&&t.push({title:o().createElement(d.x,{className:"force-text-black remove-underline",component:"a",href:e.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),"SUCCESS"!==(null==e?void 0:e.imageStatus)&&"ERROR"!==(null==e?void 0:e.imageStatus)||t.push({title:"Update Image",onClick:function(e,t,n){l(n.id)}}),"BUILDING"===(null==e?void 0:e.imageStatus)&&null!=e&&e.id&&t.push({title:""}),t},areActionsDisabled:function(e){return"BUILDING"===(null==e?void 0:e.imageStatus)},defaultSort:{index:2,direction:"desc"}})};Y.propTypes={imageData:b().object,urlParam:b().string,openUpdateWizard:b().func};const ee=Y;var te=n(47173),ne=n(15265),le=n(3035),ae=[{label:"Name",type:"text"}],ie=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,Q.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,Q.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]}],oe=function(e,t,n){return(0===n?e.filter((function(e){return t.filter((function(t){return e.name===t.Name})).length>0})):e).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:o().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---8/x86_64/7416/".concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},o().createElement(te.zx,{variant:"link",isSmall:!0,icon:o().createElement(ne.ZP,null),iconPosition:"right"},"More information"))}]}}))},re={0:"additional",1:"all"},ue={additional:0,all:1},ce=function(e){var t,n,l,r,u,c,d,s=e.imageVersion,m=(0,E.useLocation)(),v=(0,E.useHistory)(),p=m.pathname.split("/"),g=6===p.length?ue[p[5]]:1,f=(0,i.useState)({}),h=(0,a.Z)(f,2),b=h[0],S=h[1],y=(0,i.useState)(g),D=(0,a.Z)(y,2),k=D[0],I=D[1];return(0,i.useEffect)((function(){S(s)}),[s]),(0,i.useEffect)((function(){p[5]!==re[k]&&I(g)}),[p]),"SUCCESS"===(null==s||null===(t=s.image)||void 0===t||null===(n=t.Commit)||void 0===n?void 0:n.Status)?o().createElement(J.Z,{apiFilterSort:!1,filters:ae,tableData:{count:0===k?null==b?void 0:b.additional_packages:null==b?void 0:b.packages,isLoading:!1,hasError:!1},columnNames:ie,rows:null!=b&&null!==(l=b.image)&&void 0!==l&&null!==(r=l.Commit)&&void 0!==r&&r.InstalledPackages?oe(null==b||null===(u=b.image)||void 0===u||null===(c=u.Commit)||void 0===c?void 0:c.InstalledPackages,null==b||null===(d=b.image)||void 0===d?void 0:d.Packages,k):[],actionResolver:[],areActionsDisabled:!0,defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t=p[4].toLowerCase();I(e),"packages"===t&&(6===p.length?p[5]=re[e]:p.push(re[e]),v.push(p.join("/")))},toggleState:k,emptyStateMessage:"No packages to display"}):o().createElement(le.Z,{bgColor:"white",title:"Package data unavailable",body:"Image is currently being built. Once finished packages will be displayed.",primaryAction:null,secondaryActions:[]})};ce.propTypes={imageVersion:b().object};const de=ce;var se={details:0,packages:1,versions:1},me=function(e){var t=e.imageData,n=e.openUpdateWizard,l=e.imageVersion,r=e.isLoading,u=(0,E.useLocation)(),c=(0,E.useHistory)(),d=(0,i.useState)(se.details),s=(0,a.Z)(d,2),m=s[0],v=s[1],p=l?4:3,g=u.pathname.split("/");return(0,i.useEffect)((function(){se[g[3]]!==m&&v(se[g[4]])}),[g]),(0,i.useEffect)((function(){if(p>g.length-1)v(se.details);else{var e=g[p].toLowerCase();v(se[e]||se.details)}}),[l]),o().createElement("div",{className:"edge-c-device--detail add-100vh"},o().createElement(A.m,{className:"pf-u-ml-md",activeKey:m,onSelect:function(e,t){var n=0===t?"details":l?"packages":"versions";g[p]=n,"details"===n?c.push(g.splice(0,5).join("/")):c.push(g.join("/")),v(t)}},o().createElement(V.O,{eventKey:se.details,title:o().createElement(W.T,null,"Details")},o().createElement(q,{imageData:t,imageVersion:l})),r?o().createElement(V.O,{title:o().createElement(W.T,null," ",o().createElement(k.O,{width:"75px"}))}):l?o().createElement(V.O,{eventKey:se.packages,title:o().createElement(W.T,null,"Packages")},o().createElement(de,{imageVersion:l})):o().createElement(V.O,{eventKey:se.versions,title:o().createElement(W.T,null,"Versions")},o().createElement(ee,{imageData:t,openUpdateWizard:n}))))};me.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func,isLoading:b().bool};const ve=me;var pe=n(53010);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ee=function(){var e,t,n,l,h,b,S=(0,E.useParams)(),y=S.imageId,D=S.imageVersionId,k=(0,i.useContext)(p.g).getRegistry,I=(0,v.useDispatch)(),O=(0,E.useHistory)(),U=(0,i.useState)({isOpen:!1,updateId:null}),C=(0,a.Z)(U,2),w=C[0],L=C[1],T=(0,i.useState)(null),j=(0,a.Z)(T,2),_=j[0],P=j[1],N=(0,v.useSelector)((function(e){var t=e.imageSetDetailReducer;return{data:(null==t?void 0:t.data)||null,isLoading:null==t?void 0:t.isLoading,hasError:null==t?void 0:t.hasError}}),v.shallowEqual),x=function(e){O.push({pathname:O.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),L((function(t){return fe(fe({},t),{},{isOpen:!t.isLoading,updateId:e})}))};return(0,i.useEffect)((function(){var e,t,n,l,a,i;P(D?null==N||null===(e=N.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(n=t.images)||void 0===n?void 0:n[null==N||null===(l=N.data)||void 0===l||null===(a=l.Data)||void 0===a||null===(i=a.images)||void 0===i?void 0:i.findIndex((function(e){var t;return(null==e||null===(t=e.image)||void 0===t?void 0:t.ID)==D}))]:null)}),[N,D]),(0,i.useEffect)((function(){var e=k().register({imageSetDetailReducer:f.MQ});return(0,g.VR)(I,y),function(){return e()}}),[y]),o().createElement(i.Fragment,null,o().createElement(r.Z,{className:"pf-m-light"},o().createElement(u.K,{hasGutter:!0},o().createElement(c.v,null,o().createElement(Z,{imageData:N,imageVersion:_,openUpdateWizard:x}))),o().createElement(c.v,null,(null==N||null===(e=N.data)||void 0===e?void 0:e.Data)&&o().createElement(d.x,null,"Last updated ",o().createElement(K.Z,{date:_?null==_||null===(t=_.image)||void 0===t?void 0:t.UpdatedAt:null==N||null===(n=N.data)||void 0===n||null===(l=n.Data)||void 0===l||null===(h=l.images)||void 0===h||null===(b=h[0].image)||void 0===b?void 0:b.UpdatedAt})))),o().createElement(ve,{imageData:N,urlParam:y,imageVersion:_,openUpdateWizard:x,isLoading:N.isLoading}),w.isOpen&&o().createElement(i.Suspense,{fallback:o().createElement(m.b,null,o().createElement(s.$,null))},o().createElement(pe.default,{navigateBack:function(){O.push({pathname:O.location.pathname}),L((function(e){return fe(fe({},e),{},{isOpen:!1})}))},updateImageID:w.updateId})))}}}]);
//# sourceMappingURL=../sourcemaps/877.a91b5e2d240a7f33dfa15dcbda567e9c.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[877],{12877:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(4942),l=n(29439),i=n(93264),o=n.n(i),r=n(48716),u=n(49739),c=n(83826),d=n(2372),s=n(52643),m=n(82041),v=n(59245),g=n(94778),p=n(5230),f=n(75662),E=n(45697),h=n.n(E),b=n(68340),S=n(25834),y=n(78140),k=n(68774),D=n(15209),I=n(64029),T=n(32835),O=n(79851),U=n(34512),C=n(56787),w=n(84457),L=n(75728),_=n(99355),N=n(9043),P=n(4147),j=n(5964),Z=n(62410),A=n(68920),x=function(e,t,n){var a,l,i,r,u,c,d=t||(null==e||null===(a=e.images)||void 0===a?void 0:a[0]),s=[];return(null==d||null===(l=d.image)||void 0===l?void 0:l.ID)&&s.push(o().createElement(w.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return n(null==d||null===(e=d.image)||void 0===e?void 0:e.ID)}},"Create new version")),(null==d||null===(i=d.image)||void 0===i||null===(r=i.Installer)||void 0===r?void 0:r.ImageBuildISOURL)&&s.push(o().createElement(w.h,{key:"download-button",component:"button"},o().createElement(b.x,{className:"force-text-black remove-underline",component:"a",href:null==d||null===(u=d.image)||void 0===u||null===(c=u.Installer)||void 0===c?void 0:c.ImageBuildISOURL,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),s},R=function(e){var t,n,a,r,u,c,d,s,m,v,g,p,E,h,b,w,R,V,F,W,B=e.imageData,z=e.imageVersion,G=e.openUpdateWizard,K=(0,i.useState)(!1),H=(0,l.Z)(K,2),M=H[0],q=H[1],J=(0,i.useState)({}),Q=(0,l.Z)(J,2),$=Q[0],X=Q[1];return(0,i.useEffect)((function(){var e;X(null==B||null===(e=B.data)||void 0===e?void 0:e.Data)}),[B]),o().createElement(o().Fragment,null,(0,A.Cp)(null==$?void 0:$.image_set)?o().createElement(I.a,null,o().createElement(T.g,null,o().createElement(f.Link,{to:P._j.gb},"Back to Manage Images"))):o().createElement(o().Fragment,null,o().createElement(I.a,null,o().createElement(T.g,null,o().createElement(f.Link,{to:P._j.gb},"Manage Images")),z?o().createElement(T.g,null,o().createElement(f.Link,{to:"".concat(P._j.gb,"/").concat(null==$||null===(t=$.image_set)||void 0===t?void 0:t.ID)},null==$||null===(n=$.image_set)||void 0===n?void 0:n.Name)):o().createElement(T.g,{isActive:!0},(null==$||null===(a=$.image_set)||void 0===a?void 0:a.Name)||o().createElement(D.O,{width:"100px"})),z&&o().createElement(T.g,{isActive:!0},null==z||null===(r=z.image)||void 0===r?void 0:r.Version)),o().createElement(k.D,null,o().createElement(O.P,null,o().createElement(U.J,null,o().createElement(S.G,{component:"dl"},o().createElement(y.T,{component:"h1",className:"grid-align-center pf-u-mb-0"},(null==$||null===(u=$.image_set)||void 0===u?void 0:u.Name)||o().createElement(D.O,{width:"150px"})),o().createElement(y.T,{component:"dd"},null!=$&&$.Status||null!=$&&null!==(c=$.images)&&void 0!==c&&null!==(d=c[0])&&void 0!==d&&null!==(s=d.image)&&void 0!==s&&s.Status?o().createElement(N.Z,{status:null==$||null===(m=$.images)||void 0===m||null===(v=m[0])||void 0===v||null===(g=v.image)||void 0===g?void 0:g.Status}):o().createElement(D.O,{width:"100px"})),null!=z&&null!==(p=z.image)&&void 0!==p&&p.UpdatedAt||null!=$&&null!==(E=$.images)&&void 0!==E&&null!==(h=E[0].image)&&void 0!==h&&h.UpdatedAt?o().createElement(y.T,{component:"p"},"Last updated ",o().createElement(Z.Z,{date:z?null==z||null===(b=z.image)||void 0===b?void 0:b.UpdatedAt:null==$||null===(w=$.images)||void 0===w||null===(R=w[0].image)||void 0===R?void 0:R.UpdatedAt})):o().createElement(D.O,{width:"200px"}))),o().createElement(U.J,{isFilled:!0}),o().createElement(U.J,null,o().createElement(C.L,{position:_.ir.right,toggle:o().createElement(L.Z,{id:"image-set-details-dropdown",toggleIndicator:j.ZP,onToggle:function(e){return q(e)},isDisabled:"BUILDING"===(z?null==z||null===(V=z.image)||void 0===V?void 0:V.Status:null==$||null===(F=$.Images)||void 0===F||null===(W=F[0])||void 0===W?void 0:W.Status)||!1},"Actions"),isOpen:M,dropdownItems:x($,z,G)}))))))};R.propTypes={imageData:h().object,imageVersion:h().object,openUpdateWizard:h().func};const V=R;var F=n(14638),W=n(28883),B=n(29873),z=n(93433),G=n(50693),K=n(16475),H=n(66435),M=function(e){var t,n=e.imageData,a=e.imageVersion,r=(0,i.useState)({}),u=(0,l.Z)(r,2),c=u[0],d=u[1];(0,i.useEffect)((function(){var e,t,l;d(a||(null==n||null===(e=n.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(l=t.images)||void 0===l?void 0:l[0]))}),[n,a]);var s=function(e){return(0,z.Z)(Array(2*e)).map((function(e){return o().createElement(D.O,{width:"180px",key:e})}))},m={Version:"Version",Created:function(){return o().createElement(Z.Z,{date:null==c||null===(e=c.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return o().createElement("div",{key:t},e)}))},Release:function(){var e;return null===A.aN||void 0===A.aN?void 0:A.aN[null==c||null===(e=c.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},v={Username:function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH Key":function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},g={"Total Additional Packages":function(){var e,t;return o().createElement(f.Link,{to:"".concat(P._j.gb,"/").concat(null==c||null===(e=c.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==c||null===(t=c.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==c?void 0:c.additional_packages)},"Total Packages":function(){var e,t;return o().createElement(f.Link,{to:"".concat(P._j.gb,"/").concat(null==c||null===(e=c.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==c||null===(t=c.image)||void 0===t?void 0:t.ID,"/packages/all")},null==c?void 0:c.packages)}},p={Added:function(){return null==c?void 0:c.update_added},Removed:function(){return null==c?void 0:c.update_removed},Updated:function(){return null==c?void 0:c.update_updated}};null!=c&&null!==(t=c.Installer)&&void 0!==t&&t.Checksum&&(m["SHA-256 Checksum"]=function(){var e,t;return null==c||null===(e=c.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum});var E=function(e){return c?Object.entries(e).map((function(e){var t,n,a=(0,l.Z)(e,2),i=a[0],r=a[1];return o().createElement(o().Fragment,null,o().createElement(y.T,{className:"details-label",component:y.v.dt},i),"SHA-256 Checksum"===i||"SSH Key"===i&&r()?o().createElement(y.T,{component:y.v.dd},o().createElement(H.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word"},"function"==typeof r?r()||"Unavailable":(null==c||null===(t=c.image)||void 0===t?void 0:t[r])||"Unavailable")):o().createElement(y.T,{className:"pf-u-text-break-word",component:y.v.dd},"function"==typeof r?0===r()?0:r()||"Unavailable":(null==c||null===(n=c.image)||void 0===n?void 0:n[r])||"Unavailable"))})):null};return o().createElement(k.D,{className:"pf-u-ml-lg pf-u-mt-md"},o().createElement(G.r,{span:12},o().createElement(K.P,{span:5},o().createElement(b.x,{component:b.q.h2},a?"Details":"Most recent image"),o().createElement(S.G,{component:S.F.dl},E(m)||s(6)),o().createElement(b.x,{component:b.q.h2},"User Information "),o().createElement(S.G,{component:S.F.dl},E(v)||s(2))),o().createElement(K.P,{span:1}),o().createElement(K.P,{span:6},o().createElement(b.x,{component:b.q.h2},"Packages "),o().createElement(S.G,{component:S.F.dl},E(g)||s(3)),o().createElement(b.x,{component:b.q.h2},"Changes from previous version"),o().createElement(S.G,{component:S.F.dl},E(p)||s(3)))))};M.propTypes={imageData:h().object,imageVersion:h().object};const q=M;var J=n(66577),Q=n(27577),$=n(86350),X=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],Y=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,Q.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,Q.cellWidth)(25)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]}],ee=function(e){var t,n=e.imageData,a=e.openUpdateWizard,r=(0,i.useState)([]),u=(0,l.Z)(r,2),c=u[0],d=u[1];return(0,i.useEffect)((function(){var e,t,a,l,i,r,u;null!=n&&n.data&&d((r=null==n||null===(e=n.data)||void 0===e||null===(t=e.Data)||void 0===t?void 0:t.images,u=null==n||null===(a=n.data)||void 0===a||null===(l=a.Data)||void 0===l||null===(i=l.image_set)||void 0===i?void 0:i.ID,null==r?void 0:r.map((function(e){var t,n=e.image;return{id:null==n?void 0:n.ID,noApiSortFilter:[null==n?void 0:n.Version,A.bd[null==n?void 0:n.ImageType],null==n?void 0:n.CreatedAt,null==n?void 0:n.Status],cells:[{title:o().createElement(f.Link,{to:"".concat(P._j.gb,"/").concat(u,"/versions/").concat(n.ID,"/details")},null==n?void 0:n.Version)},{title:A.bd[null==n?void 0:n.ImageType]},{title:o().createElement(Z.Z,{date:null==n?void 0:n.CreatedAt})},{title:o().createElement(N.Z,{status:null==n?void 0:n.Status})}],imageStatus:null==n?void 0:n.Status,isoURL:null==n||null===(t=n.Installer)||void 0===t?void 0:t.ImageBuildISOURL}}))))}),[n]),o().createElement($.Z,{className:"add-100vh"},o().createElement(J.Z,{apiFilterSort:!1,filters:X,loadTableData:g.VR,tableData:{count:null==n||null===(t=n.data)||void 0===t?void 0:t.Count,isLoading:null==n?void 0:n.isLoading,hasError:null==n?void 0:n.hasError},columnNames:Y,rows:c||[],actionResolver:function(e){var t=[];return null!=e&&e.isoURL&&t.push({title:o().createElement(b.x,{className:"force-text-black remove-underline",component:"a",href:e.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),"SUCCESS"!==(null==e?void 0:e.imageStatus)&&"ERROR"!==(null==e?void 0:e.imageStatus)||t.push({title:"Update Image",onClick:function(e,t,n){a(n.id)}}),"BUILDING"===(null==e?void 0:e.imageStatus)&&null!=e&&e.id&&t.push({title:""}),t},areActionsDisabled:function(e){return"BUILDING"===(null==e?void 0:e.imageStatus)},defaultSort:{index:2,direction:"desc"}}))};ee.propTypes={imageData:h().object,urlParam:h().string,openUpdateWizard:h().func};const te=ee;var ne=n(47173),ae=n(15265),le=n(3035),ie=[{label:"Name",type:"text"}],oe=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,Q.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,Q.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]}],re=function(e,t,n){return(0===n?e.filter((function(e){return t.filter((function(t){return e.name===t.Name})).length>0})):e).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:o().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---8/x86_64/7416/".concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},o().createElement(ne.zx,{variant:"link",isSmall:!0,icon:o().createElement(ae.ZP,null),iconPosition:"right"},"More information"))}]}}))},ue={0:"additional",1:"all"},ce={additional:0,all:1},de=function(e){var t,n,a,r,u,c,d,s=e.imageVersion,m=(0,f.useLocation)(),v=(0,f.useHistory)(),g=m.pathname.split("/"),p=7===g.length?ce[g[6]]:1,E=(0,i.useState)({}),h=(0,l.Z)(E,2),b=h[0],S=h[1],y=(0,i.useState)(p),k=(0,l.Z)(y,2),D=k[0],I=k[1];return(0,i.useEffect)((function(){S(s)}),[s]),(0,i.useEffect)((function(){g[5]!==ue[D]&&I(p)}),[g]),"SUCCESS"===(null==s||null===(t=s.image)||void 0===t||null===(n=t.Commit)||void 0===n?void 0:n.Status)?o().createElement($.Z,{className:"add-100vh"},o().createElement(J.Z,{apiFilterSort:!1,filters:ie,tableData:{count:0===D?null==b?void 0:b.additional_packages:null==b?void 0:b.packages,isLoading:!1,hasError:!1},columnNames:oe,rows:null!=b&&null!==(a=b.image)&&void 0!==a&&null!==(r=a.Commit)&&void 0!==r&&r.InstalledPackages?re(null==b||null===(u=b.image)||void 0===u||null===(c=u.Commit)||void 0===c?void 0:c.InstalledPackages,null==b||null===(d=b.image)||void 0===d?void 0:d.Packages,D):[],actionResolver:function(){return[]},areActionsDisabled:function(){return!0},defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t,n=null===(t=g[5])||void 0===t?void 0:t.toLowerCase();I(e),"packages"===n&&(7===g.length?g[6]=ue[e]:g.push(ue[e]),v.push(g.join("/")))},toggleState:D,emptyFilterState:{icon:"search",title:"No packages to display"}})):o().createElement($.Z,{className:"add-100vh"},o().createElement(le.Z,{bgColor:"white",title:"Package data currently unavailable",body:"Packages will be displayed as soon as the image is finished being built.",primaryAction:null,secondaryActions:[]}))};de.propTypes={imageVersion:h().object};const se=de;var me=n(58061),ve={details:0,packages:1,versions:1},ge=function(e){var t,n,a=e.imageData,r=e.openUpdateWizard,u=e.imageVersion,c=e.isLoading,d=(0,f.useLocation)(),s=(0,f.useHistory)(),m=(0,i.useState)(ve.details),v=(0,l.Z)(m,2),g=v[0],p=v[1],E=u?"imageTab":"imageSetTab",h=(0,me.Ff)(d.pathname,["baseURL","imageSetVersion","imageSetTab","imageVersion","imageTab","packagesToggle"]);return(0,i.useEffect)((function(){h.imageTab?p(ve[h.imageTab]):p(ve[h.imageSetTab])}),[d.pathname]),o().createElement(o().Fragment,null,(0,A.Cp)(null==a||null===(t=a.data)||void 0===t||null===(n=t.Data)||void 0===n?void 0:n.image_set)?o().createElement(le.Z,{icon:"question",title:"Image not found",body:"Please check you have the correct link with the correct image Id.",primaryAction:{text:"Back to Manage Images",href:P._j.gb},secondaryActions:[]}):o().createElement("div",{className:"edge-c-device--detail add-100vh"},o().createElement(F.m,{className:"pf-u-ml-md",activeKey:g,onSelect:function(e,t){var n=0===t?"details":u?"packages":"versions";h[E]=n,s.push(h.buildUrl()),p(t)}},o().createElement(W.O,{eventKey:ve.details,title:o().createElement(B.T,null,"Details")},o().createElement(q,{imageData:a,imageVersion:u})),c?o().createElement(W.O,{title:o().createElement(B.T,null,o().createElement(D.O,{width:"75px"}))}):u?o().createElement(W.O,{eventKey:ve.packages,title:o().createElement(B.T,null,"Packages")},o().createElement(se,{imageVersion:u})):o().createElement(W.O,{eventKey:ve.versions,title:o().createElement(B.T,null,"Versions")},o().createElement(te,{imageData:a,openUpdateWizard:r})))))};ge.propTypes={imageData:h().object,imageVersion:h().object,openUpdateWizard:h().func,isLoading:h().bool};const pe=ge;var fe=n(53010);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const be=function(){var e=(0,f.useParams)(),t=e.imageId,n=e.imageVersionId,a=(0,i.useContext)(v.g).getRegistry,E=(0,m.useDispatch)(),h=(0,f.useHistory)(),b=(0,i.useState)({isOpen:!1,updateId:null}),S=(0,l.Z)(b,2),y=S[0],k=S[1],D=(0,i.useState)(null),I=(0,l.Z)(D,2),T=I[0],O=I[1],U=(0,m.useSelector)((function(e){var t=e.imageSetDetailReducer;return{data:(null==t?void 0:t.data)||null,isLoading:null==t?void 0:t.isLoading,hasError:null==t?void 0:t.hasError}}),m.shallowEqual),C=function(e){h.push({pathname:h.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),k((function(t){return he(he({},t),{},{isOpen:!t.isLoading,updateId:e})}))};return(0,i.useEffect)((function(){var e,t,a,l,i,o;O(n?null==U||null===(e=U.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(a=t.images)||void 0===a?void 0:a[null==U||null===(l=U.data)||void 0===l||null===(i=l.Data)||void 0===i||null===(o=i.images)||void 0===o?void 0:o.findIndex((function(e){var t;return(null==e||null===(t=e.image)||void 0===t?void 0:t.ID)==n}))]:null)}),[U,n]),(0,i.useEffect)((function(){var e=a().register({imageSetDetailReducer:p.MQ});return(0,g.VR)(E,t),function(){return e()}}),[t]),o().createElement(i.Fragment,null,o().createElement(r.Z,{className:"pf-m-light"},o().createElement(u.K,{hasGutter:!0},o().createElement(c.v,null,o().createElement(V,{imageData:U,imageVersion:T,openUpdateWizard:C})))),o().createElement(pe,{imageData:U,urlParam:t,imageVersion:T,openUpdateWizard:C,isLoading:U.isLoading}),y.isOpen&&o().createElement(i.Suspense,{fallback:o().createElement(s.b,null,o().createElement(d.$,null))},o().createElement(fe.default,{navigateBack:function(){h.push({pathname:h.location.pathname}),k((function(e){return he(he({},e),{},{isOpen:!1})}))},updateImageID:y.updateId})))}}}]);
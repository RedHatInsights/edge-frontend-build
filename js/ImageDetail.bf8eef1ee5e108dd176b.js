(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[704],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var a=n(70655),i=n(92950),r=n(44303),l=n(38296),o=n(62472);const c=e=>{var{children:t=null,className:n="","aria-label":u="Breadcrumb",ouiaId:s,ouiaSafe:d=!0}=e,m=(0,a.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const v=(0,o.S$)(c.displayName,s,d);return i.createElement("nav",Object.assign({},m,{"aria-label":u,className:(0,l.i)(r.Z.breadcrumb,n)},v),i.createElement("ol",{className:r.Z.breadcrumbList},i.Children.map(t,((e,t)=>{const n=t>0;return i.isValidElement(e)?i.cloneElement(e,{showDivider:n}):e}))))};c.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>c});var a=n(70655),i=n(92950),r=n(93174),l=n(44303),o=n(38296);const c=e=>{var{children:t=null,className:n="",to:c,isActive:u=!1,isDropdown:s=!1,showDivider:d,target:m,component:v="a",render:p}=e,g=(0,a.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const f=v,b=u?"page":void 0,h=(0,o.i)(l.Z.breadcrumbLink,u&&l.Z.modifiers.current);return i.createElement("li",Object.assign({},g,{className:(0,o.i)(l.Z.breadcrumbItem,n)}),d&&i.createElement("span",{className:l.Z.breadcrumbItemDivider},i.createElement(r.ZP,null)),"button"===v&&i.createElement("button",{className:h,"aria-current":b,type:"button"},t),s&&i.createElement("span",{className:(0,o.i)(l.Z.breadcrumbDropdown)},t),p&&p({className:h,ariaCurrent:b}),c&&!p&&i.createElement(f,{href:c,target:m,className:h,"aria-current":b},t),!c&&"button"!==v&&!s&&t)};c.displayName="BreadcrumbItem"},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(58392);const a={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(85893),i=n(92950),r=n.n(i),l=n(48335),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},c=36e5,u=24*c,s=30*u,d=365*u,m=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},v=[{rightBound:1/0,description:function(e){return m(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return m(Math.round(e/s),"month")}},{rightBound:s,description:function(e){return m(Math.round(e/u),"day")}},{rightBound:u,description:function(e){return m(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return m(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],p=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return p(e)+" UTC"},onlyDate:function(e){return p(e).slice(0,-6)},relative:function(e){return v.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),p(e))},invalid:function(){return"Invalid date"}}[e]},f=function(e,t,n){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(i){return function(e,t,n,i){return void 0===i&&(i=""),(0,a.jsx)(l.Tooltip,o({},n,{content:(0,a.jsxs)("div",{children:[i,e]})},{children:t}))}(g("exact")(i),(0,a.jsx)("span",{children:g(e)(i)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,n=e.type,i=void 0===n?"relative":n,l=e.extraTitle,o=e.tooltipProps,c=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===c.toString()?"invalid":i;return(0,a.jsx)(r().Fragment,{children:f(u,o,l)(c)})}},53010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var a=n(93433),i=n(4942),r=n(15861),l=n(29439),o=n(64687),c=n.n(o),u=n(92950),s=n.n(u),d=n(4239),m=n(96354),v=n(76362),p=n(52643),g=n(29390),f=n(37619),b=n(45697),h=n.n(b),E=n(20873),I=n(94778),y=n(86706),D=n(59245),k=n(5230),S=n(93597),w=n(83215),O=n(48903),C=n(98309);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t,n,i,o,b,h,N,_,U,x,L,P,Z,j,R,V,A,B=e.navigateBack,F=e.updateImageID,W=e.reload,G=(0,u.useState)(),M=(0,l.Z)(G,2),Q=M[0],z=M[1],q=(0,y.I0)(),H=function(){B(),W&&W()},K=(0,O.gV)("fleet-management.temporary-releases"),J=(0,u.useContext)(D.g).getRegistry,$=(0,y.v9)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),y.wU).data;return(0,u.useEffect)((function(){var e=J().register({imageDetailReducer:k.OD});return F&&(0,I.J_)(q,F),function(){return e()}}),[q]),(0,u.useEffect)((function(){(0,r.Z)(c().mark((function e(){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return z(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),Q&&$?s().createElement(d.Z,{onClose:H,customComponentMapper:{review:E.Z},onSubmit:function(e){var t,n,a,i,r,l=e.values;(0,e.setIsSaving)((function(){return!0}));var o=T(T({},l),{},{Id:null==$||null===(t=$.image)||void 0===t?void 0:t.ID,name:null==$||null===(n=$.image)||void 0===n?void 0:n.Name,version:(null==$||null===(a=$.image)||void 0===a?void 0:a.Version)+1,architecture:"x86_64",credentials:l.credentials?l.credentials:null==$||null===(i=$.image)||void 0===i?void 0:i.Installer.SshKey,username:l.username?l.username:null==$||null===(r=$.image)||void 0===r?void 0:r.Installer.Username});(0,I.Es)(q,o,(function(e){q(T(T({},(0,w.wN)({variant:"info",title:"Updating image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,S.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,w.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,w.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),H(),q((0,I.Fj)({name:$.value.Name,id:$.value.ID}))}))},defaultArch:"x86_64",initialValues:{imageID:null==$?void 0:$.image.ID,name:null==$||null===(t=$.image)||void 0===t?void 0:t.Name,isUpdate:!0,description:null==$||null===(n=$.image)||void 0===n?void 0:n.Description,credentials:null==$||null===(i=$.image)||void 0===i?void 0:i.Installer.SshKey,username:null==$||null===(o=$.image)||void 0===o?void 0:o.Installer.Username,version:null==$||null===(b=$.image)||void 0===b?void 0:b.Version,release:null==$||null===(h=$.image)||void 0===h?void 0:h.Distribution,release_options:K?(0,O.pS)(null==$||null===(N=$.image)||void 0===N?void 0:N.Distribution,[].concat((0,a.Z)(C.vk),(0,a.Z)(C.R8))):(0,O.pS)(null==$||null===(_=$.image)||void 0===_?void 0:_.Distribution),imageType:["rhel-edge-commit"],"selected-packages":null==$||null===(U=$.image)||void 0===U||null===(x=U.Packages)||void 0===x?void 0:x.map((function(e){return T(T({},e),{},{name:e.Name})})),"third-party-repositories":null==$||null===(L=$.image)||void 0===L||null===(P=L.ThirdPartyRepositories)||void 0===P?void 0:P.map((function(e){return T({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==$||null===(Z=$.image)||void 0===Z||null===(j=Z.ThirdPartyRepositories)||void 0===j?void 0:j.map((function(e){return T({id:e.ID,name:e.Name},e)})),"custom-packages":null==$||null===(R=$.image)||void 0===R||null===(V=R.CustomPackages)||void 0===V?void 0:V.map((function(e){return T(T({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Update image"},showTitles:!0,title:"Update image: ".concat(null==$||null===(A=$.image)||void 0===A?void 0:A.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,v.jS,v.B9,v.jS,v.j7,v.Sp]}]}}):s().createElement(g.Y,null,s().createElement(p.b,null,s().createElement(f.$,{isSVG:!0,diameter:"100px"})))};_.propTypes={navigateBack:h().func,updateImageID:h().number,reload:h().func},_.defaultProps={navigateBack:function(){}};const U=_},12877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});var a=n(15861),i=n(4942),r=n(29439),l=n(64687),o=n.n(l),c=n(92950),u=n.n(c),s=n(89376),d=n(49739),m=n(83826),v=n(37619),p=n(52643),g=n(96620),f=n(45697),b=n.n(f),h=n(68340),E=n(25834),I=n(78140),y=n(68774),D=n(50383),k=n(64029),S=n(32835),w=n(79851),O=n(34512),C=n(56787),N=n(84457),T=n(75728),_=n(99355),U=n(75824),x=n(35681),L=n(9192),P=n(5964),Z=n(62410),j=function(e,t,n,a){var i,r=t||(null==e?void 0:e.LastImageDetails),l=[];return(null==r||null===(i=r.image)||void 0===i?void 0:i.ID)&&l.push(u().createElement(N.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return a(null==r||null===(e=r.image)||void 0===e?void 0:e.ID)}},"Create new version")),n&&l.push(u().createElement(N.h,{key:"download-button",component:"button"},u().createElement(h.x,{className:"force-text-black remove-underline",component:"a",href:n,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),l},R=function(e){var t,n,a,i,l,o,s,d,m,v,p,f,b,h,N,R,V,A,B,F=e.imageData,W=e.imageVersion,G=e.openUpdateWizard,M=(0,c.useState)(!1),Q=(0,r.Z)(M,2),z=Q[0],q=Q[1],H=(0,c.useState)({}),K=(0,r.Z)(H,2),J=K[0],$=K[1];(0,c.useEffect)((function(){$(null==F?void 0:F.data)}),[F]);var Y="Actions for image set details view",X="image-set-details-dropdown";return u().createElement(u().Fragment,null,!F.isLoading&&F.hasError?u().createElement(k.a,null,u().createElement(S.g,null,u().createElement(g.Link,{to:L._.manageImages},"Back to Manage Images"))):u().createElement(u().Fragment,null,u().createElement(k.a,null,u().createElement(S.g,null,u().createElement(g.Link,{to:L._.manageImages},"Manage Images")),W?u().createElement(S.g,null,u().createElement(g.Link,{to:"".concat(L._.manageImages,"/").concat(null==J||null===(t=J.ImageSet)||void 0===t?void 0:t.ID)},null==J||null===(n=J.ImageSet)||void 0===n?void 0:n.Name)):u().createElement(S.g,{isActive:!0},(null==J||null===(a=J.ImageSet)||void 0===a?void 0:a.Name)||u().createElement(D.O,{width:"100px"})),W&&u().createElement(S.g,{isActive:!0},null==W||null===(i=W.image)||void 0===i?void 0:i.Version)),u().createElement(y.D,null,u().createElement(w.P,null,u().createElement(O.J,null,u().createElement(E.G,{component:"dl"},u().createElement(I.T,{component:"h1",className:"grid-align-center pf-u-mb-0"},(null==J||null===(l=J.ImageSet)||void 0===l?void 0:l.Name)||u().createElement(D.O,{width:"150px"})),u().createElement(I.T,{className:"pf-u-pt-sm",component:"dd"},null!=W&&null!==(o=W.image)&&void 0!==o&&o.Status||null!=J&&null!==(s=J.LastImageDetails)&&void 0!==s&&null!==(d=s.image)&&void 0!==d&&d.Status?u().createElement(x.Z,{type:W?null==W||null===(m=W.image)||void 0===m?void 0:m.Status.toLowerCase():null==J||null===(v=J.LastImageDetails)||void 0===v||null===(p=v.image)||void 0===p?void 0:p.Status.toLowerCase()}):u().createElement(D.O,{width:"100px"})),null!=W&&null!==(f=W.image)&&void 0!==f&&f.UpdatedAt||null!=J&&null!==(b=J.LastImageDetails)&&void 0!==b&&null!==(h=b.image)&&void 0!==h&&h.UpdatedAt?u().createElement(I.T,{component:"p"},"Last updated ",u().createElement(Z.Z,{date:W?null==W||null===(N=W.image)||void 0===N?void 0:N.UpdatedAt:null==J||null===(R=J.LastImageDetails)||void 0===R||null===(V=R.image)||void 0===V?void 0:V.UpdatedAt})):u().createElement(D.O,{width:"200px"}))),u().createElement(O.J,{isFilled:!0}),u().createElement(O.J,null,u().createElement(C.L,{position:_.ir.right,toggle:u().createElement(T.Z,{id:X,toggleIndicator:P.ZP,onToggle:function(e){return q(e)},isDisabled:"BUILDING"===(W?null==W||null===(A=W.image)||void 0===A?void 0:A.Status:null==J||null===(B=J.LastImageDetails)||void 0===B?void 0:B.image.Status)||!1,"aria-label":Y},u().createElement(U.u,{content:Y,reference:function(){return document.getElementById(X)}}),"Actions"),isOpen:z,dropdownItems:j(J,W,null==J?void 0:J.ImageBuildIsoURL,G)}))))))};R.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func};const V=R;var A=n(35262),B=n(28883),F=n(29873),W=n(93433),G=n(50693),M=n(16475),Q=n(66435),z=n(98309),q=function(e){var t,n,a,i,l=e.imageData,o=e.imageVersion,s=(0,c.useState)({}),d=(0,r.Z)(s,2),m=d[0],v=d[1];(0,c.useEffect)((function(){var e;v(o||(null==l||null===(e=l.data)||void 0===e?void 0:e.LastImageDetails))}),[l,o]);var p=function(e){return(0,W.Z)(Array(2*e)).map((function(e,t){return u().createElement(D.O,{width:"180px",key:t})}))},f={Version:"Version",Created:function(){return u().createElement(Z.Z,{date:null==m||null===(e=m.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return u().createElement("div",{key:t},e)}))},Release:function(){var e;return null===z.aN||void 0===z.aN?void 0:z.aN[null==m||null===(e=m.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},b={Username:function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH key":function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},k={"Total additional packages":function(){var e,t;return u().createElement(g.Link,{to:"".concat(L._.manageImages,"/").concat(null==m||null===(e=m.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==m||null===(t=m.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==m?void 0:m.additional_packages)},"Total packages":function(){var e,t;return u().createElement(g.Link,{to:"".concat(L._.manageImages,"/").concat(null==m||null===(e=m.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==m||null===(t=m.image)||void 0===t?void 0:t.ID,"/packages/all")},null==m?void 0:m.packages)}},S={Added:function(){return null==m?void 0:m.update_added},Removed:function(){return null==m?void 0:m.update_removed},Updated:function(){return null==m?void 0:m.update_updated}};null!=m&&null!==(t=m.image)&&void 0!==t&&null!==(n=t.Installer)&&void 0!==n&&n.Checksum&&(f["SHA-256 checksum"]=function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum}),null!=m&&null!==(a=m.image)&&void 0!==a&&null!==(i=a.Commit)&&void 0!==i&&i.OSTreeCommit&&(f["Ostree commit hash"]=function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Commit)||void 0===t?void 0:t.OSTreeCommit});var w=function(e){return m?Object.entries(e).map((function(e,t){var n,a,i=(0,r.Z)(e,2),l=i[0],o=i[1];return u().createElement(c.Fragment,{key:t},u().createElement(I.T,{className:"details-label",component:I.v.dt},l),"SHA-256 checksum"===l||"Ostree commit hash"===l||"SSH key"===l&&o()?u().createElement(I.T,{component:I.v.dd},u().createElement(Q.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word",id:"".concat(l.replace(/\s+/g,"-").toLowerCase(),"-clipboard-copy")},"function"==typeof o?o()||"Unavailable":(null==m||null===(n=m.image)||void 0===n?void 0:n[o])||"Unavailable")):u().createElement(I.T,{className:"pf-u-text-break-word",component:I.v.dd},"function"==typeof o?0===o()?0:o()||"Unavailable":(null==m||null===(a=m.image)||void 0===a?void 0:a[o])||"Unavailable"))})):null};return u().createElement(y.D,{className:"pf-u-ml-lg pf-u-mt-md"},u().createElement(G.r,{span:12},u().createElement(M.P,{span:5},u().createElement(h.x,{component:h.q.h2},o?"Details":"Most recent image"),u().createElement(E.G,{component:E.F.dl},w(f)||p(6)),u().createElement(h.x,{component:h.q.h2},"User information "),u().createElement(E.G,{component:E.F.dl},w(b)||p(2))),u().createElement(M.P,{span:1}),u().createElement(M.P,{span:6},u().createElement(h.x,{component:h.q.h2},"Packages "),u().createElement(E.G,{component:E.F.dl},w(k)||p(3)),u().createElement(h.x,{component:h.q.h2},"Changes from previous version"),u().createElement(E.G,{component:E.F.dl},w(S)||p(3)))))};q.propTypes={imageData:b().object,imageVersion:b().object};const H=q;var K=n(73448),J=n(93597),$=n(34766),Y=n(48903),X=n(96094),ee=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],te=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,$.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,$.cellWidth)(25)]},{title:"Ostree commit hash",type:"ostree_commit_hash",sort:!1,columnTransforms:[(0,$.cellWidth)(20)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,$.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,$.cellWidth)(35)]}],ne=function(e,t,n){return null==e?void 0:e.map((function(e){return{rowInfo:{id:null==e?void 0:e.ID,imageStatus:null==e?void 0:e.Status,isoURL:null==e?void 0:e.ImageBuildIsoURL,latestImageVersion:n,currentImageVersion:e.Version},noApiSortFilter:[null==e?void 0:e.Version,z.bd[null==e?void 0:e.ImageType],null==e?void 0:e.CreatedAt,null==e?void 0:e.Status],cells:[{title:u().createElement(g.Link,{to:"".concat(L._.manageImages,"/").concat(t,"/versions/").concat(e.ID,"/details")},null==e?void 0:e.Version)},{title:z.bd[null==e?void 0:e.ImageType]},{title:null!=e&&e.CommitCheckSum?u().createElement(U.u,{content:u().createElement("div",null,e.CommitCheckSum)},u().createElement("span",null,(0,Y.aS)(e.CommitCheckSum,5,5))):u().createElement(h.x,null,"Unavailable")},{title:u().createElement(Z.Z,{date:null==e?void 0:e.CreatedAt})},{title:u().createElement(x.Z,{type:null==e?void 0:e.Status.toLowerCase()})}]}}))},ae=function(e){var t,n,a,i,l=e.imageData,o=e.openUpdateWizard,c=null==l||null===(t=l.data)||void 0===t||null===(n=t.ImageSet)||void 0===n?void 0:n.ID,s=null==l||null===(a=l.data)||void 0===a||null===(i=a.ImageSet)||void 0===i?void 0:i.Version,d=(0,X.Z)({api:function(e){var t=e.query;return(0,J.dj)({imageSetID:c,query:t})},tableReload:!0}),m=(0,r.Z)(d,2),v=m[0],p=m[1],g=v.data,f=v.isLoading,b=v.hasError;return u().createElement("section",{className:"add-100vh pf-l-page__main-section pf-c-page__main-section"},u().createElement(K.Z,{apiFilterSort:!0,isUseApi:!0,filters:ee,loadTableData:p,tableData:{count:null==g?void 0:g.count,data:null==g?void 0:g.data,isLoading:f,hasError:b},columnNames:te,rows:ne(null==g?void 0:g.data,c,s),actionResolver:function(e){var t,n,a,i,r,l,c,s=[];return null!==(t=e.rowInfo)&&void 0!==t&&t.isoURL&&s.push({title:u().createElement(h.x,{className:"force-text-black remove-underline",component:"a",href:e.rowInfo.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),("SUCCESS"===(null===(n=e.rowInfo)||void 0===n?void 0:n.imageStatus)||"ERROR"===(null===(a=e.rowInfo)||void 0===a?void 0:a.imageStatus))&&s.push({title:"Update Image",onClick:function(e,t,n){o(n.rowInfo.id)},isDisabled:(null==e||null===(l=e.rowInfo)||void 0===l?void 0:l.latestImageVersion)!==(null==e||null===(c=e.rowInfo)||void 0===c?void 0:c.currentImageVersion)}),"BUILDING"===(null===(i=e.rowInfo)||void 0===i?void 0:i.imageStatus)&&null!==(r=e.rowInfo)&&void 0!==r&&r.id&&s.push({title:""}),s},areActionsDisabled:function(e){var t;return"BUILDING"===(null===(t=e.rowInfo)||void 0===t?void 0:t.imageStatus)},defaultSort:{index:3,direction:"desc"}}))};ae.propTypes={imageData:b().object,urlParam:b().string,imageSetID:b().number,createRows:b().func,openUpdateWizard:b().func};const ie=ae;var re=n(47173),le=n(15265),oe=n(3035),ce=[{label:"Name",type:"text"}],ue=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,$.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,$.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,$.cellWidth)(35)]}],se=function(e){var t=e.distribution,n=e.installedPackages,a=e.addedPackages;return(0===e.showAll?n.filter((function(e){return(null==a?void 0:a.filter((function(t){return e.name===t.Name})).length)>0})):n).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:u().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---".concat(t,"/x86_64/7416/").concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},u().createElement(re.zx,{variant:"link",isSmall:!0,icon:u().createElement(le.ZP,null),iconPosition:"right"},"More information"))}]}}))},de={0:"additional",1:"all"},me={additional:0,all:1},ve=function(e){var t,n,a,i,l,o,s,d,m,v=e.imageVersion,p=(0,g.useHistory)(),f=(0,g.useLocation)().pathname.split("/"),b=7===f.length?me[f[6]]:1,h=null==v||null===(t=v.image)||void 0===t||null===(n=t.Distribution)||void 0===n?void 0:n.split("-")[1].slice(0,-1),E=(0,c.useState)({}),I=(0,r.Z)(E,2),y=I[0],D=I[1],k=(0,c.useState)(b),S=(0,r.Z)(k,2),w=S[0],O=S[1];return(0,c.useEffect)((function(){D(v)}),[v]),(0,c.useEffect)((function(){f[5]!==de[w]&&O(b)}),[f]),"SUCCESS"===(null==v||null===(a=v.image)||void 0===a||null===(i=a.Commit)||void 0===i?void 0:i.Status)?u().createElement("section",{className:"add-100vh pf-l-page__main-section pf-c-page__main-section"},u().createElement(K.Z,{apiFilterSort:!1,filters:ce,tableData:{count:0===w?null==y?void 0:y.additional_packages:null==y?void 0:y.packages,isLoading:!1,hasError:!1},columnNames:ue,rows:null!=y&&null!==(l=y.image)&&void 0!==l&&null!==(o=l.Commit)&&void 0!==o&&o.InstalledPackages?se({distribution:h,installedPackages:null==y||null===(s=y.image)||void 0===s||null===(d=s.Commit)||void 0===d?void 0:d.InstalledPackages,addedPackages:null==y||null===(m=y.image)||void 0===m?void 0:m.Packages,showAll:w}):[],actionResolver:function(){return[]},areActionsDisabled:function(){return!0},defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t,n=null===(t=f[5])||void 0===t?void 0:t.toLowerCase();O(e),"packages"===n&&(7===f.length?f[6]=de[e]:f.push(de[e]),p.push(f.join("/")))},toggleState:w,emptyFilterState:{icon:"search",title:"No packages to display"}})):u().createElement("section",{className:"add-100vh pf-l-page__main-section pf-c-page__main-section"},u().createElement(oe.Z,{bgColor:"white",title:"Package data currently unavailable",body:"Packages will be displayed as soon as the image is finished being built.",primaryAction:null,secondaryActions:[]}))};ve.propTypes={imageVersion:b().object};const pe=ve;var ge={details:0,packages:1,versions:1},fe=function(e){var t=e.imageData,n=e.openUpdateWizard,a=e.imageVersion,i=e.isLoading,l=(0,g.useHistory)(),o=(0,g.useLocation)().pathname,s=(0,c.useState)(ge.details),d=(0,r.Z)(s,2),m=d[0],v=d[1],p=a?"imageTab":"imageSetTab",f=(0,Y.Ff)(o,["baseURL","imageSetVersion","imageSetTab","imageVersion","imageTab","packagesToggle"]);return(0,c.useEffect)((function(){f.imageTab?v(ge[f.imageTab]):v(ge[f.imageSetTab])}),[o]),u().createElement(u().Fragment,null,!t.isLoading&&t.hasError?u().createElement(oe.Z,{icon:"question",title:"Image not found",body:"Please check you have the correct link with the correct image Id.",primaryAction:{text:"Back to Manage Images",href:L._.manageImages},secondaryActions:[]}):u().createElement("div",{className:"edge-c-device--detail add-100vh"},u().createElement(A.m,{className:"pf-u-ml-md",activeKey:m,onSelect:function(e,t){var n=0===t?"details":a?"packages":"versions";f[p]=n,l.push(f.buildUrl()),v(t)}},u().createElement(B.O,{eventKey:ge.details,title:u().createElement(F.T,null,"Details")},u().createElement(H,{imageData:t,imageVersion:a})),i?u().createElement(B.O,{title:u().createElement(F.T,null,u().createElement(D.O,{width:"75px"}))}):a?u().createElement(B.O,{eventKey:ge.packages,title:u().createElement(F.T,null,"Packages")},u().createElement(pe,{imageVersion:a})):u().createElement(B.O,{eventKey:ge.versions,title:u().createElement(F.T,null,"Versions")},u().createElement(ie,{imageData:t,openUpdateWizard:n})))))};fe.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func,isLoading:b().bool};const be=fe;var he=n(53010);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ye=function(){var e=(0,g.useParams)(),t=e.imageId,n=e.imageVersionId,i=(0,g.useHistory)(),l=(0,g.useLocation)().pathname,f=(0,c.useState)({isOpen:!1,updateId:null}),b=(0,r.Z)(f,2),h=b[0],E=b[1],I=(0,c.useState)(null),y=(0,r.Z)(I,2),D=y[0],k=y[1],S=(0,X.Z)({api:J.L0,id:n?"".concat(t,"/versions/").concat(n):"".concat(t),tableReload:!0}),w=(0,r.Z)(S,2),O=w[0],C=w[1],N=O.data,T=O.isLoading,_=function(e){i.push({pathname:l,search:new URLSearchParams({update_image:!0}).toString()}),E((function(t){return Ie(Ie({},t),{},{isOpen:!t.isLoading,updateId:e})}))};(0,c.useEffect)((function(){k(n?null==N?void 0:N.ImageDetails:null)}),[O,n]),(0,c.useEffect)((function(){C()}),[t,n]);var U=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u().createElement(c.Fragment,null,u().createElement(s.Z,{className:"pf-m-light"},u().createElement(d.K,{hasGutter:!0},u().createElement(m.v,null,u().createElement(V,{imageData:O,imageVersion:D,openUpdateWizard:_})))),u().createElement(be,{imageData:O,urlParam:t,imageVersion:D,openUpdateWizard:_,isLoading:T}),h.isOpen&&u().createElement(c.Suspense,{fallback:u().createElement(p.b,null,u().createElement(v.$,null))},u().createElement(he.default,{navigateBack:function(){i.push({pathname:l}),E((function(e){return Ie(Ie({},e),{},{isOpen:!1})}))},updateImageID:h.updateId,reload:U})))}},93597:(e,t,n)=>{"use strict";n.d(t,{$c:()=>E,Bi:()=>s,Dk:()=>f,EC:()=>g,EV:()=>b,H1:()=>u,Kz:()=>h,L0:()=>v,QY:()=>p,dj:()=>m,dt:()=>d});var a=n(15861),i=n(29439),r=n(64687),l=n.n(r),o=n(66702),c=n(93454),u=function(e){var t={name:e};return c.instance.post("".concat(o.Ds,"/images/checkImageName"),t)},s=function(e){var t=e.Id,n=e.name,a=e.version,r=e.description,l=e.release,u=e.architecture,s=e.username,d=e.credentials,m=e.imageType,v=e["selected-packages"],p=e["third-party-repositories"],g=e["custom-packages"],f=m||[],b=(0,i.Z)(f,1)[0];m.length>1&&(b="rhel-edge-installer");var h={name:n,version:a,description:r,distribution:l,imageType:b,packages:v.map((function(e){return{name:e.name}})),outputTypes:m,commit:{arch:u},installer:{username:s,sshkey:d},thirdPartyRepositories:null==p?void 0:p.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}}))},E="".concat(o.Ds,"/images");return a>1&&(E+="/".concat(t,"/update")),c.instance.post(E,h)},d=function(e){var t=e.id,n=e.q,a=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,i=(0,o.Vs)(a);return c.instance.get("".concat(o.Ds,"/image-sets/").concat(t,"?").concat(i))},m=function(e){var t=e.imageSetID,n=e.query,a=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,i=(0,o.Vs)(a);return c.instance.get("".concat(o.Ds,"/image-sets/view/").concat(t,"/versions?").concat(i))},v=function(e){var t=e.id;return c.instance.get("".concat(o.Ds,"/image-sets/view/").concat(t))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,o.Vs)(e);return c.instance.get("".concat(o.Ds,"/image-sets?").concat(t))},g=function(e){return c.instance.get("".concat(o.Ds,"/images/").concat(e,"/status"))},f=function(e){return c.instance.get("".concat(o.Ds,"/updates/device/").concat(e,"/image"))},b=function(){var e=(0,a.Z)(l().mark((function e(t,n,a){var i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new URLSearchParams({distribution:t,architecture:n,search:a}),e.abrupt("return",(0,c.instance)("".concat(o.DO,"/packages?").concat(i.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(e){var t=e.id;return c.instance.get("".concat(o.Ds,"/images/").concat(t,"/details"))},E=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,o.Vs)(t);return c.instance.get("".concat(o.Ds,"/image-sets/view?").concat(n))}},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g,u:()=>v});var a=n(92950),i=n.n(a),r=n(45697),l=n.n(r),o=n(69174),c=n(75824),u=n(79851),s=n(34512),d=n(98309),m={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},v=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},p=function(e){var t=e.id,n=e.type,a=e.isLabel,r=void 0!==a&&a,l=e.toolTipContent,d=void 0===l?"":l,v=e.className,p=void 0===v?"":v,g=e.isLink,f=Object.prototype.hasOwnProperty.call(m,n)?m[n]:m.default,b=f.text,h=f.Icon,E=f.color,I=f.labelColor;return i().createElement(i().Fragment,null,r?i().createElement(o._,{id:t,color:I,icon:i().createElement(h,null),className:p},b):i().createElement(u.P,{id:t,style:{color:E},className:p},i().createElement(s.J,{className:"pf-u-mr-sm"},d?i().createElement(c.u,{content:"blargh"},i().createElement(h,null)):i().createElement(h,null)),i().createElement(s.J,null,i().createElement("p",{style:g?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},b))))};const g=p;p.propTypes={id:l().string,type:l().string,isLabel:l().bool,toolTipContent:l().string,className:l().string,isLink:l().bool},p.defaultProps={id:"status"}},58392:()=>{},37625:()=>{},21064:()=>{},82014:()=>{},16166:()=>{}}]);
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[6501,46],{99332:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(40400).IU)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0})},21314:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a});const a=(0,n(40400).IU)({name:"LockOpenIcon",height:512,width:576,svgPath:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z",yOffset:0,xOffset:0})},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(75418),l=n.n(a),i=n(45697),o=n.n(i),r=n(87462),u=n(75824),c=36e5,s=24*c,d=30*s,m=365*s,v=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},g=[{rightBound:1/0,description:function(e){return v(Math.round(e/m),"year")}},{rightBound:m,description:function(e){return v(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return v(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return v(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return v(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],p=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},f=function(e){return{exact:function(e){return p(e)+" UTC"},onlyDate:function(e){return p(e).slice(0,-6)},relative:function(e){return g.reduce((function(t,n){return n.rightBound>Date.now()-e?n.description(Date.now()-e):t}),p(e))},invalid:function(){return"Invalid date"}}[e]};function h(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,i=e.extraTitle,o=e.tooltipProps,c=void 0===o?{}:o,s=t instanceof Date?t:new Date(t),d=null==t||"Invalid Date"===s.toString()?"invalid":a;return l().createElement(l().Fragment,null,function(e,t,n){return{exact:function(t){return f(e)(t)},onlyDate:function(t){return f(e)(t)},relative:function(a){return function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return l().createElement(u.u,(0,r.Z)({},n,{content:l().createElement("div",null,a,e)}),t)}(f("exact")(a),l().createElement("span",null,f(e)(a)),t,n)},invalid:function(){return"Invalid date"}}[e]}(d,c,i)(s))}h.propTypes={date:o().oneOfType([o().instanceOf(Date),o().string,o().number]),type:o().oneOf(["exact","onlyDate","relative"]),extraTitle:o().node,tooltipProps:o().object}},53010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(93433),l=n(4942),i=n(15861),o=n(29439),r=n(87757),u=n.n(r),c=n(75418),s=n.n(c),d=n(57866),m=n(96354),v=n(52251),g=n(52643),p=n(29390),f=n(37619),h=n(45697),E=n.n(h),b=n(20873),y=n(94778),I=n(28216),D=n(59245),S=n(5230),k=n(93597),O=n(83215),w=n(48903),T=n(98309);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n,l,r,h,E,C,P,N,x,L,Z,_,V,R,j,A,B=e.navigateBack,F=e.updateImageID,W=e.reload,M=(0,c.useState)(),z=(0,o.Z)(M,2),G=z[0],H=z[1],K=(0,I.I0)(),q=function(){B(),W&&W()},J=(0,w.gV)("fleet-management.custom-repos"),$=(0,w.gV)("fleet-management.temporary-releases"),Q=(0,c.useContext)(D.g).getRegistry,Y=(0,I.v9)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),I.wU).data;return(0,c.useEffect)((function(){var e=Q().register({imageDetailReducer:S.OD});return F&&(0,y.J_)(K,F),function(){return e()}}),[K]),(0,c.useEffect)((function(){(0,i.Z)(u().mark((function e(){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return H(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),G&&Y?s().createElement(d.Z,{onClose:q,customComponentMapper:{review:b.Z},onSubmit:function(e){var t,n,a,l,i,o=e.values;(0,e.setIsSaving)((function(){return!0}));var r=U(U({},o),{},{Id:null==Y||null===(t=Y.image)||void 0===t?void 0:t.ID,name:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Name,version:(null==Y||null===(a=Y.image)||void 0===a?void 0:a.Version)+1,architecture:"x86_64",credentials:o.credentials?o.credentials:null==Y||null===(l=Y.image)||void 0===l?void 0:l.Installer.SshKey,username:o.username?o.username:null==Y||null===(i=Y.image)||void 0===i?void 0:i.Installer.Username});(0,y.Es)(K,r,(function(e){K(U(U({},(0,O.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,k.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,O.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,O.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),q(),K((0,y.Fj)({name:Y.value.Name,id:Y.value.ID}))}))},defaultArch:"x86_64",initialValues:{imageID:null==Y?void 0:Y.image.ID,name:null==Y||null===(t=Y.image)||void 0===t?void 0:t.Name,isUpdate:!0,description:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Description,credentials:null==Y||null===(l=Y.image)||void 0===l?void 0:l.Installer.SshKey,username:null==Y||null===(r=Y.image)||void 0===r?void 0:r.Installer.Username,version:null==Y||null===(h=Y.image)||void 0===h?void 0:h.Version,release:null==Y||null===(E=Y.image)||void 0===E?void 0:E.Distribution,release_options:$?(0,w.pS)(null==Y||null===(C=Y.image)||void 0===C?void 0:C.Distribution,[].concat((0,a.Z)(T.vk),(0,a.Z)(T.R8))):(0,w.pS)(null==Y||null===(P=Y.image)||void 0===P?void 0:P.Distribution),imageType:["rhel-edge-commit"],includesCustomRepos:J,"selected-packages":null==Y||null===(N=Y.image)||void 0===N||null===(x=N.Packages)||void 0===x?void 0:x.map((function(e){return U(U({},e),{},{name:e.Name})})),"third-party-repositories":null==Y||null===(L=Y.image)||void 0===L||null===(Z=L.ThirdPartyRepositories)||void 0===Z?void 0:Z.map((function(e){return U({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==Y||null===(_=Y.image)||void 0===_||null===(V=_.ThirdPartyRepositories)||void 0===V?void 0:V.map((function(e){return U({id:e.ID,name:e.Name},e)})),"custom-packages":null==Y||null===(R=Y.image)||void 0===R||null===(j=R.CustomPackages)||void 0===j?void 0:j.map((function(e){return U(U({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==Y||null===(A=Y.image)||void 0===A?void 0:A.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,v.jS,v.B9,v.jS,v.j7,v.Sp]}]}}):s().createElement(p.Y,null,s().createElement(g.b,null,s().createElement(f.$,{isSVG:!0,diameter:"100px"})))};P.propTypes={navigateBack:E().func,updateImageID:E().number,reload:E().func},P.defaultProps={navigateBack:function(){}};const N=P},12877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});var a=n(4942),l=n(29439),i=n(75418),o=n.n(i),r=n(48716),u=n(49739),c=n(83826),s=n(37619),d=n(52643),m=n(28216),v=n(59245),g=n(94778),p=n(5230),f=n(4874),h=n(45697),E=n.n(h),b=n(68340),y=n(25834),I=n(78140),D=n(68774),S=n(50383),k=n(64029),O=n(32835),w=n(79851),T=n(34512),C=n(56787),U=n(84457),P=n(75728),N=n(99355),x=n(35681),L=n(9192),Z=n(5964),_=n(62410),V=function(e,t,n){var a,l,i,r,u,c,s=t||(null==e||null===(a=e.images)||void 0===a?void 0:a[0]),d=[];return(null==s||null===(l=s.image)||void 0===l?void 0:l.ID)&&d.push(o().createElement(U.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return n(null==s||null===(e=s.image)||void 0===e?void 0:e.ID)}},"Create new version")),(null==s||null===(i=s.image)||void 0===i||null===(r=i.Installer)||void 0===r?void 0:r.ImageBuildISOURL)&&d.push(o().createElement(U.h,{key:"download-button",component:"button"},o().createElement(b.x,{className:"force-text-black remove-underline",component:"a",href:null==s||null===(u=s.image)||void 0===u||null===(c=u.Installer)||void 0===c?void 0:c.ImageBuildISOURL,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),d},R=function(e){var t,n,a,r,u,c,s,d,m,v,g,p,h,E,b,U,R,j,A,B,F=e.imageData,W=e.imageVersion,M=e.openUpdateWizard,z=(0,i.useState)(!1),G=(0,l.Z)(z,2),H=G[0],K=G[1],q=(0,i.useState)({}),J=(0,l.Z)(q,2),$=J[0],Q=J[1];return(0,i.useEffect)((function(){var e;Q(null==F||null===(e=F.data)||void 0===e?void 0:e.Data)}),[F]),o().createElement(o().Fragment,null,!F.isLoading&&F.hasError?o().createElement(k.a,null,o().createElement(O.g,null,o().createElement(f.Link,{to:L._["manage-images"]},"Back to Manage Images"))):o().createElement(o().Fragment,null,o().createElement(k.a,null,o().createElement(O.g,null,o().createElement(f.Link,{to:L._["manage-images"]},"Manage Images")),W?o().createElement(O.g,null,o().createElement(f.Link,{to:"".concat(L._["manage-images"],"/").concat(null==$||null===(t=$.image_set)||void 0===t?void 0:t.ID)},null==$||null===(n=$.image_set)||void 0===n?void 0:n.Name)):o().createElement(O.g,{isActive:!0},(null==$||null===(a=$.image_set)||void 0===a?void 0:a.Name)||o().createElement(S.O,{width:"100px"})),W&&o().createElement(O.g,{isActive:!0},null==W||null===(r=W.image)||void 0===r?void 0:r.Version)),o().createElement(D.D,null,o().createElement(w.P,null,o().createElement(T.J,null,o().createElement(y.G,{component:"dl"},o().createElement(I.T,{component:"h1",className:"grid-align-center pf-u-mb-0"},(null==$||null===(u=$.image_set)||void 0===u?void 0:u.Name)||o().createElement(S.O,{width:"150px"})),o().createElement(I.T,{className:"pf-u-pt-sm",component:"dd"},null!=$&&$.Status||null!=$&&null!==(c=$.images)&&void 0!==c&&null!==(s=c[0])&&void 0!==s&&null!==(d=s.image)&&void 0!==d&&d.Status?o().createElement(x.Z,{type:null==$||null===(m=$.images)||void 0===m||null===(v=m[0])||void 0===v||null===(g=v.image)||void 0===g?void 0:g.Status.toLowerCase()}):o().createElement(S.O,{width:"100px"})),null!=W&&null!==(p=W.image)&&void 0!==p&&p.UpdatedAt||null!=$&&null!==(h=$.images)&&void 0!==h&&null!==(E=h[0].image)&&void 0!==E&&E.UpdatedAt?o().createElement(I.T,{component:"p"},"Last updated ",o().createElement(_.Z,{date:W?null==W||null===(b=W.image)||void 0===b?void 0:b.UpdatedAt:null==$||null===(U=$.images)||void 0===U||null===(R=U[0].image)||void 0===R?void 0:R.UpdatedAt})):o().createElement(S.O,{width:"200px"}))),o().createElement(T.J,{isFilled:!0}),o().createElement(T.J,null,o().createElement(C.L,{position:N.ir.right,toggle:o().createElement(P.Z,{id:"image-set-details-dropdown",toggleIndicator:Z.ZP,onToggle:function(e){return K(e)},isDisabled:"BUILDING"===(W?null==W||null===(j=W.image)||void 0===j?void 0:j.Status:null==$||null===(A=$.Images)||void 0===A||null===(B=A[0])||void 0===B?void 0:B.Status)||!1},"Actions"),isOpen:H,dropdownItems:V($,W,M)}))))))};R.propTypes={imageData:E().object,imageVersion:E().object,openUpdateWizard:E().func};const j=R;var A=n(14638),B=n(28883),F=n(29873),W=n(93433),M=n(50693),z=n(16475),G=n(66435),H=n(98309),K=function(e){var t,n,a,r,u=e.imageData,c=e.imageVersion,s=(0,i.useState)({}),d=(0,l.Z)(s,2),m=d[0],v=d[1];(0,i.useEffect)((function(){var e,t,n;v(c||(null==u||null===(e=u.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(n=t.images)||void 0===n?void 0:n[0]))}),[u,c]);var g=function(e){return(0,W.Z)(Array(2*e)).map((function(e,t){return o().createElement(S.O,{width:"180px",key:t})}))},p={Version:"Version",Created:function(){return o().createElement(_.Z,{date:null==m||null===(e=m.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return o().createElement("div",{key:t},e)}))},Release:function(){var e;return null===H.aN||void 0===H.aN?void 0:H.aN[null==m||null===(e=m.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},h={Username:function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH key":function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},E={"Total additional packages":function(){var e,t;return o().createElement(f.Link,{to:"".concat(L._["manage-images"],"/").concat(null==m||null===(e=m.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==m||null===(t=m.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==m?void 0:m.additional_packages)},"Total packages":function(){var e,t;return o().createElement(f.Link,{to:"".concat(L._["manage-images"],"/").concat(null==m||null===(e=m.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==m||null===(t=m.image)||void 0===t?void 0:t.ID,"/packages/all")},null==m?void 0:m.packages)}},k={Added:function(){return null==m?void 0:m.update_added},Removed:function(){return null==m?void 0:m.update_removed},Updated:function(){return null==m?void 0:m.update_updated}};null!=m&&null!==(t=m.image)&&void 0!==t&&null!==(n=t.Installer)&&void 0!==n&&n.Checksum&&(p["SHA-256 checksum"]=function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum}),null!=m&&null!==(a=m.image)&&void 0!==a&&null!==(r=a.Commit)&&void 0!==r&&r.OSTreeCommit&&(p["Ostree commit hash"]=function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Commit)||void 0===t?void 0:t.OSTreeCommit});var O=function(e){return m?Object.entries(e).map((function(e,t){var n,a,r=(0,l.Z)(e,2),u=r[0],c=r[1];return o().createElement(i.Fragment,{key:t},o().createElement(I.T,{className:"details-label",component:I.v.dt},u),"SHA-256 checksum"===u||"Ostree commit hash"===u||"SSH key"===u&&c()?o().createElement(I.T,{component:I.v.dd},o().createElement(G.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word",id:"".concat(u.replace(/\s+/g,"-").toLowerCase(),"-clipboard-copy")},"function"==typeof c?c()||"Unavailable":(null==m||null===(n=m.image)||void 0===n?void 0:n[c])||"Unavailable")):o().createElement(I.T,{className:"pf-u-text-break-word",component:I.v.dd},"function"==typeof c?0===c()?0:c()||"Unavailable":(null==m||null===(a=m.image)||void 0===a?void 0:a[c])||"Unavailable"))})):null};return o().createElement(D.D,{className:"pf-u-ml-lg pf-u-mt-md"},o().createElement(M.r,{span:12},o().createElement(z.P,{span:5},o().createElement(b.x,{component:b.q.h2},c?"Details":"Most recent image"),o().createElement(y.G,{component:y.F.dl},O(p)||g(6)),o().createElement(b.x,{component:b.q.h2},"User information "),o().createElement(y.G,{component:y.F.dl},O(h)||g(2))),o().createElement(z.P,{span:1}),o().createElement(z.P,{span:6},o().createElement(b.x,{component:b.q.h2},"Packages "),o().createElement(y.G,{component:y.F.dl},O(E)||g(3)),o().createElement(b.x,{component:b.q.h2},"Changes from previous version"),o().createElement(y.G,{component:y.F.dl},O(k)||g(3)))))};K.propTypes={imageData:E().object,imageVersion:E().object};const q=K;var J=n(73448),$=n(75824),Q=n(92609),Y=n(86350),X=n(48903),ee=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],te=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,Q.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,Q.cellWidth)(25)]},{title:"Ostree commit hash",type:"ostree_commit_hash",sort:!1,columnTransforms:[(0,Q.cellWidth)(20)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,Q.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]}],ne=function(e){var t,n,a=e.imageData,r=e.openUpdateWizard,u=null==a||null===(t=a.data)||void 0===t?void 0:t.Data.image_set.Version,c=(0,i.useState)([]),s=(0,l.Z)(c,2),d=s[0],m=s[1];return(0,i.useEffect)((function(){var e,t,n,l,i;null!=a&&a.data&&m(function(e,t,n){return null==e?void 0:e.map((function(e){var a,l,i,r,u=e.image;return{rowInfo:{id:null==u?void 0:u.ID,imageStatus:null==u?void 0:u.Status,isoURL:null==u||null===(a=u.Installer)||void 0===a?void 0:a.ImageBuildISOURL,latestImageVersion:n,currentImageVersion:u.Version},noApiSortFilter:[null==u?void 0:u.Version,H.bd[null==u?void 0:u.ImageType],null==u?void 0:u.CreatedAt,null==u?void 0:u.Status],cells:[{title:o().createElement(f.Link,{to:"".concat(L._["manage-images"],"/").concat(t,"/versions/").concat(u.ID,"/details")},null==u?void 0:u.Version)},{title:H.bd[null==u?void 0:u.ImageType]},{title:null!=u&&null!==(l=u.Commit)&&void 0!==l&&l.OSTreeCommit?o().createElement($.u,{content:o().createElement("div",null,null==u||null===(i=u.Commit)||void 0===i?void 0:i.OSTreeCommit)},o().createElement("span",null,(0,X.aS)(null==u||null===(r=u.Commit)||void 0===r?void 0:r.OSTreeCommit,5,5))):o().createElement(b.x,null,"Unavailable")},{title:o().createElement(_.Z,{date:null==u?void 0:u.CreatedAt})},{title:o().createElement(x.Z,{type:null==u?void 0:u.Status.toLowerCase()})}]}}))}(null==a||null===(e=a.data)||void 0===e||null===(t=e.Data)||void 0===t?void 0:t.images,null==a||null===(n=a.data)||void 0===n||null===(l=n.Data)||void 0===l||null===(i=l.image_set)||void 0===i?void 0:i.ID,u))}),[a]),o().createElement(Y.Z,{className:"add-100vh"},o().createElement(J.Z,{apiFilterSort:!1,filters:ee,loadTableData:g.VR,tableData:{count:null==a||null===(n=a.data)||void 0===n?void 0:n.Count,isLoading:null==a?void 0:a.isLoading,hasError:null==a?void 0:a.hasError},columnNames:te,rows:d||[],actionResolver:function(e){var t,n,a,l,i,u,c,s=[];return null!==(t=e.rowInfo)&&void 0!==t&&t.isoURL&&s.push({title:o().createElement(b.x,{className:"force-text-black remove-underline",component:"a",href:e.rowInfo.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),("SUCCESS"===(null===(n=e.rowInfo)||void 0===n?void 0:n.imageStatus)||"ERROR"===(null===(a=e.rowInfo)||void 0===a?void 0:a.imageStatus))&&s.push({title:"Update Image",onClick:function(e,t,n){r(n.rowInfo.id)},isDisabled:(null==e||null===(u=e.rowInfo)||void 0===u?void 0:u.latestImageVersion)!==(null==e||null===(c=e.rowInfo)||void 0===c?void 0:c.currentImageVersion)}),"BUILDING"===(null===(l=e.rowInfo)||void 0===l?void 0:l.imageStatus)&&null!==(i=e.rowInfo)&&void 0!==i&&i.id&&s.push({title:""}),s},areActionsDisabled:function(e){var t;return"BUILDING"===(null===(t=e.rowInfo)||void 0===t?void 0:t.imageStatus)},defaultSort:{index:2,direction:"desc"}}))};ne.propTypes={imageData:E().object,urlParam:E().string,openUpdateWizard:E().func};const ae=ne;var le=n(47173),ie=n(15265),oe=n(3035),re=[{label:"Name",type:"text"}],ue=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,Q.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,Q.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,Q.cellWidth)(35)]}],ce=function(e){var t=e.distribution,n=e.installedPackages,a=e.addedPackages;return(0===e.showAll?n.filter((function(e){return(null==a?void 0:a.filter((function(t){return e.name===t.Name})).length)>0})):n).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:o().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---".concat(t,"/x86_64/7416/").concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},o().createElement(le.zx,{variant:"link",isSmall:!0,icon:o().createElement(ie.ZP,null),iconPosition:"right"},"More information"))}]}}))},se={0:"additional",1:"all"},de={additional:0,all:1},me=function(e){var t,n,a,r,u,c,s,d,m,v=e.imageVersion,g=(0,f.useLocation)(),p=(0,f.useHistory)(),h=g.pathname.split("/"),E=7===h.length?de[h[6]]:1,b=null==v||null===(t=v.image)||void 0===t||null===(n=t.Distribution)||void 0===n?void 0:n.split("-")[1].slice(0,-1),y=(0,i.useState)({}),I=(0,l.Z)(y,2),D=I[0],S=I[1],k=(0,i.useState)(E),O=(0,l.Z)(k,2),w=O[0],T=O[1];return(0,i.useEffect)((function(){S(v)}),[v]),(0,i.useEffect)((function(){h[5]!==se[w]&&T(E)}),[h]),"SUCCESS"===(null==v||null===(a=v.image)||void 0===a||null===(r=a.Commit)||void 0===r?void 0:r.Status)?o().createElement(Y.Z,{className:"add-100vh"},o().createElement(J.Z,{apiFilterSort:!1,filters:re,tableData:{count:0===w?null==D?void 0:D.additional_packages:null==D?void 0:D.packages,isLoading:!1,hasError:!1},columnNames:ue,rows:null!=D&&null!==(u=D.image)&&void 0!==u&&null!==(c=u.Commit)&&void 0!==c&&c.InstalledPackages?ce({distribution:b,installedPackages:null==D||null===(s=D.image)||void 0===s||null===(d=s.Commit)||void 0===d?void 0:d.InstalledPackages,addedPackages:null==D||null===(m=D.image)||void 0===m?void 0:m.Packages,showAll:w}):[],actionResolver:function(){return[]},areActionsDisabled:function(){return!0},defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t,n=null===(t=h[5])||void 0===t?void 0:t.toLowerCase();T(e),"packages"===n&&(7===h.length?h[6]=se[e]:h.push(se[e]),p.push(h.join("/")))},toggleState:w,emptyFilterState:{icon:"search",title:"No packages to display"}})):o().createElement(Y.Z,{className:"add-100vh"},o().createElement(oe.Z,{bgColor:"white",title:"Package data currently unavailable",body:"Packages will be displayed as soon as the image is finished being built.",primaryAction:null,secondaryActions:[]}))};me.propTypes={imageVersion:E().object};const ve=me;var ge={details:0,packages:1,versions:1},pe=function(e){var t=e.imageData,n=e.openUpdateWizard,a=e.imageVersion,r=e.isLoading,u=(0,f.useLocation)(),c=(0,f.useHistory)(),s=(0,i.useState)(ge.details),d=(0,l.Z)(s,2),m=d[0],v=d[1],g=a?"imageTab":"imageSetTab",p=(0,X.Ff)(u.pathname,["baseURL","imageSetVersion","imageSetTab","imageVersion","imageTab","packagesToggle"]);return(0,i.useEffect)((function(){p.imageTab?v(ge[p.imageTab]):v(ge[p.imageSetTab])}),[u.pathname]),o().createElement(o().Fragment,null,!t.isLoading&&t.hasError?o().createElement(oe.Z,{icon:"question",title:"Image not found",body:"Please check you have the correct link with the correct image Id.",primaryAction:{text:"Back to Manage Images",href:L._["manage-images"]},secondaryActions:[]}):o().createElement("div",{className:"edge-c-device--detail add-100vh"},o().createElement(A.m,{className:"pf-u-ml-md",activeKey:m,onSelect:function(e,t){var n=0===t?"details":a?"packages":"versions";p[g]=n,c.push(p.buildUrl()),v(t)}},o().createElement(B.O,{eventKey:ge.details,title:o().createElement(F.T,null,"Details")},o().createElement(q,{imageData:t,imageVersion:a})),r?o().createElement(B.O,{title:o().createElement(F.T,null,o().createElement(S.O,{width:"75px"}))}):a?o().createElement(B.O,{eventKey:ge.packages,title:o().createElement(F.T,null,"Packages")},o().createElement(ve,{imageVersion:a})):o().createElement(B.O,{eventKey:ge.versions,title:o().createElement(F.T,null,"Versions")},o().createElement(ae,{imageData:t,openUpdateWizard:n})))))};pe.propTypes={imageData:E().object,imageVersion:E().object,openUpdateWizard:E().func,isLoading:E().bool};const fe=pe;var he=n(53010);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ye=function(){var e=(0,f.useParams)(),t=e.imageId,n=e.imageVersionId,a=(0,i.useContext)(v.g).getRegistry,h=(0,m.I0)(),E=(0,f.useHistory)(),b=(0,i.useState)({isOpen:!1,updateId:null}),y=(0,l.Z)(b,2),I=y[0],D=y[1],S=(0,i.useState)(null),k=(0,l.Z)(S,2),O=k[0],w=k[1],T=(0,m.v9)((function(e){var t=e.imageSetDetailReducer;return{data:(null==t?void 0:t.data)||null,isLoading:null==t?void 0:t.isLoading,hasError:null==t?void 0:t.hasError}}),m.wU),C=function(e){E.push({pathname:E.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),D((function(t){return be(be({},t),{},{isOpen:!t.isLoading,updateId:e})}))};return(0,i.useEffect)((function(){var e,t,a,l,i,o;w(n?null==T||null===(e=T.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(a=t.images)||void 0===a?void 0:a[null==T||null===(l=T.data)||void 0===l||null===(i=l.Data)||void 0===i||null===(o=i.images)||void 0===o?void 0:o.findIndex((function(e){var t;return(null==e||null===(t=e.image)||void 0===t?void 0:t.ID)==n}))]:null)}),[T,n]),(0,i.useEffect)((function(){var e=a().register({imageSetDetailReducer:p.MQ});return(0,g.VR)(h,t),function(){return e()}}),[t]),o().createElement(i.Fragment,null,o().createElement(r.Z,{className:"pf-m-light"},o().createElement(u.K,{hasGutter:!0},o().createElement(c.v,null,o().createElement(j,{imageData:T,imageVersion:O,openUpdateWizard:C})))),o().createElement(fe,{imageData:T,urlParam:t,imageVersion:O,openUpdateWizard:C,isLoading:T.isLoading}),I.isOpen&&o().createElement(i.Suspense,{fallback:o().createElement(d.b,null,o().createElement(s.$,null))},o().createElement(he.default,{navigateBack:function(){E.push({pathname:E.location.pathname}),D((function(e){return be(be({},e),{},{isOpen:!1})}))},updateImageID:I.updateId})))}},69199:(e,t,n)=>{var a=n(89881),l=n(98612);e.exports=function(e,t){var n=-1,i=l(e)?Array(e.length):[];return a(e,(function(e,a,l){i[++n]=t(e,a,l)})),i}},94654:(e,t,n)=>{var a=n(21078),l=n(35161);e.exports=function(e,t){return a(l(e,t),1)}},24350:(e,t,n)=>{var a=n(89465),l=n(55189)((function(e,t,n){a(e,n,t)}));e.exports=l},35161:(e,t,n)=>{var a=n(29932),l=n(67206),i=n(69199),o=n(1469);e.exports=function(e,t){return(o(e)?a:i)(e,l(t,3))}}}]);
//# sourceMappingURL=../sourcemaps/6501.692f31bac0c717280bbf1563098cace6.js.map
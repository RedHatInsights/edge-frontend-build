(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[6501,46],{99332:(e,t,n)=>{"use strict";n.d(t,{Qo:()=>l,mB:()=>i,ZP:()=>o});var a=n(40400);const l={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},i=(0,a.IU)(l),o=i},21314:(e,t,n)=>{"use strict";n.d(t,{aA:()=>l,Gl:()=>i,ZP:()=>o});var a=n(40400);const l={name:"LockOpenIcon",height:512,width:576,svgPath:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z",yOffset:0,xOffset:0},i=(0,a.IU)(l),o=i},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(75418),l=n.n(a),i=n(45697),o=n.n(i),r=n(87462),u=n(75824),c=36e5,s=24*c,d=30*s,m=365*s,v=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},g=[{rightBound:1/0,description:function(e){return v(Math.round(e/m),"year")}},{rightBound:m,description:function(e){return v(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return v(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return v(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return v(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],p=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},f=function(e){return{exact:function(e){return p(e)+" UTC"},onlyDate:function(e){return p(e).slice(0,-6)},relative:function(e){return g.reduce((function(t,n){return n.rightBound>Date.now()-e?n.description(Date.now()-e):t}),p(e))},invalid:function(){return"Invalid date"}}[e]};function h(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,i=e.extraTitle,o=e.tooltipProps,c=void 0===o?{}:o,s=t instanceof Date?t:new Date(t),d=null==t||"Invalid Date"===s.toString()?"invalid":a;return l().createElement(l().Fragment,null,function(e,t,n){return{exact:function(t){return f(e)(t)},onlyDate:function(t){return f(e)(t)},relative:function(a){return function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return l().createElement(u.u,(0,r.Z)({},n,{content:l().createElement("div",null,a,e)}),t)}(f("exact")(a),l().createElement("span",null,f(e)(a)),t,n)},invalid:function(){return"Invalid date"}}[e]}(d,c,i)(s))}h.propTypes={date:o().oneOfType([o().instanceOf(Date),o().string,o().number]),type:o().oneOf(["exact","onlyDate","relative"]),extraTitle:o().node,tooltipProps:o().object}},53010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(93433),l=n(4942),i=n(15861),o=n(29439),r=n(87757),u=n.n(r),c=n(75418),s=n.n(c),d=n(69185),m=n(96354),v=n(52251),g=n(52643),p=n(29390),f=n(37619),h=n(45697),E=n.n(h),b=n(20873),y=n(94778),I=n(28216),D=n(59245),S=n(5230),k=n(93597),O=n(83215),w=n(48903),T=n(98309);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n,l,r,h,E,C,P,N,x,Z,L,_,V,j,R,A,B=e.navigateBack,F=e.updateImageID,W=e.reload,M=(0,c.useState)(),z=(0,o.Z)(M,2),G=z[0],H=z[1],K=(0,I.I0)(),q=function(){B(),W&&W()},J=(0,w.gV)("fleet-management.custom-repos"),$=(0,w.gV)("fleet-management.temporary-releases"),Q=(0,c.useContext)(D.g).getRegistry,Y=(0,I.v9)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),I.wU).data;return(0,c.useEffect)((function(){var e=Q().register({imageDetailReducer:S.OD});return F&&(0,y.J_)(K,F),function(){return e()}}),[K]),(0,c.useEffect)((function(){(0,i.Z)(u().mark((function e(){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return H(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),G&&Y?s().createElement(d.Z,{onClose:q,customComponentMapper:{review:b.Z},onSubmit:function(e){var t,n,a,l,i,o=e.values;(0,e.setIsSaving)((function(){return!0}));var r=U(U({},o),{},{Id:null==Y||null===(t=Y.image)||void 0===t?void 0:t.ID,name:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Name,version:(null==Y||null===(a=Y.image)||void 0===a?void 0:a.Version)+1,architecture:"x86_64",credentials:o.credentials?o.credentials:null==Y||null===(l=Y.image)||void 0===l?void 0:l.Installer.SshKey,username:o.username?o.username:null==Y||null===(i=Y.image)||void 0===i?void 0:i.Installer.Username});(0,y.Es)(K,r,(function(e){K(U(U({},(0,O.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,k.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,O.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,O.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),q(),K((0,y.Fj)({name:Y.value.Name,id:Y.value.ID}))}))},defaultArch:"x86_64",initialValues:{imageID:null==Y?void 0:Y.image.ID,name:null==Y||null===(t=Y.image)||void 0===t?void 0:t.Name,isUpdate:!0,description:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Description,credentials:null==Y||null===(l=Y.image)||void 0===l?void 0:l.Installer.SshKey,username:null==Y||null===(r=Y.image)||void 0===r?void 0:r.Installer.Username,version:null==Y||null===(h=Y.image)||void 0===h?void 0:h.Version,release:null==Y||null===(E=Y.image)||void 0===E?void 0:E.Distribution,release_options:$?(0,w.pS)(null==Y||null===(C=Y.image)||void 0===C?void 0:C.Distribution,[].concat((0,a.Z)(T.vk),(0,a.Z)(T.R8))):(0,w.pS)(null==Y||null===(P=Y.image)||void 0===P?void 0:P.Distribution),imageType:["rhel-edge-commit"],includesCustomRepos:J,"selected-packages":null==Y||null===(N=Y.image)||void 0===N||null===(x=N.Packages)||void 0===x?void 0:x.map((function(e){return U(U({},e),{},{name:e.Name})})),"third-party-repositories":null==Y||null===(Z=Y.image)||void 0===Z||null===(L=Z.ThirdPartyRepositories)||void 0===L?void 0:L.map((function(e){return U({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==Y||null===(_=Y.image)||void 0===_||null===(V=_.ThirdPartyRepositories)||void 0===V?void 0:V.map((function(e){return U({id:e.ID,name:e.Name},e)})),"custom-packages":null==Y||null===(j=Y.image)||void 0===j||null===(R=j.CustomPackages)||void 0===R?void 0:R.map((function(e){return U(U({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==Y||null===(A=Y.image)||void 0===A?void 0:A.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,v.jS,v.B9,v.jS,v.j7,v.Sp]}]}}):s().createElement(p.Y,null,s().createElement(g.b,null,s().createElement(f.$,{isSVG:!0,diameter:"100px"})))};P.propTypes={navigateBack:E().func,updateImageID:E().number,reload:E().func},P.defaultProps={navigateBack:function(){}};const N=P},12877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>be});var a=n(4942),l=n(29439),i=n(75418),o=n.n(i),r=n(48716),u=n(49739),c=n(83826),s=n(37619),d=n(52643),m=n(4874),v=n(45697),g=n.n(v),p=n(68340),f=n(25834),h=n(78140),E=n(68774),b=n(50383),y=n(64029),I=n(32835),D=n(79851),S=n(34512),k=n(56787),O=n(84457),w=n(75728),T=n(99355),C=n(35681),U=n(9192),P=n(5964),N=n(62410),x=function(e,t,n){var a,l,i,r,u,c,s=t||(null==e||null===(a=e.images)||void 0===a?void 0:a[0]),d=[];return(null==s||null===(l=s.image)||void 0===l?void 0:l.ID)&&d.push(o().createElement(O.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return n(null==s||null===(e=s.image)||void 0===e?void 0:e.ID)}},"Create new version")),(null==s||null===(i=s.image)||void 0===i||null===(r=i.Installer)||void 0===r?void 0:r.ImageBuildISOURL)&&d.push(o().createElement(O.h,{key:"download-button",component:"button"},o().createElement(p.x,{className:"force-text-black remove-underline",component:"a",href:null==s||null===(u=s.image)||void 0===u||null===(c=u.Installer)||void 0===c?void 0:c.ImageBuildISOURL,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),d},Z=function(e){var t,n,a,r,u,c,s,d,v,g,p,O,Z,L,_,V,j,R,A,B,F=e.imageData,W=e.imageVersion,M=e.openUpdateWizard,z=(0,i.useState)(!1),G=(0,l.Z)(z,2),H=G[0],K=G[1],q=(0,i.useState)({}),J=(0,l.Z)(q,2),$=J[0],Q=J[1];return(0,i.useEffect)((function(){var e;Q(null==F||null===(e=F.data)||void 0===e?void 0:e.Data)}),[F]),o().createElement(o().Fragment,null,!F.isLoading&&F.hasError?o().createElement(y.a,null,o().createElement(I.g,null,o().createElement(m.Link,{to:U._["manage-images"]},"Back to Manage Images"))):o().createElement(o().Fragment,null,o().createElement(y.a,null,o().createElement(I.g,null,o().createElement(m.Link,{to:U._["manage-images"]},"Manage Images")),W?o().createElement(I.g,null,o().createElement(m.Link,{to:"".concat(U._["manage-images"],"/").concat(null==$||null===(t=$.image_set)||void 0===t?void 0:t.ID)},null==$||null===(n=$.image_set)||void 0===n?void 0:n.Name)):o().createElement(I.g,{isActive:!0},(null==$||null===(a=$.image_set)||void 0===a?void 0:a.Name)||o().createElement(b.O,{width:"100px"})),W&&o().createElement(I.g,{isActive:!0},null==W||null===(r=W.image)||void 0===r?void 0:r.Version)),o().createElement(E.D,null,o().createElement(D.P,null,o().createElement(S.J,null,o().createElement(f.G,{component:"dl"},o().createElement(h.T,{component:"h1",className:"grid-align-center pf-u-mb-0"},(null==$||null===(u=$.image_set)||void 0===u?void 0:u.Name)||o().createElement(b.O,{width:"150px"})),o().createElement(h.T,{className:"pf-u-pt-sm",component:"dd"},null!=$&&$.Status||null!=$&&null!==(c=$.images)&&void 0!==c&&null!==(s=c[0])&&void 0!==s&&null!==(d=s.image)&&void 0!==d&&d.Status?o().createElement(C.Z,{type:null==$||null===(v=$.images)||void 0===v||null===(g=v[0])||void 0===g||null===(p=g.image)||void 0===p?void 0:p.Status.toLowerCase()}):o().createElement(b.O,{width:"100px"})),null!=W&&null!==(O=W.image)&&void 0!==O&&O.UpdatedAt||null!=$&&null!==(Z=$.images)&&void 0!==Z&&null!==(L=Z[0].image)&&void 0!==L&&L.UpdatedAt?o().createElement(h.T,{component:"p"},"Last updated ",o().createElement(N.Z,{date:W?null==W||null===(_=W.image)||void 0===_?void 0:_.UpdatedAt:null==$||null===(V=$.images)||void 0===V||null===(j=V[0].image)||void 0===j?void 0:j.UpdatedAt})):o().createElement(b.O,{width:"200px"}))),o().createElement(S.J,{isFilled:!0}),o().createElement(S.J,null,o().createElement(k.L,{position:T.ir.right,toggle:o().createElement(w.Z,{id:"image-set-details-dropdown",toggleIndicator:P.ZP,onToggle:function(e){return K(e)},isDisabled:"BUILDING"===(W?null==W||null===(R=W.image)||void 0===R?void 0:R.Status:null==$||null===(A=$.Images)||void 0===A||null===(B=A[0])||void 0===B?void 0:B.Status)||!1},"Actions"),isOpen:H,dropdownItems:x($,W,M)}))))))};Z.propTypes={imageData:g().object,imageVersion:g().object,openUpdateWizard:g().func};const L=Z;var _=n(14638),V=n(28883),j=n(29873),R=n(93433),A=n(50693),B=n(16475),F=n(66435),W=n(98309),M=function(e){var t,n,a,r,u=e.imageData,c=e.imageVersion,s=(0,i.useState)({}),d=(0,l.Z)(s,2),v=d[0],g=d[1];(0,i.useEffect)((function(){var e,t,n;g(c||(null==u||null===(e=u.data)||void 0===e||null===(t=e.Data)||void 0===t||null===(n=t.images)||void 0===n?void 0:n[0]))}),[u,c]);var y=function(e){return(0,R.Z)(Array(2*e)).map((function(e,t){return o().createElement(b.O,{width:"180px",key:t})}))},I={Version:"Version",Created:function(){return o().createElement(N.Z,{date:null==v||null===(e=v.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return o().createElement("div",{key:t},e)}))},Release:function(){var e;return null===W.aN||void 0===W.aN?void 0:W.aN[null==v||null===(e=v.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},D={Username:function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH key":function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},S={"Total additional packages":function(){var e,t;return o().createElement(m.Link,{to:"".concat(U._["manage-images"],"/").concat(null==v||null===(e=v.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==v||null===(t=v.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==v?void 0:v.additional_packages)},"Total packages":function(){var e,t;return o().createElement(m.Link,{to:"".concat(U._["manage-images"],"/").concat(null==v||null===(e=v.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==v||null===(t=v.image)||void 0===t?void 0:t.ID,"/packages/all")},null==v?void 0:v.packages)}},k={Added:function(){return null==v?void 0:v.update_added},Removed:function(){return null==v?void 0:v.update_removed},Updated:function(){return null==v?void 0:v.update_updated}};null!=v&&null!==(t=v.image)&&void 0!==t&&null!==(n=t.Installer)&&void 0!==n&&n.Checksum&&(I["SHA-256 checksum"]=function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum}),null!=v&&null!==(a=v.image)&&void 0!==a&&null!==(r=a.Commit)&&void 0!==r&&r.OSTreeCommit&&(I["Ostree commit hash"]=function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Commit)||void 0===t?void 0:t.OSTreeCommit});var O=function(e){return v?Object.entries(e).map((function(e,t){var n,a,r=(0,l.Z)(e,2),u=r[0],c=r[1];return o().createElement(i.Fragment,{key:t},o().createElement(h.T,{className:"details-label",component:h.v.dt},u),"SHA-256 checksum"===u||"Ostree commit hash"===u||"SSH key"===u&&c()?o().createElement(h.T,{component:h.v.dd},o().createElement(F.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word",id:"".concat(u.replace(/\s+/g,"-").toLowerCase(),"-clipboard-copy")},"function"==typeof c?c()||"Unavailable":(null==v||null===(n=v.image)||void 0===n?void 0:n[c])||"Unavailable")):o().createElement(h.T,{className:"pf-u-text-break-word",component:h.v.dd},"function"==typeof c?0===c()?0:c()||"Unavailable":(null==v||null===(a=v.image)||void 0===a?void 0:a[c])||"Unavailable"))})):null};return o().createElement(E.D,{className:"pf-u-ml-lg pf-u-mt-md"},o().createElement(A.r,{span:12},o().createElement(B.P,{span:5},o().createElement(p.x,{component:p.q.h2},c?"Details":"Most recent image"),o().createElement(f.G,{component:f.F.dl},O(I)||y(6)),o().createElement(p.x,{component:p.q.h2},"User information "),o().createElement(f.G,{component:f.F.dl},O(D)||y(2))),o().createElement(B.P,{span:1}),o().createElement(B.P,{span:6},o().createElement(p.x,{component:p.q.h2},"Packages "),o().createElement(f.G,{component:f.F.dl},O(S)||y(3)),o().createElement(p.x,{component:p.q.h2},"Changes from previous version"),o().createElement(f.G,{component:f.F.dl},O(k)||y(3)))))};M.propTypes={imageData:g().object,imageVersion:g().object};const z=M;var G=n(73448),H=n(75824),K=n(94778),q=n(92609),J=n(86350),$=n(48903),Q=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],Y=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,q.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,q.cellWidth)(25)]},{title:"Ostree commit hash",type:"ostree_commit_hash",sort:!1,columnTransforms:[(0,q.cellWidth)(20)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,q.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,q.cellWidth)(35)]}],X=function(e){var t,n,a=e.imageData,r=e.openUpdateWizard,u=null==a||null===(t=a.data)||void 0===t?void 0:t.Data.image_set.Version,c=(0,i.useState)([]),s=(0,l.Z)(c,2),d=s[0],v=s[1];return(0,i.useEffect)((function(){var e,t,n,l,i;null!=a&&a.data&&v(function(e,t,n){return null==e?void 0:e.map((function(e){var a,l,i,r,u=e.image;return{rowInfo:{id:null==u?void 0:u.ID,imageStatus:null==u?void 0:u.Status,isoURL:null==u||null===(a=u.Installer)||void 0===a?void 0:a.ImageBuildISOURL,latestImageVersion:n,currentImageVersion:u.Version},noApiSortFilter:[null==u?void 0:u.Version,W.bd[null==u?void 0:u.ImageType],null==u?void 0:u.CreatedAt,null==u?void 0:u.Status],cells:[{title:o().createElement(m.Link,{to:"".concat(U._["manage-images"],"/").concat(t,"/versions/").concat(u.ID,"/details")},null==u?void 0:u.Version)},{title:W.bd[null==u?void 0:u.ImageType]},{title:null!=u&&null!==(l=u.Commit)&&void 0!==l&&l.OSTreeCommit?o().createElement(H.u,{content:o().createElement("div",null,null==u||null===(i=u.Commit)||void 0===i?void 0:i.OSTreeCommit)},o().createElement("span",null,(0,$.aS)(null==u||null===(r=u.Commit)||void 0===r?void 0:r.OSTreeCommit,5,5))):o().createElement(p.x,null,"Unavailable")},{title:o().createElement(N.Z,{date:null==u?void 0:u.CreatedAt})},{title:o().createElement(C.Z,{type:null==u?void 0:u.Status.toLowerCase()})}]}}))}(null==a||null===(e=a.data)||void 0===e||null===(t=e.Data)||void 0===t?void 0:t.images,null==a||null===(n=a.data)||void 0===n||null===(l=n.Data)||void 0===l||null===(i=l.image_set)||void 0===i?void 0:i.ID,u))}),[a]),o().createElement(J.Z,{className:"add-100vh"},o().createElement(G.Z,{apiFilterSort:!1,filters:Q,loadTableData:K.VR,tableData:{count:null==a||null===(n=a.data)||void 0===n?void 0:n.Count,isLoading:null==a?void 0:a.isLoading,hasError:null==a?void 0:a.hasError},columnNames:Y,rows:d||[],actionResolver:function(e){var t,n,a,l,i,u,c,s=[];return null!==(t=e.rowInfo)&&void 0!==t&&t.isoURL&&s.push({title:o().createElement(p.x,{className:"force-text-black remove-underline",component:"a",href:e.rowInfo.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),("SUCCESS"===(null===(n=e.rowInfo)||void 0===n?void 0:n.imageStatus)||"ERROR"===(null===(a=e.rowInfo)||void 0===a?void 0:a.imageStatus))&&s.push({title:"Update Image",onClick:function(e,t,n){r(n.rowInfo.id)},isDisabled:(null==e||null===(u=e.rowInfo)||void 0===u?void 0:u.latestImageVersion)!==(null==e||null===(c=e.rowInfo)||void 0===c?void 0:c.currentImageVersion)}),"BUILDING"===(null===(l=e.rowInfo)||void 0===l?void 0:l.imageStatus)&&null!==(i=e.rowInfo)&&void 0!==i&&i.id&&s.push({title:""}),s},areActionsDisabled:function(e){var t;return"BUILDING"===(null===(t=e.rowInfo)||void 0===t?void 0:t.imageStatus)},defaultSort:{index:2,direction:"desc"}}))};X.propTypes={imageData:g().object,urlParam:g().string,openUpdateWizard:g().func};const ee=X;var te=n(47173),ne=n(15265),ae=n(3035),le=[{label:"Name",type:"text"}],ie=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,q.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,q.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,q.cellWidth)(35)]}],oe=function(e){var t=e.distribution,n=e.installedPackages,a=e.addedPackages;return(0===e.showAll?n.filter((function(e){return(null==a?void 0:a.filter((function(t){return e.name===t.Name})).length)>0})):n).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:o().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---".concat(t,"/x86_64/7416/").concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},o().createElement(te.zx,{variant:"link",isSmall:!0,icon:o().createElement(ne.ZP,null),iconPosition:"right"},"More information"))}]}}))},re={0:"additional",1:"all"},ue={additional:0,all:1},ce=function(e){var t,n,a,r,u,c,s,d,v,g=e.imageVersion,p=(0,m.useLocation)(),f=(0,m.useHistory)(),h=p.pathname.split("/"),E=7===h.length?ue[h[6]]:1,b=null==g||null===(t=g.image)||void 0===t||null===(n=t.Distribution)||void 0===n?void 0:n.split("-")[1].slice(0,-1),y=(0,i.useState)({}),I=(0,l.Z)(y,2),D=I[0],S=I[1],k=(0,i.useState)(E),O=(0,l.Z)(k,2),w=O[0],T=O[1];return(0,i.useEffect)((function(){S(g)}),[g]),(0,i.useEffect)((function(){h[5]!==re[w]&&T(E)}),[h]),"SUCCESS"===(null==g||null===(a=g.image)||void 0===a||null===(r=a.Commit)||void 0===r?void 0:r.Status)?o().createElement(J.Z,{className:"add-100vh"},o().createElement(G.Z,{apiFilterSort:!1,filters:le,tableData:{count:0===w?null==D?void 0:D.additional_packages:null==D?void 0:D.packages,isLoading:!1,hasError:!1},columnNames:ie,rows:null!=D&&null!==(u=D.image)&&void 0!==u&&null!==(c=u.Commit)&&void 0!==c&&c.InstalledPackages?oe({distribution:b,installedPackages:null==D||null===(s=D.image)||void 0===s||null===(d=s.Commit)||void 0===d?void 0:d.InstalledPackages,addedPackages:null==D||null===(v=D.image)||void 0===v?void 0:v.Packages,showAll:w}):[],actionResolver:function(){return[]},areActionsDisabled:function(){return!0},defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t,n=null===(t=h[5])||void 0===t?void 0:t.toLowerCase();T(e),"packages"===n&&(7===h.length?h[6]=re[e]:h.push(re[e]),f.push(h.join("/")))},toggleState:w,emptyFilterState:{icon:"search",title:"No packages to display"}})):o().createElement(J.Z,{className:"add-100vh"},o().createElement(ae.Z,{bgColor:"white",title:"Package data currently unavailable",body:"Packages will be displayed as soon as the image is finished being built.",primaryAction:null,secondaryActions:[]}))};ce.propTypes={imageVersion:g().object};const se=ce;var de={details:0,packages:1,versions:1},me=function(e){var t=e.imageData,n=e.openUpdateWizard,a=e.imageVersion,r=e.isLoading,u=(0,m.useLocation)(),c=(0,m.useHistory)(),s=(0,i.useState)(de.details),d=(0,l.Z)(s,2),v=d[0],g=d[1],p=a?"imageTab":"imageSetTab",f=(0,$.Ff)(u.pathname,["baseURL","imageSetVersion","imageSetTab","imageVersion","imageTab","packagesToggle"]);return(0,i.useEffect)((function(){f.imageTab?g(de[f.imageTab]):g(de[f.imageSetTab])}),[u.pathname]),o().createElement(o().Fragment,null,!t.isLoading&&t.hasError?o().createElement(ae.Z,{icon:"question",title:"Image not found",body:"Please check you have the correct link with the correct image Id.",primaryAction:{text:"Back to Manage Images",href:U._["manage-images"]},secondaryActions:[]}):o().createElement("div",{className:"edge-c-device--detail add-100vh"},o().createElement(_.m,{className:"pf-u-ml-md",activeKey:v,onSelect:function(e,t){var n=0===t?"details":a?"packages":"versions";f[p]=n,c.push(f.buildUrl()),g(t)}},o().createElement(V.O,{eventKey:de.details,title:o().createElement(j.T,null,"Details")},o().createElement(z,{imageData:t,imageVersion:a})),r?o().createElement(V.O,{title:o().createElement(j.T,null,o().createElement(b.O,{width:"75px"}))}):a?o().createElement(V.O,{eventKey:de.packages,title:o().createElement(j.T,null,"Packages")},o().createElement(se,{imageVersion:a})):o().createElement(V.O,{eventKey:de.versions,title:o().createElement(j.T,null,"Versions")},o().createElement(ee,{imageData:t,openUpdateWizard:n})))))};me.propTypes={imageData:g().object,imageVersion:g().object,openUpdateWizard:g().func,isLoading:g().bool};const ve=me;var ge=n(53010),pe=n(96094),fe=n(93597);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const be=function(){var e=(0,m.useParams)(),t=e.imageId,n=e.imageVersionId,a=(0,m.useHistory)(),v=(0,i.useState)({isOpen:!1,updateId:null}),g=(0,l.Z)(v,2),p=g[0],f=g[1],h=(0,i.useState)(null),E=(0,l.Z)(h,2),b=E[0],y=E[1],I=(0,pe.Z)({api:fe.dt,id:t,tableReload:!0}),D=(0,l.Z)(I,2),S=D[0],k=D[1],O=S.data,w=S.isLoading,T=function(e){a.push({pathname:a.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),f((function(t){return Ee(Ee({},t),{},{isOpen:!t.isLoading,updateId:e})}))};return(0,i.useEffect)((function(){var e,t,a,l;y(n?null==O||null===(e=O.Data)||void 0===e||null===(t=e.images)||void 0===t?void 0:t[null==O||null===(a=O.Data)||void 0===a||null===(l=a.images)||void 0===l?void 0:l.findIndex((function(e){var t;return(null==e||null===(t=e.image)||void 0===t?void 0:t.ID)==n}))]:null)}),[S,n]),(0,i.useEffect)((function(){k()}),[t]),o().createElement(i.Fragment,null,o().createElement(r.Z,{className:"pf-m-light"},o().createElement(u.K,{hasGutter:!0},o().createElement(c.v,null,o().createElement(L,{imageData:S,imageVersion:b,openUpdateWizard:T})))),o().createElement(ve,{imageData:S,urlParam:t,imageVersion:b,openUpdateWizard:T,isLoading:w}),p.isOpen&&o().createElement(i.Suspense,{fallback:o().createElement(d.b,null,o().createElement(s.$,null))},o().createElement(ge.default,{navigateBack:function(){a.push({pathname:a.location.pathname}),f((function(e){return Ee(Ee({},e),{},{isOpen:!1})}))},updateImageID:p.updateId})))}},69199:(e,t,n)=>{var a=n(89881),l=n(98612);e.exports=function(e,t){var n=-1,i=l(e)?Array(e.length):[];return a(e,(function(e,a,l){i[++n]=t(e,a,l)})),i}},94654:(e,t,n)=>{var a=n(21078),l=n(35161);e.exports=function(e,t){return a(l(e,t),1)}},24350:(e,t,n)=>{var a=n(89465),l=n(55189)((function(e,t,n){a(e,n,t)}));e.exports=l},35161:(e,t,n)=>{var a=n(29932),l=n(67206),i=n(69199),o=n(1469);e.exports=function(e,t){return(o(e)?a:i)(e,l(t,3))}}}]);
//# sourceMappingURL=../sourcemaps/6501.02f10f6405e55a5d1d87d571d245531a.js.map
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[6501,46],{99332:(e,t,n)=>{"use strict";n.d(t,{Qo:()=>i,mB:()=>l,ZP:()=>o});var a=n(40400);const i={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0},l=(0,a.IU)(i),o=l},21314:(e,t,n)=>{"use strict";n.d(t,{aA:()=>i,Gl:()=>l,ZP:()=>o});var a=n(40400);const i={name:"LockOpenIcon",height:512,width:576,svgPath:"M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z",yOffset:0,xOffset:0},l=(0,a.IU)(i),o=l},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(75418),i=n.n(a),l=n(45697),o=n.n(l),r=n(87462),u=n(75824),c=36e5,s=24*c,d=30*s,m=365*s,v=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},g=[{rightBound:1/0,description:function(e){return v(Math.round(e/m),"year")}},{rightBound:m,description:function(e){return v(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return v(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return v(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return v(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],p=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},f=function(e){return{exact:function(e){return p(e)+" UTC"},onlyDate:function(e){return p(e).slice(0,-6)},relative:function(e){return g.reduce((function(t,n){return n.rightBound>Date.now()-e?n.description(Date.now()-e):t}),p(e))},invalid:function(){return"Invalid date"}}[e]};function h(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,l=e.extraTitle,o=e.tooltipProps,c=void 0===o?{}:o,s=t instanceof Date?t:new Date(t),d=null==t||"Invalid Date"===s.toString()?"invalid":a;return i().createElement(i().Fragment,null,function(e,t,n){return{exact:function(t){return f(e)(t)},onlyDate:function(t){return f(e)(t)},relative:function(a){return function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return i().createElement(u.u,(0,r.Z)({},n,{content:i().createElement("div",null,a,e)}),t)}(f("exact")(a),i().createElement("span",null,f(e)(a)),t,n)},invalid:function(){return"Invalid date"}}[e]}(d,c,l)(s))}h.propTypes={date:o().oneOfType([o().instanceOf(Date),o().string,o().number]),type:o().oneOf(["exact","onlyDate","relative"]),extraTitle:o().node,tooltipProps:o().object}},53010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var a=n(93433),i=n(4942),l=n(15861),o=n(29439),r=n(87757),u=n.n(r),c=n(75418),s=n.n(c),d=n(69185),m=n(96354),v=n(52251),g=n(52643),p=n(29390),f=n(37619),h=n(45697),E=n.n(h),b=n(20873),I=n(94778),y=n(28216),S=n(59245),D=n(5230),k=n(93597),w=n(83215),O=n(48903),T=n(98309);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t,n,i,r,h,E,U,P,L,N,Z,x,j,V,A,R,_,B=e.navigateBack,F=e.updateImageID,W=e.reload,M=(0,c.useState)(),z=(0,o.Z)(M,2),G=z[0],H=z[1],q=(0,y.I0)(),K=function(){B(),W&&W()},J=(0,O.gV)("fleet-management.custom-repos"),$=(0,O.gV)("fleet-management.temporary-releases"),Q=(0,c.useContext)(S.g).getRegistry,Y=(0,y.v9)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),y.wU).data;return(0,c.useEffect)((function(){var e=Q().register({imageDetailReducer:D.OD});return F&&(0,I.J_)(q,F),function(){return e()}}),[q]),(0,c.useEffect)((function(){(0,l.Z)(u().mark((function e(){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return H(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]),G&&Y?s().createElement(d.Z,{onClose:K,customComponentMapper:{review:b.Z},onSubmit:function(e){var t,n,a,i,l,o=e.values;(0,e.setIsSaving)((function(){return!0}));var r=C(C({},o),{},{Id:null==Y||null===(t=Y.image)||void 0===t?void 0:t.ID,name:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Name,version:(null==Y||null===(a=Y.image)||void 0===a?void 0:a.Version)+1,architecture:"x86_64",credentials:o.credentials?o.credentials:null==Y||null===(i=Y.image)||void 0===i?void 0:i.Installer.SshKey,username:o.username?o.username:null==Y||null===(l=Y.image)||void 0===l?void 0:l.Installer.Username});(0,I.Es)(q,r,(function(e){q(C(C({},(0,w.wN)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,k.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,w.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,w.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))}]}}}})),K(),q((0,I.Fj)({name:Y.value.Name,id:Y.value.ID}))}))},defaultArch:"x86_64",initialValues:{imageID:null==Y?void 0:Y.image.ID,name:null==Y||null===(t=Y.image)||void 0===t?void 0:t.Name,isUpdate:!0,description:null==Y||null===(n=Y.image)||void 0===n?void 0:n.Description,credentials:null==Y||null===(i=Y.image)||void 0===i?void 0:i.Installer.SshKey,username:null==Y||null===(r=Y.image)||void 0===r?void 0:r.Installer.Username,version:null==Y||null===(h=Y.image)||void 0===h?void 0:h.Version,release:null==Y||null===(E=Y.image)||void 0===E?void 0:E.Distribution,release_options:$?(0,O.pS)(null==Y||null===(U=Y.image)||void 0===U?void 0:U.Distribution,[].concat((0,a.Z)(T.vk),(0,a.Z)(T.R8))):(0,O.pS)(null==Y||null===(P=Y.image)||void 0===P?void 0:P.Distribution),imageType:["rhel-edge-commit"],includesCustomRepos:J,"selected-packages":null==Y||null===(L=Y.image)||void 0===L||null===(N=L.Packages)||void 0===N?void 0:N.map((function(e){return C(C({},e),{},{name:e.Name})})),"third-party-repositories":null==Y||null===(Z=Y.image)||void 0===Z||null===(x=Z.ThirdPartyRepositories)||void 0===x?void 0:x.map((function(e){return C({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==Y||null===(j=Y.image)||void 0===j||null===(V=j.ThirdPartyRepositories)||void 0===V?void 0:V.map((function(e){return C({id:e.ID,name:e.Name},e)})),"custom-packages":null==Y||null===(A=Y.image)||void 0===A||null===(R=A.CustomPackages)||void 0===R?void 0:R.map((function(e){return C(C({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Update image"},showTitles:!0,title:"Update image: ".concat(null==Y||null===(_=Y.image)||void 0===_?void 0:_.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[v.bR,v.Ud,v.l9,v.jS,v.B9,v.jS,v.j7,v.Sp]}]}}):s().createElement(p.Y,null,s().createElement(g.b,null,s().createElement(f.$,{isSVG:!0,diameter:"100px"})))};P.propTypes={navigateBack:E().func,updateImageID:E().number,reload:E().func},P.defaultProps={navigateBack:function(){}};const L=P},12877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>be});var a=n(4942),i=n(29439),l=n(75418),o=n.n(l),r=n(48716),u=n(49739),c=n(83826),s=n(37619),d=n(52643),m=n(4874),v=n(45697),g=n.n(v),p=n(68340),f=n(25834),h=n(78140),E=n(68774),b=n(50383),I=n(64029),y=n(32835),S=n(79851),D=n(34512),k=n(56787),w=n(84457),O=n(75728),T=n(99355),U=n(35681),C=n(9192),P=n(5964),L=n(62410),N=function(e,t,n,a){var i,l=t||(null==e?void 0:e.LastImageDetails),r=[];return(null==l||null===(i=l.image)||void 0===i?void 0:i.ID)&&r.push(o().createElement(w.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return a(null==l||null===(e=l.image)||void 0===e?void 0:e.ID)}},"Create new version")),n&&r.push(o().createElement(w.h,{key:"download-button",component:"button"},o().createElement(p.x,{className:"force-text-black remove-underline",component:"a",href:n,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),r},Z=function(e){var t,n,a,r,u,c,s,d,v,g,p,w,Z,x,j,V,A,R,_,B=e.imageData,F=e.imageVersion,W=e.openUpdateWizard,M=(0,l.useState)(!1),z=(0,i.Z)(M,2),G=z[0],H=z[1],q=(0,l.useState)({}),K=(0,i.Z)(q,2),J=K[0],$=K[1];return(0,l.useEffect)((function(){$(null==B?void 0:B.data)}),[B]),o().createElement(o().Fragment,null,!B.isLoading&&B.hasError?o().createElement(I.a,null,o().createElement(y.g,null,o().createElement(m.Link,{to:C._["manage-images"]},"Back to Manage Images"))):o().createElement(o().Fragment,null,o().createElement(I.a,null,o().createElement(y.g,null,o().createElement(m.Link,{to:C._["manage-images"]},"Manage Images")),F?o().createElement(y.g,null,o().createElement(m.Link,{to:"".concat(C._["manage-images"],"/").concat(null==J||null===(t=J.ImageSet)||void 0===t?void 0:t.ID)},null==J||null===(n=J.ImageSet)||void 0===n?void 0:n.Name)):o().createElement(y.g,{isActive:!0},(null==J||null===(a=J.ImageSet)||void 0===a?void 0:a.Name)||o().createElement(b.O,{width:"100px"})),F&&o().createElement(y.g,{isActive:!0},null==F||null===(r=F.image)||void 0===r?void 0:r.Version)),o().createElement(E.D,null,o().createElement(S.P,null,o().createElement(D.J,null,o().createElement(f.G,{component:"dl"},o().createElement(h.T,{component:"h1",className:"grid-align-center pf-u-mb-0"},(null==J||null===(u=J.ImageSet)||void 0===u?void 0:u.Name)||o().createElement(b.O,{width:"150px"})),o().createElement(h.T,{className:"pf-u-pt-sm",component:"dd"},null!=F&&null!==(c=F.image)&&void 0!==c&&c.Status||null!=J&&null!==(s=J.LastImageDetails)&&void 0!==s&&null!==(d=s.image)&&void 0!==d&&d.Status?o().createElement(U.Z,{type:F?null==F||null===(v=F.image)||void 0===v?void 0:v.Status.toLowerCase():null==J||null===(g=J.LastImageDetails)||void 0===g||null===(p=g.image)||void 0===p?void 0:p.Status.toLowerCase()}):o().createElement(b.O,{width:"100px"})),null!=F&&null!==(w=F.image)&&void 0!==w&&w.UpdatedAt||null!=J&&null!==(Z=J.LastImageDetails)&&void 0!==Z&&null!==(x=Z.image)&&void 0!==x&&x.UpdatedAt?o().createElement(h.T,{component:"p"},"Last updated ",o().createElement(L.Z,{date:F?null==F||null===(j=F.image)||void 0===j?void 0:j.UpdatedAt:null==J||null===(V=J.LastImageDetails)||void 0===V||null===(A=V.image)||void 0===A?void 0:A.UpdatedAt})):o().createElement(b.O,{width:"200px"}))),o().createElement(D.J,{isFilled:!0}),o().createElement(D.J,null,o().createElement(k.L,{position:T.ir.right,toggle:o().createElement(O.Z,{id:"image-set-details-dropdown",toggleIndicator:P.ZP,onToggle:function(e){return H(e)},isDisabled:"BUILDING"===(F?null==F||null===(R=F.image)||void 0===R?void 0:R.Status:null==J||null===(_=J.LastImageDetails)||void 0===_?void 0:_.image.Status)||!1},"Actions"),isOpen:G,dropdownItems:N(J,F,null==J?void 0:J.ImageBuildIsoURL,W)}))))))};Z.propTypes={imageData:g().object,imageVersion:g().object,openUpdateWizard:g().func};const x=Z;var j=n(14638),V=n(28883),A=n(29873),R=n(93433),_=n(50693),B=n(16475),F=n(66435),W=n(98309),M=function(e){var t,n,a,r,u=e.imageData,c=e.imageVersion,s=(0,l.useState)({}),d=(0,i.Z)(s,2),v=d[0],g=d[1];(0,l.useEffect)((function(){var e;g(c||(null==u||null===(e=u.data)||void 0===e?void 0:e.LastImageDetails))}),[u,c]);var I=function(e){return(0,R.Z)(Array(2*e)).map((function(e,t){return o().createElement(b.O,{width:"180px",key:t})}))},y={Version:"Version",Created:function(){return o().createElement(L.Z,{date:null==v||null===(e=v.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return o().createElement("div",{key:t},e)}))},Release:function(){var e;return null===W.aN||void 0===W.aN?void 0:W.aN[null==v||null===(e=v.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},S={Username:function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH key":function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},D={"Total additional packages":function(){var e,t;return o().createElement(m.Link,{to:"".concat(C._["manage-images"],"/").concat(null==v||null===(e=v.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==v||null===(t=v.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==v?void 0:v.additional_packages)},"Total packages":function(){var e,t;return o().createElement(m.Link,{to:"".concat(C._["manage-images"],"/").concat(null==v||null===(e=v.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==v||null===(t=v.image)||void 0===t?void 0:t.ID,"/packages/all")},null==v?void 0:v.packages)}},k={Added:function(){return null==v?void 0:v.update_added},Removed:function(){return null==v?void 0:v.update_removed},Updated:function(){return null==v?void 0:v.update_updated}};null!=v&&null!==(t=v.image)&&void 0!==t&&null!==(n=t.Installer)&&void 0!==n&&n.Checksum&&(y["SHA-256 checksum"]=function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum}),null!=v&&null!==(a=v.image)&&void 0!==a&&null!==(r=a.Commit)&&void 0!==r&&r.OSTreeCommit&&(y["Ostree commit hash"]=function(){var e,t;return null==v||null===(e=v.image)||void 0===e||null===(t=e.Commit)||void 0===t?void 0:t.OSTreeCommit});var w=function(e){return v?Object.entries(e).map((function(e,t){var n,a,r=(0,i.Z)(e,2),u=r[0],c=r[1];return o().createElement(l.Fragment,{key:t},o().createElement(h.T,{className:"details-label",component:h.v.dt},u),"SHA-256 checksum"===u||"Ostree commit hash"===u||"SSH key"===u&&c()?o().createElement(h.T,{component:h.v.dd},o().createElement(F.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word",id:"".concat(u.replace(/\s+/g,"-").toLowerCase(),"-clipboard-copy")},"function"==typeof c?c()||"Unavailable":(null==v||null===(n=v.image)||void 0===n?void 0:n[c])||"Unavailable")):o().createElement(h.T,{className:"pf-u-text-break-word",component:h.v.dd},"function"==typeof c?0===c()?0:c()||"Unavailable":(null==v||null===(a=v.image)||void 0===a?void 0:a[c])||"Unavailable"))})):null};return o().createElement(E.D,{className:"pf-u-ml-lg pf-u-mt-md"},o().createElement(_.r,{span:12},o().createElement(B.P,{span:5},o().createElement(p.x,{component:p.q.h2},c?"Details":"Most recent image"),o().createElement(f.G,{component:f.F.dl},w(y)||I(6)),o().createElement(p.x,{component:p.q.h2},"User information "),o().createElement(f.G,{component:f.F.dl},w(S)||I(2))),o().createElement(B.P,{span:1}),o().createElement(B.P,{span:6},o().createElement(p.x,{component:p.q.h2},"Packages "),o().createElement(f.G,{component:f.F.dl},w(D)||I(3)),o().createElement(p.x,{component:p.q.h2},"Changes from previous version"),o().createElement(f.G,{component:f.F.dl},w(k)||I(3)))))};M.propTypes={imageData:g().object,imageVersion:g().object};const z=M;var G=n(73448),H=n(75824),q=n(93597),K=n(92609),J=n(86350),$=n(48903),Q=n(96094),Y=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],X=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,K.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,K.cellWidth)(25)]},{title:"Ostree commit hash",type:"ostree_commit_hash",sort:!1,columnTransforms:[(0,K.cellWidth)(20)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,K.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,K.cellWidth)(35)]}],ee=function(e,t,n){return null==e?void 0:e.map((function(e){return{rowInfo:{id:null==e?void 0:e.ID,imageStatus:null==e?void 0:e.Status,isoURL:null==e?void 0:e.ImageBuildIsoURL,latestImageVersion:n,currentImageVersion:e.Version},noApiSortFilter:[null==e?void 0:e.Version,W.bd[null==e?void 0:e.ImageType],null==e?void 0:e.CreatedAt,null==e?void 0:e.Status],cells:[{title:o().createElement(m.Link,{to:"".concat(C._["manage-images"],"/").concat(t,"/versions/").concat(e.ID,"/details")},null==e?void 0:e.Version)},{title:W.bd[null==e?void 0:e.ImageType]},{title:null!=e&&e.CommitCheckSum?o().createElement(H.u,{content:o().createElement("div",null,e.CommitCheckSum)},o().createElement("span",null,(0,$.aS)(e.CommitCheckSum,5,5))):o().createElement(p.x,null,"Unavailable")},{title:o().createElement(L.Z,{date:null==e?void 0:e.CreatedAt})},{title:o().createElement(U.Z,{type:null==e?void 0:e.Status.toLowerCase()})}]}}))},te=function(e){var t,n,a,l,r=e.imageData,u=e.openUpdateWizard,c=null==r||null===(t=r.data)||void 0===t||null===(n=t.ImageSet)||void 0===n?void 0:n.ID,s=null==r||null===(a=r.data)||void 0===a||null===(l=a.ImageSet)||void 0===l?void 0:l.Version,d=(0,Q.Z)({api:function(e){var t=e.query;return(0,q.dj)({imageSetID:c,query:t})},tableReload:!0}),m=(0,i.Z)(d,2),v=m[0],g=m[1],f=v.data,h=v.isLoading,E=v.hasError;return o().createElement(J.Z,{className:"add-100vh"},o().createElement(G.Z,{apiFilterSort:!0,isUseApi:!0,filters:Y,loadTableData:g,tableData:{count:null==f?void 0:f.count,data:null==f?void 0:f.data,isLoading:h,hasError:E},columnNames:X,rows:ee(null==f?void 0:f.data,c,s),actionResolver:function(e){var t,n,a,i,l,r,c,s=[];return null!==(t=e.rowInfo)&&void 0!==t&&t.isoURL&&s.push({title:o().createElement(p.x,{className:"force-text-black remove-underline",component:"a",href:e.rowInfo.isoURL,rel:"noopener noreferrer",target:"_blank"},"Download")}),("SUCCESS"===(null===(n=e.rowInfo)||void 0===n?void 0:n.imageStatus)||"ERROR"===(null===(a=e.rowInfo)||void 0===a?void 0:a.imageStatus))&&s.push({title:"Update Image",onClick:function(e,t,n){u(n.rowInfo.id)},isDisabled:(null==e||null===(r=e.rowInfo)||void 0===r?void 0:r.latestImageVersion)!==(null==e||null===(c=e.rowInfo)||void 0===c?void 0:c.currentImageVersion)}),"BUILDING"===(null===(i=e.rowInfo)||void 0===i?void 0:i.imageStatus)&&null!==(l=e.rowInfo)&&void 0!==l&&l.id&&s.push({title:""}),s},areActionsDisabled:function(e){var t;return"BUILDING"===(null===(t=e.rowInfo)||void 0===t?void 0:t.imageStatus)},defaultSort:{index:3,direction:"desc"}}))};te.propTypes={imageData:g().object,urlParam:g().string,imageSetID:g().number,createRows:g().func,openUpdateWizard:g().func};const ne=te;var ae=n(47173),ie=n(15265),le=n(3035),oe=[{label:"Name",type:"text"}],re=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,K.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,K.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,K.cellWidth)(35)]}],ue=function(e){var t=e.distribution,n=e.installedPackages,a=e.addedPackages;return(0===e.showAll?n.filter((function(e){return(null==a?void 0:a.filter((function(t){return e.name===t.Name})).length)>0})):n).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:o().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---".concat(t,"/x86_64/7416/").concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},o().createElement(ae.zx,{variant:"link",isSmall:!0,icon:o().createElement(ie.ZP,null),iconPosition:"right"},"More information"))}]}}))},ce={0:"additional",1:"all"},se={additional:0,all:1},de=function(e){var t,n,a,r,u,c,s,d,v,g=e.imageVersion,p=(0,m.useLocation)(),f=(0,m.useHistory)(),h=p.pathname.split("/"),E=7===h.length?se[h[6]]:1,b=null==g||null===(t=g.image)||void 0===t||null===(n=t.Distribution)||void 0===n?void 0:n.split("-")[1].slice(0,-1),I=(0,l.useState)({}),y=(0,i.Z)(I,2),S=y[0],D=y[1],k=(0,l.useState)(E),w=(0,i.Z)(k,2),O=w[0],T=w[1];return(0,l.useEffect)((function(){D(g)}),[g]),(0,l.useEffect)((function(){h[5]!==ce[O]&&T(E)}),[h]),"SUCCESS"===(null==g||null===(a=g.image)||void 0===a||null===(r=a.Commit)||void 0===r?void 0:r.Status)?o().createElement(J.Z,{className:"add-100vh"},o().createElement(G.Z,{apiFilterSort:!1,filters:oe,tableData:{count:0===O?null==S?void 0:S.additional_packages:null==S?void 0:S.packages,isLoading:!1,hasError:!1},columnNames:re,rows:null!=S&&null!==(u=S.image)&&void 0!==u&&null!==(c=u.Commit)&&void 0!==c&&c.InstalledPackages?ue({distribution:b,installedPackages:null==S||null===(s=S.image)||void 0===s||null===(d=s.Commit)||void 0===d?void 0:d.InstalledPackages,addedPackages:null==S||null===(v=S.image)||void 0===v?void 0:v.Packages,showAll:O}):[],actionResolver:function(){return[]},areActionsDisabled:function(){return!0},defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t,n=null===(t=h[5])||void 0===t?void 0:t.toLowerCase();T(e),"packages"===n&&(7===h.length?h[6]=ce[e]:h.push(ce[e]),f.push(h.join("/")))},toggleState:O,emptyFilterState:{icon:"search",title:"No packages to display"}})):o().createElement(J.Z,{className:"add-100vh"},o().createElement(le.Z,{bgColor:"white",title:"Package data currently unavailable",body:"Packages will be displayed as soon as the image is finished being built.",primaryAction:null,secondaryActions:[]}))};de.propTypes={imageVersion:g().object};const me=de;var ve={details:0,packages:1,versions:1},ge=function(e){var t=e.imageData,n=e.openUpdateWizard,a=e.imageVersion,r=e.isLoading,u=(0,m.useLocation)(),c=(0,m.useHistory)(),s=(0,l.useState)(ve.details),d=(0,i.Z)(s,2),v=d[0],g=d[1],p=a?"imageTab":"imageSetTab",f=(0,$.Ff)(u.pathname,["baseURL","imageSetVersion","imageSetTab","imageVersion","imageTab","packagesToggle"]);return(0,l.useEffect)((function(){f.imageTab?g(ve[f.imageTab]):g(ve[f.imageSetTab])}),[u.pathname]),o().createElement(o().Fragment,null,!t.isLoading&&t.hasError?o().createElement(le.Z,{icon:"question",title:"Image not found",body:"Please check you have the correct link with the correct image Id.",primaryAction:{text:"Back to Manage Images",href:C._["manage-images"]},secondaryActions:[]}):o().createElement("div",{className:"edge-c-device--detail add-100vh"},o().createElement(j.m,{className:"pf-u-ml-md",activeKey:v,onSelect:function(e,t){var n=0===t?"details":a?"packages":"versions";f[p]=n,c.push(f.buildUrl()),g(t)}},o().createElement(V.O,{eventKey:ve.details,title:o().createElement(A.T,null,"Details")},o().createElement(z,{imageData:t,imageVersion:a})),r?o().createElement(V.O,{title:o().createElement(A.T,null,o().createElement(b.O,{width:"75px"}))}):a?o().createElement(V.O,{eventKey:ve.packages,title:o().createElement(A.T,null,"Packages")},o().createElement(me,{imageVersion:a})):o().createElement(V.O,{eventKey:ve.versions,title:o().createElement(A.T,null,"Versions")},o().createElement(ne,{imageData:t,openUpdateWizard:n})))))};ge.propTypes={imageData:g().object,imageVersion:g().object,openUpdateWizard:g().func,isLoading:g().bool};const pe=ge;var fe=n(53010);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const be=function(){var e=(0,m.useParams)(),t=e.imageId,n=e.imageVersionId,a=(0,m.useHistory)(),v=(0,l.useState)({isOpen:!1,updateId:null}),g=(0,i.Z)(v,2),p=g[0],f=g[1],h=(0,l.useState)(null),E=(0,i.Z)(h,2),b=E[0],I=E[1],y=(0,Q.Z)({api:q.L0,id:n?"".concat(t,"/versions/").concat(n):"".concat(t),tableReload:!0}),S=(0,i.Z)(y,2),D=S[0],k=S[1],w=D.data,O=D.isLoading,T=function(e){a.push({pathname:a.location.pathname,search:new URLSearchParams({update_image:!0}).toString()}),f((function(t){return Ee(Ee({},t),{},{isOpen:!t.isLoading,updateId:e})}))};return(0,l.useEffect)((function(){I(n?null==w?void 0:w.ImageDetails:null)}),[D,n]),(0,l.useEffect)((function(){k()}),[t,n]),o().createElement(l.Fragment,null,o().createElement(r.Z,{className:"pf-m-light"},o().createElement(u.K,{hasGutter:!0},o().createElement(c.v,null,o().createElement(x,{imageData:D,imageVersion:b,openUpdateWizard:T})))),o().createElement(pe,{imageData:D,urlParam:t,imageVersion:b,openUpdateWizard:T,isLoading:O}),p.isOpen&&o().createElement(l.Suspense,{fallback:o().createElement(d.b,null,o().createElement(s.$,null))},o().createElement(fe.default,{navigateBack:function(){a.push({pathname:a.location.pathname}),f((function(e){return Ee(Ee({},e),{},{isOpen:!1})}))},updateImageID:p.updateId})))}},69199:(e,t,n)=>{var a=n(89881),i=n(98612);e.exports=function(e,t){var n=-1,l=i(e)?Array(e.length):[];return a(e,(function(e,a,i){l[++n]=t(e,a,i)})),l}},94654:(e,t,n)=>{var a=n(21078),i=n(35161);e.exports=function(e,t){return a(i(e,t),1)}},24350:(e,t,n)=>{var a=n(89465),i=n(55189)((function(e,t,n){a(e,n,t)}));e.exports=i},35161:(e,t,n)=>{var a=n(29932),i=n(67206),l=n(69199),o=n(1469);e.exports=function(e,t){return(o(e)?a:l)(e,i(t,3))}}}]);
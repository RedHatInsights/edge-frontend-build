/*! For license information please see ImageDetail.4bd5f34cef90521acd6c.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[704],{64124:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={REQUIRED:"required",MIN_LENGTH:"min-length",MAX_LENGTH:"max-length",EXACT_LENGTH:"exact-length",MIN_ITEMS:"min-items",MIN_NUMBER_VALUE:"min-number-value",MAX_NUMBER_VALUE:"max-number-value",PATTERN:"pattern",URL:"url"}},64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var a=n(70655),r=n(92950),i=n(44303),o=n(38296),l=n(62472);const c=e=>{var{children:t=null,className:n="","aria-label":u="Breadcrumb",ouiaId:s,ouiaSafe:d=!0}=e,m=(0,a.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=(0,l.S$)(c.displayName,s,d);return r.createElement("nav",Object.assign({},m,{"aria-label":u,className:(0,o.i)(i.Z.breadcrumb,n)},p),r.createElement("ol",{className:i.Z.breadcrumbList},r.Children.map(t,((e,t)=>{const n=t>0;return r.isValidElement(e)?r.cloneElement(e,{showDivider:n}):e}))))};c.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>c});var a=n(70655),r=n(92950),i=n(93174),o=n(44303),l=n(38296);const c=e=>{var{children:t=null,className:n="",to:c,isActive:u=!1,isDropdown:s=!1,showDivider:d,target:m,component:p="a",render:v}=e,g=(0,a.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const f=p,b=u?"page":void 0,h=(0,l.i)(o.Z.breadcrumbLink,u&&o.Z.modifiers.current);return r.createElement("li",Object.assign({},g,{className:(0,l.i)(o.Z.breadcrumbItem,n)}),d&&r.createElement("span",{className:o.Z.breadcrumbItemDivider},r.createElement(i.ZP,null)),"button"===p&&r.createElement("button",{className:h,"aria-current":b,type:"button"},t),s&&r.createElement("span",{className:(0,l.i)(o.Z.breadcrumbDropdown)},t),v&&v({className:h,ariaCurrent:b}),c&&!v&&r.createElement(f,{href:c,target:m,className:h,"aria-current":b},t),!c&&"button"!==p&&!s&&t)};c.displayName="BreadcrumbItem"},76889:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>o,_t:()=>r,k1:()=>i});var a=n(40400);const r={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},i=(0,a.IU)(r),o=i},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(58392);const a={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(85893),r=n(92950),i=n.n(r),o=n(48335),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},c=36e5,u=24*c,s=30*u,d=365*u,m=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},p=[{rightBound:1/0,description:function(e){return m(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return m(Math.round(e/s),"month")}},{rightBound:s,description:function(e){return m(Math.round(e/u),"day")}},{rightBound:u,description:function(e){return m(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return m(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],v=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return v(e)+" UTC"},onlyDate:function(e){return v(e).slice(0,-6)},relative:function(e){return p.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),v(e))},invalid:function(){return"Invalid date"}}[e]},f=function(e,t,n){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(r){return function(e,t,n,r){return void 0===r&&(r=""),(0,a.jsx)(o.Tooltip,l({},n,{content:(0,a.jsxs)("div",{children:[r,e]})},{children:t}))}(g("exact")(r),(0,a.jsx)("span",{children:g(e)(r)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,n=e.type,r=void 0===n?"relative":n,o=e.extraTitle,l=e.tooltipProps,c=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===c.toString()?"invalid":r;return(0,a.jsx)(i().Fragment,{children:f(u,l,o)(c)})}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(85893),r=n(94184),i=n.n(r),o=n(92950);const l=n.n(o)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)};const u=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","children"]),o=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,a.jsx)(l.Consumer,{children:function(e){var t,l;void 0===e&&(e="light");var u=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((l={})["pf-m-light"]="light"===e,l));return(0,a.jsx)("section",c({},r,{className:"".concat(o," ").concat(u),"widget-type":"InsightsPageHeader"},{children:n}))}})}},53010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var a=n(93433),r=n(4942),i=n(15861),o=n(29439),l=n(64687),c=n.n(l),u=n(92950),s=n.n(u),d=n(61094),m=n(96354),p=n(25563),v=n(52643),g=n(29390),f=n(37619),b=n(45697),h=n.n(b),E=n(20873),y=n(77760),I=n(93597),S=n(48903),D=n(32349),O=n(98309),w=n(96094);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t,n,r,l,b,h,k,T,P,N,C,_,j,Z,L,U,A,V=e.navigateBack,R=e.updateImageID,B=e.reload,M=e.notificationProp,F=e.locationProp,W=(0,u.useState)(),z=(0,o.Z)(W,2),G=z[0],Q=z[1],q=(0,y.useDispatch)(),H=function(){V(),B&&B()};(0,u.useEffect)((function(){(0,i.Z)(c().mark((function e(){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a||a.getUser().then((function(e){return Q(null!=e?e:{})}));case 1:case"end":return e.stop()}}),e)})))()}),[]);var K=(0,w.Z)({api:I.Kz,id:R}),$=(0,o.Z)(K,1)[0],J=$.data,X=$.isLoading,Y=(0,S.gV)("fleet-management.temporary-releases"),ee=(0,S.gV)("edge-management.image_wizard_ui"),te={onSuccess:{title:"Success",description:"Successfully started image update"},onError:{title:"Error",description:"Failed to create image"}};return G&&J&&!X?s().createElement(d.Z,{onClose:H,customComponentMapper:{review:E.Z},onSubmit:function(e){var t,n,a,r,i,o=e.values;(0,e.setIsSaving)((function(){return!0}));var l=x(x({},o),{},{Id:null==J||null===(t=J.image)||void 0===t?void 0:t.ID,name:null==J||null===(n=J.image)||void 0===n?void 0:n.Name,version:(null==J||null===(a=J.image)||void 0===a?void 0:a.Version)+1,architecture:"x86_64",credentials:o.credentials?o.credentials:null==J||null===(r=J.image)||void 0===r?void 0:r.Installer.SshKey,username:o.username?o.username:null==J||null===(i=J.image)||void 0===i?void 0:i.Installer.Username});(0,D.Z)(q,(function(){return(0,I.Bi)(l)}),te,M),H()},defaultArch:"x86_64",initialValues:{imageID:null==J?void 0:J.image.ID,name:null==J||null===(t=J.image)||void 0===t?void 0:t.Name,isUpdate:!0,description:null==J||null===(n=J.image)||void 0===n?void 0:n.Description,credentials:null==J||null===(r=J.image)||void 0===r?void 0:r.Installer.SshKey,username:null==J||null===(l=J.image)||void 0===l?void 0:l.Installer.Username,version:null==J||null===(b=J.image)||void 0===b?void 0:b.Version,release:null==J||null===(h=J.image)||void 0===h?void 0:h.Distribution,release_options:Y?(0,S.pS)(null==J||null===(k=J.image)||void 0===k?void 0:k.Distribution,[].concat((0,a.Z)(O.vk),(0,a.Z)(O.R8))):(0,S.pS)(null==J||null===(T=J.image)||void 0===T?void 0:T.Distribution),imageType:["rhel-edge-commit"],"selected-packages":null==J||null===(P=J.image)||void 0===P||null===(N=P.Packages)||void 0===N?void 0:N.map((function(e){return x(x({},e),{},{name:e.Name})})),"third-party-repositories":null==J||null===(C=J.image)||void 0===C||null===(_=C.ThirdPartyRepositories)||void 0===_?void 0:_.map((function(e){return x({id:e.ID,name:e.Name},e)})),"initial-custom-repositories":null==J||null===(j=J.image)||void 0===j||null===(Z=j.ThirdPartyRepositories)||void 0===Z?void 0:Z.map((function(e){return x({id:e.ID,name:e.Name},e)})),"custom-packages":null==J||null===(L=J.image)||void 0===L||null===(U=L.CustomPackages)||void 0===U?void 0:U.map((function(e){return x(x({},e),{},{name:e.Name})}))},test:"",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Update image"},showTitles:!0,title:"Update image: ".concat(null==J||null===(A=J.image)||void 0===A?void 0:A.Name),crossroads:["target-environment","release","imageType","third-party-repositories"],fields:[p.bR,p.Ud,p.l9,(0,p.jS)(ee,F),p.B9,p.$B,p.j7,p.Sp]}]}}):s().createElement(g.Y,null,s().createElement(v.b,null,s().createElement(f.$,{isSVG:!0,diameter:"100px"})))};T.propTypes={navigateBack:h().func,updateImageID:h().number,reload:h().func,notificationProp:h().object,locationProp:h().object},T.defaultProps={navigateBack:function(){}};const P=T},12877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ie});var a=n(15861),r=n(4942),i=n(29439),o=n(64687),l=n.n(o),c=n(92950),u=n.n(c),s=n(89376),d=n(49739),m=n(83826),p=n(37619),v=n(52643),g=n(96620),f=n(45697),b=n.n(f),h=n(68340),E=n(25834),y=n(78140),I=n(68774),S=n(50383),D=n(64029),O=n(32835),w=n(79851),k=n(34512),x=n(56787),T=n(84457),P=n(75728),N=n(99355),C=n(75824),_=n(35681),j=n(9192),Z=n(5964),L=n(62410),U=function(e,t,n,a){var r,i=t||(null==e?void 0:e.LastImageDetails),o=[];return(null==i||null===(r=i.image)||void 0===r?void 0:r.ID)&&o.push(u().createElement(T.h,{key:"create-new-version-button",component:"button",onClick:function(){var e;return a(null==i||null===(e=i.image)||void 0===e?void 0:e.ID)}},"Create new version")),n&&o.push(u().createElement(T.h,{key:"download-button",component:"button"},u().createElement(h.x,{className:"force-text-black remove-underline",component:"a",href:n,rel:"noopener noreferrer",target:"_blank"},"Download installable .iso for newest image"))),o},A=function(e){var t,n,a,r,o,l,s,d,m,p,v,f,b,h,T,A,V,R,B,M=e.imageData,F=e.imageVersion,W=e.openUpdateWizard,z=(0,c.useState)(!1),G=(0,i.Z)(z,2),Q=G[0],q=G[1],H=(0,c.useState)({}),K=(0,i.Z)(H,2),$=K[0],J=K[1];(0,c.useEffect)((function(){J(null==M?void 0:M.data)}),[M]);var X="Actions for image set details view",Y="image-set-details-dropdown";return u().createElement(u().Fragment,null,!M.isLoading&&M.hasError?u().createElement(D.a,null,u().createElement(O.g,null,u().createElement(g.Link,{to:j._.manageImages},"Back to Manage Images"))):u().createElement(u().Fragment,null,u().createElement(D.a,null,u().createElement(O.g,null,u().createElement(g.Link,{to:j._.manageImages},"Manage Images")),F?u().createElement(O.g,null,u().createElement(g.Link,{to:"".concat(j._.manageImages,"/").concat(null==$||null===(t=$.ImageSet)||void 0===t?void 0:t.ID)},null==$||null===(n=$.ImageSet)||void 0===n?void 0:n.Name)):u().createElement(O.g,{isActive:!0},(null==$||null===(a=$.ImageSet)||void 0===a?void 0:a.Name)||u().createElement(S.O,{width:"100px"})),F&&u().createElement(O.g,{isActive:!0},null==F||null===(r=F.image)||void 0===r?void 0:r.Version)),u().createElement(I.D,null,u().createElement(w.P,null,u().createElement(k.J,null,u().createElement(E.G,{component:"dl"},u().createElement(y.T,{component:"h1",className:"grid-align-center pf-u-mb-0"},(null==$||null===(o=$.ImageSet)||void 0===o?void 0:o.Name)||u().createElement(S.O,{width:"150px"})),u().createElement(y.T,{className:"pf-u-pt-sm",component:"dd"},null!=F&&null!==(l=F.image)&&void 0!==l&&l.Status||null!=$&&null!==(s=$.LastImageDetails)&&void 0!==s&&null!==(d=s.image)&&void 0!==d&&d.Status?u().createElement(_.Z,{type:F?null==F||null===(m=F.image)||void 0===m?void 0:m.Status.toLowerCase():null==$||null===(p=$.LastImageDetails)||void 0===p||null===(v=p.image)||void 0===v?void 0:v.Status.toLowerCase()}):u().createElement(S.O,{width:"100px"})),null!=F&&null!==(f=F.image)&&void 0!==f&&f.UpdatedAt||null!=$&&null!==(b=$.LastImageDetails)&&void 0!==b&&null!==(h=b.image)&&void 0!==h&&h.UpdatedAt?u().createElement(y.T,{component:"p"},"Last updated ",u().createElement(L.Z,{date:F?null==F||null===(T=F.image)||void 0===T?void 0:T.UpdatedAt:null==$||null===(A=$.LastImageDetails)||void 0===A||null===(V=A.image)||void 0===V?void 0:V.UpdatedAt})):u().createElement(S.O,{width:"200px"}))),u().createElement(k.J,{isFilled:!0}),u().createElement(k.J,null,u().createElement(x.L,{position:N.ir.right,toggle:u().createElement(P.Z,{id:Y,toggleIndicator:Z.ZP,onToggle:function(e){return q(e)},isDisabled:"BUILDING"===(F?null==F||null===(R=F.image)||void 0===R?void 0:R.Status:null==$||null===(B=$.LastImageDetails)||void 0===B?void 0:B.image.Status)||!1,"aria-label":X},u().createElement(C.u,{content:X,reference:function(){return document.getElementById(Y)}}),"Actions"),isOpen:Q,dropdownItems:U($,F,null==$?void 0:$.ImageBuildIsoURL,W)}))))))};A.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func};const V=A;var R=n(35262),B=n(28883),M=n(29873),F=n(93433),W=n(50693),z=n(16475),G=n(66435),Q=n(98309),q=function(e){var t,n,a,r,o=e.imageData,l=e.imageVersion,s=(0,c.useState)({}),d=(0,i.Z)(s,2),m=d[0],p=d[1];(0,c.useEffect)((function(){var e;p(l||(null==o||null===(e=o.data)||void 0===e?void 0:e.LastImageDetails))}),[o,l]);var v=function(e){return(0,F.Z)(Array(2*e)).map((function(e,t){return u().createElement(S.O,{width:"180px",key:t})}))},f={Version:"Version",Created:function(){return u().createElement(L.Z,{date:null==m||null===(e=m.image)||void 0===e?void 0:e.CreatedAt});var e},"Type(s)":function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.OutputTypes)||void 0===t?void 0:t.map((function(e,t){return u().createElement("div",{key:t},e)}))},Release:function(){var e;return null===Q.aN||void 0===Q.aN?void 0:Q.aN[null==m||null===(e=m.image)||void 0===e?void 0:e.Distribution]},Description:"Description"},b={Username:function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Username},"SSH key":function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.SshKey}},D={"Total additional packages":function(){var e,t;return u().createElement(g.Link,{to:"".concat(j._.manageImages,"/").concat(null==m||null===(e=m.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==m||null===(t=m.image)||void 0===t?void 0:t.ID,"/packages/additional")},null==m?void 0:m.additional_packages)},"Total packages":function(){var e,t;return u().createElement(g.Link,{to:"".concat(j._.manageImages,"/").concat(null==m||null===(e=m.image)||void 0===e?void 0:e.ImageSetID,"/versions/").concat(null==m||null===(t=m.image)||void 0===t?void 0:t.ID,"/packages/all")},null==m?void 0:m.packages)}},O={Added:function(){return null==m?void 0:m.update_added},Removed:function(){return null==m?void 0:m.update_removed},Updated:function(){return null==m?void 0:m.update_updated}};null!=m&&null!==(t=m.image)&&void 0!==t&&null!==(n=t.Installer)&&void 0!==n&&n.Checksum&&(f["SHA-256 checksum"]=function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Installer)||void 0===t?void 0:t.Checksum}),null!=m&&null!==(a=m.image)&&void 0!==a&&null!==(r=a.Commit)&&void 0!==r&&r.OSTreeCommit&&(f["Ostree commit hash"]=function(){var e,t;return null==m||null===(e=m.image)||void 0===e||null===(t=e.Commit)||void 0===t?void 0:t.OSTreeCommit});var w=function(e){return m?Object.entries(e).map((function(e,t){var n,a,r=(0,i.Z)(e,2),o=r[0],l=r[1];return u().createElement(c.Fragment,{key:t},u().createElement(y.T,{className:"details-label",component:y.v.dt},o),"SHA-256 checksum"===o||"Ostree commit hash"===o||"SSH key"===o&&l()?u().createElement(y.T,{component:y.v.dd},u().createElement(G.M5,{hoverTip:"Copy",clickTip:"Copied",variant:"expansion",className:"pf-u-text-break-word",id:"".concat(o.replace(/\s+/g,"-").toLowerCase(),"-clipboard-copy")},"function"==typeof l?l()||"Unavailable":(null==m||null===(n=m.image)||void 0===n?void 0:n[l])||"Unavailable")):u().createElement(y.T,{className:"pf-u-text-break-word",component:y.v.dd},"function"==typeof l?0===l()?0:l()||"Unavailable":(null==m||null===(a=m.image)||void 0===a?void 0:a[l])||"Unavailable"))})):null};return u().createElement(I.D,{className:"pf-u-ml-lg pf-u-mt-md"},u().createElement(W.r,{span:12},u().createElement(z.P,{span:5},u().createElement(h.x,{component:h.q.h2},l?"Details":"Most recent image"),u().createElement(E.G,{component:E.F.dl},w(f)||v(6)),u().createElement(h.x,{component:h.q.h2},"User information "),u().createElement(E.G,{component:E.F.dl},w(b)||v(2))),u().createElement(z.P,{span:1}),u().createElement(z.P,{span:6},u().createElement(h.x,{component:h.q.h2},"Packages "),u().createElement(E.G,{component:E.F.dl},w(D)||v(3)),u().createElement(h.x,{component:h.q.h2},"Changes from previous version"),u().createElement(E.G,{component:E.F.dl},w(O)||v(3)))))};q.propTypes={imageData:b().object,imageVersion:b().object};const H=q;var K=n(73448),$=n(93597),J=n(34766),X=n(48903),Y=n(96094),ee=[{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],te=[{title:"Version",type:"version",sort:!0,columnTransforms:[(0,J.cellWidth)(15)]},{title:"Output",type:"image_type",sort:!1,columnTransforms:[(0,J.cellWidth)(25)]},{title:"Ostree commit hash",type:"ostree_commit_hash",sort:!1,columnTransforms:[(0,J.cellWidth)(20)]},{title:"Created",type:"created_at",sort:!0,columnTransforms:[(0,J.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,J.cellWidth)(35)]}],ne=function(e,t,n){return null==e?void 0:e.map((function(e){return{rowInfo:{id:null==e?void 0:e.ID,imageStatus:null==e?void 0:e.Status,isoURL:null==e?void 0:e.ImageBuildIsoURL,latestImageVersion:n,currentImageVersion:e.Version},noApiSortFilter:[null==e?void 0:e.Version,Q.bd[null==e?void 0:e.ImageType],null==e?void 0:e.CreatedAt,null==e?void 0:e.Status],cells:[{title:u().createElement(g.Link,{to:"".concat(j._.manageImages,"/").concat(t,"/versions/").concat(e.ID,"/details")},null==e?void 0:e.Version)},{title:Q.bd[null==e?void 0:e.ImageType]},{title:null!=e&&e.CommitCheckSum?u().createElement(C.u,{content:u().createElement("div",null,e.CommitCheckSum)},u().createElement("span",null,(0,X.aS)(e.CommitCheckSum,5,5))):u().createElement(h.x,null,"Unavailable")},{title:u().createElement(L.Z,{date:null==e?void 0:e.CreatedAt})},{title:u().createElement(_.Z,{type:null==e?void 0:e.Status.toLowerCase()})}]}}))},ae=function(e){var t,n,a,r,o=e.imageData,l=e.openUpdateWizard,c=null==o||null===(t=o.data)||void 0===t||null===(n=t.ImageSet)||void 0===n?void 0:n.ID,s=null==o||null===(a=o.data)||void 0===a||null===(r=a.ImageSet)||void 0===r?void 0:r.Version,d=(0,Y.Z)({api:function(e){var t=e.query;return(0,$.dj)({imageSetID:c,query:t})},tableReload:!0}),m=(0,i.Z)(d,2),p=m[0],v=m[1],g=p.data,f=p.isLoading,b=p.hasError;return u().createElement("section",{className:"add-100vh pf-l-page__main-section pf-c-page__main-section"},u().createElement(K.Z,{apiFilterSort:!0,isUseApi:!0,filters:ee,loadTableData:v,tableData:{count:null==g?void 0:g.count,data:null==g?void 0:g.data,isLoading:f,hasError:b},columnNames:te,rows:ne(null==g?void 0:g.data,c,s),actionResolver:function(e){var t,n,a,r,i,o,c,u=[];return null!==(t=e.rowInfo)&&void 0!==t&&t.isoURL&&u.push({title:"Download",onClick:function(e,t,n){window.open(n.rowInfo.isoURL)}}),("SUCCESS"===(null===(n=e.rowInfo)||void 0===n?void 0:n.imageStatus)||"ERROR"===(null===(a=e.rowInfo)||void 0===a?void 0:a.imageStatus))&&u.push({title:"Update Image",onClick:function(e,t,n){l(n.rowInfo.id)},isDisabled:(null==e||null===(o=e.rowInfo)||void 0===o?void 0:o.latestImageVersion)!==(null==e||null===(c=e.rowInfo)||void 0===c?void 0:c.currentImageVersion)}),"BUILDING"===(null===(r=e.rowInfo)||void 0===r?void 0:r.imageStatus)&&null!==(i=e.rowInfo)&&void 0!==i&&i.id&&u.push({title:""}),u},areActionsDisabled:function(e){var t;return"BUILDING"===(null===(t=e.rowInfo)||void 0===t?void 0:t.imageStatus)},defaultSort:{index:3,direction:"desc"}}))};ae.propTypes={imageData:b().object,urlParam:b().string,imageSetID:b().number,createRows:b().func,openUpdateWizard:b().func};const re=ae;var ie=n(47173),oe=n(15265),le=n(3035),ce=[{label:"Name",type:"text"}],ue=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,J.cellWidth)(35)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,J.cellWidth)(25)]},{title:"Release",type:"release",sort:!1,columnTransforms:[(0,J.cellWidth)(35)]}],se=function(e){var t=e.distribution,n=e.installedPackages,a=e.addedPackages;return(0===e.showAll?n.filter((function(e){return(null==a?void 0:a.filter((function(t){return e.name===t.Name})).length)>0})):n).map((function(e){return{noApiSortFilter:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release],cells:[null==e?void 0:e.name,null==e?void 0:e.version,null==e?void 0:e.release,{title:u().createElement("a",{href:"https://access.redhat.com/downloads/content/rhel---".concat(t,"/x86_64/7416/").concat(null==e?void 0:e.name,"/").concat(null==e?void 0:e.version,"-").concat(null==e?void 0:e.release,"/").concat(null==e?void 0:e.arch,"/fd431d51/package"),target:"_blank",rel:"noopener noreferrer"},u().createElement(ie.zx,{variant:"link",isSmall:!0,icon:u().createElement(oe.ZP,null),iconPosition:"right"},"More information"))}]}}))},de={0:"additional",1:"all"},me={additional:0,all:1},pe=function(e){var t,n,a,r,o,l,s,d,m,p=e.imageVersion,v=(0,g.useHistory)(),f=(0,g.useLocation)().pathname.split("/"),b=7===f.length?me[f[6]]:1,h=null==p||null===(t=p.image)||void 0===t||null===(n=t.Distribution)||void 0===n?void 0:n.split("-")[1].slice(0,-1),E=(0,c.useState)({}),y=(0,i.Z)(E,2),I=y[0],S=y[1],D=(0,c.useState)(b),O=(0,i.Z)(D,2),w=O[0],k=O[1];return(0,c.useEffect)((function(){S(p)}),[p]),(0,c.useEffect)((function(){f[5]!==de[w]&&k(b)}),[f]),"SUCCESS"===(null==p||null===(a=p.image)||void 0===a||null===(r=a.Commit)||void 0===r?void 0:r.Status)?u().createElement("section",{className:"add-100vh pf-l-page__main-section pf-c-page__main-section"},u().createElement(K.Z,{apiFilterSort:!1,filters:ce,tableData:{count:0===w?null==I?void 0:I.additional_packages:null==I?void 0:I.packages,isLoading:!1,hasError:!1},columnNames:ue,rows:null!=I&&null!==(o=I.image)&&void 0!==o&&null!==(l=o.Commit)&&void 0!==l&&l.InstalledPackages?se({distribution:h,installedPackages:null==I||null===(s=I.image)||void 0===s||null===(d=s.Commit)||void 0===d?void 0:d.InstalledPackages,addedPackages:null==I||null===(m=I.image)||void 0===m?void 0:m.Packages,showAll:w}):[],actionResolver:function(){return[]},areActionsDisabled:function(){return!0},defaultSort:{index:0,direction:"asc"},toggleButton:[{title:"Additional",key:0},{title:"All",key:1}],toggleAction:function(e){var t,n=null===(t=f[5])||void 0===t?void 0:t.toLowerCase();k(e),"packages"===n&&(7===f.length?f[6]=de[e]:f.push(de[e]),v.push(f.join("/")))},toggleState:w,emptyFilterState:{icon:"search",title:"No packages to display"}})):u().createElement("section",{className:"add-100vh pf-l-page__main-section pf-c-page__main-section"},u().createElement(le.Z,{bgColor:"white",title:"Package data currently unavailable",body:"Packages will be displayed as soon as the image is finished being built.",primaryAction:null,secondaryActions:[]}))};pe.propTypes={imageVersion:b().object};const ve=pe;var ge={details:0,packages:1,versions:1},fe=function(e){var t=e.imageData,n=e.openUpdateWizard,a=e.imageVersion,r=e.isLoading,o=(0,g.useHistory)(),l=(0,g.useLocation)().pathname,s=(0,c.useState)(ge.details),d=(0,i.Z)(s,2),m=d[0],p=d[1],v=a?"imageTab":"imageSetTab",f=(0,X.Ff)(l,["baseURL","imageSetVersion","imageSetTab","imageVersion","imageTab","packagesToggle"]);return(0,c.useEffect)((function(){f.imageTab?p(ge[f.imageTab]):p(ge[f.imageSetTab])}),[l]),u().createElement(u().Fragment,null,!t.isLoading&&t.hasError?u().createElement(le.Z,{icon:"question",title:"Image not found",body:"Please check you have the correct link with the correct image Id.",primaryAction:{text:"Back to Manage Images",href:j._.manageImages},secondaryActions:[]}):u().createElement("div",{className:"edge-c-device--detail add-100vh"},u().createElement(R.m,{className:"pf-u-ml-md",activeKey:m,onSelect:function(e,t){var n=0===t?"details":a?"packages":"versions";f[v]=n,o.push(f.buildUrl()),p(t)}},u().createElement(B.O,{eventKey:ge.details,title:u().createElement(M.T,null,"Details")},u().createElement(H,{imageData:t,imageVersion:a})),r?u().createElement(B.O,{title:u().createElement(M.T,null,u().createElement(S.O,{width:"75px"}))}):a?u().createElement(B.O,{eventKey:ge.packages,title:u().createElement(M.T,null,"Packages")},u().createElement(ve,{imageVersion:a})):u().createElement(B.O,{eventKey:ge.versions,title:u().createElement(M.T,null,"Versions")},u().createElement(re,{imageData:t,openUpdateWizard:n})))))};fe.propTypes={imageData:b().object,imageVersion:b().object,openUpdateWizard:b().func,isLoading:b().bool};const be=fe;var he=n(53010);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ie=function(){var e=(0,g.useParams)(),t=e.imageId,n=e.imageVersionId,r=(0,g.useHistory)(),o=(0,g.useLocation)().pathname,f=(0,c.useState)({isOpen:!1,updateId:null}),b=(0,i.Z)(f,2),h=b[0],E=b[1],y=(0,c.useState)(null),I=(0,i.Z)(y,2),S=I[0],D=I[1],O=(0,Y.Z)({api:$.L0,id:n?"".concat(t,"/versions/").concat(n):"".concat(t),tableReload:!0}),w=(0,i.Z)(O,2),k=w[0],x=w[1],T=k.data,P=k.isLoading,N=function(e){r.push({pathname:o,search:new URLSearchParams({update_image:!0}).toString()}),E((function(t){return ye(ye({},t),{},{isOpen:!t.isLoading,updateId:e})}))};(0,c.useEffect)((function(){D(n?null==T?void 0:T.ImageDetails:null)}),[k,n]),(0,c.useEffect)((function(){x()}),[t,n]);var C=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u().createElement(c.Fragment,null,u().createElement(s.Z,{className:"pf-m-light"},u().createElement(d.K,{hasGutter:!0},u().createElement(m.v,null,u().createElement(V,{imageData:k,imageVersion:S,openUpdateWizard:N})))),u().createElement(be,{imageData:k,urlParam:t,imageVersion:S,openUpdateWizard:N,isLoading:P}),h.isOpen&&u().createElement(c.Suspense,{fallback:u().createElement(v.b,null,u().createElement(p.$,null))},u().createElement(he.default,{navigateBack:function(){r.push({pathname:o}),E((function(e){return ye(ye({},e),{},{isOpen:!1})}))},updateImageID:h.updateId,reload:C})))}},93597:(e,t,n)=>{"use strict";n.d(t,{$c:()=>E,Bi:()=>s,Dk:()=>f,EC:()=>g,EV:()=>b,H1:()=>u,Kz:()=>h,L0:()=>p,QY:()=>v,Sj:()=>y,dj:()=>m,dt:()=>d});var a=n(15861),r=n(29439),i=n(64687),o=n.n(i),l=n(66702),c=n(93454),u=function(e){var t={name:e};return c.instance.post("".concat(l.Ds,"/images/checkImageName"),t)},s=function(e){var t=e.Id,n=e.name,a=e.version,i=e.description,o=e.release,u=e.architecture,s=e.username,d=e.credentials,m=e.imageType,p=e["selected-packages"],v=e["third-party-repositories"],g=e["custom-packages"],f=m||[],b=(0,r.Z)(f,1)[0];m.length>1&&(b="rhel-edge-installer");var h={name:n,version:a,description:i,distribution:o,imageType:b,packages:null==p?void 0:p.map((function(e){return{name:e.name}})),outputTypes:m,commit:{arch:u},installer:{username:s,sshkey:d},thirdPartyRepositories:null==v?void 0:v.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}}))},E="".concat(l.Ds,"/images");return a>1&&(E+="/".concat(t,"/update")),c.instance.post(E,h)},d=function(e){var t=e.id,n=e.q,a=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,r=(0,l.Vs)(a);return c.instance.get("".concat(l.Ds,"/image-sets/").concat(t,"?").concat(r))},m=function(e){var t=e.imageSetID,n=e.query,a=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,r=(0,l.Vs)(a);return c.instance.get("".concat(l.Ds,"/image-sets/view/").concat(t,"/versions?").concat(r))},p=function(e){var t=e.id;return c.instance.get("".concat(l.Ds,"/image-sets/view/").concat(t))},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,l.Vs)(e);return c.instance.get("".concat(l.Ds,"/image-sets?").concat(t))},g=function(e){return c.instance.get("".concat(l.Ds,"/images/").concat(e,"/status"))},f=function(e){return c.instance.get("".concat(l.Ds,"/updates/device/").concat(e,"/image"))},b=function(){var e=(0,a.Z)(o().mark((function e(t,n,a){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({distribution:t,architecture:n,search:a}),e.abrupt("return",(0,c.instance)("".concat(l.DO,"/packages?").concat(r.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),h=function(e){var t=e.id;return c.instance.get("".concat(l.Ds,"/images/").concat(t,"/details"))},E=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,l.Vs)(t);return c.instance.get("".concat(l.Ds,"/image-sets/view?").concat(n))},y=function(e,t){return c.instance.post("".concat(l.$J,"/rpms/names"),{urls:e,search:t})}},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g,u:()=>p});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),l=n(69174),c=n(75824),u=n(79851),s=n(34512),d=n(98309),m={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},p=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},v=function(e){var t=e.id,n=e.type,a=e.isLabel,i=void 0!==a&&a,o=e.toolTipContent,d=void 0===o?"":o,p=e.className,v=void 0===p?"":p,g=e.isLink,f=Object.prototype.hasOwnProperty.call(m,n)?m[n]:m.default,b=f.text,h=f.Icon,E=f.color,y=f.labelColor;return r().createElement(r().Fragment,null,i?r().createElement(l._,{id:t,color:y,icon:r().createElement(h,null),className:v},b):r().createElement(u.P,{id:t,style:{color:E},className:v},r().createElement(s.J,{className:"pf-u-mr-sm"},d?r().createElement(c.u,{content:"blargh"},r().createElement(h,null)):r().createElement(h,null)),r().createElement(s.J,null,r().createElement("p",{style:g?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},b))))};const g=v;v.propTypes={id:o().string,type:o().string,isLabel:o().bool,toolTipContent:o().string,className:o().string,isLink:o().bool},v.defaultProps={id:"status"}},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(4942),r=n(15861),i=n(29439),o=n(64687),l=n.n(o),c=n(83215),u=n(92950),s=n(77760);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=function(e){var t,n=e.api,a=e.id,o=void 0===a?null:a,d=e.statusMessages,p=e.tableReload,v=void 0!==p&&p,g=(0,s.useDispatch)(),f=(0,u.useState)([]),b=(0,i.Z)(f,2),h=b[0],E=b[1],y=(0,u.useState)(!0),I=(0,i.Z)(y,2),S=I[0],D=I[1],O=(0,u.useState)(!1),w=(0,i.Z)(O,2),k=w[0],x=w[1],T=null===(t=d)||void 0===t?void 0:t.onSuccess;d||(d={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var P=function(){var e=(0,r.Z)(l().mark((function e(){var t,a,r=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",D(!0),e.prev=2,e.next=5,n({id:o,query:t});case 5:a=e.sent,E(a),T&&g(m({},(0,c.wN)(m({variant:"success"},d.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),x(!0),g(m({},(0,c.wN)(m({variant:"danger"},d.onError))));case 14:return e.prev=14,D(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){v||P()}),[]),[{data:h,isLoading:S,hasError:k},P]}},94184:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},27561:(e,t,n)=>{var a=n(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var a=n(13218),r=n(7771),i=n(14841),o=Math.max,l=Math.min;e.exports=function(e,t,n){var c,u,s,d,m,p,v=0,g=!1,f=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=c,a=u;return c=u=void 0,v=t,d=e.apply(a,n)}function E(e){return v=e,m=setTimeout(I,t),g?h(e):d}function y(e){var n=e-p;return void 0===p||n>=t||n<0||f&&e-v>=s}function I(){var e=r();if(y(e))return S(e);m=setTimeout(I,function(e){var n=t-(e-p);return f?l(n,s-(e-v)):n}(e))}function S(e){return m=void 0,b&&c?h(e):(c=u=void 0,d)}function D(){var e=r(),n=y(e);if(c=arguments,u=this,p=e,n){if(void 0===m)return E(p);if(f)return clearTimeout(m),m=setTimeout(I,t),h(p)}return void 0===m&&(m=setTimeout(I,t)),d}return t=i(t)||0,a(n)&&(g=!!n.leading,s=(f="maxWait"in n)?o(i(n.maxWait)||0,t):s,b="trailing"in n?!!n.trailing:b),D.cancel=function(){void 0!==m&&clearTimeout(m),v=0,c=p=u=m=void 0},D.flush=function(){return void 0===m?d:S(r())},D}},7739:(e,t,n)=>{var a=n(89465),r=n(55189),i=Object.prototype.hasOwnProperty,o=r((function(e,t,n){i.call(e,n)?e[n].push(t):a(e,n,[t])}));e.exports=o},7771:(e,t,n)=>{var a=n(55639);e.exports=function(){return a.Date.now()}},14841:(e,t,n)=>{var a=n(27561),r=n(13218),i=n(33448),o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}},58392:()=>{},37625:()=>{},21064:()=>{},82014:()=>{},16166:()=>{},59199:(e,t,n)=>{"use strict";function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>a})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(30907),r=n(59199),i=n(40181);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,r.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/ImageDetail.25f00bc0cef6c12d96a1b1f755f1f008.js.map
/*! For license information please see Images.d76bbe58b0b9be0032e0.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1157],{64124:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={REQUIRED:"required",MIN_LENGTH:"min-length",MAX_LENGTH:"max-length",EXACT_LENGTH:"exact-length",MIN_ITEMS:"min-items",MIN_NUMBER_VALUE:"min-number-value",MAX_NUMBER_VALUE:"max-number-value",PATTERN:"pattern",URL:"url"}},69174:(e,t,n)=>{"use strict";n.d(t,{_:()=>f});var r=n(70655),a=n(92950),o=n(83063),i=n(72002),c=n(47173),l=n(75824),s=n(38296),u=n(24307),d=n(6551);const p={blue:o.Z.modifiers.blue,cyan:o.Z.modifiers.cyan,green:o.Z.modifiers.green,orange:o.Z.modifiers.orange,purple:o.Z.modifiers.purple,red:o.Z.modifiers.red,gold:o.Z.modifiers.gold,grey:""},f=e=>{var{children:t,className:n="",color:f="grey",variant:m="filled",isCompact:g=!1,isEditable:v=!1,editableProps:b,isTruncated:h=!1,tooltipPosition:y,icon:E,onClose:O,onEditCancel:I,onEditComplete:w,closeBtn:x,closeBtnAriaLabel:C,closeBtnProps:S,href:N,isOverflowLabel:Z,render:_}=e,P=(0,r.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[D,j]=(0,a.useState)(!1),[T,k]=(0,a.useState)(t),L=a.useRef(),R=a.useRef();a.useEffect((()=>(document.addEventListener("mousedown",U),document.addEventListener("keydown",A),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("keydown",A)})));const U=e=>{D&&R&&R.current&&!R.current.contains(e.target)&&(R.current.value&&w&&w(R.current.value),j(!1))},A=e=>{var n,r;const a=e.key;if((D||L&&L.current&&L.current.contains(e.target))&&(!D||R&&R.current&&R.current.contains(e.target))&&(!D||"Enter"!==a&&"Tab"!==a||(e.preventDefault(),e.stopImmediatePropagation(),R.current.value&&w&&w(R.current.value),j(!1),null===(n=null==L?void 0:L.current)||void 0===n||n.focus()),D&&"Escape"===a&&(e.preventDefault(),e.stopImmediatePropagation(),R.current.value&&(R.current.value=t,I&&I(t)),j(!1),null===(r=null==L?void 0:L.current)||void 0===r||r.focus()),!D&&"Enter"===a)){e.preventDefault(),e.stopImmediatePropagation(),j(!0);const t=e.target,n=document.createRange(),r=window.getSelection();n.selectNodeContents(t),n.collapse(!1),r.removeAllRanges(),r.addRange(n)}},M=Z?"button":"span",B=x||a.createElement(c.zx,Object.assign({type:"button",variant:"plain",onClick:O,"aria-label":C||`Close ${t}`},S),a.createElement(u.ZP,null)),G=a.createRef(),W=a.useRef(),[z,Q]=a.useState(!1);(0,d.L)((()=>{const e=v?L:G;D||Q(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[D]);const F=a.createElement(a.Fragment,null,E&&a.createElement("span",{className:(0,s.i)(o.Z.labelIcon)},E),h&&a.createElement("span",{ref:G,className:(0,s.i)(o.Z.labelText)},t),!h&&t);a.useEffect((()=>{D&&R&&R.current&&R.current.focus()}),[R,D]);let H=a.createElement("span",{className:(0,s.i)(o.Z.labelContent)},F);return N?H=a.createElement("a",{className:(0,s.i)(o.Z.labelContent),href:N},F):v&&(H=a.createElement("button",Object.assign({ref:L,className:(0,s.i)(o.Z.labelContent),onClick:e=>{j(!0),e.stopPropagation()}},b),F)),_?H=a.createElement(a.Fragment,null,z&&a.createElement(l.u,{reference:W,content:t,position:y}),_({className:o.Z.labelContent,content:F,componentRef:W})):z&&(H=a.createElement(l.u,{content:t,position:y},H)),a.createElement(M,Object.assign({},P,{className:(0,s.i)(o.Z.label,p[f],"outline"===m&&o.Z.modifiers.outline,Z&&o.Z.modifiers.overflow,g&&o.Z.modifiers.compact,v&&i.Z.modifiers.editable,D&&o.Z.modifiers.editableActive,n)}),!D&&H,!D&&O&&B,D&&a.createElement("input",Object.assign({className:(0,s.i)(o.Z.labelContent),type:"text",id:"editable-input",ref:R,value:T,onChange:()=>{k(R.current.value)}},b)))};f.displayName="Label"},79851:(e,t,n)=>{"use strict";n.d(t,{P:()=>c});var r=n(70655),a=n(92950),o=n(89059),i=n(38296);const c=e=>{var{hasGutter:t=!1,isWrappable:n=!1,className:c="",children:l=null,component:s="div"}=e,u=(0,r.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const d=s;return a.createElement(d,Object.assign({},u,{className:(0,i.i)(o.Z.split,t&&o.Z.modifiers.gutter,n&&o.Z.modifiers.wrap,c)}),l)};c.displayName="Split"},34512:(e,t,n)=>{"use strict";n.d(t,{J:()=>c});var r=n(70655),a=n(92950),o=n(89059),i=n(38296);const c=e=>{var{isFilled:t=!1,className:n="",children:c=null}=e,l=(0,r.__rest)(e,["isFilled","className","children"]);return a.createElement("div",Object.assign({},l,{className:(0,i.i)(o.Z.splitItem,t&&o.Z.modifiers.fill,n)}),c)};c.displayName="SplitItem"},76889:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,_t:()=>a,k1:()=>o});var r=n(40400);const a={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},83063:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(82014);const r={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(21064);const r={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},89059:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(16166);const r={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(85893),a=n(92950),o=n.n(a),i=n(48335),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},l=36e5,s=24*l,u=30*s,d=365*s,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return p(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return p(Math.round(e/l),"hour")}},{rightBound:l,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},g=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},v=function(e,t,n){return{exact:function(t){return g(e)(t)},onlyDate:function(t){return g(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(i.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(g("exact")(a),(0,r.jsx)("span",{children:g(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,i=e.extraTitle,c=e.tooltipProps,l=t instanceof Date?t:new Date(t),s=null==t||"Invalid Date"===l.toString()?"invalid":a;return(0,r.jsx)(o().Fragment,{children:v(s,c,i)(l)})}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(85893),a=n(94184),o=n.n(a),i=n(92950);const c=n.n(i)().createContext("light");var l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const s=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),i=o()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(c.Consumer,{children:function(e){var t,c;void 0===e&&(e="light");var s=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((c={})["pf-m-light"]="light"===e,c));return(0,r.jsx)("section",l({},a,{className:"".concat(i," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(85893),a=n(94184),o=n.n(a),i=n(48335),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const l=function(e){var t=e.className,n=e.title,a=o()(t);return(0,r.jsx)(i.Title,c({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},14511:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r=n(4942),a=n(15861),o=n(29439),i=n(64687),c=n.n(i),l=n(92950),s=n.n(l),u=n(89376),d=n(39173),p=n(37619),f=n(52643),m=n(96620),g=n(73448),v=n(45697),b=n.n(v),h=n(9192),y=n(75824),E=n(62410),O=n(34766),I=n(3035),w=n(48903),x=n(35681),C=function(e){var t=e.index;return s().createElement("div",null,s().createElement(y.u,{content:s().createElement("div",null,"More options"),reference:function(){return document.getElementById("pf-dropdown-toggle-id-".concat(t))}}))};C.propTypes={index:b().number};var S=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],N=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,O.cellWidth)(35)]},{title:"Current version",type:"version",sort:!1,columnTransforms:[(0,O.cellWidth)(15)]},{title:"Last updated",type:"updated_at",sort:!0,columnTransforms:[(0,O.cellWidth)(25)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,O.cellWidth)(30)]}],Z=function(e){return e.map((function(e,t){return{rowInfo:{id:null==e?void 0:e.ID,imageStatus:null==e?void 0:e.Status,isoURL:(null==e?void 0:e.ImageBuildIsoURL)||null,latestImageID:null==e?void 0:e.ImageID},cells:[{title:s().createElement(m.Link,{to:"".concat(h._.manageImages,"/").concat(null==e?void 0:e.ID)},null==e?void 0:e.Name)},null==e?void 0:e.Version,{title:null!=e&&e.UpdatedAt?s().createElement(E.Z,{date:null==e?void 0:e.UpdatedAt}):"Unknown"},{title:s().createElement(s().Fragment,null,s().createElement(C,{index:t}),s().createElement(x.Z,{type:null==e?void 0:e.Status.toLowerCase()}))}]}}))},_=function(e){var t=e.data,n=e.count,r=e.isLoading,a=e.hasError,o=e.fetchImageSets,i=e.openCreateWizard,c=e.openUpdateWizard,l=e.hasModalSubmitted,u=e.setHasModalSubmitted,d=(0,m.useLocation)().search;return s().createElement(s().Fragment,null,(0,w.G0)(r,n,d)?s().createElement(I.Z,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"No images found",body:"",primaryAction:{click:i,text:"Create new image"},secondaryActions:[]}):s().createElement(g.Z,{apiFilterSort:!0,isUseApi:!0,filters:S,loadTableData:o,tableData:{count:n,data:t,isLoading:r,hasError:a},columnNames:N,rows:t?Z(t):[],actionResolver:function(e){var t,n,r,a,o,i=[];return null!==(t=e.rowInfo)&&void 0!==t&&t.isoURL&&i.push({title:"Download",onClick:function(e,t,n){var r;window.open(null===(r=n.rowInfo)||void 0===r?void 0:r.isoURL)}}),"SUCCESS"!==(null===(n=e.rowInfo)||void 0===n?void 0:n.imageStatus)&&"ERROR"!==(null===(r=e.rowInfo)||void 0===r?void 0:r.imageStatus)||i.push({title:"Update Image",onClick:function(e,t,n){var r;c(null===(r=n.rowInfo)||void 0===r?void 0:r.latestImageID)}}),"BUILDING"===(null===(a=e.rowInfo)||void 0===a?void 0:a.imageStatus)&&null!==(o=e.rowInfo)&&void 0!==o&&o.id&&i.push({title:""}),i},areActionsDisabled:function(e){var t;return"BUILDING"===(null===(t=e.rowInfo)||void 0===t?void 0:t.imageStatus)},defaultSort:{index:2,direction:"desc"},toolbarButtons:[{title:"Create new image",click:function(){return i()}}],hasModalSubmitted:l,setHasModalSubmitted:u}))};_.propTypes={data:b().array,count:b().number,isLoading:b().bool,hasError:b().bool,fetchImageSets:b().func,clearFilters:b().func,openCreateWizard:b().func,openUpdateWizard:b().func,filters:b().array,pagination:b().shape({page:b().number,perPage:b().number}),hasModalSubmitted:b().bool,setHasModalSubmitted:b().func};const P=_;var D=n(93597),j=n(96094);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=s().lazy((function(){return Promise.all([n.e(4390),n.e(3920),n.e(3006),n.e(9681),n.e(4675),n.e(8250),n.e(5344)]).then(n.bind(n,49477))})),R=s().lazy((function(){return Promise.all([n.e(4390),n.e(3920),n.e(3006),n.e(9681),n.e(4675),n.e(8250),n.e(46)]).then(n.bind(n,53010))}));const U=function(){var e=(0,m.useHistory)(),t=(0,m.useLocation)(),n=t.pathname,r=t.search,i=(0,j.Z)({api:D.$c,tableReload:!0}),g=(0,o.Z)(i,2),v=g[0],b=g[1],h=v.data,y=v.isLoading,E=v.hasError,O=(0,l.useState)(!1),I=(0,o.Z)(O,2),x=I[0],C=I[1],S=(0,l.useState)({isOpen:!1,imageId:null}),N=(0,o.Z)(S,2),Z=N[0],_=N[1],T=(0,l.useState)(!1),U=(0,o.Z)(T,2),A=U[0],M=U[1],B=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:M(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s().createElement(l.Fragment,null,s().createElement(u.Z,{className:"pf-m-light"},s().createElement(d.Z,{title:"Images"})),s().createElement("section",{className:"edge-images pf-l-page__main-section pf-c-page__main-section"},s().createElement(P,{data:(null==h?void 0:h.data)||[],count:null==h?void 0:h.count,isLoading:y,hasError:E,fetchImageSets:b,openCreateWizard:function(){e.push({pathname:n,search:(0,w.fz)("create_image=true",!0,r)}),C(!0)},openUpdateWizard:function(t){e.push({pathname:n,search:(0,w.fz)("update_image=true",!0,r)}),_({isOpen:!0,imageId:t})},hasModalSubmitted:A,setHasModalSubmitted:M})),x&&s().createElement(l.Suspense,{fallback:s().createElement(f.b,null,s().createElement(p.$,null))},s().createElement(L,{navigateBack:function(){e.push({pathname:n,search:(0,w.fz)("create_image=true",!1,r)}),C(!1)},reload:B})),Z.isOpen&&s().createElement(l.Suspense,{fallback:s().createElement(f.b,null,s().createElement(p.$,null))},s().createElement(R,{navigateBack:function(){e.push({pathname:n,search:(0,w.fz)("update_image=true",!1,r)}),_((function(e){return k(k({},e),{},{isOpen:!1})}))},reload:B,updateImageID:Z.imageId})))}},93597:(e,t,n)=>{"use strict";n.d(t,{$c:()=>y,Bi:()=>u,Dk:()=>v,EC:()=>g,EV:()=>b,H1:()=>s,Kz:()=>h,L0:()=>f,QY:()=>m,Sj:()=>E,dj:()=>p,dt:()=>d});var r=n(15861),a=n(29439),o=n(64687),i=n.n(o),c=n(66702),l=n(93454),s=function(e){var t={name:e};return l.instance.post("".concat(c.Ds,"/images/checkImageName"),t)},u=function(e){var t=e.Id,n=e.name,r=e.version,o=e.description,i=e.release,s=e.architecture,u=e.username,d=e.credentials,p=e.imageType,f=e["selected-packages"],m=e["third-party-repositories"],g=e["custom-packages"],v=p||[],b=(0,a.Z)(v,1)[0];p.length>1&&(b="rhel-edge-installer");var h={name:n,version:r,description:o,distribution:i,imageType:b,packages:null==f?void 0:f.map((function(e){return{name:e.name}})),outputTypes:p,commit:{arch:s},installer:{username:u,sshkey:d},thirdPartyRepositories:null==m?void 0:m.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}}))},y="".concat(c.Ds,"/images");return r>1&&(y+="/".concat(t,"/update")),l.instance.post(y,h)},d=function(e){var t=e.id,n=e.q,r=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,a=(0,c.Vs)(r);return l.instance.get("".concat(c.Ds,"/image-sets/").concat(t,"?").concat(a))},p=function(e){var t=e.imageSetID,n=e.query,r=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,a=(0,c.Vs)(r);return l.instance.get("".concat(c.Ds,"/image-sets/view/").concat(t,"/versions?").concat(a))},f=function(e){var t=e.id;return l.instance.get("".concat(c.Ds,"/image-sets/view/").concat(t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,c.Vs)(e);return l.instance.get("".concat(c.Ds,"/image-sets?").concat(t))},g=function(e){return l.instance.get("".concat(c.Ds,"/images/").concat(e,"/status"))},v=function(e){return l.instance.get("".concat(c.Ds,"/updates/device/").concat(e,"/image"))},b=function(){var e=(0,r.Z)(i().mark((function e(t,n,r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,l.instance)("".concat(c.DO,"/packages?").concat(a.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(e){var t=e.id;return l.instance.get("".concat(c.Ds,"/images/").concat(t,"/details"))},y=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,c.Vs)(t);return l.instance.get("".concat(c.Ds,"/image-sets/view?").concat(n))},E=function(e,t){return l.instance.post("".concat(c.$J,"/rpms/names"),{urls:e,search:t})}},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g,u:()=>f});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),c=n(69174),l=n(75824),s=n(79851),u=n(34512),d=n(98309),p={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},f=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},m=function(e){var t=e.id,n=e.type,r=e.isLabel,o=void 0!==r&&r,i=e.toolTipContent,d=void 0===i?"":i,f=e.className,m=void 0===f?"":f,g=e.isLink,v=Object.prototype.hasOwnProperty.call(p,n)?p[n]:p.default,b=v.text,h=v.Icon,y=v.color,E=v.labelColor;return a().createElement(a().Fragment,null,o?a().createElement(c._,{id:t,color:E,icon:a().createElement(h,null),className:m},b):a().createElement(s.P,{id:t,style:{color:y},className:m},a().createElement(u.J,{className:"pf-u-mr-sm"},d?a().createElement(l.u,{content:"blargh"},a().createElement(h,null)):a().createElement(h,null)),a().createElement(u.J,null,a().createElement("p",{style:g?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},b))))};const g=m;m.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},m.defaultProps={id:"status"}},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(4942),a=n(15861),o=n(29439),i=n(64687),c=n.n(i),l=n(83215),s=n(92950),u=n(77760);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=function(e){var t,n=e.api,r=e.id,i=void 0===r?null:r,d=e.statusMessages,f=e.tableReload,m=void 0!==f&&f,g=(0,u.useDispatch)(),v=(0,s.useState)([]),b=(0,o.Z)(v,2),h=b[0],y=b[1],E=(0,s.useState)(!0),O=(0,o.Z)(E,2),I=O[0],w=O[1],x=(0,s.useState)(!1),C=(0,o.Z)(x,2),S=C[0],N=C[1],Z=null===(t=d)||void 0===t?void 0:t.onSuccess;d||(d={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var _=function(){var e=(0,a.Z)(c().mark((function e(){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",w(!0),e.prev=2,e.next=5,n({id:i,query:t});case 5:r=e.sent,y(r),Z&&g(p({},(0,l.wN)(p({variant:"success"},d.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),N(!0),g(p({},(0,l.wN)(p({variant:"danger"},d.onError))));case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){m||_()}),[]),[{data:h,isLoading:I,hasError:S},_]}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},27561:(e,t,n)=>{var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var r=n(13218),a=n(7771),o=n(14841),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,d,p,f,m=0,g=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=l,r=s;return l=s=void 0,m=t,d=e.apply(r,n)}function y(e){return m=e,p=setTimeout(O,t),g?h(e):d}function E(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-m>=u}function O(){var e=a();if(E(e))return I(e);p=setTimeout(O,function(e){var n=t-(e-f);return v?c(n,u-(e-m)):n}(e))}function I(e){return p=void 0,b&&l?h(e):(l=s=void 0,d)}function w(){var e=a(),n=E(e);if(l=arguments,s=this,f=e,n){if(void 0===p)return y(f);if(v)return clearTimeout(p),p=setTimeout(O,t),h(f)}return void 0===p&&(p=setTimeout(O,t)),d}return t=o(t)||0,r(n)&&(g=!!n.leading,u=(v="maxWait"in n)?i(o(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=f=s=p=void 0},w.flush=function(){return void 0===p?d:I(a())},w}},7739:(e,t,n)=>{var r=n(89465),a=n(55189),o=Object.prototype.hasOwnProperty,i=a((function(e,t,n){o.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=i},7771:(e,t,n)=>{var r=n(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,n)=>{var r=n(27561),a=n(13218),o=n(33448),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}},21064:()=>{},82014:()=>{},16166:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30907),a=n(59199),o=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[821],{52251:(e,t,n)=>{n.d(t,{Sp:()=>q,Ud:()=>k,oG:()=>L,B9:()=>y,l9:()=>j,jS:()=>R,j7:()=>g,bR:()=>S});var a=n(29439),r=n(75418),l=n.n(r),i=n(47173),o=n(96354),s=(n(466),n(8742),n(97375),n(74513),n(4942),n(45987),n(45697)),c=n.n(s);n(41693);c().oneOfType([c().node,c().element,c().func]),c().func,n(79442);var u=n(76429);n(62067),n(95142),n(78724),n(62032),n(19285);var m=n(48880),d=(n(4694),n(64124)),p=(n(57949),n(70363)),f=function(e){var t=e.buttonLabels,n=t.cancel,o=t.submit,s=t.back,c=(0,r.useState)(!1),m=(0,a.Z)(c,2),d=m[0],f=m[1],g=(0,r.useContext)(p.default),v=g.handlePrev,h=g.formOptions;return l().createElement(u.Z,null,(function(){return l().createElement(l().Fragment,null,l().createElement(i.zx,{variant:"primary",type:"button",isDisabled:!h.valid||h.getState().validating||d,onClick:function(){h.onSubmit({values:h.getState().values,setIsSaving:f})}},o),l().createElement(i.zx,{type:"button",variant:"secondary",onClick:v,isDisabled:d},s),l().createElement("div",{className:"pf-c-wizard__footer-cancel"},l().createElement(i.zx,{type:"button",variant:"link",onClick:h.onCancel,isDisabled:d},n)))}))};f.propTypes={buttonLabels:c().shape({cancel:c().node,submit:c().node,back:c().node}),isSaving:c().bool};const g={name:"review",title:"Review",buttons:f,fields:[{name:"review",component:"review"}]};var v=n(68340),h=n(68774),b=n(68920),E=function(){var e,t,n=null===(e=(0,(0,m.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,a=void 0!==n?b.Ei[n]:"";return l().createElement(h.D,null,l().createElement(v.x,null,"Add packages to your ",l().createElement(v.x,{component:"b"},a)," image."))};const y={title:"Additional packages",name:"packages",nextStep:"review",substepOf:"Add content",fields:[{component:o.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:l().createElement(E,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]},k={title:"Options",name:"imageOutput",nextStep:function(e){var t,n=e.values;return null!=n&&null!==(t=n.imageType)&&void 0!==t&&t.includes("rhel-edge-installer")||!n.imageType?"registration":null!=n&&n.includesCustomRepos?"repositories":"packages"},fields:[{component:o.Z.PLAIN_TEXT,name:"description",label:l().createElement(v.x,null,"Enter some basic information about your image.")},{component:o.Z.SELECT,name:"release",label:"Release",options:Object.entries(b.Ei).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:b.az,validate:[{type:d.Z.REQUIRED}],isRequired:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(b.bd).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer","rhel-edge-commit"],clearedValue:[],validate:[{type:d.Z.REQUIRED}]}]};var x=n(28191),Z=n(92298),w=n(66702),C=n(58061),O=function(){var e,t=null===(e=(0,(0,m.default)().getState)().values)||void 0===e?void 0:e.description;return l().createElement("h1",null,(null==t?void 0:t.length)||0,"/250")};const L={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:o.Z.PLAIN_TEXT,name:"description",label:l().createElement(v.x,null,"Enter a name and description to easily identify your image later.")},{component:o.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",validate:[function(e){return(0,w.H1)(e).then((function(e){if(e.ImageExists)throw new Error("Name already exists")})).catch((function(e){throw e.message}))},{type:d.Z.REQUIRED},C.qg,{type:d.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:o.Z.TEXTAREA,style:{paddingRight:"32px",height:"25vh"},name:"description",label:l().createElement(x.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(Z.B,null,l().createElement(v.x,{component:"b"},"Description")),l().createElement(Z.B,null,l().createElement(O,null))),placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:d.Z.MAX_LENGTH,threshold:250}]}]},S={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:o.Z.PLAIN_TEXT,name:"description",label:l().createElement(v.x,null,"Enter a description to easily identify your image later.")},{component:o.Z.TEXTAREA,style:{height:"25vh"},name:"description",label:"Description",placeholder:"Add description",validate:[{type:d.Z.MAX_LENGTH,threshold:250}]}]};var P=n(36621),T=n(65673);const j={title:"Device registration",name:"registration",nextStep:function(e){var t=e.values;return null!=t&&t.includesCustomRepos?"repositories":"packages"},fields:[{component:o.Z.PLAIN_TEXT,name:"description",label:l().createElement(v.x,null,"Use this to log into your device.")},{component:o.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",helperText:l().createElement(P.p,null,l().createElement(T.u,{className:"pf-u-mt-xs",variant:"indeterminate"},"Can only contain letters, numbers, hyphens ( - ), and underscores( _ ).")),name:"username",validate:[{type:d.Z.REQUIRED},{type:d.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/,message:"Can only contain letters, numbers, hyphens ( - ), and underscores( _ )."},{type:d.Z.MAX_LENGTH,threshold:50},{type:"reservedUsernameValidator"}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:d.Z.REQUIRED},{type:d.Z.PATTERN,pattern:/^(ssh-(rsa|dss|ed25519)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]};var _=n(73411);const R={title:"Custom repositories",name:"repositories",nextStep:function(e){var t,n=e.values;return(null==n||null===(t=n["third-party-repositories"])||void 0===t?void 0:t.length)>0?"customPackages":"packages"},substepOf:"Add content",fields:[{component:o.Z.PLAIN_TEXT,name:"description",label:l().createElement(v.x,null,"Choose from linked custom repositories from which to search and add packages to this image.")},{component:"custom-repo-table",name:"third-party-repositories",label:l().createElement(_.Z,null),initialValue:[],clearedValue:[]}]};var A=n(79706),D=n(49739),N=n(83826),I=n(19694),V=function(){var e,t,n,a,r=(0,m.default)().getState,o=null===(e=r())||void 0===e||null===(t=e.values)||void 0===t?void 0:t["third-party-repositories"],s=null===(n=r())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,c=void 0!==s?b.Ei[s]:"";return l().createElement(h.D,null,l().createElement(v.x,null,"Add packages from"," ",l().createElement(A.J,{style:{visibility:"visible"},position:"bottom",headerContent:"Custom Repositories",bodyContent:l().createElement(D.K,null,o.map((function(e){return l().createElement(N.v,{key:e},l().createElement(v.x,null,e.name))})))},l().createElement(i.zx,{variant:"link",isInline:!0},o.length," custom repositories")," ","to your"),l().createElement("b",null," ",c)," image."))};const q={title:"Custom packages",name:"customPackages",nextStep:"packages",substepOf:"Add content",fields:[{component:o.Z.PLAIN_TEXT,name:"description",label:l().createElement(V,null)},{component:"custom-package-text-area",style:{paddingRight:"32px",height:"25vh"},name:"custom-packages",initialValue:[],clearedValue:[]},{component:o.Z.PLAIN_TEXT,name:"packageDetails",label:l().createElement(v.x,null,"Specify individual packages by exact name and casing, with no whitespace, one entry to a line, and can include hyphens ( - ).")},{component:o.Z.PLAIN_TEXT,name:"warning",label:l().createElement(v.x,{className:"pf-u-warning-color-200"},l().createElement(I.ZP,{class:"pf-u-warning-color-100"}),"  Packages names that do not have exact name and casing will not be included in the image.")}]}},82951:(e,t,n)=>{n.d(t,{Z:()=>ye});var a=n(4942),r=n(87462),l=n(75418),i=n.n(l),o=n(79442),s=n(67850),c=n(41387),u=(n(69385),n(74777),n(39136),n(79959),n(20898),n(45987)),m=n(45697),d=n.n(m),p=n(47173),f=n(40400);(0,f.IU)({name:"PficonSortCommonAscIcon",height:1024,width:1024,svgPath:"M256,768 L256,16 C256,7.2 248.9,0 240,0 L143.6,0 C134.8,0 128,7.2 128,16 L128,768 L17.1,767.8 C6.8,767.8 0,774.5 0,785.2 C0,791.1 1.2,792.2 3.7,795.3 L179.9,1019.3 C183,1022.3 187.4,1024 192,1024 C196.6,1024 200.6,1022.2 203.7,1019.3 L380.3,795.5 C389.1,784.3 381.1,768 366.9,768 L256,768 Z M528,768 C517.9,768 512,760.8 512,751.8 L512,656.2 C512,647.3 520.2,640 530.3,640 L1005.7,640 C1015.8,640 1024,647.2 1024,656.2 L1024,751.8 C1024,760.7 1015.8,768 1005.7,768 L528,768 Z M530.3,512 C520.1,512 512,503.8 512,493.7 L512,402.8 C512,392.7 520.2,384.5 530.3,384.5 L879.6,384.5 C889.7,384.5 897.9,392.7 897.9,402.8 L897.9,493.7 C897.9,503.8 889.7,512 879.6,512 L530.3,512 L530.3,512 Z M533,256 C521.3,256 512,247.9 512,238 L512,146 C512,136.1 521.4,128 533,128 L747,128 C758.6,128 768,136.1 768,146 L768,238 C768,247.9 758.6,256 747,256 L533,256 Z",yOffset:0,xOffset:0}),(0,f.IU)({name:"PficonSortCommonDescIcon",height:1024,width:1024,svgPath:"M256,768 L256,16 C256,7.2 248.9,0 240,0 L143.6,0 C134.8,0 128,7.2 128,16 L128,768 L17.1,767.8 C6.8,767.8 0,774.5 0,785.2 C0,791.1 1.2,792.2 3.7,795.3 L179.9,1019.3 C183,1022.3 187.4,1024 192,1024 C196.6,1024 200.6,1022.2 203.7,1019.3 L380.3,795.5 C389.1,784.3 381.1,768 366.9,768 L256,768 Z M528,128 L1005.7,128 C1015.8,128 1024,135.3 1024,144.2 L1024,239.8 C1024,248.8 1015.8,256 1005.7,256 L530.3,256 C520.2,256 512,248.7 512,239.8 L512,144.2 C512,135.2 517.9,128 528,128 L528,128 Z M530.3,384 L879.6,384 C889.7,384 897.9,392.2 897.9,402.3 L897.9,493.2 C897.9,503.3 889.7,511.5 879.6,511.5 L530.3,511.5 C520.2,511.5 512,503.3 512,493.2 L512,402.3 C512,392.2 520.1,384 530.3,384 L530.3,384 Z M533,640 L747,640 C758.6,640 768,648.1 768,658 L768,750 C768,759.9 758.6,768 747,768 L533,768 C521.4,768 512,759.9 512,750 L512,658 C512,648.1 521.3,640 533,640 L533,640 Z",yOffset:0,xOffset:0});d().oneOf(["left","right"]),n(2118),n(95034),n(41626),n(54915),n(86931),n(37116),n(65674),n(1733),n(75747),n(39635),n(26854);var g=n(2372),v=n(20873),h=n(93433),b=n(15861),E=n(29439),y=n(87757),k=n.n(y),x=n(48880),Z=n(41693),w=n(66702),C=n(68774),O=n(68340),L=n(92656),S=n(18793),P=n(34665),T=n(17224),j=n(93542),_=n(66317),R=n(36621),A=n(65673),D=n(65802),N=n(46836),I=n(92607),V=n(56186),q=n(80810),U=n(94949),F=n(71973),X=n(94086),M=n(93174),H=n(58061),z=["defaultArch"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var B=function(e){var t=e.text;return i().createElement(O.x,{className:"pf-u-text-align-center pf-u-pr-xl pf-u-pl-xl pf-u-pt-xl"},t)};B.propTypes={text:d().string};var G=function(e){var t=e.heading,n=e.body;return i().createElement(C.D,{className:"pf-u-text-align-center pf-u-pr-xl pf-u-pl-xl pf-u-pt-xl"},i().createElement(O.x,{component:"h3"},t),i().createElement(O.x,{component:"small"},n))};G.propTypes={heading:d().string,body:d().string};var Q=function(e){return e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selected:!1,isVisible:!0},e)}))},$=function(e){var t=e.defaultArch,n=(0,u.Z)(e,z),a=(0,x.default)(),r=a.change,o=a.getState,s=(0,Z.Z)(n).input,c=i().useState([]),m=(0,E.Z)(c,2),d=m[0],f=m[1],g=i().useState([]),v=(0,E.Z)(g,2),y=v[0],O=v[1],K=i().useState(""),$=(0,E.Z)(K,2),J=$[0],Y=$[1],W=(0,l.useState)(!1),ee=(0,E.Z)(W,2),te=ee[0],ne=ee[1],ae=(0,l.useState)(!1),re=(0,E.Z)(ae,2),le=re[0],ie=re[1],oe=(0,l.useState)(null),se=(0,E.Z)(oe,2),ce=se[0],ue=se[1],me=(0,l.useState)(!1),de=(0,E.Z)(me,2),pe=de[0],fe=de[1],ge=(0,l.useState)(!1),ve=(0,E.Z)(ge,2),he=ve[0],be=ve[1],Ee=(0,l.useState)(!1),ye=(0,E.Z)(Ee,2),ke=ye[0],xe=ye[1];(0,l.useEffect)((function(){var e,t,n=(null===(e=o())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[s.name])||[];O((0,H.n)(Q(n)));var a=document.querySelector('[aria-label="available search input"]');return null==a||a.addEventListener("keydown",we),function(){return a.removeEventListener("keydown",we)}}),[]),(0,l.useEffect)((function(){te&&(Ze(),ne(!1))}),[te]),(0,l.useEffect)((function(){Ce()}),[ce]);var Ze=function(){var e=(0,b.Z)(k().mark((function e(){var n,a,r,l,i,s,c,u,m,d;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==J){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.EV)((null===(n=o())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release)||"rhel-84",(null===(r=o())||void 0===r||null===(l=r.values)||void 0===l?void 0:l.architecture)||t,J);case 4:if(i=e.sent,s=i.data,c=i.meta,s){e.next=12;break}return fe(!0),ie(!1),f([]),e.abrupt("return");case 12:if(!(c.count>100)){e.next=27;break}if(fe(!1),ie(!0),u=null,s.forEach((function(e,t){e.name!==J||(u=t)})),m=!y.find((function(e){return e.name===s[u].name})),null===u||!m){e.next=22;break}return xe(!0),f(Q([s[u]])),e.abrupt("return");case 22:return xe(!1),f([]),e.abrupt("return");case 27:ie(!1),xe(!1);case 29:d=s.filter((function(e){return!y.find((function(t){return t.name===e.name}))})),f((0,H.n)(Q(d))),fe(!1);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(e){"Enter"===e.key&&(e.stopPropagation(),ne(!0))},Ce=function(){if(ce){var e=document.querySelector(".pf-m-".concat(ce.pane," .pf-c-dual-list-selector__menu"));ce.pkgs.forEach((function(e){return document.getElementById("package-".concat(e.name)).closest(".pf-c-dual-list-selector__list-item-row").classList.add("pf-u-background-color-disabled-color-300")})),setTimeout((function(){ce.pkgs.forEach((function(e){return document.getElementById("package-".concat(e.name)).closest(".pf-c-dual-list-selector__list-item-row").classList.remove("pf-u-background-color-disabled-color-300")}))}),400),e.scrollTop=ce.scrollHeight,ue(null)}},Oe=function(e){for(var t=e?d:y,n=e?y:d,a=[],l=0;l<t.length;l++){var i=t[l];i.selected&&i.isVisible&&(a.push(i),t.splice(l,1),i.selected=!1,l--)}var o=61*(n=(0,H.n)([].concat((0,h.Z)(n),a))).findIndex((function(e){return e.name===a[0].name}));e?(f((0,H.n)((0,h.Z)(t))),O(n),r(s.name,n)):(O((0,H.n)((0,h.Z)(t))),f(n),r(s.name,(0,h.Z)(t))),ue({pkgs:a,pane:e?"chosen":"available",scrollHeight:o}),xe(!1)},Le=function(e){e?(O((0,H.n)([].concat((0,h.Z)(d.filter((function(e){return e.isVisible}))),(0,h.Z)(y)))),f((0,H.n)((0,h.Z)(d.filter((function(e){return!e.isVisible}))))),r(s.name,[].concat((0,h.Z)(d),(0,h.Z)(y)))):(f((0,H.n)([].concat((0,h.Z)(y.filter((function(e){return e.isVisible}))),(0,h.Z)(d)))),O((0,H.n)((0,h.Z)(y.filter((function(e){return!e.isVisible}))))),r(s.name,[])),xe(!1)},Se=function(e){return i().createElement(i().Fragment,null,i().createElement(D.B,null,i().createElement(I.oi,{id:"".concat(e?"available":"chosen","-textinput"),type:"search",onChange:function(t){Y(t),e||(0,h.Z)(y).forEach((function(e){e.isVisible=""===t||e.name.toLowerCase().includes(t.toLowerCase())}))},placeholder:"Search for packages",onFocus:function(){return be(!0)},onBlur:function(){return be(!1)},validated:le&&e&&!he?"warning":"","aria-label":e?"available search input":"chosen search input","data-testid":e?"available-search-input":"chosen-search-input"}),e?i().createElement(p.zx,{onClick:Ze,isDisabled:!e,variant:"control","aria-label":"search button for search input","data-testid":"package-search"},i().createElement(q.ZP,null)):i().createElement(N.O,null,i().createElement(q.ZP,{className:"pf-u-ml-xs pf-u-mr-xs"}))),le&&e&&i().createElement(R.p,null,i().createElement(A.u,{variant:"warning"},"Over 100 results found. Refine your search.")))},Pe=function(e,t){return e.map((function(e,n){return e.isVisible?i().createElement(T.z,{key:n,isSelected:e.selected,id:"composable-option-".concat(n),onOptionSelect:function(e){return function(e,t,n){if(n){var a=(0,h.Z)(y);a[t].selected=!y[t].selected,O((0,H.n)(a))}else{var r=(0,h.Z)(d);r[t].selected=!d[t].selected,f((0,H.n)(r))}}(0,n,t)}},i().createElement(C.D,null,i().createElement("span",{id:"package-".concat(e.name),className:"pf-c-dual-list-selector__item-text"},e.name),i().createElement("small",null,e.summary))):null}))},Te=function(e){var t=e.filter((function(e){return e.isVisible})).length,n=e.filter((function(e){return e.selected&&e.isVisible})).length;return n>0?"".concat(n," of ").concat(t," items selected"):"".concat(t," ").concat(t>1?"items":"item")};return i().createElement(L.I,null,i().createElement(S.b,{title:"Available packages",status:Te(d),searchInput:Se(!0)},i().createElement(P.l,{style:{height:"290px"},"data-testid":"available-packages-list"},d.length>0&&!ke?Pe(d,!1):pe?i().createElement(G,{heading:"No Results Found",body:"Adjust your search and try again"}):le?i().createElement(i().Fragment,null,ke&&i().createElement(R.p,null,i().createElement(A.u,{className:"pf-u-ml-md pf-u-mt-md",variant:"indeterminate"},"Exact match")),ke&&Pe(d,!1),ke&&i().createElement(V.i,{className:"pf-u-mt-md",inset:{default:"insetMd"}}),i().createElement(G,{heading:"Too many results to display",body:"Please make the search more specific and try again"})):i().createElement(B,{text:"Search above to add additional packages to your image."}))),i().createElement(j.x,{"aria-label":"Selector controls"},i().createElement(_.u,{isDisabled:!d.some((function(e){return e.selected})),onClick:function(){return Oe(!0)},"aria-label":"Add selected",tooltipContent:"Add selected"},i().createElement(M.ZP,null)),i().createElement(_.u,{isDisabled:0===d.length,onClick:function(){return Le(!0)},"aria-label":"Add all",tooltipContent:"Add all"},i().createElement(X.ZP,null)),i().createElement(_.u,{isDisabled:0===y.length,onClick:function(){return Le(!1)},"aria-label":"Remove all",tooltipContent:"Remove all"},i().createElement(U.ZP,null)),i().createElement(_.u,{onClick:function(){return Oe(!1)},isDisabled:!y.some((function(e){return e.selected})),"aria-label":"Remove selected",tooltipContent:"Remove selected"},i().createElement(F.ZP,null))),i().createElement(S.b,{title:"Chosen packages",status:Te(y),searchInput:Se(!1),isChosen:!0},i().createElement(P.l,{style:{height:"290px"},"data-testid":"chosen-packages-list"},0===y.length?i().createElement(B,{text:"No packages added."}):y.filter((function(e){return e.isVisible})).length>0?Pe(y,!0):i().createElement(G,{heading:"No Results Found",body:"Adjust your search and try again"}))))};$.propTypes={defaultArch:d().string};const J=$;var Y=n(73411),W=n(59775),ee=n(93149),te=n(23393);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=ae(ae({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=ae(ae({},n),{},{sshKey:"Required"})),n}};const le=function(e){var t=(0,Z.Z)(e),n=t.input,a=t.meta,o=(0,l.useCallback)((function(e,t){n.onChange(e?[].concat((0,h.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),s=(0,Z.Z)({name:"password"}).input,c=(0,Z.Z)({name:"sshKey"}).input;return i().createElement(W.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},i().createElement(ee.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:o}),n.value.includes("password")?i().createElement(W.c,{helperTextInvalid:a.dirty&&void 0!==a.error.password?a.error.password:void 0},i().createElement(I.oi,(0,r.Z)({type:"password"},s))):null,i().createElement(ee.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:o}),n.value.includes("sshKey")?i().createElement(W.c,{helperTextInvalid:a.dirty&&void 0!==a.error.sshKey?a.error.sshKey:void 0},i().createElement(te.Kx,c)):null)};var ie=n(15265),oe=function(){return i().createElement(R.p,{className:"pf-u-ml-lg",hasIcon:!0},i().createElement(A.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"Creating an installable version of your image increases the build time and is not needed for updating existing devices. ",i().createElement("br",null),"You can create an installable version of this image later if you continue with this option"))},se={"rhel-edge-commit":"An OSTree commit is always created when building an image.","rhel-edge-installer":"An installable version of the image is typically created with a brand new image."},ce=function(e){var t=(0,x.default)().getState,n=(0,Z.Z)(e).input,a=(0,l.useCallback)((function(e,t){n.onChange(e?[].concat((0,h.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]);return i().createElement(W.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var o,s,c=e.value,u=e.label;return i().createElement(i().Fragment,null,i().createElement(ee.X,{key:r,label:u,id:c,isChecked:n.value.includes(c),onChange:a,isDisabled:"rhel-edge-commit"===c}),i().createElement(C.D,null,null!==(o=t())&&void 0!==o&&null!==(s=o.initialValues)&&void 0!==s&&s.isUpdate&&"rhel-edge-installer"===c?i().createElement(oe,null):i().createElement(R.p,{className:"pf-u-ml-lg pf-u-pb-sm"},i().createElement(A.u,{variant:"indeterminate"},se[c]))),"rhel-edge-installer"===c&&i().createElement(l.Fragment,null,i().createElement(O.x,{component:O.q.small},i().createElement(O.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/composing_installing_and_managing_rhel_for_edge_images/index#edge-how-to-compose-and-deploy-a-rhel-for-edge-image_introducing-rhel-for-edge-images",component:O.q.a,isVisitedLink:!0},"Learn more about image types.",i().createElement(ie.ZP,{className:"pf-u-ml-sm"})))))})))};ce.propTypes={input:d().array,options:d().arrayOf(d().shape({value:d().string,label:d().string}))};const ue=ce;function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const de=function(e){var t=(0,Z.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,o=t.meta;return i().createElement(W.c,null,i().createElement(W.c,{label:"SSH key",helperTextInvalid:o.error,validated:o.error&&o.touched?"error":"default",isRequired:!0},i().createElement(te.Kx,(0,r.Z)({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n))),i().createElement(l.Fragment,null,i().createElement(O.x,{component:O.q.small},i().createElement(O.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/using-secure-communications-between-two-systems-with-openssh_configuring-basic-system-settings#generating-ssh-key-pairs_using-secure-communications-between-two-systems-with-openssh",isVisitedLink:!0,component:O.q.a},"Learn more about SSH keys",i().createElement(ie.ZP,{className:"pf-u-ml-sm"})))))};var pe=["root","bin","daemon","sys","adm","tty","disk","lp","mem","kmem","wheel","cdrom","sync","shutdown","halt","mail","news","uucp","operator","games","gopher","ftp","man","oprofile","pkiuser","dialout","floppy","games","slocate","utmp","squid","pvm","named","postgres","mysql","nscd","rpcuser","console","rpc","amandabackup","tape","netdump","utempter","vdsm","kvm","rpm","ntp","video","dip","mailman","gdm","xfs","pppusers","popusers","slipusers","mailnull","apache","wnn","smmsp","puppet","tomcat","lock","ldap","frontpage","nut","beagleindex","tss","piranha","prelude-manager","snortd","audio","condor","nslcd","wine","pegasus","webalizer","haldaemon","vcsa","avahi","realtime","tcpdump","privoxy","sshd","radvd","cyrus","saslauth","arpwatch","fax","nocpulse","desktop","dbus","jonas","clamav","screen","quaggavt","sabayon","polkituser","wbpriv","postfix","postdrop","majordomo","quagga","exim","distcache","radiusd","hsqldb","dovecot","ident","users","qemu","ovirt","rhevm","jetty","saned","vhostmd","usbmuxd","bacula","cimsrvr","mock","ricci","luci","activemq","cassandra","stap-server","stapusr","stapsys","stapdev","swift","glance","nova","keystone","quantum","cinder","ceilometer","ceph","avahi-autoipd","pulse","rtkit","abrt","retrace","ovirtagent","ats","dhcpd","myproxy","sanlock","aeolus","wallaby","katello","elasticsearch","mongodb","wildfly","jbosson-agent","jbosson","heat","haproxy","hacluster","haclient","systemd-journal","systemd-network","systemd-resolve","gnats","listar","nobody",""],fe=function(){return function(e){return pe.includes(e)?"This is a username reserved for the system":void 0}},ge=n(64124);const ve=function(e){var t,n,a=(0,r.Z)({},e),o=(0,x.default)(),s=o.change,c=o.getState,u=(0,Z.Z)(a).input,m=null===(t=c())||void 0===t||null===(n=t.values)||void 0===n?void 0:n[u.name],d=(0,l.useState)(null==m?void 0:m.map((function(e){return e.name})).join("\n")),p=(0,E.Z)(d,2),f=p[0],g=p[1];(0,l.useEffect)((function(){var e=f.split(/[/,/\n\r\s\t]+/g).reduce((function(e,t){var n=t.replace(/[/ /\n\r\s\t]+/g,"");return""!==n&&"\n"!==n?[].concat((0,h.Z)(e),[{name:"".concat(n)}]):e}),[]);s(u.name,e)}),[f]),(0,l.useEffect)((function(){var e=document.querySelector('[aria-label="custom-package-wizard-step"]');return null==e||e.addEventListener("keydown",v),function(){return e.removeEventListener("keydown",v)}}),[]);var v=function(e){"Enter"===e.key&&e.stopPropagation()};return i().createElement(W.c,{label:"Packages",type:"string"},i().createElement(te.Kx,{"aria-label":"custom-package-wizard-step",placeholder:"Enter or paste packages from linked repositories, one entry per line.\rExamplePackage\rexample-package\rexamplapackage",value:f,onChange:function(e){return g(e)},style:{paddingRight:"32px",height:"25vh"}}))};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,l=e.customComponentMapper,u=e.initialValues,m=e.defaultArch;return t?i().createElement(o.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return i().createElement(s.ZP,(0,r.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},initialValues:u,componentMapper:be(be({},c.ZP),{},{"registration-creds":{component:le},"image-output-checkbox":{component:ue},"ssh-input-field":{component:de},review:v.Z,"package-selector":{component:J,defaultArch:m},"custom-repo-table":{component:Y.Z},"custom-package-text-area":{component:ve}},l),validatorMapper:be(be({},ge.Z),{},{registrationCredsValidator:re,reservedUsernameValidator:fe}),onCancel:a}):i().createElement(g.$,null)};Ee.propTypes={schema:d().object,initialValues:d().object,onSubmit:d().func.isRequired,onClose:d().func.isRequired,customComponentMapper:d().shape((0,a.Z)({},d().string,d().oneOfType([d().node,d().shape({component:d().node})]))),defaultArch:d().string};const ye=Ee},20873:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(75418),r=n.n(a),l=n(68774),i=n(68340),o=n(48880),s=n(68920),c=n(28216),u=n(59245),m=n(5230),d=n(52643),p=n(2372),f=n(87116),g=n(50693),v=n(16475),h=n(78140),b=n(45697),E=n.n(b),y=function(e){var t=e.title,n=e.data,a=e.testid;return r().createElement(g.r,{className:"pf-u-pb-xl","data-testid":a,hasGutter:!0},r().createElement(v.P,{span:12},r().createElement(i.x,{component:i.q.h2},t)),n.map((function(e){var t=e.name,n=e.value;return r().createElement(g.r,{key:t},r().createElement(v.P,{span:3},r().createElement(h.T,{component:h.v.dt},t)),r().createElement(v.P,{span:9},r().createElement(h.T,{component:h.v.dd},n)))})))};y.propTypes={title:E().string,data:E().arrayOf(E().shape({name:E().string,value:E().string})),testid:E().string};const k=y,x=function(){var e=(0,o.default)().getState,t=e().initialValues.isUpdate,n=(0,a.useContext)(u.g).getRegistry,g=(0,c.v9)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),c.wU),v=g.isLoading,h=g.hasError;if((0,a.useEffect)((function(){var e=n().register({createImageReducer:m.Ch});return function(){return e()}}),[]),v)return r().createElement(d.b,null,r().createElement(p.$,null));var b,E=[{name:"Name",value:e().values.name},{name:"Version",value:e().initialValues.version+1},{name:"Description",value:e().values.description}],y=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],x=e().initialValues["selected-packages"]||[],Z=e().values["selected-packages"]||[],w=e().initialValues["custom-packages"]||[],C=e().values["custom-packages"]||[],O=function(e,t){return e.reduce((function(e,n){var a=n.name;return e+(t.some((function(e){return e.name===a}))?0:1)}),0)};return r().createElement(a.Fragment,null,h&&r().createElement(f.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),r().createElement(l.D,null,r().createElement(i.x,null,"Review the information and click"," ",r().createElement(i.x,{component:"b"},"Create image")," to start the build process."),r().createElement(k,{title:"Details",data:E,testid:"review-image-details"}),r().createElement(k,{title:"Output",data:(b=[{name:"Release",value:s.Ei[e().values.release]},{name:"Output Type",value:s.bd["rhel-edge-commit"]}],e().values.imageType.includes("rhel-edge-installer")&&b.push({name:"",value:s.bd["rhel-edge-installer"]}),b),testid:"review-image-output"}),e().values.imageType.includes("rhel-edge-installer")?r().createElement(k,{title:"Registration",data:y,testid:"review-image-registration"}):null,r().createElement(k,{title:"Packages",data:[{name:t?"Custom Updated":"Custom Added",value:O(C,w)},{name:t?"RHEL Updated":"RHEL Added",value:O(Z,x)}],testid:"review-image-packages"})))}},73411:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(29439),r=n(87462),l=n(75418),i=n.n(l),o=n(5604),s=n(15265),c=n(68340),u=n(45697),m=n.n(u),d=n(3035),p=n(4147),f=n(66702),g=n(96094),v=n(48880),h=n(41693),b=[{label:"Name",type:"text"}],E=function(e){var t,n,u,m=(0,r.Z)({},e),E=(0,l.useState)([]),y=(0,a.Z)(E,2),k=y[0],x=y[1],Z=(0,g.Z)({api:f.dd}),w=(0,a.Z)(Z,1)[0],C=w.data,O=w.isLoading,L=w.hasError,S=(0,v.default)(),P=S.change,T=S.getState,j=(0,h.Z)(m).input,_=null===(t=T())||void 0===t||null===(n=t.values)||void 0===n?void 0:n[j.name];return(0,l.useEffect)((function(){P(j.name,k)}),[k]),i().createElement(i().Fragment,null,!0!==O&&!(null!=C&&C.count)>0?i().createElement(d.Z,{icon:"repository",title:"No custom repositories available",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Custom repositories",href:p._j.jS}}):i().createElement(o.Z,{apiFilterSort:!1,filters:b,tableData:{count:null==C?void 0:C.length,data:C,isLoading:O,hasError:L},columnNames:[{title:"Name",type:"name",sort:!0}],rows:O?[]:(u=C,u.data.map((function(e){var t=e.ID,n=e.Name,a=e.URL;return{rowInfo:{id:t,name:n,URL:a},noApiSortFilter:[n],cells:[{title:i().createElement(i().Fragment,null,i().createElement(c.x,{className:"pf-u-mb-xs",component:c.q.p},n),i().createElement(c.x,{component:c.q.a,href:a,target:"_blank",rel:"noopener noreferrer"},a," ",i().createElement(s.ZP,{className:"pf-u-ml-sm"})))}]}}))),defaultSort:{index:1,direction:"desc"},hasCheckbox:!0,selectedItems:function(e){var t=null==e?void 0:e.map((function(e){return{id:null==e?void 0:e.id,name:null==e?void 0:e.name,URL:null==e?void 0:e.URL}}));x(t)},initSelectedItems:_}))};E.propTypes={data:m().array,openModal:m().func};const y=E}}]);
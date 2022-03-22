"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[444],{76362:(e,t,n)=>{n.d(t,{Sp:()=>q,Ud:()=>k,oG:()=>P,B9:()=>E,l9:()=>_,jS:()=>D,j7:()=>d,bR:()=>T});var a=n(29439),r=n(93264),l=n.n(r),i=n(47173),o=n(6468),s=n(70363),c=n(45697),u=n.n(c),m=function(e){var t=e.buttonLabels,n=t.cancel,c=t.submit,u=t.back,m=(0,r.useState)(!1),d=(0,a.Z)(m,2),p=d[0],f=d[1],g=(0,r.useContext)(s.default),v=g.handlePrev,h=g.formOptions;return l().createElement(o.lP,null,(function(){return l().createElement(l().Fragment,null,l().createElement(i.zx,{variant:"primary",type:"button",isDisabled:!h.valid||h.getState().validating||p,onClick:function(){h.onSubmit({values:h.getState().values,setIsSaving:f})}},c),l().createElement(i.zx,{type:"button",variant:"secondary",onClick:v,isDisabled:p},u),l().createElement("div",{className:"pf-c-wizard__footer-cancel"},l().createElement(i.zx,{type:"button",variant:"link",onClick:h.onCancel,isDisabled:p},n)))}))};m.propTypes={buttonLabels:u().shape({cancel:u().node,submit:u().node,back:u().node}),isSaving:u().bool};const d={name:"review",title:"Review",buttons:m,fields:[{name:"review",component:"review"}]};var p=n(96354),f=n(68340),g=n(68774),v=n(48880),h=n(68920),b=function(){var e,t,n=null===(e=(0,(0,v.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,a=void 0!==n?h.Ei[n]:"";return l().createElement(g.D,null,l().createElement(f.x,null,"Add packages to your ",l().createElement(f.x,{component:"b"},a)," image."))};const E={title:"Additional packages",name:"packages",nextStep:"review",substepOf:"Add content",fields:[{component:p.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:l().createElement(b,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]};var y=n(64124);const k={title:"Options",name:"imageOutput",nextStep:function(e){var t,n=e.values;return null!=n&&null!==(t=n.imageType)&&void 0!==t&&t.includes("rhel-edge-installer")||!n.imageType?"registration":"repositories"},fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Enter some basic information about your image.")},{component:p.Z.SELECT,name:"release",label:"Release",options:Object.entries(h.Ei).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:h.az,validate:[{type:y.Z.REQUIRED}],isRequired:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(h.bd).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer","rhel-edge-commit"],clearedValue:[],validate:[{type:y.Z.REQUIRED}]}]};var x=n(28191),w=n(92298),Z=n(66702),O=n(58061),S=function(){var e,t=null===(e=(0,(0,v.default)().getState)().values)||void 0===e?void 0:e.description;return l().createElement("h1",null,(null==t?void 0:t.length)||0,"/250")};const P={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Enter a name and description to easily identify your image later.")},{component:p.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",helperText:"Can only contain letters, numbers, spaces, hyphens( - ), and underscores( _ ).",validate:[function(e){return(0,Z.H1)(e).then((function(e){if(e.ImageExists)throw new Error("Name already exists")})).catch((function(e){throw e.message}))},{type:y.Z.REQUIRED},O.qg,{type:y.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:p.Z.TEXTAREA,style:{paddingRight:"32px",height:"25vh"},name:"description",label:l().createElement(x.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(w.B,null,l().createElement(f.x,{component:"b"},"Description")),l().createElement(w.B,null,l().createElement(S,null))),placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:y.Z.MAX_LENGTH,threshold:250}]}]},T={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Enter a description to easily identify your image later.")},{component:p.Z.TEXTAREA,style:{height:"25vh"},name:"description",label:"Description",placeholder:"Add description",validate:[{type:y.Z.MAX_LENGTH,threshold:250}]}]};var j=n(36621),C=n(65673);const _={title:"Device registration",name:"registration",nextStep:"repositories",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Use this to log into your device.")},{component:p.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",helperText:l().createElement(j.p,null,l().createElement(C.u,{className:"pf-u-mt-xs",variant:"indeterminate"},"Can only contain letters, numbers, hyphens ( - ), and underscores( _ ).")),name:"username",validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/,message:"Can only contain letters, numbers, hyphens ( - ), and underscores( _ )."},{type:y.Z.MAX_LENGTH,threshold:50},{type:"reservedUsernameValidator"}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:/^(ssh-(rsa|dss|ed25519)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]};var A=n(73411);const D={title:"Custom repositories",name:"repositories",nextStep:function(e){var t,n=e.values;return(null==n||null===(t=n["third-party-repositories"])||void 0===t?void 0:t.length)>0?"customPackages":"packages"},substepOf:"Add content",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Choose from linked custom repositories from which to search and add packages to this image.")},{component:"custom-repo-table",name:"third-party-repositories",label:l().createElement(A.Z,null),initialValue:[],clearedValue:[]}]};var R=n(79706),N=n(49739),L=n(83826),I=n(19694),V=function(){var e,t,n,a,r=(0,v.default)().getState,o=null===(e=r())||void 0===e||null===(t=e.values)||void 0===t?void 0:t["third-party-repositories"],s=null===(n=r())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,c=void 0!==s?h.Ei[s]:"";return l().createElement(g.D,null,l().createElement(f.x,null,"Add packages from"," ",l().createElement(R.J,{style:{visibility:"visible"},position:"bottom",headerContent:"Custom Repositories",bodyContent:l().createElement(N.K,null,o.map((function(e){return l().createElement(L.v,{key:e},l().createElement(f.x,null,e.name))})))},l().createElement(i.zx,{variant:"link",isInline:!0},o.length," custom repositories")," ","to your"),l().createElement("b",null," ",c)," image."))};const q={title:"Custom packages",name:"customPackages",nextStep:"packages",substepOf:"Add content",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(V,null)},{component:"custom-package-text-area",name:"custom-packages",label:l().createElement("b",null," Packages "),initialValue:[],clearedValue:[]},{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,{className:"pf-u-warning-color-200"},l().createElement(I.ZP,{class:"pf-u-warning-color-100"}),"  Packages names that do not have exact name and casing will not be included in the image.")}]}},66496:(e,t,n)=>{n.d(t,{Z:()=>Ee});var a=n(4942),r=n(87462),l=n(93264),i=n.n(l),o=n(79442),s=n(67850),c=n(89235),u=n(2372),m=n(45697),d=n.n(m),p=n(20873),f=n(93433),g=n(15861),v=n(29439),h=n(45987),b=n(87757),E=n.n(b),y=n(48880),k=n(41693),x=n(66702),w=n(68774),Z=n(68340),O=n(47173),S=n(92656),P=n(18793),T=n(34665),j=n(17224),C=n(93542),_=n(66317),A=n(36621),D=n(65673),R=n(65802),N=n(46836),L=n(92607),I=n(56186),V=n(80810),q=n(94949),F=n(71973),U=n(94086),X=n(93174),z=n(58061),H=["defaultArch"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var B=function(e){var t=e.text;return i().createElement(Z.x,{className:"pf-u-text-align-center pf-u-pr-xl pf-u-pl-xl pf-u-pt-xl"},t)};B.propTypes={text:d().string};var M=function(e){var t=e.heading,n=e.body;return i().createElement(w.D,{className:"pf-u-text-align-center pf-u-pr-xl pf-u-pl-xl pf-u-pt-xl"},i().createElement(Z.x,{component:"h3"},t),i().createElement(Z.x,{component:"small"},n))};M.propTypes={heading:d().string,body:d().string};var G=function(e){return e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selected:!1,isVisible:!0},e)}))},Q=function(e){var t=e.defaultArch,n=(0,h.Z)(e,H),a=(0,y.default)(),r=a.change,o=a.getState,s=(0,k.Z)(n).input,c=i().useState([]),u=(0,v.Z)(c,2),m=u[0],d=u[1],p=i().useState([]),b=(0,v.Z)(p,2),Z=b[0],K=b[1],Q=i().useState(""),$=(0,v.Z)(Q,2),Y=$[0],J=$[1],W=(0,l.useState)(!1),ee=(0,v.Z)(W,2),te=ee[0],ne=ee[1],ae=(0,l.useState)(!1),re=(0,v.Z)(ae,2),le=re[0],ie=re[1],oe=(0,l.useState)(null),se=(0,v.Z)(oe,2),ce=se[0],ue=se[1],me=(0,l.useState)(!1),de=(0,v.Z)(me,2),pe=de[0],fe=de[1],ge=(0,l.useState)(!1),ve=(0,v.Z)(ge,2),he=ve[0],be=ve[1],Ee=(0,l.useState)(!1),ye=(0,v.Z)(Ee,2),ke=ye[0],xe=ye[1];(0,l.useEffect)((function(){var e,t,n=(null===(e=o())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[s.name])||[];K((0,z.n)(G(n)));var a=document.querySelector('[aria-label="available search input"]');return null==a||a.addEventListener("keydown",Ze),function(){return a.removeEventListener("keydown",Ze)}}),[]),(0,l.useEffect)((function(){te&&(we(),ne(!1))}),[te]),(0,l.useEffect)((function(){Oe()}),[ce]);var we=function(){var e=(0,g.Z)(E().mark((function e(){var n,a,r,l,i,s,c,u,m;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==Y){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,x.EV)((null===(n=o())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release)||"rhel-84",(null===(r=o())||void 0===r||null===(l=r.values)||void 0===l?void 0:l.architecture)||t,Y);case 4:if(i=e.sent,s=i.data,c=i.meta,s){e.next=12;break}return fe(!0),ie(!1),d([]),e.abrupt("return");case 12:if(!(c.count>100)){e.next=25;break}if(fe(!1),ie(!0),u=!Z.find((function(e){return e.name===s[0].name})),s[0].name!==Y||!u){e.next=20;break}return xe(!0),d(G([s[0]])),e.abrupt("return");case 20:return xe(!1),d([]),e.abrupt("return");case 25:ie(!1),xe(!1);case 27:m=s.filter((function(e){return!Z.find((function(t){return t.name===e.name}))})),d((0,z.n)(G(m))),fe(!1);case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ze=function(e){"Enter"===e.key&&(e.stopPropagation(),ne(!0))},Oe=function(){if(ce){var e=document.querySelector(".pf-m-".concat(ce.pane," .pf-c-dual-list-selector__menu"));ce.pkgs.forEach((function(e){return document.getElementById("package-".concat(e.name)).closest(".pf-c-dual-list-selector__list-item-row").classList.add("pf-u-background-color-disabled-color-300")})),setTimeout((function(){ce.pkgs.forEach((function(e){return document.getElementById("package-".concat(e.name)).closest(".pf-c-dual-list-selector__list-item-row").classList.remove("pf-u-background-color-disabled-color-300")}))}),400),e.scrollTop=ce.scrollHeight,ue(null)}},Se=function(e){for(var t=e?m:Z,n=e?Z:m,a=[],l=0;l<t.length;l++){var i=t[l];i.selected&&i.isVisible&&(a.push(i),t.splice(l,1),i.selected=!1,l--)}var o=61*(n=(0,z.n)([].concat((0,f.Z)(n),a))).findIndex((function(e){return e.name===a[0].name}));e?(d((0,z.n)((0,f.Z)(t))),K(n),r(s.name,n)):(K((0,z.n)((0,f.Z)(t))),d(n),r(s.name,(0,f.Z)(t))),ue({pkgs:a,pane:e?"chosen":"available",scrollHeight:o}),xe(!1)},Pe=function(e){e?(K((0,z.n)([].concat((0,f.Z)(m.filter((function(e){return e.isVisible}))),(0,f.Z)(Z)))),d((0,z.n)((0,f.Z)(m.filter((function(e){return!e.isVisible}))))),r(s.name,[].concat((0,f.Z)(m),(0,f.Z)(Z)))):(d((0,z.n)([].concat((0,f.Z)(Z.filter((function(e){return e.isVisible}))),(0,f.Z)(m)))),K((0,z.n)((0,f.Z)(Z.filter((function(e){return!e.isVisible}))))),r(s.name,[])),xe(!1)},Te=function(e){return i().createElement(i().Fragment,null,i().createElement(R.B,null,i().createElement(L.oi,{id:"".concat(e?"available":"chosen","-textinput"),type:"search",onChange:function(t){J(t),e||(0,f.Z)(Z).forEach((function(e){e.isVisible=""===t||e.name.toLowerCase().includes(t.toLowerCase())}))},placeholder:"Search for packages",onFocus:function(){return be(!0)},onBlur:function(){return be(!1)},validated:le&&e&&!he?"warning":"","aria-label":e?"available search input":"chosen search input","data-testid":e?"available-search-input":"chosen-search-input"}),e?i().createElement(O.zx,{onClick:we,isDisabled:!e,variant:"control","aria-label":"search button for search input","data-testid":"package-search"},i().createElement(V.ZP,null)):i().createElement(N.O,null,i().createElement(V.ZP,{className:"pf-u-ml-xs pf-u-mr-xs"}))),le&&e&&i().createElement(A.p,null,i().createElement(D.u,{variant:"warning"},"Over 100 results found. Refine your search.")))},je=function(e,t){return e.map((function(e,n){return e.isVisible?i().createElement(j.z,{key:n,isSelected:e.selected,id:"composable-option-".concat(n),onOptionSelect:function(e){return function(e,t,n){if(n){var a=(0,f.Z)(Z);a[t].selected=!Z[t].selected,K((0,z.n)(a))}else{var r=(0,f.Z)(m);r[t].selected=!m[t].selected,d((0,z.n)(r))}}(0,n,t)}},i().createElement(w.D,null,i().createElement("span",{id:"package-".concat(e.name),className:"pf-c-dual-list-selector__item-text"},e.name),i().createElement("small",null,e.summary))):null}))},Ce=function(e){var t=e.filter((function(e){return e.isVisible})).length,n=e.filter((function(e){return e.selected&&e.isVisible})).length;return n>0?"".concat(n," of ").concat(t," items selected"):"".concat(t," ").concat(t>1?"items":"item")};return i().createElement(S.I,null,i().createElement(P.b,{title:"Available packages",status:Ce(m),searchInput:Te(!0)},i().createElement(T.l,{style:{height:"290px"},"data-testid":"available-packages-list"},m.length>0&&!ke?je(m,!1):pe?i().createElement(M,{heading:"No Results Found",body:"Adjust your search and try again"}):le?i().createElement(i().Fragment,null,ke&&i().createElement(A.p,null,i().createElement(D.u,{className:"pf-u-ml-md pf-u-mt-md",variant:"indeterminate"},"Exact match")),ke&&je(m,!1),ke&&i().createElement(I.i,{className:"pf-u-mt-md",inset:{default:"insetMd"}}),i().createElement(M,{heading:"Too many results to display",body:"Please make the search more specific and try again"})):i().createElement(B,{text:"Search above to add additional packages to your image."}))),i().createElement(C.x,{"aria-label":"Selector controls"},i().createElement(_.u,{isDisabled:!m.some((function(e){return e.selected})),onClick:function(){return Se(!0)},"aria-label":"Add selected",tooltipContent:"Add selected"},i().createElement(X.ZP,null)),i().createElement(_.u,{isDisabled:0===m.length,onClick:function(){return Pe(!0)},"aria-label":"Add all",tooltipContent:"Add all"},i().createElement(U.ZP,null)),i().createElement(_.u,{isDisabled:0===Z.length,onClick:function(){return Pe(!1)},"aria-label":"Remove all",tooltipContent:"Remove all"},i().createElement(q.ZP,null)),i().createElement(_.u,{onClick:function(){return Se(!1)},isDisabled:!Z.some((function(e){return e.selected})),"aria-label":"Remove selected",tooltipContent:"Remove selected"},i().createElement(F.ZP,null))),i().createElement(P.b,{title:"Chosen packages",status:Ce(Z),searchInput:Te(!1),isChosen:!0},i().createElement(T.l,{style:{height:"290px"},"data-testid":"chosen-packages-list"},0===Z.length?i().createElement(B,{text:"No packages added."}):Z.filter((function(e){return e.isVisible})).length>0?je(Z,!0):i().createElement(M,{heading:"No Results Found",body:"Adjust your search and try again"}))))};Q.propTypes={defaultArch:d().string};const $=Q;var Y=n(73411),J=n(59775),W=n(93149),ee=n(23393);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=ne(ne({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=ne(ne({},n),{},{sshKey:"Required"})),n}};const re=function(e){var t=(0,k.Z)(e),n=t.input,a=t.meta,o=(0,l.useCallback)((function(e,t){n.onChange(e?[].concat((0,f.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),s=(0,k.Z)({name:"password"}).input,c=(0,k.Z)({name:"sshKey"}).input;return i().createElement(J.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},i().createElement(W.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:o}),n.value.includes("password")?i().createElement(J.c,{helperTextInvalid:a.dirty&&void 0!==a.error.password?a.error.password:void 0},i().createElement(L.oi,(0,r.Z)({type:"password"},s))):null,i().createElement(W.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:o}),n.value.includes("sshKey")?i().createElement(J.c,{helperTextInvalid:a.dirty&&void 0!==a.error.sshKey?a.error.sshKey:void 0},i().createElement(ee.Kx,c)):null)};var le=n(15265),ie=function(){return i().createElement(A.p,{className:"pf-u-ml-lg",hasIcon:!0},i().createElement(D.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"Creating an installable version of your image increases the build time and is not needed for updating existing devices. ",i().createElement("br",null),"You can create an installable version of this image later if you continue with this option"))},oe={"rhel-edge-commit":"An OSTree commit is always created when building an image.","rhel-edge-installer":"An installable version of the image is typically created with a brand new image."},se=function(e){var t=(0,y.default)().getState,n=(0,k.Z)(e).input,a=(0,l.useCallback)((function(e,t){n.onChange(e?[].concat((0,f.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]);return i().createElement(J.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var o,s,c=e.value,u=e.label;return i().createElement(i().Fragment,null,i().createElement(W.X,{key:r,label:u,id:c,isChecked:n.value.includes(c),onChange:a,isDisabled:"rhel-edge-commit"===c}),i().createElement(w.D,null,null!==(o=t())&&void 0!==o&&null!==(s=o.initialValues)&&void 0!==s&&s.isUpdate&&"rhel-edge-installer"===c?i().createElement(ie,null):i().createElement(A.p,{className:"pf-u-ml-lg pf-u-pb-sm"},i().createElement(D.u,{variant:"indeterminate"},oe[c]))),"rhel-edge-installer"===c&&i().createElement(l.Fragment,null,i().createElement(Z.x,{component:Z.q.small},i().createElement(Z.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/composing_installing_and_managing_rhel_for_edge_images/index#edge-how-to-compose-and-deploy-a-rhel-for-edge-image_introducing-rhel-for-edge-images",component:Z.q.a,isVisitedLink:!0},"Learn more about image types.",i().createElement(le.ZP,{className:"pf-u-ml-sm"})))))})))};se.propTypes={input:d().array,options:d().arrayOf(d().shape({value:d().string,label:d().string}))};const ce=se;function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const me=function(e){var t=(0,k.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,o=t.meta;return i().createElement(J.c,null,i().createElement(J.c,{label:"SSH key",helperTextInvalid:o.error,validated:o.error&&o.touched?"error":"default",isRequired:!0},i().createElement(ee.Kx,(0,r.Z)({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n))),i().createElement(l.Fragment,null,i().createElement(Z.x,{component:Z.q.small},i().createElement(Z.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/using-secure-communications-between-two-systems-with-openssh_configuring-basic-system-settings#generating-ssh-key-pairs_using-secure-communications-between-two-systems-with-openssh",isVisitedLink:!0,component:Z.q.a},"Learn more about SSH keys",i().createElement(le.ZP,{className:"pf-u-ml-sm"})))))};var de=["root","bin","daemon","sys","adm","tty","disk","lp","mem","kmem","wheel","cdrom","sync","shutdown","halt","mail","news","uucp","operator","games","gopher","ftp","man","oprofile","pkiuser","dialout","floppy","games","slocate","utmp","squid","pvm","named","postgres","mysql","nscd","rpcuser","console","rpc","amandabackup","tape","netdump","utempter","vdsm","kvm","rpm","ntp","video","dip","mailman","gdm","xfs","pppusers","popusers","slipusers","mailnull","apache","wnn","smmsp","puppet","tomcat","lock","ldap","frontpage","nut","beagleindex","tss","piranha","prelude-manager","snortd","audio","condor","nslcd","wine","pegasus","webalizer","haldaemon","vcsa","avahi","realtime","tcpdump","privoxy","sshd","radvd","cyrus","saslauth","arpwatch","fax","nocpulse","desktop","dbus","jonas","clamav","screen","quaggavt","sabayon","polkituser","wbpriv","postfix","postdrop","majordomo","quagga","exim","distcache","radiusd","hsqldb","dovecot","ident","users","qemu","ovirt","rhevm","jetty","saned","vhostmd","usbmuxd","bacula","cimsrvr","mock","ricci","luci","activemq","cassandra","stap-server","stapusr","stapsys","stapdev","swift","glance","nova","keystone","quantum","cinder","ceilometer","ceph","avahi-autoipd","pulse","rtkit","abrt","retrace","ovirtagent","ats","dhcpd","myproxy","sanlock","aeolus","wallaby","katello","elasticsearch","mongodb","wildfly","jbosson-agent","jbosson","heat","haproxy","hacluster","haclient","systemd-journal","systemd-network","systemd-resolve","gnats","listar","nobody",""],pe=function(){return function(e){return de.includes(e)?"This is a username reserved for the system":void 0}},fe=n(64124);const ge=function(e){var t,n,a=(0,r.Z)({},e),o=(0,y.default)(),s=o.change,c=o.getState,u=(0,k.Z)(a).input,m=null===(t=c())||void 0===t||null===(n=t.values)||void 0===n?void 0:n[u.name],d=(0,l.useState)(null==m?void 0:m.map((function(e){return e.name})).join(",\n")),p=(0,v.Z)(d,2),g=p[0],h=p[1];(0,l.useEffect)((function(){var e=g.split(",").reduce((function(e,t){var n=t.replace(/[/ /\n\r\s\t]+/g,"");return""!==n&&"\n"!==n?[].concat((0,f.Z)(e),[{name:"".concat(n)}]):e}),[]);s(u.name,e)}),[g]),(0,l.useEffect)((function(){var e=document.querySelector('[aria-label="custom-package-wizard-step"]');return null==e||e.addEventListener("keydown",b),function(){return e.removeEventListener("keydown",b)}}),[]);var b=function(e){"Enter"===e.key&&e.stopPropagation()};return i().createElement(i().Fragment,null,i().createElement(ee.Kx,{"aria-label":"custom-package-wizard-step",value:g,onChange:function(e){return h(e)},style:{paddingRight:"32px",height:"30vh"}}),i().createElement(A.p,null,"Specify individual packages by exact name and casing, with no whitespace. one entry to a line, and can include hyphens ( - )."))};function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,l=e.customComponentMapper,m=e.initialValues,d=e.defaultArch;return t?i().createElement(o.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return i().createElement(s.ZP,(0,r.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},initialValues:m,componentMapper:he(he({},c.YS),{},{"registration-creds":{component:re},"image-output-checkbox":{component:ce},"ssh-input-field":{component:me},review:p.Z,"package-selector":{component:$,defaultArch:d},"custom-repo-table":{component:Y.Z},"custom-package-text-area":{component:ge}},l),validatorMapper:he(he({},fe.Z),{},{registrationCredsValidator:ae,reservedUsernameValidator:pe}),onCancel:a}):i().createElement(u.$,null)};be.propTypes={schema:d().object,initialValues:d().object,onSubmit:d().func.isRequired,onClose:d().func.isRequired,customComponentMapper:d().shape((0,a.Z)({},d().string,d().oneOfType([d().node,d().shape({component:d().node})]))),defaultArch:d().string};const Ee=be},20873:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(93264),r=n.n(a),l=n(68774),i=n(68340),o=n(48880),s=n(68920),c=n(82041),u=n(59245),m=n(5230),d=n(52643),p=n(2372),f=n(87116),g=n(50693),v=n(16475),h=n(78140),b=n(45697),E=n.n(b),y=function(e){var t=e.title,n=e.data,a=e.testid;return r().createElement(g.r,{className:"pf-u-pb-xl","data-testid":a,hasGutter:!0},r().createElement(v.P,{span:12},r().createElement(i.x,{component:i.q.h2},t)),n.map((function(e){var t=e.name,n=e.value;return r().createElement(g.r,{key:t},r().createElement(v.P,{span:3},r().createElement(h.T,{component:h.v.dt},t)),r().createElement(v.P,{span:9},r().createElement(h.T,{component:h.v.dd},n)))})))};y.propTypes={title:E().string,data:E().arrayOf(E().shape({name:E().string,value:E().string})),testid:E().string};const k=y,x=function(){var e=(0,o.default)().getState,t=e().initialValues.isUpdate,n=(0,a.useContext)(u.g).getRegistry,g=(0,c.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),c.shallowEqual),v=g.isLoading,h=g.hasError;if((0,a.useEffect)((function(){var e=n().register({createImageReducer:m.Ch});return function(){return e()}}),[]),v)return r().createElement(d.b,null,r().createElement(p.$,null));var b,E=[{name:"Name",value:e().values.name},{name:"Version",value:e().initialValues.version+1},{name:"Description",value:e().values.description}],y=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],x=e().initialValues["selected-packages"],w=e().values["selected-packages"],Z=e().initialValues["custom-packages"],O=e().values["custom-packages"],S=function(e,t){return e.reduce((function(e,n){var a=n.name;return e+(t.some((function(e){return e.name===a}))?0:1)}),0)};return r().createElement(a.Fragment,null,h&&r().createElement(f.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),r().createElement(l.D,null,r().createElement(i.x,null,"Review the information and click"," ",r().createElement(i.x,{component:"b"},"Create image")," to start the build process."),r().createElement(k,{title:"Details",data:E,testid:"review-image-details"}),r().createElement(k,{title:"Output",data:(b=[{name:"Release",value:s.Ei[e().values.release]},{name:"Output Type",value:s.bd["rhel-edge-commit"]}],e().values.imageType.includes("rhel-edge-installer")&&b.push({name:"",value:s.bd["rhel-edge-installer"]}),b),testid:"review-image-output"}),e().values.imageType.includes("rhel-edge-installer")?r().createElement(k,{title:"Registration",data:y,testid:"review-image-registration"}):null,r().createElement(k,{title:"Packages",data:[{name:t?"Custom Updated":"Custom Added",value:S(O,Z)},{name:t?"Supported Updated":"Supported Added",value:S(w,x)}],testid:"review-image-packages"})))}},73411:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(29439),r=n(87462),l=n(93264),i=n.n(l),o=n(5604),s=n(15265),c=n(68340),u=n(45697),m=n.n(u),d=n(3035),p=n(4147),f=n(66702),g=n(96094),v=n(48880),h=n(41693),b=[{label:"Name",type:"text"}],E=function(e){var t,n,u,m=(0,r.Z)({},e),E=(0,l.useState)([]),y=(0,a.Z)(E,2),k=y[0],x=y[1],w=(0,g.Z)(f.dd),Z=(0,a.Z)(w,1)[0],O=Z.data,S=Z.isLoading,P=Z.hasError,T=(0,v.default)(),j=T.change,C=T.getState,_=(0,h.Z)(m).input,A=null===(t=C())||void 0===t||null===(n=t.values)||void 0===n?void 0:n[_.name];return(0,l.useEffect)((function(){j(_.name,k)}),[k]),i().createElement(i().Fragment,null,!0!==S&&!(null!=O&&O.count)>0?i().createElement(d.Z,{icon:"repository",title:"No custom repositories available",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Custom repositories",href:p._j.jS}}):i().createElement(o.Z,{apiFilterSort:!1,filters:b,tableData:{count:null==O?void 0:O.length,data:O,isLoading:S,hasError:P},columnNames:[{title:"Name",type:"name",sort:!0}],rows:S?[]:(u=O,u.data.map((function(e){var t=e.ID,n=e.Name,a=e.URL;return{id:t,name:n,URL:a,noApiSortFilter:[n],cells:[{title:i().createElement(i().Fragment,null,i().createElement(c.x,{className:"pf-u-mb-xs",component:c.q.p},n),i().createElement(c.x,{component:c.q.a,href:a,target:"_blank",rel:"noopener noreferrer"},a," ",i().createElement(s.ZP,{className:"pf-u-ml-sm"})))}]}}))),defaultSort:{index:0,direction:"desc"},hasCheckbox:!0,selectedItems:function(e){var t=null==e?void 0:e.map((function(e){return{id:null==e?void 0:e.id,name:null==e?void 0:e.name,URL:null==e?void 0:e.URL}}));x(t)},initSelectedItems:A}))};E.propTypes={data:m().array,openModal:m().func};const y=E}}]);
//# sourceMappingURL=../sourcemaps/444.4dc52df640911f22157eec0a620f96a6.js.map
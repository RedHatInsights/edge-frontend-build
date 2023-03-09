(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1551],{36621:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var r=n(70655),a=n(92950),o=n(49945),i=n(38296);const s=e=>{var{children:t,className:n,component:s="div",id:c,isLiveRegion:l=!1}=e,u=(0,r.__rest)(e,["children","className","component","id","isLiveRegion"]);const p=s;return a.createElement(p,Object.assign({id:c,className:(0,i.i)(o.Z.helperText,n)},l&&{"aria-live":"polite"},u),t)};s.displayName="HelperText"},65673:(e,t,n)=>{"use strict";n.d(t,{u:()=>d});var r=n(70655),a=n(92950),o=n(49945),i=n(38296),s=n(80965),c=n(69957),l=n(68778),u=n(43047);const p={default:"",indeterminate:o.Z.modifiers.indeterminate,warning:o.Z.modifiers.warning,success:o.Z.modifiers.success,error:o.Z.modifiers.error},d=e=>{var{children:t,className:n,component:d="div",variant:m="default",icon:f,isDynamic:b=!1,hasIcon:h=b,id:v,screenReaderText:y=`${m} status`}=e,g=(0,r.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const E=d;return a.createElement(E,Object.assign({className:(0,i.i)(o.Z.helperTextItem,p[m],b&&o.Z.modifiers.dynamic,n),id:v},g),f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},f),h&&!f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},("default"===m||"indeterminate"===m)&&a.createElement(s.ZP,null),"warning"===m&&a.createElement(c.ZP,null),"success"===m&&a.createElement(l.ZP,null),"error"===m&&a.createElement(u.ZP,null)),a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemText)},t,b&&a.createElement("span",{className:"pf-u-screen-reader"},": ",y,";")))};d.displayName="HelperTextItem"},80965:(e,t,n)=>{"use strict";n.d(t,{V_:()=>o,ZP:()=>i,jm:()=>a});var r=n(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(70655),a=r.__importStar(n(92950));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:s=0,width:c,height:l,svgPath:u}){var p;return p=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:o,color:i,title:p,noVerticalAlign:d}=e,m=r.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(p),b=t.getSize(o),h=-.125*Number.parseFloat(b),v=d?null:{verticalAlign:`${h}em`},y=[n,s,c,l].join(" ");return a.createElement("svg",Object.assign({style:v,fill:i,height:b,width:b,viewBox:y,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},m),f&&a.createElement("title",{id:this.id},p),a.createElement("path",{d:u}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},p}},19694:(e,t,n)=>{"use strict";t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=n(35183).createIcon(t.RI),t.ZP=t.LP},49945:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(71338);const r={helperText:"pf-c-helper-text",helperTextItem:"pf-c-helper-text__item",helperTextItemIcon:"pf-c-helper-text__item-icon",helperTextItemText:"pf-c-helper-text__item-text",modifiers:{indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-theme-dark"}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(85893),a=n(94184),o=n.n(a),i=n(48335),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};const c=function(e){var t=e.className,n=e.title,a=o()(t);return(0,r.jsx)(i.Title,s({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},80365:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ee});var r=n(15861),a=n(4942),o=n(29439),i=n(64687),s=n.n(i),c=n(92950),l=n.n(c),u=n(60722),p=n(11977),d=n(45697),m=n.n(d),f=n(64124),b=n(48903),h=n(32349),v=n(86706),y=function(){var e=(0,r.Z)(s().mark((function e(){var t,n=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.length>0&&void 0!==n[0]?n[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,p.bB)(t);case 5:if(!e.sent.data.isValid){e.next=8;break}throw"Repository name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g={repoName:function(){return y}},E=function(e){var t=e.isOpen,n=e.closeModal,r=e.reloadData,a=(0,v.I0)(),o={fields:[{component:"plain-text",name:"title",label:"Link to a custom repository to add packages to RHEL for Edge images."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:"repoName"},{type:f.Z.REQUIRED},{type:f.Z.MAX_LENGTH,threshold:50},b.qg]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:"Enter the baseURL for the custom repository.",isRequired:!0,validate:[{type:f.Z.REQUIRED},{type:f.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Add repository",isOpen:t,closeModal:function(){return n({type:"add"})},submitLabel:"Add",schema:o,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create a repo"}};(0,h.Z)(a,(function(){return(0,p.eS)(e)}),t)},reloadData:r,validatorMapper:g})};E.propTypes={closeModal:m().func,reloadData:m().func,isOpen:m().bool};const O=E;var x=n(36621),R=n(65673),Z=function(e){var t=e.closeModal,n=e.isOpen,r=e.id,a=e.name,o=e.baseURL,i=e.reloadData,s=(0,v.I0)(),c={fields:[{component:"plain-text",name:"title",label:"Update information about this custom repository."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:f.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:l().createElement(x.p,null,l().createElement(R.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.")),isRequired:!0,validate:[{type:f.Z.REQUIRED},{type:f.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Edit repository",isOpen:n,closeModal:function(){return t({type:"edit"})},submitLabel:"Update",schema:c,initialValues:{id:r,name:a,baseURL:o},onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been edited successfully")},onError:{title:"Error",description:"Failed to edit a repository"}};(0,h.Z)(s,(function(){return(0,p.Es)(e)}),t)},reloadData:i})};Z.propTypes={closeModal:m().func,reloadData:m().func,isOpen:m().bool,id:m().number,name:m().string,baseURL:m().string,setData:m().func};const w=Z;var L=n(68774),D=n(68340),j=n(19694),I=n(37655),P=function(e){var t=e.label,n=e.text;return l().createElement(L.D,null,l().createElement(D.x,{component:"b"},t),l().createElement(D.x,null,n))};P.propTypes={label:m().string,text:m().string};var S=function(){return l().createElement(j.ZP,{color:I.Z.value})},M=function(e){var t=e.closeModal,n=e.id,r=e.isOpen,a=e.name,o=e.baseURL,i=e.reloadData,s=(0,v.I0)(),c={fields:[{component:"plain-text",name:"description",label:"Removing a repository could affect your ability to update images."},{component:"plain-text",name:"name",label:l().createElement(P,{label:"Name",text:a})},{component:"plain-text",name:"baseURL",label:l().createElement(P,{label:"BaseURL",text:o})}]};return l().createElement(u.Z,{title:"Remove repository",titleIconVariant:S,isOpen:r,closeModal:function(){return t({type:"remove"})},submitLabel:"Remove",schema:c,initialValues:{id:n},variant:"danger",onSubmit:function(e){var t=e.id,n={onSuccess:{title:"Success",description:"".concat(a," has been removed successfully")},onError:{title:"Error",description:"Failed to remove a repository"}};(0,h.Z)(s,(function(){return(0,p.gK)(t)}),n)},reloadData:i})};M.propTypes={closeModal:m().func,reloadData:m().func,isOpen:m().bool,id:m().number,name:m().string,baseURL:m().string,setData:m().func};const N=M;var U=n(73448),T=n(15265),k=n(75824),_=[{label:"Name",type:"text"}],z=function(e){var t=e.data,n=e.count,r=e.isLoading,a=e.hasError,o=e.fetchRepos,i=e.closeModal,s=e.hasModalSubmitted,c=e.setHasModalSubmitted,u=t.map((function(e){var t=e.ID,n=e.Name,r=e.URL;return{rowInfo:{id:t,repoName:n,repoBaseURL:r},cells:[{title:l().createElement(l().Fragment,null,l().createElement(D.x,{className:"pf-u-mb-xs",component:D.q.p},l().createElement(k.u,{content:l().createElement("div",null,n)},l().createElement("span",null,(0,b.aS)(n,20)))),l().createElement(D.x,{component:D.q.a,href:r,target:"_blank",rel:"noopener noreferrer"},r," ",l().createElement(T.ZP,{className:"pf-u-ml-sm"})))}]}}));return l().createElement(l().Fragment,null,l().createElement(U.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:o,filters:_,tableData:{count:n,data:t,isLoading:r,hasError:a},columnNames:[{title:"Name",type:"name",sort:!0}],rows:u,actionResolver:function(e){if(!e.rowInfo)return[];var t=e.rowInfo,n=t.id,r=t.repoName,a=t.repoBaseURL;return[{title:"Edit",onClick:function(){return i({type:"edit",id:n,name:r,baseURL:a})}},{title:"Remove",onClick:function(){return i({type:"remove",id:n,name:r,baseURL:a})}}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},toolbarButtons:[{title:"Add repository",click:function(){return i({type:"add"})}}],hasModalSubmitted:s,setHasModalSubmitted:c}))};z.propTypes={data:m().array,count:m().number,isLoading:m().bool,hasError:m().bool,fetchRepos:m().func,closeModal:m().func,hasModalSubmitted:m().bool,setHasModalSubmitted:m().func};const A=z;var V=n(89376),C=n(39173);const F=function(){return l().createElement(V.Z,null,l().createElement(l().Fragment,null,l().createElement(C.Z,{title:"Custom repositories"}),l().createElement("p",{className:"pf-u-mt-sm"},"Add custom repositories to build RHEL for Edge images with additional packages.")))};var H=n(96094),q=n(96620),B=n(3035),Q=n(47173),G=n(9947),K=n(38424),$=n(75106),X=n(38779);const Y=function(){return l().createElement(l().Fragment,null,l().createElement(V.Z,null,l().createElement(L.D,null,l().createElement(D.x,{component:"h1",id:"custom-repos-title"},"Custom repositories"))),l().createElement(G.u,{id:"moved-state"},l().createElement(K.k,{id:"external-link-icon",icon:T.ZP}),l().createElement(X.D,{id:"moved-state-title",headingLevel:"h4",size:"xl"},"Your repositories have moved!"),l().createElement($.B,{id:"moved-state-body"},"Custom repositories have been combined so that you can use them across all of the console."),l().createElement(Q.zx,{id:"moved-state-button",variant:"primary",component:"a",target:"_blank",href:"https://".concat(window.location.host,"/settings/content")},"Go to custom repositories")))};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ee=function(){var e=(0,b.gV)("edge-management.custom_repos_ui"),t=(0,q.useLocation)().search,n=(0,H.Z)({api:function(e){var t=e.query;return(0,p.dd)({imageID:"",query:t})},tableReload:!0}),i=(0,o.Z)(n,2),u=i[0],d=i[1],m=u.data,f=u.isLoading,h=u.hasError,v=(0,c.useState)({isOpen:{add:!1,edit:!1,remove:!1},id:null,name:"",baseURL:""}),y=(0,o.Z)(v,2),g=y[0],E=y[1],x=(0,c.useState)(!1),R=(0,o.Z)(x,2),Z=R[0],L=R[1],D=function(e){var t=e.type,n=e.id,r=void 0===n?null:n,o=e.name,i=void 0===o?"":o,s=e.baseURL,c=void 0===s?"":s;E((function(e){return W(W({},e),{},{id:r,name:i,baseURL:c,isOpen:W(W({},e.isOpen),{},(0,a.Z)({},t,!e.isOpen[t]))})}))},j=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:L(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l().createElement(l().Fragment,null,e?l().createElement(Y,null):l().createElement(l().Fragment,null,l().createElement(F,null),l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},l().createElement(l().Fragment,null,(0,b.G0)(f,null==m?void 0:m.count,t)?l().createElement(B.Z,{icon:"repository",title:"Add a custom repository",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Add repository",click:function(){return D({type:"add"})}}}):l().createElement(A,{data:(null==m?void 0:m.data)||[],count:null==m?void 0:m.count,closeModal:D,isLoading:f,hasError:h,fetchRepos:d,hasModalSubmitted:Z,setHasModalSubmitted:L})),l().createElement(O,{isOpen:g.isOpen.add,closeModal:D,reloadData:j}),l().createElement(w,{isOpen:g.isOpen.edit,id:g.id,name:g.name,baseURL:g.baseURL,closeModal:D,reloadData:j}),l().createElement(N,{isOpen:g.isOpen.remove,id:g.id,name:g.name,baseURL:g.baseURL,closeModal:D,reloadData:j}))))}},11977:(e,t,n)=>{"use strict";n.d(t,{Es:()=>s,bB:()=>l,dd:()=>o,eS:()=>i,gK:()=>c});var r=n(66702),a=n(93454),o=function(e){var t=e.imageID,n=void 0===t?"":t,o=e.query,i=(0,r.Vs)(o);return a.instance.get("".concat(r.Ds,"/thirdpartyrepo?").concat(n?"imageID=".concat(n,"&"):"").concat(i))},i=function(e){return a.instance.post("".concat(r.Ds,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},s=function(e){return a.instance.put("".concat(r.Ds,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},c=function(e){return a.instance.delete("".concat(r.Ds,"/thirdpartyrepo/").concat(e))},l=function(e){return a.instance.get("".concat(r.Ds,"/thirdpartyrepo/checkName/").concat(e))}},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(15861),a=n(4942),o=n(87462),i=n(64687),s=n.n(i),c=n(92950),l=n.n(c),u=n(80236),p=n(79442),d=n(67850),m=n(41387),f=n(45697),b=n.n(f);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,i=e.closeModal,c=e.submitLabel,f=e.schema,b=e.initialValues,h=e.variant,y=e.reloadData,g=e.size,E=e.onSubmit,O=e.additionalMappers,x=e.validatorMapper;return l().createElement(u.u,{variant:null!=g?g:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:i},l().createElement(p.Z,{schema:f,validatorMapper:x,FormTemplate:function(e){return l().createElement(d.ZP,(0,o.Z)({},e,{submitLabel:c,disableSubmit:["invalid"],buttonsProps:{submit:{variant:h}}}))},initialValues:b,componentMapper:O?v(v({},O),m.ZP):m.ZP,onSubmit:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:setTimeout((0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),i();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return i()}}))};y.propTypes={isOpen:b().bool,title:b().string,closeModal:b().func,reloadData:b().func,submitLabel:b().string,schema:b().object,initialValues:b().object,variant:b().string,onSubmit:b().func,size:b().string,additionalMappers:b().object,titleIconVariant:b().any,validatorMapper:b().object};const g=y},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(4942),a=n(15861),o=n(64687),i=n.n(o),s=n(83215);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n){var r,o,c=null===(r=n)||void 0===r?void 0:r.onSuccess,u=null===(o=n)||void 0===o?void 0:o.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var p=function(){var r=(0,a.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,u&&e(l({},(0,s.wN)(l({variant:"info"},n.onInfo)))),c&&e(l({},(0,s.wN)(l({variant:"success"},n.onSuccess)))),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),e(l({},(0,s.wN)(l(l({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return p()}},21078:(e,t,n)=>{var r=n(62488),a=n(37285);e.exports=function e(t,n,o,i,s){var c=-1,l=t.length;for(o||(o=a),s||(s=[]);++c<l;){var u=t[c];n>0&&o(u)?n>1?e(u,n-1,o,i,s):r(s,u):i||(s[s.length]=u)}return s}},37285:(e,t,n)=>{var r=n(62705),a=n(35694),o=n(1469),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(i&&e&&e[i])}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},81754:()=>{},10497:()=>{},54476:()=>{},80897:()=>{},40837:()=>{},71338:()=>{},98379:()=>{},91993:()=>{},99624:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},40209:()=>{},38299:()=>{},72816:()=>{},45987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(63366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
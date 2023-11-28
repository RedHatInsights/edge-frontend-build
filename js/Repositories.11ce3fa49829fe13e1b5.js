(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1551,7633,7563],{36621:(e,t,n)=>{"use strict";n.d(t,{p:()=>s});var r=n(70655),a=n(92950),o=n(49945),i=n(38296);const s=e=>{var{children:t,className:n,component:s="div",id:c,isLiveRegion:l=!1}=e,u=(0,r.__rest)(e,["children","className","component","id","isLiveRegion"]);const p=s;return a.createElement(p,Object.assign({id:c,className:(0,i.i)(o.Z.helperText,n)},l&&{"aria-live":"polite"},u),t)};s.displayName="HelperText"},65673:(e,t,n)=>{"use strict";n.d(t,{u:()=>m});var r=n(70655),a=n(92950),o=n(49945),i=n(38296),s=n(80965),c=n(69957),l=n(68778),u=n(43047);const p={default:"",indeterminate:o.Z.modifiers.indeterminate,warning:o.Z.modifiers.warning,success:o.Z.modifiers.success,error:o.Z.modifiers.error},m=e=>{var{children:t,className:n,component:m="div",variant:d="default",icon:f,isDynamic:b=!1,hasIcon:v=b,id:h,screenReaderText:g=`${d} status`}=e,y=(0,r.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const E=m;return a.createElement(E,Object.assign({className:(0,i.i)(o.Z.helperTextItem,p[d],b&&o.Z.modifiers.dynamic,n),id:h},y),f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},f),v&&!f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},("default"===d||"indeterminate"===d)&&a.createElement(s.ZP,null),"warning"===d&&a.createElement(c.ZP,null),"success"===d&&a.createElement(l.ZP,null),"error"===d&&a.createElement(u.ZP,null)),a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemText)},t,b&&a.createElement("span",{className:"pf-u-screen-reader"},": ",g,";")))};m.displayName="HelperTextItem"},78057:(e,t,n)=>{"use strict";n.d(t,{J:()=>c});var r=n(70655),a=n(92950);n(44839);const o={icon:"pf-c-icon",iconContent:"pf-c-icon__content",iconProgress:"pf-c-icon__progress",modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl",inProgress:"pf-m-in-progress",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",info:"pf-m-info",default:"pf-m-default"},spinner:"pf-c-spinner"};var i=n(38296),s=n(37619);const c=e=>{var{children:t,className:n,progressIcon:c,size:l,iconSize:u,progressIconSize:p,status:m,isInline:d=!1,isInProgress:f=!1,defaultProgressArialabel:b="Loading..."}=e,v=(0,r.__rest)(e,["children","className","progressIcon","size","iconSize","progressIconSize","status","isInline","isInProgress","defaultProgressArialabel"]);const h=c||a.createElement(s.$,{diameter:"1em",isSVG:!0,"aria-label":b});return a.createElement("span",Object.assign({className:(0,i.i)(o.icon,d&&o.modifiers.inline,f&&o.modifiers.inProgress,o.modifiers[l],n)},v),a.createElement("span",{className:(0,i.i)(o.iconContent,o.modifiers[u],o.modifiers[m])},t),f&&a.createElement("span",{className:(0,i.i)(o.iconProgress,o.modifiers[p],n)},h))};c.displayName="Icon"},76889:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,_t:()=>a,k1:()=>o});var r=n(40400);const a={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},80965:(e,t,n)=>{"use strict";n.d(t,{V_:()=>o,ZP:()=>i,jm:()=>a});var r=n(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},35183:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const r=n(70655),a=r.__importStar(n(92950));var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o=t.IconSize||(t.IconSize={})),t.getSize=e=>{switch(e){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:s=0,width:c,height:l,svgPath:u}){var p;return p=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:o,color:i,title:p,noVerticalAlign:m}=e,d=r.__rest(e,["size","color","title","noVerticalAlign"]),f=Boolean(p),b=t.getSize(o),v=-.125*Number.parseFloat(b),h=m?null:{verticalAlign:`${v}em`},g=[n,s,c,l].join(" ");return a.createElement("svg",Object.assign({style:h,fill:i,height:b,width:b,viewBox:g,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},d),f&&a.createElement("title",{id:this.id},p),a.createElement("path",{d:u}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},p}},19694:(e,t,n)=>{"use strict";t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=n(35183).createIcon(t.RI),t.ZP=t.LP},49945:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(71338);const r={helperText:"pf-c-helper-text",helperTextItem:"pf-c-helper-text__item",helperTextItemIcon:"pf-c-helper-text__item-icon",helperTextItemText:"pf-c-helper-text__item-text",modifiers:{indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-theme-dark"}},80365:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>re});var r=n(15861),a=n(4942),o=n(29439),i=n(64687),s=n.n(i),c=n(92950),l=n.n(c),u=n(60722),p=n(11977),m=n(45697),d=n.n(m),f=n(64124),b=n(48903),v=n(32349),h=n(77760),g=function(){var e=(0,r.Z)(s().mark((function e(){var t,n=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.length>0&&void 0!==n[0]?n[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,p.bB)(t);case 5:if(!e.sent.data.isValid){e.next=8;break}throw"Repository name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y={repoName:function(){return g}},E=function(e){var t=e.isOpen,n=e.closeModal,r=e.reloadData,a=(0,h.useDispatch)(),o={fields:[{component:"plain-text",name:"title",label:"Link to a custom repository to add packages to RHEL for Edge images."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:"repoName"},{type:f.Z.REQUIRED},{type:f.Z.MAX_LENGTH,threshold:50},b.qg]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:"Enter the baseURL for the custom repository.",isRequired:!0,validate:[{type:f.Z.REQUIRED},{type:f.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Add repository",isOpen:t,closeModal:function(){return n({type:"add"})},submitLabel:"Add",schema:o,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create a repo"}};(0,v.Z)(a,(function(){return(0,p.eS)(e)}),t)},reloadData:r,validatorMapper:y})};E.propTypes={closeModal:d().func,reloadData:d().func,isOpen:d().bool};const O=E;var x=n(36621),w=n(65673),Z=function(e){var t=e.closeModal,n=e.isOpen,r=e.id,a=e.name,o=e.baseURL,i=e.reloadData,s=(0,h.useDispatch)(),c={fields:[{component:"plain-text",name:"title",label:"Update information about this custom repository."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:f.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:l().createElement(x.p,null,l().createElement(w.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.")),isRequired:!0,validate:[{type:f.Z.REQUIRED},{type:f.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Edit repository",isOpen:n,closeModal:function(){return t({type:"edit"})},submitLabel:"Update",schema:c,initialValues:{id:r,name:a,baseURL:o},onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been edited successfully")},onError:{title:"Error",description:"Failed to edit a repository"}};(0,v.Z)(s,(function(){return(0,p.Es)(e)}),t)},reloadData:i})};Z.propTypes={closeModal:d().func,reloadData:d().func,isOpen:d().bool,id:d().number,name:d().string,baseURL:d().string,setData:d().func};const R=Z;var S=n(68774),P=n(68340),I=n(19694),j=n(37655),D=function(e){var t=e.label,n=e.text;return l().createElement(S.D,null,l().createElement(P.x,{component:"b"},t),l().createElement(P.x,null,n))};D.propTypes={label:d().string,text:d().string};var L=function(){return l().createElement(I.ZP,{color:j.Z.value})},N=function(e){var t=e.closeModal,n=e.id,r=e.isOpen,a=e.name,o=e.baseURL,i=e.reloadData,s=(0,h.useDispatch)(),c={fields:[{component:"plain-text",name:"description",label:"Removing a repository could affect your ability to update images."},{component:"plain-text",name:"name",label:l().createElement(D,{label:"Name",text:a})},{component:"plain-text",name:"baseURL",label:l().createElement(D,{label:"BaseURL",text:o})}]};return l().createElement(u.Z,{title:"Remove repository",titleIconVariant:L,isOpen:r,closeModal:function(){return t({type:"remove"})},submitLabel:"Remove",schema:c,initialValues:{id:n},variant:"danger",onSubmit:function(e){var t=e.id,n={onSuccess:{title:"Success",description:"".concat(a," has been removed successfully")},onError:{title:"Error",description:"Failed to remove a repository"}};(0,v.Z)(s,(function(){return(0,p.gK)(t)}),n)},reloadData:i})};N.propTypes={closeModal:d().func,reloadData:d().func,isOpen:d().bool,id:d().number,name:d().string,baseURL:d().string,setData:d().func};const _=N;var M=n(21061),T=n(15265),U=n(75824),k=[{label:"Name",type:"text"}],z=function(e){var t=e.data,n=e.count,r=e.isLoading,a=e.hasError,o=e.fetchRepos,i=e.closeModal,s=e.hasModalSubmitted,c=e.setHasModalSubmitted,u=t.map((function(e){var t=e.ID,n=e.Name,r=e.URL;return{rowInfo:{id:t,repoName:n,repoBaseURL:r},cells:[{title:l().createElement(l().Fragment,null,l().createElement(P.x,{className:"pf-u-mb-xs",component:P.q.p},l().createElement(U.u,{content:l().createElement("div",null,n)},l().createElement("span",null,(0,b.aS)(n,20)))),l().createElement(P.x,{component:P.q.a,href:r,target:"_blank",rel:"noopener noreferrer"},r," ",l().createElement(T.ZP,{className:"pf-u-ml-sm"})))}]}}));return l().createElement(l().Fragment,null,l().createElement(M.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:o,filters:k,tableData:{count:n,data:t,isLoading:r,hasError:a},columnNames:[{title:"Name",type:"name",sort:!0}],rows:u,actionResolver:function(e){if(!e.rowInfo)return[];var t=e.rowInfo,n=t.id,r=t.repoName,a=t.repoBaseURL;return[{title:"Edit",onClick:function(){return i({type:"edit",id:n,name:r,baseURL:a})}},{title:"Remove",onClick:function(){return i({type:"remove",id:n,name:r,baseURL:a})}}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},toolbarButtons:[{title:"Add repository",click:function(){return i({type:"add"})}}],hasModalSubmitted:s,setHasModalSubmitted:c}))};z.propTypes={data:d().array,count:d().number,isLoading:d().bool,hasError:d().bool,fetchRepos:d().func,closeModal:d().func,hasModalSubmitted:d().bool,setHasModalSubmitted:d().func};const A=z;var C=n(89376),V=n(39173);const q=function(){return l().createElement(C.Z,null,l().createElement(l().Fragment,null,l().createElement(V.Z,{title:"Custom repositories"}),l().createElement("p",{className:"pf-u-mt-sm"},"Add custom repositories to build RHEL for Edge images with additional packages.")))};var F=n(96094),H=n(68519),B=n(3035),W=n(47173),$=n(9947),G=n(38424),Q=n(75106),J=n(35293),K=n(78057),X=n(38779);const Y=function(){return l().createElement(l().Fragment,null,l().createElement(C.Z,null,l().createElement(S.D,null,l().createElement(P.x,{component:"h1",id:"custom-repos-title"},"Custom repositories"))),l().createElement($.u,{id:"moved-state"},l().createElement(G.k,{id:"external-link-icon",icon:T.ZP}),l().createElement(X.D,{id:"moved-state-title",headingLevel:"h4",size:"xl"},"Custom repositories have moved"),l().createElement(Q.B,{id:"moved-state-body"},"You can now use your custom repositories across the console. Access them on the Repositories page."),l().createElement(W.zx,{id:"moved-state-button",variant:"primary",component:"a",target:"_blank",href:"https://".concat(window.location.host,"/preview/insights/content")},"Go to Repositories"),l().createElement(J.i,null,l().createElement(W.zx,{id:"moved-state-link",variant:"link",component:"a",target:"_blank",href:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index#proc_rhem-create-custom-repos"},"Learn more about custom repositories",l().createElement(K.J,{style:{paddingLeft:"1rem"},iconSize:"md",size:"lg",isInline:!0},l().createElement(T.ZP,null))))))};var ee=n(55140);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const re=function(){var e=(0,ee.Z)(),t=(0,b.gV)("edge-management.custom_repos_ui");(0,c.useEffect)((function(){var t;null==e||null===(t=e.updateDocumentTitle)||void 0===t||t.call(e,"Custom Repositories - Manage Images | Edge management")}),[e]);var n=(0,H.TH)().search,i=(0,F.Z)({api:function(e){var t=e.query;return(0,p.dd)({imageID:"",query:t})},tableReload:!0}),u=(0,o.Z)(i,2),m=u[0],d=u[1],f=m.data,v=m.isLoading,h=m.hasError,g=(0,c.useState)({isOpen:{add:!1,edit:!1,remove:!1},id:null,name:"",baseURL:""}),y=(0,o.Z)(g,2),E=y[0],x=y[1],w=(0,c.useState)(!1),Z=(0,o.Z)(w,2),S=Z[0],P=Z[1],I=function(e){var t=e.type,n=e.id,r=void 0===n?null:n,o=e.name,i=void 0===o?"":o,s=e.baseURL,c=void 0===s?"":s;x((function(e){return ne(ne({},e),{},{id:r,name:i,baseURL:c,isOpen:ne(ne({},e.isOpen),{},(0,a.Z)({},t,!e.isOpen[t]))})}))},j=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:P(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l().createElement(l().Fragment,null,t?l().createElement(Y,null):l().createElement(l().Fragment,null,l().createElement(q,null),l().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},l().createElement(l().Fragment,null,(0,b.G0)(v,null==f?void 0:f.count,n)?l().createElement(B.Z,{icon:"repository",title:"Add a custom repository",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Add repository",click:function(){return I({type:"add"})}}}):l().createElement(A,{data:(null==f?void 0:f.data)||[],count:null==f?void 0:f.count,closeModal:I,isLoading:v,hasError:h,fetchRepos:d,hasModalSubmitted:S,setHasModalSubmitted:P})),l().createElement(O,{isOpen:E.isOpen.add,closeModal:I,reloadData:j}),l().createElement(R,{isOpen:E.isOpen.edit,id:E.id,name:E.name,baseURL:E.baseURL,closeModal:I,reloadData:j}),l().createElement(_,{isOpen:E.isOpen.remove,id:E.id,name:E.name,baseURL:E.baseURL,closeModal:I,reloadData:j}))))}},11977:(e,t,n)=>{"use strict";n.d(t,{Es:()=>s,bB:()=>l,dd:()=>o,eS:()=>i,gK:()=>c});var r=n(66702),a=n(93454),o=function(e){var t=e.imageID,n=void 0===t?"":t,o=e.query,i=(0,r.Vs)(o);return a.instance.get("".concat(r.Ds,"/thirdpartyrepo?").concat(n?"imageID=".concat(n,"&"):"").concat(i))},i=function(e){return a.instance.post("".concat(r.Ds,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},s=function(e){return a.instance.put("".concat(r.Ds,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},c=function(e){return a.instance.delete("".concat(r.Ds,"/thirdpartyrepo/").concat(e))},l=function(e){return a.instance.get("".concat(r.Ds,"/thirdpartyrepo/checkName/").concat(e))}},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(15861),a=n(4942),o=n(87462),i=n(64687),s=n.n(i),c=n(92950),l=n.n(c),u=n(80236),p=n(79442),m=n(67850),d=n(41387),f=n(45697),b=n.n(f);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,i=e.closeModal,c=e.submitLabel,f=e.schema,b=e.initialValues,v=e.variant,g=e.reloadData,y=e.size,E=e.onSubmit,O=e.additionalMappers,x=e.validatorMapper;return l().createElement(u.u,{variant:null!=y?y:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:i},l().createElement(p.Z,{schema:f,validatorMapper:x,FormTemplate:function(e){return l().createElement(m.ZP,(0,o.Z)({},e,{submitLabel:c,disableSubmit:["invalid"],buttonsProps:{submit:{variant:v}}}))},initialValues:b,componentMapper:O?h(h({},O),d.ZP):d.ZP,onSubmit:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:setTimeout((0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),i();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return i()}}))};g.propTypes={isOpen:b().bool,title:b().string,closeModal:b().func,reloadData:b().func,submitLabel:b().string,schema:b().object,initialValues:b().object,variant:b().string,onSubmit:b().func,size:b().string,additionalMappers:b().object,titleIconVariant:b().any,validatorMapper:b().object};const y=g},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(4942),a=n(15861),o=n(29439),i=n(64687),s=n.n(i),c=n(83215),l=n(92950),u=n(77760);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=function(e){var t,n=e.api,r=e.id,i=void 0===r?null:r,p=e.statusMessages,d=e.tableReload,f=void 0!==d&&d,b=(0,u.useDispatch)(),v=(0,l.useState)([]),h=(0,o.Z)(v,2),g=h[0],y=h[1],E=(0,l.useState)(!0),O=(0,o.Z)(E,2),x=O[0],w=O[1],Z=(0,l.useState)(!1),R=(0,o.Z)(Z,2),S=R[0],P=R[1],I=(0,l.useState)((function(){return n})),j=(0,o.Z)(I,2),D=j[0],L=j[1],N=null===(t=p)||void 0===t?void 0:t.onSuccess;p||(p={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var _=function(){var e=(0,a.Z)(s().mark((function e(){var t,n,r=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",w(!0),e.prev=2,e.next=5,D({id:i,query:t});case 5:n=e.sent,y(n),N&&b(m({},(0,c.wN)(m({variant:"success"},p.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),P(!0),b(m({},(0,c.wN)(m({variant:"danger"},p.onError))));case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){f||_()}),[]),[{data:g,isLoading:x,hasError:S},_,D,L]}},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(4942),a=n(15861),o=n(64687),i=n.n(o),s=n(83215);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,r){var o,c,u,p=null===(o=n)||void 0===o?void 0:o.onSuccess,m=null===(c=n)||void 0===c?void 0:c.onInfo,d=null===(u=n)||void 0===u?void 0:u.onWarning;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var f=function(){var o=(0,a.Z)(i().mark((function a(){var o;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t();case 3:return o=a.sent,m&&(r?r.hasInfo(n.onInfo):e(l({},(0,s.wN)(l({variant:"info"},n.onInfo))))),p&&(r?r.hasSuccess(n.onSuccess):e(l({},(0,s.wN)(l({variant:"success"},n.onSuccess))))),d&&(r?r.hasWarning(n.onWarning):e(l({},(0,s.wN)(l({variant:"warning"},n.onWarning))))),a.abrupt("return",o);case 10:return a.prev=10,a.t0=a.catch(0),r?r.err(n.onError,a.t0):e(l({},(0,s.wN)(l(l({variant:"danger"},n.onError),{},{description:null!==a.t0&&void 0!==a.t0&&a.t0.Title?"".concat(n.onError.description,": ").concat(a.t0.Title):n.onError.description})))),a.abrupt("return",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return o.apply(this,arguments)}}();return f()}},27561:(e,t,n)=>{var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var r=n(13218),a=n(7771),o=n(14841),i=Math.max,s=Math.min;e.exports=function(e,t,n){var c,l,u,p,m,d,f=0,b=!1,v=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=c,r=l;return c=l=void 0,f=t,p=e.apply(r,n)}function y(e){return f=e,m=setTimeout(O,t),b?g(e):p}function E(e){var n=e-d;return void 0===d||n>=t||n<0||v&&e-f>=u}function O(){var e=a();if(E(e))return x(e);m=setTimeout(O,function(e){var n=t-(e-d);return v?s(n,u-(e-f)):n}(e))}function x(e){return m=void 0,h&&c?g(e):(c=l=void 0,p)}function w(){var e=a(),n=E(e);if(c=arguments,l=this,d=e,n){if(void 0===m)return y(d);if(v)return clearTimeout(m),m=setTimeout(O,t),g(d)}return void 0===m&&(m=setTimeout(O,t)),p}return t=o(t)||0,r(n)&&(b=!!n.leading,u=(v="maxWait"in n)?i(o(n.maxWait)||0,t):u,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==m&&clearTimeout(m),f=0,c=d=l=m=void 0},w.flush=function(){return void 0===m?p:x(a())},w}},85564:(e,t,n)=>{var r=n(21078);e.exports=function(e){return null!=e&&e.length?r(e,1):[]}},7739:(e,t,n)=>{var r=n(89465),a=n(55189),o=Object.prototype.hasOwnProperty,i=a((function(e,t,n){o.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=i},7771:(e,t,n)=>{var r=n(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,n)=>{var r=n(27561),a=n(13218),o=n(33448),i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},81754:()=>{},10497:()=>{},10108:()=>{},54476:()=>{},80897:()=>{},40837:()=>{},71338:()=>{},44839:()=>{},98379:()=>{},91993:()=>{},99624:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},40209:()=>{},38299:()=>{},72816:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},45987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(63366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30907),a=n(59199),o=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/Repositories.ee007a8922486efc04be5bcda998d2b6.js.map
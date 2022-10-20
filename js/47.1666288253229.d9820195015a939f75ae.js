"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[47],{19694:(e,t,n)=>{t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=n(35183).createIcon(t.RI),t.ZP=t.LP},39173:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(93264),a=n.n(r),o=n(45697),i=n.n(o),s=n(94184),c=n.n(s),l=n(38779),u=function(e){var t=e.className,n=e.title,r=c()(t);return a().createElement(l.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const p=u;u.propTypes={title:i().node.isRequired,className:i().string}},7741:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var r=n(15861),a=n(4942),o=n(29439),i=n(87757),s=n.n(i),c=n(93264),l=n.n(c),u=n(60722),p=n(11977),d=n(45697),m=n.n(d),f=n(64124),b=n(48903),y=n(32349),v=n(28216),h=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.bB)(t);case 2:if(!e.sent.data.isValid){e.next=5;break}return e.abrupt("return","Repository name already exists");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.isOpen,n=e.closeModal,r=e.reloadData,a=(0,v.I0)(),o={fields:[{component:"plain-text",name:"title",label:"Link to a custom repository to add packages to RHEL for Edge images."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:f.Z.REQUIRED},b.qg,h]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:"Enter the baseURL for the custom repository.",isRequired:!0,validate:[{type:f.Z.REQUIRED},{type:f.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Add repository",isOpen:t,closeModal:function(){return n({type:"add"})},submitLabel:"Add",schema:o,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create a repo"}};(0,y.Z)(a,(function(){return(0,p.eS)(e)}),t)},reloadData:r})};E.propTypes={closeModal:m().func,reloadData:m().func,isOpen:m().bool};const g=E;var O=n(36621),R=n(65673),L=function(e){var t=e.closeModal,n=e.isOpen,r=e.id,a=e.name,o=e.baseURL,i=e.reloadData,s=(0,v.I0)(),c={fields:[{component:"plain-text",name:"title",label:"Update information about this custom repository."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:f.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:l().createElement(O.p,null,l().createElement(R.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.")),isRequired:!0,validate:[{type:f.Z.REQUIRED},{type:f.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Edit repository",isOpen:n,closeModal:function(){return t({type:"edit"})},submitLabel:"Update",schema:c,initialValues:{id:r,name:a,baseURL:o},onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been edited successfully")},onError:{title:"Error",description:"Failed to edit a repository"}};(0,y.Z)(s,(function(){return(0,p.Es)(e)}),t)},reloadData:i})};L.propTypes={closeModal:m().func,reloadData:m().func,isOpen:m().bool,id:m().number,name:m().string,baseURL:m().string,setData:m().func};const D=L;var w=n(68774),Z=n(68340),x=n(19694),S=n(37655),U=function(e){var t=e.label,n=e.text;return l().createElement(w.D,null,l().createElement(Z.x,{component:"b"},t),l().createElement(Z.x,null,n))};U.propTypes={label:m().string,text:m().string};var j=function(){return l().createElement(x.ZP,{color:S.Z.value})},P=function(e){var t=e.closeModal,n=e.id,r=e.isOpen,a=e.name,o=e.baseURL,i=e.reloadData,s=(0,v.I0)(),c={fields:[{component:"plain-text",name:"description",label:"Removing a repository could affect your ability to update images."},{component:"plain-text",name:"name",label:l().createElement(U,{label:"Name",text:a})},{component:"plain-text",name:"baseURL",label:l().createElement(U,{label:"BaseURL",text:o})}]};return l().createElement(u.Z,{title:"Remove repository",titleIconVariant:j,isOpen:r,closeModal:function(){return t({type:"remove"})},submitLabel:"Remove",schema:c,initialValues:{id:n},variant:"danger",onSubmit:function(e){var t=e.id,n={onSuccess:{title:"Success",description:"".concat(a," has been removed successfully")},onError:{title:"Error",description:"Failed to remove a repository"}};(0,y.Z)(s,(function(){return(0,p.gK)(t)}),n)},reloadData:i})};P.propTypes={closeModal:m().func,reloadData:m().func,isOpen:m().bool,id:m().number,name:m().string,baseURL:m().string,setData:m().func};const M=P;var k=n(73448),I=n(15265),N=n(75824),T=[{label:"Name",type:"text"}],q=function(e){var t=e.data,n=e.count,r=e.isLoading,a=e.hasError,o=e.fetchRepos,i=e.closeModal,s=e.hasModalSubmitted,c=e.setHasModalSubmitted,u=t.map((function(e){var t=e.ID,n=e.Name,r=e.URL;return{rowInfo:{id:t,repoName:n,repoBaseURL:r},cells:[{title:l().createElement(l().Fragment,null,l().createElement(Z.x,{className:"pf-u-mb-xs",component:Z.q.p},l().createElement(N.u,{content:l().createElement("div",null,n)},l().createElement("span",null,(0,b.aS)(n,20)))),l().createElement(Z.x,{component:Z.q.a,href:r,target:"_blank",rel:"noopener noreferrer"},r," ",l().createElement(I.ZP,{className:"pf-u-ml-sm"})))}]}}));return l().createElement(l().Fragment,null,l().createElement(k.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:o,filters:T,tableData:{count:n,data:t,isLoading:r,hasError:a},columnNames:[{title:"Name",type:"name",sort:!0}],rows:u,actionResolver:function(e){if(!e.rowInfo)return[];var t=e.rowInfo,n=t.id,r=t.repoName,a=t.repoBaseURL;return[{title:"Edit",onClick:function(){return i({type:"edit",id:n,name:r,baseURL:a})}},{title:"Remove",onClick:function(){return i({type:"remove",id:n,name:r,baseURL:a})}}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},toolbarButtons:[{title:"Add repository",click:function(){return i({type:"add"})}}],hasModalSubmitted:s,setHasModalSubmitted:c}))};q.propTypes={data:m().array,count:m().number,isLoading:m().bool,hasError:m().bool,fetchRepos:m().func,closeModal:m().func,hasModalSubmitted:m().bool,setHasModalSubmitted:m().func};const A=q;var V=n(86350),C=n(48716),F=n(39173);const H=function(){return l().createElement(C.Z,null,l().createElement(l().Fragment,null,l().createElement(F.Z,{title:"Custom repositories"}),l().createElement("p",{className:"pf-u-mt-sm"},"Add custom repositories to build RHEL for Edge images with additional packages.")))};var _=n(96094),B=n(75662),z=n(3035);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const G=function(){var e=(0,B.useHistory)(),t=(0,_.Z)({api:function(e){var t=e.query;return(0,p.dd)({imageID:"",query:t})},tableReload:!0}),n=(0,o.Z)(t,2),i=n[0],u=n[1],d=i.data,m=i.isLoading,f=i.hasError,y=(0,c.useState)({isOpen:{add:!1,edit:!1,remove:!1},id:null,name:"",baseURL:""}),v=(0,o.Z)(y,2),h=v[0],E=v[1],O=(0,c.useState)(!1),R=(0,o.Z)(O,2),L=R[0],w=R[1],Z=function(e){var t=e.type,n=e.id,r=void 0===n?null:n,o=e.name,i=void 0===o?"":o,s=e.baseURL,c=void 0===s?"":s;E((function(e){return K(K({},e),{},{id:r,name:i,baseURL:c,isOpen:K(K({},e.isOpen),{},(0,a.Z)({},t,!e.isOpen[t]))})}))},x=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:w(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l().createElement(l().Fragment,null,l().createElement(H,null),l().createElement(V.Z,null,l().createElement(l().Fragment,null,(0,b.A8)(m,null==d?void 0:d.count,e)?l().createElement(z.Z,{icon:"repository",title:"Add a custom repository",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Add repository",click:function(){return Z({type:"add"})}}}):l().createElement(A,{data:(null==d?void 0:d.data)||[],count:null==d?void 0:d.count,closeModal:Z,isLoading:m,hasError:f,fetchRepos:u,hasModalSubmitted:L,setHasModalSubmitted:w})),l().createElement(g,{isOpen:h.isOpen.add,closeModal:Z,reloadData:x}),l().createElement(D,{isOpen:h.isOpen.edit,id:h.id,name:h.name,baseURL:h.baseURL,closeModal:Z,reloadData:x}),l().createElement(M,{isOpen:h.isOpen.remove,id:h.id,name:h.name,baseURL:h.baseURL,closeModal:Z,reloadData:x})))}},11977:(e,t,n)=>{n.d(t,{dd:()=>o,eS:()=>i,Es:()=>s,gK:()=>c,bB:()=>l});var r=n(66702),a=n(93454),o=function(e){var t=e.imageID,n=void 0===t?"":t,o=e.query,i=(0,r.Vs)(o);return a.eE.get("".concat(r.Ds,"/thirdpartyrepo?").concat(n?"imageID=".concat(n,"&"):"").concat(i))},i=function(e){return a.eE.post("".concat(r.Ds,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},s=function(e){return a.eE.put("".concat(r.Ds,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},c=function(e){return a.eE.delete("".concat(r.Ds,"/thirdpartyrepo/").concat(e))},l=function(e){return a.eE.get("".concat(r.Ds,"/thirdpartyrepo/checkName/").concat(e))}},60722:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(15861),a=n(4942),o=n(87462),i=n(87757),s=n.n(i),c=n(93264),l=n.n(c),u=n(80236),p=n(79442),d=n(67850),m=n(41387),f=n(45697),b=n.n(f);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,i=e.closeModal,c=e.submitLabel,f=e.schema,b=e.initialValues,y=e.variant,h=e.reloadData,E=e.size,g=e.onSubmit,O=e.additionalMappers;return l().createElement(u.u,{variant:null!=E?E:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:i},l().createElement(p.Z,{schema:f,FormTemplate:function(e){return l().createElement(d.ZP,(0,o.Z)({},e,{submitLabel:c,disableSubmit:["invalid"],buttonsProps:{submit:{variant:y}}}))},initialValues:b,componentMapper:O?v(v({},O),m.ZP):m.ZP,onSubmit:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:setTimeout((0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),i();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return i()}}))};h.propTypes={isOpen:b().bool,title:b().string,closeModal:b().func,reloadData:b().func,submitLabel:b().string,schema:b().object,initialValues:b().object,variant:b().string,onSubmit:b().func,size:b().string,additionalMappers:b().object,titleIconVariant:b().any};const E=h},32349:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(4942),a=n(15861),o=n(87757),i=n.n(o),s=n(83215);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n){var r,o=null===(r=n)||void 0===r?void 0:r.onSuccess;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var c=function(){var r=(0,a.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,o&&e(l({},(0,s.wN)(l({variant:"success"},n.onSuccess)))),r.abrupt("return",a);case 8:return r.prev=8,r.t0=r.catch(0),e(l({},(0,s.wN)(l(l({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return c()}}}]);
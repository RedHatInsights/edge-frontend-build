"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[4047],{19694:(e,t,n)=>{t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=n(35183).createIcon(t.RI),t.ZP=t.LP},39173:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(75418),a=n.n(r),o=n(45697),i=n.n(o),c=n(94184),s=n.n(c),l=n(38779),u=function(e){var t=e.className,n=e.title,r=s()(t);return a().createElement(l.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const p=u;u.propTypes={title:i().node.isRequired,className:i().string}},7741:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var r=n(4942),a=n(29439),o=n(75418),i=n.n(o),c=n(60722),s=n(11977),l=n(45697),u=n.n(l),p=n(64124),d=n(48903),m=n(32349),f=n(28216),b=function(e){var t=e.isOpen,n=e.openModal,r=e.reloadData,a=(0,f.I0)(),o={fields:[{component:"plain-text",name:"title",label:"Link to a custom repository to add packages to RHEL for Edge images."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:p.Z.REQUIRED},d.qg]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:"Enter the baseURL for the custom repository.",isRequired:!0,validate:[{type:p.Z.REQUIRED},{type:p.Z.URL,message:"Must be a valid url"}]}]};return i().createElement(c.Z,{title:"Add repository",isOpen:t,openModal:function(){return n({type:"add"})},submitLabel:"Add",schema:o,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create a repo"}};(0,m.Z)(a,(function(){return(0,s.eS)(e)}),t)},reloadData:r})};b.propTypes={openModal:u().func,reloadData:u().func,isOpen:u().bool};const y=b;var v=n(36621),h=n(65673),E=function(e){var t=e.openModal,n=e.isOpen,r=e.id,a=e.name,o=e.baseURL,l=e.reloadData,u=(0,f.I0)(),d={fields:[{component:"plain-text",name:"title",label:"Update information about this custom repository."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:p.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:i().createElement(v.p,{hasIcon:!0},i().createElement(h.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.")),isRequired:!0,validate:[{type:p.Z.REQUIRED},{type:p.Z.URL,message:"Must be a valid url"}]}]};return i().createElement(c.Z,{title:"Edit repository",isOpen:n,openModal:function(){return t({type:"edit"})},submitLabel:"Update",schema:d,initialValues:{id:r,name:a,baseURL:o},onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(a," has been renamed to ").concat(e.name," successfully")},onError:{title:"Error",description:"Failed to edit a repository"}};(0,m.Z)(u,(function(){return(0,s.Es)(e)}),t)},reloadData:l})};E.propTypes={openModal:u().func,reloadData:u().func,isOpen:u().bool,id:u().number,name:u().string,baseURL:u().string,setData:u().func};const g=E;var O=n(68774),R=n(68340),L=n(19694),D=n(37655),Z=function(e){var t=e.label,n=e.text;return i().createElement(O.D,null,i().createElement(R.x,{component:"b"},t),i().createElement(R.x,null,n))};Z.propTypes={label:u().string,text:u().string};var w=function(){return i().createElement(L.ZP,{color:D.Z.value})},U=function(e){var t=e.openModal,n=e.id,r=e.isOpen,a=e.name,o=e.baseURL,l=e.reloadData,u=(0,f.I0)(),p={fields:[{component:"plain-text",name:"description",label:"Removing a repository could affect your ability to update images."},{component:"plain-text",name:"name",label:i().createElement(Z,{label:"Name",text:a})},{component:"plain-text",name:"baseURL",label:i().createElement(Z,{label:"baseURL",text:o})}]};return i().createElement(c.Z,{title:"Remove repository",titleIconVariant:w,isOpen:r,openModal:function(){return t({type:"remove"})},submitLabel:"Remove",schema:p,initialValues:{id:n},variant:"danger",onSubmit:function(e){var t=e.id,n={onSuccess:{title:"Success",description:"".concat(a," has been removed successfully")},onError:{title:"Error",description:"Failed to remove a repository"}};(0,m.Z)(u,(function(){return(0,s.gK)(t)}),n)},reloadData:l})};U.propTypes={openModal:u().func,reloadData:u().func,isOpen:u().bool,id:u().number,name:u().string,baseURL:u().string,setData:u().func};const j=U;var P=n(73448),x=n(15265),S=n(75824),I=[{label:"Name",type:"text"}],M=function(e){var t=e.data,n=e.count,r=e.isLoading,a=e.hasError,o=e.fetchRepos,c=e.openModal,s=t.map((function(e){var t=e.ID,n=e.Name,r=e.URL;return{rowInfo:{id:t,repoName:n,repoBaseURL:r},cells:[{title:i().createElement(i().Fragment,null,i().createElement(R.x,{className:"pf-u-mb-xs",component:R.q.p},i().createElement(S.u,{content:i().createElement("div",null,n)},i().createElement("span",null,(0,d.aS)(n,20)))),i().createElement(R.x,{component:R.q.a,href:r,target:"_blank",rel:"noopener noreferrer"},r," ",i().createElement(x.ZP,{className:"pf-u-ml-sm"})))}]}}));return i().createElement(i().Fragment,null,i().createElement(P.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:o,filters:I,tableData:{count:n,data:t,isLoading:r,hasError:a},columnNames:[{title:"Name",type:"name",sort:!0}],rows:s,actionResolver:function(e){if(!e.rowInfo)return[];var t=e.rowInfo,n=t.id,r=t.repoName,a=t.repoBaseURL;return[{title:"Edit",onClick:function(){return c({type:"edit",id:n,name:r,baseURL:a})}},{title:"Remove",onClick:function(){return c({type:"remove",id:n,name:r,baseURL:a})}}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},toolbarButtons:[{title:"Add repository",click:function(){return c({type:"add"})}}]}))};M.propTypes={data:u().array,count:u().number,isLoading:u().bool,hasError:u().bool,openModal:u().func,fetchRepos:u().func};const k=M;var N=n(86350),T=n(48716),q=n(39173);const A=function(){return i().createElement(T.Z,null,i().createElement(i().Fragment,null,i().createElement(q.Z,{title:"Custom repositories"}),i().createElement("p",{className:"pf-u-mt-sm"},"Add custom repositories to build RHEL for Edge images with additional packages.")))};var C=n(96094),F=n(4874),V=n(3035);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const H=function(){var e=(0,F.useHistory)(),t=(0,C.Z)({api:function(e){var t=e.query;return(0,s.dd)({imageID:"",query:t})},tableReload:!0}),n=(0,a.Z)(t,2),c=n[0],l=n[1],u=c.data,p=c.isLoading,m=c.hasError,f=(0,o.useState)({isOpen:{add:!1,edit:!1,remove:!1},id:null,name:"",baseURL:""}),b=(0,a.Z)(f,2),v=b[0],h=b[1],E=function(e){var t=e.type,n=e.id,a=void 0===n?null:n,o=e.name,i=void 0===o?"":o,c=e.baseURL,s=void 0===c?"":c;h((function(e){return z(z({},e),{},{id:a,name:i,baseURL:s,isOpen:z(z({},e.isOpen),{},(0,r.Z)({},t,!e.isOpen[t]))})}))};return i().createElement(i().Fragment,null,i().createElement(A,null),i().createElement(N.Z,null,i().createElement(i().Fragment,null,(0,d.A8)(p,null==u?void 0:u.count,e)?i().createElement(V.Z,{icon:"repository",title:"Add a custom repository",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Add repository",click:function(){return E({type:"add"})}}}):i().createElement(k,{data:(null==u?void 0:u.data)||[],count:null==u?void 0:u.count,openModal:E,isLoading:p,hasError:m,fetchRepos:l})),i().createElement(y,{isOpen:v.isOpen.add,openModal:E,reloadData:l}),i().createElement(g,{isOpen:v.isOpen.edit,id:v.id,name:v.name,baseURL:v.baseURL,openModal:E,reloadData:l}),i().createElement(j,{isOpen:v.isOpen.remove,id:v.id,name:v.name,baseURL:v.baseURL,openModal:E,reloadData:l})))}},11977:(e,t,n)=>{n.d(t,{dd:()=>o,eS:()=>i,Es:()=>c,gK:()=>s});var r=n(66702),a=n(93454),o=function(e){var t=e.imageID,n=void 0===t?"":t,o=e.query,i=(0,r.Vs)(o);return a.eE.get("".concat(r.Ds,"/thirdpartyrepo?").concat(n?"imageID=".concat(n,"&"):"").concat(i))},i=function(e){return a.eE.post("".concat(r.Ds,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},c=function(e){return a.eE.put("".concat(r.Ds,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},s=function(e){return a.eE.delete("".concat(r.Ds,"/thirdpartyrepo/").concat(e))}},60722:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(15861),a=n(4942),o=n(87462),i=n(87757),c=n.n(i),s=n(75418),l=n.n(s),u=n(80236),p=n(79442),d=n(67850),m=n(41387),f=n(45697),b=n.n(f);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,i=e.openModal,s=e.submitLabel,f=e.schema,b=e.initialValues,y=e.variant,h=e.reloadData,E=e.size,g=e.onSubmit,O=e.additionalMappers;return l().createElement(u.u,{variant:null!=E?E:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:i},l().createElement(p.Z,{schema:f,FormTemplate:function(e){return l().createElement(d.ZP,(0,o.Z)({},e,{submitLabel:s,disableSubmit:["invalid"],buttonsProps:{submit:{variant:y}}}))},initialValues:b,componentMapper:O?v(v({},O),m.ZP):m.ZP,onSubmit:function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:setTimeout((0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),i();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return i()}}))};h.propTypes={isOpen:b().bool,title:b().string,openModal:b().func,reloadData:b().func,submitLabel:b().string,schema:b().object,initialValues:b().object,variant:b().string,onSubmit:b().func,size:b().string,additionalMappers:b().object,titleIconVariant:b().any};const E=h},32349:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(4942),a=n(15861),o=n(87757),i=n.n(o),c=n(83215);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n){var r,o=null===(r=n)||void 0===r?void 0:r.onSuccess;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var s=function(){var r=(0,a.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,o&&e(l({},(0,c.wN)(l({variant:"success"},n.onSuccess)))),r.abrupt("return",a);case 8:return r.prev=8,r.t0=r.catch(0),e(l({},(0,c.wN)(l({variant:"danger"},n.onError)))),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();return s()}}}]);
//# sourceMappingURL=../sourcemaps/4047.5ebb8c8f96212a89f0439538d7516c7a.js.map
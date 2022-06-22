"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[5508],{19694:(e,t,n)=>{t.RI={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.LP=n(35183).createIcon(t.RI),t.ZP=t.LP},55795:(e,t,n)=>{t.sN={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},t.iC=n(35183).createIcon(t.sN),t.ZP=t.iC},39173:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(75418),r=n.n(a),o=n(45697),i=n.n(o),s=n(94184),c=n.n(s),l=n(38779),p=function(e){var t=e.className,n=e.title,a=c()(t);return r().createElement(l.D,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const u=p;p.propTypes={title:i().node.isRequired,className:i().string}},4250:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var a=n(15861),r=n(4942),o=n(29439),i=n(87757),s=n.n(i),c=n(75418),l=n.n(c),p=n(3035),u=n(60722),m=n(11977),d=n(45697),f=n.n(d),b=n(64124),y=n(48903),g=function(e){var t=e.isOpen,n=e.openModal,a=e.reloadData,r={fields:[{component:"plain-text",name:"title",label:"Link to a custom repository to add packages to RHEL for Edge images."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:b.Z.REQUIRED},y.qg]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:"Enter the baseURL for the custom repository.",isRequired:!0,validate:[{type:b.Z.REQUIRED},{type:b.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Add repository",isOpen:t,openModal:function(){return n({type:"add"})},submitLabel:"Add",schema:r,onSubmit:function(e){return(0,m.eS)(e)},reloadData:a})};g.propTypes={openModal:f().func,reloadData:f().func,isOpen:f().bool};const h=g;var v=n(36621),E=n(65673),O=function(e){var t=e.openModal,n=e.isOpen,a=e.id,r=e.name,o=e.baseURL,i=e.reloadData,s={fields:[{component:"plain-text",name:"title",label:"Update information about this custom repository."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:b.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:l().createElement(v.p,{hasIcon:!0},l().createElement(E.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.")),isRequired:!0,validate:[{type:b.Z.REQUIRED},{type:b.Z.URL,message:"Must be a valid url"}]}]};return l().createElement(u.Z,{title:"Edit repository",isOpen:n,openModal:function(){return t({type:"edit"})},submitLabel:"Update",schema:s,initialValues:{id:a,name:r,baseURL:o},onSubmit:function(e){return(0,m.Es)(e)},reloadData:i})};O.propTypes={openModal:f().func,reloadData:f().func,isOpen:f().bool,id:f().number,name:f().string,baseURL:f().string,setData:f().func};const R=O;var L=n(68774),D=n(68340),x=n(19694),U=n(37655),Z=function(e){var t=e.label,n=e.text;return l().createElement(L.D,null,l().createElement(D.x,{component:"b"},t),l().createElement(D.x,null,n))};Z.propTypes={label:f().string,text:f().string};var w=function(){return l().createElement(x.ZP,{color:U.Z.value})},P=function(e){var t=e.openModal,n=e.id,a=e.isOpen,r=e.name,o=e.baseURL,i=e.reloadData,s={fields:[{component:"plain-text",name:"description",label:"Removing a repository could affect your ability to update images."},{component:"plain-text",name:"name",label:l().createElement(Z,{label:"Name",text:r})},{component:"plain-text",name:"baseURL",label:l().createElement(Z,{label:"baseURL",text:o})}]};return l().createElement(u.Z,{title:"Remove repository",titleIconVariant:w,isOpen:a,openModal:function(){return t({type:"remove"})},submitLabel:"Remove",schema:s,initialValues:{id:n},variant:"danger",onSubmit:function(e){var t=e.id;return(0,m.gK)(t)},reloadData:i})};P.propTypes={openModal:f().func,reloadData:f().func,isOpen:f().bool,id:f().number,name:f().string,baseURL:f().string,setData:f().func};const M=P,j=function(){return l().createElement(L.D,{style:{padding:"15px",backgroundColor:"white"}},l().createElement(D.x,{component:D.q.h1},"Custom repositories"),l().createElement(D.x,{component:D.q.p},"Add custom repositories to build RHEL for Edge images with additional packages."," "))};var I=n(73448),N=n(15265),k=[{label:"Name",type:"text"}],S=function(e){var t=e.data,n=e.openModal,a=t.map((function(e){var t=e.id,n=e.name,a=e.baseURL;return{rowInfo:{id:t,repoName:n,repoBaseURL:a},noApiSortFilter:[n,a],cells:[{title:l().createElement(l().Fragment,null,l().createElement(D.x,{className:"pf-u-mb-xs",component:D.q.p},n),l().createElement(D.x,{component:D.q.a,href:a,target:"_blank",rel:"noopener noreferrer"},a," ",l().createElement(N.ZP,{className:"pf-u-ml-sm"})))}]}}));return l().createElement(I.Z,{apiFilterSort:!1,filters:k,tableData:{count:t.length,data:t,isLoading:!1,hasError:!1},columnNames:[{title:"Name",type:"name",sort:!0}],rows:a,actionResolver:function(e){if(!e.rowInfo)return[];var t=e.rowInfo,a=t.id,r=t.repoName,o=t.repoBaseURL;return[{title:"Edit",onClick:function(){return n({type:"edit",id:a,name:r,baseURL:o})}},{title:"Remove",onClick:function(){return n({type:"remove",id:a,name:r,baseURL:o})}}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},toolbarButtons:[{title:"Add repository",click:function(){return n({type:"add"})}}]})};S.propTypes={data:f().array,openModal:f().func};const C=S;var T=n(86350),A=n(48716),q=n(39173),V=n(6636),z=n(55795);const _=function(){return l().createElement(A.Z,null,l().createElement(l().Fragment,null,l().createElement(q.Z,{title:"Applications settings"}),l().createElement("p",{className:"pf-u-mt-sm"},"Settings for Edge Management",l().createElement(V.J,{"aria-label":"Basic popover",headerContent:l().createElement("div",null,"About Edge Management"),bodyContent:l().createElement("div",null,"Edge Management is a service that allows you to provision, update and maintain edge systems.")},l().createElement(z.ZP,{style:{cursor:"pointer"},className:"pf-u-ml-xs","data-testid":"test-pop-over"})))))};var F=n(50383);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Q=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],u=(0,c.useState)(!1),d=(0,o.Z)(u,2),f=d[0],b=d[1],y=(0,c.useState)({isOpen:{add:!1,edit:!1,remove:!1},id:null,name:"",baseURL:""}),g=(0,o.Z)(y,2),v=g[0],E=g[1],O=function(e){var t=e.type,n=e.id,a=void 0===n?null:n,o=e.name,i=void 0===o?"":o,s=e.baseURL,c=void 0===s?"":s;E((function(e){return H(H({},e),{},{id:a,name:i,baseURL:c,isOpen:H(H({},e.isOpen),{},(0,r.Z)({},t,!e.isOpen[t]))})}))},L=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.dd)("");case 2:t=e.sent,i(t.data.map((function(e){return H({id:e.ID,name:e.Name,baseURL:e.URL},e)}))),b(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){return L()}),[]),l().createElement(l().Fragment,null,l().createElement(_,null),l().createElement(T.Z,null,f?n.length>0?l().createElement(l().Fragment,null,l().createElement(j,null),l().createElement(C,{data:n,openModal:O})):l().createElement(p.Z,{icon:"repository",title:"Add a custom repository",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Add repository",click:function(){return O({type:"add"})}},secondaryActions:[]}):l().createElement(F.O,null),l().createElement(h,{isOpen:v.isOpen.add,openModal:O,reloadData:L}),l().createElement(R,{isOpen:v.isOpen.edit,id:v.id,name:v.name,baseURL:v.baseURL,openModal:O,reloadData:L}),l().createElement(M,{isOpen:v.isOpen.remove,id:v.id,name:v.name,baseURL:v.baseURL,openModal:O,reloadData:L})))}},11977:(e,t,n)=>{n.d(t,{dd:()=>o,eS:()=>i,Es:()=>s,gK:()=>c});var a=n(66702),r=n(93454),o=function(e){var t=e.imageID,n=void 0===t?"":t,o=e.query,i=(0,a.Vs)(o);return r.eE.get("".concat(a.Ds,"/thirdpartyrepo?").concat(n?"imageID=".concat(n,"&"):"").concat(i))},i=function(e){return r.eE.post("".concat(a.Ds,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},s=function(e){return r.eE.put("".concat(a.Ds,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},c=function(e){return r.eE.delete("".concat(a.Ds,"/thirdpartyrepo/").concat(e))}},60722:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(15861),r=n(4942),o=n(87462),i=n(87757),s=n.n(i),c=n(75418),l=n.n(c),p=n(80236),u=n(79442),m=n(67850),d=n(41387),f=n(45697),b=n.n(f);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.isOpen,n=e.title,r=e.titleIconVariant,i=e.openModal,c=e.submitLabel,f=e.schema,b=e.initialValues,y=e.variant,h=e.reloadData,v=e.size,E=e.onSubmit,O=e.additionalMappers;return l().createElement(p.u,{variant:null!=v?v:"small",title:n,titleIconVariant:null!=r?r:null,isOpen:t,onClose:i},l().createElement(u.Z,{schema:f,FormTemplate:function(e){return l().createElement(m.ZP,(0,o.Z)({},e,{submitLabel:c,disableSubmit:["invalid"],buttonsProps:{submit:{variant:y}}}))},initialValues:b,componentMapper:O?g(g({},O),d.ZP):d.ZP,onSubmit:function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:setTimeout((0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),i();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return i()}}))};h.propTypes={isOpen:b().bool,title:b().string,openModal:b().func,reloadData:b().func,submitLabel:b().string,schema:b().object,initialValues:b().object,variant:b().string,onSubmit:b().func,size:b().string,additionalMappers:b().object,titleIconVariant:b().any};const v=h}}]);
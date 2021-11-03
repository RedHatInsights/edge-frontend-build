"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[880],{88880:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(15861),r=n(4942),o=n(29439),l=n(87757),i=n.n(l),c=n(93264),s=n.n(c),u=n(60485),m=n(47173),p=n(9947),d=n(38424),g=n(75106),b=n(35293),f=n(64915),E=n(15265),y=n(45697),v=n.n(y),h={repository:f.ZP},R=function(e){var t=e.icon,n=e.title,a=e.body,r=e.primaryAction,o=e.secondaryActions;return s().createElement(p.u,null,s().createElement(d.k,{icon:h[t]}),s().createElement(u.D,{headingLevel:"h4",size:"lg"},n),s().createElement(g.B,null,a),s().createElement(m.zx,{onClick:r.click,variant:"primary"},r.text),s().createElement(b.i,null,o.map((function(e,t){var n=e.title,a=e.link;return s().createElement(m.zx,{variant:"link",key:t},s().createElement("a",{href:a},n),s().createElement(E.ZP,{className:"pf-u-ml-sm"}))}))))};R.propTypes={icon:v().string,title:v().string,body:v().string,primaryAction:v().object,secondaryActions:v().array};const P=R;var O=n(87462),L=n(80236),x=n(79442),U=n(67850),k=n(41387),D=function(e){var t=e.isOpen,n=e.title,r=e.toggle,o=e.submitLabel,l=e.schema,c=e.initialValues,u=e.variant,m=e.reloadData,p=e.onSubmit;return s().createElement(L.u,{variant:"small",title:n,isOpen:t,onClose:r},s().createElement(x.Z,{schema:l,FormTemplate:function(e){return s().createElement(U.ZP,(0,O.Z)({},e,{submitLabel:o,disableSubmit:["invalid"],buttonsProps:{submit:{variant:u}}}))},initialValues:c,componentMapper:k.ZP,onSubmit:function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:r(),m();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return r()}}))};D.propTypes={isOpen:v().bool,title:v().string,toggle:v().func,reloadData:v().func,submitLabel:v().string,schema:v().object,initialValues:v().object,variant:v().string,onSubmit:v().func};const Z=D;var w=n(66702),T=n(64124),S=function(e){var t=e.isOpen,n=e.toggle,a=e.reloadData,r={fields:[{component:"plain-text",name:"title",label:"Link to a custom repository to add packages to RHEL for Edge images."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hypthon ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:T.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:"Enter the baseURL for the custom repository.",isRequired:!0,validate:[{type:T.Z.REQUIRED}]}]};return s().createElement(Z,{title:"Add Repository",isOpen:t,toggle:function(){return n({type:"add"})},submitLabel:"Add",schema:r,onSubmit:function(e){return(0,w.eS)(e)},reloadData:a})};S.propTypes={toggle:v().func,reloadData:v().func,isOpen:v().boo};const C=S;var I=n(36621),j=n(65673),A=function(e){var t=e.toggle,n=e.isOpen,a=e.id,r=e.name,o=e.baseURL,l=e.reloadData,i={fields:[{component:"plain-text",name:"title",label:"Update information about this custom repository."},{component:"text-field",name:"name",label:"Name",placeholder:"Repository name",helperText:"Can only contain letters, numbers, spaces, hypthon ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:T.Z.REQUIRED}]},{component:"textarea",name:"baseURL",label:"BaseURL",placeholder:"https://",helperText:s().createElement(I.p,{hasIcon:!0},s().createElement(j.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"If you change the repo URL, you may not have access to the packages that were used to build images that reference this repository.")),isRequired:!0,validate:[{type:T.Z.REQUIRED}]}]};return s().createElement(Z,{title:"Edit Repository",isOpen:n,toggle:function(){return t({type:"edit"})},submitLabel:"Update",schema:i,initialValues:{id:a,name:r,baseURL:o},onSubmit:console.log,reloadData:l})};A.propTypes={toggle:v().func,reloadData:v().func,isOpen:v().boo,id:v().number,name:v().string,baseURL:v().string,setData:v().func};const N=A;var B=n(68774),F=n(68340),_=n(19694),q=n(37655),z=function(e){var t=e.label,n=e.text;return s().createElement(B.D,null,s().createElement(F.x,{component:"b"},t),s().createElement(F.x,null,n))};z.propTypes={label:v().string,text:v().string};var Q=function(e){var t=e.toggle,n=e.isOpen,a=e.name,r=e.baseURL,o=e.reloadData,l={fields:[{component:"plain-text",name:"description",label:"Removing a repository could affect your ability to update images."},{component:"plain-text",name:"name",label:s().createElement(z,{label:"Name",text:a})},{component:"plain-text",name:"baseURL",label:s().createElement(z,{label:"baseURL",text:r})}]};return s().createElement(Z,{title:s().createElement(s().Fragment,null,s().createElement(_.ZP,{color:q.Z.value,className:"pf-u-mr-md"}),"Remove Repository"),isOpen:n,toggle:function(){return t({type:"remove"})},submitLabel:"Remove",schema:l,variant:"danger",onSubmit:console.log,reloadData:o})};Q.propTypes={toggle:v().func,reloadData:v().func,isOpen:v().boo,id:v().number,name:v().string,baseURL:v().string,setData:v().func};const V=Q,H=function(){return s().createElement(B.D,{style:{padding:"15px",backgroundColor:"white"}},s().createElement(F.x,{component:F.q.h1},"Custom repositories"),s().createElement(F.x,{component:F.q.p},"Add custom repositories to build RHEL for Edge images with additional packages."," "))};var M=n(84812),G=n(71070),J=n(1595),K=n(78919),W=n(65802),X=n(92607),Y=n(80810),$=function(e){return e.buttons.map((function(e,t){var n=e.title,a=e.click;return s().createElement(J.E,{key:t},s().createElement(m.zx,{onClick:a,variant:"primary"},n))}))},ee=function(e){var t=e.toolbarButtons,n=e.setInput,a=e.count,r=e.perPage,o=e.setPerPage,l=e.page,i=e.setPage;return s().createElement(M.o,{id:"toolbar"},s().createElement(K.c,null,s().createElement(J.E,null,s().createElement(W.B,null,s().createElement(X.oi,{name:"textInput1",id:"textInput1",type:"search","aria-label":"search input example",placeholder:"Filter by name",onChange:function(e){return n(e)}}),s().createElement(m.zx,{variant:"control","aria-label":"search button for search input"},s().createElement(Y.ZP,null)))),s().createElement($,{buttons:t}),s().createElement(J.E,{variant:"pagination",align:{default:"alignRight"}},s().createElement(G.t,{isCompact:!0,itemCount:a,perPage:r,page:l,onSetPage:function(e,t){return i(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return o(t)}}))))};ee.propTypes={toolbarButtons:v().array,setInput:v().func,count:v().number,perPage:v().number,setPerPage:v().func,page:v().number,setPage:v().func};const te=ee;var ne=function(e){var t=e.count,n=e.perPage,a=e.setPerPage,r=e.page,o=e.setPage;return s().createElement(M.o,{id:"toolbar"},s().createElement(K.c,null,s().createElement(J.E,{variant:"pagination",align:{default:"alignRight"}},s().createElement(G.t,{itemCount:t,perPage:n,page:r,onSetPage:function(e,t){return o(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return a(t)}}))))};ne.propTypes={count:v().number,perPage:v().number,setPerPage:v().func,page:v().number,setPage:v().func};const ae=ne;var re=n(27577),oe=function(e){var t=e.toggle,n=e.columns,a=e.rows;return s().createElement(s().Fragment,null,s().createElement(re.TableComposable,{"aria-label":"Simple table",variant:"compact"},s().createElement(re.Thead,null,s().createElement(re.Tr,null,n.map((function(e,t){return s().createElement(re.Th,{key:t},e)})))),s().createElement(re.Tbody,null,a.map((function(e,a){var r=e.id,o=e.name,l=e.baseURL;return s().createElement(re.Tr,{key:a},s().createElement(re.Td,{key:"".concat(a,"_0"),dataLabel:n[0]},s().createElement(F.x,{classname:"pf-u-mb-xs",component:F.q.p},o),s().createElement(F.x,{component:F.q.a},s().createElement("a",{href:l},l)," ",s().createElement(E.ZP,{classname:"pf-u-ml-sm"}))),s().createElement(re.Td,{actions:{items:[{title:"Edit",onClick:function(){return t({type:"edit",id:r,name:o,baseURL:l})}},{title:"Remove",onClick:function(){return t({type:"remove",id:r,name:o,baseURL:l})}}]}}))})))))};oe.propTypes={columns:v().array,rows:v().array,toggle:v().func};const le=oe;var ie=function(e){var t=e.data,n=e.toolbarButtons,a=e.toggle,r=(0,c.useState)(""),l=(0,o.Z)(r,2),i=l[0],u=l[1],m=(0,c.useState)(10),p=(0,o.Z)(m,2),d=p[0],g=p[1],b=(0,c.useState)(1),f=(0,o.Z)(b,2),E=f[0],y=f[1];return s().createElement(s().Fragment,null,s().createElement(te,{count:t.length,toolbarButtons:n,setInput:u,perPage:d,setPerPage:g,page:E,setPage:y}),s().createElement(le,{toggle:a,columns:["Name"],rows:t.filter((function(e){return e.Name.toLowerCase().includes(i.toLowerCase())})).reverse().slice((E-1)*d,(E-1)*d+d)}),s().createElement(ae,{count:t.length,setInput:u,perPage:d,setPerPage:g,page:E,setPage:y}))};ie.propTypes={data:v().array,toolbarButtons:v().array,toggle:v().func};const ce=ie;var se=n(86350),ue=n(48716),me=n(39173);const pe=function(){return s().createElement(ue.Z,null,s().createElement(s().Fragment,null,s().createElement(me.Z,{title:"Applications settings"}),s().createElement("p",{className:"pf-u-mt-sm"},"Settings for Fleet Management")))};var de=n(15209);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const fe=function(){var e=(0,c.useState)([]),t=(0,o.Z)(e,2),n=t[0],l=t[1],u=(0,c.useState)(!1),m=(0,o.Z)(u,2),p=m[0],d=m[1],g=(0,c.useState)({isOpen:{add:!1,edit:!1,remove:!1},id:null,name:"",baseURL:""}),b=(0,o.Z)(g,2),f=b[0],E=b[1],y=function(e){var t=e.type,n=e.id,a=void 0===n?null:n,o=e.name,l=void 0===o?"":o,i=e.baseURL,c=void 0===i?"":i;E((function(e){return be(be({},e),{},{id:a,name:l,baseURL:c,isOpen:be(be({},e.isOpen),{},(0,r.Z)({},t,!e.isOpen[t]))})}))},v=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.dd)();case 2:t=e.sent,l(t.data.map((function(e){return be({id:e.ID,name:e.Name,baseURL:e.URL},e)}))),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){return v()}),[]),s().createElement(s().Fragment,null,s().createElement(pe,null),s().createElement(se.Z,null,p?n.length>0?s().createElement(s().Fragment,null,s().createElement(H,null),s().createElement(ce,{data:n,columns:["Name"],toolbarButtons:[{title:"Add repository",click:function(){return y({type:"add"})}}],toggle:y})):s().createElement(P,{icon:"repository",title:"Add a custom repository",body:"Add custom repositories to build RHEL for Edge images with additional packages.",primaryAction:{text:"Add Repository",click:function(){return y({type:"add"})}},secondaryActions:[]}):s().createElement(de.O,null),s().createElement(C,{isOpen:f.isOpen.add,toggle:y,reloadData:v}),s().createElement(N,{isOpen:f.isOpen.edit,id:f.id,name:f.name,baseURL:f.baseURL,toggle:y,reloadData:v}),s().createElement(V,{isOpen:f.isOpen.remove,id:f.id,name:f.name,baseURL:f.baseURL,toggle:y,reloadData:v})))}}}]);
//# sourceMappingURL=../sourcemaps/880.e413c2c9a78eea988e5e48e84d3f6da6.js.map
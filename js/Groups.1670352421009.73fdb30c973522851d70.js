(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7633],{39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(85893),a=n(94184),o=n.n(a),c=n(76857),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};const s=function(e){var t=e.className,n=e.title,a=o()(t);return(0,r.jsx)(c.Title,i({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},41825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(15861),a=n(64687),o=n.n(a),c=n(92950),i=n.n(c),s=n(45697),l=n.n(s),u=n(64124),d=n(96354),p=n(60722),m=n(87029),f=n(48903),v=n(32349),b=n(86706),g=function(){var e=(0,r.Z)(o().mark((function e(){var t,n=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.length>0&&void 0!==n[0]?n[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,m.Tb)(t);case 5:if(!e.sent.data.isValid){e.next=8;break}throw"Group name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h={groupName:function(){return g}},y={fields:[{component:d.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,autoFocus:!0,validate:[{type:"groupName"},{type:u.Z.REQUIRED},{type:u.Z.MAX_LENGTH,threshold:50},f.qg]}]},O=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.deviceIds,c=e.reloadData,s=(0,b.I0)(),l=function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return(0,v.Z)(s,(function(){return(0,m.sS)(e)}),t)},u=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:n=e.sent,r=n.ID,c={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add system to group"}},(0,v.Z)(s,(function(){return(0,m.e3)(parseInt(r),a)}),c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i().createElement(p.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Create group",submitLabel:"Create",schema:y,onSubmit:a?u:l,reloadData:c,validatorMapper:h})};const E=O;O.propTypes={isModalOpen:l().bool,setIsModalOpen:l().func,reloadData:l().func,deviceIds:l().array}},47906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(92950),a=n.n(r),o=n(45697),c=n.n(o),i=n(64124),s=n(96354),l=n(60722),u=n(87029),d=n(69957),p=n(37655),m=n(68340),f=n(32349),v=n(86706),b=function(e){return a().createElement(m.x,null,a().createElement("strong",null,e," "),"and all its data will be permanently deleted. Associated systems will be removed from the group but will not be deleted.")},g=function(e){return{fields:[{component:s.Z.PLAIN_TEXT,name:"warning-message",label:b(e)},{component:s.Z.CHECKBOX,name:"confirmation",label:"I understand that this action cannot be undone.",validate:[{type:i.Z.REQUIRED}]}]}},h=function(){return a().createElement(d.ZP,{color:p.Z.value})},y=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,o=e.modalState,c=o.id,i=o.name,s=(0,v.I0)();return a().createElement(l.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Delete group",titleIconVariant:h,variant:"danger",submitLabel:"Delete",schema:g(i),onSubmit:function(){var e={onSuccess:{title:"Success",description:"".concat(i," has been removed successfully")},onError:{title:"Error",description:"Failed to delete group"}};(0,f.Z)(s,(function(){return(0,u.yq)(c)}),e)},reloadData:r})};y.propTypes={id:c().number,name:c().string,modalState:c().object,isModalOpen:c().bool,setIsModalOpen:c().func,reloadData:c().func};const O=y},23537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var r=n(15861),a=n(29439),o=n(64687),c=n.n(o),i=n(92950),s=n.n(i),l=n(28191),u=n(80123),d=n(39173),p=n(14748),m=n(4942),f=n(45697),v=n.n(f),b=n(73448),g=n(96620),h=n(9192),y=n(52643),O=n(2372),E=n(16545);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=s().lazy((function(){return Promise.all([n.e(6085),n.e(2409),n.e(3339),n.e(3006),n.e(6681)]).then(n.bind(n,68940))})),w=[{label:"Name",type:"text"}],M=[{title:"Name",type:"name",sort:!0},{title:"Systems",type:"name",sort:!1},{title:"Image",type:"name",sort:!1}],I=function(e){var t=e.data,n=e.count,o=e.isLoading,l=e.hasError,u=e.handleCreateModal,d=e.handleRenameModal,p=e.handleDeleteModal,m=e.hasModalSubmitted,f=e.setHasModalSubmitted,v=e.fetchGroups,D=(0,i.useState)({isOpen:!1,deviceData:null,imageData:null}),I=(0,a.Z)(D,2),j=I[0],P=I[1],k=null==t?void 0:t.map((function(e){var t,n,r,a=e.DeviceGroup,o=a.ID,c=a.Name,i=a.Devices,l=e.DevicesImageInfo;l||(l=[]);var u=null!=i?i:[],d=s().createElement("div",null,s().createElement(E.u,{content:s().createElement("div",null,l.map((function(e,t){return s().createElement("p",{key:t},e.Name)})))},s().createElement("span",null,"Multiple images")));return{rowInfo:{id:o,title:c,image:0===l.length?"-":l.length>1?"Multiple images":null===(t=l[0])||void 0===t?void 0:t.Name,devicesImageInfo:e.DevicesImageInfo,devices:i,hasValidUpdate:null==e||null===(n=e.DeviceGroup)||void 0===n?void 0:n.ValidUpdate},cells:[{title:s().createElement(g.Link,{to:"".concat(h._["fleet-management"],"/").concat(o)},c)},{title:u.length},{title:0===l.length?"-":l.length>1?d:null===(r=l[0])||void 0===r?void 0:r.Name}]}}));return s().createElement(s().Fragment,null,s().createElement(b.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:v,filters:w,tableData:{count:n,data:t,isLoading:o,hasError:l},columnNames:M,rows:k,actionResolver:function(e){var t;if(null==e||!e.rowInfo)return[];var n=e.rowInfo,r=n.id,a=n.title,o=n.devices,c=n.devicesImageInfo,i=null==c?void 0:c.some((function(e){return e.UpdateAvailable}));return r&&[{title:"Rename",onClick:function(){return d(r,a)}},{title:"Delete",onClick:function(){return p(r,a)}},{title:"Update",onClick:function(){return P((function(e){return S(S({},e),{},{deviceData:o.map((function(e){return{id:e.UUID,display_name:e.Name}})),imageId:o.find((function(e){return null==e?void 0:e.ImageID})).ImageID,isOpen:!0})}))},isDisabled:!(o.length>0&&null!=e&&null!==(t=e.rowInfo)&&void 0!==t&&t.hasValidUpdate&&i)}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},emptyFilterState:{title:"No matching groups found",body:"To continue, edit your filter settings and try again"},toolbarButtons:[{title:"Create group",click:u}],hasModalSubmitted:m,setHasModalSubmitted:f}),j.isOpen&&s().createElement(i.Suspense,{fallback:s().createElement(y.b,null,s().createElement(O.$,null))},s().createElement(Z,{navigateBack:function(){history.push({pathname:history.location.pathname}),P((function(e){return S(S({},e),{},{isOpen:!1})}))},setUpdateModal:P,updateModal:j,refreshTable:(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:f(!0);case 3:case"end":return e.stop()}}),e)})))})))};I.propTypes={data:v().array,count:v().number,closeModal:v().func,isLoading:v().bool,hasError:v().bool,handleRenameModal:v().func,handleDeleteModal:v().func,handleCreateModal:v().func,hasModalSubmitted:v().bool,setHasModalSubmitted:v().func,fetchGroups:v().func};const j=I;var P=n(3035),k=n(87029),x=n(41825),T=n(61381),C=n(47906),N=n(96094),L=n(48903);const _=function(){var e=(0,g.useHistory)(),t=(0,N.Z)({api:k.jA,tableReload:!0}),n=(0,a.Z)(t,2),o=n[0],m=n[1],f=o.data,v=o.isLoading,b=o.hasError,h=(0,i.useState)({id:null,name:""}),y=(0,a.Z)(h,2),O=y[0],E=y[1],D=(0,i.useState)(!1),S=(0,a.Z)(D,2),Z=S[0],w=S[1],M=(0,i.useState)(!1),I=(0,a.Z)(M,2),_=I[0],V=I[1],R=(0,i.useState)(!1),A=(0,a.Z)(R,2),F=A[0],G=A[1],U=(0,i.useState)(!1),q=(0,a.Z)(U,2),H=q[0],X=q[1],z=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:X(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s().createElement(s().Fragment,null,s().createElement(u.Z,{className:"pf-m-light"},s().createElement(d.Z,{title:"Groups"})),s().createElement(p.Z,{className:"edge-devices"},(0,L.A8)(v,null==f?void 0:f.count,e)?s().createElement(l.k,{justifyContent:{default:"justifyContentCenter"}},s().createElement(P.Z,{icon:"plus",title:"Create a system group",body:"Create system groups to help manage your systems more effectively.",primaryAction:{text:"Create group",click:function(){return w(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"}]})):s().createElement(j,{data:(null==f?void 0:f.data)||[],count:null==f?void 0:f.count,isLoading:v,hasError:b,handleRenameModal:function(e,t){E({id:e,name:t}),V(!0)},handleDeleteModal:function(e,t){E({id:e,name:t}),G(!0)},handleCreateModal:function(){return w(!0)},hasModalSubmitted:H,setHasModalSubmitted:X,fetchGroups:m})),Z&&s().createElement(x.Z,{isModalOpen:Z,setIsModalOpen:w,reloadData:z}),_&&s().createElement(T.Z,{isModalOpen:_,setIsModalOpen:V,reloadData:z,modalState:O}),F&&s().createElement(C.Z,{isModalOpen:F,setIsModalOpen:G,reloadData:z,modalState:O}))}},61381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(15861),a=n(64687),o=n.n(a),c=n(92950),i=n.n(c),s=n(45697),l=n.n(s),u=n(64124),d=n(96354),p=n(60722),m=n(87029),f=n(48903),v=n(32349),b=n(86706),g=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Tb)(t);case 2:if(!e.sent.data.isValid){e.next=5;break}return e.abrupt("return","Group name already exists");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fields:[{component:d.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:u.Z.REQUIRED},{type:u.Z.MAX_LENGTH,threshold:50},f.qg,g]}]},y=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,a=e.modalState,o=a.id,c=a.name,s=(0,b.I0)();return i().createElement(p.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Rename group",submitLabel:"Save",schema:h,initialValues:a,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(c," has been renamed to ").concat(e.name," successfully")},onError:{title:"Error",description:"Failed to rename group"}};(0,v.Z)(s,(function(){return(0,m.OS)(o,e)}),t)},reloadData:r})};y.propTypes={id:l().number,modalState:l().object,isModalOpen:l().bool,setIsModalOpen:l().func,reloadData:l().func};const O=y},87029:(e,t,n)=>{"use strict";n.d(t,{OS:()=>s,Tb:()=>m,VL:()=>i,_j:()=>p,e3:()=>u,jA:()=>c,sS:()=>o,tW:()=>d,yq:()=>l});var r=n(66702),a=n(93454),o=function(e){return a.instance.post("".concat(r.Ds,"/device-groups/"),{Name:e.name,Type:"static"})},c=function(e){var t=e.query,n=(0,r.Vs)(t);return a.instance.get("".concat(r.Ds,"/device-groups?").concat(n))},i=function(e){var t=e.id,n=e.query,o=(0,r.Vs)(n);return a.instance.get("".concat(r.Ds,"/device-groups/").concat(t,"/view?").concat(o))},s=function(e,t){return a.instance.put("".concat(r.Ds,"/device-groups/").concat(e),{Name:t.name,Type:"static"})},l=function(e){return a.instance.delete("".concat(r.Ds,"/device-groups/").concat(e))},u=function(e,t){return a.instance.post("".concat(r.Ds,"/device-groups/").concat(e,"/devices"),{ID:e,Devices:t})},d=function(e,t){return a.instance.delete("".concat(r.Ds,"/device-groups/").concat(e,"/devices"),{data:{ID:e,Devices:t}})},p=function(e,t){return a.instance.delete("".concat(r.Ds,"/device-groups/").concat(e,"/devices/").concat(t))},m=function(e){return a.instance.get("".concat(r.Ds,"/device-groups/checkName/").concat(e))}},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(15861),a=n(4942),o=n(87462),c=n(64687),i=n.n(c),s=n(92950),l=n.n(s),u=n(80236),d=n(79442),p=n(67850),m=n(41387),f=n(45697),v=n.n(f);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,c=e.closeModal,s=e.submitLabel,f=e.schema,v=e.initialValues,b=e.variant,h=e.reloadData,y=e.size,O=e.onSubmit,E=e.additionalMappers,D=e.validatorMapper;return l().createElement(u.u,{variant:null!=y?y:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:c},l().createElement(d.Z,{schema:f,validatorMapper:D,FormTemplate:function(e){return l().createElement(p.ZP,(0,o.Z)({},e,{submitLabel:s,disableSubmit:["invalid"],buttonsProps:{submit:{variant:b}}}))},initialValues:v,componentMapper:E?g(g({},E),m.ZP):m.ZP,onSubmit:function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:setTimeout((0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),c();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return c()}}))};h.propTypes={isOpen:v().bool,title:v().string,closeModal:v().func,reloadData:v().func,submitLabel:v().string,schema:v().object,initialValues:v().object,variant:v().string,onSubmit:v().func,size:v().string,additionalMappers:v().object,titleIconVariant:v().any,validatorMapper:v().object};const y=h},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(4942),a=n(15861),o=n(64687),c=n.n(o),i=n(83215);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n){var r,o,s=null===(r=n)||void 0===r?void 0:r.onSuccess,u=null===(o=n)||void 0===o?void 0:o.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var d=function(){var r=(0,a.Z)(c().mark((function r(){var a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,u&&e(l({},(0,i.wN)(l({variant:"info"},n.onInfo)))),s&&e(l({},(0,i.wN)(l({variant:"success"},n.onSuccess)))),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),e(l({},(0,i.wN)(l(l({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return d()}},21078:(e,t,n)=>{var r=n(62488),a=n(37285);e.exports=function e(t,n,o,c,i){var s=-1,l=t.length;for(o||(o=a),i||(i=[]);++s<l;){var u=t[s];n>0&&o(u)?n>1?e(u,n-1,o,c,i):r(i,u):c||(i[i.length]=u)}return i}},37285:(e,t,n)=>{var r=n(62705),a=n(35694),o=n(1469),c=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(c&&e&&e[c])}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},81754:()=>{},10497:()=>{},54476:()=>{},80897:()=>{},40837:()=>{},98379:()=>{},91993:()=>{},99624:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},40209:()=>{},38299:()=>{},72816:()=>{},45987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(63366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
//# sourceMappingURL=../sourcemaps/Groups.6eb152b0d2022f70014caaa3c23378d2.js.map
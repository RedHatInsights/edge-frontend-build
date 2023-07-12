(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7633,7347],{41825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(15861),a=n(64687),o=n.n(a),i=n(92950),c=n.n(i),s=n(45697),l=n.n(s),u=n(64124),d=n(96354),p=n(60722),m=n(87029),f=n(48903),v=n(32349),h=n(77760),g=function(){var e=(0,r.Z)(o().mark((function e(){var t,n=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.length>0&&void 0!==n[0]?n[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,m.Tb)(t);case 5:if(!e.sent.data.isValid){e.next=8;break}throw"Group name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b={groupName:function(){return g}},y={fields:[{component:d.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,autoFocus:!0,validate:[{type:"groupName"},{type:u.Z.REQUIRED},{type:u.Z.MAX_LENGTH,threshold:50},f.qg]}]},O=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.deviceIds,i=e.reloadData,s=(0,h.useDispatch)(),l=function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return(0,v.Z)(s,(function(){return(0,m.sS)(e)}),t)},u=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:n=e.sent,r=n.ID,i={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add system to group"}},(0,v.Z)(s,(function(){return(0,m.e3)(parseInt(r),a)}),i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c().createElement(p.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Create group",submitLabel:"Create",schema:y,onSubmit:a?u:l,reloadData:i,validatorMapper:b})};const E=O;O.propTypes={isModalOpen:l().bool,setIsModalOpen:l().func,reloadData:l().func,deviceIds:l().array}},23537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r=n(15861),a=n(29439),o=n(64687),i=n.n(o),c=n(92950),s=n.n(c),l=n(28191),u=n(89376),d=n(39173),p=n(4942),m=n(45697),f=n.n(m),v=n(73448),h=n(68519),g=n(5513),b=n(9192),y=n(52643),O=n(37619),E=n(75824);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=s().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(4390),n.e(6244),n.e(8797),n.e(9986),n.e(6681)]).then(n.bind(n,68940))})),w=[{label:"Name",type:"text"}],I=[{title:"Name",type:"name",sort:!0},{title:"Systems",type:"name",sort:!1},{title:"Image",type:"name",sort:!1}],Z=function(e){var t=e.data,n=e.count,o=e.isLoading,l=e.hasError,u=e.handleCreateModal,d=e.handleRenameModal,p=e.handleDeleteModal,m=e.hasModalSubmitted,f=e.setHasModalSubmitted,D=e.fetchGroups,Z=(0,h.k6)(),k=(0,h.TH)().pathname,j=(0,c.useState)({isOpen:!1,deviceData:null,imageData:null}),_=(0,a.Z)(j,2),x=_[0],C=_[1],N=null==t?void 0:t.map((function(e){var t,n,r,a=e.DeviceGroup,o=a.ID,i=a.Name,c=a.Devices,l=e.DevicesImageInfo;l||(l=[]);var u=null!=c?c:[],d=s().createElement("div",null,s().createElement(E.u,{content:s().createElement("div",null,l.map((function(e,t){return s().createElement("p",{key:t},e.Name)})))},s().createElement("span",null,"Multiple images")));return{rowInfo:{id:o,title:i,image:0===l.length?"-":l.length>1?"Multiple images":null===(t=l[0])||void 0===t?void 0:t.Name,devicesImageInfo:e.DevicesImageInfo,devices:c,hasValidUpdate:null==e||null===(n=e.DeviceGroup)||void 0===n?void 0:n.ValidUpdate},cells:[{title:s().createElement(g.rU,{to:"".concat(b._.fleetManagement,"/").concat(o)},i)},{title:u.length},{title:0===l.length?"-":l.length>1?d:null===(r=l[0])||void 0===r?void 0:r.Name}]}}));return s().createElement(s().Fragment,null,s().createElement(v.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:D,filters:w,tableData:{count:n,data:t,isLoading:o,hasError:l},columnNames:I,rows:N,actionResolver:function(e){var t;if(null==e||!e.rowInfo)return[];var n=e.rowInfo,r=n.id,a=n.title,o=n.devices,i=n.devicesImageInfo,c=null==i?void 0:i.some((function(e){return e.UpdateAvailable}));return r&&[{title:"Rename",onClick:function(){return d(r,a)}},{title:"Delete",onClick:function(){return p(r,a)}},{title:"Update",onClick:function(){return C((function(e){return S(S({},e),{},{deviceData:o.map((function(e){return{id:e.UUID,display_name:e.Name}})),imageId:o.find((function(e){return null==e?void 0:e.ImageID})).ImageID,isOpen:!0})}))},isDisabled:!(o.length>0&&null!=e&&null!==(t=e.rowInfo)&&void 0!==t&&t.hasValidUpdate&&c)}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},emptyFilterState:{title:"No matching groups found",body:"To continue, edit your filter settings and try again"},toolbarButtons:[{title:"Create group",click:u}],hasModalSubmitted:m,setHasModalSubmitted:f}),x.isOpen&&s().createElement(c.Suspense,{fallback:s().createElement(y.b,null,s().createElement(O.$,null))},s().createElement(M,{navigateBack:function(){Z.push({pathname:k}),C((function(e){return S(S({},e),{},{isOpen:!1})}))},setUpdateModal:C,updateModal:x,refreshTable:(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:f(!0);case 3:case"end":return e.stop()}}),e)})))})))};Z.propTypes={data:f().array,count:f().number,closeModal:f().func,isLoading:f().bool,hasError:f().bool,handleRenameModal:f().func,handleDeleteModal:f().func,handleCreateModal:f().func,hasModalSubmitted:f().bool,setHasModalSubmitted:f().func,fetchGroups:f().func};const k=Z;var j=n(3035),_=n(87029),x=n(41825),C=n(61381),N=n(47906),P=n(96094),T=n(48903);const U=function(){var e=(0,h.TH)().search,t=(0,P.Z)({api:_.jA,tableReload:!0}),n=(0,a.Z)(t,2),o=n[0],p=n[1],m=o.data,f=o.isLoading,v=o.hasError,g=(0,c.useState)({id:null,name:""}),b=(0,a.Z)(g,2),y=b[0],O=b[1],E=(0,c.useState)(!1),D=(0,a.Z)(E,2),S=D[0],M=D[1],w=(0,c.useState)(!1),I=(0,a.Z)(w,2),Z=I[0],U=I[1],G=(0,c.useState)(!1),L=(0,a.Z)(G,2),R=L[0],A=L[1],F=(0,c.useState)(!1),H=(0,a.Z)(F,2),q=H[0],V=H[1],B=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:V(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s().createElement(s().Fragment,null,s().createElement(u.Z,{className:"pf-m-light"},s().createElement(d.Z,{title:"Groups"})),s().createElement("section",{className:"edge-groups pf-l-page__main-section pf-c-page__main-section"},(0,T.G0)(f,null==m?void 0:m.count,e)?s().createElement(l.k,{justifyContent:{default:"justifyContentCenter"}},s().createElement(j.Z,{icon:"plus",title:"Create a system group",body:"Create system groups to help manage your systems more effectively.",primaryAction:{text:"Create group",click:function(){return M(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"}]})):s().createElement(k,{data:(null==m?void 0:m.data)||[],count:null==m?void 0:m.count,isLoading:f,hasError:v,handleRenameModal:function(e,t){O({id:e,name:t}),U(!0)},handleDeleteModal:function(e,t){O({id:e,name:t}),A(!0)},handleCreateModal:function(){return M(!0)},hasModalSubmitted:q,setHasModalSubmitted:V,fetchGroups:p})),S&&s().createElement(x.Z,{isModalOpen:S,setIsModalOpen:M,reloadData:B}),Z&&s().createElement(C.Z,{isModalOpen:Z,setIsModalOpen:U,reloadData:B,modalState:y}),R&&s().createElement(N.Z,{isModalOpen:R,setIsModalOpen:A,reloadData:B,modalState:y}))}},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(4942),a=n(15861),o=n(64687),i=n.n(o),c=n(83215);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,r){var o,s,u=null===(o=n)||void 0===o?void 0:o.onSuccess,d=null===(s=n)||void 0===s?void 0:s.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var p=function(){var o=(0,a.Z)(i().mark((function a(){var o;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t();case 3:return o=a.sent,d&&(r?r.hasInfo(n.onInfo):e(l({},(0,c.wN)(l({variant:"info"},n.onInfo))))),u&&(r?r.hasSuccess(n.onSuccess):e(l({},(0,c.wN)(l({variant:"success"},n.onSuccess))))),a.abrupt("return",o);case 9:return a.prev=9,a.t0=a.catch(0),r?r.err(n.onError,a.t0):e(l({},(0,c.wN)(l(l({variant:"danger"},n.onError),{},{description:null!==a.t0&&void 0!==a.t0&&a.t0.Title?"".concat(n.onError.description,": ").concat(a.t0.Title):n.onError.description})))),a.abrupt("return",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return o.apply(this,arguments)}}();return p()}},91993:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Groups.779946b3d8fcc47427dd4f93ed4e3a86.js.map
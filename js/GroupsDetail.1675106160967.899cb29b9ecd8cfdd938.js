(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7563],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var a=n(70655),r=n(92950),i=n(44303),o=n(38296),l=n(62472);const c=e=>{var{children:t=null,className:n="","aria-label":s="Breadcrumb",ouiaId:u,ouiaSafe:d=!0}=e,m=(0,a.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=(0,l.S$)(c.displayName,u,d);return r.createElement("nav",Object.assign({},m,{"aria-label":s,className:(0,o.i)(i.Z.breadcrumb,n)},p),r.createElement("ol",{className:i.Z.breadcrumbList},r.Children.map(t,((e,t)=>{const n=t>0;return r.isValidElement(e)?r.cloneElement(e,{showDivider:n}):e}))))};c.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>c});var a=n(70655),r=n(92950),i=n(93174),o=n(44303),l=n(38296);const c=e=>{var{children:t=null,className:n="",to:c,isActive:s=!1,isDropdown:u=!1,showDivider:d,target:m,component:p="a",render:v}=e,f=(0,a.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const b=p,g=s?"page":void 0,h=(0,l.i)(o.Z.breadcrumbLink,s&&o.Z.modifiers.current);return r.createElement("li",Object.assign({},f,{className:(0,l.i)(o.Z.breadcrumbItem,n)}),d&&r.createElement("span",{className:o.Z.breadcrumbItemDivider},r.createElement(i.ZP,null)),"button"===p&&r.createElement("button",{className:h,"aria-current":g,type:"button"},t),u&&r.createElement("span",{className:(0,l.i)(o.Z.breadcrumbDropdown)},t),v&&v({className:h,ariaCurrent:g}),c&&!v&&r.createElement(b,{href:c,target:m,className:h,"aria-current":g},t),!c&&"button"!==p&&!u&&t)};c.displayName="BreadcrumbItem"},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(58392);const a={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},47906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),l=n(64124),c=n(96354),s=n(60722),u=n(87029),d=n(69957),m=n(37655),p=n(68340),v=n(32349),f=n(86706),b=function(e){return r().createElement(p.x,null,r().createElement("strong",null,e," "),"and all its data will be permanently deleted. Associated systems will be removed from the group but will not be deleted.")},g=function(e){return{fields:[{component:c.Z.PLAIN_TEXT,name:"warning-message",label:b(e)},{component:c.Z.CHECKBOX,name:"confirmation",label:"I understand that this action cannot be undone.",validate:[{type:l.Z.REQUIRED}]}]}},h=function(){return r().createElement(d.ZP,{color:m.Z.value})},E=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.reloadData,i=e.modalState,o=i.id,l=i.name,c=(0,f.I0)();return r().createElement(s.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Delete group",titleIconVariant:h,variant:"danger",submitLabel:"Delete",schema:g(l),onSubmit:function(){var e={onSuccess:{title:"Success",description:"".concat(l," has been removed successfully")},onError:{title:"Error",description:"Failed to delete group"}};(0,v.Z)(c,(function(){return(0,u.yq)(o)}),e)},reloadData:a})};E.propTypes={id:o().number,name:o().string,modalState:o().object,isModalOpen:o().bool,setIsModalOpen:o().func,reloadData:o().func};const D=E},61381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var a=n(15861),r=n(64687),i=n.n(r),o=n(92950),l=n.n(o),c=n(45697),s=n.n(c),u=n(64124),d=n(96354),m=n(60722),p=n(87029),v=n(48903),f=n(32349),b=n(86706),g=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Tb)(t);case 2:if(!e.sent.data.isValid){e.next=5;break}return e.abrupt("return","Group name already exists");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fields:[{component:d.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:u.Z.REQUIRED},{type:u.Z.MAX_LENGTH,threshold:50},v.qg,g]}]},E=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.reloadData,r=e.modalState,i=r.id,o=r.name,c=(0,b.I0)();return l().createElement(m.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Rename group",submitLabel:"Save",schema:h,initialValues:r,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(o," has been renamed to ").concat(e.name," successfully")},onError:{title:"Error",description:"Failed to rename group"}};(0,f.Z)(c,(function(){return(0,p.OS)(i,e)}),t)},reloadData:a})};E.propTypes={id:s().number,modalState:s().object,isModalOpen:s().bool,setIsModalOpen:s().func,reloadData:s().func};const D=E},30991:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var a=n(93433),r=n(4942),i=n(29439),o=n(92950),l=n.n(o),c=n(64029),s=n(32835),u=n(56787),d=n(84457),m=n(75728),p=n(99355),v=n(28191),f=n(92298),b=n(50383),g=n(75824),h=n(89376),E=n(39173),D=n(3035),y=n(96620),I=n(9192),Z=n(5964),O=n(15656),S=n(87029),w=n(15861),_=n(64687),k=n.n(_),M=n(47173),N=n(80236),C=n(45697),j=n.n(C),L=n(8027),A=n(96094),T=n(32349),x=n(86706),P=function(e){var t,n=e.groupId,a=e.closeModal,r=e.isOpen,c=e.reloadData,s=e.groupName,u=(0,A.Z)({api:L.$v,tableReload:!0}),d=(0,i.Z)(u,2),m=d[0],p=d[1],v=m.data,f=m.isLoading,b=m.hasError,g=(0,o.useState)([]),h=(0,i.Z)(g,2),E=h[0],D=h[1],y=(0,x.I0)();return l().createElement(N.u,{id:"add-systems-modal",title:"Add systems",position:"top",isOpen:r,onClose:a,variant:"large",actions:[l().createElement(M.zx,{isDisabled:0===E.length,key:"confirm",variant:"primary",onClick:function(){var e={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(s," successfully")},onError:{title:"Error",description:"An error occurred making the request"}};(0,T.Z)(y,(function(){return(0,S.e3)(parseInt(n),E.map((function(e){return{ID:e.deviceID}})))}),e),setTimeout((0,w.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),a()}},"Add systems"),l().createElement(M.zx,{key:"cancel",variant:"link",onClick:a},"Cancel")]},l().createElement(O.Z,{selectedItems:D,skeletonRowQuantity:15,hasCheckbox:!0,isLoading:f,hasError:b,count:null==v?void 0:v.count,data:(null==v||null===(t=v.data)||void 0===t?void 0:t.devices)||[],fetchDevices:p}))};P.propTypes={groupId:j().string,closeModal:j().func,isOpen:j().bool,reloadData:j().func,groupName:j().string};const R=P;var V=n(48903),B=n(96354),G=n(52643),U=n(37619),F=n(60722),H=n(47906),X=n(61381);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=l().lazy((function(){return Promise.all([n.e(6954),n.e(9295),n.e(8615),n.e(3006),n.e(6681)]).then(n.bind(n,68940))}));const $=function(){var e,t,n,r,w,_,k,M,N,C,j=(0,x.I0)(),L=(0,y.useParams)(),P=(0,y.useHistory)(),q=(0,y.useLocation)(),$=q.search,K=q.pathname,W=L.groupId,J=(0,o.useState)(!1),Y=(0,i.Z)(J,2),ee=Y[0],te=Y[1],ne=(0,o.useState)(!1),ae=(0,i.Z)(ne,2),re=ae[0],ie=ae[1],oe=(0,o.useState)({isOpen:!1,name:"",deviceId:null}),le=(0,i.Z)(oe,2),ce=le[0],se=le[1],ue=(0,o.useState)({isOpen:!1,deviceData:null,imageData:null}),de=(0,i.Z)(ue,2),me=de[0],pe=de[1],ve=(0,A.Z)({api:S.VL,id:W,tableReload:!0}),fe=(0,i.Z)(ve,2),be=fe[0],ge=fe[1],he=be.data,Ee=be.isLoading,De=be.hasError,ye=null==he||null===(e=he.DeviceGroup)||void 0===e?void 0:e.Name,Ie=(0,o.useState)([]),Ze=(0,i.Z)(Ie,2),Oe=Ze[0],Se=Ze[1],we=(0,o.useState)(!1),_e=(0,i.Z)(we,2),ke=_e[0],Me=_e[1],Ne=(0,o.useState)({id:null,name:""}),Ce=(0,i.Z)(Ne,2),je=Ce[0],Le=Ce[1],Ae=(0,o.useState)(!1),Te=(0,i.Z)(Ae,2),xe=Te[0],Pe=Te[1],Re=(0,o.useState)(!1),Ve=(0,i.Z)(Re,2),Be=Ve[0],Ge=Ve[1],Ue=function(){var e={onSuccess:{title:"Success",description:"".concat(ce.name," has been removed successfully")},onError:{title:"Error",description:"Failed to remove system"}};(0,T.Z)(j,(function(){return(0,S._j)(W,ce.deviceId)}),e),setTimeout((function(){return Me(!0)}),800)},Fe="Actions for group details view",He="group-details-dropdown";return l().createElement(l().Fragment,null,l().createElement(h.Z,{className:"pf-m-light"},ye?l().createElement(c.a,null,l().createElement(s.g,null,l().createElement(y.Link,{to:I._.fleetManagement},"Groups")),l().createElement(s.g,null,ye)):l().createElement(c.a,null,l().createElement(s.g,{isActive:!0},l().createElement(b.O,{width:"100px"}))),l().createElement(v.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(f.B,null,ye?l().createElement(E.Z,{title:ye}):l().createElement(b.O,{width:"150px"})),l().createElement(f.B,null,l().createElement(u.L,{position:p.ir.right,toggle:l().createElement(m.Z,{id:He,toggleIndicator:Z.ZP,onToggle:function(e){return te(e)},isDisabled:!1,"aria-label":Fe},l().createElement(g.u,{content:Fe,reference:function(){return document.getElementById(He)}}),"Actions"),isOpen:ee,dropdownItems:[l().createElement(d.h,{key:"delete-device-group",onClick:function(){return Le({id:W,name:ye}),void Pe(!0)}},"Delete group"),l().createElement(d.h,{key:"rename-device-group",onClick:function(){return Le({id:W,name:ye}),void Ge(!0)}},"Rename group"),l().createElement(d.h,{key:"update-all-devices",isDisabled:(0,V.yb)({deviceData:null==he||null===(t=he.DevicesView)||void 0===t||null===(n=t.devices)||void 0===n?void 0:n.map((function(e){return{imageSetId:null==e?void 0:e.ImageSetID}})),imageData:null==he||null===(r=he.DevicesView)||void 0===r||null===(w=r.devices)||void 0===w?void 0:w.some((function(e){return e.ImageID}))}),onClick:function(){te(!1),pe((function(e){var t,n,a,r;return z(z({},e),{},{isOpen:!0,deviceData:null==he||null===(t=he.DevicesView)||void 0===t||null===(n=t.devices)||void 0===n?void 0:n.map((function(e){return{id:null==e?void 0:e.DeviceUUID,display_name:""===(null==e?void 0:e.DeviceName)?"localhost":null==e?void 0:e.DeviceName}})),imageSetId:null==he||null===(a=he.DevicesView)||void 0===a||null===(r=a.devices.find((function(e){return e.ImageSetID})))||void 0===r?void 0:r.ImageSetID})}))}},"Update")]})))),l().createElement("section",{className:"edge-devices pf-l-page__main-section pf-c-page__main-section"},(0,V.G0)(Ee,null==he||null===(_=he.DeviceGroup)||void 0===_?void 0:_.Devices.length,$)?l().createElement(v.k,{justifyContent:{default:"justifyContentCenter"}},l().createElement(D.Z,{icon:"plus",title:"Add systems to the group",body:"Create groups to help manage your systems more effectively.",primaryAction:{text:"Add systems",click:function(){return ie(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"}]})):l().createElement(O.Z,{data:(null==he||null===(k=he.DevicesView)||void 0===k?void 0:k.devices)||[],count:null==he||null===(M=he.DevicesView)||void 0===M?void 0:M.total,isLoading:Ee,hasError:De,hasCheckbox:!0,handleSingleDeviceRemoval:Ue,kebabItems:[{isDisabled:!(Oe.length>0),title:"Remove from group",onClick:function(){return se({name:"",deviceId:null,isOpen:!0})}},{isDisabled:(0,V.yb)({deviceData:Oe,imageData:null===(N=Oe[0])||void 0===N?void 0:N.updateImageData}),title:"Update selected",onClick:function(){return pe((function(e){return z(z({},e),{},{isOpen:!0,deviceData:(0,a.Z)(Oe),imageSetId:Oe.find((function(e){return null==e?void 0:e.imageSetId})).imageSetId})}))}}],selectedItems:Se,setRemoveModal:se,setIsAddModalOpen:ie,hasModalSubmitted:ke,setHasModalSubmitted:Me,fetchDevices:ge,isAddSystemsView:!0})),re&&l().createElement(R,{groupId:W,closeModal:function(){return ie(!1)},isOpen:re,reloadData:ge,groupName:null==he||null===(C=he.DeviceGroup)||void 0===C?void 0:C.Name}),ce.isOpen&&l().createElement(F.Z,{isOpen:ce.isOpen,closeModal:function(){return se(!1)},title:"Remove from group",submitLabel:"Remove",variant:"danger",schema:{fields:[{component:B.Z.PLAIN_TEXT,name:"warning-text",label:"Do you want to remove ".concat(Oe.length>0?"".concat(Oe.length," system").concat(1===Oe.length?"":"s"):"".concat(ce.name)," from ").concat(ye,"?")}]},onSubmit:ce.deviceId?Ue:function(){var e={onSuccess:{title:"Success",description:"".concat(Oe.length," systems have been removed successfully")},onError:{title:"Error",description:"failed to remove systems"}};(0,T.Z)(j,(function(){return(0,S.tW)(parseInt(W),Oe.map((function(e){return{ID:e.deviceID}})))}),e),setTimeout((function(){return Me(!0)}),800)},reloadData:ge}),me.isOpen&&l().createElement(o.Suspense,{fallback:l().createElement(G.b,null,l().createElement(U.$,null))},l().createElement(Q,{navigateBack:function(){P.push({pathname:K}),pe((function(e){return z(z({},e),{},{isOpen:!1})}))},setUpdateModal:pe,updateModal:me,refreshTable:ge})),xe&&l().createElement(H.Z,{isModalOpen:xe,setIsModalOpen:Pe,reloadData:function(){return P.push(I._.fleetManagement)},modalState:je}),Be&&l().createElement(X.Z,{isModalOpen:Be,setIsModalOpen:Ge,reloadData:function(){return ge()},modalState:je}))}},58392:()=>{}}]);
//# sourceMappingURL=../sourcemaps/GroupsDetail.4412d1146b1afcc341ad6ec57efc3942.js.map
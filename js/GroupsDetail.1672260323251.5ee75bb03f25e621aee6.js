(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7563],{64029:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var a=n(70655),r=n(92950),o=n(44303),i=n(38296),l=n(62472);const c=e=>{var{children:t=null,className:n="","aria-label":s="Breadcrumb",ouiaId:u,ouiaSafe:d=!0}=e,m=(0,a.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=(0,l.S$)(c.displayName,u,d);return r.createElement("nav",Object.assign({},m,{"aria-label":s,className:(0,i.i)(o.Z.breadcrumb,n)},p),r.createElement("ol",{className:o.Z.breadcrumbList},r.Children.map(t,((e,t)=>{const n=t>0;return r.isValidElement(e)?r.cloneElement(e,{showDivider:n}):e}))))};c.displayName="Breadcrumb"},32835:(e,t,n)=>{"use strict";n.d(t,{g:()=>c});var a=n(70655),r=n(92950),o=n(93174),i=n(44303),l=n(38296);const c=e=>{var{children:t=null,className:n="",to:c,isActive:s=!1,isDropdown:u=!1,showDivider:d,target:m,component:p="a",render:v}=e,f=(0,a.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const b=p,g=s?"page":void 0,h=(0,l.i)(i.Z.breadcrumbLink,s&&i.Z.modifiers.current);return r.createElement("li",Object.assign({},f,{className:(0,l.i)(i.Z.breadcrumbItem,n)}),d&&r.createElement("span",{className:i.Z.breadcrumbItemDivider},r.createElement(o.ZP,null)),"button"===p&&r.createElement("button",{className:h,"aria-current":g,type:"button"},t),u&&r.createElement("span",{className:(0,l.i)(i.Z.breadcrumbDropdown)},t),v&&v({className:h,ariaCurrent:g}),c&&!v&&r.createElement(b,{href:c,target:m,className:h,"aria-current":g},t),!c&&"button"!==p&&!u&&t)};c.displayName="BreadcrumbItem"},44303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(58392);const a={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},47906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),l=n(64124),c=n(96354),s=n(60722),u=n(87029),d=n(69957),m=n(37655),p=n(68340),v=n(32349),f=n(86706),b=function(e){return r().createElement(p.x,null,r().createElement("strong",null,e," "),"and all its data will be permanently deleted. Associated systems will be removed from the group but will not be deleted.")},g=function(e){return{fields:[{component:c.Z.PLAIN_TEXT,name:"warning-message",label:b(e)},{component:c.Z.CHECKBOX,name:"confirmation",label:"I understand that this action cannot be undone.",validate:[{type:l.Z.REQUIRED}]}]}},h=function(){return r().createElement(d.ZP,{color:m.Z.value})},E=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.reloadData,o=e.modalState,i=o.id,l=o.name,c=(0,f.I0)();return r().createElement(s.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Delete group",titleIconVariant:h,variant:"danger",submitLabel:"Delete",schema:g(l),onSubmit:function(){var e={onSuccess:{title:"Success",description:"".concat(l," has been removed successfully")},onError:{title:"Error",description:"Failed to delete group"}};(0,v.Z)(c,(function(){return(0,u.yq)(i)}),e)},reloadData:a})};E.propTypes={id:i().number,name:i().string,modalState:i().object,isModalOpen:i().bool,setIsModalOpen:i().func,reloadData:i().func};const D=E},61381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var a=n(15861),r=n(64687),o=n.n(r),i=n(92950),l=n.n(i),c=n(45697),s=n.n(c),u=n(64124),d=n(96354),m=n(60722),p=n(87029),v=n(48903),f=n(32349),b=n(86706),g=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.Tb)(t);case 2:if(!e.sent.data.isValid){e.next=5;break}return e.abrupt("return","Group name already exists");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={fields:[{component:d.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:u.Z.REQUIRED},{type:u.Z.MAX_LENGTH,threshold:50},v.qg,g]}]},E=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.reloadData,r=e.modalState,o=r.id,i=r.name,c=(0,b.I0)();return l().createElement(m.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Rename group",submitLabel:"Save",schema:h,initialValues:r,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(i," has been renamed to ").concat(e.name," successfully")},onError:{title:"Error",description:"Failed to rename group"}};(0,f.Z)(c,(function(){return(0,p.OS)(o,e)}),t)},reloadData:a})};E.propTypes={id:s().number,modalState:s().object,isModalOpen:s().bool,setIsModalOpen:s().func,reloadData:s().func};const D=E},30991:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>K});var a=n(93433),r=n(4942),o=n(29439),i=n(92950),l=n.n(i),c=n(64029),s=n(32835),u=n(56787),d=n(84457),m=n(75728),p=n(99355),v=n(28191),f=n(92298),b=n(15209),g=n(16545),h=n(80123),E=n(39173),D=n(14748),y=n(3035),I=n(96620),Z=n(9192),O=n(5964),S=n(15656),w=n(87029),k=n(15861),_=n(64687),M=n.n(_),N=n(47173),C=n(80236),j=n(45697),L=n.n(j),A=n(8027),T=n(96094),x=n(32349),P=n(86706),R=function(e){var t,n=e.groupId,a=e.closeModal,r=e.isOpen,c=e.reloadData,s=e.groupName,u=(0,T.Z)({api:A.$v,tableReload:!0}),d=(0,o.Z)(u,2),m=d[0],p=d[1],v=m.data,f=m.isLoading,b=m.hasError,g=(0,i.useState)([]),h=(0,o.Z)(g,2),E=h[0],D=h[1],y=(0,P.I0)();return l().createElement(C.u,{id:"add-systems-modal",title:"Add systems",position:"top",isOpen:r,onClose:a,variant:"large",actions:[l().createElement(N.zx,{isDisabled:0===E.length,key:"confirm",variant:"primary",onClick:function(){var e={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(s," successfully")},onError:{title:"Error",description:"An error occurred making the request"}};(0,x.Z)(y,(function(){return(0,w.e3)(parseInt(n),E.map((function(e){return{ID:e.deviceID}})))}),e),setTimeout((0,k.Z)(M().mark((function e(){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),a()}},"Add systems"),l().createElement(N.zx,{key:"cancel",variant:"link",onClick:a},"Cancel")]},l().createElement(S.Z,{selectedItems:D,skeletonRowQuantity:15,hasCheckbox:!0,isLoading:f,hasError:b,count:null==v?void 0:v.count,data:(null==v||null===(t=v.data)||void 0===t?void 0:t.devices)||[],fetchDevices:p}))};R.propTypes={groupId:L().string,closeModal:L().func,isOpen:L().bool,reloadData:L().func,groupName:L().string};const V=R;var B=n(48903),G=n(96354),U=n(52643),F=n(2372),H=n(60722),X=n(47906),q=n(61381);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=l().lazy((function(){return Promise.all([n.e(6085),n.e(2409),n.e(3339),n.e(3006),n.e(6681)]).then(n.bind(n,68940))}));const K=function(){var e,t,n,r,k,_,M,N,C,j,L=(0,P.I0)(),A=(0,I.useParams)(),R=(0,I.useHistory)(),z=(0,I.useLocation)(),K=z.search,W=z.pathname,J=A.groupId,Y=(0,i.useState)(!1),ee=(0,o.Z)(Y,2),te=ee[0],ne=ee[1],ae=(0,i.useState)(!1),re=(0,o.Z)(ae,2),oe=re[0],ie=re[1],le=(0,i.useState)({isOpen:!1,name:"",deviceId:null}),ce=(0,o.Z)(le,2),se=ce[0],ue=ce[1],de=(0,i.useState)({isOpen:!1,deviceData:null,imageData:null}),me=(0,o.Z)(de,2),pe=me[0],ve=me[1],fe=(0,T.Z)({api:w.VL,id:J,tableReload:!0}),be=(0,o.Z)(fe,2),ge=be[0],he=be[1],Ee=ge.data,De=ge.isLoading,ye=ge.hasError,Ie=null==Ee||null===(e=Ee.DeviceGroup)||void 0===e?void 0:e.Name,Ze=(0,i.useState)([]),Oe=(0,o.Z)(Ze,2),Se=Oe[0],we=Oe[1],ke=(0,i.useState)(!1),_e=(0,o.Z)(ke,2),Me=_e[0],Ne=_e[1],Ce=(0,i.useState)({id:null,name:""}),je=(0,o.Z)(Ce,2),Le=je[0],Ae=je[1],Te=(0,i.useState)(!1),xe=(0,o.Z)(Te,2),Pe=xe[0],Re=xe[1],Ve=(0,i.useState)(!1),Be=(0,o.Z)(Ve,2),Ge=Be[0],Ue=Be[1],Fe=function(){var e={onSuccess:{title:"Success",description:"".concat(se.name," has been removed successfully")},onError:{title:"Error",description:"Failed to remove system"}};(0,x.Z)(L,(function(){return(0,w._j)(J,se.deviceId)}),e),setTimeout((function(){return Ne(!0)}),800)},He="Actions for group details view",Xe="group-details-dropdown";return l().createElement(l().Fragment,null,l().createElement(h.Z,{className:"pf-m-light"},Ie?l().createElement(c.a,null,l().createElement(s.g,null,l().createElement(I.Link,{to:Z._.fleetManagement},"Groups")),l().createElement(s.g,null,Ie)):l().createElement(c.a,null,l().createElement(s.g,{isActive:!0},l().createElement(b.O,{width:"100px"}))),l().createElement(v.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(f.B,null,Ie?l().createElement(E.Z,{title:Ie}):l().createElement(b.O,{width:"150px"})),l().createElement(f.B,null,l().createElement(u.L,{position:p.ir.right,toggle:l().createElement(m.Z,{id:Xe,toggleIndicator:O.ZP,onToggle:function(e){return ne(e)},isDisabled:!1,"aria-label":He},l().createElement(g.u,{content:He,reference:function(){return document.getElementById(Xe)}}),"Actions"),isOpen:te,dropdownItems:[l().createElement(d.h,{key:"delete-device-group",onClick:function(){return Ae({id:J,name:Ie}),void Re(!0)}},"Delete group"),l().createElement(d.h,{key:"rename-device-group",onClick:function(){return Ae({id:J,name:Ie}),void Ue(!0)}},"Rename group"),l().createElement(d.h,{key:"update-all-devices",isDisabled:(0,B.yb)({deviceData:null==Ee||null===(t=Ee.DevicesView)||void 0===t||null===(n=t.devices)||void 0===n?void 0:n.map((function(e){return{imageSetId:null==e?void 0:e.ImageSetID}})),imageData:null==Ee||null===(r=Ee.DevicesView)||void 0===r||null===(k=r.devices)||void 0===k?void 0:k.some((function(e){return e.ImageID}))}),onClick:function(){ne(!1),ve((function(e){var t,n,a,r;return Q(Q({},e),{},{isOpen:!0,deviceData:null==Ee||null===(t=Ee.DevicesView)||void 0===t||null===(n=t.devices)||void 0===n?void 0:n.map((function(e){return{id:null==e?void 0:e.DeviceUUID,display_name:""===(null==e?void 0:e.DeviceName)?"localhost":null==e?void 0:e.DeviceName}})),imageSetId:null==Ee||null===(a=Ee.DevicesView)||void 0===a||null===(r=a.devices.find((function(e){return e.ImageSetID})))||void 0===r?void 0:r.ImageSetID})}))}},"Update")]})))),l().createElement(D.Z,{className:"edge-devices"},(0,B.G0)(De,null==Ee||null===(_=Ee.DeviceGroup)||void 0===_?void 0:_.Devices.length,K)?l().createElement(v.k,{justifyContent:{default:"justifyContentCenter"}},l().createElement(y.Z,{icon:"plus",title:"Add systems to the group",body:"Create groups to help manage your systems more effectively.",primaryAction:{text:"Add systems",click:function(){return ie(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"}]})):l().createElement(S.Z,{data:(null==Ee||null===(M=Ee.DevicesView)||void 0===M?void 0:M.devices)||[],count:null==Ee||null===(N=Ee.DevicesView)||void 0===N?void 0:N.total,isLoading:De,hasError:ye,hasCheckbox:!0,handleSingleDeviceRemoval:Fe,kebabItems:[{isDisabled:!(Se.length>0),title:"Remove from group",onClick:function(){return ue({name:"",deviceId:null,isOpen:!0})}},{isDisabled:(0,B.yb)({deviceData:Se,imageData:null===(C=Se[0])||void 0===C?void 0:C.updateImageData}),title:"Update selected",onClick:function(){return ve((function(e){return Q(Q({},e),{},{isOpen:!0,deviceData:(0,a.Z)(Se),imageSetId:Se.find((function(e){return null==e?void 0:e.imageSetId})).imageSetId})}))}}],selectedItems:we,setRemoveModal:ue,setIsAddModalOpen:ie,hasModalSubmitted:Me,setHasModalSubmitted:Ne,fetchDevices:he,isAddSystemsView:!0})),oe&&l().createElement(V,{groupId:J,closeModal:function(){return ie(!1)},isOpen:oe,reloadData:he,groupName:null==Ee||null===(j=Ee.DeviceGroup)||void 0===j?void 0:j.Name}),se.isOpen&&l().createElement(H.Z,{isOpen:se.isOpen,closeModal:function(){return ue(!1)},title:"Remove from group",submitLabel:"Remove",variant:"danger",schema:{fields:[{component:G.Z.PLAIN_TEXT,name:"warning-text",label:"Do you want to remove ".concat(Se.length>0?"".concat(Se.length," system").concat(1===Se.length?"":"s"):"".concat(se.name)," from ").concat(Ie,"?")}]},onSubmit:se.deviceId?Fe:function(){var e={onSuccess:{title:"Success",description:"".concat(Se.length," systems have been removed successfully")},onError:{title:"Error",description:"failed to remove systems"}};(0,x.Z)(L,(function(){return(0,w.tW)(parseInt(J),Se.map((function(e){return{ID:e.deviceID}})))}),e),setTimeout((function(){return Ne(!0)}),800)},reloadData:he}),pe.isOpen&&l().createElement(i.Suspense,{fallback:l().createElement(U.b,null,l().createElement(F.$,null))},l().createElement($,{navigateBack:function(){R.push({pathname:W}),ve((function(e){return Q(Q({},e),{},{isOpen:!1})}))},setUpdateModal:ve,updateModal:pe,refreshTable:he})),Pe&&l().createElement(X.Z,{isModalOpen:Pe,setIsModalOpen:Re,reloadData:function(){return R.push(Z._.fleetManagement)},modalState:Le}),Ge&&l().createElement(q.Z,{isModalOpen:Ge,setIsModalOpen:Ue,reloadData:function(){return he()},modalState:Le}))}},58392:()=>{}}]);
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[6838],{80292:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>pe});var a=n(15861),r=n(4942),o=n(29439),i=n(87462),l=n(64687),c=n.n(l),u=n(92950),s=n.n(u),d=n(89376),p=n(39173),m=n(55140),f=n(15656),v=n(45697),g=n.n(v),E=n(64124),y=n(96354),h=n(60722),I=n(23279),D=n.n(I),O=n(36621),S=n(65673),b=n(54680),_=n(92694),A=n(41693),M=n(48880),T=n(96094),Z=n(87029),P=n(48903),N=n(42559);const L=function(e){(0,A.Z)(e);var t=(0,P.gV)(N.h),n=(0,M.default)().change,a=(0,u.useState)(!1),r=(0,o.Z)(a,2),i=r[0],l=r[1],c=(0,u.useState)(null),d=(0,o.Z)(c,2),p=d[0],m=d[1],f=(0,T.Z)({api:t?Z.xk:Z.jA}),v=(0,o.Z)(f,2),g=v[0],E=g.data,y=g.isLoading,h=v[1],I=(0,u.useState)(""),L=(0,o.Z)(I,2),w=L[0],G=L[1],C=function(e){m(e),l(!1),n("group",e)},R=(t?null==E?void 0:E.results:null==E?void 0:E.data)||[],U=(t?null==E?void 0:E.total:null==E?void 0:E.count)||0;return s().createElement(s().Fragment,null,s().createElement(O.p,null,!y&&!p&&i&&U>R.length?s().createElement(S.u,{variant:"warning",className:"pf-u-font-weight-bold"},"Over ",R.length," results found. Refine your search."):s().createElement(S.u,{className:"pf-u-font-weight-bold"},"Select a group")),s().createElement(b.P,{variant:"typeahead",typeAheadAriaLabel:"Select a group",onToggle:function(e){l(e)},onSelect:function(e,t){e&&C(t)},onClear:function(){G(""),h(),C(null)},selections:p||w,isOpen:i,onFilter:D()((function(e,t){e&&t!=w&&(G(t),h({name:encodeURIComponent(t)}))}),300),"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click to select a group",noResultsFoundText:y?"Loading...":"No results found",isInputValuePersisted:!0,maxHeight:"180px"},y?[]:null==R?void 0:R.map((function(e){var n=e.id,a=e.name,r=e.DeviceGroup;return s().createElement(_.$,{key:t?n:r.ID,value:{toString:function(){return t?a:r.Name},groupId:t?n:r.ID}})}))))};var w=n(32349),G=n(77760),C=n(47173),R=n(68340),U=function(e){var t=e.closeModal;return s().createElement(s().Fragment,null,s().createElement(R.x,null,"Or"),s().createElement(C.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create Group"))};U.propTypes={closeModal:g().func};var k=function(e){var t=e.length>1?"".concat(e.length," systems"):e[0].name;return s().createElement(R.x,null,"Select a group to add ",s().createElement("strong",null,t," ")," or create a new one.")},j=function(e){return{fields:[{component:y.Z.PLAIN_TEXT,name:"description",label:k(e)},{component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:E.Z.REQUIRED}]},{component:"create-group-btn",name:"create-group-btn"}]}},F=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.setIsCreateGroupModalOpen,r=e.reloadData,o=e.deviceIds,i=(0,G.useDispatch)(),l=(0,P.gV)(N.h);return s().createElement(h.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Add to group",submitLabel:"Add",additionalMappers:{"search-input":{component:L},"create-group-btn":{component:U,closeModal:function(){a(!0),n(!1)}}},schema:j(o),onSubmit:function(e){var t,n=e.group,a={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(n.toString()," successfully")},onError:{title:"Error",description:"Failed to add system to group"}};t=l?function(){return(0,Z.FP)(n.groupId,o)}:function(){return(0,Z.e3)(parseInt(n.groupId),o)},(0,w.Z)(i,t,a)},reloadData:r})};const x=F;F.propTypes={isModalOpen:g().bool,setIsModalOpen:g().func,setIsCreateGroupModalOpen:g().func,reloadData:g().func,deviceIds:g().array};var V=function(e){(0,A.Z)(e);var t=(0,M.default)().change,n=(0,u.useState)(!1),a=(0,o.Z)(n,2),r=a[0],l=a[1],c=(0,u.useState)(null),d=(0,o.Z)(c,2),p=d[0],m=d[1],f=function(){m(null),t("group",null),l(!1)};return s().createElement(s().Fragment,null,s().createElement(b.P,{variant:"typeahead",typeAheadAriaLabel:"Select a state",onToggle:function(e){return l(e)},onSelect:function(e,n,a){a?f():(m(n),l(!1)),t("group",n)},onClear:f,selections:p,isOpen:r,"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click select group"},e.defaultOptions.map((function(e,t){var n=e.DeviceGroup;return s().createElement(_.$,(0,i.Z)({key:t,value:{toString:function(){return n.Name},groupId:n.ID}},n.description&&{description:n.description}))}))))};V.propTypes={defaultOptions:g().array};const H=V;var Y=n(69957),$=n(37655),z=function(e){var t=e[0].deviceGroups,n=(0,P.gV)(N.h),a=e.length>1?"".concat(e.length," systems"):e[0].name,r=1===t.length?t[0].Name:"".concat(t.length," groups");return n?s().createElement(R.x,null,s().createElement("strong",null,a," ")," will no longer be part of"," ",s().createElement("strong",null,r)," and its configuration will be impacted."):t.length>1?s().createElement(R.x,null,"Select the group you want to remove ",s().createElement("strong",null,a)," from."):s().createElement(R.x,null,"Do you want to remove ",s().createElement("strong",null,a," ")," from"," ",s().createElement("strong",null,r),"?")},K=function(){return s().createElement(Y.ZP,{color:$.Z.value})},Q=function(e){var t={fields:[{component:y.Z.PLAIN_TEXT,name:"description",label:z(e)}]};return e[0].deviceGroups.length>1&&t.fields.push({component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:E.Z.REQUIRED}]}),t},B=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.reloadData,r=e.deviceInfo,o=(0,G.useDispatch)(),i=(0,P.gV)(N.h),l=r[0].deviceGroups;return s().createElement(h.Z,{isOpen:t,variant:"danger",closeModal:function(){return n(!1)},title:"Remove from group",submitLabel:"Remove",titleIconVariant:K,additionalMappers:{"search-input":{component:H,defaultOptions:l.map((function(e){return{DeviceGroup:e}}))||[]}},schema:Q(r),onSubmit:function(e){var t,n=l.length>1,a=n?e.group.toString():l[0].Name,c=n?e.group.groupId:l[0].ID,u={onSuccess:{title:"Success",description:"".concat(r[0].name," has been removed from ").concat(a," successfully")},onError:{title:"Error",description:"Failed to remove system from group"}};t=i?function(){return(0,Z.ur)(c,[r[0].UUID])}:function(){return(0,Z._j)(c,r[0].ID)},(0,w.Z)(o,t,u)},reloadData:a})};const W=B;B.propTypes={isModalOpen:g().bool,setIsModalOpen:g().func,reloadData:g().func,deviceInfo:g().array};var X=n(41825),q=n(8027),J=n(68519),ee=n(52643),te=n(37619),ne=n(22663),ae=n(94778),re=n(83215);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ce=s().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(4390),n.e(6244),n.e(8797),n.e(9986),n.e(6681)]).then(n.bind(n,68940))})),ue=function(e){return s().createElement(ne.Z,(0,i.Z)({appName:"inventory",module:"./TextInputModal"},e))},se=function(e){return s().createElement(ne.Z,(0,i.Z)({appName:"inventory",module:"./DeleteModal"},e))},de=function(e){var t,n=e.historyProp,r=e.navigateProp,i=e.locationProp,l=e.showHeaderProp,v=e.notificationProp,g=e.urlName,E=(0,m.Z)(),y=n?n():J.k6?(0,J.k6)():null,h=(i?i():J.TH?(0,J.TH)():null).pathname,I=(0,T.Z)({api:q.$v,tableReload:!0}),D=(0,o.Z)(I,2),O=D[0],S=D[1],b=void 0===l||l,_=O.data,A=O.isLoading,M=O.hasError,Z=(0,u.useState)(!1),L=(0,o.Z)(Z,2),C=L[0],R=L[1],U=(0,u.useState)(!1),k=(0,o.Z)(U,2),j=k[0],F=k[1],V=(0,u.useState)(!1),H=(0,o.Z)(V,2),Y=H[0],$=H[1],z=(0,u.useState)(!1),K=(0,o.Z)(z,2),Q=K[0],B=K[1],ne=(0,u.useState)([]),oe=(0,o.Z)(ne,2),de=oe[0],pe=oe[1],me=(0,u.useState)([]),fe=(0,o.Z)(me,2),ve=fe[0],ge=fe[1],Ee=(0,u.useState)(!1),ye=(0,o.Z)(Ee,2),he=ye[0],Ie=ye[1],De=(0,u.useState)(!1),Oe=(0,o.Z)(De,2),Se=Oe[0],be=Oe[1],_e=(0,u.useState)(!1),Ae=(0,o.Z)(_e,2),Me=Ae[0],Te=Ae[1],Ze=(0,G.useDispatch)(),Pe=(0,u.useState)({isOpen:!1,deviceData:null,imageData:null}),Ne=(0,o.Z)(Pe,2),Le=Ne[0],we=Ne[1],Ge=(0,P.gV)(N.h),Ce=function(e,t){R(!0),t?pe(e):ge(e),Ie(t)},Re=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:be(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue="";void 0!==l&&b?Ue="edge-devices pf-l-page__main-section pf-c-page__main-section":b||(Ue="pf-c-toolbar"),(0,u.useEffect)((function(){var e;null==E||null===(e=E.updateDocumentTitle)||void 0===e||e.call(E,"Systems - Inventory | Edge management")}),[E]);var ke=(0,P.gV)("edge-management.hide_groups_actions");return s().createElement(s().Fragment,null,b&&s().createElement(d.Z,{className:"pf-m-light"},s().createElement(p.Z,{title:"Systems"})),b,s().createElement("section",{className:Ue},s().createElement(f.default,{historyProp:n,navigateProp:r,locationProp:i,isSystemsView:!0,data:null==_||null===(t=_.data)||void 0===t?void 0:t.devices,count:null==_?void 0:_.count,isLoading:A,hasError:M,setUpdateModal:we,updateModal:Le,handleAddDevicesToGroup:Ce,handleRemoveDevicesFromGroup:function(e,t){F(!0),t?pe(e):ge(e),Ie(t)},handleEditNameSystem:function(e,t){$(!0),t?pe(e):ge(e),Ie(t)},handleDeleteSystem:function(e,t){B(!0),t?pe(e):ge(e),Ie(t)},handleUpdateSelected:function(){we((function(e){return ie(ie({},e),{},{deviceData:ve.map((function(e){return{id:e.id,display_name:e.display_name,deviceStatus:e.deviceStatus}})),imageData:{imageName:ve[0].imageName},imageSetId:ve[0].imageSetId,isOpen:!0})}))},hasCheckbox:!0,selectedItems:ge,selectedItemsUpdateable:function(){var e=!1;if(ve.length>0){var t,n=ve[0].imageSetId,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?le(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}(ve);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.imageSetId!==n){e=!1;break}(!e&&r.updateImageData&&"updateAvailable"===r.deviceStatus||"unresponsive"===r.deviceStatus||"error"===r.deviceStatus)&&(e=!0)}}catch(e){a.e(e)}finally{a.f()}}return e}(),kebabItems:ke?[{isDisabled:Ge?!(ve.length>0)||ve.filter((function(e){var t;return(null===(t=e.deviceGroups)||void 0===t?void 0:t.length)>0})).length>0:!(ve.length>0),title:"Add to group",onClick:function(){return Ce(ve.map((function(e){return{ID:e.deviceID,name:e.display_name,UUID:e.id}})),!1)}}]:void 0,hasModalSubmitted:Se,setHasModalSubmitted:be,fetchDevices:S,urlName:g})),Le.isOpen&&s().createElement(u.Suspense,{fallback:s().createElement(ee.b,null,s().createElement(te.$,null))},s().createElement(ce,{navigateBack:function(){y.push({pathname:h}),we((function(e){return console.log("Click modal"),ie(ie({},e),{},{isOpen:!1})}))},setUpdateModal:we,updateModal:Le,notificationProp:v,refreshTable:Re})),C&&s().createElement(x,{isModalOpen:C,setIsModalOpen:R,setIsCreateGroupModalOpen:Te,reloadData:Re,deviceIds:he?de:ve}),Me&&s().createElement(X.Z,{isModalOpen:Me,setIsModalOpen:Te,reloadData:Re,deviceIds:he?de:ve}),j&&s().createElement(W,{isModalOpen:j,setIsModalOpen:F,reloadData:Re,deviceInfo:he?de:ve}),Y&&s().createElement(ue,{isOpen:Y,title:"Edit display name",value:he?de[0].name:ve[0].name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:function(){return $(!1)},onSubmit:function(e){var t=he?de[0].UUID:ve[0].UUID,n=he?de[0].name:ve[0].name,a={onSuccess:{title:"Display name for entity with ID ".concat(t," has been changed to ").concat(e)},onError:{title:"Error",description:"Failed to update device name"}};v?(0,w.Z)(Ze,(function(){return(0,ae.$Y)(t,e,n)}),a,v):Ze((0,ae.$Y)(t,e,n)),$(!1)},className:"sentry-mask data-hj-suppress"}),Q&&s().createElement(se,{className:"sentry-mask data-hj-suppress",handleModalToggle:B,isModalOpen:Q,currentSytems:he?de[0]:ve[0],onConfirm:function(){var e=he?de[0]:ve[0],t=e.display_name,n=[e.UUID],a={onWarning:{title:"Delete operation initiated",description:"Removal of ".concat(t," started.")},onError:{title:"Error",description:"Failed to initial delete device"}},r={onSuccess:{title:"Delete operation finished",description:"".concat(t," has been successfully removed.")},onError:{title:"Error",description:"Failed to delete device"}};v?((0,w.Z)(Ze,(function(){return(0,re.wN)({id:"remove-initiated",variant:"warning"})}),a,v),(0,w.Z)(Ze,(function(){return(0,ae.Ks)(n,t)}),r,v)):(Ze((0,re.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(t," started."),dismissable:!1})),Ze((0,ae.Ks)(n,t))),B(!1)}}))};de.propTypes={historyProp:g().func,navigateProp:g().func,locationProp:g().func,showHeaderProp:g().bool,notificationProp:g().object,urlName:g().string};const pe=de},59086:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>l,Cz:()=>O,FA:()=>f,Ng:()=>s,Nv:()=>g,Oi:()=>D,RD:()=>E,Th:()=>c,Tz:()=>I,W5:()=>y,aI:()=>_,j$:()=>S,rQ:()=>h,sK:()=>u,tG:()=>m,wg:()=>p,xX:()=>d,zN:()=>v});var a=n(24350),r=n.n(a),o=n(94654),i=n.n(o),l="LOAD_DEVICE_SUMMARY",c="LOAD_ACTIVE_IMAGES",u="LOAD_EDGE_IMAGES",s="LOAD_EDGE_IMAGE_SETS",d="LOAD_EDGE_IMAGE_PACKAGES",p="LOAD_GROUPS",m="LOAD_GROUP_DETAIL",f="LOAD_TRESHOLD",v="LOAD_DEVICES_INFO",g="LOAD_CANARIES_INFO",E="LOAD_GROUP_DEVICES_INFO",y="LOAD_IMAGE_STATUS",h="LOAD_IMAGE_DETAIL",I="LOAD_IMAGE_SET_DETAIL",D="CREATE_NEW_IMAGE",O=("".concat(D,"_RESET"),"POLLING_IMAGES"),S="LOAD_DEVICE_TABLE",b=i()([u,s,d,c,p,m,f,v,g,E,y,h,I,D,S,"UPDATE_DISPLAY_NAME","REMOVE_ENTITY"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),_=r()(b,(function(e){return e}))},94778:(e,t,n)=>{"use strict";n.d(t,{$Y:()=>d,Es:()=>c,Fj:()=>s,J_:()=>l,Ks:()=>p,n9:()=>u});var a=n(59086),r=n(93597),o=(n(8027),n(66702)),i=n(48903),l=function(e,t){e({type:a.rQ,payload:(0,r.Kz)({id:t})}).catch((function(){return null}))},c=function(e,t,n){e({type:a.Oi,payload:(0,r.Bi)(t)}).then(n).catch((function(){return null}))},u=function(e,t){e({type:a.Ng,payload:(0,r.QY)(t)}).catch((function(){return null}))},s=function(e){var t=e.id,n=e.name;return{type:"".concat(a.Cz,"_ADD"),payload:{name:n,id:t}}},d=function(e,t,n){return{type:a.aI.UPDATE_DISPLAY_NAME,payload:o.E7.apiHostPatchHostById([e],{display_name:t}),meta:{id:e,value:t,origValue:n,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},p=function(e,t){return{type:a.aI.REMOVE_ENTITY,payload:(0,i.a6)(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}}},71338:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6838.e23e465f8a6f5dfc49d3813d0e1cfd07.js.map
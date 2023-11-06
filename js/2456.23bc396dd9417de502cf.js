(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[2456],{36621:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var r=n(70655),a=n(92950),o=n(49945),i=n(38296);const c=e=>{var{children:t,className:n,component:c="div",id:s,isLiveRegion:l=!1}=e,u=(0,r.__rest)(e,["children","className","component","id","isLiveRegion"]);const d=c;return a.createElement(d,Object.assign({id:s,className:(0,i.i)(o.Z.helperText,n)},l&&{"aria-live":"polite"},u),t)};c.displayName="HelperText"},65673:(e,t,n)=>{"use strict";n.d(t,{u:()=>p});var r=n(70655),a=n(92950),o=n(49945),i=n(38296),c=n(80965),s=n(69957),l=n(68778),u=n(43047);const d={default:"",indeterminate:o.Z.modifiers.indeterminate,warning:o.Z.modifiers.warning,success:o.Z.modifiers.success,error:o.Z.modifiers.error},p=e=>{var{children:t,className:n,component:p="div",variant:m="default",icon:f,isDynamic:v=!1,hasIcon:h=v,id:y,screenReaderText:g=`${m} status`}=e,E=(0,r.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const I=p;return a.createElement(I,Object.assign({className:(0,i.i)(o.Z.helperTextItem,d[m],v&&o.Z.modifiers.dynamic,n),id:y},E),f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},f),h&&!f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},("default"===m||"indeterminate"===m)&&a.createElement(c.ZP,null),"warning"===m&&a.createElement(s.ZP,null),"success"===m&&a.createElement(l.ZP,null),"error"===m&&a.createElement(u.ZP,null)),a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemText)},t,v&&a.createElement("span",{className:"pf-u-screen-reader"},": ",g,";")))};p.displayName="HelperTextItem"},80965:(e,t,n)=>{"use strict";n.d(t,{V_:()=>o,ZP:()=>i,jm:()=>a});var r=n(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},49945:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(71338);const r={helperText:"pf-c-helper-text",helperTextItem:"pf-c-helper-text__item",helperTextItemIcon:"pf-c-helper-text__item-icon",helperTextItemText:"pf-c-helper-text__item-text",modifiers:{indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-theme-dark"}},22663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(85893),a=n(92950),o=n.n(a),i=n(59823),c=n(2833),s=n(94184),l=n.n(s),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},d=function(e){var t=e.appName,n=e.scope,a=e.module,o=e.fallback,s=void 0===o?(0,r.jsx)(c.Bullseye,{children:(0,r.jsx)(c.Spinner,{size:"xl"})}):o,d=e.innerRef,p=e.className,m=e.component,f=void 0===m?"section":m,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["appName","scope","module","fallback","innerRef","className","component"]),h=u({className:p,appName:t,module:a,scope:null!=n?n:t,ErrorComponent:s,ref:d,fallback:s},v);return(0,r.jsx)(f,u({className:l()(p,t)},{children:(0,r.jsx)(i.ScalprumComponent,u({},h))}))};const p=o().forwardRef((function(e,t){return(0,r.jsx)(d,u({innerRef:t},e))}))},22456:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ie});var r=n(93433),a=n(15861),o=n(4942),i=n(29439),c=n(87462),s=n(64687),l=n.n(s),u=n(92950),d=n.n(u),p=n(89376),m=n(39173),f=n(55140),v=n(15656),h=n(45697),y=n.n(h),g=n(64124),E=n(96354),I=n(60722),b=n(23279),D=n.n(b),O=n(36621),S=n(65673),_=n(54680),Z=n(92694),x=n(41693),A=n(48880),N=n(96094),T=n(87029),M=n(28118);const w=function(e){(0,x.Z)(e);var t=(0,M.Z)(!1),n=(0,A.default)().change,r=(0,u.useState)(!1),a=(0,i.Z)(r,2),o=a[0],c=a[1],s=(0,u.useState)(null),l=(0,i.Z)(s,2),p=l[0],m=l[1],f=(0,N.Z)({api:t?T.xk:T.jA,tableReload:!0}),v=(0,i.Z)(f,4),h=v[0],y=h.data,g=h.isLoading,E=v[1],I=v[2],b=v[3],w=(0,u.useState)(""),P=(0,i.Z)(w,2),L=P[0],G=P[1],k=function(e){m(e),c(!1),n("group",e)},j=function(){G(""),E(),k(null)};(0,u.useEffect)((function(){b((function(){return t?T.xk:T.jA}))}),[t]),(0,u.useEffect)((function(){j()}),[I]);var R=(t?null==y?void 0:y.results:null==y?void 0:y.data)||[],C=(t?null==y?void 0:y.total:null==y?void 0:y.count)||0;return d().createElement(d().Fragment,null,d().createElement(O.p,null,!g&&!p&&o&&C>R.length?d().createElement(S.u,{variant:"warning",className:"pf-u-font-weight-bold"},"Over ",R.length," results found. Refine your search."):d().createElement(S.u,{className:"pf-u-font-weight-bold"},"Select a group")),d().createElement(_.P,{variant:"typeahead",typeAheadAriaLabel:"Select a group",onToggle:function(e){c(e)},onSelect:function(e,t){e&&k(t)},onClear:j,selections:p||L,isOpen:o,onFilter:D()((function(e,t){e&&t!=L&&(G(t),E({name:encodeURIComponent(t)}))}),300),"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click to select a group",noResultsFoundText:g?"Loading...":"No results found",isInputValuePersisted:!0,maxHeight:"180px"},g?[]:null==R?void 0:R.map((function(e){var n=e.id,r=e.name,a=e.DeviceGroup;return d().createElement(Z.$,{key:t?n:a.ID,value:{toString:function(){return t?r:a.Name},groupId:t?n:a.ID}})}))))};var P=n(32349),L=n(77760),G=n(47173),k=n(68340),j=function(e){var t=e.closeModal;return d().createElement(d().Fragment,null,d().createElement(k.x,null,"Or"),d().createElement(G.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create Group"))};j.propTypes={closeModal:y().func};var R=function(e){var t=e.length>1?"".concat(e.length," systems"):e[0].name;return d().createElement(k.x,null,"Select a group to add ",d().createElement("strong",null,t," ")," or create a new one.")},C=function(e){return{fields:[{component:E.Z.PLAIN_TEXT,name:"description",label:R(e)},{component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:g.Z.REQUIRED}]},{component:"create-group-btn",name:"create-group-btn"}]}},U=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.setIsCreateGroupModalOpen,a=e.reloadData,o=e.deviceIds,i=(0,L.useDispatch)(),c=(0,M.Z)(!1);return d().createElement(I.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Add to group",submitLabel:"Add",additionalMappers:{"search-input":{component:w},"create-group-btn":{component:j,closeModal:function(){r(!0),n(!1)}}},schema:C(o),onSubmit:function(e){var t,n=e.group,r={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(n.toString()," successfully")},onError:{title:"Error",description:"Failed to add system to group"}};t=c?function(){return(0,T.FP)(n.groupId,o)}:function(){return(0,T.e3)(parseInt(n.groupId),o)},(0,P.Z)(i,t,r)},reloadData:a})};const F=U;U.propTypes={isModalOpen:y().bool,setIsModalOpen:y().func,setIsCreateGroupModalOpen:y().func,reloadData:y().func,deviceIds:y().array};var H=n(78262),V=n(41825),z=n(8027),Y=n(68519),$=n(52643),K=n(37619),Q=n(22663),B=n(94778),X=n(83215),q=n(48903),W=n(42559);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=d().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(4390),n.e(6244),n.e(8797),n.e(9986),n.e(6681)]).then(n.bind(n,68940))})),re=function(e){return d().createElement(Q.Z,(0,c.Z)({appName:"inventory",module:"./TextInputModal"},e))},ae=function(e){return d().createElement(Q.Z,(0,c.Z)({appName:"inventory",module:"./DeleteModal"},e))},oe=function(e){var t,n,o=e.historyProp,c=e.navigateProp,s=e.locationProp,h=e.showHeaderProp,y=e.notificationProp,g=e.urlName,E=(0,f.Z)(),I=o?o():Y.k6?(0,Y.k6)():null,b=(s?s():Y.TH?(0,Y.TH)():null).pathname,D=(0,N.Z)({api:z.$v,tableReload:!0}),O=(0,i.Z)(D,2),S=O[0],_=O[1],Z=void 0===h||h,x=S.data,A=S.isLoading,T=S.hasError,M=null==x||null===(t=x.data)||void 0===t?void 0:t.enforce_edge_groups,w=(0,u.useState)(!1),G=(0,i.Z)(w,2),k=G[0],j=G[1],R=(0,u.useState)(!1),C=(0,i.Z)(R,2),U=C[0],Q=C[1],J=(0,u.useState)(!1),oe=(0,i.Z)(J,2),ie=oe[0],ce=oe[1],se=(0,u.useState)(!1),le=(0,i.Z)(se,2),ue=le[0],de=le[1],pe=(0,u.useState)([]),me=(0,i.Z)(pe,2),fe=me[0],ve=me[1],he=(0,u.useState)([]),ye=(0,i.Z)(he,2),ge=ye[0],Ee=ye[1],Ie=(0,u.useState)(!1),be=(0,i.Z)(Ie,2),De=be[0],Oe=be[1],Se=(0,u.useState)(!1),_e=(0,i.Z)(Se,2),Ze=_e[0],xe=_e[1],Ae=(0,u.useState)(!1),Ne=(0,i.Z)(Ae,2),Te=Ne[0],Me=Ne[1],we=(0,L.useDispatch)(),Pe=(0,u.useState)({isOpen:!1,deviceData:null,imageData:null}),Le=(0,i.Z)(Pe,2),Ge=Le[0],ke=Le[1],je=(0,q.gV)(W.h),Re=!M&&je,Ce=function(e,t){j(!0),t?ve(e):Ee(e),Oe(t)},Ue=function(e,t){Q(!0),t?ve(e):Ee(e),Oe(t)},Fe=function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:xe(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He="";void 0!==h&&Z?He="edge-devices pf-l-page__main-section pf-c-page__main-section":Z||(He="pf-c-toolbar"),(0,u.useEffect)((function(){var e;null==E||null===(e=E.updateDocumentTitle)||void 0===e||e.call(E,"Systems - Inventory | Edge management")}),[E]);var Ve=[];if(!(0,q.gV)(W._)){var ze=[{isDisabled:Re?!(ge.length>0)||ge.filter((function(e){var t;return(null===(t=e.deviceGroups)||void 0===t?void 0:t.length)>0})).length>0:!(ge.length>0),title:"Add to group",onClick:function(){return Ce(ge.map((function(e){return{ID:e.deviceID,name:e.display_name,UUID:e.id}})),!1)}}];Re&&ze.push({isDisabled:!(ge.length>0)||ge.filter((function(e){return void 0===e.deviceGroups||0===e.deviceGroups.length})).length>0||1!==ge.reduce((function(e,t){var n=(t.deviceGroups?t.deviceGroups.map((function(e){return e.ID})):[]).filter((function(t){return!e.includes(t)}));return e.push.apply(e,(0,r.Z)(n)),e}),[]).length,title:"Remove from group",onClick:function(){return Ue(ge.map((function(e){return{ID:e.deviceID,name:e.display_name,UUID:e.id,deviceGroups:e.deviceGroups}})),!1)}}),Ve.push.apply(Ve,ze)}return d().createElement(d().Fragment,null,Z&&d().createElement(p.Z,{className:"pf-m-light"},d().createElement(m.Z,{title:"Systems"})),Z,d().createElement("section",{className:He},d().createElement(v.default,{historyProp:o,navigateProp:c,locationProp:s,isSystemsView:!0,data:null==x||null===(n=x.data)||void 0===n?void 0:n.devices,count:null==x?void 0:x.count,isLoading:A,hasError:T,setUpdateModal:ke,updateModal:Ge,handleAddDevicesToGroup:Ce,handleRemoveDevicesFromGroup:Ue,handleEditNameSystem:function(e,t){ce(!0),t?ve(e):Ee(e),Oe(t)},handleDeleteSystem:function(e,t){de(!0),t?ve(e):Ee(e),Oe(t)},handleUpdateSelected:function(){ke((function(e){return ee(ee({},e),{},{deviceData:ge.map((function(e){return{id:e.id,display_name:e.display_name,deviceStatus:e.deviceStatus}})),imageData:{imageName:ge[0].imageName},imageSetId:ge[0].imageSetId,isOpen:!0})}))},hasCheckbox:!0,selectedItems:Ee,selectedItemsUpdateable:function(){var e=!1;if(ge.length>0){var t,n=ge[0].imageSetId,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}(ge);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.imageSetId!==n){e=!1;break}(!e&&a.updateImageData&&"updateAvailable"===a.deviceStatus||"unresponsive"===a.deviceStatus||"error"===a.deviceStatus)&&(e=!0)}}catch(e){r.e(e)}finally{r.f()}}return e}(),kebabItems:Ve.length>0?Ve:void 0,hasModalSubmitted:Ze,setHasModalSubmitted:xe,fetchDevices:_,urlName:g,enforceEdgeGroups:M})),Ge.isOpen&&d().createElement(u.Suspense,{fallback:d().createElement($.b,null,d().createElement(K.$,null))},d().createElement(ne,{navigateBack:function(){I.push({pathname:b}),ke((function(e){return console.log("Click modal"),ee(ee({},e),{},{isOpen:!1})}))},setUpdateModal:ke,updateModal:Ge,notificationProp:y,refreshTable:Fe})),k&&d().createElement(F,{isModalOpen:k,setIsModalOpen:j,setIsCreateGroupModalOpen:Me,reloadData:Fe,deviceIds:De?fe:ge}),Te&&d().createElement(V.Z,{isModalOpen:Te,setIsModalOpen:Me,reloadData:Fe,deviceIds:De?fe:ge}),U&&d().createElement(H.Z,{isModalOpen:U,setIsModalOpen:Q,reloadData:Fe,deviceInfo:De?fe:ge}),ie&&d().createElement(re,{isOpen:ie,title:"Edit display name",value:De?fe[0].name:ge[0].name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:function(){return ce(!1)},onSubmit:function(e){var t=De?fe[0].UUID:ge[0].UUID,n=De?fe[0].name:ge[0].name,r={onSuccess:{title:"Display name for entity with ID ".concat(t," has been changed to ").concat(e)},onError:{title:"Error",description:"Failed to update device name"}};y?(0,P.Z)(we,(function(){return(0,B.$Y)(t,e,n)}),r,y):we((0,B.$Y)(t,e,n)),ce(!1)},className:"sentry-mask data-hj-suppress"}),ue&&d().createElement(ae,{className:"sentry-mask data-hj-suppress",handleModalToggle:de,isModalOpen:ue,currentSytems:De?fe[0]:ge[0],onConfirm:function(){var e=De?fe[0]:ge[0],t=e.display_name,n=[e.UUID],r={onWarning:{title:"Delete operation initiated",description:"Removal of ".concat(t," started.")},onError:{title:"Error",description:"Failed to initial delete device"}},a={onSuccess:{title:"Delete operation finished",description:"".concat(t," has been successfully removed.")},onError:{title:"Error",description:"Failed to delete device"}};y?((0,P.Z)(we,(function(){return(0,X.wN)({id:"remove-initiated",variant:"warning"})}),r,y),(0,P.Z)(we,(function(){return(0,B.Ks)(n,t)}),a,y)):(we((0,X.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(t," started."),dismissable:!1})),we((0,B.Ks)(n,t))),de(!1)}}))};oe.propTypes={historyProp:y().func,navigateProp:y().func,locationProp:y().func,showHeaderProp:y().bool,notificationProp:y().object,urlName:y().string};const ie=oe},41825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(15861),a=n(64687),o=n.n(a),i=n(92950),c=n.n(i),s=n(45697),l=n.n(s),u=n(64124),d=n(96354),p=n(60722),m=n(87029),f=n(48903),v=n(32349),h=n(77760),y=n(28118),g=function(){var e=(0,r.Z)(o().mark((function e(){var t,n=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.length>0&&void 0!==n[0]?n[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,m.Tb)(t);case 5:if(!e.sent.data.isValid){e.next=8;break}throw"Group name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=r.length>0&&void 0!==r[0]?r[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,m.Qo)(t);case 5:if(!((n=e.sent).results.length>0&&n.results[0].name===t)){e.next=8;break}throw"Group name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I={groupName:function(){return g}},b={groupName:function(){return E}},D={fields:[{component:d.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,autoFocus:!0,validate:[{type:"groupName"},{type:u.Z.REQUIRED},{type:u.Z.MAX_LENGTH,threshold:50},f.qg]}]},O=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.deviceIds,i=e.reloadData,s=(0,h.useDispatch)(),l=(0,y.Z)(!1),u=function(e){var t,n={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return t=l?function(){return(0,m.D9)(e)}:function(){return(0,m.sS)(e)},(0,v.Z)(s,t,n)},d=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,i,c,d,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add system to group"}},!l){e.next=9;break}return e.next=4,u(t);case 4:i=e.sent,c=i.id,r=function(){return(0,m.FP)(c,a)},e.next=14;break;case 9:return e.next=11,u(t);case 11:d=e.sent,p=d.ID,r=function(){return(0,m.e3)(parseInt(p),a)};case 14:(0,v.Z)(s,r,n);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c().createElement(p.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Create group",submitLabel:"Create",schema:D,onSubmit:a?d:u,reloadData:i,validatorMapper:l?b:I})};const S=O;O.propTypes={isModalOpen:l().bool,setIsModalOpen:l().func,reloadData:l().func,deviceIds:l().array}},59086:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>c,Cz:()=>D,FA:()=>f,Ng:()=>u,Nv:()=>h,Oi:()=>b,RD:()=>y,Th:()=>s,Tz:()=>I,W5:()=>g,aI:()=>_,j$:()=>O,rQ:()=>E,sK:()=>l,tG:()=>m,wg:()=>p,xX:()=>d,zN:()=>v});var r=n(24350),a=n.n(r),o=n(94654),i=n.n(o),c="LOAD_DEVICE_SUMMARY",s="LOAD_ACTIVE_IMAGES",l="LOAD_EDGE_IMAGES",u="LOAD_EDGE_IMAGE_SETS",d="LOAD_EDGE_IMAGE_PACKAGES",p="LOAD_GROUPS",m="LOAD_GROUP_DETAIL",f="LOAD_TRESHOLD",v="LOAD_DEVICES_INFO",h="LOAD_CANARIES_INFO",y="LOAD_GROUP_DEVICES_INFO",g="LOAD_IMAGE_STATUS",E="LOAD_IMAGE_DETAIL",I="LOAD_IMAGE_SET_DETAIL",b="CREATE_NEW_IMAGE",D=("".concat(b,"_RESET"),"POLLING_IMAGES"),O="LOAD_DEVICE_TABLE",S=i()([l,u,d,s,p,m,f,v,h,y,g,E,I,b,O,"UPDATE_DISPLAY_NAME","REMOVE_ENTITY"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),_=a()(S,(function(e){return e}))},94778:(e,t,n)=>{"use strict";n.d(t,{$Y:()=>d,Es:()=>s,Fj:()=>u,J_:()=>c,Ks:()=>p,n9:()=>l});var r=n(59086),a=n(93597),o=(n(8027),n(66702)),i=n(48903),c=function(e,t){e({type:r.rQ,payload:(0,a.Kz)({id:t})}).catch((function(){return null}))},s=function(e,t,n){e({type:r.Oi,payload:(0,a.Bi)(t)}).then(n).catch((function(){return null}))},l=function(e,t){e({type:r.Ng,payload:(0,a.QY)(t)}).catch((function(){return null}))},u=function(e){var t=e.id,n=e.name;return{type:"".concat(r.Cz,"_ADD"),payload:{name:n,id:t}}},d=function(e,t,n){return{type:r.aI.UPDATE_DISPLAY_NAME,payload:o.E7.apiHostPatchHostById([e],{display_name:t}),meta:{id:e,value:t,origValue:n,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},p=function(e,t){return{type:r.aI.REMOVE_ENTITY,payload:(0,i.a6)(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}}},69199:(e,t,n)=>{var r=n(89881),a=n(98612);e.exports=function(e,t){var n=-1,o=a(e)?Array(e.length):[];return r(e,(function(e,r,a){o[++n]=t(e,r,a)})),o}},94654:(e,t,n)=>{var r=n(21078),a=n(35161);e.exports=function(e,t){return r(a(e,t),1)}},24350:(e,t,n)=>{var r=n(89465),a=n(55189)((function(e,t,n){r(e,n,t)}));e.exports=a},35161:(e,t,n)=>{var r=n(29932),a=n(67206),o=n(69199),i=n(1469);e.exports=function(e,t){return(i(e)?r:o)(e,a(t,3))}},71338:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2456.fd6a836580fa8a2dbbfb282f78daa65a.js.map
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[2456],{36621:(e,t,n)=>{"use strict";n.d(t,{p:()=>l});var a=n(70655),r=n(92950),o=n(49945),i=n(38296);const l=e=>{var{children:t,className:n,component:l="div",id:c,isLiveRegion:s=!1}=e,u=(0,a.__rest)(e,["children","className","component","id","isLiveRegion"]);const d=l;return r.createElement(d,Object.assign({id:c,className:(0,i.i)(o.Z.helperText,n)},s&&{"aria-live":"polite"},u),t)};l.displayName="HelperText"},65673:(e,t,n)=>{"use strict";n.d(t,{u:()=>p});var a=n(70655),r=n(92950),o=n(49945),i=n(38296),l=n(80965),c=n(69957),s=n(68778),u=n(43047);const d={default:"",indeterminate:o.Z.modifiers.indeterminate,warning:o.Z.modifiers.warning,success:o.Z.modifiers.success,error:o.Z.modifiers.error},p=e=>{var{children:t,className:n,component:p="div",variant:m="default",icon:f,isDynamic:v=!1,hasIcon:g=v,id:h,screenReaderText:y=`${m} status`}=e,E=(0,a.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const I=p;return r.createElement(I,Object.assign({className:(0,i.i)(o.Z.helperTextItem,d[m],v&&o.Z.modifiers.dynamic,n),id:h},E),f&&r.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},f),g&&!f&&r.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},("default"===m||"indeterminate"===m)&&r.createElement(l.ZP,null),"warning"===m&&r.createElement(c.ZP,null),"success"===m&&r.createElement(s.ZP,null),"error"===m&&r.createElement(u.ZP,null)),r.createElement("span",{className:(0,i.i)(o.Z.helperTextItemText)},t,v&&r.createElement("span",{className:"pf-u-screen-reader"},": ",y,";")))};p.displayName="HelperTextItem"},80965:(e,t,n)=>{"use strict";n.d(t,{V_:()=>o,ZP:()=>i,jm:()=>r});var a=n(40400);const r={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},o=(0,a.IU)(r),i=o},49945:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(71338);const a={helperText:"pf-c-helper-text",helperTextItem:"pf-c-helper-text__item",helperTextItemIcon:"pf-c-helper-text__item-icon",helperTextItemText:"pf-c-helper-text__item-text",modifiers:{indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-theme-dark"}},22663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(85893),r=n(92950),o=n.n(r),i=n(59823),l=n(2833),c=n(94184),s=n.n(c),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},d=function(e){var t=e.appName,n=e.scope,r=e.module,o=e.fallback,c=void 0===o?(0,a.jsx)(l.Bullseye,{children:(0,a.jsx)(l.Spinner,{size:"xl"})}):o,d=e.innerRef,p=e.className,m=e.component,f=void 0===m?"section":m,v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["appName","scope","module","fallback","innerRef","className","component"]),g=u({className:p,appName:t,module:r,scope:null!=n?n:t,ErrorComponent:c,ref:d,fallback:c},v);return(0,a.jsx)(f,u({className:s()(p,t)},{children:(0,a.jsx)(i.ScalprumComponent,u({},g))}))};const p=o().forwardRef((function(e,t){return(0,a.jsx)(d,u({innerRef:t},e))}))},22456:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ie});var a=n(93433),r=n(15861),o=n(4942),i=n(29439),l=n(87462),c=n(64687),s=n.n(c),u=n(92950),d=n.n(u),p=n(89376),m=n(39173),f=n(55140),v=n(15656),g=n(45697),h=n.n(g),y=n(64124),E=n(96354),I=n(60722),D=n(23279),O=n.n(D),b=n(36621),S=n(65673),_=n(54680),Z=n(92694),A=n(41693),T=n(48880),N=n(96094),M=n(87029),x=n(28118);const P=function(e){(0,A.Z)(e);var t=(0,x.Z)(!1),n=(0,T.default)().change,a=(0,u.useState)(!1),r=(0,i.Z)(a,2),o=r[0],l=r[1],c=(0,u.useState)(null),s=(0,i.Z)(c,2),p=s[0],m=s[1],f=(0,N.Z)({api:t?M.xk:M.jA,tableReload:!0}),v=(0,i.Z)(f,4),g=v[0],h=g.data,y=g.isLoading,E=v[1],I=v[2],D=v[3],P=(0,u.useState)(""),w=(0,i.Z)(P,2),L=w[0],G=w[1],R=function(e){m(e),l(!1),n("group",e)},j=function(){G(""),E(),R(null)};(0,u.useEffect)((function(){D((function(){return t?M.xk:M.jA}))}),[t]),(0,u.useEffect)((function(){j()}),[I]);var C=(t?null==h?void 0:h.results:null==h?void 0:h.data)||[],k=(t?null==h?void 0:h.total:null==h?void 0:h.count)||0;return d().createElement(d().Fragment,null,d().createElement(b.p,null,!y&&!p&&o&&k>C.length?d().createElement(S.u,{variant:"warning",className:"pf-u-font-weight-bold"},"Over ",C.length," results found. Refine your search."):d().createElement(S.u,{className:"pf-u-font-weight-bold"},"Select a group")),d().createElement(_.P,{variant:"typeahead",typeAheadAriaLabel:"Select a group",onToggle:function(e){l(e)},onSelect:function(e,t){e&&R(t)},onClear:j,selections:p||L,isOpen:o,onFilter:O()((function(e,t){e&&t!=L&&(G(t),E({name:encodeURIComponent(t)}))}),300),"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click to select a group",noResultsFoundText:y?"Loading...":"No results found",isInputValuePersisted:!0,maxHeight:"180px"},y?[]:null==C?void 0:C.map((function(e){var n=e.id,a=e.name,r=e.DeviceGroup;return d().createElement(Z.$,{key:t?n:r.ID,value:{toString:function(){return t?a:r.Name},groupId:t?n:r.ID}})}))))};var w=n(32349),L=n(77760),G=n(47173),R=n(68340),j=function(e){var t=e.closeModal;return d().createElement(d().Fragment,null,d().createElement(R.x,null,"Or"),d().createElement(G.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create Group"))};j.propTypes={closeModal:h().func};var C=function(e){var t=e.length>1?"".concat(e.length," systems"):e[0].name;return d().createElement(R.x,null,"Select a group to add ",d().createElement("strong",null,t," ")," or create a new one.")},k=function(e){return{fields:[{component:E.Z.PLAIN_TEXT,name:"description",label:C(e)},{component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"create-group-btn",name:"create-group-btn"}]}},U=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.setIsCreateGroupModalOpen,r=e.reloadData,o=e.deviceIds,i=(0,L.useDispatch)(),l=(0,x.Z)(!1);return d().createElement(I.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Add to group",submitLabel:"Add",additionalMappers:{"search-input":{component:P},"create-group-btn":{component:j,closeModal:function(){a(!0),n(!1)}}},schema:k(o),onSubmit:function(e){var t,n=e.group,a={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(n.toString()," successfully")},onError:{title:"Error",description:"Failed to add system to group"}};t=l?function(){return(0,M.FP)(n.groupId,o)}:function(){return(0,M.e3)(parseInt(n.groupId),o)},(0,w.Z)(i,t,a)},reloadData:r})};const F=U;U.propTypes={isModalOpen:h().bool,setIsModalOpen:h().func,setIsCreateGroupModalOpen:h().func,reloadData:h().func,deviceIds:h().array};var V=n(78262),H=n(41825),$=n(8027),z=n(68519),Y=n(52643),K=n(37619),B=n(22663),Q=n(94778),W=n(83215),X=n(48903),q=n(42559);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ne=d().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(4390),n.e(6244),n.e(8797),n.e(9986),n.e(6681)]).then(n.bind(n,68940))})),ae=function(e){return d().createElement(B.Z,(0,l.Z)({appName:"inventory",module:"./TextInputModal"},e))},re=function(e){return d().createElement(B.Z,(0,l.Z)({appName:"inventory",module:"./DeleteModal"},e))},oe=function(e){var t,n,o=e.historyProp,l=e.navigateProp,c=e.locationProp,g=e.showHeaderProp,h=e.notificationProp,y=e.urlName,E=(0,f.Z)(),I=o?o():z.k6?(0,z.k6)():null,D=(c?c():z.TH?(0,z.TH)():null).pathname,O=(0,N.Z)({api:$.$v,tableReload:!0}),b=(0,i.Z)(O,2),S=b[0],_=b[1],Z=void 0===g||g,A=S.data,T=S.isLoading,M=S.hasError,x=null==A||null===(t=A.data)||void 0===t?void 0:t.enforce_edge_groups,P=(0,u.useState)(!1),G=(0,i.Z)(P,2),R=G[0],j=G[1],C=(0,u.useState)(!1),k=(0,i.Z)(C,2),U=k[0],B=k[1],J=(0,u.useState)(!1),oe=(0,i.Z)(J,2),ie=oe[0],le=oe[1],ce=(0,u.useState)(!1),se=(0,i.Z)(ce,2),ue=se[0],de=se[1],pe=(0,u.useState)([]),me=(0,i.Z)(pe,2),fe=me[0],ve=me[1],ge=(0,u.useState)([]),he=(0,i.Z)(ge,2),ye=he[0],Ee=he[1],Ie=(0,u.useState)(!1),De=(0,i.Z)(Ie,2),Oe=De[0],be=De[1],Se=(0,u.useState)(!1),_e=(0,i.Z)(Se,2),Ze=_e[0],Ae=_e[1],Te=(0,u.useState)(!1),Ne=(0,i.Z)(Te,2),Me=Ne[0],xe=Ne[1],Pe=(0,L.useDispatch)(),we=(0,u.useState)({isOpen:!1,deviceData:null,imageData:null}),Le=(0,i.Z)(we,2),Ge=Le[0],Re=Le[1],je=(0,X.gV)(q.h),Ce=!x&&je,ke=function(e,t){j(!0),t?ve(e):Ee(e),be(t)},Ue=function(e,t){B(!0),t?ve(e):Ee(e),be(t)},Fe=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:Ae(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve="";void 0!==g&&Z?Ve="edge-devices pf-l-page__main-section pf-c-page__main-section":Z||(Ve="pf-c-toolbar"),(0,u.useEffect)((function(){var e;null==E||null===(e=E.updateDocumentTitle)||void 0===e||e.call(E,"Systems - Inventory | Edge management")}),[E]);var He=[];if(!(0,X.gV)(q._)){var $e=[{isDisabled:Ce?!(ye.length>0)||ye.filter((function(e){var t;return(null===(t=e.deviceGroups)||void 0===t?void 0:t.length)>0})).length>0:!(ye.length>0),title:"Add to group",onClick:function(){return ke(ye.map((function(e){return{ID:e.deviceID,name:e.display_name,UUID:e.id}})),!1)}}];Ce&&$e.push({isDisabled:!(ye.length>0)||ye.filter((function(e){return void 0===e.deviceGroups||0===e.deviceGroups.length})).length>0||1!==ye.reduce((function(e,t){var n=(t.deviceGroups?t.deviceGroups.map((function(e){return e.ID})):[]).filter((function(t){return!e.includes(t)}));return e.push.apply(e,(0,a.Z)(n)),e}),[]).length,title:"Remove from group",onClick:function(){return Ue(ye.map((function(e){return{ID:e.deviceID,name:e.display_name,UUID:e.id,deviceGroups:e.deviceGroups}})),!1)}}),He.push.apply(He,$e)}return d().createElement(d().Fragment,null,Z&&d().createElement(p.Z,{className:"pf-m-light"},d().createElement(m.Z,{title:"Systems"})),Z,d().createElement("section",{className:Ve},d().createElement(v.default,{historyProp:o,navigateProp:l,locationProp:c,isSystemsView:!0,data:null==A||null===(n=A.data)||void 0===n?void 0:n.devices,count:null==A?void 0:A.count,isLoading:T,hasError:M,setUpdateModal:Re,updateModal:Ge,handleAddDevicesToGroup:ke,handleRemoveDevicesFromGroup:Ue,handleEditNameSystem:function(e,t){le(!0),t?ve(e):Ee(e),be(t)},handleDeleteSystem:function(e,t){de(!0),t?ve(e):Ee(e),be(t)},handleUpdateSelected:function(){Re((function(e){return ee(ee({},e),{},{deviceData:ye.map((function(e){return{id:e.id,display_name:e.display_name,deviceStatus:e.deviceStatus}})),imageData:{imageName:ye[0].imageName},imageSetId:ye[0].imageSetId,isOpen:!0})}))},hasCheckbox:!0,selectedItems:Ee,selectedItemsUpdateable:function(){var e=!1;if(ye.length>0){var t,n=ye[0].imageSetId,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}(ye);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r.imageSetId!==n){e=!1;break}(!e&&r.updateImageData&&"updateAvailable"===r.deviceStatus||"unresponsive"===r.deviceStatus||"error"===r.deviceStatus)&&(e=!0)}}catch(e){a.e(e)}finally{a.f()}}return e}(),kebabItems:He.length>0?He:void 0,hasModalSubmitted:Ze,setHasModalSubmitted:Ae,fetchDevices:_,urlName:y,enforceEdgeGroups:x})),Ge.isOpen&&d().createElement(u.Suspense,{fallback:d().createElement(Y.b,null,d().createElement(K.$,null))},d().createElement(ne,{navigateBack:function(){I.push({pathname:D}),Re((function(e){return console.log("Click modal"),ee(ee({},e),{},{isOpen:!1})}))},setUpdateModal:Re,updateModal:Ge,notificationProp:h,refreshTable:Fe})),R&&d().createElement(F,{isModalOpen:R,setIsModalOpen:j,setIsCreateGroupModalOpen:xe,reloadData:Fe,deviceIds:Oe?fe:ye}),Me&&d().createElement(H.Z,{isModalOpen:Me,setIsModalOpen:xe,reloadData:Fe,deviceIds:Oe?fe:ye}),U&&d().createElement(V.Z,{isModalOpen:U,setIsModalOpen:B,reloadData:Fe,deviceInfo:Oe?fe:ye}),ie&&d().createElement(ae,{isOpen:ie,title:"Edit display name",value:Oe?fe[0].name:ye[0].name,ariaLabel:"Host inventory display name",modalOuiaId:"edit-display-name-modal",cancelOuiaId:"cancel-edit-display-name",confirmOuiaId:"confirm-edit-display-name",inputOuiaId:"input-edit-display-name",onCancel:function(){return le(!1)},onSubmit:function(e){var t=Oe?fe[0].UUID:ye[0].UUID,n=Oe?fe[0].name:ye[0].name,a={onSuccess:{title:"Display name for entity with ID ".concat(t," has been changed to ").concat(e)},onError:{title:"Error",description:"Failed to update device name"}};h?(0,w.Z)(Pe,(function(){return(0,Q.$Y)(t,e,n)}),a,h):Pe((0,Q.$Y)(t,e,n)),le(!1)},className:"sentry-mask data-hj-suppress"}),ue&&d().createElement(re,{className:"sentry-mask data-hj-suppress",handleModalToggle:de,isModalOpen:ue,currentSytems:Oe?fe[0]:ye[0],onConfirm:function(){var e=Oe?fe[0]:ye[0],t=e.display_name,n=[e.UUID],a={onWarning:{title:"Delete operation initiated",description:"Removal of ".concat(t," started.")},onError:{title:"Error",description:"Failed to initial delete device"}},r={onSuccess:{title:"Delete operation finished",description:"".concat(t," has been successfully removed.")},onError:{title:"Error",description:"Failed to delete device"}};h?((0,w.Z)(Pe,(function(){return(0,W.wN)({id:"remove-initiated",variant:"warning"})}),a,h),(0,w.Z)(Pe,(function(){return(0,Q.Ks)(n,t)}),r,h)):(Pe((0,W.wN)({id:"remove-initiated",variant:"warning",title:"Delete operation initiated",description:"Removal of ".concat(t," started."),dismissable:!1})),Pe((0,Q.Ks)(n,t))),de(!1)}}))};oe.propTypes={historyProp:h().func,navigateProp:h().func,locationProp:h().func,showHeaderProp:h().bool,notificationProp:h().object,urlName:h().string};const ie=oe},78262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),l=n(64124),c=n(96354),s=n(60722),u=n(87462),d=n(29439),p=n(54680),m=n(92694),f=n(41693),v=n(48880),g=function(e){(0,f.Z)(e);var t=(0,v.default)().change,n=(0,a.useState)(!1),o=(0,d.Z)(n,2),i=o[0],l=o[1],c=(0,a.useState)(null),s=(0,d.Z)(c,2),g=s[0],h=s[1],y=function(){h(null),t("group",null),l(!1)};return r().createElement(r().Fragment,null,r().createElement(p.P,{variant:"typeahead",typeAheadAriaLabel:"Select a state",onToggle:function(e){return l(e)},onSelect:function(e,n,a){a?y():(h(n),l(!1)),t("group",n)},onClear:y,selections:g,isOpen:i,"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click select group"},e.defaultOptions.map((function(e,t){var n=e.DeviceGroup;return r().createElement(m.$,(0,u.Z)({key:t,value:{toString:function(){return n.Name},groupId:n.ID}},n.description&&{description:n.description}))}))))};g.propTypes={defaultOptions:i().array};const h=g;var y=n(32349),E=n(87029),I=n(77760),D=n(68340),O=n(69957),b=n(37655),S=n(28118),_=function(e,t){var n=e[0].deviceGroups,a=e.length>1?"".concat(e.length," systems"):e[0].name,o=1===n.length?n[0].Name:"".concat(n.length," groups");return t?r().createElement(D.x,null,r().createElement("strong",null,a," ")," will no longer be part of"," ",r().createElement("strong",null,o)," and its configuration will be impacted."):n.length>1?r().createElement(D.x,null,"Select the group you want to remove ",r().createElement("strong",null,a)," from."):r().createElement(D.x,null,"Do you want to remove ",r().createElement("strong",null,a," ")," from"," ",r().createElement("strong",null,o),"?")},Z=function(){return r().createElement(O.ZP,{color:b.Z.value})},A=function(e,t){var n={fields:[{component:c.Z.PLAIN_TEXT,name:"description",label:_(e,t)}]};return e[0].deviceGroups.length>1&&n.fields.push({component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:l.Z.REQUIRED}]}),n},T=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.reloadData,o=e.deviceInfo,i=(0,I.useDispatch)(),l=(0,S.Z)(!1),c=o[0].deviceGroups;return r().createElement(s.Z,{isOpen:t,variant:"danger",closeModal:function(){return n(!1)},title:"Remove from group",submitLabel:"Remove",titleIconVariant:Z,additionalMappers:{"search-input":{component:h,defaultOptions:c.map((function(e){return{DeviceGroup:e}}))||[]}},schema:A(o,l),onSubmit:function(e){var t,n=c.length>1,a=n?e.group.toString():c[0].Name,r=n?e.group.groupId:c[0].ID,s=o.length>1?"".concat(o.length," systems"):o[0].name,u=l?o.length>1?"Failed to remove ".concat(o.length," systems from ").concat(a):"Failed to remove 1 system from ".concat(a):"Failed to remove system from group",d={onSuccess:{title:"Success",description:"".concat(s," has been removed from ").concat(a," successfully")},onError:{title:"Error",description:u}};t=l?function(){return(0,E.ur)(r,o.map((function(e){return e.UUID})))}:function(){return(0,E._j)(r,o[0].ID)},(0,y.Z)(i,t,d)},reloadData:a})};const N=T;T.propTypes={isModalOpen:i().bool,setIsModalOpen:i().func,reloadData:i().func,deviceInfo:i().array}},59086:(e,t,n)=>{"use strict";n.d(t,{Cx:()=>l,Cz:()=>O,FA:()=>f,Ng:()=>u,Nv:()=>g,Oi:()=>D,RD:()=>h,Th:()=>c,Tz:()=>I,W5:()=>y,aI:()=>_,j$:()=>b,rQ:()=>E,sK:()=>s,tG:()=>m,wg:()=>p,xX:()=>d,zN:()=>v});var a=n(24350),r=n.n(a),o=n(94654),i=n.n(o),l="LOAD_DEVICE_SUMMARY",c="LOAD_ACTIVE_IMAGES",s="LOAD_EDGE_IMAGES",u="LOAD_EDGE_IMAGE_SETS",d="LOAD_EDGE_IMAGE_PACKAGES",p="LOAD_GROUPS",m="LOAD_GROUP_DETAIL",f="LOAD_TRESHOLD",v="LOAD_DEVICES_INFO",g="LOAD_CANARIES_INFO",h="LOAD_GROUP_DEVICES_INFO",y="LOAD_IMAGE_STATUS",E="LOAD_IMAGE_DETAIL",I="LOAD_IMAGE_SET_DETAIL",D="CREATE_NEW_IMAGE",O=("".concat(D,"_RESET"),"POLLING_IMAGES"),b="LOAD_DEVICE_TABLE",S=i()([s,u,d,c,p,m,f,v,g,h,y,E,I,D,b,"UPDATE_DISPLAY_NAME","REMOVE_ENTITY"],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]})),_=r()(S,(function(e){return e}))},94778:(e,t,n)=>{"use strict";n.d(t,{$Y:()=>d,Es:()=>c,Fj:()=>u,J_:()=>l,Ks:()=>p,n9:()=>s});var a=n(59086),r=n(93597),o=(n(8027),n(66702)),i=n(48903),l=function(e,t){e({type:a.rQ,payload:(0,r.Kz)({id:t})}).catch((function(){return null}))},c=function(e,t,n){e({type:a.Oi,payload:(0,r.Bi)(t)}).then(n).catch((function(){return null}))},s=function(e,t){e({type:a.Ng,payload:(0,r.QY)(t)}).catch((function(){return null}))},u=function(e){var t=e.id,n=e.name;return{type:"".concat(a.Cz,"_ADD"),payload:{name:n,id:t}}},d=function(e,t,n){return{type:a.aI.UPDATE_DISPLAY_NAME,payload:o.E7.apiHostPatchHostById([e],{display_name:t}),meta:{id:e,value:t,origValue:n,notifications:{fulfilled:{variant:"success",title:"Display name for entity with ID ".concat(e," has been changed to ").concat(t),dismissable:!0}}}}},p=function(e,t){return{type:a.aI.REMOVE_ENTITY,payload:(0,i.a6)(e),meta:{notifications:{fulfilled:{variant:"success",title:"Delete operation finished",description:"".concat(t," has been successfully removed."),dismissable:!0}},systems:e}}}},94654:(e,t,n)=>{var a=n(21078),r=n(35161);e.exports=function(e,t){return a(r(e,t),1)}},24350:(e,t,n)=>{var a=n(89465),r=n(55189)((function(e,t,n){a(e,n,t)}));e.exports=r},71338:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2456.e1c18efd4892b54465dc4870f8fa2882.js.map
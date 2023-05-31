(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[292],{36621:(e,t,n)=>{"use strict";n.d(t,{p:()=>c});var r=n(70655),a=n(92950),o=n(49945),i=n(38296);const c=e=>{var{children:t,className:n,component:c="div",id:l,isLiveRegion:s=!1}=e,u=(0,r.__rest)(e,["children","className","component","id","isLiveRegion"]);const d=c;return a.createElement(d,Object.assign({id:l,className:(0,i.i)(o.Z.helperText,n)},s&&{"aria-live":"polite"},u),t)};c.displayName="HelperText"},65673:(e,t,n)=>{"use strict";n.d(t,{u:()=>p});var r=n(70655),a=n(92950),o=n(49945),i=n(38296),c=n(80965),l=n(69957),s=n(68778),u=n(43047);const d={default:"",indeterminate:o.Z.modifiers.indeterminate,warning:o.Z.modifiers.warning,success:o.Z.modifiers.success,error:o.Z.modifiers.error},p=e=>{var{children:t,className:n,component:p="div",variant:m="default",icon:f,isDynamic:g=!1,hasIcon:v=g,id:h,screenReaderText:y=`${m} status`}=e,b=(0,r.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const I=p;return a.createElement(I,Object.assign({className:(0,i.i)(o.Z.helperTextItem,d[m],g&&o.Z.modifiers.dynamic,n),id:h},b),f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},f),v&&!f&&a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemIcon),"aria-hidden":!0},("default"===m||"indeterminate"===m)&&a.createElement(c.ZP,null),"warning"===m&&a.createElement(l.ZP,null),"success"===m&&a.createElement(s.ZP,null),"error"===m&&a.createElement(u.ZP,null)),a.createElement("span",{className:(0,i.i)(o.Z.helperTextItemText)},t,g&&a.createElement("span",{className:"pf-u-screen-reader"},": ",y,";")))};p.displayName="HelperTextItem"},80965:(e,t,n)=>{"use strict";n.d(t,{V_:()=>o,ZP:()=>i,jm:()=>a});var r=n(40400);const a={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},49945:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(71338);const r={helperText:"pf-c-helper-text",helperTextItem:"pf-c-helper-text__item",helperTextItemIcon:"pf-c-helper-text__item-icon",helperTextItemText:"pf-c-helper-text__item-text",modifiers:{indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-theme-dark"}},80292:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ae});var r=n(15861),a=n(4942),o=n(29439),i=n(64687),c=n.n(i),l=n(92950),s=n.n(l),u=n(89376),d=n(39173),p=n(15656),m=n(45697),f=n.n(m),g=n(64124),v=n(96354),h=n(60722),y=n(87462),b=n(23279),I=n.n(b),E=n(36621),S=n(65673),O=n(54680),Z=n(92694),D=n(41693),x=n(48880),T=n(96094),M=n(87029);const w=function(e){(0,D.Z)(e);var t=(0,x.default)().change,n=(0,l.useState)(!1),r=(0,o.Z)(n,2),a=r[0],i=r[1],c=(0,l.useState)(null),u=(0,o.Z)(c,2),d=u[0],p=u[1],m=(0,T.Z)({api:M.jA}),f=(0,o.Z)(m,2),g=f[0],v=g.data,h=g.isLoading,b=f[1],w=(0,l.useState)(""),P=(0,o.Z)(w,2),N=P[0],_=P[1],k=function(e){p(e),i(!1),t("group",e)},j=(null==v?void 0:v.data)||[],A=(null==v?void 0:v.count)||0;return s().createElement(s().Fragment,null,s().createElement(E.p,null,!h&&!d&&a&&A>j.length?s().createElement(S.u,{variant:"warning",className:"pf-u-font-weight-bold"},"Over ",j.length," results found. Refine your search."):s().createElement(S.u,{className:"pf-u-font-weight-bold"},"Select a group")),s().createElement(O.P,{variant:"typeahead",typeAheadAriaLabel:"Select a group",onToggle:function(e){i(e)},onSelect:function(e,t){e&&k(t)},onClear:function(){_(""),b(),k(null)},selections:d||N,isOpen:a,onFilter:I()((function(e,t){e&&t!=N&&(_(t),b({name:encodeURIComponent(t)}))}),300),"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click to select a group",noResultsFoundText:h?"Loading...":"No results found",isInputValuePersisted:!0,maxHeight:"180px"},h?[]:null==j?void 0:j.map((function(e){var t=e.DeviceGroup;return s().createElement(Z.$,(0,y.Z)({key:t.ID,value:{toString:function(){return t.Name},groupId:t.ID}},t.description&&{description:t.description}))}))))};var P=n(32349),N=n(77760),_=n(47173),k=n(68340),j=function(e){var t=e.closeModal;return s().createElement(s().Fragment,null,s().createElement(k.x,null,"Or"),s().createElement(_.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create Group"))};j.propTypes={closeModal:f().func};var A=function(e){var t=e.length>1?"".concat(e.length," systems"):e[0].name;return s().createElement(k.x,null,"Select a group to add ",s().createElement("strong",null,t," ")," or create a new one.")},R=function(e){return{fields:[{component:v.Z.PLAIN_TEXT,name:"description",label:A(e)},{component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:g.Z.REQUIRED}]},{component:"create-group-btn",name:"create-group-btn"}]}},C=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.setIsCreateGroupModalOpen,a=e.reloadData,o=e.deviceIds,i=(0,N.useDispatch)();return s().createElement(h.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Add to group",submitLabel:"Add",additionalMappers:{"search-input":{component:w},"create-group-btn":{component:j,closeModal:function(){r(!0),n(!1)}}},schema:R(o),onSubmit:function(e){var t=e.group,n={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.toString()," successfully")},onError:{title:"Error",description:"Failed to add system to group"}};(0,P.Z)(i,(function(){return(0,M.e3)(parseInt(t.groupId),o)}),n)},reloadData:a})};const L=C;C.propTypes={isModalOpen:f().bool,setIsModalOpen:f().func,setIsCreateGroupModalOpen:f().func,reloadData:f().func,deviceIds:f().array};var G=function(e){(0,D.Z)(e);var t=(0,x.default)().change,n=(0,l.useState)(!1),r=(0,o.Z)(n,2),a=r[0],i=r[1],c=(0,l.useState)(null),u=(0,o.Z)(c,2),d=u[0],p=u[1],m=function(){p(null),t("group",null),i(!1)};return s().createElement(s().Fragment,null,s().createElement(O.P,{variant:"typeahead",typeAheadAriaLabel:"Select a state",onToggle:function(e){return i(e)},onSelect:function(e,n,r){r?m():(p(n),i(!1)),t("group",n)},onClear:m,selections:d,isOpen:a,"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click select group"},e.defaultOptions.map((function(e,t){var n=e.DeviceGroup;return s().createElement(Z.$,(0,y.Z)({key:t,value:{toString:function(){return n.Name},groupId:n.ID}},n.description&&{description:n.description}))}))))};G.propTypes={defaultOptions:f().array};const F=G;var U=n(69957),H=n(37655),$=function(e){var t=e[0].deviceGroups,n=e.length>1?"".concat(e.length," systems"):e[0].name,r=1===t.length?t[0].Name:"".concat(t.length," groups");return t.length>1?s().createElement(k.x,null,"Select the group you want to remove ",s().createElement("strong",null,n)," from."):s().createElement(k.x,null,"Do you want to remove ",s().createElement("strong",null,n," ")," from"," ",s().createElement("strong",null,r),"?")},V=function(){return s().createElement(U.ZP,{color:H.Z.value})},z=function(e){var t={fields:[{component:v.Z.PLAIN_TEXT,name:"description",label:$(e)}]};return e[0].deviceGroups.length>1&&t.fields.push({component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:g.Z.REQUIRED}]}),t},q=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,a=e.deviceInfo,o=(0,N.useDispatch)(),i=a[0].deviceGroups;return s().createElement(h.Z,{isOpen:t,variant:"danger",closeModal:function(){return n(!1)},title:"Remove from group",submitLabel:"Remove",titleIconVariant:V,additionalMappers:{"search-input":{component:F,defaultOptions:i.map((function(e){return{DeviceGroup:e}}))||[]}},schema:z(a),onSubmit:function(e){var t=i.length>1,n=t?e.group.toString():i[0].Name,r=t?e.group.groupId:i[0].ID,c={onSuccess:{title:"Success",description:"".concat(a[0].name," has been removed from ").concat(n," successfully")},onError:{title:"Error",description:"Failed to remove system from group"}};(0,P.Z)(o,(function(){return(0,M._j)(r,a[0].ID)}),c)},reloadData:r})};const Q=q;q.propTypes={isModalOpen:f().bool,setIsModalOpen:f().func,reloadData:f().func,deviceInfo:f().array};var X=n(41825),B=n(8027),J=n(96620),K=n(52643),W=n(37619);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=s().lazy((function(){return Promise.all([n.e(6954),n.e(8615),n.e(4390),n.e(3006),n.e(6681)]).then(n.bind(n,68940))})),re=function(e){var t,n=e.historyProp,a=e.locationProp,i=n?n():(0,J.useHistory)(),m=(a?a():(0,J.useLocation)()).pathname,f=(0,T.Z)({api:B.$v,tableReload:!0}),g=(0,o.Z)(f,2),v=g[0],h=g[1],y=v.data,b=v.isLoading,I=v.hasError,E=(0,l.useState)(!1),S=(0,o.Z)(E,2),O=S[0],Z=S[1],D=(0,l.useState)(!1),x=(0,o.Z)(D,2),M=x[0],w=x[1],P=(0,l.useState)([]),N=(0,o.Z)(P,2),_=N[0],k=N[1],j=(0,l.useState)([]),A=(0,o.Z)(j,2),R=A[0],C=A[1],G=(0,l.useState)(!1),F=(0,o.Z)(G,2),U=F[0],H=F[1],$=(0,l.useState)(!1),V=(0,o.Z)($,2),z=V[0],q=V[1],Y=(0,l.useState)(!1),re=(0,o.Z)(Y,2),ae=re[0],oe=re[1],ie=(0,l.useState)({isOpen:!1,deviceData:null,imageData:null}),ce=(0,o.Z)(ie,2),le=ce[0],se=ce[1],ue=function(e,t){Z(!0),t?k(e):C(e),H(t)},de=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:q(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s().createElement(s().Fragment,null,s().createElement(u.Z,{className:"pf-m-light"},s().createElement(d.Z,{title:"Systems"})),s().createElement("section",{className:"edge-devices pf-l-page__main-section pf-c-page__main-section"},s().createElement(p.default,{historyProp:n,locationProp:a,isSystemsView:!0,data:null==y||null===(t=y.data)||void 0===t?void 0:t.devices,count:null==y?void 0:y.count,isLoading:b,hasError:I,setUpdateModal:se,updateModal:le,handleAddDevicesToGroup:ue,handleRemoveDevicesFromGroup:function(e,t){w(!0),t?k(e):C(e),H(t)},handleUpdateSelected:function(){se((function(e){return ee(ee({},e),{},{deviceData:R.map((function(e){return{id:e.id,display_name:e.display_name,deviceStatus:e.deviceStatus}})),imageData:{imageName:R[0].imageName},imageSetId:R[0].imageSetId,isOpen:!0})}))},hasCheckbox:!0,selectedItems:C,selectedItemsUpdateable:function(){var e=!1;if(R.length>0){var t,n=R[0].imageSetId,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}(R);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.imageSetId!==n){e=!1;break}(!e&&a.updateImageData&&"updateAvailable"===a.deviceStatus||"unresponsive"===a.deviceStatus||"error"===a.deviceStatus)&&(e=!0)}}catch(e){r.e(e)}finally{r.f()}}return e}(),kebabItems:[{isDisabled:!(R.length>0),title:"Add to group",onClick:function(){return ue(R.map((function(e){return{ID:e.deviceID,name:e.display_name}})),!1)}}],hasModalSubmitted:z,setHasModalSubmitted:q,fetchDevices:h})),le.isOpen&&s().createElement(l.Suspense,{fallback:s().createElement(K.b,null,s().createElement(W.$,null))},s().createElement(ne,{navigateBack:function(){i.push({pathname:m}),se((function(e){return console.log("Click modal"),ee(ee({},e),{},{isOpen:!1})}))},setUpdateModal:se,updateModal:le,refreshTable:de})),O&&s().createElement(L,{isModalOpen:O,setIsModalOpen:Z,setIsCreateGroupModalOpen:oe,reloadData:de,deviceIds:U?_:R}),ae&&s().createElement(X.Z,{isModalOpen:ae,setIsModalOpen:oe,reloadData:de,deviceIds:U?_:R}),M&&s().createElement(Q,{isModalOpen:M,setIsModalOpen:w,reloadData:de,deviceInfo:U?_:R}))};re.propTypes={historyProp:f().func,locationProp:f().func};const ae=re},71338:()=>{}}]);
//# sourceMappingURL=../sourcemaps/292.ecd740e1b57db32119fba7b7b64b03dd.js.map
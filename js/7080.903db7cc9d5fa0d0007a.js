(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7080],{80292:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ae});var r=n(15861),a=n(4942),o=n(29439),c=n(64687),i=n.n(c),s=n(92950),u=n.n(s),l=n(89376),p=n(39173),d=n(15656),f=n(45697),m=n.n(f),v=n(64124),g=n(96354),b=n(60722),y=n(87462),h=n(23279),O=n.n(h),S=n(36621),E=n(65673),D=n(54680),I=n(92694),Z=n(41693),w=n(48880),M=n(96094),j=n(87029);const P=function(e){(0,Z.Z)(e);var t=(0,w.default)().change,n=(0,s.useState)(!1),r=(0,o.Z)(n,2),a=r[0],c=r[1],i=(0,s.useState)(null),l=(0,o.Z)(i,2),p=l[0],d=l[1],f=(0,M.Z)({api:j.jA}),m=(0,o.Z)(f,2),v=m[0],g=v.data,b=v.isLoading,h=m[1],P=(0,s.useState)(""),T=(0,o.Z)(P,2),k=T[0],x=T[1],N=function(e){d(e),c(!1),t("group",e)},A=(null==g?void 0:g.data)||[],C=(null==g?void 0:g.count)||0;return u().createElement(u().Fragment,null,u().createElement(S.p,null,!b&&!p&&a&&C>A.length?u().createElement(E.u,{variant:"warning",className:"pf-u-font-weight-bold"},"Over ",A.length," results found. Refine your search."):u().createElement(E.u,{className:"pf-u-font-weight-bold"},"Select a group")),u().createElement(D.P,{variant:"typeahead",typeAheadAriaLabel:"Select a group",onToggle:function(e){c(e)},onSelect:function(e,t){e&&N(t)},onClear:function(){x(""),h(),N(null)},selections:p||k,isOpen:a,onFilter:O()((function(e,t){e&&t!=k&&(x(t),h({name:encodeURIComponent(t)}))}),300),"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click to select a group",noResultsFoundText:b?"Loading...":"No results found",isInputValuePersisted:!0,maxHeight:"180px"},b?[]:null==A?void 0:A.map((function(e){var t=e.DeviceGroup;return u().createElement(I.$,(0,y.Z)({key:t.ID,value:{toString:function(){return t.Name},groupId:t.ID}},t.description&&{description:t.description}))}))))};var T=n(32349),k=n(77760),x=n(47173),N=n(68340),A=function(e){var t=e.closeModal;return u().createElement(u().Fragment,null,u().createElement(N.x,null,"Or"),u().createElement(x.zx,{variant:"secondary",className:"pf-u-w-50",onClick:t},"Create Group"))};A.propTypes={closeModal:m().func};var C=function(e){var t=e.length>1?"".concat(e.length," systems"):e[0].name;return u().createElement(N.x,null,"Select a group to add ",u().createElement("strong",null,t," ")," or create a new one.")},L=function(e){return{fields:[{component:g.Z.PLAIN_TEXT,name:"description",label:C(e)},{component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:v.Z.REQUIRED}]},{component:"create-group-btn",name:"create-group-btn"}]}},R=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.setIsCreateGroupModalOpen,a=e.reloadData,o=e.deviceIds,c=(0,k.useDispatch)();return u().createElement(b.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Add to group",submitLabel:"Add",additionalMappers:{"search-input":{component:P},"create-group-btn":{component:A,closeModal:function(){r(!0),n(!1)}}},schema:L(o),onSubmit:function(e){var t=e.group,n={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.toString()," successfully")},onError:{title:"Error",description:"Failed to add system to group"}};(0,T.Z)(c,(function(){return(0,j.e3)(parseInt(t.groupId),o)}),n)},reloadData:a})};const _=R;R.propTypes={isModalOpen:m().bool,setIsModalOpen:m().func,setIsCreateGroupModalOpen:m().func,reloadData:m().func,deviceIds:m().array};var G=function(e){(0,Z.Z)(e);var t=(0,w.default)().change,n=(0,s.useState)(!1),r=(0,o.Z)(n,2),a=r[0],c=r[1],i=(0,s.useState)(null),l=(0,o.Z)(i,2),p=l[0],d=l[1],f=function(){d(null),t("group",null),c(!1)};return u().createElement(u().Fragment,null,u().createElement(D.P,{variant:"typeahead",typeAheadAriaLabel:"Select a state",onToggle:function(e){return c(e)},onSelect:function(e,n,r){r?f():(d(n),c(!1)),t("group",n)},onClear:f,selections:p,isOpen:a,"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click select group"},e.defaultOptions.map((function(e,t){var n=e.DeviceGroup;return u().createElement(I.$,(0,y.Z)({key:t,value:{toString:function(){return n.Name},groupId:n.ID}},n.description&&{description:n.description}))}))))};G.propTypes={defaultOptions:m().array};const F=G;var V=n(69957),q=n(37655),U=function(e){var t=e[0].deviceGroups,n=e.length>1?"".concat(e.length," systems"):e[0].name,r=1===t.length?t[0].Name:"".concat(t.length," groups");return t.length>1?u().createElement(N.x,null,"Select the group you want to remove ",u().createElement("strong",null,n)," from."):u().createElement(N.x,null,"Do you want to remove ",u().createElement("strong",null,n," ")," from"," ",u().createElement("strong",null,r),"?")},$=function(){return u().createElement(V.ZP,{color:q.Z.value})},z=function(e){var t={fields:[{component:g.Z.PLAIN_TEXT,name:"description",label:U(e)}]};return e[0].deviceGroups.length>1&&t.fields.push({component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:v.Z.REQUIRED}]}),t},H=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,a=e.deviceInfo,o=(0,k.useDispatch)(),c=a[0].deviceGroups;return u().createElement(b.Z,{isOpen:t,variant:"danger",closeModal:function(){return n(!1)},title:"Remove from group",submitLabel:"Remove",titleIconVariant:$,additionalMappers:{"search-input":{component:F,defaultOptions:c.map((function(e){return{DeviceGroup:e}}))||[]}},schema:z(a),onSubmit:function(e){var t=c.length>1,n=t?e.group.toString():c[0].Name,r=t?e.group.groupId:c[0].ID,i={onSuccess:{title:"Success",description:"".concat(a[0].name," has been removed from ").concat(n," successfully")},onError:{title:"Error",description:"Failed to remove system from group"}};(0,T.Z)(o,(function(){return(0,j._j)(r,a[0].ID)}),i)},reloadData:r})};const X=H;H.propTypes={isModalOpen:m().bool,setIsModalOpen:m().func,reloadData:m().func,deviceInfo:m().array};var Q=n(41825),B=n(8027),W=n(79142),J=n(52643),K=n(37619);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=u().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(4390),n.e(6244),n.e(8797),n.e(4375),n.e(6681)]).then(n.bind(n,68940))})),re=function(e){var t,n=e.historyProp,a=e.locationProp,c=n?n():(0,W.useHistory)(),f=(a?a():(0,W.useLocation)()).pathname,m=(0,M.Z)({api:B.$v,tableReload:!0}),v=(0,o.Z)(m,2),g=v[0],b=v[1],y=g.data,h=g.isLoading,O=g.hasError,S=(0,s.useState)(!1),E=(0,o.Z)(S,2),D=E[0],I=E[1],Z=(0,s.useState)(!1),w=(0,o.Z)(Z,2),j=w[0],P=w[1],T=(0,s.useState)([]),k=(0,o.Z)(T,2),x=k[0],N=k[1],A=(0,s.useState)([]),C=(0,o.Z)(A,2),L=C[0],R=C[1],G=(0,s.useState)(!1),F=(0,o.Z)(G,2),V=F[0],q=F[1],U=(0,s.useState)(!1),$=(0,o.Z)(U,2),z=$[0],H=$[1],Y=(0,s.useState)(!1),re=(0,o.Z)(Y,2),ae=re[0],oe=re[1],ce=(0,s.useState)({isOpen:!1,deviceData:null,imageData:null}),ie=(0,o.Z)(ce,2),se=ie[0],ue=ie[1],le=function(e,t){I(!0),t?N(e):R(e),q(t)},pe=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:H(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u().createElement(u().Fragment,null,u().createElement(l.Z,{className:"pf-m-light"},u().createElement(p.Z,{title:"Systems"})),u().createElement("section",{className:"edge-devices pf-l-page__main-section pf-c-page__main-section"},u().createElement(d.default,{historyProp:n,locationProp:a,isSystemsView:!0,data:null==y||null===(t=y.data)||void 0===t?void 0:t.devices,count:null==y?void 0:y.count,isLoading:h,hasError:O,setUpdateModal:ue,updateModal:se,handleAddDevicesToGroup:le,handleRemoveDevicesFromGroup:function(e,t){P(!0),t?N(e):R(e),q(t)},handleUpdateSelected:function(){ue((function(e){return ee(ee({},e),{},{deviceData:L.map((function(e){return{id:e.id,display_name:e.display_name,deviceStatus:e.deviceStatus}})),imageData:{imageName:L[0].imageName},imageSetId:L[0].imageSetId,isOpen:!0})}))},hasCheckbox:!0,selectedItems:R,selectedItemsUpdateable:function(){var e=!1;if(L.length>0){var t,n=L[0].imageSetId,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}(L);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.imageSetId!==n){e=!1;break}(!e&&a.updateImageData&&"updateAvailable"===a.deviceStatus||"unresponsive"===a.deviceStatus||"error"===a.deviceStatus)&&(e=!0)}}catch(e){r.e(e)}finally{r.f()}}return e}(),kebabItems:[{isDisabled:!(L.length>0),title:"Add to group",onClick:function(){return le(L.map((function(e){return{ID:e.deviceID,name:e.display_name}})),!1)}}],hasModalSubmitted:z,setHasModalSubmitted:H,fetchDevices:b})),se.isOpen&&u().createElement(s.Suspense,{fallback:u().createElement(J.b,null,u().createElement(K.$,null))},u().createElement(ne,{navigateBack:function(){c.push({pathname:f}),ue((function(e){return console.log("Click modal"),ee(ee({},e),{},{isOpen:!1})}))},setUpdateModal:ue,updateModal:se,refreshTable:pe})),D&&u().createElement(_,{isModalOpen:D,setIsModalOpen:I,setIsCreateGroupModalOpen:oe,reloadData:pe,deviceIds:V?x:L}),ae&&u().createElement(Q.Z,{isModalOpen:ae,setIsModalOpen:oe,reloadData:pe,deviceIds:V?x:L}),j&&u().createElement(X,{isModalOpen:j,setIsModalOpen:P,reloadData:pe,deviceInfo:V?x:L}))};re.propTypes={historyProp:m().func,locationProp:m().func};const ae=re},41825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(15861),a=n(64687),o=n.n(a),c=n(92950),i=n.n(c),s=n(45697),u=n.n(s),l=n(64124),p=n(96354),d=n(60722),f=n(87029),m=n(48903),v=n(32349),g=n(77760),b=function(){var e=(0,r.Z)(o().mark((function e(){var t,n=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.length>0&&void 0!==n[0]?n[0]:"").length){e.next=3;break}return e.abrupt("return",void 0);case 3:return e.next=5,(0,f.Tb)(t);case 5:if(!e.sent.data.isValid){e.next=8;break}throw"Group name already exists";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y={groupName:function(){return b}},h={fields:[{component:p.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,autoFocus:!0,validate:[{type:"groupName"},{type:l.Z.REQUIRED},{type:l.Z.MAX_LENGTH,threshold:50},m.qg]}]},O=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,a=e.deviceIds,c=e.reloadData,s=(0,g.useDispatch)(),u=function(e){var t={onSuccess:{title:"Success",description:"".concat(e.name," has been created successfully")},onError:{title:"Error",description:"Failed to create group"}};return(0,v.Z)(s,(function(){return(0,f.sS)(e)}),t)},l=function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:n=e.sent,r=n.ID,c={onSuccess:{title:"Success",description:"System(s) have been added to ".concat(t.name," successfully")},onError:{title:"Error",description:"Failed to add system to group"}},(0,v.Z)(s,(function(){return(0,f.e3)(parseInt(r),a)}),c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i().createElement(d.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Create group",submitLabel:"Create",schema:h,onSubmit:a?l:u,reloadData:c,validatorMapper:y})};const S=O;O.propTypes={isModalOpen:u().bool,setIsModalOpen:u().func,reloadData:u().func,deviceIds:u().array}},87029:(e,t,n)=>{"use strict";n.d(t,{OS:()=>s,Tb:()=>f,VL:()=>i,_j:()=>d,e3:()=>l,jA:()=>c,sS:()=>o,tW:()=>p,yq:()=>u});var r=n(66702),a=n(93454),o=function(e){return a.instance.post("".concat(r.Ds,"/device-groups/"),{Name:e.name,Type:"static"})},c=function(e){var t=e.query,n=(0,r.Vs)(t);return a.instance.get("".concat(r.Ds,"/device-groups?").concat(n))},i=function(e){var t=e.id,n=e.query,o=(0,r.Vs)(n);return a.instance.get("".concat(r.Ds,"/device-groups/").concat(t,"/view?").concat(o))},s=function(e,t){return a.instance.put("".concat(r.Ds,"/device-groups/").concat(e),{Name:t.name,Type:"static"})},u=function(e){return a.instance.delete("".concat(r.Ds,"/device-groups/").concat(e))},l=function(e,t){return a.instance.post("".concat(r.Ds,"/device-groups/").concat(e,"/devices"),{ID:e,Devices:t})},p=function(e,t){return a.instance.delete("".concat(r.Ds,"/device-groups/").concat(e,"/devices"),{data:{ID:e,Devices:t}})},d=function(e,t){return a.instance.delete("".concat(r.Ds,"/device-groups/").concat(e,"/devices/").concat(t))},f=function(e){return a.instance.get("".concat(r.Ds,"/device-groups/checkName/").concat(e))}},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(15861),a=n(4942),o=n(87462),c=n(64687),i=n.n(c),s=n(92950),u=n.n(s),l=n(80236),p=n(79442),d=n(67850),f=n(41387),m=n(45697),v=n.n(m);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,c=e.closeModal,s=e.submitLabel,m=e.schema,v=e.initialValues,g=e.variant,y=e.reloadData,h=e.size,O=e.onSubmit,S=e.additionalMappers,E=e.validatorMapper;return u().createElement(l.u,{variant:null!=h?h:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:c},u().createElement(p.Z,{schema:m,validatorMapper:E,FormTemplate:function(e){return u().createElement(d.ZP,(0,o.Z)({},e,{submitLabel:s,disableSubmit:["invalid"],buttonsProps:{submit:{variant:g}}}))},initialValues:v,componentMapper:S?b(b({},S),f.ZP):f.ZP,onSubmit:function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:setTimeout((0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),c();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return c()}}))};y.propTypes={isOpen:v().bool,title:v().string,closeModal:v().func,reloadData:v().func,submitLabel:v().string,schema:v().object,initialValues:v().object,variant:v().string,onSubmit:v().func,size:v().string,additionalMappers:v().object,titleIconVariant:v().any,validatorMapper:v().object};const h=y},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(4942),a=n(15861),o=n(29439),c=n(64687),i=n.n(c),s=n(83215),u=n(92950),l=n(77760);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=function(e){var t,n=e.api,r=e.id,c=void 0===r?null:r,p=e.statusMessages,f=e.tableReload,m=void 0!==f&&f,v=(0,l.useDispatch)(),g=(0,u.useState)([]),b=(0,o.Z)(g,2),y=b[0],h=b[1],O=(0,u.useState)(!0),S=(0,o.Z)(O,2),E=S[0],D=S[1],I=(0,u.useState)(!1),Z=(0,o.Z)(I,2),w=Z[0],M=Z[1],j=null===(t=p)||void 0===t?void 0:t.onSuccess;p||(p={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var P=function(){var e=(0,a.Z)(i().mark((function e(){var t,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",D(!0),e.prev=2,e.next=5,n({id:c,query:t});case 5:r=e.sent,h(r),j&&v(d({},(0,s.wN)(d({variant:"success"},p.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),M(!0),v(d({},(0,s.wN)(d({variant:"danger"},p.onError))));case 14:return e.prev=14,D(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){m||P()}),[]),[{data:y,isLoading:E,hasError:w},P]}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},81754:()=>{},10497:()=>{},10108:()=>{},54476:()=>{},80897:()=>{},40837:()=>{},71338:()=>{},98379:()=>{},99624:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},40209:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7080.94a45b2253f82b6d3e2567f944349188.js.map
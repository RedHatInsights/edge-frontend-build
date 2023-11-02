(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[5320],{78262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var r=n(92950),c=n.n(r),o=n(45697),a=n.n(o),s=n(64124),i=n(96354),u=n(60722),l=n(87462),p=n(29439),d=n(54680),f=n(92694),m=n(41693),v=n(48880),g=function(e){(0,m.Z)(e);var t=(0,v.default)().change,n=(0,r.useState)(!1),o=(0,p.Z)(n,2),a=o[0],s=o[1],i=(0,r.useState)(null),u=(0,p.Z)(i,2),g=u[0],b=u[1],h=function(){b(null),t("group",null),s(!1)};return c().createElement(c().Fragment,null,c().createElement(d.P,{variant:"typeahead",typeAheadAriaLabel:"Select a state",onToggle:function(e){return s(e)},onSelect:function(e,n,r){r?h():(b(n),s(!1)),t("group",n)},onClear:h,selections:g,isOpen:a,"aria-labelledby":"typeahead-select-id-1",placeholderText:"Type or click select group"},e.defaultOptions.map((function(e,t){var n=e.DeviceGroup;return c().createElement(f.$,(0,l.Z)({key:t,value:{toString:function(){return n.Name},groupId:n.ID}},n.description&&{description:n.description}))}))))};g.propTypes={defaultOptions:a().array};const b=g;var h=n(32349),y=n(87029),O=n(77760),D=n(68340),E=n(69957),j=n(37655),S=n(48903),w=n(42559),Z=function(e){var t=e[0].deviceGroups,n=(0,S.gV)(w.h),r=e.length>1?"".concat(e.length," systems"):e[0].name,o=1===t.length?t[0].Name:"".concat(t.length," groups");return n?c().createElement(D.x,null,c().createElement("strong",null,r," ")," will no longer be part of"," ",c().createElement("strong",null,o)," and its configuration will be impacted."):t.length>1?c().createElement(D.x,null,"Select the group you want to remove ",c().createElement("strong",null,r)," from."):c().createElement(D.x,null,"Do you want to remove ",c().createElement("strong",null,r," ")," from"," ",c().createElement("strong",null,o),"?")},P=function(){return c().createElement(E.ZP,{color:j.Z.value})},I=function(e){var t={fields:[{component:i.Z.PLAIN_TEXT,name:"description",label:Z(e)}]};return e[0].deviceGroups.length>1&&t.fields.push({component:"search-input",name:"group",label:"Select a group",isRequired:!0,validate:[{type:s.Z.REQUIRED}]}),t},k=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,o=e.deviceInfo,a=(0,O.useDispatch)(),s=(0,S.gV)(w.h),i=o[0].deviceGroups;return c().createElement(u.Z,{isOpen:t,variant:"danger",closeModal:function(){return n(!1)},title:"Remove from group",submitLabel:"Remove",titleIconVariant:P,additionalMappers:{"search-input":{component:b,defaultOptions:i.map((function(e){return{DeviceGroup:e}}))||[]}},schema:I(o),onSubmit:function(e){var t,n=i.length>1,r=n?e.group.toString():i[0].Name,c=n?e.group.groupId:i[0].ID,u=o.length>1?"".concat(o.length," systems"):o[0].name,l=s?o.length>1?"Failed to remove ".concat(o.length," systems from ").concat(r):"Failed to remove 1 system from ".concat(r):"Failed to remove system from group",p={onSuccess:{title:"Success",description:"".concat(u," has been removed from ").concat(r," successfully")},onError:{title:"Error",description:l}};t=s?function(){return(0,y.ur)(c,o.map((function(e){return e.UUID})))}:function(){return(0,y._j)(c,o[0].ID)},(0,h.Z)(a,t,p)},reloadData:r})};const M=k;k.propTypes={isModalOpen:a().bool,setIsModalOpen:a().func,reloadData:a().func,deviceInfo:a().array}},87029:(e,t,n)=>{"use strict";n.d(t,{D9:()=>a,FP:()=>f,OS:()=>l,Qo:()=>h,Tb:()=>b,VL:()=>u,_j:()=>g,e3:()=>d,jA:()=>s,sS:()=>o,tW:()=>m,ur:()=>v,xk:()=>i,yq:()=>p});var r=n(66702),c=n(93454),o=function(e){return c.instance.post("".concat(r.Ds,"/device-groups/"),{Name:e.name,Type:"static"})},a=function(e){return c.instance.post("".concat(r.$3,"/groups"),{name:e.name})},s=function(e){var t=e.query,n=(0,r.Vs)(t);return c.instance.get("".concat(r.Ds,"/device-groups?").concat(n))},i=function(e){var t=e.query,n=(0,r.Vs)(t);return c.instance.get("".concat(r.$3,"/groups?").concat(n))},u=function(e){var t=e.id,n=e.query,o=(0,r.Vs)(n);return c.instance.get("".concat(r.Ds,"/device-groups/").concat(t,"/view?").concat(o))},l=function(e,t){return c.instance.put("".concat(r.Ds,"/device-groups/").concat(e),{Name:t.name,Type:"static"})},p=function(e){return c.instance.delete("".concat(r.Ds,"/device-groups/").concat(e))},d=function(e,t){return c.instance.post("".concat(r.Ds,"/device-groups/").concat(e,"/devices"),{ID:e,Devices:t})},f=function(e,t){var n=[];return t.forEach((function(e){return n.push(e.UUID)})),c.instance.post("".concat(r.$3,"/groups/").concat(e,"/hosts"),n)},m=function(e,t){return c.instance.delete("".concat(r.Ds,"/device-groups/").concat(e,"/devices"),{data:{ID:e,Devices:t}})},v=function(e,t){return c.instance.delete("".concat(r.$3,"/groups/").concat(e,"/hosts/")+t.join(","))},g=function(e,t){return c.instance.delete("".concat(r.Ds,"/device-groups/").concat(e,"/devices/").concat(t))},b=function(e){return c.instance.get("".concat(r.Ds,"/device-groups/checkName/").concat(e))},h=function(e){return c.instance.get("".concat(r.$3,"/groups?name=").concat(e,"&order_by=name&order_how=ASC"))}},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(15861),c=n(4942),o=n(87462),a=n(64687),s=n.n(a),i=n(92950),u=n.n(i),l=n(80236),p=n(79442),d=n(67850),f=n(41387),m=n(45697),v=n.n(m);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.isOpen,n=e.title,c=e.titleIconVariant,a=e.closeModal,i=e.submitLabel,m=e.schema,v=e.initialValues,g=e.variant,h=e.reloadData,y=e.size,O=e.onSubmit,D=e.additionalMappers,E=e.validatorMapper;return u().createElement(l.u,{variant:null!=y?y:"small",title:n,titleIconVariant:null!=c?c:null,isOpen:t,onClose:a},u().createElement(p.Z,{schema:m,validatorMapper:E,FormTemplate:function(e){return u().createElement(d.ZP,(0,o.Z)({},e,{submitLabel:i,disableSubmit:["invalid"],buttonsProps:{submit:{variant:g}}}))},initialValues:v,componentMapper:D?b(b({},D),f.ZP):f.ZP,onSubmit:function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:setTimeout((0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),a();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return a()}}))};h.propTypes={isOpen:v().bool,title:v().string,closeModal:v().func,reloadData:v().func,submitLabel:v().string,schema:v().object,initialValues:v().object,variant:v().string,onSubmit:v().func,size:v().string,additionalMappers:v().object,titleIconVariant:v().any,validatorMapper:v().object};const y=h},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(4942),c=n(15861),o=n(29439),a=n(64687),s=n.n(a),i=n(83215),u=n(92950),l=n(77760);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=function(e){var t,n=e.api,r=e.id,a=void 0===r?null:r,p=e.statusMessages,f=e.tableReload,m=void 0!==f&&f,v=(0,l.useDispatch)(),g=(0,u.useState)([]),b=(0,o.Z)(g,2),h=b[0],y=b[1],O=(0,u.useState)(!0),D=(0,o.Z)(O,2),E=D[0],j=D[1],S=(0,u.useState)(!1),w=(0,o.Z)(S,2),Z=w[0],P=w[1],I=null===(t=p)||void 0===t?void 0:t.onSuccess;p||(p={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var k=function(){var e=(0,c.Z)(s().mark((function e(){var t,r,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",j(!0),e.prev=2,e.next=5,n({id:a,query:t});case 5:r=e.sent,y(r),I&&v(d({},(0,i.wN)(d({variant:"success"},p.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),P(!0),v(d({},(0,i.wN)(d({variant:"danger"},p.onError))));case 14:return e.prev=14,j(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){m||k()}),[]),[{data:h,isLoading:E,hasError:Z},k]}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},81754:()=>{},10497:()=>{},10108:()=>{},54476:()=>{},80897:()=>{},40837:()=>{},98379:()=>{},99624:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},40209:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5320.9564c450550527a5b4af17a6ccdcf5fc.js.map
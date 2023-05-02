(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[6681],{56591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)({})},32650:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(93433),a=n(4942),i=n(41609),o=n.n(i),c=n(27361),s=n.n(c);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return"number"!=typeof e&&!0!==e&&o()(e)},p=function(e,t){if(t.isNotEmpty)return!d(e);if(t.isEmpty)return d(e);if(t.pattern){var n=RegExp(t.pattern,t.flags);return t.notMatch?!n.test(e):n.test(e)}if("function"==typeof t.is)return t.is(e,t);if(Object.prototype.hasOwnProperty.call(t,"greaterThan"))return e>t.greaterThan;if(Object.prototype.hasOwnProperty.call(t,"greaterThanOrEqualTo"))return e>=t.greaterThanOrEqualTo;if(Object.prototype.hasOwnProperty.call(t,"lessThan"))return e<t.lessThan;if(Object.prototype.hasOwnProperty.call(t,"lessThanOrEqualTo"))return e<=t.lessThanOrEqualTo;var r=Array.isArray(t.is)?!!t.is.includes(e):e===t.is;return t.notMatch?!r:r};const f=function e(t,n,a){var i=l(l({visible:!0},t.then),{},{result:!0}),o=l(l({visible:!1},t.else),{},{result:!1});if(Array.isArray(t))return t.map((function(t){return e(t,n,a)})).some((function(e){return!1===e.result}))?o:i;if(t.and)return t.and.map((function(t){return e(t,n,a)})).some((function(e){return!1===e.result}))?o:i;if(t.sequence)return t.sequence.reduce((function(t,a){var i=e(a,n);return{sets:[].concat((0,r.Z)(t.sets),(0,r.Z)(i.set?[i.set]:[])),visible:t.visible||i.visible,result:t.result||i.result}}),l(l({},o),{},{sets:[]}));if(t.or)return t.or.map((function(t){return e(t,n,a)})).some((function(e){return!0===e.result}))?i:o;if(t.not)return e(t.not,n).result?o:i;var c="function"==typeof t.when?t.when(a):t.when;return"string"==typeof c?p(s()(n,c),t)?i:o:Array.isArray(c)&&c.map((function(e){return p(s()(n,"function"==typeof e?e(a):e),t)})).find((function(e){return!!e}))?i:o}},64124:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={REQUIRED:"required",MIN_LENGTH:"min-length",MAX_LENGTH:"max-length",EXACT_LENGTH:"exact-length",MIN_ITEMS:"min-items",MIN_NUMBER_VALUE:"min-number-value",MAX_NUMBER_VALUE:"max-number-value",PATTERN:"pattern",URL:"url"}},25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>c});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:c=r.ul}=e,s=(0,a.__rest)(e,["children","className","component"]);const u=c;return i.createElement(u,Object.assign({},s,{className:(0,o.i)(n)}),t)};c.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>c,v:()=>r});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:c=r.li}=e,s=(0,a.__rest)(e,["children","className","component"]);const u=c;return i.createElement(u,Object.assign({},s,{className:(0,o.i)(n)}),t)};c.displayName="TextListItem"},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(85893),a=n(92950),i=n.n(a),o=n(48335),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},s=36e5,u=24*s,l=30*u,d=365*u,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/l),"month")}},{rightBound:l,description:function(e){return p(Math.round(e/u),"day")}},{rightBound:u,description:function(e){return p(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},g=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(o.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(v("exact")(a),(0,r.jsx)("span",{children:v(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const b=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,o=e.extraTitle,c=e.tooltipProps,s=t instanceof Date?t:new Date(t),u=null==t||"Invalid Date"===s.toString()?"invalid":a;return(0,r.jsx)(i().Fragment,{children:g(u,c,o)(s)})}},68940:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(4942),a=n(15861),i=n(29439),o=n(64687),c=n.n(o),s=n(92950),u=n.n(s),l=n(68774),d=n(68340),p=n(52643),f=n(29390),m=n(37619),v=n(41448),g=n(69957),b=n(45697),y=n.n(b),h=n(93597),O=n(8027),w=n(86706),j=n(83215),E=n(60722),D=n(96354),T=n(38779),P=n(78140),_=n(25834),S=function(e){var t=e.reviewObject,n=e.key;return u().createElement(l.D,null,u().createElement(T.D,{headingLevel:"h3"},u().createElement(d.x,{component:"b"},t.title)),u().createElement(_.G,{component:_.F.dl},t.rows.map((function(e){return u().createElement(s.Fragment,{key:e.title+n},u().createElement(P.T,{component:P.v.dt},e.title),u().createElement(P.T,{component:P.v.dd},e.value))}))))};S.propTypes={reviewObject:y().object,key:y().string};const Z=S;var I=n(62410),x=n(98309);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t,n=e.updateModal,r=e.setUpdateModal,o=e.refreshTable,b=(0,s.useState)(null),y=(0,i.Z)(b,2),T=y[0],P=y[1],_=(0,w.I0)(),S=n.deviceData.length>1,N=n.deviceData.map((function(e){return e.id})),k=S?n.deviceData.map((function(e){return e.display_name})):null==n||null===(t=n.deviceData[0])||void 0===t?void 0:t.display_name;(0,s.useEffect)((function(){var e;null!=n&&n.imageSetId?(0,h.dt)({id:n.imageSetId,q:{limit:1,sort_by:"-created_at",status:"SUCCESS"}}).then((function(e){return P(e.Data.images[0])})):(e=n.imageId,(0,h.Kz)({id:e}).then((function(e){var t;return(0,h.dt)({id:null==e||null===(t=e.image)||void 0===t?void 0:t.ImageSetID,q:{limit:1,sort_by:"-created_at"}})}))).then((function(e){return P(e.Data.images[0])}))}),[]);var A=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,O.EQ)({DevicesUUID:N});case 3:_(M({},(0,j.wN)({variant:"info",title:"Updating system",description:S?" ".concat(k.length," systems were added to the queue."):" ".concat(k," was added to the queue.")}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),_(M({},(0,j.wN)({variant:"danger",title:"Updating a system was unsuccessful",description:"Response: ".concat(e.t0.statusText)})));case 9:U(),o&&o();case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),U=function(){r((function(e){return M(M({},e),{},{isOpen:!1})}))},L={title:"Update to version ".concat(null==T?void 0:T.image.Version),rows:[{title:"Image Name",value:null==T?void 0:T.image.Name},{title:"Version",value:null==T?void 0:T.image.Version},{title:"Created",value:u().createElement(I.Z,{date:null==T?void 0:T.image.CreatedAt})},{title:"Release",value:x.aN[null==T?void 0:T.image.Distribution]}]},V={title:"Changes from version ".concat((null==T?void 0:T.image.Version)-1),rows:[{title:"Added",value:(null==T?void 0:T.update_added)||0},{title:"Removed",value:(null==T?void 0:T.update_removed)||0},{title:"Updated",value:(null==T?void 0:T.update_updated)||0}]},q={fields:[{component:D.Z.PLAIN_TEXT,name:"description",label:u().createElement(l.D,null,u().createElement(d.x,null,"Update"," ",u().createElement("span",{className:"pf-u-font-weight-bold pf-u-font-size-md"},S?"".concat(k.length," systems"):k)," ","to latest version of the image linked to it."),n.deviceData.some((function(e){return"updateAvailable"!==e.deviceStatus&&"error"!==e.deviceStatus}))&&u().createElement(v.b,{variant:"info",isInline:!0,title:"Some systems will not be updated. This action will update only systems with an update available.",style:{"--pf-c-content--h4--MarginTop":0}}))},{component:D.Z.PLAIN_TEXT,name:"update-details",label:Z({reviewObject:L,key:"update-details"})},{component:D.Z.PLAIN_TEXT,name:"package-details",label:Z({reviewObject:V,key:"package-details"})},{component:D.Z.PLAIN_TEXT,name:"warning-text",label:u().createElement(l.D,{className:"pf-u-pt-md"},u().createElement(d.x,{style:{color:"var(--pf-global--warning-color--200"},component:"small"},u().createElement(g.ZP,{style:{color:"var(--pf-global--warning-color--100"}})," ","After the update is installed, the system will apply the changes."))}]};return u().createElement(u().Fragment,null,T?u().createElement(E.Z,{size:"medium",title:"Update system".concat(S?"s":""," to latest image version"),isOpen:n.isOpen,closeModal:function(){return r((function(e){return M(M({},e),{},{isOpen:!1})}))},submitLabel:"Update system",schema:q,onSubmit:A,reloadData:o}):u().createElement(f.Y,null,u().createElement(p.b,null,u().createElement(m.$,{isSVG:!0,diameter:"100px"}))))};k.propTypes={refreshTable:y().func,updateModal:y().shape({isOpen:y().bool.isRequired,deviceData:y().array.isRequired,imageData:y().object,imageId:y().number,imageSetId:y().number}).isRequired,setUpdateModal:y().func.isRequired};const A=k},8027:(e,t,n)=>{"use strict";n.d(t,{$v:()=>s,EQ:()=>d,V3:()=>l,_v:()=>u});var r=n(15861),a=n(64687),i=n.n(a),o=n(66702),c=n(93454),s=function(e){var t=e.query,n=(0,o.Vs)(t);return c.instance.get("".concat(o.Ds,"/devices/devicesview?").concat(n))},u=function(e){return c.instance.get("".concat(o.Ds,"/devices/").concat(e))},l=function(e){var t=e.id,n=e.query,r=(0,o.Vs)(n);return c.instance.get("".concat(o.Ds,"/devices/").concat(t,"?").concat(r))},d=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.instance.post("".concat(o.Ds,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},93597:(e,t,n)=>{"use strict";n.d(t,{$c:()=>h,Bi:()=>l,Dk:()=>g,EC:()=>v,EV:()=>b,H1:()=>u,Kz:()=>y,L0:()=>f,QY:()=>m,Sj:()=>O,dj:()=>p,dt:()=>d});var r=n(15861),a=n(29439),i=n(64687),o=n.n(i),c=n(66702),s=n(93454),u=function(e){var t={name:e};return s.instance.post("".concat(c.Ds,"/images/checkImageName"),t)},l=function(e){var t=e.Id,n=e.name,r=e.version,i=e.description,o=e.release,u=e.architecture,l=e.username,d=e.credentials,p=e.imageType,f=e["selected-packages"],m=e["third-party-repositories"],v=e["custom-packages"],g=p||[],b=(0,a.Z)(g,1)[0];p.length>1&&(b="rhel-edge-installer");var y={name:n,version:r,description:i,distribution:o,imageType:b,packages:null==f?void 0:f.map((function(e){return{name:e.name}})),outputTypes:p,commit:{arch:u},installer:{username:l,sshkey:d},thirdPartyRepositories:null==m?void 0:m.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}})),customPackages:null==v?void 0:v.map((function(e){return{Name:e.name}}))},h="".concat(c.Ds,"/images");return r>1&&(h+="/".concat(t,"/update")),s.instance.post(h,y)},d=function(e){var t=e.id,n=e.q,r=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,a=(0,c.Vs)(r);return s.instance.get("".concat(c.Ds,"/image-sets/").concat(t,"?").concat(a))},p=function(e){var t=e.imageSetID,n=e.query,r=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,a=(0,c.Vs)(r);return s.instance.get("".concat(c.Ds,"/image-sets/view/").concat(t,"/versions?").concat(a))},f=function(e){var t=e.id;return s.instance.get("".concat(c.Ds,"/image-sets/view/").concat(t))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,c.Vs)(e);return s.instance.get("".concat(c.Ds,"/image-sets?").concat(t))},v=function(e){return s.instance.get("".concat(c.Ds,"/images/").concat(e,"/status"))},g=function(e){return s.instance.get("".concat(c.Ds,"/updates/device/").concat(e,"/image"))},b=function(){var e=(0,r.Z)(o().mark((function e(t,n,r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,s.instance)("".concat(c.DO,"/packages?").concat(a.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),y=function(e){var t=e.id;return s.instance.get("".concat(c.Ds,"/images/").concat(t,"/details"))},h=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,c.Vs)(t);return s.instance.get("".concat(c.Ds,"/image-sets/view?").concat(n))},O=function(e,t){return s.instance.post("".concat(c.$J,"/rpms/names"),{urls:e,search:t})}},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(15861),a=n(4942),i=n(87462),o=n(64687),c=n.n(o),s=n(92950),u=n.n(s),l=n(80236),d=n(79442),p=n(67850),f=n(41387),m=n(45697),v=n.n(m);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,o=e.closeModal,s=e.submitLabel,m=e.schema,v=e.initialValues,g=e.variant,y=e.reloadData,h=e.size,O=e.onSubmit,w=e.additionalMappers,j=e.validatorMapper;return u().createElement(l.u,{variant:null!=h?h:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:o},u().createElement(d.Z,{schema:m,validatorMapper:j,FormTemplate:function(e){return u().createElement(p.ZP,(0,i.Z)({},e,{submitLabel:s,disableSubmit:["invalid"],buttonsProps:{submit:{variant:g}}}))},initialValues:v,componentMapper:w?b(b({},w),f.ZP):f.ZP,onSubmit:function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:setTimeout((0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),o();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return o()}}))};y.propTypes={isOpen:v().bool,title:v().string,closeModal:v().func,reloadData:v().func,submitLabel:v().string,schema:v().object,initialValues:v().object,variant:v().string,onSubmit:v().func,size:v().string,additionalMappers:v().object,titleIconVariant:v().any,validatorMapper:v().object};const h=y},41609:(e,t,n)=>{var r=n(280),a=n(64160),i=n(35694),o=n(1469),c=n(98612),s=n(44144),u=n(25726),l=n(36719),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||l(e)||i(e)))return!e.length;var t=a(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!r(e).length;for(var n in e)if(d.call(e,n))return!1;return!0}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},10497:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},28992:()=>{},80897:()=>{},30187:()=>{},40837:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},1508:()=>{},99624:()=>{},36974:()=>{},27479:()=>{},93661:()=>{},22143:()=>{},40209:()=>{},38299:()=>{},72816:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(30907),a=n(59199),i=n(40181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/UpdateDeviceModal.5d6ce80343ddda97aaec2b5306f27743.js.map
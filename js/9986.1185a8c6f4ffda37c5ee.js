(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[9986],{25834:(e,t,n)=>{"use strict";n.d(t,{F:()=>r,G:()=>c});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:c=r.ul}=e,u=(0,a.__rest)(e,["children","className","component"]);const l=c;return i.createElement(l,Object.assign({},u,{className:(0,o.i)(n)}),t)};c.displayName="TextList"},78140:(e,t,n)=>{"use strict";n.d(t,{T:()=>c,v:()=>r});var r,a=n(70655),i=n(92950),o=n(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(r||(r={}));const c=e=>{var{children:t=null,className:n="",component:c=r.li}=e,u=(0,a.__rest)(e,["children","className","component"]);const l=c;return i.createElement(l,Object.assign({},u,{className:(0,o.i)(n)}),t)};c.displayName="TextListItem"},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(85893),a=n(92950),i=n.n(a),o=n(2833),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},u=36e5,l=24*u,s=30*l,d=365*l,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},f=[{rightBound:1/0,description:function(e){return p(Math.round(e/d),"year")}},{rightBound:d,description:function(e){return p(Math.round(e/s),"month")}},{rightBound:s,description:function(e){return p(Math.round(e/l),"day")}},{rightBound:l,description:function(e){return p(Math.round(e/u),"hour")}},{rightBound:u,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],m=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},v=function(e){return{exact:function(e){return m(e)+" UTC"},onlyDate:function(e){return m(e).slice(0,-6)},relative:function(e){return f.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),m(e))},invalid:function(){return"Invalid date"}}[e]},b=function(e,t,n){return{exact:function(t){return v(e)(t)},onlyDate:function(t){return v(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(o.Tooltip,c({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(v("exact")(a),(0,r.jsx)("span",{children:v(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const y=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,o=e.extraTitle,c=e.tooltipProps,u=t instanceof Date?t:new Date(t),l=null==t||"Invalid Date"===u.toString()?"invalid":a;return(0,r.jsx)(i().Fragment,{children:b(l,c,o)(u)})}},68940:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(4942),a=n(15861),i=n(29439),o=n(64687),c=n.n(o),u=n(92950),l=n.n(u),s=n(68774),d=n(68340),p=n(52643),f=n(29390),m=n(37619),v=n(41448),b=n(69957),y=n(45697),g=n.n(y),h=n(93597),O=n(8027),w=n(77760),j=n(83215),E=n(60722),x=n(96354),D=n(38779),P=n(78140),T=n(25834),S=function(e){var t=e.reviewObject,n=e.key;return l().createElement(s.D,null,l().createElement(D.D,{headingLevel:"h3"},l().createElement(d.x,{component:"b"},t.title)),l().createElement(T.G,{component:T.F.dl},t.rows.map((function(e){return l().createElement(u.Fragment,{key:e.title+n},l().createElement(P.T,{component:P.v.dt},e.title),l().createElement(P.T,{component:P.v.dd},e.value))}))))};S.propTypes={reviewObject:g().object,key:g().string};const Z=S;var I=n(62410),M=n(98309),_=n(32349);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t,n=e.updateModal,r=e.setUpdateModal,o=e.refreshTable,y=e.notificationProp,g=(0,u.useState)(null),D=(0,i.Z)(g,2),P=D[0],T=D[1],S=(0,w.useDispatch)(),k=n.deviceData.length>1,U=n.deviceData.map((function(e){return e.id})),A=k?n.deviceData.map((function(e){return e.display_name})):null==n||null===(t=n.deviceData[0])||void 0===t?void 0:t.display_name;(0,u.useEffect)((function(){var e;null!=n&&n.imageSetId?(0,h.dt)({id:n.imageSetId,q:{limit:1,sort_by:"-created_at",status:"SUCCESS"}}).then((function(e){return T(e.Data.images[0])})):(e=n.imageId,(0,h.Kz)({id:e}).then((function(e){var t;return(0,h.dt)({id:null==e||null===(t=e.image)||void 0===t?void 0:t.ImageSetID,q:{limit:1,sort_by:"-created_at"}})}))).then((function(e){return T(e.Data.images[0])}))}),[]);var L={onInfo:{title:"Updating system",description:k?" ".concat(A.length," systems were added to the queue."):" ".concat(A," was added to the queue.")},onError:{title:"Error",description:"Failed to update the selected system(s)"}},C=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.Z)(S,(function(){return(0,O.EQ)({DevicesUUID:U})}),L,y);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),S(N({},(0,j.wN)({variant:"danger",title:"Updating a system was unsuccessful",description:"Response: ".concat(e.t0.statusText)})));case 8:V(),o&&o();case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),V=function(){r((function(e){return N(N({},e),{},{isOpen:!1})}))},q={title:"Update to version ".concat(null==P?void 0:P.image.Version),rows:[{title:"Image Name",value:null==P?void 0:P.image.Name},{title:"Version",value:null==P?void 0:P.image.Version},{title:"Created",value:l().createElement(I.Z,{date:null==P?void 0:P.image.CreatedAt})},{title:"Release",value:M.aN[null==P?void 0:P.image.Distribution]}]},B={title:"Changes from version ".concat((null==P?void 0:P.image.Version)-1),rows:[{title:"Added",value:(null==P?void 0:P.update_added)||0},{title:"Removed",value:(null==P?void 0:P.update_removed)||0},{title:"Updated",value:(null==P?void 0:P.update_updated)||0}]},F={fields:[{component:x.Z.PLAIN_TEXT,name:"description",label:l().createElement(s.D,null,l().createElement(d.x,null,"Update"," ",l().createElement("span",{className:"pf-u-font-weight-bold pf-u-font-size-md"},k?"".concat(A.length," systems"):A)," ","to latest version of the image linked to it."),n.deviceData.some((function(e){return"updateAvailable"!==e.deviceStatus&&"error"!==e.deviceStatus}))&&l().createElement(v.b,{variant:"info",isInline:!0,title:"Some systems will not be updated. This action will update only systems with an update available.",style:{"--pf-c-content--h4--MarginTop":0}}))},{component:x.Z.PLAIN_TEXT,name:"update-details",label:Z({reviewObject:q,key:"update-details"})},{component:x.Z.PLAIN_TEXT,name:"package-details",label:Z({reviewObject:B,key:"package-details"})},{component:x.Z.PLAIN_TEXT,name:"warning-text",label:l().createElement(s.D,{className:"pf-u-pt-md"},l().createElement(d.x,{style:{color:"var(--pf-global--warning-color--200"},component:"small"},l().createElement(b.ZP,{style:{color:"var(--pf-global--warning-color--100"}})," ","After the update is installed, the system will apply the changes."))}]};return l().createElement(l().Fragment,null,P?l().createElement(E.Z,{size:"medium",title:"Update system".concat(k?"s":""," to latest image version"),isOpen:n.isOpen,closeModal:function(){return r((function(e){return N(N({},e),{},{isOpen:!1})}))},submitLabel:"Update system",schema:F,onSubmit:C,reloadData:o,notificationProp:y}):l().createElement(f.Y,null,l().createElement(p.b,null,l().createElement(m.$,{isSVG:!0,diameter:"100px"}))))};U.propTypes={refreshTable:g().func,updateModal:g().shape({isOpen:g().bool.isRequired,deviceData:g().array.isRequired,imageData:g().object,imageId:g().number,imageSetId:g().number}).isRequired,setUpdateModal:g().func.isRequired,notificationProp:g().object};const A=U},60722:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(15861),a=n(4942),i=n(87462),o=n(64687),c=n.n(o),u=n(92950),l=n.n(u),s=n(80236),d=n(79442),p=n(67850),f=n(41387),m=n(45697),v=n.n(m);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.isOpen,n=e.title,a=e.titleIconVariant,o=e.closeModal,u=e.submitLabel,m=e.schema,v=e.initialValues,b=e.variant,g=e.reloadData,h=e.size,O=e.onSubmit,w=e.additionalMappers,j=e.validatorMapper;return l().createElement(s.u,{variant:null!=h?h:"small",title:n,titleIconVariant:null!=a?a:null,isOpen:t,onClose:o},l().createElement(d.Z,{schema:m,validatorMapper:j,FormTemplate:function(e){return l().createElement(p.ZP,(0,i.Z)({},e,{submitLabel:u,disableSubmit:["invalid"],buttonsProps:{submit:{variant:b}}}))},initialValues:v,componentMapper:w?y(y({},w),f.ZP):f.ZP,onSubmit:function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:setTimeout((0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),500),o();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onCancel:function(){return o()}}))};g.propTypes={isOpen:v().bool,title:v().string,closeModal:v().func,reloadData:v().func,submitLabel:v().string,schema:v().object,initialValues:v().object,variant:v().string,onSubmit:v().func,size:v().string,additionalMappers:v().object,titleIconVariant:v().any,validatorMapper:v().object};const h=g},34865:(e,t,n)=>{var r=n(89465),a=n(77813),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var o=e[t];i.call(e,t)&&a(o,n)&&(void 0!==n||t in e)||r(e,t,n)}},3118:(e,t,n)=>{var r=n(13218),a=Object.create,i=function(){function e(){}return function(t){if(!r(t))return{};if(a)return a(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=i},10313:(e,t,n)=>{var r=n(13218),a=n(25726),i=n(33498),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return i(e);var t=a(e),n=[];for(var c in e)("constructor"!=c||!t&&o.call(e,c))&&n.push(c);return n}},74318:(e,t,n)=>{var r=n(11149);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},64626:(e,t,n)=>{e=n.nmd(e);var r=n(55639),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,c=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=c?c(n):new e.constructor(n);return e.copy(r),r}},77133:(e,t,n)=>{var r=n(74318);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},278:e=>{e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},98363:(e,t,n)=>{var r=n(34865),a=n(89465);e.exports=function(e,t,n,i){var o=!n;n||(n={});for(var c=-1,u=t.length;++c<u;){var l=t[c],s=i?i(n[l],e[l],l,n,e):void 0;void 0===s&&(s=e[l]),o?a(n,l,s):r(n,l,s)}return n}},85924:(e,t,n)=>{var r=n(5569)(Object.getPrototypeOf,Object);e.exports=r},38517:(e,t,n)=>{var r=n(3118),a=n(85924),i=n(25726);e.exports=function(e){return"function"!=typeof e.constructor||i(e)?{}:r(a(e))}},33498:e=>{e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},81704:(e,t,n)=>{var r=n(14636),a=n(10313),i=n(98612);e.exports=function(e){return i(e)?r(e,!0):a(e)}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},10497:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},28992:()=>{},80897:()=>{},30187:()=>{},40837:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},1508:()=>{},99624:()=>{},36974:()=>{},27479:()=>{},93661:()=>{},22143:()=>{},40209:()=>{},38299:()=>{},72816:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(30907),a=n(59199),i=n(40181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/9986.934bdabdb13a289402623cb161ec92a0.js.map
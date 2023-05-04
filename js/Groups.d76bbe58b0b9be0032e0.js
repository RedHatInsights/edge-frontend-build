(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7633,8471],{56591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(92950).createContext)({})},32650:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(93433),a=n(4942),o=n(41609),i=n.n(o),u=n(27361),s=n.n(u);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return"number"!=typeof e&&!0!==e&&i()(e)},d=function(e,t){if(t.isNotEmpty)return!p(e);if(t.isEmpty)return p(e);if(t.pattern){var n=RegExp(t.pattern,t.flags);return t.notMatch?!n.test(e):n.test(e)}if("function"==typeof t.is)return t.is(e,t);if(Object.prototype.hasOwnProperty.call(t,"greaterThan"))return e>t.greaterThan;if(Object.prototype.hasOwnProperty.call(t,"greaterThanOrEqualTo"))return e>=t.greaterThanOrEqualTo;if(Object.prototype.hasOwnProperty.call(t,"lessThan"))return e<t.lessThan;if(Object.prototype.hasOwnProperty.call(t,"lessThanOrEqualTo"))return e<=t.lessThanOrEqualTo;var r=Array.isArray(t.is)?!!t.is.includes(e):e===t.is;return t.notMatch?!r:r};const f=function e(t,n,a){var o=l(l({visible:!0},t.then),{},{result:!0}),i=l(l({visible:!1},t.else),{},{result:!1});if(Array.isArray(t))return t.map((function(t){return e(t,n,a)})).some((function(e){return!1===e.result}))?i:o;if(t.and)return t.and.map((function(t){return e(t,n,a)})).some((function(e){return!1===e.result}))?i:o;if(t.sequence)return t.sequence.reduce((function(t,a){var o=e(a,n);return{sets:[].concat((0,r.Z)(t.sets),(0,r.Z)(o.set?[o.set]:[])),visible:t.visible||o.visible,result:t.result||o.result}}),l(l({},i),{},{sets:[]}));if(t.or)return t.or.map((function(t){return e(t,n,a)})).some((function(e){return!0===e.result}))?o:i;if(t.not)return e(t.not,n).result?i:o;var u="function"==typeof t.when?t.when(a):t.when;return"string"==typeof u?d(s()(n,u),t)?o:i:Array.isArray(u)&&u.map((function(e){return d(s()(n,"function"==typeof e?e(a):e),t)})).find((function(e){return!!e}))?o:i}},64124:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={REQUIRED:"required",MIN_LENGTH:"min-length",MAX_LENGTH:"max-length",EXACT_LENGTH:"exact-length",MIN_ITEMS:"min-items",MIN_NUMBER_VALUE:"min-number-value",MAX_NUMBER_VALUE:"max-number-value",PATTERN:"pattern",URL:"url"}},76889:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,_t:()=>a,k1:()=>o});var r=n(40400);const a={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},47906:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(92950),a=n.n(r),o=n(45697),i=n.n(o),u=n(64124),s=n(96354),c=n(60722),l=n(87029),p=n(69957),d=n(37655),f=n(68340),m=n(32349),v=n(77760),b=function(e){return a().createElement(f.x,null,a().createElement("strong",null,e," "),"and all its data will be permanently deleted. Associated systems will be removed from the group but will not be deleted.")},h=function(e){return{fields:[{component:s.Z.PLAIN_TEXT,name:"warning-message",label:b(e)},{component:s.Z.CHECKBOX,name:"confirmation",label:"I understand that this action cannot be undone.",validate:[{type:u.Z.REQUIRED}]}]}},y=function(){return a().createElement(p.ZP,{color:d.Z.value})},g=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,o=e.modalState,i=o.id,u=o.name,s=(0,v.useDispatch)();return a().createElement(c.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Delete group",titleIconVariant:y,variant:"danger",submitLabel:"Delete",schema:h(u),onSubmit:function(){var e={onSuccess:{title:"Success",description:"".concat(u," has been removed successfully")},onError:{title:"Error",description:"Failed to delete group"}};(0,m.Z)(s,(function(){return(0,l.yq)(i)}),e)},reloadData:r})};g.propTypes={id:i().number,name:i().string,modalState:i().object,isModalOpen:i().bool,setIsModalOpen:i().func,reloadData:i().func};const O=g},23537:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(15861),a=n(29439),o=n(64687),i=n.n(o),u=n(92950),s=n.n(u),c=n(28191),l=n(89376),p=n(39173),d=n(4942),f=n(45697),m=n.n(f),v=n(73448),b=n(96620),h=n(9192),y=n(52643),g=n(37619),O=n(75824);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=s().lazy((function(){return Promise.all([n.e(6954),n.e(8615),n.e(4390),n.e(3006),n.e(6681)]).then(n.bind(n,68940))})),D=[{label:"Name",type:"text"}],S=[{title:"Name",type:"name",sort:!0},{title:"Systems",type:"name",sort:!1},{title:"Image",type:"name",sort:!1}],Z=function(e){var t=e.data,n=e.count,o=e.isLoading,c=e.hasError,l=e.handleCreateModal,p=e.handleRenameModal,d=e.handleDeleteModal,f=e.hasModalSubmitted,m=e.setHasModalSubmitted,E=e.fetchGroups,Z=(0,b.useHistory)(),j=(0,b.useLocation)().pathname,I=(0,u.useState)({isOpen:!1,deviceData:null,imageData:null}),T=(0,a.Z)(I,2),P=T[0],x=T[1],N=null==t?void 0:t.map((function(e){var t,n,r,a=e.DeviceGroup,o=a.ID,i=a.Name,u=a.Devices,c=e.DevicesImageInfo;c||(c=[]);var l=null!=u?u:[],p=s().createElement("div",null,s().createElement(O.u,{content:s().createElement("div",null,c.map((function(e,t){return s().createElement("p",{key:t},e.Name)})))},s().createElement("span",null,"Multiple images")));return{rowInfo:{id:o,title:i,image:0===c.length?"-":c.length>1?"Multiple images":null===(t=c[0])||void 0===t?void 0:t.Name,devicesImageInfo:e.DevicesImageInfo,devices:u,hasValidUpdate:null==e||null===(n=e.DeviceGroup)||void 0===n?void 0:n.ValidUpdate},cells:[{title:s().createElement(b.Link,{to:"".concat(h._.fleetManagement,"/").concat(o)},i)},{title:l.length},{title:0===c.length?"-":c.length>1?p:null===(r=c[0])||void 0===r?void 0:r.Name}]}}));return s().createElement(s().Fragment,null,s().createElement(v.Z,{apiFilterSort:!0,isUseApi:!0,loadTableData:E,filters:D,tableData:{count:n,data:t,isLoading:o,hasError:c},columnNames:S,rows:N,actionResolver:function(e){var t;if(null==e||!e.rowInfo)return[];var n=e.rowInfo,r=n.id,a=n.title,o=n.devices,i=n.devicesImageInfo,u=null==i?void 0:i.some((function(e){return e.UpdateAvailable}));return r&&[{title:"Rename",onClick:function(){return p(r,a)}},{title:"Delete",onClick:function(){return d(r,a)}},{title:"Update",onClick:function(){return x((function(e){return w(w({},e),{},{deviceData:o.map((function(e){return{id:e.UUID,display_name:e.Name}})),imageId:o.find((function(e){return null==e?void 0:e.ImageID})).ImageID,isOpen:!0})}))},isDisabled:!(o.length>0&&null!=e&&null!==(t=e.rowInfo)&&void 0!==t&&t.hasValidUpdate&&u)}]},areActionsDisabled:function(){return!1},defaultSort:{index:0,direction:"asc"},emptyFilterState:{title:"No matching groups found",body:"To continue, edit your filter settings and try again"},toolbarButtons:[{title:"Create group",click:l}],hasModalSubmitted:f,setHasModalSubmitted:m}),P.isOpen&&s().createElement(u.Suspense,{fallback:s().createElement(y.b,null,s().createElement(g.$,null))},s().createElement(M,{navigateBack:function(){Z.push({pathname:j}),x((function(e){return w(w({},e),{},{isOpen:!1})}))},setUpdateModal:x,updateModal:P,refreshTable:(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:m(!0);case 3:case"end":return e.stop()}}),e)})))})))};Z.propTypes={data:m().array,count:m().number,closeModal:m().func,isLoading:m().bool,hasError:m().bool,handleRenameModal:m().func,handleDeleteModal:m().func,handleCreateModal:m().func,hasModalSubmitted:m().bool,setHasModalSubmitted:m().func,fetchGroups:m().func};const j=Z;var I=n(3035),T=n(87029),P=n(41825),x=n(61381),N=n(47906),_=n(96094),k=n(48903);const A=function(){var e=(0,b.useLocation)().search,t=(0,_.Z)({api:T.jA,tableReload:!0}),n=(0,a.Z)(t,2),o=n[0],d=n[1],f=o.data,m=o.isLoading,v=o.hasError,h=(0,u.useState)({id:null,name:""}),y=(0,a.Z)(h,2),g=y[0],O=y[1],E=(0,u.useState)(!1),w=(0,a.Z)(E,2),M=w[0],D=w[1],S=(0,u.useState)(!1),Z=(0,a.Z)(S,2),A=Z[0],C=Z[1],L=(0,u.useState)(!1),R=(0,a.Z)(L,2),U=R[0],G=R[1],q=(0,u.useState)(!1),H=(0,a.Z)(q,2),V=H[0],F=H[1],X=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:F(!0);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s().createElement(s().Fragment,null,s().createElement(l.Z,{className:"pf-m-light"},s().createElement(p.Z,{title:"Groups"})),s().createElement("section",{className:"edge-groups pf-l-page__main-section pf-c-page__main-section"},(0,k.G0)(m,null==f?void 0:f.count,e)?s().createElement(c.k,{justifyContent:{default:"justifyContentCenter"}},s().createElement(I.Z,{icon:"plus",title:"Create a system group",body:"Create system groups to help manage your systems more effectively.",primaryAction:{text:"Create group",click:function(){return D(!0)}},secondaryActions:[{type:"link",title:"Learn more about system groups",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/working_with_systems_in_the_edge_management_application/index"}]})):s().createElement(j,{data:(null==f?void 0:f.data)||[],count:null==f?void 0:f.count,isLoading:m,hasError:v,handleRenameModal:function(e,t){O({id:e,name:t}),C(!0)},handleDeleteModal:function(e,t){O({id:e,name:t}),G(!0)},handleCreateModal:function(){return D(!0)},hasModalSubmitted:V,setHasModalSubmitted:F,fetchGroups:d})),M&&s().createElement(P.Z,{isModalOpen:M,setIsModalOpen:D,reloadData:X}),A&&s().createElement(x.Z,{isModalOpen:A,setIsModalOpen:C,reloadData:X,modalState:g}),U&&s().createElement(N.Z,{isModalOpen:U,setIsModalOpen:G,reloadData:X,modalState:g}))}},61381:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(15861),a=n(64687),o=n.n(a),i=n(92950),u=n.n(i),s=n(45697),c=n.n(s),l=n(64124),p=n(96354),d=n(60722),f=n(87029),m=n(48903),v=n(32349),b=n(77760),h=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.Tb)(t);case 2:if(!e.sent.data.isValid){e.next=5;break}return e.abrupt("return","Group name already exists");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={fields:[{component:p.Z.TEXT_FIELD,name:"name",label:"Group name",helperText:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ ).",isRequired:!0,validate:[{type:l.Z.REQUIRED},{type:l.Z.MAX_LENGTH,threshold:50},m.qg,h]}]},g=function(e){var t=e.isModalOpen,n=e.setIsModalOpen,r=e.reloadData,a=e.modalState,o=a.id,i=a.name,s=(0,b.useDispatch)();return u().createElement(d.Z,{isOpen:t,closeModal:function(){return n(!1)},title:"Rename group",submitLabel:"Save",schema:y,initialValues:a,onSubmit:function(e){var t={onSuccess:{title:"Success",description:"".concat(i," has been renamed to ").concat(e.name," successfully")},onError:{title:"Error",description:"Failed to rename group"}};(0,v.Z)(s,(function(){return(0,f.OS)(o,e)}),t)},reloadData:r})};g.propTypes={id:c().number,modalState:c().object,isModalOpen:c().bool,setIsModalOpen:c().func,reloadData:c().func};const O=g},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(4942),a=n(15861),o=n(64687),i=n.n(o),u=n(83215);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=function(e,t,n){var r,o,s=null===(r=n)||void 0===r?void 0:r.onSuccess,l=null===(o=n)||void 0===o?void 0:o.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var p=function(){var r=(0,a.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,l&&e(c({},(0,u.wN)(c({variant:"info"},n.onInfo)))),s&&e(c({},(0,u.wN)(c({variant:"success"},n.onSuccess)))),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),e(c({},(0,u.wN)(c(c({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return p()}},27561:(e,t,n)=>{var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var r=n(13218),a=n(7771),o=n(14841),i=Math.max,u=Math.min;e.exports=function(e,t,n){var s,c,l,p,d,f,m=0,v=!1,b=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=s,r=c;return s=c=void 0,m=t,p=e.apply(r,n)}function g(e){return m=e,d=setTimeout(E,t),v?y(e):p}function O(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-m>=l}function E(){var e=a();if(O(e))return w(e);d=setTimeout(E,function(e){var n=t-(e-f);return b?u(n,l-(e-m)):n}(e))}function w(e){return d=void 0,h&&s?y(e):(s=c=void 0,p)}function M(){var e=a(),n=O(e);if(s=arguments,c=this,f=e,n){if(void 0===d)return g(f);if(b)return clearTimeout(d),d=setTimeout(E,t),y(f)}return void 0===d&&(d=setTimeout(E,t)),p}return t=o(t)||0,r(n)&&(v=!!n.leading,l=(b="maxWait"in n)?i(o(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),M.cancel=function(){void 0!==d&&clearTimeout(d),m=0,s=f=c=d=void 0},M.flush=function(){return void 0===d?p:w(a())},M}},7739:(e,t,n)=>{var r=n(89465),a=n(55189),o=Object.prototype.hasOwnProperty,i=a((function(e,t,n){o.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=i},41609:(e,t,n)=>{var r=n(280),a=n(64160),o=n(35694),i=n(1469),u=n(98612),s=n(44144),c=n(25726),l=n(36719),p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(u(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||l(e)||o(e)))return!e.length;var t=a(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(c(e))return!r(e).length;for(var n in e)if(p.call(e,n))return!1;return!0}},7771:(e,t,n)=>{var r=n(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,n)=>{var r=n(27561),a=n(13218),o=n(33448),i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=u.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e}},91993:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30907),a=n(59199),o=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
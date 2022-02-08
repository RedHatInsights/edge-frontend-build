"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[205],{66702:(e,t,n)=>{n.d(t,{Kz:()=>p,EV:()=>f,Bi:()=>d,QY:()=>g,EC:()=>m,Z4:()=>y,g5:()=>b,Dk:()=>v,H1:()=>h,dd:()=>E,eS:()=>O,dt:()=>k,Es:()=>P,gK:()=>w,$v:()=>Z,sS:()=>C,jA:()=>j,VL:()=>x});var r=n(29439),a=n(15861),o=n(71002),i=n(87757),c=n.n(i),l=(n(58061),n(93454));n(68004);var u="/api/edge/v1",s=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0;return"object"===(0,o.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(r=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,o.Z)(e[n]))&&""!==e[n]&&(r="".concat(n,"=").concat(e[n])),void 0===r?t:""===t?"".concat(r):"".concat(t,"&").concat(r)}),"")},p=function(e){var t=e.id;return l.eE.get("".concat(u,"/images/").concat(t,"/details"))},f=function(){var e=(0,a.Z)(c().mark((function e(t,n,r){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,l.eE)("".concat("/api/image-builder/v1","/packages?").concat(a.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(e){var t=e.Id,n=e.name,a=e.version,o=e.description,i=e.release,c=e.architecture,s=e.username,p=e.credentials,f=e.imageType,d=e["selected-packages"],g=f||[],m=(0,r.Z)(g,1)[0];f.length>1&&(m="rhel-edge-installer");var y={name:n,version:a,description:o,distribution:i,imageType:m,packages:d.map((function(e){return{name:e.name}})),outputTypes:f,commit:{arch:c},installer:{username:s,sshkey:p}},b="".concat(u,"/images");return a>1&&(b+="/".concat(t,"/update")),l.eE.post(b,y)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:100,offset:0,sort_by:"-created_at"},t=s(e);return l.eE.get("".concat(u,"/image-sets?").concat(t))},m=function(e){return l.eE.get("".concat(u,"/images/").concat(e,"/status"))},y=function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.eE.get("".concat(u,"/devices/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.eE.post("".concat(u,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return l.eE.get("".concat(u,"/updates/device/").concat(e,"/image"))},h=function(e){var t={name:e};return l.eE.post("".concat(u,"/images/checkImageName"),t)},E=function(){return l.eE.get("".concat(u,"/thirdpartyrepo"))},O=function(e){return l.eE.post("".concat(u,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},k=function(e){var t=e.id,n=e.q,r=s(void 0===n?{limit:100,offset:0,sort_by:"-created_at"}:n);return l.eE.get("".concat(u,"/image-sets/").concat(t,"?").concat(r))},P=function(e){return l.eE.put("".concat(u,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},w=function(e){return l.eE.delete("".concat(u,"/thirdpartyrepo/").concat(e))},Z=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.eE.get("".concat(u,"/devices"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){return l.eE.post("".concat(u,"/device-groups/"),{Name:e.name,Type:"static"})},j=function(){return l.eE.get("".concat(u,"/device-groups"))},x=function(e){return l.eE.get("".concat(u,"/device-groups/").concat(e))}},3035:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(93264),a=n.n(r),o=n(60485),i=n(47173),c=n(9947),l=n(38424),u=n(75106),s=n(35293),p=n(64915),f=n(80810),d=n(15265),g=n(73479),m=n(45697),y=n.n(m),b=n(75662),v={repository:p.ZP,search:f.ZP,question:g.ZP},h=function(e){var t=e.bgColor,n=e.icon,r=e.title,p=e.body,f=e.primaryAction,g=e.secondaryActions;return a().createElement(c.u,{style:{backgroundColor:t||""}},n&&a().createElement(l.k,{icon:v[n]}),a().createElement(o.D,{headingLevel:"h4",size:"lg"},r),a().createElement(u.B,null,p),f&&a().createElement(a().Fragment,null,f.href?a().createElement(i.zx,{component:b.Link,to:f.href},f.text):a().createElement(i.zx,{onClick:f.click,variant:"primary"},f.text)),a().createElement(s.i,null,g.map((function(e,t){var n=e.type,r=e.title,o=e.link,c=e.onClick;return a().createElement(i.zx,{component:"link"===n?"a":"button",href:o,variant:"link",key:t,onClick:c},r,o&&a().createElement(d.ZP,{className:"pf-u-ml-sm"}))}))))};h.propTypes={bgColor:y().string,icon:y().string,title:y().string,body:y().string,primaryAction:y().object,secondaryActions:y().array};const E=h},383:(e,t,n)=>{n.d(t,{Z:()=>re});var r=n(29439),a=n(4942),o=n(93433),i=n(93264),c=n.n(i),l=n(84812),u=n(71070),s=n(1595),p=n(78919),f=n(47173),d=n(13115),g=n(57980),m=n(15209),y=n(45697),b=n.n(y),v=n(54680),h=n(92694),E=n(76889);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return c().createElement(c().Fragment,null,t.length>1?c().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},c().createElement(v.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return k(k({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:c().createElement(E.ZP,null)},t.map((function(e,t){return c().createElement(h.$,{key:t,value:e.label})})))):null)};P.propTypes={filters:b().array,dropdown:b().object,setDropdown:b().func};const w=P;var Z=n(23279),C=n.n(Z),j=n(65802),x=n(98490);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.filterValues,n=e.setFilterValues,l=e.input,u=t.find((function(e){return e.label===l})),p=(0,i.useState)(!1),f=(0,r.Z)(p,2),d=f[0],g=f[1],m=function(){return function(e,t){n((function(n){var r,o=n.findIndex((function(e){return e.label===u.label})),i=n.find((function(e){return e.label===u.label})),c="checkbox"===u.type?i.value.findIndex((function(e){return e.option===t})):0,l=Object.values(A(A({},i.value),{},(0,a.Z)({},c,A(A({},i.value[c]),{},{isChecked:!(null!=i&&null!==(r=i.value[c])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(A(A({},n),{},(0,a.Z)({},o,A(A({},n[o]),{},{value:"checkbox"===u.type?l:s}))))}))}};return"text"===u.type?c().createElement(s.E,{"data-testid":"filter-input-testid"},c().createElement(j.B,null,c().createElement(x.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label),placeholder:"Filter by ".concat(u.label),onChange:C()(m(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,o.Z)(t.slice(0,e)),[A(A({},t[e]),{},{value:""})],(0,o.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?c().createElement(s.E,{"data-testid":"filter-input-testid"},c().createElement(j.B,null,c().createElement(v.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label),width:"11rem",placeholderText:"Filter by ".concat(u.label),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return g((function(e){return!e}))},onSelect:m(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return c().createElement(h.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};F.propTypes={filterValues:b().array,setFilterValues:b().func,input:b().string};const D=F;var L=function(e){var t=e.filters,n=e.filterValues,a=e.setFilterValues,o=(0,i.useState)({isOpen:!1,selected:t[0].label}),l=(0,r.Z)(o,2),u=l[0],s=l[1];return c().createElement(c().Fragment,null,c().createElement(w,{dropdown:u,setDropdown:s,filters:t}),c().createElement(D,{filterValues:n,setFilterValues:a,input:u.selected}))};L.propTypes={filters:b().array,filterValues:b().array,setFilterValues:b().func};const V=L;var T=n(7739),N=n.n(T),B=n(26391),I=n(21899);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.filterValues,n=e.setFilterValues,a=e.chipsArray,l=e.setChipsArray;return(0,i.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||a.find((function(e){return e.label===t.option}))?!1===t.isChecked&&a.find((function(e){return e.label===t.option}))&&l((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,o.Z)(e.slice(0,n)),(0,o.Z)(e.slice(n+1,e.length)))})):l((function(n){return[].concat((0,o.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};a.find((function(t){return t.key===e.label}))?l((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):l((function(e){return[].concat((0,o.Z)(e),[t])}))}else"text"===e.type&&a.find((function(t){return t.key===e.label}))&&l((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))}))}))}),[t]),c().createElement(c().Fragment,null,a.length>0?Object.entries(N()(a,"key")).map((function(e){var a=(0,r.Z)(e,2),i=a[0],u=a[1];return c().createElement(B.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:i,key:i},u.map((function(e){return c().createElement(I.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,o.Z)(t.slice(0,r)),[_(_({},t[r]),{},{value:""})],(0,o.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var a=n.value.map((function(t){return t.option===e.label?_(_({},t),{},{isChecked:!1}):t}));return l((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))})),[].concat((0,o.Z)(t.slice(0,r)),[_(_({},t[r]),{},{value:a})],(0,o.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:i},e.label)})))})):null,a.length>0?c().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return _(_({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,_(_({},e),{},{isChecked:!1})}));return _(_({},e),{},{value:t})}}))})),l([])}},"Clear filters"):null)};z.propTypes={filterValues:b().array,setFilterValues:b().func,chipsArray:b().array,setChipsArray:b().func};const U=z;var M=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click;return c().createElement(s.E,{key:t},c().createElement(f.zx,{onClick:r,variant:"primary"},n))}))},$=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,a=e.filterValues,o=e.chipsArray,i=e.setChipsArray,f=e.isLoading,y=e.count,b=e.perPage,v=e.setPerPage,h=e.page,E=e.setPage,O=e.toggleButton,k=e.toggleAction,P=e.toggleState;return c().createElement(l.o,{id:"toolbar","data-testid":"toolbar-header-testid"},c().createElement(p.c,null,c().createElement(V,{filters:n,filterValues:a,setFilterValues:r}),t&&c().createElement(M,{buttons:t}),O&&c().createElement(d.t,null,O.map((function(e){return c().createElement(g.G,{key:e.key,text:e.title,isSelected:P===e.key,onChange:function(){return k(e.key)}})}))),c().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?c().createElement(m.O,{width:"200px"}):y>0?c().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:y,perPage:b,page:h,onSetPage:function(e,t){return E(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return v(t)},isCompact:!0}):null)),c().createElement(p.c,null,c().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},c().createElement(U,{filterValues:a,setFilterValues:r,chipsArray:o,setChipsArray:i}))))};$.propTypes={filters:b().array,toolbarButtons:b().array,setFilterValues:b().func,filterValues:b().array,input:b().string,count:b().number,perPage:b().number,setPerPage:b().func,page:b().number,setPage:b().func,chipsArray:b().array,setChipsArray:b().func,isLoading:b().bool,toggleButton:b().array,toggleAction:b().func,toggleState:b().number};const q=$;var H=function(e){var t=e.isLoading,n=e.count,r=e.perPage,a=e.setPerPage,o=e.page,i=e.setPage;return c().createElement(l.o,{id:"toolbar"},c().createElement(p.c,null,c().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?c().createElement(m.O,{width:"400px"}):n>0?c().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:o,onSetPage:function(e,t){return i(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return a(t)}}):null)))};H.propTypes={isLoading:b().bool,count:b().number,perPage:b().number,setPerPage:b().func,page:b().number,setPage:b().func};const Q=H;function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const W=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return K(K({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var Y=n(27577),J=n(3035),X=n(82041);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t,n=e.apiFilterSort,l=e.urlParam,u=e.filters,s=e.loadTableData,p=e.tableData,f=e.columnNames,d=e.rows,g=e.toolbarButtons,y=e.actionResolver,b=e.areActionsDisabled,v=e.defaultSort,h=e.emptyStateMessage,E=e.emptyStateAction,O=e.emptyStateActionMessage,k=e.toggleButton,P=e.toggleAction,w=e.toggleState,Z=e.hasCheckbox,C=void 0!==Z&&Z,j=e.skeletonRowQuantity,x=(0,i.useState)(W(u)),S=(0,r.Z)(x,2),A=S[0],F=S[1],D=(0,i.useState)([]),L=(0,r.Z)(D,2),V=L[0],T=L[1],N=(0,i.useState)(v),B=(0,r.Z)(N,2),I=B[0],R=B[1],_=(0,i.useState)(20),z=(0,r.Z)(_,2),U=z[0],M=z[1],$=(0,i.useState)(1),H=(0,r.Z)($,2),G=H[0],K=H[1],ee=(0,i.useState)([]),ne=(0,r.Z)(ee,2),re=ne[0],ae=ne[1],oe=(0,X.useDispatch)();(0,i.useEffect)((function(){var e,t,r=n?te(te({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,o.Z)(e[t.key.toLowerCase()]);return te(te({},e),{},(0,a.Z)({},t.key.toLowerCase(),[].concat((0,o.Z)(n),[t.apiName?t.apiName:t.value])))}return te(te({},e),{},(0,a.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(V)),{},{limit:U,offset:(G-1)*U},(t=(e={direction:I.direction,name:ge[I.index].type}).name,{sort_by:"asc"===e.direction?t:"-".concat(t)})):null;n&&l?s(oe,l,r):n&&s(oe,r)}),[V,U,G,I]);var ie,ce=p.count,le=p.isLoading,ue=p.hasError,se=!n&&(ie=A.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),d.filter((function(e){return ie.length>0?null==ie?void 0:ie.every((function(t){return"text"===t.type?e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),pe=function(e){return e.sort((function(e,t){return"number"==typeof(null==e?void 0:e.noApiSortFilter[I.index])?"asc"===I.direction?(null==e?void 0:e.noApiSortFilter[I.index])-(null==t?void 0:t.noApiSortFilter[I.index]):(null==t?void 0:t.noApiSortFilter[I.index])-(null==e?void 0:e.noApiSortFilter[I.index]):"asc"===I.direction?null==e?void 0:e.noApiSortFilter[I.index].localeCompare(null==t?void 0:t.noApiSortFilter[I.index],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[I.index].localeCompare(null==e?void 0:e.noApiSortFilter[I.index],void 0,{sensitivity:"base"})}))},fe=n?0:null===(t=pe(se))||void 0===t?void 0:t.length,de=le||ue||(null==ce?void 0:ce.length)>0&&u.length>0,ge=f.map((function(e){return{title:e.title,type:e.type,transforms:de?[]:e.sort?[Y.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),me=n?d:d.length>0?pe(se).slice((G-1)*U,(G-1)*U+U):d;return c().createElement(c().Fragment,null,c().createElement(q,{count:n?ce:fe,toolbarButtons:g,filters:u,filterValues:A,setFilterValues:F,chipsArray:V,setChipsArray:T,isLoading:le,perPage:U,setPerPage:M,page:G,setPage:K,toggleButton:k,toggleAction:P,toggleState:w}),!le&&ce<1?c().createElement(J.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:"search",title:h,secondaryActions:[{title:O,onClick:function(){return E()}}]}):!le&&!(null!=me&&me.length)>0?c().createElement(J.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:"search",title:"No match found",secondaryActions:[{title:"Clear all filters",onClick:function(){return F(W(u))}}]}):c().createElement(Y.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"General Table Component",sortBy:I,onSort:function(e,t,n){R({index:t,direction:n})},actionResolver:y||null,areActionsDisabled:b,cells:ge,rows:le?function(e){return(0,o.Z)(Array(null!=j?j:e)).map((function(){return{cells:f.map((function(){return{title:c().createElement(m.O,{width:"100%"})}}))}}))}(U):C?me.map((function(e,t){return re.includes(-1)||re.includes(t)?te(te({},e),{},{selected:!0}):te(te({},e),{},{selected:!1})})):me,onSelect:C?function(e,t,n){ae(-1!==n||t?-1===n?me.map((function(e,t){return t})):function(e){return t?[].concat((0,o.Z)(e),[n]):e.filter((function(e){return e!==n}))}:[])}:null,canSelectAll:C},c().createElement(Y.TableHeader,null),c().createElement(Y.TableBody,null)),c().createElement(Q,{isLoading:le,count:n?ce:fe,setFilterValues:F,perPage:U,setPerPage:M,page:G,setPage:K}))};ne.propTypes={apiFilterSort:b().bool,filters:b().array,urlParam:b().string,loadTableData:b().func,tableData:b().object,columnNames:b().array,rows:b().array,actionResolver:b().func,areActionsDisabled:b().func,defaultSort:b().object,toolbarButtons:b().array,emptyStateMessage:b().string,emptyStateActionMessage:b().string,emptyStateAction:b().func,toggleButton:b().array,toggleAction:b().func,toggleState:b().number,hasCheckbox:b().bool,skeletonRowQuantity:b().number};const re=ne},58061:(e,t,n)=>{n.d(t,{Op:()=>m,E5:()=>y,n:()=>b,qg:()=>v,Ff:()=>h});var r=n(68778),a=n(43047),o=n(69957),i=n(34143),c=n(53636),l=n(54340),u=n(17542),s=n(12990),p=n(37655),f=n(4088),d=n(14206),g=n(64124),m=["done","error","pending","unknown","updating","warning","notification"],y={done:{icon:r.ZP,color:f.Z.value,title:"Fully adopted"},error:{icon:a.ZP,color:s.Z.value,title:"Error while adopting"},pending:{icon:c.ZP,title:"Pending adoption"},updating:{icon:l.ZP,title:"Updating"},unknown:{icon:u.ZP,title:"Unknown state"},warning:{icon:o.ZP,color:p.Z.value,title:"Warning while adopting"},notification:{icon:i.ZP,color:d.Z.value,title:"Delivering"}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},v={type:g.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/,message:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ )."},h=function(e,t){for(var n=e.split("/"),r={},a=1;a<n.length;a++)n[a]&&(r[t[a-1]]=n[a]);return r.buildUrl=function(){return Object.values(this).reduce((function(e,t){return"function"!=typeof t?"".concat(e,"/").concat(t):e}),"")},r}}}]);
//# sourceMappingURL=../sourcemaps/205.3d7dfa3a97fcfd7a32d136865e519cc1.js.map
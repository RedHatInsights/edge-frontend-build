"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[625],{66702:(e,t,n)=>{n.d(t,{Kz:()=>p,EV:()=>f,Bi:()=>d,QY:()=>g,EC:()=>m,Z4:()=>h,g5:()=>b,Dk:()=>y,H1:()=>v,dd:()=>k,eS:()=>E,dt:()=>O,Es:()=>w,gK:()=>P,$v:()=>S,sS:()=>x,jA:()=>C,VL:()=>Z,OS:()=>j,yq:()=>A,e3:()=>D});var r=n(29439),c=n(15861),a=n(71002),o=n(87757),i=n.n(o),l=(n(58061),n(93454));n(68004);var u="/api/edge/v1",s=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0;return"object"===(0,a.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(r=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,a.Z)(e[n]))&&""!==e[n]&&(r="".concat(n,"=").concat(e[n])),void 0===r?t:""===t?"".concat(r):"".concat(t,"&").concat(r)}),"")},p=function(e){var t=e.id;return l.eE.get("".concat(u,"/images/").concat(t,"/details"))},f=function(){var e=(0,c.Z)(i().mark((function e(t,n,r){var c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,l.eE)("".concat("/api/image-builder/v1","/packages?").concat(c.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(e){var t=e.Id,n=e.name,c=e.version,a=e.description,o=e.release,i=e.architecture,s=e.username,p=e.credentials,f=e.imageType,d=e["selected-packages"],g=f||[],m=(0,r.Z)(g,1)[0];f.length>1&&(m="rhel-edge-installer");var h={name:n,version:c,description:a,distribution:o,imageType:m,packages:d.map((function(e){return{name:e.name}})),outputTypes:f,commit:{arch:i},installer:{username:s,sshkey:p}},b="".concat(u,"/images");return c>1&&(b+="/".concat(t,"/update")),l.eE.post(b,h)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=s(e);return l.eE.get("".concat(u,"/image-sets?").concat(t))},m=function(e){return l.eE.get("".concat(u,"/images/").concat(e,"/status"))},h=function(){var e=(0,c.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.eE.get("".concat(u,"/devices/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,c.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.eE.post("".concat(u,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return l.eE.get("".concat(u,"/updates/device/").concat(e,"/image"))},v=function(e){var t={name:e};return l.eE.post("".concat(u,"/images/checkImageName"),t)},k=function(){return l.eE.get("".concat(u,"/thirdpartyrepo"))},E=function(e){return l.eE.post("".concat(u,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},O=function(e){var t=e.id,n=e.q,r=s(void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n);return l.eE.get("".concat(u,"/image-sets/").concat(t,"?").concat(r))},w=function(e){return l.eE.put("".concat(u,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},P=function(e){return l.eE.delete("".concat(u,"/thirdpartyrepo/").concat(e))},S=function(){var e=(0,c.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.eE.get("".concat(u,"/devices"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){return l.eE.post("".concat(u,"/device-groups/"),{Name:e.name,Type:"static"})},C=function(){return l.eE.get("".concat(u,"/device-groups"))},Z=function(e){return l.eE.get("".concat(u,"/device-groups/").concat(e))},j=function(e,t){return l.eE.put("".concat(u,"/device-groups/").concat(e),{Name:t.name,Type:"static"})},A=function(e){return l.eE.delete("".concat(u,"/device-groups/").concat(e))},D=function(e,t){return l.eE.post("".concat(u,"/device-groups/").concat(e,"/devices"),{ID:e,Devices:t})}},3035:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(93264),c=n.n(r),a=n(60485),o=n(47173),i=n(9947),l=n(38424),u=n(75106),s=n(35293),p=n(64915),f=n(80810),d=n(35453),g=n(15914),m=n(15265),h=n(73479),b=n(7081),y=n(45697),v=n.n(y),k=n(75662),E={repository:p.ZP,search:f.ZP,module:d.ZP,cube:g.ZP,question:h.ZP,plus:b.ZP},O=function(e){var t=e.bgColor,n=e.icon,r=e.title,p=e.body,f=e.primaryAction,d=e.secondaryActions;return c().createElement(i.u,{variant:"large",style:{backgroundColor:t||""}},n&&c().createElement(l.k,{icon:E[n]}),c().createElement(a.D,{headingLevel:"h4",size:"lg"},r),c().createElement(u.B,null,p),f&&c().createElement(c().Fragment,null,f.href?c().createElement(o.zx,{component:k.Link,to:f.href},f.text):c().createElement(o.zx,{onClick:f.click,variant:"primary"},f.text)),c().createElement(s.i,null,d.map((function(e,t){var n=e.type,r=e.title,a=e.link,i=e.onClick;return c().createElement(o.zx,{component:"link"===n?"a":"button",href:a,variant:"link",key:t,onClick:i},r,a&&c().createElement(m.ZP,{className:"pf-u-ml-sm"}))}))))};O.propTypes={bgColor:v().string,icon:v().string,title:v().string,body:v().string,primaryAction:v().object,secondaryActions:v().array};const w=O},66577:(e,t,n)=>{n.d(t,{Z:()=>pe});var r=n(29439),c=n(4942),a=n(93433),o=n(93264),i=n.n(o),l=n(84812),u=n(71070),s=n(1595),p=n(78919),f=n(47173),d=n(13115),g=n(57980),m=n(15209),h=n(45697),b=n.n(h),y=n(54680),v=n(92694),k=n(76889);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return i().createElement(i().Fragment,null,t.length>1?i().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},i().createElement(y.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return O(O({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:i().createElement(k.ZP,null)},t.map((function(e,t){return i().createElement(v.$,{key:t,value:e.label})})))):null)};w.propTypes={filters:b().array,dropdown:b().object,setDropdown:b().func};const P=w;var S=n(23279),x=n.n(S),C=n(65802),Z=n(98490);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.filterValues,n=e.setFilterValues,l=e.input,u=t.find((function(e){return e.label===l})),p=(0,o.useState)(!1),f=(0,r.Z)(p,2),d=f[0],g=f[1],m=function(){return function(e,t){n((function(n){var r,a=n.findIndex((function(e){return e.label===u.label})),o=n.find((function(e){return e.label===u.label})),i="checkbox"===u.type?o.value.findIndex((function(e){return e.option===t})):0,l=Object.values(A(A({},o.value),{},(0,c.Z)({},i,A(A({},o.value[i]),{},{isChecked:!(null!=o&&null!==(r=o.value[i])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(A(A({},n),{},(0,c.Z)({},a,A(A({},n[a]),{},{value:"checkbox"===u.type?l:s}))))}))}};return"text"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(C.B,null,i().createElement(Z.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label),placeholder:"Filter by ".concat(u.label),onChange:x()(m(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,a.Z)(t.slice(0,e)),[A(A({},t[e]),{},{value:""})],(0,a.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(C.B,null,i().createElement(y.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label),width:"11rem",placeholderText:"Filter by ".concat(u.label),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return g((function(e){return!e}))},onSelect:m(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return i().createElement(v.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};D.propTypes={filterValues:b().array,setFilterValues:b().func,input:b().string};const F=D;var B=function(e){var t=e.filters,n=e.filterValues,c=e.setFilterValues,a=e.children,l=(0,o.useState)({isOpen:!1,selected:t[0].label}),u=(0,r.Z)(l,2),s=u[0],p=u[1];return i().createElement(i().Fragment,null,a,i().createElement(P,{dropdown:s,setDropdown:p,filters:t}),i().createElement(F,{filterValues:n,setFilterValues:c,input:s.selected}))};B.propTypes={filters:b().array,filterValues:b().array,setFilterValues:b().func,setCheckBoxState:b().func,checkBoxState:b().object,children:b().element};const R=B;var L=n(7739),T=n.n(L),I=n(26391),V=n(21899);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.filterValues,n=e.setFilterValues,c=e.chipsArray,l=e.setChipsArray,u=e.setPage;return(0,o.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||c.find((function(e){return e.label===t.option}))?!1===t.isChecked&&c.find((function(e){return e.label===t.option}))&&l((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,a.Z)(e.slice(0,n)),(0,a.Z)(e.slice(n+1,e.length)))})):l((function(n){return[].concat((0,a.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};c.find((function(t){return t.key===e.label}))?l((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):l((function(e){return[].concat((0,a.Z)(e),[t])}))}else"text"===e.type&&c.find((function(t){return t.key===e.label}))&&l((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,a.Z)(t.slice(0,n)),(0,a.Z)(t.slice(n+1,t.length)))}))})),u(1)}),[t]),i().createElement(i().Fragment,null,c.length>0?Object.entries(T()(c,"key")).map((function(e){var c=(0,r.Z)(e,2),o=c[0],u=c[1];return i().createElement(I.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:o,key:o},u.map((function(e){return i().createElement(V.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,a.Z)(t.slice(0,r)),[_(_({},t[r]),{},{value:""})],(0,a.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var c=n.value.map((function(t){return t.option===e.label?_(_({},t),{},{isChecked:!1}):t}));return l((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,a.Z)(t.slice(0,n)),(0,a.Z)(t.slice(n+1,t.length)))})),[].concat((0,a.Z)(t.slice(0,r)),[_(_({},t[r]),{},{value:c})],(0,a.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:o},e.label)})))})):null,c.length>0?i().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return _(_({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,_(_({},e),{},{isChecked:!1})}));return _(_({},e),{},{value:t})}}))})),l([])}},"Clear filters"):null)};z.propTypes={filterValues:b().array,setFilterValues:b().func,chipsArray:b().array,setChipsArray:b().func,setPage:b().func};const U=z;var q=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click;return i().createElement(s.E,{key:t},i().createElement(f.zx,{onClick:r,variant:"primary"},n))}))},H=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,c=e.filterValues,a=e.chipsArray,o=e.setChipsArray,f=e.isLoading,h=e.count,b=e.perPage,y=e.setPerPage,v=e.page,k=e.setPage,E=e.toggleButton,O=e.toggleAction,w=e.toggleState,P=e.checkBoxState,S=e.setCheckBoxState,x=e.children;return i().createElement(l.o,{id:"toolbar","data-testid":"toolbar-header-testid"},i().createElement(p.c,null,i().createElement(R,{filters:n,filterValues:c,setFilterValues:r,checkBoxState:P,setCheckBoxState:S},x),t&&i().createElement(q,{buttons:t}),E&&i().createElement(d.t,null,E.map((function(e){return i().createElement(g.G,{key:e.key,text:e.title,isSelected:w===e.key,onChange:function(){return O(e.key)}})}))),i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?i().createElement(m.O,{width:"200px"}):h>0?i().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:h,perPage:b,page:v,onSetPage:function(e,t){return k(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return y(t)},isCompact:!0}):null)),i().createElement(p.c,null,i().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},i().createElement(U,{filterValues:c,setFilterValues:r,chipsArray:a,setChipsArray:o,setPage:k}))))};H.propTypes={filters:b().array,toolbarButtons:b().array,setFilterValues:b().func,filterValues:b().array,input:b().string,count:b().number,perPage:b().number,setPerPage:b().func,page:b().number,setPage:b().func,chipsArray:b().array,setChipsArray:b().func,isLoading:b().bool,toggleButton:b().array,toggleAction:b().func,toggleState:b().number,setCheckBoxState:b().func,checkBoxState:b().object,children:b().element};const $=H;var Q=function(e){var t=e.isLoading,n=e.count,r=e.perPage,c=e.setPerPage,a=e.page,o=e.setPage;return i().createElement(l.o,{id:"toolbar"},i().createElement(p.c,null,i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?i().createElement(m.O,{width:"400px"}):n>0?i().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:a,onSetPage:function(e,t){return o(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return c(t)}}):null)))};Q.propTypes={isLoading:b().bool,count:b().number,perPage:b().number,setPerPage:b().func,page:b().number,setPage:b().func};const G=Q;function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const W=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return M(M({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var Y=n(27577),J=n(3035),X=n(82041),ee=n(56787),te=n(84457),ne=n(75728),re=n(9571),ce=function(e){var t=e.checkBoxState,n=e.handleBulkSelect,c=e.handlePageSelect,a=e.handleNoneSelect,l=(0,o.useState)(!1),u=(0,r.Z)(l,2),p=u[0],f=u[1];return i().createElement(i().Fragment,null,i().createElement(s.E,{variant:"bulk-select"},i().createElement(ee.L,{toggle:i().createElement(ne.Z,{id:"stacked-example-toggle",splitButtonItems:[i().createElement(re.o,{id:"example-checkbox-2",key:"split-checkbox","aria-label":"Select all",isChecked:t.selectAll,onChange:c},t.checkedRows.length>0&&"".concat(t.checkedRows.length," selected"))],onToggle:function(){return f((function(e){return!e}))}}),isOpen:p,dropdownItems:[i().createElement(te.h,{key:"all",onClick:n},"Select all"),i().createElement(te.h,{key:"page",onClick:c,isDisabled:t.selectAll},"Select page"),i().createElement(te.h,{key:"none",onClick:a,isDisabled:0===t.checkedRows.length},"Select none")]})))};ce.propTypes={checkBoxState:b().object,handleBulkSelect:b().func,handleNoneSelect:b().func,handlePageSelect:b().func};const ae=ce;var oe=n(75662),ie=n(58061);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(e){var t,n=e.apiFilterSort,l=e.urlParam,u=e.filters,s=e.loadTableData,p=e.tableData,f=e.columnNames,d=e.rows,g=e.toolbarButtons,h=e.actionResolver,b=e.areActionsDisabled,y=e.defaultSort,v=e.emptyFilterState,k=e.toggleButton,E=e.toggleAction,O=e.toggleState,w=e.hasCheckbox,P=void 0!==w&&w,S=e.skeletonRowQuantity,x=e.selectedItems,C=(0,o.useState)(W(u)),Z=(0,r.Z)(C,2),j=Z[0],A=Z[1],D=(0,o.useState)([]),F=(0,r.Z)(D,2),B=F[0],R=F[1],L=(0,o.useState)(P?ue(ue({},y),{},{index:y.index+1}):y),T=(0,r.Z)(L,2),I=T[0],V=T[1],N=(0,o.useState)(20),_=(0,r.Z)(N,2),z=_[0],U=_[1],q=(0,o.useState)(1),H=(0,r.Z)(q,2),Q=H[0],K=H[1],M=(0,o.useState)({selectAll:!1,checkedRows:[]}),ee=(0,r.Z)(M,2),te=ee[0],ne=ee[1],re=(0,X.useDispatch)(),ce=(0,oe.useHistory)();(0,o.useEffect)((function(){ce.location.search.includes("add_system_modal=true")||ce.push({pathname:ce.location.pathname,search:(0,ie.fz)("has_filters=true",B.length>0)});var e,t,r=n?ue(ue({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,a.Z)(e[t.key.toLowerCase()]);return ue(ue({},e),{},(0,c.Z)({},t.key.toLowerCase(),[].concat((0,a.Z)(n),[t.apiName?t.apiName:t.value])))}return ue(ue({},e),{},(0,c.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(B)),{},{limit:z,offset:(Q-1)*z},(t=(e={direction:I.direction,name:ke[I.index].type}).name,{sort_by:"asc"===e.direction?t:"-".concat(t)})):null;n&&l?s(re,l,r):n&&s(re,r)}),[B,z,Q,I]),(0,o.useEffect)((function(){x&&x(te.checkedRows)}),[te.checkedRows]);var le,se,pe,fe,de=p.count,ge=p.isLoading,me=p.hasError,he=!n&&(le=j.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),d.filter((function(e){return le.length>0?null==le?void 0:le.every((function(t){return"text"===t.type?e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),be=function(e){return e.sort((function(e,t){var n=P?I.index-1:I.index;return"number"==typeof(null==e?void 0:e.noApiSortFilter[n])?"asc"===I.direction?(null==e?void 0:e.noApiSortFilter[n])-(null==t?void 0:t.noApiSortFilter[n]):(null==t?void 0:t.noApiSortFilter[n])-(null==e?void 0:e.noApiSortFilter[n]):"asc"===I.direction?null==e?void 0:e.noApiSortFilter[n].localeCompare(null==t?void 0:t.noApiSortFilter[n],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[n].localeCompare(null==e?void 0:e.noApiSortFilter[n],void 0,{sensitivity:"base"})}))},ye=n?0:null===(t=be(he))||void 0===t?void 0:t.length,ve=ge||me||(null==de?void 0:de.length)>0&&u.length>0,ke=f.map((function(e){return{title:e.title,type:e.type,transforms:ve?[]:e.sort?[Y.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),Ee=n?d:d.length>0?be(he).slice((Q-1)*z,(Q-1)*z+z):d,Oe=ge?function(e){return(0,a.Z)(Array(null!=S?S:e)).map((function(){return{cells:f.map((function(){return{title:i().createElement(m.O,{width:"100%"})}}))}}))}(z):!(null!=Ee&&Ee.length)>0?(P=!1,[{heightAuto:!0,cells:[{props:{colSpan:8},title:i().createElement(J.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:null!==(se=null==v?void 0:v.icon)&&void 0!==se?se:"search",title:null!==(pe=null==v?void 0:v.title)&&void 0!==pe?pe:"No match found",body:null!==(fe=null==v?void 0:v.body)&&void 0!==fe?fe:"",secondaryActions:E?[]:[{title:"Clear all filters",onClick:function(){return A(W(u))}}]})}]}]):P?Ee.map((function(e){return te.checkedRows.some((function(t){return t.id===e.id}))?ue(ue({},e),{},{selected:!0}):ue(ue({},e),{},{selected:!1})})):Ee;return i().createElement(i().Fragment,null,i().createElement($,{count:n?de:ye,toolbarButtons:g,filters:u,filterValues:j,setFilterValues:A,chipsArray:B,setChipsArray:R,isLoading:ge,perPage:z,setPerPage:U,page:Q,setPage:K,toggleButton:k,toggleAction:E,toggleState:O},!ge&&P&&i().createElement(ae,{checkBoxState:te,handleBulkSelect:function(){var e={checkedRows:d.map((function(e){return{id:e.id,deviceID:e.deviceID}})),selectAll:!0};ne(e)},handlePageSelect:function(){ne((function(e){var t=e.checkedRows.map((function(e){return e.id})),n=[];return Ee.forEach((function(e){var r;r=e.id,t.includes(r)||n.push({id:e.id,deviceID:e.deviceID})})),{checkedRows:[].concat((0,a.Z)(e.checkedRows),n),selectAll:e.checkedRows.length+n.length===d.length}}))},handleNoneSelect:function(){ne({checkedRows:[],selectAll:!1})}})),i().createElement(Y.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"General Table Component",sortBy:I,onSort:function(e,t,n){V({index:t,direction:n})},actionResolver:h||null,areActionsDisabled:b,cells:ke,rows:Oe,onSelect:!ge&&P&&function(e,t,n){ne((function(e){return{selectAll:t?te.checkedRows.length+1===d.length:te.checkedRows.length-1===d.length,checkedRows:t?[].concat((0,a.Z)(e.checkedRows),[{id:Ee[n].id,deviceID:Ee[n].deviceID}]):e.checkedRows.filter((function(e){return e.id!==Ee[n].id}))}}))},canSelectAll:!1},i().createElement(Y.TableHeader,null),i().createElement(Y.TableBody,null)),i().createElement(G,{isLoading:ge,count:n?de:ye,setFilterValues:A,perPage:z,setPerPage:U,page:Q,setPage:K}))};se.propTypes={apiFilterSort:b().bool,filters:b().array,urlParam:b().string,loadTableData:b().func,tableData:b().object,columnNames:b().array,rows:b().array,actionResolver:b().func,areActionsDisabled:b().func,defaultSort:b().object,toolbarButtons:b().array,toggleButton:b().array,toggleAction:b().func,toggleState:b().number,hasCheckbox:b().bool,skeletonRowQuantity:b().number,emptyFilterState:b().object,selectedItems:b().func};const pe=se},58061:(e,t,n)=>{n.d(t,{Op:()=>m,E5:()=>h,n:()=>b,qg:()=>y,Ff:()=>v,fz:()=>k,A8:()=>E});var r=n(68778),c=n(43047),a=n(69957),o=n(34143),i=n(53636),l=n(54340),u=n(17542),s=n(12990),p=n(37655),f=n(4088),d=n(14206),g=n(64124),m=["done","error","pending","unknown","updating","warning","notification"],h={done:{icon:r.ZP,color:f.Z.value,title:"Fully adopted"},error:{icon:c.ZP,color:s.Z.value,title:"Error while adopting"},pending:{icon:i.ZP,title:"Pending adoption"},updating:{icon:l.ZP,title:"Updating"},unknown:{icon:u.ZP,title:"Unknown state"},warning:{icon:a.ZP,color:p.Z.value,title:"Warning while adopting"},notification:{icon:o.ZP,color:d.Z.value,title:"Delivering"}},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},y={type:g.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/,message:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ )."},v=function(e,t){for(var n=e.split("/"),r={},c=1;c<n.length;c++)n[c]&&(r[t[c-1]]=n[c]);return r.buildUrl=function(){return Object.values(this).reduce((function(e,t){return"function"!=typeof t?"".concat(e,"/").concat(t):e}),"")},r},k=function(e,t){var n=[],r=location.search.length>0?location.search.includes("&")?location.search.split("?")[1].split("&"):location.search.split("?").slice(1):[];return t?(r.includes(e)||r.push(e),n=r):n=r.includes(e)?r.filter((function(t){return t!==e})):r,n.join("&")},E=function(e,t,n){return!0!==e&&!t>0&&!n.location.search.includes("has_filters=true")}}}]);
//# sourceMappingURL=../sourcemaps/625.937159ce84b3f18deece390c1349ac97.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[205],{66702:(e,t,n)=>{n.d(t,{oj:()=>b,Kz:()=>h,eK:()=>O,EV:()=>E,Bi:()=>P,QY:()=>k,EC:()=>w,Z4:()=>j,g5:()=>x,Dk:()=>Z,H1:()=>C,dd:()=>S,eS:()=>A,dt:()=>D,Es:()=>F,gK:()=>L});var r=n(29439),o=n(15861),i=n(4942),a=n(71002),c=n(87757),l=n.n(c),u=n(58061),s=n(93454),p=n(68004),f=n(35240);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g="/api/image-builder/v1",y="/api/edge/v1",m=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0;return"object"===(0,a.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(r=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,a.Z)(e[n]))&&""!==e[n]&&(r="".concat(n,"=").concat(e[n])),void 0===r?t:""===t?"".concat(r):"".concat(t,"&").concat(r)}),"")},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,n=void 0===t?100:t,r=e.offset,o=void 0===r?0:r;return s.eE.get("".concat(g,"/composes?limit=").concat(n,"&offset=").concat(o))},h=function(e){var t=e.id;return s.eE.get("".concat(y,"/images/").concat(t,"/details"))},O=function(){var e=(0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.HostsApi(void 0,"/api/inventory/v1/",s.eE),e.next=3,Promise.all([t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["fresh"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["stale"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["stale_warning"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["unknown"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))})]).then((function(e){return e.reduce((function(e,t,n){return v(v({},e),{},(0,i.Z)({},u.k7[n],t.total))}),{})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,o.Z)(l().mark((function e(t,n,r){var o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,s.eE)("".concat(g,"/packages?").concat(o.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),P=function(e){var t=e.Id,n=e.name,o=e.version,i=e.description,a=e.release,c=e.architecture,l=e.username,u=e.credentials,p=e.imageType,f=e["selected-packages"],d=p||[],v=(0,r.Z)(d,1)[0];p.length>1&&(v="rhel-edge-installer");var g={name:n,version:o,description:i,distribution:a,imageType:v,packages:f.map((function(e){return{name:e.name}})),outputTypes:p,commit:{arch:c},installer:{username:l,sshkey:u}},m="".concat(y,"/images");return o>1&&(m+="/".concat(t,"/update")),s.eE.post(m,g)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:100,offset:0,sort_by:"-updated_at"},t=m(e);return s.eE.get("".concat(y,"/image-sets?").concat(t))},w=function(e){return s.eE.get("".concat(y,"/images/").concat(e,"/status"))},j=function(){var e=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.eE.get("".concat(y,"/devices/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.eE.post("".concat(y,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){return s.eE.get("".concat(y,"/updates/device/").concat(e,"/image"))},C=function(e){var t={name:e};return s.eE.post("".concat(y,"/images/checkImageName"),t)},S=function(){return s.eE.get("".concat(y,"/thirdpartyrepo"))},A=function(e){return s.eE.post("".concat(y,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},D=function(e){var t=e.id,n=e.q,r=m(void 0===n?{limit:100,offset:0,sort_by:"-updated_at"}:n);return s.eE.get("".concat(y,"/image-sets/").concat(t,"?").concat(r))},F=function(e){return s.eE.put("".concat(y,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},L=function(e){return s.eE.delete("".concat(y,"/thirdpartyrepo/").concat(e))}},3035:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(93264),o=n.n(r),i=n(60485),a=n(47173),c=n(9947),l=n(38424),u=n(75106),s=n(35293),p=n(64915),f=n(80810),d=n(15265),v=n(45697),g=n.n(v),y={repository:p.ZP,search:f.ZP},m=function(e){var t=e.bgColor,n=e.icon,r=e.title,p=e.body,f=e.primaryAction,v=e.secondaryActions;return o().createElement(c.u,{style:{backgroundColor:t||""}},n&&o().createElement(l.k,{icon:y[n]}),o().createElement(i.D,{headingLevel:"h4",size:"lg"},r),o().createElement(u.B,null,p),f&&o().createElement(a.zx,{onClick:f.click,variant:"primary"},f.text),o().createElement(s.i,null,v.map((function(e,t){var n=e.type,r=e.title,i=e.link,c=e.onClick;return o().createElement(a.zx,{component:"link"===n?"a":"button",href:i,variant:"link",key:t,onClick:c},r,i&&o().createElement(d.ZP,{className:"pf-u-ml-sm"}))}))))};m.propTypes={bgColor:g().string,icon:g().string,title:g().string,body:g().string,primaryAction:g().object,secondaryActions:g().array};const b=m},383:(e,t,n)=>{n.d(t,{Z:()=>re});var r=n(29439),o=n(4942),i=n(93433),a=n(93264),c=n.n(a),l=n(84812),u=n(71070),s=n(1595),p=n(78919),f=n(47173),d=n(13115),v=n(57980),g=n(15209),y=n(45697),m=n.n(y),b=n(54680),h=n(92694),O=n(76889);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return c().createElement(c().Fragment,null,t.length>1?c().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},c().createElement(b.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return P(P({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:c().createElement(O.ZP,null)},t.map((function(e,t){return c().createElement(h.$,{key:t,value:e.label})})))):null)};k.propTypes={filters:m().array,dropdown:m().object,setDropdown:m().func};const w=k;var j=n(23279),x=n.n(j),Z=n(65802),C=n(98490);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.filterValues,n=e.setFilterValues,l=e.input,u=t.find((function(e){return e.label===l})),p=(0,a.useState)(!1),f=(0,r.Z)(p,2),d=f[0],v=f[1],g=function(){return function(e,t){n((function(n){var r,i=n.findIndex((function(e){return e.label===u.label})),a=n.find((function(e){return e.label===u.label})),c="checkbox"===u.type?a.value.findIndex((function(e){return e.option===t})):0,l=Object.values(A(A({},a.value),{},(0,o.Z)({},c,A(A({},a.value[c]),{},{isChecked:!(null!=a&&null!==(r=a.value[c])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(A(A({},n),{},(0,o.Z)({},i,A(A({},n[i]),{},{value:"checkbox"===u.type?l:s}))))}))}};return"text"===u.type?c().createElement(s.E,{"data-testid":"filter-input-testid"},c().createElement(Z.B,null,c().createElement(C.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label),placeholder:"Filter by ".concat(u.label),onChange:x()(g(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,i.Z)(t.slice(0,e)),[A(A({},t[e]),{},{value:""})],(0,i.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?c().createElement(s.E,{"data-testid":"filter-input-testid"},c().createElement(Z.B,null,c().createElement(b.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label),width:"11rem",placeholderText:"Filter by ".concat(u.label),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return v((function(e){return!e}))},onSelect:g(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return c().createElement(h.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};D.propTypes={filterValues:m().array,setFilterValues:m().func,input:m().string};const F=D;var L=function(e){var t=e.filters,n=e.filterValues,o=e.setFilterValues,i=(0,a.useState)({isOpen:!1,selected:t[0].label}),l=(0,r.Z)(i,2),u=l[0],s=l[1];return c().createElement(c().Fragment,null,c().createElement(w,{dropdown:u,setDropdown:s,filters:t}),c().createElement(F,{filterValues:n,setFilterValues:o,input:u.selected}))};L.propTypes={filters:m().array,filterValues:m().array,setFilterValues:m().func};const V=L;var T=n(7739),_=n.n(T),I=n(26391),B=n(21899);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){var t=e.filterValues,n=e.setFilterValues,o=e.chipsArray,l=e.setChipsArray;return(0,a.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||o.find((function(e){return e.label===t.option}))?!1===t.isChecked&&o.find((function(e){return e.label===t.option}))&&l((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,i.Z)(e.slice(0,n)),(0,i.Z)(e.slice(n+1,e.length)))})):l((function(n){return[].concat((0,i.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};o.find((function(t){return t.key===e.label}))?l((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):l((function(e){return[].concat((0,i.Z)(e),[t])}))}else"text"===e.type&&o.find((function(t){return t.key===e.label}))&&l((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,i.Z)(t.slice(0,n)),(0,i.Z)(t.slice(n+1,t.length)))}))}))}),[t]),c().createElement(c().Fragment,null,o.length>0?Object.entries(_()(o,"key")).map((function(e){var o=(0,r.Z)(e,2),a=o[0],u=o[1];return c().createElement(I.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:a,key:a},u.map((function(e){return c().createElement(B.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,i.Z)(t.slice(0,r)),[H(H({},t[r]),{},{value:""})],(0,i.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var o=n.value.map((function(t){return t.option===e.label?H(H({},t),{},{isChecked:!1}):t}));return l((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,i.Z)(t.slice(0,n)),(0,i.Z)(t.slice(n+1,t.length)))})),[].concat((0,i.Z)(t.slice(0,r)),[H(H({},t[r]),{},{value:o})],(0,i.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:a},e.label)})))})):null,o.length>0?c().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return H(H({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,H(H({},e),{},{isChecked:!1})}));return H(H({},e),{},{value:t})}}))})),l([])}},"Clear filters"):null)};R.propTypes={filterValues:m().array,setFilterValues:m().func,chipsArray:m().array,setChipsArray:m().func};const M=R;var U=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click;return c().createElement(s.E,{key:t},c().createElement(f.zx,{onClick:r,variant:"primary"},n))}))},z=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,o=e.filterValues,i=e.chipsArray,a=e.setChipsArray,f=e.isLoading,y=e.count,m=e.perPage,b=e.setPerPage,h=e.page,O=e.setPage,E=e.toggleButton,P=e.toggleAction,k=e.toggleState;return c().createElement(l.o,{id:"toolbar","data-testid":"toolbar-header-testid"},c().createElement(p.c,null,c().createElement(V,{filters:n,filterValues:o,setFilterValues:r}),t&&c().createElement(U,{buttons:t}),E&&c().createElement(d.t,null,E.map((function(e){return c().createElement(v.G,{key:e.key,text:e.title,isSelected:k===e.key,onChange:function(){return P(e.key)}})}))),c().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?c().createElement(g.O,{width:"200px"}):y>0?c().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:y,perPage:m,page:h,onSetPage:function(e,t){return O(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return b(t)},isCompact:!0}):null)),c().createElement(p.c,null,c().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},c().createElement(M,{filterValues:o,setFilterValues:r,chipsArray:i,setChipsArray:a}))))};z.propTypes={filters:m().array,toolbarButtons:m().array,setFilterValues:m().func,filterValues:m().array,input:m().string,count:m().number,perPage:m().number,setPerPage:m().func,page:m().number,setPage:m().func,chipsArray:m().array,setChipsArray:m().func,isLoading:m().bool,toggleButton:m().array,toggleAction:m().func,toggleState:m().number};const q=z;var G=function(e){var t=e.isLoading,n=e.count,r=e.perPage,o=e.setPerPage,i=e.page,a=e.setPage;return c().createElement(l.o,{id:"toolbar"},c().createElement(p.c,null,c().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?c().createElement(g.O,{width:"400px"}):n>0?c().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:i,onSetPage:function(e,t){return a(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return o(t)}}):null)))};G.propTypes={isLoading:m().bool,count:m().number,perPage:m().number,setPerPage:m().func,page:m().number,setPage:m().func};const K=G;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const W=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return Q(Q({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var Y=n(27577),J=n(3035),X=n(82041);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t,n=e.apiFilterSort,l=e.urlParam,u=e.filters,s=e.loadTableData,p=e.tableData,f=e.columnNames,d=e.rows,v=e.toolbarButtons,y=e.actionResolver,m=e.areActionsDisabled,b=e.defaultSort,h=e.emptyStateMessage,O=e.emptyStateAction,E=e.emptyStateActionMessage,P=e.toggleButton,k=e.toggleAction,w=e.toggleState,j=(0,a.useState)(W(u)),x=(0,r.Z)(j,2),Z=x[0],C=x[1],S=(0,a.useState)([]),A=(0,r.Z)(S,2),D=A[0],F=A[1],L=(0,a.useState)(b),V=(0,r.Z)(L,2),T=V[0],_=V[1],I=(0,a.useState)(20),B=(0,r.Z)(I,2),N=B[0],H=B[1],R=(0,a.useState)(1),M=(0,r.Z)(R,2),U=M[0],z=M[1],G=(0,X.useDispatch)();(0,a.useEffect)((function(){var e,t,r=n?te(te({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,i.Z)(e[t.key.toLowerCase()]);return te(te({},e),{},(0,o.Z)({},t.key.toLowerCase(),[].concat((0,i.Z)(n),[t.apiName?t.apiName:t.value])))}return te(te({},e),{},(0,o.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(D)),{},{limit:N,offset:(U-1)*N},(t=(e={direction:T.direction,name:ce[T.index].type}).name,{sort_by:"asc"===e.direction?t:"-".concat(t)})):null;n&&l?s(G,l,r):n&&s(G,r)}),[D,N,U,T]);var $,Q=p.count,ee=p.isLoading,ne=p.hasError,re=!n&&($=Z.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),d.filter((function(e){return $.length>0?null==$?void 0:$.every((function(t){return"text"===t.type?e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),oe=function(e){return e.sort((function(e,t){return"number"==typeof(null==e?void 0:e.noApiSortFilter[T.index])?"asc"===T.direction?(null==e?void 0:e.noApiSortFilter[T.index])-(null==t?void 0:t.noApiSortFilter[T.index]):(null==t?void 0:t.noApiSortFilter[T.index])-(null==e?void 0:e.noApiSortFilter[T.index]):"asc"===T.direction?null==e?void 0:e.noApiSortFilter[T.index].localeCompare(null==t?void 0:t.noApiSortFilter[T.index],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[T.index].localeCompare(null==e?void 0:e.noApiSortFilter[T.index],void 0,{sensitivity:"base"})}))},ie=n?0:null===(t=oe(re))||void 0===t?void 0:t.length,ae=ee||ne||(null==Q?void 0:Q.length)>0&&u.length>0,ce=f.map((function(e){return{title:e.title,type:e.type,transforms:ae?[]:e.sort?[Y.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),le=n?d:d.length>0?oe(re).slice((U-1)*N,(U-1)*N+N):d;return c().createElement(c().Fragment,null,c().createElement(q,{count:n?Q:ie,toolbarButtons:v,filters:u,filterValues:Z,setFilterValues:C,chipsArray:D,setChipsArray:F,isLoading:ee,perPage:N,setPerPage:H,page:U,setPage:z,toggleButton:P,toggleAction:k,toggleState:w}),!ee&&Q<1?c().createElement(J.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:"search",title:h,secondaryActions:[{title:E,onClick:function(){return O()}}]}):!ee&&!(null!=le&&le.length)>0?c().createElement(J.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:"search",title:"No match found",secondaryActions:[{title:"Clear all filters",onClick:function(){return C(W(u))}}]}):c().createElement(Y.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"Manage Images table",sortBy:T,onSort:function(e,t,n){_({index:t,direction:n})},actionResolver:y||null,areActionsDisabled:m,cells:ce,rows:ee?function(e){return(0,i.Z)(Array(e)).map((function(){return{cells:f.map((function(){return{title:c().createElement(g.O,{width:"100%"})}}))}}))}(N):le},c().createElement(Y.TableHeader,null),c().createElement(Y.TableBody,null)),c().createElement(K,{isLoading:ee,count:n?Q:ie,setFilterValues:C,perPage:N,setPerPage:H,page:U,setPage:z}))};ne.propTypes={apiFilterSort:m().bool,filters:m().array,urlParam:m().string,loadTableData:m().func,tableData:m().object,columnNames:m().array,rows:m().array,actionResolver:m().func,areActionsDisabled:m().func,defaultSort:m().object,toolbarButtons:m().array,emptyStateMessage:m().string,emptyStateActionMessage:m().string,emptyStateAction:m().func,toggleButton:m().array,toggleAction:m().func,toggleState:m().number};const re=ne},58061:(e,t,n)=>{n.d(t,{Op:()=>g,E5:()=>y,n:()=>m,pM:()=>b,I:()=>h,k7:()=>O,Dx:()=>E});var r=n(29439),o=n(68778),i=n(43047),a=n(69957),c=n(34143),l=n(53636),u=n(54340),s=n(17542),p=n(12990),f=n(37655),d=n(4088),v=n(14206),g=["done","error","pending","unknown","updating","warning","notification"],y={done:{icon:o.ZP,color:d.Z.value,title:"Fully adopted"},error:{icon:i.ZP,color:p.Z.value,title:"Error while adopting"},pending:{icon:l.ZP,title:"Pending adoption"},updating:{icon:u.ZP,title:"Updating"},unknown:{icon:s.ZP,title:"Unknown state"},warning:{icon:a.ZP,color:f.Z.value,title:"Warning while adopting"},notification:{icon:c.ZP,color:v.Z.value,title:"Delivering"}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},b=function(e){return Object.values(e).find((function(e){var t;return(null==e||null===(t=e.value)||void 0===t?void 0:t.length)>0||(null==e?void 0:e.length)>0}))},h=function(e,t){return Object.entries(e).map((function(e){var n=(0,r.Z)(e,2),o=n[0],i=n[1],a=(i=void 0===i?{}:i).label,c=i.value;return{category:a,chipKey:o,chips:(null==c?void 0:c.length)>0?Array.isArray(c)?c.map((function(e){return{name:(null==t?void 0:t(e))||e,value:e}})):[{name:(null==t?void 0:t(c))||c,value:c}]:[]}}))},O=["active","noReports","neverReported","orphaned"],E={system_profile:{host_type:"edge"}}}}]);
//# sourceMappingURL=../sourcemaps/205.17eefa9cb2640e392d42e9fca73f83b3.js.map
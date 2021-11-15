"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[205],{66702:(e,t,n)=>{n.d(t,{oj:()=>b,ot:()=>m,eK:()=>h,EV:()=>O,Bi:()=>E,py:()=>P,EC:()=>w,Z4:()=>k,g5:()=>j,Dk:()=>Z,H1:()=>C,dd:()=>x,eS:()=>S,Es:()=>D,gK:()=>A});var r=n(71002),a=n(29439),o=n(15861),i=n(4942),c=n(87757),l=n.n(c),u=n(58061),s=n(93454),p=n(68004),f=n(35240);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y="/api/image-builder/v1",g="/api/edge/v1",b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,n=void 0===t?100:t,r=e.offset,a=void 0===r?0:r;return s.eE.get("".concat(y,"/composes?limit=").concat(n,"&offset=").concat(a))},m=function(e){var t=e.id;return s.eE.get("".concat(g,"/images/").concat(t))},h=function(){var e=(0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.HostsApi(void 0,"/api/inventory/v1/",s.eE),e.next=3,Promise.all([t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["fresh"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["stale"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["stale_warning"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["unknown"],void 0,void 0,void 0,void 0,{query:v(v({},(0,f.h3)(u.Dx)),(0,f.h3)({system_profile:["host_type"]},"fields"))})]).then((function(e){return e.reduce((function(e,t,n){return v(v({},e),{},(0,i.Z)({},u.k7[n],t.total))}),{})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,o.Z)(l().mark((function e(t,n,r){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,s.eE)("".concat(y,"/packages?").concat(a.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),E=function(e){var t=e.Id,n=e.name,r=e.version,o=e.description,i=e.release,c=e.architecture,l=e.username,u=e.credentials,p=e.imageType,f=e["selected-packages"],d=p||[],v=(0,a.Z)(d,1)[0];p.length>1&&(v="rhel-edge-installer");var y={name:n,version:r,description:o,distribution:i,imageType:v,packages:f.map((function(e){return{name:e.name}})),outputTypes:p,commit:{arch:c},installer:{username:l,sshkey:u}},b="".concat(g,"/images");return r>1&&(b+="/".concat(t,"/update")),s.eE.post(b,y)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:100,offset:0,sort_by:"-created_at"},t=Object.keys(e).reduce((function(t,n){var a=void 0;return"object"===(0,r.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(a=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,r.Z)(e[n]))&&""!==e[n]&&(a="".concat(n,"=").concat(e[n])),void 0===a?t:""===t?"".concat(a):"".concat(t,"&").concat(a)}),"");return s.eE.get("".concat(g,"/images?").concat(t))},w=function(e){return s.eE.get("".concat(g,"/images/").concat(e,"/status"))},k=function(){var e=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.eE.get("".concat(g,"/devices/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.eE.post("".concat(g,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){return s.eE.get("".concat(g,"/updates/device/").concat(e,"/image"))},C=function(e){var t={name:e};return s.eE.post("".concat(g,"/images/checkImageName"),t)},x=function(){return s.eE.get("".concat(g,"/thirdpartyrepo"))},S=function(e){return s.eE.post("".concat(g,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},D=function(e){return s.eE.put("".concat(g,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},A=function(e){return s.eE.delete("".concat(g,"/thirdpartyrepo/").concat(e))}},3035:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(93264),a=n.n(r),o=n(60485),i=n(47173),c=n(9947),l=n(38424),u=n(75106),s=n(35293),p=n(64915),f=n(80810),d=n(15265),v=n(45697),y=n.n(v),g={repository:p.ZP,search:f.ZP},b=function(e){var t=e.bgColor,n=e.icon,r=e.title,p=e.body,f=e.primaryAction,v=e.secondaryActions;return a().createElement(c.u,{style:{backgroundColor:t||""}},a().createElement(l.k,{icon:g[n]}),a().createElement(o.D,{headingLevel:"h4",size:"lg"},r),a().createElement(u.B,null,p),f&&a().createElement(i.zx,{onClick:f.click,variant:"primary"},f.text),a().createElement(s.i,null,v.map((function(e,t){var n=e.type,r=e.title,o=e.link,c=e.onClick;return a().createElement(i.zx,{component:"link"===n?"a":"button",href:o,variant:"link",key:t,onClick:c},r,o&&a().createElement(d.ZP,{className:"pf-u-ml-sm"}))}))))};b.propTypes={bgColor:y().string,icon:y().string,title:y().string,body:y().string,primaryAction:y().object,secondaryActions:y().array};const m=b},383:(e,t,n)=>{n.d(t,{Z:()=>oe});var r=n(29439),a=n(4942),o=n(93433),i=n(93264),c=n.n(i),l=n(84812),u=n(71070),s=n(1595),p=n(78919),f=n(47173),d=n(56455),v=n(45697),y=n.n(v),g=n(54680),b=n(92694),m=n(76889);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return c().createElement(c().Fragment,null,t.length>1?c().createElement(s.E,{"data-testid":"filter-dropdown-testid"},c().createElement(g.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return O(O({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:c().createElement(m.ZP,null)},t.map((function(e,t){return c().createElement(b.$,{key:t,value:e.label})})))):null)};E.propTypes={filters:y().array,dropdown:y().object,setDropdown:y().func};const P=E;var w=n(23279),k=n.n(w),j=n(65802),Z=n(148);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t=e.filterValues,n=e.setFilterValues,o=e.input,l=t.find((function(e){return e.label===o})),u=(0,i.useState)(!1),p=(0,r.Z)(u,2),f=p[0],d=p[1],v=function(){return function(e,t){n((function(n){var r,o=n.findIndex((function(e){return e.label===l.label})),i=n.find((function(e){return e.label===l.label})),c="checkbox"===l.type?i.value.findIndex((function(e){return e.option===t})):0,u=Object.values(x(x({},i.value),{},(0,a.Z)({},c,x(x({},i.value[c]),{},{isChecked:!(null!=i&&null!==(r=i.value[c])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(x(x({},n),{},(0,a.Z)({},o,x(x({},n[o]),{},{value:"checkbox"===l.type?u:s}))))}))}};return"text"===l.type?c().createElement(s.E,{"data-testid":"filter-input-testid"},c().createElement(j.B,null,c().createElement(Z.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(l.label),placeholder:"Filter by ".concat(l.label),onChange:k()(v(),400),value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===l.type?c().createElement(s.E,{"data-testid":"filter-input-testid"},c().createElement(j.B,null,c().createElement(g.P,{variant:"checkbox","aria-label":"Select input for ".concat(l.label),width:"11rem",placeholderText:"Filter by ".concat(l.label),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return d((function(e){return!e}))},onSelect:v(),selections:l.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:f},l.value.map((function(e,t){return c().createElement(b.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};S.propTypes={filterValues:y().array,setFilterValues:y().func,input:y().string};const D=S;var A=function(e){var t=e.filters,n=e.filterValues,a=e.setFilterValues,o=(0,i.useState)({isOpen:!1,selected:t[0].label}),l=(0,r.Z)(o,2),u=l[0],s=l[1];return c().createElement(c().Fragment,null,c().createElement(P,{dropdown:u,setDropdown:s,filters:t}),c().createElement(D,{filterValues:n,setFilterValues:a,input:u.selected}))};A.propTypes={filters:y().array,filterValues:y().array,setFilterValues:y().func};const L=A;var V=n(7739),F=n.n(V),N=n(26391),_=n(21899);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.filterValues,n=e.setFilterValues,a=e.chipsArray,l=e.setChipsArray;return(0,i.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||a.find((function(e){return e.label===t.option}))?!1===t.isChecked&&a.find((function(e){return e.label===t.option}))&&l((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,o.Z)(e.slice(0,n)),(0,o.Z)(e.slice(n+1,e.length)))})):l((function(n){return[].concat((0,o.Z)(n),[{label:t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};a.find((function(t){return t.key===e.label}))?l((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):l((function(e){return[].concat((0,o.Z)(e),[t])}))}else"text"===e.type&&a.find((function(t){return t.key===e.label}))&&l((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))}))}))}),[t]),c().createElement(c().Fragment,null,a.length>0?Object.entries(F()(a,"key")).map((function(e){var a=(0,r.Z)(e,2),i=a[0],u=a[1];return c().createElement(N.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:i,key:i},u.map((function(e){return c().createElement(_.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,o.Z)(t.slice(0,r)),[I(I({},t[r]),{},{value:""})],(0,o.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var a=n.value.map((function(t){return t.option===e.label?I(I({},t),{},{isChecked:!1}):t}));return l((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))})),[].concat((0,o.Z)(t.slice(0,r)),[I(I({},t[r]),{},{value:a})],(0,o.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:i},e.label)})))})):null,a.length>0?c().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return I(I({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,I(I({},e),{},{isChecked:!1})}));return I(I({},e),{},{value:t})}}))})),l([])}},"Clear filters"):null)};B.propTypes={filterValues:y().array,setFilterValues:y().func,chipsArray:y().array,setChipsArray:y().func};const H=B;var R=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click;return c().createElement(s.E,{key:t},c().createElement(f.zx,{onClick:r,variant:"primary"},n))}))},M=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,a=e.filterValues,o=e.chipsArray,i=e.setChipsArray,f=e.isLoading,v=e.count,y=e.perPage,g=e.setPerPage,b=e.page,m=e.setPage;return c().createElement(l.o,{id:"toolbar","data-testid":"toolbar-header-testid"},c().createElement(p.c,null,c().createElement(L,{filters:n,filterValues:a,setFilterValues:r}),c().createElement(R,{buttons:t}),c().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?c().createElement(d.Z,{size:d.i.xs}):c().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:v,perPage:y,page:b,onSetPage:function(e,t){return m(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return g(t)},isCompact:!0}))),c().createElement(p.c,null,c().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},c().createElement(H,{filterValues:a,setFilterValues:r,chipsArray:o,setChipsArray:i}))))};M.propTypes={filters:y().array,toolbarButtons:y().array,setFilterValues:y().func,filterValues:y().array,input:y().string,count:y().number,perPage:y().number,setPerPage:y().func,page:y().number,setPage:y().func,chipsArray:y().array,setChipsArray:y().func,isLoading:y().bool};const U=M;var z=function(e){var t=e.count,n=e.perPage,r=e.setPerPage,a=e.page,o=e.setPage;return c().createElement(l.o,{id:"toolbar"},c().createElement(p.c,null,c().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},c().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:t,perPage:n,page:a,onSetPage:function(e,t){return o(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return r(t)}}))))};z.propTypes={count:y().number,perPage:y().number,setPerPage:y().func,page:y().number,setPage:y().func};const q=z;function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const $=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return K(K({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var W=n(27577),J=n(52643),Q=n(9947),X=n(38424),Y=n(2372),ee=n(3035),te=n(82041);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t=e.apiFilterSort,n=e.filters,l=e.loadTableData,u=e.tableData,s=e.columnNames,p=e.rows,f=e.toolbarButtons,d=e.actionResolver,v=e.areActionsDisabled,y=e.defaultSort,g=e.emptyStateMessage,b=e.emptyStateAction,m=e.emptyStateActionMessage,h=(0,i.useState)($(n)),O=(0,r.Z)(h,2),E=O[0],P=O[1],w=(0,i.useState)([]),k=(0,r.Z)(w,2),j=k[0],Z=k[1],C=(0,i.useState)(y),x=(0,r.Z)(C,2),S=x[0],D=x[1],A=(0,i.useState)(20),L=(0,r.Z)(A,2),V=L[0],F=L[1],N=(0,i.useState)(1),_=(0,r.Z)(N,2),T=_[0],I=_[1],B=(0,te.useDispatch)();(0,i.useEffect)((function(){var e,n;t&&l(B,re(re({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,o.Z)(e[t.key.toLowerCase()]);return re(re({},e),{},(0,a.Z)({},t.key.toLowerCase(),[].concat((0,o.Z)(n),[t.apiName?t.apiName:t.label])))}return re(re({},e),{},(0,a.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.label))}),{}):{}}(j)),{},{limit:V,offset:(T-1)*V},(n=(e={direction:S.direction,name:oe[S.index].type}).name,{sort_by:"asc"===e.direction?n:"-".concat(n)})))}),[j,V,T,S]);var H,R=u.count,M=u.isLoading,z=u.hasError,G=!t&&(H=E.find((function(e){return"Name"===(null==e?void 0:e.label)})),p.filter((function(e){return H?e.rowName.toLowerCase().includes(H.value.toLowerCase()):e}))),K=function(e){return e.sort((function(e,t){return"asc"===S.direction?e.rowName.toLowerCase().localeCompare(t.rowName.toLowerCase()):t.rowName.toLowerCase().localeCompare(e.rowName.toLowerCase())}))},ne=t?0:K(G).length,ae=M||z||(null==R?void 0:R.length)>0&&n.length>0,oe=s.map((function(e){return{title:e.title,type:e.type,transforms:ae?[]:e.sort?[W.sortable]:[]}})),ie=t?p:K(G).slice((T-1)*V,(T-1)*V+V),ce=[{heightAuto:!0,cells:[{props:{colSpan:8},title:c().createElement(J.b,null,c().createElement(Q.u,{variant:"small"},c().createElement(X.k,{icon:Y.$})))}]}];return c().createElement(c().Fragment,null,c().createElement(U,{count:t?R:ne,toolbarButtons:f,filters:n,filterValues:E,setFilterValues:P,chipsArray:j,setChipsArray:Z,isLoading:M,perPage:V,setPerPage:F,page:T,setPage:I}),!M&&!R>0?c().createElement(ee.Z,{"data-testid":"general-table-empty-state-no-data",bgColor:"white",icon:"search",title:g,secondaryActions:[{title:m,onClick:function(){return b()}}]}):!M&&!ie.length>0?c().createElement(ee.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:"search",title:"No match found",secondaryActions:[{title:"Clear all filters",onClick:function(){return P($(n))}}]}):c().createElement(W.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"Manage Images table",sortBy:S,onSort:function(e,t,n){D({index:t,direction:n})},actionResolver:d||null,areActionsDisabled:v,cells:oe,rows:M?ce:ie},c().createElement(W.TableHeader,null),c().createElement(W.TableBody,null)),c().createElement(q,{count:t?R:ne,setFilterValues:P,perPage:V,setPerPage:F,page:T,setPage:I}))};ae.propTypes={apiFilterSort:y().bool,filters:y().array,loadTableData:y().func,tableData:y().object,columnNames:y().array,rows:y().array,actionResolver:y().func,areActionsDisabled:y().func,defaultSort:y().object,toolbarButtons:y().array,emptyStateMessage:y().string,emptyStateActionMessage:y().string,emptyStateAction:y().func};const oe=ae},58061:(e,t,n)=>{n.d(t,{Op:()=>y,E5:()=>g,pM:()=>b,I:()=>m,k7:()=>h,Dx:()=>O});var r=n(29439),a=n(68778),o=n(43047),i=n(69957),c=n(34143),l=n(53636),u=n(54340),s=n(17542),p=n(12990),f=n(37655),d=n(4088),v=n(14206),y=["done","error","pending","unknown","updating","warning","notification"],g={done:{icon:a.ZP,color:d.Z.value,title:"Fully adopted"},error:{icon:o.ZP,color:p.Z.value,title:"Error while adopting"},pending:{icon:l.ZP,title:"Pending adoption"},updating:{icon:u.ZP,title:"Updating"},unknown:{icon:s.ZP,title:"Unknown state"},warning:{icon:i.ZP,color:f.Z.value,title:"Warning while adopting"},notification:{icon:c.ZP,color:v.Z.value,title:"Delivering"}},b=function(e){return Object.values(e).find((function(e){var t;return(null==e||null===(t=e.value)||void 0===t?void 0:t.length)>0||(null==e?void 0:e.length)>0}))},m=function(e,t){return Object.entries(e).map((function(e){var n=(0,r.Z)(e,2),a=n[0],o=n[1],i=(o=void 0===o?{}:o).label,c=o.value;return{category:i,chipKey:a,chips:(null==c?void 0:c.length)>0?Array.isArray(c)?c.map((function(e){return{name:(null==t?void 0:t(e))||e,value:e}})):[{name:(null==t?void 0:t(c))||c,value:c}]:[]}}))},h=["active","noReports","neverReported","orphaned"],O={system_profile:{host_type:"edge"}}}}]);
//# sourceMappingURL=../sourcemaps/205.419abc06062b7ef61dc55a769f5a6862.js.map
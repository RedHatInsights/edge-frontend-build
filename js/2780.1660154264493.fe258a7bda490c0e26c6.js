/*! For license information please see 2780.1660154264493.fe258a7bda490c0e26c6.js.LICENSE.txt */
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[2780],{66702:(e,t,n)=>{"use strict";n.d(t,{DO:()=>a,Ds:()=>o,Vs:()=>l});var r=n(71002),a="/api/image-builder/v1",o="/api/edge/v1",l=function(e){return void 0===e?"":Object.keys(e).reduce((function(t,n){var a=void 0;return"object"===(0,r.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(a=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,r.Z)(e[n]))&&""!==e[n]&&(a="".concat(n,"=").concat(e[n])),void 0===a?t:""===t?"".concat(a):"".concat(t,"&").concat(a)}),"")}},3035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(93264),a=n.n(r),o=n(38779),l=n(47173),i=n(9947),c=n(38424),u=n(75106),s=n(35293),p=n(15265),f=n(45697),d=n.n(f),b=n(75662),g=n(98309),m=function(e){var t=e.bgColor,n=e.icon,r=e.title,f=e.body,d=e.primaryAction,m=e.secondaryActions;return a().createElement(i.u,{variant:"large",style:{backgroundColor:t||""}},n&&a().createElement(c.k,{icon:g.iQ[n]}),a().createElement(o.D,{headingLevel:"h4",size:"lg"},r),a().createElement(u.B,null,f),d&&a().createElement(a().Fragment,null,d.href?a().createElement(l.zx,{component:b.Link,to:d.href},d.text):a().createElement(l.zx,{onClick:d.click,variant:"primary"},d.text)),a().createElement(s.i,null,m.map((function(e,t){var n=e.type,r=e.title,o=e.link,i=e.onClick;return a().createElement(l.zx,{component:"link"===n?"a":"button",href:o,variant:"link",target:"link"===n?"_blank":"",key:t,onClick:i},r,o&&a().createElement(p.ZP,{className:"pf-u-ml-sm"}))}))))};m.propTypes={bgColor:d().string,icon:d().string,title:d().string,body:d().string,primaryAction:d().object,secondaryActions:d().array},m.defaultProps={secondaryActions:[]};const y=m},73448:(e,t,n)=>{"use strict";n.d(t,{Z:()=>be});var r=n(29439),a=n(4942),o=n(93433),l=n(93264),i=n.n(l),c=n(84812),u=n(44733),s=n(1595),p=n(78919),f=n(47173),d=n(13115),b=n(57980),g=n(50383),m=n(45697),y=n.n(m),v=n(54680),h=n(92694),O=n(76889);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return i().createElement(i().Fragment,null,t.length>1?i().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},i().createElement(v.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return E(E({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:i().createElement(O.ZP,null)},t.map((function(e,t){return i().createElement(h.$,{key:t,value:e.label})})))):null)};P.propTypes={filters:y().array,dropdown:y().object,setDropdown:y().func};const w=P;var S=n(23279),j=n.n(S),C=n(65802),x=n(50433);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.filterValues,n=e.setFilterValues,c=e.input,u=t.find((function(e){return e.label===c})),p=(0,l.useState)(!1),f=(0,r.Z)(p,2),d=f[0],b=f[1],g=function(){return function(e,t){n((function(n){var r,o=n.findIndex((function(e){return e.label===u.label})),l=n.find((function(e){return e.label===u.label})),i="checkbox"===u.type?l.value.findIndex((function(e){return e.option===t})):0,c=Object.values(A(A({},l.value),{},(0,a.Z)({},i,A(A({},l.value[i]),{},{isChecked:!(null!=l&&null!==(r=l.value[i])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(A(A({},n),{},(0,a.Z)({},o,A(A({},n[o]),{},{value:"checkbox"===u.type?c:s}))))}))}};return"text"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(C.B,null,i().createElement(x.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label.toLowerCase()),placeholder:"Filter by ".concat(u.label.toLowerCase()),onChange:j()(g(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,o.Z)(t.slice(0,e)),[A(A({},t[e]),{},{value:""})],(0,o.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(C.B,null,i().createElement(v.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label.toLowerCase()),width:"11rem",placeholderText:"Filter by ".concat(u.label.toLowerCase()),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return b((function(e){return!e}))},onSelect:g(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return i().createElement(h.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};D.propTypes={filterValues:y().array,setFilterValues:y().func,input:y().string};const F=D;var I=function(e){var t=e.filters,n=e.filterValues,a=e.setFilterValues,o=e.children,c=(0,l.useState)({isOpen:!1,selected:t[0].label}),u=(0,r.Z)(c,2),s=u[0],p=u[1];return i().createElement(i().Fragment,null,o,i().createElement(w,{dropdown:s,setDropdown:p,filters:t}),i().createElement(F,{filterValues:n,setFilterValues:a,input:s.selected}))};I.propTypes={filters:y().array,filterValues:y().array,setFilterValues:y().func,children:y().element};const L=I;var V=n(7739),T=n.n(V),B=n(21039),N=n(14531);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.filterValues,n=e.setFilterValues,a=e.chipsArray,c=e.setChipsArray,u=e.setPage;return(0,l.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||a.find((function(e){return e.label===t.option}))?!1===t.isChecked&&a.find((function(e){return e.label===t.option}))&&c((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,o.Z)(e.slice(0,n)),(0,o.Z)(e.slice(n+1,e.length)))})):c((function(n){return[].concat((0,o.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};a.find((function(t){return t.key===e.label}))?c((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):c((function(e){return[].concat((0,o.Z)(e),[t])}))}else"text"===e.type&&a.find((function(t){return t.key===e.label}))&&c((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))}))})),u(1)}),[t]),i().createElement(i().Fragment,null,a.length>0?Object.entries(T()(a,"key")).map((function(e){var a=(0,r.Z)(e,2),l=a[0],u=a[1];return i().createElement(B.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:l,key:l},u.map((function(e){return i().createElement(N.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,o.Z)(t.slice(0,r)),[_(_({},t[r]),{},{value:""})],(0,o.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var a=n.value.map((function(t){return t.option===e.label?_(_({},t),{},{isChecked:!1}):t}));return c((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))})),[].concat((0,o.Z)(t.slice(0,r)),[_(_({},t[r]),{},{value:a})],(0,o.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:l},e.label)})))})):null,a.length>0?i().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return _(_({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,_(_({},e),{},{isChecked:!1})}));return _(_({},e),{},{value:t})}}))})),c([])}},"Clear filters"):null)};M.propTypes={filterValues:y().array,setFilterValues:y().func,chipsArray:y().array,setChipsArray:y().func,setPage:y().func};const z=M;var H=n(56787),q=n(84457),G=n(94024),Q=function(e){var t=e.kebabItems,n=(0,l.useState)(!1),a=(0,r.Z)(n,2),o=a[0],c=a[1],u=t.map((function(e,t){var n=e.title,r=e.isDisabled,a=e.onClick;return i().createElement(q.h,{key:t,onClick:a||function(){},isDisabled:r},n)}));return i().createElement(s.E,null,i().createElement(H.L,{toggle:i().createElement(G.a,{onToggle:function(){return c((function(e){return!e}))}}),isOpen:o,isPlain:!0,dropdownItems:u}))};Q.propTypes={kebabItems:y().array};const U=Q;var $=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click;return i().createElement(s.E,{key:t},i().createElement(f.zx,{onClick:r,variant:"primary"},n))}))},J=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,a=e.filterValues,o=e.chipsArray,l=e.setChipsArray,f=e.isLoading,m=e.count,y=e.perPage,v=e.setPerPage,h=e.page,O=e.setPage,k=e.toggleButton,E=e.toggleAction,P=e.toggleState,w=e.children,S=e.kebabItems;return i().createElement(c.o,{style:{padding:"16px"},id:"toolbar-header","data-testid":"toolbar-header-testid"},i().createElement(p.c,null,i().createElement(L,{filters:n,filterValues:a,setFilterValues:r},w),t&&i().createElement($,{buttons:t}),k&&i().createElement(d.t,null,k.map((function(e){return i().createElement(b.G,{key:e.key,text:e.title,isSelected:P===e.key,onChange:function(){return E(e.key)}})}))),S&&i().createElement(U,{kebabItems:S}),i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?i().createElement(g.O,{width:"200px"}):m>0?i().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:m,perPage:y,page:h,onSetPage:function(e,t){return O(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return v(t)},isCompact:!0}):null)),i().createElement(p.c,null,i().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},i().createElement(z,{filterValues:a,setFilterValues:r,chipsArray:o,setChipsArray:l,setPage:O}))))};J.propTypes={filters:y().array,toolbarButtons:y().array,setFilterValues:y().func,filterValues:y().array,input:y().string,count:y().number,perPage:y().number,setPerPage:y().func,page:y().number,setPage:y().func,chipsArray:y().array,setChipsArray:y().func,isLoading:y().bool,toggleButton:y().array,toggleAction:y().func,toggleState:y().number,children:y().element,kebabItems:y().array};const K=J;var W=function(e){var t=e.isLoading,n=e.count,r=e.perPage,a=e.setPerPage,o=e.page,l=e.setPage;return i().createElement(c.o,{style:{padding:"16px"},id:"toolbar-footer"},i().createElement(p.c,null,i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?i().createElement(g.O,{width:"400px"}):n>0?i().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:o,onSetPage:function(e,t){return l(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return a(t)}}):null)))};W.propTypes={isLoading:y().bool,count:y().number,perPage:y().number,setPerPage:y().func,page:y().number,setPage:y().func};const X=W;function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const te=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return ee(ee({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var ne=n(27577),re=n(3035),ae=n(28216),oe=n(48903),le=n(75728),ie=n(9571),ce=function(e){var t=e.checkedRows,n=e.handleBulkSelect,a=e.handlePageSelect,o=e.handleNoneSelect,c=e.displayedRowsLength,u=t.length===c,p=t.length>0&&null,f=(0,l.useState)(!1),d=(0,r.Z)(f,2),b=d[0],g=d[1];return i().createElement(i().Fragment,null,i().createElement(s.E,{variant:"bulk-select"},i().createElement(H.L,{toggle:i().createElement(le.Z,{id:"stacked-example-toggle",splitButtonItems:[i().createElement(ie.o,{id:"example-checkbox-2",key:"split-checkbox","aria-label":"Select all",isChecked:!!u||p,onChange:u?o:a},t.length>0&&"".concat(t.length," selected"))],onToggle:function(){return g((function(e){return!e}))}}),isOpen:b,dropdownItems:[i().createElement(q.h,{key:"all",onClick:n},"Select all"),i().createElement(q.h,{key:"page",onClick:a,isDisabled:u},"Select page"),i().createElement(q.h,{key:"none",onClick:o,isDisabled:0===t.length},"Select none")]})))};ce.propTypes={checkedRows:y().array,handleBulkSelect:y().func,handleNoneSelect:y().func,handlePageSelect:y().func,displayedRowsLength:y().number};const ue=ce;var se=n(75662);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e){var t,n=e.apiFilterSort,c=e.urlParam,u=e.filters,s=e.loadTableData,p=e.tableData,f=e.columnNames,d=e.rows,b=e.toolbarButtons,m=e.actionResolver,y=e.areActionsDisabled,v=e.defaultSort,h=e.emptyFilterState,O=e.toggleButton,k=e.toggleAction,E=e.toggleState,P=e.hasCheckbox,w=void 0!==P&&P,S=e.skeletonRowQuantity,j=e.selectedItems,C=e.initSelectedItems,x=e.kebabItems,Z=e.hasModalSubmitted,A=e.setHasModalSubmitted,D=e.isUseApi,F=C||[],I=(0,l.useState)(te(u)),L=(0,r.Z)(I,2),V=L[0],T=L[1],B=(0,l.useState)([]),N=(0,r.Z)(B,2),R=N[0],_=N[1],M=(0,l.useState)(v),z=(0,r.Z)(M,2),H=z[0],q=z[1],G=(0,l.useState)(20),Q=(0,r.Z)(G,2),U=Q[0],$=Q[1],J=(0,l.useState)(1),W=(0,r.Z)(J,2),Y=W[0],ee=W[1],le=(0,l.useState)(F),ie=(0,r.Z)(le,2),ce=ie[0],pe=ie[1],de=(0,ae.I0)(),be=(0,se.useHistory)();(0,l.useEffect)((function(){be.location.search.includes("create_image=true")||be.location.search.includes("update_image=true")||be.push({pathname:be.location.pathname,search:(0,oe.fz)("has_filters=true",R.length>0)});var e=n?fe(fe({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,o.Z)(e[t.key.toLowerCase()]);return fe(fe({},e),{},(0,a.Z)({},t.key.toLowerCase(),[].concat((0,o.Z)(n),[t.apiName?t.apiName:t.value])))}return fe(fe({},e),{},(0,a.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(R)),{},{limit:U,offset:(Y-1)*U},(0,oe.GF)({direction:H.direction,name:je[H.index].type})):null;"updateAvailable"===(null==e?void 0:e.status)&&(delete e.status,e.update_available="true"),D?s(e):n&&c?s(de,c,e):n&&s(de,e)}),[R,U,Y,H]),(0,l.useEffect)((function(){pe(F)}),[Z]),(0,l.useEffect)((function(){j&&j(ce),Z&&A(!1)}),[ce]);var ge,me,ye,ve,he=p.count,Oe=p.isLoading,ke=p.hasError,Ee=!n&&(ge=V.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),d.filter((function(e){return ge.length>0?null==ge?void 0:ge.every((function(t){return"text"===t.type?e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))-1].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),Pe=function(e){return e.sort((function(e,t){var n=w?H.index-1:H.index;return"number"==typeof(null==e?void 0:e.noApiSortFilter[n])?"asc"===H.direction?(null==e?void 0:e.noApiSortFilter[n])-(null==t?void 0:t.noApiSortFilter[n]):(null==t?void 0:t.noApiSortFilter[n])-(null==e?void 0:e.noApiSortFilter[n]):"asc"===H.direction?null==e?void 0:e.noApiSortFilter[n].localeCompare(null==t?void 0:t.noApiSortFilter[n],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[n].localeCompare(null==e?void 0:e.noApiSortFilter[n],void 0,{sensitivity:"base"})}))},we=n?0:null===(t=Pe(Ee))||void 0===t?void 0:t.length,Se=Oe||ke||(null==he?void 0:he.length)>0&&u.length>0,je=f.map((function(e){return{title:e.title,type:e.type,transforms:Se?[]:e.sort?[ne.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),Ce=n?d:d.length>0?Pe(Ee).slice((Y-1)*U,(Y-1)*U+U):d,xe=Oe?function(e){return(0,o.Z)(Array(null!=S?S:e)).map((function(){return{cells:f.map((function(){return{title:i().createElement(g.O,{width:"100%"})}}))}}))}(U):!(null!=Ce&&Ce.length)>0?(w=!1,[{heightAuto:!0,cells:[{props:{colSpan:8},title:i().createElement(re.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:null!==(me=null==h?void 0:h.icon)&&void 0!==me?me:"search",title:null!==(ye=null==h?void 0:h.title)&&void 0!==ye?ye:"No match found",body:null!==(ve=null==h?void 0:h.body)&&void 0!==ve?ve:"",secondaryActions:k?[]:[{title:"Clear all filters",onClick:function(){return T(te(u))}}]})}]}]):w?Ce.map((function(e){return ce.some((function(t){return t.id===e.rowInfo.id}))?fe(fe({},e),{},{selected:!0}):fe(fe({},e),{},{selected:!1})})):Ce;return i().createElement(i().Fragment,null,i().createElement(K,{count:n?he:we,toolbarButtons:b,filters:u,filterValues:V,setFilterValues:T,chipsArray:R,setChipsArray:_,isLoading:Oe,perPage:U,setPerPage:$,page:Y,setPage:ee,toggleButton:O,toggleAction:k,toggleState:E,kebabItems:x},!Oe&&w?i().createElement(ue,{checkedRows:ce,handleBulkSelect:function(){pe(d.map((function(e){return fe({},e.rowInfo)})))},handlePageSelect:function(){pe((function(e){var t=e.map((function(e){return e.id})),n=[];return Ce.forEach((function(e){var r;r=e.rowInfo.id,t.includes(r)||n.push(fe({},e.rowInfo))})),[].concat((0,o.Z)(e),n)}))},handleNoneSelect:function(){pe([])},displayedRowsLength:Ce.length}):null),i().createElement(ne.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"General Table Component",sortBy:w?fe(fe({},H),{},{index:H.index+1}):H,onSort:function(e,t,n){q({index:t=w?t-1:t,direction:n})},actionResolver:m||null,areActionsDisabled:y,cells:je,rows:xe,onSelect:!Oe&&w&&function(e,t,n){pe((function(e){return t?[].concat((0,o.Z)(e),[fe({},Ce[n].rowInfo)]):e.filter((function(e){return e.id!==Ce[n].rowInfo.id}))}))},canSelectAll:!1},i().createElement(ne.TableHeader,null),i().createElement(ne.TableBody,null)),i().createElement(X,{isLoading:Oe,count:n?he:we,setFilterValues:T,perPage:U,setPerPage:$,page:Y,setPage:ee}))};de.propTypes={apiFilterSort:y().bool,filters:y().array,urlParam:y().string,loadTableData:y().func,tableData:y().object,columnNames:y().array,rows:y().array,actionResolver:y().func,areActionsDisabled:y().func,defaultSort:y().object,toolbarButtons:y().array,toggleButton:y().array,toggleAction:y().func,toggleState:y().number,hasCheckbox:y().bool,skeletonRowQuantity:y().number,emptyFilterState:y().object,selectedItems:y().func,kebabItems:y().array,hasModalSubmitted:y().bool,setHasModalSubmitted:y().func,initSelectedItems:y().array,isUseApi:y().bool},de.defaultProps={hasModalSubmitted:!1,setHasModalSubmitted:function(){}};const be=de},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(4942),a=n(15861),o=n(29439),l=n(87757),i=n.n(l),c=n(83215),u=n(93264),s=n(28216);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=function(e){var t,n=e.api,r=e.id,l=void 0===r?null:r,p=e.statusMessages,d=e.tableReload,b=void 0!==d&&d,g=(0,s.I0)(),m=(0,u.useState)([]),y=(0,o.Z)(m,2),v=y[0],h=y[1],O=(0,u.useState)(!0),k=(0,o.Z)(O,2),E=k[0],P=k[1],w=(0,u.useState)(!1),S=(0,o.Z)(w,2),j=S[0],C=S[1],x=null===(t=p)||void 0===t?void 0:t.onSuccess;p||(p={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var Z=function(){var e=(0,a.Z)(i().mark((function e(){var t,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",P(!0),e.prev=2,e.next=5,n({id:l,query:t});case 5:r=e.sent,h(r),x&&g(f({},(0,c.wN)(f({variant:"success"},p.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),C(!0),g(f({},(0,c.wN)(f({variant:"danger"},p.onError))));case 14:return e.prev=14,P(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){b||Z()}),[]),[{data:v,isLoading:E,hasError:j},Z]}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{}}]);
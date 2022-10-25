/*! For license information please see 729.1666715423684.4b7f9e1312dd0801442a.js.LICENSE.txt */
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[729],{66702:(e,t,n)=>{"use strict";n.d(t,{DO:()=>a,Ds:()=>o,Vs:()=>l});var r=n(71002),a="/api/image-builder/v1",o="/api/edge/v1",l=function(e){return void 0===e?"":Object.keys(e).reduce((function(t,n){var a=void 0;return"object"===(0,r.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(a=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,r.Z)(e[n]))&&""!==e[n]&&(a="".concat(n,"=").concat(e[n])),void 0===a?t:""===t?"".concat(a):"".concat(t,"&").concat(a)}),"")}},3035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(93264),a=n.n(r),o=n(38779),l=n(47173),i=n(9947),c=n(38424),u=n(75106),s=n(35293),p=n(15265),f=n(45697),d=n.n(f),g=n(75662),b=n(98309),m=function(e){var t=e.bgColor,n=e.icon,r=e.title,f=e.body,d=e.primaryAction,m=e.secondaryActions;return a().createElement(i.u,{variant:"large",style:{backgroundColor:t||""}},n&&a().createElement(c.k,{icon:b.iQ[n]}),a().createElement(o.D,{headingLevel:"h4",size:"lg"},r),a().createElement(u.B,null,f),d&&a().createElement(a().Fragment,null,d.href?a().createElement(l.zx,{component:g.Link,to:d.href},d.text):a().createElement(l.zx,{onClick:d.click,variant:"primary"},d.text)),a().createElement(s.i,null,m.map((function(e,t){var n=e.type,r=e.title,o=e.link,i=e.onClick;return a().createElement(l.zx,{component:"link"===n?"a":"button",href:o,variant:"link",target:"link"===n?"_blank":"",key:t,onClick:i},r,o&&a().createElement(p.ZP,{className:"pf-u-ml-sm"}))}))))};m.propTypes={bgColor:d().string,icon:d().string,title:d().string,body:d().string,primaryAction:d().object,secondaryActions:d().array},m.defaultProps={secondaryActions:[]};const h=m},73448:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ge});var r=n(29439),a=n(4942),o=n(93433),l=n(93264),i=n.n(l),c=n(84812),u=n(44733),s=n(1595),p=n(78919),f=n(47173),d=n(13115),g=n(57980),b=n(50383),m=n(45697),h=n.n(m),y=n(54680),v=n(92694),E=n(76889);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return i().createElement(i().Fragment,null,t.length>1?i().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},i().createElement(y.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return k(k({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:i().createElement(E.ZP,null)},t.map((function(e,t){return i().createElement(v.$,{key:t,value:e.label})})))):null)};P.propTypes={filters:h().array,dropdown:h().object,setDropdown:h().func};const w=P;var S=n(23279),Z=n.n(S),j=n(65802),C=n(50433);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.filterValues,n=e.setFilterValues,c=e.input,u=t.find((function(e){return e.label===c})),p=(0,l.useState)(!1),f=(0,r.Z)(p,2),d=f[0],g=f[1],b=function(){return function(e,t){n((function(n){var r,o=n.findIndex((function(e){return e.label===u.label})),l=n.find((function(e){return e.label===u.label})),i="checkbox"===u.type?l.value.findIndex((function(e){return e.option===t})):0,c=Object.values(A(A({},l.value),{},(0,a.Z)({},i,A(A({},l.value[i]),{},{isChecked:!(null!=l&&null!==(r=l.value[i])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(A(A({},n),{},(0,a.Z)({},o,A(A({},n[o]),{},{value:"checkbox"===u.type?c:s}))))}))}};return"text"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(j.B,null,i().createElement(C.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label.toLowerCase()),placeholder:"Filter by ".concat(u.label.toLowerCase()),onChange:Z()(b(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,o.Z)(t.slice(0,e)),[A(A({},t[e]),{},{value:""})],(0,o.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(j.B,null,i().createElement(y.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label.toLowerCase()),width:"11rem",placeholderText:"Filter by ".concat(u.label.toLowerCase()),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return g((function(e){return!e}))},onSelect:b(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return i().createElement(v.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};L.propTypes={filterValues:h().array,setFilterValues:h().func,input:h().string};const D=L;var F=function(e){var t=e.filters,n=e.filterValues,a=e.setFilterValues,o=e.children,c=(0,l.useState)({isOpen:!1,selected:t[0].label}),u=(0,r.Z)(c,2),s=u[0],p=u[1];return i().createElement(i().Fragment,null,o,i().createElement(w,{dropdown:s,setDropdown:p,filters:t}),i().createElement(D,{filterValues:n,setFilterValues:a,input:s.selected}))};F.propTypes={filters:h().array,filterValues:h().array,setFilterValues:h().func,children:h().element};const I=F;var R=n(7739),T=n.n(R),V=n(21039),N=n(14531);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.filterValues,n=e.setFilterValues,a=e.chipsArray,c=e.setChipsArray,u=e.setPage;return(0,l.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||a.find((function(e){return e.label===t.option}))?!1===t.isChecked&&a.find((function(e){return e.label===t.option}))&&c((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,o.Z)(e.slice(0,n)),(0,o.Z)(e.slice(n+1,e.length)))})):c((function(n){return[].concat((0,o.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};a.find((function(t){return t.key===e.label}))?c((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):c((function(e){return[].concat((0,o.Z)(e),[t])}))}else"text"===e.type&&a.find((function(t){return t.key===e.label}))&&c((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))}))})),u(1)}),[t]),i().createElement(i().Fragment,null,a.length>0?Object.entries(T()(a,"key")).map((function(e){var a=(0,r.Z)(e,2),l=a[0],u=a[1];return i().createElement(V.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:l,key:l},u.map((function(e){return i().createElement(N.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,o.Z)(t.slice(0,r)),[H(H({},t[r]),{},{value:""})],(0,o.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var a=n.value.map((function(t){return t.option===e.label?H(H({},t),{},{isChecked:!1}):t}));return c((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))})),[].concat((0,o.Z)(t.slice(0,r)),[H(H({},t[r]),{},{value:a})],(0,o.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:l},e.label)})))})):null,a.length>0?i().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return H(H({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,H(H({},e),{},{isChecked:!1})}));return H(H({},e),{},{value:t})}}))})),c([])}},"Clear filters"):null)};_.propTypes={filterValues:h().array,setFilterValues:h().func,chipsArray:h().array,setChipsArray:h().func,setPage:h().func};const z=_;var M=n(56787),q=n(84457),U=n(94024),G=function(e){var t=e.kebabItems,n=(0,l.useState)(!1),a=(0,r.Z)(n,2),o=a[0],c=a[1],u=t.map((function(e,t){var n=e.title,r=e.isDisabled,a=e.onClick;return i().createElement(q.h,{key:t,onClick:a||function(){},isDisabled:r},n)}));return i().createElement(s.E,null,i().createElement(M.L,{toggle:i().createElement(U.a,{"aria-label":"Actions for selected table items",onToggle:function(){return c((function(e){return!e}))}}),isOpen:o,isPlain:!0,dropdownItems:u}))};G.propTypes={kebabItems:h().array};const Q=G;var $=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click,a=e.isDisabled,o=e.id;return i().createElement(s.E,{key:t},i().createElement(f.zx,{onClick:r,variant:"primary",isDisabled:a,id:o},n))}))},W=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,a=e.filterValues,o=e.chipsArray,l=e.setChipsArray,f=e.isLoading,m=e.count,h=e.perPage,y=e.setPerPage,v=e.page,E=e.setPage,O=e.toggleButton,k=e.toggleAction,P=e.toggleState,w=e.children,S=e.kebabItems;return i().createElement(c.o,{style:{padding:"16px"},id:"toolbar-header","data-testid":"toolbar-header-testid"},i().createElement(p.c,null,i().createElement(I,{filters:n,filterValues:a,setFilterValues:r},w),t&&i().createElement($,{buttons:t}),O&&i().createElement(d.t,null,O.map((function(e){return i().createElement(g.G,{key:e.key,text:e.title,isSelected:P===e.key,onChange:function(){return k(e.key)}})}))),S&&i().createElement(Q,{kebabItems:S}),i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?i().createElement(b.O,{width:"200px"}):m>0?i().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:m,perPage:h,page:v,onSetPage:function(e,t){return E(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return y(t)},isCompact:!0}):null)),i().createElement(p.c,null,i().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},i().createElement(z,{filterValues:a,setFilterValues:r,chipsArray:o,setChipsArray:l,setPage:E}))))};W.propTypes={filters:h().array,toolbarButtons:h().array,setFilterValues:h().func,filterValues:h().array,input:h().string,count:h().number,perPage:h().number,setPerPage:h().func,page:h().number,setPage:h().func,chipsArray:h().array,setChipsArray:h().func,isLoading:h().bool,toggleButton:h().array,toggleAction:h().func,toggleState:h().number,children:h().element,kebabItems:h().array};const J=W;var K=function(e){var t=e.isLoading,n=e.count,r=e.perPage,a=e.setPerPage,o=e.page,l=e.setPage;return i().createElement(c.o,{style:{padding:"16px"},id:"toolbar-footer"},i().createElement(p.c,null,i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?i().createElement(b.O,{width:"400px"}):n>0?i().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:o,onSetPage:function(e,t){return l(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return a(t)}}):null)))};K.propTypes={isLoading:h().bool,count:h().number,perPage:h().number,setPerPage:h().func,page:h().number,setPage:h().func};const X=K;function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const te=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return ee(ee({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var ne=n(27577),re=n(3035),ae=n(28216),oe=n(48903),le=n(75728),ie=n(9571),ce=function(e){var t=e.checkedRows,n=e.handleBulkSelect,a=e.handlePageSelect,o=e.handleNoneSelect,c=e.displayedRowsLength,u=t.length===c,p=t.length>0&&null,f=(0,l.useState)(!1),d=(0,r.Z)(f,2),g=d[0],b=d[1];return i().createElement(i().Fragment,null,i().createElement(s.E,{variant:"bulk-select"},i().createElement(M.L,{toggle:i().createElement(le.Z,{id:"stacked-example-toggle",splitButtonItems:[i().createElement(ie.o,{id:"example-checkbox-2",key:"split-checkbox","aria-label":"Select all",isChecked:!!u||p,onChange:u?o:a},t.length>0&&"".concat(t.length," selected"))],onToggle:function(){return b((function(e){return!e}))}}),isOpen:g,dropdownItems:[i().createElement(q.h,{key:"all",onClick:n},"Select all"),i().createElement(q.h,{key:"page",onClick:a,isDisabled:u},"Select page"),i().createElement(q.h,{key:"none",onClick:o,isDisabled:0===t.length},"Select none")]})))};ce.propTypes={checkedRows:h().array,handleBulkSelect:h().func,handleNoneSelect:h().func,handlePageSelect:h().func,displayedRowsLength:h().number};const ue=ce;var se=n(75662);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e){var t,n=e.apiFilterSort,c=e.urlParam,u=e.filters,s=e.loadTableData,p=e.tableData,f=e.columnNames,d=e.rows,g=e.toolbarButtons,m=e.actionResolver,h=e.areActionsDisabled,y=e.defaultSort,v=e.emptyFilterState,E=e.toggleButton,O=e.toggleAction,k=e.toggleState,P=e.hasCheckbox,w=void 0!==P&&P,S=e.skeletonRowQuantity,Z=e.selectedItems,j=e.initSelectedItems,C=e.kebabItems,x=e.hasModalSubmitted,A=e.setHasModalSubmitted,L=e.isUseApi,D=j||[],F=(0,l.useState)(te(u)),I=(0,r.Z)(F,2),R=I[0],T=I[1],V=(0,l.useState)([]),N=(0,r.Z)(V,2),B=N[0],H=N[1],_=(0,l.useState)(y),z=(0,r.Z)(_,2),M=z[0],q=z[1],U=(0,l.useState)(20),G=(0,r.Z)(U,2),Q=G[0],$=G[1],W=(0,l.useState)(1),K=(0,r.Z)(W,2),Y=K[0],ee=K[1],le=(0,l.useState)(D),ie=(0,r.Z)(le,2),ce=ie[0],pe=ie[1],de=(0,ae.I0)(),ge=(0,se.useHistory)();(0,l.useEffect)((function(){ge.location.search.includes("create_image=true")||ge.location.search.includes("update_image=true")||ge.push({pathname:ge.location.pathname,search:(0,oe.fz)("has_filters=true",B.length>0)});var e=n?fe(fe({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,o.Z)(e[t.key.toLowerCase()]);return fe(fe({},e),{},(0,a.Z)({},t.key.toLowerCase(),[].concat((0,o.Z)(n),[t.apiName?t.apiName:t.value])))}return fe(fe({},e),{},(0,a.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(B)),{},{limit:Q,offset:(Y-1)*Q},(0,oe.GF)({direction:M.direction,name:Ze[M.index].type})):null;"updateAvailable"===(null==e?void 0:e.status)&&(delete e.status,e.update_available="true"),L?s(e):n&&c?s(de,c,e):n&&s(de,e)}),[B,Q,Y,M,x]),(0,l.useEffect)((function(){pe(D)}),[x]),(0,l.useEffect)((function(){Z&&Z(ce),x&&A(!1)}),[ce]);var be,me,he,ye,ve=p.count,Ee=p.isLoading,Oe=p.hasError,ke=!n&&(be=R.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),d.filter((function(e){return be.length>0?null==be?void 0:be.every((function(t){return"text"===t.type?e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[f.findIndex((function(e){return e.title===t.label}))-1].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),Pe=function(e){return e.sort((function(e,t){var n=w?M.index-1:M.index;return"number"==typeof(null==e?void 0:e.noApiSortFilter[n])?"asc"===M.direction?(null==e?void 0:e.noApiSortFilter[n])-(null==t?void 0:t.noApiSortFilter[n]):(null==t?void 0:t.noApiSortFilter[n])-(null==e?void 0:e.noApiSortFilter[n]):"asc"===M.direction?null==e?void 0:e.noApiSortFilter[n].localeCompare(null==t?void 0:t.noApiSortFilter[n],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[n].localeCompare(null==e?void 0:e.noApiSortFilter[n],void 0,{sensitivity:"base"})}))},we=n?0:null===(t=Pe(ke))||void 0===t?void 0:t.length,Se=Ee||Oe||(null==ve?void 0:ve.length)>0&&u.length>0,Ze=f.map((function(e){return{title:e.title,type:e.type,transforms:Se?[]:e.sort?[ne.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),je=n?d:d.length>0?Pe(ke).slice((Y-1)*Q,(Y-1)*Q+Q):d,Ce=Ee?function(e){return(0,o.Z)(Array(null!=S?S:e)).map((function(){return{cells:f.map((function(){return{title:i().createElement(b.O,{width:"100%"})}}))}}))}(Q):!(null!=je&&je.length)>0?(w=!1,[{heightAuto:!0,cells:[{props:{colSpan:8},title:i().createElement(re.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:null!==(me=null==v?void 0:v.icon)&&void 0!==me?me:"search",title:null!==(he=null==v?void 0:v.title)&&void 0!==he?he:"No match found",body:null!==(ye=null==v?void 0:v.body)&&void 0!==ye?ye:"",secondaryActions:O?[]:[{title:"Clear all filters",onClick:function(){return T(te(u))}}]})}]}]):w?je.map((function(e){return ce.some((function(t){return t.id===e.rowInfo.id}))?fe(fe({},e),{},{selected:!0}):fe(fe({},e),{},{selected:!1})})):je;return i().createElement(i().Fragment,null,i().createElement(J,{count:n?ve:we,toolbarButtons:g,filters:u,filterValues:R,setFilterValues:T,chipsArray:B,setChipsArray:H,isLoading:Ee,perPage:Q,setPerPage:$,page:Y,setPage:ee,toggleButton:E,toggleAction:O,toggleState:k,kebabItems:C},!Ee&&w?i().createElement(ue,{checkedRows:ce,handleBulkSelect:function(){pe(d.map((function(e){return fe({},e.rowInfo)})))},handlePageSelect:function(){pe((function(e){var t=e.map((function(e){return e.id})),n=[];return je.forEach((function(e){var r;r=e.rowInfo.id,t.includes(r)||n.push(fe({},e.rowInfo))})),[].concat((0,o.Z)(e),n)}))},handleNoneSelect:function(){pe([])},displayedRowsLength:je.length}):null),i().createElement(ne.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"General Table Component",sortBy:w?fe(fe({},M),{},{index:M.index+1}):M,onSort:function(e,t,n){q({index:t=w?t-1:t,direction:n})},actionResolver:m||null,areActionsDisabled:h,cells:Ze,rows:Ce,onSelect:!Ee&&w&&function(e,t,n){pe((function(e){return t?[].concat((0,o.Z)(e),[fe({},je[n].rowInfo)]):e.filter((function(e){return e.id!==je[n].rowInfo.id}))}))},canSelectAll:!1},i().createElement(ne.TableHeader,null),i().createElement(ne.TableBody,null)),i().createElement(X,{isLoading:Ee,count:n?ve:we,setFilterValues:T,perPage:Q,setPerPage:$,page:Y,setPage:ee}))};de.propTypes={apiFilterSort:h().bool,filters:h().array,urlParam:h().string,loadTableData:h().func,tableData:h().object,columnNames:h().array,rows:h().array,actionResolver:h().func,areActionsDisabled:h().func,defaultSort:h().object,toolbarButtons:h().array,toggleButton:h().array,toggleAction:h().func,toggleState:h().number,hasCheckbox:h().bool,skeletonRowQuantity:h().number,emptyFilterState:h().object,selectedItems:h().func,kebabItems:h().array,hasModalSubmitted:h().bool,setHasModalSubmitted:h().func,initSelectedItems:h().array,isUseApi:h().bool},de.defaultProps={hasModalSubmitted:!1,setHasModalSubmitted:function(){}};const ge=de},98309:(e,t,n)=>{"use strict";n.d(t,{Op:()=>P,n:()=>w,aN:()=>S,Ei:()=>Z,vk:()=>j,R8:()=>C,az:()=>x,ml:()=>A,bd:()=>L,iQ:()=>D,OE:()=>F,E5:()=>I});var r=n(34143),a=n(68778),o=n(54340),l=n(43047),i=n(69957),c=n(53636),u=n(7081),s=n(17542),p=n(64915),f=n(80810),d=n(35453),g=n(15914),b=n(72781),m=n(94768),h=n(73479),y=n(12990),v=n(37655),E=n(4088),O=n(14206),k=n(29987),P=["done","error","pending","unknown","updating","warning","notification"],w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},S={"rhel-84":"RHEL 8.4","rhel-85":"RHEL 8.5","rhel-86":"RHEL 8.6","rhel-90":"RHEL 9.0"},Z={"rhel-90":"Red Hat Enterprise Linux (RHEL) 9.0","rhel-86":"Red Hat Enterprise Linux (RHEL) 8.6","rhel-85":"Red Hat Enterprise Linux (RHEL) 8.5","rhel-84":"Red Hat Enterprise Linux (RHEL) 8.4"},j=["rhel-84","rhel-85"],C=["rhel-86","rhel-90"],x="rhel-85",A="rhel-90",L={"rhel-edge-commit":"RHEL for Edge Commit (.tar)","rhel-edge-installer":"RHEL for Edge Installer (.iso)"},D={unknown:s.ZP,repository:p.ZP,search:f.ZP,module:d.ZP,cube:g.ZP,question:h.ZP,plus:u.ZP,checkCircle:a.ZP,exclamationTriangle:i.ZP,timesCircle:b.ZP,inProgress:m.ZP,exclamationCircle:l.ZP},F={green:E.Z.value,yellow:v.Z.value,lightBlue:O.Z.value,blue:k.Z.value,red:y.Z.value},I={done:{icon:a.ZP,color:E.Z.value,title:"Fully adopted"},error:{icon:l.ZP,color:y.Z.value,title:"Error while adopting"},pending:{icon:c.ZP,title:"Pending adoption"},updating:{icon:o.ZP,title:"Updating"},unknown:{icon:s.ZP,title:"Unknown state"},warning:{icon:i.ZP,color:v.Z.value,title:"Warning while adopting"},notification:{icon:r.ZP,color:O.Z.value,title:"Delivering"}}},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(4942),a=n(15861),o=n(29439),l=n(87757),i=n.n(l),c=n(83215),u=n(93264),s=n(28216);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=function(e){var t,n=e.api,r=e.id,l=void 0===r?null:r,p=e.statusMessages,d=e.tableReload,g=void 0!==d&&d,b=(0,s.I0)(),m=(0,u.useState)([]),h=(0,o.Z)(m,2),y=h[0],v=h[1],E=(0,u.useState)(!0),O=(0,o.Z)(E,2),k=O[0],P=O[1],w=(0,u.useState)(!1),S=(0,o.Z)(w,2),Z=S[0],j=S[1],C=null===(t=p)||void 0===t?void 0:t.onSuccess;p||(p={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var x=function(){var e=(0,a.Z)(i().mark((function e(){var t,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",P(!0),e.prev=2,e.next=5,n({id:l,query:t});case 5:r=e.sent,v(r),C&&b(f({},(0,c.wN)(f({variant:"success"},p.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),j(!0),b(f({},(0,c.wN)(f({variant:"danger"},p.onError))));case 14:return e.prev=14,P(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){g||x()}),[]),[{data:y,isLoading:k,hasError:Z},x]}},48903:(e,t,n)=>{"use strict";n.d(t,{qg:()=>i,Ff:()=>c,fz:()=>u,A8:()=>s,yb:()=>p,gV:()=>f,aS:()=>d,GF:()=>g,pS:()=>b});var r=n(29439),a=n(64124),o=n(63746),l=n(98309),i={type:a.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_\-\s]*$/,message:"Name must start with alphanumeric characters and can contain underscore and hyphen characters."},c=function(e,t){for(var n=e.split("/"),r={},a=1;a<n.length;a++)n[a]&&(r[t[a-1]]=n[a]);return r.buildUrl=function(){return Object.values(this).reduce((function(e,t){return"function"!=typeof t?"".concat(e,"/").concat(t):e}),"")},r},u=function(e,t){var n=[],r=location.search.length>0?location.search.includes("&")?location.search.split("?")[1].split("&"):location.search.split("?").slice(1):[];return t?(r.includes(e)||r.push(e),n=r):n=r.includes(e)?r.filter((function(t){return t!==e})):r,n.join("&")},s=function(e,t,n){return!0!==e&&!t>0&&!n.location.search.includes("has_filters=true")},p=function(e){var t=e.deviceData,n=e.imageData;return!((null==t?void 0:t.length)>0&&n)||(null==t?void 0:t.some((function(e){return e.imageSetId!==t[0].imageSetId})))},f=function(e){var t=(0,o.useFlagsStatus)().flagsReady,n=(0,o.useFlag)(e);return!!t&&n},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...";if(e.length<=t)return e;var a="".concat(e.substring(0,t)).concat(r).concat(e.substring(e.length-n,e.length));return a},g=function(e){var t=e.direction,n=e.name;return{sort_by:"asc"===t?n:"-".concat(n)}},b=function(e,t){return Object.entries(l.Ei).filter((function(n){var a=(0,r.Z)(n,1)[0];return(t||l.vk).includes(a)||a===e})).map((function(e){var t=(0,r.Z)(e,2);return{value:t[0],label:t[1]}}))}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},81754:()=>{},11452:()=>{},10497:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},10108:()=>{},54476:()=>{},28992:()=>{},30187:()=>{},40837:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},71338:()=>{},74282:()=>{},93398:()=>{},46928:()=>{},91993:()=>{},99624:()=>{},42246:()=>{},36974:()=>{},53336:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},314:()=>{},97853:()=>{},97236:()=>{},40209:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/729.0e6b0621d3b114687f524d08d3a81b5a.js.map
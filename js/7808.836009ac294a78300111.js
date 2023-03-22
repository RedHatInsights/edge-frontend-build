(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[7808],{64124:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={REQUIRED:"required",MIN_LENGTH:"min-length",MAX_LENGTH:"max-length",EXACT_LENGTH:"exact-length",MIN_ITEMS:"min-items",MIN_NUMBER_VALUE:"min-number-value",MAX_NUMBER_VALUE:"max-number-value",PATTERN:"pattern",URL:"url"}},76889:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>i,_t:()=>o,k1:()=>a});var r=n(40400);const o={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},66702:(e,t,n)=>{"use strict";n.d(t,{DO:()=>o,Ds:()=>a,Vs:()=>i});var r=n(71002),o="/api/image-builder/v1",a="/api/edge/v1",i=function(e){return void 0===e?"":Object.keys(e).reduce((function(t,n){var o=void 0;return"object"===(0,r.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(o=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,r.Z)(e[n]))&&""!==e[n]&&(o="".concat(n,"=").concat(e[n])),void 0===o?t:""===t?"".concat(o):"".concat(t,"&").concat(o)}),"")}},3035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(92950),o=n.n(r),a=n(38779),i=n(47173),l=n(9947),c=n(38424),u=n(75106),s=n(35293),f=n(15265),p=n(45697),d=n.n(p),g=n(96620),b=n(98309),m=function(e){var t=e.bgColor,n=e.icon,r=e.title,p=e.body,d=e.primaryAction,m=e.secondaryActions;return o().createElement(l.u,{variant:"large",style:{backgroundColor:t||""}},n&&o().createElement(c.k,{icon:b.iQ[n]}),o().createElement(a.D,{headingLevel:"h4",size:"lg"},r),o().createElement(u.B,null,p),d&&o().createElement(o().Fragment,null,d.href?o().createElement(i.zx,{component:g.Link,to:d.href},d.text):o().createElement(i.zx,{onClick:d.click,variant:"primary"},d.text)),o().createElement(s.i,null,m.map((function(e,t){var n=e.type,r=e.title,a=e.link,l=e.onClick;return o().createElement(i.zx,{component:"link"===n?"a":"button",href:a,variant:"link",target:"link"===n?"_blank":"",key:t,onClick:l},r,a&&o().createElement(f.ZP,{className:"pf-u-ml-sm"}))}))))};m.propTypes={bgColor:d().string,icon:d().string,title:d().string,body:d().string,primaryAction:d().object,secondaryActions:d().array},m.defaultProps={secondaryActions:[]};const v=m},73448:(e,t,n)=>{"use strict";n.d(t,{Z:()=>me});var r=n(29439),o=n(4942),a=n(93433),i=n(92950),l=n.n(i),c=n(84812),u=n(44733),s=n(1595),f=n(78919),p=n(47173),d=n(13115),g=n(57980),b=n(50383),m=n(45697),v=n.n(m),h=n(54680),y=n(92694),E=n(76889);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return l().createElement(l().Fragment,null,t.length>1?l().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},l().createElement(h.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return P(P({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:l().createElement(E.ZP,null)},t.map((function(e,t){return l().createElement(y.$,{key:t,value:e.label})})))):null)};k.propTypes={filters:v().array,dropdown:v().object,setDropdown:v().func};const w=k;var S=n(23279),Z=n.n(S),j=n(65802),x=n(98490);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.filterValues,n=e.setFilterValues,c=e.input,u=t.find((function(e){return e.label===c})),f=(0,i.useState)(!1),p=(0,r.Z)(f,2),d=p[0],g=p[1],b=function(){return function(e,t){n((function(n){var r,a=n.findIndex((function(e){return e.label===u.label})),i=n.find((function(e){return e.label===u.label})),l="checkbox"===u.type?i.value.findIndex((function(e){return e.option===t})):0,c=Object.values(L(L({},i.value),{},(0,o.Z)({},l,L(L({},i.value[l]),{},{isChecked:!(null!=i&&null!==(r=i.value[l])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(L(L({},n),{},(0,o.Z)({},a,L(L({},n[a]),{},{value:"checkbox"===u.type?c:s}))))}))}};return"text"===u.type?l().createElement(s.E,{"data-testid":"filter-input-testid"},l().createElement(j.B,null,l().createElement(x.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label.toLowerCase()),placeholder:"Filter by ".concat(u.label.toLowerCase()),onChange:Z()(b(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,a.Z)(t.slice(0,e)),[L(L({},t[e]),{},{value:""})],(0,a.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?l().createElement(s.E,{"data-testid":"filter-input-testid"},l().createElement(j.B,null,l().createElement(h.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label.toLowerCase()),width:"11rem",placeholderText:"Filter by ".concat(u.label.toLowerCase()),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return g((function(e){return!e}))},onSelect:b(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return l().createElement(y.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};A.propTypes={filterValues:v().array,setFilterValues:v().func,input:v().string};const D=A;var F=function(e){var t=e.filters,n=e.filterValues,o=e.setFilterValues,a=e.children,c=(0,i.useState)({isOpen:!1,selected:t[0].label}),u=(0,r.Z)(c,2),s=u[0],f=u[1];return l().createElement(l().Fragment,null,a,l().createElement(w,{dropdown:s,setDropdown:f,filters:t}),l().createElement(D,{filterValues:n,setFilterValues:o,input:s.selected}))};F.propTypes={filters:v().array,filterValues:v().array,setFilterValues:v().func,children:v().element};const I=F;var R=n(7739),T=n.n(R),N=n(21039),V=n(71710);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.filterValues,n=e.setFilterValues,o=e.chipsArray,c=e.setChipsArray,u=e.setPage;return(0,i.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||o.find((function(e){return e.label===t.option}))?!1===t.isChecked&&o.find((function(e){return e.label===t.option}))&&c((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,a.Z)(e.slice(0,n)),(0,a.Z)(e.slice(n+1,e.length)))})):c((function(n){return[].concat((0,a.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};o.find((function(t){return t.key===e.label}))?c((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):c((function(e){return[].concat((0,a.Z)(e),[t])}))}else"text"===e.type&&o.find((function(t){return t.key===e.label}))&&c((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,a.Z)(t.slice(0,n)),(0,a.Z)(t.slice(n+1,t.length)))}))})),u(1)}),[t]),l().createElement(l().Fragment,null,o.length>0?Object.entries(T()(o,"key")).map((function(e){var o=(0,r.Z)(e,2),i=o[0],u=o[1];return l().createElement(N.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:i,key:i},u.map((function(e){return l().createElement(V.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,a.Z)(t.slice(0,r)),[B(B({},t[r]),{},{value:""})],(0,a.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var o=n.value.map((function(t){return t.option===e.label?B(B({},t),{},{isChecked:!1}):t}));return c((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,a.Z)(t.slice(0,n)),(0,a.Z)(t.slice(n+1,t.length)))})),[].concat((0,a.Z)(t.slice(0,r)),[B(B({},t[r]),{},{value:o})],(0,a.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:i},e.label)})))})):null,o.length>0?l().createElement(p.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return B(B({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,B(B({},e),{},{isChecked:!1})}));return B(B({},e),{},{value:t})}}))})),c([])}},"Clear filters"):null)};M.propTypes={filterValues:v().array,setFilterValues:v().func,chipsArray:v().array,setChipsArray:v().func,setPage:v().func};const _=M;var z=n(56787),U=n(84457),G=n(94024),q=function(e){var t=e.kebabItems,n=(0,i.useState)(!1),o=(0,r.Z)(n,2),a=o[0],c=o[1],u=t.map((function(e,t){var n=e.title,r=e.isDisabled,o=e.onClick;return l().createElement(U.h,{key:t,onClick:o||function(){},isDisabled:r},n)}));return l().createElement(s.E,null,l().createElement(z.L,{toggle:l().createElement(G.a,{"aria-label":"Actions for selected table items",onToggle:function(){return c((function(e){return!e}))}}),isOpen:a,isPlain:!0,dropdownItems:u}))};q.propTypes={kebabItems:v().array};const $=q;var Q=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click,o=e.isDisabled,a=e.id;return l().createElement(s.E,{key:t},l().createElement(p.zx,{onClick:r,variant:"primary",isDisabled:o,id:a},n))}))},W=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,o=e.filterValues,a=e.chipsArray,i=e.setChipsArray,p=e.isLoading,m=e.count,v=e.perPage,h=e.setPerPage,y=e.page,E=e.setPage,O=e.toggleButton,P=e.toggleAction,k=e.toggleState,w=e.children,S=e.kebabItems;return l().createElement(c.o,{style:{padding:"0"},id:"toolbar-header","data-testid":"toolbar-header-testid"},l().createElement(f.c,null,l().createElement(I,{filters:n,filterValues:o,setFilterValues:r},w),t&&l().createElement(Q,{buttons:t}),O&&l().createElement(d.t,null,O.map((function(e){return l().createElement(g.G,{key:e.key,text:e.title,isSelected:k===e.key,onChange:function(){return P(e.key)}})}))),S&&l().createElement($,{kebabItems:S}),l().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},p?l().createElement(b.O,{width:"200px"}):m>0?l().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:m,perPage:v,page:y,onSetPage:function(e,t){return E(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return h(t)},isCompact:!0}):null)),l().createElement(f.c,null,l().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},l().createElement(_,{filterValues:o,setFilterValues:r,chipsArray:a,setChipsArray:i,setPage:E}))))};W.propTypes={filters:v().array,toolbarButtons:v().array,setFilterValues:v().func,filterValues:v().array,input:v().string,count:v().number,perPage:v().number,setPerPage:v().func,page:v().number,setPage:v().func,chipsArray:v().array,setChipsArray:v().func,isLoading:v().bool,toggleButton:v().array,toggleAction:v().func,toggleState:v().number,children:v().element,kebabItems:v().array};const X=W;function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.isLoading,n=e.count,r=e.perPage,o=e.setPerPage,a=e.page,i=e.setPage,p={padding:"20px"};return e.isFixed&&(p=K(K({},p),{},{paddingBottom:"30px",paddingTop:"20px"})),l().createElement(c.o,{style:p,id:"toolbar-footer"},l().createElement(f.c,null,l().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?l().createElement(b.O,{width:"400px"}):n>0?l().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:a,onSetPage:function(e,t){return i(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return o(t)}}):null)))};Y.propTypes={isLoading:v().bool,count:v().number,perPage:v().number,setPerPage:v().func,page:v().number,setPage:v().func,isFixed:v().bool};const ee=Y;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const re=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return ne(ne({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var oe=n(34766),ae=n(3035),ie=n(86706),le=n(48903),ce=n(75728),ue=n(9571),se=function(e){var t=e.checkedRows,n=e.handleBulkSelect,o=e.handlePageSelect,a=e.handleNoneSelect,c=e.displayedRowsLength,u=t.length===c,f=t.length>0&&null,p=(0,i.useState)(!1),d=(0,r.Z)(p,2),g=d[0],b=d[1];return l().createElement(l().Fragment,null,l().createElement(s.E,{variant:"bulk-select"},l().createElement(z.L,{toggle:l().createElement(ce.Z,{id:"stacked-example-toggle",splitButtonItems:[l().createElement(ue.o,{id:"example-checkbox-2",key:"split-checkbox","aria-label":"Select all",isChecked:!!u||f,onChange:u?a:o},t.length>0&&"".concat(t.length," selected"))],onToggle:function(){return b((function(e){return!e}))}}),isOpen:g,dropdownItems:[l().createElement(U.h,{key:"all",onClick:n},"Select all"),l().createElement(U.h,{key:"page",onClick:o,isDisabled:u},"Select page"),l().createElement(U.h,{key:"none",onClick:a,isDisabled:0===t.length},"Select none")]})))};se.propTypes={checkedRows:v().array,handleBulkSelect:v().func,handleNoneSelect:v().func,handlePageSelect:v().func,displayedRowsLength:v().number};const fe=se;var pe=n(96620);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=function(e){var t,n=e.apiFilterSort,c=e.urlParam,u=e.filters,s=e.loadTableData,f=e.tableData,p=e.columnNames,d=e.rows,g=e.toolbarButtons,m=e.actionResolver,v=e.areActionsDisabled,h=e.defaultSort,y=e.emptyFilterState,E=e.toggleButton,O=e.toggleAction,P=e.toggleState,k=e.hasCheckbox,w=void 0!==k&&k,S=e.skeletonRowQuantity,Z=e.selectedItems,j=e.initSelectedItems,x=e.kebabItems,C=e.hasModalSubmitted,L=e.setHasModalSubmitted,A=e.isUseApi,D=e.hasRadio,F=void 0!==D&&D,I=e.setRadioSelection,R=e.isFooterFixed,T=void 0!==R&&R,N=j||[],V=(0,i.useState)(re(u)),H=(0,r.Z)(V,2),B=H[0],M=H[1],_=(0,i.useState)([]),z=(0,r.Z)(_,2),U=z[0],G=z[1],q=(0,i.useState)(h),$=(0,r.Z)(q,2),Q=$[0],W=$[1],J=(0,i.useState)(20),K=(0,r.Z)(J,2),Y=K[0],te=K[1],ne=(0,i.useState)(1),ce=(0,r.Z)(ne,2),ue=ce[0],se=ce[1],de=(0,i.useState)(N),be=(0,r.Z)(de,2),me=be[0],ve=be[1],he=(0,ie.I0)(),ye=(0,pe.useHistory)(),Ee=(0,pe.useLocation)(),Oe=Ee.pathname,Pe=Ee.search;(0,i.useEffect)((function(){Pe.includes("create_image=true")||Pe.includes("update_image=true")||ye.replace({pathname:Oe,search:(0,le.fz)("has_filters=true",U.length>0,Pe)});var e=n?ge(ge({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,a.Z)(e[t.key.toLowerCase()]);return ge(ge({},e),{},(0,o.Z)({},t.key.toLowerCase(),[].concat((0,a.Z)(n),[t.apiName?t.apiName:t.value])))}return ge(ge({},e),{},(0,o.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(U)),{},{limit:Y,offset:(ue-1)*Y},(0,le.GF)({direction:Q.direction,name:Ie[Q.index].type})):null;"updateAvailable"===(null==e?void 0:e.status)&&(delete e.status,e.update_available="true"),A?s(e):n&&c?s(he,c,e):n&&s(he,e)}),[U,Y,ue,Q,C]),(0,i.useEffect)((function(){ve(N)}),[C]),(0,i.useEffect)((function(){Z&&Z(me),C&&L(!1)}),[me]);var ke,we,Se,Ze,je=f.count,xe=f.isLoading,Ce=f.hasError,Le=!n&&(ke=B.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),d.filter((function(e){return ke.length>0?null==ke?void 0:ke.every((function(t){return"text"===t.type?e.noApiSortFilter[p.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[p.findIndex((function(e){return e.title===t.label}))-1].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),Ae=function(e){return e.sort((function(e,t){var n=w?Q.index-1:Q.index;return"number"==typeof(null==e?void 0:e.noApiSortFilter[n])?"asc"===Q.direction?(null==e?void 0:e.noApiSortFilter[n])-(null==t?void 0:t.noApiSortFilter[n]):(null==t?void 0:t.noApiSortFilter[n])-(null==e?void 0:e.noApiSortFilter[n]):"asc"===Q.direction?null==e?void 0:e.noApiSortFilter[n].localeCompare(null==t?void 0:t.noApiSortFilter[n],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[n].localeCompare(null==e?void 0:e.noApiSortFilter[n],void 0,{sensitivity:"base"})}))},De=n?0:null===(t=Ae(Le))||void 0===t?void 0:t.length,Fe=xe||Ce||(null==je?void 0:je.length)>0&&u.length>0,Ie=p.map((function(e){return{title:e.title,type:e.type,transforms:Fe?[]:e.sort?[oe.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),Re=n?d:d.length>0?Ae(Le).slice((ue-1)*Y,(ue-1)*Y+Y):d,Te=xe?function(e){return(0,a.Z)(Array(null!=S?S:e)).map((function(){return{cells:p.map((function(){return{title:l().createElement(b.O,{width:"100%"})}}))}}))}(Y):!(null!=Re&&Re.length)>0?(w=!1,[{heightAuto:!0,cells:[{props:{colSpan:8},title:l().createElement(ae.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:null!==(we=null==y?void 0:y.icon)&&void 0!==we?we:"search",title:null!==(Se=null==y?void 0:y.title)&&void 0!==Se?Se:"No match found",body:null!==(Ze=null==y?void 0:y.body)&&void 0!==Ze?Ze:"",secondaryActions:O?[]:[{title:"Clear all filters",onClick:function(){return M(re(u))}}]})}]}]):w?Re.map((function(e){return me.some((function(t){return t.id===e.rowInfo.id}))?ge(ge({},e),{},{selected:!0}):ge(ge({},e),{},{selected:!1})})):Re;return l().createElement(l().Fragment,null,l().createElement(X,{count:n?je:De,toolbarButtons:g,filters:u,filterValues:B,setFilterValues:M,chipsArray:U,setChipsArray:G,isLoading:xe,perPage:Y,setPerPage:te,page:ue,setPage:se,toggleButton:E,toggleAction:O,toggleState:P,kebabItems:x},!xe&&w?l().createElement(fe,{checkedRows:me,handleBulkSelect:function(){ve(d.map((function(e){return ge({},e.rowInfo)})))},handlePageSelect:function(){ve((function(e){var t=e.map((function(e){return e.id})),n=[];return Re.forEach((function(e){var r;r=e.rowInfo.id,t.includes(r)||n.push(ge({},e.rowInfo))})),[].concat((0,a.Z)(e),n)}))},handleNoneSelect:function(){ve([])},displayedRowsLength:Re.length}):null),l().createElement(oe.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"General Table Component",sortBy:w?ge(ge({},Q),{},{index:Q.index+1}):Q,onSort:function(e,t,n){W({index:t=w?t-1:t,direction:n})},actionResolver:m||null,areActionsDisabled:v,cells:Ie,rows:Te,onSelect:xe?null:w?function(e,t,n){ve((function(e){return t?[].concat((0,a.Z)(e),[ge({},Re[n].rowInfo)]):e.filter((function(e){return e.id!==Re[n].rowInfo.id}))}))}:F?function(e,t,n){var r=Te[n];I(r)}:void 0,canSelectAll:!1,selectVariant:F?"radio":w?"checkbox":""},l().createElement(oe.TableHeader,null),l().createElement(oe.TableBody,null)),l().createElement(ee,{isLoading:xe,count:n?je:De,setFilterValues:M,perPage:Y,setPerPage:te,page:ue,setPage:se,isFooterFixed:T}))};be.propTypes={apiFilterSort:v().bool,filters:v().array,urlParam:v().string,loadTableData:v().func,tableData:v().object,columnNames:v().array,rows:v().array,actionResolver:v().func,areActionsDisabled:v().func,defaultSort:v().object,toolbarButtons:v().array,toggleButton:v().array,toggleAction:v().func,toggleState:v().number,hasCheckbox:v().bool,skeletonRowQuantity:v().number,emptyFilterState:v().object,selectedItems:v().func,kebabItems:v().array,hasModalSubmitted:v().bool,setHasModalSubmitted:v().func,initSelectedItems:v().array,isUseApi:v().bool,hasToolbar:v().bool,hasRadio:v().bool,setRadioSelection:v().func,isFooterFixed:v().bool},be.defaultProps={hasModalSubmitted:!1,setHasModalSubmitted:function(){}};const me=be},98309:(e,t,n)=>{"use strict";n.d(t,{E5:()=>I,Ei:()=>Z,OE:()=>F,Op:()=>k,R8:()=>x,aN:()=>S,az:()=>C,bd:()=>A,iQ:()=>D,ml:()=>L,n:()=>w,vk:()=>j});var r=n(34143),o=n(68778),a=n(54340),i=n(43047),l=n(69957),c=n(53636),u=n(7081),s=n(17542),f=n(64915),p=n(80810),d=n(35453),g=n(15914),b=n(72781),m=n(94768),v=n(73479),h=n(12990),y=n(37655),E=n(4088),O=n(14206),P=n(29987),k=["done","error","pending","unknown","updating","warning","notification"],w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},S={"rhel-84":"RHEL 8.4","rhel-85":"RHEL 8.5","rhel-86":"RHEL 8.6","rhel-87":"RHEL 8.7","rhel-90":"RHEL 9.0","rhel-91":"RHEL 9.1"},Z={"rhel-91":"Red Hat Enterprise Linux (RHEL) 9.1","rhel-90":"Red Hat Enterprise Linux (RHEL) 9.0","rhel-87":"Red Hat Enterprise Linux (RHEL) 8.7","rhel-86":"Red Hat Enterprise Linux (RHEL) 8.6","rhel-85":"Red Hat Enterprise Linux (RHEL) 8.5","rhel-84":"Red Hat Enterprise Linux (RHEL) 8.4"},j=["rhel-84","rhel-85","rhel-86","rhel-87","rhel-90","rhel-91"],x=["rhel-91"],C="rhel-90",L="rhel-91",A={"rhel-edge-commit":"RHEL for Edge Commit (.tar)","rhel-edge-installer":"RHEL for Edge Installer (.iso)"},D={unknown:s.ZP,repository:f.ZP,search:p.ZP,module:d.ZP,cube:g.ZP,question:v.ZP,plus:u.ZP,checkCircle:o.ZP,exclamationTriangle:l.ZP,timesCircle:b.ZP,inProgress:m.ZP,exclamationCircle:i.ZP},F={green:E.Z.value,yellow:y.Z.value,lightBlue:O.Z.value,blue:P.Z.value,red:h.Z.value},I={done:{icon:o.ZP,color:E.Z.value,title:"Fully adopted"},error:{icon:i.ZP,color:h.Z.value,title:"Error while adopting"},pending:{icon:c.ZP,title:"Pending adoption"},updating:{icon:a.ZP,title:"Updating"},unknown:{icon:s.ZP,title:"Unknown state"},warning:{icon:l.ZP,color:y.Z.value,title:"Warning while adopting"},notification:{icon:r.ZP,color:O.Z.value,title:"Delivering"}}},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(4942),o=n(15861),a=n(29439),i=n(64687),l=n.n(i),c=n(83215),u=n(92950),s=n(86706);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=function(e){var t,n=e.api,r=e.id,i=void 0===r?null:r,f=e.statusMessages,d=e.tableReload,g=void 0!==d&&d,b=(0,s.I0)(),m=(0,u.useState)([]),v=(0,a.Z)(m,2),h=v[0],y=v[1],E=(0,u.useState)(!0),O=(0,a.Z)(E,2),P=O[0],k=O[1],w=(0,u.useState)(!1),S=(0,a.Z)(w,2),Z=S[0],j=S[1],x=null===(t=f)||void 0===t?void 0:t.onSuccess;f||(f={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var C=function(){var e=(0,o.Z)(l().mark((function e(){var t,r,o=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",k(!0),e.prev=2,e.next=5,n({id:i,query:t});case 5:r=e.sent,y(r),x&&b(p({},(0,c.wN)(p({variant:"success"},f.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),j(!0),b(p({},(0,c.wN)(p({variant:"danger"},f.onError))));case 14:return e.prev=14,k(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){g||C()}),[]),[{data:h,isLoading:P,hasError:Z},C]}},48903:(e,t,n)=>{"use strict";n.d(t,{Ff:()=>c,G0:()=>s,GF:()=>g,aS:()=>d,fz:()=>u,gV:()=>p,pS:()=>b,qg:()=>l,yb:()=>f});var r=n(29439),o=n(64124),a=n(6745),i=n(98309),l={type:o.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_\-\s]*$/,message:"Name must start with alphanumeric characters and can contain underscore and hyphen characters."},c=function(e,t){for(var n=e.split("/"),r={},o=1;o<n.length;o++)n[o]&&(r[t[o-1]]=n[o]);return r.buildUrl=function(){return Object.values(this).reduce((function(e,t){return"function"!=typeof t?"".concat(e,"/").concat(t):e}),"")},r},u=function(e,t,n){var r=[],o=n.length>0?n.includes("&")?n.split("?")[1].split("&"):n.split("?").slice(1):[];return t?(o.includes(e)||o.push(e),r=o):r=o.includes(e)?o.filter((function(t){return t!==e})):o,r.join("&")},s=function(e,t,n){return!0!==e&&!t>0&&!n.includes("has_filters=true")},f=function(e){var t=e.deviceData,n=e.imageData;return!((null==t?void 0:t.length)>0&&n)||(null==t?void 0:t.some((function(e){return e.imageSetId!==t[0].imageSetId})))},p=function(e){var t=(0,a.useFlagsStatus)().flagsReady,n=(0,a.useFlag)(e);return!!t&&n},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...";if(e.length<=t)return e;var o="".concat(e.substring(0,t)).concat(r).concat(e.substring(e.length-n,e.length));return o},g=function(e){var t=e.direction,n=e.name;return{sort_by:"asc"===t?n:"-".concat(n)}},b=function(e,t){return Object.entries(i.Ei).filter((function(n){var o=(0,r.Z)(n,1)[0];return(t||i.vk).includes(o)||o===e})).map((function(e){var t=(0,r.Z)(e,2);return{value:t[0],label:t[1]}}))}},27561:(e,t,n)=>{var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},67990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:(e,t,n)=>{var r=n(13218),o=n(7771),a=n(14841),i=Math.max,l=Math.min;e.exports=function(e,t,n){var c,u,s,f,p,d,g=0,b=!1,m=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=c,r=u;return c=u=void 0,g=t,f=e.apply(r,n)}function y(e){return g=e,p=setTimeout(O,t),b?h(e):f}function E(e){var n=e-d;return void 0===d||n>=t||n<0||m&&e-g>=s}function O(){var e=o();if(E(e))return P(e);p=setTimeout(O,function(e){var n=t-(e-d);return m?l(n,s-(e-g)):n}(e))}function P(e){return p=void 0,v&&c?h(e):(c=u=void 0,f)}function k(){var e=o(),n=E(e);if(c=arguments,u=this,d=e,n){if(void 0===p)return y(d);if(m)return clearTimeout(p),p=setTimeout(O,t),h(d)}return void 0===p&&(p=setTimeout(O,t)),f}return t=a(t)||0,r(n)&&(b=!!n.leading,s=(m="maxWait"in n)?i(a(n.maxWait)||0,t):s,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==p&&clearTimeout(p),g=0,c=d=u=p=void 0},k.flush=function(){return void 0===p?f:P(o())},k}},7739:(e,t,n)=>{var r=n(89465),o=n(55189),a=Object.prototype.hasOwnProperty,i=o((function(e,t,n){a.call(e,n)?e[n].push(t):r(e,n,[t])}));e.exports=i},7771:(e,t,n)=>{var r=n(55639);e.exports=function(){return r.Date.now()}},14841:(e,t,n)=>{var r=n(27561),o=n(13218),a=n(33448),i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}},32857:()=>{},93818:()=>{},94498:()=>{},28992:()=>{},30187:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},93398:()=>{},46928:()=>{},1508:()=>{},36974:()=>{},53336:()=>{},22143:()=>{},314:()=>{},97853:()=>{},97236:()=>{},59199:(e,t,n)=>{"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},93433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(30907),o=n(59199),a=n(40181);function i(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/7808.6affb5eb3f909d1c2ff749675a35a5fc.js.map
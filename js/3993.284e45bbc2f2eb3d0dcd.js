(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[3993],{66702:(e,t,n)=>{"use strict";n.d(t,{$3:()=>u,$J:()=>c,DO:()=>l,Ds:()=>i,E7:()=>s,Vs:()=>p});var r=n(71002),a=n(77460),o=n(68004),l="/api/image-builder/v1",i="/api/edge/v1",c="/api/content-sources/v1",u="/api/inventory/v1",s=new o.HostsApi(void 0,u,a.ZP),p=function(e){return void 0===e?"":Object.keys(e).reduce((function(t,n){var a=void 0;return"object"===(0,r.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(a=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,r.Z)(e[n]))&&""!==e[n]&&(a="".concat(n,"=").concat(e[n])),void 0===a?t:""===t?"".concat(a):"".concat(t,"&").concat(a)}),"")}},3035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(92950),a=n.n(r),o=n(38779),l=n(47173),i=n(9947),c=n(38424),u=n(75106),s=n(35293),p=n(49739),f=n(83826),d=n(15265),g=n(45697),b=n.n(g),m=n(48903),h=n(98309),v=function(e){var t=e.bgColor,n=e.icon,r=e.title,g=e.body,b=e.primaryAction,v=e.secondaryActions,y=e.target;return a().createElement(i.u,{variant:"large",style:{backgroundColor:t||""}},n&&a().createElement(c.k,{icon:h.iQ[n]}),a().createElement(o.D,{headingLevel:"h4",size:"lg"},r),a().createElement(u.B,null,Array.isArray(g)?g.map((function(e,t){return a().createElement("div",{key:t},e,a().createElement("br",null),a().createElement("br",null))})):g),b&&a().createElement(a().Fragment,null,b.href?(0,m.EW)({pathname:"".concat(b.href),linkText:b.text,target:y}):a().createElement(l.zx,{variant:"primary",onClick:b.click},b.text)),a().createElement(s.i,null,a().createElement(p.K,null,v.map((function(e,t){var n=e.type,r=e.title,o=e.link,i=e.onClick,c=e.variant,u=e.className;return a().createElement(f.v,{key:t},a().createElement(l.zx,{component:"link"===n?"a":"button",className:u,href:o,variant:c||"link",target:"link"===n?"_blank":"",key:t,onClick:i},r,o&&a().createElement(d.ZP,{className:"pf-u-ml-sm"})))})))))};v.propTypes={bgColor:b().string,icon:b().string,title:b().string,body:b().string,primaryAction:b().object,secondaryActions:b().array,target:b().string},v.defaultProps={secondaryActions:[]};const y=v},73448:(e,t,n)=>{"use strict";n.d(t,{Z:()=>he});var r=n(29439),a=n(4942),o=n(93433),l=n(92950),i=n.n(l),c=n(84812),u=n(44733),s=n(1595),p=n(78919),f=n(47173),d=n(13115),g=n(57980),b=n(50383),m=n(45697),h=n.n(m),v=n(54680),y=n(92694),E=n(76889);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.filters,n=e.dropdown,r=e.setDropdown;return i().createElement(i().Fragment,null,t.length>1?i().createElement(s.E,{"data-testid":"filter-dropdown-testid",className:"pf-u-mr-0"},i().createElement(v.P,{variant:"single","aria-label":"Select input for filters",width:"11rem",onToggle:function(){r((function(e){return P(P({},e),{},{isOpen:!e.isOpen})}))},onSelect:function(e,t){r({selected:t,isOpen:!1})},selections:n.selected,isOpen:n.isOpen,toggleIcon:i().createElement(E.ZP,null)},t.map((function(e,t){return i().createElement(y.$,{key:t,value:e.label})})))):null)};O.propTypes={filters:h().array,dropdown:h().object,setDropdown:h().func};const w=O;var S=n(23279),Z=n.n(S),x=n(65802),j=n(98490);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.filterValues,n=e.setFilterValues,c=e.input,u=t.find((function(e){return e.label===c})),p=(0,l.useState)(!1),f=(0,r.Z)(p,2),d=f[0],g=f[1],b=function(){return function(e,t){n((function(n){var r,o=n.findIndex((function(e){return e.label===u.label})),l=n.find((function(e){return e.label===u.label})),i="checkbox"===u.type?l.value.findIndex((function(e){return e.option===t})):0,c=Object.values(L(L({},l.value),{},(0,a.Z)({},i,L(L({},l.value[i]),{},{isChecked:!(null!=l&&null!==(r=l.value[i])&&void 0!==r&&r.isChecked)})))),s=e;return Object.values(L(L({},n),{},(0,a.Z)({},o,L(L({},n[o]),{},{value:"checkbox"===u.type?c:s}))))}))}};return"text"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(x.B,null,i().createElement(j.M,{name:"textInput1",id:"textInput1",type:"search","aria-label":"Select input for ".concat(u.label.toLowerCase()),placeholder:"Filter by ".concat(u.label.toLowerCase()),onChange:Z()(b(),500),onClear:function(){var e=t.findIndex((function(e){return"text"===e.type}));n((function(t){return"text"===t[e].type?[].concat((0,o.Z)(t.slice(0,e)),[L(L({},t[e]),{},{value:""})],(0,o.Z)(t.slice(e+1,t.length))):t}))},value:t.find((function(e){return"text"===e.type})).value}))):"checkbox"===u.type?i().createElement(s.E,{"data-testid":"filter-input-testid"},i().createElement(x.B,null,i().createElement(v.P,{variant:"checkbox","aria-label":"Select input for ".concat(u.label.toLowerCase()),width:"11rem",placeholderText:"Filter by ".concat(u.label.toLowerCase()),isCheckboxSelectionBadgeHidden:!0,onToggle:function(){return g((function(e){return!e}))},onSelect:b(),selections:u.value.filter((function(e){return 1==e.isChecked})).map((function(e){return e.option})),isOpen:d},u.value.map((function(e,t){return i().createElement(y.$,{key:t,value:e.option,isChecked:e.isChecked})}))))):void 0};A.propTypes={filterValues:h().array,setFilterValues:h().func,input:h().string};const F=A;var D=function(e){var t=e.filters,n=e.filterValues,a=e.setFilterValues,o=e.children,c=(0,l.useState)({isOpen:!1,selected:t[0].label}),u=(0,r.Z)(c,2),s=u[0],p=u[1];return i().createElement(i().Fragment,null,o,i().createElement(w,{dropdown:s,setDropdown:p,filters:t}),i().createElement(F,{filterValues:n,setFilterValues:a,input:s.selected}))};D.propTypes={filters:h().array,filterValues:h().array,setFilterValues:h().func,children:h().element};const R=D;var I=n(7739),H=n.n(I),T=n(21039),V=n(71710);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.filterValues,n=e.setFilterValues,a=e.chipsArray,c=e.setChipsArray,u=e.setPage;return(0,l.useEffect)((function(){t.forEach((function(e){if("checkbox"===e.type&&e.value.forEach((function(t){!0!==t.isChecked||a.find((function(e){return e.label===t.option}))?!1===t.isChecked&&a.find((function(e){return e.label===t.option}))&&c((function(e){var n=e.findIndex((function(e){return e.label===t.option}));return[].concat((0,o.Z)(e.slice(0,n)),(0,o.Z)(e.slice(n+1,e.length)))})):c((function(n){return[].concat((0,o.Z)(n),[{label:t.option,value:t.value||t.option,apiName:t.optionApiName,key:e.label}])}))})),"text"===e.type&&e.value.length>0){var t={label:e.value,key:e.label};a.find((function(t){return t.key===e.label}))?c((function(n){return n.map((function(n){return n.key===e.label?t:n}))})):c((function(e){return[].concat((0,o.Z)(e),[t])}))}else"text"===e.type&&a.find((function(t){return t.key===e.label}))&&c((function(t){var n=t.findIndex((function(t){return t.key===e.label}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))}))})),u(1)}),[t]),i().createElement(i().Fragment,null,a.length>0?Object.entries(H()(a,"key")).map((function(e){var a=(0,r.Z)(e,2),l=a[0],u=a[1];return i().createElement(T.Z,{"data-testid":"filter-chip",className:"pf-u-mr-xs",categoryName:l,key:l},u.map((function(e){return i().createElement(V.A,{onClick:function(){return function(e){var r=t.findIndex((function(t){return t.label===e.key}));n((function(t){var n=t[r];if("text"===n.type)return[].concat((0,o.Z)(t.slice(0,r)),[B(B({},t[r]),{},{value:""})],(0,o.Z)(t.slice(r+1,t.length)));if("checkbox"===n.type){var a=n.value.map((function(t){return t.option===e.label?B(B({},t),{},{isChecked:!1}):t}));return c((function(t){var n=t.findIndex((function(t){return t===e}));return[].concat((0,o.Z)(t.slice(0,n)),(0,o.Z)(t.slice(n+1,t.length)))})),[].concat((0,o.Z)(t.slice(0,r)),[B(B({},t[r]),{},{value:a})],(0,o.Z)(t.slice(r+1,t.length)))}return t}))}(e)},key:l},e.label)})))})):null,a.length>0?i().createElement(f.zx,{variant:"link",onClick:function(){n((function(e){return e.map((function(e){if("text"===e.type)return B(B({},e),{},{value:""});if("checkbox"===e.type){var t=e.value.map((function(e){return e.isChecked=!1,B(B({},e),{},{isChecked:!1})}));return B(B({},e),{},{value:t})}}))})),c([])}},"Clear filters"):null)};z.propTypes={filterValues:h().array,setFilterValues:h().func,chipsArray:h().array,setChipsArray:h().func,setPage:h().func};const _=z;var M=n(56787),G=n(84457),U=n(94024),$=function(e){var t=e.kebabItems,n=(0,l.useState)(!1),a=(0,r.Z)(n,2),o=a[0],c=a[1],u=t.map((function(e,t){var n=e.title,r=e.isDisabled,a=e.onClick;return i().createElement(G.h,{key:t,onClick:a||function(){},isDisabled:r},n)}));return i().createElement(s.E,null,i().createElement(M.L,{toggle:i().createElement(U.a,{"aria-label":"Actions for selected table items",onToggle:function(){return c((function(e){return!e}))}}),isOpen:o,isPlain:!0,dropdownItems:u}))};$.propTypes={kebabItems:h().array};const Q=$;var W=function(e){return e.buttons.map((function(e,t){var n=e.title,r=e.click,a=e.isDisabled,o=e.id;return i().createElement(s.E,{key:t},i().createElement(f.zx,{onClick:r,variant:"primary",isDisabled:a,id:o},n))}))},q=function(e){var t=e.toolbarButtons,n=e.filters,r=e.setFilterValues,a=e.filterValues,o=e.chipsArray,l=e.setChipsArray,f=e.isLoading,m=e.count,h=e.perPage,v=e.setPerPage,y=e.page,E=e.setPage,k=e.toggleButton,P=e.toggleAction,O=e.toggleState,w=e.children,S=e.kebabItems;return i().createElement(c.o,{style:{padding:"0"},id:"toolbar-header","data-testid":"toolbar-header-testid"},i().createElement(p.c,null,i().createElement(R,{filters:n,filterValues:a,setFilterValues:r},w),t&&i().createElement(W,{buttons:t}),k&&i().createElement(d.t,null,k.map((function(e){return i().createElement(g.G,{key:e.key,text:e.title,isSelected:O===e.key,onChange:function(){return P(e.key)}})}))),S&&i().createElement(Q,{kebabItems:S}),i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},f?i().createElement(b.O,{width:"200px"}):m>0?i().createElement(u.t,{"data-testid":"pagination-header-test-id",itemCount:m,perPage:h,page:y,onSetPage:function(e,t){return E(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return v(t)},isCompact:!0}):null)),i().createElement(p.c,null,i().createElement(s.E,{variant:"chip-group",spacer:{default:"spacerNone"}},i().createElement(_,{filterValues:a,setFilterValues:r,chipsArray:o,setChipsArray:l,setPage:E}))))};q.propTypes={filters:h().array,toolbarButtons:h().array,setFilterValues:h().func,filterValues:h().array,input:h().string,count:h().number,perPage:h().number,setPerPage:h().func,page:h().number,setPage:h().func,chipsArray:h().array,setChipsArray:h().func,isLoading:h().bool,toggleButton:h().array,toggleAction:h().func,toggleState:h().number,children:h().element,kebabItems:h().array};const J=q;function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){var t=e.isLoading,n=e.count,r=e.perPage,a=e.setPerPage,o=e.page,l=e.setPage,f={padding:"20px"};return e.isFixed&&(f=X(X({},f),{},{paddingBottom:"30px",paddingTop:"20px"})),i().createElement(c.o,{style:f,id:"toolbar-footer"},i().createElement(p.c,null,i().createElement(s.E,{variant:"pagination",align:{default:"alignRight"}},t?i().createElement(b.O,{width:"400px"}):n>0?i().createElement(u.t,{"data-testid":"pagination-footer-test-id",itemCount:n,perPage:r,page:o,onSetPage:function(e,t){return l(t)},widgetId:"pagination-options-menu-top",onPerPageSelect:function(e,t){return a(t)}}):null)))};Y.propTypes={isLoading:h().bool,count:h().number,perPage:h().number,setPerPage:h().func,page:h().number,setPage:h().func,isFixed:h().bool};const ee=Y;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const re=function(e){return e.map((function(e){var t={type:e.type,label:e.label};return"text"===e.type&&(t.value=e.value||""),"checkbox"===e.type&&(t.value=e.options.map((function(e,t){return ne(ne({},e),{},{id:"option"+t,isChecked:e.isChecked||!1})}))),t}))};var ae=n(34766),oe=n(3035),le=n(77760),ie=n(48903),ce=n(75728),ue=n(9571),se=function(e){var t=e.checkedRows,n=e.handleBulkSelect,a=e.handlePageSelect,o=e.handleNoneSelect,c=e.displayedRowsLength,u=t.length===c,p=t.length>0&&null,f=(0,l.useState)(!1),d=(0,r.Z)(f,2),g=d[0],b=d[1];return i().createElement(i().Fragment,null,i().createElement(s.E,{variant:"bulk-select"},i().createElement(M.L,{toggle:i().createElement(ce.Z,{id:"stacked-example-toggle",splitButtonItems:[i().createElement(ue.o,{id:"example-checkbox-2",key:"split-checkbox","aria-label":"Select all",isChecked:!!u||p,onChange:u?o:a},t.length>0&&"".concat(t.length," selected"))],onToggle:function(){return b((function(e){return!e}))}}),isOpen:g,dropdownItems:[i().createElement(G.h,{key:"all",onClick:n},"Select all"),i().createElement(G.h,{key:"page",onClick:a,isDisabled:u},"Select page"),i().createElement(G.h,{key:"none",onClick:o,isDisabled:0===t.length},"Select none")]})))};se.propTypes={checkedRows:h().array,handleBulkSelect:h().func,handleNoneSelect:h().func,handlePageSelect:h().func,displayedRowsLength:h().number};const pe=se;var fe=n(68519),de=n(5513);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t,n=e.historyProp,c=e.locationProp,u=e.navigateProp,s=e.apiFilterSort,p=e.urlParam,f=e.filters,d=e.loadTableData,g=e.tableData,m=e.columnNames,h=e.rows,v=e.toolbarButtons,y=e.actionResolver,E=e.areActionsDisabled,k=e.defaultSort,P=e.emptyFilterState,O=e.toggleButton,w=e.toggleAction,S=e.toggleState,Z=e.hasCheckbox,x=void 0!==Z&&Z,j=e.skeletonRowQuantity,C=e.selectedItems,L=e.initSelectedItems,A=e.kebabItems,F=e.hasModalSubmitted,D=e.setHasModalSubmitted,R=e.isUseApi,I=e.hasRadio,H=void 0!==I&&I,T=e.setRadioSelection,V=e.isFooterFixed,N=void 0!==V&&V,B=L||[],z=(0,l.useState)(re(f)),_=(0,r.Z)(z,2),M=_[0],G=_[1],U=(0,l.useState)([]),$=(0,r.Z)(U,2),Q=$[0],W=$[1],q=(0,l.useState)(k),K=(0,r.Z)(q,2),X=K[0],Y=K[1],te=(0,l.useState)(20),ne=(0,r.Z)(te,2),ce=ne[0],ue=ne[1],se=(0,l.useState)(1),ge=(0,r.Z)(se,2),me=ge[0],he=ge[1],ve=(0,l.useState)(B),ye=(0,r.Z)(ve,2),Ee=ye[0],ke=ye[1],Pe=(0,le.useDispatch)(),Oe=n?n():fe.k6?(0,fe.k6)():null,we=u?u():de.useNavigate?(0,de.useNavigate)():null,Se=c?c():(0,fe.TH)(),Ze=Se.pathname,xe=Se.search;(0,l.useEffect)((function(){if(!xe.includes("create_image=true")&&!xe.includes("update_image=true")){var e={pathname:Ze,search:(0,ie.fz)("has_filters=true",Q.length>0,xe)};u?we(be(be({},e),{},{replace:!0})):Oe.replace(e)}var t=s?be(be({},function(e){return e.length>0?e.reduce((function(e,t){if(e[t.key.toLowerCase()]){var n="string"==typeof e[t.key.toLowerCase()]?[e[t.key.toLowerCase()]]:(0,o.Z)(e[t.key.toLowerCase()]);return be(be({},e),{},(0,a.Z)({},t.key.toLowerCase(),[].concat((0,o.Z)(n),[t.apiName?t.apiName:t.value])))}return be(be({},e),{},(0,a.Z)({},t.key.toLowerCase(),t.apiName?t.apiName:t.value||t.label))}),{}):{}}(Q)),{},{limit:ce,offset:(me-1)*ce},(0,ie.GF)({direction:X.direction,name:Ne[X.index].type})):null;"updateAvailable"===(null==t?void 0:t.status)&&(delete t.status,t.update_available="true"),t&&"updateAvailable"===t["image status"]&&(delete t["image status"],t.update_available="true"),R?d(t):s&&p?d(Pe,p,t):s&&d(Pe,t)}),[Q,ce,me,X,F]),(0,l.useEffect)((function(){ke(B)}),[F]),(0,l.useEffect)((function(){C&&C(Ee),F&&D(!1)}),[Ee]);var je,Ce,Le,Ae,Fe=g.count,De=g.isLoading,Re=g.hasError,Ie=!s&&(je=M.filter((function(e){return"text"===(null==e?void 0:e.type)&&""!==(null==e?void 0:e.value)||"checkbox"===(null==e?void 0:e.type)&&(null==e?void 0:e.value.find((function(e){return e.isChecked})))})),h.filter((function(e){return je.length>0?null==je?void 0:je.every((function(t){return"text"===t.type?e.noApiSortFilter[m.findIndex((function(e){return e.title===t.label}))].toLowerCase().includes(t.value.toLowerCase()):"checkbox"===t.type?t.value.some((function(n){return n.isChecked&&e.noApiSortFilter[m.findIndex((function(e){return e.title===t.label}))-1].toLowerCase()===n.value.toLowerCase()})):void 0})):e}))),He=function(e){return e.sort((function(e,t){var n=x?X.index-1:X.index;return"number"==typeof(null==e?void 0:e.noApiSortFilter[n])?"asc"===X.direction?(null==e?void 0:e.noApiSortFilter[n])-(null==t?void 0:t.noApiSortFilter[n]):(null==t?void 0:t.noApiSortFilter[n])-(null==e?void 0:e.noApiSortFilter[n]):"asc"===X.direction?null==e?void 0:e.noApiSortFilter[n].localeCompare(null==t?void 0:t.noApiSortFilter[n],void 0,{sensitivity:"base"}):null==t?void 0:t.noApiSortFilter[n].localeCompare(null==e?void 0:e.noApiSortFilter[n],void 0,{sensitivity:"base"})}))},Te=s?0:null===(t=He(Ie))||void 0===t?void 0:t.length,Ve=De||Re||(null==Fe?void 0:Fe.length)>0&&f.length>0,Ne=m.map((function(e){return{title:e.title,type:e.type,transforms:Ve?[]:e.sort?[ae.sortable]:[],columnTransforms:e.columnTransforms?e.columnTransforms:[]}})),Be=s?h:h.length>0?He(Ie).slice((me-1)*ce,(me-1)*ce+ce):h,ze=De?function(e){return(0,o.Z)(Array(null!=j?j:e)).map((function(){return{cells:m.map((function(){return{title:i().createElement(b.O,{width:"100%"})}}))}}))}(ce):!(null!=Be&&Be.length)>0?(x=!1,[{heightAuto:!0,cells:[{props:{colSpan:8},title:i().createElement(oe.Z,{"data-testid":"general-table-empty-state-no-match",bgColor:"white",icon:null!==(Ce=null==P?void 0:P.icon)&&void 0!==Ce?Ce:"search",title:null!==(Le=null==P?void 0:P.title)&&void 0!==Le?Le:"No match found",body:null!==(Ae=null==P?void 0:P.body)&&void 0!==Ae?Ae:"",secondaryActions:w?[]:[{title:"Clear all filters",onClick:function(){return G(re(f))}}]})}]}]):x?Be.map((function(e){return Ee.some((function(t){return t.id===e.rowInfo.id}))?be(be({},e),{},{selected:!0}):be(be({},e),{},{selected:!1})})):Be;return i().createElement(i().Fragment,null,i().createElement(J,{count:s?Fe:Te,toolbarButtons:v,filters:f,filterValues:M,setFilterValues:G,chipsArray:Q,setChipsArray:W,isLoading:De,perPage:ce,setPerPage:ue,page:me,setPage:he,toggleButton:O,toggleAction:w,toggleState:S,kebabItems:A},!De&&x?i().createElement(pe,{checkedRows:Ee,handleBulkSelect:function(){ke(h.map((function(e){return be({},e.rowInfo)})))},handlePageSelect:function(){ke((function(e){var t=e.map((function(e){return e.id})),n=[];return Be.forEach((function(e){var r;r=e.rowInfo.id,t.includes(r)||n.push(be({},e.rowInfo))})),[].concat((0,o.Z)(e),n)}))},handleNoneSelect:function(){ke([])},displayedRowsLength:Be.length}):null),i().createElement(ae.Table,{"data-testid":"general-table-testid",variant:"compact","aria-label":"General Table Component",sortBy:x?be(be({},X),{},{index:X.index+1}):X,onSort:function(e,t,n){Y({index:t=x?t-1:t,direction:n})},actionResolver:y||null,areActionsDisabled:E,cells:Ne,rows:ze,onSelect:De?null:x?function(e,t,n){ke((function(e){return t?[].concat((0,o.Z)(e),[be({},Be[n].rowInfo)]):e.filter((function(e){return e.id!==Be[n].rowInfo.id}))}))}:H?function(e,t,n){var r=ze[n];T(r)}:void 0,canSelectAll:!1,selectVariant:H?"radio":x?"checkbox":""},i().createElement(ae.TableHeader,null),i().createElement(ae.TableBody,null)),i().createElement(ee,{isLoading:De,count:s?Fe:Te,setFilterValues:G,perPage:ce,setPerPage:ue,page:me,setPage:he,isFooterFixed:N}))};me.propTypes={historyProp:h().func,locationProp:h().func,navigateProp:h().func,apiFilterSort:h().bool,filters:h().array,urlParam:h().string,loadTableData:h().func,tableData:h().object,columnNames:h().array,rows:h().array,actionResolver:h().func,areActionsDisabled:h().func,defaultSort:h().object,toolbarButtons:h().array,toggleButton:h().array,toggleAction:h().func,toggleState:h().number,hasCheckbox:h().bool,skeletonRowQuantity:h().number,emptyFilterState:h().object,selectedItems:h().func,kebabItems:h().array,hasModalSubmitted:h().bool,setHasModalSubmitted:h().func,initSelectedItems:h().array,isUseApi:h().bool,hasToolbar:h().bool,hasRadio:h().bool,setRadioSelection:h().func,isFooterFixed:h().bool},me.defaultProps={hasModalSubmitted:!1,setHasModalSubmitted:function(){}};const he=me},98309:(e,t,n)=>{"use strict";n.d(t,{E5:()=>R,Ei:()=>Z,OE:()=>D,Op:()=>O,R8:()=>j,aN:()=>S,az:()=>C,bd:()=>A,iQ:()=>F,ml:()=>L,n:()=>w,vk:()=>x});var r=n(34143),a=n(68778),o=n(54340),l=n(43047),i=n(69957),c=n(53636),u=n(7081),s=n(17542),p=n(64915),f=n(80810),d=n(35453),g=n(15914),b=n(72781),m=n(94768),h=n(73479),v=n(12990),y=n(37655),E=n(4088),k=n(14206),P=n(29987),O=["done","error","pending","unknown","updating","warning","notification"],w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},S={"rhel-84":"RHEL 8.4","rhel-85":"RHEL 8.5","rhel-86":"RHEL 8.6","rhel-87":"RHEL 8.7","rhel-88":"RHEL 8.8","rhel-90":"RHEL 9.0","rhel-91":"RHEL 9.1","rhel-92":"RHEL 9.2"},Z={"rhel-92":"Red Hat Enterprise Linux (RHEL) 9.2","rhel-91":"Red Hat Enterprise Linux (RHEL) 9.1","rhel-90":"Red Hat Enterprise Linux (RHEL) 9.0","rhel-88":"Red Hat Enterprise Linux (RHEL) 8.8","rhel-87":"Red Hat Enterprise Linux (RHEL) 8.7","rhel-86":"Red Hat Enterprise Linux (RHEL) 8.6","rhel-85":"Red Hat Enterprise Linux (RHEL) 8.5","rhel-84":"Red Hat Enterprise Linux (RHEL) 8.4"},x=["rhel-84","rhel-85","rhel-86","rhel-87","rhel-88","rhel-90","rhel-91","rhel-92"],j=["rhel-92"],C="rhel-92",L="rhel-92",A={"rhel-edge-commit":"RHEL for Edge Commit (.tar)","rhel-edge-installer":"RHEL for Edge Installer (.iso)"},F={unknown:s.ZP,repository:p.ZP,search:f.ZP,module:d.ZP,cube:g.ZP,question:h.ZP,plus:u.ZP,checkCircle:a.ZP,exclamationTriangle:i.ZP,timesCircle:b.ZP,inProgress:m.ZP,exclamationCircle:l.ZP},D={green:E.Z.value,yellow:y.Z.value,lightBlue:k.Z.value,blue:P.Z.value,red:v.Z.value},R={done:{icon:a.ZP,color:E.Z.value,title:"Fully adopted"},error:{icon:l.ZP,color:v.Z.value,title:"Error while adopting"},pending:{icon:c.ZP,title:"Pending adoption"},updating:{icon:o.ZP,title:"Updating"},unknown:{icon:s.ZP,title:"Unknown state"},warning:{icon:i.ZP,color:y.Z.value,title:"Warning while adopting"},notification:{icon:r.ZP,color:k.Z.value,title:"Delivering"}}},48903:(e,t,n)=>{"use strict";n.d(t,{EW:()=>w,Ff:()=>m,G0:()=>v,GF:()=>P,a6:()=>Z,aS:()=>k,fz:()=>h,gV:()=>E,pS:()=>O,qg:()=>b,yb:()=>y});var r=n(15861),a=n(29439),o=n(64687),l=n.n(o),i=n(64124),c=n(6745),u=n(98309),s=n(92950),p=n.n(s),f=n(47173),d=n(31750),g=n(66702),b={type:i.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_\-\s]*$/,message:"Name must start with alphanumeric characters and can contain underscore and hyphen characters."},m=function(e,t){for(var n=e.split("/"),r={},a=1;a<n.length;a++)n[a]&&(r[t[a-1]]=n[a]);return r.buildUrl=function(){return Object.values(this).reduce((function(e,t){return"function"!=typeof t?"".concat(e,"/").concat(t):e}),"")},r},h=function(e,t,n){var r=[],a=n.length>0?n.includes("&")?n.split("?")[1].split("&"):n.split("?").slice(1):[];return t?(a.includes(e)||a.push(e),r=a):r=a.includes(e)?a.filter((function(t){return t!==e})):a,r.join("&")},v=function(e,t,n){return!0!==e&&!t>0&&!n.includes("has_filters=true")},y=function(e){var t=e.deviceData,n=e.imageData;return!((null==t?void 0:t.length)>0&&n)||(null==t?void 0:t.some((function(e){return e.imageSetId!==t[0].imageSetId})))},E=function(e){var t=(0,c.useFlagsStatus)().flagsReady,n=(0,c.useFlag)(e);return!!t&&n},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...";if(e.length<=t)return e;var a="".concat(e.substring(0,t)).concat(r).concat(e.substring(e.length-n,e.length));return a},P=function(e){var t=e.direction,n=e.name;return{sort_by:"asc"===t?n:"-".concat(n)}},O=function(e,t){return Object.entries(u.Ei).filter((function(n){var r=(0,a.Z)(n,1)[0];return(t||u.vk).includes(r)||r===e})).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}}))},w=function(e){var t=e.pathname,n=e.linkText,r=e.target;return p().createElement(f.zx,{component:"a",target:r,variant:"link","target-href":t,href:t},n)},S=function(){var e=(0,r.Z)(l().mark((function e(t){var n,r,a=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:2,e.next=3,(0,d.Z)(t,{concurrency:n});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=[],r=0;r<e.length;r+=t){var a=void 0;a=e.slice(r,r+t),n.push(a)}var o=S(n.map((function(e){return function(){return g.E7.apiHostDeleteHostById(e)}})));return o}},32857:()=>{},93818:()=>{},94498:()=>{},28992:()=>{},30187:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},93398:()=>{},46928:()=>{},1508:()=>{},36974:()=>{},53336:()=>{},22143:()=>{},314:()=>{},97853:()=>{},97236:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3993.92e674caecfecc2371cda03603755c03.js.map
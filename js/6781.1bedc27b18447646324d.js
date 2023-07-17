/*! For license information please see 6781.1bedc27b18447646324d.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[6781],{5436:(e,t,n)=>{"use strict";n.d(t,{Jd:()=>r,dy:()=>s,rf:()=>c});var r,a=n(70655),i=n(92950),l=n(13302),o=n(38296);!function(e){e.default="default",e.light200="light-200"}(r||(r={}));const c=i.createContext({isExpanded:!1,isStatic:!1,onExpand:()=>{},position:"right",drawerRef:null,drawerContentRef:null,isInline:!1}),s=e=>{var{className:t="",children:n,isExpanded:r=!1,isInline:s=!1,isStatic:d=!1,position:u="right",onExpand:p=(()=>{})}=e,m=(0,a.__rest)(e,["className","children","isExpanded","isInline","isStatic","position","onExpand"]);const f=i.useRef(),h=i.useRef();return i.createElement(c.Provider,{value:{isExpanded:r,isStatic:d,onExpand:p,position:u,drawerRef:f,drawerContentRef:h,isInline:s}},i.createElement("div",Object.assign({className:(0,o.i)(l.Z.drawer,r&&l.Z.modifiers.expanded,s&&l.Z.modifiers.inline,d&&l.Z.modifiers.static,"left"===u&&l.Z.modifiers.panelLeft,"bottom"===u&&l.Z.modifiers.panelBottom,t),ref:f},m),n))};s.displayName="Drawer"},34241:(e,t,n)=>{"use strict";n.d(t,{s:()=>s});var r=n(70655),a=n(92950),i=n(13302),l=n(38296);const o=e=>{var{className:t="",children:n}=e,o=(0,r.__rest)(e,["className","children"]);return a.createElement("div",Object.assign({className:(0,l.i)(i.Z.drawerMain,t)},o),n)};o.displayName="DrawerMain";var c=n(5436);const s=e=>{var{className:t="",children:n,panelContent:s,colorVariant:d=c.Jd.default}=e,u=(0,r.__rest)(e,["className","children","panelContent","colorVariant"]);const{drawerContentRef:p}=a.useContext(c.rf);return a.createElement(o,null,a.createElement("div",Object.assign({className:(0,l.i)(i.Z.drawerContent,d===c.Jd.light200&&i.Z.modifiers.light_200,t),ref:p},u),n),s)};s.displayName="DrawerContent"},68340:(e,t,n)=>{"use strict";n.d(t,{q:()=>r,x:()=>s});var r,a=n(70655),i=n(92950),l=n(38296),o=n(62873),c=n(62472);!function(e){e.h1="h1",e.h2="h2",e.h3="h3",e.h4="h4",e.h5="h5",e.h6="h6",e.p="p",e.a="a",e.small="small",e.blockquote="blockquote",e.pre="pre"}(r||(r={}));const s=e=>{var{children:t=null,className:n="",component:d=r.p,isVisitedLink:u=!1,ouiaId:p,ouiaSafe:m=!0}=e,f=(0,a.__rest)(e,["children","className","component","isVisitedLink","ouiaId","ouiaSafe"]);const h=d,v=(0,c.S$)(s.displayName,p,m);return i.createElement(h,Object.assign({},v,f,{"data-pf-content":!0,className:(0,l.i)(u&&d===r.a&&o.Z.modifiers.visited,n)}),t)};s.displayName="Text"},68774:(e,t,n)=>{"use strict";n.d(t,{D:()=>o});var r=n(70655),a=n(92950),i=n(62873),l=n(38296);const o=e=>{var{children:t=null,className:n="",isVisited:o=!1}=e,c=(0,r.__rest)(e,["children","className","isVisited"]);return a.createElement("div",Object.assign({},c,{className:(0,l.i)(i.Z.content,o&&i.Z.modifiers.visited,n)}),t)};o.displayName="TextContent"},62873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(10108);const r={content:"pf-c-content",modifiers:{visited:"pf-m-visited",overpassFont:"pf-m-overpass-font"}}},13302:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),n(80897);const r={drawer:"pf-c-drawer",drawerActions:"pf-c-drawer__actions",drawerBody:"pf-c-drawer__body",drawerClose:"pf-c-drawer__close",drawerContent:"pf-c-drawer__content",drawerHead:"pf-c-drawer__head",drawerMain:"pf-c-drawer__main",drawerPanel:"pf-c-drawer__panel",drawerPanelMain:"pf-c-drawer__panel-main",drawerSection:"pf-c-drawer__section",drawerSplitter:"pf-c-drawer__splitter",drawerSplitterHandle:"pf-c-drawer__splitter-handle",modifiers:{panelBottom:"pf-m-panel-bottom",inline:"pf-m-inline",noBorder:"pf-m-no-border",resizable:"pf-m-resizable",static:"pf-m-static",panelLeft:"pf-m-panel-left",expanded:"pf-m-expanded",resizing:"pf-m-resizing",noBackground:"pf-m-no-background",light_200:"pf-m-light-200",noPadding:"pf-m-no-padding",padding:"pf-m-padding",vertical:"pf-m-vertical",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",width_100:"pf-m-width-100",width_25OnLg:"pf-m-width-25-on-lg",width_33OnLg:"pf-m-width-33-on-lg",width_50OnLg:"pf-m-width-50-on-lg",width_66OnLg:"pf-m-width-66-on-lg",width_75OnLg:"pf-m-width-75-on-lg",width_100OnLg:"pf-m-width-100-on-lg",width_25OnXl:"pf-m-width-25-on-xl",width_33OnXl:"pf-m-width-33-on-xl",width_50OnXl:"pf-m-width-50-on-xl",width_66OnXl:"pf-m-width-66-on-xl",width_75OnXl:"pf-m-width-75-on-xl",width_100OnXl:"pf-m-width-100-on-xl",width_25On_2xl:"pf-m-width-25-on-2xl",width_33On_2xl:"pf-m-width-33-on-2xl",width_50On_2xl:"pf-m-width-50-on-2xl",width_66On_2xl:"pf-m-width-66-on-2xl",width_75On_2xl:"pf-m-width-75-on-2xl",width_100On_2xl:"pf-m-width-100-on-2xl",inlineOnLg:"pf-m-inline-on-lg",staticOnLg:"pf-m-static-on-lg",inlineOnXl:"pf-m-inline-on-xl",staticOnXl:"pf-m-static-on-xl",inlineOn_2xl:"pf-m-inline-on-2xl",staticOn_2xl:"pf-m-static-on-2xl"},pageMain:"pf-c-page__main",themeDark:"pf-theme-dark"}},62410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(85893),a=n(92950),i=n.n(a),l=n(2833),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},c=36e5,s=24*c,d=30*s,u=365*s,p=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return p(Math.round(e/u),"year")}},{rightBound:u,description:function(e){return p(Math.round(e/d),"month")}},{rightBound:d,description:function(e){return p(Math.round(e/s),"day")}},{rightBound:s,description:function(e){return p(Math.round(e/c),"hour")}},{rightBound:c,description:function(e){return p(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],f=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},h=function(e){return{exact:function(e){return f(e)+" UTC"},onlyDate:function(e){return f(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),f(e))},invalid:function(){return"Invalid date"}}[e]},v=function(e,t,n){return{exact:function(t){return h(e)(t)},onlyDate:function(t){return h(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(l.Tooltip,o({},n,{content:(0,r.jsxs)("div",{children:[a,e]})},{children:t}))}(h("exact")(a),(0,r.jsx)("span",{children:h(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const g=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,l=e.extraTitle,o=e.tooltipProps,c=t instanceof Date?t:new Date(t),s=null==t||"Invalid Date"===c.toString()?"invalid":a;return(0,r.jsx)(i().Fragment,{children:v(s,o,l)(c)})}},89376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(85893),a=n(94184),i=n.n(a),l=n(92950);const o=n.n(l)().createContext("light");var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const s=function(e){var t=e.className,n=e.children,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),l=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var s=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",c({},a,{className:"".concat(l," ").concat(s),"widget-type":"InsightsPageHeader"},{children:n}))}})}},39173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(85893),a=n(94184),i=n.n(a),l=n(2833),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};const c=function(e){var t=e.className,n=e.title,a=i()(t);return(0,r.jsx)(l.Title,o({headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"},{children:n}))}},66581:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>V});var r=n(15861),a=n(29439),i=n(64687),l=n.n(i),o=n(92950),c=n.n(o),s=n(73448),d=n(45697),u=n.n(d),p=n(64029),m=n(32835),f=n(47173),h=n(32203),v=n(62394),g=n(15627),w=n(16488),y=n(32045),E=n(50383),b=n(68340),x=n(68774),_=n(38779),O=n(8027),D=n(98309),P=n(77760),S=n(9192),j=n(62410),k=n(89376),N=n(39173),T=n(96094),I=n(34766),Z=n(68519),C=n(32349),L=n(48903),M=[{label:"Version",type:"text"},{label:"Release",type:"text"},{label:"Additional packages",type:"text"},{label:"All packages",type:"text"},{label:"Systems running",type:"text"},{label:"Created",type:"text"}],U=[{title:"Version",cellTransforms:[(0,I.headerCol)("selectable-radio")]},{title:"Release"},{title:"Additional packages"},{title:"All packages"},{title:"Systems running"},{title:"Created"}],R=function(e){var t=e.image,n=[{version:t.cells[0],release:t.cells[1],additionalPackages:t.cells[2],allPackages:t.cells[3],systemsRunning:t.cells[4],created:t.cells[5]}],r="Version",a="Release",i="Additional packages",l="All packages",o="Systems running",s="Created";return c().createElement(c().Fragment,null,c().createElement(x.D,null,c().createElement(_.D,{headingLevel:"h2"},c().createElement(b.x,null,"Current version"))),c().createElement(I.TableComposable,{"aria-label":"Current version table",variant:"compact",borders:!1},c().createElement(I.Thead,null,c().createElement(I.Tr,{style:{borderBottomStyle:"hidden"}},c().createElement(I.Th,{style:{width:"3%"}}),c().createElement(I.Th,null,r),c().createElement(I.Th,null,a),c().createElement(I.Th,null,i),c().createElement(I.Th,null,l),c().createElement(I.Th,null,o),c().createElement(I.Th,null,s))),c().createElement(I.Tbody,null,n.map((function(e,t){return c().createElement(I.Tr,{key:t},c().createElement(I.Td,null),c().createElement(I.Td,{dataLabel:r},e.version),c().createElement(I.Td,{dataLabel:a},e.release),c().createElement(I.Td,{dataLabel:i},e.additionalPackages),c().createElement(I.Td,{dataLabel:l},e.allPackages),c().createElement(I.Td,{dataLabel:o},e.systemsRunning),c().createElement(I.Td,{dataLabel:s},e.created))})))))};R.propTypes={image:u().object};var B=function(e){var t,n,i,d,u=e.data,p=e.fetchDevices,m=e.isLoading,E=e.hasError,k=e.historyProp,N=e.locationProp,T=e.routeMatchProp,I=null==u?void 0:u.Device,L=(0,o.useState)(null),B=(0,a.Z)(L,2),A=B[0],V=B[1],q=(0,o.useState)(null),F=(0,a.Z)(q,2),X=F[0],z=F[1],W=(0,o.useState)(!1),H=(0,a.Z)(W,2),J=H[0],$=H[1],G=(0,P.useDispatch)(),Q=k?k():Z.k6?(0,Z.k6)():null,K=N?N():(0,Z.TH)(),Y=K.pathname,ee=K.search,te=T?T():(0,Z.$B)(),ne=function(){var e=(0,r.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(!0),t={onInfo:{title:"Updating system",description:" ".concat(X.deviceName," was added to the queue.")},onError:{title:"Error",description:"Failed to update the selected system(s)"}},e.next=4,(0,C.Z)(G,(function(){return(0,O.EQ)({CommitID:X.commitID,DevicesUUID:[X.deviceUUID]})}),t);case 4:re(),$(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=S._.inventory;te.path===S._.inventoryDetailUpdate&&(e=ee.includes("from_details=true")?S._.inventoryDetail:S._.inventory),te.path===S._.fleetManagementSystemDetailUpdate&&(e=ee.includes("from_details=true")?S._.fleetManagementSystemDetail:S._.fleetManagementDetail);var t=e.split("/").length,n=Y.split("/").slice(0,t).join("/");Q.push({pathname:n})},ae=function(e){var t,n=null==e?void 0:e.Version;return{cells:[n,D.aN[null==e?void 0:e.Distribution],(null==e||null===(t=e.Packages)||void 0===t?void 0:t.length)||0,null==e?void 0:e.TotalPackages,null==e?void 0:e.SystemsRunning,c().createElement("span",null,c().createElement(j.Z,{type:"relative",date:null==e?void 0:e.CreatedAt}))],commitID:null==e?void 0:e.CommitID,deviceUUID:null==I?void 0:I.UUID,deviceName:null==I?void 0:I.DeviceName,selected:A===n}},ie=ae(null==u||null===(t=u.ImageInfo)||void 0===t?void 0:t.Image),le=null==u||null===(n=u.ImageInfo)||void 0===n||null===(i=n.UpdatesAvailable)||void 0===i?void 0:i.map((function(e){return ae(null==e?void 0:e.Image)}));return c().createElement(w.T,null,c().createElement(y.NP,{isWidthLimited:!0},c().createElement(h.Z,null,c().createElement(v.e,null,c().createElement(R,{image:ie}),c().createElement(x.D,null,c().createElement(_.D,{headingLevel:"h2"},c().createElement(b.x,{className:"pf-u-mt-md"},"Select version to update to"))),c().createElement(c().Fragment,null,c().createElement(s.Z,{historyProp:k,locationProp:N,className:"pf-u-mt-sm",apiFilterSort:!0,isUseApi:!0,loadTableData:p,filters:M,tableData:{count:null==u||null===(d=u.ImageInfo)||void 0===d?void 0:d.Count,isLoading:m,hasError:E},columnNames:U,rows:le,defaultSort:{index:0,direction:"desc"},hasRadio:!0,setRadioSelection:function(e){V(e.cells[0]),z(e)},isFooterFixed:!0}),c().createElement("div",{style:{background:"white",left:"200px",position:"fixed",height:"90px",width:"100%",bottom:"0px",paddingLeft:"80px",paddingBottom:"0px"}},c().createElement(g.i,{style:{paddingBottom:"25px",width:"100%",paddingLeft:0}}),c().createElement(f.zx,{style:{left:"60px"},key:"confirm",variant:"primary",isDisabled:!A||J,onClick:function(){return ne()}},"Update system"),c().createElement(f.zx,{style:{left:"70px"},key:"cancel",variant:"link",onClick:re},"Cancel")))))))};B.propTypes={data:u().oneOfType([u().object,u().array]),historyProp:u().func,locationProp:u().func,routeMatchProp:u().func,fetchDevices:u().func,isLoading:u().bool,hasError:u().bool};var A=function(e){var t,n,r,i,l=e.inventoryId,o=e.historyProp,s=e.locationProp,d=e.routeMatchProp,u=e.paramsProp,f=o?o():Z.k6?(0,Z.k6)():null,h=u?u():Z.UO?(0,Z.UO)():null,v=h.deviceId,g=h.groupId,w=l||v,y=o?"/edge":S._.inventory,_=(0,T.Z)({api:O.V3,id:w,tableReload:!0}),D=(0,a.Z)(_,2),P=D[0],j=P.data,I=P.isLoading,C=P.hasError,M=D[1],U=null==j?void 0:j.Device,R=g?null==U||null===(t=U.DevicesGroups)||void 0===t||null===(n=t.find((function(e){return e.ID.toString()===g})))||void 0===n?void 0:n.Name:null;return c().createElement(c().Fragment,null,c().createElement(k.Z,{className:"pf-m-light"},R?c().createElement(p.a,{ouiaId:"groups-list"},c().createElement(m.g,null,(0,L.EW)({pathname:S._.fleetManagement,linkText:"Groups",history:f})),c().createElement(m.g,null,(0,L.EW)({pathname:"".concat(S._.fleetManagement,"/").concat(g),linkText:R||c().createElement(E.O,{width:"100px"}),history:f})),c().createElement(m.g,null,(0,L.EW)({pathname:"".concat(S._.fleetManagement,"/").concat(g,"/systems/").concat(w,"/"),linkText:null==U?void 0:U.DeviceName,history:f})),c().createElement(m.g,null,"Update")):c().createElement(p.a,{ouiaId:"systems-list"},c().createElement(m.g,null,(0,L.EW)({pathname:"/edge"===y?"/":y,linkText:"Systems",history:f})),c().createElement(m.g,null,(0,L.EW)({pathname:"".concat(y,"/").concat(w,"/"),linkText:(null==U?void 0:U.DeviceName)||c().createElement(E.O,{width:"100px"}),history:f})),c().createElement(m.g,null,"Update")),c().createElement(N.Z,{title:"Update"}),c().createElement(x.D,{className:"pf-u-mt-md"},null!=U&&U.DeviceName?c().createElement(b.x,null,"Update ",c().createElement("strong",null,null==U?void 0:U.DeviceName)," to a newer version of ",c().createElement("strong",null,null==j||null===(r=j.ImageInfo)||void 0===r||null===(i=r.Image)||void 0===i?void 0:i.Name)," by selecting a new version from the table below."):c().createElement(E.O,{width:"100px"}))),c().createElement("section",{className:"edge-devices pf-l-page__main-section pf-c-page__main-section"},c().createElement(B,{data:j,fetchDevices:M,isLoading:I,hasError:C,historyProp:o,locationProp:s,routeMatchProp:d})))};A.propTypes={historyProp:u().func,locationProp:u().func,routeMatchProp:u().func,paramsProp:u().func,inventoryId:u().string};const V=A},8027:(e,t,n)=>{"use strict";n.d(t,{$v:()=>c,EQ:()=>u,V3:()=>d,_v:()=>s});var r=n(15861),a=n(64687),i=n.n(a),l=n(66702),o=n(93454),c=function(e){var t=e.query,n=(0,l.Vs)(t);return o.instance.get("".concat(l.Ds,"/devices/devicesview?").concat(n))},s=function(e){return o.instance.get("".concat(l.Ds,"/devices/").concat(e))},d=function(e){var t=e.id,n=e.query,r=(0,l.Vs)(n);return o.instance.get("".concat(l.Ds,"/devices/").concat(t,"?").concat(r))},u=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.instance.post("".concat(l.Ds,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},96094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(4942),a=n(15861),i=n(29439),l=n(64687),o=n.n(l),c=n(83215),s=n(92950),d=n(77760);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=function(e){var t,n=e.api,r=e.id,l=void 0===r?null:r,u=e.statusMessages,m=e.tableReload,f=void 0!==m&&m,h=(0,d.useDispatch)(),v=(0,s.useState)([]),g=(0,i.Z)(v,2),w=g[0],y=g[1],E=(0,s.useState)(!0),b=(0,i.Z)(E,2),x=b[0],_=b[1],O=(0,s.useState)(!1),D=(0,i.Z)(O,2),P=D[0],S=D[1],j=null===(t=u)||void 0===t?void 0:t.onSuccess;u||(u={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var k=function(){var e=(0,a.Z)(o().mark((function e(){var t,r,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",_(!0),e.prev=2,e.next=5,n({id:l,query:t});case 5:r=e.sent,y(r),j&&h(p({},(0,c.wN)(p({variant:"success"},u.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),S(!0),h(p({},(0,c.wN)(p({variant:"danger"},u.onError))));case 14:return e.prev=14,_(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){f||k()}),[]),[{data:w,isLoading:x,hasError:P},k]}},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(4942),a=n(15861),i=n(64687),l=n.n(i),o=n(83215);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const d=function(e,t,n,r){var i,c,d=null===(i=n)||void 0===i?void 0:i.onSuccess,u=null===(c=n)||void 0===c?void 0:c.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var p=function(){var i=(0,a.Z)(l().mark((function a(){var i;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t();case 3:return i=a.sent,u&&(r?r.hasInfo(n.onInfo):e(s({},(0,o.wN)(s({variant:"info"},n.onInfo))))),d&&(r?r.hasSuccess(n.onSuccess):e(s({},(0,o.wN)(s({variant:"success"},n.onSuccess))))),a.abrupt("return",i);case 9:return a.prev=9,a.t0=a.catch(0),r?r.err(n.onError,a.t0):e(s({},(0,o.wN)(s(s({variant:"danger"},n.onError),{},{description:null!==a.t0&&void 0!==a.t0&&a.t0.Title?"".concat(n.onError.description,": ").concat(a.t0.Title):n.onError.description})))),a.abrupt("return",a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return i.apply(this,arguments)}}();return p()}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},58392:()=>{},80598:()=>{},10108:()=>{},80897:()=>{},92084:()=>{}}]);
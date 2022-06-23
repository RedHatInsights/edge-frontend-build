"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[2718,9807],{91768:(e,t,r)=>{r.r(t),r.d(t,{BiosCard:()=>b,default:()=>b});var n=r(4942),a=r(45987),o=r(93433),i=r(75418),l=r.n(i),s=r(45697),c=r.n(s),u=r(28216),d=r(22866),p=r(54050),f=r(62410),h=r(16943);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.bios,r=e.detailLoaded,n=e.hasVendor,i=e.hasVersion,s=e.handleClick,c=e.hasReleaseDate,u=e.extra;return l().createElement(d.Z,{title:"BIOS",isLoading:!r,items:[].concat((0,o.Z)(n?[{title:"Vendor",value:t.vendor}]:[]),(0,o.Z)(i?[{title:"Version",value:t.version}]:[]),(0,o.Z)(c?[{title:"Release date",value:(0,h.J_)(t.releaseDate)?l().createElement(f.Z,{date:new Date(t.releaseDate),type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(u.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,["onClick"])),t&&{onClick:function(e){return t(e,s)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,bios:c().shape({vendor:c().string,version:c().string,releaseDate:c().string,csm:c().arrayOf(c().string)}),hasVendor:c().bool,hasVersion:c().bool,hasReleaseDate:c().bool,extra:c().arrayOf(h.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},extra:[],hasVendor:!0,hasVersion:!0,hasReleaseDate:!0};const b=(0,u.$j)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,bios:(0,p.Cx)(t)}}))(v)},38514:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(4942),a=r(45987),o=r(93433),i=r(75418),l=r.n(i),s=r(45697),c=r.n(s),u=r(28216),d=r(75824),p=r(22866),f=r(54050),h=r(62410),g=r(16943);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.egg,r=e.client;return l().createElement(d.u,{content:l().createElement(l().Fragment,null,l().createElement("p",null,"RPM version: ",r||"Not available"),l().createElement("p",null,"Dynamic update version: ",t||"Not available"))},l().createElement("span",null,r||t||"Not available"))};b.propTypes={egg:c().string,client:c().string};var m=function(e){var t=e.detailLoaded,r=e.collectionInformation,n=e.entity,i=e.handleClick,s=e.hasClient,c=e.hasLastCheckIn,u=e.hasRegistered,d=e.hasInsightsId,f=e.hasReporter,g=e.hasMachineId,y=e.extra;return l().createElement(p.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,o.Z)(s?[{title:"Insights client",value:l().createElement(b,{egg:r.egg,client:r.client})}]:[]),(0,o.Z)(c?[{title:"Last check-in",value:n&&(h.Z?l().createElement(h.Z,{date:n.updated,type:"onlyDate"}):new Date(n.updated).toLocaleString())}]:[]),(0,o.Z)(u?[{title:"Registered",value:n&&(h.Z?l().createElement(h.Z,{date:n.created,type:"onlyDate"}):new Date(n.created).toLocaleString())}]:[]),(0,o.Z)(d?[{title:"Insights id",value:n&&n.insights_id}]:[]),(0,o.Z)(f?[{title:"Reporter",value:n&&n.reporter}]:[]),(0,o.Z)(g?[{title:"RHEL machine id",value:n&&n.rhel_machine_id}]:[]),(0,o.Z)(y.map((function(e){var t=e.onClick;return v(v({},(0,a.Z)(e,["onClick"])),t&&{onClick:function(e){return t(e,i)}})}))))})};m.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string,rhel_machine_id:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,hasMachineId:c().bool,extra:c().arrayOf(g.x7)},m.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,hasMachineId:!0,extra:[]};const O=(0,u.$j)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:r&&r.loaded,collectionInformation:(0,f.fZ)(r)}}))(m)},92373:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var n=r(15671),a=r(43144),o=r(97326),i=r(60136),l=r(82963),s=r(61120),c=r(4942),u=r(75418),d=r.n(u),p=r(45697),f=r.n(p),h=r(28216),g=r(50693),y=r(16475),v=r(80236),b=r(92609),m=r(44357),O=r(71002),P=r(87462),C=r(29439),Z=r(45987),k=r(68774),j=r(68340),S=r(44733),w=r(49044),E=r(32875),D=r(94654),I=r.n(D),R=r(16943);function x(e){var t=function(e,t){if("object"!==(0,O.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==(0,O.Z)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,O.Z)(t)?t:String(t)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(e){(0,i.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(){var e;(0,n.Z)(this,f);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=p.call.apply(p,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{sortBy:{index:0,direction:b.SortByDirection.asc},opened:[],pagination:{page:1,perPage:10},activeFilters:{}}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,n){var a=e.props.expandable;e.props.onSort(t,a?r-1:r,n),e.setState({sortBy:{index:r,direction:n}})})),(0,c.Z)((0,o.Z)(e),"onCollapse",(function(t,r,n){var a=e.state.opened;a[r]=n,e.setState({opened:a})})),(0,c.Z)((0,o.Z)(e),"onUpdatePagination",(function(t){var r=t.page,n=t.perPage;e.setState({pagination:T(T({},e.state.pagination),{},{page:r,perPage:n})})})),(0,c.Z)((0,o.Z)(e),"setFilter",(function(t,r,n){var a=e.state.activeFilters,o=(a[t],(0,Z.Z)(a,[t].map(x)));e.setState({activeFilters:T(T({},o),0!==r.length&&(0,c.Z)({},t,{key:t,value:r,label:n})),pagination:T(T({},e.state.pagination),{},{page:1})})})),(0,c.Z)((0,o.Z)(e),"onDeleteFilter",(function(t,r,n){var a=(0,C.Z)(r,1)[0];e.setState({activeFilters:(0,R.Jr)(a,n,e.state.activeFilters),pagination:T(T({},e.state.pagination),{},{page:1})})})),e}return(0,a.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,r=t.cells,n=t.rows,a=t.expandable,o=t.filters,i=this.state,l=i.sortBy,s=i.opened,c=i.pagination,p=i.activeFilters,f=a?{onCollapse:this.onCollapse}:{},h=(0,R.ey)(n,p),g=a?I()((0,R.Ew)(h,c),(function(e,t){var r=e.child;return[T(T({},(0,Z.Z)(e,["child"])),{},{isOpen:s[2*t]||!1}),{cells:[{title:r}],parent:2*t}]})):(0,R.Ew)(h,c);return d().createElement(u.Fragment,null,d().createElement(w.Z,(0,P.Z)({pagination:T(T({},c),{},{itemCount:h.length,onSetPage:function(t,r){return e.onUpdatePagination(T(T({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(T(T({},c),{},{page:1,perPage:r}))}})},o&&{filterConfig:{items:(0,R.FX)(r,o,p,this.setFilter)}},{activeFiltersConfig:{filters:Object.values(p).map((function(e){return T(T({},e),{},{category:e.label,chips:Array.isArray(e.value)?e.value.map((function(e){return{name:e}})):[{name:e.value}]})})),onDelete:this.onDeleteFilter}})),1!==r.length?d().createElement(b.Table,(0,P.Z)({"aria-label":"General information dialog table",variant:b.TableVariant.compact,cells:r,rows:g,sortBy:T(T({},l),{},{index:a&&0===l.index?1:l.index}),onSort:this.onSort},f),d().createElement(b.TableHeader,null),d().createElement(b.TableBody,null)):d().createElement(k.D,null,(0,R.Ew)(h,c).map((function(e,t){return d().createElement(j.x,{component:j.q.small,key:t},e.title||e)}))),d().createElement(E.Z,{isFooter:!0,className:"ins-c-inventory__table--toolbar"},d().createElement(S.t,(0,P.Z)({},c,{itemCount:h.length,variant:"bottom",onSetPage:function(t,r){return e.onUpdatePagination(T(T({},c),{},{page:r}))},onPerPageSelect:function(t,r){return e.onUpdatePagination(T(T({},c),{},{page:1,perPage:r}))}}))))}}]),f}(u.Component);M.propTypes={rows:f().array,cells:f().array,onSort:f().func,expandable:f().bool,filters:f().arrayOf(f().shape({index:f().number,title:f().string,type:f().oneOf(["text","checkbox","radio","group"]),options:f().arrayOf(f().shape({value:f().oneOfType([f().string,f().node]),label:f().node}))}))},M.defaultProps={cells:[],rows:[],onSort:function(){},sortBy:{},expandable:!1};const _=M;var B=r(18569),V=r(66944),W=r(91768),F=r(10392),N=r(93433),K=r(22866),A=r(13069),$=r(54050);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e){if(e)return[e.enabled&&e.enabled.length>0&&"".concat(e.enabled.length," enabled"),e.disabled&&e.disabled.length>0&&"".concat(e.disabled.length," disabled")].filter(Boolean).join(" / ")}var G=function(e){var t,r,n,a=e.detailLoaded,o=e.configuration,i=e.handleClick,l=e.hasPackages,s=e.hasServices,c=e.hasProcesses,u=e.hasRepositories,p=e.extra;return d().createElement(K.Z,{title:"Configuration",isLoading:!a,items:[].concat((0,N.Z)(l?[{title:"Installed packages",value:null===(t=o.packages)||void 0===t?void 0:t.length,singular:"package",target:"installed_packages",onClick:function(){i("Installed packages",(0,A.se)(o.packages,"Package name"))}}]:[]),(0,N.Z)(s?[{title:"Services",value:null===(r=o.services)||void 0===r?void 0:r.length,singular:"service",target:"services",onClick:function(){i("Services",(0,A.se)(o.services,"Service name"))}}]:[]),(0,N.Z)(c?[{title:"Running processes",value:null===(n=o.processes)||void 0===n?void 0:n.length,singular:"process",plural:"processes",target:"running_processes",onClick:function(){i("Running processes",(0,A.se)(o.processes,"Process name"))}}]:[]),(0,N.Z)(u?[{title:"Repositories",value:q(o.repositories),target:"repositories",onClick:function(){i("Repositories",(0,A.Je)(o.repositories),"medium")}}]:[]),(0,N.Z)(p.map((function(e){var t=e.onClick;return J(J({},(0,Z.Z)(e,["onClick"])),t&&{onClick:function(e){return t(e,i)}})}))))})};G.propTypes={detailLoaded:f().bool,handleClick:f().func,configuration:f().shape({packages:f().arrayOf(f().string),services:f().arrayOf(f().string),processes:f().arrayOf(f().string),repositories:f().shape({enabled:f().arrayOf(f().shape({base_url:f().string,name:f().string,enabled:f().bool,gpgcheck:f().bool})),disabled:f().arrayOf(f().shape({base_url:f().string,name:f().string,enabled:f().bool,gpgcheck:f().bool}))})}),hasPackages:f().bool,hasServices:f().bool,hasProcesses:f().bool,hasRepositories:f().bool,extra:f().arrayOf(R.x7)},G.defaultProps={detailLoaded:!1,handleClick:function(){},hasPackages:!0,hasServices:!0,hasProcesses:!0,hasRepositories:!0,extra:[]};const H=(0,h.$j)((function(e){var t=e.systemProfileStore.systemProfile;return{detailLoaded:t&&t.loaded,configuration:(0,$.qr)(t)}}))(G);var z=r(38514);var X=function(e){(0,i.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(){var e;(0,n.Z)(this,f);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=p.call.apply(p,[this].concat(r)),(0,c.Z)((0,o.Z)(e),"state",{isModalOpen:!1,modalTitle:"",modalVariant:"small"}),(0,c.Z)((0,o.Z)(e),"onSort",(function(t,r,n,a){var o=e.state.rows,i=(a||o).sort((function(e,t){var n=e.cells||e,a=t.cells||t;return(""+(n[r].sortValue||n[r])).toLocaleLowerCase()>(""+(a[r].sortValue||a[r])).toLocaleLowerCase()?-1:1}));e.setState({rows:n===b.SortByDirection.asc?i:i.reverse()})})),(0,c.Z)((0,o.Z)(e),"handleModalToggle",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.cells,a=r.rows,o=r.expandable,i=r.filters,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";a&&e.onSort(void 0,o?1:0,b.SortByDirection.asc,a),e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalTitle:t,cells:n,expandable:o,filters:i,modalVariant:l}}))})),e}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){this.props.loadSystemDetail&&this.props.loadSystemDetail(this.props.entity.id)}},{key:"render",value:function(){var e=this,t=this.state,r=t.isModalOpen,n=t.modalTitle,a=t.cells,o=t.rows,i=t.expandable,l=t.filters,s=t.modalVariant,c=this.props,p=c.store,f=c.writePermissions,b=c.SystemCardWrapper,m=c.OperatingSystemCardWrapper,O=c.BiosCardWrapper,P=c.InfrastructureCardWrapper,C=c.ConfigurationCardWrapper,Z=c.CollectionCardWrapper,k=c.children,j=p?h.zt:u.Fragment;return d().createElement(j,p&&{store:p},d().createElement("div",{className:"ins-c-general-information"},d().createElement(g.r,{sm:12,md:6,hasGutter:!0},b&&d().createElement(y.P,null,d().createElement(b,{handleClick:this.handleModalToggle,writePermissions:f})),m&&d().createElement(y.P,null,d().createElement(m,{handleClick:this.handleModalToggle})),O&&d().createElement(y.P,null,d().createElement(O,{handleClick:this.handleModalToggle})),P&&d().createElement(y.P,null,d().createElement(P,{handleClick:this.handleModalToggle})),C&&d().createElement(y.P,null,d().createElement(C,{handleClick:this.handleModalToggle})),Z&&d().createElement(y.P,null,d().createElement(Z,{handleClick:this.handleModalToggle})),k,d().createElement(v.u,{title:n||"","aria-label":"".concat(n||""," modal"),isOpen:r,onClose:function(){return e.handleModalToggle()},className:"ins-c-inventory__detail--dialog",variant:s},d().createElement(_,{cells:a,rows:o,expandable:i,onSort:this.onSort,filters:l})))))}}]),f}(u.Component);X.propTypes={entity:f().shape({id:f().oneOfType([f().string,f().number])}),loadSystemDetail:f().func,store:f().any,writePermissions:f().bool,SystemCardWrapper:f().oneOfType([f().node,f().bool]),OperatingSystemCardWrapper:f().oneOfType([f().node,f().bool]),BiosCardWrapper:f().oneOfType([f().node,f().bool]),InfrastructureCardWrapper:f().oneOfType([f().node,f().bool]),ConfigurationCardWrapper:f().oneOfType([f().node,f().bool]),CollectionCardWrapper:f().oneOfType([f().node,f().bool]),children:f().node},X.defaultProps={entity:{},SystemCardWrapper:V.default,OperatingSystemCardWrapper:B.default,BiosCardWrapper:W.default,InfrastructureCardWrapper:F.default,ConfigurationCardWrapper:H,CollectionCardWrapper:z.default};const Y=(0,h.$j)((function(e){return{entity:e.entityDetails.entity}}),(function(e){return{loadSystemDetail:function(t){return e((0,m.eR)(t))}}}))(X)},10392:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(4942),a=r(45987),o=r(93433),i=r(75418),l=r.n(i),s=r(45697),c=r.n(s),u=r(28216),d=r(22866),p=r(13069),f=r(54050),h=r(16943);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t,r,n,i=e.infrastructure,s=e.handleClick,c=e.detailLoaded,u=e.hasType,f=e.hasVendor,h=e.hasIPv4,g=e.hasIPv6,v=e.hasInterfaces,b=e.extra;return l().createElement(d.Z,{title:"Infrastructure",isLoading:!c,items:[].concat((0,o.Z)(u?[{title:"Type",value:i.type}]:[]),(0,o.Z)(f?[{title:"Vendor",value:i.vendor}]:[]),(0,o.Z)(h?[{title:"IPv4 addresses",value:null===(t=i.ipv4)||void 0===t?void 0:t.length,plural:"addresses",singular:"address",target:"ipv4",onClick:function(){s("IPv4",(0,p.se)(i.ipv4,"IP address"))}}]:[]),(0,o.Z)(g?[{title:"IPv6 addresses",value:null===(r=i.ipv6)||void 0===r?void 0:r.length,plural:"addresses",singular:"address",onClick:function(){s("IPv6",(0,p.se)(i.ipv6,"IP address"))}}]:[]),(0,o.Z)(v?[{title:"Interfaces/NICs",value:null===(n=i.nics)||void 0===n?void 0:n.length,singular:"NIC",target:"interfaces",onClick:function(){s("Interfaces/NICs",(0,p.Vf)(i.nics),"medium")}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return y(y({},(0,a.Z)(e,["onClick"])),t&&{onClick:function(e){return t(e,s)}})}))))})};v.propTypes={detailLoaded:c().bool,handleClick:c().func,infrastructure:c().shape({type:c().string,vendor:c().string,ipv4:c().array,ipv6:c().array,nics:c().array}),hasType:c().bool,hasVendor:c().bool,hasIPv4:c().bool,hasIPv6:c().bool,hasInterfaces:c().bool,extra:c().arrayOf(h.x7)},v.defaultProps={detailLoaded:!1,handleClick:function(){},hasType:!0,hasVendor:!0,hasIPv4:!0,hasIPv6:!0,hasInterfaces:!0,extra:[]};const b=(0,u.$j)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,infrastructure:(0,f.qY)(r,t)}}))(v)},18569:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(4942),a=r(45987),o=r(93433),i=r(75418),l=r.n(i),s=r(45697),c=r.n(s),u=r(28216),d=r(22866),p=r(13069),f=r(54050),h=r(62410),g=r(16943);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t,r=e.systemInfo,n=e.detailLoaded,i=e.handleClick,s=e.hasRelease,c=e.hasKernelRelease,u=e.hasArchitecture,f=e.hasLastBoot,y=e.hasKernelModules,b=e.extra;return l().createElement(d.Z,{title:"Operating system",isLoading:!n,items:[].concat((0,o.Z)(s?[{title:"Release",value:r.release}]:[]),(0,o.Z)(c?[{title:"Kernel release",value:r.kernelRelease}]:[]),(0,o.Z)(u?[{title:"Architecture",value:r.architecture}]:[]),(0,o.Z)(f?[{title:"Last boot time",value:(0,g.J_)(r.bootTime)?l().createElement(h.Z,{date:r.bootTime,type:"onlyDate"}):"Not available"}]:[]),(0,o.Z)(y?[{title:"Kernel modules",value:null===(t=r.kernelModules)||void 0===t?void 0:t.length,singular:"module",target:"kernel_modules",onClick:function(){i("Kernel modules",(0,p.se)(r.kernelModules,"Module"))}}]:[]),(0,o.Z)(b.map((function(e){var t=e.onClick;return v(v({},(0,a.Z)(e,["onClick"])),t&&{onClick:function(e){return t(e,i)}})}))))})};b.propTypes={detailLoaded:c().bool,handleClick:c().func,systemInfo:c().shape({release:c().string,architecture:c().string,kernelRelease:c().string,bootTime:c().string,kernelModules:c().arrayOf(c().string)}),hasRelease:c().bool,hasKernelRelease:c().bool,hasArchitecture:c().bool,hasLastBoot:c().bool,hasKernelModules:c().bool,extra:c().arrayOf(g.x7)},b.defaultProps={detailLoaded:!1,handleClick:function(){},hasRelease:!0,hasKernelRelease:!0,hasArchitecture:!0,hasLastBoot:!0,hasKernelModules:!0,extra:[]};const m=(0,u.$j)((function(e){var t=e.entityDetails.entity,r=e.systemProfileStore.systemProfile;return{detailLoaded:r&&r.loaded,systemInfo:(0,f.d0)(r,t)}}))(b)}}]);
//# sourceMappingURL=../sourcemaps/2718.a2a0c1ecbe90f84c0a3deb0de6ed6a10.js.map
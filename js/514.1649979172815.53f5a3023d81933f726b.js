"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[514],{38514:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(4942),i=n(45987),o=n(93433),a=n(75418),l=n.n(a),s=n(45697),c=n.n(s),u=n(28216),v=n(35224),d=n(22866),p=n(54050),g=n(62410),f=n(16943);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.egg,n=e.client;return l().createElement(v.u,{content:l().createElement(l().Fragment,null,l().createElement("p",null,"RPM version: ",n||"Not available"),l().createElement("p",null,"Dynamic update version: ",t||"Not available"))},l().createElement("span",null,n||t||"Not available"))};b.propTypes={egg:c().string,client:c().string};var y=function(e){var t=e.detailLoaded,n=e.collectionInformation,r=e.entity,a=e.handleClick,s=e.hasClient,c=e.hasLastCheckIn,u=e.hasRegistered,v=e.hasInsightsId,p=e.hasReporter,f=e.hasMachineId,h=e.extra;return l().createElement(d.Z,{title:"Collection information",isLoading:!t,items:[].concat((0,o.Z)(s?[{title:"Insights client",value:l().createElement(b,{egg:n.egg,client:n.client})}]:[]),(0,o.Z)(c?[{title:"Last check-in",value:r&&(g.Z?l().createElement(g.Z,{date:r.updated,type:"onlyDate"}):new Date(r.updated).toLocaleString())}]:[]),(0,o.Z)(u?[{title:"Registered",value:r&&(g.Z?l().createElement(g.Z,{date:r.created,type:"onlyDate"}):new Date(r.created).toLocaleString())}]:[]),(0,o.Z)(v?[{title:"Insights id",value:r&&r.insights_id}]:[]),(0,o.Z)(p?[{title:"Reporter",value:r&&r.reporter}]:[]),(0,o.Z)(f?[{title:"RHEL machine id",value:r&&r.rhel_machine_id}]:[]),(0,o.Z)(h.map((function(e){var t=e.onClick;return m(m({},(0,i.Z)(e,["onClick"])),t&&{onClick:function(e){return t(e,a)}})}))))})};y.propTypes={detailLoaded:c().bool,entity:c().shape({updated:c().string,created:c().string,insights_id:c().string,reporter:c().string,rhel_machine_id:c().string}),handleClick:c().func,collectionInformation:c().shape({client:c().string,egg:c().string}),hasClient:c().bool,hasLastCheckIn:c().bool,hasRegistered:c().bool,hasInsightsId:c().bool,hasReporter:c().bool,hasMachineId:c().bool,extra:c().arrayOf(f.x7)},y.defaultProps={detailLoaded:!1,handleClick:function(){},hasClient:!0,hasEgg:!0,hasLastCheckIn:!0,hasRegistered:!0,hasInsightsId:!0,hasReporter:!0,hasMachineId:!0,extra:[]};const O=(0,u.$j)((function(e){var t=e.entityDetails.entity,n=e.systemProfileStore.systemProfile;return{entity:t,detailLoaded:n&&n.loaded,collectionInformation:(0,p.fZ)(n)}}))(y)},22866:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(75418),i=n.n(r),o=n(45697),a=n.n(o),l=n(49739),s=n(83826),c=n(68774),u=n(68340),v=n(25834),d=n(78140),p=n(56455),g=function(e,t,n){return(e||0===e)&&t?1===e?"1 ".concat(t):"".concat(e," ").concat(n||"".concat(t,"s")):0===e?"None":e||"Not available"},f=function(e){var t=e.item,n=t.onClick,r=t.value,o=t.target,a=t.plural,l=t.singular;return i().createElement("a",{onClick:function(e){e.preventDefault(),n(e,{value:r,target:o})},href:"".concat(window.location.href,"/").concat(o)},g(r,l,a))};f.propTypes={item:a().shape({value:a().node,target:a().string,onClick:a().func,plural:a().string,singular:a().string})},f.defaultProps={item:{}};var h=function(e){var t=e.title,n=e.isLoading,o=e.items;return i().createElement(l.K,{hasGutter:!0},i().createElement(s.v,null,i().createElement(c.D,null,i().createElement(u.x,{component:u.q.h1},t))),i().createElement(s.v,{isFilled:!0},i().createElement(c.D,null,i().createElement(v.G,{component:v.F.dl},o.map((function(e,t){return i().createElement(r.Fragment,{key:t},i().createElement(d.T,{component:d.v.dt},e.title),i().createElement(d.T,{component:d.v.dd},n&&i().createElement(p.Z,{size:e.size||p.i.sm}),!n&&(e.onClick&&e.value?i().createElement(f,{item:e}):g(e.value,e.singular,e.plural))))}))))))};h.propTypes={title:a().node.isRequired,isLoading:a().bool,items:a().arrayOf(a().shape({title:a().node,value:a().node,onClick:a().func,size:a().oneOf(Object.values(p.i)),plural:a().string,singular:a().string}))},h.defaultProps={isLoading:!0,items:[]};const m=h},16943:(e,t,n)=>{n.d(t,{x7:()=>h,ey:()=>p,FX:()=>g,J_:()=>d,Jr:()=>f,Ew:()=>v});var r=n(71002),i=n(45987),o=n(4942),a=n(45697),l=n.n(a);function s(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!==(0,r.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.slice((t.page-1)*t.perPage,t.page*t.perPage)},d=function(e){return!(isNaN(e)&&isNaN(Date.parse(e)))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.filter((function(e){return 0===Object.values(t).length||Object.values(t).every((function(t){var n=e[t.key]&&(e[t.key].sortValue||e[t.key]);return n&&(Array.isArray(t.value)?t.value.includes(n):-1!==n.toLocaleLowerCase().indexOf(t.value.toLocaleLowerCase()))}))}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return t.map((function(t,i){var o=t.index||i,a=e[o]&&(e[o].title||e[o]);return{value:String(o),label:a,type:t.type||"text",filterValues:u({id:t.id||"".concat(a,"-").concat(o),onChange:function(e,t){return r(o,t,a)},value:n[o]&&n[o].value},t.options&&{items:t.options})}}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t)return{};var r=e.key,a=n[r],l=(0,i.Z)(n,[r].map(s)),c=a&&Array.isArray(a.value)&&a.value.filter((function(t){return!e.chips.find((function(e){return e.name===t}))})),v=a&&Array.isArray(a.value)&&c&&c.length>0?(0,o.Z)({},e.key,u(u({},a),{},{value:c})):{};return u(u({},l),v)},h=l().shape({title:l().node,value:l().node,singular:l().node,plural:l().node,onClick:l().func})},54050:(e,t,n)=>{n.d(t,{Ys:()=>l,d0:()=>s,Cx:()=>c,qY:()=>u,qr:()=>v,fZ:()=>d});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){try{return JSON.parse(e)}catch(n){return(0,r.Z)({},t,e)}}var l=function(){var e,t,n,r,i,l,s,c,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},v=u.number_of_cpus,d=u.number_of_sockets,p=u.cores_per_socket,g=u.ramSize,f=u.disk_devices,h=u.sap_sids,m=u.cpu_flags,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=b.facts;return{cpuNumber:v||(null==y||null===(e=y.rhsm)||void 0===e?void 0:e.CPU_CORES),sockets:d||(null==y||null===(t=y.rhsm)||void 0===t?void 0:t.CPU_SOCKETS),coresPerSocket:p||(null==y||null===(n=y.rhsm)||void 0===n?void 0:n.CPU_CORES)&&(null==y||null===(r=y.rhsm)||void 0===r?void 0:r.CPU_CORES)&&Number(null==y||null===(i=y.rhsm)||void 0===i?void 0:i.CPU_CORES,10)/Number(null==y||null===(l=y.rhsm)||void 0===l?void 0:l.CPU_SOCKETS,10),ramSize:g||(null==y||null===(s=y.rhsm)||void 0===s?void 0:s.MEMORY)&&"".concat(null==y||null===(c=y.rhsm)||void 0===c?void 0:c.MEMORY," GB"),storage:f&&f.map((function(e){var t=e.device,n=e.label,r=e.mount_point,i=e.options,l=e.type;return o(o(o(o({},t&&a(t,"device")),{},{label:n},r&&a(r,"mountpoint")),i&&a(i,"options")),l&&a(l,"mounttype"))})),sapIds:h,cpuFlags:m}},s=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.arch,r=t.os_release,i=t.os_kernel_version,o=t.last_boot_time,a=t.kernel_modules,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=l.facts;return{release:r,kernelRelease:i,architecture:n||(null==s||null===(e=s.rhsm)||void 0===e?void 0:e.ARCHITECTURE),bootTime:o,kernelModules:a}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.bios_vendor,n=e.bios_version,r=e.bios_release_date;return{vendor:t,version:n,releaseDate:r}},u=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.infrastructure_type,i=n.infrastructure_vendor,o=n.network,a=void 0===o?{}:o,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=l.facts;return{type:r||void 0!==(null==s||null===(e=s.rhsm)||void 0===e?void 0:e.IS_VIRTUAL)&&(null!=s&&null!==(t=s.rhsm)&&void 0!==t&&t.IS_VIRTUAL?"virtual":"physical")||void 0,vendor:i,ipv4:a.ipv4,ipv6:a.ipv6,nics:a.interfaces}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.installed_packages,n=e.enabled_services,r=e.running_processes,i=e.repositories;return{packages:t,services:n,processes:r,repositories:i}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.insights_client_version,n=e.insights_egg_version;return{client:t,egg:n}}}}]);
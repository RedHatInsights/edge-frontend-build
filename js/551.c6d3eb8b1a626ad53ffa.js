"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[551],{66702:(e,t,n)=>{n.d(t,{oj:()=>y,ot:()=>m,eK:()=>b,EV:()=>O,Bi:()=>w,py:()=>j,EC:()=>P,Z4:()=>E,g5:()=>Z,Dk:()=>k,H1:()=>_,dd:()=>D,eS:()=>x,Es:()=>H,gK:()=>L});var r=n(71002),o=n(29439),i=n(15861),c=n(4942),a=n(87757),u=n.n(a),s=n(58061),d=n(93454),v=n(68004),p=n(35240);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h="/api/image-builder/v1",g="/api/edge/v1",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,n=void 0===t?100:t,r=e.offset,o=void 0===r?0:r;return d.eE.get("".concat(h,"/composes?limit=").concat(n,"&offset=").concat(o))},m=function(e){var t=e.id;return d.eE.get("".concat(g,"/images/").concat(t))},b=function(){var e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new v.HostsApi(void 0,"/api/inventory/v1/",d.eE),e.next=3,Promise.all([t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["fresh"],void 0,void 0,void 0,void 0,{query:f(f({},(0,p.h3)(s.Dx)),(0,p.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["stale"],void 0,void 0,void 0,void 0,{query:f(f({},(0,p.h3)(s.Dx)),(0,p.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["stale_warning"],void 0,void 0,void 0,void 0,{query:f(f({},(0,p.h3)(s.Dx)),(0,p.h3)({system_profile:["host_type"]},"fields"))}),t.apiHostGetHostList(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,["unknown"],void 0,void 0,void 0,void 0,{query:f(f({},(0,p.h3)(s.Dx)),(0,p.h3)({system_profile:["host_type"]},"fields"))})]).then((function(e){return e.reduce((function(e,t,n){return f(f({},e),{},(0,c.Z)({},s.k7[n],t.total))}),{})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)(u().mark((function e(t,n,r){var o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,d.eE)("".concat(h,"/packages?").concat(o.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(e){var t=e.Id,n=e.name,r=e.version,i=e.description,c=e.release,a=e.architecture,u=e.username,s=e.credentials,v=e.imageType,p=e["selected-packages"],l=v||[],f=(0,o.Z)(l,1)[0];v.length>1&&(f="rhel-edge-installer");var h={name:n,version:r,description:i,distribution:c,imageType:f,packages:p.map((function(e){return{name:e.name}})),outputTypes:v,commit:{arch:a},installer:{username:u,sshkey:s}},y="".concat(g,"/images");return r>1&&(y+="/".concat(t,"/update")),d.eE.post(y,h)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:100,offset:0,sort_by:"-created_at"},t=Object.keys(e).reduce((function(t,n){var o=void 0;return"object"===(0,r.Z)(e[n])&&"number"==typeof e[n].length&&e[n].length>0&&(o=e[n].reduce((function(e,t){return""===e?"".concat(n,"=").concat(t):"".concat(e,"&").concat(n,"=").concat(t)}),"")),["string","number"].includes((0,r.Z)(e[n]))&&""!==e[n]&&(o="".concat(n,"=").concat(e[n])),void 0===o?t:""===t?"".concat(o):"".concat(t,"&").concat(o)}),"");return d.eE.get("".concat(g,"/images?").concat(t))},P=function(e){return d.eE.get("".concat(g,"/images/").concat(e,"/status"))},E=function(){var e=(0,i.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.eE.get("".concat(g,"/devices/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,i.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.eE.post("".concat(g,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return d.eE.get("".concat(g,"/updates/device/").concat(e,"/image"))},_=function(e){var t={name:e};return d.eE.post("".concat(g,"/images/checkImageName"),t)},D=function(){return d.eE.get("".concat(g,"/thirdpartyrepo"))},x=function(e){return d.eE.post("".concat(g,"/thirdpartyrepo"),{Name:e.name,URL:e.baseURL})},H=function(e){return d.eE.put("".concat(g,"/thirdpartyrepo/").concat(e.id),{Name:e.name,URL:e.baseURL})},L=function(e){return d.eE.delete("".concat(g,"/thirdpartyrepo/").concat(e))}},58061:(e,t,n)=>{n.d(t,{Op:()=>m,E5:()=>b,pM:()=>O,I:()=>w,Jr:()=>j,k7:()=>P,Dx:()=>E});var r=n(4942),o=n(29439),i=n(68778),c=n(43047),a=n(69957),u=n(34143),s=n(53636),d=n(54340),v=n(17542),p=n(12990),l=n(37655),f=n(4088),h=n(14206);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=["done","error","pending","unknown","updating","warning","notification"],b={done:{icon:i.ZP,color:f.Z.value,title:"Fully adopted"},error:{icon:c.ZP,color:p.Z.value,title:"Error while adopting"},pending:{icon:s.ZP,title:"Pending adoption"},updating:{icon:d.ZP,title:"Updating"},unknown:{icon:v.ZP,title:"Unknown state"},warning:{icon:a.ZP,color:l.Z.value,title:"Warning while adopting"},notification:{icon:u.ZP,color:h.Z.value,title:"Delivering"}},O=function(e){return Object.values(e).find((function(e){var t;return(null==e||null===(t=e.value)||void 0===t?void 0:t.length)>0||(null==e?void 0:e.length)>0}))},w=function(e,t){return Object.entries(e).map((function(e){var n=(0,o.Z)(e,2),r=n[0],i=n[1],c=(i=void 0===i?{}:i).label,a=i.value;return{category:c,chipKey:r,chips:(null==a?void 0:a.length)>0?Array.isArray(a)?a.map((function(e){return{name:(null==t?void 0:t(e))||e,value:e}})):[{name:(null==t?void 0:t(a))||a,value:a}]:[]}}))},j=function(e,t){var n,o,i,c=t[0];return y(y({},e),{},(0,r.Z)({},null==c?void 0:c.chipKey,y(y({},e[null==c?void 0:c.chipKey]||{}),{},{value:Array.isArray(null===(n=e[null==c?void 0:c.chipKey])||void 0===n?void 0:n.value)?null===(o=e[null==c?void 0:c.chipKey])||void 0===o||null===(i=o.value)||void 0===i?void 0:i.filter((function(e){var t;return!(null!=c&&null!==(t=c.chips)&&void 0!==t&&t.find((function(t){return t.value===e})))})):""})))},P=["active","noReports","neverReported","orphaned"],E={system_profile:{host_type:"edge"}}}}]);
//# sourceMappingURL=../sourcemaps/551.3f54ff80e1bc22fc769a2d36192e7422.js.map
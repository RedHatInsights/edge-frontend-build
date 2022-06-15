"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[8979],{8027:(e,r,t)=>{t.d(r,{$v:()=>s,Z4:()=>u,g5:()=>l});var n=t(15861),o=t(87757),c=t.n(o),a=t(66702),i=t(93454),s=function(e){var r=e.query,t=(0,a.Vs)(r);return i.eE.get("".concat(a.Ds,"/devices/devicesview?").concat(t))},u=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.eE.get("".concat(a.Ds,"/devices/").concat(r));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.eE.post("".concat(a.Ds,"/updates"),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},93597:(e,r,t)=>{t.d(r,{H1:()=>u,Bi:()=>l,dt:()=>p,QY:()=>O,EC:()=>f,Dk:()=>b,EV:()=>g,Kz:()=>y,$c:()=>d});var n=t(15861),o=t(29439),c=t(87757),a=t.n(c),i=t(66702),s=t(93454),u=function(e){var r={name:e};return s.eE.post("".concat(i.Ds,"/images/checkImageName"),r)},l=function(e){var r=e.Id,t=e.name,n=e.version,c=e.description,a=e.release,u=e.architecture,l=e.username,p=e.credentials,O=e.imageType,f=e["selected-packages"],b=e["third-party-repositories"],g=e["custom-packages"],y=O||[],d=(0,o.Z)(y,1)[0];O.length>1&&(d="rhel-edge-installer");var E={name:t,version:n,description:c,distribution:a,imageType:d,packages:f.map((function(e){return{name:e.name}})),outputTypes:O,commit:{arch:u},installer:{username:l,sshkey:p},thirdPartyRepositories:null==b?void 0:b.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}}))},j="".concat(i.Ds,"/images");return n>1&&(j+="/".concat(r,"/update")),s.eE.post(j,E)},p=function(e){var r=e.id,t=e.q,n=void 0===t?{limit:20,offset:0,sort_by:"-created_at"}:t,o=(0,i.Vs)(n);return s.eE.get("".concat(i.Ds,"/image-sets/").concat(r,"?").concat(o))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},r=(0,i.Vs)(e);return s.eE.get("".concat(i.Ds,"/image-sets?").concat(r))},f=function(e){return s.eE.get("".concat(i.Ds,"/images/").concat(e,"/status"))},b=function(e){return s.eE.get("".concat(i.Ds,"/updates/device/").concat(e,"/image"))},g=function(){var e=(0,n.Z)(a().mark((function e(r,t,n){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:r,architecture:t,search:n}),e.abrupt("return",(0,s.eE)("".concat(i.DO,"/packages?").concat(o.toString())));case 2:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),y=function(e){var r=e.id;return s.eE.get("".concat(i.Ds,"/images/").concat(r,"/details"))},d=function(e){var r=e.query;""===r&&(r={limit:20,offset:0,sort_by:"-updated_at"});var t=(0,i.Vs)(r);return s.eE.get("".concat(i.Ds,"/image-sets?").concat(t))}},35681:(e,r,t)=>{t.d(r,{Z:()=>b});var n=t(75418),o=t.n(n),c=t(45697),a=t.n(c),i=t(69174),s=t(75824),u=t(79851),l=t(34512),p=t(98309),O={booting:{text:"Booting",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"},running:{text:"Running",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},success:{text:"Ready",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:p.iQ.exclamationTriangle,color:p.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:p.iQ.timesCircle,color:p.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:p.iQ.unknown}},f=function(e){var r=e.type,t=e.isLabel,n=void 0!==t&&t,c=e.toolTipContent,a=void 0===c?"":c,p=e.className,f=void 0===p?"":p,b=Object.prototype.hasOwnProperty.call(O,r)?O[r]:O.default,g=b.text,y=b.Icon,d=b.color,E=b.labelColor;return o().createElement(o().Fragment,null,n?o().createElement(i._,{color:E,icon:o().createElement(y,null),className:f},g):o().createElement(u.P,{style:{color:d},className:f},o().createElement(l.J,{className:"pf-u-mr-sm"},a?o().createElement(s.u,{content:"blargh"},o().createElement(y,null)):o().createElement(y,null)),o().createElement(l.J,null,o().createElement("p",null,g))))};const b=f;f.propTypes={type:a().string,isLabel:a().bool,toolTipContent:a().string,className:a().string}},96094:(e,r,t)=>{t.d(r,{Z:()=>f});var n=t(4942),o=t(15861),c=t(29439),a=t(87757),i=t.n(a),s=t(83215),u=t(75418),l=t(28216);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const f=function(e){var r,t=e.api,n=e.id,a=void 0===n?null:n,p=e.statusMessages,f=e.tableReload,b=void 0!==f&&f,g=(0,l.I0)(),y=(0,u.useState)([]),d=(0,c.Z)(y,2),E=d[0],j=d[1],v=(0,u.useState)(!0),P=(0,c.Z)(v,2),D=P[0],h=P[1],m=(0,u.useState)(!1),L=(0,c.Z)(m,2),w=L[0],_=L[1],I=null===(r=p)||void 0===r?void 0:r.onSuccess;p||(p={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var Z=function(){var e=(0,o.Z)(i().mark((function e(){var r,n,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:"",h(!0),e.prev=2,e.next=5,t({id:a,query:r});case 5:n=e.sent,j(n),I&&g(O({},(0,s.wN)(O({variant:"success"},p.onSuccess)))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),_(!0),g(O({},(0,s.wN)(O({variant:"danger"},p.onError))));case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){b||Z()}),[]),[{data:E,isLoading:D,hasError:w},Z]}},59086:(e,r,t)=>{t.d(r,{Cx:()=>i,Th:()=>s,sK:()=>u,Ng:()=>l,xX:()=>p,wg:()=>O,tG:()=>f,FA:()=>b,zN:()=>g,Nv:()=>y,RD:()=>d,W5:()=>E,rQ:()=>j,Tz:()=>v,Oi:()=>P,Cz:()=>D,j$:()=>h});var n=t(24350),o=t.n(n),c=t(94654),a=t.n(c),i="LOAD_DEVICE_SUMMARY",s="LOAD_ACTIVE_IMAGES",u="LOAD_EDGE_IMAGES",l="LOAD_EDGE_IMAGE_SETS",p="LOAD_EDGE_IMAGE_PACKAGES",O="LOAD_GROUPS",f="LOAD_GROUP_DETAIL",b="LOAD_TRESHOLD",g="LOAD_DEVICES_INFO",y="LOAD_CANARIES_INFO",d="LOAD_GROUP_DEVICES_INFO",E="LOAD_IMAGE_STATUS",j="LOAD_IMAGE_DETAIL",v="LOAD_IMAGE_SET_DETAIL",P="CREATE_NEW_IMAGE",D=("".concat(P,"_RESET"),"POLLING_IMAGES"),h="LOAD_DEVICE_TABLE",m=a()([u,l,p,s,O,f,b,g,y,d,E,j,v,P,h],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}));o()(m,(function(e){return e}))},94778:(e,r,t)=>{t.d(r,{J_:()=>c,Es:()=>a,n9:()=>i,Fj:()=>s,VR:()=>u});var n=t(59086),o=t(93597);t(8027);var c=function(e,r){e({type:n.rQ,payload:(0,o.Kz)({id:r})}).catch((function(){return null}))},a=function(e,r,t){e({type:n.Oi,payload:(0,o.Bi)(r)}).then(t).catch((function(){return null}))},i=function(e,r){e({type:n.Ng,payload:(0,o.QY)(r)}).catch((function(){return null}))},s=function(e){var r=e.id,t=e.name;return{type:"".concat(n.Cz,"_ADD"),payload:{name:t,id:r}}},u=function(e,r,t){e({type:n.Tz,payload:(0,o.dt)({id:r,q:t})}).catch((function(){return null}))}},5230:(e,r,t)=>{t.d(r,{Ch:()=>ie,OD:()=>m,MQ:()=>I});var n,o,c,a,i,s,u=t(4942),l=t(9036),p=t(59086);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,l.Gg)((n={},(0,u.Z)(n,"".concat(p.Cx,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(n,"".concat(p.Cx,"_FULFILLED"),(function(e,r){var t=r.payload;return f(f({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(n,"".concat(p.Cx,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No device summary data to view"}})),n),{}),(0,l.Gg)((o={},(0,u.Z)(o,"".concat(p.Th,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(o,"".concat(p.Th,"_FULFILLED"),(function(e,r){var t=r.payload;return g(g({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(o,"".concat(p.Th,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No images to view"}})),o),{}),(0,l.Gg)((c={},(0,u.Z)(c,"".concat(p.sK,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(c,"".concat(p.sK,"_FULFILLED"),(function(e,r){var t=r.payload;return d(d({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(c,"".concat(p.sK,"_REJECTED"),(function(e,r){var t=r.payload;return d(d({},e),{},{isLoading:!1,hasError:!0,data:t})})),c),{}),(0,l.Gg)((a={},(0,u.Z)(a,"".concat(p.Ng,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(a,"".concat(p.Ng,"_FULFILLED"),(function(e,r){var t=r.payload;return j(j({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(a,"".concat(p.Ng,"_REJECTED"),(function(e,r){var t=r.payload;return j(j({},e),{},{isLoading:!1,hasError:!0,data:t})})),a),{}),(0,l.Gg)((i={},(0,u.Z)(i,"".concat(p.W5,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(i,"".concat(p.W5,"_FULFILLED"),(function(e,r){var t=r.payload;return P(P({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(i,"".concat(p.W5,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image status to view"}})),i),{});const m=(0,l.Gg)((s={},(0,u.Z)(s,"".concat(p.rQ,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(s,"".concat(p.rQ,"_FULFILLED"),(function(e,r){var t=r.payload;return h(h({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(s,"".concat(p.rQ,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image detail to view"}})),s),{});var L;function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const I=(0,l.Gg)((L={},(0,u.Z)(L,"".concat(p.Tz,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(L,"".concat(p.Tz,"_FULFILLED"),(function(e,r){var t=r.payload;return _(_({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(L,"".concat(p.Tz,"_REJECTED"),(function(e,r){return{isLoading:!1,hasError:!0,data:r.payload}})),L),{});var Z,N,S,G,C;function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function M(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,l.Gg)((Z={},(0,u.Z)(Z,"".concat(p.xX,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(Z,"".concat(p.xX,"_FULFILLED"),(function(e,r){var t=r.payload;return F(F({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(Z,"".concat(p.xX,"_REJECTED"),(function(e,r){var t=r.payload;return F(F({},e),{},{isLoading:!1,hasError:!0,data:t})})),Z),{}),(0,l.Gg)((N={},(0,u.Z)(N,"".concat(p.wg,"_PENDING"),(function(e){return k(k({},e),{},{groups:[],isLoading:!0})})),(0,u.Z)(N,"".concat(p.wg,"_FULFILLED"),(function(e,r){var t=r.payload;return k(k({},e),{},{isLoading:!1,groups:(null==t?void 0:t.results)||[],meta:(null==t?void 0:t.meta)||{}})})),N),{}),(0,l.Gg)((S={},(0,u.Z)(S,"".concat(p.FA,"_PENDING"),(function(e){return x(x({},e),{},{threshold:{},isLoading:!0})})),(0,u.Z)(S,"".concat(p.FA,"_FULFILLED"),(function(e,r){var t=r.payload;return x(x({},e),{},{threshold:(null==t?void 0:t.results)||{},isLoading:!1})})),S),{}),(0,l.Gg)((G={},(0,u.Z)(G,"".concat(p.zN,"_PENDING"),(function(e){return Q(Q({},e),{},{devicesInfo:{},isLoading:!0})})),(0,u.Z)(G,"".concat(p.zN,"_FULFILLED"),(function(e,r){var t=r.payload;return Q(Q({},e),{},{devicesInfo:(null==t?void 0:t.results)||{},isLoading:!1})})),G),{}),(0,l.Gg)((C={},(0,u.Z)(C,"".concat(p.Nv,"_PENDING"),(function(e){return M(M({},e),{},{canariesInfo:[],isLoading:!0})})),(0,u.Z)(C,"".concat(p.Nv,"_FULFILLED"),(function(e,r){var t=r.payload;return M(M({},e),{},{canariesInfo:(null==t?void 0:t.results)||[],isLoading:!1})})),C),{});var z=t(75418),V=t.n(z),q=(t(87462),t(45987)),K=t(45697),$=t.n(K),W=t(98309);t(17542),t(75824);$().oneOf(W.Op);var B,X,Y,H=t(99332),ee=t(21314),re=["isSecure"],te=function(e){var r=e.isSecure,t=(0,q.Z)(e,re),n=r?H.ZP:ee.ZP;return V().createElement(n,t)};function ne(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function oe(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ne(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ce(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ae(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ce(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}te.propTypes={isSecure:$().bool},te.defaultProps={isSecure:!1},(0,l.Gg)((B={},(0,u.Z)(B,"".concat(p.tG,"_PENDING"),(function(e){return oe(oe({},e),{},{isLoading:!0})})),(0,u.Z)(B,"".concat(p.tG,"_FULFILLED"),(function(e,r){var t=r.payload;return oe(oe({},e),{},{isLoading:!1,name:(null==t?void 0:t.name)||"",uuid:(null==t?void 0:t.uuid)||"",devices:(null==t?void 0:t.results)||[],meta:(null==t?void 0:t.meta)||{}})})),B),{}),(0,l.Gg)((X={},(0,u.Z)(X,"".concat(p.RD,"_PENDING"),(function(e){return ae(ae({},e),{},{devicesInfo:{},isLoading:!0})})),(0,u.Z)(X,"".concat(p.RD,"_FULFILLED"),(function(e,r){var t=r.payload;return ae(ae({},e),{},{devicesInfo:t,isLoading:!1})})),X),{});const ie=(0,l.Gg)((Y={},(0,u.Z)(Y,"".concat(p.Oi,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,error:null}})),(0,u.Z)(Y,"".concat(p.Oi,"_FULFILLED"),(function(){return{isLoading:!1,hasError:!1,error:null}})),(0,u.Z)(Y,"".concat(p.Oi,"_REJECTED"),(function(e,r){return{isLoading:!1,hasError:!0,error:r.payload}})),(0,u.Z)(Y,"".concat(p.Oi,"_RESET"),(function(){return{isLoading:!1,hasError:!1,error:null}})),Y),{});var se;function ue(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function le(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ue(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,l.Gg)((se={},(0,u.Z)(se,"".concat(p.j$,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(se,"".concat(p.j$,"_FULFILLED"),(function(e,r){var t=r.payload;return le(le({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(se,"".concat(p.j$,"_REJECTED"),(function(e,r){var t=r.payload;return le(le({},e),{},{isLoading:!1,hasError:!0,data:t})})),se),{})}}]);
//# sourceMappingURL=../sourcemaps/8979.75ec2a06fee37f2efdb7f1928564b10e.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[9989],{8027:(e,r,t)=>{t.d(r,{$v:()=>s,Z4:()=>u,g5:()=>l});var n=t(15861),o=t(87757),c=t.n(o),a=t(66702),i=t(93454),s=function(e){var r=e.query,t=(0,a.Vs)(r);return i.eE.get("".concat(a.Ds,"/devices/devicesview?").concat(t))},u=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.eE.get("".concat(a.Ds,"/devices/").concat(r));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.eE.post("".concat(a.Ds,"/updates"),r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},93597:(e,r,t)=>{t.d(r,{H1:()=>u,Bi:()=>l,dt:()=>p,dj:()=>O,L0:()=>f,QY:()=>b,EC:()=>g,Dk:()=>y,EV:()=>d,Kz:()=>E,$c:()=>j});var n=t(15861),o=t(29439),c=t(87757),a=t.n(c),i=t(66702),s=t(93454),u=function(e){var r={name:e};return s.eE.post("".concat(i.Ds,"/images/checkImageName"),r)},l=function(e){var r=e.Id,t=e.name,n=e.version,c=e.description,a=e.release,u=e.architecture,l=e.username,p=e.credentials,O=e.imageType,f=e["selected-packages"],b=e["third-party-repositories"],g=e["custom-packages"],y=O||[],d=(0,o.Z)(y,1)[0];O.length>1&&(d="rhel-edge-installer");var E={name:t,version:n,description:c,distribution:a,imageType:d,packages:f.map((function(e){return{name:e.name}})),outputTypes:O,commit:{arch:u},installer:{username:l,sshkey:p},thirdPartyRepositories:null==b?void 0:b.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}}))},j="".concat(i.Ds,"/images");return n>1&&(j+="/".concat(r,"/update")),s.eE.post(j,E)},p=function(e){var r=e.id,t=e.q,n=void 0===t?{limit:10,offset:0,sort_by:"-created_at"}:t,o=(0,i.Vs)(n);return s.eE.get("".concat(i.Ds,"/image-sets/").concat(r,"?").concat(o))},O=function(e){var r=e.imageSetID,t=e.query,n=void 0===t?{limit:20,offset:0,sort_by:"-created_at"}:t,o=(0,i.Vs)(n);return s.eE.get("".concat(i.Ds,"/image-sets/view/").concat(r,"/versions?").concat(o))},f=function(e){var r=e.id,t=e.q,n=void 0===t?{limit:20,offset:0,sort_by:"-created_at"}:t,o=(0,i.Vs)(n);return s.eE.get("".concat(i.Ds,"/image-sets/view/").concat(r,"?").concat(o))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},r=(0,i.Vs)(e);return s.eE.get("".concat(i.Ds,"/image-sets?").concat(r))},g=function(e){return s.eE.get("".concat(i.Ds,"/images/").concat(e,"/status"))},y=function(e){return s.eE.get("".concat(i.Ds,"/updates/device/").concat(e,"/image"))},d=function(){var e=(0,n.Z)(a().mark((function e(r,t,n){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:r,architecture:t,search:n}),e.abrupt("return",(0,s.eE)("".concat(i.DO,"/packages?").concat(o.toString())));case 2:case"end":return e.stop()}}),e)})));return function(r,t,n){return e.apply(this,arguments)}}(),E=function(e){var r=e.id;return s.eE.get("".concat(i.Ds,"/images/").concat(r,"/details"))},j=function(e){var r=e.query;""===r&&(r={limit:20,offset:0,sort_by:"-updated_at"});var t=(0,i.Vs)(r);return s.eE.get("".concat(i.Ds,"/image-sets/view?").concat(t))}},35681:(e,r,t)=>{t.d(r,{Z:()=>b});var n=t(75418),o=t.n(n),c=t(45697),a=t.n(c),i=t(69174),s=t(75824),u=t(79851),l=t(34512),p=t(98309),O={booting:{text:"Booting",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"},running:{text:"Running",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},success:{text:"Ready",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:p.iQ.checkCircle,color:p.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:p.iQ.exclamationTriangle,color:p.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:p.iQ.timesCircle,color:p.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:p.iQ.unknown},interrupted:{text:"Image build in progress",Icon:p.iQ.inProgress,color:p.OE.blue,labelColor:"blue"}},f=function(e){var r=e.type,t=e.isLabel,n=void 0!==t&&t,c=e.toolTipContent,a=void 0===c?"":c,p=e.className,f=void 0===p?"":p,b=Object.prototype.hasOwnProperty.call(O,r)?O[r]:O.default,g=b.text,y=b.Icon,d=b.color,E=b.labelColor;return o().createElement(o().Fragment,null,n?o().createElement(i._,{color:E,icon:o().createElement(y,null),className:f},g):o().createElement(u.P,{style:{color:d},className:f},o().createElement(l.J,{className:"pf-u-mr-sm"},a?o().createElement(s.u,{content:"blargh"},o().createElement(y,null)):o().createElement(y,null)),o().createElement(l.J,null,o().createElement("p",null,g))))};const b=f;f.propTypes={type:a().string,isLabel:a().bool,toolTipContent:a().string,className:a().string}},59086:(e,r,t)=>{t.d(r,{Cx:()=>i,Th:()=>s,sK:()=>u,Ng:()=>l,xX:()=>p,wg:()=>O,tG:()=>f,FA:()=>b,zN:()=>g,Nv:()=>y,RD:()=>d,W5:()=>E,rQ:()=>j,Tz:()=>v,Oi:()=>P,Cz:()=>D,j$:()=>h});var n=t(24350),o=t.n(n),c=t(94654),a=t.n(c),i="LOAD_DEVICE_SUMMARY",s="LOAD_ACTIVE_IMAGES",u="LOAD_EDGE_IMAGES",l="LOAD_EDGE_IMAGE_SETS",p="LOAD_EDGE_IMAGE_PACKAGES",O="LOAD_GROUPS",f="LOAD_GROUP_DETAIL",b="LOAD_TRESHOLD",g="LOAD_DEVICES_INFO",y="LOAD_CANARIES_INFO",d="LOAD_GROUP_DEVICES_INFO",E="LOAD_IMAGE_STATUS",j="LOAD_IMAGE_DETAIL",v="LOAD_IMAGE_SET_DETAIL",P="CREATE_NEW_IMAGE",D=("".concat(P,"_RESET"),"POLLING_IMAGES"),h="LOAD_DEVICE_TABLE",m=a()([u,l,p,s,O,f,b,g,y,d,E,j,v,P,h],(function(e){return[e,"".concat(e,"_PENDING"),"".concat(e,"_FULFILLED"),"".concat(e,"_REJECTED")]}));o()(m,(function(e){return e}))},94778:(e,r,t)=>{t.d(r,{J_:()=>c,Es:()=>a,n9:()=>i,Fj:()=>s});var n=t(59086),o=t(93597);t(8027);var c=function(e,r){e({type:n.rQ,payload:(0,o.Kz)({id:r})}).catch((function(){return null}))},a=function(e,r,t){e({type:n.Oi,payload:(0,o.Bi)(r)}).then(t).catch((function(){return null}))},i=function(e,r){e({type:n.Ng,payload:(0,o.QY)(r)}).catch((function(){return null}))},s=function(e){var r=e.id,t=e.name;return{type:"".concat(n.Cz,"_ADD"),payload:{name:t,id:r}}}},5230:(e,r,t)=>{t.d(r,{Ch:()=>ae,OD:()=>m});var n,o,c,a,i,s,u=t(4942),l=t(9036),p=t(59086);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,l.Gg)((n={},(0,u.Z)(n,"".concat(p.Cx,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(n,"".concat(p.Cx,"_FULFILLED"),(function(e,r){var t=r.payload;return f(f({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(n,"".concat(p.Cx,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No device summary data to view"}})),n),{}),(0,l.Gg)((o={},(0,u.Z)(o,"".concat(p.Th,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(o,"".concat(p.Th,"_FULFILLED"),(function(e,r){var t=r.payload;return g(g({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(o,"".concat(p.Th,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No images to view"}})),o),{}),(0,l.Gg)((c={},(0,u.Z)(c,"".concat(p.sK,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(c,"".concat(p.sK,"_FULFILLED"),(function(e,r){var t=r.payload;return d(d({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(c,"".concat(p.sK,"_REJECTED"),(function(e,r){var t=r.payload;return d(d({},e),{},{isLoading:!1,hasError:!0,data:t})})),c),{}),(0,l.Gg)((a={},(0,u.Z)(a,"".concat(p.Ng,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(a,"".concat(p.Ng,"_FULFILLED"),(function(e,r){var t=r.payload;return j(j({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(a,"".concat(p.Ng,"_REJECTED"),(function(e,r){var t=r.payload;return j(j({},e),{},{isLoading:!1,hasError:!0,data:t})})),a),{}),(0,l.Gg)((i={},(0,u.Z)(i,"".concat(p.W5,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(i,"".concat(p.W5,"_FULFILLED"),(function(e,r){var t=r.payload;return P(P({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(i,"".concat(p.W5,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image status to view"}})),i),{});const m=(0,l.Gg)((s={},(0,u.Z)(s,"".concat(p.rQ,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(s,"".concat(p.rQ,"_FULFILLED"),(function(e,r){var t=r.payload;return h(h({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(s,"".concat(p.rQ,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image detail to view"}})),s),{});var L,w,_,I,Z,N;function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function C(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?C(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function U(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?U(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Q(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,l.Gg)((L={},(0,u.Z)(L,"".concat(p.Tz,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(L,"".concat(p.Tz,"_FULFILLED"),(function(e,r){var t=r.payload;return G(G({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(L,"".concat(p.Tz,"_REJECTED"),(function(e,r){return{isLoading:!1,hasError:!0,data:r.payload}})),L),{}),(0,l.Gg)((w={},(0,u.Z)(w,"".concat(p.xX,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(w,"".concat(p.xX,"_FULFILLED"),(function(e,r){var t=r.payload;return F(F({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(w,"".concat(p.xX,"_REJECTED"),(function(e,r){var t=r.payload;return F(F({},e),{},{isLoading:!1,hasError:!0,data:t})})),w),{}),(0,l.Gg)((_={},(0,u.Z)(_,"".concat(p.wg,"_PENDING"),(function(e){return T(T({},e),{},{groups:[],isLoading:!0})})),(0,u.Z)(_,"".concat(p.wg,"_FULFILLED"),(function(e,r){var t=r.payload;return T(T({},e),{},{isLoading:!1,groups:(null==t?void 0:t.results)||[],meta:(null==t?void 0:t.meta)||{}})})),_),{}),(0,l.Gg)((I={},(0,u.Z)(I,"".concat(p.FA,"_PENDING"),(function(e){return R(R({},e),{},{threshold:{},isLoading:!0})})),(0,u.Z)(I,"".concat(p.FA,"_FULFILLED"),(function(e,r){var t=r.payload;return R(R({},e),{},{threshold:(null==t?void 0:t.results)||{},isLoading:!1})})),I),{}),(0,l.Gg)((Z={},(0,u.Z)(Z,"".concat(p.zN,"_PENDING"),(function(e){return x(x({},e),{},{devicesInfo:{},isLoading:!0})})),(0,u.Z)(Z,"".concat(p.zN,"_FULFILLED"),(function(e,r){var t=r.payload;return x(x({},e),{},{devicesInfo:(null==t?void 0:t.results)||{},isLoading:!1})})),Z),{}),(0,l.Gg)((N={},(0,u.Z)(N,"".concat(p.Nv,"_PENDING"),(function(e){return J(J({},e),{},{canariesInfo:[],isLoading:!0})})),(0,u.Z)(N,"".concat(p.Nv,"_FULFILLED"),(function(e,r){var t=r.payload;return J(J({},e),{},{canariesInfo:(null==t?void 0:t.results)||[],isLoading:!1})})),N),{});var V=t(75418),z=t.n(V),M=(t(87462),t(45987)),K=t(45697),$=t.n(K),q=t(98309);t(17542),t(75824);$().oneOf(q.Op);var W,B,X,Y=t(99332),H=t(21314),ee=["isSecure"],re=function(e){var r=e.isSecure,t=(0,M.Z)(e,ee),n=r?Y.ZP:H.ZP;return z().createElement(n,t)};function te(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ne(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?te(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):te(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ce(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}re.propTypes={isSecure:$().bool},re.defaultProps={isSecure:!1},(0,l.Gg)((W={},(0,u.Z)(W,"".concat(p.tG,"_PENDING"),(function(e){return ne(ne({},e),{},{isLoading:!0})})),(0,u.Z)(W,"".concat(p.tG,"_FULFILLED"),(function(e,r){var t=r.payload;return ne(ne({},e),{},{isLoading:!1,name:(null==t?void 0:t.name)||"",uuid:(null==t?void 0:t.uuid)||"",devices:(null==t?void 0:t.results)||[],meta:(null==t?void 0:t.meta)||{}})})),W),{}),(0,l.Gg)((B={},(0,u.Z)(B,"".concat(p.RD,"_PENDING"),(function(e){return ce(ce({},e),{},{devicesInfo:{},isLoading:!0})})),(0,u.Z)(B,"".concat(p.RD,"_FULFILLED"),(function(e,r){var t=r.payload;return ce(ce({},e),{},{devicesInfo:t,isLoading:!1})})),B),{});const ae=(0,l.Gg)((X={},(0,u.Z)(X,"".concat(p.Oi,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,error:null}})),(0,u.Z)(X,"".concat(p.Oi,"_FULFILLED"),(function(){return{isLoading:!1,hasError:!1,error:null}})),(0,u.Z)(X,"".concat(p.Oi,"_REJECTED"),(function(e,r){return{isLoading:!1,hasError:!0,error:r.payload}})),(0,u.Z)(X,"".concat(p.Oi,"_RESET"),(function(){return{isLoading:!1,hasError:!1,error:null}})),X),{});var ie;function se(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ue(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?se(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,l.Gg)((ie={},(0,u.Z)(ie,"".concat(p.j$,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,u.Z)(ie,"".concat(p.j$,"_FULFILLED"),(function(e,r){var t=r.payload;return ue(ue({},e),{},{isLoading:!1,hasError:!1,data:t})})),(0,u.Z)(ie,"".concat(p.j$,"_REJECTED"),(function(e,r){var t=r.payload;return ue(ue({},e),{},{isLoading:!1,hasError:!0,data:t})})),ie),{})}}]);
//# sourceMappingURL=../sourcemaps/9989.7e7c92f1ddb6eaa2093ddb84f60f0425.js.map
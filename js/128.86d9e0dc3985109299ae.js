"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[128],{9043:(r,t,e)=>{e.d(t,{Z:()=>p});var n=e(93264),o=e.n(n),c=e(79851),a=e(34512),i=e(45697),u=e.n(i),s=e(68920),O=function(r){var t=r.status,e=s.Jl.unknown,n=s.Bh.unknown,i="Unknown";return s.sX.includes(t)&&(e=s.Jl[t],n=s.Bh[t],i=(i=s.mq[t]).charAt(0).toUpperCase()+i.slice(1).toLowerCase()),o().createElement(c.P,null,o().createElement(a.J,{className:"pf-u-mr-sm"},e(n)),o().createElement(a.J,null,i))};O.propTypes={status:u().oneOf(s.sX)};const p=O},68920:(r,t,e)=>{e.d(t,{sX:()=>s,az:()=>O,Jl:()=>p,Bh:()=>f,mq:()=>l,aN:()=>b,Ei:()=>y,bd:()=>E});var n=e(93264),o=e.n(n),c=e(35451),a=e(18802),i=e(77669),u=e(87673),s=["CREATED","BUILDING","ERROR","SUCCESS"],O="rhel-85",p={unknown:function(r){return o().createElement(u.ZP,{color:r})},CREATED:function(r){return o().createElement(c.ZP,{color:r})},BUILDING:function(r){return o().createElement(a.ZP,{color:r})},ERROR:function(r){return o().createElement(i.ZP,{color:r})},SUCCESS:function(r){return o().createElement(c.ZP,{color:r})}},f={unknown:"grey",CREATED:"green",BUILDING:"blue",ERROR:"red",SUCCESS:"green"},l={CREATED:"CREATED",BUILDING:"Image build in progress",ERROR:"ERROR",SUCCESS:"Ready"},b={"rhel-84":"RHEL 8.4","rhel-85":"RHEL 8.5"},y={"rhel-85":"Red Hat Enterprise Linux (RHEL) 8.5","rhel-84":"Red Hat Enterprise Linux (RHEL) 8.4"},E={"rhel-edge-commit":"RHEL for Edge Commit (.tar)","rhel-edge-installer":"RHEL for Edge Installer (.iso)"}},59086:(r,t,e)=>{e.d(t,{Cx:()=>i,Th:()=>u,sK:()=>s,Ng:()=>O,xX:()=>p,wg:()=>f,tG:()=>l,FA:()=>b,zN:()=>y,Nv:()=>E,RD:()=>g,W5:()=>d,rQ:()=>j,Tz:()=>P,Oi:()=>D,G:()=>L,Cz:()=>h,B_:()=>w});var n=e(24350),o=e.n(n),c=e(94654),a=e.n(c),i="LOAD_DEVICE_SUMMARY",u="LOAD_ACTIVE_IMAGES",s="LOAD_EDGE_IMAGES",O="LOAD_EDGE_IMAGE_SETS",p="LOAD_EDGE_IMAGE_PACKAGES",f="LOAD_GROUPS",l="LOAD_GROUP_DETAIL",b="LOAD_TRESHOLD",y="LOAD_DEVICES_INFO",E="LOAD_CANARIES_INFO",g="LOAD_GROUP_DEVICES_INFO",d="LOAD_IMAGE_STATUS",j="LOAD_IMAGE_DETAIL",P="LOAD_IMAGE_SET_DETAIL",D="CREATE_NEW_IMAGE",L="".concat(D,"_RESET"),h="POLLING_IMAGES",v=a()([s,O,p,u,f,l,b,y,E,g,d,j,P,D],(function(r){return[r,"".concat(r,"_PENDING"),"".concat(r,"_FULFILLED"),"".concat(r,"_REJECTED")]})),w=(o()(v,(function(r){return r})),"CLEAN_ENTITIES")},94778:(r,t,e)=>{e.d(t,{Qo:()=>c,lL:()=>a,MB:()=>i,J_:()=>u,Es:()=>s,Z5:()=>O,n9:()=>p,Fj:()=>f,VR:()=>l});var n=e(59086),o=e(66702),c=function(){return{type:n.B_}},a=function(r,t){r({type:n.Th,payload:(0,o.oj)(t),meta:{notifications:{rejected:{variant:"danger",title:"Can not show images data",description:"Failed receiving images from image-builder"}}}}).catch((function(){return null}))},i=function(r){r({type:n.Cx,payload:o.eK,meta:{notifications:{rejected:{variant:"danger",title:"Can not show device summary data",description:"Failed receiving device summary data from inventory"}}}}).catch((function(){return null}))},u=function(r,t){r({type:n.rQ,payload:(0,o.ot)({id:t})}).catch((function(){return null}))},s=function(r,t,e){r({type:n.Oi,payload:(0,o.Bi)(t)}).then(e).catch((function(){return null}))},O=function(r,t){r({type:n.sK,payload:(0,o.py)(t)}).catch((function(){return null}))},p=function(r,t){r({type:n.Ng,payload:(0,o.QY)(t)}).catch((function(){return null}))},f=function(r){var t=r.id,e=r.name;return{type:"".concat(n.Cz,"_ADD"),payload:{name:e,id:t}}},l=function(r,t,e){r({type:n.Tz,payload:(0,o.dt)({id:t,q:e})}).catch((function(){return null}))}},24672:(r,t,e)=>{e.d(t,{Ch:()=>Or,mR:()=>s,Mx:()=>P,OD:()=>m,MQ:()=>S,b4:()=>l});var n,o=e(4942),c=e(18546),a=e(59086);function i(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function u(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}const s=(0,c.Gg)((n={},(0,o.Z)(n,"".concat(a.Cx,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(n,"".concat(a.Cx,"_FULFILLED"),(function(r,t){var e=t.payload;return u(u({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(n,"".concat(a.Cx,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No device summary data to view"}})),n),{});var O;function p(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function f(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}const l=(0,c.Gg)((O={},(0,o.Z)(O,"".concat(a.Th,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(O,"".concat(a.Th,"_FULFILLED"),(function(r,t){var e=t.payload;return f(f({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(O,"".concat(a.Th,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No images to view"}})),O),{});var b,y;function E(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function g(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function d(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function j(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}(0,c.Gg)((b={},(0,o.Z)(b,"".concat(a.sK,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(b,"".concat(a.sK,"_FULFILLED"),(function(r,t){var e=t.payload;return g(g({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(b,"".concat(a.sK,"_REJECTED"),(function(r,t){var e=t.payload;return g(g({},r),{},{isLoading:!1,hasError:!0,data:e})})),b),{});const P=(0,c.Gg)((y={},(0,o.Z)(y,"".concat(a.Ng,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(y,"".concat(a.Ng,"_FULFILLED"),(function(r,t){var e=t.payload;return j(j({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(y,"".concat(a.Ng,"_REJECTED"),(function(r,t){var e=t.payload;return j(j({},r),{},{isLoading:!1,hasError:!0,data:e})})),y),{});var D,L;function h(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function v(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function w(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function _(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?w(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}(0,c.Gg)((D={},(0,o.Z)(D,"".concat(a.W5,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(D,"".concat(a.W5,"_FULFILLED"),(function(r,t){var e=t.payload;return v(v({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(D,"".concat(a.W5,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image status to view"}})),D),{});const m=(0,c.Gg)((L={},(0,o.Z)(L,"".concat(a.rQ,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(L,"".concat(a.rQ,"_FULFILLED"),(function(r,t){var e=t.payload;return _(_({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(L,"".concat(a.rQ,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image detail to view"}})),L),{});var I;function Z(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function N(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Z(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}const S=(0,c.Gg)((I={},(0,o.Z)(I,"".concat(a.Tz,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(I,"".concat(a.Tz,"_FULFILLED"),(function(r,t){var e=t.payload;return N(N({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(I,"".concat(a.Tz,"_REJECTED"),(function(){return{isLoading:!1,hasError:!0,data:"No image set detail to view"}})),I),{});var G,R,C,A,F;function T(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function U(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?T(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):T(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function k(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function J(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?k(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function M(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function x(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?M(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function z(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function B(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?z(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function H(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function Q(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?H(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):H(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}(0,c.Gg)((G={},(0,o.Z)(G,"".concat(a.xX,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,data:null}})),(0,o.Z)(G,"".concat(a.xX,"_FULFILLED"),(function(r,t){var e=t.payload;return U(U({},r),{},{isLoading:!1,hasError:!1,data:e})})),(0,o.Z)(G,"".concat(a.xX,"_REJECTED"),(function(r,t){var e=t.payload;return U(U({},r),{},{isLoading:!1,hasError:!0,data:e})})),G),{}),(0,c.Gg)((R={},(0,o.Z)(R,"".concat(a.wg,"_PENDING"),(function(r){return J(J({},r),{},{groups:[],isLoading:!0})})),(0,o.Z)(R,"".concat(a.wg,"_FULFILLED"),(function(r,t){var e=t.payload;return J(J({},r),{},{isLoading:!1,groups:(null==e?void 0:e.results)||[],meta:(null==e?void 0:e.meta)||{}})})),R),{}),(0,c.Gg)((C={},(0,o.Z)(C,"".concat(a.FA,"_PENDING"),(function(r){return x(x({},r),{},{threshold:{},isLoading:!0})})),(0,o.Z)(C,"".concat(a.FA,"_FULFILLED"),(function(r,t){var e=t.payload;return x(x({},r),{},{threshold:(null==e?void 0:e.results)||{},isLoading:!1})})),C),{}),(0,c.Gg)((A={},(0,o.Z)(A,"".concat(a.zN,"_PENDING"),(function(r){return B(B({},r),{},{devicesInfo:{},isLoading:!0})})),(0,o.Z)(A,"".concat(a.zN,"_FULFILLED"),(function(r,t){var e=t.payload;return B(B({},r),{},{devicesInfo:(null==e?void 0:e.results)||{},isLoading:!1})})),A),{}),(0,c.Gg)((F={},(0,o.Z)(F,"".concat(a.Nv,"_PENDING"),(function(r){return Q(Q({},r),{},{canariesInfo:[],isLoading:!0})})),(0,o.Z)(F,"".concat(a.Nv,"_FULFILLED"),(function(r,t){var e=t.payload;return Q(Q({},r),{},{canariesInfo:(null==e?void 0:e.results)||[],isLoading:!1})})),F),{});var K=e(93264),X=e.n(K),V=(e(87462),e(45987)),W=e(45697),q=e.n(W),Y=e(58061);e(17542),e(35224);q().oneOf(Y.Op);var $,rr,tr,er=e(99332),nr=e(21314),or=["isSecure"],cr=function(r){var t=r.isSecure,e=(0,V.Z)(r,or),n=t?er.ZP:nr.ZP;return X().createElement(n,e)};function ar(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function ir(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?ar(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ar(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}function ur(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function sr(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?ur(Object(e),!0).forEach((function(t){(0,o.Z)(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):ur(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}cr.propTypes={isSecure:q().bool},cr.defaultProps={isSecure:!1},(0,c.Gg)(($={},(0,o.Z)($,"".concat(a.tG,"_PENDING"),(function(r){return ir(ir({},r),{},{isLoading:!0})})),(0,o.Z)($,"".concat(a.tG,"_FULFILLED"),(function(r,t){var e=t.payload;return ir(ir({},r),{},{isLoading:!1,name:(null==e?void 0:e.name)||"",uuid:(null==e?void 0:e.uuid)||"",devices:(null==e?void 0:e.results)||[],meta:(null==e?void 0:e.meta)||{}})})),$),{}),(0,c.Gg)((rr={},(0,o.Z)(rr,"".concat(a.RD,"_PENDING"),(function(r){return sr(sr({},r),{},{devicesInfo:{},isLoading:!0})})),(0,o.Z)(rr,"".concat(a.RD,"_FULFILLED"),(function(r,t){var e=t.payload;return sr(sr({},r),{},{devicesInfo:e,isLoading:!1})})),rr),{});const Or=(0,c.Gg)((tr={},(0,o.Z)(tr,"".concat(a.Oi,"_PENDING"),(function(){return{isLoading:!0,hasError:!1,error:null}})),(0,o.Z)(tr,"".concat(a.Oi,"_FULFILLED"),(function(){return{isLoading:!1,hasError:!1,error:null}})),(0,o.Z)(tr,"".concat(a.Oi,"_REJECTED"),(function(r,t){return{isLoading:!1,hasError:!0,error:t.payload}})),(0,o.Z)(tr,"".concat(a.Oi,"_RESET"),(function(){return{isLoading:!1,hasError:!1,error:null}})),tr),{})}}]);
//# sourceMappingURL=../sourcemaps/128.be954ea30e86ed487690f922dd93c553.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[999],{87999:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(15861),o=t(29439),a=t(87757),i=t.n(a),c=t(75418),l=t.n(c),u=t(4874),s=t(59245),m=t(4147),d=t(52643),p=t(2372),f=t(58061),g=l().lazy((function(){return Promise.all([t.e(186),t.e(213),t.e(409),t.e(807),t.e(673)]).then(t.bind(t,38857))})),h=l().lazy((function(){return Promise.all([t.e(186),t.e(213),t.e(409),t.e(807),t.e(673)]).then(t.bind(t,99456))})),v=l().lazy((function(){return Promise.all([t.e(186),t.e(213),t.e(409),t.e(807),t.e(673)]).then(t.bind(t,17628))})),E=l().lazy((function(){return Promise.all([t.e(186),t.e(213),t.e(409),t.e(807),t.e(673)]).then(t.bind(t,87675))})),y=l().lazy((function(){return Promise.all([t.e(186),t.e(213),t.e(409),t.e(807),t.e(673)]).then(t.bind(t,14511))})),_=l().lazy((function(){return Promise.all([t.e(186),t.e(821),t.e(409),t.e(807),t.e(855)]).then(t.bind(t,12877))})),P=l().lazy((function(){return Promise.all([t.e(186),t.e(409),t.e(508)]).then(t.bind(t,4250))})),b=function(){return l().createElement(c.Suspense,{fallback:l().createElement(d.b,null,l().createElement(p.$,{size:"xl"}))},l().createElement(u.Switch,null,l().createElement(u.Route,{exact:!0,path:m._j.Xx,component:h}),l().createElement(u.Route,{exact:!0,path:m._j.NJ,component:v}),l().createElement(u.Route,{exact:!0,path:m._j.r9,component:h}),l().createElement(u.Route,{exact:!0,path:m._j.bg,component:v}),l().createElement(u.Route,{exact:!0,path:m._j.OJ,component:E}),l().createElement(u.Route,{path:m._j.E8,component:g}),l().createElement(u.Route,{path:m._j.ZT,component:_}),l().createElement(u.Route,{path:m._j.sh,component:_}),l().createElement(u.Route,{path:m._j.gb,component:y}),(0,f.gV)("fleet-management.custom-repos")&&l().createElement(u.Route,{exact:!0,path:m._j.jS,component:P}),l().createElement(u.Route,null,l().createElement(u.Redirect,{to:m._j.r9}))))},Z=t(83215),w=t(51344);const j=function(e){var n=(0,c.useContext)(s.g).getRegistry,t=(0,c.useState)(!1),a=(0,o.Z)(t,2),m=a[0],f=a[1],g=(0,u.useHistory)();return(0,c.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return g.push("/".concat(e.navId))}));var e=n().register({notifications:Z.ee});return(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:f(!0);case 3:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),l().createElement(c.Fragment,null,l().createElement(w.Kr,null),m?l().createElement(b,{childProps:e}):l().createElement(d.b,null,l().createElement(p.$,{size:"xl"})))}},58061:(e,n,t)=>{t.d(n,{Op:()=>h,E5:()=>v,n:()=>E,qg:()=>y,Ff:()=>_,fz:()=>P,A8:()=>b,yb:()=>Z,gV:()=>w});var r=t(68778),o=t(43047),a=t(69957),i=t(34143),c=t(53636),l=t(54340),u=t(17542),s=t(12990),m=t(37655),d=t(4088),p=t(14206),f=t(64124),g=t(63746),h=["done","error","pending","unknown","updating","warning","notification"],v={done:{icon:r.ZP,color:d.Z.value,title:"Fully adopted"},error:{icon:o.ZP,color:s.Z.value,title:"Error while adopting"},pending:{icon:c.ZP,title:"Pending adoption"},updating:{icon:l.ZP,title:"Updating"},unknown:{icon:u.ZP,title:"Unknown state"},warning:{icon:a.ZP,color:m.Z.value,title:"Warning while adopting"},notification:{icon:i.ZP,color:p.Z.value,title:"Delivering"}},E=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,t){return"asc"===n?e.name.toLowerCase().localeCompare(t.name.toLowerCase()):t.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},y={type:f.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/,message:"Can only contain letters, numbers, spaces, hyphens ( - ), and underscores( _ )."},_=function(e,n){for(var t=e.split("/"),r={},o=1;o<t.length;o++)t[o]&&(r[n[o-1]]=t[o]);return r.buildUrl=function(){return Object.values(this).reduce((function(e,n){return"function"!=typeof n?"".concat(e,"/").concat(n):e}),"")},r},P=function(e,n){var t=[],r=location.search.length>0?location.search.includes("&")?location.search.split("?")[1].split("&"):location.search.split("?").slice(1):[];return n?(r.includes(e)||r.push(e),t=r):t=r.includes(e)?r.filter((function(n){return n!==e})):r,t.join("&")},b=function(e,n,t){return!0!==e&&!n>0&&!t.location.search.includes("has_filters=true")},Z=function(e){var n=e.deviceData,t=e.imageData;return!((null==n?void 0:n.length)>0&&t)||(null==n?void 0:n.some((function(e){return e.imageSetId!==n[0].imageSetId})))},w=function(e){var n=(0,g.useFlagsStatus)().flagsReady,t=(0,g.useFlag)(e);return!!n&&t}},59245:(e,n,t)=>{t.d(n,{g:()=>d,S:()=>p});var r=t(75418),o=t(9036),a=t(68573),i=t.n(a),c=t(84885),l=t(29439),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},s=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=n.dispatch;return function(n){return function(r){var o=r.type,a=r.payload,i=r.meta;if(s(o)&&u(a)){var c=a.id,m=a.fetcher,d=a.condition,p=a.onEvent;if(e[c])return;return e[c]=!0,void setTimeout((function(){t({type:c,payload:m().then((function(n){e[c]=!1;var o=d(n),a=(0,l.Z)(o,2),i=a[0],u=a[1];((null==p?void 0:p[u])||[]).forEach((function(e){return e(t)})),i&&t(r)}))}).catch((function(){return null}))}),15e3)}if(u(null==i?void 0:i.polling)){var f=i.polling,g=f.id,h=f.fetcher,v=f.condition,E=f.onEvent;t({type:"".concat(g,"_POLLING"),payload:{id:g,fetcher:h,condition:v,onEvent:E}})}n(r)}}}},d=(0,r.createContext)({getRegistry:function(){}});function p(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return new o.xI({},[i(),(0,c.uv)({errorDescriptionKey:["detail","stack"]}),m()].concat(n))}},4147:e=>{e.exports=JSON.parse('{"_j":{"Xx":"/groups","NJ":"/groups/:uuid","r9":"/fleet-management","bg":"/fleet-management/:groupId","OJ":"/inventory","E8":"/inventory/:deviceId","gb":"/manage-images","sh":"/manage-images/:imageId","ZT":"/manage-images/:imageId/versions/:imageVersionId","jS":"/repositories"}}')}}]);
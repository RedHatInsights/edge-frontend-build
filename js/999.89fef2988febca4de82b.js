"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[999],{87999:(e,n,t)=>{t.d(n,{Z:()=>P});var r=t(87757),i=t.n(r),o=t(48926),a=t.n(o),c=t(63038),l=t.n(c),u=t(1427),s=t.n(u),f=t(16530),m=t(59245),h=t(4147),d=t(52643),p=t(2372),g=s().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(673)]).then(t.bind(t,63875))})),v=s().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(673)]).then(t.bind(t,75220))})),E=s().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(673)]).then(t.bind(t,98364))})),y=s().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(673)]).then(t.bind(t,70102))})),_=function(){return s().createElement(u.Suspense,{fallback:s().createElement(d.b,null,s().createElement(p.$,{size:"xl"}))},s().createElement(f.Switch,null,s().createElement(f.Route,{exact:!0,path:h._j.r9,component:v}),s().createElement(f.Route,{path:h._j.sh,component:y}),s().createElement(f.Route,{path:h._j.gb,component:E}),s().createElement(f.Route,{path:h._j.bg,component:g}),s().createElement(f.Route,null,s().createElement(f.Redirect,{to:h._j.r9}))))},b=t(83215),x=t(96533);const P=function(e){var n=(0,u.useContext)(m.g).getRegistry,t=(0,u.useState)(!1),r=l()(t,2),o=r[0],c=r[1],h=(0,f.useHistory)();return(0,u.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return h.push("/".concat(e.navId))}));var e=n().register({notifications:b.ee});return a()(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:c(!0);case 3:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),s().createElement(u.Fragment,null,s().createElement(x.Kr,null),o?s().createElement(_,{childProps:e}):s().createElement(d.b,null,s().createElement(p.$,{size:"xl"})))}},59245:(e,n,t)=>{t.d(n,{g:()=>h,S:()=>d});var r=t(1427),i=t(18546),o=t(68573),a=t.n(o),c=t(84885),l=t(63038),u=t.n(l),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},f=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=n.dispatch;return function(n){return function(r){var i=r.type,o=r.payload,a=r.meta;if(f(i)&&s(o)){var c=o.id,l=o.fetcher,m=o.condition,h=o.onEvent;if(e[c])return;return e[c]=!0,void setTimeout((function(){t({type:c,payload:l().then((function(n){e[c]=!1;var i=m(n),o=u()(i,2),a=o[0],l=o[1];((null==h?void 0:h[l])||[]).forEach((function(e){return e(t)})),a&&t(r)}))}).catch((function(){return null}))}),15e3)}if(s(null==a?void 0:a.polling)){var d=a.polling,p=d.id,g=d.fetcher,v=d.condition,E=d.onEvent;t({type:"".concat(p,"_POLLING"),payload:{id:p,fetcher:g,condition:v,onEvent:E}})}n(r)}}}},h=(0,r.createContext)({getRegistry:function(){}});function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return new i.xI({},[a(),(0,c.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]}),m()].concat(n))}},4147:e=>{e.exports=JSON.parse('{"_j":{"r9":"/fleet-management","bg":"/fleet-management/:inventoryId","gb":"/manage-images","sh":"/manage-images/:imageId"}}')}}]);
//# sourceMappingURL=../sourcemaps/999.ae1926e9322f7aba42b1.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[364],{87999:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(15861),i=t(29439),a=t(87757),o=t.n(a),c=t(93264),u=t.n(c),l=t(75662),s=t(59245),m=t(4147),f=t(52643),h=t(2372),d=u().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(205),t.e(128),t.e(673)]).then(t.bind(t,63875))})),p=u().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(205),t.e(128),t.e(673)]).then(t.bind(t,75220))})),g=u().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(205),t.e(128),t.e(673)]).then(t.bind(t,14511))})),v=u().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(205),t.e(735),t.e(128),t.e(46),t.e(877)]).then(t.bind(t,12877))})),E=u().lazy((function(){return Promise.all([t.e(410),t.e(252),t.e(736),t.e(205),t.e(907)]).then(t.bind(t,52907))})),y=function(){return u().createElement(c.Suspense,{fallback:u().createElement(f.b,null,u().createElement(h.$,{size:"xl"}))},u().createElement(l.Switch,null,u().createElement(l.Route,{exact:!0,path:m._j.r9,component:p}),u().createElement(l.Route,{path:m._j.ZT,component:v}),u().createElement(l.Route,{path:m._j.sh,component:v}),u().createElement(l.Route,{path:m._j.gb,component:g}),u().createElement(l.Route,{path:m._j.bg,component:d}),u().createElement(l.Route,{exact:!0,path:m._j.jS,component:E}),u().createElement(l.Route,null,u().createElement(l.Redirect,{to:m._j.r9}))))},_=t(83215),b=t(51344);const j=function(e){var n=(0,c.useContext)(s.g).getRegistry,t=(0,c.useState)(!1),a=(0,i.Z)(t,2),m=a[0],d=a[1],p=(0,l.useHistory)();return(0,c.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return p.push("/".concat(e.navId))}));var e=n().register({notifications:_.ee});return(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:d(!0);case 3:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),u().createElement(c.Fragment,null,u().createElement(b.Kr,null),m?u().createElement(y,{childProps:e}):u().createElement(f.b,null,u().createElement(h.$,{size:"xl"})))}},59245:(e,n,t)=>{t.d(n,{g:()=>f,S:()=>h});var r=t(93264),i=t(18546),a=t(68573),o=t.n(a),c=t(84885),u=t(29439),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},s=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=n.dispatch;return function(n){return function(r){var i=r.type,a=r.payload,o=r.meta;if(s(i)&&l(a)){var c=a.id,m=a.fetcher,f=a.condition,h=a.onEvent;if(e[c])return;return e[c]=!0,void setTimeout((function(){t({type:c,payload:m().then((function(n){e[c]=!1;var i=f(n),a=(0,u.Z)(i,2),o=a[0],l=a[1];((null==h?void 0:h[l])||[]).forEach((function(e){return e(t)})),o&&t(r)}))}).catch((function(){return null}))}),15e3)}if(l(null==o?void 0:o.polling)){var d=o.polling,p=d.id,g=d.fetcher,v=d.condition,E=d.onEvent;t({type:"".concat(p,"_POLLING"),payload:{id:p,fetcher:g,condition:v,onEvent:E}})}n(r)}}}},f=(0,r.createContext)({getRegistry:function(){}});function h(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return new i.xI({},[o(),(0,c.uv)({errorDescriptionKey:["detail","stack"]}),m()].concat(n))}},4147:e=>{e.exports=JSON.parse('{"_j":{"r9":"/fleet-management","bg":"/fleet-management/:inventoryId","gb":"/manage-images","sh":"/manage-images/:imageId","ZT":"/manage-images/:imageId/:imageVersionId","jS":"/repositories"}}')}}]);
//# sourceMappingURL=../sourcemaps/364.8598af9f4f6fe3a7d36539255b6fb0e4.js.map
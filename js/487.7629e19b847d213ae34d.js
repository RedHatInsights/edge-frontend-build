(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[487],{4554:(e,t,n)=>{var r=n(3645),o=n(2454);(t=r(!1)).i(o),t.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""]),e.exports=t},6755:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(5697),o=n.n(r),s=n(1427),i=n.n(s),a=n(5399),c=n(9859),l=n(6479),u=n.n(l);const p=JSON.parse('{"_j":{"X":"/groups","N":"/groups/:uuid"}}');var f=n(8896),h=n(7463),d=i().lazy((function(){return n.e(734).then(n.bind(n,7788))})),m=i().lazy((function(){return n.e(673).then(n.bind(n,2395))})),g=function(e){var t=e.rootClass,n=u()(e,["rootClass"]),r=document.getElementById("root");return r.removeAttribute("class"),r.classList.add("page__".concat(t),"pf-c-page__main"),r.setAttribute("role","main"),i().createElement(a.Route,n)};g.propTypes={component:o().func,rootClass:o().string};var v=function(){return i().createElement(s.Suspense,{fallback:i().createElement(f.b,null,i().createElement(h.$j,{size:"xl"}))},i().createElement(a.Switch,null,i().createElement(g,{exact:!0,path:p._j.X,component:d,rootClass:"groupsPage"}),i().createElement(g,{path:p._j.N,component:m,rootClass:"oopsPage"}),i().createElement(a.Route,null,i().createElement(a.Redirect,{to:p._j.X}))))};v.propTypes={childProps:o().shape({history:o().shape({push:o().func})})},n(3172);var E=n(9071),_=n(1355),y=(0,E.getRegistry)();y.register({notifications:_.notifications});var b=function(e){return(0,s.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("groups"),insights.chrome.on("APP_NAVIGATION",(function(e){return undefined.props.history.push("/".concat(e.navId))}))}),[]),i().createElement(c.Provider,{store:y.getStore()},i().createElement(_.NotificationsPortal,null),i().createElement(v,{childProps:e}))};b.propTypes={history:o().object};const w=(0,a.withRouter)((0,c.connect)()(b))},5206:(e,t,n)=>{"use strict";n.d(t,{S1:()=>c});var r,o=n(3392),s=n.n(o),i=n(1553),a=n.n(i);function c(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r=new(s())({},[a()].concat(t))}},3172:(e,t,n)=>{"use strict";var r=n(3379),o=n.n(r),s=n(4554),i=n.n(s),a=o()(i(),{insert:"head",singleton:!1});if(!i().locals||e.hot.invalidate){var c=i().locals;e.hot.accept(4554,(t=>{s=n(4554),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(c,(i=n.n(s))().locals)?(c=i().locals,a(i())):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),i().locals}}]);
//# sourceMappingURL=487.7629e19b847d213ae34d.js.map
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[711],{84267:(e,t,n)=>{"use strict";n.r(t);var a=n(93264),r=n.n(a),i=n(3644),o=n.n(i),l=n(45697),c=n.n(l),s=n(75662),u=n(28216),m=n(59245),d=n(15861),p=n(29439),g=n(87757),f=n.n(g),h=n(9192),v=n(52643),y=n(37619),E=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(755),n.e(729),n.e(436),n.e(673)]).then(n.bind(n,40149))})),x=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(755),n.e(729),n.e(436),n.e(673)]).then(n.bind(n,23537))})),b=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(755),n.e(729),n.e(436),n.e(673)]).then(n.bind(n,30991))})),_=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(755),n.e(729),n.e(436),n.e(673)]).then(n.bind(n,80292))})),w=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(755),n.e(729),n.e(436),n.e(673)]).then(n.bind(n,14511))})),R=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(581),n.e(297),n.e(729),n.e(436),n.e(160)]).then(n.bind(n,12877))})),k=r().lazy((function(){return Promise.all([n.e(205),n.e(36),n.e(423),n.e(729),n.e(47)]).then(n.bind(n,7741))})),z=r().lazy((function(){return n.e(975).then(n.bind(n,57975))})),I=function(){return r().createElement(a.Suspense,{fallback:r().createElement(v.b,null,r().createElement(y.$,{size:"xl"}))},r().createElement(s.Switch,null,r().createElement(s.Route,{exact:!0,path:h._.groups,component:x}),r().createElement(s.Route,{exact:!0,path:h._["groups-detail"],component:b}),r().createElement(s.Route,{exact:!0,path:h._["fleet-management"],component:x}),r().createElement(s.Route,{exact:!0,path:h._["fleet-management-detail"],component:b}),r().createElement(s.Route,{exact:!0,path:h._.inventory,component:_}),r().createElement(s.Route,{path:h._["inventory-detail"],component:E}),r().createElement(s.Route,{path:h._["manage-images-detail-version"],component:R}),r().createElement(s.Route,{path:h._["manage-images-detail"],component:R}),r().createElement(s.Route,{path:h._["manage-images"],component:w}),r().createElement(s.Route,{exact:!0,path:h._.respositories,component:k}),r().createElement(s.Route,{exact:!0,path:h._["learning-resources"],component:z}),r().createElement(s.Route,null,r().createElement(s.Redirect,{to:h._["fleet-management"]}))))},P=n(83215),S=n(51344),N=n(80236),A=n(51898),C=n(47173),L=n(21629);const G=function(){return r().createElement(N.u,{style:{padding:"15px"},isOpen:!0,variant:"small",onClose:function(){return window.location.href="https://console.redhat.com/"},"aria-label":"auth-modal",header:r().createElement("h2",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-bold"},"Edge management requires a valid Smart Management subscription"),footer:r().createElement(A.t,{style:{display:"flex",justifyContent:"center",width:"100%",flexDirection:"column",paddingTop:0}},r().createElement(C.zx,{key:"get-started",component:"a",className:"pf-u-mb-md",variant:"primary",target:"_blank",href:"https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/try-it"},"Get started"),r().createElement(C.zx,{component:"a",key:"interactive-demo",className:"pf-u-mb-md",variant:"secondary",target:"_blank",href:"https://red.ht/edgemanagementlab"},"Try the interactive demo"),r().createElement(C.zx,{component:"a",key:"not-now",variant:"link",href:"https://console.redhat.com/"},"Not now")),title:"Edge management requires a valid subscription",width:"640px"},r().createElement("img",{style:{margin:"0 auto",display:"block"},src:L,width:"200px",alt:"edge icon"}),r().createElement("p",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-text-align-center"},"Securely manage and scale deployments at the edge with zero-touch provisioning, system health visibility, and quick security remediations and more with a Red Hat Smart Management subscription"))},T=function(e){var t=(0,a.useContext)(m.g).getRegistry,n=(0,a.useState)(!1),i=(0,p.Z)(n,2),o=i[0],l=i[1],c=(0,s.useHistory)(),u=(0,a.useState)(null),g=(0,p.Z)(u,2),h=g[0],E=g[1];return(0,a.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return c.push("/".concat(e.navId))}));var e=t().register({notifications:P.ee});return(0,d.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:l(!0);case 3:case"end":return e.stop()}}),e)})))(),(0,d.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:t=e.sent,E(t.entitlements.smart_management.is_entitled);case 4:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),r().createElement(a.Fragment,null,r().createElement(S.Kr,null),h&&o?r().createElement(I,{childProps:e}):null===h?r().createElement(v.b,null,r().createElement(y.$,{size:"xl"})):r().createElement(G,null))};var Z=n(35240),O=n(94500),q=n.n(O),B=function(e){var t=e.hasLogger,n=(0,a.useMemo)((function(){return t?(0,m.S)(q()):(0,m.S)()}),[]);return r().createElement(m.g.Provider,{value:{getRegistry:function(){return n}}},r().createElement(u.zt,{store:n.getStore()},r().createElement(s.BrowserRouter,{basename:(0,Z.eb)(window.location.pathname,1)},r().createElement(T,null))))};B.propTypes={hasLogger:c().bool};const H=B;o().render(r().createElement(H,null),document.getElementById("root"))},9192:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var a={groups:"/groups","groups-detail":"/groups/:uuid","device-detail":"/groups/:uuid/:inventoryId",canaries:"/canaries","fleet-management":"/fleet-management","fleet-management-detail":"/fleet-management/:groupId",inventory:"/inventory","inventory-detail":"/inventory/:deviceId","manage-images":"/manage-images","manage-images-detail":"/manage-images/:imageId","manage-images-detail-version":"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories","learning-resources":"/learning-resources"}},59245:(e,t,n)=>{"use strict";n.d(t,{g:()=>d,S:()=>p});var a=n(93264),r=n(9036),i=n(68573),o=n.n(i),l=n(84885),c=n(29439),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},u=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=t.dispatch;return function(t){return function(a){var r=a.type,i=a.payload,o=a.meta;if(u(r)&&s(i)){var l=i.id,m=i.fetcher,d=i.condition,p=i.onEvent;if(e[l])return;return e[l]=!0,void setTimeout((function(){n({type:l,payload:m().then((function(t){e[l]=!1;var r=d(t),i=(0,c.Z)(r,2),o=i[0],s=i[1];((null==p?void 0:p[s])||[]).forEach((function(e){return e(n)})),o&&n(a)}))}).catch((function(){return null}))}),15e3)}if(s(null==o?void 0:o.polling)){var g=o.polling,f=g.id,h=g.fetcher,v=g.condition,y=g.onEvent;n({type:"".concat(f,"_POLLING"),payload:{id:f,fetcher:h,condition:v,onEvent:y}})}t(a)}}}},d=(0,a.createContext)({getRegistry:function(){}});function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new r.xI({},[o(),(0,l.uv)({errorDescriptionKey:["detail","stack"]}),m()].concat(t))}},21629:(e,t,n)=>{"use strict";e.exports=n.p+"fonts/Icon-Red_Hat-Edge-A-Red-RGB.png"},45467:()=>{},70347:()=>{},34946:()=>{},25238:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/711.c5a1245b99525e0a4afca46a27065cfc.js.map
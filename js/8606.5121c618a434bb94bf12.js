(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[8606],{48187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(15861),r=n(29439),o=n(64687),i=n.n(o),l=n(92950),c=n.n(l),s=n(96620),u=n(59245),m=n(60076),p=n(83215),d=n(51344),g=n(6148),f=n(52643),h=n(37619);const v=function(e){var t=(0,l.useContext)(u.g).getRegistry,n=(0,l.useState)(!1),o=(0,r.Z)(n,2),v=o[0],y=o[1],E=(0,s.useHistory)(),x=(0,l.useState)(null),b=(0,r.Z)(x,2),w=b[0],R=b[1];return(0,l.useEffect)((function(){insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return E.push("/".concat(e.navId))}));var e=t().register({notifications:p.ee});return(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:y(!0);case 3:case"end":return e.stop()}}),e)})))(),(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:t=e.sent,R(t.entitlements.smart_management.is_entitled);case 4:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),c().createElement(l.Fragment,null,c().createElement(d.Kr,null),w&&v?c().createElement(m.Z,{childProps:e}):null===w?c().createElement(f.b,null,c().createElement(h.$,{size:"xl"})):c().createElement(g.Z,null))}},28412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(92950),r=n.n(a),o=n(45697),i=n.n(o),l=n(96620),c=n(86706),s=n(59245),u=n(48187),m=n(35240),p=n(94500),d=n.n(p),g=function(e){var t=e.hasLogger,n=(0,a.useMemo)((function(){return t?(0,s.S)(d()):(0,s.S)()}),[]);return r().createElement(s.g.Provider,{value:{getRegistry:function(){return n}}},r().createElement(c.zt,{store:n.getStore()},r().createElement(l.BrowserRouter,{basename:(0,m.eb)(window.location.pathname,1)},r().createElement(u.Z,null))))};g.propTypes={hasLogger:i().bool};const f=g},60076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(96620),r=n(92950),o=n.n(r),i=n(9192),l=n(52643),c=n(37619),s=o().lazy((function(){return Promise.all([n.e(3920),n.e(6056),n.e(8417),n.e(4675),n.e(2073)]).then(n.bind(n,65163))})),u=o().lazy((function(){return Promise.all([n.e(6954),n.e(4390),n.e(8615),n.e(3920),n.e(4033),n.e(3049),n.e(3006),n.e(6056),n.e(7808),n.e(7633)]).then(n.bind(n,23537))})),m=o().lazy((function(){return Promise.all([n.e(6954),n.e(4390),n.e(8615),n.e(3920),n.e(4033),n.e(3049),n.e(3006),n.e(6056),n.e(8417),n.e(7808),n.e(4936),n.e(7563)]).then(n.bind(n,30991))})),p=o().lazy((function(){return Promise.all([n.e(6954),n.e(4390),n.e(8615),n.e(3920),n.e(4033),n.e(3049),n.e(3006),n.e(6056),n.e(8417),n.e(7808),n.e(4936),n.e(8471)]).then(n.bind(n,80292))})),d=o().lazy((function(){return Promise.all([n.e(6954),n.e(8615),n.e(4033),n.e(3049),n.e(6056),n.e(9384),n.e(7808),n.e(7347)]).then(n.bind(n,66581))})),g=o().lazy((function(){return Promise.all([n.e(6954),n.e(8615),n.e(4033),n.e(3049),n.e(6056),n.e(7808),n.e(1157)]).then(n.bind(n,14511))})),f=o().lazy((function(){return Promise.all([n.e(6954),n.e(4390),n.e(8615),n.e(3920),n.e(4033),n.e(3049),n.e(3006),n.e(6056),n.e(9247),n.e(314),n.e(7808),n.e(4675),n.e(5224),n.e(704)]).then(n.bind(n,12877))})),h=o().lazy((function(){return Promise.all([n.e(6954),n.e(4390),n.e(8615),n.e(3920),n.e(4033),n.e(3049),n.e(3006),n.e(6056),n.e(7808),n.e(1551)]).then(n.bind(n,80365))})),v=o().lazy((function(){return n.e(5018).then(n.bind(n,57975))})),y=function(){return o().createElement(r.Suspense,{fallback:o().createElement(l.b,null,o().createElement(c.$,{size:"xl"}))},o().createElement(a.Switch,null,o().createElement(a.Route,{exact:!0,path:i._.groups,component:u}),o().createElement(a.Route,{exact:!0,path:i._.groupsDetail,component:m}),o().createElement(a.Route,{exact:!0,path:i._.fleetManagement,component:u}),o().createElement(a.Route,{exact:!0,path:i._.fleetManagementDetail,component:m}),o().createElement(a.Route,{exact:!0,path:i._.fleetManagementSystemDetail,component:s}),o().createElement(a.Route,{exact:!0,path:i._.fleetManagementSystemDetailUpdate,component:d}),o().createElement(a.Route,{exact:!0,path:i._.inventory,component:p}),o().createElement(a.Route,{exact:!0,path:i._.inventoryDetailUpdate,component:d}),o().createElement(a.Route,{path:i._.inventoryDetail,component:s}),o().createElement(a.Route,{path:i._.manageImagesDetailVersion,component:f}),o().createElement(a.Route,{path:i._.manageImagesDetail,component:f}),o().createElement(a.Route,{path:i._.manageImages,component:g}),o().createElement(a.Route,{exact:!0,path:i._.repositories,component:h}),o().createElement(a.Route,{exact:!0,path:i._.learningResources,component:v}),o().createElement(a.Route,null,o().createElement(a.Redirect,{to:i._.fleetManagement}))))}},6148:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(92950),r=n.n(a),o=n(80236),i=n(51898),l=n(47173),c=n(21629);const s=function(){return r().createElement(o.u,{style:{padding:"15px"},isOpen:!0,variant:"small",onClose:function(){return window.location.href="https://".concat(window.location.host)},"aria-label":"auth-modal",header:r().createElement("h2",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-bold"},"Edge management requires a valid Smart Management subscription"),footer:r().createElement(i.t,{style:{display:"flex",justifyContent:"center",width:"100%",flexDirection:"column",paddingTop:0}},r().createElement(l.zx,{key:"get-started",component:"a",className:"pf-u-mb-md",variant:"primary",target:"_blank",href:"https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/try-it"},"Get started"),r().createElement(l.zx,{component:"a",key:"interactive-demo",className:"pf-u-mb-md",variant:"secondary",target:"_blank",href:"https://red.ht/edgemanagementlab"},"Try the interactive demo"),r().createElement(l.zx,{component:"a",key:"not-now",variant:"link",href:"https://".concat(window.location.host)},"Not now")),title:"Edge management requires a valid subscription",width:"640px"},r().createElement("img",{style:{margin:"0 auto",display:"block"},src:c,width:"200px",alt:"edge icon"}),r().createElement("p",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-text-align-center"},"Securely manage and scale deployments at the edge with zero-touch provisioning, system health visibility, and quick security remediations and more with a Red Hat Smart Management subscription"))}},9192:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var a={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailUpdate:"/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources"}},59245:(e,t,n)=>{"use strict";n.d(t,{g:()=>p,S:()=>d});var a=n(92950),r=n(9036),o=n(54157),i=n.n(o),l=n(84885),c=n(29439),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},u=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=t.dispatch;return function(t){return function(a){var r=a.type,o=a.payload,i=a.meta;if(u(r)&&s(o)){var l=o.id,m=o.fetcher,p=o.condition,d=o.onEvent;if(e[l])return;return e[l]=!0,void setTimeout((function(){n({type:l,payload:m().then((function(t){e[l]=!1;var r=p(t),o=(0,c.Z)(r,2),i=o[0],s=o[1];((null==d?void 0:d[s])||[]).forEach((function(e){return e(n)})),i&&n(a)}))}).catch((function(){return null}))}),15e3)}if(s(null==i?void 0:i.polling)){var g=i.polling,f=g.id,h=g.fetcher,v=g.condition,y=g.onEvent;n({type:"".concat(f,"_POLLING"),payload:{id:f,fetcher:h,condition:v,onEvent:y}})}t(a)}}}},p=(0,a.createContext)({getRegistry:function(){}});function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new r.xI({},[i(),(0,l.uv)({errorDescriptionKey:["detail","stack"]}),m()].concat(t))}},21629:(e,t,n)=>{"use strict";e.exports=n.p+"fonts/Icon-Red_Hat-Edge-A-Red-RGB.png"},45467:()=>{},70347:()=>{},11452:()=>{},34946:()=>{},25238:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},11177:()=>{}}]);
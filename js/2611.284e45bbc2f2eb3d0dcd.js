(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[2611],{21458:(e,t,n)=>{"use strict";n.d(t,{FV:()=>o,L1:()=>c,wN:()=>i});var a=n(17558),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},i=function(e){return{type:a.Dv,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},o=function(e){return{type:a.Kf,payload:e}},c=function(){return{type:a.wt}}},48187:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(15861),r=n(29439),i=n(64687),o=n.n(i),c=n(92950),l=n.n(c),s=n(68519),u=n(59245),m=n(60076),p=n(83215),d=n(88940),g=n(6148),f=n(52643),h=n(37619);const v=function(e){var t=(0,c.useContext)(u.g).getRegistry,n=(0,c.useState)(!1),i=(0,r.Z)(n,2),v=i[0],y=i[1],E=(0,s.k6)(),x=(0,c.useState)(null),b=(0,r.Z)(x,2),w=b[0],I=b[1];return(0,c.useEffect)((function(){insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return E.push("/".concat(e.navId))}));var e=t().register({notifications:p.ee});return(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:y(!0);case 3:case"end":return e.stop()}}),e)})))(),(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:t=e.sent,I(t.entitlements.smart_management.is_entitled);case 4:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),l().createElement(c.Fragment,null,l().createElement(d.Kr,null),w&&v?l().createElement(m.Z,{childProps:e}):null===w?l().createElement(f.b,null,l().createElement(h.$,{size:"xl"})):l().createElement(g.Z,null))}},28412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(5513),l=n(77760),s=n(59245),u=n(48187),m=n(35240),p=n(94500),d=n.n(p),g=function(e){var t=e.hasLogger,n=(0,a.useMemo)((function(){return t?(0,s.S)(d()):(0,s.S)()}),[]);return r().createElement(s.g.Provider,{value:{getRegistry:function(){return n}}},r().createElement(l.Provider,{store:n.getStore()},r().createElement(c.VK,{basename:(0,m.eb)(window.location.pathname,1)},r().createElement(u.Z,null))))};g.propTypes={hasLogger:o().bool};const f=g},60076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(68519),r=n(92950),i=n.n(r),o=n(9192),c=n(52643),l=n(37619),s=i().lazy((function(){return Promise.all([n.e(1024),n.e(3454),n.e(3920),n.e(3569),n.e(3158),n.e(9823),n.e(6745),n.e(4210),n.e(2827),n.e(2073)]).then(n.bind(n,58543))})),u=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3920),n.e(4390),n.e(3666),n.e(6244),n.e(9823),n.e(6745),n.e(3993),n.e(8797),n.e(2740),n.e(7633)]).then(n.bind(n,23537))})),m=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3920),n.e(4390),n.e(3666),n.e(6244),n.e(9823),n.e(6745),n.e(3993),n.e(8797),n.e(663),n.e(7563)]).then(n.bind(n,30991))})),p=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3920),n.e(4390),n.e(3666),n.e(6244),n.e(2666),n.e(9823),n.e(6745),n.e(3993),n.e(8797),n.e(663),n.e(2740),n.e(6838),n.e(8471)]).then(n.bind(n,80292))})),d=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3666),n.e(9384),n.e(9823),n.e(6745),n.e(3993),n.e(7347)]).then(n.bind(n,66581))})),g=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3666),n.e(9823),n.e(6745),n.e(3993),n.e(7386),n.e(1157)]).then(n.bind(n,82978))})),f=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3920),n.e(4390),n.e(3666),n.e(6244),n.e(1),n.e(8157),n.e(9823),n.e(6745),n.e(3993),n.e(8797),n.e(1842),n.e(364),n.e(704)]).then(n.bind(n,12877))})),h=i().lazy((function(){return Promise.all([n.e(8615),n.e(6954),n.e(1024),n.e(3454),n.e(6836),n.e(4033),n.e(3920),n.e(4390),n.e(3666),n.e(6244),n.e(9823),n.e(6745),n.e(3993),n.e(8797),n.e(1551)]).then(n.bind(n,80365))})),v=i().lazy((function(){return n.e(5018).then(n.bind(n,57975))})),y=function(){return i().createElement(r.Suspense,{fallback:i().createElement(c.b,null,i().createElement(l.$,{size:"xl"}))},i().createElement(a.rs,null,i().createElement(a.AW,{exact:!0,path:o._.groups,component:u}),i().createElement(a.AW,{exact:!0,path:o._.groupsDetail,component:m}),i().createElement(a.AW,{exact:!0,path:o._.fleetManagement,component:u}),i().createElement(a.AW,{exact:!0,path:o._.fleetManagementDetail,component:m}),i().createElement(a.AW,{exact:!0,path:o._.fleetManagementSystemDetail,component:s}),i().createElement(a.AW,{exact:!0,path:o._.fleetManagementSystemDetailUpdate,component:d}),i().createElement(a.AW,{exact:!0,path:o._.inventory,component:p}),i().createElement(a.AW,{exact:!0,path:o._.inventoryDetailUpdate,component:d}),i().createElement(a.AW,{path:o._.inventoryDetail,component:s}),i().createElement(a.AW,{path:o._.manageImagesDetailVersion,component:f}),i().createElement(a.AW,{path:o._.manageImagesDetail,component:f}),i().createElement(a.AW,{path:o._.manageImages,component:g}),i().createElement(a.AW,{exact:!0,path:o._.repositories,component:h}),i().createElement(a.AW,{exact:!0,path:o._.learningResources,component:v}),i().createElement(a.AW,null,i().createElement(a.l_,{to:o._.fleetManagement}))))}},6148:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(92950),r=n.n(a),i=n(80236),o=n(51898),c=n(47173),l=n(21629);const s=function(){return r().createElement(i.u,{style:{padding:"15px"},isOpen:!0,variant:"small",onClose:function(){return window.location.href="https://".concat(window.location.host)},"aria-label":"auth-modal",header:r().createElement("h2",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-bold"},"Edge management requires a valid Red Hat Satellite subscription"),footer:r().createElement(o.t,{style:{display:"flex",justifyContent:"center",width:"100%",flexDirection:"column",paddingTop:0}},r().createElement(c.zx,{key:"get-started",component:"a",className:"pf-u-mb-md",variant:"primary",target:"_blank",href:"https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/try-it"},"Get started"),r().createElement(c.zx,{component:"a",key:"interactive-demo",className:"pf-u-mb-md",variant:"secondary",target:"_blank",href:"https://red.ht/edgemanagementlab"},"Try the interactive demo"),r().createElement(c.zx,{component:"a",key:"not-now",variant:"link",href:"https://".concat(window.location.host)},"Not now")),title:"Edge management requires a valid subscription",width:"640px"},r().createElement("img",{style:{margin:"0 auto",display:"block"},src:l,width:"200px",alt:"edge icon"}),r().createElement("p",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-text-align-center"},"Securely manage and scale deployments at the edge with zero-touch provisioning, system health visibility, and quick security remediations and more with a Red Hat Satellite subscription"))}},9192:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var a={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",insightsInventory:"/insights/inventory?activeTab=manage-edge-inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailUpdate:"/inventory/:deviceId/update",insightsInventoryDetailUpdate:"/insights/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources",contentSourcesRepositories:"/preview/insights/content"}},59245:(e,t,n)=>{"use strict";n.d(t,{g:()=>p,S:()=>d});var a=n(92950),r=n(9036),i=n(54157),o=n.n(i),c=n(84885),l=n(29439),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},u=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=t.dispatch;return function(t){return function(a){var r=a.type,i=a.payload,o=a.meta;if(u(r)&&s(i)){var c=i.id,m=i.fetcher,p=i.condition,d=i.onEvent;if(e[c])return;return e[c]=!0,void setTimeout((function(){n({type:c,payload:m().then((function(t){e[c]=!1;var r=p(t),i=(0,l.Z)(r,2),o=i[0],s=i[1];((null==d?void 0:d[s])||[]).forEach((function(e){return e(n)})),o&&n(a)}))}).catch((function(){return null}))}),15e3)}if(s(null==o?void 0:o.polling)){var g=o.polling,f=g.id,h=g.fetcher,v=g.condition,y=g.onEvent;n({type:"".concat(f,"_POLLING"),payload:{id:f,fetcher:h,condition:v,onEvent:y}})}t(a)}}}},p=(0,a.createContext)({getRegistry:function(){}});function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new r.xI({},[o(),(0,c.uv)({errorDescriptionKey:["detail","stack"]}),m()].concat(t))}},21629:(e,t,n)=>{"use strict";e.exports=n.p+"fonts/Icon-Red_Hat-Edge-A-Red-RGB.png"},45467:()=>{},70347:()=>{},11452:()=>{},34946:()=>{},25238:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2611.3dc61c92e88792331627d1a0db4c25ff.js.map
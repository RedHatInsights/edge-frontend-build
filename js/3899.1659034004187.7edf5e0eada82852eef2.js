"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[3899],{92702:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(15861),r=n(29439),i=n(87757),o=n.n(i),l=n(75418),c=n.n(l),u=n(4874),s=n(59245),m=n(9192),d=n(52643),p=n(37619),g=n(48903),h=c().lazy((function(){return Promise.all([n.e(8998),n.e(114),n.e(2780),n.e(9989),n.e(3673)]).then(n.bind(n,38857))})),f=c().lazy((function(){return Promise.all([n.e(8998),n.e(114),n.e(2780),n.e(9989),n.e(3673)]).then(n.bind(n,23537))})),v=c().lazy((function(){return Promise.all([n.e(8998),n.e(114),n.e(2780),n.e(9989),n.e(3673)]).then(n.bind(n,30991))})),E=c().lazy((function(){return Promise.all([n.e(8998),n.e(114),n.e(2780),n.e(9989),n.e(3673)]).then(n.bind(n,23104))})),y=c().lazy((function(){return Promise.all([n.e(8998),n.e(114),n.e(2780),n.e(9989),n.e(3673)]).then(n.bind(n,14511))})),x=c().lazy((function(){return Promise.all([n.e(8998),n.e(5874),n.e(2780),n.e(9989),n.e(6501)]).then(n.bind(n,12877))})),Z=c().lazy((function(){return Promise.all([n.e(8998),n.e(2780),n.e(4047)]).then(n.bind(n,7741))})),b=c().lazy((function(){return n.e(7975).then(n.bind(n,57975))})),w=function(){return c().createElement(l.Suspense,{fallback:c().createElement(d.b,null,c().createElement(p.$,{size:"xl"}))},c().createElement(u.Switch,null,c().createElement(u.Route,{exact:!0,path:m._.groups,component:f}),c().createElement(u.Route,{exact:!0,path:m._["groups-detail"],component:v}),c().createElement(u.Route,{exact:!0,path:m._["fleet-management"],component:f}),c().createElement(u.Route,{exact:!0,path:m._["fleet-management-detail"],component:v}),c().createElement(u.Route,{exact:!0,path:m._.inventory,component:E}),c().createElement(u.Route,{path:m._["inventory-detail"],component:h}),c().createElement(u.Route,{path:m._["manage-images-detail-version"],component:x}),c().createElement(u.Route,{path:m._["manage-images-detail"],component:x}),c().createElement(u.Route,{path:m._["manage-images"],component:y}),(0,g.gV)("fleet-management.custom-repos")&&c().createElement(u.Route,{exact:!0,path:m._.repositories,component:Z}),c().createElement(u.Route,{exact:!0,path:m._["learning-resources"],component:b}),c().createElement(u.Route,null,c().createElement(u.Redirect,{to:m._["fleet-management"]}))))},R=n(83215),P=n(51344),_=n(80236),k=n(51898),L=n(47173),z=n(21629);const H=function(){return c().createElement(_.u,{style:{padding:"15px"},isOpen:!0,variant:"small",onClose:function(){return window.location.href="https://console.redhat.com/"},"aria-label":"auth-modal",header:c().createElement("h2",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-font-size-2xl pf-u-text-align-center pf-u-font-weight-bold"},"Edge management requires a valid Smart Management subscription"),footer:c().createElement(k.t,{style:{display:"flex",justifyContent:"center",width:"100%",flexDirection:"column",paddingTop:0}},c().createElement(L.zx,{key:"get-started",component:"a",className:"pf-u-mb-md",variant:"primary",target:"_blank",href:"https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux/try-it"},"Get started"),c().createElement(L.zx,{component:"a",key:"interactive-demo",className:"pf-u-mb-md",variant:"secondary",target:"_blank",href:"https://red.ht/edgemanagementlab"},"Try the interactive demo"),c().createElement(L.zx,{component:"a",key:"not-now",variant:"link",href:"https://console.redhat.com/"},"Not now")),title:"Edge management requires a valid subscription",width:"640px"},c().createElement("img",{style:{margin:"0 auto",display:"block"},src:z,width:"200px",alt:"edge icon"}),c().createElement("p",{className:"pf-u-pr-xl pf-u-pl-xl pf-u-text-align-center"},"Securely manage and scale deployments at the edge with zero-touch provisioning, system health visibility, and quick security remediations and more with a Red Hat Smart Management subscription"))},I=function(e){var t=(0,l.useContext)(s.g).getRegistry,n=(0,l.useState)(!1),i=(0,r.Z)(n,2),m=i[0],g=i[1],h=(0,u.useHistory)(),f=(0,l.useState)(null),v=(0,r.Z)(f,2),E=v[0],y=v[1];return(0,l.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return h.push("/".concat(e.navId))}));var e=t().register({notifications:R.ee});return(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:g(!0);case 3:case"end":return e.stop()}}),e)})))(),(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:t=e.sent,y(t.entitlements.smart_management.is_entitled);case 4:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),c().createElement(l.Fragment,null,c().createElement(P.Kr,null),E&&m?c().createElement(w,{childProps:e}):null===E?c().createElement(d.b,null,c().createElement(p.$,{size:"xl"})):c().createElement(H,null))}},98309:(e,t,n)=>{n.d(t,{Op:()=>w,n:()=>R,aN:()=>P,Ei:()=>_,vk:()=>k,R8:()=>L,az:()=>z,ml:()=>H,bd:()=>I,iQ:()=>C,OE:()=>S,E5:()=>N});var a=n(34143),r=n(68778),i=n(54340),o=n(43047),l=n(69957),c=n(53636),u=n(7081),s=n(17542),m=n(64915),d=n(80810),p=n(35453),g=n(15914),h=n(72781),f=n(94768),v=n(73479),E=n(12990),y=n(37655),x=n(4088),Z=n(14206),b=n(29987),w=["done","error","pending","unknown","updating","warning","notification"],R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort((function(e,n){return"asc"===t?e.name.toLowerCase().localeCompare(n.name.toLowerCase()):n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},P={"rhel-84":"RHEL 8.4","rhel-85":"RHEL 8.5","rhel-86":"RHEL 8.6","rhel-90":"RHEL 9.0"},_={"rhel-90":"Red Hat Enterprise Linux (RHEL) 9.0","rhel-86":"Red Hat Enterprise Linux (RHEL) 8.6","rhel-85":"Red Hat Enterprise Linux (RHEL) 8.5","rhel-84":"Red Hat Enterprise Linux (RHEL) 8.4"},k=["rhel-84","rhel-85"],L=["rhel-86","rhel-90"],z="rhel-85",H="rhel-90",I={"rhel-edge-commit":"RHEL for Edge Commit (.tar)","rhel-edge-installer":"RHEL for Edge Installer (.iso)"},C={unknown:s.ZP,repository:m.ZP,search:d.ZP,module:p.ZP,cube:g.ZP,question:v.ZP,plus:u.ZP,checkCircle:r.ZP,exclamationTriangle:l.ZP,timesCircle:h.ZP,inProgress:f.ZP},S={green:x.Z.value,yellow:y.Z.value,lightBlue:Z.Z.value,blue:b.Z.value,red:E.Z.value},N={done:{icon:r.ZP,color:x.Z.value,title:"Fully adopted"},error:{icon:o.ZP,color:E.Z.value,title:"Error while adopting"},pending:{icon:c.ZP,title:"Pending adoption"},updating:{icon:i.ZP,title:"Updating"},unknown:{icon:s.ZP,title:"Unknown state"},warning:{icon:l.ZP,color:y.Z.value,title:"Warning while adopting"},notification:{icon:a.ZP,color:Z.Z.value,title:"Delivering"}}},9192:(e,t,n)=>{n.d(t,{_:()=>a});var a={groups:"/groups","groups-detail":"/groups/:uuid","device-detail":"/groups/:uuid/:inventoryId",canaries:"/canaries","fleet-management":"/fleet-management","fleet-management-detail":"/fleet-management/:groupId",inventory:"/inventory","inventory-detail":"/inventory/:deviceId","manage-images":"/manage-images","manage-images-detail":"/manage-images/:imageId","manage-images-detail-version":"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories","learning-resources":"/learning-resources"}},59245:(e,t,n)=>{n.d(t,{g:()=>d,S:()=>p});var a=n(75418),r=n(9036),i=n(68573),o=n.n(i),l=n(84885),c=n(29439),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},s=function(e){return e.endsWith("_".concat("POLLING"))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=t.dispatch;return function(t){return function(a){var r=a.type,i=a.payload,o=a.meta;if(s(r)&&u(i)){var l=i.id,m=i.fetcher,d=i.condition,p=i.onEvent;if(e[l])return;return e[l]=!0,void setTimeout((function(){n({type:l,payload:m().then((function(t){e[l]=!1;var r=d(t),i=(0,c.Z)(r,2),o=i[0],u=i[1];((null==p?void 0:p[u])||[]).forEach((function(e){return e(n)})),o&&n(a)}))}).catch((function(){return null}))}),15e3)}if(u(null==o?void 0:o.polling)){var g=o.polling,h=g.id,f=g.fetcher,v=g.condition,E=g.onEvent;n({type:"".concat(h,"_POLLING"),payload:{id:h,fetcher:f,condition:v,onEvent:E}})}t(a)}}}},d=(0,a.createContext)({getRegistry:function(){}});function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new r.xI({},[o(),(0,l.uv)({errorDescriptionKey:["detail","stack"]}),m()].concat(t))}},48903:(e,t,n)=>{n.d(t,{qg:()=>l,Ff:()=>c,fz:()=>u,A8:()=>s,yb:()=>m,gV:()=>d,aS:()=>p,GF:()=>g,pS:()=>h});var a=n(29439),r=n(64124),i=n(63746),o=n(98309),l={type:r.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_\-\s]*$/,message:"Name must start with alphanumeric characters and can contain underscore and hyphen characters."},c=function(e,t){for(var n=e.split("/"),a={},r=1;r<n.length;r++)n[r]&&(a[t[r-1]]=n[r]);return a.buildUrl=function(){return Object.values(this).reduce((function(e,t){return"function"!=typeof t?"".concat(e,"/").concat(t):e}),"")},a},u=function(e,t){var n=[],a=location.search.length>0?location.search.includes("&")?location.search.split("?")[1].split("&"):location.search.split("?").slice(1):[];return t?(a.includes(e)||a.push(e),n=a):n=a.includes(e)?a.filter((function(t){return t!==e})):a,n.join("&")},s=function(e,t,n){return!0!==e&&!t>0&&!n.location.search.includes("has_filters=true")},m=function(e){var t=e.deviceData,n=e.imageData;return!((null==t?void 0:t.length)>0&&n)||(null==t?void 0:t.some((function(e){return e.imageSetId!==t[0].imageSetId})))},d=function(e){var t=(0,i.useFlagsStatus)().flagsReady,n=(0,i.useFlag)(e);return!!t&&n},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...";if(e.length<=t)return e;var r="".concat(e.substring(0,t)).concat(a).concat(e.substring(e.length-n,e.length));return r},g=function(e){var t=e.direction,n=e.name;return{sort_by:"asc"===t?n:"-".concat(n)}},h=function(e,t){return Object.entries(o.Ei).filter((function(n){var r=(0,a.Z)(n,1)[0];return(t||o.vk).includes(r)||r===e})).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}}))}},21629:(e,t,n)=>{e.exports=n.p+"fonts/Icon-Red_Hat-Edge-A-Red-RGB.png"}}]);
//# sourceMappingURL=../sourcemaps/3899.43af31dc99169eab099a82004b1b1b92.js.map
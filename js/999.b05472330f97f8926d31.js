(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[999],{87999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(87757),a=n.n(r),o=n(48926),i=n.n(o),d=n(63038),l=n.n(d),c=n(1427),g=n.n(c),s=n(16530),p=n(59245),f=n(60306),u=n(52643),m=n(2372),_=g().lazy((function(){return Promise.all([n.e(410),n.e(252),n.e(155),n.e(446),n.e(318),n.e(712),n.e(673)]).then(n.bind(n,3611))})),h=g().lazy((function(){return Promise.all([n.e(410),n.e(252),n.e(155),n.e(446),n.e(318),n.e(712),n.e(673)]).then(n.bind(n,75220))})),v=g().lazy((function(){return Promise.all([n.e(410),n.e(252),n.e(155),n.e(446),n.e(318),n.e(712),n.e(673)]).then(n.bind(n,98364))})),b=g().lazy((function(){return Promise.all([n.e(410),n.e(252),n.e(155),n.e(446),n.e(318),n.e(712),n.e(673)]).then(n.bind(n,70102))})),y=function(){return g().createElement(c.Suspense,{fallback:g().createElement(u.b,null,g().createElement(m.$,{size:"xl"}))},g().createElement(s.Switch,null,g().createElement(s.Route,{exact:!0,path:f._j.r9,component:h}),g().createElement(s.Route,{path:f._j.sh,component:b}),g().createElement(s.Route,{path:f._j.gb,component:v}),g().createElement(s.Route,{path:f._j.bg,component:_}),g().createElement(s.Route,null,g().createElement(s.Redirect,{to:f._j.r9}))))},x=n(83215),E=n(96533);n(14154);const k=function(e){var t=(0,c.useContext)(p.g).getRegistry,n=(0,c.useState)(!1),r=l()(n,2),o=r[0],d=r[1],f=(0,s.useHistory)();return(0,c.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("fleet-management"),insights.chrome.on("APP_NAVIGATION",(function(e){return f.push("/".concat(e.navId))}));var e=t().register({notifications:x.ee});return i()(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:d(!0);case 3:case"end":return e.stop()}}),e)})))(),function(){e()}}),[]),g().createElement(c.Fragment,null,g().createElement(E.Kr,null),o?g().createElement(y,{childProps:e}):g().createElement(u.b,null,g().createElement(m.$,{size:"xl"})))}},59245:(e,t,n)=>{"use strict";n.d(t,{g:()=>f,S:()=>u});var r=n(1427),a=n(18546),o=n(68573),i=n.n(o),d=n(84885),l=n(63038),c=n.n(l),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.id)&&(null==e?void 0:e.fetcher)&&(null==e?void 0:e.condition)},s=function(e){return e.endsWith("_".concat("POLLING"))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=t.dispatch;return function(t){return function(r){var a=r.type,o=r.payload,i=r.meta;if(s(a)&&g(o)){var d=o.id,l=o.fetcher,p=o.condition,f=o.onEvent;if(e[d])return;return e[d]=!0,void setTimeout((function(){n({type:d,payload:l().then((function(t){e[d]=!1;var a=p(t),o=c()(a,2),i=o[0],l=o[1];((null==f?void 0:f[l])||[]).forEach((function(e){return e(n)})),i&&n(r)}))}).catch((function(){return null}))}),15e3)}if(g(null==i?void 0:i.polling)){var u=i.polling,m=u.id,_=u.fetcher,h=u.condition,v=u.onEvent;n({type:"".concat(m,"_POLLING"),payload:{id:m,fetcher:_,condition:h,onEvent:v}})}t(r)}}}},f=(0,r.createContext)({getRegistry:function(){}});function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new a.xI({},[i(),(0,d.notificationsMiddleware)({errorDescriptionKey:["detail","stack"]}),p()].concat(t))}},67073:(e,t,n)=>{(t=n(23645)(!1)).push([e.id,".fleet-management,.edge{@import'~@redhat-cloud-services/frontend-components-notifications/index.css';@import'~@redhat-cloud-services/frontend-components/PrimaryToolbar/primary-toolbar.css';@import'~@redhat-cloud-services/frontend-components/ConditionalFilter/conditional-filter.css'}.fleet-management :root,.edge :root{--ins-color--orange: #ec7a08}.fleet-management .edge-groups .edge-groups__info .pf-c-card,.fleet-management .edge-groups .edge-groups--detail__info .pf-c-card,.fleet-management .edge-groups--detail .edge-groups__info .pf-c-card,.fleet-management .edge-groups--detail .edge-groups--detail__info .pf-c-card,.edge .edge-groups .edge-groups__info .pf-c-card,.edge .edge-groups .edge-groups--detail__info .pf-c-card,.edge .edge-groups--detail .edge-groups__info .pf-c-card,.edge .edge-groups--detail .edge-groups--detail__info .pf-c-card{height:100%}.fleet-management .edge-groups--detail .edge-groups--detail__info .pf-c-card.edge-groups--detail__complex .pf-c-card__header .pf-l-grid,.edge .edge-groups--detail .edge-groups--detail__info .pf-c-card.edge-groups--detail__complex .pf-c-card__header .pf-l-grid{width:100%}.fleet-management .edge-groups--detail .edge-groups--detail__info .pf-c-card.edge-groups--detail__complex .pf-c-card__body .pf-l-grid,.edge .edge-groups--detail .edge-groups--detail__info .pf-c-card.edge-groups--detail__complex .pf-c-card__body .pf-l-grid{height:100%}.fleet-management .edge-groups--detail .edge-groups--detail__info .pf-c-card.edge-groups--detail__complex .pf-c-card__body .pf-l-grid .pf-l-grid__item:first-of-type,.edge .edge-groups--detail .edge-groups--detail__info .pf-c-card.edge-groups--detail__complex .pf-c-card__body .pf-l-grid .pf-l-grid__item:first-of-type{border-right:var(--pf-global--BorderWidth--sm) solid var(--pf-global--BorderColor--100)}.fleet-management .edge-c-device--detail,.edge .edge-c-device--detail{background-color:var(--pf-global--palette--white)}.fleet-management .tiles,.edge .tiles{padding-bottom:1rem;align-items:stretch}.fleet-management .tiles-card,.edge .tiles-card{height:100%}.fleet-management .packages-compound-expand,.edge .packages-compound-expand{padding:1rem}.fleet-management .grid-align-center,.edge .grid-align-center{align-self:center}.fleet-management .add-100vh,.edge .add-100vh{height:100vh}.fleet-management .force-text-black,.edge .force-text-black{color:var(--pf-c-dropdown__menu-item--Color)}.fleet-management .remove-underline,.edge .remove-underline{text-decoration:none}.fleet-management [aria-labelledby=image-detail-kebab],.edge [aria-labelledby=image-detail-kebab]{list-style-type:none;padding-left:0}",""]),e.exports=t},14154:(e,t,n)=>{"use strict";var r=n(93379),a=n.n(r),o=n(67073),i=n.n(o),d=a()(i(),{insert:"head",singleton:!1});if(!i().locals||e.hot.invalidate){var l=i().locals;e.hot.accept(67073,(t=>{o=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(l,(i=n.n(o))().locals)?(l=i().locals,d(i())):e.hot.invalidate()}))}e.hot.dispose((function(){d()})),i().locals},60306:e=>{"use strict";e.exports=JSON.parse('{"_j":{"r9":"/fleet-management","bg":"/fleet-management/:inventoryId","gb":"/manage-images","sh":"/manage-images/:imageId"}}')}}]);
//# sourceMappingURL=../sourcemaps/999.eea173bc4b6fd33578c0.js.map
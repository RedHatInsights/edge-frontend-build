(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[344],{49477:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var r=n(59713),a=n.n(r),i=n(87757),c=n.n(i),s=n(48926),o=n.n(s),u=n(63038),l=n.n(u),f=n(1427),p=n.n(f),d=n(10728),m=n(96354),g=n(31197),v=n(2372),b=n(45697),h=n.n(b),w=n(20873),O=n(94778),y=n(59086),E=n(80962),j=n(83215),_=n(66702);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.navigateBack,n=(0,f.useState)(),r=l()(n,2),a=r[0],i=r[1],s=(0,E.useDispatch)(),u=function(){t(),s({type:y.G})};return(0,f.useEffect)((function(){o()(c().mark((function e(){var t,n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.auth)||void 0===r?void 0:r.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:a=e.t0,i((function(){return a}));case 7:case"end":return e.stop()}}),e)})))()}),[]),a?p().createElement(d.Z,{onClose:u,customComponentMapper:{review:w.Z},onSubmit:function(e){var t=k(k({},e),{},{architecture:"x86_64"});(0,O.Es)(s,t,(function(e){s(k(k({},(0,j.wN)({variant:"info",title:"Created image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,_.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,j.wN)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,j.wN)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,O.Z5)(e)}]}}}})),u(),(0,O.Z5)(s)}))},defaultArch:"x86_64",schema:{fields:[{component:m.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:"Create RHEL for Edge image",fields:[g.oG,g.Ud,g.l9,g.B9,g.j7]}]}}):p().createElement(v.$,null)};C.propTypes={navigateBack:h().func},C.defaultProps={navigateBack:function(){}};const I=C}}]);
//# sourceMappingURL=../sourcemaps/CreateImageWizard.554486de9d6abf462e5f.js.map
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[46],{53010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var a=n(59713),r=n.n(a),i=n(87757),u=n.n(i),s=n(48926),c=n.n(s),o=n(63038),l=n.n(o),d=n(1427),m=n.n(d),f=n(67098),p=n(96354),v=n(1005),g=n(2372),b=n(45697),h=n.n(b),y=n(20873),I=n(94778),O=n(59086),w=n(80962),D=n(59245),j=n(96667),k=n(66702),E=n(65190);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t,n=e.navigateBack,a=e.updateImageID,r=(0,d.useState)(),i=l()(r,2),s=i[0],o=i[1],b=(0,w.useDispatch)(),h=(0,d.useState)(""),N=l()(h,2),S=N[0],C=N[1],P=function(){n(),b({type:O.G})},U=(0,d.useContext)(D.g).getRegistry,R=(0,w.useSelector)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),w.shallowEqual).data;return(0,d.useEffect)((function(){var e=U().register({imageDetailReducer:j.OD});return(0,I.J_)(b,a),function(){return e()}}),[b]),(0,d.useEffect)((function(){c()(u().mark((function e(){var t,n,a,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:r=e.t0,o((function(){return r}));case 7:case"end":return e.stop()}}),e)})))(),c()(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.Ct)(a);case 2:t=e.sent,C(t.RepoURL);case 4:case"end":return e.stop()}}),e)})))()}),[]),s?m().createElement(f.Z,{onClose:P,customComponentMapper:{review:y.Z},onSubmit:function(e){var t=e.values;(0,e.setIsSaving)((function(){return!0}));var n=_(_({},t),{},{name:null==R?void 0:R.Name,version:(null==R?void 0:R.Version)+1,architecture:"x86_64",ostreeParentCommit:S,credentials:t.credentials?t.credentials:null==R?void 0:R.Installer.SshKey,username:t.username?t.username:null==R?void 0:R.Installer.Username});(0,I.Es)(b,n,(function(e){b(_(_({},(0,E.addNotification)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,k.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,E.addNotification)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,E.addNotification)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,I.Z5)(e)}]}}}})),P(),(0,I.Z5)(b),b((0,I.Fj)({name:R.value.Name,id:R.value.ID}))}))},defaultArch:"x86_64",initialValues:{name:null==R?void 0:R.Name,isUpdate:!0,description:null==R?void 0:R.Description,credentials:null==R?void 0:R.Installer.SshKey,username:null==R?void 0:R.Installer.Username,version:null==R?void 0:R.Version,imageType:["rhel-edge-commit"],"selected-packages":null==R||null===(t=R.Commit)||void 0===t?void 0:t.Packages.map((function(e){return _(_({},e),{},{name:e.Name})}))},schema:{fields:[{component:p.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==R?void 0:R.Name),crossroads:["target-environment","release","imageType"],fields:[v.bR,v.Ud,v.l9,v.B9,v.j7]}]}}):m().createElement(g.$,null)};S.propTypes={navigateBack:h().func,updateImageID:h().number},S.defaultProps={navigateBack:function(){}};const C=S}}]);
//# sourceMappingURL=../sourcemaps/UpdateImageWizard.aa79dbc419ebb9e5d796.js.map
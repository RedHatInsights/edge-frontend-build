"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[46],{53010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(87757),a=n.n(r),i=n(59713),u=n.n(i),s=n(48926),c=n.n(s),o=n(63038),l=n.n(o),d=n(1427),m=n.n(d),f=n(67098),p=n(96354),v=n(1005),g=n(2372),h=n(45697),b=n.n(h),y=n(20873),I=n(94778),w=n(59086),D=n(80962),O=n(59245),k=n(96667),E=n(66702),N=n(65190);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.navigateBack,n=e.updateImageID,r=(0,d.useState)(),i=l()(r,2),u=i[0],s=i[1],o=(0,d.useState)(),h=l()(o,2),b=h[0],_=h[1],x=(0,D.useDispatch)(),S=function(){t(),x({type:w.G})},P=(0,d.useContext)(O.g).getRegistry,U=(0,D.useSelector)((function(e){var t=e.imageDetailReducer;return{data:(null==t?void 0:t.data)||null}}),D.shallowEqual).data,C=function(){var e=c()(a().mark((function e(){var t,n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((null==(n=null==U||null===(t=U.Commit)||void 0===t?void 0:t.Packages)?void 0:n.length)>0)){e.next=7;break}return r=n.map(function(){var e=c()(a().mark((function e(t){var n,r,i,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.EV)("rhel-84","x86_64",t.Name);case 2:return n=e.sent,r=n.data,i=r.find((function(e){return e.name===t.Name})),u={name:i.name,summary:i.summary},e.abrupt("return",j(j({},t),u));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=5,Promise.all(r);case 5:i=e.sent,_(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){var e=P().register({imageDetailReducer:k.OD});return(0,I.J_)(x,n),function(){return e()}}),[x]),(0,d.useEffect)((function(){c()(a().mark((function e(){var t,n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.auth)||void 0===r?void 0:r.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:i=e.t0,s((function(){return i}));case 7:case"end":return e.stop()}}),e)})))(),C()}),[]),u?m().createElement(f.Z,{onClose:S,customComponentMapper:{review:y.Z},onSubmit:function(e){var t=e.values;(0,e.setIsSaving)((function(){return!0}));var n=j(j({},t),{},{Id:null==U?void 0:U.ID,name:null==U?void 0:U.Name,version:(null==U?void 0:U.Version)+1,architecture:"x86_64",credentials:t.credentials?t.credentials:null==U?void 0:U.Installer.SshKey,username:t.username?t.username:null==U?void 0:U.Installer.Username});(0,I.Es)(x,n,(function(e){x(j(j({},(0,N.addNotification)({variant:"info",title:"Update image",description:"".concat(e.value.Name," image was added to the queue.")})),{},{meta:{polling:{id:"FETCH_IMAGE_".concat(e.value.ID,"_BUILD_STATUS"),fetcher:function(){return(0,E.EC)(e.value.ID)},condition:function(e){switch(e.Status){case"BUILDING":return[!0,""];case"ERROR":return[!1,"failure"];default:return[!1,"success"]}},onEvent:{failure:[function(t){return t((0,N.addNotification)({variant:"danger",title:"Image build failed",description:"".concat(e.value.Name," image build is completed unsuccessfully")}))}],success:[function(t){return t((0,N.addNotification)({variant:"success",title:"Image is ready",description:"".concat(e.value.Name," image build is completed")}))},function(e){return(0,I.Z5)(e)}]}}}})),S(),(0,I.Z5)(x),x((0,I.Fj)({name:U.value.Name,id:U.value.ID}))}))},defaultArch:"x86_64",initialValues:{name:null==U?void 0:U.Name,isUpdate:!0,description:null==U?void 0:U.Description,credentials:null==U?void 0:U.Installer.SshKey,username:null==U?void 0:U.Installer.Username,version:null==U?void 0:U.Version,imageType:["rhel-edge-commit"],"selected-packages":b},schema:{fields:[{component:p.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Update image: ".concat(null==U?void 0:U.Name),crossroads:["target-environment","release","imageType"],fields:[v.bR,v.Ud,v.l9,v.B9,v.j7]}]}}):m().createElement(g.$,null)};x.propTypes={navigateBack:b().func,updateImageID:b().number},x.defaultProps={navigateBack:function(){}};const S=x}}]);
//# sourceMappingURL=../sourcemaps/UpdateImageWizard.465b4ddb064eb83c81f2.js.map
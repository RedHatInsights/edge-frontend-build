(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[344],{28678:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>fe});var r=n(59713),a=n.n(r),o=n(87757),i=n.n(o),l=n(48926),c=n.n(l),s=n(63038),u=n.n(s),d=n(1427),p=n.n(d),m=n(67154),v=n.n(m),f=n(37428),g=n(67850),h=n(24029),b=n(2372),E=n(45697),y=n.n(E),O=n(68774),w=n(68340),T=n(25834),k=n(45454),S=n(48880),P=n(80962),j=n(30319),C=n(2854),R=n(52643),x=n(35540);const A=function(){var e=(0,S.default)().getState,t=(0,d.useContext)(j.g).getRegistry,n=(0,P.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),P.shallowEqual),r=n.isLoading,a=n.hasError;return(0,d.useEffect)((function(){var e=t().register({createImageReducer:C.Ch});return function(){return e()}}),[]),r?p().createElement(R.b,null,p().createElement(b.$,null)):p().createElement(d.Fragment,null,a&&p().createElement(x.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),p().createElement(O.D,null,p().createElement(w.x,null,"Review the information and click the Create button to create your image using the following criteria."),p().createElement(w.x,{component:w.q.h1},"Image output"),p().createElement(T.G,{component:T.F.dl,"data-testid":"review-image-output"},p().createElement(k.T,{component:k.v.dt},"Release"),p().createElement(k.T,{component:k.v.dd},"Red Hat Enterprise Linux (RHEL) 8.3")),p().createElement(w.x,{component:w.q.h1},"Registration"),p().createElement(T.G,{component:T.F.dl,"data-testid":"review-image-registration"},p().createElement(k.T,{component:k.v.dt},"Username"),p().createElement(k.T,{component:k.v.dd},e().values.username),e().values.credentials.includes("password")?p().createElement(p().Fragment,null,p().createElement(k.T,{component:k.v.dt},"Password"),p().createElement(k.T,{component:k.v.dd,type:"password"},"*".repeat(e().values.password.length))):null,e().values.credentials.includes("sshKey")?p().createElement(p().Fragment,null,p().createElement(k.T,{component:k.v.dt},"SSH Key"),p().createElement(k.T,{component:k.v.dd,type:"password"},e().values.sshKey)):null),p().createElement(w.x,{component:w.q.h1},"Packages"),p().createElement(T.G,{component:T.F.dl,"data-testid":"review-image-packages"},p().createElement(k.T,{component:k.v.dt},"Added Packages"),p().createElement(k.T,{component:k.v.dd},void 0===e().values["selected-packages"]?0:e().values["selected-packages"].length))))};var D=n(6479),Z=n.n(D),I=n(32612),L=n(15110),_=n(47173),q=n(66702),K=function(e){return e.map((function(e,t){return p().createElement(O.D,{key:"".concat(e.name,"-").concat(t)},p().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),p().createElement("small",null,e.summary))}))},F=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},N=function(e){var t=e.defaultArch,n=Z()(e,["defaultArch"]),r=(0,S.default)(),a=r.change,o=r.getState,l=(0,I.Z)(n).input,s=(0,d.useRef)(),m=(0,d.useState)([]),v=u()(m,2),f=v[0],g=v[1],h=(0,d.useState)([]),b=u()(h,2),E=b[0],y=b[1],O=(0,d.useState)(""),w=u()(O,2),T=w[0],k=w[1];(0,d.useEffect)((function(){var e,t;y(K((null===(e=o())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[l.name])||[]))}),[]);var P=function(e,t){var n=t.map(F);g(e),y(t),a(l.name,n)},j=function(){var e=c()(i().mark((function e(){var n,r,a,l,c,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,q.EV)((null===(n=o())||void 0===n||null===(r=n.values)||void 0===r?void 0:r.release)||"rhel-8",(null===(a=o())||void 0===a||null===(l=a.values)||void 0===l?void 0:l.architecture)||t,s.current);case 2:c=e.sent,u=c.data,g(K(u||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p().createElement(L.I,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[p().createElement(_.zx,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:j},"Search")],availableOptions:f,availableOptionsTitle:"Available packages",chosenOptions:E.filter((function(e){var t,n;return null===(t=F(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(T)})),chosenOptionsTitle:"Chosen packages",addSelected:P,removeSelected:P,addAll:P,removeAll:function(e){return P(e,E.filter((function(e){var t,n;return!(null===(t=F(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(T))})))},onAvailableOptionsSearchInputChanged:function(e){s.current=e},onChosenOptionsSearchInputChanged:function(e){return k(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};N.propTypes={defaultArch:y().string};const V=N;var H=n(319),M=n.n(H),U=n(43627),X=n(93149),z=n(92607),B=n(87346);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=$($({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=$($({},n),{},{sshKey:"Required"})),n}};const W=function(e){var t=(0,I.Z)(e),n=t.input,r=t.meta,a=(0,d.useCallback)((function(e,t){n.onChange(e?[].concat(M()(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),o=(0,I.Z)({name:"password"}).input,i=(0,I.Z)({name:"sshKey"}).input;return p().createElement(U.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},p().createElement(X.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:a}),n.value.includes("password")?p().createElement(U.c,{helperTextInvalid:r.dirty&&void 0!==r.error.password?r.error.password:void 0},p().createElement(z.oi,v()({type:"password"},o))):null,p().createElement(X.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:a}),n.value.includes("sshKey")?p().createElement(U.c,{helperTextInvalid:r.dirty&&void 0!==r.error.sshKey?r.error.sshKey:void 0},p().createElement(B.Kx,i)):null)};var Y=n(64124);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=function(e){var t=e.schema,n=e.onSubmit,r=e.onClose,a=e.customComponentMapper,o=e.defaultArch;return t?p().createElement(f.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return p().createElement(g.ZP,v()({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:ee(ee({},h.YS),{},{"registration-creds":{component:W},review:A,"package-selector":{component:V,defaultArch:o}},a),validatorMapper:ee(ee({},Y.Z),{},{registrationCredsValidator:Q}),onCancel:r}):p().createElement(b.$,null)};te.propTypes={schema:y().object,onSubmit:y().func.isRequired,onClose:y().func.isRequired,customComponentMapper:y().shape(a()({},y().string,y().oneOfType([y().node,y().shape({component:y().node})]))),defaultArch:y().string};const ne=te;var re=n(96354);const ae={name:"review",title:"Review",fields:[{name:"review",component:"review"}]};var oe=n(68920),ie=function(){var e,t,n=null===(e=(0,(0,S.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,r=void 0!==n?oe.Ei[n]:"";return p().createElement(O.D,null,p().createElement(w.x,null,"Add packages to your ",p().createElement(w.x,{component:"b"},r)," image."))};const le={title:"Additional Packages",name:"packages",nextStep:"review",fields:[{component:re.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:p().createElement(ie,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]},ce={title:"Image Output",name:"imageOutput",nextStep:"registration",fields:[{component:re.Z.PLAIN_TEXT,name:"description",label:p().createElement(w.x,null,"Enter some basic info about the image you are creating")},{component:re.Z.SELECT,name:"release",label:"Release",options:Object.keys(oe.Ei).map((function(e){return{value:e,label:oe.Ei[e]}})),initialValue:"rhel-8.3",validate:[{type:Y.Z.REQUIRED}],isRequired:!0,isDisabled:!0},{component:re.Z.SELECT,name:"outputType",label:"Output Type",options:[{value:"rhel-edge-iso",label:"RHEL for Edge Installer (.iso)"}],initialValue:"rhel-edge-iso",validate:[{type:Y.Z.REQUIRED}],isRequired:!0,isDisabled:!0}]},se={title:"Registration",name:"registration",nextStep:"packages",fields:[{component:re.Z.PLAIN_TEXT,name:"description",label:p().createElement(w.x,null,"A user is required to register the device and make it visible on cloud.redhat.com")},{component:re.Z.TEXT_FIELD,name:"username",label:"Username",helperText:"The user name can only consist of letters from a-z, digits, dots, dashes and underscores.",validate:[{type:Y.Z.REQUIRED},{type:Y.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/},{type:Y.Z.MIN_LENGTH,threshold:5}],isRequired:!0},{component:"registration-creds",name:"credentials",initialValue:[],clearedValue:[],validate:[{type:"registrationCredsValidator"}]}]};var ue=n(94778),de=n(59086);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){var t=e.navigateBack,n=(0,d.useState)(),r=u()(n,2),a=r[0],o=r[1],l=(0,P.useDispatch)(),s=function(){t(),l({type:de.G})};return(0,d.useEffect)((function(){c()(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.auth)||void 0===r?void 0:r.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:a=e.t0,o((function(){return a}));case 7:case"end":return e.stop()}}),e)})))()}),[]),a?p().createElement(ne,{onClose:s,customComponentMapper:{review:A},onSubmit:function(e){var t=me(me({},e),{},{architecture:"x86_64"});(0,ue.Es)(l,t,s)},defaultArch:"x86_64",schema:{fields:[{component:re.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:"Create RHEL for Edge image",fields:[ce,se,le,ae]}]}}):p().createElement(b.$,null)};ve.propTypes={navigateBack:y().func},ve.defaultProps={navigateBack:function(){}};const fe=ve}}]);
//# sourceMappingURL=../sourcemaps/CreateImageWizard.eb0282edbf1f7c6cf314.js.map
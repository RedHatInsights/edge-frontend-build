(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[344],{27026:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Pe});var r=n(59713),a=n.n(r),i=n(87757),l=n.n(i),o=n(48926),c=n.n(o),s=n(63038),u=n.n(s),p=n(1427),d=n.n(p),m=n(67154),v=n.n(m),f=n(37428),g=n(67850),h=n(24029),b=n(2372),E=n(45697),y=n.n(E),O=n(68774),w=n(68340),k=n(48880),P=n(68920),S=n(80962),T=n(30319),j=n(55128),x=n(52643),R=n(35540),A=n(50693),C=n(16475),D=n(45454),Z=function(e){var t=e.title,n=e.data,r=e.testid;return d().createElement(A.r,{className:"pf-u-pb-md","data-testid":r,hasGutter:!0},d().createElement(C.P,{span:12,hasGutter:!0},d().createElement(w.x,{component:w.q.h1},t)),n.map((function(e){var t=e.name,n=e.value;return d().createElement(d().Fragment,null,d().createElement(C.P,{span:3,hasGutter:!0},d().createElement(D.T,{component:D.v.dt},t)),d().createElement(C.P,{span:9,hasGutter:!0},d().createElement(D.T,{component:D.v.dd},n)))})))};Z.propTypes={title:y().string,data:y().arrayOf(y().shape({name:y().string,value:y().string})),testid:y().string};const I=Z,_=function(){var e=(0,k.default)().getState,t=(0,p.useContext)(T.g).getRegistry,n=(0,S.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),S.shallowEqual),r=n.isLoading,a=n.hasError;if((0,p.useEffect)((function(){var e=t().register({createImageReducer:j.Ch});return function(){return e()}}),[]),r)return d().createElement(x.b,null,d().createElement(b.$,null));var i=[{name:"Name",value:e().values.name},{name:"Version",value:"1"},{name:"Description",value:e().values.description}],l=[{name:"Release",value:P.Ei[e().values.release]},{name:"Type",value:e().values.imageType.map((function(e){return"".concat(P.bd[e])})).join(", ")}],o=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],c=[{name:"Added packages",value:void 0===e().values["selected-packages"]?"0":e().values["selected-packages"].length}];return d().createElement(p.Fragment,null,a&&d().createElement(R.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),d().createElement(O.D,null,d().createElement(w.x,null,"Review the information and click"," ",d().createElement(w.x,{component:"b"},"Create image")," to create your image."),d().createElement(I,{title:"Details",data:i,testid:"review-image-details"}),d().createElement(I,{title:"Output",data:l,testid:"review-image-output"}),d().createElement(I,{title:"Registration",data:o,testid:"review-image-registration"}),d().createElement(I,{title:"Packages",data:c,testid:"review-image-packages"})))};var N=n(6479),L=n.n(N),q=n(32612),X=n(15110),K=n(47173),F=n(66702),H=function(e){return e.map((function(e,t){return d().createElement(O.D,{key:"".concat(e.name,"-").concat(t)},d().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),d().createElement("small",null,e.summary))}))},M=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},U=function(e){var t=e.defaultArch,n=L()(e,["defaultArch"]),r=(0,k.default)(),a=r.change,i=r.getState,o=(0,q.Z)(n).input,s=(0,p.useRef)(),m=(0,p.useState)([]),v=u()(m,2),f=v[0],g=v[1],h=(0,p.useState)([]),b=u()(h,2),E=b[0],y=b[1],O=(0,p.useState)(""),w=u()(O,2),P=w[0],S=w[1];(0,p.useEffect)((function(){var e,t;y(H((null===(e=i())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[o.name])||[]))}),[]);var T=function(e,t){var n=t.map(M);g(e),y(t),a(o.name,n)},j=function(){var e=c()(l().mark((function e(){var n,r,a,o,c,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.EV)((null===(n=i())||void 0===n||null===(r=n.values)||void 0===r?void 0:r.release)||"rhel-8",(null===(a=i())||void 0===a||null===(o=a.values)||void 0===o?void 0:o.architecture)||t,s.current);case 2:c=e.sent,u=c.data,g(H(u||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d().createElement(X.I,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[d().createElement(K.zx,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:j},"Search")],availableOptions:f,availableOptionsTitle:"Available packages",chosenOptions:E.filter((function(e){var t,n;return null===(t=M(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(P)})),chosenOptionsTitle:"Chosen packages",addSelected:T,removeSelected:T,addAll:T,removeAll:function(e){return T(e,E.filter((function(e){var t,n;return!(null===(t=M(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(P))})))},onAvailableOptionsSearchInputChanged:function(e){s.current=e},onChosenOptionsSearchInputChanged:function(e){return S(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};U.propTypes={defaultArch:y().string};const V=U;var G=n(319),z=n.n(G),B=n(43627),Q=n(93149),$=n(92607),W=n(87346);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=J(J({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=J(J({},n),{},{sshKey:"Required"})),n}};const te=function(e){var t=(0,q.Z)(e),n=t.input,r=t.meta,a=(0,p.useCallback)((function(e,t){n.onChange(e?[].concat(z()(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),i=(0,q.Z)({name:"password"}).input,l=(0,q.Z)({name:"sshKey"}).input;return d().createElement(B.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},d().createElement(Q.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:a}),n.value.includes("password")?d().createElement(B.c,{helperTextInvalid:r.dirty&&void 0!==r.error.password?r.error.password:void 0},d().createElement($.oi,v()({type:"password"},i))):null,d().createElement(Q.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:a}),n.value.includes("sshKey")?d().createElement(B.c,{helperTextInvalid:r.dirty&&void 0!==r.error.sshKey?r.error.sshKey:void 0},d().createElement(W.Kx,l)):null)};var ne=function(e){var t=(0,q.Z)(e).input,n=(0,p.useCallback)((function(e,n){t.onChange(e?[].concat(z()(t.value),[n.currentTarget.id]):t.value.filter((function(e){return e!==n.currentTarget.id})))}),[t.onChange]);return d().createElement(B.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var a=e.value,i=e.label;return d().createElement(Q.X,{key:r,label:i,id:a,isChecked:t.value.includes(a),onChange:n})})))};ne.propTypes={input:y().array,options:y().arrayOf(y().shape({value:y().string,label:y().string}))};const re=ne;var ae=n(15265);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}const le=function(e){var t=(0,q.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,r=t.meta;return d().createElement(B.c,{label:"SSH key",helperTextInvalid:r.error,validated:r.error&&r.touched?"error":"default",isRequired:!0,helperText:d().createElement(p.Fragment,null,d().createElement(w.x,{component:w.q.small},d().createElement(w.x,{target:"_blank",href:"https://en.wikipedia.org/wiki/Secure_Shell_Protocol",isVisitedLink:!0,component:w.q.a},"Learn more about SSH keys",d().createElement(ae.ZP,{className:"pf-u-ml-sm"}))))},d().createElement(W.Kx,v()({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n)))};var oe=n(64124);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t=e.schema,n=e.onSubmit,r=e.onClose,a=e.customComponentMapper,i=e.defaultArch;return t?d().createElement(f.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return d().createElement(g.ZP,v()({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:se(se({},h.YS),{},{"registration-creds":{component:te},"image-output-checkbox":{component:re},"ssh-input-field":{component:le},review:_,"package-selector":{component:V,defaultArch:i}},a),validatorMapper:se(se({},oe.Z),{},{registrationCredsValidator:ee}),onCancel:r}):d().createElement(b.$,null)};ue.propTypes={schema:y().object,onSubmit:y().func.isRequired,onClose:y().func.isRequired,customComponentMapper:y().shape(a()({},y().string,y().oneOfType([y().node,y().shape({component:y().node})]))),defaultArch:y().string};const pe=ue;var de=n(96354);const me={name:"review",title:"Review",fields:[{name:"review",component:"review"}]};var ve=function(){var e,t,n=null===(e=(0,(0,k.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,r=void 0!==n?P.Ei[n]:"";return d().createElement(O.D,null,d().createElement(w.x,null,"Add packages to your ",d().createElement(w.x,{component:"b"},r)," image."))};const fe={title:"Additional packages",name:"packages",nextStep:"review",fields:[{component:de.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:d().createElement(ve,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]},ge={title:"Image output",name:"imageOutput",nextStep:"registration",fields:[{component:de.Z.PLAIN_TEXT,name:"description",label:d().createElement(w.x,null,"Enter some basic information for your image.")},{component:de.Z.SELECT,name:"release",label:"Release",options:Object.entries(P.Ei).map((function(e){var t=u()(e,2);return{value:t[0],label:t[1]}})),initialValue:"rhel-8",validate:[{type:oe.Z.REQUIRED}],isRequired:!0,isDisabled:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(P.bd).map((function(e){var t=u()(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer"],clearedValue:[],validate:[{type:oe.Z.REQUIRED}]}]},he={title:"Image details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:de.Z.PLAIN_TEXT,name:"description",label:d().createElement(w.x,null,"Enter a name and description to easily identify your image later.")},{component:de.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",validate:[{type:oe.Z.REQUIRED},{type:oe.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/},{type:oe.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:de.Z.TEXTAREA,name:"description",label:"Description",placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:oe.Z.MAX_LENGTH,threshold:250}]}]},be={title:"Device registration",name:"registration",nextStep:"packages",fields:[{component:de.Z.PLAIN_TEXT,name:"description",label:d().createElement(w.x,null,"Use this to connect your device to Fleet Management.")},{component:de.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",name:"username",validate:[{type:oe.Z.REQUIRED},{type:oe.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/},{type:oe.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:oe.Z.REQUIRED},{type:oe.Z.PATTERN,pattern:/^(ssh-(rsa|dss)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]};var Ee=n(94778),ye=n(59086);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=function(e){var t=e.navigateBack,n=(0,p.useState)(),r=u()(n,2),a=r[0],i=r[1],o=(0,S.useDispatch)(),s=function(){t(),o({type:ye.G})};return(0,p.useEffect)((function(){c()(l().mark((function e(){var t,n,r,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.auth)||void 0===r?void 0:r.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:a=e.t0,i((function(){return a}));case 7:case"end":return e.stop()}}),e)})))()}),[]),a?d().createElement(pe,{onClose:s,customComponentMapper:{review:_},onSubmit:function(e){var t=we(we({},e),{},{architecture:"x86_64"});(0,Ee.Es)(o,t,s)},defaultArch:"x86_64",schema:{fields:[{component:de.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:"Create RHEL for Edge image",fields:[he,ge,be,fe,me]}]}}):d().createElement(b.$,null)};ke.propTypes={navigateBack:y().func},ke.defaultProps={navigateBack:function(){}};const Pe=ke}}]);
//# sourceMappingURL=../sourcemaps/CreateImageWizard.617a35f0958ba525ddd3.js.map
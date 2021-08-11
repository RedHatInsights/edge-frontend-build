(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[842],{31197:(e,t,n)=>{"use strict";n.d(t,{Ud:()=>g,oG:()=>h,B9:()=>p,l9:()=>E,j7:()=>a,bR:()=>b});const a={name:"review",title:"Review",fields:[{name:"review",component:"review"}]};var r=n(1427),l=n.n(r),i=n(96354),o=n(68340),s=n(68774),c=n(48880),u=n(68920),d=function(){var e,t,n=null===(e=(0,(0,c.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,a=void 0!==n?u.Ei[n]:"";return l().createElement(s.D,null,l().createElement(o.x,null,"Add packages to your ",l().createElement(o.x,{component:"b"},a)," image."))};const p={title:"Additional packages",name:"packages",nextStep:"review",fields:[{component:i.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:l().createElement(d,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]};var m=n(63038),v=n.n(m),f=n(64124);const g={title:"Options",name:"imageOutput",nextStep:function(e){var t,n=e.values;return(null==n||null===(t=n.imageType)||void 0===t?void 0:t.includes("rhel-edge-installer"))||!n.imageType?"registration":"packages"},fields:[{component:i.Z.PLAIN_TEXT,name:"description",label:l().createElement(o.x,null,"Enter some basic information for your image.")},{component:i.Z.SELECT,name:"release",label:"Release",options:Object.entries(u.Ei).map((function(e){var t=v()(e,2);return{value:t[0],label:t[1]}})),initialValue:u.az,validate:[{type:f.Z.REQUIRED}],isRequired:!0,isDisabled:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(u.bd).map((function(e){var t=v()(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer","rhel-edge-commit"],clearedValue:[],validate:[{type:f.Z.REQUIRED}]}]},h={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:i.Z.PLAIN_TEXT,name:"description",label:l().createElement(o.x,null,"Enter a name and description to easily identify your image later.")},{component:i.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",validate:[{type:f.Z.REQUIRED},{type:f.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/},{type:f.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:i.Z.TEXTAREA,name:"description",label:"Description",placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:f.Z.MAX_LENGTH,threshold:250}]}]},b={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:i.Z.PLAIN_TEXT,name:"description",label:l().createElement(o.x,null,"Add a description to easily identify your image later.")},{component:i.Z.TEXT_FIELD,name:"description",label:"Description",placeholder:"Add description",validate:[{type:f.Z.MAX_LENGTH,threshold:250}]}]},E={title:"Device registration",name:"registration",nextStep:"packages",fields:[{component:i.Z.PLAIN_TEXT,name:"description",label:l().createElement(o.x,null,"Use this to connect your device to Fleet Management.")},{component:i.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",name:"username",validate:[{type:f.Z.REQUIRED},{type:f.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/},{type:f.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:f.Z.REQUIRED},{type:f.Z.PATTERN,pattern:/^(ssh-(rsa|dss|ed25519)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]}},10728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>re});var a=n(59713),r=n.n(a),l=n(67154),i=n.n(l),o=n(1427),s=n.n(o),c=n(37428),u=n(67850),d=n(24029),p=n(2372),m=n(45697),v=n.n(m),f=n(20873),g=n(87757),h=n.n(g),b=n(48926),E=n.n(b),y=n(63038),O=n.n(y),T=n(6479),w=n.n(T),k=n(48880),S=n(32612),P=n(15110),A=n(47173),Z=n(68774),j=n(66702),x=function(e){return e.map((function(e,t){return s().createElement(Z.D,{key:"".concat(e.name,"-").concat(t)},s().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),s().createElement("small",null,e.summary))}))},R=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},D=function(e){var t=e.defaultArch,n=w()(e,["defaultArch"]),a=(0,k.default)(),r=a.change,l=a.getState,i=(0,S.Z)(n).input,c=(0,o.useRef)(),u=(0,o.useState)([]),d=O()(u,2),p=d[0],m=d[1],v=(0,o.useState)([]),f=O()(v,2),g=f[0],b=f[1],y=(0,o.useState)(""),T=O()(y,2),Z=T[0],D=T[1];(0,o.useEffect)((function(){var e,t;b(x((null===(e=l())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[i.name])||[]));var n=document.querySelector('[aria-label="Available search input"]');return null==n||n.addEventListener("keydown",N),function(){return n.removeEventListener("keydown",N)}}),[]);var C=function(e,t){var n=t.map(R);m(e),b(t),r(i.name,n)},I=function(){var e=E()(h().mark((function e(){var n,a,r,i,o,s;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.EV)((null===(n=l())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release)||"rhel-8",(null===(r=l())||void 0===r||null===(i=r.values)||void 0===i?void 0:i.architecture)||t,c.current);case 2:o=e.sent,s=o.data,m(x(s||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){"Enter"===e.key&&(e.stopPropagation(),I())};return s().createElement(P.I,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[s().createElement(A.zx,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:I},"Search")],availableOptions:p,availableOptionsTitle:"Available packages",chosenOptions:g.filter((function(e){var t,n;return null===(t=R(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(Z)})),chosenOptionsTitle:"Chosen packages",addSelected:C,removeSelected:C,addAll:C,removeAll:function(e){return C(e,g.filter((function(e){var t,n;return!(null===(t=R(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(Z))})))},onAvailableOptionsSearchInputChanged:function(e){c.current=e},onChosenOptionsSearchInputChanged:function(e){return D(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};D.propTypes={defaultArch:v().string};const C=D;var I=n(319),N=n.n(I),L=n(43627),_=n(93149),q=n(92607),V=n(87346);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=F(F({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=F(F({},n),{},{sshKey:"Required"})),n}};const U=function(e){var t=(0,S.Z)(e),n=t.input,a=t.meta,r=(0,o.useCallback)((function(e,t){n.onChange(e?[].concat(N()(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),l=(0,S.Z)({name:"password"}).input,c=(0,S.Z)({name:"sshKey"}).input;return s().createElement(L.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},s().createElement(_.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:r}),n.value.includes("password")?s().createElement(L.c,{helperTextInvalid:a.dirty&&void 0!==a.error.password?a.error.password:void 0},s().createElement(q.oi,i()({type:"password"},l))):null,s().createElement(_.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:r}),n.value.includes("sshKey")?s().createElement(L.c,{helperTextInvalid:a.dirty&&void 0!==a.error.sshKey?a.error.sshKey:void 0},s().createElement(V.Kx,c)):null)};var H=n(68340),G=n(36621),M=n(53620),z=n(15265),Q=function(){return s().createElement(G.p,{className:"pf-u-ml-lg",hasIcon:!0},s().createElement(M.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"Creating an installable version of your image increases the build time and is not needed for updating existing devices. ",s().createElement("br",null),"You can create an installable version of this image later if you continue with this option"))},B={"rhel-edge-commit":"An OSTree commit is always created when building an image.","rhel-edge-installer":"An installable version of the image is typically created with a brand new image."},$=function(e){var t=(0,k.default)().getState,n=(0,S.Z)(e).input,a=(0,o.useCallback)((function(e,t){n.onChange(e?[].concat(N()(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]);return s().createElement(L.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var l,i,o=e.value,c=e.label;return s().createElement(s().Fragment,null,s().createElement(_.X,{key:r,label:c,id:o,isChecked:n.value.includes(o),onChange:a,isDisabled:"rhel-edge-commit"===o}),s().createElement(Z.D,null,(null===(l=t())||void 0===l||null===(i=l.initialValues)||void 0===i?void 0:i.isUpdate)&&"rhel-edge-installer"===o?s().createElement(Q,null):s().createElement(G.p,{className:"pf-u-ml-lg pf-u-pb-sm"},s().createElement(M.u,{variant:"indeterminate"},B[o])),"rhel-edge-installer"===o&&s().createElement(H.x,{component:H.q.small},s().createElement(H.x,{className:"pf-u-ml-lg",component:H.q.a,isVisitedLink:!0},"Learn more about image types.",s().createElement(z.ZP,{className:"pf-u-ml-sm"})))))})))};$.propTypes={input:v().array,options:v().arrayOf(v().shape({value:v().string,label:v().string}))};const Y=$;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const J=function(e){var t=(0,S.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,a=t.meta;return s().createElement(L.c,null,s().createElement(L.c,{label:"SSH key",helperTextInvalid:a.error,validated:a.error&&a.touched?"error":"default",isRequired:!0},s().createElement(V.Kx,i()({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n))),s().createElement(o.Fragment,null,s().createElement(H.x,{component:H.q.small},s().createElement(H.x,{target:"_blank",href:"https://access.redhat.com/solutions/3356121",isVisitedLink:!0,component:H.q.a},"Learn more about SSH keys",s().createElement(z.ZP,{className:"pf-u-ml-sm"})))))};var ee=n(64124);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,r=e.customComponentMapper,l=e.initialValues,o=e.defaultArch;return t?s().createElement(c.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return s().createElement(u.ZP,i()({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},initialValues:l,componentMapper:ne(ne({},d.YS),{},{"registration-creds":{component:U},"image-output-checkbox":{component:Y},"ssh-input-field":{component:J},review:f.Z,"package-selector":{component:C,defaultArch:o}},r),validatorMapper:ne(ne({},ee.Z),{},{registrationCredsValidator:K}),onCancel:a}):s().createElement(p.$,null)};ae.propTypes={schema:v().object,initialValues:v().object,onSubmit:v().func.isRequired,onClose:v().func.isRequired,customComponentMapper:v().shape(r()({},v().string,v().oneOfType([v().node,v().shape({component:v().node})]))),defaultArch:v().string};const re=ae},20873:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var a=n(1427),r=n.n(a),l=n(68774),i=n(68340),o=n(48880),s=n(68920),c=n(80962),u=n(59245),d=n(96667),p=n(52643),m=n(2372),v=n(35540),f=n(50693),g=n(16475),h=n(45454),b=n(45697),E=n.n(b),y=function(e){var t=e.title,n=e.data,a=e.testid;return r().createElement(f.r,{className:"pf-u-pb-xl","data-testid":a,hasGutter:!0},r().createElement(g.P,{span:12,hasGutter:!0},r().createElement(i.x,{component:i.q.h2},t)),n.map((function(e){var t=e.name,n=e.value;return r().createElement(r().Fragment,null,r().createElement(g.P,{span:3,hasGutter:!0},r().createElement(h.T,{component:h.v.dt},t)),r().createElement(g.P,{span:9,hasGutter:!0},r().createElement(h.T,{component:h.v.dd},n)))})))};y.propTypes={title:E().string,data:E().arrayOf(E().shape({name:E().string,value:E().string})),testid:E().string};const O=y,T=function(){var e=(0,o.default)().getState,t=e().initialValues.isUpdate,n=(0,a.useContext)(u.g).getRegistry,f=(0,c.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),c.shallowEqual),g=f.isLoading,h=f.hasError;if((0,a.useEffect)((function(){var e=n().register({createImageReducer:d.Ch});return function(){return e()}}),[]),g)return r().createElement(p.b,null,r().createElement(m.$,null));var b,E=[{name:"Name",value:e().values.name},{name:"Version",value:e().initialValues.version+1},{name:"Description",value:e().values.description}],y=[{name:"Release",value:s.Ei[e().values.release]},{name:"Type",value:e().values.imageType.map((function(e){return"".concat(s.bd[e])})).join(", ")}],T=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],w=e().initialValues["selected-packages"],k=e().values["selected-packages"],S=function(e,t){return e.reduce((function(e,n){var a=n.name;return e+(t.some((function(e){return e.name===a}))?0:1)}),0)};return r().createElement(a.Fragment,null,h&&r().createElement(v.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),r().createElement(l.D,null,r().createElement(i.x,null,"Review the information and click"," ",r().createElement(i.x,{component:"b"},"Create ",t?"update":"image")," to"," ",t?"update":"create"," your image."),r().createElement(O,{title:"Details",data:E,testid:"review-image-details"}),r().createElement(O,{title:"Output",data:y,testid:"review-image-output"}),e().values.imageType.includes("rhel-edge-installer")?r().createElement(O,{title:"Registration",data:T,testid:"review-image-registration"}):null,r().createElement(O,{title:"Packages",data:(b=[{name:t?"Added":"Added packages",value:S(k,w)}],t?[].concat(b,[{name:"Removed",value:S(w,k)},{name:"Updated",value:0}]):b),testid:"review-image-packages"})))}}}]);
//# sourceMappingURL=../sourcemaps/842.b6d5497c1a8e3eed49b4.js.map
"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[735],{1005:(e,t,n)=>{n.d(t,{Ud:()=>O,oG:()=>k,B9:()=>E,l9:()=>P,j7:()=>m,bR:()=>T});var a=n(63038),r=n.n(a),i=n(1427),l=n.n(i),s=n(47173),o=n(6468),c=n(70363),u=n(45697),d=n.n(u),p=function(e){var t=e.buttonLabels,n=t.cancel,a=t.submit,u=t.back,d=(0,i.useState)(!1),p=r()(d,2),m=p[0],v=p[1],h=(0,i.useContext)(c.default),g=h.handlePrev,f=h.formOptions;return l().createElement(o.lP,null,(function(){return l().createElement(l().Fragment,null,l().createElement(s.zx,{variant:"primary",type:"button",isDisabled:!f.valid||f.getState().validating||m,onClick:function(){f.onSubmit({values:f.getState().values,setIsSaving:v})}},a),l().createElement(s.zx,{type:"button",variant:"secondary",onClick:g,isDisabled:m},u),l().createElement("div",{className:"pf-c-wizard__footer-cancel"},l().createElement(s.zx,{type:"button",variant:"link",onClick:f.onCancel,isDisabled:m},n)))}))};p.propTypes={buttonLabels:d().shape({cancel:d().node,submit:d().node,back:d().node}),isSaving:d().bool};const m={name:"review",title:"Review",buttons:p,fields:[{name:"review",component:"review"}]};var v=n(96354),h=n(68340),g=n(68774),f=n(48880),b=n(68920),y=function(){var e,t,n=null===(e=(0,(0,f.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,a=void 0!==n?b.Ei[n]:"";return l().createElement(g.D,null,l().createElement(h.x,null,"Add packages to your ",l().createElement(h.x,{component:"b"},a)," image."))};const E={title:"Additional packages",name:"packages",nextStep:"review",fields:[{component:v.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:l().createElement(y,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]};var w=n(64124);const O={title:"Options",name:"imageOutput",nextStep:function(e){var t,n=e.values;return(null==n||null===(t=n.imageType)||void 0===t?void 0:t.includes("rhel-edge-installer"))||!n.imageType?"registration":"packages"},fields:[{component:v.Z.PLAIN_TEXT,name:"description",label:l().createElement(h.x,null,"Enter some basic information about your image.")},{component:v.Z.SELECT,name:"release",label:"Release",options:Object.entries(b.Ei).map((function(e){var t=r()(e,2);return{value:t[0],label:t[1]}})),initialValue:b.az,validate:[{type:w.Z.REQUIRED}],isRequired:!0,isDisabled:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(b.bd).map((function(e){var t=r()(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer","rhel-edge-commit"],clearedValue:[],validate:[{type:w.Z.REQUIRED}]}]},k={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:v.Z.PLAIN_TEXT,name:"description",label:l().createElement(h.x,null,"Enter a name and description to easily identify your image later.")},{component:v.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",validate:[{type:w.Z.REQUIRED},{type:w.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/},{type:w.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:v.Z.TEXTAREA,name:"description",label:"Description",placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:w.Z.MAX_LENGTH,threshold:250}]}]},T={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:v.Z.PLAIN_TEXT,name:"description",label:l().createElement(h.x,null,"Enter a description to easily identify your image later.")},{component:v.Z.TEXT_FIELD,name:"description",label:"Description",placeholder:"Add description",validate:[{type:w.Z.MAX_LENGTH,threshold:250}]}]};var S=n(36621),x=n(53620);const P={title:"Device registration",name:"registration",nextStep:"packages",fields:[{component:v.Z.PLAIN_TEXT,name:"description",label:l().createElement(h.x,null,"Use this to log into your device.")},{component:v.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",helperText:l().createElement(S.p,null,l().createElement(x.u,{className:"pf-u-mt-xs",variant:"indeterminate"},"Can only contain letters, numbers, hyphen ( - ), and underscores( _ ).")),name:"username",validate:[{type:w.Z.REQUIRED},{type:w.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/,message:"Can only contain letters, numbers, hyphen ( - ), and underscores( _ )."},{type:w.Z.MAX_LENGTH,threshold:50},{type:"reservedUsernameValidator"}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:w.Z.REQUIRED},{type:w.Z.PATTERN,pattern:/^(ssh-(rsa|dss|ed25519)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]}},67098:(e,t,n)=>{n.d(t,{Z:()=>le});var a=n(59713),r=n.n(a),i=n(67154),l=n.n(i),s=n(1427),o=n.n(s),c=n(95960),u=n(67850),d=n(53215),p=n(2372),m=n(45697),v=n.n(m),h=n(20873),g=n(87757),f=n.n(g),b=n(48926),y=n.n(b),E=n(63038),w=n.n(E),O=n(6479),k=n.n(O),T=n(48880),S=n(11511),x=n(15110),P=n(47173),j=n(68774),Z=n(66702),A=function(e){return e.map((function(e,t){return o().createElement(j.D,{key:"".concat(e.name,"-").concat(t)},o().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),o().createElement("small",null,e.summary))}))},C=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},D=function(e){var t=e.defaultArch,n=k()(e,["defaultArch"]),a=(0,T.default)(),r=a.change,i=a.getState,l=(0,S.Z)(n).input,c=(0,s.useRef)(),u=(0,s.useState)([]),d=w()(u,2),p=d[0],m=d[1],v=(0,s.useState)([]),h=w()(v,2),g=h[0],b=h[1],E=(0,s.useState)(""),O=w()(E,2),j=O[0],D=O[1];(0,s.useEffect)((function(){var e,t;b(A((null===(e=i())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[l.name])||[]));var n=document.querySelector('[aria-label="Available search input"]');return null==n||n.addEventListener("keydown",N),function(){return n.removeEventListener("keydown",N)}}),[]);var R=function(e,t){var n=t.map(C);m(e),b(t),r(l.name,n)},_=function(){var e=y()(f().mark((function e(){var n,a,r,l,s,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.EV)((null===(n=i())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release)||"rhel-8",(null===(r=i())||void 0===r||null===(l=r.values)||void 0===l?void 0:l.architecture)||t,c.current);case 2:s=e.sent,o=s.data,m(A(o||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){"Enter"===e.key&&(e.stopPropagation(),_())};return o().createElement(x.I,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[o().createElement(P.zx,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:_},"Search")],availableOptions:p,availableOptionsTitle:"Available packages",chosenOptions:g.filter((function(e){var t,n;return null===(t=C(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(j)})),chosenOptionsTitle:"Chosen packages",addSelected:R,removeSelected:R,addAll:R,removeAll:function(e){return R(e,g.filter((function(e){var t,n;return!(null===(t=C(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(j))})))},onAvailableOptionsSearchInputChanged:function(e){c.current=e},onChosenOptionsSearchInputChanged:function(e){return D(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};D.propTypes={defaultArch:v().string};const R=D;var _=n(319),N=n.n(_),q=n(43627),I=n(93149),L=n(92607),V=n(87346);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=U(U({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=U(U({},n),{},{sshKey:"Required"})),n}};const z=function(e){var t=(0,S.Z)(e),n=t.input,a=t.meta,r=(0,s.useCallback)((function(e,t){n.onChange(e?[].concat(N()(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),i=(0,S.Z)({name:"password"}).input,c=(0,S.Z)({name:"sshKey"}).input;return o().createElement(q.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},o().createElement(I.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:r}),n.value.includes("password")?o().createElement(q.c,{helperTextInvalid:a.dirty&&void 0!==a.error.password?a.error.password:void 0},o().createElement(L.oi,l()({type:"password"},i))):null,o().createElement(I.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:r}),n.value.includes("sshKey")?o().createElement(q.c,{helperTextInvalid:a.dirty&&void 0!==a.error.sshKey?a.error.sshKey:void 0},o().createElement(V.Kx,c)):null)};var K=n(68340),H=n(36621),G=n(53620),M=n(15265),Q=function(){return o().createElement(H.p,{className:"pf-u-ml-lg",hasIcon:!0},o().createElement(G.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"Creating an installable version of your image increases the build time and is not needed for updating existing devices. ",o().createElement("br",null),"You can create an installable version of this image later if you continue with this option"))},B={"rhel-edge-commit":"An OSTree commit is always created when building an image.","rhel-edge-installer":"An installable version of the image is typically created with a brand new image."},$=function(e){var t=(0,T.default)().getState,n=(0,S.Z)(e).input,a=(0,s.useCallback)((function(e,t){n.onChange(e?[].concat(N()(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]);return o().createElement(q.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var i,l,s=e.value,c=e.label;return o().createElement(o().Fragment,null,o().createElement(I.X,{key:r,label:c,id:s,isChecked:n.value.includes(s),onChange:a,isDisabled:"rhel-edge-commit"===s}),o().createElement(j.D,null,(null===(i=t())||void 0===i||null===(l=i.initialValues)||void 0===l?void 0:l.isUpdate)&&"rhel-edge-installer"===s?o().createElement(Q,null):o().createElement(H.p,{className:"pf-u-ml-lg pf-u-pb-sm"},o().createElement(G.u,{variant:"indeterminate"},B[s])),"rhel-edge-installer"===s&&o().createElement(K.x,{component:K.q.small},o().createElement(K.x,{className:"pf-u-ml-lg",component:K.q.a,isVisitedLink:!0},"Learn more about image types.",o().createElement(M.ZP,{className:"pf-u-ml-sm"})))))})))};$.propTypes={input:v().array,options:v().arrayOf(v().shape({value:v().string,label:v().string}))};const Y=$;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const J=function(e){var t=(0,S.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,a=t.meta;return o().createElement(q.c,null,o().createElement(q.c,{label:"SSH key",helperTextInvalid:a.error,validated:a.error&&a.touched?"error":"default",isRequired:!0},o().createElement(V.Kx,l()({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n))),o().createElement(s.Fragment,null,o().createElement(K.x,{component:K.q.small},o().createElement(K.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/using-secure-communications-between-two-systems-with-openssh_configuring-basic-system-settings#generating-ssh-key-pairs_using-secure-communications-between-two-systems-with-openssh",isVisitedLink:!0,component:K.q.a},"Learn more about SSH keys",o().createElement(M.ZP,{className:"pf-u-ml-sm"})))))};o().createContext({});var ee=["root","bin","daemon","sys","adm","tty","disk","lp","mem","kmem","wheel","cdrom","sync","shutdown","halt","mail","news","uucp","operator","games","gopher","ftp","man","oprofile","pkiuser","dialout","floppy","games","slocate","utmp","squid","pvm","named","postgres","mysql","nscd","rpcuser","console","rpc","amandabackup","tape","netdump","utempter","vdsm","kvm","rpm","ntp","video","dip","mailman","gdm","xfs","pppusers","popusers","slipusers","mailnull","apache","wnn","smmsp","puppet","tomcat","lock","ldap","frontpage","nut","beagleindex","tss","piranha","prelude-manager","snortd","audio","condor","nslcd","wine","pegasus","webalizer","haldaemon","vcsa","avahi","realtime","tcpdump","privoxy","sshd","radvd","cyrus","saslauth","arpwatch","fax","nocpulse","desktop","dbus","jonas","clamav","screen","quaggavt","sabayon","polkituser","wbpriv","postfix","postdrop","majordomo","quagga","exim","distcache","radiusd","hsqldb","dovecot","ident","users","qemu","ovirt","rhevm","jetty","saned","vhostmd","usbmuxd","bacula","cimsrvr","mock","ricci","luci","activemq","cassandra","stap-server","stapusr","stapsys","stapdev","swift","glance","nova","keystone","quantum","cinder","ceilometer","ceph","avahi-autoipd","pulse","rtkit","abrt","retrace","ovirtagent","ats","dhcpd","myproxy","sanlock","aeolus","wallaby","katello","elasticsearch","mongodb","wildfly","jbosson-agent","jbosson","heat","haproxy","hacluster","haclient","systemd-journal","systemd-network","systemd-resolve","gnats","listar","nobody",""],te=function(){return function(e){return ee.includes(e)?"This is a username reserved for the system":void 0}},ne=n(64124);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,r=e.customComponentMapper,i=e.initialValues,s=e.defaultArch;return t?o().createElement(c.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return o().createElement(u.ZP,l()({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},initialValues:i,componentMapper:re(re({},d.YS),{},{"registration-creds":{component:z},"image-output-checkbox":{component:Y},"ssh-input-field":{component:J},review:h.Z,"package-selector":{component:R,defaultArch:s}},r),validatorMapper:re(re({},ne.Z),{},{registrationCredsValidator:F,reservedUsernameValidator:te}),onCancel:a}):o().createElement(p.$,null)};ie.propTypes={schema:v().object,initialValues:v().object,onSubmit:v().func.isRequired,onClose:v().func.isRequired,customComponentMapper:v().shape(r()({},v().string,v().oneOfType([v().node,v().shape({component:v().node})]))),defaultArch:v().string};const le=ie},20873:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(1427),r=n.n(a),i=n(68774),l=n(68340),s=n(48880),o=n(68920),c=n(80962),u=n(59245),d=n(96667),p=n(52643),m=n(2372),v=n(35540),h=n(50693),g=n(16475),f=n(78140),b=n(45697),y=n.n(b),E=function(e){var t=e.title,n=e.data,a=e.testid;return r().createElement(h.r,{className:"pf-u-pb-xl","data-testid":a,hasGutter:!0},r().createElement(g.P,{span:12,hasGutter:!0},r().createElement(l.x,{component:l.q.h2},t)),n.map((function(e){var t=e.name,n=e.value;return r().createElement(r().Fragment,null,r().createElement(g.P,{span:3,hasGutter:!0},r().createElement(f.T,{component:f.v.dt},t)),r().createElement(g.P,{span:9,hasGutter:!0},r().createElement(f.T,{component:f.v.dd},n)))})))};E.propTypes={title:y().string,data:y().arrayOf(y().shape({name:y().string,value:y().string})),testid:y().string};const w=E,O=function(){var e=(0,s.default)().getState,t=e().initialValues.isUpdate,n=(0,a.useContext)(u.g).getRegistry,h=(0,c.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),c.shallowEqual),g=h.isLoading,f=h.hasError;if((0,a.useEffect)((function(){var e=n().register({createImageReducer:d.Ch});return function(){return e()}}),[]),g)return r().createElement(p.b,null,r().createElement(m.$,null));var b,y,E=[{name:"Name",value:e().values.name},{name:"Version",value:e().initialValues.version+1},{name:"Description",value:e().values.description}],O=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],k=e().initialValues["selected-packages"],T=e().values["selected-packages"],S=function(e,t){return e.reduce((function(e,n){var a=n.name;return e+(t.some((function(e){return e.name===a}))?0:1)}),0)};return r().createElement(a.Fragment,null,f&&r().createElement(v.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),r().createElement(i.D,null,r().createElement(l.x,null,"Review the information and click"," ",r().createElement(l.x,{component:"b"},"Create image")," to start the build process."),r().createElement(w,{title:"Details",data:E,testid:"review-image-details"}),r().createElement(w,{title:"Output",data:(y=[{name:"Release",value:o.Ei[e().values.release]},{name:"Output Type",value:o.bd["rhel-edge-commit"]}],e().values.imageType.includes("rhel-edge-installer")&&y.push({name:"",value:o.bd["rhel-edge-installer"]}),y),testid:"review-image-output"}),e().values.imageType.includes("rhel-edge-installer")?r().createElement(w,{title:"Registration",data:O,testid:"review-image-registration"}):null,r().createElement(w,{title:"Packages",data:(b=[{name:"Added",value:S(T,k)}],t?[].concat(b,[{name:"Removed",value:S(k,T)},{name:"Updated",value:0}]):b),testid:"review-image-packages"})))}}}]);
//# sourceMappingURL=../sourcemaps/735.15c039947578de554686.js.map
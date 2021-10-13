"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[735],{1005:(e,t,n)=>{n.d(t,{Ud:()=>w,oG:()=>T,B9:()=>y,l9:()=>P,j7:()=>m,bR:()=>Z});var a=n(29439),r=n(93264),i=n.n(r),l=n(47173),s=n(6468),o=n(70363),c=n(45697),u=n.n(c),d=function(e){var t=e.buttonLabels,n=t.cancel,c=t.submit,u=t.back,d=(0,r.useState)(!1),m=(0,a.Z)(d,2),p=m[0],v=m[1],g=(0,r.useContext)(o.default),h=g.handlePrev,f=g.formOptions;return i().createElement(s.lP,null,(function(){return i().createElement(i().Fragment,null,i().createElement(l.zx,{variant:"primary",type:"button",isDisabled:!f.valid||f.getState().validating||p,onClick:function(){f.onSubmit({values:f.getState().values,setIsSaving:v})}},c),i().createElement(l.zx,{type:"button",variant:"secondary",onClick:h,isDisabled:p},u),i().createElement("div",{className:"pf-c-wizard__footer-cancel"},i().createElement(l.zx,{type:"button",variant:"link",onClick:f.onCancel,isDisabled:p},n)))}))};d.propTypes={buttonLabels:u().shape({cancel:u().node,submit:u().node,back:u().node}),isSaving:u().bool};const m={name:"review",title:"Review",buttons:d,fields:[{name:"review",component:"review"}]};var p=n(96354),v=n(68340),g=n(68774),h=n(48880),f=n(68920),b=function(){var e,t,n=null===(e=(0,(0,h.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,a=void 0!==n?f.Ei[n]:"";return i().createElement(g.D,null,i().createElement(v.x,null,"Add packages to your ",i().createElement(v.x,{component:"b"},a)," image."))};const y={title:"Additional packages",name:"packages",nextStep:"review",fields:[{component:p.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:i().createElement(b,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]};var E=n(64124);const w={title:"Options",name:"imageOutput",nextStep:function(e){var t,n=e.values;return null!=n&&null!==(t=n.imageType)&&void 0!==t&&t.includes("rhel-edge-installer")||!n.imageType?"registration":"packages"},fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:i().createElement(v.x,null,"Enter some basic information about your image.")},{component:p.Z.SELECT,name:"release",label:"Release",options:Object.entries(f.Ei).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:f.az,validate:[{type:E.Z.REQUIRED}],isRequired:!0,isDisabled:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(f.bd).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer","rhel-edge-commit"],clearedValue:[],validate:[{type:E.Z.REQUIRED}]}]};var O=n(66702),k="Can only contain letters, numbers, hyphens(-), and underscores(_).";const T={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:i().createElement(v.x,null,"Enter a name and description to easily identify your image later.")},{component:p.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",helperText:k,validate:[function(e){return new Promise((function(t,n){void 0!==e&&(0,O.H1)(e).then((function(e){return e?n({message:"Name already exists"}):t({message:"validation succesfull"})})).catch((function(){return n({message:"Cannot validate name in server, please try again later"})}))})).catch((function(e){throw e.message}))},{type:E.Z.REQUIRED},{type:E.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/,message:k},{type:E.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:p.Z.TEXTAREA,name:"description",label:"Description",placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:E.Z.MAX_LENGTH,threshold:250}]}]},Z={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:i().createElement(v.x,null,"Enter a description to easily identify your image later.")},{component:p.Z.TEXT_FIELD,name:"description",label:"Description",placeholder:"Add description",validate:[{type:E.Z.MAX_LENGTH,threshold:250}]}]};var S=n(36621),x=n(65673);const P={title:"Device registration",name:"registration",nextStep:"packages",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:i().createElement(v.x,null,"Use this to log into your device.")},{component:p.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",helperText:i().createElement(S.p,null,i().createElement(x.u,{className:"pf-u-mt-xs",variant:"indeterminate"},"Can only contain letters, numbers, hyphen ( - ), and underscores( _ ).")),name:"username",validate:[{type:E.Z.REQUIRED},{type:E.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/,message:"Can only contain letters, numbers, hyphen ( - ), and underscores( _ )."},{type:E.Z.MAX_LENGTH,threshold:50},{type:"reservedUsernameValidator"}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:E.Z.REQUIRED},{type:E.Z.PATTERN,pattern:/^(ssh-(rsa|dss|ed25519)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]}},67098:(e,t,n)=>{n.d(t,{Z:()=>te});var a=n(4942),r=n(87462),i=n(93264),l=n.n(i),s=n(79442),o=n(67850),c=n(35558),u=n(2372),d=n(45697),m=n.n(d),p=n(20873),v=n(15861),g=n(29439),h=n(45987),f=n(87757),b=n.n(f),y=n(48880),E=n(41693),w=n(15110),O=n(47173),k=n(68774),T=n(66702),Z=["defaultArch"],S=function(e){return e.map((function(e,t){return l().createElement(k.D,{key:"".concat(e.name,"-").concat(t)},l().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),l().createElement("small",null,e.summary))}))},x=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},P=function(e){var t=e.defaultArch,n=(0,h.Z)(e,Z),a=(0,y.default)(),r=a.change,s=a.getState,o=(0,E.Z)(n).input,c=(0,i.useRef)(),u=(0,i.useState)([]),d=(0,g.Z)(u,2),m=d[0],p=d[1],f=(0,i.useState)([]),k=(0,g.Z)(f,2),P=k[0],_=k[1],j=(0,i.useState)(""),C=(0,g.Z)(j,2),A=C[0],D=C[1],R=(0,i.useState)(!1),N=(0,g.Z)(R,2),q=N[0],I=N[1];(0,i.useEffect)((function(){var e,t;_(S((null===(e=s())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[o.name])||[]));var n=document.querySelector('[aria-label="Available search input"]');return null==n||n.addEventListener("keydown",X),function(){return n.removeEventListener("keydown",X)}}),[]),(0,i.useEffect)((function(){q&&(V(),I(!1))}),[q]);var L=function(e,t){var n=t.map(x);p(e),_(t),r(o.name,n)},V=function(){var e=(0,v.Z)(b().mark((function e(){var n,a,r,i,l,o,u;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.EV)((null===(n=s())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release)||"rhel-8",(null===(r=s())||void 0===r||null===(i=r.values)||void 0===i?void 0:i.architecture)||t,c.current);case 2:l=e.sent,o=l.data,u=o.filter((function(e){return!P.some((function(t){return t.props.children[0].props.children===e.name}))})),p(S(u||[]));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){"Enter"===e.key&&(e.stopPropagation(),I(!0))};return l().createElement(w.I,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[l().createElement(O.zx,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:V},"Search")],availableOptions:m,availableOptionsTitle:"Available packages",chosenOptions:P.filter((function(e){var t,n;return null===(t=x(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(A)})),chosenOptionsTitle:"Chosen packages",addSelected:L,removeSelected:L,addAll:L,removeAll:function(e){return L(e,P.filter((function(e){var t,n;return!(null!==(t=x(e))&&void 0!==t&&null!==(n=t.name)&&void 0!==n&&n.includes(A))})))},onAvailableOptionsSearchInputChanged:function(e){c.current=e},onChosenOptionsSearchInputChanged:function(e){return D(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};P.propTypes={defaultArch:m().string};const _=P;var j=n(93433),C=n(59775),A=n(93149),D=n(92607),R=n(23393);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=q(q({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=q(q({},n),{},{sshKey:"Required"})),n}};const L=function(e){var t=(0,E.Z)(e),n=t.input,a=t.meta,s=(0,i.useCallback)((function(e,t){n.onChange(e?[].concat((0,j.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),o=(0,E.Z)({name:"password"}).input,c=(0,E.Z)({name:"sshKey"}).input;return l().createElement(C.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},l().createElement(A.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:s}),n.value.includes("password")?l().createElement(C.c,{helperTextInvalid:a.dirty&&void 0!==a.error.password?a.error.password:void 0},l().createElement(D.oi,(0,r.Z)({type:"password"},o))):null,l().createElement(A.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:s}),n.value.includes("sshKey")?l().createElement(C.c,{helperTextInvalid:a.dirty&&void 0!==a.error.sshKey?a.error.sshKey:void 0},l().createElement(R.Kx,c)):null)};var V=n(68340),X=n(36621),F=n(65673),U=n(15265),z=function(){return l().createElement(X.p,{className:"pf-u-ml-lg",hasIcon:!0},l().createElement(F.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"Creating an installable version of your image increases the build time and is not needed for updating existing devices. ",l().createElement("br",null),"You can create an installable version of this image later if you continue with this option"))},K={"rhel-edge-commit":"An OSTree commit is always created when building an image.","rhel-edge-installer":"An installable version of the image is typically created with a brand new image."},H=function(e){var t=(0,y.default)().getState,n=(0,E.Z)(e).input,a=(0,i.useCallback)((function(e,t){n.onChange(e?[].concat((0,j.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]);return l().createElement(C.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var s,o,c=e.value,u=e.label;return l().createElement(l().Fragment,null,l().createElement(A.X,{key:r,label:u,id:c,isChecked:n.value.includes(c),onChange:a,isDisabled:"rhel-edge-commit"===c}),l().createElement(k.D,null,null!==(s=t())&&void 0!==s&&null!==(o=s.initialValues)&&void 0!==o&&o.isUpdate&&"rhel-edge-installer"===c?l().createElement(z,null):l().createElement(X.p,{className:"pf-u-ml-lg pf-u-pb-sm"},l().createElement(F.u,{variant:"indeterminate"},K[c]))),"rhel-edge-installer"===c&&l().createElement(i.Fragment,null,l().createElement(V.x,{component:V.q.small},l().createElement(V.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/composing_installing_and_managing_rhel_for_edge_images/index#edge-how-to-compose-and-deploy-a-rhel-for-edge-image_introducing-rhel-for-edge-images",component:V.q.a,isVisitedLink:!0},"Learn more about image types.",l().createElement(U.ZP,{className:"pf-u-ml-sm"})))))})))};H.propTypes={input:m().array,options:m().arrayOf(m().shape({value:m().string,label:m().string}))};const G=H;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const Q=function(e){var t=(0,E.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,s=t.meta;return l().createElement(C.c,null,l().createElement(C.c,{label:"SSH key",helperTextInvalid:s.error,validated:s.error&&s.touched?"error":"default",isRequired:!0},l().createElement(R.Kx,(0,r.Z)({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n))),l().createElement(i.Fragment,null,l().createElement(V.x,{component:V.q.small},l().createElement(V.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/using-secure-communications-between-two-systems-with-openssh_configuring-basic-system-settings#generating-ssh-key-pairs_using-secure-communications-between-two-systems-with-openssh",isVisitedLink:!0,component:V.q.a},"Learn more about SSH keys",l().createElement(U.ZP,{className:"pf-u-ml-sm"})))))};var B=["root","bin","daemon","sys","adm","tty","disk","lp","mem","kmem","wheel","cdrom","sync","shutdown","halt","mail","news","uucp","operator","games","gopher","ftp","man","oprofile","pkiuser","dialout","floppy","games","slocate","utmp","squid","pvm","named","postgres","mysql","nscd","rpcuser","console","rpc","amandabackup","tape","netdump","utempter","vdsm","kvm","rpm","ntp","video","dip","mailman","gdm","xfs","pppusers","popusers","slipusers","mailnull","apache","wnn","smmsp","puppet","tomcat","lock","ldap","frontpage","nut","beagleindex","tss","piranha","prelude-manager","snortd","audio","condor","nslcd","wine","pegasus","webalizer","haldaemon","vcsa","avahi","realtime","tcpdump","privoxy","sshd","radvd","cyrus","saslauth","arpwatch","fax","nocpulse","desktop","dbus","jonas","clamav","screen","quaggavt","sabayon","polkituser","wbpriv","postfix","postdrop","majordomo","quagga","exim","distcache","radiusd","hsqldb","dovecot","ident","users","qemu","ovirt","rhevm","jetty","saned","vhostmd","usbmuxd","bacula","cimsrvr","mock","ricci","luci","activemq","cassandra","stap-server","stapusr","stapsys","stapdev","swift","glance","nova","keystone","quantum","cinder","ceilometer","ceph","avahi-autoipd","pulse","rtkit","abrt","retrace","ovirtagent","ats","dhcpd","myproxy","sanlock","aeolus","wallaby","katello","elasticsearch","mongodb","wildfly","jbosson-agent","jbosson","heat","haproxy","hacluster","haclient","systemd-journal","systemd-network","systemd-resolve","gnats","listar","nobody",""],$=function(){return function(e){return B.includes(e)?"This is a username reserved for the system":void 0}},Y=n(64124);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,i=e.customComponentMapper,d=e.initialValues,m=e.defaultArch;return t?l().createElement(s.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return l().createElement(o.ZP,(0,r.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},initialValues:d,componentMapper:J(J({},c.YS),{},{"registration-creds":{component:L},"image-output-checkbox":{component:G},"ssh-input-field":{component:Q},review:p.Z,"package-selector":{component:_,defaultArch:m}},i),validatorMapper:J(J({},Y.Z),{},{registrationCredsValidator:I,reservedUsernameValidator:$}),onCancel:a}):l().createElement(u.$,null)};ee.propTypes={schema:m().object,initialValues:m().object,onSubmit:m().func.isRequired,onClose:m().func.isRequired,customComponentMapper:m().shape((0,a.Z)({},m().string,m().oneOfType([m().node,m().shape({component:m().node})]))),defaultArch:m().string};const te=ee},20873:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(93264),r=n.n(a),i=n(68774),l=n(68340),s=n(48880),o=n(68920),c=n(82041),u=n(59245),d=n(96667),m=n(52643),p=n(2372),v=n(43547),g=n(50693),h=n(16475),f=n(78140),b=n(45697),y=n.n(b),E=function(e){var t=e.title,n=e.data,a=e.testid;return r().createElement(g.r,{className:"pf-u-pb-xl","data-testid":a,hasGutter:!0},r().createElement(h.P,{span:12,hasGutter:!0},r().createElement(l.x,{component:l.q.h2},t)),n.map((function(e){var t=e.name,n=e.value;return r().createElement(r().Fragment,null,r().createElement(h.P,{span:3,hasGutter:!0},r().createElement(f.T,{component:f.v.dt},t)),r().createElement(h.P,{span:9,hasGutter:!0},r().createElement(f.T,{component:f.v.dd},n)))})))};E.propTypes={title:y().string,data:y().arrayOf(y().shape({name:y().string,value:y().string})),testid:y().string};const w=E,O=function(){var e=(0,s.default)().getState,t=e().initialValues.isUpdate,n=(0,a.useContext)(u.g).getRegistry,g=(0,c.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),c.shallowEqual),h=g.isLoading,f=g.hasError;if((0,a.useEffect)((function(){var e=n().register({createImageReducer:d.Ch});return function(){return e()}}),[]),h)return r().createElement(m.b,null,r().createElement(p.$,null));var b,y,E=[{name:"Name",value:e().values.name},{name:"Version",value:e().initialValues.version+1},{name:"Description",value:e().values.description}],O=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],k=e().initialValues["selected-packages"],T=e().values["selected-packages"],Z=function(e,t){return e.reduce((function(e,n){var a=n.name;return e+(t.some((function(e){return e.name===a}))?0:1)}),0)};return r().createElement(a.Fragment,null,f&&r().createElement(v.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),r().createElement(i.D,null,r().createElement(l.x,null,"Review the information and click"," ",r().createElement(l.x,{component:"b"},"Create image")," to start the build process."),r().createElement(w,{title:"Details",data:E,testid:"review-image-details"}),r().createElement(w,{title:"Output",data:(y=[{name:"Release",value:o.Ei[e().values.release]},{name:"Output Type",value:o.bd["rhel-edge-commit"]}],e().values.imageType.includes("rhel-edge-installer")&&y.push({name:"",value:o.bd["rhel-edge-installer"]}),y),testid:"review-image-output"}),e().values.imageType.includes("rhel-edge-installer")?r().createElement(w,{title:"Registration",data:O,testid:"review-image-registration"}):null,r().createElement(w,{title:"Packages",data:(b=[{name:"Added",value:Z(T,k)}],t?[].concat(b,[{name:"Removed",value:Z(k,T)},{name:"Updated",value:0}]):b),testid:"review-image-packages"})))}}}]);
//# sourceMappingURL=../sourcemaps/735.0125d57f6da257f7209f70c30540fb03.js.map
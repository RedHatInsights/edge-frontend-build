"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[735],{1005:(e,t,n)=>{n.d(t,{Ud:()=>k,oG:()=>T,B9:()=>y,l9:()=>C,j7:()=>d,bR:()=>P});var a=n(29439),r=n(93264),l=n.n(r),i=n(47173),s=n(6468),o=n(70363),c=n(45697),u=n.n(c),m=function(e){var t=e.buttonLabels,n=t.cancel,c=t.submit,u=t.back,m=(0,r.useState)(!1),d=(0,a.Z)(m,2),p=d[0],f=d[1],g=(0,r.useContext)(o.default),v=g.handlePrev,h=g.formOptions;return l().createElement(s.lP,null,(function(){return l().createElement(l().Fragment,null,l().createElement(i.zx,{variant:"primary",type:"button",isDisabled:!h.valid||h.getState().validating||p,onClick:function(){h.onSubmit({values:h.getState().values,setIsSaving:f})}},c),l().createElement(i.zx,{type:"button",variant:"secondary",onClick:v,isDisabled:p},u),l().createElement("div",{className:"pf-c-wizard__footer-cancel"},l().createElement(i.zx,{type:"button",variant:"link",onClick:h.onCancel,isDisabled:p},n)))}))};m.propTypes={buttonLabels:u().shape({cancel:u().node,submit:u().node,back:u().node}),isSaving:u().bool};const d={name:"review",title:"Review",buttons:m,fields:[{name:"review",component:"review"}]};var p=n(96354),f=n(68340),g=n(68774),v=n(48880),h=n(68920),b=function(){var e,t,n=null===(e=(0,(0,v.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release,a=void 0!==n?h.Ei[n]:"";return l().createElement(g.D,null,l().createElement(f.x,null,"Add packages to your ",l().createElement(f.x,{component:"b"},a)," image."))};const y={title:"Additional packages",name:"packages",nextStep:"review",fields:[{component:p.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:l().createElement(b,null)},{component:"package-selector",name:"selected-packages",label:"Available options",initialValue:[],clearedValue:[]}]};var E=n(64124);const k={title:"Options",name:"imageOutput",nextStep:function(e){var t,n=e.values;return null!=n&&null!==(t=n.imageType)&&void 0!==t&&t.includes("rhel-edge-installer")||!n.imageType?"registration":"packages"},fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Enter some basic information about your image.")},{component:p.Z.SELECT,name:"release",label:"Release",options:Object.entries(h.Ei).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:h.az,validate:[{type:E.Z.REQUIRED}],isRequired:!0},{component:"image-output-checkbox",name:"imageType",options:Object.entries(h.bd).map((function(e){var t=(0,a.Z)(e,2);return{value:t[0],label:t[1]}})),initialValue:["rhel-edge-installer","rhel-edge-commit"],clearedValue:[],validate:[{type:E.Z.REQUIRED}]}]};var w=n(28191),O=n(92298),x=n(66702),Z="Can only contain letters, numbers, spaces, hyphens(-), and underscores(_).",S=function(){var e,t=null===(e=(0,(0,v.default)().getState)().values)||void 0===e?void 0:e.description;return l().createElement("h1",null,(null==t?void 0:t.length)||0,"/250")};const T={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Enter a name and description to easily identify your image later.")},{component:p.Z.TEXT_FIELD,name:"name",label:"Image name",placeholder:"Image name",helperText:Z,validate:[function(e){return(0,x.H1)(e).then((function(e){if(e.ImageExists)throw new Error("Name already exists")})).catch((function(e){throw e.message}))},{type:E.Z.REQUIRED},{type:E.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-\s]*$/,message:Z},{type:E.Z.MAX_LENGTH,threshold:50}],isRequired:!0},{component:p.Z.TEXTAREA,style:{paddingRight:"32px"},name:"description",label:l().createElement(w.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(O.B,null,l().createElement(f.x,{component:"b"},"Description")),l().createElement(O.B,null,l().createElement(S,null))),placeholder:"Add description",resizeOrientation:"vertical",validate:[{type:E.Z.MAX_LENGTH,threshold:250}]}]},P={title:"Details",name:"imageSetDetails",nextStep:"imageOutput",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Enter a description to easily identify your image later.")},{component:p.Z.TEXT_FIELD,name:"description",label:"Description",placeholder:"Add description",validate:[{type:E.Z.MAX_LENGTH,threshold:250}]}]};var j=n(36621),_=n(65673);const C={title:"Device registration",name:"registration",nextStep:"packages",fields:[{component:p.Z.PLAIN_TEXT,name:"description",label:l().createElement(f.x,null,"Use this to log into your device.")},{component:p.Z.TEXT_FIELD,label:"Username",placeholder:"Enter username",helperText:l().createElement(j.p,null,l().createElement(_.u,{className:"pf-u-mt-xs",variant:"indeterminate"},"Can only contain letters, numbers, spaces, hyphen ( - ), and underscores( _ ).")),name:"username",validate:[{type:E.Z.REQUIRED},{type:E.Z.PATTERN,pattern:/^[A-Za-z0-9]+[A-Za-z0-9_-]*$/,message:"Can only contain letters, numbers, spaces, hyphen ( - ), and underscores( _ )."},{type:E.Z.MAX_LENGTH,threshold:50},{type:"reservedUsernameValidator"}],isRequired:!0},{component:"ssh-input-field",name:"credentials",validate:[{type:E.Z.REQUIRED},{type:E.Z.PATTERN,pattern:/^(ssh-(rsa|dss|ed25519)|ecdsa-sha2-nistp(256|384|521)) \S+/}],isRequired:!0}]}},67098:(e,t,n)=>{n.d(t,{Z:()=>ve});var a=n(4942),r=n(87462),l=n(93264),i=n.n(l),s=n(79442),o=n(67850),c=n(89235),u=n(2372),m=n(45697),d=n.n(m),p=n(20873),f=n(93433),g=n(15861),v=n(29439),h=n(45987),b=n(87757),y=n.n(b),E=n(48880),k=n(41693),w=n(66702),O=n(68774),x=n(68340),Z=n(47173),S=n(92656),T=n(18793),P=n(34665),j=n(17224),_=n(93542),C=n(66317),D=n(36621),R=n(65673),A=n(65802),N=n(46836),V=n(92607),q=n(80810),I=n(94949),L=n(71973),F=n(94086),X=n(93174),z=n(58061),U=["defaultArch"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var K=function(e){var t=e.text;return i().createElement(x.x,{className:"pf-u-text-align-center pf-u-pr-xl pf-u-pl-xl pf-u-pt-xl"},t)};K.propTypes={text:d().string};var G=function(e){var t=e.heading,n=e.body;return i().createElement(O.D,{className:"pf-u-text-align-center pf-u-pr-xl pf-u-pl-xl pf-u-pt-xl"},i().createElement(x.x,{component:"h3"},t),i().createElement(x.x,{component:"small"},n))};G.propTypes={heading:d().string,body:d().string};var M=function(e){return e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selected:!1,isVisible:!0},e)}))},B=function(e){var t=e.defaultArch,n=(0,h.Z)(e,U),a=(0,E.default)(),r=a.change,s=a.getState,o=(0,k.Z)(n).input,c=i().useState([]),u=(0,v.Z)(c,2),m=u[0],d=u[1],p=i().useState([]),b=(0,v.Z)(p,2),x=b[0],H=b[1],B=i().useState(""),Q=(0,v.Z)(B,2),$=Q[0],Y=Q[1],J=(0,l.useState)(!1),W=(0,v.Z)(J,2),ee=W[0],te=W[1],ne=(0,l.useState)(!1),ae=(0,v.Z)(ne,2),re=ae[0],le=ae[1],ie=(0,l.useState)(null),se=(0,v.Z)(ie,2),oe=se[0],ce=se[1],ue=(0,l.useState)(!1),me=(0,v.Z)(ue,2),de=me[0],pe=me[1];(0,l.useEffect)((function(){var e,t,n=(null===(e=s())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[o.name])||[];H((0,z.n)(M(n)));var a=document.querySelector('[aria-label="available search input"]');return null==a||a.addEventListener("keydown",ge),function(){return a.removeEventListener("keydown",ge)}}),[]),(0,l.useEffect)((function(){ee&&(fe(),te(!1))}),[ee]),(0,l.useEffect)((function(){ve()}),[oe]);var fe=function(){var e=(0,g.Z)(y().mark((function e(){var n,a,r,l,i,o,c,u;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==$){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,w.EV)((null===(n=s())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release)||"rhel-84",(null===(r=s())||void 0===r||null===(l=r.values)||void 0===l?void 0:l.architecture)||t,$);case 4:if(i=e.sent,o=i.data,c=i.meta,o){e.next=12;break}return pe(!0),le(!1),d([]),e.abrupt("return");case 12:c.count>100?le(!0):le(!1),u=o.filter((function(e){return!x.find((function(t){return t.name===e.name}))})),d((0,z.n)(M(u))),pe(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(e){"Enter"===e.key&&(e.stopPropagation(),te(!0))},ve=function(){if(oe){var e=document.querySelector(".pf-m-".concat(oe.pane," .pf-c-dual-list-selector__menu"));oe.pkgs.forEach((function(e){return document.querySelector("#package-".concat(e.name)).closest(".pf-c-dual-list-selector__list-item-row").classList.add("pf-u-background-color-disabled-color-300")})),setTimeout((function(){oe.pkgs.forEach((function(e){return document.querySelector("#package-".concat(e.name)).closest(".pf-c-dual-list-selector__list-item-row").classList.remove("pf-u-background-color-disabled-color-300")}))}),400),e.scrollTop=oe.scrollHeight,ce(null)}},he=function(e){for(var t=e?m:x,n=e?x:m,a=[],l=0;l<t.length;l++){var i=t[l];i.selected&&i.isVisible&&(a.push(i),t.splice(l,1),i.selected=!1,l--)}var s=61*(n=(0,z.n)([].concat((0,f.Z)(n),a))).findIndex((function(e){return e.name===a[0].name}));e?(d((0,z.n)((0,f.Z)(t))),H(n),r(o.name,n)):(H((0,z.n)((0,f.Z)(t))),d(n),r(o.name,(0,f.Z)(t))),ce({pkgs:a,pane:e?"chosen":"available",scrollHeight:s})},be=function(e){e?(H((0,z.n)([].concat((0,f.Z)(m.filter((function(e){return e.isVisible}))),(0,f.Z)(x)))),d((0,z.n)((0,f.Z)(m.filter((function(e){return!e.isVisible}))))),r(o.name,[].concat((0,f.Z)(m),(0,f.Z)(x)))):(d((0,z.n)([].concat((0,f.Z)(x.filter((function(e){return e.isVisible}))),(0,f.Z)(m)))),H((0,z.n)((0,f.Z)(x.filter((function(e){return!e.isVisible}))))),r(o.name,[]))},ye=function(e,t,n){if(n){var a=(0,f.Z)(x);a[t].selected=!x[t].selected,H((0,z.n)(a))}else{var r=(0,f.Z)(m);r[t].selected=!m[t].selected,d((0,z.n)(r))}},Ee=function(e){return i().createElement(i().Fragment,null,i().createElement(A.B,null,i().createElement(V.oi,{id:"".concat(e?"available":"chosen","-textinput"),type:"search",onChange:function(t){Y(t),e||(0,f.Z)(x).forEach((function(e){e.isVisible=""===t||e.name.toLowerCase().includes(t.toLowerCase())}))},placeholder:"Search for packages",validated:re&&e?"warning":"","aria-label":e?"available search input":"chosen search input","data-testid":e?"available-search-input":"chosen-search-input"}),e?i().createElement(Z.zx,{onClick:fe,isDisabled:!e,variant:"control","aria-label":"search button for search input","data-testid":"package-search"},i().createElement(q.ZP,null)):i().createElement(N.O,null,i().createElement(q.ZP,{className:"pf-u-ml-xs pf-u-mr-xs"}))),re&&e&&i().createElement(D.p,null,i().createElement(R.u,{variant:"warning"},"First 100 results displayed. Please, refine your search")))},ke=function(e){var t=e.filter((function(e){return e.isVisible})).length,n=e.filter((function(e){return e.selected&&e.isVisible})).length;return n>0?"".concat(n," of ").concat(t," items selected"):"".concat(t," ").concat(t>1?"items":"item")};return i().createElement(S.I,null,i().createElement(T.b,{title:"Available packages",status:ke(m),searchInput:Ee(!0)},i().createElement(P.l,{style:{height:"290px"},"data-testid":"available-packages-list"},m.length>0?m.map((function(e,t){return e.isVisible?i().createElement(j.z,{key:t,isSelected:e.selected,id:"composable-option-".concat(t),onOptionSelect:function(e){return ye(0,t,!1)}},i().createElement(O.D,null,i().createElement("span",{id:"package-".concat(e.name),className:"pf-c-dual-list-selector__item-text"},e.name),i().createElement("small",null,e.summary))):null})):de?i().createElement(G,{heading:"No Results Found",body:"Adjust your search and try again"}):i().createElement(K,{text:"Search above to add additional packages to your image."}))),i().createElement(_.x,{"aria-label":"Selector controls"},i().createElement(C.u,{isDisabled:!m.some((function(e){return e.selected})),onClick:function(){return he(!0)},"aria-label":"Add selected",tooltipContent:"Add selected"},i().createElement(X.ZP,null)),i().createElement(C.u,{isDisabled:0===m.length,onClick:function(){return be(!0)},"aria-label":"Add all",tooltipContent:"Add all"},i().createElement(F.ZP,null)),i().createElement(C.u,{isDisabled:0===x.length,onClick:function(){return be(!1)},"aria-label":"Remove all",tooltipContent:"Remove all"},i().createElement(I.ZP,null)),i().createElement(C.u,{onClick:function(){return he(!1)},isDisabled:!x.some((function(e){return e.selected})),"aria-label":"Remove selected",tooltipContent:"Remove selected"},i().createElement(L.ZP,null))),i().createElement(T.b,{title:"Chosen packages",status:ke(x),searchInput:Ee(!1),isChosen:!0},i().createElement(P.l,{style:{height:"290px"},"data-testid":"chosen-packages-list"},0===x.length?i().createElement(K,{text:"No packages added."}):x.filter((function(e){return e.isVisible})).length>0?x.map((function(e,t){return e.isVisible?i().createElement(j.z,{key:t,isSelected:e.selected,id:"composable-option-".concat(t),onOptionSelect:function(e){return ye(0,t,!0)}},i().createElement(O.D,null,i().createElement("span",{id:"package-".concat(e.name),className:"pf-c-dual-list-selector__item-text"},e.name),i().createElement("small",null,e.summary))):null})):i().createElement(G,{heading:"No Results Found",body:"Adjust your search and try again"}))))};B.propTypes={defaultArch:d().string};const Q=B;var $=n(59775),Y=n(93149),J=n(23393);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=function(){return function(e,t){if(0===e.length)return{checkbox:"select at least one validation method"};var n={};return!e.includes("password")||void 0!==t.password&&""!==t.password||(n=ee(ee({},n),{},{password:"Required"})),!e.includes("sshKey")||void 0!==t.sshKey&&""!==t.sshKey||(n=ee(ee({},n),{},{sshKey:"Required"})),n}};const ne=function(e){var t=(0,k.Z)(e),n=t.input,a=t.meta,s=(0,l.useCallback)((function(e,t){n.onChange(e?[].concat((0,f.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]),o=(0,k.Z)({name:"password"}).input,c=(0,k.Z)({name:"sshKey"}).input;return i().createElement($.c,{label:"Select at least one to validate credentials",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},i().createElement(Y.X,{label:"Password",id:"password",isChecked:n.value.includes("password"),onChange:s}),n.value.includes("password")?i().createElement($.c,{helperTextInvalid:a.dirty&&void 0!==a.error.password?a.error.password:void 0},i().createElement(V.oi,(0,r.Z)({type:"password"},o))):null,i().createElement(Y.X,{label:"SSH",id:"sshKey",isChecked:n.value.includes("sshKey"),onChange:s}),n.value.includes("sshKey")?i().createElement($.c,{helperTextInvalid:a.dirty&&void 0!==a.error.sshKey?a.error.sshKey:void 0},i().createElement(J.Kx,c)):null)};var ae=n(15265),re=function(){return i().createElement(D.p,{className:"pf-u-ml-lg",hasIcon:!0},i().createElement(R.u,{className:"pf-u-pb-md",variant:"warning",hasIcon:!0},"Creating an installable version of your image increases the build time and is not needed for updating existing devices. ",i().createElement("br",null),"You can create an installable version of this image later if you continue with this option"))},le={"rhel-edge-commit":"An OSTree commit is always created when building an image.","rhel-edge-installer":"An installable version of the image is typically created with a brand new image."},ie=function(e){var t=(0,E.default)().getState,n=(0,k.Z)(e).input,a=(0,l.useCallback)((function(e,t){n.onChange(e?[].concat((0,f.Z)(n.value),[t.currentTarget.id]):n.value.filter((function(e){return e!==t.currentTarget.id})))}),[n.onChange]);return i().createElement($.c,{label:"Output type",isHelperTextBeforeField:!0,hasNoPaddingTop:!0,isRequired:!0,isStack:!0},e.options.map((function(e,r){var s,o,c=e.value,u=e.label;return i().createElement(i().Fragment,null,i().createElement(Y.X,{key:r,label:u,id:c,isChecked:n.value.includes(c),onChange:a,isDisabled:"rhel-edge-commit"===c}),i().createElement(O.D,null,null!==(s=t())&&void 0!==s&&null!==(o=s.initialValues)&&void 0!==o&&o.isUpdate&&"rhel-edge-installer"===c?i().createElement(re,null):i().createElement(D.p,{className:"pf-u-ml-lg pf-u-pb-sm"},i().createElement(R.u,{variant:"indeterminate"},le[c]))),"rhel-edge-installer"===c&&i().createElement(l.Fragment,null,i().createElement(x.x,{component:x.q.small},i().createElement(x.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/composing_installing_and_managing_rhel_for_edge_images/index#edge-how-to-compose-and-deploy-a-rhel-for-edge-image_introducing-rhel-for-edge-images",component:x.q.a,isVisitedLink:!0},"Learn more about image types.",i().createElement(ae.ZP,{className:"pf-u-ml-sm"})))))})))};ie.propTypes={input:d().array,options:d().arrayOf(d().shape({value:d().string,label:d().string}))};const se=ie;function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const ce=function(e){var t=(0,k.Z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:"credentials"},e)),n=t.input,s=t.meta;return i().createElement($.c,null,i().createElement($.c,{label:"SSH key",helperTextInvalid:s.error,validated:s.error&&s.touched?"error":"default",isRequired:!0},i().createElement(J.Kx,(0,r.Z)({className:"pf-u-h-25vh",id:"credentials",placeholder:"Paste your public SSH key"},n))),i().createElement(l.Fragment,null,i().createElement(x.x,{component:x.q.small},i().createElement(x.x,{target:"_blank",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/using-secure-communications-between-two-systems-with-openssh_configuring-basic-system-settings#generating-ssh-key-pairs_using-secure-communications-between-two-systems-with-openssh",isVisitedLink:!0,component:x.q.a},"Learn more about SSH keys",i().createElement(ae.ZP,{className:"pf-u-ml-sm"})))))};var ue=["root","bin","daemon","sys","adm","tty","disk","lp","mem","kmem","wheel","cdrom","sync","shutdown","halt","mail","news","uucp","operator","games","gopher","ftp","man","oprofile","pkiuser","dialout","floppy","games","slocate","utmp","squid","pvm","named","postgres","mysql","nscd","rpcuser","console","rpc","amandabackup","tape","netdump","utempter","vdsm","kvm","rpm","ntp","video","dip","mailman","gdm","xfs","pppusers","popusers","slipusers","mailnull","apache","wnn","smmsp","puppet","tomcat","lock","ldap","frontpage","nut","beagleindex","tss","piranha","prelude-manager","snortd","audio","condor","nslcd","wine","pegasus","webalizer","haldaemon","vcsa","avahi","realtime","tcpdump","privoxy","sshd","radvd","cyrus","saslauth","arpwatch","fax","nocpulse","desktop","dbus","jonas","clamav","screen","quaggavt","sabayon","polkituser","wbpriv","postfix","postdrop","majordomo","quagga","exim","distcache","radiusd","hsqldb","dovecot","ident","users","qemu","ovirt","rhevm","jetty","saned","vhostmd","usbmuxd","bacula","cimsrvr","mock","ricci","luci","activemq","cassandra","stap-server","stapusr","stapsys","stapdev","swift","glance","nova","keystone","quantum","cinder","ceilometer","ceph","avahi-autoipd","pulse","rtkit","abrt","retrace","ovirtagent","ats","dhcpd","myproxy","sanlock","aeolus","wallaby","katello","elasticsearch","mongodb","wildfly","jbosson-agent","jbosson","heat","haproxy","hacluster","haclient","systemd-journal","systemd-network","systemd-resolve","gnats","listar","nobody",""],me=function(){return function(e){return ue.includes(e)?"This is a username reserved for the system":void 0}},de=n(64124);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,l=e.customComponentMapper,m=e.initialValues,d=e.defaultArch;return t?i().createElement(s.Z,{schema:t,className:"image-builder",subscription:{values:!0},FormTemplate:function(e){return i().createElement(o.ZP,(0,r.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},initialValues:m,componentMapper:fe(fe({},c.YS),{},{"registration-creds":{component:ne},"image-output-checkbox":{component:se},"ssh-input-field":{component:ce},review:p.Z,"package-selector":{component:Q,defaultArch:d}},l),validatorMapper:fe(fe({},de.Z),{},{registrationCredsValidator:te,reservedUsernameValidator:me}),onCancel:a}):i().createElement(u.$,null)};ge.propTypes={schema:d().object,initialValues:d().object,onSubmit:d().func.isRequired,onClose:d().func.isRequired,customComponentMapper:d().shape((0,a.Z)({},d().string,d().oneOfType([d().node,d().shape({component:d().node})]))),defaultArch:d().string};const ve=ge},20873:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(93264),r=n.n(a),l=n(68774),i=n(68340),s=n(48880),o=n(68920),c=n(82041),u=n(59245),m=n(96667),d=n(52643),p=n(2372),f=n(87116),g=n(50693),v=n(16475),h=n(78140),b=n(45697),y=n.n(b),E=function(e){var t=e.title,n=e.data,a=e.testid;return r().createElement(g.r,{className:"pf-u-pb-xl","data-testid":a,hasGutter:!0},r().createElement(v.P,{span:12,hasGutter:!0},r().createElement(i.x,{component:i.q.h2},t)),n.map((function(e){var t=e.name,n=e.value;return r().createElement(r().Fragment,null,r().createElement(v.P,{span:3,hasGutter:!0},r().createElement(h.T,{component:h.v.dt},t)),r().createElement(v.P,{span:9,hasGutter:!0},r().createElement(h.T,{component:h.v.dd},n)))})))};E.propTypes={title:y().string,data:y().arrayOf(y().shape({name:y().string,value:y().string})),testid:y().string};const k=E,w=function(){var e=(0,s.default)().getState,t=e().initialValues.isUpdate,n=(0,a.useContext)(u.g).getRegistry,g=(0,c.useSelector)((function(e){var t=e.createImageReducer;return{isLoading:void 0!==(null==t?void 0:t.isLoading)&&(null==t?void 0:t.isLoading),hasError:(null==t?void 0:t.hasError)||!1,error:(null==t?void 0:t.error)||null}}),c.shallowEqual),v=g.isLoading,h=g.hasError;if((0,a.useEffect)((function(){var e=n().register({createImageReducer:m.Ch});return function(){return e()}}),[]),v)return r().createElement(d.b,null,r().createElement(p.$,null));var b,y,E=[{name:"Name",value:e().values.name},{name:"Version",value:e().initialValues.version+1},{name:"Description",value:e().values.description}],w=[{name:"Username",value:e().values.username},{name:"ssh-key",value:e().values.credentials}],O=e().initialValues["selected-packages"],x=e().values["selected-packages"],Z=function(e,t){return e.reduce((function(e,n){var a=n.name;return e+(t.some((function(e){return e.name===a}))?0:1)}),0)};return r().createElement(a.Fragment,null,h&&r().createElement(f.b,{variant:"danger",title:"Failed sending the request: Edge API is not available"}),r().createElement(l.D,null,r().createElement(i.x,null,"Review the information and click"," ",r().createElement(i.x,{component:"b"},"Create image")," to start the build process."),r().createElement(k,{title:"Details",data:E,testid:"review-image-details"}),r().createElement(k,{title:"Output",data:(y=[{name:"Release",value:o.Ei[e().values.release]},{name:"Output Type",value:o.bd["rhel-edge-commit"]}],e().values.imageType.includes("rhel-edge-installer")&&y.push({name:"",value:o.bd["rhel-edge-installer"]}),y),testid:"review-image-output"}),e().values.imageType.includes("rhel-edge-installer")?r().createElement(k,{title:"Registration",data:w,testid:"review-image-registration"}):null,r().createElement(k,{title:"Packages",data:(b=[{name:"Added",value:Z(x,O)}],t?[].concat(b,[{name:"Removed",value:Z(O,x)},{name:"Updated",value:0}]):b),testid:"review-image-packages"})))}}}]);
//# sourceMappingURL=../sourcemaps/735.82bea95122462fe979b306ad01550750.js.map
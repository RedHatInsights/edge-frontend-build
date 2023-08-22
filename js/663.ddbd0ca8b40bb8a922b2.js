(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[663],{15656:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var o=n(92950),r=n.n(o),a=n(73448),i=n(45697),l=n.n(i),c=n(9192),s=n(68519),u=n(5513),d=n(62410),p=n(34766),m=n(75824),f=n(3035),v=n(48903),h=n(35681),b=n(18098),g=n(47173),y=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Update available",value:"updateAvailable"}]}],I=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,p.cellWidth)(30)]},{title:"Image",type:"image",sort:!1,columnTransforms:[(0,p.cellWidth)(20)]},{title:"Groups",type:"groups",sort:!1,columnTransforms:[(0,p.cellWidth)(15)]},{title:"Last seen",type:"last_seen",sort:!0,columnTransforms:[(0,p.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,p.cellWidth)(25)]}],E=function(e,t,n,o,a,i){return null==e?void 0:e.map((function(e){var l=e.DeviceName,s=e.DeviceGroups,u=e.DeviceID,p=e.DeviceUUID,f=e.UpdateAvailable,y=e.LastSeen,I=e.ImageName,E=e.ImageSetID,D=e.Status,w=e.DispatcherStatus,k=(0,h.u)(D,f,w);""===l&&(l="localhost"),null===s&&(s=[]);var S=r().createElement("div",null,r().createElement(m.u,{content:r().createElement("div",null,s.map((function(e,t){return r().createElement("p",{key:t},e.Name)})))},r().createElement("span",null,"Multiple groups"))),C="federated"!==o?"".concat(o,"/").concat(p):"/".concat(p),O="federated"!==o?"edge".concat(c._.manageImages,"/").concat(E):"insights/image-builder/manage-edge-images/".concat(E);return{rowInfo:{deviceID:u,id:p,display_name:l,updateImageData:f,deviceStatus:(0,h.u)(D,f,w),imageSetId:E,imageName:I,deviceGroups:s},noApiSortFilter:[l||"",I||"","",y||"",(0,h.u)(D,f)],cells:[{title:t?(0,v.EW)({pathname:C,linkText:l,history:a,navigate:i}):l},{title:I?t?r().createElement(g.zx,{variant:"link","target-href":O,onClick:function(e){e.preventDefault(),window.location.href="".concat(O)}},I):I:"unavailable"},{title:0===s.length?"-":1===s.length?s[0].Name:S},{title:y?r().createElement(d.Z,{date:y}):"Unknown"},{title:"error"===k||"unresponsive"===k?r().createElement(b.Z,{lastSeen:y,fetchDevices:n,device:e},r().createElement(h.Z,{type:"error"===k?"errorWithExclamationCircle":k,isLink:!0})):r().createElement(h.Z,{type:"error"===k?"errorWithExclamationCircle":k})}]}}))},D=function(e){var t=e.navigateProp,n=e.historyProp,o=e.locationProp,i=e.hasCheckbox,l=void 0!==i&&i,d=e.selectedItems,p=e.selectedItemsUpdateable,m=e.skeletonRowQuantity,h=e.data,b=e.count,g=e.isLoading,D=e.hasError,w=e.kebabItems,k=e.setRemoveModal,S=(e.setIsAddModalOpen,e.handleAddDevicesToGroup),C=e.handleRemoveDevicesFromGroup,O=e.handleEditNameSystem,x=e.handleDeleteSystem,U=e.handleUpdateSelected,P=e.hasModalSubmitted,T=e.setHasModalSubmitted,N=e.fetchDevices,R=e.isSystemsView,_=void 0!==R&&R,A=e.isAddSystemsView,Q=void 0!==A&&A,Z=k,j=_,L=n?n():s.k6?(0,s.k6)():null,G=t?t():u.useNavigate?(0,u.useNavigate)():null,M=o?o():s.TH?(0,s.TH)():null,V=M.pathname,W=M.search,H=n?"federated":V===c._.inventory?V:"/"===V?"":"".concat(V,"/systems");return r().createElement(r().Fragment,null,_&&(0,v.G0)(g,b,W)&&!n?r().createElement(f.Z,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"Connect edge systems",body:"Connect and manage edge systems here after registering them via the console. To start, create a RHEL for Edge image and install it to your target system.",secondaryActions:[{title:"Create RHEL for Edge images and configure automated management",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index",type:"link"}]}):r().createElement(a.Z,{historyProp:n,navigateProp:t,locationProp:o,apiFilterSort:!0,isUseApi:!0,filters:y,loadTableData:N,tableData:{count:b,isLoading:g,hasError:D},columnNames:I,rows:E(h||[],Q||_,N,H,L,G),actionResolver:function(e){var n,o,r=function(e){return t?"/insights/inventory/".concat(e.rowInfo.id,"/update"):"/inventory/".concat(e.rowInfo.id,"/update")},a=[];return g?a:null!=e&&null!==(n=e.rowInfo)&&void 0!==n&&n.id?(S&&a.push({title:"Add to group",onClick:function(){return S([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name}],!0)}}),O&&a.push({title:"Edit",onClick:function(){return O([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),x&&a.push({title:"Delete",onClick:function(){return x([{ID:e.rowInfo.deviceID,display_name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),C&&a.push({title:"Remove from group",isDisabled:0===(null==e||null===(o=e.rowInfo)||void 0===o?void 0:o.deviceGroups.length),onClick:function(){return C([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,deviceGroups:e.rowInfo.deviceGroups}],!0)}}),function(e){var t,n,o;return!(null!==(t=e.rowInfo)&&void 0!==t&&t.UpdateAvailable||"updating"!==(null===(n=e.rowInfo)||void 0===n?void 0:n.deviceStatus)&&"upToDate"!==(null===(o=e.rowInfo)||void 0===o?void 0:o.deviceStatus))}(e)||a.push({title:"Update",onClick:function(e,n,o){if(t){var a=r(o);G(a,{replace:!0})}else L.push({pathname:r(o)})}}),Z&&a.push({title:"Remove from group",onClick:function(){return k({name:e.rowInfo.display_name,isOpen:!0,deviceId:e.rowInfo.deviceID})}}),a):a},defaultSort:{index:3,direction:"desc"},toolbarButtons:j?[{isDisabled:!p,title:"Update",id:"toolbar-update-button",click:function(){return U()}}]:[],hasCheckbox:l,selectedItems:d,skeletonRowQuantity:m,kebabItems:w,hasModalSubmitted:P,setHasModalSubmitted:T}))};D.propTypes={navigateProp:l().func,historyProp:l().func,locationProp:l().func,imageData:l().object,urlParam:l().string,openUpdateWizard:l().func,skeletonRowQuantity:l().number,temp:l().func,hasCheckbox:l().bool,setIsModalOpen:l().func,selectedItems:l().func,selectedItemsUpdateable:l().bool,reload:l().bool,setReload:l().func,data:l().array,count:l().number,isLoading:l().bool,hasError:l().bool,handleSingleDeviceRemoval:l().func,kebabItems:l().array,setRemoveModal:l().func,setIsAddModalOpen:l().func,hasModalSubmitted:l().bool,setHasModalSubmitted:l().func,handleAddDevicesToGroup:l().func,handleRemoveDevicesFromGroup:l().func,handleEditNameSystem:l().func,handleDeleteSystem:l().func,handleUpdateSelected:l().func,fetchDevices:l().func,isSystemsView:l().bool,isAddSystemsView:l().bool};const w=D},18098:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(15861),r=n(29439),a=n(64687),i=n.n(a),l=n(92950),c=n.n(l),s=n(46043),u=n(47173),d=n(58844),p=n(3025),m=n(49739),f=n(83826),v=n(48761),h=n(43047),b=n(62410),g=n(32349),y=n(8027),I=n(77760),E=n(45697),D=n.n(E),w="The playbook failed to run.",k="The service timed out during the last update.",S="UNRESPONSIVE",C=function(e,t,n){return c().createElement("div",null,e===w?"The playbook failed to run. You can retry the update or build a new one.":e===k?"The service timed out during the last update. You can retry the update or build a new one.":t===S?"The service could not be reached via RHC. The system may communicate at a later time if this is a network issue or could be an indication of a more significant problem.":"Unknown",c().createElement(m.K,{className:"pf-u-mt-sm"},c().createElement(f.v,{className:"pf-u-font-weight-bold"},"Last seen"),c().createElement(f.v,null," ",c().createElement(b.Z,{date:n}))))},O=function(e){var t,n,a=e.id,m=e.device,f=e.position,b=e.fetchDevices,E=e.lastSeen,D=e.children,O=(0,l.useState)(!1),x=(0,r.Z)(O,2),U=x[0],P=x[1],T=(0,I.useDispatch)(),N={onSuccess:{variant:"info",title:"Updating system",description:"".concat(m.DeviceName," was added to the queue.")}};return c().createElement(d.g,null,c().createElement(v.H,null,c().createElement(s.J,{id:a,isVisible:U,shouldOpen:function(){return P(!0)},shouldClose:function(){return P(!1)},"aria-label":"Alert popover",alertseverityvariant:"danger",headerContent:c().createElement("div",{style:{color:"#c9190b"}}," ",c().createElement(h.ZP,{size:"sm"}),(t=m.DispatcherReason,n=m.DispatcherStatus,c().createElement("span",{className:"pf-u-ml-xs"},t===w?"Playbook error":t===k?"Service timed out":n===S?"Unresponsive":"Unknown"))),icon:"true",variant:"icon",color:"red",position:f,headerComponent:"h6",bodyContent:C(m.DispatcherReason,m.DispatcherStatus,E),footerContent:m.DispatcherStatus!==S?c().createElement(u.zx,{variant:"link",isInline:!0,onClick:function(){(0,g.Z)(T,(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.EQ)({DevicesUUID:[m.DeviceUUID]});case 2:P(!1),b();case 4:case"end":return e.stop()}}),e)}))),N)}}," ","Retry"," "):""},D)),c().createElement(p.b,null," "))};O.propTypes={id:D().string,lastSeen:D().string,children:D().element,device:D().object,position:D().string,fetchDevices:D().func},O.defaultProps={position:"left",id:"retry-update"};const x=O},8027:(e,t,n)=>{"use strict";n.d(t,{$v:()=>c,EQ:()=>d,V3:()=>u,_v:()=>s});var o=n(15861),r=n(64687),a=n.n(r),i=n(66702),l=n(93454),c=function(e){var t=e.query,n=(0,i.Vs)(t);return l.instance.get("".concat(i.Ds,"/devices/devicesview?").concat(n))},s=function(e){return l.instance.get("".concat(i.Ds,"/devices/").concat(e))},u=function(e){var t=e.id,n=e.query,o=(0,i.Vs)(n);return l.instance.get("".concat(i.Ds,"/devices/").concat(t,"?").concat(o))},d=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.instance.post("".concat(i.Ds,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v,u:()=>m});var o=n(92950),r=n.n(o),a=n(45697),i=n.n(a),l=n(69174),c=n(75824),s=n(79851),u=n(34512),d=n(98309),p={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},m=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},f=function(e){var t=e.id,n=e.type,o=e.isLabel,a=void 0!==o&&o,i=e.toolTipContent,d=void 0===i?"":i,m=e.className,f=void 0===m?"":m,v=e.isLink,h=Object.prototype.hasOwnProperty.call(p,n)?p[n]:p.default,b=h.text,g=h.Icon,y=h.color,I=h.labelColor;return r().createElement(r().Fragment,null,a?r().createElement(l._,{id:t,color:I,icon:r().createElement(g,null),className:f},b):r().createElement(s.P,{id:t,style:{color:y},className:f},r().createElement(u.J,{className:"pf-u-mr-sm"},d?r().createElement(c.u,{content:"blargh"},r().createElement(g,null)):r().createElement(g,null)),r().createElement(u.J,null,r().createElement("p",{style:v?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},b))))};const v=f;f.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},f.defaultProps={id:"status"}},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(4942),r=n(15861),a=n(64687),i=n.n(a),l=n(83215);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,o){var a,c,u=null===(a=n)||void 0===a?void 0:a.onSuccess,d=null===(c=n)||void 0===c?void 0:c.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var p=function(){var a=(0,r.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,d&&(o?o.hasInfo(n.onInfo):e(s({},(0,l.wN)(s({variant:"info"},n.onInfo))))),u&&(o?o.hasSuccess(n.onSuccess):e(s({},(0,l.wN)(s({variant:"success"},n.onSuccess))))),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),o?o.err(n.onError,r.t0):e(s({},(0,l.wN)(s(s({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}();return p()}},27567:()=>{},21064:()=>{},82014:()=>{},91993:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/663.1b11627c16651ddf4caa44c88cf9a2cb.js.map
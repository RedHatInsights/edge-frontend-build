(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[663],{15656:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(92950),o=n.n(r),a=n(73448),i=n(45697),l=n.n(i),c=n(9192),s=n(68519),u=n(5513),d=n(62410),p=n(34766),m=n(75824),v=n(3035),f=n(48903),g=n(35681),h=n(18098),b=n(47173),y=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Update available",value:"updateAvailable"}]}],I=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,p.cellWidth)(30)]},{title:"Image",type:"image",sort:!1,columnTransforms:[(0,p.cellWidth)(20)]},{title:"Groups",type:"groups",sort:!1,columnTransforms:[(0,p.cellWidth)(15)]},{title:"Last seen",type:"last_seen",sort:!0,columnTransforms:[(0,p.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,p.cellWidth)(25)]}],E=function(e,t,n,r,a,i){return null==e?void 0:e.map((function(e){var l=e.DeviceName,s=e.DeviceGroups,u=e.DeviceID,p=e.DeviceUUID,v=e.UpdateAvailable,y=e.LastSeen,I=e.ImageName,E=e.ImageSetID,D=e.Status,w=e.DispatcherStatus,S=(0,g.u)(D,v,w);""===l&&(l="localhost"),null===s&&(s=[]);var k=o().createElement("div",null,o().createElement(m.u,{content:o().createElement("div",null,s.map((function(e,t){return o().createElement("p",{key:t},e.Name)})))},o().createElement("span",null,"Multiple groups"))),C="federated"!==r?"".concat(r,"/").concat(p):"/".concat(p),O="federated"!==r?"edge".concat(c._.manageImages,"/").concat(E):"insights/image-builder/manage-edge-images/".concat(E);return{rowInfo:{deviceID:u,id:p,display_name:l,updateImageData:v,deviceStatus:(0,g.u)(D,v,w),imageSetId:E,imageName:I,deviceGroups:s},noApiSortFilter:[l||"",I||"","",y||"",(0,g.u)(D,v)],cells:[{title:t?(0,f.EW)({pathname:C,linkText:l,history:a,navigate:i}):l},{title:I?t?o().createElement(b.zx,{variant:"link","target-href":O,onClick:function(e){e.preventDefault(),window.location.href="".concat(O)}},I):I:"unavailable"},{title:0===s.length?"-":1===s.length?s[0].Name:k},{title:y?o().createElement(d.Z,{date:y}):"Unknown"},{title:"error"===S||"unresponsive"===S?o().createElement(h.Z,{lastSeen:y,fetchDevices:n,device:e},o().createElement(g.Z,{type:"error"===S?"errorWithExclamationCircle":S,isLink:!0})):o().createElement(g.Z,{type:"error"===S?"errorWithExclamationCircle":S})}]}}))},D=function(e){var t=e.navigateProp,n=e.historyProp,r=e.locationProp,i=e.hasCheckbox,l=void 0!==i&&i,d=e.selectedItems,p=e.selectedItemsUpdateable,m=e.skeletonRowQuantity,g=e.data,h=e.count,b=e.isLoading,D=e.hasError,w=e.kebabItems,S=e.setRemoveModal,k=(e.setIsAddModalOpen,e.handleAddDevicesToGroup),C=e.handleRemoveDevicesFromGroup,O=e.handleEditNameSystem,x=e.handleDeleteSystem,U=e.handleUpdateSelected,N=e.hasModalSubmitted,P=e.setHasModalSubmitted,T=e.fetchDevices,R=e.isSystemsView,_=void 0!==R&&R,A=e.isAddSystemsView,Q=void 0!==A&&A,Z=e.urlName,j=S,W=_,L=n?n():s.k6?(0,s.k6)():null,G=t?t():u.useNavigate?(0,u.useNavigate)():null,M=r?r():s.TH?(0,s.TH)():null,V=M.pathname,H=M.search,F=n?"federated":V===c._.inventory?V:"/"===V?"":"".concat(V,"/systems"),q=[],z=[];if("manage-edge-inventory"===Z){for(var J=0;J<y.length;J++){var B=y[J];"Status"===B.label&&(B.label="Image status"),q.push(B)}for(var Y=0;Y<I.length;Y++){var K=I[Y];"Status"===K.title&&(K.title="Image status"),z.push(K)}}else q=y,z=I;return o().createElement(o().Fragment,null,_&&(0,f.G0)(b,h,H)&&!n?o().createElement(v.Z,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"Connect edge systems",body:"Connect and manage edge systems here after registering them via the console. To start, create a RHEL for Edge image and install it to your target system.",secondaryActions:[{title:"Create RHEL for Edge images and configure automated management",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index",type:"link"}]}):o().createElement(a.Z,{historyProp:n,navigateProp:t,locationProp:r,apiFilterSort:!0,isUseApi:!0,filters:q,loadTableData:T,tableData:{count:h,isLoading:b,hasError:D},columnNames:z,rows:E(g||[],Q||_,T,F,L,G),actionResolver:function(e){var n,r,o=function(e){return t?"/insights/inventory/".concat(e.rowInfo.id,"/update"):"/inventory/".concat(e.rowInfo.id,"/update")},a=[];return b?a:null!=e&&null!==(n=e.rowInfo)&&void 0!==n&&n.id?(k&&a.push({title:"Add to group",onClick:function(){return k([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name}],!0)}}),O&&a.push({title:"Edit",onClick:function(){return O([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),x&&a.push({title:"Delete",onClick:function(){return x([{ID:e.rowInfo.deviceID,display_name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),C&&a.push({title:"Remove from group",isDisabled:0===(null==e||null===(r=e.rowInfo)||void 0===r?void 0:r.deviceGroups.length),onClick:function(){return C([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,deviceGroups:e.rowInfo.deviceGroups}],!0)}}),function(e){var t,n,r;return!(null!==(t=e.rowInfo)&&void 0!==t&&t.UpdateAvailable||"updating"!==(null===(n=e.rowInfo)||void 0===n?void 0:n.deviceStatus)&&"upToDate"!==(null===(r=e.rowInfo)||void 0===r?void 0:r.deviceStatus))}(e)||a.push({title:"Update",onClick:function(e,n,r){if(t){var a=o(r);G(a,{replace:!0})}else L.push({pathname:o(r)})}}),j&&a.push({title:"Remove from group",onClick:function(){return S({name:e.rowInfo.display_name,isOpen:!0,deviceId:e.rowInfo.deviceID})}}),a):a},defaultSort:{index:3,direction:"desc"},toolbarButtons:W?[{isDisabled:!p,title:"Update",id:"toolbar-update-button",click:function(){return U()}}]:[],hasCheckbox:l,selectedItems:d,skeletonRowQuantity:m,kebabItems:w,hasModalSubmitted:N,setHasModalSubmitted:P}))};D.propTypes={navigateProp:l().func,historyProp:l().func,locationProp:l().func,imageData:l().object,urlParam:l().string,openUpdateWizard:l().func,skeletonRowQuantity:l().number,temp:l().func,hasCheckbox:l().bool,setIsModalOpen:l().func,selectedItems:l().func,selectedItemsUpdateable:l().bool,reload:l().bool,setReload:l().func,data:l().array,count:l().number,isLoading:l().bool,hasError:l().bool,handleSingleDeviceRemoval:l().func,kebabItems:l().array,setRemoveModal:l().func,setIsAddModalOpen:l().func,hasModalSubmitted:l().bool,setHasModalSubmitted:l().func,handleAddDevicesToGroup:l().func,handleRemoveDevicesFromGroup:l().func,handleEditNameSystem:l().func,handleDeleteSystem:l().func,handleUpdateSelected:l().func,fetchDevices:l().func,isSystemsView:l().bool,isAddSystemsView:l().bool,urlName:l().string};const w=D},18098:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(15861),o=n(29439),a=n(64687),i=n.n(a),l=n(92950),c=n.n(l),s=n(46043),u=n(47173),d=n(58844),p=n(3025),m=n(49739),v=n(83826),f=n(48761),g=n(43047),h=n(62410),b=n(32349),y=n(8027),I=n(77760),E=n(45697),D=n.n(E),w="The playbook failed to run.",S="The service timed out during the last update.",k="UNRESPONSIVE",C=function(e,t,n){return c().createElement("div",null,e===w?"The playbook failed to run. You can retry the update or build a new one.":e===S?"The service timed out during the last update. You can retry the update or build a new one.":t===k?"The service could not be reached via RHC. The system may communicate at a later time if this is a network issue or could be an indication of a more significant problem.":"Unknown",c().createElement(m.K,{className:"pf-u-mt-sm"},c().createElement(v.v,{className:"pf-u-font-weight-bold"},"Last seen"),c().createElement(v.v,null," ",c().createElement(h.Z,{date:n}))))},O=function(e){var t,n,a=e.id,m=e.device,v=e.position,h=e.fetchDevices,E=e.lastSeen,D=e.children,O=(0,l.useState)(!1),x=(0,o.Z)(O,2),U=x[0],N=x[1],P=(0,I.useDispatch)(),T={onSuccess:{variant:"info",title:"Updating system",description:"".concat(m.DeviceName," was added to the queue.")}};return c().createElement(d.g,null,c().createElement(f.H,null,c().createElement(s.J,{id:a,isVisible:U,shouldOpen:function(){return N(!0)},shouldClose:function(){return N(!1)},"aria-label":"Alert popover",alertseverityvariant:"danger",headerContent:c().createElement("div",{style:{color:"#c9190b"}}," ",c().createElement(g.ZP,{size:"sm"}),(t=m.DispatcherReason,n=m.DispatcherStatus,c().createElement("span",{className:"pf-u-ml-xs"},t===w?"Playbook error":t===S?"Service timed out":n===k?"Unresponsive":"Unknown"))),icon:"true",variant:"icon",color:"red",position:v,headerComponent:"h6",bodyContent:C(m.DispatcherReason,m.DispatcherStatus,E),footerContent:m.DispatcherStatus!==k?c().createElement(u.zx,{variant:"link",isInline:!0,onClick:function(){(0,b.Z)(P,(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.EQ)({DevicesUUID:[m.DeviceUUID]});case 2:N(!1),h();case 4:case"end":return e.stop()}}),e)}))),T)}}," ","Retry"," "):""},D)),c().createElement(p.b,null," "))};O.propTypes={id:D().string,lastSeen:D().string,children:D().element,device:D().object,position:D().string,fetchDevices:D().func},O.defaultProps={position:"left",id:"retry-update"};const x=O},8027:(e,t,n)=>{"use strict";n.d(t,{$v:()=>c,EQ:()=>d,V3:()=>u,_v:()=>s});var r=n(15861),o=n(64687),a=n.n(o),i=n(66702),l=n(93454),c=function(e){var t=e.query,n=(0,i.Vs)(t);return l.instance.get("".concat(i.Ds,"/devices/devicesview?").concat(n))},s=function(e){return l.instance.get("".concat(i.Ds,"/devices/").concat(e))},u=function(e){var t=e.id,n=e.query,r=(0,i.Vs)(n);return l.instance.get("".concat(i.Ds,"/devices/").concat(t,"?").concat(r))},d=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.instance.post("".concat(i.Ds,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f,u:()=>m});var r=n(92950),o=n.n(r),a=n(45697),i=n.n(a),l=n(69174),c=n(75824),s=n(79851),u=n(34512),d=n(98309),p={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},m=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},v=function(e){var t=e.id,n=e.type,r=e.isLabel,a=void 0!==r&&r,i=e.toolTipContent,d=void 0===i?"":i,m=e.className,v=void 0===m?"":m,f=e.isLink,g=Object.prototype.hasOwnProperty.call(p,n)?p[n]:p.default,h=g.text,b=g.Icon,y=g.color,I=g.labelColor;return o().createElement(o().Fragment,null,a?o().createElement(l._,{id:t,color:I,icon:o().createElement(b,null),className:v},h):o().createElement(s.P,{id:t,style:{color:y},className:v},o().createElement(u.J,{className:"pf-u-mr-sm"},d?o().createElement(c.u,{content:"blargh"},o().createElement(b,null)):o().createElement(b,null)),o().createElement(u.J,null,o().createElement("p",{style:f?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},h))))};const f=v;v.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},v.defaultProps={id:"status"}},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(4942),o=n(15861),a=n(64687),i=n.n(a),l=n(83215);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,r){var a,c,u,d=null===(a=n)||void 0===a?void 0:a.onSuccess,p=null===(c=n)||void 0===c?void 0:c.onInfo,m=null===(u=n)||void 0===u?void 0:u.onWarning;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var v=function(){var a=(0,o.Z)(i().mark((function o(){var a;return i().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t();case 3:return a=o.sent,p&&(r?r.hasInfo(n.onInfo):e(s({},(0,l.wN)(s({variant:"info"},n.onInfo))))),d&&(r?r.hasSuccess(n.onSuccess):e(s({},(0,l.wN)(s({variant:"success"},n.onSuccess))))),m&&(r?r.hasWarning(n.onWarning):e(s({},(0,l.wN)(s({variant:"warning"},n.onWarning))))),o.abrupt("return",a);case 10:return o.prev=10,o.t0=o.catch(0),r?r.err(n.onError,o.t0):e(s({},(0,l.wN)(s(s({variant:"danger"},n.onError),{},{description:null!==o.t0&&void 0!==o.t0&&o.t0.Title?"".concat(n.onError.description,": ").concat(o.t0.Title):n.onError.description})))),o.abrupt("return",o.t0);case 14:case"end":return o.stop()}}),o,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();return v()}},27567:()=>{},21064:()=>{},82014:()=>{},91993:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/663.73a4d0767ce4924dc5646a846e46990e.js.map
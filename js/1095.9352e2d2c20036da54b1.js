(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1095],{15656:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var o=n(92950),r=n.n(o),a=n(73448),i=n(45697),c=n.n(i),l=n(9192),s=n(96620),u=n(62410),d=n(34766),p=n(75824),m=n(3035),v=n(48903),f=n(35681),b=n(18098),h=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Update available",value:"updateAvailable"}]}],g=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,d.cellWidth)(30)]},{title:"Image",type:"image",sort:!1,columnTransforms:[(0,d.cellWidth)(20)]},{title:"Groups",type:"groups",sort:!1,columnTransforms:[(0,d.cellWidth)(15)]},{title:"Last seen",type:"last_seen",sort:!0,columnTransforms:[(0,d.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,d.cellWidth)(25)]}],y=function(e,t,n,o){return null==e?void 0:e.map((function(e){var a=e.DeviceName,i=e.DeviceGroups,c=e.DeviceID,d=e.DeviceUUID,m=e.UpdateAvailable,v=e.LastSeen,h=e.ImageName,g=e.ImageSetID,y=e.Status,E=e.DispatcherStatus,I=(0,f.u)(y,m,E);""===a&&(a="localhost"),null===i&&(i=[]);var D=r().createElement("div",null,r().createElement(p.u,{content:r().createElement("div",null,i.map((function(e,t){return r().createElement("p",{key:t},e.Name)})))},r().createElement("span",null,"Multiple groups")));return{rowInfo:{deviceID:c,id:d,display_name:a,updateImageData:m,deviceStatus:(0,f.u)(y,m,E),imageSetId:g,imageName:h,deviceGroups:i},noApiSortFilter:[a||"",h||"","",v||"",(0,f.u)(y,m)],cells:[{title:t?r().createElement(s.Link,{to:{pathname:"".concat(o,"/").concat(d)}},a):a},{title:h?t?r().createElement(s.Link,{to:"".concat(l._.manageImages,"/").concat(g)},h):h:"unavailable"},{title:0===i.length?"-":1===i.length?i[0].Name:D},{title:v?r().createElement(u.Z,{date:v}):"Unknown"},{title:"error"===I||"unresponsive"===I?r().createElement(b.Z,{lastSeen:v,fetchDevices:n,device:e},r().createElement(f.Z,{type:"error"===I?"errorWithExclamationCircle":I,isLink:!0})):r().createElement(f.Z,{type:"error"===I?"errorWithExclamationCircle":I})}]}}))},E=function(e){var t=e.historyProp,n=e.locationProp,o=e.hasCheckbox,i=void 0!==o&&o,c=e.selectedItems,u=e.selectedItemsUpdateable,d=e.skeletonRowQuantity,p=e.data,f=e.count,b=e.isLoading,E=e.hasError,I=e.kebabItems,D=e.setRemoveModal,w=(e.setIsAddModalOpen,e.handleAddDevicesToGroup),k=e.handleRemoveDevicesFromGroup,S=e.handleUpdateSelected,C=e.hasModalSubmitted,O=e.setHasModalSubmitted,x=e.fetchDevices,U=e.isSystemsView,P=void 0!==U&&U,T=e.isAddSystemsView,N=void 0!==T&&T,R=D,_=P,A=t?t():(0,s.useHistory)(),Q=n?n():(0,s.useLocation)(),Z=Q.pathname,L=Q.search,j=Z===l._.inventory?Z:"".concat(Z,"/systems");return r().createElement(r().Fragment,null,P&&(0,v.G0)(b,f,L)?r().createElement(m.Z,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"Connect edge systems",body:"Connect and manage edge systems here after registering them via the console. To start, create a RHEL for Edge image and install it to your target system.",secondaryActions:[{title:"Create RHEL for Edge images and configure automated management",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index",type:"link"}]}):r().createElement(a.Z,{historyProp:t,locationProp:n,apiFilterSort:!0,isUseApi:!0,filters:h,loadTableData:x,tableData:{count:f,isLoading:b,hasError:E},columnNames:g,rows:y(p||[],N||P,x,j),actionResolver:function(e){var t,n,o=[];return b?o:null!=e&&null!==(t=e.rowInfo)&&void 0!==t&&t.id?(w&&o.push({title:"Add to group",onClick:function(){return w([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name}],!0)}}),k&&o.push({title:"Remove from group",isDisabled:0===(null==e||null===(n=e.rowInfo)||void 0===n?void 0:n.deviceGroups.length),onClick:function(){return k([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,deviceGroups:e.rowInfo.deviceGroups}],!0)}}),function(e){var t,n,o;return!(null!==(t=e.rowInfo)&&void 0!==t&&t.UpdateAvailable||"updating"!==(null===(n=e.rowInfo)||void 0===n?void 0:n.deviceStatus)&&"upToDate"!==(null===(o=e.rowInfo)||void 0===o?void 0:o.deviceStatus))}(e)||o.push({title:"Update",onClick:function(e,t,n){A.push({pathname:"/".concat(n.rowInfo.id,"/update")})}}),R&&o.push({title:"Remove from group",onClick:function(){return D({name:e.rowInfo.display_name,isOpen:!0,deviceId:e.rowInfo.deviceID})}}),o):o},defaultSort:{index:3,direction:"desc"},toolbarButtons:_?[{isDisabled:!u,title:"Update",id:"toolbar-update-button",click:function(){return S()}}]:[],hasCheckbox:i,selectedItems:c,skeletonRowQuantity:d,kebabItems:I,hasModalSubmitted:C,setHasModalSubmitted:O}))};E.propTypes={historyProp:c().func,locationProp:c().func,imageData:c().object,urlParam:c().string,openUpdateWizard:c().func,skeletonRowQuantity:c().number,temp:c().func,hasCheckbox:c().bool,setIsModalOpen:c().func,selectedItems:c().func,selectedItemsUpdateable:c().bool,reload:c().bool,setReload:c().func,data:c().array,count:c().number,isLoading:c().bool,hasError:c().bool,handleSingleDeviceRemoval:c().func,kebabItems:c().array,setRemoveModal:c().func,setIsAddModalOpen:c().func,hasModalSubmitted:c().bool,setHasModalSubmitted:c().func,handleAddDevicesToGroup:c().func,handleRemoveDevicesFromGroup:c().func,handleUpdateSelected:c().func,fetchDevices:c().func,isSystemsView:c().bool,isAddSystemsView:c().bool};const I=E},18098:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(15861),r=n(29439),a=n(64687),i=n.n(a),c=n(92950),l=n.n(c),s=n(46043),u=n(47173),d=n(58844),p=n(3025),m=n(49739),v=n(83826),f=n(48761),b=n(43047),h=n(62410),g=n(32349),y=n(8027),E=n(77760),I=n(45697),D=n.n(I),w="The playbook failed to run.",k="The service timed out during the last update.",S="UNRESPONSIVE",C=function(e,t,n){return l().createElement("div",null,e===w?"The playbook failed to run. You can retry the update or build a new one.":e===k?"The service timed out during the last update. You can retry the update or build a new one.":t===S?"The service could not be reached via RHC. The system may communicate at a later time if this is a network issue or could be an indication of a more significant problem.":"Unknown",l().createElement(m.K,{className:"pf-u-mt-sm"},l().createElement(v.v,{className:"pf-u-font-weight-bold"},"Last seen"),l().createElement(v.v,null," ",l().createElement(h.Z,{date:n}))))},O=function(e){var t,n,a=e.id,m=e.device,v=e.position,h=e.fetchDevices,I=e.lastSeen,D=e.children,O=(0,c.useState)(!1),x=(0,r.Z)(O,2),U=x[0],P=x[1],T=(0,E.useDispatch)(),N={onSuccess:{variant:"info",title:"Updating system",description:"".concat(m.DeviceName," was added to the queue.")}};return l().createElement(d.g,null,l().createElement(f.H,null,l().createElement(s.J,{id:a,isVisible:U,shouldOpen:function(){return P(!0)},shouldClose:function(){return P(!1)},"aria-label":"Alert popover",alertseverityvariant:"danger",headerContent:l().createElement("div",{style:{color:"#c9190b"}}," ",l().createElement(b.ZP,{size:"sm"}),(t=m.DispatcherReason,n=m.DispatcherStatus,l().createElement("span",{className:"pf-u-ml-xs"},t===w?"Playbook error":t===k?"Service timed out":n===S?"Unresponsive":"Unknown"))),icon:"true",variant:"icon",color:"red",position:v,headerComponent:"h6",bodyContent:C(m.DispatcherReason,m.DispatcherStatus,I),footerContent:m.DispatcherStatus!==S?l().createElement(u.zx,{variant:"link",isInline:!0,onClick:function(){(0,g.Z)(T,(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.EQ)({DevicesUUID:[m.DeviceUUID]});case 2:P(!1),h();case 4:case"end":return e.stop()}}),e)}))),N)}}," ","Retry"," "):""},D)),l().createElement(p.b,null," "))};O.propTypes={id:D().string,lastSeen:D().string,children:D().element,device:D().object,position:D().string,fetchDevices:D().func},O.defaultProps={position:"left",id:"retry-update"};const x=O},8027:(e,t,n)=>{"use strict";n.d(t,{$v:()=>l,EQ:()=>d,V3:()=>u,_v:()=>s});var o=n(15861),r=n(64687),a=n.n(r),i=n(66702),c=n(93454),l=function(e){var t=e.query,n=(0,i.Vs)(t);return c.instance.get("".concat(i.Ds,"/devices/devicesview?").concat(n))},s=function(e){return c.instance.get("".concat(i.Ds,"/devices/").concat(e))},u=function(e){var t=e.id,n=e.query,o=(0,i.Vs)(n);return c.instance.get("".concat(i.Ds,"/devices/").concat(t,"?").concat(o))},d=function(){var e=(0,o.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.instance.post("".concat(i.Ds,"/updates"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f,u:()=>m});var o=n(92950),r=n.n(o),a=n(45697),i=n.n(a),c=n(69174),l=n(75824),s=n(79851),u=n(34512),d=n(98309),p={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},m=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},v=function(e){var t=e.id,n=e.type,o=e.isLabel,a=void 0!==o&&o,i=e.toolTipContent,d=void 0===i?"":i,m=e.className,v=void 0===m?"":m,f=e.isLink,b=Object.prototype.hasOwnProperty.call(p,n)?p[n]:p.default,h=b.text,g=b.Icon,y=b.color,E=b.labelColor;return r().createElement(r().Fragment,null,a?r().createElement(c._,{id:t,color:E,icon:r().createElement(g,null),className:v},h):r().createElement(s.P,{id:t,style:{color:y},className:v},r().createElement(u.J,{className:"pf-u-mr-sm"},d?r().createElement(l.u,{content:"blargh"},r().createElement(g,null)):r().createElement(g,null)),r().createElement(u.J,null,r().createElement("p",{style:f?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},h))))};const f=v;v.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},v.defaultProps={id:"status"}},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(4942),r=n(15861),a=n(64687),i=n.n(a),c=n(83215);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,o){var a,l,u=null===(a=n)||void 0===a?void 0:a.onSuccess,d=null===(l=n)||void 0===l?void 0:l.onInfo;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var p=function(){var a=(0,r.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,d&&(o?o.hasInfo(n.onInfo):e(s({},(0,c.wN)(s({variant:"info"},n.onInfo))))),u&&(o?o.hasSuccess(n.onSuccess):e(s({},(0,c.wN)(s({variant:"success"},n.onSuccess))))),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),o?o.err(n.onError,r.t0):e(s({},(0,c.wN)(s(s({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}();return p()}},27567:()=>{},21064:()=>{},82014:()=>{},91993:()=>{},16166:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1095.99146a8f95d18fa570d99fe66a2801e0.js.map
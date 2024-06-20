(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[663],{15656:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var o=n(92950),r=n.n(o),a=n(21061),i=n(45697),l=n.n(i),s=n(9192),c=n(68519),u=n(5513),d=n(62410),p=n(34766),m=n(75824),v=n(3035),f=n(48903),g=n(35681),h=n(18098),b=n(42559),I=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Update available",value:"updateAvailable"}]}],y=function(e,t,n,o,a,i,l,c){return null==e?void 0:e.map((function(e){var a=e.DeviceName,u=e.DeviceGroups,p=e.DeviceID,v=e.DeviceUUID,b=e.UpdateAvailable,I=e.LastSeen,y=e.ImageName,E=e.ImageSetID,w=e.Status,D=e.DispatcherStatus,k=e.GroupName,S=e.GroupUUID,C=(0,g.u)(w,b,D);""===a&&(a="localhost"),l&&(u=k&&S?[{ID:S,Name:k}]:[]),null===u&&(u=[]);var U=r().createElement("div",null,r().createElement(m.u,{content:r().createElement("div",null,u.map((function(e,t){return r().createElement("p",{key:t},e.Name)})))},r().createElement("span",null,"Multiple groups"))),O="federated"!==o?"edge".concat(s._.inventory,"/").concat(v):"insights/inventory/".concat(v),N="federated"!==o?"edge".concat(s._.manageImages,"/").concat(E):"insights/image-builder/manage-edge-images/".concat(E);return{rowInfo:{deviceID:p,id:v,display_name:a,updateImageData:b,deviceStatus:(0,g.u)(w,b,D),imageSetId:E,imageName:y,deviceGroups:u},noApiSortFilter:[a||"",y||"","",I||"",(0,g.u)(w,b)],cells:[{title:t?(0,f.EW)({pathname:O,linkText:a,navigate:i}):a},{title:y?t?(0,f.EW)({pathname:N,linkText:y,navigate:i}):y:"unavailable"},{title:0===u.length?r().createElement("div",{className:"pf-v5-u-disabled-color-200"},"No"," ",l&&c?"workspace":"group"):1===u.length?u[0].Name:U},{title:I?r().createElement(d.Z,{date:I}):"Unknown"},{title:"error"===C||"unresponsive"===C?r().createElement(h.Z,{lastSeen:I,fetchDevices:n,device:e},r().createElement(g.Z,{type:"error"===C?"errorWithExclamationCircle":C,isLink:!0})):r().createElement(g.Z,{type:"error"===C?"errorWithExclamationCircle":C})}]}}))},E=function(e){var t=e.navigateProp,n=e.historyProp,o=e.locationProp,i=e.hasCheckbox,l=void 0!==i&&i,d=e.selectedItems,m=e.selectedItemsUpdateable,g=e.skeletonRowQuantity,h=e.data,E=e.count,w=e.isLoading,D=e.hasError,k=e.kebabItems,S=e.setRemoveModal,C=(e.setIsAddModalOpen,e.handleAddDevicesToGroup),U=e.handleRemoveDevicesFromGroup,O=e.handleEditNameSystem,N=e.handleDeleteSystem,x=e.handleUpdateSelected,P=e.hasModalSubmitted,T=e.setHasModalSubmitted,_=e.fetchDevices,R=e.isSystemsView,A=void 0!==R&&R,G=e.isAddSystemsView,Q=void 0!==G&&G,W=e.urlName,Z=e.enforceEdgeGroups,j=S,L=A,M=n?n():c.k6?(0,c.k6)():null,V=t?t():u.useNavigate?(0,u.useNavigate)():null,H=o?o():c.TH?(0,c.TH)():null,F=H.pathname,q=H.search,z=(0,f.gV)(b.hh),J=!Z&&z,B=(0,f.gV)(b.k3),Y=t?"federated":F===s._.inventory?F:"/"===F?"":"".concat(F,"/systems"),K=(0,f.gV)(b._F),X=[],$=[],ee=!!h&&h.length>0,te=function(e,t,n){return[{title:"Name",type:"name",sort:t,columnTransforms:[(0,p.cellWidth)(25)]},{title:"Image",type:"image",sort:!1,columnTransforms:[(0,p.cellWidth)(20)]},{title:e?n?"Workspace":"Group":"Groups",type:"groups",sort:!1,columnTransforms:[(0,p.cellWidth)(15)]},{title:"Last seen",type:"last_seen",sort:t,columnTransforms:[(0,p.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,p.cellWidth)(25)]}]}(J,ee,B);if("manage-edge-inventory"===W){for(var ne=0;ne<I.length;ne++){var oe=I[ne];"Status"===oe.label&&(oe.label="Image status"),X.push(oe)}for(var re=0;re<te.length;re++){var ae=te[re];"Status"===ae.title&&(ae.title="Image status"),$.push(ae)}}else X=I,$=te;return r().createElement("div",{className:"edge"},r().createElement(r().Fragment,null,A&&(0,f.G0)(w,E,q)&&!n?r().createElement(v.Z,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"Connect edge systems",body:"Connect and manage edge systems here after registering them via the console. To start, create a RHEL for Edge image and install it to your target system.",secondaryActions:[{title:"Create RHEL for Edge images and configure automated management",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index",type:"link"}]}):r().createElement(a.Z,{historyProp:n,navigateProp:t,locationProp:o,apiFilterSort:!0,isUseApi:!0,filters:X,filtersName:"edge-devices-table-filters",loadTableData:_,tableData:{count:E,isLoading:w,hasError:D},columnNames:$,rows:y(h||[],Q||A,_,Y,0,V,J,B),actionResolver:function(e){var n,o,r,a=function(e){return t?"/insights/inventory/".concat(e.rowInfo.id,"/update"):"/inventory/".concat(e.rowInfo.id,"/update")},i=[];return w?i:null!=e&&null!==(n=e.rowInfo)&&void 0!==n&&n.id?(C&&!K&&i.push({title:"Add to ".concat(J&&B?"workspace":"group"),isDisabled:!!J&&0!==(null==e||null===(o=e.rowInfo)||void 0===o?void 0:o.deviceGroups.length),onClick:function(){return C([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),O&&i.push({title:"Edit",onClick:function(){return O([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),N&&i.push({title:"Delete",onClick:function(){return N([{ID:e.rowInfo.deviceID,display_name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),U&&!K&&i.push({title:"Remove from ".concat(J&&B?"workspace":"group"),isDisabled:0===(null==e||null===(r=e.rowInfo)||void 0===r?void 0:r.deviceGroups.length),onClick:function(){return U([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,deviceGroups:e.rowInfo.deviceGroups,UUID:e.rowInfo.id}],!0)}}),!function(e){var t,n,o;return!(null!==(t=e.rowInfo)&&void 0!==t&&t.UpdateAvailable||"updating"!==(null===(n=e.rowInfo)||void 0===n?void 0:n.deviceStatus)&&"upToDate"!==(null===(o=e.rowInfo)||void 0===o?void 0:o.deviceStatus))}(e)&&x&&i.push({title:"Update",onClick:function(e,n,o){if(t){var r=a(o);V(r,{replace:!0})}else M.push({pathname:a(o)})}}),j&&i.push({title:"Remove from ".concat(J&&B?"workspace":"group"),onClick:function(){return S({name:e.rowInfo.display_name,isOpen:!0,deviceId:e.rowInfo.deviceID})}}),i):i},defaultSort:{index:3,direction:"desc"},toolbarButtons:L?[{isDisabled:!m,title:"Update",id:"toolbar-update-button",click:function(){return x()}}]:[],hasCheckbox:l,selectedItems:d,skeletonRowQuantity:g,kebabItems:k,hasModalSubmitted:P,setHasModalSubmitted:T})))};E.propTypes={navigateProp:l().func,historyProp:l().func,locationProp:l().func,imageData:l().object,urlParam:l().string,openUpdateWizard:l().func,skeletonRowQuantity:l().number,temp:l().func,hasCheckbox:l().bool,setIsModalOpen:l().func,selectedItems:l().func,selectedItemsUpdateable:l().bool,reload:l().bool,setReload:l().func,data:l().array,count:l().number,isLoading:l().bool,hasError:l().bool,handleSingleDeviceRemoval:l().func,kebabItems:l().array,setRemoveModal:l().func,setIsAddModalOpen:l().func,hasModalSubmitted:l().bool,setHasModalSubmitted:l().func,handleAddDevicesToGroup:l().func,handleRemoveDevicesFromGroup:l().func,handleEditNameSystem:l().func,handleDeleteSystem:l().func,handleUpdateSelected:l().func,fetchDevices:l().func,isSystemsView:l().bool,isAddSystemsView:l().bool,urlName:l().string,groupUUID:l().string,enforceEdgeGroups:l().bool};const w=E},18098:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var o=n(15861),r=n(29439),a=n(64687),i=n.n(a),l=n(92950),s=n.n(l),c=n(46043),u=n(47173),d=n(58844),p=n(3025),m=n(49739),v=n(83826),f=n(48761),g=n(43047),h=n(62410),b=n(32349),I=n(8027),y=n(77760),E=n(45697),w=n.n(E),D="The playbook failed to run.",k="The service timed out during the last update.",S="UNRESPONSIVE",C=function(e,t,n){return s().createElement("div",null,e===D?"The playbook failed to run. You can retry the update or build a new one.":e===k?"The service timed out during the last update. You can retry the update or build a new one.":t===S?"The service could not be reached via RHC. The system may communicate at a later time if this is a network issue or could be an indication of a more significant problem.":"Unknown",s().createElement(m.K,{className:"pf-u-mt-sm"},s().createElement(v.v,{className:"pf-u-font-weight-bold"},"Last seen"),s().createElement(v.v,null," ",s().createElement(h.Z,{date:n}))))},U=function(e){var t,n,a=e.id,m=e.device,v=e.position,h=e.fetchDevices,E=e.lastSeen,w=e.children,U=(0,l.useState)(!1),O=(0,r.Z)(U,2),N=O[0],x=O[1],P=(0,y.useDispatch)(),T={onSuccess:{variant:"info",title:"Updating system",description:"".concat(m.DeviceName," was added to the queue.")}};return s().createElement(d.g,null,s().createElement(f.H,null,s().createElement(c.J,{id:a,isVisible:N,shouldOpen:function(){return x(!0)},shouldClose:function(){return x(!1)},"aria-label":"Alert popover",alertseverityvariant:"danger",headerContent:s().createElement("div",{style:{color:"#c9190b"}}," ",s().createElement(g.ZP,{size:"sm"}),(t=m.DispatcherReason,n=m.DispatcherStatus,s().createElement("span",{className:"pf-u-ml-xs"},t===D?"Playbook error":t===k?"Service timed out":n===S?"Unresponsive":"Unknown"))),icon:"true",variant:"icon",color:"red",position:v,headerComponent:"h6",bodyContent:C(m.DispatcherReason,m.DispatcherStatus,E),footerContent:m.DispatcherStatus!==S?s().createElement(u.zx,{variant:"link",isInline:!0,onClick:function(){(0,b.Z)(P,(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,I.EQ)({DevicesUUID:[m.DeviceUUID]});case 2:x(!1),h();case 4:case"end":return e.stop()}}),e)}))),T)}}," ","Retry"," "):""},w)),s().createElement(p.b,null," "))};U.propTypes={id:w().string,lastSeen:w().string,children:w().element,device:w().object,position:w().string,fetchDevices:w().func},U.defaultProps={position:"left",id:"retry-update"};const O=U},35681:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f,u:()=>m});var o=n(92950),r=n.n(o),a=n(45697),i=n.n(a),l=n(69174),s=n(75824),c=n(79851),u=n(34512),d=n(98309),p={booting:{text:"Booting",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},success:{text:"Ready",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},passed:{text:"Passed",Icon:d.iQ.checkCircle,color:d.OE.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.iQ.exclamationTriangle,color:d.OE.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},error:{text:"Error",Icon:d.iQ.timesCircle,color:d.OE.red,labelColor:"red"},default:{text:"Unknown",Icon:d.iQ.unknown},interrupted:{text:"Image build in progress",Icon:d.iQ.inProgress,color:d.OE.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.iQ.exclamationCircle,color:d.OE.red,labelColor:"red"}},m=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},v=function(e){var t=e.id,n=e.type,o=e.isLabel,a=void 0!==o&&o,i=e.toolTipContent,d=void 0===i?"":i,m=e.className,v=void 0===m?"":m,f=e.isLink,g=Object.prototype.hasOwnProperty.call(p,n)?p[n]:p.default,h=g.text,b=g.Icon,I=g.color,y=g.labelColor;return r().createElement(r().Fragment,null,a?r().createElement(l._,{id:t,color:y,icon:r().createElement(b,null),className:v},h):r().createElement(c.P,{id:t,style:{color:I},className:v},r().createElement(u.J,{className:"pf-u-mr-sm"},d?r().createElement(s.u,{content:"blargh"},r().createElement(b,null)):r().createElement(b,null)),r().createElement(u.J,null,r().createElement("p",{style:f?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},h))))};const f=v;v.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},v.defaultProps={id:"status"}},42559:(e,t,n)=>{"use strict";n.d(t,{_F:()=>r,hh:()=>o,k3:()=>a});var o="edgeParity.inventory-groups-enabled",r="edge-management.hide_groups_actions",a="platform.rbac.groups-to-workspaces-rename"},32349:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(4942),r=n(15861),a=n(64687),i=n.n(a),l=n(83215);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,o){var a,s,u,d=null===(a=n)||void 0===a?void 0:a.onSuccess,p=null===(s=n)||void 0===s?void 0:s.onInfo,m=null===(u=n)||void 0===u?void 0:u.onWarning;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var v=function(){var a=(0,r.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t();case 3:return a=r.sent,p&&(o?o.hasInfo(n.onInfo):e(c({},(0,l.wN)(c({variant:"info"},n.onInfo))))),d&&(o?o.hasSuccess(n.onSuccess):e(c({},(0,l.wN)(c({variant:"success"},n.onSuccess))))),m&&(o?o.hasWarning(n.onWarning):e(c({},(0,l.wN)(c({variant:"warning"},n.onWarning))))),r.abrupt("return",a);case 10:return r.prev=10,r.t0=r.catch(0),o?o.err(n.onError,r.t0):e(c({},(0,l.wN)(c(c({variant:"danger"},n.onError),{},{description:null!==r.t0&&void 0!==r.t0&&r.t0.Title?"".concat(n.onError.description,": ").concat(r.t0.Title):n.onError.description})))),r.abrupt("return",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();return v()}},27567:()=>{},21064:()=>{},82014:()=>{},91993:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/663.db9401f8977e7c107374bfd8f824a9c9.js.map
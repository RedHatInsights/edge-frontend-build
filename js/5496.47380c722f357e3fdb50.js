(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[5496,4729,1798,7720,4807,6349,1575,7409,7809,6680],{52871:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>r});const r=(0,n(68419).w)({name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0})},96926:(e,t,n)=>{"use strict";n.d(t,{_V:()=>a,tE:()=>o,vn:()=>i});var r="@@INSIGHTS-CORE/NOTIFICATIONS/",a="".concat(r,"ADD_NOTIFICATION"),o="".concat(r,"REMOVE_NOTIFICATION"),i="".concat(r,"CLEAR_NOTIFICATIONS")},14190:(e,t,n)=>{"use strict";n.d(t,{SP:()=>c,ww:()=>i,z8:()=>o});var r=n(96926),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},o=function(e){return{type:r._V,payload:a({id:"cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2)},e)}},i=function(e){return{type:r.tE,payload:e}},c=function(){return{type:r.vn}}},11830:(e,t,n)=>{"use strict";n.d(t,{z8:()=>a.z8,fr:()=>c});var r=n(96926),a=n(14190),o=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},i=[];const c=function(e,t){switch(void 0===e&&(e=i),t.type){case r._V:return function(e,t){var n=t.payload;return o(o([],e,!0),[n],!1)}(e,t);case r.tE:return function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return o(o([],e.slice(0,r),!0),e.slice(r+1),!0)}(e,t);case r.vn:return[];default:return e}}},37742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(44914),a=n.n(r),o=n(75253),i=n(5556),c=n.n(i),s=n(30083),l=n(61574),u=n(71519),d=n(63767),m=n(46634),p=n(45523),v=n(72511),g=n(17427),f=n(71544),h=n(7838),y=n(39440),b=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Update available",value:"updateAvailable"}]}],I=function(e,t,n,r,o,i,c,l){return null==e?void 0:e.map((function(e){var o=e.DeviceName,u=e.DeviceGroups,m=e.DeviceID,v=e.DeviceUUID,y=e.UpdateAvailable,b=e.LastSeen,I=e.ImageName,w=e.ImageSetID,D=e.Status,E=e.DispatcherStatus,C=e.GroupName,S=e.GroupUUID,k=(0,f.N)(D,y,E);""===o&&(o="localhost"),c&&(u=C&&S?[{ID:S,Name:C}]:[]),null===u&&(u=[]);var A=a().createElement("div",null,a().createElement(p.m,{content:a().createElement("div",null,u.map((function(e,t){return a().createElement("p",{key:t},e.Name)})))},a().createElement("span",null,"Multiple groups"))),N="federated"!==r?"edge".concat(s.J.inventory,"/").concat(v):"insights/inventory/".concat(v),_="federated"!==r?"edge".concat(s.J.manageImages,"/").concat(w):"insights/image-builder/manage-edge-images/".concat(w);return{rowInfo:{deviceID:m,id:v,display_name:o,updateImageData:y,deviceStatus:(0,f.N)(D,y,E),imageSetId:w,imageName:I,deviceGroups:u},noApiSortFilter:[o||"",I||"","",b||"",(0,f.N)(D,y)],cells:[{title:t?(0,g.d)({pathname:N,linkText:o,navigate:i}):o},{title:I?t?(0,g.d)({pathname:_,linkText:I,navigate:i}):I:"unavailable"},{title:0===u.length?a().createElement("div",{className:"pf-v5-u-disabled-color-200"},"No"," ",c&&l?"workspace":"group"):1===u.length?u[0].Name:A},{title:b?a().createElement(d.A,{date:b}):"Unknown"},{title:"error"===k||"unresponsive"===k?a().createElement(h.A,{lastSeen:b,fetchDevices:n,device:e},a().createElement(f.A,{type:"error"===k?"errorWithExclamationCircle":k,isLink:!0})):a().createElement(f.A,{type:"error"===k?"errorWithExclamationCircle":k})}]}}))},w=function(e){var t=e.navigateProp,n=e.historyProp,r=e.locationProp,i=e.hasCheckbox,c=void 0!==i&&i,d=e.selectedItems,p=e.selectedItemsUpdateable,f=e.skeletonRowQuantity,h=e.data,w=e.count,D=e.isLoading,E=e.hasError,C=e.kebabItems,S=e.setRemoveModal,k=(e.setIsAddModalOpen,e.handleAddDevicesToGroup),A=e.handleRemoveDevicesFromGroup,N=e.handleEditNameSystem,_=e.handleDeleteSystem,U=e.handleUpdateSelected,O=e.hasModalSubmitted,T=e.setHasModalSubmitted,P=e.fetchDevices,x=e.isSystemsView,R=void 0!==x&&x,L=e.isAddSystemsView,F=void 0!==L&&L,j=e.urlName,M=e.enforceEdgeGroups,G=S,W=R,V=n?n():l.W6?(0,l.W6)():null,z=t?t():u.useNavigate?(0,u.useNavigate)():null,H=r?r():l.zy?(0,l.zy)():null,q=H.pathname,J=H.search,B=(0,g.h)(y.xo),Q=!M&&B,K=(0,g.h)(y.QX),X=t?"federated":q===s.J.inventory?q:"/"===q?"":"".concat(q,"/systems"),Y=(0,g.h)(y.Cd),Z=[],$=[],ee=!!h&&h.length>0,te=function(e,t,n){return[{title:"Name",type:"name",sort:t,columnTransforms:[(0,m.cellWidth)(25)]},{title:"Image",type:"image",sort:!1,columnTransforms:[(0,m.cellWidth)(20)]},{title:e?n?"Workspace":"Group":"Groups",type:"groups",sort:!1,columnTransforms:[(0,m.cellWidth)(15)]},{title:"Last seen",type:"last_seen",sort:t,columnTransforms:[(0,m.cellWidth)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,m.cellWidth)(25)]}]}(Q,ee,K);if("manage-edge-inventory"===j){for(var ne=0;ne<b.length;ne++){var re=b[ne];"Status"===re.label&&(re.label="Image status"),Z.push(re)}for(var ae=0;ae<te.length;ae++){var oe=te[ae];"Status"===oe.title&&(oe.title="Image status"),$.push(oe)}}else Z=b,$=te;return a().createElement("div",{className:"edge"},a().createElement(a().Fragment,null,R&&(0,g.Rj)(D,w,J)&&!n?a().createElement(v.A,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"Connect edge systems",body:"Connect and manage edge systems here after registering them via the console. To start, create a RHEL for Edge image and install it to your target system.",secondaryActions:[{title:"Create RHEL for Edge images and configure automated management",link:"https://access.redhat.com/documentation/en-us/edge_management/2022/html-single/create_rhel_for_edge_images_and_configure_automated_management/index",type:"link"}]}):a().createElement(o.A,{historyProp:n,navigateProp:t,locationProp:r,apiFilterSort:!0,isUseApi:!0,filters:Z,filtersName:"edge-devices-table-filters",loadTableData:P,tableData:{count:w,isLoading:D,hasError:E},columnNames:$,rows:I(h||[],F||R,P,X,0,z,Q,K),actionResolver:function(e){var n,r,a,o=function(e){return t?"/insights/inventory/".concat(e.rowInfo.id,"/update"):"/inventory/".concat(e.rowInfo.id,"/update")},i=[];return D?i:null!=e&&null!==(n=e.rowInfo)&&void 0!==n&&n.id?(k&&!Y&&i.push({title:"Add to ".concat(Q&&K?"workspace":"group"),isDisabled:!!Q&&0!==(null==e||null===(r=e.rowInfo)||void 0===r?void 0:r.deviceGroups.length),onClick:function(){return k([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),N&&i.push({title:"Edit",onClick:function(){return N([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),_&&i.push({title:"Delete",onClick:function(){return _([{ID:e.rowInfo.deviceID,display_name:e.rowInfo.display_name,UUID:e.rowInfo.id}],!0)}}),A&&!Y&&i.push({title:"Remove from ".concat(Q&&K?"workspace":"group"),isDisabled:0===(null==e||null===(a=e.rowInfo)||void 0===a?void 0:a.deviceGroups.length),onClick:function(){return A([{ID:e.rowInfo.deviceID,name:e.rowInfo.display_name,deviceGroups:e.rowInfo.deviceGroups,UUID:e.rowInfo.id}],!0)}}),!function(e){var t,n,r;return!(null!==(t=e.rowInfo)&&void 0!==t&&t.UpdateAvailable||"updating"!==(null===(n=e.rowInfo)||void 0===n?void 0:n.deviceStatus)&&"upToDate"!==(null===(r=e.rowInfo)||void 0===r?void 0:r.deviceStatus))}(e)&&U&&i.push({title:"Update",onClick:function(e,n,r){if(t){var a=o(r);z(a,{replace:!0})}else V.push({pathname:o(r)})}}),G&&i.push({title:"Remove from ".concat(Q&&K?"workspace":"group"),onClick:function(){return S({name:e.rowInfo.display_name,isOpen:!0,deviceId:e.rowInfo.deviceID})}}),i):i},defaultSort:{index:3,direction:"desc"},toolbarButtons:W?[{isDisabled:!p,title:"Update",id:"toolbar-update-button",click:function(){return U()}}]:[],hasCheckbox:c,selectedItems:d,skeletonRowQuantity:f,kebabItems:C,hasModalSubmitted:O,setHasModalSubmitted:T})))};w.propTypes={navigateProp:c().func,historyProp:c().func,locationProp:c().func,imageData:c().object,urlParam:c().string,openUpdateWizard:c().func,skeletonRowQuantity:c().number,temp:c().func,hasCheckbox:c().bool,setIsModalOpen:c().func,selectedItems:c().func,selectedItemsUpdateable:c().bool,reload:c().bool,setReload:c().func,data:c().array,count:c().number,isLoading:c().bool,hasError:c().bool,handleSingleDeviceRemoval:c().func,kebabItems:c().array,setRemoveModal:c().func,setIsAddModalOpen:c().func,hasModalSubmitted:c().bool,setHasModalSubmitted:c().func,handleAddDevicesToGroup:c().func,handleRemoveDevicesFromGroup:c().func,handleEditNameSystem:c().func,handleDeleteSystem:c().func,handleUpdateSelected:c().func,fetchDevices:c().func,isSystemsView:c().bool,isAddSystemsView:c().bool,urlName:c().string,groupUUID:c().string,enforceEdgeGroups:c().bool};const D=w},7838:(e,t,n)=>{"use strict";n.d(t,{A:()=>N});var r=n(10467),a=n(5544),o=n(54756),i=n.n(o),c=n(44914),s=n.n(c),l=n(44461),u=n(72583),d=n(32034),m=n(1319),p=n(90678),v=n(73113),g=n(59263),f=n(31003),h=n(63767),y=n(71100),b=n(29082),I=n(45321),w=n(5556),D=n.n(w),E="The playbook failed to run.",C="The service timed out during the last update.",S="UNRESPONSIVE",k=function(e,t,n){return s().createElement("div",null,e===E?"The playbook failed to run. You can retry the update or build a new one.":e===C?"The service timed out during the last update. You can retry the update or build a new one.":t===S?"The service could not be reached via RHC. The system may communicate at a later time if this is a network issue or could be an indication of a more significant problem.":"Unknown",s().createElement(p.B,{className:"pf-u-mt-sm"},s().createElement(v.a,{className:"pf-u-font-weight-bold"},"Last seen"),s().createElement(v.a,null," ",s().createElement(h.A,{date:n}))))},A=function(e){var t,n,o=e.id,p=e.device,v=e.position,h=e.fetchDevices,w=e.lastSeen,D=e.children,A=(0,c.useState)(!1),N=(0,a.A)(A,2),_=N[0],U=N[1],O=(0,I.useDispatch)(),T={onSuccess:{variant:"info",title:"Updating system",description:"".concat(p.DeviceName," was added to the queue.")}};return s().createElement(d.W,null,s().createElement(g.B,null,s().createElement(l.A,{id:o,isVisible:_,shouldOpen:function(){return U(!0)},shouldClose:function(){return U(!1)},"aria-label":"Alert popover",alertseverityvariant:"danger",headerContent:s().createElement("div",{style:{color:"#c9190b"}}," ",s().createElement(f.Ay,{size:"sm"}),(t=p.DispatcherReason,n=p.DispatcherStatus,s().createElement("span",{className:"pf-u-ml-xs"},t===E?"Playbook error":t===C?"Service timed out":n===S?"Unresponsive":"Unknown"))),icon:"true",variant:"icon",color:"red",position:v,headerComponent:"h6",bodyContent:k(p.DispatcherReason,p.DispatcherStatus,w),footerContent:p.DispatcherStatus!==S?s().createElement(u.$n,{variant:"link",isInline:!0,onClick:function(){(0,y.A)(O,(0,r.A)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Pn)({DevicesUUID:[p.DeviceUUID]});case 2:U(!1),h();case 4:case"end":return e.stop()}}),e)}))),T)}}," ","Retry"," "):""},D)),s().createElement(m.d,null," "))};A.propTypes={id:D().string,lastSeen:D().string,children:D().element,device:D().object,position:D().string,fetchDevices:D().func},A.defaultProps={position:"left",id:"retry-update"};const N=A},36513:(e,t,n)=>{"use strict";n.d(t,{G9:()=>y,Ip:()=>p,J_:()=>v,MH:()=>m,Z5:()=>u,a7:()=>g,d6:()=>I,dW:()=>f,fw:()=>w,iI:()=>b,mF:()=>d,vy:()=>l,ze:()=>h});var r=n(10467),a=n(5544),o=n(54756),i=n.n(o),c=n(83986),s=n(56830),l=function(e){var t={name:e};return s.instance.post("".concat(c.rm,"/images/checkImageName"),t)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,n=void 0===t?10:t,r=e.offset,a=void 0===r?0:r;return s.instance.get("".concat(c.EH,"/activation_keys?limit=").concat(n,"&offset=").concat(a))},d=function(e){var t=e.Id,n=e.name,r=e.version,o=e.description,i=e.release,l=e.architecture,u=e.username,d=e.credentials,m=e.imageType,p=e["selected-packages"],v=e["third-party-repositories"],g=e["custom-packages"],f=e.activationKey,h=m||[],y=(0,a.A)(h,1)[0];m.length>1&&(y="rhel-edge-installer");var b={name:n,version:r,description:o,distribution:i,imageType:y,packages:null==p?void 0:p.map((function(e){return{name:e.name}})),outputTypes:m,commit:{arch:l},installer:{username:u,sshkey:d},thirdPartyRepositories:null==v?void 0:v.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}})),customPackages:null==g?void 0:g.map((function(e){return{Name:e.name}})),activationKey:f},I="".concat(c.rm,"/images");return r>1&&(I+="/".concat(t,"/update")),s.instance.post(I,b)},m=function(e){var t=e.id,n=e.q,r=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,a=(0,c.Lm)(r);return s.instance.get("".concat(c.rm,"/image-sets/").concat(t,"?").concat(a))},p=function(e){var t=e.imageSetID,n=e.query,r=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,a=(0,c.Lm)(r);return s.instance.get("".concat(c.rm,"/image-sets/view/").concat(t,"/versions?").concat(a))},v=function(e){var t=e.id;return s.instance.get("".concat(c.rm,"/image-sets/view/").concat(t))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,c.Lm)(e);return s.instance.get("".concat(c.rm,"/image-sets?").concat(t))},f=function(e){return s.instance.get("".concat(c.rm,"/images/").concat(e,"/status"))},h=function(e){return s.instance.get("".concat(c.rm,"/updates/device/").concat(e,"/image"))},y=function(){var e=(0,r.A)(i().mark((function e(t,n,r){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),e.abrupt("return",(0,s.instance)("".concat(c.hE,"/packages?").concat(a.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(e){var t=e.id;return s.instance.get("".concat(c.rm,"/images/").concat(t,"/details"))},I=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,c.Lm)(t);return s.instance.get("".concat(c.rm,"/image-sets/view?").concat(n))},w=function(e,t){return s.instance.post("".concat(c.gT,"/rpms/names"),{urls:e,search:t})}},71544:(e,t,n)=>{"use strict";n.d(t,{A:()=>g,N:()=>p});var r=n(44914),a=n.n(r),o=n(5556),i=n.n(o),c=n(55639),s=n(45523),l=n(30666),u=n(93973),d=n(51343),m={booting:{text:"Booting",Icon:d.l_.checkCircle,color:d.Fm.green,labelColor:"green"},building:{text:"Image build in progress",Icon:d.l_.inProgress,color:d.Fm.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:d.l_.inProgress,color:d.Fm.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:d.l_.checkCircle,color:d.Fm.green,labelColor:"green"},success:{text:"Ready",Icon:d.l_.checkCircle,color:d.Fm.green,labelColor:"green"},passed:{text:"Passed",Icon:d.l_.checkCircle,color:d.Fm.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:d.l_.exclamationTriangle,color:d.Fm.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:d.l_.inProgress,color:d.Fm.blue,labelColor:"blue"},error:{text:"Error",Icon:d.l_.timesCircle,color:d.Fm.red,labelColor:"red"},default:{text:"Unknown",Icon:d.l_.unknown},interrupted:{text:"Image build in progress",Icon:d.l_.inProgress,color:d.Fm.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:d.l_.exclamationCircle,color:d.Fm.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:d.l_.exclamationCircle,color:d.Fm.red,labelColor:"red"}},p=function(e,t,n){return"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate"},v=function(e){var t=e.id,n=e.type,r=e.isLabel,o=void 0!==r&&r,i=e.toolTipContent,d=void 0===i?"":i,p=e.className,v=void 0===p?"":p,g=e.isLink,f=Object.prototype.hasOwnProperty.call(m,n)?m[n]:m.default,h=f.text,y=f.Icon,b=f.color,I=f.labelColor;return a().createElement(a().Fragment,null,o?a().createElement(c.J,{id:t,color:I,icon:a().createElement(y,null),className:v},h):a().createElement(l.B,{id:t,style:{color:b},className:v},a().createElement(u.o,{className:"pf-u-mr-sm"},d?a().createElement(s.m,{content:"blargh"},a().createElement(y,null)):a().createElement(y,null)),a().createElement(u.o,null,a().createElement("p",{style:g?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},h))))};const g=v;v.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},v.defaultProps={id:"status"}},39440:(e,t,n)=>{"use strict";n.d(t,{Cd:()=>a,QX:()=>o,xo:()=>r});var r="edgeParity.inventory-groups-enabled",a="edge-management.hide_groups_actions",o="platform.rbac.groups-to-workspaces-rename"},30083:(e,t,n)=>{"use strict";n.d(t,{J:()=>r});var r={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",insightsInventory:"/insights/inventory/manage-edge-inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailModal:"/inventory/:deviceId/:modalId",inventoryDetailUpdate:"/inventory/:deviceId/update",insightsInventoryDetailUpdate:"/insights/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources",contentSourcesRepositories:"/preview/insights/content"}},71100:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(64467),a=n(10467),o=n(54756),i=n.n(o),c=n(11830);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u=function(e,t,n,r){var o,s,u,d=null===(o=n)||void 0===o?void 0:o.onSuccess,m=null===(s=n)||void 0===s?void 0:s.onInfo,p=null===(u=n)||void 0===u?void 0:u.onWarning;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});var v=function(){var o=(0,a.A)(i().mark((function a(){var o;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t();case 3:return o=a.sent,m&&(r?r.hasInfo(n.onInfo):e(l({},(0,c.z8)(l({variant:"info"},n.onInfo))))),d&&(r?r.hasSuccess(n.onSuccess):e(l({},(0,c.z8)(l({variant:"success"},n.onSuccess))))),p&&(r?r.hasWarning(n.onWarning):e(l({},(0,c.z8)(l({variant:"warning"},n.onWarning))))),a.abrupt("return",o);case 10:return a.prev=10,a.t0=a.catch(0),r?r.err(n.onError,a.t0):e(l({},(0,c.z8)(l(l({variant:"danger"},n.onError),{},{description:null!==a.t0&&void 0!==a.t0&&a.t0.Title?"".concat(n.onError.description,": ").concat(a.t0.Title):n.onError.description})))),a.abrupt("return",a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return o.apply(this,arguments)}}();return v()}},79826:()=>{},16789:()=>{},95067:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},56905:()=>{},29697:()=>{},26100:()=>{},41069:()=>{},92004:()=>{},86151:()=>{},51225:()=>{},8700:()=>{},1641:()=>{},26078:()=>{},23091:()=>{},97553:()=>{},27077:()=>{},2580:()=>{},83696:()=>{},9417:(e,t,n)=>{"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{A:()=>r})},92901:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(20816);function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(0,r.A)(a.key),a)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},64467:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(20816);function a(e,t,n){return(t=(0,r.A)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},20816:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(82284);function a(e){var t=function(e){if("object"!=(0,r.A)(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=(0,r.A)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==(0,r.A)(t)?t:t+""}}}]);
//# sourceMappingURL=../sourcemaps/5496.ce09e4bd9e820a0537c667beb55eb362.js.map
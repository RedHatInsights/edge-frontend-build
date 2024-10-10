/*! For license information please see 4341.bc9e65f2177b15c4d20a.js.LICENSE.txt */
(self.webpackChunkedge=self.webpackChunkedge||[]).push([[4341],{63767:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var r=n(74848),a=n(93345),o=n.n(a),i=n(59304),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=36e5,c=24*s,u=30*c,p=365*c,d=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},m=[{rightBound:1/0,description:function(e){return d(Math.round(e/p),"year")}},{rightBound:p,description:function(e){return d(Math.round(e/u),"month")}},{rightBound:u,description:function(e){return d(Math.round(e/c),"day")}},{rightBound:c,description:function(e){return d(Math.round(e/s),"hour")}},{rightBound:s,description:function(e){return d(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],g=function(e){return e.toUTCString().split(",")[1].slice(0,-7).trim()},f=function(e){return{exact:function(e){return g(e)+" UTC"},onlyDate:function(e){return g(e).slice(0,-6)},relative:function(e){return m.reduce((function(t,n){return n.rightBound>Date.now()-e.getTime()?n.description(Date.now()-e.getTime()):t}),g(e))},invalid:function(){return"Invalid date"}}[e]},h=function(e,t,n){return{exact:function(t){return f(e)(t)},onlyDate:function(t){return f(e)(t)},relative:function(a){return function(e,t,n,a){return void 0===a&&(a=""),(0,r.jsx)(i.Tooltip,l({},n,{content:(0,r.jsxs)("div",{children:[a,e]}),children:t}))}(f("exact")(a),(0,r.jsx)("span",{children:f(e)(a)}),t,n)},invalid:function(){return"Invalid date"}}[e]};const y=function(e){var t=e.date,n=e.type,a=void 0===n?"relative":n,i=e.extraTitle,l=e.tooltipProps,s=t instanceof Date?t:new Date(t),c=null==t||"Invalid Date"===s.toString()?"invalid":a;return(0,r.jsx)(o().Fragment,{children:h(c,l,i)(s)})}},16594:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(74848),a=n(46942),o=n.n(a),i=n(93345);const l=n.n(i)().createContext("light");var s=n(69),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const u=function(e){var t=e.className,n=e.children,a=e.ouiaId,i=e.ouiaSafe,u=void 0===i||i,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children","ouiaId","ouiaSafe"]),d=o()(t,"pf-v5-l-page-header","pf-v5-c-page-header","pf-v5-l-page__main-section","pf-v5-c-page__main-section"),m="RHI/Header",g=(0,s.useOUIAId)(m,a,u);return(0,r.jsx)(l.Consumer,{children:function(e){var t,a;void 0===e&&(e="light");var i=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((a={})["pf-m-light"]="light"===e,a));return(0,r.jsx)("section",c({"data-ouia-component-type":m,"data-ouia-component-id":g,"data-ouia-safe":u},p,{className:"".concat(d," ").concat(i),"widget-type":"InsightsPageHeader",children:n}))}})}},16401:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(74848),a=n(46942),o=n.n(a),i=n(63068),l=n(69),s=n(86228),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};const u=function(e){var t=e.className,n=e.title,a=e.actionsContent,u=e.ouiaId,p=e.ouiaSafe,d=void 0===p||p,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","title","actionsContent","ouiaId","ouiaSafe"]),g=o()(t),f="RHI/Header",h=(0,l.useOUIAId)(f,u,d);return(0,r.jsxs)(s.Flex,{justifyContent:{default:"justifyContentSpaceBetween"},children:[(0,r.jsx)(s.FlexItem,{className:"pf-v5-u-flex-grow-1",children:(0,r.jsx)(i.Title,c({headingLevel:"h1",size:"2xl",className:g,"widget-type":"InsightsPageHeaderTitle","data-ouia-component-type":f,"data-ouia-component-id":h,"data-ouia-safe":d},m,{children:n}))}),a?(0,r.jsx)(s.FlexItem,{children:a}):null]})}},99:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(93345),a=n.n(r),o=n(50861),i=n(5556),l=n.n(i),s=n(19357),c=n(55833),u=n(7475),p=n(63767),d=n(35725),m=n(78185),g=n(61574),f=n(71519),h=n(57697),y=n(25587),b=n(88993);const v=({index:e})=>a().createElement("div",null,a().createElement(u.Tooltip,{content:a().createElement("div",null,"More options"),triggerRef:()=>document.getElementById(`pf-dropdown-toggle-id-${e}`)}));v.propTypes={index:l().number};const I=[{label:"Name",type:"text"},{label:"Status",type:"checkbox",options:[{option:"Building",value:"BUILDING"},{option:"Created",value:"CREATED"},{option:"Error",value:"ERROR"},{option:"Ready",value:"SUCCESS"}]}],S=[{title:"Name",type:"name",sort:!0,columnTransforms:[(0,d.B)(15)]},{title:"Version",type:"version",sort:!1,columnTransforms:[(0,d.B)(15)]},{title:"Release",type:"distribution",options:b.WT,sort:!1,columnTransforms:[(0,d.B)(15)]},{title:"Target",type:"outputTypes",sort:!1,columnTransforms:[(0,d.B)(15)]},{title:"Status",type:"status",sort:!1,columnTransforms:[(0,d.B)(15)]},{title:"Created/Updated",type:"updated_at",sort:!0,columnTransforms:[(0,d.B)(35)]}],E=(e,t,n,r)=>e.map(((e,o)=>({rowInfo:{id:e?.ID,imageStatus:e?.Status,distribution:e?.Distribution,outputType:e?.OutputTypes,isoURL:e?.ImageBuildIsoURL||null,latestImageID:e?.ImageID},cells:[{title:(0,c.d)({pathname:`${t}/${e?.ID}`,linkText:e?.Name,history:n,navigate:r})},e?.Version,{title:b.WT[e?.Distribution]},2==e?.OutputTypes.length?"Bare Metal Installer":"Update Only",{title:a().createElement(a().Fragment,null,a().createElement(v,{index:o}),a().createElement(h.A,{type:e?.Status.toLowerCase()}))},{title:e?.UpdatedAt?a().createElement(p.A,{date:e?.UpdatedAt}):"Unknown"}]}))),P=({pathPrefix:e,urlName:t,historyProp:n,locationProp:r,navigateProp:i,data:l,count:u,isLoading:p,docLinkProp:d,hasError:h,fetchImageSets:b,openCreateWizard:v,openUpdateWizard:P,hasModalSubmitted:x,setHasModalSubmitted:C})=>{const O=void 0===d?"https://access.redhat.com/documentation/en-us/edge_management/2022/html/create_rhel_for_edge_images_and_configure_automated_management/index":d,{search:w}=r?r():g.zy?(0,g.zy)():null,T=n?n():g.W6?(0,g.W6)():null,k=i?i():f.useNavigate?(0,f.useNavigate)():null,N=(0,y.l)(`edge${s.J.manageImages}`,e,t);return a().createElement(a().Fragment,null,(0,c.Rj)(p,u,w)?a().createElement(m.A,{"data-testid":"general-table-empty-state-no-data",icon:"plus",title:"Create an OSTree image",body:["Image builder is a tool to compose customized RHEL (rpm-ostree) images optimized for Edge. ","With OSTree, you can manage the system software by referencing a central image repository. Images contain a complete operating system ready to be remotely installed at scale. Updates to images are tracked through commits and enable secure updates that only address changes and keep the operating system unchanged. Image updates are quick, and rollbacks are easy."],secondaryActions:[{type:"link",title:"Learn more about OSTree.",link:"https://ostreedev.github.io/ostree/"},{variant:"primary",className:"edge-stretched-button",onClick:()=>v(),type:"button",title:"Create image."},{type:"link",iconPosition:"left",title:"Image builder for OSTree documentation",link:O}]}):a().createElement(o.A,{apiFilterSort:!0,historyProp:n,locationProp:r,navigateProp:i,isUseApi:!0,filters:I,loadTableData:b,tableData:{count:u,data:l,isLoading:p,hasError:h},columnNames:S,rows:l?E(l,N,T,k):[],actionResolver:e=>{const t=[];return e.rowInfo?.isoURL&&t.push({title:"Download",onClick:(e,t,n)=>{window.open(n.rowInfo?.isoURL)}}),"SUCCESS"!==e.rowInfo?.imageStatus&&"ERROR"!==e.rowInfo?.imageStatus||t.push({title:"Update Image",onClick:(e,t,n)=>{P(n.rowInfo?.latestImageID)}}),"BUILDING"===e.rowInfo?.imageStatus&&e.rowInfo?.id&&t.push({title:""}),t},areActionsDisabled:e=>"BUILDING"===e.rowInfo?.imageStatus,defaultSort:{index:5,direction:"desc"},toolbarButtons:[{title:"Create new image",click:()=>v()}],hasModalSubmitted:x,setHasModalSubmitted:C}))};P.propTypes={pathPrefix:l().string,urlName:l().string,historyProp:l().func,locationProp:l().func,navigateProp:l().func,data:l().array,count:l().number,isLoading:l().bool,hasError:l().bool,fetchImageSets:l().func,clearFilters:l().func,openCreateWizard:l().func,openUpdateWizard:l().func,filters:l().array,pagination:l().shape({page:l().number,perPage:l().number}),hasModalSubmitted:l().bool,setHasModalSubmitted:l().func,docLinkProp:l().string};const x=P},84341:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(93345),a=n.n(r),o=n(80475),i=n(11879),l=n(16594),s=n(16401),c=n(20881),u=n(61574),p=n(71519),d=n(99),m=n(55833),g=n(66171),f=n(78259),h=n(5556),y=n.n(h);const b=a().lazy((()=>Promise.all([n.e(6863),n.e(5729),n.e(5464),n.e(4171),n.e(2359),n.e(3780),n.e(1657),n.e(3419),n.e(7179),n.e(8297),n.e(183),n.e(3567),n.e(6503)]).then(n.bind(n,62217)))),v=a().lazy((()=>Promise.all([n.e(6863),n.e(5729),n.e(5464),n.e(4171),n.e(2359),n.e(3780),n.e(1657),n.e(3419),n.e(6959),n.e(7179),n.e(8297),n.e(183),n.e(3567),n.e(7154)]).then(n.bind(n,23114)))),I=({pathPrefix:e,urlName:t,historyProp:n,locationProp:h,navigateProp:y,docLinkProp:I,notificationProp:S,showHeaderProp:E})=>{const P=(0,c.A)(),x=n?n():u.W6?(0,u.W6)():null,C=y?y():p.useNavigate?(0,p.useNavigate)():null,{pathname:O,search:w}=h?h():(0,u.zy)(),T=void 0===E||E,[k,N]=(0,f.A)({api:g.d6,tableReload:!0}),{data:_,isLoading:j,hasError:A}=k,[U,D]=(0,r.useState)(!1),[B,L]=(0,r.useState)({isOpen:!1,imageId:null}),[R,F]=(0,r.useState)(!1),H={pathname:O,search:(0,m.AH)("create_image=true",!0,w)},W={pathname:O,search:(0,m.AH)("update_image=true",!0,w)},z=async()=>{await N(),F(!0)};return(0,r.useEffect)((()=>{P?.updateDocumentTitle?.("Images")}),[P]),a().createElement(r.Fragment,null,T&&a().createElement(l.A,{className:"pf-m-light"},a().createElement(s.A,{title:"Images"})),a().createElement("section",{className:"edge-images pf-l-page__main-section pf-c-page__main-section"},a().createElement(d.default,{pathPrefix:e,urlName:t,historyProp:n,locationProp:h,navigateProp:y,data:_?.data||[],count:_?.count,isLoading:j,hasError:A,fetchImageSets:N,docLinkProp:I,openCreateWizard:()=>{y?C({...H,replace:!0}):x.push({...H}),D(!0)},openUpdateWizard:e=>{y?C({...W,replace:!0}):x.push({...W}),L({isOpen:!0,imageId:e})},hasModalSubmitted:R,setHasModalSubmitted:F})),U&&a().createElement(r.Suspense,{fallback:a().createElement(i.Bullseye,null,a().createElement(o.Spinner,null))},a().createElement(b,{navigateBack:()=>{y?C({...H,replace:!0}):x.push({pathname:O,search:(0,m.AH)("create_image=true",!1,w)}),D(!1)},reload:z,notificationProp:S,locationProp:h})),B.isOpen&&a().createElement(r.Suspense,{fallback:a().createElement(i.Bullseye,null,a().createElement(o.Spinner,null))},a().createElement(v,{navigateBack:()=>{y?C({...W,replace:!0}):x.push({pathname:O,search:(0,m.AH)("update_image=true",!1,w)}),L((e=>({...e,isOpen:!1})))},reload:z,updateImageID:B.imageId,notificationProp:S,locationProp:h})))};I.propTypes={pathPrefix:y().string,urlName:y().string,historyProp:y().func,locationProp:y().func,navigateProp:y().func,notificationProp:y().object,showHeaderProp:y().bool,docLinkProp:y().string};const S=I},25587:(e,t,n)=>{"use strict";n.d(t,{E:()=>a,l:()=>r});const r=(e,t,n)=>{let r=e;if(t||n){let e=[];t&&e.push(t),n&&e.push(n),r=e.join("/")}return r},a=(e,t)=>!t||e.startsWith(t)?e:t.endsWith("/")||e.startsWith("/")?[t,e].join(""):[t,e].join("/")},57697:(e,t,n)=>{"use strict";n.d(t,{A:()=>g,N:()=>d});var r=n(93345),a=n.n(r),o=n(5556),i=n.n(o),l=n(53707),s=n(7475),c=n(6961),u=n(88993);const p={booting:{text:"Booting",Icon:u.l_.checkCircle,color:u.Fm.green,labelColor:"green"},building:{text:"Image build in progress",Icon:u.l_.inProgress,color:u.Fm.blue,labelColor:"blue"},created:{text:"Image build in progress",Icon:u.l_.inProgress,color:u.Fm.blue,labelColor:"blue"},upToDate:{text:"Up to date",Icon:u.l_.checkCircle,color:u.Fm.green,labelColor:"green"},success:{text:"Ready",Icon:u.l_.checkCircle,color:u.Fm.green,labelColor:"green"},passed:{text:"Passed",Icon:u.l_.checkCircle,color:u.Fm.green,labelColor:"green"},updateAvailable:{text:"Update available",Icon:u.l_.exclamationTriangle,color:u.Fm.yellow,labelColor:"orange"},updating:{text:"Updating",Icon:u.l_.inProgress,color:u.Fm.blue,labelColor:"blue"},error:{text:"Error",Icon:u.l_.timesCircle,color:u.Fm.red,labelColor:"red"},default:{text:"Unknown",Icon:u.l_.unknown},interrupted:{text:"Image build in progress",Icon:u.l_.inProgress,color:u.Fm.blue,labelColor:"blue"},unresponsive:{text:"Unresponsive",Icon:u.l_.exclamationCircle,color:u.Fm.red,labelColor:"red"},errorWithExclamationCircle:{text:"Error",Icon:u.l_.exclamationCircle,color:u.Fm.red,labelColor:"red"}},d=(e,t,n)=>"ERROR"===n?"error":"UNRESPONSIVE"===n?"unresponsive":"UPDATING"===e?"updating":t?"updateAvailable":"upToDate",m=({id:e,type:t,isLabel:n=!1,toolTipContent:r="",className:o="",isLink:i})=>{const{text:u,Icon:d,color:m,labelColor:g}=Object.prototype.hasOwnProperty.call(p,t)?p[t]:p.default;return a().createElement(a().Fragment,null,n?a().createElement(l.Label,{id:e,color:g,icon:a().createElement(d,null),className:o},u):a().createElement(c.Split,{id:e,style:{color:m},className:o},a().createElement(c.SplitItem,{className:"pf-u-mr-sm"},r?a().createElement(s.Tooltip,{content:"blargh"},a().createElement(d,null)):a().createElement(d,null)),a().createElement(c.SplitItem,null,a().createElement("p",{style:i?{textDecoration:" grey dotted underline",cursor:"pointer"}:{}},u))))},g=m;m.propTypes={id:i().string,type:i().string,isLabel:i().bool,toolTipContent:i().string,className:i().string,isLink:i().bool},m.defaultProps={id:"status"}},78259:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(11830),a=n(93345),o=n(36870);const i=({api:e,id:t=null,statusMessages:n,tableReload:i=!1})=>{const l=(0,o.wA)(),[s,c]=(0,a.useState)([]),[u,p]=(0,a.useState)(!0),[d,m]=(0,a.useState)(!1),[g,f]=(0,a.useState)((()=>e)),h=n?.onSuccess;n||(n={onSuccess:{title:"Success",description:"The request has been made successfully"},onError:{title:"Error",description:"An error occurred making the request"}});const y=async(e="")=>{p(!0);try{const a=await g({id:t,query:e});c(a),h&&l({...(0,r.z8)({variant:"success",...n.onSuccess})})}catch(e){m(!0),l({...(0,r.z8)({variant:"danger",...n.onError})})}finally{p(!1)}};return(0,a.useEffect)((()=>{i||y()}),[]),[{data:s,isLoading:u,hasError:d},y,g,f]}},46942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);
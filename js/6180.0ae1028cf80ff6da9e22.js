(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[6180,5151],{3025:(e,t,n)=>{"use strict";n.d(t,{b:()=>l});var o=n(70655),r=n(92950),a=n(95285),i=n(38296);const l=e=>{var{children:t=null,className:n}=e,l=(0,o.__rest)(e,["children","className"]);return r.createElement("dd",Object.assign({className:(0,i.i)(a.Z.descriptionListDescription,n)},l),r.createElement("div",{className:"pf-c-description-list__text"},t))};l.displayName="DescriptionListDescription"},58844:(e,t,n)=>{"use strict";n.d(t,{g:()=>l});var o=n(70655),r=n(92950),a=n(95285),i=n(38296);const l=e=>{var{className:t,children:n}=e,l=(0,o.__rest)(e,["className","children"]);return r.createElement("div",Object.assign({className:(0,i.i)(a.Z.descriptionListGroup,t)},l),n)};l.displayName="DescriptionListGroup"},48761:(e,t,n)=>{"use strict";n.d(t,{H:()=>l});var o=n(70655),r=n(92950),a=n(95285),i=n(38296);const l=e=>{var{children:t,className:n}=e,l=(0,o.__rest)(e,["children","className"]);return r.createElement("dt",Object.assign({className:(0,i.i)(a.Z.descriptionListTerm,n)},l),t)};l.displayName="DescriptionListTermHelpText"},46043:(e,t,n)=>{"use strict";n.d(t,{J:()=>$,I:()=>W});var o=n(70655),r=n(92950),a=n(1774);n(91993);const i="pf-m-no-padding",l="pf-m-width-auto",s="pf-m-top",c="pf-m-top-left",p="pf-m-top-right",d="pf-m-bottom",m="pf-m-bottom-left",u="pf-m-bottom-right",f="pf-m-left",v="pf-m-left-top",h="pf-m-left-bottom",g="pf-m-right",y="pf-m-right-top",C="pf-m-right-bottom",b="pf-m-danger",O="pf-m-warning",N="pf-m-success",_="pf-m-default",I="pf-m-info",x="pf-m-icon";var E=n(38296);const S=r.createContext({}),T=e=>{var{className:t=null,children:n}=e,a=(0,o.__rest)(e,["className","children"]);return r.createElement("div",Object.assign({className:(0,E.i)("pf-c-popover__content",t)},a),n)};T.displayName="PopoverContent";const L=e=>{var{children:t,id:n,className:a}=e,i=(0,o.__rest)(e,["children","id","className"]);return r.createElement("div",Object.assign({className:(0,E.i)("pf-c-popover__body",a),id:n},i),t)};L.displayName="PopoverBody";var D=n(38779);const w=e=>{var{children:t,className:n}=e,a=(0,o.__rest)(e,["children","className"]);return r.createElement("span",Object.assign({className:(0,E.i)("pf-c-popover__title-icon",n)},a),t)};w.displayName="PopoverHeaderIcon";const P=e=>{var{children:t,className:n}=e,a=(0,o.__rest)(e,["children","className"]);return r.createElement("span",Object.assign({className:(0,E.i)("pf-c-popover__title-text",n)},a),t)};P.displayName="PopoverHeaderText";const M=e=>{var{children:t,icon:n,className:a,titleHeadingLevel:i="h6",alertSeverityVariant:l,id:s,alertSeverityScreenReaderText:c}=e,p=(0,o.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);const d=i;return n||l?r.createElement("header",Object.assign({className:(0,E.i)("pf-c-popover__header",a),id:s},p),r.createElement(d,{className:(0,E.i)("pf-c-popover__title",n&&x)},n&&r.createElement(w,null,n),l&&c&&r.createElement("span",{className:"pf-u-screen-reader"},c),r.createElement(P,null,t))):r.createElement(D.D,Object.assign({headingLevel:i,size:D.H.md,id:s,className:a},p),t)};M.displayName="PopoverHeader";const z=e=>{var{children:t,className:n=""}=e,a=(0,o.__rest)(e,["children","className"]);return r.createElement("footer",Object.assign({className:(0,E.i)("pf-c-popover__footer",n)},a),t)};z.displayName="PopoverFooter";var j=n(47173),F=n(24307);const Z=e=>{var{onClose:t=(()=>{})}=e,n=(0,o.__rest)(e,["onClose"]);return r.createElement(j.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},n,{style:{pointerEvents:"auto"}}),r.createElement(F.ZP,null))};Z.displayName="PopoverCloseButton";const k=e=>{var{className:t=""}=e,n=(0,o.__rest)(e,["className"]);return r.createElement("div",Object.assign({className:(0,E.i)("pf-c-popover__arrow",t)},n))};k.displayName="PopoverArrow";const H={name:"--pf-c-popover--MaxWidth",value:"none",var:"var(--pf-c-popover--MaxWidth)"},R={name:"--pf-c-popover--MinWidth",value:"auto",var:"var(--pf-c-popover--MinWidth)"};var W,A=n(73631),V=n(16438),B=n(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(W||(W={}));const U={default:_,info:I,success:N,warning:O,danger:b},$=e=>{var{children:t,position:n="top",enableFlip:b=!0,className:O="",isVisible:N=null,shouldClose:_=(()=>null),shouldOpen:I=(()=>null),"aria-label":x="",bodyContent:D,headerContent:w=null,headerComponent:P="h6",headerIcon:j=null,alertSeverityVariant:F,alertSeverityScreenReaderText:W,footerContent:$=null,appendTo:G=(()=>document.body),hideOnOutsideClick:K=!0,onHide:X=(()=>null),onHidden:J=(()=>null),onShow:q=(()=>null),onShown:Q=(()=>null),onMount:Y=(()=>null),zIndex:ee=9999,minWidth:te=R&&R.value,maxWidth:ne=H&&H.value,closeBtnAriaLabel:oe="Close",showClose:re=!0,distance:ae=25,flipBehavior:ie=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:se,withFocusTrap:ce,boundary:pe,tippyProps:de,reference:me,hasNoPadding:ue=!1,hasAutoWidth:fe=!1,removeFindDomNode:ve=!1}=e,he=(0,o.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","boundary","tippyProps","reference","hasNoPadding","hasAutoWidth","removeFindDomNode"]);const ge=se||(0,B.Ki)(),ye=null!==N,[Ce,be]=r.useState(!1),[Oe,Ne]=r.useState(0),[_e,Ie]=r.useState(Boolean(ce)),xe=r.useRef(null),Ee=r.useRef(null),Se=r.useRef(null);r.useEffect((()=>{Y()}),[]),r.useEffect((()=>{ye&&(N?Te():Le())}),[N,ye]);const Te=e=>{q(),xe.current&&clearTimeout(xe.current),Se.current&&clearTimeout(Se.current),Ee.current=setTimeout((()=>{be(!0),Ne(1),!1!==ce&&e&&Ie(!0),Q()}),0)},Le=()=>{X(),Ee.current&&clearTimeout(Ee.current),Se.current=setTimeout((()=>{be(!1),Ne(0),Ie(!1),xe.current=setTimeout((()=>{J()}),le)}),0)},De={top:s,bottom:d,left:f,right:g,"top-start":c,"top-end":p,"bottom-start":m,"bottom-end":u,"left-start":v,"left-end":h,"right-start":y,"right-end":C},we=te!==R.value,Pe=ne!==H.value,Me=r.createElement(A.i,Object.assign({active:_e,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,E.i)("pf-c-popover",F&&U[F],ue&&i,fe&&l,O),role:"dialog","aria-modal":"true","aria-label":w?void 0:x,"aria-labelledby":w?`popover-${ge}-header`:void 0,"aria-describedby":`popover-${ge}-body`,onMouseDown:()=>{_e&&Ie(!1)},style:{minWidth:we?te:null,maxWidth:Pe?ne:null,opacity:Oe,transition:(0,V.K)(le)}},he),r.createElement(k,null),r.createElement(T,null,re&&r.createElement(Z,{onClose:e=>{e.stopPropagation(),ye?_(null,Le,e):Le()},"aria-label":oe}),w&&r.createElement(M,{id:`popover-${ge}-header`,icon:j,alertSeverityVariant:F,alertSeverityScreenReaderText:W||`${F} alert:`,titleHeadingLevel:P},"function"==typeof w?w(Le):w),r.createElement(L,{id:`popover-${ge}-body`},"function"==typeof D?D(Le):D),$&&r.createElement(z,{id:`popover-${ge}-footer`},"function"==typeof $?$(Le):$)));return r.createElement(S.Provider,{value:{headerComponent:P}},r.createElement(V.r,{trigger:t,reference:me,popper:Me,popperMatchesTriggerWidth:!1,appendTo:G,isVisible:Ce,positionModifiers:De,distance:ae,placement:n,onTriggerClick:e=>{ye?Ce?_(null,Le,e):I(Te,e):Ce?Le():Te(!0)},onDocumentClick:(e,t,n)=>{if(K&&Ce){if(n&&n.contains(e.target))return;ye?_(null,Le,e):Le()}},onDocumentKeyDown:e=>{e.key===a.yu.Escape&&Ce&&(ye?_(null,Le,e):Le())},enableFlip:b,zIndex:ee,flipBehavior:ie,removeFindDomNode:ve}))};$.displayName="Popover"},34143:(e,t,n)=>{"use strict";n.d(t,{Dk:()=>a,Er:()=>r,ZP:()=>i});var o=n(40400);const r={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},a=(0,o.IU)(r),i=a},68778:(e,t,n)=>{"use strict";n.d(t,{GR:()=>r,ZP:()=>i,rE:()=>a});var o=n(40400);const r={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},a=(0,o.IU)(r),i=a},43047:(e,t,n)=>{"use strict";n.d(t,{$O:()=>a,MX:()=>r,ZP:()=>i});var o=n(40400);const r={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,o.IU)(r),i=a},69957:(e,t,n)=>{"use strict";n.d(t,{LP:()=>a,RI:()=>r,ZP:()=>i});var o=n(40400);const r={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,o.IU)(r),i=a},95285:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o}),n(27567);const o={card:"pf-c-card",descriptionList:"pf-c-description-list",descriptionListDescription:"pf-c-description-list__description",descriptionListGroup:"pf-c-description-list__group",descriptionListTerm:"pf-c-description-list__term",descriptionListTermIcon:"pf-c-description-list__term-icon",descriptionListText:"pf-c-description-list__text",modifiers:{inlineGrid:"pf-m-inline-grid",autoColumnWidths:"pf-m-auto-column-widths",autoFit:"pf-m-auto-fit",compact:"pf-m-compact",fluid:"pf-m-fluid",fillColumns:"pf-m-fill-columns",displayLg:"pf-m-display-lg",display_2xl:"pf-m-display-2xl",helpText:"pf-m-help-text","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col",horizontal:"pf-m-horizontal",vertical:"pf-m-vertical","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl"}}},17558:(e,t,n)=>{"use strict";n.d(t,{Dv:()=>r,Kf:()=>a,wt:()=>i});var o="@@INSIGHTS-CORE/NOTIFICATIONS/",r="".concat(o,"ADD_NOTIFICATION"),a="".concat(o,"REMOVE_NOTIFICATION"),i="".concat(o,"CLEAR_NOTIFICATIONS")},21458:(e,t,n)=>{"use strict";n.d(t,{FV:()=>i,L1:()=>l,wN:()=>a});var o=n(17558),r=function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},a=function(e){return{type:o.Dv,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},i=function(e){return{type:o.Kf,payload:e}},l=function(){return{type:o.wt}}},83215:(e,t,n)=>{"use strict";n.d(t,{wN:()=>r.wN,ee:()=>l});var o=n(17558),r=n(21458),a=function(e,t,n){if(n||2===arguments.length)for(var o,r=0,a=t.length;r<a;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},i=[];const l=function(e,t){switch(void 0===e&&(e=i),t.type){case o.Dv:return function(e,t){var n=t.payload;return a(a([],e,!0),[n],!1)}(e,t);case o.Kf:return function(e,t){var n=t.payload,o=e.findIndex((function(e){return e.id===n}));return a(a([],e.slice(0,o),!0),e.slice(o+1),!0)}(e,t);case o.wt:return[];default:return e}}},9192:(e,t,n)=>{"use strict";n.d(t,{_:()=>o});var o={groups:"/groups",groupsDetail:"/groups/:uuid",deviceDetail:"/groups/:uuid/:inventoryId",canaries:"/canaries",fleetManagement:"/fleet-management",fleetManagementDetail:"/fleet-management/:groupId",fleetManagementSystemDetail:"/fleet-management/:groupId/systems/:deviceId",fleetManagementSystemDetailUpdate:"/fleet-management/:groupId/systems/:deviceId/update",inventory:"/inventory",insightsInventory:"/insights/inventory/manage-edge-inventory",inventoryDetail:"/inventory/:deviceId",inventoryDetailUpdate:"/inventory/:deviceId/update",insightsInventoryDetailUpdate:"/insights/inventory/:deviceId/update",manageImages:"/manage-images",manageImagesDetail:"/manage-images/:imageId",manageImagesDetailVersion:"/manage-images/:imageId/versions/:imageVersionId",repositories:"/repositories",learningResources:"/learning-resources",contentSourcesRepositories:"/preview/insights/content"}},45467:()=>{},11452:()=>{},34946:()=>{},66822:()=>{},49854:()=>{},4942:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(49142);function r(e,t,n){return(t=(0,o.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},49142:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(71002);function r(e){var t=function(e,t){if("object"!==(0,o.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==(0,o.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,o.Z)(t)?t:String(t)}}}]);
//# sourceMappingURL=../sourcemaps/6180.94a5d806a9651e665ed2a2f3e8df98ec.js.map
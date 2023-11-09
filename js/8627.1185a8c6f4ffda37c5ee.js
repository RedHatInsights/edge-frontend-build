"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[8627],{46043:(e,t,n)=>{n.d(t,{J:()=>K,I:()=>W});var r=n(70655),a=n(92950),o=n(1774);n(91993);const i="pf-m-no-padding",l="pf-m-width-auto",c="pf-m-top",s="pf-m-top-left",d="pf-m-top-right",p="pf-m-bottom",u="pf-m-bottom-left",m="pf-m-bottom-right",f="pf-m-left",v="pf-m-left-top",h="pf-m-left-bottom",b="pf-m-right",g="pf-m-right-top",y="pf-m-right-bottom",C="pf-m-danger",N="pf-m-warning",O="pf-m-success",E="pf-m-default",_="pf-m-info",S="pf-m-icon";var w=n(38296);const T=a.createContext({}),I=e=>{var{className:t=null,children:n}=e,o=(0,r.__rest)(e,["className","children"]);return a.createElement("div",Object.assign({className:(0,w.i)("pf-c-popover__content",t)},o),n)};I.displayName="PopoverContent";const P=e=>{var{children:t,id:n,className:o}=e,i=(0,r.__rest)(e,["children","id","className"]);return a.createElement("div",Object.assign({className:(0,w.i)("pf-c-popover__body",o),id:n},i),t)};P.displayName="PopoverBody";var x=n(38779);const D=e=>{var{children:t,className:n}=e,o=(0,r.__rest)(e,["children","className"]);return a.createElement("span",Object.assign({className:(0,w.i)("pf-c-popover__title-icon",n)},o),t)};D.displayName="PopoverHeaderIcon";const L=e=>{var{children:t,className:n}=e,o=(0,r.__rest)(e,["children","className"]);return a.createElement("span",Object.assign({className:(0,w.i)("pf-c-popover__title-text",n)},o),t)};L.displayName="PopoverHeaderText";const M=e=>{var{children:t,icon:n,className:o,titleHeadingLevel:i="h6",alertSeverityVariant:l,id:c,alertSeverityScreenReaderText:s}=e,d=(0,r.__rest)(e,["children","icon","className","titleHeadingLevel","alertSeverityVariant","id","alertSeverityScreenReaderText"]);const p=i;return n||l?a.createElement("header",Object.assign({className:(0,w.i)("pf-c-popover__header",o),id:c},d),a.createElement(p,{className:(0,w.i)("pf-c-popover__title",n&&S)},n&&a.createElement(D,null,n),l&&s&&a.createElement("span",{className:"pf-u-screen-reader"},s),a.createElement(L,null,t))):a.createElement(x.D,Object.assign({headingLevel:i,size:x.H.md,id:c,className:o},d),t)};M.displayName="PopoverHeader";const F=e=>{var{children:t,className:n=""}=e,o=(0,r.__rest)(e,["children","className"]);return a.createElement("footer",Object.assign({className:(0,w.i)("pf-c-popover__footer",n)},o),t)};F.displayName="PopoverFooter";var j=n(47173),k=n(24307);const z=e=>{var{onClose:t=(()=>{})}=e,n=(0,r.__rest)(e,["onClose"]);return a.createElement(j.zx,Object.assign({onClick:t,variant:"plain","aria-label":!0},n,{style:{pointerEvents:"auto"}}),a.createElement(k.ZP,null))};z.displayName="PopoverCloseButton";const A=e=>{var{className:t=""}=e,n=(0,r.__rest)(e,["className"]);return a.createElement("div",Object.assign({className:(0,w.i)("pf-c-popover__arrow",t)},n))};A.displayName="PopoverArrow";const H={name:"--pf-c-popover--MaxWidth",value:"none",var:"var(--pf-c-popover--MaxWidth)"},R={name:"--pf-c-popover--MinWidth",value:"auto",var:"var(--pf-c-popover--MinWidth)"};var W,Z=n(73631),V=n(16438),B=n(80164);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(W||(W={}));const $={default:E,info:_,success:O,warning:N,danger:C},K=e=>{var{children:t,position:n="top",enableFlip:C=!0,className:N="",isVisible:O=null,shouldClose:E=(()=>null),shouldOpen:_=(()=>null),"aria-label":S="",bodyContent:x,headerContent:D=null,headerComponent:L="h6",headerIcon:j=null,alertSeverityVariant:k,alertSeverityScreenReaderText:W,footerContent:K=null,appendTo:U=(()=>document.body),hideOnOutsideClick:G=!0,onHide:J=(()=>null),onHidden:X=(()=>null),onShow:q=(()=>null),onShown:Q=(()=>null),onMount:Y=(()=>null),zIndex:ee=9999,minWidth:te=R&&R.value,maxWidth:ne=H&&H.value,closeBtnAriaLabel:re="Close",showClose:ae=!0,distance:oe=25,flipBehavior:ie=["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],animationDuration:le=300,id:ce,withFocusTrap:se,boundary:de,tippyProps:pe,reference:ue,hasNoPadding:me=!1,hasAutoWidth:fe=!1,removeFindDomNode:ve=!1}=e,he=(0,r.__rest)(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","headerComponent","headerIcon","alertSeverityVariant","alertSeverityScreenReaderText","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","showClose","distance","flipBehavior","animationDuration","id","withFocusTrap","boundary","tippyProps","reference","hasNoPadding","hasAutoWidth","removeFindDomNode"]);const be=ce||(0,B.Ki)(),ge=null!==O,[ye,Ce]=a.useState(!1),[Ne,Oe]=a.useState(0),[Ee,_e]=a.useState(Boolean(se)),Se=a.useRef(null),we=a.useRef(null),Te=a.useRef(null);a.useEffect((()=>{Y()}),[]),a.useEffect((()=>{ge&&(O?Ie():Pe())}),[O,ge]);const Ie=e=>{q(),Se.current&&clearTimeout(Se.current),Te.current&&clearTimeout(Te.current),we.current=setTimeout((()=>{Ce(!0),Oe(1),!1!==se&&e&&_e(!0),Q()}),0)},Pe=()=>{J(),we.current&&clearTimeout(we.current),Te.current=setTimeout((()=>{Ce(!1),Oe(0),_e(!1),Se.current=setTimeout((()=>{X()}),le)}),0)},xe={top:c,bottom:p,left:f,right:b,"top-start":s,"top-end":d,"bottom-start":u,"bottom-end":m,"left-start":v,"left-end":h,"right-start":g,"right-end":y},De=te!==R.value,Le=ne!==H.value,Me=a.createElement(Z.i,Object.assign({active:Ee,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"},fallbackFocus:()=>{let e=null;return document&&document.activeElement&&(e=document.activeElement),e}},preventScrollOnDeactivate:!0,className:(0,w.i)("pf-c-popover",k&&$[k],me&&i,fe&&l,N),role:"dialog","aria-modal":"true","aria-label":D?void 0:S,"aria-labelledby":D?`popover-${be}-header`:void 0,"aria-describedby":`popover-${be}-body`,onMouseDown:()=>{Ee&&_e(!1)},style:{minWidth:De?te:null,maxWidth:Le?ne:null,opacity:Ne,transition:(0,V.K)(le)}},he),a.createElement(A,null),a.createElement(I,null,ae&&a.createElement(z,{onClose:e=>{e.stopPropagation(),ge?E(null,Pe,e):Pe()},"aria-label":re}),D&&a.createElement(M,{id:`popover-${be}-header`,icon:j,alertSeverityVariant:k,alertSeverityScreenReaderText:W||`${k} alert:`,titleHeadingLevel:L},"function"==typeof D?D(Pe):D),a.createElement(P,{id:`popover-${be}-body`},"function"==typeof x?x(Pe):x),K&&a.createElement(F,{id:`popover-${be}-footer`},"function"==typeof K?K(Pe):K)));return a.createElement(T.Provider,{value:{headerComponent:L}},a.createElement(V.r,{trigger:t,reference:ue,popper:Me,popperMatchesTriggerWidth:!1,appendTo:U,isVisible:ye,positionModifiers:xe,distance:oe,placement:n,onTriggerClick:e=>{ge?ye?E(null,Pe,e):_(Ie,e):ye?Pe():Ie(!0)},onDocumentClick:(e,t,n)=>{if(G&&ye){if(n&&n.contains(e.target))return;ge?E(null,Pe,e):Pe()}},onDocumentKeyDown:e=>{e.key===o.yu.Escape&&ye&&(ge?E(null,Pe,e):Pe())},enableFlip:C,zIndex:ee,flipBehavior:ie,removeFindDomNode:ve}))};K.displayName="Popover"},34143:(e,t,n)=>{n.d(t,{Dk:()=>o,Er:()=>a,ZP:()=>i});var r=n(40400);const a={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},68778:(e,t,n)=>{n.d(t,{GR:()=>a,ZP:()=>i,rE:()=>o});var r=n(40400);const a={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},43047:(e,t,n)=>{n.d(t,{$O:()=>o,MX:()=>a,ZP:()=>i});var r=n(40400);const a={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},69957:(e,t,n)=>{n.d(t,{LP:()=>o,RI:()=>a,ZP:()=>i});var r=n(40400);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},o=(0,r.IU)(a),i=o},17558:(e,t,n)=>{n.d(t,{Dv:()=>a,Kf:()=>o,wt:()=>i});var r="@@INSIGHTS-CORE/NOTIFICATIONS/",a="".concat(r,"ADD_NOTIFICATION"),o="".concat(r,"REMOVE_NOTIFICATION"),i="".concat(r,"CLEAR_NOTIFICATIONS")},21458:(e,t,n)=>{n.d(t,{FV:()=>i,L1:()=>l,wN:()=>o});var r=n(17558),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},o=function(e){return{type:r.Dv,payload:a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},i=function(e){return{type:r.Kf,payload:e}},l=function(){return{type:r.wt}}},83215:(e,t,n)=>{n.d(t,{wN:()=>a.wN,ee:()=>l});var r=n(17558),a=n(21458),o=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},i=[];const l=function(e,t){switch(void 0===e&&(e=i),t.type){case r.Dv:return function(e,t){var n=t.payload;return o(o([],e,!0),[n],!1)}(e,t);case r.Kf:return function(e,t){var n=t.payload,r=e.findIndex((function(e){return e.id===n}));return o(o([],e.slice(0,r),!0),e.slice(r+1),!0)}(e,t);case r.wt:return[];default:return e}}},4942:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(49142);function a(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},49142:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(71002);function a(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t);if("object"!==(0,r.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}}}]);
//# sourceMappingURL=../sourcemaps/8627.4a932166f8edeb78fb7b9e3fc67ff3d7.js.map
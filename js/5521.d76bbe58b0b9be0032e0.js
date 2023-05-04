/*! For license information please see 5521.d76bbe58b0b9be0032e0.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[5521,5697],{73631:(e,t,n)=>{"use strict";n.d(t,{i:()=>x});var r=n(70655),o=n(92950),a=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=a.join(","),c="undefined"==typeof Element,s=c?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=!c&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},l=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i));return t&&s.call(e,i)&&r.unshift(e),r.filter(n)},f=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var c=a.shift();if("SLOT"===c.tagName){var u=c.assignedElements(),l=e(u.length?u:c.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scope:c,candidates:l})}else{s.call(c,i)&&r.filter(c)&&(n||!t.includes(c))&&o.push(c);var f=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),p=!r.shadowRootFilter||r.shadowRootFilter(c);if(f&&p){var d=e(!0===f?c.children:f.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scope:c,candidates:d})}else a.unshift.apply(a,c.children)}}return o},p=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},d=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},v=function(e){return"INPUT"===e.tagName},b=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},h=function(e,t){return!(t.disabled||function(e){return v(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=s.call(e,"details>summary:first-of-type")?e.parentElement:e;if(s.call(o,"details:not([open]) *"))return!0;var a=u(e).host,i=(null==a?void 0:a.ownerDocument.contains(a))||e.ownerDocument.contains(e);if(n&&"full"!==n){if("non-zero-area"===n)return b(e)}else{if("function"==typeof r){for(var c=e;e;){var l=e.parentElement,f=u(e);if(l&&!l.shadowRoot&&!0===r(l))return b(e);e=e.assignedSlot?e.assignedSlot:l||f===e.ownerDocument?l:f.host}e=c}if(i)return!e.getClientRects().length}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!s.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(function(e){return function(e){return v(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||u(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(t)||p(t)<0||!h(e,t))},y=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},g=function e(t){var n=[],r=[];return t.forEach((function(t,o){var a=!!t.scope,i=a?t.scope:t,c=p(i,a),s=a?e(t.candidates):i;0===c?a?n.push.apply(n,s):n.push(i):r.push({documentOrder:o,tabIndex:c,item:t,isScope:a,content:s})})),r.sort(d).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},O=function(e,t){var n;return n=(t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:y}):l(e,t.includeContainer,m.bind(null,t)),g(n)},w=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==s.call(e,i)&&m(t,e)},E=a.concat("iframe").join(","),C=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==s.call(e,E)&&h(t,e)};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R,D=(R=[],{activateTrap:function(e){if(R.length>0){var t=R[R.length-1];t!==e&&t.pause()}var n=R.indexOf(e);-1===n||R.splice(n,1),R.push(e)},deactivateTrap:function(e){var t=R.indexOf(e);-1!==t&&R.splice(t,1),R.length>0&&R[R.length-1].unpause()}}),F=function(e){return setTimeout(e,0)},I=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},P=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target};class L extends o.Component{constructor(e){super(e),this.divRef=this.props.innerRef||o.createRef(),"undefined"!=typeof document&&(this.previouslyFocusedElement=document.activeElement)}componentDidMount(){var e,t,n,r,o,a,i,c,s,u,p,d,v,b,m,y,g,E,T;this.focusTrap=(e=this.divRef.current,t=Object.assign(Object.assign({},this.props.focusTrapOptions),{returnFocusOnDeactivate:!1}),r=(null==t?void 0:t.document)||document,o=S({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},i=function(e,t,n){return e&&void 0!==e[t]?e[t]:o[n||t]},c=function(e){return a.containerGroups.findIndex((function(t){var n=t.container,r=t.tabbableNodes;return n.contains(e)||r.find((function(t){return t===e}))}))},s=function(e){var t=o[e];if("function"==typeof t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];t=t.apply(void 0,a)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var c=t;if("string"==typeof t&&!(c=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return c},u=function(){var e=s("initialFocus");if(!1===e)return!1;if(void 0===e)if(c(r.activeElement)>=0)e=r.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(a.containerGroups=a.containers.map((function(e){var t,n,r=O(e,o.tabbableOptions),a=(t=e,(n=(n=o.tabbableOptions)||{}).getShadowRoot?f([t],n.includeContainer,{filter:h.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):l(t,n.includeContainer,h.bind(null,n)));return{container:e,tabbableNodes:r,focusableNodes:a,firstTabbableNode:r.length>0?r[0]:null,lastTabbableNode:r.length>0?r[r.length-1]:null,nextTabbableNode:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=a.findIndex((function(t){return t===e}));if(!(n<0))return t?a.slice(n+1).find((function(e){return w(e,o.tabbableOptions)})):a.slice(0,n).reverse().find((function(e){return w(e,o.tabbableOptions)}))}}})),a.tabbableGroups=a.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),a.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!o.preventScroll}),a.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(u()))},v=function(e){var t=s("setReturnFocus",e);return t||!1!==t&&e},b=function(e){var t=P(e);c(t)>=0||(k(o.clickOutsideDeactivates,e)?n.deactivate({returnFocus:o.returnFocusOnDeactivate&&!C(t,o.tabbableOptions)}):k(o.allowOutsideClick,e)||e.preventDefault())},m=function(e){var t=P(e),n=c(t)>=0;n||t instanceof Document?n&&(a.mostRecentlyFocusedNode=t):(e.stopImmediatePropagation(),d(a.mostRecentlyFocusedNode||u()))},y=function(e){if(function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&!1!==k(o.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){var t=P(e);p();var n=null;if(a.tabbableGroups.length>0){var r=c(t),i=r>=0?a.containerGroups[r]:void 0;if(r<0)n=e.shiftKey?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var u=I(a.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(u<0&&(i.container===t||C(t,o.tabbableOptions)&&!w(t,o.tabbableOptions)&&!i.nextTabbableNode(t,!1))&&(u=r),u>=0){var l=0===u?a.tabbableGroups.length-1:u-1;n=a.tabbableGroups[l].lastTabbableNode}}else{var f=I(a.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(f<0&&(i.container===t||C(t,o.tabbableOptions)&&!w(t,o.tabbableOptions)&&!i.nextTabbableNode(t))&&(f=r),f>=0){var v=f===a.tabbableGroups.length-1?0:f+1;n=a.tabbableGroups[v].firstTabbableNode}}}else n=s("fallbackFocus");n&&(e.preventDefault(),d(n))}(e)},g=function(e){var t=P(e);c(t)>=0||k(o.clickOutsideDeactivates,e)||k(o.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},E=function(){if(a.active)return D.activateTrap(n),a.delayInitialFocusTimer=o.delayInitialFocus?F((function(){d(u())})):d(u()),r.addEventListener("focusin",m,!0),r.addEventListener("mousedown",b,{capture:!0,passive:!1}),r.addEventListener("touchstart",b,{capture:!0,passive:!1}),r.addEventListener("click",g,{capture:!0,passive:!1}),r.addEventListener("keydown",y,{capture:!0,passive:!1}),n},T=function(){if(a.active)return r.removeEventListener("focusin",m,!0),r.removeEventListener("mousedown",b,!0),r.removeEventListener("touchstart",b,!0),r.removeEventListener("click",g,!0),r.removeEventListener("keydown",y,!0),n},(n={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=i(e,"onActivate"),n=i(e,"onPostActivate"),o=i(e,"checkCanFocusTrap");o||p(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=r.activeElement,t&&t();var c=function(){o&&p(),E(),n&&n()};return o?(o(a.containers.concat()).then(c,c),this):(c(),this)},deactivate:function(e){if(!a.active)return this;var t=S({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,T(),a.active=!1,a.paused=!1,D.deactivateTrap(n);var r=i(t,"onDeactivate"),c=i(t,"onPostDeactivate"),s=i(t,"checkCanReturnFocus"),u=i(t,"returnFocus","returnFocusOnDeactivate");r&&r();var l=function(){F((function(){u&&d(v(a.nodeFocusedBeforeActivation)),c&&c()}))};return u&&s?(s(v(a.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return a.paused||!a.active||(a.paused=!0,T()),this},unpause:function(){return a.paused&&a.active?(a.paused=!1,p(),E(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return a.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),a.active&&p(),this}}).updateContainerElements(e),n),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}componentDidUpdate(e){e.active&&!this.props.active?this.focusTrap.deactivate():!e.active&&this.props.active&&this.focusTrap.activate(),e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}componentWillUnmount(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus({preventScroll:this.props.preventScrollOnDeactivate})}render(){const e=this.props,{children:t,className:n,focusTrapOptions:a,active:i,paused:c,preventScrollOnDeactivate:s,innerRef:u}=e,l=(0,r.__rest)(e,["children","className","focusTrapOptions","active","paused","preventScrollOnDeactivate","innerRef"]);return o.createElement("div",Object.assign({ref:this.divRef,className:n},l),t)}}L.displayName="FocusTrap",L.defaultProps={active:!0,paused:!1,focusTrapOptions:{},preventScrollOnDeactivate:!1};const x=o.forwardRef(((e,t)=>o.createElement(L,Object.assign({innerRef:t},e))))},34143:(e,t,n)=>{"use strict";n.d(t,{Dk:()=>a,Er:()=>o,ZP:()=>i});var r=n(40400);const o={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},68778:(e,t,n)=>{"use strict";n.d(t,{GR:()=>o,ZP:()=>i,rE:()=>a});var r=n(40400);const o={name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},43047:(e,t,n)=>{"use strict";n.d(t,{$O:()=>a,MX:()=>o,ZP:()=>i});var r=n(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},69957:(e,t,n)=>{"use strict";n.d(t,{LP:()=>a,RI:()=>o,ZP:()=>i});var r=n(40400);const o={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a=(0,r.IU)(o),i=a},92703:(e,t,n)=>{"use strict";var r=n(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},45697:(e,t,n)=>{e.exports=n(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
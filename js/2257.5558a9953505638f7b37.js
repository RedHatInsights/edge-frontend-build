/*! For license information please see 2257.5558a9953505638f7b37.js.LICENSE.txt */
"use strict";(self.webpackChunkedge=self.webpackChunkedge||[]).push([[2257],{32257:(e,t,n)=>{n.d(t,{s:()=>B});var r=n(8674),o=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],a=o.join(","),i="undefined"==typeof Element,u=i?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!i&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},s=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},l=function(e,t,n){if(s(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(a));return t&&u.call(e,a)&&r.unshift(e),r.filter(n)},d=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var c=i.shift();if(!s(c,!1))if("SLOT"===c.tagName){var l=c.assignedElements(),d=e(l.length?l:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:c,candidates:d})}else{u.call(c,a)&&r.filter(c)&&(n||!t.includes(c))&&o.push(c);var f=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),v=!s(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(c));if(f&&v){var p=e(!0===f?c.children:f.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:c,candidates:p})}else i.unshift.apply(i,c.children)}}return o},f=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},v=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!f(e)?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},b=function(e){return"INPUT"===e.tagName},h=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},m=function(e,t){return!(t.disabled||s(t)||function(e){return b(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=u.call(e,"details>summary:first-of-type")?e.parentElement:e;if(u.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return h(e)}else{if("function"==typeof r){for(var a=e;e;){var i=e.parentElement,s=c(e);if(i&&!i.shadowRoot&&!0===r(i))return h(e);e=e.assignedSlot?e.assignedSlot:i||s===e.ownerDocument?i:s.host}e=a}if(function(e){var t,n,r,o,a=e&&c(e),i=null===(t=a)||void 0===t?void 0:t.host,u=!1;if(a&&a!==e)for(u=!!(null!==(n=i)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(i)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!u&&i;){var s,l,d;u=!(null===(l=i=null===(s=a=c(i))||void 0===s?void 0:s.host)||void 0===l||null===(d=l.ownerDocument)||void 0===d||!d.contains(i))}return u}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!u.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},y=function(e,t){return!(function(e){return function(e){return b(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||c(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)}(t)||v(t)<0||!m(e,t))},g=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},w=function e(t){var n=[],r=[];return t.forEach((function(t,o){var a=!!t.scopeParent,i=a?t.scopeParent:t,u=function(e,t){var n=v(e);return n<0&&t&&!f(e)?0:n}(i,a),c=a?e(t.candidates):i;0===u?a?n.push.apply(n,c):n.push(i):r.push({documentOrder:o,tabIndex:u,item:t,isScope:a,content:c})})),r.sort(p).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},N=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==u.call(e,a)&&y(t,e)},E=o.concat("iframe").join(","),O=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==u.call(e,E)&&m(t,e)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},R=function(e){return D(e)&&!e.shiftKey},k=function(e){return D(e)&&e.shiftKey},P=function(e){return setTimeout(e,0)},I=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},x=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e.apply(void 0,n):e},C=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},A=[],G=function(e,t){var n,r=(null==t?void 0:t.document)||document,o=(null==t?void 0:t.trapStack)||A,a=F({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:R,isKeyBackward:k},t),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},u=function(e,t,n){return e&&void 0!==e[t]?e[t]:a[n||t]},c=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return i.containerGroups.findIndex((function(t){var r=t.container,o=t.tabbableNodes;return r.contains(e)||(null==n?void 0:n.includes(r))||o.find((function(t){return t===e}))}))},s=function(e){var t=a[e];if("function"==typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var u=t;if("string"==typeof t&&!(u=r.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return u},f=function(){var e=s("initialFocus");if(!1===e)return!1;if(void 0===e||!O(e,a.tabbableOptions))if(c(r.activeElement)>=0)e=r.activeElement;else{var t=i.tabbableGroups[0];e=t&&t.firstTabbableNode||s("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},p=function(){if(i.containerGroups=i.containers.map((function(e){var t=function(e,t){var n;return n=(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:y.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:g}):l(e,t.includeContainer,y.bind(null,t)),w(n)}(e,a.tabbableOptions),n=function(e,t){return(t=t||{}).getShadowRoot?d([e],t.includeContainer,{filter:m.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):l(e,t.includeContainer,m.bind(null,t))}(e,a.tabbableOptions),r=t.length>0?t[0]:void 0,o=t.length>0?t[t.length-1]:void 0,i=n.find((function(e){return N(e)})),u=n.slice().reverse().find((function(e){return N(e)})),c=!!t.find((function(e){return v(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:c,firstTabbableNode:r,lastTabbableNode:o,firstDomTabbableNode:i,lastDomTabbableNode:u,nextTabbableNode:function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.indexOf(e);return o<0?r?n.slice(n.indexOf(e)+1).find((function(e){return N(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return N(e)})):t[o+(r?1:-1)]}}})),i.tabbableGroups=i.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),i.tabbableGroups.length<=0&&!s("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(i.containerGroups.find((function(e){return e.posTabIndexesFound}))&&i.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},b=function e(t){!1!==t&&t!==r.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!a.preventScroll}),i.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(f()))},h=function(e){var t=s("setReturnFocus",e);return t||!1!==t&&e},E=function(e){var t=e.target,n=e.event,r=e.isBackward,o=void 0!==r&&r;t=t||C(n),p();var u=null;if(i.tabbableGroups.length>0){var l=c(t,n),d=l>=0?i.containerGroups[l]:void 0;if(l<0)u=o?i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:i.tabbableGroups[0].firstTabbableNode;else if(o){var f=I(i.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(f<0&&(d.container===t||O(t,a.tabbableOptions)&&!N(t,a.tabbableOptions)&&!d.nextTabbableNode(t,!1))&&(f=l),f>=0){var b=0===f?i.tabbableGroups.length-1:f-1,h=i.tabbableGroups[b];u=v(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else D(n)||(u=d.nextTabbableNode(t,!1))}else{var m=I(i.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(m<0&&(d.container===t||O(t,a.tabbableOptions)&&!N(t,a.tabbableOptions)&&!d.nextTabbableNode(t))&&(m=l),m>=0){var y=m===i.tabbableGroups.length-1?0:m+1,g=i.tabbableGroups[y];u=v(t)>=0?g.firstTabbableNode:g.firstDomTabbableNode}else D(n)||(u=d.nextTabbableNode(t))}}else u=s("fallbackFocus");return u},S=function(e){var t=C(e);c(t,e)>=0||(x(a.clickOutsideDeactivates,e)?n.deactivate({returnFocus:a.returnFocusOnDeactivate}):x(a.allowOutsideClick,e)||e.preventDefault())},T=function(e){var t=C(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(i.mostRecentlyFocusedNode=t);else{var r;e.stopImmediatePropagation();var o=!0;if(i.mostRecentlyFocusedNode)if(v(i.mostRecentlyFocusedNode)>0){var u=c(i.mostRecentlyFocusedNode),s=i.containerGroups[u].tabbableNodes;if(s.length>0){var l=s.findIndex((function(e){return e===i.mostRecentlyFocusedNode}));l>=0&&(a.isKeyForward(i.recentNavEvent)?l+1<s.length&&(r=s[l+1],o=!1):l-1>=0&&(r=s[l-1],o=!1))}}else i.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return v(e)>0}))}))||(o=!1);else o=!1;o&&(r=E({target:i.mostRecentlyFocusedNode,isBackward:a.isKeyBackward(i.recentNavEvent)})),b(r||i.mostRecentlyFocusedNode||f())}i.recentNavEvent=void 0},G=function(e){if(("Escape"===(null==(t=e)?void 0:t.key)||"Esc"===(null==t?void 0:t.key)||27===(null==t?void 0:t.keyCode))&&!1!==x(a.escapeDeactivates,e))return e.preventDefault(),void n.deactivate();var t;(a.isKeyForward(e)||a.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i.recentNavEvent=e;var n=E({event:e,isBackward:t});n&&(D(e)&&e.preventDefault(),b(n))}(e,a.isKeyBackward(e))},L=function(e){var t=C(e);c(t,e)>=0||x(a.clickOutsideDeactivates,e)||x(a.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},j=function(){if(i.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);-1===r||e.splice(r,1),e.push(t)}(o,n),i.delayInitialFocusTimer=a.delayInitialFocus?P((function(){b(f())})):b(f()),r.addEventListener("focusin",T,!0),r.addEventListener("mousedown",S,{capture:!0,passive:!1}),r.addEventListener("touchstart",S,{capture:!0,passive:!1}),r.addEventListener("click",L,{capture:!0,passive:!1}),r.addEventListener("keydown",G,{capture:!0,passive:!1}),n},B=function(){if(i.active)return r.removeEventListener("focusin",T,!0),r.removeEventListener("mousedown",S,!0),r.removeEventListener("touchstart",S,!0),r.removeEventListener("click",L,!0),r.removeEventListener("keydown",G,!0),n},K="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===i.mostRecentlyFocusedNode}))}))&&b(f())})):void 0,M=function(){K&&(K.disconnect(),i.active&&!i.paused&&i.containers.map((function(e){K.observe(e,{subtree:!0,childList:!0})})))};return(n={get active(){return i.active},get paused(){return i.paused},activate:function(e){if(i.active)return this;var t=u(e,"onActivate"),n=u(e,"onPostActivate"),o=u(e,"checkCanFocusTrap");o||p(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,null==t||t();var a=function(){o&&p(),j(),M(),null==n||n()};return o?(o(i.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!i.active)return this;var t=F({onDeactivate:a.onDeactivate,onPostDeactivate:a.onPostDeactivate,checkCanReturnFocus:a.checkCanReturnFocus},e);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,B(),i.active=!1,i.paused=!1,M(),function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(o,n);var r=u(t,"onDeactivate"),c=u(t,"onPostDeactivate"),s=u(t,"checkCanReturnFocus"),l=u(t,"returnFocus","returnFocusOnDeactivate");null==r||r();var d=function(){P((function(){l&&b(h(i.nodeFocusedBeforeActivation)),null==c||c()}))};return l&&s?(s(h(i.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){if(i.paused||!i.active)return this;var t=u(e,"onPause"),n=u(e,"onPostPause");return i.paused=!0,null==t||t(),B(),M(),null==n||n(),this},unpause:function(e){if(!i.paused||!i.active)return this;var t=u(e,"onUnpause"),n=u(e,"onPostUnpause");return i.paused=!1,null==t||t(),p(),j(),M(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return i.containers=t.map((function(e){return"string"==typeof e?r.querySelector(e):e})),i.active&&p(),M(),this}}).updateContainerElements(e),n},L=n(93345),j=n.n(L);const B=(0,L.forwardRef)((function(e,t){var{active:n=!0,paused:o=!1,focusTrapOptions:a={},preventScrollOnDeactivate:i=!1}=e,u=(0,r.__rest)(e,["active","paused","focusTrapOptions","preventScrollOnDeactivate"]);const c=(0,L.useRef)(null);(0,L.useImperativeHandle)(t,(()=>c.current));const s=(0,L.useRef)(null);(0,L.useEffect)((()=>{const e=G(c.current,Object.assign(Object.assign({},a),{returnFocusOnDeactivate:!1}));return s.current=e,()=>{e.deactivate()}}),[]),(0,L.useEffect)((()=>{const e=s.current;n?null==e||e.activate():null==e||e.deactivate()}),[n]),(0,L.useEffect)((()=>{const e=s.current;o?null==e||e.pause():null==e||e.unpause()}),[o]);const l=(0,L.useRef)("undefined"!=typeof document?document.activeElement:null);return function(e){const t=(0,L.useRef)(e);t.current=e,(0,L.useEffect)((()=>()=>{t.current()}),[])}((()=>{!1!==a.returnFocusOnDeactivate&&l.current instanceof HTMLElement&&l.current.focus({preventScroll:i})})),j().createElement("div",Object.assign({ref:c},u))}));B.displayName="FocusTrap"}}]);
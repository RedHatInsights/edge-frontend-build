/*! For license information please see 3621.1670352421009.73fdb30c973522851d70.js.LICENSE.txt */
(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[3621,5513],{8679:(e,t,n)=>{"use strict";var r=n(59864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var f=Object.defineProperty,u=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(d){var o=h(n);o&&o!==d&&e(t,o,r)}var i=u(n);l&&(i=i.concat(l(n)));for(var c=s(t),y=s(n),v=0;v<i.length;++v){var m=i[v];if(!(a[m]||r&&r[m]||y&&y[m]||c&&c[m])){var w=p(n,m);try{f(t,m,w)}catch(e){}}}}return t}},92703:(e,t,n)=>{"use strict";var r=n(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},45697:(e,t,n)=>{e.exports=n(92703)()},50414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},69921:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,w=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function P(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case l:case a:case c:case i:case h:return e;default:switch(e=e&&e.$$typeof){case f:case p:case v:case y:case s:return e;default:return t}}case o:return t}}}function O(e){return P(e)===l}t.AsyncMode=u,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=a,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=h,t.isAsyncMode=function(e){return O(e)||P(e)===u},t.isConcurrentMode=O,t.isContextConsumer=function(e){return P(e)===f},t.isContextProvider=function(e){return P(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return P(e)===p},t.isFragment=function(e){return P(e)===a},t.isLazy=function(e){return P(e)===v},t.isMemo=function(e){return P(e)===y},t.isPortal=function(e){return P(e)===o},t.isProfiler=function(e){return P(e)===c},t.isStrictMode=function(e){return P(e)===i},t.isSuspense=function(e){return P(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===c||e===i||e===h||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===s||e.$$typeof===f||e.$$typeof===p||e.$$typeof===w||e.$$typeof===g||e.$$typeof===b||e.$$typeof===m)},t.typeOf=P},59864:(e,t,n)=>{"use strict";e.exports=n(69921)},5513:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BrowserRouter:()=>A,HashRouter:()=>E,Link:()=>M,MemoryRouter:()=>r.VA,NavLink:()=>U,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(68519),o=n(94578),a=n(92950),i=n.n(a),c=n(87462),s=n(78273),f=n(38776);function u(e){return"/"===e.charAt(0)?e:"/"+e}function l(e){return"/"===e.charAt(0)?e.substr(1):e}function p(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function h(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function d(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function y(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e),o.state=t):(void 0===(o=(0,c.Z)({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=(0,s.Z)(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function v(){var e=null,t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var m=!("undefined"==typeof window||!window.document||!window.document.createElement);function w(e,t){t(window.confirm(e))}var g="popstate",b="hashchange";function P(){try{return window.history.state||{}}catch(e){return{}}}function O(e){void 0===e&&(e={}),m||(0,f.Z)(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,i=a.forceRefresh,s=void 0!==i&&i,l=a.getUserConfirmation,O=void 0===l?w:l,S=a.keyLength,x=void 0===S?6:S,k=e.basename?h(u(e.basename)):"";function T(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return k&&(a=p(a,k)),y(a,r,n)}function R(){return Math.random().toString(36).substr(2,x)}var $=v();function C(e){(0,c.Z)(H,e),H.length=n.length,$.notifyListeners(H.location,H.action)}function A(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||Z(T(e.state))}function E(){Z(T(P()))}var L=!1;function Z(e){L?(L=!1,C()):$.confirmTransitionTo(e,"POP",O,(function(t){t?C({action:"POP",location:e}):function(e){var t=H.location,n=j.indexOf(t.key);-1===n&&(n=0);var r=j.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(L=!0,M(o))}(e)}))}var _=T(P()),j=[_.key];function F(e){return k+d(e)}function M(e){n.go(e)}var N=0;function I(e){1===(N+=e)&&1===e?(window.addEventListener(g,A),o&&window.addEventListener(b,E)):0===N&&(window.removeEventListener(g,A),o&&window.removeEventListener(b,E))}var U=!1,H={length:n.length,action:"POP",location:_,createHref:F,push:function(e,t){var o="PUSH",a=y(e,t,R(),H.location);$.confirmTransitionTo(a,o,O,(function(e){if(e){var t=F(a),i=a.key,c=a.state;if(r)if(n.pushState({key:i,state:c},null,t),s)window.location.href=t;else{var f=j.indexOf(H.location.key),u=j.slice(0,f+1);u.push(a.key),j=u,C({action:o,location:a})}else window.location.href=t}}))},replace:function(e,t){var o="REPLACE",a=y(e,t,R(),H.location);$.confirmTransitionTo(a,o,O,(function(e){if(e){var t=F(a),i=a.key,c=a.state;if(r)if(n.replaceState({key:i,state:c},null,t),s)window.location.replace(t);else{var f=j.indexOf(H.location.key);-1!==f&&(j[f]=a.key),C({action:o,location:a})}else window.location.replace(t)}}))},go:M,goBack:function(){M(-1)},goForward:function(){M(1)},block:function(e){void 0===e&&(e=!1);var t=$.setPrompt(e);return U||(I(1),U=!0),function(){return U&&(U=!1,I(-1)),t()}},listen:function(e){var t=$.appendListener(e);return I(1),function(){I(-1),t()}}};return H}var S="hashchange",x={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+l(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:l,decodePath:u},slash:{encodePath:u,decodePath:u}};function k(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function T(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function R(e){window.location.replace(k(window.location.href)+"#"+e)}function $(e){void 0===e&&(e={}),m||(0,f.Z)(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),r=n.getUserConfirmation,o=void 0===r?w:r,a=n.hashType,i=void 0===a?"slash":a,s=e.basename?h(u(e.basename)):"",l=x[i],g=l.encodePath,b=l.decodePath;function P(){var e=b(T());return s&&(e=p(e,s)),y(e)}var O=v();function $(e){(0,c.Z)(U,e),U.length=t.length,O.notifyListeners(U.location,U.action)}var C=!1,A=null;function E(){var e,t,n=T(),r=g(n);if(n!==r)R(r);else{var a=P(),i=U.location;if(!C&&(t=a,(e=i).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(A===d(a))return;A=null,function(e){if(C)C=!1,$();else{O.confirmTransitionTo(e,"POP",o,(function(t){t?$({action:"POP",location:e}):function(e){var t=U.location,n=j.lastIndexOf(d(t));-1===n&&(n=0);var r=j.lastIndexOf(d(e));-1===r&&(r=0);var o=n-r;o&&(C=!0,F(o))}(e)}))}}(a)}}var L=T(),Z=g(L);L!==Z&&R(Z);var _=P(),j=[d(_)];function F(e){t.go(e)}var M=0;function N(e){1===(M+=e)&&1===e?window.addEventListener(S,E):0===M&&window.removeEventListener(S,E)}var I=!1,U={length:t.length,action:"POP",location:_,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=k(window.location.href)),n+"#"+g(s+d(e))},push:function(e,t){var n="PUSH",r=y(e,void 0,void 0,U.location);O.confirmTransitionTo(r,n,o,(function(e){if(e){var t=d(r),o=g(s+t);if(T()!==o){A=t,function(e){window.location.hash=e}(o);var a=j.lastIndexOf(d(U.location)),i=j.slice(0,a+1);i.push(t),j=i,$({action:n,location:r})}else $()}}))},replace:function(e,t){var n="REPLACE",r=y(e,void 0,void 0,U.location);O.confirmTransitionTo(r,n,o,(function(e){if(e){var t=d(r),o=g(s+t);T()!==o&&(A=t,R(o));var a=j.indexOf(d(U.location));-1!==a&&(j[a]=t),$({action:n,location:r})}}))},go:F,goBack:function(){F(-1)},goForward:function(){F(1)},block:function(e){void 0===e&&(e=!1);var t=O.setPrompt(e);return I||(N(1),I=!0),function(){return I&&(I=!1,N(-1)),t()}},listen:function(e){var t=O.appendListener(e);return N(1),function(){N(-1),t()}}};return U}var C=n(63366),A=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=O(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return i().createElement(r.F0,{history:this.history,children:this.props.children})},t}(i().Component),E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=$(t.props),t}return(0,o.Z)(t,e),t.prototype.render=function(){return i().createElement(r.F0,{history:this.history,children:this.props.children})},t}(i().Component),L=function(e,t){return"function"==typeof e?e(t):e},Z=function(e,t){return"string"==typeof e?y(e,null,null,t):e},_=function(e){return e},j=i().forwardRef;void 0===j&&(j=_);var F=j((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,a=(0,C.Z)(e,["innerRef","navigate","onClick"]),s=a.target,f=(0,c.Z)({},a,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=_!==j&&t||n,i().createElement("a",f)})),M=j((function(e,t){var n=e.component,o=void 0===n?F:n,a=e.replace,s=e.to,u=e.innerRef,l=(0,C.Z)(e,["component","replace","to","innerRef"]);return i().createElement(r.s6.Consumer,null,(function(e){e||(0,f.Z)(!1);var n=e.history,r=Z(L(s,e.location),e.location),p=r?n.createHref(r):"",h=(0,c.Z)({},l,{href:p,navigate:function(){var t=L(s,e.location),r=d(e.location)===d(Z(t));(a||r?n.replace:n.push)(t)}});return _!==j?h.ref=t||u:h.innerRef=u,i().createElement(o,h)}))})),N=function(e){return e},I=i().forwardRef;void 0===I&&(I=N);var U=I((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,a=e.activeClassName,s=void 0===a?"active":a,u=e.activeStyle,l=e.className,p=e.exact,h=e.isActive,d=e.location,y=e.sensitive,v=e.strict,m=e.style,w=e.to,g=e.innerRef,b=(0,C.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(r.s6.Consumer,null,(function(e){e||(0,f.Z)(!1);var n=d||e.location,a=Z(L(w,n),n),P=a.pathname,O=P&&P.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=O?(0,r.LX)(n.pathname,{path:O,exact:p,sensitive:y,strict:v}):null,x=!!(h?h(S,n):S),k="function"==typeof l?l(x):l,T="function"==typeof m?m(x):m;x&&(k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(k,s),T=(0,c.Z)({},T,u));var R=(0,c.Z)({"aria-current":x&&o||null,className:k,style:T,to:a},b);return N!==I?R.ref=t||g:R.innerRef=g,i().createElement(M,R)}))}))},87462:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},63366:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=../sourcemaps/3621.bb7058070b99b29a8b11ac55605a704e.js.map
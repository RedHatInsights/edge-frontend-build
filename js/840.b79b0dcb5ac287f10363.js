/*! For license information please see 840.b79b0dcb5ac287f10363.js.LICENSE.txt */
(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[840],{60053:(n,e)=>{"use strict";var t,r,a,o,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var i=null,u=null,s=function(){if(null!==i)try{var n=e.unstable_now();i(!0,n),i=null}catch(n){throw setTimeout(s,0),n}},c=Date.now();e.unstable_now=function(){return Date.now()-c},t=function(n){null!==i?setTimeout(t,0,n):(i=n,setTimeout(s,0))},r=function(n,e){u=setTimeout(n,e)},a=function(){clearTimeout(u)},o=function(){return!1},l=e.unstable_forceFrameRate=function(){}}else{var f=window.performance,b=window.Date,p=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var w=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof w&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)e.unstable_now=function(){return f.now()};else{var v=b.now();e.unstable_now=function(){return b.now()-v}}var m=!1,y=null,_=-1,h=5,k=0;o=function(){return e.unstable_now()>=k},l=function(){},e.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):h=0<n?Math.floor(1e3/n):5};var T=new MessageChannel,g=T.port2;T.port1.onmessage=function(){if(null!==y){var n=e.unstable_now();k=n+h;try{y(!0,n)?g.postMessage(null):(m=!1,y=null)}catch(n){throw g.postMessage(null),n}}else m=!1},t=function(n){y=n,m||(m=!0,g.postMessage(null))},r=function(n,t){_=p((function(){n(e.unstable_now())}),t)},a=function(){d(_),_=-1}}function x(n,e){var t=n.length;n.push(e);n:for(;;){var r=t-1>>>1,a=n[r];if(!(void 0!==a&&0<F(a,e)))break n;n[r]=e,n[t]=a,t=r}}function C(n){return void 0===(n=n[0])?null:n}function P(n){var e=n[0];if(void 0!==e){var t=n.pop();if(t!==e){n[0]=t;n:for(var r=0,a=n.length;r<a;){var o=2*(r+1)-1,l=n[o],i=o+1,u=n[i];if(void 0!==l&&0>F(l,t))void 0!==u&&0>F(u,l)?(n[r]=u,n[i]=t,r=i):(n[r]=l,n[o]=t,r=o);else{if(!(void 0!==u&&0>F(u,t)))break n;n[r]=u,n[i]=t,r=i}}}return e}return null}function F(n,e){var t=n.sortIndex-e.sortIndex;return 0!==t?t:n.id-e.id}var I=[],M=[],A=1,L=null,q=3,D=!1,R=!1,j=!1;function E(n){for(var e=C(M);null!==e;){if(null===e.callback)P(M);else{if(!(e.startTime<=n))break;P(M),e.sortIndex=e.expirationTime,x(I,e)}e=C(M)}}function N(n){if(j=!1,E(n),!R)if(null!==C(I))R=!0,t(B);else{var e=C(M);null!==e&&r(N,e.startTime-n)}}function B(n,t){R=!1,j&&(j=!1,a()),D=!0;var l=q;try{for(E(t),L=C(I);null!==L&&(!(L.expirationTime>t)||n&&!o());){var i=L.callback;if(null!==i){L.callback=null,q=L.priorityLevel;var u=i(L.expirationTime<=t);t=e.unstable_now(),"function"==typeof u?L.callback=u:L===C(I)&&P(I),E(t)}else P(I);L=C(I)}if(null!==L)var s=!0;else{var c=C(M);null!==c&&r(N,c.startTime-t),s=!1}return s}finally{L=null,q=l,D=!1}}function U(n){switch(n){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var W=l;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(n){n.callback=null},e.unstable_continueExecution=function(){R||D||(R=!0,t(B))},e.unstable_getCurrentPriorityLevel=function(){return q},e.unstable_getFirstCallbackNode=function(){return C(I)},e.unstable_next=function(n){switch(q){case 1:case 2:case 3:var e=3;break;default:e=q}var t=q;q=e;try{return n()}finally{q=t}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=W,e.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=q;q=n;try{return e()}finally{q=t}},e.unstable_scheduleCallback=function(n,o,l){var i=e.unstable_now();if("object"==typeof l&&null!==l){var u=l.delay;u="number"==typeof u&&0<u?i+u:i,l="number"==typeof l.timeout?l.timeout:U(n)}else l=U(n),u=i;return n={id:A++,callback:o,priorityLevel:n,startTime:u,expirationTime:l=u+l,sortIndex:-1},u>i?(n.sortIndex=u,x(M,n),null===C(I)&&n===C(M)&&(j?a():j=!0,r(N,u-i))):(n.sortIndex=l,x(I,n),R||D||(R=!0,t(B))),n},e.unstable_shouldYield=function(){var n=e.unstable_now();E(n);var t=C(I);return t!==L&&null!==L&&null!==t&&null!==t.callback&&t.startTime<=n&&t.expirationTime<L.expirationTime||o()},e.unstable_wrapCallback=function(n){var e=q;return function(){var t=q;q=e;try{return n.apply(this,arguments)}finally{q=t}}}},63840:(n,e,t)=>{"use strict";n.exports=t(60053)}}]);
//# sourceMappingURL=../sourcemaps/840.dcae1a79a0e2217c97b3.js.map
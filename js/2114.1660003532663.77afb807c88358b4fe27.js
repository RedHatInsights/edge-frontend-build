"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[2114],{47173:(e,t,n)=>{n.d(t,{Wu:()=>r,L$:()=>o,zx:()=>d});var r,o,i=n(21988),s=n(93264),a=n(80480),l=n(38296),c=n(37619),p=n(62472);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(r||(r={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(o||(o={}));const f=e=>{var{children:t=null,className:n="",component:f="button",isActive:u=!1,isBlock:m=!1,isDisabled:g=!1,isAriaDisabled:h=!1,isLoading:b=null,isDanger:y=!1,spinnerAriaValueText:x,isSmall:O=!1,isLarge:w=!1,inoperableEvents:v=["onClick","onKeyPress"],isInline:E=!1,type:j=o.button,variant:D=r.primary,iconPosition:M="left","aria-label":k=null,icon:L=null,ouiaId:T,ouiaSafe:N=!0,tabIndex:$=null,innerRef:P}=e,S=(0,i._T)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","isSmall","isLarge","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef"]);const B=(0,p.S$)(d.displayName,T,N,D),A=f,_="button"===A,C=E&&"span"===A,W=v.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return s.createElement(A,Object.assign({},S,h?W:null,{"aria-disabled":g||h,"aria-label":k,className:(0,l.i)(a.Z.button,a.Z.modifiers[D],m&&a.Z.modifiers.block,g&&a.Z.modifiers.disabled,h&&a.Z.modifiers.ariaDisabled,u&&a.Z.modifiers.active,E&&D===r.link&&a.Z.modifiers.inline,y&&(D===r.secondary||D===r.link)&&a.Z.modifiers.danger,null!==b&&a.Z.modifiers.progress,b&&a.Z.modifiers.inProgress,O&&a.Z.modifiers.small,w&&a.Z.modifiers.displayLg,n),disabled:_?g:null,tabIndex:null!==$?$:g?_?null:-1:h?null:C?0:void 0,type:_||C?j:null,role:C?"button":null,ref:P},B),b&&s.createElement("span",{className:(0,l.i)(a.Z.buttonProgress)},s.createElement(c.$,{size:c.S.md,"aria-valuetext":x})),D!==r.plain&&L&&"left"===M&&s.createElement("span",{className:(0,l.i)(a.Z.buttonIcon,a.Z.modifiers.start)},L),t,D!==r.plain&&L&&"right"===M&&s.createElement("span",{className:(0,l.i)(a.Z.buttonIcon,a.Z.modifiers.end)},L))},d=s.forwardRef(((e,t)=>s.createElement(f,Object.assign({innerRef:t},e))));d.displayName="Button"},37619:(e,t,n)=>{n.d(t,{$:()=>l,S:()=>s});var r=n(21988),o=n(93264);n.e(6822).then(n.t.bind(n,66822,23));const i={modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-c-spinner",spinnerClipper:"pf-c-spinner__clipper",spinnerLeadBall:"pf-c-spinner__lead-ball",spinnerPath:"pf-c-spinner__path",spinnerTailBall:"pf-c-spinner__tail-ball"};var s,a=n(38296);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(s||(s={}));const l=e=>{var{className:t="",size:n="xl","aria-valuetext":s="Loading...",isSVG:l=!1,diameter:c}=e,p=(0,r._T)(e,["className","size","aria-valuetext","isSVG","diameter"]);const f=l?"svg":"span";return o.createElement(f,Object.assign({className:(0,a.i)(i.spinner,i.modifiers[n],t),role:"progressbar","aria-valuetext":s},l&&{viewBox:"0 0 100 100"},c&&{style:{"--pf-c-spinner--diameter":c}},p),l?o.createElement("circle",{className:i.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}):o.createElement(o.Fragment,null,o.createElement("span",{className:(0,a.i)(i.spinnerClipper)}),o.createElement("span",{className:(0,a.i)(i.spinnerLeadBall)}),o.createElement("span",{className:(0,a.i)(i.spinnerTailBall)})))};l.displayName="Spinner"},75824:(e,t,n)=>{n.d(t,{u:()=>y,D:()=>g});var r=n(21988),o=n(93264);n.e(9854).then(n.t.bind(n,49854,23));const i="pf-m-top",s="pf-m-bottom",a="pf-m-left",l="pf-m-right",c="pf-m-text-align-left";var p=n(38296);const f=e=>{var{className:t,children:n,isLeftAligned:i}=e,s=(0,r._T)(e,["className","children","isLeftAligned"]);return o.createElement("div",Object.assign({className:(0,p.i)("pf-c-tooltip__content",i&&c,t)},s),n)};f.displayName="TooltipContent";const d=e=>{var{className:t}=e,n=(0,r._T)(e,["className"]);return o.createElement("div",Object.assign({className:(0,p.i)("pf-c-tooltip__arrow",t)},n))};d.displayName="TooltipArrow";var u=n(64190);const m={name:"--pf-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-c-tooltip--MaxWidth)"};var g,h=n(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(g||(g={}));let b=1;const y=e=>{var{content:t,position:n="top",trigger:c="mouseenter focus",isVisible:g=!1,isContentLeftAligned:y=!1,enableFlip:x=!0,className:O="",entryDelay:w=300,exitDelay:v=0,appendTo:E=(()=>document.body),zIndex:j=9999,maxWidth:D=m.value,distance:M=15,aria:k="describedby",flipBehavior:L=["top","right","bottom","left","top","right","bottom"],id:T="pf-tooltip-"+b++,children:N,animationDuration:$=300,reference:P,boundary:S,isAppLauncher:B,tippyProps:A}=e,_=(0,r._T)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","reference","boundary","isAppLauncher","tippyProps"]);const C=c.includes("mouseenter"),W=c.includes("focus"),R=c.includes("click"),F="manual"===c,[I,V]=o.useState(!1),[Z,H]=o.useState(0),z=o.useRef(null),U=o.useRef(null),q=o.useRef(null),K=e=>{e.forEach((e=>{e.current&&clearTimeout(e.current)}))};o.useEffect((()=>()=>{K([z,q,U])}),[]),o.useEffect((()=>{g?G():Y()}),[g]);const G=()=>{K([z,q]),U.current=setTimeout((()=>{V(!0),H(1)}),w)},Y=()=>{K([U]),q.current=setTimeout((()=>{H(0),z.current=setTimeout((()=>V(!1)),$)}),v)},J={top:i,bottom:s,left:a,right:l},X=D!==m.value,Q=o.createElement("div",Object.assign({className:(0,p.i)("pf-c-tooltip",O),role:"tooltip",id:T,style:{maxWidth:X?D:null,opacity:Z,transition:(0,h.K)($)}},_),o.createElement(d,null),o.createElement(f,{isLeftAligned:y},t));return o.createElement(h.r,{trigger:"none"!==k&&I?"describedby"===k&&N&&N.props&&!N.props["aria-describedby"]?o.cloneElement(N,{"aria-describedby":T}):"labelledby"===k&&N.props&&!N.props["aria-labelledby"]?o.cloneElement(N,{"aria-labelledby":T}):N:N,reference:P,popper:Q,popperMatchesTriggerWidth:!1,appendTo:E,isVisible:I,positionModifiers:J,distance:M,placement:n,onMouseEnter:C&&G,onMouseLeave:C&&Y,onFocus:W&&G,onBlur:W&&Y,onDocumentClick:R&&((e,t)=>{I?Y():e.target===t&&G()}),onDocumentKeyDown:F?null:e=>{F||e.keyCode===u.nx.ESCAPE_KEY&&I&&Y()},onTriggerEnter:F?null:e=>{e.keyCode===u.nx.ENTER&&(I?Y():G())},enableFlip:x,zIndex:j,flipBehavior:L})};y.displayName="Tooltip"},62472:(e,t,n)=>{n.d(t,{dp:()=>a,S$:()=>l,Z1:()=>c,ql:()=>p});var r=n(93264);let o=0;const i="OUIA-Generated-",s={};function a(e,t,n=!0){return{"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const l=(e,t,n=!0,r)=>({"data-ouia-component-type":`PF4/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,r)}),c=(e,t,n)=>void 0!==t?t:(0,r.useMemo)((()=>p(e,n)),[e,n]);function p(e,t){try{const n=`${window.location.href}-${e}-${t||""}`;return s[n]||(s[n]=0),`${i}${e}-${t?`${t}-`:""}${++s[n]}`}catch(n){return`${i}${e}-${t?`${t}-`:""}${++o}`}}},11801:(e,t,n)=>{n.d(t,{L:()=>i});var r=n(93264),o=n(3644);class i extends r.Component{componentDidMount(){const e=o.findDOMNode(this);this.props.onFoundRef(e)}render(){return this.props.children||null}}i.displayName="FindRefWrapper"},69121:(e,t,n)=>{n.d(t,{r:()=>ge,K:()=>me});var r=n(93264),o=n(3644),i=n(11801);function s(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function a(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function l(e){const t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function c(e){return e instanceof a(e).Element||e instanceof Element}function p(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function f(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return(c(e)?e.ownerDocument:e.document).documentElement}function u(e){return s(d(e)).left+l(e).scrollLeft}function m(e){return a(e).getComputedStyle(e)}function g(e){const{overflow:t,overflowX:n,overflowY:r}=m(e);return/auto|scroll|overlay|hidden/.test(t+r+n)}function h(e,t,n=!1){const r=d(t),o=s(e),i=p(t);let c={scrollLeft:0,scrollTop:0},m={x:0,y:0};var h,b;return(i||!i&&!n)&&(("body"!==f(t)||g(r))&&(c=(h=t)!==a(h)&&p(h)?{scrollLeft:(b=h).scrollLeft,scrollTop:b.scrollTop}:l(h)),p(t)?(m=s(t),m.x+=t.clientLeft,m.y+=t.clientTop):r&&(m.x=u(r))),{x:o.left+c.scrollLeft-m.x,y:o.top+c.scrollTop-m.y,width:o.width,height:o.height}}function b(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function y(e){return"html"===f(e)?e:e.assignedSlot||e.parentNode||e.host||d(e)}function x(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:p(e)&&g(e)?e:x(y(e))}function O(e,t=[]){const n=x(e),r="body"===f(n),o=a(n),i=r?[o].concat(o.visualViewport||[],g(n)?n:[]):n,s=t.concat(i);return r?s:s.concat(O(y(i)))}function w(e){return["table","td","th"].indexOf(f(e))>=0}function v(e){if(!p(e)||"fixed"===m(e).position)return null;const t=e.offsetParent;if(t){const e=d(t);if("body"===f(t)&&"static"===m(t).position&&"static"!==m(e).position)return e}return t}function E(e){const t=a(e);let n=v(e);for(;n&&w(n)&&"static"===m(n).position;)n=v(n);return n&&"body"===f(n)&&"static"===m(n).position?t:n||function(e){let t=y(e);for(;p(t)&&["html","body"].indexOf(f(t))<0;){const e=m(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const j="top",D="bottom",M="right",k="left",L="auto",T=[j,D,M,k],N="start",$="clippingParents",P="viewport",S="popper",B=T.reduce(((e,t)=>e.concat([`${t}-start`,`${t}-end`])),[]),A=[...T,L].reduce(((e,t)=>e.concat([t,`${t}-start`,`${t}-end`])),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function C(e){const t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&o(n)}})),r.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||o(e)})),r}function W(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const R={placement:"bottom",modifiers:[],strategy:"absolute"};function F(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function I(e={}){const{defaultModifiers:t=[],defaultOptions:n=R}=e;return function(e,r,o=n){let i={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},R),n),modifiersData:{},elements:{reference:e,popper:r},attributes:{},styles:{}},s=[],a=!1;const l={state:i,setOptions(o){p(),i.options=Object.assign(Object.assign(Object.assign({},n),i.options),o),i.scrollParents={reference:c(e)?O(e):e.contextElement?O(e.contextElement):[],popper:O(r)};const a=function(e){const t=C(e);return _.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...i.options.modifiers]));return i.orderedModifiers=a.filter((e=>e.enabled)),i.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const r=n({state:i,name:e,instance:l,options:t}),o=()=>{};s.push(r||o)}})),l.update()},forceUpdate(){if(a)return;const{reference:e,popper:t}=i.elements;if(F(e,t)){i.rects={reference:h(e,E(t),"fixed"===i.options.strategy),popper:b(t)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((e=>i.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<i.orderedModifiers.length;e++){if(!0===i.reset){i.reset=!1,e=-1;continue}const{fn:t,options:n={},name:r}=i.orderedModifiers[e];"function"==typeof t&&(i=t({state:i,options:n,name:r,instance:l})||i)}}},update:W((()=>new Promise((e=>{l.forceUpdate(),e(i)})))),destroy(){p(),a=!0}};if(!F(e,r))return l;function p(){s.forEach((e=>e())),s=[]}return l.setOptions(o).then((e=>{!a&&o.onFirstUpdate&&o.onFirstUpdate(e)})),l}}I();const V={passive:!0};function Z(e){return e.split("-")[0]}function H(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U({reference:e,element:t,placement:n}){const r=n?Z(n):null,o=n?H(n):null,i=e.x+e.width/2-t.width/2,s=e.y+e.height/2-t.height/2;let a;switch(r){case j:a={x:i,y:e.y-t.height};break;case D:a={x:i,y:e.y+e.height};break;case M:a={x:e.x+e.width,y:s};break;case k:a={x:e.x-t.width,y:s};break;default:a={x:e.x,y:e.y}}const l=r?z(r):null;if(null!=l){const n="y"===l?"height":"width";switch(o){case N:a[l]=Math.floor(a[l])-Math.floor(e[n]/2-t[n]/2);break;case"end":a[l]=Math.floor(a[l])+Math.ceil(e[n]/2-t[n]/2)}}return a}const q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K({popper:e,popperRect:t,placement:n,offsets:r,position:o,gpuAcceleration:i,adaptive:s}){let{x:l,y:c}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(r);const p=r.hasOwnProperty("x"),f=r.hasOwnProperty("y");let u=k,m=j;const g=window;if(s){let r=E(e);r===a(e)&&(r=d(e)),n===j&&(m=D,c-=r.clientHeight-t.height,c*=i?1:-1),n===k&&(u=M,l-=r.clientWidth-t.width,l*=i?1:-1)}const h=Object.assign({position:o},s&&q);return i?Object.assign(Object.assign({},h),{[m]:f?"0":"",[u]:p?"0":"",transform:(g.devicePixelRatio||1)<2?`translate(${l}px, ${c}px)`:`translate3d(${l}px, ${c}px, 0)`}):Object.assign(Object.assign({},h),{[m]:f?`${c}px`:"",[u]:p?`${l}px`:"",transform:""})}const G={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(e=>G[e]))}const J={start:"end",end:"start"};function X(e){return e.replace(/start|end/g,(e=>J[e]))}function Q(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===P?ee(function(e){const t=a(e),n=d(e),r=t.visualViewport;let o=n.clientWidth,i=n.clientHeight,s=0,l=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,l=r.offsetTop)),{width:o,height:i,x:s+u(e),y:l}}(e)):p(t)?function(e){const t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){const t=d(e),n=l(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let s=-n.scrollLeft+u(e);const a=-n.scrollTop;return"rtl"===m(r||t).direction&&(s+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:i,x:s,y:a}}(d(e)))}function ne(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function re(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function oe(e,t={}){const{placement:n=e.placement,boundary:r=$,rootBoundary:o=P,elementContext:i=S,altBoundary:a=!1,padding:l=0}=t,u=ne("number"!=typeof l?l:re(l,T)),g=i===S?"reference":S,h=e.elements.reference,b=e.rects.popper,x=e.elements[a?g:i],w=function(e,t,n){const r="clippingParents"===t?function(e){const t=O(y(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&p(e)?E(e):e;return c(n)?t.filter((e=>c(e)&&Q(e,n)&&"body"!==f(e))):[]}(e):[].concat(t),o=[...r,n],i=o[0],s=o.reduce(((t,n)=>{const r=te(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),te(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(c(x)?x:x.contextElement||d(e.elements.popper),r,o),v=s(h),k=U({reference:v,element:b,strategy:"absolute",placement:n}),L=ee(Object.assign(Object.assign({},b),k)),N=i===S?L:v,B={top:w.top-N.top+u.top,bottom:N.bottom-w.bottom+u.bottom,left:w.left-N.left+u.left,right:N.right-w.right+u.right},A=e.modifiersData.offset;if(i===S&&A){const e=A[n];Object.keys(B).forEach((t=>{const n=[M,D].indexOf(t)>=0?1:-1,r=[j,D].indexOf(t)>=0?"y":"x";B[t]+=e[r]*n}))}return B}function ie(e,t,n){return Math.max(e,Math.min(t,n))}function se(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[j,M,D,k].some((t=>e[t]>=0))}const le=I({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:r=!0,resize:o=!0}=n,i=a(e.elements.popper),s=[...e.scrollParents.reference,...e.scrollParents.popper];return r&&s.forEach((e=>{e.addEventListener("scroll",t.update,V)})),o&&i.addEventListener("resize",t.update,V),()=>{r&&s.forEach((e=>{e.removeEventListener("scroll",t.update,V)})),o&&i.removeEventListener("resize",t.update,V)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=U({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:r=!0}=t,o={placement:Z(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),K(Object.assign(Object.assign({},o),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),K(Object.assign(Object.assign({},o),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},r=e.attributes[t]||{},o=e.elements[t];p(o)&&f(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((e=>{const t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const r=e.elements[n],o=e.attributes[n]||{},i=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});p(r)&&f(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((e=>{r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:r=[0,0]}=t,o=A.reduce(((t,n)=>(t[n]=function(e,t,n){const r=Z(e),o=[k,j].indexOf(r)>=0?-1:1;let[i,s]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return i=i||0,s=(s||0)*o,[k,M].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}(n,e.rects,r),t)),{}),{x:i,y:s}=o[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=s),e.modifiersData[n]=o}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:r=!0,altAxis:o=!0,fallbackPlacements:i,padding:s,boundary:a,rootBoundary:l,altBoundary:c,flipVariations:p=!0,allowedAutoPlacements:f}=t,d=e.options.placement,u=Z(d),m=[d,...i||(u!==d&&p?function(e){if(Z(e)===L)return[];const t=Y(e);return[X(e),t,X(t)]}(d):[Y(d)])].reduce(((t,n)=>t.concat(Z(n)===L?function(e,t={}){const{placement:n,boundary:r,rootBoundary:o,padding:i,flipVariations:s,allowedAutoPlacements:a=A}=t,l=H(n),c=l?s?B:B.filter((e=>H(e)===l)):T;let p=c.filter((e=>a.indexOf(e)>=0));0===p.length&&(p=c);const f=p.reduce(((t,n)=>(t[n]=oe(e,{placement:n,boundary:r,rootBoundary:o,padding:i})[Z(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:a,rootBoundary:l,padding:s,flipVariations:p,allowedAutoPlacements:f}):n)),[]),g=e.rects.reference,h=e.rects.popper,b=new Map;let y=!0,x=m[0];for(let t=0;t<m.length;t++){const n=m[t],i=Z(n),p=H(n)===N,f=[j,D].indexOf(i)>=0,d=f?"width":"height",u=oe(e,{placement:n,boundary:a,rootBoundary:l,altBoundary:c,padding:s});let O=f?p?M:k:p?D:j;g[d]>h[d]&&(O=Y(O));const w=Y(O),v=[];if(r&&v.push(u[i]<=0),o&&v.push(u[O]<=0,u[w]<=0),v.every((e=>e))){x=n,y=!1;break}b.set(n,v)}if(y)for(let e=p?3:1;e>0;e--){const t=m.find((t=>{const n=b.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){x=t;break}}e.placement!==x&&(e.modifiersData[n]._skip=!0,e.placement=x,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:r=!0,altAxis:o=!1,boundary:i,rootBoundary:s,altBoundary:a,padding:l,tether:c=!0,tetherOffset:p=0}=t,f=oe(e,{boundary:i,rootBoundary:s,padding:l,altBoundary:a}),d=Z(e.placement),u=H(e.placement),m=!u,g=z(d),h="x"===g?"y":"x",y=e.modifiersData.popperOffsets,x=e.rects.reference,O=e.rects.popper,w="function"==typeof p?p(Object.assign(Object.assign({},e.rects),{placement:e.placement})):p,v={x:0,y:0};if(y){if(r){const t="y"===g?j:k,n="y"===g?D:M,r="y"===g?"height":"width",o=y[g],i=y[g]+f[t],s=y[g]-f[n],a=c?-O[r]/2:0,l=u===N?x[r]:O[r],p=u===N?-O[r]:-x[r],d=e.elements.arrow,h=c&&d?b(d):{width:0,height:0},L=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},T=L[t],$=L[n],P=ie(0,x[r],h[r]),S=m?x[r]/2-a-P-T-w:l-P-T-w,B=m?-x[r]/2+a+P+$+w:p+P+$+w,A=e.elements.arrow&&E(e.elements.arrow),_=A?"y"===g?A.clientTop||0:A.clientLeft||0:0,C=e.modifiersData.offset?e.modifiersData.offset[e.placement][g]:0,W=y[g]+S-C-_,R=y[g]+B-C,F=ie(c?Math.min(i,W):i,o,c?Math.max(s,R):s);y[g]=F,v[g]=F-o}if(o){const e="x"===g?j:k,t="x"===g?D:M,n=y[h],r=ie(n+f[e],n,n-f[t]);y[h]=r,v[h]=r-n}e.modifiersData[n]=v}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,r=e.modifiersData.popperOffsets,o=Z(e.placement),i=z(o),s=[k,M].indexOf(o)>=0?"height":"width";if(!n||!r)return;const a=e.modifiersData[`${t}#persistent`].padding,l=b(n),c="y"===i?j:k,p="y"===i?D:M,f=e.rects.reference[s]+e.rects.reference[i]-r[i]-e.rects.popper[s],d=r[i]-e.rects.reference[i],u=E(n),m=u?"y"===i?u.clientHeight||0:u.clientWidth||0:0,g=f/2-d/2,h=a[c],y=m-l[s]-a[p],x=m/2-l[s]/2+g,O=ie(h,x,y),w=i;e.modifiersData[t]={[w]:O,centerOffset:O-x}},effect:function({state:e,options:t,name:n}){let{element:r="[data-popper-arrow]",padding:o=0}=t;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r),r))&&Q(e.elements.popper,r)&&(e.elements.arrow=r,e.modifiersData[`${n}#persistent`]={padding:ne("number"!=typeof o?o:re(o,T))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,r=e.rects.popper,o=e.modifiersData.preventOverflow,i=oe(e,{elementContext:"reference"}),s=oe(e,{altBoundary:!0}),a=se(i,n),l=se(s,r,o),c=ae(a),p=ae(l);e.modifiersData[t]={referenceClippingOffsets:a,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:p},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]});var ce=n(6551);const pe=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),fe=[];var de=n(38296);n(45467);const ue={left:"right",right:"left",bottom:"top",top:"bottom"},me=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,ge=({trigger:e,popper:t,popperMatchesTriggerWidth:n=!0,direction:s="down",position:a="left",placement:l,appendTo:c=(()=>document.body),zIndex:p=9999,isVisible:f=!0,positionModifiers:d,distance:u=0,onMouseEnter:m,onMouseLeave:g,onFocus:h,onBlur:b,onDocumentClick:y,onTriggerClick:x,onTriggerEnter:O,onPopperClick:w,onDocumentKeyDown:v,enableFlip:E=!0,flipBehavior:j="flip",reference:D})=>{const[M,k]=r.useState(null),[L,T]=r.useState(null),[N,$]=r.useState(null),[P,S]=r.useState(!1),B=L||M,A=r.useCallback((e=>y(e,B,N)),[f,M,L,N,y]);r.useEffect((()=>{S(!0)}),[]),r.useEffect((()=>{D&&(D.current?T(D.current):"function"==typeof D&&T(D()))}),[D]);const _=(e,t,n)=>{e&&t&&t.addEventListener(n,e)},C=(e,t,n)=>{e&&t&&t.removeEventListener(n,e)};r.useEffect((()=>(_(m,B,"mouseenter"),_(g,B,"mouseleave"),_(h,B,"focus"),_(b,B,"blur"),_(x,B,"click"),_(O,B,"keydown"),_(w,N,"click"),y&&_(A,document,"click"),_(v,document,"keydown"),()=>{C(m,B,"mouseenter"),C(g,B,"mouseleave"),C(h,B,"focus"),C(b,B,"blur"),C(x,B,"click"),C(O,B,"keydown"),C(w,N,"click"),y&&C(A,document,"click"),C(v,document,"keydown")})),[M,N,m,g,h,b,x,O,w,y,v,L]);const W=()=>{if(l)return l;let e="up"===s?"top":"bottom";return"center"!==a&&(e=`${e}-${"right"===a?"end":"start"}`),e},R=r.useMemo(W,[s,a,l]),F=r.useMemo((()=>(e=>e.replace(/left|right|bottom|top/g,(e=>ue[e])))(W())),[s,a,l]),I=r.useMemo((()=>({name:"sameWidth",enabled:n,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>(e.elements.popper.style.width=`${e.elements.reference.offsetWidth}px`,()=>{})})),[n]),{styles:V,attributes:Z,forceUpdate:H}=((e,t,n={})=>{const o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||fe},[s,a]=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"}},attributes:{}}),l=r.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);a({styles:pe(t.map((t=>[t,e.styles[t]||{}]))),attributes:pe(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),c=r.useMemo((()=>{const e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[...i.modifiers,l,{name:"applyStyles",enabled:!1}]};return t=o.current,n=e,JSON.stringify(t)===JSON.stringify(n)?o.current||e:(o.current=e,e);var t,n}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),p=r.useRef();return(0,ce.L)((()=>{p&&p.current&&p.current.setOptions(c)}),[c]),(0,ce.L)((()=>{if(null==e||null==t)return;const r=(n.createPopper||le)(e,t,c);return p.current=r,()=>{r.destroy(),p.current=null}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}})(B,N,{placement:R,modifiers:[{name:"offset",options:{offset:[0,u]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:R.startsWith("auto")||E,options:{fallbackPlacements:"flip"===j?[F]:j}},I]});r.useEffect((()=>{H&&H()}),[t]);const z=r.cloneElement(t,Object.assign({className:(0,de.i)(t.props&&t.props.className,d&&(()=>{if(Z&&Z.popper&&Z.popper["data-popper-placement"]){const e=Z.popper["data-popper-placement"];return d[e]}return d.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),V.popper),{zIndex:p})},Z.popper));return r.createElement(r.Fragment,null,!D&&e&&r.createElement(i.L,{onFoundRef:e=>k(e)},e),P&&f&&o.createPortal(r.createElement(i.L,{onFoundRef:e=>$(e)},z),"function"==typeof c?c():c))};ge.displayName="Popper"},64190:(e,t,n)=>{n.d(t,{nx:()=>r,VW:()=>o,Ow:()=>i,LD:()=>s});const r={ARROW_UP:38,ARROW_DOWN:40,ESCAPE_KEY:27,TAB:9,ENTER:13,SPACE:32},o={RIGHT:"right",LEFT:"left",BOTH:"both",NONE:"none"},i={UP:"up",DOWN:"down",RIGHT:"right",LEFT:"left"};var s;!function(e){e.success="success",e.error="error",e.warning="warning",e.default="default"}(s||(s={}))},6551:(e,t,n)=>{n.d(t,{L:()=>o});var r=n(93264);const o=n(80164).Nq?r.useLayoutEffect:r.useEffect},80164:(e,t,n)=>{n.d(t,{kC:()=>i,Ki:()=>s,Ds:()=>a,Zd:()=>l,TX:()=>c,tJ:()=>p,qG:()=>f,LK:()=>d,_6:()=>u,x8:()=>m,wt:()=>g,fZ:()=>b,Nq:()=>y,mY:()=>x,IB:()=>O,fi:()=>w,KG:()=>v});var r=n(3644),o=n(64190);function i(e){return e[0].toUpperCase()+e.substring(1)}function s(e="pf"){return`${e}-${(new Date).getTime()+Math.random().toString(36).slice(2)}`}function a(e,t){let n;return(...r)=>{clearTimeout(n),n=setTimeout((()=>e.apply(this,r)),t)}}function l(e,t,n){if(!e||!t)return!1;const r=e.getBoundingClientRect(),o=t.getBoundingClientRect(),i=Math.floor(r.left),s=Math.floor(r.right),a=Math.floor(o.left),l=Math.floor(o.right);return a>=i&&l<=s||n&&(a<i&&l>i||l>s&&a<s)}function c(e,t){const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.floor(n.left),s=Math.floor(n.right),a=Math.floor(r.left)<i,l=Math.floor(r.right)>s;let c=o.VW.NONE;return l&&a?c=o.VW.BOTH:l?c=o.VW.RIGHT:a&&(c=o.VW.LEFT),c}function p(e,t){return e.replace(/\${(.*?)}/g,((e,n)=>t[n]||""))}function f(e,t,n,o,i,s=!1){if(!Array.isArray(i))return;const a=o.filter((e=>e))[0].constructor===Array;let l=e,c=t;"up"===n?l=0===e?i.length-1:e-1:"down"===n?l=e===i.length-1?0:e+1:"left"===n?c=0===t?o[e].length-1:t-1:"right"===n&&(c=t===o[e].length-1?0:t+1),null===o[l]||void 0===o[l]||a&&(null===o[l][c]||void 0===o[l][c])?f(l,c,n,o,i,s):s?(o[l].focus&&o[l].focus(),r.findDOMNode(o[l]).focus()):"tab"!==n&&(a?o[l][c].focus():o[l].focus())}function d(e,t,n){let r;return r="up"===t?0===e?n.length-1:e-1:e===n.length-1?0:e+1,void 0===n[r]||null===n[r][0]?d(r,t,n):r}function u(e,t,n){return n||(n=`${t}s`),`${e||0} ${1===e?t:n}`}const m=(e,t)=>Object.entries(e||{}).reduce(((e,[n,r])=>"default"===n?Object.assign(Object.assign({},e),{[t]:r}):Object.assign(Object.assign({},e),{[`${t}-on-${n}`]:r})),{}),g=(e,t,n="")=>Object.entries(e||{}).map((([e,t])=>`${n}${t}${"default"!==e?`-on-${e}`:""}`)).map(b).map((e=>e.replace(/-?(\dxl)/gi,((e,t)=>`_${t}`)))).map((e=>t.modifiers[e])).filter(Boolean).join(" "),h=e=>e.toUpperCase().replace("-","").replace("_",""),b=e=>e.replace(/([-_][a-z])/gi,h),y=!("undefined"==typeof window||!window.document||!window.document.createElement),x=(e,t)=>{const n=getComputedStyle(t),r=document.createElement("canvas").getContext("2d");return r.font=n.font||(()=>{let e="";const t={"50%":"ultra-condensed","62.5%":"extra-condensed","75%":"condensed","87.5%":"semi-condensed","100%":"normal","112.5%":"semi-expanded","125%":"expanded","150%":"extra-expanded","200%":"ultra-expanded"};let r;return r=n.fontStretch in t?t[n.fontStretch]:"normal",e=n.fontStyle+" "+n.fontVariant+" "+n.fontWeight+" "+r+" "+n.fontSize+"/"+n.lineHeight+" "+n.fontFamily,e})(),r.measureText(e).width},O=e=>{const t=getComputedStyle(e);let n=e.clientWidth,r=e.clientHeight;return r-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom),n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight),{height:r,width:n}},w=(e,t)=>{const n=O(e).width;let r=t;if(x(t,e)>n){for(;x(`...${r}`,e)>n;)r=r.substring(1);e.value?e.value=`...${r}`:e.innerText=`...${r}`}else e.value?e.value=t:e.innerText=t},v=e=>e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{})},21988:(e,t,n)=>{function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}n.d(t,{_T:()=>r,mG:()=>o}),Object.create,Object.create},40400:(e,t,n)=>{n.d(t,{Jh:()=>r,IU:()=>a});var r,o=n(70655),i=n(93264);!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));let s=0;function a({name:e,xOffset:t=0,yOffset:n=0,width:a,height:l,svgPath:c}){var p;return p=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{size:s,color:p,title:f,noVerticalAlign:d}=e,u=(0,o.__rest)(e,["size","color","title","noVerticalAlign"]),m=Boolean(f),g=(e=>{switch(e){case r.sm:return"1em";case r.md:return"1.5em";case r.lg:return"2em";case r.xl:return"3em";default:return"1em"}})(s),h=-.125*Number.parseFloat(g),b=d?null:{verticalAlign:`${h}em`},y=[t,n,a,l].join(" ");return i.createElement("svg",Object.assign({style:b,fill:p,height:g,width:g,viewBox:y,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},u),m&&i.createElement("title",{id:this.id},f),i.createElement("path",{d:c}))}},p.displayName=e,p.defaultProps={color:"currentColor",size:r.sm,noVerticalAlign:!1},p}},24307:(e,t,n)=>{n.d(t,{sk:()=>o,q1:()=>i,ZP:()=>s});var r=n(40400);const o={name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0},i=(0,r.IU)(o),s=i},80480:(e,t,n)=>{n.d(t,{Z:()=>r}),n.e(4946).then(n.t.bind(n,34946,23));const r={button:"pf-c-button",buttonIcon:"pf-c-button__icon",buttonProgress:"pf-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end",overpassFont:"pf-m-overpass-font"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/2114.e002e7affcaea2a65731f4844033888d.js.map
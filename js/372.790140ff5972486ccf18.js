"use strict";(self.webpackChunkedge=self.webpackChunkedge||[]).push([[372,1398,1396],{55665:(e,t,n)=>{n.d(t,{E:()=>o});var a=n(8674),l=n(93345),i=n(33774),s=n(72528);const o=e=>{var{isRead:t=!1,className:n="",children:o="",screenReaderText:r}=e,c=(0,a.__rest)(e,["isRead","className","children","screenReaderText"]);return l.createElement("span",Object.assign({},c,{className:(0,i.A)(s.A.badge,t?s.A.modifiers.read:s.A.modifiers.unread,n)}),o,r&&l.createElement("span",{className:"pf-v5-screen-reader"},r))};o.displayName="Badge"},72583:(e,t,n)=>{n.d(t,{$n:()=>u,Ak:()=>a,Mp:()=>i,VQ:()=>l});var a,l,i,s=n(8674),o=n(93345),r=n(73530),c=n(33774),d=n(932),m=n(31398),p=n(55665);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(a||(a={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(l||(l={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(i||(i={}));const f=e=>{var{children:t=null,className:n="",component:f="button",isActive:b=!1,isBlock:h=!1,isDisabled:v=!1,isAriaDisabled:g=!1,isLoading:x=null,isDanger:y=!1,spinnerAriaValueText:A,spinnerAriaLabelledBy:E,spinnerAriaLabel:O,size:S=i.default,inoperableEvents:I=["onClick","onKeyPress"],isInline:T=!1,type:L=l.button,variant:N=a.primary,iconPosition:w="start","aria-label":_=null,icon:B=null,ouiaId:C,ouiaSafe:k=!0,tabIndex:R=null,innerRef:K,countOptions:$}=e,P=(0,s.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const D=(0,m.useOUIAProps)(u.displayName,C,k,N),j=f,M="button"===j,X=T&&"span"===j,z=I.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return o.createElement(j,Object.assign({},P,g?z:null,{"aria-disabled":v||g,"aria-label":_,className:(0,c.A)(r.A.button,r.A.modifiers[N],h&&r.A.modifiers.block,v&&r.A.modifiers.disabled,g&&r.A.modifiers.ariaDisabled,b&&r.A.modifiers.active,T&&N===a.link&&r.A.modifiers.inline,y&&(N===a.secondary||N===a.link)&&r.A.modifiers.danger,null!==x&&N!==a.plain&&r.A.modifiers.progress,x&&r.A.modifiers.inProgress,S===i.sm&&r.A.modifiers.small,S===i.lg&&r.A.modifiers.displayLg,n),disabled:M?v:null,tabIndex:null!==R?R:v?M?null:-1:g?null:X?0:void 0,type:M||X?L:null,role:X?"button":null,ref:K},D),x&&o.createElement("span",{className:(0,c.A)(r.A.buttonProgress)},o.createElement(d.y,{size:d.J.md,isInline:T,"aria-valuetext":A,"aria-label":O,"aria-labelledby":E})),N===a.plain&&null===t&&B?B:null,N!==a.plain&&B&&("start"===w||"left"===w)&&o.createElement("span",{className:(0,c.A)(r.A.buttonIcon,r.A.modifiers.start)},B),t,N!==a.plain&&B&&("end"===w||"right"===w)&&o.createElement("span",{className:(0,c.A)(r.A.buttonIcon,r.A.modifiers.end)},B),$&&o.createElement("span",{className:(0,c.A)(r.A.buttonCount,$.className)},o.createElement(p.E,{isRead:$.isRead},$.count)))},u=o.forwardRef(((e,t)=>o.createElement(f,Object.assign({innerRef:t},e))));u.displayName="Button"},932:(e,t,n)=>{n.d(t,{y:()=>c,J:()=>r});var a=n(8674),l=n(93345);n(97553);const i={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var s=n(33774);const o="--pf-v5-c-spinner--diameter";var r;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(r||(r={}));const c=e=>{var{className:t="",size:n="xl","aria-valuetext":r="Loading...",diameter:c,isInline:d=!1,"aria-label":m,"aria-labelledBy":p}=e,f=(0,a.__rest)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return l.createElement("svg",Object.assign({className:(0,s.A)(i.spinner,d?i.modifiers.inline:i.modifiers[n],t),role:"progressbar","aria-valuetext":r,viewBox:"0 0 100 100"},c&&{style:{[o]:c}},m&&{"aria-label":m},p&&{"aria-labelledBy":p},!m&&!p&&{"aria-label":"Contents"},f),l.createElement("circle",{className:i.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};c.displayName="Spinner"},372:(e,t,n)=>{n.r(t),n.d(t,{Tab:()=>x,TabAction:()=>v,TabContent:()=>w,TabContentBody:()=>X,TabTitleIcon:()=>z,TabTitleText:()=>K,Tabs:()=>M,TabsComponent:()=>P,TabsContext:()=>c,TabsContextConsumer:()=>m,TabsContextProvider:()=>d});var a=n(8674),l=n(93345),i=n.n(l);n(70043);const s={button:"pf-v5-c-button",dirRtl:"pf-v5-m-dir-rtl",modifiers:{fill:"pf-m-fill",scrollable:"pf-m-scrollable",noBorderBottom:"pf-m-no-border-bottom",box:"pf-m-box",vertical:"pf-m-vertical",current:"pf-m-current",colorSchemeLight_300:"pf-m-color-scheme--light-300",expandable:"pf-m-expandable",nonExpandable:"pf-m-non-expandable",expandableOnSm:"pf-m-expandable-on-sm",nonExpandableOnSm:"pf-m-non-expandable-on-sm",expandableOnMd:"pf-m-expandable-on-md",nonExpandableOnMd:"pf-m-non-expandable-on-md",expandableOnLg:"pf-m-expandable-on-lg",nonExpandableOnLg:"pf-m-non-expandable-on-lg",expandableOnXl:"pf-m-expandable-on-xl",nonExpandableOnXl:"pf-m-non-expandable-on-xl",expandableOn_2xl:"pf-m-expandable-on-2xl",nonExpandableOn_2xl:"pf-m-non-expandable-on-2xl",expanded:"pf-m-expanded",secondary:"pf-m-secondary",pageInsets:"pf-m-page-insets",overflow:"pf-m-overflow",action:"pf-m-action",active:"pf-m-active",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",insetNone:"pf-m-inset-none",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",insetNoneOnSm:"pf-m-inset-none-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",insetNoneOnMd:"pf-m-inset-none-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",insetNoneOnLg:"pf-m-inset-none-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",insetNoneOnXl:"pf-m-inset-none-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl"},tabs:"pf-v5-c-tabs",tabsAdd:"pf-v5-c-tabs__add",tabsItem:"pf-v5-c-tabs__item",tabsItemAction:"pf-v5-c-tabs__item-action",tabsItemActionIcon:"pf-v5-c-tabs__item-action-icon",tabsItemIcon:"pf-v5-c-tabs__item-icon",tabsItemText:"pf-v5-c-tabs__item-text",tabsLink:"pf-v5-c-tabs__link",tabsLinkToggleIcon:"pf-v5-c-tabs__link-toggle-icon",tabsList:"pf-v5-c-tabs__list",tabsScrollButton:"pf-v5-c-tabs__scroll-button",tabsToggle:"pf-v5-c-tabs__toggle",tabsToggleButton:"pf-v5-c-tabs__toggle-button",tabsToggleIcon:"pf-v5-c-tabs__toggle-icon",tabsToggleText:"pf-v5-c-tabs__toggle-text",themeDark:"pf-v5-theme-dark"};var o=n(31398);const r=e=>{var{children:t,tabContentRef:n,ouiaId:i,parentInnerRef:s,ouiaSafe:c}=e,d=(0,a.__rest)(e,["children","tabContentRef","ouiaId","parentInnerRef","ouiaSafe"]);const m=d.href?"a":"button";return l.createElement(m,Object.assign({},!d.href&&{type:"button"},{ref:s},(0,o.getOUIAProps)(r.displayName,i,c),d),t)};r.displayName="TabButton";const c=l.createContext({variant:"default",mountOnEnter:!1,unmountOnExit:!1,localActiveKey:"",uniqueId:"",handleTabClick:()=>null,handleTabClose:void 0}),d=c.Provider,m=c.Consumer;var p=n(33774),f=n(45523),u=n(44397),b=n(72583);const h=e=>{var{children:t,className:n,onClick:i,isDisabled:r,"aria-label":c="Tab action",innerRef:d,ouiaId:m,ouiaSafe:f}=e,u=(0,a.__rest)(e,["children","className","onClick","isDisabled","aria-label","innerRef","ouiaId","ouiaSafe"]);return l.createElement("span",{className:(0,p.A)(s.tabsItemAction,n)},l.createElement(b.$n,Object.assign({ref:d,type:"button",variant:"plain","aria-label":c,onClick:i,isDisabled:r},(0,o.getOUIAProps)(v.displayName,m,f),u),l.createElement("span",{className:(0,p.A)(s.tabsItemActionIcon)},t)))},v=l.forwardRef(((e,t)=>l.createElement(h,Object.assign({},e,{innerRef:t}))));v.displayName="TabAction";const g=e=>{var{title:t,eventKey:n,tabContentRef:i,id:o,tabContentId:d,className:m="",ouiaId:b,isDisabled:h,isAriaDisabled:g,inoperableEvents:x=["onClick","onKeyPress"],href:y,innerRef:A,tooltip:E,closeButtonAriaLabel:O,isCloseDisabled:S=!1,actions:I}=e,T=(0,a.__rest)(e,["title","eventKey","tabContentRef","id","tabContentId","className","ouiaId","isDisabled","isAriaDisabled","inoperableEvents","href","innerRef","tooltip","closeButtonAriaLabel","isCloseDisabled","actions"]);const L=x.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{}),{mountOnEnter:N,localActiveKey:w,unmountOnExit:_,uniqueId:B,handleTabClick:C,handleTabClose:k}=l.useContext(c);let R=d?`${d}`:`pf-tab-section-${n}-${o||B}`;(N||_)&&n!==w&&(R=void 0);const K=Boolean(!y),$=l.createElement(r,Object.assign({parentInnerRef:A,className:(0,p.A)(s.tabsLink,h&&y&&s.modifiers.disabled,g&&s.modifiers.ariaDisabled),disabled:K?h:null,"aria-disabled":h||g,tabIndex:h?K?null:-1:g?null:void 0,onClick:e=>C(e,n,i)},g?L:null,{id:`pf-tab-${n}-${o||B}`,"aria-controls":R,tabContentRef:i,ouiaId:b,href:y,role:"tab","aria-selected":n===w},T),t);return l.createElement("li",{className:(0,p.A)(s.tabsItem,n===w&&s.modifiers.current,(k||I)&&s.modifiers.action,(h||g)&&s.modifiers.disabled,m),role:"presentation"},E?l.createElement(f.m,Object.assign({},E.props),$):$,I&&I,void 0!==k&&l.createElement(v,{"aria-label":O||"Close tab",onClick:e=>k(e,n,i),isDisabled:S},l.createElement(u.Ay,null)))},x=l.forwardRef(((e,t)=>l.createElement(g,Object.assign({innerRef:t},e))));x.displayName="Tab";var y=n(73530),A=n(91918),E=n(89015);const O=(0,n(68419).w)({name:"PlusIcon",height:512,width:448,svgPath:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0});var S=n(47931);n(87034);const I="pf-m-padding",T="pf-v5-c-tab-content",L={default:"",light300:"pf-m-light-300"},N=e=>{var{id:t,activeKey:n,"aria-label":i,child:s,children:r,className:c,eventKey:d,innerRef:f,ouiaId:u,ouiaSafe:b}=e,h=(0,a.__rest)(e,["id","activeKey","aria-label","child","children","className","eventKey","innerRef","ouiaId","ouiaSafe"]);if(r||s){let e;return e=i?null:r?`${t}`:`pf-tab-${s.props.eventKey}-${t}`,l.createElement(m,null,(({variant:a})=>l.createElement("section",Object.assign({ref:f,hidden:r?null:s.props.eventKey!==n,className:r?(0,p.A)(T,c,L[a]):(0,p.A)(T,s.props.className,L[a]),id:r?t:`pf-tab-section-${s.props.eventKey}-${t}`,"aria-label":i,"aria-labelledby":e,role:"tabpanel",tabIndex:0},(0,o.getOUIAProps)("TabContent",u,b),h),r||s.props.children)))}return null},w=l.forwardRef(((e,t)=>l.createElement(N,Object.assign({},e,{innerRef:t}))));var _=n(17694),B=n(52073),C=n(74225),k=n(94494),R=n(75797);const K=e=>{var{children:t,className:n=""}=e,i=(0,a.__rest)(e,["children","className"]);return l.createElement("span",Object.assign({className:(0,p.A)(s.tabsItemText,n)},i),t)};K.displayName="TabTitleText";const $=e=>{var{className:t,overflowingTabs:n=[],showTabCount:l,defaultTitleText:o="More",toggleAriaLabel:r,zIndex:d=9999}=e,m=(0,a.__rest)(e,["className","overflowingTabs","showTabCount","defaultTitleText","toggleAriaLabel","zIndex"]);const f=i().useRef(),u=i().useRef(),b=i().useRef(),[h,v]=i().useState(!1),{localActiveKey:g,handleTabClick:x}=i().useContext(c),y=()=>{v(!1),u.current.focus()},A=e=>{var t;const n=null===(t=null==f?void 0:f.current)||void 0===t?void 0:t.contains(e.target);h&&n&&"Escape"===e.key&&y()},O=e=>{var t,n;const a=!(null===(t=null==f?void 0:f.current)||void 0===t?void 0:t.contains(e.target)),l=!(null===(n=null==u?void 0:u.current)||void 0===n?void 0:n.contains(e.target));h&&a&&l&&y()};i().useEffect((()=>(window.addEventListener("click",O),window.addEventListener("keydown",A),()=>{window.removeEventListener("click",O),window.removeEventListener("keydown",A)})),[h,f,u]);const S=n.find((e=>e.eventKey===g)),I=(null==S?void 0:S.title)?S.title:o,T=i().createElement("li",Object.assign({className:(0,p.A)(s.tabsItem,s.modifiers.overflow,S&&s.modifiers.current,t),role:"presentation",ref:b},m),i().createElement("button",{type:"button",className:(0,p.A)(s.tabsLink,h&&s.modifiers.expanded),onClick:()=>(v((e=>!e)),void setTimeout((()=>{if(null==f?void 0:f.current){const e=f.current.querySelector("li > button,input:not(:disabled)");e&&e.focus()}}),0)),"aria-label":r,"aria-haspopup":"menu","aria-expanded":h,role:"tab",ref:u},i().createElement(K,null,I,l&&I===o&&` (${n.length})`),i().createElement("span",{className:s.tabsLinkToggleIcon},i().createElement(E.default,null)))),L=n.map((e=>i().createElement(B.D,{key:e.eventKey,itemId:e.eventKey,isSelected:g===e.eventKey},e.title))),N=i().createElement(C.W,{ref:f,onSelect:(e,t)=>((e,t)=>{y();const a=n.find((e=>e.eventKey===t)).tabContentRef;x(e,t,a)})(e,t)},i().createElement(k.r,null,i().createElement(R.c,null,L)));return i().createElement(i().Fragment,null,T,i().createElement(_.N,{triggerRef:u,popper:N,popperRef:f,isVisible:h,minWidth:"revert",appendTo:b.current,zIndex:d}))};$.displayName="OverflowTab";var P,D=n(65518);!function(e){e.div="div",e.nav="nav"}(P||(P={}));const j={default:"",light300:s.modifiers.colorSchemeLight_300};class M extends l.Component{constructor(e){super(e),this.tabList=l.createRef(),this.leftScrollButtonRef=l.createRef(),this.direction="ltr",this.scrollTimeout=null,this.countOverflowingElements=e=>Array.from(e.children).filter((t=>!(0,S.Xv)(e,t,!1))).length,this.handleScrollButtons=()=>{const{isOverflowHorizontal:e}=this.props;clearTimeout(this.scrollTimeout),this.scrollTimeout=setTimeout((()=>{const t=this.tabList.current;let n=!0,a=!0,l=!1,i=0;if(t&&!this.props.isVertical&&!e){const e=!(0,S.Xv)(t,t.firstChild,!1),i=!(0,S.Xv)(t,t.lastChild,!1);l=e||i,n=!e,a=!i}e&&(i=this.countOverflowingElements(t)),this.setState({enableScrollButtons:l,disableBackScrollButton:n,disableForwardScrollButton:a,overflowingTabCount:i})}),100)},this.scrollBack=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,a,l;for(l=0;l<t.length&&!n;l++)(0,S.Xv)(e,t[l],!1)&&(n=t[l],a=t[l-1]);a&&("ltr"===this.direction?e.scrollLeft-=a.scrollWidth:e.scrollLeft+=a.scrollWidth)}},this.scrollForward=()=>{if(this.tabList.current){const e=this.tabList.current,t=Array.from(e.children);let n,a;for(let l=t.length-1;l>=0&&!n;l--)(0,S.Xv)(e,t[l],!1)&&(n=t[l],a=t[l+1]);a&&("ltr"===this.direction?e.scrollLeft+=a.scrollWidth:e.scrollLeft-=a.scrollWidth)}},this.hideScrollButtons=()=>{const{enableScrollButtons:e,renderScrollButtons:t,showScrollButtons:n}=this.state;e||n||!t||this.setState({renderScrollButtons:!1})},this.state={enableScrollButtons:!1,showScrollButtons:!1,renderScrollButtons:!1,disableBackScrollButton:!0,disableForwardScrollButton:!0,shownKeys:void 0!==this.props.defaultActiveKey?[this.props.defaultActiveKey]:[this.props.activeKey],uncontrolledActiveKey:this.props.defaultActiveKey,uncontrolledIsExpandedLocal:this.props.defaultIsExpanded,ouiaStateId:(0,o.getDefaultOUIAId)(M.displayName),overflowingTabCount:0},this.props.isVertical&&void 0!==this.props.expandable&&(this.props.toggleAriaLabel||this.props.toggleText||console.error("Tabs:","toggleAriaLabel or the toggleText prop is required to make the toggle button accessible"))}handleTabClick(e,t,n){const{shownKeys:a}=this.state,{onSelect:i,defaultActiveKey:s}=this.props;void 0!==s?this.setState({uncontrolledActiveKey:t}):i(e,t),n&&(l.Children.toArray(this.props.children).filter((e=>l.isValidElement(e))).filter((({props:e})=>e.tabContentRef&&e.tabContentRef.current)).forEach((e=>e.props.tabContentRef.current.hidden=!0)),n.current&&(n.current.hidden=!1)),this.props.mountOnEnter&&this.setState({shownKeys:a.concat(t)})}componentDidMount(){this.props.isVertical||(S.Sw&&window.addEventListener("resize",this.handleScrollButtons,!1),this.direction=(0,S.iJ)(this.tabList.current),this.handleScrollButtons())}componentWillUnmount(){var e;this.props.isVertical||S.Sw&&window.removeEventListener("resize",this.handleScrollButtons,!1),clearTimeout(this.scrollTimeout),null===(e=this.leftScrollButtonRef.current)||void 0===e||e.removeEventListener("transitionend",this.hideScrollButtons)}componentDidUpdate(e,t){const{activeKey:n,mountOnEnter:a,isOverflowHorizontal:i,children:s}=this.props,{shownKeys:o,overflowingTabCount:r,enableScrollButtons:c}=this.state;e.activeKey!==n&&a&&o.indexOf(n)<0&&this.setState({shownKeys:o.concat(n)}),e.children&&s&&l.Children.toArray(e.children).length!==l.Children.toArray(s).length&&this.handleScrollButtons();const d=this.countOverflowingElements(this.tabList.current);i&&d&&this.setState({overflowingTabCount:d+r}),!t.enableScrollButtons&&c?(this.setState({renderScrollButtons:!0}),setTimeout((()=>{var e;null===(e=this.leftScrollButtonRef.current)||void 0===e||e.addEventListener("transitionend",this.hideScrollButtons),this.setState({showScrollButtons:!0})}),100)):t.enableScrollButtons&&!c&&this.setState({showScrollButtons:!1}),this.direction=(0,S.iJ)(this.tabList.current)}render(){const e=this.props,{className:t,children:n,activeKey:i,defaultActiveKey:r,id:c,isFilled:m,isSecondary:f,isVertical:u,isBox:h,hasNoBorderBottom:v,leftScrollAriaLabel:g,rightScrollAriaLabel:x,backScrollAriaLabel:I,forwardScrollAriaLabel:T,"aria-label":L,component:N,ouiaId:_,ouiaSafe:B,mountOnEnter:C,unmountOnExit:k,usePageInsets:R,inset:K,variant:X,expandable:z,isExpanded:V,defaultIsExpanded:U,toggleText:F,toggleAriaLabel:H,addButtonAriaLabel:W,onToggle:q,onClose:J,onAdd:G,isOverflowHorizontal:Q}=e,Y=(0,a.__rest)(e,["className","children","activeKey","defaultActiveKey","id","isFilled","isSecondary","isVertical","isBox","hasNoBorderBottom","leftScrollAriaLabel","rightScrollAriaLabel","backScrollAriaLabel","forwardScrollAriaLabel","aria-label","component","ouiaId","ouiaSafe","mountOnEnter","unmountOnExit","usePageInsets","inset","variant","expandable","isExpanded","defaultIsExpanded","toggleText","toggleAriaLabel","addButtonAriaLabel","onToggle","onClose","onAdd","isOverflowHorizontal"]),{showScrollButtons:Z,renderScrollButtons:ee,disableBackScrollButton:te,disableForwardScrollButton:ne,shownKeys:ae,uncontrolledActiveKey:le,uncontrolledIsExpandedLocal:ie,overflowingTabCount:se}=this.state,oe=l.Children.toArray(n).filter((e=>l.isValidElement(e))).filter((({props:e})=>!e.isHidden)),re=oe.slice(0,oe.length-se),ce=oe.slice(oe.length-se).map((e=>e.props)),de=c||(0,S.LP)(),me=N===P.nav?"nav":"div",pe=void 0!==r?le:i,fe=void 0!==U?ie:V,ue=(e,t)=>{void 0===V?this.setState({uncontrolledIsExpandedLocal:t}):q(e,t)},be=Q&&se>0,he="object"==typeof Q?Object.assign({},Q):{};return l.createElement(d,{value:{variant:X,mountOnEnter:C,unmountOnExit:k,localActiveKey:pe,uniqueId:de,handleTabClick:(...e)=>this.handleTabClick(...e),handleTabClose:J}},l.createElement(me,Object.assign({"aria-label":L,className:(0,p.A)(s.tabs,m&&s.modifiers.fill,f&&s.modifiers.secondary,u&&s.modifiers.vertical,u&&z&&(0,S.ay)(z,s),u&&z&&fe&&s.modifiers.expanded,h&&s.modifiers.box,Z&&s.modifiers.scrollable,R&&s.modifiers.pageInsets,v&&s.modifiers.noBorderBottom,(0,S.ay)(K,s),j[X],be&&s.modifiers.overflow,t)},(0,o.getOUIAProps)(M.displayName,void 0!==_?_:this.state.ouiaStateId,B),{id:c&&c},Y),z&&u&&l.createElement(D.N,null,(e=>l.createElement("div",{className:(0,p.A)(s.tabsToggle)},l.createElement("div",{className:(0,p.A)(s.tabsToggleButton)},l.createElement(b.$n,{onClick:e=>ue(e,!fe),variant:"plain","aria-label":H,"aria-expanded":fe,id:`${e}-button`,"aria-labelledby":`${e}-text ${e}-button`},l.createElement("span",{className:(0,p.A)(s.tabsToggleIcon)},l.createElement(E.default,{"arian-hidden":"true"})),F&&l.createElement("span",{className:(0,p.A)(s.tabsToggleText),id:`${e}-text`},F)))))),ee&&l.createElement("button",{type:"button",className:(0,p.A)(s.tabsScrollButton,f&&y.A.modifiers.secondary),"aria-label":I||g,onClick:this.scrollBack,disabled:te,"aria-hidden":te,ref:this.leftScrollButtonRef},l.createElement(A.default,null)),l.createElement("ul",{className:(0,p.A)(s.tabsList),ref:this.tabList,onScroll:this.handleScrollButtons,role:"tablist"},Q?re:oe,be&&l.createElement($,Object.assign({overflowingTabs:ce},he))),ee&&l.createElement("button",{type:"button",className:(0,p.A)(s.tabsScrollButton,f&&y.A.modifiers.secondary),"aria-label":T||x,onClick:this.scrollForward,disabled:ne,"aria-hidden":ne},l.createElement(E.default,null)),void 0!==G&&l.createElement("span",{className:(0,p.A)(s.tabsAdd)},l.createElement(b.$n,{variant:"plain","aria-label":W||"Add tab",onClick:G},l.createElement(O,null)))),oe.filter((e=>e.props.children&&!(k&&e.props.eventKey!==pe)&&!(C&&-1===ae.indexOf(e.props.eventKey)))).map((e=>l.createElement(w,{key:e.props.eventKey,activeKey:pe,child:e,id:e.props.id||de,ouiaId:e.props.ouiaId}))))}}M.displayName="Tabs",M.defaultProps={activeKey:0,onSelect:()=>{},isFilled:!1,isSecondary:!1,isVertical:!1,isBox:!1,hasNoBorderBottom:!1,leftScrollAriaLabel:"Scroll left",backScrollAriaLabel:"Scroll back",rightScrollAriaLabel:"Scroll right",forwardScrollAriaLabel:"Scroll forward",component:P.div,mountOnEnter:!1,unmountOnExit:!1,ouiaSafe:!0,variant:"default",onToggle:(e,t)=>{}};const X=e=>{var{children:t,className:n,hasPadding:i}=e,s=(0,a.__rest)(e,["children","className","hasPadding"]);return l.createElement("div",Object.assign({className:(0,p.A)("pf-v5-c-tab-content__body",i&&I,n)},s),t)};X.displayName="TabContentBody";const z=e=>{var{children:t,className:n=""}=e,i=(0,a.__rest)(e,["children","className"]);return l.createElement("span",Object.assign({className:(0,p.A)(s.tabsItemIcon,n)},i),t)};z.displayName="TabTitleIcon"},31398:(e,t,n)=>{n.r(t),n.d(t,{getDefaultOUIAId:()=>d,getOUIAProps:()=>o,useOUIAId:()=>c,useOUIAProps:()=>r});var a=n(93345);let l=0;const i="OUIA-Generated-",s={};function o(e,t,n=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const r=(e,t,n=!0,a)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,a)}),c=(e,t,n)=>{const l=(0,a.useMemo)((()=>d(e,n)),[e,n]);return null!=t?t:l};function d(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,s[n]||(s[n]=0),`${i}${e}-${t?`${t}-`:""}${++s[n]}`}catch(n){return`${i}${e}-${t?`${t}-`:""}${++l}`}}},68419:(e,t,n)=>{n.d(t,{w:()=>s});var a=n(8674),l=n(93345);let i=0;function s({name:e,xOffset:t=0,yOffset:n=0,width:s,height:o,svgPath:r}){var c;return c=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{title:i,className:c}=e,d=(0,a.__rest)(e,["title","className"]),m=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(i),f=[t,n,s,o].join(" ");return l.createElement("svg",Object.assign({className:m,viewBox:f,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&l.createElement("title",{id:this.id},i),l.createElement("path",{d:r}))}},c.displayName=e,c}},89015:(e,t,n)=>{n.r(t),n.d(t,{AngleRightIcon:()=>i,AngleRightIconConfig:()=>l,default:()=>s});var a=n(68419);const l={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},i=(0,a.w)(l),s=i},44397:(e,t,n)=>{n.d(t,{Ay:()=>a});const a=(0,n(68419).w)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},72528:(e,t,n)=>{n.d(t,{A:()=>a}),n(21741);const a={badge:"pf-v5-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-v5-theme-dark"}},73530:(e,t,n)=>{n.d(t,{A:()=>a}),n(30935);const a={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}}}]);
"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[167],{56787:(e,n,t)=>{t.d(n,{L:()=>d});var o=t(70655),i=t(92950),s=t(73699),r=t(99355),l=t(17352),a=t(62472);const d=e=>{var{onSelect:n,ref:t,ouiaId:p,ouiaSafe:c,alignments:m,contextProps:u,menuAppendTo:h="inline",isFlipEnabled:g=!0,removeFindDomNode:f=!1,zIndex:C=9999}=e,b=(0,o.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return i.createElement(r.Dl.Provider,{value:Object.assign({onSelect:e=>n&&n(e),toggleTextClass:s.Z.dropdownToggleText,toggleIconClass:s.Z.dropdownToggleImage,toggleIndicatorClass:s.Z.dropdownToggleIcon,menuClass:s.Z.dropdownMenu,itemClass:s.Z.dropdownMenuItem,toggleClass:s.Z.dropdownToggle,baseClass:s.Z.dropdown,baseComponent:"div",sectionClass:s.Z.dropdownGroup,sectionTitleClass:s.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:s.Z.modifiers.disabled,plainTextClass:s.Z.modifiers.text,ouiaId:(0,a.Z1)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName,alignments:m},u)},i.createElement(l.R,Object.assign({menuAppendTo:h,isFlipEnabled:g,removeFindDomNode:f,zIndex:C},b)))};d.displayName="Dropdown"},84457:(e,n,t)=>{t.d(n,{h:()=>a});var o=t(70655),i=t(92950),s=t(33676),r=t(99355),l=t(62472);const a=e=>{var{children:n,className:t,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:m=!1,href:u,tooltip:h,tooltipProps:g={},listItemClassName:f,onClick:C,ref:b,additionalChild:E,customChild:v,tabIndex:y=-1,icon:T=null,autoFocus:R,description:w=null,styleChildren:D,ouiaId:x,ouiaSafe:O}=e,N=(0,o.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const Z=(0,l.S$)(a.displayName,x,O);return i.createElement(r.e4.Consumer,null,(e=>i.createElement(s.n,Object.assign({context:e,role:"menuitem",tabIndex:y,className:t,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:m,href:u,tooltip:h,tooltipProps:g,listItemClassName:f,onClick:C,additionalChild:E,customChild:v,icon:T,autoFocus:R,styleChildren:D,description:w},Z,N),n)))};a.displayName="DropdownItem"},94868:(e,n,t)=>{t.d(n,{h:()=>p});var o=t(70655),i=t(92950),s=t(12181),r=t(73699),l=t(38296),a=t(80164),d=t(99355);class p extends i.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const t=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(t),e.stopPropagation()}else if("ArrowUp"===e.key){const t=n.length,o=n.slice(t-1,t),i=o&&o[0];p.focusFirstRef(i),e.stopPropagation()}},this.childKeyHandler=(e,n,t,o=!1)=>{(0,a.qG)(e,n,t,this.refsCollection,this.props.isGrouped?this.refsCollection:i.Children.toArray(this.props.children),o)},this.sendRef=(e,n,t,o)=>{this.refsCollection[e]=[],n.map(((n,t)=>{n?n.getAttribute?this.refsCollection[e][t]=o?null:n:this.refsCollection[e][t]=s.findDOMNode(n):this.refsCollection[e][t]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return i.Children.map(e,(e=>{const t=e,o={};return t.props&&t.props.children&&(Array.isArray(t.props.children)?o.children=i.Children.map(t.props.children,(e=>i.cloneElement(e,{index:n++}))):o.children=i.cloneElement(t.props.children,{index:n++})),i.cloneElement(t,o)}))}return i.Children.map(e,((e,n)=>i.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:t,position:s,children:p,component:c,isGrouped:m,setMenuComponentRef:u,openedOnEnter:h,alignments:g}=e,f=(0,o.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return i.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?i.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:o})=>i.createElement("div",{className:(0,l.i)(o,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,onClick:n=>e&&e(n),ref:u},p))):m&&i.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:o})=>{const p=o||"div";return i.createElement(p,Object.assign({},f,{className:(0,l.i)(e,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())}))||i.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:o})=>{const p=o||c;return i.createElement(p,Object.assign({},f,{className:(0,l.i)(e,s===d.ir.right&&r.Z.modifiers.alignRight,(0,a.wt)(g,r.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[r.Z.dropdownToggle,r.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,t)=>{t.d(n,{R:()=>c});var o=t(70655),i=t(92950),s=t(73699),r=t(38296),l=t(94868),a=t(99355),d=t(62472),p=t(16438);class c extends i.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=i.createRef(),this.menuComponentRef=i.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:t,direction:m,dropdownItems:u,isOpen:h,isPlain:g,isText:f,isGrouped:C,isFullHeight:b,onSelect:E,position:v,toggle:y,autoFocus:T,menuAppendTo:R,isFlipEnabled:w,removeFindDomNode:D,zIndex:x}=e,O=(0,o.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]),N=y.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let Z,P,I=!1;u&&u.length>0?(Z="ul",P=u,I=!0):(Z="div",P=i.Children.toArray(n));const k=this.openedOnEnter,A=w&&"inline"!==R;return i.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:o,ouiaId:c,ouiaComponentType:u,ouiaSafe:E,alignments:w})=>{const F=n,M=i.createElement(l.h,{className:(0,r.i)(A&&s.Z.modifiers.static),setMenuComponentRef:this.setMenuComponentRef,component:Z,isOpen:h,position:v,"aria-labelledby":o?`${o}-toggle`:N,isGrouped:C,autoFocus:k&&T,alignments:w},P),S=i.createElement("div",{className:(0,r.i)(e,m===a.dw.up&&s.Z.modifiers.top,v===a.ir.right&&s.Z.modifiers.alignRight,h&&s.Z.modifiers.expanded,t)},h&&M),_=i.createElement(F,Object.assign({},O,{className:(0,r.i)(e,m===a.dw.up&&s.Z.modifiers.top,v===a.ir.right&&s.Z.modifiers.alignRight,h&&s.Z.modifiers.expanded,b&&s.Z.modifiers.fullHeight,t),ref:this.baseComponentRef},(0,d.dp)(u,c,E)),i.Children.map(y,(e=>i.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:N,isPlain:g,isText:f,"aria-haspopup":I,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===R&&h&&M);return"inline"===R?_:i.createElement(p.r,{trigger:_,popper:S,direction:m,position:v,appendTo:"parent"===R?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():R,isVisible:h,removeFindDomNode:D,zIndex:x,popperMatchesTriggerWidth:!1})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!0}},94024:(e,n,t)=>{t.d(n,{a:()=>l});var o=t(70655),i=t(92950),s=t(62165),r=t(1024);const l=e=>{var{id:n="",children:t=null,className:l="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:m=!1,isPlain:u=!1,isDisabled:h=!1,bubbleEvent:g=!1,onToggle:f=(()=>{}),ref:C}=e,b=(0,o.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return i.createElement(r.Z,Object.assign({id:n,className:l,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:m,isPlain:u,isDisabled:h,onToggle:f,bubbleEvent:g},b),i.createElement(s.ZP,null))};l.displayName="KebabToggle"},1024:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(70655),i=t(92950),s=t(73699),r=t(99355),l=t(38296),a=t(1774);const d={default:"",primary:s.Z.modifiers.primary,secondary:s.Z.modifiers.secondary};class p extends i.Component{constructor(){super(...arguments),this.buttonRef=i.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:t,onToggle:o,getMenuRef:i}=this.props,s=i&&i(),r=t&&t.current&&t.current.contains(e.target),l=s&&s.contains&&s.contains(e.target);!n||r||l||null==o||o(!1,e)},this.onEscPress=e=>{var n,t,o;const{parentRef:i,getMenuRef:s}=this.props,r=s&&s(),l=i&&i.current&&i.current.contains(e.target),d=r&&r.contains&&r.contains(e.target);!this.props.isOpen||e.key!==a.yu.Escape&&"Tab"!==e.key||!l&&!d||(null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!1,e),null===(o=this.buttonRef.current)||void 0===o||o.focus())},this.onKeyDown=e=>{var n,t,o,i,s,r;("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(i=(o=this.props).onToggle)||void 0===i||i.call(o,!this.props.isOpen,e),null===(r=(s=this.props).onEnter)||void 0===r||r.call(s)):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:t,isOpen:a,isDisabled:p,isPlain:c,isText:m,isPrimary:u,isSplitButton:h,toggleVariant:g,onToggle:f,"aria-haspopup":C,isActive:b,bubbleEvent:E,onEnter:v,parentRef:y,getMenuRef:T,id:R,type:w}=e,D=(0,o.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return i.createElement(r.Dl.Consumer,null,(({toggleClass:e})=>i.createElement("button",Object.assign({},D,{id:R,ref:this.buttonRef,className:(0,l.i)(h?s.Z.dropdownToggleButton:e||s.Z.dropdownToggle,b&&s.Z.modifiers.active,c&&s.Z.modifiers.plain,m&&s.Z.modifiers.text,u&&s.Z.modifiers.primary,g&&d[g],n),type:w||"button",onClick:e=>null==f?void 0:f(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),t)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},62165:(e,n,t)=>{t.d(n,{HJ:()=>s,Lf:()=>i,ZP:()=>r});var o=t(40400);const i={name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0},s=(0,o.IU)(i),r=s}}]);
//# sourceMappingURL=../sourcemaps/167.151f1f2315aa0351d2e8bdc1983d496f.js.map
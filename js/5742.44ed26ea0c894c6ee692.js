"use strict";(self.webpackChunkedge=self.webpackChunkedge||[]).push([[5742],{95742:(e,a,s)=>{s.r(a),s.d(a,{Card:()=>y,CardBody:()=>S,CardContext:()=>I,CardExpandableContent:()=>O,CardFooter:()=>x,CardHeader:()=>P,CardTitle:()=>j});var l=s(8674),t=s(93345);s(17627);const i="pf-m-selectable",n="pf-m-clickable",c="pf-m-selected",d="pf-m-current",r="pf-m-disabled",o="pf-m-selectable-raised",m="pf-m-non-selectable-raised",p="pf-m-selected-raised",b="pf-m-compact",u="pf-m-display-lg",h="pf-m-flat",f="pf-m-plain",C="pf-m-rounded",g="pf-m-expanded",v="pf-m-full-height",N="pf-m-toggle-right",_="pf-m-no-offset",E="pf-m-no-fill";var A=s(33774),k=s(31398);const I=t.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1,isClickable:!1,isSelectable:!1,isSelected:!1,isClicked:!1,isDisabled:!1}),y=e=>{var{children:a,id:s="",className:N,component:_="div",isCompact:E=!1,isSelectable:S=!1,isClickable:O=!1,isDisabled:x=!1,isSelectableRaised:j=!1,isSelected:D=!1,isClicked:F=!1,isDisabledRaised:L=!1,isFlat:R=!1,isExpanded:w=!1,isRounded:T=!1,isLarge:B=!1,isFullHeight:P=!1,isPlain:H=!1,ouiaId:U,ouiaSafe:V=!0,hasSelectableInput:$=!1,selectableInputAriaLabel:q,onSelectableInputChange:W=()=>{}}=e,M=(0,l.__rest)(e,["children","id","className","component","isCompact","isSelectable","isClickable","isDisabled","isSelectableRaised","isSelected","isClicked","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const z=_,G=(0,k.useOUIAProps)(y.displayName,U,V),[J,K]=t.useState(""),[Q,X]=t.useState();E&&B&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),B=!1);const Y=t.useRef(!1);return t.useEffect((()=>{q?X({"aria-label":q}):J?X({"aria-labelledby":J}):$&&!Y.current&&(X({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[$,q,J]),t.createElement(I.Provider,{value:{cardId:s,registerTitleId:e=>{K(e),Y.current=!!e},isExpanded:w,isClickable:O,isSelectable:S,isSelected:D,isClicked:F,isDisabled:x,hasSelectableInput:$}},$&&t.createElement("input",Object.assign({className:"pf-v5-screen-reader",id:`${s}-input`},Q,{type:"checkbox",checked:D,onChange:e=>W(e,s),disabled:L,tabIndex:-1})),t.createElement(z,Object.assign({id:s,className:(0,A.A)("pf-v5-c-card",E&&b,w&&g,R&&h,T&&C,B&&u,P&&v,H&&f,L?(0,A.A)(m):j?(0,A.A)(o,D&&p):S&&O?(0,A.A)(i,n,(D||F)&&d):S?(0,A.A)(i,D&&c):O?(0,A.A)(n,F&&d):"",x&&r,N),tabIndex:j?"0":void 0},M,G),a))};y.displayName="Card";const S=e=>{var{children:a,className:s,component:i="div",isFilled:n=!0}=e,c=(0,l.__rest)(e,["children","className","component","isFilled"]);const d=i;return t.createElement(d,Object.assign({className:(0,A.A)("pf-v5-c-card__body",!n&&E,s)},c),a)};S.displayName="CardBody";const O=e=>{var{children:a,className:s}=e,i=(0,l.__rest)(e,["children","className"]);return t.createElement(I.Consumer,null,(({isExpanded:e})=>e?t.createElement("div",Object.assign({className:(0,A.A)("pf-v5-c-card__expandable-content",s)},i),a):null))};O.displayName="CardExpandableContent";const x=e=>{var{children:a,className:s,component:i="div"}=e,n=(0,l.__rest)(e,["children","className","component"]);const c=i;return t.createElement(c,Object.assign({className:(0,A.A)("pf-v5-c-card__footer",s)},n),a)};x.displayName="CardFooter";const j=e=>{var{children:a,className:s,component:i="div"}=e,n=(0,l.__rest)(e,["children","className","component"]);const{cardId:c,registerTitleId:d}=t.useContext(I),r=i,o=c?`${c}-title`:"";return t.useEffect((()=>(d(o),()=>d(""))),[d,o]),t.createElement("div",{className:(0,A.A)("pf-v5-c-card__title")},t.createElement(r,Object.assign({className:(0,A.A)("pf-v5-c-card__title-text",s),id:o||void 0},n),a))};j.displayName="CardTitle";const D=e=>{var{children:a,className:s}=e,i=(0,l.__rest)(e,["children","className"]);return t.createElement("div",Object.assign({className:(0,A.A)("pf-v5-c-card__header-main",s)},i),a)};D.displayName="CardHeaderMain";const F=e=>{var{children:a,className:s,hasNoOffset:i=!1}=e,n=(0,l.__rest)(e,["children","className","hasNoOffset"]);return t.createElement("div",Object.assign({className:(0,A.A)("pf-v5-c-card__actions",i&&_,s)},n),a)};F.displayName="CardActions";const L=e=>{var{children:a,className:s}=e,i=(0,l.__rest)(e,["children","className"]);return t.createElement("div",Object.assign({className:(0,A.A)("pf-v5-c-card__selectable-actions",s)},i),a)};L.displayName="CardSelectableActions";var R=s(72583),w=s(89015),T=s(73539),B=s(83873);const P=e=>{var{children:a,className:s,actions:i,selectableActions:n,id:c,onExpand:d,toggleButtonProps:r,isToggleRightAligned:o}=e,m=(0,l.__rest)(e,["children","className","actions","selectableActions","id","onExpand","toggleButtonProps","isToggleRightAligned"]);return t.createElement(I.Consumer,null,(({cardId:e,isClickable:l,isSelectable:p,isSelected:b,isClicked:u,isDisabled:h,hasSelectableInput:f})=>{const C=t.createElement("div",{className:(0,A.A)("pf-v5-c-card__header-toggle")},t.createElement(R.$n,Object.assign({variant:"plain",type:"button",onClick:a=>{d(a,e)}},r),t.createElement("span",{className:(0,A.A)("pf-v5-c-card__header-toggle-icon")},t.createElement(w.default,{"aria-hidden":"true"})))),g=l&&!p||p&&!l,v=f;(null==i?void 0:i.actions)&&g&&!v&&console.warn((l?"Clickable":"Selectable")+" only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.");const _=e=>{(null==n?void 0:n.onClickAction)?n.onClickAction(e):(null==n?void 0:n.to)&&window.open(n.to,n.isExternalLink?"_blank":"_self")},E=()=>{var e;const a={className:"pf-m-standalone",inputClassName:l&&!p&&"pf-v5-screen-reader",label:t.createElement(t.Fragment,null),"aria-label":n.selectableActionAriaLabel,"aria-labelledby":n.selectableActionAriaLabelledby,id:n.selectableActionId,name:n.name,isDisabled:h},s=null!==(e=n.isChecked)&&void 0!==e?e:b;return l&&!p?Object.assign(Object.assign({},a),{onClick:_,isChecked:u}):p?Object.assign(Object.assign({},a),{onChange:n.onChange,isChecked:s}):a};return t.createElement("div",Object.assign({className:(0,A.A)("pf-v5-c-card__header",o&&N,s),id:c},m),d&&!o&&C,(i||n&&(l||p))&&t.createElement(F,{className:null==i?void 0:i.className,hasNoOffset:(null==i?void 0:i.hasNoOffset)||(null==n?void 0:n.hasNoOffset)},null==i?void 0:i.actions,n&&(l||p)&&t.createElement(L,{className:null==n?void 0:n.className},"single"===(null==n?void 0:n.variant)||l&&!p?t.createElement(T.s,Object.assign({},E())):t.createElement(B.S,Object.assign({},E())))),a&&t.createElement(D,null,a),d&&o&&C)}))};P.displayName="CardHeader"},73539:(e,a,s)=>{s.d(a,{s:()=>r});var l=s(8674),t=s(93345);s(5637);const i="pf-m-standalone",n="pf-m-disabled";var c=s(33774),d=s(31398);class r extends t.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},e.label||e["aria-label"]||console.error("Radio:","Radio requires an aria-label to be specified"),this.state={ouiaStateId:(0,d.getDefaultOUIAId)(r.displayName)}}render(){const e=this.props,{"aria-label":a,checked:s,className:o,inputClassName:m,defaultChecked:p,isLabelWrapped:b,isLabelBeforeButton:u,isChecked:h,isDisabled:f,isValid:C,label:g,onChange:v,description:N,body:_,ouiaId:E,ouiaSafe:A=!0,component:k}=e,I=(0,l.__rest)(e,["aria-label","checked","className","inputClassName","defaultChecked","isLabelWrapped","isLabelBeforeButton","isChecked","isDisabled","isValid","label","onChange","description","body","ouiaId","ouiaSafe","component"]);I.id||console.error("Radio:","id is required to make input accessible");const y=t.createElement("input",Object.assign({},I,{className:(0,c.A)("pf-v5-c-radio__input",m),type:"radio",onChange:this.handleChange,"aria-invalid":!C,disabled:f,checked:s||h},void 0===s&&{defaultChecked:p},!g&&{"aria-label":a},(0,d.getOUIAProps)(r.displayName,void 0!==E?E:this.state.ouiaStateId,A))),S=b&&!k||"label"===k,O=S?"span":"label",x=g?t.createElement(O,{className:(0,c.A)("pf-v5-c-radio__label",f&&n),htmlFor:S?void 0:I.id},g):null,j=null!=k?k:S?"label":"div";return t.createElement(j,{className:(0,c.A)("pf-v5-c-radio",!g&&i,o),htmlFor:S?I.id:void 0},u?t.createElement(t.Fragment,null,x,y):t.createElement(t.Fragment,null,y,x),N&&t.createElement("span",{className:(0,c.A)("pf-v5-c-radio__description")},N),_&&t.createElement("span",{className:(0,c.A)("pf-v5-c-radio__body")},_))}}r.displayName="Radio",r.defaultProps={className:"",isDisabled:!1,isValid:!0,onChange:()=>{}}}}]);
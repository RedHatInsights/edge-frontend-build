(self.webpackChunkedge=self.webpackChunkedge||[]).push([[4968,1398,1396,7825],{55665:(e,a,r)=>{"use strict";r.d(a,{E:()=>s});var t=r(8674),i=r(93345),l=r(33774),n=r(72528);const s=e=>{var{isRead:a=!1,className:r="",children:s="",screenReaderText:o}=e,d=(0,t.__rest)(e,["isRead","className","children","screenReaderText"]);return i.createElement("span",Object.assign({},d,{className:(0,l.A)(n.A.badge,a?n.A.modifiers.read:n.A.modifiers.unread,r)}),s,o&&i.createElement("span",{className:"pf-v5-screen-reader"},o))};s.displayName="Badge"},72583:(e,a,r)=>{"use strict";r.d(a,{$n:()=>u,Ak:()=>t,Mp:()=>l,VQ:()=>i});var t,i,l,n=r(8674),s=r(93345),o=r(73530),d=r(33774),c=r(932),m=r(31398),p=r(55665);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(t||(t={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(i||(i={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(l||(l={}));const f=e=>{var{children:a=null,className:r="",component:f="button",isActive:g=!1,isBlock:b=!1,isDisabled:v=!1,isAriaDisabled:A=!1,isLoading:h=null,isDanger:_=!1,spinnerAriaValueText:N,spinnerAriaLabelledBy:E,spinnerAriaLabel:x,size:y=l.default,inoperableEvents:F=["onClick","onKeyPress"],isInline:O=!1,type:G=i.button,variant:I=t.primary,iconPosition:T="start","aria-label":j=null,icon:L=null,ouiaId:k,ouiaSafe:$=!0,tabIndex:P=null,innerRef:R,countOptions:w}=e,z=(0,n.__rest)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const C=(0,m.useOUIAProps)(u.displayName,k,$,I),H=f,D="button"===H,S=O&&"span"===H,B=F.reduce(((e,a)=>Object.assign(Object.assign({},e),{[a]:e=>{e.preventDefault()}})),{});return s.createElement(H,Object.assign({},z,A?B:null,{"aria-disabled":v||A,"aria-label":j,className:(0,d.A)(o.A.button,o.A.modifiers[I],b&&o.A.modifiers.block,v&&o.A.modifiers.disabled,A&&o.A.modifiers.ariaDisabled,g&&o.A.modifiers.active,O&&I===t.link&&o.A.modifiers.inline,_&&(I===t.secondary||I===t.link)&&o.A.modifiers.danger,null!==h&&I!==t.plain&&o.A.modifiers.progress,h&&o.A.modifiers.inProgress,y===l.sm&&o.A.modifiers.small,y===l.lg&&o.A.modifiers.displayLg,r),disabled:D?v:null,tabIndex:null!==P?P:v?D?null:-1:A?null:S?0:void 0,type:D||S?G:null,role:S?"button":null,ref:R},C),h&&s.createElement("span",{className:(0,d.A)(o.A.buttonProgress)},s.createElement(c.y,{size:c.J.md,isInline:O,"aria-valuetext":N,"aria-label":x,"aria-labelledby":E})),I===t.plain&&null===a&&L?L:null,I!==t.plain&&L&&("start"===T||"left"===T)&&s.createElement("span",{className:(0,d.A)(o.A.buttonIcon,o.A.modifiers.start)},L),a,I!==t.plain&&L&&("end"===T||"right"===T)&&s.createElement("span",{className:(0,d.A)(o.A.buttonIcon,o.A.modifiers.end)},L),w&&s.createElement("span",{className:(0,d.A)(o.A.buttonCount,w.className)},s.createElement(p.E,{isRead:w.isRead},w.count)))},u=s.forwardRef(((e,a)=>s.createElement(f,Object.assign({innerRef:a},e))));u.displayName="Button"},35600:(e,a,r)=>{"use strict";r.d(a,{K:()=>s});var t=r(8674),i=r(93345),l=r(70358),n=r(33774);const s=e=>{var{children:a=null,className:r=""}=e,s=(0,t.__rest)(e,["children","className"]);const o=(0,n.A)(l.A.formGroup,l.A.modifiers.action,r),d=i.createElement("div",{className:(0,n.A)(l.A.formActions)},a);return i.createElement("div",Object.assign({},s,{className:o}),i.createElement("div",{className:(0,n.A)(l.A.formGroupControl)},d))};s.displayName="ActionGroup"},73133:(e,a,r)=>{"use strict";r.d(a,{l:()=>d});var t=r(8674),i=r(93345),l=r(70358),n=r(33774);const s="--pf-v5-c-form--m-limit-width--MaxWidth",o=e=>{var{children:a=null,className:r="",isHorizontal:o=!1,isWidthLimited:d=!1,maxWidth:c="",innerRef:m}=e,p=(0,t.__rest)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return i.createElement("form",Object.assign({noValidate:!0},c&&{style:Object.assign({[s]:c},p.style)},p,{className:(0,n.A)(l.A.form,o&&l.A.modifiers.horizontal,(d||c)&&l.A.modifiers.limitWidth,r),ref:m}),a)},d=i.forwardRef(((e,a)=>i.createElement(o,Object.assign({innerRef:a},e))));d.displayName="Form"},56780:(e,a,r)=>{"use strict";r.d(a,{g:()=>d});var t=r(8674),i=r(93345),l=r(70358),n=r(57709),s=r(33774),o=r(65518);const d=e=>{var{children:a=null,className:r="",label:d,labelInfo:c,labelIcon:m,isRequired:p=!1,isInline:f=!1,hasNoPaddingTop:u=!1,isStack:g=!1,fieldId:b,role:v}=e,A=(0,t.__rest)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const h="group"===v||"radiogroup"===v,_=h?"span":"label",N=i.createElement(i.Fragment,null,i.createElement(_,Object.assign({className:(0,s.A)(l.A.formLabel)},!h&&{htmlFor:b}),i.createElement("span",{className:(0,s.A)(l.A.formLabelText)},d),p&&i.createElement("span",{className:(0,s.A)(l.A.formLabelRequired),"aria-hidden":"true"}," ",n.L))," ",i.isValidElement(m)&&m);return i.createElement(o.N,null,(e=>i.createElement("div",Object.assign({className:(0,s.A)(l.A.formGroup,r)},v&&{role:v},h&&{"aria-labelledby":`${b||e}-legend`},A),d&&i.createElement("div",Object.assign({className:(0,s.A)(l.A.formGroupLabel,c&&l.A.modifiers.info,u&&l.A.modifiers.noPaddingTop)},h&&{id:`${b||e}-legend`}),c&&i.createElement(i.Fragment,null,i.createElement("div",{className:(0,s.A)(l.A.formGroupLabelMain)},N),i.createElement("div",{className:(0,s.A)(l.A.formGroupLabelInfo)},c)),!c&&N),i.createElement("div",{className:(0,s.A)(l.A.formGroupControl,f&&l.A.modifiers.inline,g&&l.A.modifiers.stack)},a))))};d.displayName="FormGroup"},2587:(e,a,r)=>{"use strict";r.r(a),r.d(a,{ActionGroup:()=>t.K,Form:()=>i.l,FormAlert:()=>c,FormContextConsumer:()=>x,FormContextProvider:()=>y,FormFieldGroup:()=>b,FormFieldGroupExpandable:()=>v,FormFieldGroupHeader:()=>A,FormGroup:()=>h.g,FormHelperText:()=>_,FormSection:()=>N,useFormContext:()=>F});var t=r(35600),i=r(73133),l=r(8674),n=r(93345),s=r.n(n),o=r(33774),d=r(70358);const c=e=>{var{children:a=null,className:r=""}=e,t=(0,l.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({},t,{className:(0,o.A)(`${d.A.form}__alert`,r)}),a)};c.displayName="FormAlert";var m=r(89015),p=r(72583);const f=e=>{var{className:a,onToggle:r,isExpanded:t,"aria-label":i,"aria-labelledby":s,toggleId:c}=e,f=(0,l.__rest)(e,["className","onToggle","isExpanded","aria-label","aria-labelledby","toggleId"]);return n.createElement("div",Object.assign({className:(0,o.A)(d.A.formFieldGroupToggle,a)},f),n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupToggleButton)},n.createElement(p.$n,{variant:"plain","aria-label":i,onClick:r,"aria-expanded":t,"aria-labelledby":s,id:c},n.createElement("span",{className:(0,o.A)(d.A.formFieldGroupToggleIcon)},n.createElement(m.default,{"aria-hidden":"true"})))))};f.displayName="FormFieldGroupToggle";var u=r(65518);const g=e=>{var{children:a,className:r,header:t,isExpandable:i,isExpanded:s,onToggle:c,toggleAriaLabel:m}=e,p=(0,l.__rest)(e,["children","className","header","isExpandable","isExpanded","onToggle","toggleAriaLabel"]);const g=t?t.props.titleText:null;return!i||m||g||console.error("FormFieldGroupExpandable:","toggleAriaLabel or the titleText prop of FormFieldGroupHeader is required to make the toggle button accessible"),n.createElement("div",Object.assign({className:(0,o.A)(d.A.formFieldGroup,s&&i&&d.A.modifiers.expanded,r),role:"group"},g&&{"aria-labelledby":`${t.props.titleText.id}`},p),i&&n.createElement(u.N,{prefix:"form-field-group-toggle"},(e=>n.createElement(f,Object.assign({onToggle:c,isExpanded:s,"aria-label":m,toggleId:e},g&&{"aria-labelledby":`${t.props.titleText.id} ${e}`})))),t&&t,(!i||i&&s)&&n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupBody)},a))};g.displayName="InternalFormFieldGroup";const b=e=>{var{children:a,className:r,header:t}=e,i=(0,l.__rest)(e,["children","className","header"]);return n.createElement(g,Object.assign({className:r,header:t},i),a)};b.displayName="FormFieldGroup";const v=e=>{var{children:a,className:r,header:t,isExpanded:i=!1,toggleAriaLabel:s}=e,o=(0,l.__rest)(e,["children","className","header","isExpanded","toggleAriaLabel"]);const[d,c]=(0,n.useState)(i);return n.createElement(g,Object.assign({className:r,header:t,isExpandable:!0,isExpanded:d,toggleAriaLabel:s,onToggle:()=>c(!d)},o),a)};v.displayName="FormFieldGroupExpandable";const A=e=>{var{className:a,titleText:r,titleDescription:t,actions:i}=e,s=(0,l.__rest)(e,["className","titleText","titleDescription","actions"]);return n.createElement("div",Object.assign({className:(0,o.A)(d.A.formFieldGroupHeader,a)},s),n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupHeaderMain)},r&&n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupHeaderTitle)},n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupHeaderTitleText),id:r.id},r.text)),t&&n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupHeaderDescription)},t)),n.createElement("div",{className:(0,o.A)(d.A.formFieldGroupHeaderActions)},i&&i))};A.displayName="FormFieldGroupHeader";var h=r(56780);const _=e=>{var{children:a=null,className:r=""}=e,t=(0,l.__rest)(e,["children","className"]);return n.createElement("div",Object.assign({className:(0,o.A)(d.A.formHelperText,r)},t),a)};_.displayName="FormHelperText";const N=e=>{var{className:a="",children:r,title:t="",titleElement:i="div"}=e,s=(0,l.__rest)(e,["className","children","title","titleElement"]);return n.createElement(u.N,{prefix:"pf-form-section-title"},(e=>n.createElement("section",Object.assign({className:(0,o.A)(d.A.formSection,a),role:"group"},t&&{"aria-labelledby":e},s),t&&n.createElement(i,{id:e,className:(0,o.A)(d.A.formSectionTitle,a)},t),r)))};N.displayName="FormSection";const E=s().createContext({}),x=E.Consumer,y=({initialValues:e,children:a})=>{var r;const[t,i]=s().useState(e||{}),[n,o]=s().useState({}),[d,c]=s().useState({}),[m,p]=s().useState({}),f=0===(null===(r=Object.keys(n))||void 0===r?void 0:r.length);return s().createElement(E.Provider,{value:{values:t,errors:n,touched:m,isValid:f,setValues:i,setErrors:o,getValue:e=>Object.entries(t).reduce(((a,[r,t])=>r===e?t:a),""),setValue:(e,a,r=!0)=>{var l;t[e]!==a&&(i((r=>Object.assign(Object.assign({},r),{[e]:a}))),r&&(null===(l=d[e])||void 0===l||l.call(d,a)))},getError:e=>Object.entries(n).reduce(((a,[r,t])=>r===e?t:a),""),setError:(e,a)=>n[e]!==a&&o((r=>{var t=e,i=(r[t],(0,l.__rest)(r,["symbol"==typeof t?t:t+""]));return Object.assign(Object.assign({},i),!!a&&{[e]:a})})),validate:()=>{var e;return null===(e=Object.entries(d))||void 0===e?void 0:e.reduce(((e,[a,r])=>{const i=r(t[a]);return i&&(e[a]=i),e}),{})},setValidator:(e,a)=>d[e]!==a&&c((r=>Object.assign(Object.assign({},r),{[e]:a}))),isTouched:e=>Object.entries(m).reduce(((a,[r,t])=>r===e?t:a),!1),setTouched:(e,a)=>m[e]!==a&&p((r=>{var t=e,i=(r[t],(0,l.__rest)(r,["symbol"==typeof t?t:t+""]));return Object.assign(Object.assign({},i),a&&{[e]:a})}))}},"function"==typeof a?s().createElement(E.Consumer,null,(e=>a(e))):a)};y.displayName="FormContextProvider";const F=()=>s().useContext(E)},932:(e,a,r)=>{"use strict";r.d(a,{y:()=>d,J:()=>o});var t=r(8674),i=r(93345);r(97553);const l={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var n=r(33774);const s="--pf-v5-c-spinner--diameter";var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));const d=e=>{var{className:a="",size:r="xl","aria-valuetext":o="Loading...",diameter:d,isInline:c=!1,"aria-label":m,"aria-labelledBy":p}=e,f=(0,t.__rest)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return i.createElement("svg",Object.assign({className:(0,n.A)(l.spinner,c?l.modifiers.inline:l.modifiers[r],a),role:"progressbar","aria-valuetext":o,viewBox:"0 0 100 100"},d&&{style:{[s]:d}},m&&{"aria-label":m},p&&{"aria-labelledBy":p},!m&&!p&&{"aria-label":"Contents"},f),i.createElement("circle",{className:l.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};d.displayName="Spinner"},65518:(e,a,r)=>{"use strict";r.d(a,{N:()=>n});var t=r(93345),i=r(47931);let l=0;class n extends t.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,i.LP)():l++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}n.displayName="GenerateId",n.defaultProps={prefix:"pf-random-id-",isRandom:!1}},31398:(e,a,r)=>{"use strict";r.r(a),r.d(a,{getDefaultOUIAId:()=>c,getOUIAProps:()=>s,useOUIAId:()=>d,useOUIAProps:()=>o});var t=r(93345);let i=0;const l="OUIA-Generated-",n={};function s(e,a,r=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":r,"data-ouia-component-id":a}}const o=(e,a,r=!0,t)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":r,"data-ouia-component-id":d(e,a,t)}),d=(e,a,r)=>{const i=(0,t.useMemo)((()=>c(e,r)),[e,r]);return null!=a?a:i};function c(e,a){try{let r;return r="undefined"!=typeof window?`${window.location.href}-${e}-${a||""}`:`${e}-${a||""}`,n[r]||(n[r]=0),`${l}${e}-${a?`${a}-`:""}${++n[r]}`}catch(r){return`${l}${e}-${a?`${a}-`:""}${++i}`}}},57709:(e,a,r)=>{"use strict";r.d(a,{L:()=>t});const t="*"},68419:(e,a,r)=>{"use strict";r.d(a,{w:()=>n});var t=r(8674),i=r(93345);let l=0;function n({name:e,xOffset:a=0,yOffset:r=0,width:n,height:s,svgPath:o}){var d;return d=class extends i.Component{constructor(){super(...arguments),this.id="icon-title-"+l++}render(){const e=this.props,{title:l,className:d}=e,c=(0,t.__rest)(e,["title","className"]),m=d?`pf-v5-svg ${d}`:"pf-v5-svg",p=Boolean(l),f=[a,r,n,s].join(" ");return i.createElement("svg",Object.assign({className:m,viewBox:f,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},c),p&&i.createElement("title",{id:this.id},l),i.createElement("path",{d:o}))}},d.displayName=e,d}},89015:(e,a,r)=>{"use strict";r.r(a),r.d(a,{AngleRightIcon:()=>l,AngleRightIconConfig:()=>i,default:()=>n});var t=r(68419);const i={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},l=(0,t.w)(i),n=l},72528:(e,a,r)=>{"use strict";r.d(a,{A:()=>t}),r(21741);const t={badge:"pf-v5-c-badge",modifiers:{read:"pf-m-read",unread:"pf-m-unread"},themeDark:"pf-v5-theme-dark"}},73530:(e,a,r)=>{"use strict";r.d(a,{A:()=>t}),r(30935);const t={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},70358:(e,a,r)=>{"use strict";r.d(a,{A:()=>t}),r(74895);const t={dirRtl:"pf-v5-m-dir-rtl",form:"pf-v5-c-form",formActions:"pf-v5-c-form__actions",formFieldGroup:"pf-v5-c-form__field-group",formFieldGroupBody:"pf-v5-c-form__field-group-body",formFieldGroupHeader:"pf-v5-c-form__field-group-header",formFieldGroupHeaderActions:"pf-v5-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-v5-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-v5-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-v5-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-v5-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-v5-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-v5-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-v5-c-form__field-group-toggle-icon",formFieldset:"pf-v5-c-form__fieldset",formGroup:"pf-v5-c-form__group",formGroupControl:"pf-v5-c-form__group-control",formGroupLabel:"pf-v5-c-form__group-label",formGroupLabelHelp:"pf-v5-c-form__group-label-help",formGroupLabelInfo:"pf-v5-c-form__group-label-info",formGroupLabelMain:"pf-v5-c-form__group-label-main",formHelperText:"pf-v5-c-form__helper-text",formHelperTextIcon:"pf-v5-c-form__helper-text-icon",formLabel:"pf-v5-c-form__label",formLabelRequired:"pf-v5-c-form__label-required",formLabelText:"pf-v5-c-form__label-text",formSection:"pf-v5-c-form__section",formSectionTitle:"pf-v5-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-v5-theme-dark"}},21741:()=>{},30935:()=>{},74895:()=>{},97553:()=>{}}]);
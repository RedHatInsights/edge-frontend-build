"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[9247],{66435:(e,t,a)=>{a.d(t,{M5:()=>v,oo:()=>y,lY:()=>x});var i=a(70655),n=a(92950),l=a(2466),o=a(38296),r=a(46043),s=a(92607),c=a(41724),d=a(20941),p=a(93174),m=a(9003),u=a(47173);const f=e=>{var{onClick:t,id:a,textId:l,contentId:o,isExpanded:r=!1}=e,s=(0,i.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return n.createElement(u.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${l}`,"aria-controls":`${a} ${o}`,"aria-expanded":r},s),r?n.createElement(m.ZP,{"aria-hidden":"true"}):n.createElement(p.ZP,{"aria-hidden":"true"}))};f.displayName="ClipboardCopyToggle";class h extends n.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:r,isReadOnly:s,isCode:c}=e,d=(0,i.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return n.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,o.i)(l.Z.clipboardCopyExpandableContent,t),onInput:e=>r(e.target.innerText,e),contentEditable:!s},d),c?n.createElement("pre",null,a):a)}}h.displayName="ClipboardCopyExpanded",h.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1};var b=a(62472);const x=(e,t)=>{navigator.clipboard.writeText(t.toString())};var y;!function(e){e.inline="inline",e.expansion="expansion",e.inlineCompact="inline-compact"}(y||(y={}));class v extends n.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.componentWillUnmount=()=>{this.timer&&window.clearTimeout(this.timer)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,switchDelay:r,isReadOnly:p,isCode:m,isBlock:u,exitDelay:x,maxWidth:y,entryDelay:g,onCopy:C,hoverTip:E,clickTip:N,textAriaLabel:_,toggleAriaLabel:Z,variant:T,position:I,className:k,additionalActions:w,ouiaId:D,ouiaSafe:O,removeFindDomNode:P}=e,L=(0,i.__rest)(e,["isExpanded","onChange","switchDelay","isReadOnly","isCode","isBlock","exitDelay","maxWidth","entryDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className","additionalActions","ouiaId","ouiaSafe","removeFindDomNode"]);return n.createElement("div",Object.assign({className:(0,o.i)(l.Z.clipboardCopy,"inline-compact"===T&&l.Z.modifiers.inline,u&&l.Z.modifiers.block,this.state.expanded&&l.Z.modifiers.expanded,k)},L,(0,b.dp)(v.displayName,D,O)),"inline-compact"===T&&n.createElement(c.w,{prefix:""},(e=>n.createElement(n.Fragment,null,!m&&n.createElement("span",{className:(0,o.i)(l.Z.clipboardCopyText),id:`text-input-${e}`},this.state.text),m&&n.createElement("code",{className:(0,o.i)(l.Z.clipboardCopyText,l.Z.modifiers.code),id:`text-input-${e}`},this.state.text),n.createElement("span",{className:(0,o.i)(l.Z.clipboardCopyActions)},n.createElement("span",{className:(0,o.i)(l.Z.clipboardCopyActionsItem)},n.createElement(d.u,{variant:"plain",exitDelay:x,entryDelay:g,maxWidth:y,position:I,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{C(e,this.state.text),this.setState({copied:!0})},onTooltipHidden:()=>this.setState({copied:!1})},this.state.copied?N:E)),w&&w)))),"inline-compact"!==T&&n.createElement(c.w,{prefix:""},(e=>n.createElement(n.Fragment,null,n.createElement("div",{className:(0,o.i)(l.Z.clipboardCopyGroup)},"expansion"===T&&n.createElement(f,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle-${e}`,textId:`text-input-${e}`,contentId:`content-${e}`,"aria-label":Z}),n.createElement(s.oi,{isReadOnly:p||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":_}),n.createElement(d.u,{exitDelay:x,entryDelay:g,maxWidth:y,position:I,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{C(e,this.state.text),this.setState({copied:!0})},onTooltipHidden:()=>this.setState({copied:!1}),removeFindDomNode:P},this.state.copied?N:E)),this.state.expanded&&n.createElement(h,{isReadOnly:p,isCode:m,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:Array.isArray(this.props.children)?this.props.children.join(""):this.props.children,expanded:this.props.isExpanded,copied:!1},void 0!==this.props.switchDelay&&console.warn("ClipboardCopy: switchDelay prop has been deprecated. The tooltip message will switch back to the hover tip as soon as the tooltip is hidden.")}}v.displayName="ClipboardCopy",v.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:r.I.top,maxWidth:"150px",exitDelay:1500,entryDelay:300,onCopy:x,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content",additionalActions:null,ouiaSafe:!0,removeFindDomNode:!1}},20941:(e,t,a)=>{a.d(t,{u:()=>s});var i=a(70655),n=a(92950),l=a(44008),o=a(47173),r=a(75824);const s=e=>{var{onClick:t,exitDelay:a=0,entryDelay:s=300,maxWidth:c="100px",position:d="top","aria-label":p="Copyable input",id:m,textId:u,children:f,variant:h="control",onTooltipHidden:b=(()=>{}),removeFindDomNode:x=!1}=e,y=(0,i.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children","variant","onTooltipHidden","removeFindDomNode"]);return n.createElement(r.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:s,maxWidth:c,position:d,"aria-live":"polite",aria:"none",content:n.createElement("div",null,f),onTooltipHidden:b,removeFindDomNode:x},n.createElement(o.zx,Object.assign({type:"button",variant:h,onClick:t,"aria-label":p,id:m,"aria-labelledby":`${m} ${u}`},y),n.createElement(l.ZP,null)))};s.displayName="ClipboardCopyButton"},36621:(e,t,a)=>{a.d(t,{p:()=>r});var i=a(70655),n=a(92950),l=a(49945),o=a(38296);const r=e=>{var{children:t,className:a,component:r="div",id:s,isLiveRegion:c=!1}=e,d=(0,i.__rest)(e,["children","className","component","id","isLiveRegion"]);const p=r;return n.createElement(p,Object.assign({id:s,className:(0,o.i)(l.Z.helperText,a)},c&&{"aria-live":"polite"},d),t)};r.displayName="HelperText"},65673:(e,t,a)=>{a.d(t,{u:()=>m});var i=a(70655),n=a(92950),l=a(49945),o=a(38296),r=a(80965),s=a(69957),c=a(68778),d=a(43047);const p={default:"",indeterminate:l.Z.modifiers.indeterminate,warning:l.Z.modifiers.warning,success:l.Z.modifiers.success,error:l.Z.modifiers.error},m=e=>{var{children:t,className:a,component:m="div",variant:u="default",icon:f,isDynamic:h=!1,hasIcon:b=h,id:x,screenReaderText:y=`${u} status`}=e,v=(0,i.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const g=m;return n.createElement(g,Object.assign({className:(0,o.i)(l.Z.helperTextItem,p[u],h&&l.Z.modifiers.dynamic,a),id:x},v),f&&n.createElement("span",{className:(0,o.i)(l.Z.helperTextItemIcon),"aria-hidden":!0},f),b&&!f&&n.createElement("span",{className:(0,o.i)(l.Z.helperTextItemIcon),"aria-hidden":!0},("default"===u||"indeterminate"===u)&&n.createElement(r.ZP,null),"warning"===u&&n.createElement(s.ZP,null),"success"===u&&n.createElement(c.ZP,null),"error"===u&&n.createElement(d.ZP,null)),n.createElement("span",{className:(0,o.i)(l.Z.helperTextItemText)},t,h&&n.createElement("span",{className:"pf-u-screen-reader"},": ",y,";")))};m.displayName="HelperTextItem"},69174:(e,t,a)=>{a.d(t,{_:()=>u});var i=a(70655),n=a(92950),l=a(83063),o=a(72002),r=a(47173),s=a(75824),c=a(38296),d=a(24307),p=a(6551);const m={blue:l.Z.modifiers.blue,cyan:l.Z.modifiers.cyan,green:l.Z.modifiers.green,orange:l.Z.modifiers.orange,purple:l.Z.modifiers.purple,red:l.Z.modifiers.red,gold:l.Z.modifiers.gold,grey:""},u=e=>{var{children:t,className:a="",color:u="grey",variant:f="filled",isCompact:h=!1,isEditable:b=!1,editableProps:x,isTruncated:y=!1,tooltipPosition:v,icon:g,onClose:C,onEditCancel:E,onEditComplete:N,closeBtn:_,closeBtnAriaLabel:Z,closeBtnProps:T,href:I,isOverflowLabel:k,render:w}=e,D=(0,i.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[O,P]=(0,n.useState)(!1),[L,A]=(0,n.useState)(t),R=n.useRef(),S=n.useRef();n.useEffect((()=>(document.addEventListener("mousedown",$),document.addEventListener("keydown",j),()=>{document.removeEventListener("mousedown",$),document.removeEventListener("keydown",j)})));const $=e=>{O&&S&&S.current&&!S.current.contains(e.target)&&(S.current.value&&N&&N(S.current.value),P(!1))},j=e=>{var a,i;const n=e.key;if((O||R&&R.current&&R.current.contains(e.target))&&(!O||S&&S.current&&S.current.contains(e.target))&&(!O||"Enter"!==n&&"Tab"!==n||(e.preventDefault(),e.stopImmediatePropagation(),S.current.value&&N&&N(S.current.value),P(!1),null===(a=null==R?void 0:R.current)||void 0===a||a.focus()),O&&"Escape"===n&&(e.preventDefault(),e.stopImmediatePropagation(),S.current.value&&(S.current.value=t,E&&E(t)),P(!1),null===(i=null==R?void 0:R.current)||void 0===i||i.focus()),!O&&"Enter"===n)){e.preventDefault(),e.stopImmediatePropagation(),P(!0);const t=e.target,a=document.createRange(),i=window.getSelection();a.selectNodeContents(t),a.collapse(!1),i.removeAllRanges(),i.addRange(a)}},F=k?"button":"span",G=_||n.createElement(r.zx,Object.assign({type:"button",variant:"plain",onClick:C,"aria-label":Z||`Close ${t}`},T),n.createElement(d.ZP,null)),W=n.createRef(),H=n.useRef(),[B,z]=n.useState(!1);(0,p.L)((()=>{const e=b?R:W;O||z(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[O]);const M=n.createElement(n.Fragment,null,g&&n.createElement("span",{className:(0,c.i)(l.Z.labelIcon)},g),y&&n.createElement("span",{ref:W,className:(0,c.i)(l.Z.labelText)},t),!y&&t);n.useEffect((()=>{O&&S&&S.current&&S.current.focus()}),[S,O]);let U=n.createElement("span",{className:(0,c.i)(l.Z.labelContent)},M);return I?U=n.createElement("a",{className:(0,c.i)(l.Z.labelContent),href:I},M):b&&(U=n.createElement("button",Object.assign({ref:R,className:(0,c.i)(l.Z.labelContent),onClick:e=>{P(!0),e.stopPropagation()}},x),M)),w?U=n.createElement(n.Fragment,null,B&&n.createElement(s.u,{reference:H,content:t,position:v}),w({className:l.Z.labelContent,content:M,componentRef:H})):B&&(U=n.createElement(s.u,{content:t,position:v},U)),n.createElement(F,Object.assign({},D,{className:(0,c.i)(l.Z.label,m[u],"outline"===f&&l.Z.modifiers.outline,k&&l.Z.modifiers.overflow,h&&l.Z.modifiers.compact,b&&o.Z.modifiers.editable,O&&l.Z.modifiers.editableActive,a)}),!O&&U,!O&&C&&G,O&&n.createElement("input",Object.assign({className:(0,c.i)(l.Z.labelContent),type:"text",id:"editable-input",ref:S,value:L,onChange:()=>{A(S.current.value)}},x)))};u.displayName="Label"},25834:(e,t,a)=>{a.d(t,{F:()=>i,G:()=>r});var i,n=a(70655),l=a(92950),o=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i||(i={}));const r=e=>{var{children:t=null,className:a="",component:r=i.ul}=e,s=(0,n.__rest)(e,["children","className","component"]);const c=r;return l.createElement(c,Object.assign({},s,{className:(0,o.i)(a)}),t)};r.displayName="TextList"},78140:(e,t,a)=>{a.d(t,{T:()=>r,v:()=>i});var i,n=a(70655),l=a(92950),o=a(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i||(i={}));const r=e=>{var{children:t=null,className:a="",component:r=i.li}=e,s=(0,n.__rest)(e,["children","className","component"]);const c=r;return l.createElement(c,Object.assign({},s,{className:(0,o.i)(a)}),t)};r.displayName="TextListItem"},79851:(e,t,a)=>{a.d(t,{P:()=>r});var i=a(70655),n=a(92950),l=a(89059),o=a(38296);const r=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:r="",children:s=null,component:c="div"}=e,d=(0,i.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const p=c;return n.createElement(p,Object.assign({},d,{className:(0,o.i)(l.Z.split,t&&l.Z.modifiers.gutter,a&&l.Z.modifiers.wrap,r)}),s)};r.displayName="Split"},34512:(e,t,a)=>{a.d(t,{J:()=>r});var i=a(70655),n=a(92950),l=a(89059),o=a(38296);const r=e=>{var{isFilled:t=!1,className:a="",children:r=null}=e,s=(0,i.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},s,{className:(0,o.i)(l.Z.splitItem,t&&l.Z.modifiers.fill,a)}),r)};r.displayName="SplitItem"},49739:(e,t,a)=>{a.d(t,{K:()=>r});var i=a(70655),n=a(92950),l=a(73976),o=a(38296);const r=e=>{var{hasGutter:t=!1,className:a="",children:r=null,component:s="div"}=e,c=(0,i.__rest)(e,["hasGutter","className","children","component"]);const d=s;return n.createElement(d,Object.assign({},c,{className:(0,o.i)(l.Z.stack,t&&l.Z.modifiers.gutter,a)}),r)};r.displayName="Stack"},83826:(e,t,a)=>{a.d(t,{v:()=>r});var i=a(70655),n=a(92950),l=a(73976),o=a(38296);const r=e=>{var{isFilled:t=!1,className:a="",children:r=null}=e,s=(0,i.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},s,{className:(0,o.i)(l.Z.stackItem,t&&l.Z.modifiers.fill,a)}),r)};r.displayName="StackItem"},44008:(e,t,a)=>{a.d(t,{Fg:()=>n,TI:()=>l,ZP:()=>o});var i=a(40400);const n={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},l=(0,i.IU)(n),o=l},80965:(e,t,a)=>{a.d(t,{V_:()=>l,ZP:()=>o,jm:()=>n});var i=a(40400);const n={name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},l=(0,i.IU)(n),o=l},2466:(e,t,a)=>{a.d(t,{Z:()=>i}),a(37625);const i={button:"pf-c-button",clipboardCopy:"pf-c-clipboard-copy",clipboardCopyActions:"pf-c-clipboard-copy__actions",clipboardCopyActionsItem:"pf-c-clipboard-copy__actions-item",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyText:"pf-c-clipboard-copy__text",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded",inline:"pf-m-inline",block:"pf-m-block",code:"pf-m-code"},themeDark:"pf-theme-dark"}},49945:(e,t,a)=>{a.d(t,{Z:()=>i}),a(71338);const i={helperText:"pf-c-helper-text",helperTextItem:"pf-c-helper-text__item",helperTextItemIcon:"pf-c-helper-text__item-icon",helperTextItemText:"pf-c-helper-text__item-text",modifiers:{indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-theme-dark"}},83063:(e,t,a)=>{a.d(t,{Z:()=>i}),a(82014);const i={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,a)=>{a.d(t,{Z:()=>i}),a(21064);const i={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},89059:(e,t,a)=>{a.d(t,{Z:()=>i}),a(16166);const i={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},73976:(e,t,a)=>{a.d(t,{Z:()=>i}),a(53519);const i={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}}}]);
//# sourceMappingURL=../sourcemaps/9247.56d4b00f25d1328b5eadcbcf71881498.js.map
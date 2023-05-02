"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[1834],{66435:(e,t,a)=>{a.d(t,{M5:()=>g,oo:()=>x,lY:()=>y});var i=a(70655),n=a(92950),o=a(2466),l=a(38296),r=a(46043),s=a(92607),c=a(41724),p=a(20941),d=a(93174),m=a(9003),u=a(47173);const b=e=>{var{onClick:t,id:a,textId:o,contentId:l,isExpanded:r=!1}=e,s=(0,i.__rest)(e,["onClick","id","textId","contentId","isExpanded"]);return n.createElement(u.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${o}`,"aria-controls":`${a} ${l}`,"aria-expanded":r},s),r?n.createElement(m.ZP,{"aria-hidden":"true"}):n.createElement(d.ZP,{"aria-hidden":"true"}))};b.displayName="ClipboardCopyToggle";class f extends n.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:r,isReadOnly:s,isCode:c}=e,p=(0,i.__rest)(e,["className","children","onChange","isReadOnly","isCode"]);return n.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,l.i)(o.Z.clipboardCopyExpandableContent,t),onInput:e=>r(e.target.innerText,e),contentEditable:!s},p),c?n.createElement("pre",null,a):a)}}f.displayName="ClipboardCopyExpanded",f.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1};var h=a(62472);const y=(e,t)=>{navigator.clipboard.writeText(t.toString())};var x;!function(e){e.inline="inline",e.expansion="expansion",e.inlineCompact="inline-compact"}(x||(x={}));class g extends n.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.componentWillUnmount=()=>{this.timer&&window.clearTimeout(this.timer)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,switchDelay:r,isReadOnly:d,isCode:m,isBlock:u,exitDelay:y,maxWidth:x,entryDelay:v,onCopy:C,hoverTip:E,clickTip:_,textAriaLabel:N,toggleAriaLabel:Z,variant:D,position:k,className:T,additionalActions:w,ouiaId:I,ouiaSafe:O,removeFindDomNode:A}=e,L=(0,i.__rest)(e,["isExpanded","onChange","switchDelay","isReadOnly","isCode","isBlock","exitDelay","maxWidth","entryDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className","additionalActions","ouiaId","ouiaSafe","removeFindDomNode"]);return n.createElement("div",Object.assign({className:(0,l.i)(o.Z.clipboardCopy,"inline-compact"===D&&o.Z.modifiers.inline,u&&o.Z.modifiers.block,this.state.expanded&&o.Z.modifiers.expanded,T)},L,(0,h.dp)(g.displayName,I,O)),"inline-compact"===D&&n.createElement(c.w,{prefix:""},(e=>n.createElement(n.Fragment,null,!m&&n.createElement("span",{className:(0,l.i)(o.Z.clipboardCopyText),id:`text-input-${e}`},this.state.text),m&&n.createElement("code",{className:(0,l.i)(o.Z.clipboardCopyText,o.Z.modifiers.code),id:`text-input-${e}`},this.state.text),n.createElement("span",{className:(0,l.i)(o.Z.clipboardCopyActions)},n.createElement("span",{className:(0,l.i)(o.Z.clipboardCopyActionsItem)},n.createElement(p.u,{variant:"plain",exitDelay:y,entryDelay:v,maxWidth:x,position:k,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{C(e,this.state.text),this.setState({copied:!0})},onTooltipHidden:()=>this.setState({copied:!1})},this.state.copied?_:E)),w&&w)))),"inline-compact"!==D&&n.createElement(c.w,{prefix:""},(e=>n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.i)(o.Z.clipboardCopyGroup)},"expansion"===D&&n.createElement(b,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle-${e}`,textId:`text-input-${e}`,contentId:`content-${e}`,"aria-label":Z}),n.createElement(s.oi,{isReadOnly:d||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":N}),n.createElement(p.u,{exitDelay:y,entryDelay:v,maxWidth:x,position:k,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{C(e,this.state.text),this.setState({copied:!0})},onTooltipHidden:()=>this.setState({copied:!1}),removeFindDomNode:A},this.state.copied?_:E)),this.state.expanded&&n.createElement(f,{isReadOnly:d,isCode:m,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:Array.isArray(this.props.children)?this.props.children.join(""):this.props.children,expanded:this.props.isExpanded,copied:!1},void 0!==this.props.switchDelay&&console.warn("ClipboardCopy: switchDelay prop has been deprecated. The tooltip message will switch back to the hover tip as soon as the tooltip is hidden.")}}g.displayName="ClipboardCopy",g.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:r.I.top,maxWidth:"150px",exitDelay:1500,entryDelay:300,onCopy:y,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content",additionalActions:null,ouiaSafe:!0,removeFindDomNode:!1}},20941:(e,t,a)=>{a.d(t,{u:()=>s});var i=a(70655),n=a(92950),o=a(44008),l=a(47173),r=a(75824);const s=e=>{var{onClick:t,exitDelay:a=0,entryDelay:s=300,maxWidth:c="100px",position:p="top","aria-label":d="Copyable input",id:m,textId:u,children:b,variant:f="control",onTooltipHidden:h=(()=>{}),removeFindDomNode:y=!1}=e,x=(0,i.__rest)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children","variant","onTooltipHidden","removeFindDomNode"]);return n.createElement(r.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:s,maxWidth:c,position:p,"aria-live":"polite",aria:"none",content:n.createElement("div",null,b),onTooltipHidden:h,removeFindDomNode:y},n.createElement(l.zx,Object.assign({type:"button",variant:f,onClick:t,"aria-label":d,id:m,"aria-labelledby":`${m} ${u}`},x),n.createElement(o.ZP,null)))};s.displayName="ClipboardCopyButton"},69174:(e,t,a)=>{a.d(t,{_:()=>u});var i=a(70655),n=a(92950),o=a(83063),l=a(72002),r=a(47173),s=a(75824),c=a(38296),p=a(24307),d=a(6551);const m={blue:o.Z.modifiers.blue,cyan:o.Z.modifiers.cyan,green:o.Z.modifiers.green,orange:o.Z.modifiers.orange,purple:o.Z.modifiers.purple,red:o.Z.modifiers.red,gold:o.Z.modifiers.gold,grey:""},u=e=>{var{children:t,className:a="",color:u="grey",variant:b="filled",isCompact:f=!1,isEditable:h=!1,editableProps:y,isTruncated:x=!1,tooltipPosition:g,icon:v,onClose:C,onEditCancel:E,onEditComplete:_,closeBtn:N,closeBtnAriaLabel:Z,closeBtnProps:D,href:k,isOverflowLabel:T,render:w}=e,I=(0,i.__rest)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[O,A]=(0,n.useState)(!1),[L,P]=(0,n.useState)(t),S=n.useRef(),$=n.useRef();n.useEffect((()=>(document.addEventListener("mousedown",R),document.addEventListener("keydown",F),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("keydown",F)})));const R=e=>{O&&$&&$.current&&!$.current.contains(e.target)&&($.current.value&&_&&_($.current.value),A(!1))},F=e=>{var a,i;const n=e.key;if((O||S&&S.current&&S.current.contains(e.target))&&(!O||$&&$.current&&$.current.contains(e.target))&&(!O||"Enter"!==n&&"Tab"!==n||(e.preventDefault(),e.stopImmediatePropagation(),$.current.value&&_&&_($.current.value),A(!1),null===(a=null==S?void 0:S.current)||void 0===a||a.focus()),O&&"Escape"===n&&(e.preventDefault(),e.stopImmediatePropagation(),$.current.value&&($.current.value=t,E&&E(t)),A(!1),null===(i=null==S?void 0:S.current)||void 0===i||i.focus()),!O&&"Enter"===n)){e.preventDefault(),e.stopImmediatePropagation(),A(!0);const t=e.target,a=document.createRange(),i=window.getSelection();a.selectNodeContents(t),a.collapse(!1),i.removeAllRanges(),i.addRange(a)}},W=T?"button":"span",j=N||n.createElement(r.zx,Object.assign({type:"button",variant:"plain",onClick:C,"aria-label":Z||`Close ${t}`},D),n.createElement(p.ZP,null)),G=n.createRef(),B=n.useRef(),[H,z]=n.useState(!1);(0,d.L)((()=>{const e=h?S:G;O||z(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[O]);const M=n.createElement(n.Fragment,null,v&&n.createElement("span",{className:(0,c.i)(o.Z.labelIcon)},v),x&&n.createElement("span",{ref:G,className:(0,c.i)(o.Z.labelText)},t),!x&&t);n.useEffect((()=>{O&&$&&$.current&&$.current.focus()}),[$,O]);let U=n.createElement("span",{className:(0,c.i)(o.Z.labelContent)},M);return k?U=n.createElement("a",{className:(0,c.i)(o.Z.labelContent),href:k},M):h&&(U=n.createElement("button",Object.assign({ref:S,className:(0,c.i)(o.Z.labelContent),onClick:e=>{A(!0),e.stopPropagation()}},y),M)),w?U=n.createElement(n.Fragment,null,H&&n.createElement(s.u,{reference:B,content:t,position:g}),w({className:o.Z.labelContent,content:M,componentRef:B})):H&&(U=n.createElement(s.u,{content:t,position:g},U)),n.createElement(W,Object.assign({},I,{className:(0,c.i)(o.Z.label,m[u],"outline"===b&&o.Z.modifiers.outline,T&&o.Z.modifiers.overflow,f&&o.Z.modifiers.compact,h&&l.Z.modifiers.editable,O&&o.Z.modifiers.editableActive,a)}),!O&&U,!O&&C&&j,O&&n.createElement("input",Object.assign({className:(0,c.i)(o.Z.labelContent),type:"text",id:"editable-input",ref:$,value:L,onChange:()=>{P($.current.value)}},y)))};u.displayName="Label"},25834:(e,t,a)=>{a.d(t,{F:()=>i,G:()=>r});var i,n=a(70655),o=a(92950),l=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i||(i={}));const r=e=>{var{children:t=null,className:a="",component:r=i.ul}=e,s=(0,n.__rest)(e,["children","className","component"]);const c=r;return o.createElement(c,Object.assign({},s,{className:(0,l.i)(a)}),t)};r.displayName="TextList"},79851:(e,t,a)=>{a.d(t,{P:()=>r});var i=a(70655),n=a(92950),o=a(89059),l=a(38296);const r=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:r="",children:s=null,component:c="div"}=e,p=(0,i.__rest)(e,["hasGutter","isWrappable","className","children","component"]);const d=c;return n.createElement(d,Object.assign({},p,{className:(0,l.i)(o.Z.split,t&&o.Z.modifiers.gutter,a&&o.Z.modifiers.wrap,r)}),s)};r.displayName="Split"},34512:(e,t,a)=>{a.d(t,{J:()=>r});var i=a(70655),n=a(92950),o=a(89059),l=a(38296);const r=e=>{var{isFilled:t=!1,className:a="",children:r=null}=e,s=(0,i.__rest)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},s,{className:(0,l.i)(o.Z.splitItem,t&&o.Z.modifiers.fill,a)}),r)};r.displayName="SplitItem"},44008:(e,t,a)=>{a.d(t,{Fg:()=>n,TI:()=>o,ZP:()=>l});var i=a(40400);const n={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},o=(0,i.IU)(n),l=o},2466:(e,t,a)=>{a.d(t,{Z:()=>i}),a(37625);const i={button:"pf-c-button",clipboardCopy:"pf-c-clipboard-copy",clipboardCopyActions:"pf-c-clipboard-copy__actions",clipboardCopyActionsItem:"pf-c-clipboard-copy__actions-item",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyText:"pf-c-clipboard-copy__text",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded",inline:"pf-m-inline",block:"pf-m-block",code:"pf-m-code"},themeDark:"pf-theme-dark"}},83063:(e,t,a)=>{a.d(t,{Z:()=>i}),a(82014);const i={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,a)=>{a.d(t,{Z:()=>i}),a(21064);const i={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},89059:(e,t,a)=>{a.d(t,{Z:()=>i}),a(16166);const i={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}}}]);
//# sourceMappingURL=../sourcemaps/1834.0e01a6e8efaa5834f53e177d917dd895.js.map
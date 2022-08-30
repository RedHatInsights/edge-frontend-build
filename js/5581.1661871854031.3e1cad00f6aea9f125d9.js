"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[5581],{64029:(e,t,a)=>{a.d(t,{a:()=>c});var i=a(21988),n=a(93264),l=a(44303),r=a(38296),o=a(62472);const c=e=>{var{children:t=null,className:a="","aria-label":s="Breadcrumb",ouiaId:d,ouiaSafe:p=!0}=e,m=(0,i._T)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const b=(0,o.S$)(c.displayName,d,p);return n.createElement("nav",Object.assign({},m,{"aria-label":s,className:(0,r.i)(l.Z.breadcrumb,a)},b),n.createElement("ol",{className:l.Z.breadcrumbList},n.Children.map(t,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))};c.displayName="Breadcrumb"},32835:(e,t,a)=>{a.d(t,{g:()=>c});var i=a(21988),n=a(93264),l=a(93174),r=a(44303),o=a(38296);const c=e=>{var{children:t=null,className:a="",to:c,isActive:s=!1,isDropdown:d=!1,showDivider:p,target:m,component:b="a",render:u}=e,f=(0,i._T)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const h=b,g=s?"page":void 0,x=(0,o.i)(r.Z.breadcrumbLink,s&&r.Z.modifiers.current);return n.createElement("li",Object.assign({},f,{className:(0,o.i)(r.Z.breadcrumbItem,a)}),p&&n.createElement("span",{className:r.Z.breadcrumbItemDivider},n.createElement(l.ZP,null)),"button"===b&&n.createElement("button",{className:x,"aria-current":g,type:"button"},t),d&&n.createElement("span",{className:(0,o.i)(r.Z.breadcrumbDropdown)},t),u&&u({className:x,ariaCurrent:g}),c&&!u&&n.createElement(h,{href:c,target:m,className:x,"aria-current":g},t),!c&&"button"!==b&&!d&&t)};c.displayName="BreadcrumbItem"},66435:(e,t,a)=>{a.d(t,{M5:()=>x,oo:()=>g,lY:()=>h});var i=a(21988),n=a(93264),l=a(2466),r=a(38296),o=a(92607),c=a(75824),s=a(41724),d=a(20941),p=a(93174),m=a(9003),b=a(47173);const u=e=>{var{onClick:t,id:a,textId:l,contentId:r,isExpanded:o=!1}=e,c=(0,i._T)(e,["onClick","id","textId","contentId","isExpanded"]);return n.createElement(b.zx,Object.assign({type:"button",variant:"control",onClick:t,id:a,"aria-labelledby":`${a} ${l}`,"aria-controls":`${a} ${r}`,"aria-expanded":o},c),o?n.createElement(m.ZP,{"aria-hidden":"true"}):n.createElement(p.ZP,{"aria-hidden":"true"}))};u.displayName="ClipboardCopyToggle";class f extends n.Component{constructor(e){super(e)}render(){const e=this.props,{className:t,children:a,onChange:o,isReadOnly:c,isCode:s}=e,d=(0,i._T)(e,["className","children","onChange","isReadOnly","isCode"]);return n.createElement("div",Object.assign({suppressContentEditableWarning:!0,className:(0,r.i)(l.Z.clipboardCopyExpandableContent,t),onInput:e=>o(e.target.innerText,e),contentEditable:!c},d),s?n.createElement("pre",null,a):a)}}f.displayName="ClipboardCopyExpanded",f.defaultProps={onChange:()=>{},className:"",isReadOnly:!1,isCode:!1};const h=(e,t)=>{const a=e.currentTarget.parentElement,i=document.createElement("textarea");i.value=t.toString(),a.appendChild(i),i.select(),document.execCommand("copy"),a.removeChild(i)};var g;!function(e){e.inline="inline",e.expansion="expansion",e.inlineCompact="inline-compact"}(g||(g={}));class x extends n.Component{constructor(e){super(e),this.timer=null,this.componentDidUpdate=(e,t)=>{e.children!==this.props.children&&this.updateText(this.props.children)},this.expandContent=e=>{this.setState((e=>({expanded:!e.expanded})))},this.updateText=e=>{this.setState({text:e}),this.props.onChange(e)},this.render=()=>{const e=this.props,{isExpanded:t,onChange:a,isReadOnly:c,isCode:p,isBlock:m,exitDelay:b,maxWidth:h,entryDelay:g,switchDelay:x,onCopy:y,hoverTip:E,clickTip:v,textAriaLabel:C,toggleAriaLabel:_,variant:N,position:Z,className:T,additionalActions:k}=e,w=(0,i._T)(e,["isExpanded","onChange","isReadOnly","isCode","isBlock","exitDelay","maxWidth","entryDelay","switchDelay","onCopy","hoverTip","clickTip","textAriaLabel","toggleAriaLabel","variant","position","className","additionalActions"]);return n.createElement("div",Object.assign({className:(0,r.i)(l.Z.clipboardCopy,"inline-compact"===N&&l.Z.modifiers.inline,m&&l.Z.modifiers.block,this.state.expanded&&l.Z.modifiers.expanded,T)},w),"inline-compact"===N&&n.createElement(s.w,{prefix:""},(e=>n.createElement(n.Fragment,null,!p&&n.createElement("span",{className:(0,r.i)(l.Z.clipboardCopyText),id:`text-input-${e}`},this.state.text),p&&n.createElement("code",{className:(0,r.i)(l.Z.clipboardCopyText,l.Z.modifiers.code),id:`text-input-${e}`},this.state.text),n.createElement("span",{className:(0,r.i)(l.Z.clipboardCopyActions)},n.createElement("span",{className:(0,r.i)(l.Z.clipboardCopyActionsItem)},n.createElement(d.u,{variant:"plain",exitDelay:b,entryDelay:g,maxWidth:h,position:Z,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),y(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),x)}))}},this.state.copied?v:E)),k&&k)))),"inline-compact"!==N&&n.createElement(s.w,{prefix:""},(e=>n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.i)(l.Z.clipboardCopyGroup)},"expansion"===N&&n.createElement(u,{isExpanded:this.state.expanded,onClick:this.expandContent,id:`toggle-${e}`,textId:`text-input-${e}`,contentId:`content-${e}`,"aria-label":_}),n.createElement(o.oi,{isReadOnly:c||this.state.expanded,onChange:this.updateText,value:this.state.text,id:`text-input-${e}`,"aria-label":C}),n.createElement(d.u,{exitDelay:b,entryDelay:g,maxWidth:h,position:Z,id:`copy-button-${e}`,textId:`text-input-${e}`,"aria-label":E,onClick:e=>{this.timer&&(window.clearTimeout(this.timer),this.setState({copied:!1})),y(e,this.state.text),this.setState({copied:!0},(()=>{this.timer=window.setTimeout((()=>{this.setState({copied:!1}),this.timer=null}),x)}))}},this.state.copied?v:E)),this.state.expanded&&n.createElement(f,{isReadOnly:c,isCode:p,id:`content-${e}`,onChange:this.updateText},this.state.text)))))},this.state={text:this.props.children,expanded:this.props.isExpanded,copied:!1}}}x.displayName="ClipboardCopy",x.defaultProps={hoverTip:"Copy to clipboard",clickTip:"Successfully copied to clipboard!",isReadOnly:!1,isExpanded:!1,isCode:!1,variant:"inline",position:c.D.top,maxWidth:"150px",exitDelay:1600,entryDelay:300,switchDelay:2e3,onCopy:h,onChange:()=>{},textAriaLabel:"Copyable input",toggleAriaLabel:"Show content",additionalActions:null}},20941:(e,t,a)=>{a.d(t,{u:()=>c});var i=a(21988),n=a(93264),l=a(44008),r=a(47173),o=a(75824);const c=e=>{var{onClick:t,exitDelay:a=0,entryDelay:c=300,maxWidth:s="100px",position:d="top","aria-label":p="Copyable input",id:m,textId:b,children:u,variant:f="control"}=e,h=(0,i._T)(e,["onClick","exitDelay","entryDelay","maxWidth","position","aria-label","id","textId","children","variant"]);return n.createElement(o.u,{trigger:"mouseenter focus click",exitDelay:a,entryDelay:c,maxWidth:s,position:d,content:n.createElement("div",null,u)},n.createElement(r.zx,Object.assign({type:"button",variant:f,onClick:t,"aria-label":p,id:m,"aria-labelledby":`${m} ${b}`},h),n.createElement(l.ZP,null)))};c.displayName="ClipboardCopyButton"},69174:(e,t,a)=>{a.d(t,{_:()=>u});var i=a(21988),n=a(93264),l=a(83063),r=a(72002),o=a(84115),c=a(47173),s=a(75824),d=a(38296),p=a(24307),m=a(6551);const b={blue:l.Z.modifiers.blue,cyan:l.Z.modifiers.cyan,green:l.Z.modifiers.green,orange:l.Z.modifiers.orange,purple:l.Z.modifiers.purple,red:l.Z.modifiers.red,grey:""},u=e=>{var{children:t,className:a="",color:u="grey",variant:f="filled",isCompact:h=!1,isEditable:g=!1,editableProps:x,isTruncated:y=!1,tooltipPosition:E,icon:v,onClose:C,onEditCancel:_,onEditComplete:N,closeBtn:Z,closeBtnAriaLabel:T,closeBtnProps:k,href:w,isOverflowLabel:I,render:D}=e,O=(0,i._T)(e,["children","className","color","variant","isCompact","isEditable","editableProps","isTruncated","tooltipPosition","icon","onClose","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[L,A]=(0,n.useState)(!1),S=n.createRef();n.useEffect((()=>(document.addEventListener("click",P),document.addEventListener("keydown",$),()=>{document.removeEventListener("click",P),document.removeEventListener("keydown",$)})));const P=e=>{L&&S&&S.current&&!S.current.contains(e.target)&&(N&&N(S.current.textContent),A(!1))},$=e=>{const a=e.key;if(S&&S.current&&S.current.contains(e.target)&&(!L||"Enter"!==a&&"Tab"!==a||(e.preventDefault(),e.stopImmediatePropagation(),N&&N(S.current.textContent),A(!1)),L&&"Escape"===a&&(e.preventDefault(),e.stopImmediatePropagation(),S.current.textContent=t,_&&_(t),A(!1)),!L&&"Enter"===a)){e.preventDefault(),e.stopImmediatePropagation(),A(!0);const t=e.target,a=document.createRange(),i=window.getSelection();a.selectNodeContents(t),a.collapse(!1),i.removeAllRanges(),i.addRange(a)}},j=I?"button":"span",G=w?"a":"span",R=Z||n.createElement(c.zx,Object.assign({type:"button",variant:"plain",onClick:C,"aria-label":T||`Close ${t}`},k),n.createElement(p.ZP,null)),W=n.createRef(),B=n.useRef(),[F,z]=n.useState(!1);(0,m.L)((()=>{z(W.current&&W.current.offsetWidth<W.current.scrollWidth)}),[]);let H=n.createElement(n.Fragment,null,v&&n.createElement("span",{className:(0,d.i)(l.Z.labelIcon)},v),y&&n.createElement("span",{ref:W,className:(0,d.i)(l.Z.labelText)},t),!y&&t);g&&(H=n.createElement(n.Fragment,null,n.createElement("div",{className:(0,d.i)(o.Z.inlineEdit)},n.createElement("div",Object.assign({tabIndex:0,ref:S,className:(0,d.i)(o.Z.inlineEditEditableText),role:"textbox"},L&&{contentEditable:!0},{suppressContentEditableWarning:!0},x),t))));let V=n.createElement(G,Object.assign({className:(0,d.i)(l.Z.labelContent)},w&&{href:w}),H);return D?V=n.createElement(n.Fragment,null,F&&n.createElement(s.u,{reference:B,content:t,position:E}),D({className:l.Z.labelContent,content:H,componentRef:B})):F&&(V=n.createElement(s.u,{content:t,position:E},n.createElement(G,Object.assign({className:(0,d.i)(l.Z.labelContent)},w&&{href:w}),H))),n.createElement(j,Object.assign({},O,{className:(0,d.i)(l.Z.label,b[u],"outline"===f&&l.Z.modifiers.outline,I&&l.Z.modifiers.overflow,h&&l.Z.modifiers.compact,g&&r.Z.modifiers.editable,L&&l.Z.modifiers.editableActive,a)},g&&{onClick:e=>{null===e.target.closest("button")&&(A(!0),S.current.focus())}}),V,C&&R)};u.displayName="Label"},25834:(e,t,a)=>{a.d(t,{F:()=>i,G:()=>o});var i,n=a(21988),l=a(93264),r=a(38296);!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i||(i={}));const o=e=>{var{children:t=null,className:a="",component:o=i.ul}=e,c=(0,n._T)(e,["children","className","component"]);const s=o;return l.createElement(s,Object.assign({},c,{"data-pf-content":!0,className:(0,r.i)(a)}),t)};o.displayName="TextList"},78140:(e,t,a)=>{a.d(t,{v:()=>i,T:()=>o});var i,n=a(21988),l=a(93264),r=a(38296);!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i||(i={}));const o=e=>{var{children:t=null,className:a="",component:o=i.li}=e,c=(0,n._T)(e,["children","className","component"]);const s=o;return l.createElement(s,Object.assign({},c,{"data-pf-content":!0,className:(0,r.i)(a)}),t)};o.displayName="TextListItem"},79851:(e,t,a)=>{a.d(t,{P:()=>o});var i=a(21988),n=a(93264),l=a(89059),r=a(38296);const o=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:o="",children:c=null,component:s="div"}=e,d=(0,i._T)(e,["hasGutter","isWrappable","className","children","component"]);const p=s;return n.createElement(p,Object.assign({},d,{className:(0,r.i)(l.Z.split,t&&l.Z.modifiers.gutter,a&&l.Z.modifiers.wrap,o)}),c)};o.displayName="Split"},34512:(e,t,a)=>{a.d(t,{J:()=>o});var i=a(21988),n=a(93264),l=a(89059),r=a(38296);const o=e=>{var{isFilled:t=!1,className:a="",children:o=null}=e,c=(0,i._T)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},c,{className:(0,r.i)(l.Z.splitItem,t&&l.Z.modifiers.fill,a)}),o)};o.displayName="SplitItem"},49739:(e,t,a)=>{a.d(t,{K:()=>o});var i=a(21988),n=a(93264),l=a(73976),r=a(38296);const o=e=>{var{hasGutter:t=!1,className:a="",children:o=null,component:c="div"}=e,s=(0,i._T)(e,["hasGutter","className","children","component"]);const d=c;return n.createElement(d,Object.assign({},s,{className:(0,r.i)(l.Z.stack,t&&l.Z.modifiers.gutter,a)}),o)};o.displayName="Stack"},83826:(e,t,a)=>{a.d(t,{v:()=>o});var i=a(21988),n=a(93264),l=a(73976),r=a(38296);const o=e=>{var{isFilled:t=!1,className:a="",children:o=null}=e,c=(0,i._T)(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},c,{className:(0,r.i)(l.Z.stackItem,t&&l.Z.modifiers.fill,a)}),o)};o.displayName="StackItem"},44008:(e,t,a)=>{a.d(t,{Fg:()=>n,TI:()=>l,ZP:()=>r});var i=a(40400);const n={name:"CopyIcon",height:512,width:448,svgPath:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z",yOffset:0,xOffset:0},l=(0,i.IU)(n),r=l},44303:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(8392).then(a.t.bind(a,58392,23));const i={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},2466:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(7625).then(a.t.bind(a,37625,23));const i={button:"pf-c-button",clipboardCopy:"pf-c-clipboard-copy",clipboardCopyActions:"pf-c-clipboard-copy__actions",clipboardCopyActionsItem:"pf-c-clipboard-copy__actions-item",clipboardCopyExpandableContent:"pf-c-clipboard-copy__expandable-content",clipboardCopyGroup:"pf-c-clipboard-copy__group",clipboardCopyText:"pf-c-clipboard-copy__text",clipboardCopyToggleIcon:"pf-c-clipboard-copy__toggle-icon",modifiers:{expanded:"pf-m-expanded",inline:"pf-m-inline",block:"pf-m-block",code:"pf-m-code"},themeDark:"pf-theme-dark"}},84115:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(1626).then(a.t.bind(a,21626,23));const i={button:"pf-c-button",inlineEdit:"pf-c-inline-edit",inlineEditAction:"pf-c-inline-edit__action",inlineEditEditableText:"pf-c-inline-edit__editable-text",inlineEditGroup:"pf-c-inline-edit__group",inlineEditInput:"pf-c-inline-edit__input",inlineEditLabel:"pf-c-inline-edit__label",inlineEditValue:"pf-c-inline-edit__value",modifiers:{iconGroup:"pf-m-icon-group",footer:"pf-m-footer",column:"pf-m-column",valid:"pf-m-valid",plain:"pf-m-plain",actionGroup:"pf-m-action-group",enableEditable:"pf-m-enable-editable",inlineEditable:"pf-m-inline-editable",enable:"pf-m-enable",bold:"pf-m-bold"}}},83063:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(2014).then(a.t.bind(a,82014,23));const i={button:"pf-c-button",label:"pf-c-label",labelContent:"pf-c-label__content",labelIcon:"pf-c-label__icon",labelText:"pf-c-label__text",modifiers:{compact:"pf-m-compact",blue:"pf-m-blue",green:"pf-m-green",orange:"pf-m-orange",red:"pf-m-red",purple:"pf-m-purple",cyan:"pf-m-cyan",gold:"pf-m-gold",outline:"pf-m-outline",overflow:"pf-m-overflow",add:"pf-m-add",editable:"pf-m-editable",editableActive:"pf-m-editable-active"},themeDark:"pf-theme-dark"}},72002:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(1064).then(a.t.bind(a,21064,23));const i={button:"pf-c-button",labelGroup:"pf-c-label-group",labelGroupClose:"pf-c-label-group__close",labelGroupLabel:"pf-c-label-group__label",labelGroupList:"pf-c-label-group__list",labelGroupListItem:"pf-c-label-group__list-item",labelGroupMain:"pf-c-label-group__main",labelGroupTextarea:"pf-c-label-group__textarea",modifiers:{category:"pf-m-category",vertical:"pf-m-vertical",editable:"pf-m-editable",textarea:"pf-m-textarea"}}},89059:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(6166).then(a.t.bind(a,16166,23));const i={modifiers:{wrap:"pf-m-wrap",fill:"pf-m-fill",gutter:"pf-m-gutter"},split:"pf-l-split",splitItem:"pf-l-split__item"}},73976:(e,t,a)=>{a.d(t,{Z:()=>i}),a.e(3519).then(a.t.bind(a,53519,23));const i={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}}}]);
//# sourceMappingURL=../sourcemaps/5581.bacf0aeea5fe64f662c41fb00d2d7e2e.js.map
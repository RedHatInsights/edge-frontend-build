"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[570],{84570:(e,n,l)=>{l.r(n),l.d(n,{default:()=>b});var t=l(15861),a=l(29439),i=l(87757),o=l.n(i),u=l(93264),c=l.n(u),r=l(22866),s=l(66702),v=l(4147),d=l(75662),m=l(82041),g=l(56455);const b=function(){var e,n,l,i,b,p,k,f,I,E,_,h=(0,m.useSelector)((function(e){var n,l=e.entityDetails;return null==l||null===(n=l.entity)||void 0===n?void 0:n.id})),Z=(0,u.useState)(!0),D=(0,a.Z)(Z,2),R=D[0],A=D[1],L=(0,u.useState)(!1),S=(0,a.Z)(L,2),U=S[0],j=S[1],w=(0,u.useState)(null),z=(0,a.Z)(w,2),x=z[0],V=z[1];return(0,u.useEffect)((function(){(0,t.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Dk)(h);case 3:n=e.sent,V(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(!0);case 10:A(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),c().createElement(r.Z,{title:"Image Information",isLoading:!1,items:[{title:"Running image",value:R?c().createElement(g.Z,{size:g.i.sm}):x?c().createElement(d.Link,{to:"".concat(v._j.gb,"/").concat(null==x||null===(e=x.Image)||void 0===e?void 0:e.ID)},null==x||null===(n=x.Image)||void 0===n?void 0:n.Name):"unavailable"},{title:"Running version",value:R?c().createElement(g.Z,{size:g.i.sm}):x?c().createElement(d.Link,{to:"".concat(v._j.gb,"/").concat(null==x||null===(l=x.Image)||void 0===l?void 0:l.ID)},null==x||null===(i=x.Image)||void 0===i?void 0:i.Version):"unavailable"},{title:"Target version",value:R?c().createElement(g.Z,{size:g.i.sm}):null!=x&&x.UpdatesAvailable?c().createElement(d.Link,{to:"".concat(v._j.gb,"/").concat(null==x||null===(b=x.UpdatesAvailable[(null==x?void 0:x.UpdatesAvailable.length)-1])||void 0===b||null===(p=b.Image)||void 0===p?void 0:p.ID)},null==x||null===(k=x.UpdatesAvailable[(null==x?void 0:x.UpdatesAvailable.length)-1])||void 0===k||null===(f=k.Image)||void 0===f?void 0:f.Version):U?"unavailable":"Same as running"},{title:"Rollback version",value:R?c().createElement(g.Z,{size:g.i.sm}):null!=x&&null!==(I=x.Rollback)&&void 0!==I&&I.ParentId?c().createElement(d.Link,{to:"".concat(v._j.gb,"/").concat(null==x||null===(E=x.Rollback)||void 0===E?void 0:E.ID)},null==x||null===(_=x.Rollback)||void 0===_?void 0:_.Version):U?"unavailable":"None"}]})}}}]);
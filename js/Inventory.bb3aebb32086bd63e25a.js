"use strict";(self.webpackChunkedge_frontend=self.webpackChunkedge_frontend||[]).push([[8471,704,6681],{93597:(e,t,n)=>{n.d(t,{$c:()=>k,Bi:()=>m,Dk:()=>l,EC:()=>v,EV:()=>h,H1:()=>u,Kz:()=>D,L0:()=>p,QY:()=>f,Sj:()=>y,dj:()=>g,dt:()=>d});var a=n(15861),c=n(29439),r=n(64687),s=n.n(r),i=n(66702),o=n(93454),u=function(e){var t={name:e};return o.instance.post("".concat(i.Ds,"/images/checkImageName"),t)},m=function(e){var t=e.Id,n=e.name,a=e.version,r=e.description,s=e.release,u=e.architecture,m=e.username,d=e.credentials,g=e.imageType,p=e["selected-packages"],f=e["third-party-repositories"],v=e["custom-packages"],l=g||[],h=(0,c.Z)(l,1)[0];g.length>1&&(h="rhel-edge-installer");var D={name:n,version:a,description:r,distribution:s,imageType:h,packages:null==p?void 0:p.map((function(e){return{name:e.name}})),outputTypes:g,commit:{arch:u},installer:{username:m,sshkey:d},thirdPartyRepositories:null==f?void 0:f.map((function(e){return{ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}})),customPackages:null==v?void 0:v.map((function(e){return{Name:e.name}}))},k="".concat(i.Ds,"/images");return a>1&&(k+="/".concat(t,"/update")),o.instance.post(k,D)},d=function(e){var t=e.id,n=e.q,a=void 0===n?{limit:10,offset:0,sort_by:"-created_at"}:n,c=(0,i.Vs)(a);return o.instance.get("".concat(i.Ds,"/image-sets/").concat(t,"?").concat(c))},g=function(e){var t=e.imageSetID,n=e.query,a=void 0===n?{limit:20,offset:0,sort_by:"-created_at"}:n,c=(0,i.Vs)(a);return o.instance.get("".concat(i.Ds,"/image-sets/view/").concat(t,"/versions?").concat(c))},p=function(e){var t=e.id;return o.instance.get("".concat(i.Ds,"/image-sets/view/").concat(t))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:20,offset:0,sort_by:"-created_at"},t=(0,i.Vs)(e);return o.instance.get("".concat(i.Ds,"/image-sets?").concat(t))},v=function(e){return o.instance.get("".concat(i.Ds,"/images/").concat(e,"/status"))},l=function(e){return o.instance.get("".concat(i.Ds,"/updates/device/").concat(e,"/image"))},h=function(){var e=(0,a.Z)(s().mark((function e(t,n,a){var c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new URLSearchParams({distribution:t,architecture:n,search:a}),e.abrupt("return",(0,o.instance)("".concat(i.DO,"/packages?").concat(c.toString())));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),D=function(e){var t=e.id;return o.instance.get("".concat(i.Ds,"/images/").concat(t,"/details"))},k=function(e){var t=e.query;""===t&&(t={limit:20,offset:0,sort_by:"-updated_at"});var n=(0,i.Vs)(t);return o.instance.get("".concat(i.Ds,"/image-sets/view?").concat(n))},y=function(e,t){return o.instance.post("".concat(i.$J,"/rpms/names"),{urls:e,search:t})}}}]);
//# sourceMappingURL=../sourcemaps/Inventory.9936c7beadb453f4c050b44b7db037c5.js.map
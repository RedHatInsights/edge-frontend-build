"use strict";(self.webpackChunkedge=self.webpackChunkedge||[]).push([[2941],{66171:(e,t,s)=>{s.d(t,{G9:()=>$,Ip:()=>o,J_:()=>g,MH:()=>c,Z5:()=>r,a7:()=>u,d6:()=>y,dW:()=>d,fw:()=>h,iI:()=>l,mF:()=>m,vy:()=>n,ze:()=>p});var a=s(11268),i=s(56830);const n=e=>{const t={name:e};return i.instance.post(`${a.rm}/images/checkImageName`,t)},r=({limit:e=10,offset:t=0}={})=>i.instance.get(`${a.EH}/activation_keys?limit=${e}&offset=${t}`),m=({Id:e,name:t,version:s,description:n,release:r,architecture:m,username:c,credentials:o,imageType:g,"selected-packages":u,"third-party-repositories":d,"custom-packages":p,activationKey:$})=>{let[l]=g||[];g.length>1&&(l="rhel-edge-installer");const y={name:t,version:s,description:n,distribution:r,imageType:l,packages:u?.map((e=>({name:e.name}))),outputTypes:g,commit:{arch:m},installer:{username:c,sshkey:o},thirdPartyRepositories:d?.map((e=>({ID:e.id,Name:e.name,URL:e.URL,uuid:e.uuid}))),customPackages:p?.map((e=>({Name:e.name}))),activationKey:$};let h=`${a.rm}/images`;return s>1&&(h+=`/${e}/update`),i.instance.post(h,y)},c=({id:e,q:t={limit:10,offset:0,sort_by:"-created_at"}})=>{const s=(0,a.Lm)(t);return i.instance.get(`${a.rm}/image-sets/${e}?${s}`)},o=({imageSetID:e,query:t={limit:20,offset:0,sort_by:"-created_at"}})=>{const s=(0,a.Lm)(t);return i.instance.get(`${a.rm}/image-sets/view/${e}/versions?${s}`)},g=({id:e})=>i.instance.get(`${a.rm}/image-sets/view/${e}`),u=(e={limit:20,offset:0,sort_by:"-created_at"})=>{const t=(0,a.Lm)(e);return i.instance.get(`${a.rm}/image-sets?${t}`)},d=e=>i.instance.get(`${a.rm}/images/${e}/status`),p=e=>i.instance.get(`${a.rm}/updates/device/${e}/image`),$=async(e,t,s)=>{const n=new URLSearchParams({distribution:e,architecture:t,search:s});return(0,i.instance)(`${a.hE}/packages?${n.toString()}`)},l=({id:e})=>i.instance.get(`${a.rm}/images/${e}/details`),y=({query:e})=>{""===e&&(e={limit:20,offset:0,sort_by:"-updated_at"});const t=(0,a.Lm)(e);return i.instance.get(`${a.rm}/image-sets/view?${t}`)},h=(e,t)=>i.instance.post(`${a.gT}/rpms/names`,{urls:e,search:t})}}]);
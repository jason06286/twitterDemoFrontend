import{f as r,g as c,h as u,o as n,i as p}from"./index.892ab834.js";import{u as i}from"./user.e9a05806.js";import{s as _,a as m}from"./api.566fa078.js";const v={__name:"auth",setup(h){const s=r(),e=i();async function o(){try{_();const t=await m();t.data.status==="success"&&(e.setUser(t.data.data.user),s.push("/auth/posts"))}catch{s.push("/login")}}return c(()=>{o()}),(t,f)=>{const a=u("router-view");return n(),p(a)}}};export{v as default};
import{Q as m,f as p,g as l,o as _,c as k}from"./index.91a23ceb.js";import{u as d}from"./user.e7adfe86.js";import{s as f}from"./api.08a46ea5.js";const x={__name:"callback",setup(h){const o=m(),s=p(),e=d(),{token:r,name:n,id:u,photo:c,isThirdPartyLogin:a}=o.query;console.log("route.query :>> ",o.query);const i=()=>{document.cookie=`twitterToken=${r}`,f();const t={name:n,id:u,photo:c,isThirdPartyLogin:a};e.setUser(t),console.log("store.user :>> ",e.user),s.push("/auth/posts")};return l(()=>{i()}),(t,g)=>(_(),k("div"))}};export{x as default};

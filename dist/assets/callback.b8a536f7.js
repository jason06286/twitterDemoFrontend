import{u as n,o as u,a as d,f as p,j as k,b as m,am as _,s as i}from"./index.edf0138a.js";const x={__name:"callback",setup(l){const t=k(),s=m(),o=n(),{token:a,id:r}=t.query,c=()=>{const e=_().utc().add(7,"days").format();document.cookie=`twitterToken=${a}; expires=${e}; path=/`,i(),o.setUser(r),s.push("/")};return u(()=>{c()}),(e,f)=>(d(),p("div"))}};export{x as default};

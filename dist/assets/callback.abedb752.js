import{u as n,o as u,a as d,f as p,j as k,b as _,aj as i,s as m}from"./index.65e91444.js";const x={__name:"callback",setup(l){const t=k(),s=_(),o=n(),{token:a,id:r}=t.query,c=()=>{const e=i().utc().add(7,"days").format();document.cookie=`twitterToken=${a}; expires=${e}; path=/`,m(),o.setUser(r),s.push("/")};return u(()=>{c()}),(e,f)=>(d(),p("div"))}};export{x as default};

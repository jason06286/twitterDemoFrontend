import{o as fe,c as ve,e as me,f as v,a5 as qe,D as R,H as Ge,a6 as We,a0 as Ve,G as Q,a7 as Re,a8 as Ae,a9 as J,aa as ke,ab as be,r as W,ac as Ne,ad as se,ae as Ke,w as sn,af as cn,ag as dn,ah as Ue}from"./index.0cb84ca1.js";const fn={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},vn=me("path",{fill:"currentColor",d:"M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9c-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7a9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z"},null,-1),mn=[vn];function hn(e,t){return fe(),ve("svg",fn,mn)}var At={name:"ri-eye-line",render:hn};const gn={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},yn=me("path",{fill:"currentColor",d:"m9.342 18.782l-1.931-.518l.787-2.939a10.988 10.988 0 0 1-3.237-1.872l-2.153 2.154l-1.415-1.415l2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 0 1-2.37 5.071l2.153 2.153l-1.415 1.415l-2.153-2.154a10.988 10.988 0 0 1-3.237 1.872l.787 2.94l-1.931.517l-.788-2.94a11.072 11.072 0 0 1-3.74 0l-.788 2.94z"},null,-1),Vn=[yn];function bn(e,t){return fe(),ve("svg",gn,Vn)}var pt={name:"ri-eye-close-line",render:bn};const On={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_n=me("path",{fill:"currentColor",d:"M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"},null,-1),An=[_n];function pn(e,t){return fe(),ve("svg",On,An)}var Ft={name:"ri-lock-password-line",render:pn};const Fn={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},wn=me("path",{fill:"currentColor",d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z"},null,-1),En=[wn];function Sn(e,t){return fe(),ve("svg",Fn,En)}var wt={name:"mdi-email-outline",render:Sn};const Mn={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},jn=me("path",{fill:"currentColor",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"},null,-1),Cn=[jn];function Bn(e,t){return fe(),ve("svg",Mn,Cn)}var Et={name:"ri-error-warning-fill",render:Bn};/**
  * vee-validate v4.5.11
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */function re(e){return typeof e=="function"}function Oe(e){return e==null}const ie=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function Xe(e){return Number(e)>=0}function In(e){const t=parseFloat(e);return isNaN(t)?e:t}const Rn={};function kn(e){return Rn[e]}const ee=Symbol("vee-validate-form"),Nn=Symbol("vee-validate-field-instance"),ye=Symbol("Default empty value");function Ce(e){return re(e)&&!!e.__locatorRef}function $n(e){return["input","textarea","select"].includes(e)}function zn(e,t){return $n(e)&&t.type==="file"}function ce(e){return!!e&&re(e.validate)}function de(e){return e==="checkbox"||e==="radio"}function Tn(e){return ie(e)||Array.isArray(e)}function Pn(e){return Array.isArray(e)?e.length===0:ie(e)&&Object.keys(e).length===0}function pe(e){return/^\[.+\]$/i.test(e)}function Un(e){return Je(e)&&e.multiple}function Je(e){return e.tagName==="SELECT"}function Dn(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return e==="select"&&"multiple"in t&&n}function Ln(e,t){return Dn(e,t)||zn(e,t)}function Hn(e){return $e(e)&&e.target&&"submit"in e.target}function $e(e){return e?!!(typeof Event!="undefined"&&re(Event)&&e instanceof Event||e&&e.srcElement):!1}function Be(e,t){return t in e&&e[t]!==ye}function ze(e){return pe(e)?e.replace(/\[|\]/gi,""):e}function I(e,t,n){return e?pe(t)?e[ze(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,a)=>Tn(i)&&a in i?i[a]:n,e):n}function te(e,t,n){if(pe(t)){e[ze(t)]=n;return}const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let a=0;a<r.length;a++){if(a===r.length-1){i[r[a]]=n;return}(!(r[a]in i)||Oe(i[r[a]]))&&(i[r[a]]=Xe(r[a+1])?[]:{}),i=i[r[a]]}}function Se(e,t){if(Array.isArray(e)&&Xe(t)){e.splice(Number(t),1);return}ie(e)&&delete e[t]}function Me(e,t){if(pe(t)){delete e[ze(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let a=0;a<n.length;a++){if(a===n.length-1){Se(r,n[a]);break}if(!(n[a]in r)||Oe(r[n[a]]))break;r=r[n[a]]}const i=n.map((a,u)=>I(e,n.slice(0,u).join(".")));for(let a=i.length-1;a>=0;a--)if(!!Pn(i[a])){if(a===0){Se(e,n[0]);continue}Se(i[a-1],n[a-1])}}function T(e){return Object.keys(e)}function he(e,t=void 0){const n=cn();return(n==null?void 0:n.provides[e])||qe(e,t)}function De(e){Ke(`[vee-validate]: ${e}`)}function Ie(e,t,n){if(Array.isArray(e)){const r=[...e],i=r.indexOf(t);return i>=0?r.splice(i,1):r.push(t),r}return e===t?n:t}function Yn(e,t=0){let n=null,r=[];return function(...i){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const a=e(...i);r.forEach(u=>u(a)),r=[]},t),new Promise(a=>r.push(a))}}const Fe=(e,t,n)=>t.slots.default?typeof e=="string"||!e?t.slots.default(n()):{default:()=>{var r,i;return(i=(r=t.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:t.slots.default;function je(e){if(Qe(e))return e._value}function Qe(e){return"_value"in e}function Te(e){if(!$e(e))return e;const t=e.target;if(de(t.type)&&Qe(t))return je(t);if(t.type==="file"&&t.files)return Array.from(t.files);if(Un(t))return Array.from(t.options).filter(n=>n.selected&&!n.disabled).map(je);if(Je(t)){const n=Array.from(t.options).find(r=>r.selected);return n?je(n):t.value}return t.value}function xe(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?ie(e)&&e._$$isNormalized?e:ie(e)?Object.keys(e).reduce((n,r)=>{const i=Zn(e[r]);return e[r]!==!1&&(n[r]=Le(i)),n},t):typeof e!="string"?t:e.split("|").reduce((n,r)=>{const i=qn(r);return i.name&&(n[i.name]=Le(i.params)),n},t):t}function Zn(e){return e===!0?[]:Array.isArray(e)||ie(e)?e:[e]}function Le(e){const t=n=>typeof n=="string"&&n[0]==="@"?Gn(n.slice(1)):n;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})}const qn=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function Gn(e){const t=n=>I(n,e)||n[e];return t.__locatorRef=e,t}function Wn(e){return Array.isArray(e)?e.filter(Ce):T(e).filter(t=>Ce(e[t])).map(t=>e[t])}const Kn={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Xn=Object.assign({},Kn);const Pe=()=>Xn;async function en(e,t,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:t,bails:r!=null?r:!0,formData:(n==null?void 0:n.values)||{}},u=(await Jn(i,e)).errors;return{errors:u,valid:!u.length}}async function Jn(e,t){if(ce(e.rules))return Qn(t,e.rules,{bails:e.bails});if(re(e.rules)||Array.isArray(e.rules)){const u={field:e.name,form:e.formData,value:t},s=Array.isArray(e.rules)?e.rules:[e.rules],d=s.length,m=[];for(let b=0;b<d;b++){const V=s[b],h=await V(t,u);if(typeof h!="string"&&h)continue;const k=typeof h=="string"?h:nn(u);if(m.push(k),e.bails)return{errors:m}}return{errors:m}}const n=Object.assign(Object.assign({},e),{rules:xe(e.rules)}),r=[],i=Object.keys(n.rules),a=i.length;for(let u=0;u<a;u++){const s=i[u],d=await xn(n,t,{name:s,params:n.rules[s]});if(d.error&&(r.push(d.error),e.bails))return{errors:r}}return{errors:r}}async function Qn(e,t,n){var r;return{errors:await t.validate(e,{abortEarly:(r=n.bails)!==null&&r!==void 0?r:!0}).then(()=>[]).catch(a=>{if(a.name==="ValidationError")return a.errors;throw a})}}async function xn(e,t,n){const r=kn(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=et(n.params,e.formData),a={field:e.name,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:i})},u=await r(t,i,a);return typeof u=="string"?{error:u}:{error:u?void 0:nn(a)}}function nn(e){const t=Pe().generateMessage;return t?t(e):"Field is invalid"}function et(e,t){const n=r=>Ce(r)?r(t):r;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((r,i)=>(r[i]=n(e[i]),r),{})}async function nt(e,t){const n=await e.validate(t,{abortEarly:!1}).then(()=>[]).catch(a=>{if(a.name!=="ValidationError")throw a;return a.inner||[]}),r={},i={};for(const a of n){const u=a.errors;r[a.path]={valid:!u.length,errors:u},u.length&&(i[a.path]=u[0])}return{valid:!n.length,results:r,errors:i}}async function tt(e,t,n){const i=T(e).map(async m=>{var b,V,h;const j=await en(I(t,m),e[m],{name:((b=n==null?void 0:n.names)===null||b===void 0?void 0:b[m])||m,values:t,bails:(h=(V=n==null?void 0:n.bailsMap)===null||V===void 0?void 0:V[m])!==null&&h!==void 0?h:!0});return Object.assign(Object.assign({},j),{path:m})});let a=!0;const u=await Promise.all(i),s={},d={};for(const m of u)s[m.path]={valid:m.valid,errors:m.errors},m.valid||(a=!1,d[m.path]=m.errors[0]);return{valid:a,results:s,errors:d}}function He(e,t,n){typeof n.value=="object"&&(n.value=C(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||t==="__proto__"?Object.defineProperty(e,t,n):e[t]=n.value}function C(e){if(typeof e!="object")return e;var t=0,n,r,i,a=Object.prototype.toString.call(e);if(a==="[object Object]"?i=Object.create(e.__proto__||null):a==="[object Array]"?i=Array(e.length):a==="[object Set]"?(i=new Set,e.forEach(function(u){i.add(C(u))})):a==="[object Map]"?(i=new Map,e.forEach(function(u,s){i.set(C(s),C(u))})):a==="[object Date]"?i=new Date(+e):a==="[object RegExp]"?i=new RegExp(e.source,e.flags):a==="[object DataView]"?i=new e.constructor(C(e.buffer)):a==="[object ArrayBuffer]"?i=e.slice(0):a.slice(-6)==="Array]"&&(i=new e.constructor(e)),i){for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)He(i,r[t],Object.getOwnPropertyDescriptor(e,r[t]));for(t=0,r=Object.getOwnPropertyNames(e);t<r.length;t++)Object.hasOwnProperty.call(i,n=r[t])&&i[n]===e[n]||He(i,n,Object.getOwnPropertyDescriptor(e,n))}return i||e}var _e=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;for(i of t.entries())if(!e(i[1],n.get(i[0])))return!1;return!0}if(t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(i of t.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(t[i]!==n[i])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;i--!==0;){var u=a[i];if(!e(t[u],n[u]))return!1}return!0}return t!==t&&n!==n};let Ye=0;function rt(e,t){const{value:n,initialValue:r,setInitialValue:i}=it(e,t.modelValue,!t.standalone),{errorMessage:a,errors:u,setErrors:s}=lt(e,!t.standalone),d=at(n,r,u),m=Ye>=Number.MAX_SAFE_INTEGER?0:++Ye;function b(V){var h;"value"in V&&(n.value=V.value),"errors"in V&&s(V.errors),"touched"in V&&(d.touched=(h=V.touched)!==null&&h!==void 0?h:d.touched),"initialValue"in V&&i(V.initialValue)}return{id:m,path:e,value:n,initialValue:r,meta:d,errors:u,errorMessage:a,setState:b}}function it(e,t,n){const r=n?he(ee,void 0):void 0,i=W(v(t));function a(){return r?I(r.meta.value.initialValues,v(e),v(i)):v(i)}function u(b){if(!r){i.value=b;return}r.setFieldInitialValue(v(e),b)}const s=R(a);if(!r)return{value:W(a()),initialValue:s,setInitialValue:u};const d=t?v(t):I(r.values,v(e),v(s));return r.stageInitialValue(v(e),d),{value:R({get(){return I(r.values,v(e))},set(b){r.setFieldValue(v(e),b)}}),initialValue:s,setInitialValue:u}}function at(e,t,n){const r=Ne({touched:!1,pending:!1,valid:!0,validated:!!v(n).length,initialValue:R(()=>v(t)),dirty:R(()=>!_e(v(e),v(t)))});return Q(n,i=>{r.valid=!i.length},{immediate:!0,flush:"sync"}),r}function lt(e,t){const n=t?he(ee,void 0):void 0;function r(a){return a?Array.isArray(a)?a:[a]:[]}if(!n){const a=W([]);return{errors:a,errorMessage:R(()=>a.value[0]),setErrors:u=>{a.value=r(u)}}}const i=R(()=>n.errorBag.value[v(e)]||[]);return{errors:i,errorMessage:R(()=>i.value[0]),setErrors:a=>{n.setFieldErrorBag(v(e),r(a))}}}function ut(e,t,n){return de(n==null?void 0:n.type)?ct(e,t,n):tn(e,t,n)}function tn(e,t,n){const{initialValue:r,validateOnMount:i,bails:a,type:u,checkedValue:s,label:d,validateOnValueUpdate:m,uncheckedValue:b,standalone:V}=ot(v(e),n),h=V?void 0:he(ee);let j=!1;const{id:k,value:N,initialValue:D,meta:f,setState:g,errors:A,errorMessage:p}=rt(e,{modelValue:r,standalone:V}),w=()=>{f.touched=!0},E=R(()=>{let c=v(t);const S=v(h==null?void 0:h.schema);return S&&!ce(S)&&(c=st(S,v(e))||c),ce(c)||re(c)||Array.isArray(c)?c:xe(c)});async function L(c){var S,$;return h!=null&&h.validateSchema?(S=(await h.validateSchema(c)).results[v(e)])!==null&&S!==void 0?S:{valid:!0,errors:[]}:en(N.value,E.value,{name:v(d)||v(e),values:($=h==null?void 0:h.values)!==null&&$!==void 0?$:{},bails:a})}async function B(){f.pending=!0,f.validated=!0;const c=await L("validated-only");return j&&(c.valid=!0,c.errors=[]),g({errors:c.errors}),f.pending=!1,c}async function F(){const c=await L("silent");return j&&(c.valid=!0),f.valid=c.valid,c}function M(c){return!(c!=null&&c.mode)||(c==null?void 0:c.mode)==="force"||(c==null?void 0:c.mode)==="validated-only"?B():F()}const P=(c,S=!0)=>{const $=Te(c);N.value=$,!m&&S&&B()};Ge(()=>{if(i)return B();(!h||!h.validateSchema)&&F()});function G(c){f.touched=c}let H;function K(){H=Q(N,m?B:F,{deep:!0})}K();function Z(c){var S;H==null||H();const $=c&&"value"in c?c.value:D.value;g({value:C($),initialValue:C($),touched:(S=c==null?void 0:c.touched)!==null&&S!==void 0?S:!1,errors:(c==null?void 0:c.errors)||[]}),f.pending=!1,f.validated=!1,F(),se(()=>{K()})}function Y(c){N.value=c}function ne(c){g({errors:Array.isArray(c)?c:[c]})}const U={id:k,name:e,label:d,value:N,meta:f,errors:A,errorMessage:p,type:u,checkedValue:s,uncheckedValue:b,bails:a,resetField:Z,handleReset:()=>Z(),validate:M,handleChange:P,handleBlur:w,setState:g,setTouched:G,setErrors:ne,setValue:Y};if(We(Nn,U),Ve(t)&&typeof v(t)!="function"&&Q(t,(c,S)=>{_e(c,S)||(f.validated?B():F())},{deep:!0}),!h)return U;h.register(U),Re(()=>{j=!0,h.unregister(U)});const we=R(()=>{const c=E.value;return!c||re(c)||ce(c)||Array.isArray(c)?{}:Object.keys(c).reduce((S,$)=>{const ae=Wn(c[$]).map(x=>x.__locatorRef).reduce((x,le)=>{const ge=I(h.values,le)||h.values[le];return ge!==void 0&&(x[le]=ge),x},{});return Object.assign(S,ae),S},{})});return Q(we,(c,S)=>{if(!Object.keys(c).length)return;!_e(c,S)&&(f.validated?B():F())}),U}function ot(e,t){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:e,validateOnValueUpdate:!0,standalone:!1});if(!t)return n();const r="valueProp"in t?t.valueProp:t.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),t||{}),{checkedValue:r})}function st(e,t){if(!!e)return e[t]}function ct(e,t,n){const r=n!=null&&n.standalone?void 0:he(ee),i=n==null?void 0:n.checkedValue,a=n==null?void 0:n.uncheckedValue;function u(s){const d=s.handleChange,m=R(()=>{const V=v(s.value),h=v(i);return Array.isArray(V)?V.includes(h):h===V});function b(V,h=!0){var j,k;if(m.value===((k=(j=V)===null||j===void 0?void 0:j.target)===null||k===void 0?void 0:k.checked))return;let N=Te(V);r||(N=Ie(v(s.value),v(i),v(a))),d(N,h)}return Re(()=>{m.value&&b(v(i),!1)}),Object.assign(Object.assign({},s),{checked:m,checkedValue:i,uncheckedValue:a,handleChange:b})}return u(tn(e,t,n))}Ae({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Pe().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:ye},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(e,t){const n=J(e,"rules"),r=J(e,"name"),i=J(e,"label"),a=J(e,"uncheckedValue"),u=Be(e,"onUpdate:modelValue"),{errors:s,value:d,errorMessage:m,validate:b,handleChange:V,handleBlur:h,setTouched:j,resetField:k,handleReset:N,meta:D,checked:f,setErrors:g}=ut(r,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:vt(e,t),checkedValue:t.attrs.value,uncheckedValue:a,label:i,validateOnValueUpdate:!1}),A=u?function(M,P=!0){V(M,P),t.emit("update:modelValue",d.value)}:V,p=F=>{de(t.attrs.type)||(d.value=Te(F))},w=u?function(M){p(M),t.emit("update:modelValue",d.value)}:p,E=R(()=>{const{validateOnInput:F,validateOnChange:M,validateOnBlur:P,validateOnModelUpdate:G}=dt(e),H=[h,t.attrs.onBlur,P?b:void 0].filter(Boolean),K=[U=>A(U,F),t.attrs.onInput].filter(Boolean),Z=[U=>A(U,M),t.attrs.onChange].filter(Boolean),Y={name:e.name,onBlur:H,onInput:K,onChange:Z};Y["onUpdate:modelValue"]=U=>A(U,G),de(t.attrs.type)&&f?Y.checked=f.value:Y.value=d.value;const ne=Ze(e,t);return Ln(ne,t.attrs)&&delete Y.value,Y}),L=J(e,"modelValue");Q(L,F=>{F===ye&&d.value===void 0||F!==ft(d.value,e.modelModifiers)&&(d.value=F===ye?void 0:F,b())});function B(){return{field:E.value,value:d.value,meta:D,errors:s.value,errorMessage:m.value,validate:b,resetField:k,handleChange:A,handleInput:w,handleReset:N,handleBlur:h,setTouched:j,setErrors:g}}return t.expose({setErrors:g,setTouched:j,reset:k,validate:b,handleChange:V}),()=>{const F=ke(Ze(e,t)),M=Fe(F,t,B);return F?be(F,Object.assign(Object.assign({},t.attrs),E.value),M):M}}});function Ze(e,t){let n=e.as||"";return!e.as&&!t.slots.default&&(n="input"),n}function dt(e){var t,n,r,i;const{validateOnInput:a,validateOnChange:u,validateOnBlur:s,validateOnModelUpdate:d}=Pe();return{validateOnInput:(t=e.validateOnInput)!==null&&t!==void 0?t:a,validateOnChange:(n=e.validateOnChange)!==null&&n!==void 0?n:u,validateOnBlur:(r=e.validateOnBlur)!==null&&r!==void 0?r:s,validateOnModelUpdate:(i=e.validateOnModelUpdate)!==null&&i!==void 0?i:d}}function ft(e,t){return t.number?In(e):e}function vt(e,t){return de(t.attrs.type)?Be(e,"modelValue")?e.modelValue:void 0:Be(e,"modelValue")?e.modelValue:t.attrs.value}let mt=0;function ht(e){const t=mt++;let n=!1;const r=W({}),i=W(!1),a=W(0),u={},s=Ne(C(v(e==null?void 0:e.initialValues)||{})),{errorBag:d,setErrorBag:m,setFieldErrorBag:b}=Vt(e==null?void 0:e.initialErrors),V=R(()=>T(d.value).reduce((l,o)=>{const _=d.value[o];return _&&_.length&&(l[o]=_[0]),l},{}));function h(l){const o=r.value[l];return Array.isArray(o)?o[0]:o}function j(l){return!!r.value[l]}const k=R(()=>T(r.value).reduce((l,o)=>{const _=h(o);return _&&(l[o]=v(_.label||_.name)||""),l},{})),N=R(()=>T(r.value).reduce((l,o)=>{var _;const O=h(o);return O&&(l[o]=(_=O.bails)!==null&&_!==void 0?_:!0),l},{})),D=Object.assign({},(e==null?void 0:e.initialErrors)||{}),{initialValues:f,originalInitialValues:g,setInitialValues:A}=yt(r,s,e==null?void 0:e.initialValues),p=gt(r,s,f,V),w=e==null?void 0:e.validationSchema,E={formId:t,fieldsByPath:r,values:s,errorBag:d,errors:V,schema:w,submitCount:a,meta:p,isSubmitting:i,fieldArraysLookup:u,validateSchema:v(w)?ln:void 0,validate:S,register:we,unregister:c,setFieldErrorBag:b,validateField:$,setFieldValue:G,setValues:H,setErrors:P,setFieldError:M,setFieldTouched:K,setTouched:Z,resetForm:Y,handleSubmit:ae,stageInitialValue:ge,unsetInitialValue:le,setFieldInitialValue:x};function L(l){return Array.isArray(l)}function B(l,o){return Array.isArray(l)?l.forEach(o):o(l)}function F(l){Object.values(r.value).forEach(o=>{!o||B(o,l)})}function M(l,o){b(l,o)}function P(l){m(l)}function G(l,o,{force:_}={force:!1}){var O;const y=r.value[l],z=C(o);if(!y){te(s,l,z);return}if(L(y)&&((O=y[0])===null||O===void 0?void 0:O.type)==="checkbox"&&!Array.isArray(o)){const X=C(Ie(I(s,l)||[],o,void 0));te(s,l,X);return}let q=o;!L(y)&&y.type==="checkbox"&&!_&&!n&&(q=C(Ie(I(s,l),o,v(y.uncheckedValue)))),te(s,l,q)}function H(l){T(s).forEach(o=>{delete s[o]}),T(l).forEach(o=>{G(o,l[o])}),Object.values(u).forEach(o=>o&&o.reset())}function K(l,o){const _=r.value[l];_&&B(_,O=>O.setTouched(o))}function Z(l){T(l).forEach(o=>{K(o,!!l[o])})}function Y(l){n=!0,l!=null&&l.values?(A(l.values),H(l==null?void 0:l.values)):(A(g.value),H(g.value)),F(o=>o.resetField()),l!=null&&l.touched&&Z(l.touched),P((l==null?void 0:l.errors)||{}),a.value=(l==null?void 0:l.submitCount)||0,se(()=>{n=!1})}function ne(l,o){const _=dn(l),O=o;if(!r.value[O]){r.value[O]=_;return}const y=r.value[O];y&&!Array.isArray(y)&&(r.value[O]=[y]),r.value[O]=[...r.value[O],_]}function U(l,o){const _=o,O=r.value[_];if(!!O){if(!L(O)&&l.id===O.id){delete r.value[_];return}if(L(O)){const y=O.findIndex(z=>z.id===l.id);if(y===-1)return;if(O.splice(y,1),O.length===1){r.value[_]=O[0];return}O.length||delete r.value[_]}}}function we(l){const o=v(l.name);ne(l,o),Ve(l.name)&&Q(l.name,async(O,y)=>{await se(),U(l,y),ne(l,O),(V.value[y]||V.value[O])&&(M(y,void 0),$(O)),await se(),j(y)||Me(s,y)});const _=v(l.errorMessage);_&&(D==null?void 0:D[o])!==_&&$(o),delete D[o]}function c(l){const o=v(l.name);U(l,o),se(()=>{j(o)||(M(o,void 0),Me(s,o))})}async function S(l){if(F(y=>y.meta.validated=!0),E.validateSchema)return E.validateSchema((l==null?void 0:l.mode)||"force");const o=await Promise.all(Object.values(r.value).map(y=>{const z=Array.isArray(y)?y[0]:y;return z?z.validate(l).then(q=>({key:v(z.name),valid:q.valid,errors:q.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),_={},O={};for(const y of o)_[y.key]={valid:y.valid,errors:y.errors},y.errors.length&&(O[y.key]=y.errors[0]);return{valid:o.every(y=>y.valid),results:_,errors:O}}async function $(l){const o=r.value[l];return o?Array.isArray(o)?o.map(_=>_.validate())[0]:o.validate():(Ke(`field with name ${l} was not found`),Promise.resolve({errors:[],valid:!0}))}function ae(l,o){return function(O){return O instanceof Event&&(O.preventDefault(),O.stopPropagation()),Z(T(r.value).reduce((y,z)=>(y[z]=!0,y),{})),i.value=!0,a.value++,S().then(y=>{if(y.valid&&typeof l=="function")return l(C(s),{evt:O,setErrors:P,setFieldError:M,setTouched:Z,setFieldTouched:K,setValues:H,setFieldValue:G,resetForm:Y});!y.valid&&typeof o=="function"&&o({values:C(s),evt:O,errors:y.errors,results:y.results})}).then(y=>(i.value=!1,y),y=>{throw i.value=!1,y})}}function x(l,o){te(f.value,l,C(o))}function le(l){Me(f.value,l)}function ge(l,o){te(s,l,o),x(l,o)}async function rn(){const l=v(w);return l?ce(l)?await nt(l,s):await tt(l,s,{names:k.value,bailsMap:N.value}):{valid:!0,results:{},errors:{}}}const an=Yn(rn,5);async function ln(l){const o=await an(),_=E.fieldsByPath.value||{},O=T(E.errorBag.value);return[...new Set([...T(o.results),...T(_),...O])].reduce((z,q)=>{const X=_[q],Ee=(o.results[q]||{errors:[]}).errors,ue={errors:Ee,valid:!Ee.length};if(z.results[q]=ue,ue.valid||(z.errors[q]=ue.errors[0]),!X)return M(q,Ee),z;if(B(X,oe=>oe.meta.valid=ue.valid),l==="silent")return z;const on=Array.isArray(X)?X.some(oe=>oe.meta.validated):X.meta.validated;return l==="validated-only"&&!on||B(X,oe=>oe.setState({errors:ue.errors})),z},{valid:o.valid,results:{},errors:{}})}const un=ae((l,{evt:o})=>{Hn(o)&&o.target.submit()});return Ge(()=>{if(e!=null&&e.initialErrors&&P(e.initialErrors),e!=null&&e.initialTouched&&Z(e.initialTouched),e!=null&&e.validateOnMount){S();return}E.validateSchema&&E.validateSchema("silent")}),Ve(w)&&Q(w,()=>{var l;(l=E.validateSchema)===null||l===void 0||l.call(E,"validated-only")}),We(ee,E),{errors:V,meta:p,values:s,isSubmitting:i,submitCount:a,validate:S,validateField:$,handleReset:()=>Y(),resetForm:Y,handleSubmit:ae,submitForm:un,setFieldError:M,setErrors:P,setFieldValue:G,setValues:H,setFieldTouched:K,setTouched:Z}}function gt(e,t,n,r){const i={touched:"some",pending:"some",valid:"every"},a=R(()=>!_e(t,v(n)));function u(){const d=Object.values(e.value).flat(1).filter(Boolean);return T(i).reduce((m,b)=>{const V=i[b];return m[b]=d[V](h=>h.meta[b]),m},{})}const s=Ne(u());return sn(()=>{const d=u();s.touched=d.touched,s.valid=d.valid,s.pending=d.pending}),R(()=>Object.assign(Object.assign({initialValues:v(n)},s),{valid:s.valid&&!T(r.value).length,dirty:a.value}))}function yt(e,t,n){const r=W(C(v(n))||{}),i=W(C(v(n))||{});function a(u,s=!1){r.value=C(u),i.value=C(u),s&&T(e.value).forEach(d=>{const m=e.value[d],b=Array.isArray(m)?m.some(h=>h.meta.touched):m==null?void 0:m.meta.touched;if(!m||b)return;const V=I(r.value,d);te(t,d,C(V))})}return Ve(n)&&Q(n,u=>{a(u,!0)},{deep:!0}),{initialValues:r,originalInitialValues:i,setInitialValues:a}}function Vt(e){const t=W({});function n(a){return Array.isArray(a)?a:a?[a]:[]}function r(a,u){if(!u){delete t.value[a];return}t.value[a]=n(u)}function i(a){t.value=T(a).reduce((u,s)=>{const d=a[s];return d&&(u[s]=n(d)),u},{})}return e&&i(e),{errorBag:t,setErrorBag:i,setFieldErrorBag:r}}Ae({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0}},setup(e,t){const n=J(e,"initialValues"),r=J(e,"validationSchema"),{errors:i,values:a,meta:u,isSubmitting:s,submitCount:d,validate:m,validateField:b,handleReset:V,resetForm:h,handleSubmit:j,submitForm:k,setErrors:N,setFieldError:D,setFieldValue:f,setValues:g,setFieldTouched:A,setTouched:p}=ht({validationSchema:r.value?r:void 0,initialValues:n,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount}),w=e.onSubmit?j(e.onSubmit,e.onInvalidSubmit):k;function E(F){$e(F)&&F.preventDefault(),V(),typeof t.attrs.onReset=="function"&&t.attrs.onReset()}function L(F,M){return j(typeof F=="function"&&!M?F:M,e.onInvalidSubmit)(F)}function B(){return{meta:u.value,errors:i.value,values:a,isSubmitting:s.value,submitCount:d.value,validate:m,validateField:b,handleSubmit:L,handleReset:V,submitForm:k,setErrors:N,setFieldError:D,setFieldValue:f,setValues:g,setFieldTouched:A,setTouched:p,resetForm:h}}return t.expose({setFieldError:D,setErrors:N,setFieldValue:f,setValues:g,setFieldTouched:A,setTouched:p,resetForm:h,validate:m,validateField:b}),function(){const M=e.as==="form"?e.as:ke(e.as),P=Fe(M,t,B);if(!e.as)return P;const G=e.as==="form"?{novalidate:!0}:{};return be(M,Object.assign(Object.assign(Object.assign({},G),t.attrs),{onSubmit:w,onReset:E}),P)}}});let bt=0;function Ot(e){const t=bt++,n=he(ee,void 0),r=W([]),i=()=>{},a={fields:Ue(r),remove:i,push:i,swap:i,insert:i,update:i,replace:i,prepend:i};if(!n)return De("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),a;if(!v(e))return De("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),a;let u=0;function s(){const f=I(n==null?void 0:n.values,v(e),[]);r.value=f.map(m),d()}s();function d(){const f=r.value.length;for(let g=0;g<f;g++){const A=r.value[g];A.isFirst=g===0,A.isLast=g===f-1}}function m(f){const g=u++;return{key:g,value:R(()=>{const p=I(n==null?void 0:n.values,v(e),[]),w=r.value.findIndex(E=>E.key===g);return w===-1?f:p[w]}),isFirst:!1,isLast:!1}}function b(f){const g=v(e),A=I(n==null?void 0:n.values,g);if(!A||!Array.isArray(A))return;const p=[...A];p.splice(f,1),n==null||n.unsetInitialValue(g+`[${f}]`),n==null||n.setFieldValue(g,p),r.value.splice(f,1),d()}function V(f){const g=v(e),A=I(n==null?void 0:n.values,g),p=Oe(A)?[]:A;if(!Array.isArray(p))return;const w=[...p];w.push(f),n==null||n.stageInitialValue(g+`[${w.length-1}]`,f),n==null||n.setFieldValue(g,w),r.value.push(m(f)),d()}function h(f,g){const A=v(e),p=I(n==null?void 0:n.values,A);if(!Array.isArray(p)||!(f in p)||!(g in p))return;const w=[...p],E=[...r.value],L=w[f];w[f]=w[g],w[g]=L;const B=E[f];E[f]=E[g],E[g]=B,n==null||n.setFieldValue(A,w),r.value=E,d()}function j(f,g){const A=v(e),p=I(n==null?void 0:n.values,A);if(!Array.isArray(p)||p.length<f)return;const w=[...p],E=[...r.value];w.splice(f,0,g),E.splice(f,0,m(g)),n==null||n.setFieldValue(A,w),r.value=E,d()}function k(f){const g=v(e);n==null||n.setFieldValue(g,f),s()}function N(f,g){const A=v(e),p=I(n==null?void 0:n.values,A);!Array.isArray(p)||p.length-1<f||n==null||n.setFieldValue(`${A}[${f}]`,g)}function D(f){const g=v(e),A=I(n==null?void 0:n.values,g),p=Oe(A)?[]:A;if(!Array.isArray(p))return;const w=[f,...p];n==null||n.stageInitialValue(g+`[${w.length-1}]`,f),n==null||n.setFieldValue(g,w),r.value.unshift(m(f)),d()}return n.fieldArraysLookup[t]={reset:s},Re(()=>{delete n.fieldArraysLookup[t]}),{fields:Ue(r),remove:b,push:V,swap:h,insert:j,update:N,replace:k,prepend:D}}Ae({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(e,t){const{push:n,remove:r,swap:i,insert:a,replace:u,update:s,prepend:d,fields:m}=Ot(J(e,"name"));function b(){return{fields:m.value,push:n,remove:r,swap:i,insert:a,update:s,replace:u,prepend:d}}return t.expose({push:n,remove:r,swap:i,insert:a,update:s,replace:u,prepend:d}),()=>Fe(void 0,t,b)}});Ae({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=qe(ee,void 0),r=R(()=>n==null?void 0:n.errors.value[e.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const a=e.as?ke(e.as):e.as,u=Fe(a,t,i),s=Object.assign({role:"alert"},t.attrs);return!a&&(Array.isArray(u)||!u)&&(u==null?void 0:u.length)?u:(Array.isArray(u)||!u)&&!(u!=null&&u.length)?be(a||"span",s,r.value):be(a,s,u)}}});const St={email(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?!0:"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165":"\u4FE1\u7BB1\u4E0D\u5F97\u70BA\u7A7A\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"},password(e){return e?e.length<8?"\u5BC6\u78BC\u683C\u5F0F\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165":!0:"\u5BC6\u78BC\u4E0D\u5F97\u70BA\u7A7A\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"}},Mt={name(e){return e?!0:"\u66B1\u7A31\u4E0D\u5F97\u70BA\u7A7A\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"},email(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?!0:"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165":"\u4FE1\u7BB1\u4E0D\u5F97\u70BA\u7A7A\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"},password(e){return e?e.length<8?"\u5BC6\u78BC\u683C\u5F0F\u932F\u8AA4\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165":!0:"\u5BC6\u78BC\u4E0D\u5F97\u70BA\u7A7A\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165"}};export{Et as _,ut as a,wt as b,Ft as c,pt as d,At as e,St as l,Mt as r,ht as u};

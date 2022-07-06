var K={exports:{}},Ee=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},Be=Ee,Q=Object.prototype.toString,Y=function(r){return function(e){var t=Q.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function S(r){return r=r.toLowerCase(),function(t){return Y(t)===r}}function Z(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function Le(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var ye=S("ArrayBuffer");function Fe(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&ye(r.buffer),e}function ke(r){return typeof r=="string"}function je(r){return typeof r=="number"}function Re(r){return r!==null&&typeof r=="object"}function B(r){if(Y(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var qe=S("Date"),Ie=S("File"),Me=S("Blob"),He=S("FileList");function ee(r){return Q.call(r)==="[object Function]"}function Je(r){return Re(r)&&ee(r.pipe)}function ze(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Q.call(r)===e||ee(r.toString)&&r.toString()===e)}var Ve=S("URLSearchParams");function We(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Xe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function re(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Z(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function X(){var r={};function e(n,i){B(r[i])&&B(n)?r[i]=X(r[i],n):B(n)?r[i]=X({},n):Z(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)re(arguments[t],e);return r}function Ge(r,e,t){return re(e,function(n,i){t&&typeof n=="function"?r[i]=Be(n,t):r[i]=n}),r}function Ke(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Qe(r,e,t,a){r.prototype=Object.create(e.prototype,a),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Ye(r,e,t){var a,n,i,s={};e=e||{};do{for(a=Object.getOwnPropertyNames(r),n=a.length;n-- >0;)i=a[n],s[i]||(e[i]=r[i],s[i]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Ze(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var a=r.indexOf(e,t);return a!==-1&&a===t}function er(r){if(!r)return null;var e=r.length;if(F(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var rr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:Z,isArrayBuffer:ye,isBuffer:Le,isFormData:ze,isArrayBufferView:Fe,isString:ke,isNumber:je,isObject:Re,isPlainObject:B,isUndefined:F,isDate:qe,isFile:Ie,isBlob:Me,isFunction:ee,isStream:Je,isURLSearchParams:Ve,isStandardBrowserEnv:Xe,forEach:re,merge:X,extend:Ge,trim:We,stripBOM:Ke,inherits:Qe,toFlatObject:Ye,kindOf:Y,kindOfTest:S,endsWith:Ze,toArray:er,isTypedArray:rr,isFileList:He},x=h;function se(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var be=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(x.isURLSearchParams(t))n=t.toString();else{var i=[];x.forEach(t,function(f,d){f===null||typeof f=="undefined"||(x.isArray(f)?d=d+"[]":f=[f],x.forEach(f,function(l){x.isDate(l)?l=l.toISOString():x.isObject(l)&&(l=JSON.stringify(l)),i.push(se(d)+"="+se(l))}))}),n=i.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},tr=h;function k(){this.handlers=[]}k.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};k.prototype.forEach=function(e){tr.forEach(this.handlers,function(a){a!==null&&e(a)})};var nr=k,ar=h,ir=function(e,t){ar.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},we=h;function N(r,e,t,a,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),a&&(this.request=a),n&&(this.response=n)}we.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Oe=N.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ae[r]={value:r}});Object.defineProperties(N,Ae);Object.defineProperty(Oe,"isAxiosError",{value:!0});N.from=function(r,e,t,a,n,i){var s=Object.create(Oe);return we.toFlatObject(r,s,function(f){return f!==Error.prototype}),N.call(s,r.message,e,t,a,n),s.name=r.name,i&&Object.assign(s,i),s};var g=N,Se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function sr(r,e){e=e||new FormData;var t=[];function a(i){return i===null?"":R.isDate(i)?i.toISOString():R.isArrayBuffer(i)||R.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,s){if(R.isPlainObject(i)||R.isArray(i)){if(t.indexOf(i)!==-1)throw Error("Circular reference detected in "+s);t.push(i),R.forEach(i,function(f,d){if(!R.isUndefined(f)){var o=s?s+"."+d:d,l;if(f&&!s&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(v){!R.isUndefined(v)&&e.append(o,a(v))});return}}n(f,o)}}),t.pop()}else e.append(s,a(i))}return n(r),e}var Ce=sr,J=g,or=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(new J("Request failed with status code "+a.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},D=h,ur=D.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,s,u){var f=[];f.push(t+"="+encodeURIComponent(a)),D.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),D.isString(i)&&f.push("path="+i),D.isString(s)&&f.push("domain="+s),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),fr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},lr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},cr=fr,dr=lr,xe=function(e,t){return e&&!cr(t)?dr(e,t):t},z=h,hr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pr=function(e){var t={},a,n,i;return e&&z.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=z.trim(u.substr(0,i)).toLowerCase(),n=z.trim(u.substr(i+1)),a){if(t[a]&&hr.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},oe=h,mr=oe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var s=i;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(s){var u=oe.isString(s)?n(s):s;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}(),G=g,vr=h;function Te(r){G.call(this,r==null?"canceled":r,G.ERR_CANCELED),this.name="CanceledError"}vr.inherits(Te,G,{__CANCEL__:!0});var j=Te,Er=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},U=h,yr=or,Rr=ur,br=be,wr=xe,Or=pr,Ar=mr,Sr=Se,b=g,Cr=j,xr=Er,ue=function(e){return new Promise(function(a,n){var i=e.data,s=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}U.isFormData(i)&&U.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+v)}var p=wr(e.baseURL,e.url);o.open(e.method.toUpperCase(),br(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ae(){if(!!o){var y="getAllResponseHeaders"in o?Or(o.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?o.responseText:o.response,A={data:C,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};yr(function(H){a(H),d()},function(H){n(H),d()},A),o=null}}if("onloadend"in o?o.onloadend=ae:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ae)},o.onabort=function(){!o||(n(new b("Request aborted",b.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new b("Network Error",b.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",A=e.transitional||Sr;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(new b(C,A.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,o)),o=null},U.isStandardBrowserEnv()){var ie=(e.withCredentials||Ar(p))&&e.xsrfCookieName?Rr.read(e.xsrfCookieName):void 0;ie&&(s[e.xsrfHeaderName]=ie)}"setRequestHeader"in o&&U.forEach(s,function(C,A){typeof i=="undefined"&&A.toLowerCase()==="content-type"?delete s[A]:o.setRequestHeader(A,C)}),U.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Cr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),i||(i=null);var M=xr(p);if(M&&["http","https","file"].indexOf(M)===-1){n(new b("Unsupported protocol "+M+":",b.ERR_BAD_REQUEST,e));return}o.send(i)})},Tr=null,c=h,fe=ir,le=g,Nr=Se,Pr=Ce,$r={"Content-Type":"application/x-www-form-urlencoded"};function ce(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function _r(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ue),r}function gr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var q={transitional:Nr,adapter:_r(),transformRequest:[function(e,t){if(fe(t,"Accept"),fe(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return ce(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=c.isObject(e),n=t&&t["Content-Type"],i;if((i=c.isFileList(e))||a&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Pr(i?{"files[]":e}:e,s&&new s)}else if(a||n==="application/json")return ce(t,"application/json"),gr(e);return e}],transformResponse:[function(e){var t=this.transitional||q.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i)throw s.name==="SyntaxError"?le.from(s,le.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){q.headers[e]={}});c.forEach(["post","put","patch"],function(e){q.headers[e]=c.merge($r)});var te=q,Ur=h,Dr=te,Br=function(e,t,a){var n=this||Dr;return Ur.forEach(a,function(s){e=s.call(n,e,t)}),e},Ne=function(e){return!!(e&&e.__CANCEL__)},de=h,V=Br,Lr=Ne,Fr=te,kr=j;function W(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new kr}var jr=function(e){W(e),e.headers=e.headers||{},e.data=V.call(e,e.data,e.headers,e.transformRequest),e.headers=de.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),de.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Fr.adapter;return t(e).then(function(n){return W(e),n.data=V.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Lr(n)||(W(e),n&&n.response&&(n.response.data=V.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Pe=function(e,t){t=t||{};var a={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function i(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function s(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var v=d[l]||i,p=v(l);E.isUndefined(p)&&v!==f||(a[l]=p)}),a},$e={version:"0.27.2"},qr=$e.version,w=g,ne={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ne[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var he={};ne.transitional=function(e,t,a){function n(i,s){return"[Axios v"+qr+"] Transitional option '"+i+"'"+s+(a?". "+a:"")}return function(i,s,u){if(e===!1)throw new w(n(s," has been removed"+(t?" in "+t:"")),w.ERR_DEPRECATED);return t&&!he[s]&&(he[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,s,u):!0}};function Ir(r,e,t){if(typeof r!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],s=e[i];if(s){var u=r[i],f=u===void 0||s(u,i,r);if(f!==!0)throw new w("option "+i+" must be "+f,w.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new w("Unknown option "+i,w.ERR_BAD_OPTION)}}var Mr={assertOptions:Ir,validators:ne},_e=h,Hr=be,pe=nr,me=jr,I=Pe,Jr=xe,ge=Mr,T=ge.validators;function P(r){this.defaults=r,this.interceptors={request:new pe,response:new pe}}P.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&ge.assertOptions(a,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(i=i&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!i){var f=[me,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(v){l(v);break}}try{u=me(d)}catch(v){return Promise.reject(v)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};P.prototype.getUri=function(e){e=I(this.defaults,e);var t=Jr(e.baseURL,e.url);return Hr(t,e.params,e.paramsSerializer)};_e.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(t,a){return this.request(I(a||{},{method:e,url:t,data:(a||{}).data}))}});_e.forEach(["post","put","patch"],function(e){function t(a){return function(i,s,u){return this.request(I(u||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}P.prototype[e]=t(),P.prototype[e+"Form"]=t(!0)});var zr=P,Vr=j;function $(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(s){t.subscribe(s),n=s}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new Vr(n),e(t.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};$.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};$.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};$.source=function(){var e,t=new $(function(n){e=n});return{token:t,cancel:e}};var Wr=$,Xr=function(e){return function(a){return e.apply(null,a)}},Gr=h,Kr=function(e){return Gr.isObject(e)&&e.isAxiosError===!0},ve=h,Qr=Ee,L=zr,Yr=Pe,Zr=te;function Ue(r){var e=new L(r),t=Qr(L.prototype.request,e);return ve.extend(t,L.prototype,e),ve.extend(t,e),t.create=function(n){return Ue(Yr(r,n))},t}var m=Ue(Zr);m.Axios=L;m.CanceledError=j;m.CancelToken=Wr;m.isCancel=Ne;m.VERSION=$e.version;m.toFormData=Ce;m.AxiosError=g;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=Xr;m.isAxiosError=Kr;K.exports=m;K.exports.default=m;var _=K.exports;let O;const rt=()=>{const r=document.cookie.replace(/(?:(?:^|.*;\s*)twitterToken\s*=\s*([^;]*).*$)|^.*$/,"$1");_.defaults.headers.common.Authorization=`Bearer ${r}`,O=_.create({baseURL:"https://fast-tundra-64548.herokuapp.com/api/"})};O=_.create({baseURL:"https://fast-tundra-64548.herokuapp.com/api/"});const tt=()=>{window.location.href="https://fast-tundra-64548.herokuapp.com/api/auth/google"},nt=()=>O.get("user/check"),at=r=>O.post("user/login",r),it=r=>O.post("user/register",r),et=document.cookie.replace(/(?:(?:^|.*;\s*)twitterToken\s*=\s*([^;]*).*$)|^.*$/,"$1");_.defaults.headers.common.Authorization=`Bearer ${et}`;O=_.create({baseURL:"https://fast-tundra-64548.herokuapp.com/api/"});console.log("axios.defaults.headers.common.Authorization :>> ",_.defaults.headers.common.Authorization);const st=()=>O.get("user"),ot=()=>O.get("posts");export{nt as a,st as b,ot as c,at as d,tt as e,it as f,rt as s};
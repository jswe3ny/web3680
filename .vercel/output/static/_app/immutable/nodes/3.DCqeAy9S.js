import{s as L,b as M,n as y}from"../chunks/scheduler.D8c12eMh.js";import{S as P,i as S,e as h,s as w,c as v,a as _,b as C,g as E,d as p,f as u,h as I,j as d,t as k,k as D,m as V}from"../chunks/index.B2zEa4Va.js";import{e as T}from"../chunks/forms.BgF2Ti0C.js";function H(m){let e,l,s,i,c=m[0].message+"",a;return{c(){e=h("div"),l=h("div"),s=h("span"),i=k("Error: "),a=k(c),this.h()},l(n){e=v(n,"DIV",{class:!0});var r=_(e);l=v(r,"DIV",{class:!0});var x=_(l);s=v(x,"SPAN",{});var t=_(s);i=D(t,"Error: "),a=D(t,c),t.forEach(p),x.forEach(p),r.forEach(p),this.h()},h(){u(l,"class","alert alert-info bg-error font-semibold "),u(e,"class","toast")},m(n,r){I(n,e,r),d(e,l),d(l,s),d(s,i),d(s,a)},p(n,r){r&1&&c!==(c=n[0].message+"")&&V(a,c)},d(n){n&&p(e)}}}function j(m){var b;let e,l,s,i="Login",c,a,n='<div class="flex flex-col gap-1"><label for="username">Username</label> <input name="username" id="username" class="px-4 py-2 max"/></div> <div class="flex flex-col gap-1"><label for="password">Password</label> <input type="password" name="password" id="password" class="px-4 py-2 max"/></div> <button class="btn btn-success hover:text-gray-light">Continue</button>',r,x,t=((b=m[0])==null?void 0:b.message)&&H(m);return{c(){e=h("div"),t&&t.c(),l=w(),s=h("h1"),s.textContent=i,c=w(),a=h("form"),a.innerHTML=n,this.h()},l(f){e=v(f,"DIV",{class:!0});var o=_(e);t&&t.l(o),l=C(o),s=v(o,"H1",{class:!0,"data-svelte-h":!0}),E(s)!=="svelte-1lnbm2z"&&(s.textContent=i),c=C(o),a=v(o,"FORM",{method:!0,class:!0,"data-svelte-h":!0}),E(a)!=="svelte-1h6ukxn"&&(a.innerHTML=n),o.forEach(p),this.h()},h(){u(s,"class","text-center text-3xl p-4"),u(a,"method","post"),u(a,"class","mx-auto py-4 px-10 flex flex-col max-w-sm gap-y-3"),u(e,"class","py-[100px]")},m(f,o){I(f,e,o),t&&t.m(e,null),d(e,l),d(e,s),d(e,c),d(e,a),r||(x=M(T.call(null,a)),r=!0)},p(f,[o]){var g;(g=f[0])!=null&&g.message?t?t.p(f,o):(t=H(f),t.c(),t.m(e,l)):t&&(t.d(1),t=null)},i:y,o:y,d(f){f&&p(e),t&&t.d(),r=!1,x()}}}function q(m,e,l){let{form:s}=e;return m.$$set=i=>{"form"in i&&l(0,s=i.form)},[s]}class N extends P{constructor(e){super(),S(this,e,q,j,L,{form:0})}}export{N as component};

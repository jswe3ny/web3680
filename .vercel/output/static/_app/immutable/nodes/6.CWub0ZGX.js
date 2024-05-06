import{s as K,b as Q,n as G}from"../chunks/scheduler.D8c12eMh.js";import{S as W,i as X,e as u,t as B,s as M,c as f,a as E,k as N,d as m,b as S,g as R,f as h,h as F,j as o,m as z,p as Z}from"../chunks/index.B2zEa4Va.js";import{e as $}from"../chunks/forms.BgF2Ti0C.js";function U(d){return(d==null?void 0:d.length)!==void 0?d:Array.from(d)}function Y(d,e,r){const s=d.slice();return s[1]=e[r],s}function ee(d){let e,r="No buy info has been added yet";return{c(){e=u("p"),e.textContent=r,this.h()},l(s){e=f(s,"P",{class:!0,"data-svelte-h":!0}),R(e)!=="svelte-fcybee"&&(e.textContent=r),this.h()},h(){h(e,"class","text-lg text-center")},m(s,v){F(s,e,v)},p:G,d(s){s&&m(e)}}}function te(d){let e,r,s,v='<tr><th>Ticker</th> <th>Shares</th> <th>Value</th> <th class="hidden sm:table-cell">Average P/E</th> <th class="hidden sm:table-cell">Return</th></tr>',C,i,b=U(d[0].displayData),l=[];for(let a=0;a<b.length;a+=1)l[a]=J(Y(d,b,a));return{c(){e=u("div"),r=u("table"),s=u("thead"),s.innerHTML=v,C=M(),i=u("tbody");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=f(a,"DIV",{class:!0});var _=E(e);r=f(_,"TABLE",{class:!0});var t=E(r);s=f(t,"THEAD",{"data-svelte-h":!0}),R(s)!=="svelte-k7h23u"&&(s.innerHTML=v),C=S(t),i=f(t,"TBODY",{});var p=E(i);for(let x=0;x<l.length;x+=1)l[x].l(p);p.forEach(m),t.forEach(m),_.forEach(m),this.h()},h(){h(r,"class","table max-w-2xl mx-auto "),h(e,"class","mx-auto max-h-[400px] overflow-y-scroll max-w-3xl")},m(a,_){F(a,e,_),o(e,r),o(r,s),o(r,C),o(r,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(i,null)},p(a,_){if(_&1){b=U(a[0].displayData);let t;for(t=0;t<b.length;t+=1){const p=Y(a,b,t);l[t]?l[t].p(p,_):(l[t]=J(p),l[t].c(),l[t].m(i,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=b.length}},d(a){a&&m(e),Z(l,a)}}}function J(d){var j,I,y,q;let e,r,s=((j=d[1])==null?void 0:j.ticker)+"",v,C,i,b=((I=d[1])==null?void 0:I.info.numShares)+"",l,a,_,t=((y=d[1])==null?void 0:y.info.totalCost)+"",p,x,g,L=((q=d[1])==null?void 0:q.info.averagePE)+"",P,T,k,O="Test",V;return{c(){e=u("tr"),r=u("th"),v=B(s),C=M(),i=u("td"),l=B(b),a=M(),_=u("td"),p=B(t),x=M(),g=u("td"),P=B(L),T=M(),k=u("td"),k.textContent=O,V=M(),this.h()},l(c){e=f(c,"TR",{class:!0});var n=E(e);r=f(n,"TH",{});var D=E(r);v=N(D,s),D.forEach(m),C=S(n),i=f(n,"TD",{class:!0});var w=E(i);l=N(w,b),w.forEach(m),a=S(n),_=f(n,"TD",{});var A=E(_);p=N(A,t),A.forEach(m),x=S(n),g=f(n,"TD",{class:!0});var H=E(g);P=N(H,L),H.forEach(m),T=S(n),k=f(n,"TD",{class:!0,"data-svelte-h":!0}),R(k)!=="svelte-w6dmkm"&&(k.textContent=O),V=S(n),n.forEach(m),this.h()},h(){h(i,"class","py-5"),h(g,"class","hidden sm:table-cell"),h(k,"class","hidden sm:table-cell"),h(e,"class","hover")},m(c,n){F(c,e,n),o(e,r),o(r,v),o(e,C),o(e,i),o(i,l),o(e,a),o(e,_),o(_,p),o(e,x),o(e,g),o(g,P),o(e,T),o(e,k),o(e,V)},p(c,n){var D,w,A,H;n&1&&s!==(s=((D=c[1])==null?void 0:D.ticker)+"")&&z(v,s),n&1&&b!==(b=((w=c[1])==null?void 0:w.info.numShares)+"")&&z(l,b),n&1&&t!==(t=((A=c[1])==null?void 0:A.info.totalCost)+"")&&z(p,t),n&1&&L!==(L=((H=c[1])==null?void 0:H.info.averagePE)+"")&&z(P,L)},d(c){c&&m(e)}}}function le(d){var q;let e,r=((q=d[0].user)==null?void 0:q.username)+"",s,v,C,i,b,l,a,_="New Buy",t,p,x,g,L='<button class="btn btn-outline btn-error text-end">Close</button>',P,T,k='<label class="input input-bordered flex items-center gap-2"><input type="text" class="grow" name="ticker" placeholder="Ticker"/></label> <label class="input input-bordered flex items-center gap-2"><input type="number" class="grow" name="numShares" placeholder="Number of Shares"/></label> <label class="input input-bordered flex items-center gap-2"><input type="date" class="grow" name="buyDate" placeholder="Purchase Date"/></label> <label class="input input-bordered flex items-center gap-2"><input type="number" step=".01" class="grow" name="costPerShare" placeholder="Cost Per Share"/></label> <button class="btn btn-primary">submit</button>',O,V;function j(c,n){return c[0].displayData.length>0?te:ee}let I=j(d),y=I(d);return{c(){e=u("h1"),s=B(r),v=B("'s Dashboard"),C=M(),i=u("div"),y.c(),b=M(),l=u("div"),a=u("button"),a.textContent=_,t=M(),p=u("dialog"),x=u("div"),g=u("form"),g.innerHTML=L,P=M(),T=u("form"),T.innerHTML=k,this.h()},l(c){e=f(c,"H1",{class:!0});var n=E(e);s=N(n,r),v=N(n,"'s Dashboard"),n.forEach(m),C=S(c),i=f(c,"DIV",{class:!0});var D=E(i);y.l(D),b=S(D),l=f(D,"DIV",{class:!0});var w=E(l);a=f(w,"BUTTON",{class:!0,onclick:!0,"data-svelte-h":!0}),R(a)!=="svelte-159uxy9"&&(a.textContent=_),t=S(w),p=f(w,"DIALOG",{id:!0,class:!0});var A=E(p);x=f(A,"DIV",{class:!0});var H=E(x);g=f(H,"FORM",{method:!0,class:!0,"data-svelte-h":!0}),R(g)!=="svelte-1191p33"&&(g.innerHTML=L),P=S(H),T=f(H,"FORM",{method:!0,class:!0,"data-svelte-h":!0}),R(T)!=="svelte-148vg5z"&&(T.innerHTML=k),H.forEach(m),A.forEach(m),w.forEach(m),D.forEach(m),this.h()},h(){h(e,"class","text-3xl text-center p-6"),h(a,"class","btn btn-success btn-outline mt-4 "),h(a,"onclick","my_modal_5.showModal()"),h(g,"method","dialog"),h(g,"class","ml-auto text-end"),h(T,"method","post"),h(T,"class","flex flex-col p-6 gap-3"),h(x,"class","modal-box"),h(p,"id","my_modal_5"),h(p,"class","modal sm:modal-middle"),h(l,"class","max-w-2xl mx-auto"),h(i,"class","mx-4 overflow-x-auto min-h-[80vh]")},m(c,n){F(c,e,n),o(e,s),o(e,v),F(c,C,n),F(c,i,n),y.m(i,null),o(i,b),o(i,l),o(l,a),o(l,t),o(l,p),o(p,x),o(x,g),o(x,P),o(x,T),O||(V=Q($.call(null,T)),O=!0)},p(c,[n]){var D;n&1&&r!==(r=((D=c[0].user)==null?void 0:D.username)+"")&&z(s,r),I===(I=j(c))&&y?y.p(c,n):(y.d(1),y=I(c),y&&(y.c(),y.m(i,b)))},i:G,o:G,d(c){c&&(m(e),m(C),m(i)),y.d(),O=!1,V()}}}function ae(d,e,r){let{data:s}=e;return console.log(s.displayData),d.$$set=v=>{"data"in v&&r(0,s=v.data)},[s]}class re extends W{constructor(e){super(),X(this,e,ae,le,K,{data:0})}}export{re as component};

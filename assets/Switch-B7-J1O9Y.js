import{S as N,i as q,s as B,a as k,t as m,b as g,d as C,r as I,c as v,e as T,f as U,g as z,m as D,h as F,j as G}from"./index-aWgk0mlx.js";import{e as _,a as w,c as b,b as S,d as L,f as y,h as E,t as P,i as V,j as H,k as p,l as j,m as J}from"./lifecycle-BYANqZMl.js";import{g as K}from"./spread-CgU5AtxT.js";import{L as M}from"./Loader-BIB8zP8o.js";function A(i){let e,a;return e=new M({props:{color:i[0]?"#fff":"var(--walk__primary)"}}),{c(){U(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,o){D(e,l,o),a=!0},p(l,o){const r={};o&1&&(r.color=l[0]?"#fff":"var(--walk__primary)"),e.$set(r)},i(l){a||(m(e.$$.fragment,l),a=!0)},o(l){g(e.$$.fragment,l),a=!1},d(l){F(e,l)}}}function O(i){let e,a,l,o,r,c,d,u,h=[{class:"switch__input"},{type:"checkbox"},i[3],{disabled:i[2]}],f={};for(let s=0;s<h.length;s+=1)f=k(f,h[s]);let t=i[1]&&A(i);return{c(){e=_("label"),a=_("input"),l=w(),o=_("span"),r=w(),t&&t.c(),this.h()},l(s){e=b(s,"LABEL",{class:!0});var n=S(e);a=b(n,"INPUT",{class:!0,type:!0}),l=L(n),o=b(n,"SPAN",{class:!0}),S(o).forEach(y),r=L(n),t&&t.l(n),n.forEach(y),this.h()},h(){E(a,f),P(a,"svelte-1ynl7vh",!0),V(o,"class","switch__slider svelte-1ynl7vh"),V(e,"class","switch svelte-1ynl7vh")},m(s,n){H(s,e,n),p(e,a),a.autofocus&&a.focus(),a.checked=i[0],p(e,l),p(e,o),p(e,r),t&&t.m(e,null),c=!0,d||(u=[j(a,"change",i[6]),j(a,"change",i[5])],d=!0)},p(s,[n]){E(a,f=K(h,[{class:"switch__input"},{type:"checkbox"},n&8&&s[3],(!c||n&4)&&{disabled:s[2]}])),n&1&&(a.checked=s[0]),P(a,"svelte-1ynl7vh",!0),s[1]?t?(t.p(s,n),n&2&&m(t,1)):(t=A(s),t.c(),m(t,1),t.m(e,null)):t&&(G(),g(t,1,1,()=>{t=null}),C())},i(s){c||(m(t),c=!0)},o(s){g(t),c=!1},d(s){s&&y(e),t&&t.d(),d=!1,I(u)}}}function Q(i,e,a){let l;const o=["checked","disabled","loading"];let r=v(e,o),{checked:c=!1}=e,{disabled:d=!1}=e,{loading:u=!1}=e;function h(t){J.call(this,i,t)}function f(){c=this.checked,a(0,c)}return i.$$set=t=>{e=k(k({},e),T(t)),a(3,r=v(e,o)),"checked"in t&&a(0,c=t.checked),"disabled"in t&&a(4,d=t.disabled),"loading"in t&&a(1,u=t.loading)},i.$$.update=()=>{i.$$.dirty&18&&a(2,l=d||u)},[c,u,l,r,d,h,f]}class R extends N{constructor(e){super(),q(this,e,Q,O,B,{checked:0,disabled:4,loading:1})}}R.__docgen={version:3,name:"Switch.svelte",data:[{visibility:"public",description:null,keywords:[],name:"checked",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1,bind:[{source:"input",property:"checked"}]},{visibility:"public",description:null,keywords:[],name:"disabled",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"loading",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"change",parent:"input",modificators:[],locations:null}],slots:[],refs:[]};export{R as S};

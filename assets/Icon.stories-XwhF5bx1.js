import{e as C,I as G,s as O}from"./Modal-sAUIRxqV.js";import"./Switch-D7Hw6X03.js";import{S as K,i as M,s as Q,t as y,e as R,b as w,c as V,a as X,m as Y,d as Z,g as ee}from"./index-BPJDj-Ty.js";import{e as b,c as v,b as k,h as d,i as I,j as H,l as te,a as E,t as se,d as T,m as re,k as f,n as ne,p as oe}from"./lifecycle-BNL1Ux3K.js";function B(a,r,l){const n=a.slice();return n[3]=r[l],n}function N(a){let r,l,n,t,i,e=a[3].split("/").pop()+"",o,s,p,$,j;n=new G({props:{src:a[3]}});function J(){return a[2](a[3])}return{c(){r=b("li"),l=b("button"),V(n.$$.fragment),t=E(),i=b("span"),o=se(e),s=E(),this.h()},l(c){r=v(c,"LI",{class:!0});var u=k(r);l=v(u,"BUTTON",{class:!0});var m=k(l);X(n.$$.fragment,m),t=T(m),i=v(m,"SPAN",{class:!0});var x=k(i);o=re(x,e),x.forEach(d),m.forEach(d),s=T(u),u.forEach(d),this.h()},h(){I(i,"class","list__name svelte-gg13px"),I(l,"class","list__button svelte-gg13px"),I(r,"class","list__item svelte-gg13px")},m(c,u){H(c,r,u),f(r,l),Y(n,l,null),f(l,t),f(l,i),f(i,o),f(r,s),p=!0,$||(j=ne(l,"click",J),$=!0)},p(c,u){a=c;const m={};u&1&&(m.src=a[3]),n.$set(m),(!p||u&1)&&e!==(e=a[3].split("/").pop()+"")&&oe(o,e)},i(c){p||(y(n.$$.fragment,c),p=!0)},o(c){w(n.$$.fragment,c),p=!1},d(c){c&&d(r),Z(n),$=!1,j()}}}function ae(a){let r,l,n=C(a[0]),t=[];for(let e=0;e<n.length;e+=1)t[e]=N(B(a,n,e));const i=e=>w(t[e],1,1,()=>{t[e]=null});return{c(){r=b("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){r=v(e,"UL",{class:!0});var o=k(r);for(let s=0;s<t.length;s+=1)t[s].l(o);o.forEach(d),this.h()},h(){I(r,"class","list svelte-gg13px")},m(e,o){H(e,r,o);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(r,null);l=!0},p(e,[o]){if(o&3){n=C(e[0]);let s;for(s=0;s<n.length;s+=1){const p=B(e,n,s);t[s]?(t[s].p(p,o),y(t[s],1)):(t[s]=N(p),t[s].c(),y(t[s],1),t[s].m(r,null))}for(ee(),s=n.length;s<t.length;s+=1)i(s);R()}},i(e){if(!l){for(let o=0;o<n.length;o+=1)y(t[o]);l=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)w(t[o]);l=!1},d(e){e&&d(r),te(t,e)}}}function le(a,r,l){let{list:n=[]}=r;const t=async e=>{try{await navigator.clipboard.writeText(e),alert("This is the src to be copied")}catch(o){console.error("Failed to copy: ",o)}},i=e=>t(`<Icon src="${e}" />`);return a.$$set=e=>{"list"in e&&l(0,n=e.list)},[n,t,i]}class S extends K{constructor(r){super(),M(this,r,le,ae,Q,{list:0})}}S.__docgen={version:3,name:"Icons.svelte",data:[{visibility:"public",description:null,keywords:[],name:"list",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ce=Object.keys(O),de={title:"Assets/Icons",component:G,tags:["autodocs"],parameters:{docs:{description:{component:"아이콘 테두리의 여백 포함 유무에 따라 ic 또는 img로 분류합니다. img로 분류되더라도 특성상 여백이 포함될 수 있습니다."}}},argTypes:{size:{table:{disable:!0,type:{summary:"small 18*18 | medium 24*24 | large 32*32"}},options:["small","medium","large"],control:{type:"select"}},color:{description:"디자인 토큰 사용을 권장합니다.",control:{type:"color"}},src:{table:{type:{summary:"string"}},options:ce,control:{type:"select"}}}},_={args:{src:"ic/outline/arrow-right"}},h={parameters:{docs:{source:{code:null}}},render:()=>({Component:S,props:{list:Object.keys(O).filter(a=>a.startsWith("img/fill"))}})},g={parameters:{docs:{source:{code:null}}},render:()=>({Component:S,props:{list:Object.keys(O).filter(a=>a.startsWith("ic/outline"))}})};var W,A,L;_.parameters={..._.parameters,docs:{...(W=_.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    src: 'ic/outline/arrow-right'
  }
}`,...(L=(A=_.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var U,q,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  },
  render: () => ({
    Component: Icons,
    props: {
      list: (Object.keys(svgs).filter(src => src.startsWith('img/fill')) as IconName[])
    }
  })
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,P,D;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  },
  render: () => ({
    Component: Icons,
    props: {
      list: (Object.keys(svgs).filter(src => src.startsWith('ic/outline')) as IconName[])
    }
  })
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const fe=["Basic","img_fill","ic_outline"];export{_ as Basic,fe as __namedExportsOrder,de as default,g as ic_outline,h as img_fill};

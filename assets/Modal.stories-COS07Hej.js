import{l as r}from"./types-DctiXXmx.js";import{M as c}from"./Modal-sAUIRxqV.js";import"./Switch-D7Hw6X03.js";import"./index-BPJDj-Ty.js";import"./lifecycle-BNL1Ux3K.js";const g={title:"Component/Modal",component:c,tags:["autodocs"],argTypes:{open:{description:"bind로 전달하면 양방향 바인딩됩니다."},toast:{description:"toast 모드로 노출합니다."},keepDialog:{description:"X(닫기) 버튼이나 외부 영역 클릭 시 dialog 요소를 닫지 않습니다."},footers:{description:"하단 버튼 영역을 정의합니다. handler prop으로 이벤트를 전달합니다. 빈 배열로 전달하면 영역이 노출되지 않습니다.",table:{type:{summary:"string[] | undefined"}}},isVerticalLayout:{description:"하단 버튼 영역의 레이아웃을 결정합니다. 기본은 가로 배열(수평)입니다."},layout:{table:{type:{summary:r.join(" | ")}},control:"select",options:r},showCloseButton:{table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},icon:{description:"IconSource type",table:{type:{summary:"{ src: string, width: number, height: number }"}}}},parameters:{docs:{story:{height:"400px"}}}},e={args:{open:!0,title:"發生未知錯誤。",content:"如果問題持續存在，請不要猶豫，立即聯繫我們的客戶服務中心。 我們的專業團隊隨時準備幫助您解決任何問題，確保您獲得最佳的使用體驗。",footers:[{label:"聯繫我們",theme:"tertiary",handler:()=>alert("Clicked")},{label:"確認",handler:()=>alert("Clicked")}]}},t={args:{...e.args,layout:"fullscreen"}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    open: true,
    title: '發生未知錯誤。',
    content: '如果問題持續存在，請不要猶豫，立即聯繫我們的客戶服務中心。 我們的專業團隊隨時準備幫助您解決任何問題，確保您獲得最佳的使用體驗。',
    footers: [{
      label: '聯繫我們',
      theme: 'tertiary',
      handler: () => alert('Clicked')
    }, {
      label: '確認',
      handler: () => alert('Clicked')
    }]
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ...basic.args,
    layout: 'fullscreen'
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const b=["basic","fullscreen"];export{b as __namedExportsOrder,e as basic,g as default,t as fullscreen};

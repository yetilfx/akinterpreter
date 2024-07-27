"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{76899:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var s=r(57437),a=r(2265),l=r(66648),n=r(57251),i=r(61003),o=e=>{let{type:t,content:r,isBot:a}=e;return(0,s.jsx)("div",{className:"max-w-3/4 ".concat(a?"ml-0 mr-auto":"ml-auto mr-0"),children:(0,s.jsx)("div",{className:"p-3 rounded-lg ".concat(a?"bg-gray-700 text-white":"bg-blue-500 text-white"," max-h-[80vh] overflow-y-auto"),children:(()=>{if("object"==typeof r)return(0,s.jsx)(n.Z,{language:"json",style:i.Z,children:JSON.stringify(r,null,2)});if("string"==typeof r){let e=r.match(/^```(json|python)?\s*([\s\S]*?)```$/);if(e){let t=e[1]||"text",r=e[2].trim();if("json"===t)try{let e=JSON.parse(r);return(0,s.jsx)(n.Z,{language:"json",style:i.Z,children:JSON.stringify(e,null,2)})}catch(e){}return(0,s.jsx)(n.Z,{language:t,style:i.Z,children:r})}return r.includes("def ")||r.includes("import ")||r.includes("print(")?(0,s.jsx)(n.Z,{language:"python",style:i.Z,children:r}):r.split(/(\!\[.*?\]\(.*?\)|\[.*?\]\(.*?\))/).map((e,t)=>{if(e.startsWith("![")){let r=e.match(/\!\[(.*?)\]\((.*?)\)/);if(r)return(0,s.jsx)("div",{className:"relative w-full h-64 my-2",children:(0,s.jsx)(l.default,{src:r[2],alt:r[1],layout:"fill",objectFit:"contain"})},t)}else if(e.startsWith("[")){let r=e.match(/\[(.*?)\]\((.*?)\)/);if(r)return(0,s.jsx)("a",{href:r[2],target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:r[1]},t)}return(0,s.jsx)("span",{className:"whitespace-pre-wrap",children:e},t)})}return(0,s.jsx)("p",{className:"break-words whitespace-pre-wrap",children:String(r)})})()})})},c=r(92800),d=r(49354);let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",r),ref:t,...a})});u.displayName="Textarea";var f=r(71538);let h=(0,r(12218).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),g=a.forwardRef((e,t)=>{let{className:r,variant:a,size:l,asChild:n=!1,...i}=e,o=n?f.g7:"button";return(0,s.jsx)(o,{className:(0,d.cn)(h({variant:a,size:l,className:r})),ref:t,...i})});g.displayName="Button";var x=e=>{let{initialMessages:t,currentPlan:r}=e,[l,n]=(0,a.useState)(t),[i,d]=(0,a.useState)(""),[f,h]=(0,a.useState)(!1),[x,p]=(0,a.useState)(null),[b,m]=(0,a.useState)(null);(0,a.useRef)(null);let v=(0,a.useRef)(null),y=(0,a.useRef)(null),w=(0,a.useRef)(null);(0,a.useEffect)(()=>{(async()=>{p(await (0,c.MQ)())})()},[]),(0,a.useEffect)(()=>{k()},[i]);let k=()=>{if(y.current){y.current.style.height="auto";let e=y.current.scrollHeight,t=parseInt(getComputedStyle(y.current).lineHeight);y.current.style.height="".concat(Math.min(e,5*t),"px")}},j=(0,a.useCallback)(async e=>{if(e.trim()&&!f){if(n(t=>[...t,{type:"text",content:e,isBot:!1}]),d(""),h(!0),"save_plan"===e.trim().toLowerCase()){try{let e;e="string"==typeof r?JSON.parse(r):r;let t=await (0,c.ef)(e);n(e=>[...e,{type:"text",content:t.message,isBot:!0}])}catch(e){console.error("Error saving plan:",e),n(e=>[...e,{type:"text",content:"Error saving plan. Please try again.",isBot:!0}])}h(!1);return}try{let t=await (0,c.bE)(e);m(t),w.current&&w.current.close();let r=(0,c.cE)(t);w.current=r,r.onmessage=e=>{if("[DONE]"===e.data)h(!1),r.close();else try{let t=JSON.parse(e.data);n(e=>{let r=e[e.length-1];if(!r||r.type!==t.type||!r.isBot)return[...e,{...t,isBot:!0}];{let s={...r,content:r.content+t.content};return[...e.slice(0,-1),s]}})}catch(e){console.error("Error parsing message:",e)}},r.onerror=e=>{console.error("EventSource failed:",e),r.close(),h(!1)}}catch(e){console.error("Error sending message:",e),h(!1)}}},[f,r]);return(0,s.jsxs)("div",{className:"flex flex-col h-full bg-gray-900 text-white",children:[(0,s.jsxs)("div",{className:"flex-grow overflow-y-auto p-4 space-y-4",children:[l.map((e,t)=>(0,s.jsx)(o,{type:e.type,content:e.content,isBot:e.isBot},t)),f&&(0,s.jsx)("p",{className:"italic text-gray-500",children:"\uD83E\uDD16在努力思考。。。"}),(0,s.jsx)("div",{ref:v})]}),(0,s.jsx)("div",{className:"flex-shrink-0 border-t border-gray-700 p-2",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(u,{ref:y,value:i,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),j(i))},className:"flex-grow p-2 bg-gray-800 border border-gray-700 rounded-md resize-none",placeholder:"输入消息... (Shift+Enter 换行)",disabled:f,rows:1,style:{minHeight:"38px",maxHeight:"120px",overflow:"auto"}}),(0,s.jsx)(g,{onClick:()=>j(i),className:"p-2 bg-blue-600 text-white rounded-md",disabled:f,children:"发送"})]})})]})}}}]);
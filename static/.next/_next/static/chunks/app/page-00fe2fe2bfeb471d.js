(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4790:function(e,t,s){Promise.resolve().then(s.bind(s,8212))},8212:function(e,t,s){"use strict";s.r(t);var n=s(7437),a=s(2265),o=s(7818),i=s(2800),r=s(1505);let l=(0,o.default)(()=>Promise.all([s.e(797),s.e(197)]).then(s.bind(s,3197)),{loadableGenerated:{webpack:()=>[3197]},ssr:!1}),d=(0,o.default)(()=>Promise.all([s.e(690),s.e(401),s.e(203),s.e(84)]).then(s.bind(s,8084)),{loadableGenerated:{webpack:()=>[8084]},ssr:!1}),c=(0,o.default)(()=>s.e(861).then(s.bind(s,861)),{loadableGenerated:{webpack:()=>[861]},ssr:!1});t.default=()=>{let[e,t]=(0,a.useState)(null),[s,o]=(0,a.useState)({}),[u,h]=(0,a.useState)({}),[f,p]=(0,a.useState)([]);(0,a.useEffect)(()=>{(async()=>{let e=await (0,i.Gg)();console.log("Session data:",e),t(e),p(e.chat_history),o(e.current_plan),h(e.step_codes)})()},[]);let _=(0,a.useCallback)(e=>{console.log("SSE Message:",e),"plan"===e.type?o(e.plan):"code"===e.type?h(e.step_codes):"chat_history"===e.type&&p(e.chat_history)},[]);return e?(0,n.jsx)("div",{style:{height:"100vh",overflow:"hidden",backgroundColor:"#282a36",color:"#f8f8f2"},children:(0,n.jsxs)(r.eh,{direction:"horizontal",children:[(0,n.jsx)(r.s_,{style:{height:"100%",overflow:"hidden"},children:(0,n.jsxs)("div",{style:{height:"100%",overflowY:"auto"},children:[(0,n.jsx)(l,{chatHistory:f}),(0,n.jsx)(c,{sessionId:e.session_id,onMessage:_})]})}),(0,n.jsx)(r.OT,{style:{backgroundColor:"#44475a",width:"5px",cursor:"col-resize"}}),(0,n.jsx)(r.s_,{style:{height:"100%",overflow:"hidden"},children:(0,n.jsx)(d,{currentPlan:s,stepCodes:u})})]})}):(0,n.jsx)("div",{children:"Loading..."})}},2800:function(e,t,s){"use strict";s.d(t,{Gg:function(){return u},MQ:function(){return c}});var n=s(8472),a=s(2649);let o="/api/sessions",i="session_id",r=e=>{a.Z.set(i,e,{expires:7})},l=()=>a.Z.get(i)||"",d=async()=>{let e=await n.Z.post(o);return r(e.data.session_id),e.data},c=async()=>{let e=l();return e||r(e=(await d()).session_id),e},u=async()=>{let e=await c();return(await n.Z.get("".concat(o,"/").concat(e))).data}}},function(e){e.O(0,[642,971,23,744],function(){return e(e.s=4790)}),_N_E=e.O()}]);
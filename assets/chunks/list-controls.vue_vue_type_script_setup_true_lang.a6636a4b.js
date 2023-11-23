import{p as B}from"./dist.f5a33e30.js";import{d as w,C as t,o as k,c as V,H as l,w as e,a as n,l as u,a2 as r,a3 as c,h as $,g as D,ag as M,al as N,_ as T,k as P,L as S,F as E}from"./framework.c340a892.js";import{u as z}from"./use-theme.1d54c98e.js";const G={style:{width:"320px"}},Y=w({__name:"basic",setup(y){const{SendFilled:f,InboxFilled:_}=B;return(m,o)=>{const s=t("fn-list-item-header"),i=t("fn-list-item"),x=t("fn-badge"),d=t("fn-divider"),C=t("fn-list");return k(),V("div",G,[l(C,null,{default:e(()=>[l(s,null,{default:e(()=>[n(" Basic List ")]),_:1}),l(i,null,{leading:e(({icon:h})=>[l(u(f),r(c(h)),null,16)]),default:e(()=>[n(" Send ")]),_:1}),l(i,null,{leading:e(({icon:h})=>[l(u(_),r(c(h)),null,16)]),trailing:e(()=>[l(x,{content:"20",max:"10"})]),default:e(()=>[n(" Inbox ")]),_:1}),l(d,{component:"li"}),l(i,{indent:"1",disabled:""},{default:e(()=>[n(" Spam ")]),_:1}),l(i,{indent:"1"},{default:e(()=>[n(" Trash ")]),_:1})]),_:1})])}}}),L={style:{width:"320px"}},ee=w({__name:"nested",setup(y){const{ContentCopyFilled:f,MoreOutlined:_,ContentCutFilled:m,ExpandMoreFilled:o,ContentPasteFilled:s,UndoFilled:i,StarBorderOutlined:x}=B,d=$(!1),C=z(),h=D(()=>({transform:d.value?"rotate(180deg)":"rotate(0)",transition:C.value.motion.create(["all"],{duration:C.value.motion.duration[500],timingFunction:C.value.motion.timingFunction["easing-emphasized"]})}));return(F,v)=>{const b=t("fn-typography"),g=t("fn-list-item"),a=t("fn-svg-icon"),U=t("fn-list"),I=t("fn-collapse"),A=t("fn-divider"),O=t("fn-list-item-header");return k(),V("div",L,[l(U,null,{default:e(()=>[l(g,null,{leading:e(({icon:p})=>[l(u(f),r(c(p)),null,16)]),trailing:e(()=>[l(b,{variant:"label.large",cs:"opacity: 0.6;"},{default:e(()=>[n(" ⌘X ")]),_:1})]),default:e(()=>[n(" Copy ")]),_:1}),l(g,null,{leading:e(({icon:p})=>[l(u(m),r(c(p)),null,16)]),trailing:e(()=>[l(b,{variant:"label.large",cs:"opacity: 0.6;"},{default:e(()=>[n(" ⌘C ")]),_:1})]),default:e(()=>[n(" Cut ")]),_:1}),l(g,{disabled:""},{leading:e(({icon:p})=>[l(u(s),r(c(p)),null,16)]),trailing:e(()=>[l(b,{variant:"label.large",cs:"opacity: 0.6;"},{default:e(()=>[n(" ⌘V ")]),_:1})]),default:e(()=>[n(" Paste ")]),_:1}),l(g,{onClick:v[0]||(v[0]=p=>d.value=!d.value)},{leading:e(({icon:p})=>[l(u(_),r(c(p)),null,16)]),trailing:e(()=>[l(a,{cs:h.value,component:u(o)},null,8,["cs","component"])]),default:e(()=>[n(" More ")]),_:1}),l(I,null,{default:e(()=>[M(l(U,{component:"li",level:"1"},{default:e(()=>[l(g,null,{leading:e(({icon:p})=>[l(u(i),r(c(p)),null,16)]),trailing:e(()=>[l(b,{variant:"label.large",cs:"opacity: 0.6;"},{default:e(()=>[n(" ⌘Z ")]),_:1})]),default:e(()=>[n(" Undo ")]),_:1})]),_:1},512),[[N,d.value]])]),_:1}),l(A,{component:"li"}),l(O,null,{default:e(()=>[n(" Other actions ")]),_:1}),l(g,null,{leading:e(({icon:p})=>[l(u(x),r(c(p)),null,16)]),default:e(()=>[n(" Save ")]),_:1})]),_:1})])}}}),R={style:{width:"320px"}},le=w({__name:"indent",setup(y){const{CheckFilled:f}=B;return(_,m)=>{const o=t("fn-list-item"),s=t("fn-list");return k(),V("div",R,[l(s,null,{default:e(()=>[l(o,null,{leading:e(({icon:i})=>[l(u(f),r(c(i)),null,16)]),default:e(()=>[n(" 🍎 Apple ")]),_:1}),l(o,{indent:"1"},{default:e(()=>[n(" 🍌 Banana ")]),_:1}),l(o,{indent:"1",disabled:""},{default:e(()=>[n(" 🍇 Grape ")]),_:1}),l(o,{indent:"1"},{default:e(()=>[n(" 🍊 Organge ")]),_:1})]),_:1})])}}}),W={},q={style:{width:"320px"}};function H(y,f){const _=t("fn-avatar"),m=t("fn-list-item-text"),o=t("fn-list-item"),s=t("fn-list");return k(),V("div",q,[l(s,{selectable:!1},{default:e(()=>[l(o,null,{leading:e(({avatar:i})=>[l(_,r(c(i)),{default:e(()=>[n("A")]),_:2},1040)]),default:e(()=>[l(m,{headline:"Ullamco consectetur."})]),_:1}),l(o,{selectable:""},{leading:e(({avatar:i})=>[l(_,r(c(i)),{default:e(()=>[n("B")]),_:2},1040)]),default:e(()=>[l(m,{headline:"In officia cupidatat!","supporting-text":"Officia qui ea ex dolor."})]),_:1}),l(o,{"align-items":"flex-start"},{leading:e(({avatar:i})=>[l(_,r(c(i)),{default:e(()=>[n("C")]),_:2},1040)]),default:e(()=>[l(m,{headline:"Brunch this weekend?","supporting-text":"Ali Connors — I'll be in your neighborhood doing errands this…"})]),_:1})]),_:1})])}const ne=T(W,[["render",H]]),X={style:{width:"320px"}},te=w({__name:"highlight",setup(y){const f=$(3),_=m=>{f.value=m};return(m,o)=>{const s=t("fn-list-item"),i=t("fn-list");return k(),V("div",X,[l(i,{component:"nav"},{default:e(()=>[l(s,{highlight:f.value===0,onClick:o[0]||(o[0]=x=>_(0))},{default:e(()=>[n(" Getting Started ")]),_:1},8,["highlight"]),l(s,{highlight:f.value===1,onClick:o[1]||(o[1]=x=>_(1))},{default:e(()=>[n(" Components ")]),_:1},8,["highlight"]),l(s,{highlight:f.value===2,onClick:o[2]||(o[2]=x=>_(2))},{default:e(()=>[n(" APIs ")]),_:1},8,["highlight"]),l(s,{highlight:f.value===3,"highlight-color":"secondaryContainer",onClick:o[3]||(o[3]=x=>_(3))},{default:e(()=>[n(" Customization ")]),_:1},8,["highlight"])]),_:1})])}}}),Z={style:{width:"280px"}},j={style:{width:"280px"}},ae=w({__name:"list-controls",setup(y){const{WifiFilled:f,BluetoothFilled:_,SignalCellularAltFilled:m}=B,o=z(),s=$([!0,!1,!1]),i=$([!0,!1,!1]);return(x,d)=>{const C=t("fn-list-item-header"),h=t("fn-avatar"),F=t("fn-checkbox"),v=t("fn-list-item"),b=t("fn-list"),g=t("fn-switch");return k(),V(E,null,[P("div",Z,[l(b,{selectable:!1},{default:e(()=>[l(C,null,{default:e(()=>[n(" Color selection ")]),_:1}),l(v,null,{leading:e(({avatar:a})=>[l(h,S(a,{variant:"rounded",background:u(o).colors.red[400]}),null,16,["background"])]),trailing:e(()=>[l(F,{modelValue:s.value[0],"onUpdate:modelValue":d[0]||(d[0]=a=>s.value[0]=a)},null,8,["modelValue"])]),default:e(()=>[n(" Red ")]),_:1}),l(v,null,{leading:e(({avatar:a})=>[l(h,S(a,{variant:"rounded",background:u(o).colors.pink[400]}),null,16,["background"])]),trailing:e(()=>[l(F,{modelValue:s.value[1],"onUpdate:modelValue":d[1]||(d[1]=a=>s.value[1]=a)},null,8,["modelValue"])]),default:e(()=>[n(" Pink ")]),_:1}),l(v,null,{leading:e(({avatar:a})=>[l(h,S(a,{variant:"rounded",background:u(o).colors.purple[400]}),null,16,["background"])]),trailing:e(()=>[l(F,{modelValue:s.value[2],"onUpdate:modelValue":d[2]||(d[2]=a=>s.value[2]=a)},null,8,["modelValue"])]),default:e(()=>[n(" Purple ")]),_:1})]),_:1})]),P("div",j,[l(b,{selectable:!1},{default:e(()=>[l(C,null,{default:e(()=>[n(" Settings ")]),_:1}),l(v,null,{leading:e(({icon:a})=>[l(u(f),r(c(a)),null,16)]),trailing:e(()=>[l(g,{modelValue:i.value[0],"onUpdate:modelValue":d[3]||(d[3]=a=>i.value[0]=a),size:"small"},null,8,["modelValue"])]),default:e(()=>[n(" Wifi ")]),_:1}),l(v,null,{leading:e(({icon:a})=>[l(u(m),r(c(a)),null,16)]),trailing:e(()=>[l(g,{modelValue:i.value[1],"onUpdate:modelValue":d[4]||(d[4]=a=>i.value[1]=a),size:"small"},null,8,["modelValue"])]),default:e(()=>[n(" Cellular ")]),_:1}),l(v,null,{leading:e(({icon:a})=>[l(u(_),r(c(a)),null,16)]),trailing:e(()=>[l(g,{modelValue:i.value[2],"onUpdate:modelValue":d[5]||(d[5]=a=>i.value[2]=a),size:"small"},null,8,["modelValue"])]),default:e(()=>[n(" Bluetooth ")]),_:1})]),_:1})])],64)}}});export{ne as D,Y as _,ee as a,le as b,te as c,ae as d};

import{b as d,u as a,a as g}from"./use-color.63219ad2.js";import{u as h,c as r,a as p}from"./use-theme.63561a44.js";import{g as u,d as v,H as y,L as S}from"./framework.8867e753.js";const b=d({size:{type:[Number,String],default:"inherit"},color:{type:[String,Function],default:"inherit"},fill:{type:[String,Function]},component:{type:[Object,String],default:"svg"},cs:{type:[Object,String]}}),z=e=>u(()=>{const{typography:{pxToRem:n}}=h().value,[c]=a(e,"color"),[i]=a(e,"fill");let t;const o=+e.size;if(isNaN(o)){const[l,m,f]=/(d+)(w+)/.exec(e.size)||[];t=f==="px"?n(+m):e.size}else t=n(o);const s=e.cs?r(e.cs):"";return p(r([{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:"fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",fontSize:t,color:c.value},e.fill&&{fill:i.value}]),s)}),C=z,w=v({props:b,setup(e,{slots:n}){const c=g("svg-icon"),i=C(e),t=u(()=>{var s;return((s=n==null?void 0:n.default)==null?void 0:s.call(n))??[]});if(t.value.length>1)throw new Error("[Fusion UI]: The SvgIcon can only contain one child.");const o=e.component;return()=>{var s;return y(o,S({class:[c.b(),i.value]},(s=t.value[0])==null?void 0:s.props),{default:()=>{var l;return[(l=t.value[0])==null?void 0:l.children]}})}}});export{w as F};

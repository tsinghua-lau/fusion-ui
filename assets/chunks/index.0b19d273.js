import{c as B,_ as m,u as C,w as $}from"./size.a557f17c.js";import{F as v,a as F}from"./index.f11fdb7d.js";import{U as z,F as V}from"./index.6d46d915.js";import{C as k,o as a,b as c,w as d,k as t,d as b,a6 as y,g as f,r as H,a2 as I,a3 as M,l as s,e as N,H as P,L as _}from"./framework.c340a892.js";const S={modelValue:{type:[Boolean,Array]},color:{type:[String,Function],default:"primary"},size:{type:String,value:B,default:"medium"}},E={name:"CheckBoxFilled",components:{FnSvgIcon:v}},L=t("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})],-1);function O(r,i,l,u,o,p){const e=k("fn-svg-icon");return a(),c(e,{cs:"fill: currentcolor;"},{default:d(()=>[L]),_:1})}var A=m(E,[["render",O],["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/svg-icon/internal/CheckBoxFilled.vue"]]);const U={name:"CheckBoxOutlineBlankFilled",components:{FnSvgIcon:v}},D=t("svg",{class:"fn-icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})],-1);function T(r,i,l,u,o,p){const e=k("fn-svg-icon");return a(),c(e,{cs:"fill: currentcolor;"},{default:d(()=>[D]),_:1})}var R=m(U,[["render",T],["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/svg-icon/internal/CheckBoxOutlineBlankFilled.vue"]]),j=b({__name:"index",props:S,emits:["update:modelValue"],setup(r,{emit:i}){const l=r,u=i,o=C("checkbox"),p=y(),e=f({get(){return l.modelValue},set(n){u(z,n)}}),g=f(()=>typeof e.value=="boolean"?e.value:e.value.includes(p.value));return(n,h)=>(a(),c(s(F),_({component:"span"},{color:n.$props.color,size:n.$props.size,class:[s(o).b(),s(o).m(l.size)]}),{default:d(x=>[H(n.$slots,"default",I(M({checked:e.value,size:x.size,class:["fn-icon",s(o).e("icon")]})),()=>[g.value?(a(),c(A,{key:0})):(a(),c(R,{key:1}))]),N(" eslint-disable vue/html-self-closing "),P(s(V),_(n.$attrs,{modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=w=>e.value=w),class:[s(o).e("input")],type:"checkbox",internal:""}),null,16,["modelValue","class"])]),_:3},16))}}),q=m(j,[["__file","/home/runner/work/fusion-ui/fusion-ui/packages/components/checkbox/src/index.vue"]]);const G=$(q,"FnCheckbox");G.name="FnCheckbox";export{G as F};

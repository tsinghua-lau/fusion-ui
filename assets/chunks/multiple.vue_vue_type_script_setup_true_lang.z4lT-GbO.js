import{d as r,k as c,a9 as d,o as m,v as s,b as n,F as i,f as w,K as f,J as g,u as a,r as x,S as k,R as U}from"./framework.bFe-wYNX.js";import{u as _,a as v,b as u}from"./theme.DCt-UYqI.js";const S=r({__name:"basic",setup(p){const l=c([!0,!1,!0,!1]);return(V,e)=>{const t=d("in-checkbox");return m(),s(i,null,[n(t,{modelValue:l[0],"onUpdate:modelValue":e[0]||(e[0]=o=>l[0]=o)},null,8,["modelValue"]),n(t,{modelValue:l[1],"onUpdate:modelValue":e[1]||(e[1]=o=>l[1]=o)},null,8,["modelValue"]),n(t,{modelValue:l[2],"onUpdate:modelValue":e[2]||(e[2]=o=>l[2]=o),disabled:""},null,8,["modelValue"]),n(t,{modelValue:l[3],"onUpdate:modelValue":e[3]||(e[3]=o=>l[3]=o),disabled:""},null,8,["modelValue"])],64)}}}),D=r({__name:"size",setup(p){const l=c([!0,!0,!0]);return(V,e)=>{const t=d("in-checkbox");return m(),s(i,null,[n(t,{modelValue:l[0],"onUpdate:modelValue":e[0]||(e[0]=o=>l[0]=o),size:"small"},null,8,["modelValue"]),n(t,{modelValue:l[1],"onUpdate:modelValue":e[1]||(e[1]=o=>l[1]=o)},null,8,["modelValue"]),n(t,{modelValue:l[2],"onUpdate:modelValue":e[2]||(e[2]=o=>l[2]=o),size:"large"},null,8,["modelValue"])],64)}}}),N=r({__name:"color",setup(p){const l=c([!1,!1,!1,!1,!1]);return(V,e)=>{const t=d("in-checkbox");return m(),s(i,null,[n(t,{modelValue:l[0],"onUpdate:modelValue":e[0]||(e[0]=o=>l[0]=o)},null,8,["modelValue"]),n(t,{modelValue:l[1],"onUpdate:modelValue":e[1]||(e[1]=o=>l[1]=o),color:"tertiary"},null,8,["modelValue"]),n(t,{modelValue:l[2],"onUpdate:modelValue":e[2]||(e[2]=o=>l[2]=o),color:"error"},null,8,["modelValue"]),n(t,{modelValue:l[3],"onUpdate:modelValue":e[3]||(e[3]=o=>l[3]=o),color:o=>o.colors.cyan[400]},null,8,["modelValue","color"]),n(t,{modelValue:l[4],"onUpdate:modelValue":e[4]||(e[4]=o=>l[4]=o),color:"#2E7D32"},null,8,["modelValue"])],64)}}}),h=_('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'),z=v(h,"StarFilled"),C=_('<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>'),L=v(C,"StarOutlineFilled"),$=_('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z"/></g></g></svg>'),B=v($,"BedtimeFilled"),M=_('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor"><g><rect fill="none" height="24" width="24"/></g><g><path d="M9.27 4.49c-1.63 7.54 3.75 12.41 7.66 13.8C15.54 19.38 13.81 20 12 20c-4.41 0-8-3.59-8-8 0-3.45 2.2-6.4 5.27-7.51m2.72-2.48C6.4 2.01 2 6.54 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.97h-.35z"/></g></svg>'),y=v(M,"BedtimeOutlined"),R=r({__name:"icon",setup(p){const l=c([!1,!1]);return(V,e)=>{const t=d("in-checkbox");return m(),s(i,null,[n(t,{modelValue:l[0],"onUpdate:modelValue":e[0]||(e[0]=o=>l[0]=o),color:"#6366f1"},{default:w(()=>[f(n(a(z),null,null,512),[[g,l[0]]]),f(n(a(L),null,null,512),[[g,!l[0]]])]),_:1},8,["modelValue"]),n(t,{modelValue:l[1],"onUpdate:modelValue":e[1]||(e[1]=o=>l[1]=o),color:o=>o.colors.yellow[900]},{default:w(()=>[f(n(a(B),null,null,512),[[g,l[1]]]),f(n(a(y),null,null,512),[[g,!l[1]]])]),_:1},8,["modelValue","color"])],64)}}}),q=r({__name:"label",setup(p){const l=c([!0,!0,!0]);return(V,e)=>{const t=d("in-form-label");return m(),s(i,null,[n(t,{modelValue:l[0],"onUpdate:modelValue":e[0]||(e[0]=o=>l[0]=o),control:a(u),label:"Label"},null,8,["modelValue","control"]),n(t,{modelValue:l[1],"onUpdate:modelValue":e[1]||(e[1]=o=>l[1]=o),control:a(u),label:"Required",required:""},null,8,["modelValue","control"]),n(t,{modelValue:l[2],"onUpdate:modelValue":e[2]||(e[2]=o=>l[2]=o),control:a(u),label:"Disabled",disabled:""},null,8,["modelValue","control"])],64)}}}),E=r({__name:"label-placement",setup(p){const l=c([!0,!0,!0,!0]);return(V,e)=>{const t=d("in-form-label");return m(),s(i,null,[n(t,{modelValue:l[0],"onUpdate:modelValue":e[0]||(e[0]=o=>l[0]=o),control:a(u),label:"Top","label-placement":"top"},null,8,["modelValue","control"]),n(t,{modelValue:l[1],"onUpdate:modelValue":e[1]||(e[1]=o=>l[1]=o),control:a(u),label:"Left","label-placement":"left"},null,8,["modelValue","control"]),n(t,{modelValue:l[2],"onUpdate:modelValue":e[2]||(e[2]=o=>l[2]=o),control:a(u),label:"Bottom","label-placement":"bottom"},null,8,["modelValue","control"]),n(t,{modelValue:l[3],"onUpdate:modelValue":e[3]||(e[3]=o=>l[3]=o),control:a(u),label:"Right","label-placement":"right"},null,8,["modelValue","control"])],64)}}}),H=r({__name:"multiple",setup(p){const l=x([]);return(V,e)=>{const t=d("in-typography"),o=d("in-form-label");return m(),s(i,null,[n(t,{cs:"flex-basis: 100%; text-align: center;"},{default:w(()=>[k(U(l.value),1)]),_:1}),n(o,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=b=>l.value=b),control:a(u),label:"Jack",value:"Jack"},null,8,["modelValue","control"]),n(o,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=b=>l.value=b),control:a(u),label:"John",value:"John"},null,8,["modelValue","control"]),n(o,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=b=>l.value=b),control:a(u),label:"Mike",value:"Mike"},null,8,["modelValue","control"])],64)}}});export{S as _,D as a,N as b,R as c,q as d,E as e,H as f};

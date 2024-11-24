import{W as y,q as C,r as o,j as e}from"./app-Dm8cIE4T.js";import{C as b,a as f,b as w,c as k,d as F}from"./card-BcIbXjuy.js";import{B as D}from"./button-DgGlTW6a.js";import{I as l}from"./input-CBzUmVr_.js";import{T as j}from"./textarea-DWp-zq03.js";import{L as t}from"./label-Cskz7mPN.js";import{A as P,a as A}from"./alert-DHtm6IX7.js";import{A as E,a as S,b as T,c as L,d as R,e as U,f as I}from"./alert-dialog-DWkt10LR.js";import{L as B}from"./loader-circle-Bkkx-D_Q.js";import{C as q}from"./circle-check-B1MVLKFc.js";import"./utils-BM_CldAA.js";import"./index-C_uji-SS.js";import"./index-BnBCp9FI.js";import"./index-DKrXWNRO.js";import"./index-DLTLx8j3.js";import"./index-C_FO5VxW.js";import"./createLucideIcon-Bdj_7l1A.js";const ae=()=>{const{data:r,setData:i,post:g,processing:d,errors:a,reset:m}=y({name:"",description:"",price:"",icon:"",image:"",Newresources:{cpu:0,memory:0,disk:0,databases:0,allocations:0,backups:0,servers:0},discount:"",visibility:!1,redirect:"",perCustomer:"",planType:"monthly",perPerson:1,stock:0,kushiConfig:""}),{flash:n}=C().props,[c,u]=o.useState(null),[v,h]=o.useState(!1);o.useEffect(()=>{if(n.status)if(u({message:n.res,type:n.status}),n.status==="success")h(!0);else{const s=setTimeout(()=>u(null),5e3);return()=>clearTimeout(s)}},[n]);const N=async s=>{s.preventDefault();const x={...r,additional_fields:null};try{await g("/admin/plans/store",x),//console.log ("Data:",x),m()}catch{console.error("An error occurred while submitting the form.")}},p=()=>{h(!1),m()};return e.jsxs(e.Fragment,{children:[e.jsxs(b,{className:"w-full max-w-2xl mx-auto",children:[e.jsxs(f,{children:[e.jsx(w,{children:"Create New Plan"}),e.jsx(k,{children:"Define a new plan with available billing cycles, visibility, and customer limits."})]}),e.jsxs(F,{children:[c&&c.type!=="success"&&e.jsx(P,{variant:"destructive",className:"mb-6",children:e.jsx(A,{children:c.message})}),e.jsxs("form",{onSubmit:N,className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"name",children:"Name"}),e.jsx(l,{id:"name",type:"text",value:r.name,onChange:s=>i("name",s.target.value),placeholder:"Enter plan name",className:a.name?"border-red-500":""}),a.name&&e.jsx("p",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"description",children:"Description"}),e.jsx(j,{id:"description",value:r.description,onChange:s=>i("description",s.target.value),placeholder:"Enter plan description",className:a.description?"border-red-500":""}),a.description&&e.jsx("p",{className:"text-sm text-red-500",children:a.description})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"price",children:"Price (USD)"}),e.jsx(l,{id:"price",type:"text",value:r.price,onChange:s=>i("price",s.target.value),placeholder:"Enter price",className:a.price?"border-red-500":""}),a.price&&e.jsx("p",{className:"text-sm text-red-500",children:a.price})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"icon",children:"Icon"}),e.jsx(l,{id:"icon",type:"text",value:r.icon,onChange:s=>i("icon",s.target.value),placeholder:"Enter icon URL",className:a.icon?"border-red-500":""}),a.icon&&e.jsx("p",{className:"text-sm text-red-500",children:a.icon})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"image",children:"Image"}),e.jsx(l,{id:"image",type:"text",value:r.image,onChange:s=>i("image",s.target.value),placeholder:"Enter image URL",className:a.image?"border-red-500":""}),a.image&&e.jsx("p",{className:"text-sm text-red-500",children:a.image})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"resources",children:"Resources"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(t,{htmlFor:"cpu",children:"CPU"}),e.jsx(l,{id:"cpu",type:"number",value:r.Newresources.cpu,onChange:s=>i("Newresources",{...r.Newresources,cpu:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"memory",children:"Memory"}),e.jsx(l,{id:"memory",type:"number",value:r.Newresources.memory,onChange:s=>i("Newresources",{...r.Newresources,memory:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"disk",children:"Disk"}),e.jsx(l,{id:"disk",type:"number",value:r.Newresources.disk,onChange:s=>i("Newresources",{...r.Newresources,disk:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"databases",children:"Databases"}),e.jsx(l,{id:"databases",type:"number",value:r.Newresources.databases,onChange:s=>i("Newresources",{...r.Newresources,databases:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"allocations",children:"Allocations"}),e.jsx(l,{id:"allocations",type:"number",value:r.Newresources.allocations,onChange:s=>i("Newresources",{...r.Newresources,allocations:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"backups",children:"Backups"}),e.jsx(l,{id:"backups",type:"number",value:r.Newresources.backups,onChange:s=>i("Newresources",{...r.Newresources,backups:s.target.value})})]}),e.jsxs("div",{children:[e.jsx(t,{htmlFor:"servers",children:"Servers"}),e.jsx(l,{id:"servers",type:"number",value:r.Newresources.servers,onChange:s=>i("Newresources",{...r.Newresources,servers:s.target.value})})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"discount",children:"Discount"}),e.jsx(l,{id:"discount",type:"text",value:r.discount,onChange:s=>i("discount",s.target.value),placeholder:"Enter discount",className:a.discount?"border-red-500":""}),a.discount&&e.jsx("p",{className:"text-sm text-red-500",children:a.discount})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"visibility",children:"Visibility"}),e.jsx("input",{type:"checkbox",id:"visibility",checked:r.visibility,onChange:s=>i("visibility",s.target.checked),className:"k ml-2 rounded-full mb-10"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"redirect",children:"Redirect"}),e.jsx(l,{id:"redirect",type:"text",value:r.redirect,onChange:s=>i("redirect",s.target.value),placeholder:"Enter redirect URL",className:a.redirect?"border-red-500":""}),a.redirect&&e.jsx("p",{className:"text-sm text-red-500",children:a.redirect})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"perCustomer",children:"Per Customer"}),e.jsx(l,{id:"perCustomer",type:"text",value:r.perCustomer,onChange:s=>i("perCustomer",s.target.value),placeholder:"Enter per customer details",className:a.perCustomer?"border-red-500":""}),a.perCustomer&&e.jsx("p",{className:"text-sm text-red-500",children:a.perCustomer})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"planType",children:"Plan Type"}),e.jsxs("select",{id:"planType",value:r.planType,onChange:s=>i("planType",s.target.value),className:"text-black ml-2 rounded-full",children:[e.jsx("option",{value:"monthly",className:"text-black dark:text-black",children:"Monthly"}),e.jsx("option",{value:"lifetime",children:"Lifetime"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"perPerson",children:"Per Person"}),e.jsx(l,{id:"perPerson",type:"number",value:r.perPerson,onChange:s=>i("perPerson",s.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"stock",children:"Stock"}),e.jsx(l,{id:"stock",type:"number",value:r.stock,onChange:s=>i("stock",s.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{htmlFor:"kushiConfig",children:"Kushi Config"}),e.jsx(j,{id:"kushiConfig",value:r.kushiConfig,onChange:s=>i("kushiConfig",s.target.value),placeholder:"Enter kushi config"})]}),e.jsx(D,{type:"submit",className:"w-full",disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"mr-2 h-4 w-4 animate-spin"}),"Creating..."]}):"Create Plan"})]})]})]}),e.jsx(E,{open:v,onOpenChange:p,children:e.jsxs(S,{className:"max-w-md",children:[e.jsxs(T,{children:[e.jsxs(L,{className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-6 w-6 text-green-500"}),"Success!"]}),e.jsx(R,{className:"text-base",children:(c==null?void 0:c.message)||"Plan configuration has been successfully saved!"})]}),e.jsx(U,{children:e.jsx(I,{onClick:p,children:"Continue"})})]})})]})};export{ae as default};

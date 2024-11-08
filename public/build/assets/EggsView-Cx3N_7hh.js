import{U as c,r as u,j as a}from"./app-CKfLfX7q.js";import{C as p,a as g,d as j,e as x,b as w}from"./card-DBUGTJ36.js";import{S as f}from"./skeleton-CwXw7AkJ.js";import{c as P}from"./createLucideIcon-fgWOF6mL.js";import"./utils-BM_CldAA.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=P("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=c.createContext&&c.createContext(b),N=["attr","size","title"];function C(e,t){if(e==null)return{};var r=L(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function L(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(n){S(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function S(e,t,r){return t=z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){var t=_(e,"string");return typeof t=="symbol"?t:t+""}function _(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O(e){return e&&e.map((t,r)=>c.createElement(t.tag,d({key:r},t.attr),O(t.child)))}function D(e){return t=>c.createElement(I,o({attr:d({},e.attr)},t),O(e.child))}function I(e){var t=r=>{var{attr:n,size:i,title:s}=e,m=C(e,N),h=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,m,{className:l,style:d(d({color:e.color||r.color},r.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),s&&c.createElement("title",null,s),e.children)};return v!==void 0?c.createElement(v.Consumer,null,r=>t(r)):t(b)}function M(e){return D({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"},child:[]}]})(e)}const F=()=>{const[e,t]=u.useState([]),[r,n]=u.useState(!0);return u.useEffect(()=>{(async()=>{try{const m=await(await fetch("/admin/api/eggs")).json();t(m)}catch(s){console.error("Error fetching eggs:",s)}finally{n(!1)}})()},[]),r?a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3",children:[...Array(6)].map((i,s)=>a.jsxs(p,{children:[a.jsx(g,{children:a.jsx(f,{className:"h-6 w-3/4"})}),a.jsx(j,{children:a.jsx(f,{className:"h-4 w-full mb-2"})}),a.jsx(x,{className:"flex justify-end",children:a.jsx(f,{className:"h-4 w-16"})})]},s))}):a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3",children:e.map(i=>a.jsxs(p,{className:"cursor-pointer",onClick:()=>window.location.href=`/admin/egg/edit/${i.id}`,children:[a.jsx(g,{children:a.jsx(w,{children:i.name})}),a.jsxs(j,{children:[a.jsx("p",{children:i.description}),a.jsxs("div",{className:"flex items-center space-x-2 mt-4",children:[a.jsx("img",{src:i.icon,alt:i.name,className:"w-8 h-8"}),a.jsx("span",{children:i.EggID})]})]}),a.jsx(x,{className:"flex justify-end",children:a.jsxs(E,{href:`/admin/egg/edit/${i.id}`,className:"text-white hover:text-gray-400",children:["Edit ",a.jsx(M,{className:"ml-2","aria-hidden":"true"})]})})]},i.id))})};export{F as default};

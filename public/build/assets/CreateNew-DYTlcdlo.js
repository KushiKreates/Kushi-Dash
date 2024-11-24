import{U as c,j as a}from"./app-Dm8cIE4T.js";import{B as b}from"./button-DgGlTW6a.js";import{C as j}from"./card-BcIbXjuy.js";import{c as y}from"./utils-BM_CldAA.js";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=c.createContext&&c.createContext(p),O=["attr","size","title"];function x(t,e){if(t==null)return{};var r=w(t,e),n,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function w(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(this,arguments)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?d(Object(r),!0).forEach(function(n){P(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function P(t,e,r){return e=N(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function N(t){var e=C(t,"string");return typeof e=="symbol"?e:e+""}function C(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function g(t){return t&&t.map((e,r)=>c.createElement(e.tag,u({key:r},e.attr),g(e.child)))}function v(t){return e=>c.createElement(z,s({attr:u({},t.attr)},e),g(t.child))}function z(t){var e=r=>{var{attr:n,size:i,title:l}=t,h=x(t,O),f=i||r.size||"1em",o;return r.className&&(o=r.className),t.className&&(o=(o?o+" ":"")+t.className),c.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,h,{className:o,style:u(u({color:t.color||r.color},r.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&c.createElement("title",null,l),t.children)};return m!==void 0?c.createElement(m.Consumer,null,r=>e(r)):e(p)}function H(t){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"},child:[]}]})(t)}function B(t){return v({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"},child:[]}]})(t)}const D=({go:t="/",text:e="Create New Item"})=>a.jsx("div",{className:"flex flex-col items-center justify-center min-h-[400px] space-y-6 transition-all duration-200 mt-4",children:a.jsxs(j,{children:[a.jsx("div",{className:y("p-6 rounded-xl","dark:bg-transparent","transition-colors duration-200"),children:a.jsx("img",{src:"/counting.svg",alt:"Create New",className:"w-120 h-60 object-contain"})}),a.jsxs("div",{className:"flex flex-col items-center justify-center mb-4 ",children:[a.jsx("h1",{className:"font-semibold text-2xl",children:"😿 Nothing Found"}),a.jsx(b,{onClick:()=>window.location.href=t,className:"text-lg px-6 py-3 font-medium mt-4",size:"lg",children:e})]})]})});export{D as C,H as F,B as a};

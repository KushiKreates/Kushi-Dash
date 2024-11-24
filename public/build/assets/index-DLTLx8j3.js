import{r as i,j as s}from"./app-Dm8cIE4T.js";import{c as B,a as p,P as C,b as H,u as V}from"./index-DKrXWNRO.js";import{u as R,S as q}from"./index-C_uji-SS.js";import{R as K,h as U,u as Y,F as Z,D as z,a as x,P as J}from"./index-C_FO5VxW.js";import{P as D}from"./index-BnBCp9FI.js";var _="Dialog",[N,de]=B(_),[Q,u]=N(_),y=e=>{const{__scopeDialog:o,children:r,open:a,defaultOpen:n,onOpenChange:t,modal:c=!0}=e,l=i.useRef(null),d=i.useRef(null),[g=!1,m]=V({prop:a,defaultProp:n,onChange:t});return s.jsx(Q,{scope:o,triggerRef:l,contentRef:d,contentId:x(),titleId:x(),descriptionId:x(),open:g,onOpenChange:m,onOpenToggle:i.useCallback(()=>m($=>!$),[m]),modal:c,children:r})};y.displayName=_;var O="DialogTrigger",I=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(O,r),t=R(o,n.triggerRef);return s.jsx(D.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":P(n.open),...a,ref:t,onClick:p(e.onClick,n.onOpenToggle)})});I.displayName=O;var h="DialogPortal",[X,A]=N(h,{forceMount:void 0}),T=e=>{const{__scopeDialog:o,forceMount:r,children:a,container:n}=e,t=u(h,o);return s.jsx(X,{scope:o,forceMount:r,children:i.Children.map(a,c=>s.jsx(C,{present:r||t.open,children:s.jsx(J,{asChild:!0,container:n,children:c})}))})};T.displayName=h;var v="DialogOverlay",b=i.forwardRef((e,o)=>{const r=A(v,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(v,e.__scopeDialog);return t.modal?s.jsx(C,{present:a||t.open,children:s.jsx(ee,{...n,ref:o})}):null});b.displayName=v;var ee=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(v,r);return s.jsx(K,{as:q,allowPinchZoom:!0,shards:[n.contentRef],children:s.jsx(D.div,{"data-state":P(n.open),...a,ref:o,style:{pointerEvents:"auto",...a.style}})})}),f="DialogContent",j=i.forwardRef((e,o)=>{const r=A(f,e.__scopeDialog),{forceMount:a=r.forceMount,...n}=e,t=u(f,e.__scopeDialog);return s.jsx(C,{present:a||t.open,children:t.modal?s.jsx(te,{...n,ref:o}):s.jsx(oe,{...n,ref:o})})});j.displayName=f;var te=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(null),n=R(o,r.contentRef,a);return i.useEffect(()=>{const t=a.current;if(t)return U(t)},[]),s.jsx(M,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:p(e.onCloseAutoFocus,t=>{var c;t.preventDefault(),(c=r.triggerRef.current)==null||c.focus()}),onPointerDownOutside:p(e.onPointerDownOutside,t=>{const c=t.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0;(c.button===2||l)&&t.preventDefault()}),onFocusOutside:p(e.onFocusOutside,t=>t.preventDefault())})}),oe=i.forwardRef((e,o)=>{const r=u(f,e.__scopeDialog),a=i.useRef(!1),n=i.useRef(!1);return s.jsx(M,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var c,l;(c=e.onCloseAutoFocus)==null||c.call(e,t),t.defaultPrevented||(a.current||(l=r.triggerRef.current)==null||l.focus(),t.preventDefault()),a.current=!1,n.current=!1},onInteractOutside:t=>{var d,g;(d=e.onInteractOutside)==null||d.call(e,t),t.defaultPrevented||(a.current=!0,t.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const c=t.target;((g=r.triggerRef.current)==null?void 0:g.contains(c))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&n.current&&t.preventDefault()}})}),M=i.forwardRef((e,o)=>{const{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:t,...c}=e,l=u(f,r),d=i.useRef(null),g=R(o,d);return Y(),s.jsxs(s.Fragment,{children:[s.jsx(Z,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:t,children:s.jsx(z,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open),...c,ref:g,onDismiss:()=>l.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(ne,{titleId:l.titleId}),s.jsx(ae,{contentRef:d,descriptionId:l.descriptionId})]})]})}),E="DialogTitle",F=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(E,r);return s.jsx(D.h2,{id:n.titleId,...a,ref:o})});F.displayName=E;var w="DialogDescription",S=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(w,r);return s.jsx(D.p,{id:n.descriptionId,...a,ref:o})});S.displayName=w;var W="DialogClose",k=i.forwardRef((e,o)=>{const{__scopeDialog:r,...a}=e,n=u(W,r);return s.jsx(D.button,{type:"button",...a,ref:o,onClick:p(e.onClick,()=>n.onOpenChange(!1))})});k.displayName=W;function P(e){return e?"open":"closed"}var G="DialogTitleWarning",[fe,L]=H(G,{contentName:f,titleName:E,docsSlug:"dialog"}),ne=({titleId:e})=>{const o=L(G),r=`\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},re="DialogDescriptionWarning",ae=({contentRef:e,descriptionId:o})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${L(re).contentName}}.`;return i.useEffect(()=>{var t;const n=(t=e.current)==null?void 0:t.getAttribute("aria-describedby");o&&n&&(document.getElementById(o)||console.warn(a))},[a,e,o]),null},ge=y,pe=I,De=T,ve=b,me=j,xe=F,Ce=S,Re=k;export{me as C,Ce as D,ve as O,De as P,ge as R,pe as T,fe as W,xe as a,Re as b,de as c};

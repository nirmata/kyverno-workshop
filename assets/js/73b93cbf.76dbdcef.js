"use strict";(self.webpackChunkkyverno_workshop=self.webpackChunkkyverno_workshop||[]).push([[349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Module 2: Pod Security Admission",l={unversionedId:"module2/README",id:"module2/README",title:"Module 2: Pod Security Admission",description:"Pod Security Policies (PSPs) were removed starting K8s 1.25 . PSPs were designed to control the security specification of Pods. However, they were not intuitive to use. They're now replaced by Pod Security Admission (PSAs) which help enforce Pod Security Standards (PSSs) on a namespace level.",source:"@site/docs/module2/README.md",sourceDirName:"module2",slug:"/module2/",permalink:"/kyverno-workshop/docs/module2/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SOLUTIONS",permalink:"/kyverno-workshop/docs/module1/SOLUTIONS"},next:{title:"Kubernetes Best Practices using Kyverno",permalink:"/kyverno-workshop/docs/module3/"}},s={},c=[{value:"Task 1",id:"task-1",level:2},{value:"PSA Limitations",id:"psa-limitations",level:2},{value:"Task 2",id:"task-2",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"module-2-pod-security-admission"},"Module 2: Pod Security Admission"),(0,a.kt)("p",null,"Pod Security Policies (PSPs) were removed starting K8s ",(0,a.kt)("inlineCode",{parentName:"p"},"1.25")," . PSPs were designed to control the security specification of Pods. However, they were not intuitive to use. They're now replaced by Pod Security Admission (PSAs) which help enforce Pod Security Standards (PSSs) on a namespace level."),(0,a.kt)("p",null,"Pod Security Standards define three policies to broadly cover the security spectrum:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"privileged"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Anything is allowed!"),(0,a.kt)("li",{parentName:"ul"},"Unrestricted"),(0,a.kt)("li",{parentName:"ul"},"System & Infra-level workloads"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"baseline"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Minimally restricted"),(0,a.kt)("li",{parentName:"ul"},"Common workloads"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"restricted"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Heavily restricted"),(0,a.kt)("li",{parentName:"ul"},"Security critical workloads")))),(0,a.kt)("h2",{id:"task-1"},"Task 1"),(0,a.kt)("p",null,"The following Policy would create a namespace with the ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted")," Pod Security Admission configuration."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the namespace")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: test-psa\n  labels:\n    pod-security.kubernetes.io/enforce: restricted\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Attempt a pod admission")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k -n test-psa run nginx --image=nginx\n")),(0,a.kt)("h2",{id:"psa-limitations"},"PSA Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PSA and PSS were designed for simplicity of deployment and adoption",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"They are limited on their own"))),(0,a.kt)("li",{parentName:"ul"},"Restricted in scope",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Applied at a namespace level"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example:")," Filtering based on label (",(0,a.kt)("inlineCode",{parentName:"li"},"purpose:  prod"),") not supported"))),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t offer granular permissions",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Limited to applying PSS policies only"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example:")," Can\u2019t have a policy to only allow pods with ",(0,a.kt)("inlineCode",{parentName:"li"},"securityContext.privileged:  false")))),(0,a.kt)("li",{parentName:"ul"},"Designed to rely on third-party tools such as Kyverno and OPA for finer control")),(0,a.kt)("h2",{id:"task-2"},"Task 2"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the Kyverno Policy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kyverno.io/v1\nkind: ClusterPolicy\nmetadata:\n  name: disallow-privilege-escalation\n  annotations:\n    policies.kyverno.io/title: Disallow Privilege Escalation\n    policies.kyverno.io/category: Pod Security Standards (Restricted)\n    policies.kyverno.io/severity: medium\n    policies.kyverno.io/subject: Pod\n    kyverno.io/kyverno-version: 1.6.0\n    kyverno.io/kubernetes-version: "1.22-1.23"\n    policies.kyverno.io/description: >-\n      Privilege escalation, such as via set-user-ID or set-group-ID file mode, should not be allowed.\n      This policy ensures the `allowPrivilegeEscalation` field is set to `false`.      \nspec:\n  validationFailureAction: enforce\n  background: true\n  rules:\n    - name: privilege-escalation\n      match:\n        any:\n        - resources:\n            kinds:\n              - Pod\n      validate:\n        message: >-\n          Privilege escalation is disallowed. The fields\n          spec.containers[*].securityContext.allowPrivilegeEscalation,\n          spec.initContainers[*].securityContext.allowPrivilegeEscalation,\n          and spec.ephemeralContainers[*].securityContext.allowPrivilegeEscalation\n          must be set to `false`.          \n        pattern:\n          spec:\n            =(ephemeralContainers):\n            - securityContext:\n                allowPrivilegeEscalation: "false"\n            =(initContainers):\n            - securityContext:\n                allowPrivilegeEscalation: "false"\n            containers:\n            - securityContext:\n                allowPrivilegeEscalation: "false"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Attempt to admit the Pod")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"k -n test-psa run nginx --image=nginx\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now try the following")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  labels:\n    purpose: production\nspec:\n  containers:\n  - name: nginx\n    image: nginx:1.14.2\n    securityContext:\n      allowPrivilegeEscalation: false\n")))}d.isMDXComponent=!0}}]);
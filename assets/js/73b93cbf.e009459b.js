"use strict";(self.webpackChunkkyverno_workshop=self.webpackChunkkyverno_workshop||[]).push([[349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},s="Module 2: Kubernetes Best Practices using Kyverno",a={unversionedId:"module2/README",id:"module2/README",title:"Module 2: Kubernetes Best Practices using Kyverno",description:"Enforcing Kubernetes Best Practices becomes easier with Kyverno. This module covers some of the basic standards to get started with as you evolve in your policy and governance journey.",source:"@site/docs/module2/README.md",sourceDirName:"module2",slug:"/module2/",permalink:"/kyverno-workshop/docs/module2/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SOLUTIONS",permalink:"/kyverno-workshop/docs/module1/SOLUTIONS"},next:{title:"Module 3: Pod Security",permalink:"/kyverno-workshop/docs/module3/"}},l={},c=[{value:"Pod Security Standards (PSS)",id:"pod-security-standards-pss",level:2},{value:"Task 1",id:"task-1",level:2},{value:"Using Kyverno to implement PSS",id:"using-kyverno-to-implement-pss",level:3},{value:"RBAC",id:"rbac",level:2},{value:"Using Kyverno to implement RBAC",id:"using-kyverno-to-implement-rbac",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"module-2-kubernetes-best-practices-using-kyverno"},"Module 2: Kubernetes Best Practices using Kyverno"),(0,o.kt)("p",null,"Enforcing Kubernetes Best Practices becomes easier with Kyverno. This module covers some of the basic standards to get started with as you evolve in your policy and governance journey."),(0,o.kt)("p",null,"For this exercise, we will use a combination of policies from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kyverno/policies"},"kyverno/policies")," repo and also ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nirmata/kyverno-policies"},"nirmata/kyverno-policies")," repo."),(0,o.kt)("p",null,"Clone both the repositories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:nirmata/kyverno-policies.git\ngit clone git@github.com:kyverno/policies.git\n")),(0,o.kt)("h2",{id:"pod-security-standards-pss"},"Pod Security Standards (PSS)"),(0,o.kt)("p",null,"The Pod Security Standards define three different profiles to broadly cover the security spectrum. These profiles are cumulative and range from highly-permissive to highly-restrictive. For more information on PSS, refer to the official ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"Kubernetes documentation")),(0,o.kt)("h2",{id:"task-1"},"Task 1"),(0,o.kt)("p",null,"In this task, we will first run a bad pod and understand how easy it is to run pods with elevated privileges which is a high security risk. We will then see how best practices such as Pod Security Standards help prevent such issues."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'k run r00t --restart=Never -ti --rm --image lol --overrides \'{"spec":{"hostPID": true, "containers":[{"name":"1","image":"public.ecr.aws/h1a5s9h8/alpine:latest","command":["nsenter","--mount=/proc/1/ns/mnt","--","/bin/bash"],"stdin": true,"tty":true,"securityContext":{"privileged":true}}]}}\'\n')),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted"},"pod security standard restricted")," policies in enforce mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kustomize build https://github.com/kyverno/policies/pod-security/enforce | kubectl apply -f -\n")),(0,o.kt)("p",null,"Now let us try to run the bad pod again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl run r00t2 --restart=Never -ti --rm --image lol --overrides \'{"spec":{"hostPID": true, "containers":[{"name":"1","image":"public.ecr.aws/h1a5s9h8/alpine:latest","command":["nsenter","--mount=/proc/1/ns/mnt","--","/bin/bash"],"stdin": true,"tty":true,"securityContext":{"privileged":true}}]}}\'\n')),(0,o.kt)("h3",{id:"using-kyverno-to-implement-pss"},"Using Kyverno to implement PSS"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Baseline/Default")," profile is minimally restrictive and denies the most common vulnerabilities while the ",(0,o.kt)("inlineCode",{parentName:"p"},"Restricted")," profile is more heavily restrictive but follows many more of the common security best practices for Pods."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd policies/pod-security\nk apply -k .\n")),(0,o.kt)("p",null,"Let us take a look at all the policies applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"k get polr -A\n")),(0,o.kt)("h2",{id:"rbac"},"RBAC"),(0,o.kt)("p",null,"Kubernetes RBAC is the primary authorization mechanism in Kubernetes. While powerful, it is prone to misconfigurations. When designing permissions, it is important to understand where privilege escalation could occur and to minimize the risk of security incidents due to permissive access. The controls are derived from the official ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/rbac-good-practices/"},"Kubernetes RBAC Good Practices"),"."),(0,o.kt)("h3",{id:"using-kyverno-to-implement-rbac"},"Using Kyverno to implement RBAC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd kyverno-policies/rbac\nk apply -k .\n")),(0,o.kt)("p",null,"Let us take a look at all the policies applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"k get polr -A\n")))}d.isMDXComponent=!0}}]);
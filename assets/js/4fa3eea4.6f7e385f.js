"use strict";(self.webpackChunkkyverno_workshop=self.webpackChunkkyverno_workshop||[]).push([[470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8490:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={},o="Module 6: Policy Exceptions",l={unversionedId:"module6/README",id:"module6/README",title:"Module 6: Policy Exceptions",description:"Policy Exceptions is currently an alpha feature, available behind the --enablePolicyException flag. Let's enable the feature in kyverno first by setting this flag to true.",source:"@site/docs/module6/README.md",sourceDirName:"module6",slug:"/module6/",permalink:"/kyverno-workshop/docs/module6/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Module 5: Multitenancy",permalink:"/kyverno-workshop/docs/module5/"},next:{title:"Module 7: Cleanup Policies",permalink:"/kyverno-workshop/docs/module7/"}},s={},c=[{value:"Task",id:"task",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-6-policy-exceptions"},"Module 6: Policy Exceptions"),(0,r.kt)("p",null,"Policy Exceptions is currently an ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha")," feature, available behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"--enablePolicyException")," flag. Let's enable the feature in ",(0,r.kt)("inlineCode",{parentName:"p"},"kyverno")," first by setting this flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k -n kyverno edit deploy kyverno\n...\n      containers:\n      - args:\n        - --loggingFormat=text\n        - --exceptionNamespace=kyverno\n        - --enablePolicyException=true\n        env:\n        - name: INIT_CONFIG\n...\n")),(0,r.kt)("h2",{id:"task"},"Task"),(0,r.kt)("p",null,"Say we want our cluster to be running containers with version-tagged images. However, this is not a strict requirement for ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," Pods which run with the label ",(0,r.kt)("inlineCode",{parentName:"p"},"type=dev")," and used images created directly from the development branch which are tagged ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),". As seen earlier, we can use the following Policy for ensuring we run version-tagged images:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kyverno.io/v1\nkind: ClusterPolicy\nmetadata:\n  name: disallow-latest-tag\n  annotations:\n    policies.kyverno.io/title: Disallow Latest Tag\n    policies.kyverno.io/category: Best Practices\n    policies.kyverno.io/minversion: 1.6.0\n    policies.kyverno.io/severity: medium\n    policies.kyverno.io/subject: Pod\n    policies.kyverno.io/description: >-\n      The \':latest\' tag is mutable and can lead to unexpected errors if the\n      image changes. A best practice is to use an immutable tag that maps to\n      a specific version of an application Pod. This policy validates that the image\n      specifies a tag and that it is not called `latest`.      \nspec:\n  validationFailureAction: Enforce\n  background: true\n  rules:\n  - name: require-image-tag\n    match:\n      any:\n      - resources:\n          kinds:\n          - Pod\n    validate:\n      message: "An image tag is required."\n      pattern:\n        spec:\n          containers:\n          - image: "*:*"\n  - name: validate-image-tag\n    match:\n      any:\n      - resources:\n          kinds:\n          - Pod\n    validate:\n      message: "Using a mutable image tag e.g. \'latest\' is not allowed."\n      pattern:\n        spec:\n          containers:\n          - image: "!*:latest"\n')),(0,r.kt)("p",null,"We can prevent this Policy from being applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," Pods by using Policy Exceptions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kyverno.io/v2alpha1\nkind: PolicyException\nmetadata:\n  name: pe-disallow-latest-tag\n  namespace: kyverno\nspec:\n  exceptions:\n  - policyName: disallow-latest-tag\n    ruleNames:\n    - require-image-tag\n    - validate-image-tag\n  match:\n    all:\n    - resources:\n        kinds:\n        - Pod\n        namespaces:\n        - test\n        selector:\n          matchLabels:\n            type: dev\n")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"k create ns test\n")),(0,r.kt)("p",null,"Test by admitting the following Pods:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"k -n test run nginx-dev --image=nginx:latest --labels type=dev")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"k -n test run nginx-prod --image=nginx:latest --labels type=prod"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(r),u=a,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9625:(e,t,r)=>{r.d(t,{wT:()=>C,eh:()=>d,Ac:()=>m,SP:()=>f,Z9:()=>k,al:()=>i});var n=r(7462),a=r(7294),l=r(9960);function s(e){return a.createElement("span",{role:"img",style:{mask:`url("/img/${e.name}.svg")`,webkitMaskImage:`url("/img/${e.name}.svg")`,width:"0.9em",height:"0.9em",background:"currentColor",display:"inline-block",verticalAlign:"text-top",...e.style}})}function c(e){const{children:t,...r}=e;return a.createElement(l.Z,(0,n.Z)({target:"_blank",rel:"noopener noreferrer"},r),t,a.createElement(s,{name:"arrow-up-right-from-square","aria-label":"Open in new tab",style:{textDecoration:"none",...t&&{marginLeft:"0.25rem"}}}))}function i(e){const{script:t,children:r,...l}=e;return a.createElement(c,(0,n.Z)({},l,{href:`https://github.com/audse/mod-system/tree/main/addons/mod_system/${t}`,title:`Open source code for \`${t}\``}),r,a.createElement("code",null,t))}i.SeeTheCode=function(e){return a.createElement(i,e,"See the code at ")};const o="https://docs.godotengine.org/en/stable";function p(e){return e.toLowerCase().replace(/#([_-\w]+)/gim,(e=>e.replace(/_/gim,"-")))}function d(e){const{cls:t,...r}=e;return a.createElement(c,(0,n.Z)({},r,{style:{...r.style,whiteSpace:"nowrap"},href:p(`${o}/classes/class_${t}.html`),title:`Open Godot Documentation for \`${t}\``}),a.createElement("code",null,t))}function m(e){const{cls:t,method:r,...l}=e;return a.createElement(c,(0,n.Z)({},l,{href:p(`${o}/classes/class_${t}.html#class-${t}-method-${r}`),title:`Open Godot Documentation for \`${t}.${r}()\``}),a.createElement("code",null,t,".",r,"()"))}const u={textAlign:"left",width:"fit-content"},h={textAlign:"left",width:"100%"};function k(e){const{type:t,defaultValue:r,exported:n,computed:l,children:s,...c}=e;return a.createElement("table",c,t&&a.createElement("tr",null,a.createElement("th",{style:u},"Type"),a.createElement("td",{style:h},t)),r&&a.createElement("tr",null,a.createElement("th",{style:u},"Default"),a.createElement("td",{style:h},r||"-")),s)}function f(e){const{parameters:t,children:r,...n}=e,l={textAlign:"left"};return a.createElement("table",n,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{style:l},"Name"),a.createElement("th",{style:l},"Type"),a.createElement("th",{style:{...l,width:"100%"}},"Description"))),a.createElement("tbody",null,t&&t.map(f.Row),r))}function g(e){const{name:t,type:r,description:n,children:l,...s}=e;return a.createElement("tr",s,a.createElement("td",null,a.createElement("code",null,t)),r&&a.createElement("td",null,r),n&&a.createElement("td",null,n),l&&Array.isArray(l)?l.map((e=>a.createElement("td",null,e))):l)}function y(e){const{href:t,children:r,...s}=e;return a.createElement(l.Z,(0,n.Z)({href:`/docs/${t}`},s),a.createElement("code",null,r))}function E(e){const{href:t,cls:r,children:l,method:s,property:c,...i}=e,o=e=>a.createElement(y,(0,n.Z)({href:`api/${t}${e.href?`#${e.href}`:""}`},i),r,e.children);return s?a.createElement(o,{href:s},".",s,"()"):c?a.createElement(o,{href:c},".",c):a.createElement(o,null)}function N(e){const{href:t,...r}=e;return a.createElement(E,(0,n.Z)({href:`resources/${t}`},r))}function v(e){const{href:t,...r}=e;return a.createElement(E,(0,n.Z)({href:`singletons/${t}`},r))}k.Row=e=>{const{children:t,th:r,td:n,...l}=e;return a.createElement("tr",l,a.createElement("th",{style:u},r),a.createElement("td",{style:h},n),t)},k.Type=function(e){const{children:t,...r}=e;return a.createElement(k.Row,(0,n.Z)({th:"Type",td:t},r))},k.Default=function(e){const{children:t,...r}=e;return a.createElement(k.Row,(0,n.Z)({th:"Default",td:t},r))},k.Description=function(e){const{children:t,...r}=e;return a.createElement(k.Row,(0,n.Z)({th:"Description",td:t},r))},g.Type=function(e){return a.createElement("td",e)},g.Description=function(e){return a.createElement("td",e)},f.Row=g;const C={Mod:e=>a.createElement(N,(0,n.Z)({href:"mod"},e,{cls:"Mod"})),ModAsset:e=>a.createElement(N,(0,n.Z)({href:"mod-asset"},e,{cls:"ModAsset"})),ModInstance:e=>a.createElement(N,(0,n.Z)({href:"mod-instance"},e,{cls:"ModInstance"})),ModInstanceScript:e=>a.createElement(N,(0,n.Z)({href:"mod-instance-script"},e,{cls:"ModInstanceScript"})),ModScript:e=>a.createElement(N,(0,n.Z)({href:"mod-script"},e,{cls:"ModScript"})),ModSettings:e=>a.createElement(N,(0,n.Z)({href:"mod-settings"},e,{cls:"ModSettings"})),RegisteredClass:e=>a.createElement(N,(0,n.Z)({href:"registered-class"},e,{cls:"RegisteredClass"})),ModClassDB:e=>a.createElement(v,(0,n.Z)({href:"mod-class-db"},e,{cls:"ModClassDB"})),ModLoader:e=>a.createElement(v,(0,n.Z)({href:"mod-loader"},e,{cls:"ModLoader"})),ModSystem:e=>a.createElement(v,(0,n.Z)({href:"mod-system"},e,{cls:"ModSystem"}))}},7118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=r(7462),a=r(7294),l=r(3905),s=r(9625);const c={description:"A class accessible in ModClassDB"},i="RegisteredClass",o={unversionedId:"api/resources/registered-class",id:"api/resources/registered-class",title:"RegisteredClass",description:"A class accessible in ModClassDB",source:"@site/docs/api/resources/registered-class.md",sourceDirName:"api/resources",slug:"/api/resources/registered-class",permalink:"/mod-system-docs/docs/api/resources/registered-class",draft:!1,tags:[],version:"current",frontMatter:{description:"A class accessible in ModClassDB"},sidebar:"tutorialSidebar",previous:{title:"Mod",permalink:"/mod-system-docs/docs/api/resources/mod"},next:{title:"Singletons",permalink:"/mod-system-docs/docs/category/singletons"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"cls",id:"cls",level:3},{value:"parent",id:"parent",level:3},{value:"Methods",id:"methods",level:2},{value:"_init",id:"_init",level:3},{value:"from_script",id:"from_script",level:3},{value:"has_ancestor",id:"has_ancestor",level:3}],m={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"registeredclass"},"RegisteredClass"),(0,l.kt)(s.al.SeeTheCode,{script:"resources/registered_class.gd"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Inherits ",(0,l.kt)(s.eh,{cls:"Resource",mdxType:"GodotClassLink"}))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"RegisteredClass")," class represents a registered class in the ",(0,l.kt)(s.wT.ModClassDB,null),". It defines a script associated with a unique class name and provides information about the class, including its name, the script it is associated with, and its parent class."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"var name: StringName\n")),(0,l.kt)("p",null,"The unique name of the registered class. It can be either the ",(0,l.kt)(s.eh,{cls:"Script",mdxType:"GodotClassLink"})," resource path or an explicitly provided name."),(0,l.kt)(s.Z9,{mdxType:"Property"},(0,l.kt)(s.Z9.Type,null,(0,l.kt)(s.eh,{cls:"StringName",mdxType:"GodotClassLink"})),(0,l.kt)(s.Z9.Default,null)),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cls"},"cls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"var cls: Script\n")),(0,l.kt)("p",null,"The ",(0,l.kt)(s.eh,{cls:"Script",mdxType:"GodotClassLink"})," class associated with the registered class."),(0,l.kt)(s.Z9,{mdxType:"Property"},(0,l.kt)(s.Z9.Type,null,(0,l.kt)(s.eh,{cls:"Script",mdxType:"GodotClassLink"})),(0,l.kt)(s.Z9.Default,null,(0,l.kt)("code",null,"null"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"parent"},"parent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"var parent: RegisteredClass\n")),(0,l.kt)("p",null,"The parent class of this registered class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The parent must also be registered."),(0,l.kt)(s.Z9,{mdxType:"Property"},(0,l.kt)(s.Z9.Type,null,(0,l.kt)(s.wT.RegisteredClass,null)),(0,l.kt)(s.Z9.Default,null,(0,l.kt)("code",null,"null"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"_init"},"_init"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"func _init(\n    name_value: StringName, \n    cls_value: Script, \n    parent_value: RegisteredClass = null\n) -> void\n")),(0,l.kt)("p",null,"Initializes a new ",(0,l.kt)("inlineCode",{parentName:"p"},"RegisteredClass")," object with the given ",(0,l.kt)("a",{parentName:"p",href:"#name"},(0,l.kt)("inlineCode",{parentName:"a"},"name")),", ",(0,l.kt)("a",{parentName:"p",href:"#cls"},(0,l.kt)("inlineCode",{parentName:"a"},"cls")),", and ",(0,l.kt)("a",{parentName:"p",href:"#parent"},(0,l.kt)("inlineCode",{parentName:"a"},"parent")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(s.SP,{mdxType:"Params"},(0,l.kt)(s.SP.Row,{name:"name_value",description:"The unique name of the registered class.",type:(0,l.kt)(s.eh,{cls:"StringName",mdxType:"GodotClassLink"})}),(0,l.kt)(s.SP.Row,{name:"cls_value",description:"The script class associated with the registered class.",type:(0,l.kt)(s.eh,{cls:"Script",mdxType:"GodotClassLink"})}),(0,l.kt)(s.SP.Row,{name:"parent_value",description:"The parent class of the registered class.",type:(0,l.kt)(a.Fragment,null,(0,l.kt)(s.wT.RegisteredClass,null),"\xa0(optional)")})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"from_script"},"from_script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"from_script(script: GDScript) -> RegisteredClass\n")),(0,l.kt)("p",null,"Creates a new ",(0,l.kt)("inlineCode",{parentName:"p"},"RegisteredClass")," object by parsing the class name from the ",(0,l.kt)("inlineCode",{parentName:"p"},"GDScript")," script's ",(0,l.kt)("inlineCode",{parentName:"p"},"class_name")," declaration or the ",(0,l.kt)("inlineCode",{parentName:"p"},"resource_path")," if the class name is empty. It also parses the parent class from the ",(0,l.kt)("inlineCode",{parentName:"p"},"extends")," declaration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"script")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"GDScript")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"GDScript")," instance representing the script.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RegisteredClass")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"has_ancestor"},"has_ancestor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"func has_ancestor(ancestor: RegisteredClass) -> bool\n")),(0,l.kt)("p",null,"Checks whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"RegisteredClass")," or any of its parent classes is the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"ancestor")," class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(s.SP,{mdxType:"Params"},(0,l.kt)(s.SP.Row,{name:"ancestor",description:"The ancestor class to check.",type:(0,l.kt)(s.wT.RegisteredClass,null)})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bool")))}h.isMDXComponent=!0}}]);
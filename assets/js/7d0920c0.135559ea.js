"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9625:(e,t,n)=>{n.d(t,{wT:()=>_,eh:()=>d,Ac:()=>m,SP:()=>f,Z9:()=>k,al:()=>s});var r=n(7462),l=n(7294),o=n(9960);function a(e){return l.createElement("span",{role:"img",style:{mask:`url("/mod-system-docs/img/${e.name}.svg")`,WebkitMaskImage:`url("/mod-system-docs/img/${e.name}.svg")`,width:"0.9em",height:"0.9em",background:"currentColor",display:"inline-block",verticalAlign:"text-top",...e.style}})}function i(e){const{children:t,...n}=e;return l.createElement(o.Z,(0,r.Z)({target:"_blank",rel:"noopener noreferrer"},n),t,l.createElement(a,{name:"arrow-up-right-from-square","aria-label":"Open in new tab",style:{textDecoration:"none",...t&&{marginLeft:"0.25rem"}}}))}function s(e){const{script:t,children:n,...o}=e;return l.createElement(i,(0,r.Z)({},o,{href:`https://github.com/audse/mod-system/tree/main/addons/mod_system/${t}`,title:`Open source code for \`${t}\``}),n,l.createElement("code",null,t))}s.SeeTheCode=function(e){return l.createElement(s,e,"See the code at ")};const c="https://docs.godotengine.org/en/stable";function p(e){return e.toLowerCase().replace(/#([_-\w]+)/gim,(e=>e.replace(/_/gim,"-")))}function d(e){const{cls:t,...n}=e;return l.createElement(i,(0,r.Z)({},n,{style:{...n.style,whiteSpace:"nowrap"},href:p(`${c}/classes/class_${t}.html`),title:`Open Godot Documentation for \`${t}\``}),l.createElement("code",null,t))}function m(e){const{cls:t,method:n,...o}=e;return l.createElement(i,(0,r.Z)({},o,{href:p(`${c}/classes/class_${t}.html#class-${t}-method-${n}`),title:`Open Godot Documentation for \`${t}.${n}()\``}),l.createElement("code",null,t,".",n,"()"))}const u={textAlign:"left",width:"fit-content"},h={textAlign:"left",width:"100%"};function k(e){const{type:t,defaultValue:n,exported:r,computed:o,children:a,...i}=e;return l.createElement("table",i,l.createElement("tbody",null,t&&l.createElement("tr",null,l.createElement("th",{style:u},"Type"),l.createElement("td",{style:h},t)),n&&l.createElement("tr",null,l.createElement("th",{style:u},"Default"),l.createElement("td",{style:h},n||"-")),a))}function f(e){const{children:t,...n}=e,r={textAlign:"left"};return l.createElement("table",n,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:r},"Name"),l.createElement("th",{style:r},"Type"),l.createElement("th",{style:{...r,width:"100%"}},"Description"))),l.createElement("tbody",null,t))}function g(e){const{name:t,type:n,description:r,children:o,...a}=e;return l.createElement("tr",a,l.createElement("td",null,l.createElement("code",null,t)),n&&l.createElement("td",null,n),r&&l.createElement("td",null,r),o&&Array.isArray(o)?o.map((e=>l.createElement("td",null,e))):o)}function y(e){const{href:t,children:n,...a}=e;return l.createElement(o.Z,(0,r.Z)({href:`/docs/${t}`},a),l.createElement("code",null,n))}function E(e){const{href:t,cls:n,children:o,method:a,property:i,...s}=e,c=e=>l.createElement(y,(0,r.Z)({href:`api/${t}${e.href?`#${e.href}`:""}`},s),n,e.children);return a?l.createElement(c,{href:a},".",a,"()"):i?l.createElement(c,{href:i},".",i):l.createElement(c,null)}function x(e){const{href:t,...n}=e;return l.createElement(E,(0,r.Z)({href:`resources/${t}`},n))}function N(e){const{href:t,...n}=e;return l.createElement(E,(0,r.Z)({href:`singletons/${t}`},n))}function b(e){const{href:t,...n}=e;return l.createElement(E,(0,r.Z)({href:`utils/${t}`},n))}k.Row=e=>{const{children:t,th:n,td:r,...o}=e;return l.createElement("tr",o,l.createElement("th",{style:u},n),l.createElement("td",{style:h},r),t)},k.Type=function(e){const{children:t,...n}=e;return l.createElement(k.Row,(0,r.Z)({th:"Type",td:t},n))},k.Default=function(e){const{children:t,...n}=e;return l.createElement(k.Row,(0,r.Z)({th:"Default",td:t},n))},k.Description=function(e){const{children:t,...n}=e;return l.createElement(k.Row,(0,r.Z)({th:"Description",td:t},n))},g.Type=function(e){return l.createElement("td",e)},g.Description=function(e){return l.createElement("td",e)},f.Row=g;const _={Mod:e=>l.createElement(x,(0,r.Z)({href:"mod"},e,{cls:"Mod"})),ModAsset:e=>l.createElement(x,(0,r.Z)({href:"mod-asset"},e,{cls:"ModAsset"})),ModInstance:e=>l.createElement(x,(0,r.Z)({href:"mod-instance"},e,{cls:"ModInstance"})),ModInstanceScript:e=>l.createElement(x,(0,r.Z)({href:"mod-instance-script"},e,{cls:"ModInstanceScript"})),ModScript:e=>l.createElement(x,(0,r.Z)({href:"mod-script"},e,{cls:"ModScript"})),ModSettings:e=>l.createElement(x,(0,r.Z)({href:"mod-settings"},e,{cls:"ModSettings"})),RegisteredClass:e=>l.createElement(x,(0,r.Z)({href:"registered-class"},e,{cls:"RegisteredClass"})),ModClassDB:e=>l.createElement(N,(0,r.Z)({href:"mod-class-db"},e,{cls:"ModClassDB"})),ModLoader:e=>l.createElement(N,(0,r.Z)({href:"mod-loader"},e,{cls:"ModLoader"})),ModSystem:e=>l.createElement(N,(0,r.Z)({href:"mod-system"},e,{cls:"ModSystem"})),ModContentLoader:e=>l.createElement(b,(0,r.Z)({href:"mod-content-loader"},e,{cls:"ModContentLoader"})),ModZipReader:e=>l.createElement(b,(0,r.Z)({href:"mod-zip-reader"},e,{cls:"ModZipReader"}))}},5275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),l=(n(7294),n(3905)),o=n(9625);const a={description:"File system path utilities"},i="ModPath",s={unversionedId:"api/utilities/mod-path",id:"api/utilities/mod-path",title:"ModPath",description:"File system path utilities",source:"@site/docs/api/utilities/mod-path.md",sourceDirName:"api/utilities",slug:"/api/utilities/mod-path",permalink:"/mod-system-docs/docs/api/utilities/mod-path",draft:!1,tags:[],version:"current",frontMatter:{description:"File system path utilities"},sidebar:"tutorialSidebar",previous:{title:"ModContentLoader",permalink:"/mod-system-docs/docs/api/utilities/mod-content-loader"},next:{title:"ModScriptParser",permalink:"/mod-system-docs/docs/api/utilities/mod-script-parser"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2},{value:"ExtensionRegEx",id:"extensionregex",level:3},{value:"Methods",id:"methods",level:2},{value:"get_extension",id:"get_extension",level:3},{value:"is_mod_path",id:"is_mod_path",level:3},{value:"to_import_path",id:"to_import_path",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modpath"},"ModPath"),(0,l.kt)(o.al.SeeTheCode,{script:"utils/path.gd"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Inherits ",(0,l.kt)(o.eh,{cls:"Object",mdxType:"GodotClassLink"}))),(0,l.kt)("p",null,"Utilities to help with mod file system paths."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"extensionregex"},"ExtensionRegEx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},'static var ExtensionRegEx: RegEx = RegEx.create_from_string("\\\\.(?<ext>((?<sub_ext>[^.\\\\/]+)\\\\.)?(?<main_ext>[^\\\\/.]+))$")\n')),(0,l.kt)("p",null,"A ",(0,l.kt)(o.eh,{cls:"RegEx",mdxType:"GodotClassLink"})," that captures three groups from a file path."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"ext")," - the full extension"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"sub_ext")," - the sub extension, if it exists"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"main_ext")," - the main extension")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": While this is a variable, it is NOT meant to be mutated."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ex.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"my_mod.mod.json")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"ext")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"mod.json")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"sub_ext")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"mod")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"main_ext")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"json"))),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)(o.eh,{cls:"RegEx",mdxType:"GodotClassLink"})),(0,l.kt)(o.Z9.Default,null,(0,l.kt)("code",null,"\\.(?<ext>((?<sub_ext>[^.\\/]+)\\.)?(?<main_ext>[^\\/.]+))$"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"get_extension"},"get_extension"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func get_extension(path: String) -> String\n")),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("strong",{parentName:"p"},"extended")," extension of the given path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": This is a static method, intended to be called directly on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ModPath")," class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},'assert(ModPath.get_extension("my_mod.mod.json") == "mod.json")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},'assert(ModPath.get_extension("my_mod.tres") == "tres")\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(o.SP,{mdxType:"Params"},(0,l.kt)(o.SP.Row,{name:"path"},(0,l.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The file path from which to get the extension.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"})),(0,l.kt)(o.Z9.Description,null,"The file path's extension.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"is_mod_path"},"is_mod_path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func is_mod_path(path: String) -> bool\n")),(0,l.kt)("p",null,"Checks if the provided path is a mod file path."),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the given path is in the format ",(0,l.kt)("inlineCode",{parentName:"p"},"*.mod.tres"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"*.mod.res"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"*.mod.json"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": This is a static method, intended to be called directly on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ModPath")," class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(o.SP,{mdxType:"Params"},(0,l.kt)(o.SP.Row,{name:"path"},(0,l.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The file path to check.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)("code",null,"bool")),(0,l.kt)(o.Z9.Description,null,"Returns ",(0,l.kt)("code",null,"true")," if the given path is in the format ",(0,l.kt)("code",null,"*.mod.tres"),", ",(0,l.kt)("code",null,"*.mod.res"),", or ",(0,l.kt)("code",null,"*.mod.json"),".")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"to_import_path"},"to_import_path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func to_import_path(path: String) -> String\n")),(0,l.kt)("p",null,"Creates a new path with extension ",(0,l.kt)("inlineCode",{parentName:"p"},".import.tres"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": This is a static method, intended to be called directly on the ",(0,l.kt)("inlineCode",{parentName:"p"},"ModPath")," class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(o.SP,{mdxType:"Params"},(0,l.kt)(o.SP.Row,{name:"path"},(0,l.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The file path to check.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)("code",null,"String")),(0,l.kt)(o.Z9.Description,null,"The modified path.")))}u.isMDXComponent=!0}}]);
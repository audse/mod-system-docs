"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=l,h=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:l,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9625:(e,t,n)=>{n.d(t,{wT:()=>w,eh:()=>m,Ac:()=>p,SP:()=>g,Z9:()=>f,al:()=>i});var r=n(7462),l=n(7294),o=n(9960);function a(e){return l.createElement("span",{role:"img",style:{mask:`url("/img/${e.name}.svg")`,webkitMaskImage:`url("/img/${e.name}.svg")`,width:"0.9em",height:"0.9em",background:"currentColor",display:"inline-block",verticalAlign:"text-top",...e.style}})}function s(e){const{children:t,...n}=e;return l.createElement(o.Z,(0,r.Z)({target:"_blank",rel:"noopener noreferrer"},n),t,l.createElement(a,{name:"arrow-up-right-from-square","aria-label":"Open in new tab",style:{textDecoration:"none",...t&&{marginLeft:"0.25rem"}}}))}function i(e){const{script:t,children:n,...o}=e;return l.createElement(s,(0,r.Z)({},o,{href:`https://github.com/audse/mod-system/tree/main/addons/mod_system/${t}`,title:`Open source code for \`${t}\``}),n,l.createElement("code",null,t))}i.SeeTheCode=function(e){return l.createElement(i,e,"See the code at ")};const d="https://docs.godotengine.org/en/stable";function c(e){return e.toLowerCase().replace(/#([_-\w]+)/gim,(e=>e.replace(/_/gim,"-")))}function m(e){const{cls:t,...n}=e;return l.createElement(s,(0,r.Z)({},n,{style:{...n.style,whiteSpace:"nowrap"},href:c(`${d}/classes/class_${t}.html`),title:`Open Godot Documentation for \`${t}\``}),l.createElement("code",null,t))}function p(e){const{cls:t,method:n,...o}=e;return l.createElement(s,(0,r.Z)({},o,{href:c(`${d}/classes/class_${t}.html#class-${t}-method-${n}`),title:`Open Godot Documentation for \`${t}.${n}()\``}),l.createElement("code",null,t,".",n,"()"))}const u={textAlign:"left",width:"fit-content"},h={textAlign:"left",width:"100%"};function f(e){const{type:t,defaultValue:n,exported:r,computed:o,children:a,...s}=e;return l.createElement("table",s,t&&l.createElement("tr",null,l.createElement("th",{style:u},"Type"),l.createElement("td",{style:h},t)),n&&l.createElement("tr",null,l.createElement("th",{style:u},"Default"),l.createElement("td",{style:h},n||"-")),a)}function g(e){const{parameters:t,children:n,...r}=e,o={textAlign:"left"};return l.createElement("table",r,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:o},"Name"),l.createElement("th",{style:o},"Type"),l.createElement("th",{style:{...o,width:"100%"}},"Description"))),l.createElement("tbody",null,t&&t.map(g.Row),n))}function y(e){const{name:t,type:n,description:r,children:o,...a}=e;return l.createElement("tr",a,l.createElement("td",null,l.createElement("code",null,t)),n&&l.createElement("td",null,n),r&&l.createElement("td",null,r),o&&Array.isArray(o)?o.map((e=>l.createElement("td",null,e))):o)}function k(e){const{href:t,children:n,...a}=e;return l.createElement(o.Z,(0,r.Z)({href:`/docs/${t}`},a),l.createElement("code",null,n))}function v(e){const{href:t,cls:n,children:o,method:a,property:s,...i}=e,d=e=>l.createElement(k,(0,r.Z)({href:`api/${t}${e.href?`#${e.href}`:""}`},i),n,e.children);return a?l.createElement(d,{href:a},".",a,"()"):s?l.createElement(d,{href:s},".",s):l.createElement(d,null)}function E(e){const{href:t,...n}=e;return l.createElement(v,(0,r.Z)({href:`resources/${t}`},n))}function _(e){const{href:t,...n}=e;return l.createElement(v,(0,r.Z)({href:`singletons/${t}`},n))}f.Row=e=>{const{children:t,th:n,td:r,...o}=e;return l.createElement("tr",o,l.createElement("th",{style:u},n),l.createElement("td",{style:h},r),t)},f.Type=function(e){const{children:t,...n}=e;return l.createElement(f.Row,(0,r.Z)({th:"Type",td:t},n))},f.Default=function(e){const{children:t,...n}=e;return l.createElement(f.Row,(0,r.Z)({th:"Default",td:t},n))},f.Description=function(e){const{children:t,...n}=e;return l.createElement(f.Row,(0,r.Z)({th:"Description",td:t},n))},y.Type=function(e){return l.createElement("td",e)},y.Description=function(e){return l.createElement("td",e)},g.Row=y;const w={Mod:e=>l.createElement(E,(0,r.Z)({href:"mod"},e,{cls:"Mod"})),ModAsset:e=>l.createElement(E,(0,r.Z)({href:"mod-asset"},e,{cls:"ModAsset"})),ModInstance:e=>l.createElement(E,(0,r.Z)({href:"mod-instance"},e,{cls:"ModInstance"})),ModInstanceScript:e=>l.createElement(E,(0,r.Z)({href:"mod-instance-script"},e,{cls:"ModInstanceScript"})),ModScript:e=>l.createElement(E,(0,r.Z)({href:"mod-script"},e,{cls:"ModScript"})),ModSettings:e=>l.createElement(E,(0,r.Z)({href:"mod-settings"},e,{cls:"ModSettings"})),RegisteredClass:e=>l.createElement(E,(0,r.Z)({href:"registered-class"},e,{cls:"RegisteredClass"})),ModClassDB:e=>l.createElement(_,(0,r.Z)({href:"mod-class-db"},e,{cls:"ModClassDB"})),ModLoader:e=>l.createElement(_,(0,r.Z)({href:"mod-loader"},e,{cls:"ModLoader"})),ModSystem:e=>l.createElement(_,(0,r.Z)({href:"mod-system"},e,{cls:"ModSystem"}))}},148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905)),o=n(9625);const a={description:"Mod discovery and loading"},s="ModLoader",i={unversionedId:"api/singletons/mod-loader",id:"api/singletons/mod-loader",title:"ModLoader",description:"Mod discovery and loading",source:"@site/docs/api/singletons/mod-loader.md",sourceDirName:"api/singletons",slug:"/api/singletons/mod-loader",permalink:"/mod-system-docs/docs/api/singletons/mod-loader",draft:!1,tags:[],version:"current",frontMatter:{description:"Mod discovery and loading"},sidebar:"tutorialSidebar",previous:{title:"ModClassDB",permalink:"/mod-system-docs/docs/api/singletons/mod-class-db"},next:{title:"ModSystem",permalink:"/mod-system-docs/docs/api/singletons/mod-system"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Signals",id:"signals",level:2},{value:"finished_loading",id:"finished_loading",level:3},{value:"Properties",id:"properties",level:2},{value:"is_finished_loading",id:"is_finished_loading",level:3},{value:"Methods",id:"methods",level:2},{value:"load_all_mods",id:"load_all_mods",level:3},{value:"load_mod",id:"load_mod",level:3},{value:"discover_mod_paths",id:"discover_mod_paths",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modloader"},"ModLoader"),(0,l.kt)(o.al.SeeTheCode,{script:"autoload/mod_loader.gd"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Inherits ",(0,l.kt)(o.eh,{cls:"Node",mdxType:"GodotClassLink"}))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ModLoader")," class is a singleton responsible for loading mods. Upon game start, this class:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Recursively searches for mod files (",(0,l.kt)("inlineCode",{parentName:"li"},"*.mod.tres")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"*.mod.json")," files) within the directories specified in the ",(0,l.kt)("inlineCode",{parentName:"li"},'ProjectSettings."mod_system/mod_paths"')," property"),(0,l.kt)("li",{parentName:"ol"},"Loads the mods it found"),(0,l.kt)("li",{parentName:"ol"},"Communicates with ",(0,l.kt)(o.wT.ModSystem,null)," to install them using the ",(0,l.kt)(o.wT.ModSystem,{method:"install"})," method.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ModLoader")," class is designed to work in conjunction with the  ",(0,l.kt)(o.wT.ModSystem,null)," class, which manages the overall functionality and behavior of mods in the game."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"signals"},"Signals"),(0,l.kt)("h3",{id:"finished_loading"},"finished_loading"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"signal finished_loading\n")),(0,l.kt)("p",null,"This signal is emitted when all mods have been loaded and installed."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"is_finished_loading"},"is_finished_loading"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"var is_finished_loading: bool\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", all mods have been loaded and installed."),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)("code",null,"bool")),(0,l.kt)(o.Z9.Default,null,(0,l.kt)("code",null,"false"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"load_all_mods"},"load_all_mods"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"func load_all_mods() -> void\n")),(0,l.kt)("p",null,"Recursively finds all mod paths that end with ",(0,l.kt)("inlineCode",{parentName:"p"},".mod.tres"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".mod.res"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},".mod.json"),", loads them, and installs them using the ",(0,l.kt)(o.wT.ModSystem,{method:"install"})," method."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"load_mod"},"load_mod"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"func load_mod(path: String) -> Mod\n")),(0,l.kt)("p",null,"Loads a mod at the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," and installs it using the ",(0,l.kt)(o.wT.ModSystem,{method:"install"})," method."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(o.SP,{mdxType:"Params"},(0,l.kt)(o.SP.Row,{name:"path",description:"The file path of the mod to load.",type:(0,l.kt)("code",null,"String")})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)(o.wT.Mod,null)," or ",(0,l.kt)("code",null,"null")),(0,l.kt)(o.Z9.Description,null,"The loaded mod.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"discover_mod_paths"},"discover_mod_paths"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gdscript"},"func discover_mod_paths(dirs: Array[String]) -> Array[String]\n")),(0,l.kt)("p",null,"Recursively searches each listed directory for mods and returns a list of all paths to mods."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)(o.SP,{mdxType:"Params"},(0,l.kt)(o.SP.Row,{name:"dirs",description:"The directories to search for mod paths.",type:(0,l.kt)("code",null,"Array[String]")})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)(o.Z9,{mdxType:"Property"},(0,l.kt)(o.Z9.Type,null,(0,l.kt)("code",null,"Array[String]")),(0,l.kt)(o.Z9.Description,null,"All paths to mods within the listed `dirs` (recursive).")))}u.isMDXComponent=!0}}]);
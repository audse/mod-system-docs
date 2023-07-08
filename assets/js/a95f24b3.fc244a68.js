"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9625:(e,t,n)=>{n.d(t,{wT:()=>v,eh:()=>p,Ac:()=>u,SP:()=>f,Z9:()=>k,al:()=>i});var r=n(7462),l=n(7294),a=n(9960);function o(e){return l.createElement("span",{role:"img",style:{mask:`url("/mod-system-docs/img/${e.name}.svg")`,WebkitMaskImage:`url("/mod-system-docs/img/${e.name}.svg")`,width:"0.9em",height:"0.9em",background:"currentColor",display:"inline-block",verticalAlign:"text-top",...e.style}})}function s(e){const{children:t,...n}=e;return l.createElement(a.Z,(0,r.Z)({target:"_blank",rel:"noopener noreferrer"},n),t,l.createElement(o,{name:"arrow-up-right-from-square","aria-label":"Open in new tab",style:{textDecoration:"none",...t&&{marginLeft:"0.25rem"}}}))}function i(e){const{script:t,children:n,...a}=e;return l.createElement(s,(0,r.Z)({},a,{href:`https://github.com/audse/mod-system/tree/main/addons/mod_system/${t}`,title:`Open source code for \`${t}\``}),n,l.createElement("code",null,t))}i.SeeTheCode=function(e){return l.createElement(i,e,"See the code at ")};const c="https://docs.godotengine.org/en/stable";function d(e){return e.toLowerCase().replace(/#([_-\w]+)/gim,(e=>e.replace(/_/gim,"-")))}function p(e){const{cls:t,...n}=e;return l.createElement(s,(0,r.Z)({},n,{style:{...n.style,whiteSpace:"nowrap"},href:d(`${c}/classes/class_${t}.html`),title:`Open Godot Documentation for \`${t}\``}),l.createElement("code",null,t))}function u(e){const{cls:t,method:n,...a}=e;return l.createElement(s,(0,r.Z)({},a,{href:d(`${c}/classes/class_${t}.html#class-${t}-method-${n}`),title:`Open Godot Documentation for \`${t}.${n}()\``}),l.createElement("code",null,t,".",n,"()"))}const m={textAlign:"left",width:"fit-content"},h={textAlign:"left",width:"100%"};function k(e){const{type:t,defaultValue:n,exported:r,computed:a,children:o,...s}=e;return l.createElement("table",s,l.createElement("tbody",null,t&&l.createElement("tr",null,l.createElement("th",{style:m},"Type"),l.createElement("td",{style:h},t)),n&&l.createElement("tr",null,l.createElement("th",{style:m},"Default"),l.createElement("td",{style:h},n||"-")),o))}function f(e){const{children:t,...n}=e,r={textAlign:"left"};return l.createElement("table",n,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{style:r},"Name"),l.createElement("th",{style:r},"Type"),l.createElement("th",{style:{...r,width:"100%"}},"Description"))),l.createElement("tbody",null,t))}function g(e){const{name:t,type:n,description:r,children:a,...o}=e;return l.createElement("tr",o,l.createElement("td",null,l.createElement("code",null,t)),n&&l.createElement("td",null,n),r&&l.createElement("td",null,r),a&&Array.isArray(a)?a.map((e=>l.createElement("td",null,e))):a)}function y(e){const{href:t,children:n,...o}=e;return l.createElement(a.Z,(0,r.Z)({href:`/docs/${t}`},o),l.createElement("code",null,n))}function T(e){const{href:t,cls:n,children:a,method:o,property:s,...i}=e,c=e=>l.createElement(y,(0,r.Z)({href:`api/${t}${e.href?`#${e.href}`:""}`},i),n,e.children);return o?l.createElement(c,{href:o},".",o,"()"):s?l.createElement(c,{href:s},".",s):l.createElement(c,null)}function E(e){const{href:t,...n}=e;return l.createElement(T,(0,r.Z)({href:`resources/${t}`},n))}function Z(e){const{href:t,...n}=e;return l.createElement(T,(0,r.Z)({href:`singletons/${t}`},n))}function P(e){const{href:t,...n}=e;return l.createElement(T,(0,r.Z)({href:`utils/${t}`},n))}k.Row=e=>{const{children:t,th:n,td:r,...a}=e;return l.createElement("tr",a,l.createElement("th",{style:m},n),l.createElement("td",{style:h},r),t)},k.Type=function(e){const{children:t,...n}=e;return l.createElement(k.Row,(0,r.Z)({th:"Type",td:t},n))},k.Default=function(e){const{children:t,...n}=e;return l.createElement(k.Row,(0,r.Z)({th:"Default",td:t},n))},k.Description=function(e){const{children:t,...n}=e;return l.createElement(k.Row,(0,r.Z)({th:"Description",td:t},n))},g.Type=function(e){return l.createElement("td",e)},g.Description=function(e){return l.createElement("td",e)},f.Row=g;const v={Mod:e=>l.createElement(E,(0,r.Z)({href:"mod"},e,{cls:"Mod"})),ModAsset:e=>l.createElement(E,(0,r.Z)({href:"mod-asset"},e,{cls:"ModAsset"})),ModInstance:e=>l.createElement(E,(0,r.Z)({href:"mod-instance"},e,{cls:"ModInstance"})),ModInstanceScript:e=>l.createElement(E,(0,r.Z)({href:"mod-instance-script"},e,{cls:"ModInstanceScript"})),ModScript:e=>l.createElement(E,(0,r.Z)({href:"mod-script"},e,{cls:"ModScript"})),ModSettings:e=>l.createElement(E,(0,r.Z)({href:"mod-settings"},e,{cls:"ModSettings"})),RegisteredClass:e=>l.createElement(E,(0,r.Z)({href:"registered-class"},e,{cls:"RegisteredClass"})),ModClassDB:e=>l.createElement(Z,(0,r.Z)({href:"mod-class-db"},e,{cls:"ModClassDB"})),ModLoader:e=>l.createElement(Z,(0,r.Z)({href:"mod-loader"},e,{cls:"ModLoader"})),ModSystem:e=>l.createElement(Z,(0,r.Z)({href:"mod-system"},e,{cls:"ModSystem"})),ModContentLoader:e=>l.createElement(P,(0,r.Z)({href:"mod-content-loader"},e,{cls:"ModContentLoader"})),ModZipReader:e=>l.createElement(P,(0,r.Z)({href:"mod-zip-reader"},e,{cls:"ModZipReader"}))}},6212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),l=n(7294),a=n(3905),o=n(9625);const s={description:"Adds functionality to ZIPReader"},i="ModZipReader",c={unversionedId:"api/utilities/mod-zip-reader",id:"api/utilities/mod-zip-reader",title:"ModZipReader",description:"Adds functionality to ZIPReader",source:"@site/docs/api/utilities/mod-zip-reader.md",sourceDirName:"api/utilities",slug:"/api/utilities/mod-zip-reader",permalink:"/mod-system-docs/docs/api/utilities/mod-zip-reader",draft:!1,tags:[],version:"current",frontMatter:{description:"Adds functionality to ZIPReader"},sidebar:"tutorialSidebar",previous:{title:"ModSystemProjectSettings",permalink:"/mod-system-docs/docs/api/utilities/mod-system-project-settings"}},d={},p=[{value:"Description",id:"description",level:2},{value:"Signals",id:"signals",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"read",id:"read",level:3},{value:"exists",id:"exists",level:3},{value:"read_string",id:"read_string",level:3},{value:"read_resource",id:"read_resource",level:3},{value:"read_script",id:"read_script",level:3},{value:"read_json",id:"read_json",level:3},{value:"read_image",id:"read_image",level:3}],u={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modzipreader"},"ModZipReader"),(0,a.kt)(o.al.SeeTheCode,{script:"utils/zip_reader.gd"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits ",(0,a.kt)(o.eh,{cls:"ZIPReader",mdxType:"GodotClassLink"}))),(0,a.kt)("p",null,"This class is an extension of the native Godot ",(0,a.kt)(o.eh,{cls:"ZIPReader",mdxType:"GodotClassLink"}),". It handles reading files and resources from inside ZIPs."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"signals"},"Signals"),(0,a.kt)("p",null,"None"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"None"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"read"},"read"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func read(path: String, callback: Callable) -> unknown:\n")),(0,a.kt)("p",null,"Opens a ZIP file and handles the contents."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": This is a static function and should be called directly on ",(0,a.kt)("inlineCode",{parentName:"p"},"ModZipReader"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to the ZIP to open."),(0,a.kt)(o.SP.Row,{name:"callback"},(0,a.kt)(l.Fragment,null,(0,a.kt)(o.eh,{cls:"Callable",mdxType:"GodotClassLink"}),(0,a.kt)("br",null),"Should accept two arguments:",(0,a.kt)("ol",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"reader"),": ",(0,a.kt)("code",null,"ModZipReader")),(0,a.kt)("li",null,(0,a.kt)("code",null,"paths"),": ",(0,a.kt)(o.eh,{cls:"PackedStringArray",mdxType:"GodotClassLink"}))),"Can return anything."),(0,a.kt)(l.Fragment,null,"After opening the ZIP, this function will be called with arguments:",(0,a.kt)("ol",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"self")),(0,a.kt)("li",null,"The result of ",(0,a.kt)(o.Ac,{cls:"ZIPReader",method:"get_files",mdxType:"GodotMethodLink"})))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,"unknown"),(0,a.kt)(o.Z9.Default,null,(0,a.kt)("code",null,"void")),(0,a.kt)(o.Z9.Description,null,"Will return the result of the ",(0,a.kt)("code",null,"callback")," function.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"exists"},"exists"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"func exists(path: String) -> bool\n")),(0,a.kt)("p",null,"Checks if a file exists at the given path inside the opened ZIP."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to check.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,(0,a.kt)("code",null,"bool")),(0,a.kt)(o.Z9.Description,null,(0,a.kt)("code",null,"true")," if there is a non-empty file at the given path.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_string"},"read_string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"func read_string(path: String) -> String\n")),(0,a.kt)("p",null,"Reads the contents of the file at the given path as a ",(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to read from.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"})),(0,a.kt)(o.Z9.Description,null,"The contents of the file.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_resource"},"read_resource"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"func read_resource(path: String) -> Resource\n")),(0,a.kt)("p",null,"Reads the contents of the file at the given path as a ",(0,a.kt)(o.eh,{cls:"Resource",mdxType:"GodotClassLink"}),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to read from.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,(0,a.kt)(o.eh,{cls:"Resource",mdxType:"GodotClassLink"})),(0,a.kt)(o.Z9.Description,null,"The resource at the given path.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_script"},"read_script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"func read_script(path: String) -> GDScript\n")),(0,a.kt)("p",null,"Reads the contents of the file at the given path as a ",(0,a.kt)(o.eh,{cls:"GDScript",mdxType:"GodotClassLink"}),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to read from.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,(0,a.kt)(o.eh,{cls:"GDScript",mdxType:"GodotClassLink"})),(0,a.kt)(o.Z9.Description,null,"The script at the given path.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_json"},"read_json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"func read_json(path: String) -> Dictionary\n")),(0,a.kt)("p",null,"Reads the contents of the file at the given path as a JSON ",(0,a.kt)(o.eh,{cls:"Dictionary",mdxType:"GodotClassLink"}),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to read from.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,(0,a.kt)(o.eh,{cls:"Dictionary",mdxType:"GodotClassLink"})),(0,a.kt)(o.Z9.Description,null,"The JSON at the given path.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"read_image"},"read_image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gdscript"},"func read_image(path: String) -> ImageTexture\n")),(0,a.kt)("p",null,"Reads the contents of the file at the given path as an ",(0,a.kt)(o.eh,{cls:"ImageTexture",mdxType:"GodotClassLink"}),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)(o.SP,{mdxType:"Params"},(0,a.kt)(o.SP.Row,{name:"path"},(0,a.kt)(o.eh,{cls:"String",mdxType:"GodotClassLink"}),"The path to read from.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)(o.Z9,{mdxType:"Property"},(0,a.kt)(o.Z9.Type,null,(0,a.kt)(o.eh,{cls:"ImageTexture",mdxType:"GodotClassLink"})),(0,a.kt)(o.Z9.Description,null,"The image at the given path.")))}h.isMDXComponent=!0}}]);
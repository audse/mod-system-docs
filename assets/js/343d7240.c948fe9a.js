"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=s,h=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9625:(e,t,n)=>{n.d(t,{wT:()=>P,eh:()=>m,Ac:()=>p,SP:()=>k,Z9:()=>g,al:()=>i});var r=n(7462),s=n(7294),o=n(9960);function a(e){return s.createElement("span",{role:"img",style:{mask:`url("/mod-system-docs/img/${e.name}.svg")`,WebkitMaskImage:`url("/mod-system-docs/img/${e.name}.svg")`,width:"0.9em",height:"0.9em",background:"currentColor",display:"inline-block",verticalAlign:"text-top",...e.style}})}function l(e){const{children:t,...n}=e;return s.createElement(o.Z,(0,r.Z)({target:"_blank",rel:"noopener noreferrer"},n),t,s.createElement(a,{name:"arrow-up-right-from-square","aria-label":"Open in new tab",style:{textDecoration:"none",...t&&{marginLeft:"0.25rem"}}}))}function i(e){const{script:t,children:n,...o}=e;return s.createElement(l,(0,r.Z)({},o,{href:`https://github.com/audse/mod-system/tree/main/addons/mod_system/${t}`,title:`Open source code for \`${t}\``}),n,s.createElement("code",null,t))}i.SeeTheCode=function(e){return s.createElement(i,e,"See the code at ")};const c="https://docs.godotengine.org/en/stable";function d(e){return e.toLowerCase().replace(/#([_-\w]+)/gim,(e=>e.replace(/_/gim,"-")))}function m(e){const{cls:t,...n}=e;return s.createElement(l,(0,r.Z)({},n,{style:{...n.style,whiteSpace:"nowrap"},href:d(`${c}/classes/class_${t}.html`),title:`Open Godot Documentation for \`${t}\``}),s.createElement("code",null,t))}function p(e){const{cls:t,method:n,...o}=e;return s.createElement(l,(0,r.Z)({},o,{href:d(`${c}/classes/class_${t}.html#class-${t}-method-${n}`),title:`Open Godot Documentation for \`${t}.${n}()\``}),s.createElement("code",null,t,".",n,"()"))}const u={textAlign:"left",width:"fit-content"},h={textAlign:"left",width:"100%"};function g(e){const{type:t,defaultValue:n,exported:r,computed:o,children:a,...l}=e;return s.createElement("table",l,s.createElement("tbody",null,t&&s.createElement("tr",null,s.createElement("th",{style:u},"Type"),s.createElement("td",{style:h},t)),n&&s.createElement("tr",null,s.createElement("th",{style:u},"Default"),s.createElement("td",{style:h},n||"-")),a))}function k(e){const{children:t,...n}=e,r={textAlign:"left"};return s.createElement("table",n,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{style:r},"Name"),s.createElement("th",{style:r},"Type"),s.createElement("th",{style:{...r,width:"100%"}},"Description"))),s.createElement("tbody",null,t))}function y(e){const{name:t,type:n,description:r,children:o,...a}=e;return s.createElement("tr",a,s.createElement("td",null,s.createElement("code",null,t)),n&&s.createElement("td",null,n),r&&s.createElement("td",null,r),o&&Array.isArray(o)?o.map((e=>s.createElement("td",null,e))):o)}function f(e){const{href:t,children:n,...a}=e;return s.createElement(o.Z,(0,r.Z)({href:`/docs/${t}`},a),s.createElement("code",null,n))}function _(e){const{href:t,cls:n,children:o,method:a,property:l,...i}=e,c=e=>s.createElement(f,(0,r.Z)({href:`api/${t}${e.href?`#${e.href}`:""}`},i),n,e.children);return a?s.createElement(c,{href:a},".",a,"()"):l?s.createElement(c,{href:l},".",l):s.createElement(c,null)}function v(e){const{href:t,...n}=e;return s.createElement(_,(0,r.Z)({href:`resources/${t}`},n))}function E(e){const{href:t,...n}=e;return s.createElement(_,(0,r.Z)({href:`singletons/${t}`},n))}function S(e){const{href:t,...n}=e;return s.createElement(_,(0,r.Z)({href:`utils/${t}`},n))}g.Row=e=>{const{children:t,th:n,td:r,...o}=e;return s.createElement("tr",o,s.createElement("th",{style:u},n),s.createElement("td",{style:h},r),t)},g.Type=function(e){const{children:t,...n}=e;return s.createElement(g.Row,(0,r.Z)({th:"Type",td:t},n))},g.Default=function(e){const{children:t,...n}=e;return s.createElement(g.Row,(0,r.Z)({th:"Default",td:t},n))},g.Description=function(e){const{children:t,...n}=e;return s.createElement(g.Row,(0,r.Z)({th:"Description",td:t},n))},y.Type=function(e){return s.createElement("td",e)},y.Description=function(e){return s.createElement("td",e)},k.Row=y;const P={Mod:e=>s.createElement(v,(0,r.Z)({href:"mod"},e,{cls:"Mod"})),ModAsset:e=>s.createElement(v,(0,r.Z)({href:"mod-asset"},e,{cls:"ModAsset"})),ModInstance:e=>s.createElement(v,(0,r.Z)({href:"mod-instance"},e,{cls:"ModInstance"})),ModInstanceScript:e=>s.createElement(v,(0,r.Z)({href:"mod-instance-script"},e,{cls:"ModInstanceScript"})),ModScript:e=>s.createElement(v,(0,r.Z)({href:"mod-script"},e,{cls:"ModScript"})),ModSettings:e=>s.createElement(v,(0,r.Z)({href:"mod-settings"},e,{cls:"ModSettings"})),RegisteredClass:e=>s.createElement(v,(0,r.Z)({href:"registered-class"},e,{cls:"RegisteredClass"})),ModClassDB:e=>s.createElement(E,(0,r.Z)({href:"mod-class-db"},e,{cls:"ModClassDB"})),ModLoader:e=>s.createElement(E,(0,r.Z)({href:"mod-loader"},e,{cls:"ModLoader"})),ModSystem:e=>s.createElement(E,(0,r.Z)({href:"mod-system"},e,{cls:"ModSystem"})),ModContentLoader:e=>s.createElement(S,(0,r.Z)({href:"mod-content-loader"},e,{cls:"ModContentLoader"})),ModZipReader:e=>s.createElement(S,(0,r.Z)({href:"mod-zip-reader"},e,{cls:"ModZipReader"}))}},4190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(7462),s=n(7294),o=n(3905),a=n(9625);const l={description:"Mod System specific project settings"},i="ModSystemProjectSettings",c={unversionedId:"api/utilities/mod-system-project-settings",id:"api/utilities/mod-system-project-settings",title:"ModSystemProjectSettings",description:"Mod System specific project settings",source:"@site/docs/api/utilities/mod-system-project-settings.md",sourceDirName:"api/utilities",slug:"/api/utilities/mod-system-project-settings",permalink:"/mod-system-docs/docs/api/utilities/mod-system-project-settings",draft:!1,tags:[],version:"current",frontMatter:{description:"Mod System specific project settings"},sidebar:"tutorialSidebar",previous:{title:"ModSystemLogger",permalink:"/mod-system-docs/docs/api/utilities/mod-system-logger"},next:{title:"ModZipReader",permalink:"/mod-system-docs/docs/api/utilities/mod-zip-reader"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Constants",id:"constants",level:2},{value:"Settings",id:"settings",level:3},{value:"Methods",id:"methods",level:2},{value:"update_project_settings",id:"update_project_settings",level:3},{value:"get_mod_dirs",id:"get_mod_dirs",level:3},{value:"set_mod_dirs",id:"set_mod_dirs",level:3},{value:"get_mod_settings_save_path",id:"get_mod_settings_save_path",level:3},{value:"set_mod_settings_save_path",id:"set_mod_settings_save_path",level:3}],p={toc:m},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modsystemprojectsettings"},"ModSystemProjectSettings"),(0,o.kt)(a.al.SeeTheCode,{script:"utils/settings.gd"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inherits ",(0,o.kt)(a.eh,{cls:"Object",mdxType:"GodotClassLink"}))),(0,o.kt)("p",null,"This class handles the custom ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"})," related to the Mod System addon."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"constants"},"Constants"),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},'const Settings := {\n    ModDirs = {\n        Path = "mod_system/mod_dirs",\n        Default = "user://mods",\n        Info = {\n            name = "mod_system/mod_dirs",\n            type = TYPE_STRING,\n            hint = PROPERTY_HINT_PLACEHOLDER_TEXT,\n            hint_string = "(e.g. user://mods, res://content)"\n        }\n    },\n    ModSettingsSavePath = {\n        Path = "mod_system/mod_settings_save_path",\n        Default = "user://mod_settings.tres",\n        Info = {\n            name = "mod_system/mod_settings_save_path",\n            type = TYPE_STRING,\n            hint = PROPERTY_HINT_SAVE_FILE,\n        }\n    },\n}\n')),(0,o.kt)("p",null,"A dictionary containing the settings related to the mod system addon. Follows this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},'{\n    [key: String]: {\n        "Path": String,\n        "Default": Variant,\n        "Info": {\n            "name": String, # same as Path\n            "type": Variant.Type,\n            "hint": @GlobalScope.PropertyHint, # optional\n            "hint_string": String, # optional\n        }\n    }\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)(a.Ac,{cls:"ProjectSettings",method:"add_property_info",mdxType:"GodotMethodLink"})," for more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Info"')," value."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"update_project_settings"},"update_project_settings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func update_project_settings() -> void\n")),(0,o.kt)("p",null,"Adds ",(0,o.kt)("inlineCode",{parentName:"p"},'"mod_system/mod_dirs"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"mod_system/mod_settings_save_path"')," to ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"}),", if they are not already there."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"None"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"get_mod_dirs"},"get_mod_dirs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func get_mod_dirs() -> PackedStringArray\n")),(0,o.kt)("p",null,"Retrieves all directories listed in ",(0,o.kt)("inlineCode",{parentName:"p"},'"mod_system/mod_dirs"')," in ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"}),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"None"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)(a.Z9,{mdxType:"Property"},(0,o.kt)(a.Z9.Type,null,(0,o.kt)(a.eh,{cls:"PackedStringArray",mdxType:"GodotClassLink"})),(0,o.kt)(a.Z9.Description,null,"A list of directories.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"set_mod_dirs"},"set_mod_dirs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func set_mod_dirs(dirs: PackedStringArray) -> void\n")),(0,o.kt)("p",null,"Sets ",(0,o.kt)("inlineCode",{parentName:"p"},'"mod_system/mod_dirs"')," in ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"})," to the provided value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)(a.SP,{mdxType:"Params"},(0,o.kt)(a.SP.Row,{name:"dirs"},(0,o.kt)(a.eh,{cls:"PackedStringArray",mdxType:"GodotClassLink"}),(0,o.kt)(s.Fragment,null,"The directories to save in ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"get_mod_settings_save_path"},"get_mod_settings_save_path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func get_mod_settings_save_path() -> String\n")),(0,o.kt)("p",null,"Retrieves ",(0,o.kt)("inlineCode",{parentName:"p"},'"mod_system/mod_settings_save_path"')," from ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"}),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",null,"None"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)(a.Z9,{mdxType:"Property"},(0,o.kt)(a.Z9.Type,null,(0,o.kt)(a.eh,{cls:"String",mdxType:"GodotClassLink"})),(0,o.kt)(a.Z9.Description,null,"The save path.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"set_mod_settings_save_path"},"set_mod_settings_save_path"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},"static func set_mod_settings_save_path(save_path: String) -> void\n")),(0,o.kt)("p",null,"Sets ",(0,o.kt)("inlineCode",{parentName:"p"},'"mod_system/mod_settings_save_path"')," in ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"})," to the provided value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)(a.SP,{mdxType:"Params"},(0,o.kt)(a.SP.Row,{name:"save_path"},(0,o.kt)(a.eh,{cls:"String",mdxType:"GodotClassLink"}),(0,o.kt)(s.Fragment,null,"The path to save in ",(0,o.kt)(a.eh,{cls:"ProjectSettings",mdxType:"GodotClassLink"})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")))}h.isMDXComponent=!0}}]);
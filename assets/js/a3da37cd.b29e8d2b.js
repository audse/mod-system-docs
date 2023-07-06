"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[524],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?i.createElement(h,s(s({ref:t},c),{},{components:r})):i.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={},s="ModScript",o={unversionedId:"api/resources/mod_script",id:"api/resources/mod_script",title:"ModScript",description:"The ModScript class is an extension of the GDScript class in the Godot game engine. It serves as a container for a script to be used as the instancescript of a Mod. When a ModScript is created, it automatically registers the associated class to the ModClassDB, saving the new RegisteredClass in the registeredclass variable.",source:"@site/docs/api/resources/mod_script.md",sourceDirName:"api/resources",slug:"/api/resources/mod_script",permalink:"/docs/api/resources/mod_script",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ModInstanceScript",permalink:"/docs/api/resources/mod_instance_script"},next:{title:"ModSettings",permalink:"/docs/api/resources/mod_settings"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"registered_class: RegisteredClass",id:"registered_class-registeredclass",level:3},{value:"Methods",id:"methods",level:2},{value:"_init(script: GDScript) -&gt; void",id:"_initscript-gdscript---void",level:3},{value:"static load_script(path: String) -&gt; ModScript",id:"static-load_scriptpath-string---modscript",level:3},{value:"_to_string() -&gt; String",id:"_to_string---string",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modscript"},"ModScript"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ModScript")," class is an extension of the ",(0,n.kt)("inlineCode",{parentName:"p"},"GDScript")," class in the Godot game engine. It serves as a container for a script to be used as the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance_script")," of a ",(0,n.kt)("inlineCode",{parentName:"p"},"Mod"),". When a ",(0,n.kt)("inlineCode",{parentName:"p"},"ModScript")," is created, it automatically registers the associated class to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ModClassDB"),", saving the new ",(0,n.kt)("inlineCode",{parentName:"p"},"RegisteredClass")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"registered_class")," variable."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"registered_class-registeredclass"},"registered_class: RegisteredClass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": The associated ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," of the script."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": RegisteredClass")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_initscript-gdscript---void"},"_init(script: GDScript) -> void"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Initializes the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModScript")," with the provided ",(0,n.kt)("inlineCode",{parentName:"li"},"GDScript")," object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"script")," (GDScript): The GDScript object associated with the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModScript"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": void"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note"),": This method registers the script class to the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModClassDB")," and saves the resulting ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," in the ",(0,n.kt)("inlineCode",{parentName:"li"},"registered_class")," variable. The script's source code is also assigned to the ",(0,n.kt)("inlineCode",{parentName:"li"},"GDScript.source_code")," property.")),(0,n.kt)("h3",{id:"static-load_scriptpath-string---modscript"},"static load_script(path: String) -> ModScript"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Creates a new ",(0,n.kt)("inlineCode",{parentName:"li"},"ModScript")," object from the GDScript file at the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," and registers it with the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModClassDB"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path")," (String): The path to the GDScript file."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ModScript or null"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note"),": This is a static method that can be called directly on the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModScript")," class. It loads the GDScript resource at the given path using the ",(0,n.kt)("inlineCode",{parentName:"li"},"ResourceLoader"),", checks if it is a valid GDScript object, and creates a new ",(0,n.kt)("inlineCode",{parentName:"li"},"ModScript")," instance if successful. If the resource cannot be loaded or is not a GDScript, it returns ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,n.kt)("h3",{id:"_to_string---string"},"_to_string() -> String"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Returns a string representation of the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModScript")," object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": String"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note"),": This method overrides the ",(0,n.kt)("inlineCode",{parentName:"li"},"_to_string")," method of the ",(0,n.kt)("inlineCode",{parentName:"li"},"GDScript"),' class and replaces occurrences of "GDScript" with "ModScript" in the output string.')))}m.isMDXComponent=!0}}]);
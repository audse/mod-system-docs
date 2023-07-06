"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[5135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,g=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},s="RegisteredClass",l={unversionedId:"api/resources/registered-class",id:"api/resources/registered-class",title:"RegisteredClass",description:"The RegisteredClass class represents a registered class in the ModClassDB. It defines a script associated with a unique class name and provides information about the class, including its name, the script it is associated with, and its parent class.",source:"@site/docs/api/resources/registered-class.md",sourceDirName:"api/resources",slug:"/api/resources/registered-class",permalink:"/mod-system-docs/docs/api/resources/registered-class",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ModSettings",permalink:"/mod-system-docs/docs/api/resources/mod_settings"},next:{title:"Singletons",permalink:"/mod-system-docs/docs/category/singletons"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"name: StringName",id:"name-stringname",level:3},{value:"cls: Script",id:"cls-script",level:3},{value:"parent: RegisteredClass",id:"parent-registeredclass",level:3},{value:"Methods",id:"methods",level:2},{value:"_init(name_value: StringName, cls_value: Script, parent_value: RegisteredClass = null): void",id:"_initname_value-stringname-cls_value-script-parent_value-registeredclass--null-void",level:3},{value:"from_script(script: GDScript): RegisteredClass",id:"from_scriptscript-gdscript-registeredclass",level:3},{value:"has_ancestor(ancestor: RegisteredClass): bool",id:"has_ancestorancestor-registeredclass-bool",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registeredclass"},"RegisteredClass"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"RegisteredClass")," class represents a registered class in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/singletons/mod-class-db"},(0,n.kt)("inlineCode",{parentName:"a"},"ModClassDB")),". It defines a script associated with a unique class name and provides information about the class, including its name, the script it is associated with, and its parent class."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"name-stringname"},"name: StringName"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": The unique name of the registered class. It can be either the ",(0,n.kt)("inlineCode",{parentName:"li"},"Script")," resource path or an explicitly provided name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": StringName")),(0,n.kt)("h3",{id:"cls-script"},"cls: Script"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": The ",(0,n.kt)("inlineCode",{parentName:"li"},"Script")," instance associated with the registered class."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": Script")),(0,n.kt)("h3",{id:"parent-registeredclass"},"parent: RegisteredClass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": The parent class of the registered class. It is another ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," object."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": RegisteredClass"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"null"))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"_initname_value-stringname-cls_value-script-parent_value-registeredclass--null-void"},"_init(name_value: StringName, cls_value: Script, parent_value: RegisteredClass = null): void"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Initializes a new ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," object with the given ",(0,n.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cls"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"parent"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name_value")," (StringName): The unique name of the registered class."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cls_value")," (Script): The ",(0,n.kt)("inlineCode",{parentName:"li"},"Script")," instance associated with the registered class."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parent_value")," (RegisteredClass, optional): The parent class of the registered class. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),".")))),(0,n.kt)("h3",{id:"from_scriptscript-gdscript-registeredclass"},"from_script(script: GDScript): RegisteredClass"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Creates a new ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," object by parsing the class name from the ",(0,n.kt)("inlineCode",{parentName:"li"},"GDScript")," script's ",(0,n.kt)("inlineCode",{parentName:"li"},"class_name")," declaration or the ",(0,n.kt)("inlineCode",{parentName:"li"},"resource_path")," if the class name is empty. It also parses the parent class from the ",(0,n.kt)("inlineCode",{parentName:"li"},"extends")," declaration."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"script")," (GDScript): The ",(0,n.kt)("inlineCode",{parentName:"li"},"GDScript")," instance representing the script."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": RegisteredClass")),(0,n.kt)("h3",{id:"has_ancestorancestor-registeredclass-bool"},"has_ancestor(ancestor: RegisteredClass): bool"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Checks whether the ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," or any of its parent classes is the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"ancestor")," class."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ancestor")," (RegisteredClass): The ",(0,n.kt)("inlineCode",{parentName:"li"},"RegisteredClass")," representing the ancestor class to check."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": bool")))}m.isMDXComponent=!0}}]);
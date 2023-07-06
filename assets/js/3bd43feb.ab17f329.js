"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[1873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=d(a),g=s,k=c["".concat(p,".").concat(g)]||c[g]||m[g]||n;return a?r.createElement(k,i(i({ref:t},o),{},{components:a})):r.createElement(k,i({ref:t},o))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=a(7462),s=(a(7294),a(3905));const n={},i="ModClassDB",l={unversionedId:"api/singletons/mod-class-db",id:"api/singletons/mod-class-db",title:"ModClassDB",description:"A database of extensible classes",source:"@site/docs/api/singletons/mod-class-db.md",sourceDirName:"api/singletons",slug:"/api/singletons/mod-class-db",permalink:"/mod-system-docs/docs/api/singletons/mod-class-db",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Singletons",permalink:"/mod-system-docs/docs/category/singletons"},next:{title:"ModLoader",permalink:"/mod-system-docs/docs/api/singletons/mod-loader"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Signals",id:"signals",level:2},{value:"class_registered",id:"class_registered",level:3},{value:"class_unregistered",id:"class_unregistered",level:3},{value:"Properties",id:"properties",level:2},{value:"registered_classes",id:"registered_classes",level:3},{value:"Methods",id:"methods",level:2},{value:"register",id:"register",level:3},{value:"register_with_name",id:"register_with_name",level:3},{value:"unregister",id:"unregister",level:3},{value:"is_class_name_registered",id:"is_class_name_registered",level:3},{value:"is_script_registered",id:"is_script_registered",level:3},{value:"get_by_name",id:"get_by_name",level:3},{value:"get_by_script",id:"get_by_script",level:3}],o={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"modclassdb"},"ModClassDB"),(0,s.kt)("h3",null,"A database of extensible classes"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/audse/mod-system/tree/main/addons/mod_system/autoload/mod_class_db.gd"},(0,s.kt)("strong",{parentName:"a"},"See the code at ",(0,s.kt)("inlineCode",{parentName:"strong"},"mod_class_db.gd")))),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Inherits ",(0,s.kt)("inlineCode",{parentName:"strong"},"Node"))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB")," class is a ",(0,s.kt)("strong",{parentName:"p"},"singleton")," that serves as a database of all classes registered to ModSystem. It provides methods for registering classes, unregistering classes, and querying registered classes. "),(0,s.kt)("p",null,"This class allows ModSystem to keep track of classes that can be extended, modified, or referenced by mods."),(0,s.kt)("p",null,"Game developers who want their classes to be modifiable through ModSystem need to ensure that they register their classes with the ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB")," so that mods can interact with them."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"signals"},"Signals"),(0,s.kt)("h3",{id:"class_registered"},"class_registered"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"signal class_registered(cls: RegisteredClass)\n")),(0,s.kt)("p",null,"This signal is emitted when a class is registered to ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cls")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/resources/registered-class"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The just-registered class.")))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"class_unregistered"},"class_unregistered"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"signal class_unregistered(cls: RegisteredClass)\n")),(0,s.kt)("p",null,"This signal is emitted when a class is unregistered from ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cls")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/resources/registered-class"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The just-unregistered class.")))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"registered_classes"},"registered_classes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"var registered_classes: Array[RegisteredClass]\n")),(0,s.kt)("p",null,"An array that holds the current registered classes."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Array"),"[",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass")),"]"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"register"},"register"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func register(script: GDScript) -> RegisteredClass\n")),(0,s.kt)("p",null,"Registers a class to ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB"),", enabling use in ModSystem."),(0,s.kt)("p",null,"This method creates a ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," object for the class and adds it to the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array. The ",(0,s.kt)("a",{parentName:"p",href:"#class_registered"},(0,s.kt)("inlineCode",{parentName:"a"},"class_registered"))," signal is emitted after registration."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),"\n| Name     | Type       | Description                                   |\n| :------- | :--------- | :-------------------------------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"script")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"GDScript")," | The GDScript script of the class to register. |"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),"\n| Type                   | Description                |\n| :--------------------- | :------------------------- |\n| ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," | The just-registered class. |"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"register_with_name"},"register_with_name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func register_with_name(cls: StringName, script: GDScript) -> RegisteredClass\n")),(0,s.kt)("p",null,"Registers a class to ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB")," with the given name, enabling use in ModSystem."),(0,s.kt)("p",null,"This method creates a ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," object for the class and adds it to the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array. The ",(0,s.kt)("a",{parentName:"p",href:"#class_registered"},(0,s.kt)("inlineCode",{parentName:"a"},"class_registered"))," signal is emitted after registration."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),"\n| Name     | Type         | Description                                                                  |\n| :------- | :----------- | :--------------------------------------------------------------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"cls"),"    | ",(0,s.kt)("inlineCode",{parentName:"p"},"StringName")," | The name to use when registering the class. See ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass.name")),". |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"script")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"GDScript"),"   | The GDScript script of the class to register.                                |"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),"\n| Type                   | Description                |\n| :--------------------- | :------------------------- |\n| ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," | The just-registered class. |"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"unregister"},"unregister"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func unregister(cls: StringName) -> void\n")),(0,s.kt)("p",null,"Unregisters a class from ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB"),", disabling use in ModSystem."),(0,s.kt)("p",null,"This method removes the corresponding ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," object from the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array. The ",(0,s.kt)("a",{parentName:"p",href:"#class_unregistered"},(0,s.kt)("inlineCode",{parentName:"a"},"class_unregistered"))," signal is emitted after unregistration."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"cls")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"StringName")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name of the class to unregister.")))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"is_class_name_registered"},"is_class_name_registered"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func is_class_name_registered(cls: StringName) -> bool\n")),(0,s.kt)("p",null,"Checks if a class name is registered with ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB"),"."),(0,s.kt)("p",null,"This method searches the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array for a matching class name and returns the result."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),"\n| Name  | Type         | Description                     |\n| :---- | :----------- | :------------------------------ |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"cls")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"StringName")," | The name of the class to check. |"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),"\n| Type   | Description                                               |\n| :----- | :-------------------------------------------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"bool")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if the class name is registered, ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," otherwise |"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"is_script_registered"},"is_script_registered"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func is_script_registered(cls: Script) -> bool\n")),(0,s.kt)("p",null,"Checks if a script is registered with ",(0,s.kt)("inlineCode",{parentName:"p"},"ModClassDB"),"."),(0,s.kt)("p",null,"This method searches the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array for a matching script and returns the result."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),"\n| Name  | Type     | Description          |\n| :---- | :------- | :------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"cls")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"Script")," | The script to check. |"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),"\n| Type   | Description                                                 |\n| :----- | :---------------------------------------------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"bool")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if the script class is registered, ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," otherwise |"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"get_by_name"},"get_by_name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func get_by_name(cls: StringName) -> RegisteredClass\n")),(0,s.kt)("p",null,"Retrieves a registered class by its name."),(0,s.kt)("p",null,"This method searches the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array for a matching class name and returns the corresponding ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," object."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),"\n| Name  | Type         | Description                        |\n| :---- | :----------- | :--------------------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"cls")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"StringName")," | The name of the class to retrieve. |"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),"\n| Type                   | Description           |\n| :--------------------- | :-------------------- |\n| ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," | The registered class. |"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"get_by_script"},"get_by_script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-gdscript"},"func get_by_script(cls: Script) -> RegisteredClass\n")),(0,s.kt)("p",null,"Retrieves a registered class by its script."),(0,s.kt)("p",null,"This method searches the ",(0,s.kt)("a",{parentName:"p",href:"#registered_classes"},(0,s.kt)("inlineCode",{parentName:"a"},"registered_classes"))," array for a matching script and returns the corresponding ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," object."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),"\n| Name  | Type     | Description             |\n| :---- | :------- | :---------------------- |\n| ",(0,s.kt)("inlineCode",{parentName:"p"},"cls")," | ",(0,s.kt)("inlineCode",{parentName:"p"},"Script")," | The script to retrieve. |"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),"\n| Type                   | Description           |\n| :--------------------- | :-------------------- |\n| ",(0,s.kt)("a",{parentName:"p",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"RegisteredClass"))," | The registered class. |"))}m.isMDXComponent=!0}}]);
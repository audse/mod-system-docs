"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[9555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},o="ModLoader",i={unversionedId:"api/singletons/mod-loader",id:"api/singletons/mod-loader",title:"ModLoader",description:"Mod discovery and loading",source:"@site/docs/api/singletons/mod-loader.md",sourceDirName:"api/singletons",slug:"/api/singletons/mod-loader",permalink:"/mod-system-docs/docs/api/singletons/mod-loader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ModClassDB",permalink:"/mod-system-docs/docs/api/singletons/mod-class-db"},next:{title:"ModSystem",permalink:"/mod-system-docs/docs/api/singletons/mod-system"}},d={},s=[{value:"Description",id:"description",level:2},{value:"Signals",id:"signals",level:2},{value:"finished_loading",id:"finished_loading",level:3},{value:"Properties",id:"properties",level:2},{value:"is_finished_loading",id:"is_finished_loading",level:3},{value:"Methods",id:"methods",level:2},{value:"load_all_mods",id:"load_all_mods",level:3},{value:"load_mod",id:"load_mod",level:3},{value:"discover_mod_paths",id:"discover_mod_paths",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modloader"},"ModLoader"),(0,r.kt)("h3",null,"Mod discovery and loading"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/audse/mod-system/tree/main/addons/mod_system/autoload/mod_loader.gd"},(0,r.kt)("strong",{parentName:"a"},"See the code at ",(0,r.kt)("inlineCode",{parentName:"strong"},"mod_loader.gd")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inherits ",(0,r.kt)("inlineCode",{parentName:"strong"},"Node"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ModLoader")," class is a singleton responsible for loading mods. Upon game start, this class:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Recursively searches for mod files (",(0,r.kt)("inlineCode",{parentName:"li"},".mod.tres")," or ",(0,r.kt)("inlineCode",{parentName:"li"},".mod.json")," files) within the directories specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},'ProjectSettings."mod_system/mod_paths"')," property"),(0,r.kt)("li",{parentName:"ol"},"Loads the mods it found"),(0,r.kt)("li",{parentName:"ol"},"Communicates with ",(0,r.kt)("a",{parentName:"li",href:"ModSystem"},(0,r.kt)("inlineCode",{parentName:"a"},"ModSystem"))," to install them using the ",(0,r.kt)("a",{parentName:"li",href:"ModSystem#install"},(0,r.kt)("inlineCode",{parentName:"a"},"ModSystem.install"))," method.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ModLoader")," class is designed to work in conjunction with the ",(0,r.kt)("a",{parentName:"p",href:"ModSystem"},(0,r.kt)("inlineCode",{parentName:"a"},"ModSystem"))," class, which manages the overall functionality and behavior of mods in the game."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"signals"},"Signals"),(0,r.kt)("h3",{id:"finished_loading"},"finished_loading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"signal finished_loading\n")),(0,r.kt)("p",null,"This signal is emitted when all mods have been loaded and installed."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"is_finished_loading"},"is_finished_loading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"var is_finished_loading: bool\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", all mods have been loaded and installed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bool")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"load_all_mods"},"load_all_mods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"func load_all_mods() -> void\n")),(0,r.kt)("p",null,"Recursively finds all mod paths that end with ",(0,r.kt)("inlineCode",{parentName:"p"},".mod.tres")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".mod.json"),", loads them, and installs them using the ",(0,r.kt)("a",{parentName:"p",href:"ModSystem#install"},(0,r.kt)("inlineCode",{parentName:"a"},"ModSystem.install"))," method."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"load_mod"},"load_mod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"func load_mod(path: String) -> Mod\n")),(0,r.kt)("p",null,"Loads a mod at the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and installs it using the ",(0,r.kt)("a",{parentName:"p",href:"ModSystem#install"},(0,r.kt)("inlineCode",{parentName:"a"},"ModSystem.install"))," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"The file path of the mod to load.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api/resources/Mod"},(0,r.kt)("inlineCode",{parentName:"a"},"Mod"))," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"The loaded mod.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"discover_mod_paths"},"discover_mod_paths"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gdscript"},"func discover_mod_paths(dirs: Array[String]) -> Array[String]\n")),(0,r.kt)("p",null,"Recursively searches each listed directory for mods and returns a list of all paths to mods."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dirs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array"),"[",(0,r.kt)("inlineCode",{parentName:"td"},"String"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"The directories to search for mods.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array"),"[",(0,r.kt)("inlineCode",{parentName:"td"},"String"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all paths to mods within the listed ",(0,r.kt)("inlineCode",{parentName:"td"},"dirs")," (recursively).")))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[5268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="ModInstance",s={unversionedId:"api/resources/mod_instance",id:"api/resources/mod_instance",title:"ModInstance",description:"The ModInstance class represents an instance of a mod granted to an object in the Mod System. It contains references to the mod, the object it is granted to, and the instance script associated with the mod.",source:"@site/docs/api/resources/mod_instance.md",sourceDirName:"api/resources",slug:"/api/resources/mod_instance",permalink:"/mod-system-docs/docs/api/resources/mod_instance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ModAsset",permalink:"/mod-system-docs/docs/api/resources/mod_asset"},next:{title:"ModInstanceScript",permalink:"/mod-system-docs/docs/api/resources/mod_instance_script"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"mod: Mod",id:"mod-mod",level:3},{value:"owner: Object",id:"owner-object",level:3},{value:"instance_script: ModInstanceScript",id:"instance_script-modinstancescript",level:3},{value:"Methods",id:"methods",level:2},{value:"grant() -&gt; void",id:"grant---void",level:3},{value:"revoke() -&gt; void",id:"revoke---void",level:3}],l={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modinstance"},"ModInstance"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ModInstance")," class represents an instance of a mod granted to an object in the Mod System. It contains references to the mod, the object it is granted to, and the instance script associated with the mod."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"mod-mod"},"mod: Mod"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": The mod associated with this instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": Mod")),(0,o.kt)("h3",{id:"owner-object"},"owner: Object"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": The object to which the mod is granted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": Object")),(0,o.kt)("h3",{id:"instance_script-modinstancescript"},"instance_script: ModInstanceScript"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": The script to be run when the mod is granted to the object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type"),": ModInstanceScript")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"grant---void"},"grant() -> void"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Grants the mod to the associated object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns"),": void"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note"),": This method executes the instance script and performs any necessary setup or modifications on the associated object.")),(0,o.kt)("h3",{id:"revoke---void"},"revoke() -> void"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description"),": Revokes the mod from the associated object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Returns"),": void"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note"),": This method reverts any changes made by the instance script and removes any modifications or effects applied to the associated object.")))}m.isMDXComponent=!0}}]);
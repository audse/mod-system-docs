"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[9279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={},s="ModAsset",o={unversionedId:"api/resources/mod_asset",id:"api/resources/mod_asset",title:"ModAsset",description:"The ModAsset class extends the Resource class in the Godot game engine. It represents an asset associated with a Mod, containing a unique identifier (key) and a reference to a loaded resource (asset). The ModAsset is loaded once per associated Mod, ensuring that all instances of the mod share the same resource. This approach simplifies asset management by allowing developers to reference assets by their key rather than worrying about individual loading or file paths.",source:"@site/docs/api/resources/mod_asset.md",sourceDirName:"api/resources",slug:"/api/resources/mod_asset",permalink:"/mod-system-docs/docs/api/resources/mod_asset",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mod",permalink:"/mod-system-docs/docs/api/resources/mod"},next:{title:"ModInstance",permalink:"/mod-system-docs/docs/api/resources/mod_instance"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"key: String",id:"key-string",level:3},{value:"asset: Resource",id:"asset-resource",level:3},{value:"Methods",id:"methods",level:2},{value:"static create(key_value: String, asset_value: Resource) -&gt; ModAsset",id:"static-createkey_value-string-asset_value-resource---modasset",level:3},{value:"static load_resource(path: String) -&gt; Resource",id:"static-load_resourcepath-string---resource",level:3},{value:"static load_image(path: String) -&gt; Texture2D",id:"static-load_imagepath-string---texture2d",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modasset"},"ModAsset"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ModAsset")," class extends the ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource")," class in the Godot game engine. It represents an asset associated with a ",(0,n.kt)("inlineCode",{parentName:"p"},"Mod"),", containing a unique identifier (",(0,n.kt)("inlineCode",{parentName:"p"},"key"),") and a reference to a loaded resource (",(0,n.kt)("inlineCode",{parentName:"p"},"asset"),"). The ",(0,n.kt)("inlineCode",{parentName:"p"},"ModAsset")," is loaded once per associated ",(0,n.kt)("inlineCode",{parentName:"p"},"Mod"),", ensuring that all instances of the mod share the same resource. This approach simplifies asset management by allowing developers to reference assets by their ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," rather than worrying about individual loading or file paths."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"key-string"},"key: String"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": An identifier for the asset, unique to the containing ",(0,n.kt)("inlineCode",{parentName:"li"},"Mod"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": String"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export"),": Yes")),(0,n.kt)("h3",{id:"asset-resource"},"asset: Resource"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": The resource associated with the asset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": Resource"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export"),": Yes")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"static-createkey_value-string-asset_value-resource---modasset"},"static create(key_value: String, asset_value: Resource) -> ModAsset"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Constructs a new ",(0,n.kt)("inlineCode",{parentName:"li"},"ModAsset")," with the given ",(0,n.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"asset"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key_value")," (String): The identifier for the asset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"asset_value")," (Resource): The resource associated with the asset."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ModAsset"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note"),": This is a static method that can be called directly on the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModAsset")," class. It creates a new ",(0,n.kt)("inlineCode",{parentName:"li"},"ModAsset")," instance, assigns the provided ",(0,n.kt)("inlineCode",{parentName:"li"},"key")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"asset")," to the corresponding properties, and returns the created ",(0,n.kt)("inlineCode",{parentName:"li"},"ModAsset")," object.")),(0,n.kt)("h3",{id:"static-load_resourcepath-string---resource"},"static load_resource(path: String) -> Resource"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Returns a resource loaded from the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"path"),", if it exists. Otherwise, returns ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path")," (String): The path to the resource file."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": Resource or null"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note"),": This is a static method that can be called directly on the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModAsset")," class. It checks if a resource exists at the given ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," using the ",(0,n.kt)("inlineCode",{parentName:"li"},"ResourceLoader")," and loads it if available. If the resource does not exist, it returns ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,n.kt)("h3",{id:"static-load_imagepath-string---texture2d"},"static load_image(path: String) -> Texture2D"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Returns a ",(0,n.kt)("inlineCode",{parentName:"li"},"Texture2D")," containing the image at the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"path"),", if it exists. Otherwise, returns ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),". This method also saves a new ",(0,n.kt)("inlineCode",{parentName:"li"},".import.tres")," file to improve loading speed for future use."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameters"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path")," (String): The path to the image file."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": Texture2D or null"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note"),": This is a static method that can be called directly on the ",(0,n.kt)("inlineCode",{parentName:"li"},"ModAsset")," class. It first attempts to load the image from the project files. If the path is relative to the project (",(0,n.kt)("inlineCode",{parentName:"li"},"res://"),"), the image is loaded using the ",(0,n.kt)("inlineCode",{parentName:"li"},"load")," function. If the image has not been imported yet, it loads the image file using ",(0,n.kt)("inlineCode",{parentName:"li"},"Image")," and creates a new ",(0,n.kt)("inlineCode",{parentName:"li"},"ImageTexture")," from it. The imported resource is saved for future use, and the ",(0,n.kt)("inlineCode",{parentName:"li"},"Texture2D")," is returned. If the image file does not exist, ",(0,n.kt)("inlineCode",{parentName:"li"},"null")," is returned.")))}c.isMDXComponent=!0}}]);
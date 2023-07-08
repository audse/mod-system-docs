"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:1},r="Mod System Overview",s={unversionedId:"overview",id:"overview",title:"Mod System Overview",description:"Overview",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/mod-system-docs/docs/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/mod-system-docs/docs/category/api-reference"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Important notes",id:"important-notes",level:3},{value:"Features",id:"features",level:2},{value:"The Lifecycle of a Mod",id:"the-lifecycle-of-a-mod",level:2},{value:"Implementation",id:"implementation",level:2},{value:"From a Game Developer&#39;s Perspective",id:"from-a-game-developers-perspective",level:3},{value:"From a Modder&#39;s Perspective",id:"from-a-modders-perspective",level:3},{value:"Class Documentation",id:"class-documentation",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mod-system-overview"},"Mod System Overview"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ModSystem is a plugin for Godot 4 that provides a framework for extending and modifying game functionality through mods."),(0,i.kt)("h3",{id:"important-notes"},"Important notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This plugin is not production-ready yet. It is still unfinished and many parts are still untested."),(0,i.kt)("li",{parentName:"ul"},"I am using the latest Godot version at all times in development. I can't guarantee backwards-compatibility at this time, but that is a goal for the future.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"This plugin offers several key features for game developers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Loading"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModLoader")," class handles the loading of mods from the file system. It scans specified mod directories, identifies mod files (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".mod.tres")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".mod.json"),"), and prepares them for registration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Registration"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModClassDB")," class is responsible for registering classes within the system. It tracks classes that should be available to mods. Classes are registered with unique identifiers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Management"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," class serves as the central hub for managing mods. It provides methods for enabling, disabling, and controlling mod execution. It also allows access to an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSettings")," class, which stores user preferences related to mod management.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Scripting"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModScript")," class extends the native ",(0,i.kt)("inlineCode",{parentName:"p"},"GDScript")," class, providing automatic class registration into ",(0,i.kt)("inlineCode",{parentName:"p"},"ModClassDB"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ModInstanceScript")," provides many virtual functions to override in Mods to affect gameplay.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resource Sharing"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModAsset")," class enables modders to share resources among instances of the same mod. Mod assets provide an organized and accessible way to load and use resources such as textures, sounds, or data files."))),(0,i.kt)("h2",{id:"the-lifecycle-of-a-mod"},"The Lifecycle of a Mod"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Loading"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModLoader")," scans designated mod directories, identifies mod files, and loads them into memory using the appropriate format (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".mod.tres")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".mod.json"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Registration"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModLoader")," communicates with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," to register the loaded mods. This step makes the mods available within the game's runtime environment.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Enabling"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," enables or disables mods based on user preferences stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSettings"),". Enabled mods are ready for execution.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Granting"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," grants mods to in-game objects, allowing them to access and modify game functionality as defined by the modder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Execution"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModInstance")," class handles execution of a mod. This class instantiates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ModInstanceScript")," that connects to various in-game hooks.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mod Revoking and Disabling"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," can revoke and disable mods, providing a mechanism for controlling the behavior and impact of mods in the game."))),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("h3",{id:"from-a-game-developers-perspective"},"From a Game Developer's Perspective"),(0,i.kt)("p",null,"This is just a quick overview on how to implement the ModSystem plugin. For more detail, check out the tutorial (COMING SOON)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Include the Mod System plugin in your Godot project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModLoader")," to scan and load mod files from designated directories during the game's initialization phase by updating your game's ",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectSettings"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModClassDB")," to register any class that you want extensible by mods. Ensure that each class has a unique identifier for seamless integration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," to manage mod enabling, disabling, and granting. Utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSettings")," resource to store user preferences related to mod management.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModSystem")," to to instantiate and execute enabled mods within the game."))),(0,i.kt)("h3",{id:"from-a-modders-perspective"},"From a Modder's Perspective"),(0,i.kt)("p",null,"This is just a quick overview on how to create a mod. For more detail, check out the tutorial (COMING SOON)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Develop your mod functionality using GDScript.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Package your mod as a mod file (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".mod.tres")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".mod.json"),"). Ensure that the file adheres to the mod file format requirements.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install your mod file in the designated mod directory specified by the game developer. This directory is scanned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModLoader")," during runtime.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Test your mod by enabling it in-game and verifying its behavior within the game."))),(0,i.kt)("h2",{id:"class-documentation"},"Class Documentation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/singletons"},"Singletons")," -  Singletons created when your game starts.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/singletons/mod-class-db"},"ModClassDB")," - Registers classes to be extensible by mods."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/singletons/mod-loader"},"ModLoader")," - Handles loading mods from the file system."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/singletons/mod-system"},"ModSystem")," - Manages mod enabling, disabling, and granting."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/"},"Resources")," - Data and asset classes.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/mod_asset"},"ModAsset")," - Stores a key and asset pair."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/mod_instance_script"},"ModInstanceScript")," - Main script run upon granting a mod."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/mod_instance"},"ModInstance")," - An instance of a mod after it's granted to an in-game object."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/mod_script"},"ModScript")," - Extension of native GDScript class that registers itself to ModClassDB."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/mod_settings"},"ModSettings")," - Stores user preferences related to mod management."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/mod"},"Mod")," - Defines a mod's metadata, assets, and behavior."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/resources/registered_class"},"RegisteredClass")," - Represents a class registered in ModClassDB."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/"},"Utilities")," - Utility & library classes.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/mod-content-loader"},"ModContentLoader")," - Content loading utilities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/mod-path"},"ModPath")," - File system path utilities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/mod-script-parser"},"ModScriptParser")," - GDScript parsing utilities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/mod-system-logger"},"ModSystemLogger")," - Logging utilities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/mod-system-project-settings"},"ModSystemProjectSettings")," - Project settings utilities."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/utilities/mod-zip-reader"},"ModZipReader")," - ZIP reading utilities.")))))}c.isMDXComponent=!0}}]);
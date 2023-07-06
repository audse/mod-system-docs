"use strict";(self.webpackChunkmod_system_docs=self.webpackChunkmod_system_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Mod System Overview","href":"/docs/overview","docId":"overview"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Resources","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Mod","href":"/docs/api/resources/mod","docId":"api/resources/mod"},{"type":"link","label":"ModAsset","href":"/docs/api/resources/mod_asset","docId":"api/resources/mod_asset"},{"type":"link","label":"ModInstance","href":"/docs/api/resources/mod_instance","docId":"api/resources/mod_instance"},{"type":"link","label":"ModInstanceScript","href":"/docs/api/resources/mod_instance_script","docId":"api/resources/mod_instance_script"},{"type":"link","label":"ModScript","href":"/docs/api/resources/mod_script","docId":"api/resources/mod_script"},{"type":"link","label":"ModSettings","href":"/docs/api/resources/mod_settings","docId":"api/resources/mod_settings"},{"type":"link","label":"RegisteredClass","href":"/docs/api/resources/registered-class","docId":"api/resources/registered-class"}],"href":"/docs/category/resources"},{"type":"category","label":"Singletons","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ModClassDB","href":"/docs/api/singletons/mod-class-db","docId":"api/singletons/mod-class-db"},{"type":"link","label":"ModLoader","href":"/docs/api/singletons/mod-loader","docId":"api/singletons/mod-loader"},{"type":"link","label":"ModSystem","href":"/docs/api/singletons/mod-system","docId":"api/singletons/mod-system"}],"href":"/docs/category/singletons"}],"href":"/docs/category/api-reference"}]},"docs":{"api/resources/mod":{"id":"api/resources/mod","title":"Mod","description":"See the code at mod.gd","sidebar":"tutorialSidebar"},"api/resources/mod_asset":{"id":"api/resources/mod_asset","title":"ModAsset","description":"The ModAsset class extends the Resource class in the Godot game engine. It represents an asset associated with a Mod, containing a unique identifier (key) and a reference to a loaded resource (asset). The ModAsset is loaded once per associated Mod, ensuring that all instances of the mod share the same resource. This approach simplifies asset management by allowing developers to reference assets by their key rather than worrying about individual loading or file paths.","sidebar":"tutorialSidebar"},"api/resources/mod_instance":{"id":"api/resources/mod_instance","title":"ModInstance","description":"The ModInstance class represents an instance of a mod granted to an object in the Mod System. It contains references to the mod, the object it is granted to, and the instance script associated with the mod.","sidebar":"tutorialSidebar"},"api/resources/mod_instance_script":{"id":"api/resources/mod_instance_script","title":"ModInstanceScript","description":"The ModInstanceScript is a script associated with a mod instance in the Mod System. It contains various virtual methods that can be overridden to customize the behavior of the mod when granted to an owner object. It also provides a logs method for logging messages with contextual information about the current mod.","sidebar":"tutorialSidebar"},"api/resources/mod_script":{"id":"api/resources/mod_script","title":"ModScript","description":"The ModScript class is an extension of the GDScript class in the Godot game engine. It serves as a container for a script to be used as the instancescript of a Mod. When a ModScript is created, it automatically registers the associated class to the ModClassDB, saving the new RegisteredClass in the registeredclass variable.","sidebar":"tutorialSidebar"},"api/resources/mod_settings":{"id":"api/resources/mod_settings","title":"ModSettings","description":"The ModSettings class is a resource that stores a user\'s preferences for their installed mods. It provides options for enabling or disabling mods, controlling cheat mod behavior, managing enabled mods, and handling logging settings.","sidebar":"tutorialSidebar"},"api/resources/registered-class":{"id":"api/resources/registered-class","title":"RegisteredClass","description":"The RegisteredClass class represents a registered class in the ModClassDB. It defines a script associated with a unique class name and provides information about the class, including its name, the script it is associated with, and its parent class.","sidebar":"tutorialSidebar"},"api/singletons/mod-class-db":{"id":"api/singletons/mod-class-db","title":"ModClassDB","description":"A database of extensible classes","sidebar":"tutorialSidebar"},"api/singletons/mod-loader":{"id":"api/singletons/mod-loader","title":"ModLoader","description":"Mod discovery and loading","sidebar":"tutorialSidebar"},"api/singletons/mod-system":{"id":"api/singletons/mod-system","title":"ModSystem","description":"A manager for installed mods","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Mod System Overview","description":"Overview","sidebar":"tutorialSidebar"}}}')}}]);
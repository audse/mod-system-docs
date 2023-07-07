---
description: 'An extension of GDScript'
---
import { GodotClassLink, GodotMethodLink, SourceLink, Property } from '/src/components'

# ModScript

<SourceLink.SeeTheCode script='resources/mod_script.gd' />

## Description

**Inherits <GodotClassLink cls='GDScript' />**

The `ModScript` class is an extension of the `GDScript` class in the Godot game engine. It serves as a container for a script to be used as the [`Mod.instance_script`](/docs/api/resources/mod#instance_script). When a `ModScript` is created, it automatically registers the associated class to the [`ModClassDB`](/docs/api/singletons/mod-class-db), saving the new [`RegisteredClass`](/docs/api/resources/registered-class).

***

## Properties

### registered_class
```gdscript
var registered_class: RegisteredClass
```

The associated [`RegisteredClass`](/docs/api/resources/registered-class) of the script.

<Property
  type={ <a href='/docs/api/resources/registered-class'><code>RegisteredClass</code></a> }
  defaultValue={ <code>null</code> } />

***

## Methods

### _init
```gdscript
func _init(script: GDScript) -> void
```

Initializes the `ModScript` with the provided <GodotClassLink cls='GDScript' /> object. This method registers the script class to [`ModClassDB`](/docs/api/singletons/mod-class-db) and saves the resulting [`RegisteredClass`](/docs/api/resources/registered-class) in the [`registered_class`](#registered_class) variable. 

This script also takes over the provided `script`, by:
- Assigning the `script`'s source code to the `GDScript.source_code` property
- Taking over the original path (see <GodotMethodLink cls='Resource' method='take_over_path' />)

**Parameters**
`script` (GDScript) The GDScript object associated with the `ModScript`.

**Returns**

`void`

**Note**

This method registers the script class to the `ModClassDB` and saves the resulting `RegisteredClass` in the `registered_class` variable. The script's source code is also assigned to the `GDScript.source_code` property.
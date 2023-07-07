---
description: 'A class accessible in ModClassDB'
---
import { SourceLink, GodotClassLink, Property, Class, Params } from '/src/components'

# RegisteredClass

<SourceLink.SeeTheCode script='resources/registered_class.gd' />

## Description

**Inherits <GodotClassLink cls='Resource' />**

The `RegisteredClass` class represents a registered class in the <Class.ModClassDB />. It defines a script associated with a unique class name and provides information about the class, including its name, the script it is associated with, and its parent class.

***

## Properties

### name
```gdscript
var name: StringName
```

The unique name of the registered class. It can be either the <GodotClassLink cls='Script' /> resource path or an explicitly provided name.

<Property>
    <Property.Type><GodotClassLink cls='StringName' /></Property.Type>
    <Property.Default />
</Property>

***

### cls
```gdscript
var cls: Script
```

The <GodotClassLink cls='Script' /> class associated with the registered class.

<Property>
    <Property.Type><GodotClassLink cls='Script' /></Property.Type>
    <Property.Default><code>null</code></Property.Default>
</Property>

***

### parent
```gdscript
var parent: RegisteredClass
```

The parent class of this registered class.

**Note**: The parent must also be registered.

<Property>
    <Property.Type><Class.RegisteredClass /></Property.Type>
    <Property.Default><code>null</code></Property.Default>
</Property>

***

## Methods

### _init
```gdscript
func _init(
    name_value: StringName, 
    cls_value: Script, 
    parent_value: RegisteredClass = null
) -> void
```

Initializes a new `RegisteredClass` object with the given [`name`](#name), [`cls`](#cls), and [`parent`](#parent).

**Parameters**

<Params>
    <Params.Row name='name_value' 
        description='The unique name of the registered class.'
        type={ <GodotClassLink cls='StringName' /> } />
    <Params.Row name='cls_value'
        description='The script class associated with the registered class.'
        type={ <GodotClassLink cls='Script' /> } />
    <Params.Row name='parent_value'
        description='The parent class of the registered class.'
        type={ <><Class.RegisteredClass />&nbsp;(optional)</> } />
</Params>

**Returns**

`void`

***

### from_script
```gdscript
from_script(script: GDScript) -> RegisteredClass
```

Creates a new `RegisteredClass` object by parsing the class name from the `GDScript` script's `class_name` declaration or the `resource_path` if the class name is empty. It also parses the parent class from the `extends` declaration.

**Parameters**

| Name     | Type       | Description                                      |
| :------- | :--------- | :----------------------------------------------- |
| `script` | `GDScript` | The `GDScript` instance representing the script. |

**Returns**

`RegisteredClass`

***

### has_ancestor
```gdscript
func has_ancestor(ancestor: RegisteredClass) -> bool
```

Checks whether the `RegisteredClass` or any of its parent classes is the specified `ancestor` class.

**Parameters**

<Params>
    <Params.Row name='ancestor' 
        description='The ancestor class to check.'
        type={ <Class.RegisteredClass /> } />
</Params>

**Returns**

`bool`
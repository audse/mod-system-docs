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
    <Params.Row name='name_value'>
        <GodotClassLink cls='StringName' />
        The unique name of the registered class.
    </Params.Row>
    <Params.Row name='cls_value'>
        <GodotClassLink cls='Script' />
        The script class associated with the registered class.
    </Params.Row>
    <Params.Row name='parent_value'>
        <><Class.RegisteredClass />&nbsp;(optional)</>
        The parent class of the registered class.
    </Params.Row>
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

<Params>
    <Params.Row name='script'>
        <GodotClassLink cls='GDScript' />
        The script class to register.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><code>RegisteredClass</code></Property.Type>
    <Property.Description>
        The new <code>RegisteredClass</code>.
    </Property.Description>
</Property>

***

### has_ancestor
```gdscript
func has_ancestor(ancestor: RegisteredClass) -> bool
```

Checks whether the `RegisteredClass` or any of its parent classes is the specified `ancestor` class.

**Parameters**

<Params>
    <Params.Row name='ancestor'>
        <Class.RegisteredClass />
        The ancestor class to check.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Description>
        <code>true</code> if this <code>RegisteredClass</code> has the given ancestory.
    </Property.Description>
</Property>
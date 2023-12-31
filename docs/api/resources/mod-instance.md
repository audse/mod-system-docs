---
description: 'An instance of a mod granted to an object'
---
import { GodotClassLink, SourceLink, Property, Params, Class } from '/src/components'

# ModInstance

<SourceLink.SeeTheCode script='resources/mod_instance.gd' />

## Description

**Inherits <GodotClassLink cls='Object' />**

The `ModInstance` class represents an instance of a mod granted to an object in the Mod System. It contains references to the mod, the object it is granted to, and the instance script associated with the mod.

***

## Properties

### mod
```gdscript
var mod: Mod
```

The mod associated with this instance.

<Property>
    <Property.Type><Class.Mod /></Property.Type>
    <Property.Default><code>null</code> }</Property.Default>
</Property>

***

### owner
```gdscript
var owner: Object
```

The object to which the mod is granted.

<Property>
    <Property.Type><GodotClassLink cls='Object' /></Property.Type>
    <Property.Default><code>null</code> }</Property.Default>
</Property>

***

### instance_script
```gdscript
var instance_script: ModInstanceScript
```

The script to be run when the mod is granted to the [`owner`](#owner).

<Property>
    <Property.Type><Class.ModInstanceScript /></Property.Type>
    <Property.Default><code>null</code> }</Property.Default>
</Property>

***

## Methods

### _init
```gdscript
func _init(mod_value: Mod, owner_value: Object) -> void
```

Initializes the mod instance with the associated mod and mod owner. The mod's <Class.Mod property='instance_script' /> is also instantiated.

**Parameters**

<Params>
    <Params.Row name='instance_value'>
        <Class.ModInstance />
        The mod instance associated with this script.
    </Params.Row>
</Params>

**Returns**

`void`

***

### grant
```gdscript
func grant() -> void
```

Grants the mod to the [`owner`](#owner). This method executes the instance script and performs any necessary setup or modifications on the [`owner`](#owner).

**Returns**

`void`

***

### revoke
```gdscript
func revoke() -> void
```

Revokes the mod from the [`owner`](#owner).

**Returns**

`void`
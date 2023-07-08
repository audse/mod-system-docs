---
description: 'Stores metadata, assets, and scripts'
---
import { SourceLink, GodotClassLink, Property, Class, Params } from '/src/components'

# Mod

<SourceLink.SeeTheCode script='resources/mod.gd' />

## Description

**Inherits <GodotClassLink cls='Resource' />**

The `Mod` class represents a mod in the Mod System. It extends the `Resource` class and provides metadata, assets, and functionality for granting and revoking the mod to/from game objects.

***

## Signals

### installed

```gdscript
signal installed
```

This signal is emitted when the mod is installed with ModSystem.

***

### uninstalled

```gdscript
signal uninstalled
```

This signal is emitted when the mod is uninstalled from ModSystem.

***

### enabled

```gdscript
signal enabled
```

This signal is emitted when the mod is enabled.

***

### disabled

```gdscript
signal disabled
```

This signal is emitted when the mod is disabled.

***

### granted

```gdscript
signal granted(instance: ModInstance)
```

This signal is emitted when the mod is granted to an object.

**Parameters**

<Params>
    <Params.Row>
        <Class.ModInstance />
        The granted mod instance.
    </Params.Row>
</Params>

***

### revoked
```gdscript
signal revoked(instance: ModInstance)
```

This signal is emitted when the mod is revoked from an object.

**Parameters**

<Params>
    <Params.Row>
        <Class.ModInstance />
        The revoked mod instance.
    </Params.Row>
</Params>

***

## Properties

### requires_restart
```gdscript
var requires_restart: bool
```

A flag indicating whether the mod requires a game restart to take effect.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default><code>false</code></Property.Default>
</Property>

***

### is_cheat
```gdscript
var is_cheat: bool
```

A flag indicating whether the mod provides cheats or cheat-like functionality.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default><code>false</code></Property.Default>
</Property>


***

### grantable_owners
```gdscript
var grantable_owners: PackedStringArray
```

An array of registered class names that can receive this mod.

<Property>
    <Property.Type><GodotClassLink cls='PackedStringArray' /></Property.Type>
    <Property.Default><code>PackedStringArray([])</code></Property.Default>
</Property>


***

### instance_script
```gdscript
var instance_script: ModScript
```

The script to be run when the mod is granted to an object.

<Property>
    <Property.Type><Class.ModScript /></Property.Type>
    <Property.Default><code>null</code></Property.Default>
</Property>

***

### assets
```gdscript
var assets: Array[ModAsset]
```

An array of mod assets associated with the mod.

<Property>
    <Property.Type>
        <GodotClassLink cls='Array' />[<Class.ModAsset />]
    </Property.Type>
    <Property.Default><code>[]</code></Property.Default>
</Property>

***

### name
```gdscript
var name: String
```

The name of the mod.

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Default />
</Property>


***

### author
```gdscript
var author: String
```

The author of the mod.

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Default />
</Property>


***

### version
```gdscript
var version: String
```

The version of the mod.

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Default />
</Property>


***

### url
```gdscript
var url: String
```

The URL where the mod can be downloaded or accessed.

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Default />
</Property>


***

### thumbnail
```gdscript
var thumbnail: Texture2D
```

A thumbnail image representing the mod.

<Property>
    <Property.Type><GodotClassLink cls='Texture2D' /></Property.Type>
    <Property.Default><code>null</code></Property.Default>
</Property>


***

### instances
```gdscript
var instances: Dictionary[Object, ModInstance]
```

A dictionary that maps objects to their corresponding mod instances.

<Property>
    <Property.Type>
        <GodotClassLink cls='Dictionary' />[<GodotClassLink cls='Object' />, <Class.ModInstance />]
    </Property.Type>
    <Property.Default><code>{ '{}' }</code></Property.Default>
</Property>

***

### is_enabled
```gdscript
var is_enabled: bool setget
```

A **computed property** indicating whether this mod is currently enabled.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default />
</Property>

***

## Methods

### grant
```gdscript
func grant(owner: Object) -> void
```

Grants the mod to the specified object. This method creates a mod instance for the specified object and emits the [`granted`](#granted) signal

**Parameters**

<Params>
    <Params.Row name='owner'>
        <GodotClassLink cls='Object' />
        The object to grant the mod to.
    </Params.Row>
</Params>


**Returns** 

`void`

***

### revoke
```gdscript
func revoke(owner: Object) -> void
```

Revokes the mod from the specified object. This method removes the mod instance associated with the specified object and emits the [`revoked`](#revoked) signal.

**Parameters**

<Params>
    <Params.Row>
        <GodotClassLink cls='Object' />
        The object to revoke the mod from.
    </Params.Row>
</Params>


**Returns** 

`void`

***

### get_instance
```gdscript
func get_instance(owner: Object) -> ModInstance
```

Retrieves the mod instance associated with the specified object. If no instance exists, it returns `null`.

**Parameters**

<Params>
    <Params.Row name='owner'>
        <GodotClassLink cls='Object' />
        The object to retrieve the mod instance for.
    </Params.Row>
</Params>

**Returns** 

<Property>
    <Property.Type><Class.ModInstance /></Property.Type>
    <Property.Description>TThe mod instance associated with the object, or <code>null</code> if no instance exists.</Property.Description>
</Property>

***

### get_asset
```gdscript
func get_asset(key: String) -> ModAsset
```

Retrieves a mod asset by its key. This method searches the [`assets`](#assets) array and returns the mod asset with the matching key. If no asset is found, it returns `null`.

**Parameters**

<Params>
    <Params.Row name='key'>
        <GodotClassLink cls='String' />
        The key of the asset to retrieve.
    </Params.Row>
</Params>

**Returns** 

<Property>
    <Property.Type><Class.ModAsset /></Property.Type>
    <Property.Description>The mod asset with the specified key, or <code>null</code> if not found.</Property.Description>
</Property>

***

### _on_installed
```gdscript
func _on_installed() -> void
```

This method is called when the mod is installed with ModSystem.

**Note:** This method is intended to be overridden by subclasses to perform additional actions when the mod is installed.

**Returns**

`void`

***

### _on_uninstalled
```gdscript
func _on_uninstalled() -> void
```

This method is called when the mod is uninstalled from ModSystem.

**Note:** This method is intended to be overridden by subclasses to perform additional actions when the mod is uninstalled.

**Returns**

`void`

***

### _on_enabled
```gdscript
func _on_enabled() -> void
```

This method is called when the mod is enabled. 

**Note:** This method is intended to be overridden by subclasses to perform additional actions when the mod is enabled.

**Returns** 

`void`

***

### _on_disabled
```gdscript
func _on_disabled() -> void
```

This method is called when the mod is disabled. 

**Note:** This method is intended to be overridden by subclasses to perform additional actions when the mod is disabled.

**Returns** 

`void`

***

### get_identifier
```gdscript
func get_identifier() -> String
```

Retrieves the unique identifier of the mod. This method returns a unique identifier for the mod, which can be used to differentiate it from other mods.

**Returns** 

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The mod's unique identifier.</Property.Description>
</Property>
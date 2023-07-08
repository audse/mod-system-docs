---
description: 'Stores user preferences'
---
import { SourceLink, GodotClassLink, Property, Class, Params } from '/src/components'

# ModSettings

<SourceLink.SeeTheCode script='resources/mod_settings.gd' />

## Description

**Inherits <GodotClassLink cls='Resource' />**

The `ModSettings` class is a resource that stores a user's preferences for their installed mods. It provides options for enabling or disabling mods, controlling cheat mod behavior, managing enabled mods, and handling logging settings.

***

## Signals

None

***

## Constants

None

***

## Properties

### are_mods_enabled
```gdscript
@export var are_mods_enabled: bool
```

Determines whether mods are enabled to affect the game. If set to `true`, any mod can be enabled and have an effect. If set to `false`, all mod effects will be blocked from being enabled and granted.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default><code>true</code></Property.Default>
</Property>

***

### are_cheats_enabled
```gdscript
@export var are_cheats_enabled: bool
```

Determines whether cheat mods can be enabled to affect the game. This property is only applicable when `are_mods_enabled` is also `true`. If set to `true`, cheat mods can be enabled and granted. If set to `false`, all cheat mods will be blocked from being enabled and granted.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default><code>true</code></Property.Default>
</Property>

***

### enabled_mods
```gdscript
@export var enabled_mods: Array[String]
```

An array of currently enabled mods. Each element is a string representing the identifier of a mod. The identifier is obtained using the <Class.Mod method='get_identifier' /> method.

<Property>
    <Property.Type><code>Array[String]</code></Property.Type>
    <Property.Default><code>[]</code></Property.Default>
</Property>

***

### enable_logging
```gdscript
@export var enable_logging: bool
```

Determines whether mods are allowed to print messages to the console with contextual information. This property is useful for debugging purposes.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default><code>true</code></Property.Default>
</Property>

***

### save_path
```gdscript
var save_path: String setget
```

The path where this resource will be saved. The value is a **computed property** obtained from the `ProjectSettings."mod_system/mod_settings_save_path"` property.

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Default><code>"user://mod_settings.tres"</code></Property.Default>
</Property>

***

## Methods

### is_enabled
```gdscript
func is_enabled(mod: Mod) -> bool
```

Returns `true` if the specified mod is enabled (included in the [`enabled_mods`](#enabled_mods) array).

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to check.
    </Params.Row>
</Params>

**Returns**

bool

***

### can_enable
```gdscript
func can_enable(mod: Mod) -> bool
```

Returns `true` if the specified mod can be enabled. This depends on the current state of [`are_mods_enabled`](#are_mods_enabled), [`enabled_mods`](#enabled_mods), and [`are_cheats_enabled`](#are_cheats_enabled) if the mod is a cheat (see <Class.Mod property='is_cheat' />).

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to check.
    </Params.Row>
</Params>

**Returns**

`bool`

***

### can_disable
```gdscript
func can_disable(mod: Mod) -> bool
```

Returns `true` if the specified mod can be disabled. This depends on whether the mod is currently enabled (included in the [`enabled_mods`](#enabled_mods) array).

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to check.
    </Params.Row>
</Params>

**Returns**

`bool`

***

### enable_mod
```gdscript
func enable_mod(mod: Mod) -> void
```

Enables the specified mod and saves the settings.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to enable.
    </Params.Row>
</Params>


**Returns**

`void`

***

### disable_mod
```gdscript
func disable_mod(mod: Mod) -> void
```

Disables the specified mod and saves the settings.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to disable.
    </Params.Row>
</Params>

### save
```gdscript
func save() -> void
```

Saves the `ModSettings` resource to the designated save path ([`save_path`](#save_path)). This method is automatically called when any property is changed.

**Returns**

`void`


### load_settings
```gdscript
static func load_settings() -> ModSettings
```

Loads the `ModSettings` resource if it exists at the designated save path ([`save_path`](#save_path)). If the resource does not exist, a new `ModSettings` object is created.

**Note**: This is a static method that can be called directly on the `ModSettings` class.

**Returns**

`ModSettings`
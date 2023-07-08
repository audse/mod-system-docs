---
description: 'A manager for installed mods'
---
import { SourceLink, GodotClassLink, Property, Class, Params } from '/src/components'

# ModSystem

<SourceLink.SeeTheCode script='autoload/mod_system.gd' />

## Description

**Inherits <GodotClassLink cls='Node' />**

The `ModSystem` class is a singleton that handles the management of mods within the game. It provides methods for installing, enabling, disabling, granting, and revoking mods. The `ModSystem` is responsible for maintaining the state of mods and their instances, as well as facilitating communication between mods and the game objects they affect.

***

## Signals

### mod_installed
```gdscript
signal mod_installed(mod: Mod)
```

This signal is emitted when a mod is installed with the Mod System.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The installed mod.
	</Params.Row>
</Params>

***

### mod_uninstalled
```gdscript
signal mod_uninstalled(mod: Mod)
```

This signal is emitted when a mod is uninstalled from the Mod System.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The uninstalled mod.
	</Params.Row>
</Params>

***

### mod_enabled
```gdscript
signal mod_enabled(mod: Mod)
```

This signal is emitted when a mod is enabled.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The enabled mod.
	</Params.Row>
</Params>

***

### mod_disabled
```gdscript
signal mod_disabled(mod: Mod)
```

This signal is emitted when a mod is disabled.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The disabled mod.
	</Params.Row>
</Params>

***

### mod_granted
```gdscript
signal mod_granted(instance: ModInstance)
```

This signal is emitted when a mod is granted to an object.

**Parameters**

<Params>
    <Params.Row name='instance'>
        <Class.ModInstance />
        The granted mod instance.
	</Params.Row>
</Params>

***

### mod_revoked
```gdscript
signal mod_revoked(instance: ModInstance)
```

This signal is emitted when a mod is revoked from an object.

**Parameters**

<Params>
    <Params.Row name='instance'>
        <Class.ModInstance />
        The revoked mod instance.
	</Params.Row>
</Params>

***

## Properties

### installed_mods
```gdscript
var installed_mods: Array[Mod]
```

An array that holds the installed mods.

<Property>
    <Property.Type>
        <code>Array</code>[<Class.Mod />]
    </Property.Type>
    <Property.Default><code>[]</code></Property.Default>
</Property>

***

### settings
```gdscript
var settings: ModSettings
```

An instance of the <Class.ModSettings /> class, stores the user's configuration settings for the Mod System.

**Note**: This is automatically loaded (or created, if none are found) on game start.

<Property>
    <Property.Type><Class.ModSettings /></Property.Type>
    <Property.Default>Loaded instance of <Class.ModSettings /></Property.Default>
</Property>

***

## Methods

### initialize
```gdscript
func initialize(mod_owner: Object) -> void
```

Initializes the Mod System for accepting mods in the specified `mod_owner` object.

This method registers the `mod_owner` object with the <Class.ModClassDB /> and grants all possible mods to the object.

**Parameters**

<Params>
    <Params.Row name='mod_owner'>
        <GodotClassLink cls='Object' />
        The object to initialize for mods.
	</Params.Row>
</Params>

**Returns**

`void`

***

### install
```gdscript
func install(mod: Mod) -> void
```

Installs a mod to the Mod System.

This method adds the specified mod to the [`installed_mods`](#installed_mods) array. The [`mod_installed`](#mod_installed) signal is emitted after successful registration.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to install.
	</Params.Row>
</Params>

**Returns**

`void`

***

### uninstall
```gdscript
func uninstall(mod: Mod) -> void
```

Uninstalls a mod from the Mod System.

This method removes the specified mod from the [`installed_mods`](#installed_mods) array. The [`mod_uninstalled`](#mod_uninstalled) signal is emitted after successful unregistration.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to uninstall.
	</Params.Row>
</Params>

**Returns**

`void`

***

### enable
```gdscript
func enable(mod: Mod) -> void
```

Enables a mod.

This method enables the specified mod and emits the [`mod_enabled`](#mod_enabled) signal.

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

### disable
```gdscript
func disable(mod: Mod) -> void
```

Disables a mod.

This method disables the specified mod and emits the [`mod_disabled`](#mod_disabled) signal.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to disable.
	</Params.Row>
</Params>

**Returns**

`void`

***

### enable_all
```gdscript
func enable_all() -> void
```

Enables all installed mods.

This method enables all mods in the [`installed_mods`](#installed_mods) array and emits the [`mod_enabled`](#mod_enabled) signal for each enabled mod.

**Returns**

`void`

***

### disable_all
```gdscript
func disable_all() -> void
```

Disables all installed mods.

This method disables all mods in the [`installed_mods`](#installed_mods) array and emits the [`mod_disabled`](#mod_disabled) signal for each disabled mod.

**Returns**

`void`

***

### grant
```gdscript
func grant(mod: Mod, mod_owner: Object) -> void
```

Grants a mod to an object.

This method grants the specified mod to the specified mod_owner object and emits the `mod_granted` signal.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to grant.
	</Params.Row>
    <Params.Row name='mod_owner'>
        <GodotClassLink cls='Object' />
        The object in which to grant the mod.
	</Params.Row>
</Params>

**Returns**

`void`

***

### grant_all
```gdscript
func grant_all(mod_owner: Object) -> void
```

Grants all possible mods to an object.

This method grants all possible mods to the specified mod_owner object and emits the `mod_granted` signal for each granted mod.

**Parameters**

<Params>
    <Params.Row name='mod_owner'>
        <GodotClassLink cls='Object' />
        The object in which to grant the mods.
	</Params.Row>
</Params>

**Returns**

`void`

***

### revoke
```gdscript
func revoke(mod: Mod, mod_owner: Object) -> void
```

Revokes a mod from an object.

This method revokes the specified mod from the specified mod_owner object and emits the `mod_revoked` signal.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The mod to revoke.
	</Params.Row>
    <Params.Row name='mod_owner'>
        <GodotClassLink cls='Object' />
        The object from which to revoke the mod.
	</Params.Row>
</Params>

**Returns**

`void`

***

### revoke_all
```gdscript
func revoke_all(mod_owner: Object) -> void
```

Revokes all possible mods from an object.

This method revokes all possible mods from the specified mod_owner object and emits the `mod_revoked` signal for each revoked mod.

**Parameters**

<Params>
    <Params.Row name='mod_owner'>
        <GodotClassLink cls='Object' />
        The object from which to revoke the mods.
	</Params.Row>
</Params>

**Returns**

`void`

***

### get_grantable_mods
```gdscript
func get_grantable_mods(mod_owner: Object) -> Array[Mod]
```

Returns an array of all mods that can be granted to the specified object.

This method searches the `installed_mods` array and returns all mods where the `Mod.grantable_owners` property contains the name of the registered class of the `mod_owner` object.

**Parameters**

<Params>
    <Params.Row name='mod_owner'>
        <GodotClassLink cls='Object' />
        The object for which to retrieve grantable mods.
	</Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><code>Array</code>[<Class.Mod />]</Property.Type>
    <Property.Description>An array of grantable mods.</Property.Description>
</Property>

***

### get_mod_by_id
```gdscript
func get_mod_by_id(id: String) -> Mod
```

Retrieves a mod by its ID.

This method searches the [`installed_mods`](#installed_mods) array and returns the mod with the matching ID (see <Class.Mod method='get_identifier' />).

**Parameters**

<Params>
    <Params.Row name='id'>
        <GodotClassLink cls='String' />
        The ID of the mod to retrieve.
	</Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><Class.Mod /></Property.Type>
    <Property.Description>The mod with the specified ID.</Property.Description>
</Property>
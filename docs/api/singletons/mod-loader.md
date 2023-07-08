---
description: 'Mod discovery and loading'
---
import { SourceLink, GodotClassLink, Property, Class, Params } from '/src/components'

# ModLoader

<SourceLink.SeeTheCode script='autoload/mod_loader.gd' />

## Description

**Inherits <GodotClassLink cls='Node' />**

The `ModLoader` class is a singleton responsible for loading mods. Upon game start, this class:

1. Recursively searches for mod files (`*.mod.tres` or `*.mod.json` files) within the directories specified in the `ProjectSettings."mod_system/mod_paths"` property
2. Loads the mods it found
3. Communicates with <Class.ModSystem /> to install them using the <Class.ModSystem method='install' /> method.

The `ModLoader` class is designed to work in conjunction with the  <Class.ModSystem /> class, which manages the overall functionality and behavior of mods in the game.

***

## Signals

### finished_loading
```gdscript
signal finished_loading
```

This signal is emitted when all mods have been loaded and installed.

***

## Properties

### is_finished_loading
```gdscript
var is_finished_loading: bool
```

If `true`, all mods have been loaded and installed.

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Default><code>false</code></Property.Default>
</Property>

***

## Methods

### load_all_mods
```gdscript
func load_all_mods() -> void
```

Recursively finds all mod paths that end with `.mod.tres`, `.mod.res`, or `.mod.json`, loads them, and installs them using the <Class.ModSystem method='install' /> method.

**Returns**

`void`

***

### load_mod
```gdscript
func load_mod(path: String) -> Mod
```

Loads a mod at the specified `path` and installs it using the <Class.ModSystem method='install' /> method.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The file path of the mod to load.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><Class.Mod /> or <code>null</code></Property.Type>
    <Property.Description>The loaded mod.</Property.Description>
</Property>

***

### discover_mod_paths
```gdscript
func discover_mod_paths(dirs: Array[String]) -> Array[String]
```

Recursively searches each listed directory for mods and returns a list of all paths to mods.

**Parameters**

<Params>
    <Params.Row name='dirs'>
        <><code>Array</code>[<GodotClassLink cls='String' />]</>
        The directories to search for mod paths.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><code>Array[String]</code></Property.Type>
    <Property.Description>All paths to mods within the listed `dirs` (recursive).</Property.Description>
</Property>

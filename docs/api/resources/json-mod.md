---
description: 'A JSON-based mod'
---
import { GodotClassLink, SourceLink, Property, Class, Params } from '/src/components'

# JsonMod

<SourceLink.SeeTheCode script='resources/json_mod.gd' />

## Description

**Inherits <Class.Mod />**

A `JsonMod` resource is instantiated when a <Class.Mod /> is defined by a `*.mod.json` file. 

***

## Properties

### loader
```gdscript
var loader: ModContentLoader
```

The content loader that is loading this mod.

<Property>
    <Property.Type><Class.ModContentLoader /></Property.Type>
    <Property.Default><code>null</code></Property.Default>
</Property>

***

### json_path
```gdscript
@export var json_path: String
```

The path to the JSON file from which this mod was created.

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Default />
</Property>

***

## Methods

### _init
```gdscript
func _init(json_path_value: String, json: Dictionary, loader_value := ModContentLoader.new()) -> void
```

Initializes the `JsonMod`.

### to_absolute_path
```gdscript
func to_absolute_path(path: String) -> String
```

Returns an absolute file path from a path relative to [json_path](#json_path).

**Ex.**

`some_asset.png` becomes `user://mods/my_mod/some_asset.png`.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        he relative path to convert to an absolute path
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The absolute path.</Property.Description>
</Property>

***

### load_instance_script
```gdscript
func load_instance_script(path: String) -> ModScript
```

Loads a script (extending <Class.ModInstanceScript />) [loader](#loader) at the given path and returns a new <Class.ModScript />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path of the script to load.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><Class.ModScript /></Property.Type>
    <Property.Description>The loaded script.</Property.Description>
</Property>

***

### load_asset
```gdscript
func load_asset(key: String, relative_path: String, type: String) -> ModAsset
```

Loads an asset at `relative_path` using [loader](#loader) at the given path and returns a new <Class.ModAsset />.

**Parameters**

<Params>
    <Params.Row name='key'>
        <GodotClassLink cls='String' />
        <>
            The key to use for the loaded asset (see <Class.ModAsset property='key' />).
        </>
    </Params.Row>
    <Params.Row name='relative_path'>
        <GodotClassLink cls='String' /> 
        The relative path of the asset to load.
    </Params.Row>
    <Params.Row name='type'>
        <GodotClassLink cls='String' /> 
        <>
            The type of resource to load. Can be <code>resource</code> or <code>image</code>.
            <br /><br />Defaults to <strong><code>resource</code></strong>
        </>
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><Class.ModAsset /></Property.Type>
    <Property.Description>The loaded asset.</Property.Description>
</Property>

***

### get_identifier
```gdscript
func get_identifier() -> String
```

Returns a string that idenitifies this mod, usually the file path. See <Class.Mod method='get_identifier' />.

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The mod's unique identifier.</Property.Description>
</Property>
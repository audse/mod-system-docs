---
description: 'File system path utilities'
---
import { SourceLink, GodotClassLink, GodotMethodLink, Property, Class, Params } from '/src/components'

# ModContentLoader

<SourceLink.SeeTheCode script='utils/content_loader.gd' />

## Description

**Inherits <GodotClassLink cls='Resource' />**

This class is sort of like a combination of <GodotClassLink cls='FileAccess' />, <GodotClassLink cls='ResourceLoader' />, and <GodotClassLink cls='ZipReader' />. It handles loading resources, images, scripts, JSON, etc with a unified API. This helps to abstract file system stuff, as it can get overly complex accounting for all different loading methods.

***

## Constants

### enum Mode
```gdscript
enum Mode {
	FILE,
	ZIP,
}
```

#### `Mode.FILE` {#enum-mode-file}

The files to be loaded exist in the file system. All loading will be done with <GodotClassLink cls='FileAccess' /> and <GodotClassLink cls='ResourceLoader' />.

#### `Mode.ZIP` {#enum-mode-zip}

The files to be loaded exist in a zip file. All loading will be done with <GodotClassLink cls='ZIPreader' /> (see <Class.ModZipReader />).

***

## Properties

### mode
```gdscript
var mode: Mode = Mode.FILE
```

Defines the mode that files will be loaded.

<Property>
    <Property.Type>
        <a href='#enum-Mode'><code>Mode</code></a>
    </Property.Type>
    <Property.Default>
        <a href='#enum-mode-file'><code>Mode.FILE</code></a>
    </Property.Default>
</Property>

***

### zip_reader
```gdscript
var zip_reader: ModZipReader
```

If not `null`, will be used to load files inside a ZIP.

**Note**: Only applicable is [`mode`](#mode) is [`Mode.ZIP`](#enum-mode-zip).

<Property>
    <Property.Type><Class.ModZipReader /></Property.Type>
    <Property.Default><code>null</code></Property.Default>
</Property>

***

## Methods

### new_zip
```gdscript
static func new_zip(reader: ModZipReader) -> ModContentLoader
```

Instantiates a new `ModContentLoader` with the given <Class.ModZipReader /> and a [`mode`](#mode) of [`Mode.ZIP`](#enum-mode-zip).

**Note**: This is a static method, intended to be called directly on the `ModContentLoader` class.

**Parameters**

<Params>
    <Params.Row name='reader'>
        <Class.ModZipReader />
        The ZIP reader to use when loading files.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><Class.ModContentLoader /></Property.Type>
    <Property.Description>The new content loader.</Property.Description>
</Property>

***

### exists
```gdscript
func exists(path: String) -> bool
```

Checks if a file exists at the given path.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to check.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Description><code>true</code> if there is a non-empty file at the given path.</Property.Description>
</Property>

***

### load_bytes
```gdscript
func load_bytes(path: String) -> PackedByteArray
```

Loads the contents of the file as a <GodotClassLink cls='PackedByteArray' />.

***

### load_string
```gdscript
func load_string(path: String) -> String
```

Loads the contents of the file as a <GodotClassLink cls='String' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to load from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The contents of the file, if it exists. Otherwise, an empty string.</Property.Description>
</Property>

***

### load_json
```gdscript
func load_json(path: String) -> Dictionary
```

Loads the contents of the file as a JSON <GodotClassLink cls='Dictionary' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to load from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='Dictionary' /></Property.Type>
    <Property.Description>The JSON at the given path, if it exists. Otherwise, an empty dictionary.</Property.Description>
</Property>

***

### load_resource
```gdscript
func load_resource(path: String) -> Resource
```

Loads the file as a <GodotClassLink cls='Resource' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to load from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='Resource' /></Property.Type>
    <Property.Description>The resource at the given path, if it exists. Otherwise, <code>null</code>.</Property.Description>
</Property>

***

### load_script
```gdscript
func load_script(path: String) -> GDScript
```

Loads the file as a <GodotClassLink cls='GDScript' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to load from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='GDScript' /></Property.Type>
    <Property.Description>The script at the given path, if it exists. Otherwise, <code>null</code>.</Property.Description>
</Property>

***

### load_image
```gdscript
func load_image(path: String) -> Texture2D
```

Loads the contents of the file as a <GodotClassLink cls='Texture2D' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to load from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='Texture2D' /></Property.Type>
    <Property.Description>The image at the given path, if it exists. Otherwise, <code>null</code>.</Property.Description>
</Property>

***

### load_mod
```gdscript
func load_mod(path: String) -> Mod
```

Loads the file as a <Class.Mod />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to load from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><Class.Mod /></Property.Type>
    <Property.Description>The mod at the given path, if it exists. Otherwise, <code>null</code>.</Property.Description>
</Property>
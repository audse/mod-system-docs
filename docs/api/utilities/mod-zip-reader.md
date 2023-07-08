---
description: 'Adds functionality to ZIPReader'
---
import { SourceLink, GodotClassLink, GodotMethodLink, Property, Class, Params } from '/src/components'

# ModZipReader

<SourceLink.SeeTheCode script='utils/zip_reader.gd' />

## Description

**Inherits <GodotClassLink cls='ZIPReader' />**

This class is an extension of the native Godot <GodotClassLink cls='ZIPReader' />. It handles reading files and resources from inside ZIPs.

***

## Signals

None

***

## Properties

None

***

## Methods

### read
```gdscript
static func read(path: String, callback: Callable) -> unknown:
```

Opens a ZIP file and handles the contents.

**Note**: This is a static function and should be called directly on `ModZipReader`.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to the ZIP to open.
    </Params.Row>
    <Params.Row name='callback'>
        <>
            <GodotClassLink cls='Callable' />
            <br />Should accept two arguments:
            <ol>
                <li><code>reader</code>: <code>ModZipReader</code></li>
                <li><code>paths</code>: <GodotClassLink cls='PackedStringArray' /></li>
            </ol>
            Can return anything.
        </>
        <>
            After opening the ZIP, this function will be called with arguments:
            <ol>
                <li><code>self</code></li>
                <li>The result of <GodotMethodLink cls='ZIPReader' method='get_files' /></li>
            </ol>
        </>
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type>unknown</Property.Type>
    <Property.Default><code>void</code></Property.Default>
    <Property.Description>Will return the result of the <code>callback</code> function.</Property.Description>
</Property>

***

### exists
```gdscript
func exists(path: String) -> bool
```

Checks if a file exists at the given path inside the opened ZIP.

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

### read_string
```gdscript
func read_string(path: String) -> String
```

Reads the contents of the file at the given path as a <GodotClassLink cls='String' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to read from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The contents of the file.</Property.Description>
</Property>

***

### read_resource
```gdscript
func read_resource(path: String) -> Resource
```

Reads the contents of the file at the given path as a <GodotClassLink cls='Resource' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to read from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='Resource' /></Property.Type>
    <Property.Description>The resource at the given path.</Property.Description>
</Property>

***

### read_script
```gdscript
func read_script(path: String) -> GDScript
```

Reads the contents of the file at the given path as a <GodotClassLink cls='GDScript' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to read from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='GDScript' /></Property.Type>
    <Property.Description>The script at the given path.</Property.Description>
</Property>

***

### read_json
```gdscript
func read_json(path: String) -> Dictionary
```

Reads the contents of the file at the given path as a JSON <GodotClassLink cls='Dictionary' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to read from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='Dictionary' /></Property.Type>
    <Property.Description>The JSON at the given path.</Property.Description>
</Property>

***

### read_image
```gdscript
func read_image(path: String) -> ImageTexture
```

Reads the contents of the file at the given path as an <GodotClassLink cls='ImageTexture' />.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The path to read from.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='ImageTexture' /></Property.Type>
    <Property.Description>The image at the given path.</Property.Description>
</Property>
---
description: 'File system path utilities'
---
import { SourceLink, GodotClassLink, GodotMethodLink, Property, Class, Params } from '/src/components'

# ModPath

<SourceLink.SeeTheCode script='utils/path.gd' />

## Description

**Inherits <GodotClassLink cls='Object' />**

Utilities to help with mod file system paths.

***

## Properties

### ExtensionRegEx
```gdscript
static var ExtensionRegEx: RegEx = RegEx.create_from_string("\\.(?<ext>((?<sub_ext>[^.\\/]+)\\.)?(?<main_ext>[^\\/.]+))$")
```

A <GodotClassLink cls='RegEx' /> that captures three groups from a file path.

1. `ext` - the full extension
2. `sub_ext` - the sub extension, if it exists
3. `main_ext` - the main extension

**Note**: While this is a variable, it is NOT meant to be mutated.

**Ex.**

`my_mod.mod.json`

1. `ext` is `mod.json`
2. `sub_ext` is `mod`
3. `main_ext` is `json`

<Property>
    <Property.Type><GodotClassLink cls='RegEx' /></Property.Type>
    <Property.Default>
        <code>{ '\\.(?<ext>((?<sub_ext>[^.\\/]+)\\.)?(?<main_ext>[^\\/.]+))$' }</code>
    </Property.Default>
</Property>

***

## Methods

### get_extension
```gdscript
static func get_extension(path: String) -> String
```

Returns the **extended** extension of the given path.

**Note**: This is a static method, intended to be called directly on the `ModPath` class.

**Examples**

```gdscript
assert(ModPath.get_extension("my_mod.mod.json") == "mod.json")
```

```gdscript
assert(ModPath.get_extension("my_mod.tres") == "tres")
```

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The file path from which to get the extension.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The file path's extension.</Property.Description>
</Property>

***

### is_mod_path
```gdscript
static func is_mod_path(path: String) -> bool
```

Checks if the provided path is a mod file path.

Returns `true` if the given path is in the format `*.mod.tres`, `*.mod.res`, or `*.mod.json`.

**Note**: This is a static method, intended to be called directly on the `ModPath` class.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The file path to check.
    </Params.Row>
</Params>


**Returns**

<Property>
    <Property.Type><code>bool</code></Property.Type>
    <Property.Description>
        Returns <code>true</code> if the given path is in the format <code>*.mod.tres</code>, <code>*.mod.res</code>, or <code>*.mod.json</code>.
    </Property.Description>
</Property>

***

## to_import_path
```gdscript
static func to_import_path(path: String) -> String
```

Creates a new path with extension `.import.tres`.

**Note**: This is a static method, intended to be called directly on the `ModPath` class.

**Parameters**

<Params>
    <Params.Row name='path'>
        <GodotClassLink cls='String' />
        The file path to check.
    </Params.Row>
</Params>


**Returns**

<Property>
    <Property.Type><code>String</code></Property.Type>
    <Property.Description>
        The modified path.
    </Property.Description>
</Property>

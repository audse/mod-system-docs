---
description: 'A named asset, shared between instances'
---
import { GodotClassLink, SourceLink, Property, Class, Params } from '/src/components'

# ModAsset

<SourceLink.SeeTheCode script='resources/mod_asset.gd' />

## Description

**Inherits <GodotClassLink cls='Resource' />**

The `ModAsset` class represents an asset associated with a <Class.Mod />, containing a unique identifier ([`key`](#key)) and a reference to a loaded resource ([`asset`](#asset)). 

The `ModAsset` is loaded once per associated <Class.Mod />, ensuring that all instances of the mod share the same resource. This approach simplifies asset management by allowing developers to reference assets by their [`key`](#key) rather than worrying about individual loading or file paths.

***

## Properties

### key
```gdscript
@export var key: String
```
An identifier for the asset, unique to the containing <Class.Mod />.

<Property type={ <code>String</code> } />

***

### asset
```gdscript
@export var asset: Resource
```

The resource associated with the asset.

**Type**

`Resource`

***

## Methods

### create
```gdscript
static func create(key_value: String, asset_value: Resource) -> ModAsset
```
Constructs a new `ModAsset` with the given `key` and `asset`.

This is a static method that can be called directly on the `ModAsset` class. It creates a new `ModAsset` instance, assigns the provided `key` and `asset` to the corresponding properties, and returns the created `ModAsset` object.

**Parameters**

<Params>
    <Params.Row name='key_value'>
        <Params.Row.Type><code>String</code></Params.Row.Type>
        <Params.Row.Description>
            The identifier for the asset.
        </Params.Row.Description>
    </Params.Row>
    <Params.Row name='asset_value'>
        <Params.Row.Type><GodotClassLink cls='Resource' /></Params.Row.Type>
        <Params.Row.Description>
            The resource associated with the asset.
        </Params.Row.Description>
    </Params.Row>
</Params>

**Returns**

`ModAsset`
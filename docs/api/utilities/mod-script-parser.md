---
description: 'GDScript parsing utilities'
---
import { SourceLink, GodotClassLink, GodotMethodLink, Property, Class, Params } from '/src/components'

# ModScriptParser

<SourceLink.SeeTheCode script='utils/script_parser.gd' />

## Description

**Inherits <GodotClassLink cls='Object' />**

This class contains utility functions to parse GDScript source code.

***

## Signals

None

***

## Properties

None

***

## Methods

### get_extended_class
```gdscript
static func get_extended_class(script: GDScript) -> StringName
```

Parses the `extends` class name from the provided script's source code.

**Note**: This is a static method, intended to be called directly on `ModScriptParser`.

**Parameters**

<Params>
    <Params.Row name='script'>
        <GodotClassLink cls='GDScript' />
        The script to parse.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='StringName' /></Property.Type>
    <Property.Description>The parsed <code>extends</code> class name.</Property.Description>
</Property>

***

### get_class_name
```gdscript
static func get_class_name(script: GDScript) -> StringName
```

Parses the `class_name` from the provided script's source code.

**Note**: This is a static method, intended to be called directly on `ModScriptParser`.

**Parameters**

<Params>
    <Params.Row name='script'>
        <GodotClassLink cls='GDScript' />
        The script to parse.
    </Params.Row>
</Params>

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='StringName' /></Property.Type>
    <Property.Description>The parsed <code>class_name</code>.</Property.Description>
</Property>

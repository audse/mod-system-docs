---
description: 'Contextual logging'
---
import { SourceLink, GodotClassLink, GodotMethodLink, Property, Class, Params } from '/src/components'


# ModSystemLogger

<SourceLink.SeeTheCode script='utils/logger.gd' />

## Description

**Inherits <GodotClassLink cls='Object' />**

`ModSystemLogger` handles contextual logging for the Mod System.

***

## Signals

None

***

## Properties

None

***

## Methods

### mod_log
```gdscript
static func mod_log(mod: Mod, message: String) -> void
```

Logs the provided message to the console, with context about the calling <Class.Mod />. If <Class.ModSettings property='enable_logging' /> is `false`, nothing will be logged.

**Note**: This is a static method, intended to be called directly on the `ModSystemLogger` class.

**Parameters**

<Params>
    <Params.Row name='mod'>
        <Class.Mod />
        The calling mod.
    </Params.Row>
    <Params.Row name='message'>
        <GodotClassLink cls='String' />
        The message to log.
    </Params.Row>
</Params>

**Returns**

`void`

***

### logs
```gdscript
static func logs(message: String) -> void
```

Logs the provided message to the console. If <Class.ModSettings property='enable_logging' /> is `false`, nothing will be logged.

**Note**: This is a static method, intended to be called directly on the `ModSystemLogger` class.

**Parameters**

<Params>
    <Params.Row name='message'>
        <GodotClassLink cls='String' />
        The message to log.
    </Params.Row>
</Params>

**Returns**

`void`
---
description: 'A database of extensible classes'
---
import { SourceLink, GodotClassLink, Property, Class, Params } from '/src/components'

# ModClassDB

<SourceLink.SeeTheCode script='autoload/mod_class_db.gd' />

## Description

**Inherits <GodotClassLink cls='Node' />**

The `ModClassDB` class is a **singleton** that serves as a database of all classes registered to the Mod System. It provides methods for registering classes, unregistering classes, and querying registered classes. 

This class allows the Mod System to keep track of classes that can be extended, modified, or referenced by mods.

Game developers who want their classes to be modifiable through the Mod System need to ensure that they register their classes with the `ModClassDB` so that mods can interact with them.

***

## Signals

### class_registered
```gdscript
signal class_registered(cls: RegisteredClass)
```

This signal is emitted when a class is registered to `ModClassDB`.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The just-registered class.'
        type={ <Class.RegisteredClass /> } />
</Params>

***

### class_unregistered
```gdscript
signal class_unregistered(cls: RegisteredClass)
```

This signal is emitted when a class is unregistered from `ModClassDB`.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The just-unregistered class.'
        type={ <Class.RegisteredClass /> } />
</Params>

---

## Properties

### registered_classes

```gdscript
var registered_classes: Array[RegisteredClass]
```

An array that holds the current registered classes.

<Property>
    <Property.Type>
        <code>Array</code>[<Class.RegisteredClass />]
    </Property.Type>
    <Property.Default><code>[]</code></Property.Default>
</Property>

---

## Methods

### register

```gdscript
func register(script: GDScript) -> RegisteredClass
```

Registers a class to `ModClassDB`, enabling use in the Mod System.

This method creates a <Class.RegisteredClass /> object for the class and adds it to the [`registered_classes`](#registered_classes) array. The [`class_registered`](#class_registered) signal is emitted after registration.

**Parameters**

<Params>
    <Params.Row name='script'
        description='The script of the class to register.'
        type={ <GodotClassLink cls='GDScript' /> } />
</Params>

**Returns**

<Property>
    <Property.Type>
        <Class.RegisteredClass />
    </Property.Type>
    <Property.Description>The just-registered class.</Property.Description>
</Property>

***

### register_with_name

```gdscript
func register_with_name(cls: StringName, script: GDScript) -> RegisteredClass
```

Registers a class to `ModClassDB` with the given name, enabling use in the Mod System.

This method creates a <Class.RegisteredClass /> object for the class and adds it to the [`registered_classes`](#registered_classes) array. The [`class_registered`](#class_registered) signal is emitted after registration.

**Parameters**

<Params>
    <Params.Row name='cls'
        description={<>
            The name to use when registering the class. See <Class.RegisteredClass property='name' />.
        </>}
        type={ <GodotClassLink cls='StringName' /> } />
    <Params.Row name='script'
        description='The script of the class to register.'
        type={ <GodotClassLink cls='Script' /> } />
</Params>

**Returns**

<Property>
    <Property.Type>
        <Class.RegisteredClass />
    </Property.Type>
    <Property.Description>
        The just-registered class.
    </Property.Description>
</Property>

***

### unregister

```gdscript
func unregister(cls: StringName) -> void
```

Unregisters a class from `ModClassDB`, disabling use in the Mod System.

This method removes the corresponding [`RegisteredClass`](#) object from the [`registered_classes`](#registered_classes) array. The [`class_unregistered`](#class_unregistered) signal is emitted after unregistration.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The name of the class to unregister.'
        type={ <GodotClassLink cls='StringName' /> } />
</Params>

***

### is_class_name_registered

```gdscript
func is_class_name_registered(cls: StringName) -> bool
```

Checks if a class name is registered with `ModClassDB`.

This method searches the [`registered_classes`](#registered_classes) array for a matching class name and returns the result.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The name of the class to check.'
        type={ <GodotClassLink cls='StringName' /> } />
</Params>

**Returns**

<Property>
    <Property.Type>
        <code>bool</code>
    </Property.Type>
    <Property.Description>
        <code>true</code> if the class name is registered, <code>false</code> otherwise
    </Property.Description>
</Property>

***

### is_script_registered

```gdscript
func is_script_registered(cls: Script) -> bool
```

Checks if a script is registered with <Class.ModClassDB />.

This method searches the [`registered_classes`](#registered_classes) array for a matching script and returns the result.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The script to check.'
        type={ <GodotClassLink cls='Script' /> } />
</Params>

**Returns**

<Property>
    <Property.Type>
        <code>bool</code>
    </Property.Type>
    <Property.Description>
        <code>true</code> if the script class is registered, <code>false</code> otherwise
    </Property.Description>
</Property>

***

### get_by_name

```gdscript
func get_by_name(cls: StringName) -> RegisteredClass
```

Retrieves a registered class by its name.

This method searches the [`registered_classes`](#registered_classes) array for a matching class name and returns the corresponding <Class.RegisteredClass /> object.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The name of the class to register.'
        type={ <GodotClassLink cls='StringName' /> } />
</Params>

**Returns**

<Property>
    <Property.Type>
        <Class.RegisteredClass />
    </Property.Type>
    <Property.Description>
        The registered class.
    </Property.Description>
</Property>

***

### get_by_script

```gdscript
func get_by_script(cls: Script) -> RegisteredClass
```

Retrieves a registered class by its script.

This method searches the [`registered_classes`](#registered_classes) array for a matching script and returns the corresponding <Class.RegisteredClass /> object.

**Parameters**

<Params>
    <Params.Row name='cls'
        description='The script to retrieve.'
        type={ <GodotClassLink cls='Script' /> } />
</Params>

**Returns**

<Property>
    <Property.Type>
        <Class.RegisteredClass />
    </Property.Type>
    <Property.Description>
        The registered class.
    </Property.Description>
</Property>

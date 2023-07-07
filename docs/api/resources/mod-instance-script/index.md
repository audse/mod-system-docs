# ModInstanceScript

<h3>A script associated with a mod instance</h3>

**[See the code at `mod_instance_script.gd`](https://github.com/audse/mod-system/tree/main/addons/mod_system/resources/mod_instance_script.gd)**

***

## Description

**Inherits `Resource`**

The `ModInstanceScript` is a script associated with a mod instance in the Mod System. It contains various virtual methods that can be overridden to customize the behavior of the mod when granted to an owner object.

***

## Signals

None

***

## Constants

### ButtonBase
```gdscript
const ButtonBase = preload("mod_instance_script/button.gd")
```

A subclass that contains virtual functions specific to `Button`. Extend `ModInstanceScript.ButtonBase` when creating a script for a mod that will be granted to a `Button`.

***

### ControlBase
```gdscript
const ControlBase = preload("mod_instance_script/control.gd")
```

A subclass that contains virtual functions specific to `Control`. Extend `ModInstanceScript.ControlBase` when creating a script for a mod that will be granted to a `Control`.

***

### NodeBase
```gdscript
const NodeBase = preload("mod_instance_script/node.gd")
```

A subclass that contains virtual functions specific to `Node`. Extend `ModInstanceScript.NodeBase` when creating a script for a mod that will be granted to a `Node`.

***

### ObjectBase
```gdscript
const ObjectBase = preload("mod_instance_script/object.gd")
```

A subclass that contains virtual functions specific to `Object`. Extend `ModInstanceScript.ObjectBase` when creating a script for a mod that will be granted to a `Object`.

***

### ResourceBase
```gdscript
const ResourceBase = preload("mod_instance_script/resource.gd")
```

A subclass that contains virtual functions specific to `Resource`. Extend `ModInstanceScript.ResourceBase` when creating a script for a mod that will be granted to a `Resource`.

***

## Properties

### instance
```gdscript
var instance: ModInstance
```

The mod instance associated with this script.

**Type**

[`ModInstance`](/docs/api/resources/mod-instance)

***

## Methods

### _init
```gdscript
func _init(instance_value: ModInstance) -> void
```

Initializes the script with the associated mod instance.

**Parameters**

| Name             | Type                                              | Description                                   |
| :--------------- | :------------------------------------------------ | :-------------------------------------------- |
| `instance_value` | [`ModInstance`](/docs/api/resources/mod-instance) | The mod instance associated with this script. |

**Returns**

`void`

***

### logs
```gdscript
func logs(message: String) -> void
```

Prints the specified message to the terminal if logging is enabled (see [`ModSettings/enable_logging`](/docs/api/resources/mod-settings#enable_logging)). This method can be used to log messages with contextual information about the current mod instance. 

**Parameters**

| Name      | Type     | Description         |
| :-------- | :------- | :------------------ |
| `message` | `String` | The message to log. |

**Returns**

`void`

***

### _on_granted
```gdscript
func _on_granted() -> void
```

Called when the mod is granted to the owner object.

**Note**: This method is a virtual method that can be overridden in subclasses to perform custom actions when the mod is revoked.

**Returns**

`void`

***

### _on_revoked
```gdscript
func _on_revoked() -> void
```

Called when the mod is revoked from the owner object.

**Note**: This method is a virtual method that can be overridden in subclasses to perform custom actions when the mod is revoked.

**Returns**

`void`

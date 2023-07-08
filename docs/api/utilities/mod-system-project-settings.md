---
description: 'Mod System specific project settings'
---
import { SourceLink, GodotClassLink, GodotMethodLink, Property, Class, Params } from '/src/components'

# ModSystemProjectSettings

<SourceLink.SeeTheCode script='utils/settings.gd' />

## Description

**Inherits <GodotClassLink cls='Object' />**

This class handles the custom <GodotClassLink cls='ProjectSettings' /> related to the Mod System addon.

***

## Constants

### Settings
```gdscript
const Settings := {
	ModDirs = {
		Path = "mod_system/mod_dirs",
		Default = "user://mods",
		Info = {
			name = "mod_system/mod_dirs",
			type = TYPE_STRING,
			hint = PROPERTY_HINT_PLACEHOLDER_TEXT,
			hint_string = "(e.g. user://mods, res://content)"
		}
	},
	ModSettingsSavePath = {
		Path = "mod_system/mod_settings_save_path",
		Default = "user://mod_settings.tres",
		Info = {
			name = "mod_system/mod_settings_save_path",
			type = TYPE_STRING,
			hint = PROPERTY_HINT_SAVE_FILE,
		}
	},
}
```

A dictionary containing the settings related to the mod system addon. Follows this format:

```gdscript
{
    [key: String]: {
        "Path": String,
        "Default": Variant,
        "Info": {
            "name": String, # same as Path
            "type": Variant.Type,
            "hint": @GlobalScope.PropertyHint, # optional
            "hint_string": String, # optional
        }
    }
}
```

See <GodotMethodLink cls='ProjectSettings' method='add_property_info' /> for more information about the `"Info"` value.

***

## Methods

### update_project_settings
```gdscript
static func update_project_settings() -> void
```

Adds `"mod_system/mod_dirs"` and `"mod_system/mod_settings_save_path"` to <GodotClassLink cls='ProjectSettings' />, if they are not already there.

**Parameters**

None

**Returns**

`void`

***

### get_mod_dirs
```gdscript
static func get_mod_dirs() -> PackedStringArray
```

Retrieves all directories listed in `"mod_system/mod_dirs"` in <GodotClassLink cls='ProjectSettings' />.

**Parameters**

None

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='PackedStringArray' /></Property.Type>
    <Property.Description>A list of directories.</Property.Description>
</Property>

***

### set_mod_dirs
```gdscript
static func set_mod_dirs(dirs: PackedStringArray) -> void
```

Sets `"mod_system/mod_dirs"` in <GodotClassLink cls='ProjectSettings' /> to the provided value.

**Parameters**

<Params>
    <Params.Row name='dirs'>
        <GodotClassLink cls='PackedStringArray' />
        <>The directories to save in <GodotClassLink cls='ProjectSettings' /></>
    </Params.Row>
</Params>

**Returns**

`void`

***

### get_mod_settings_save_path
```gdscript
static func get_mod_settings_save_path() -> String
```

Retrieves `"mod_system/mod_settings_save_path"` from <GodotClassLink cls='ProjectSettings' />.

**Parameters**

None

**Returns**

<Property>
    <Property.Type><GodotClassLink cls='String' /></Property.Type>
    <Property.Description>The save path.</Property.Description>
</Property>

***

### set_mod_settings_save_path
```gdscript
static func set_mod_settings_save_path(save_path: String) -> void
```

Sets `"mod_system/mod_settings_save_path"` in <GodotClassLink cls='ProjectSettings' /> to the provided value.

**Parameters**

<Params>
    <Params.Row name='save_path'>
        <GodotClassLink cls='String' />
        <>The path to save in <GodotClassLink cls='ProjectSettings' /></>
    </Params.Row>
</Params>

**Returns**

`void`
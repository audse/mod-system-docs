---
sidebar_position: 1
---

# Mod System Overview

## Overview

ModSystem is a plugin for Godot 4 that provides a framework for extending and modifying game functionality through mods.

### Important notes

- This plugin is not production-ready yet. It is still unfinished and many parts are still untested.
- I am using the latest Godot version at all times in development. I can't guarantee backwards-compatibility at this time, but that is a goal for the future.

## Features

This plugin offers several key features for game developers:

- **Mod Loading**: The `ModLoader` class handles the loading of mods from the file system. It scans specified mod directories, identifies mod files (e.g., `.mod.tres` or `.mod.json`), and prepares them for registration.

- **Mod Registration**: The `ModClassDB` class is responsible for registering classes within the system. It tracks classes that should be available to mods. Classes are registered with unique identifiers.

- **Mod Management**: The `ModSystem` class serves as the central hub for managing mods. It provides methods for enabling, disabling, and controlling mod execution. It also allows access to an instance of the `ModSettings` class, which stores user preferences related to mod management.

- **Mod Scripting**: The `ModScript` class extends the native `GDScript` class, providing automatic class registration into `ModClassDB`. `ModInstanceScript` provides many virtual functions to override in Mods to affect gameplay.

- **Resource Sharing**: The `ModAsset` class enables modders to share resources among instances of the same mod. Mod assets provide an organized and accessible way to load and use resources such as textures, sounds, or data files.


## The Lifecycle of a Mod

1. **Mod Loading**: The `ModLoader` scans designated mod directories, identifies mod files, and loads them into memory using the appropriate format (e.g., `.mod.tres` or `.mod.json`).

2. **Mod Registration**: The `ModLoader` communicates with the `ModSystem` to register the loaded mods. This step makes the mods available within the game's runtime environment.

3. **Mod Enabling**: The `ModSystem` enables or disables mods based on user preferences stored in the `ModSettings`. Enabled mods are ready for execution.

4. **Mod Granting**: The `ModSystem` grants mods to in-game objects, allowing them to access and modify game functionality as defined by the modder.

5. **Mod Execution**: The `ModInstance` class handles execution of a mod. This class instantiates a new `ModInstanceScript` that connects to various in-game hooks.

6. **Mod Revoking and Disabling**: The `ModSystem` can revoke and disable mods, providing a mechanism for controlling the behavior and impact of mods in the game.


## Implementation

### From a Game Developer's Perspective

This is just a quick overview on how to implement the ModSystem plugin. For more detail, check out the tutorial (COMING SOON).

1. Include the Mod System plugin in your Godot project.

2. Set up the `ModLoader` to scan and load mod files from designated directories during the game's initialization phase by updating your game's `ProjectSettings`.

3. Use the `ModClassDB` to register any class that you want extensible by mods. Ensure that each class has a unique identifier for seamless integration.

4. Implement the `ModSystem` to manage mod enabling, disabling, and granting. Utilize the `ModSettings` resource to store user preferences related to mod management.

5. Use the `ModSystem` to to instantiate and execute enabled mods within the game.

### From a Modder's Perspective

This is just a quick overview on how to create a mod. For more detail, check out the tutorial (COMING SOON).

1. Develop your mod functionality using GDScript.

2. Package your mod as a mod file (e.g., `.mod.tres` or `.mod.json`). Ensure that the file adheres to the mod file format requirements.

3. Install your mod file in the designated mod directory specified by the game developer. This directory is scanned by the `ModLoader` during runtime.

4. Test your mod by enabling it in-game and verifying its behavior within the game.



## Class Documentation

1. [Singletons](/docs/category/singletons) -  Singletons created when your game starts.
	1. [ModClassDB](/docs/api/singletons/mod-class-db) - Registers classes to be extensible by mods.
	2. [ModLoader](/docs/api/singletons/mod-loader) - Handles loading mods from the file system.
	3. [ModSystem](/docs/api/singletons/mod-system) - Manages mod enabling, disabling, and granting.
2. [Resources](/docs/category/resources/) - Data and asset classes.
	1. [ModAsset](/docs/api/resources/mod-asset) - Stores a key and asset pair.
	2. [ModInstanceScript](/docs/api/resources/mod-instance-script) - Main script run upon granting a mod.
	3. [ModInstance](/docs/api/resources/mod-instance) - An instance of a mod after it's granted to an in-game object.
	4. [ModScript](/docs/api/resources/mod-script) - Extension of native GDScript class that registers itself to ModClassDB.
	5. [ModSettings](/docs/api/resources/mod-settings) - Stores user preferences related to mod management.
	6. [Mod](/docs/api/resources/mod) - Defines a mod's metadata, assets, and behavior.
	7. [RegisteredClass](/docs/api/resources/registered-class) - Represents a class registered in ModClassDB.
3. [Utilities](/docs/category/utilities/) - Utility & library classes.
   1. [ModContentLoader](/docs/api/utilities/mod-content-loader) - Content loading utilities.
   2. [ModPath](/docs/api/utilities/mod-path) - File system path utilities.
   3. [ModScriptParser](/docs/api/utilities/mod-script-parser) - GDScript parsing utilities.
   4. [ModSystemLogger](/docs/api/utilities/mod-system-logger) - Logging utilities.
   5. [ModSystemProjectSettings](/docs/api/utilities/mod-system-project-settings) - Project settings utilities.
   6. [ModZipReader](/docs/api/utilities/mod-zip-reader) - ZIP reading utilities.
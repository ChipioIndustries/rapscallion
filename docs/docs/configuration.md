---
sidebar_position: 3
---

# Configuration

Rapscallion instances can receive a config dictionary to allow for custom behavior. If any config value is not provided, a default is used.

## separator

The separator is the character used to indicate a separation between instance names in a route. In the following example, the separator is a period.

```lua
local myRoute = "ReplicatedStorage.Remotes.MyRemote"
```

The separator can be changed from this default. This allows you to use Rapscallion with instances with periods in the name.

### Usage

```lua
local config = {
	separator = "/";
}

local rapscallion = Rapscallion.new(config)

rapscallion:waitForRoute(ReplicatedStorage, "instance.with.periods.in.name/MyInstance")
```

:::tip
It's possible to use a multi-character string as a separator.
:::

### Default

The separator defaults to a period (`.`).

## buildClass

The buildClass is the ClassName of the instances created by the `buildRoute` function.

### Usage

```lua
local config = {
	buildClass = "Model";
}

local rapscallion = Rapscallion.new(config)

local checkpoints = rapscallion:buildRoute(workspace, "Maps.MyMap.Checkpoints")

print(checkpoints:GetBoundingBox())
```

### Default

The buildClass defaults to `"Folder"`.
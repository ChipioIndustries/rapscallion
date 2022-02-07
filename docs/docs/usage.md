---
sidebar_position: 2
---

# Usage

Begin by requiring the module.

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Rapscallion = require(ReplicatedStorage.Packages.Rapscallion)
```

Rapscallion uses an object-oriented programming format to allow for multiple instances with different configurations. Call the constructor to create a new instance:

```lua
local rapscallion = Rapscallion.new()
```

If a non-default configuration is desired, pass through the config dictionary as an argument:

```lua
local config = {
	separator = "/";
}

local rapscallion = Rapscallion.new(config)
```

If a configuration is missing from the provided dictionary, the default will be used instead.

In typical use, no special configuration is required, so the constructor can be called on the same line as the require to reduce clutter:

```lua
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Rapscallion = require(ReplicatedStorage.Packages.Rapscallion).new()
```

## Routes

Routes are strings containing the location of the desired instance, with each segment divided by a separator (a period by default):

```lua
local route = "PlayerGui.ScreenGui.Frame.TextButton"
```

All functions receive a combination of a starting point instance and a route.

## Getting a Route

The `getRoute` function is ideal for checking if a route exists. If so, the instance at the end of the route will be returned. Otherwise, `nil` will be returned.

```lua
local function onTouch(hit)
	local description = Rapscallion:getRoute(hit.Parent, "Humanoid.HumanoidDescription")
	if description then
		-- use description object
	end
end
```

## Waiting for a Route

Waiting for an instance to exist is a common use case, particularly for UI code. The `waitForRoute` function will yield until either an instance comes into existence or the timeout is reached (if provided).

```lua
local textButton = Rapscallion:waitForRoute(game.Players.LocalPlayer, "PlayerGui.ScreenGui.Frame.TextButton", 5)

if textButton then
	--handle textButton
else
	error("textButton hasn't loaded in 5 seconds")
end
```

## Building a Route

The `waitForRoute` function has behavior identical to `getRoute`, except when it encounters a nonexistent route segment, it will create the segment and continue as normal.

```lua
local textButton = Rapscallion:waitForRoute(game.Players.LocalPlayer, "PlayerGui.ScreenGui.Frame.TextButton", 5)

if textButton then
	--handle textButton
else
	error("textButton hasn't loaded in 5 seconds")
end
```
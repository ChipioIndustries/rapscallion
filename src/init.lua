local Llama = require(script.Parent.Llama)

local Rapscallion = {}
Rapscallion.__index = Rapscallion

local DefaultConfig = require(script.DefaultConfig)

function Rapscallion.new(config: DefaultConfig.Config?)
	config = Llama.Dictionary.join(DefaultConfig, config or {})

	assert(typeof(config.separator) == "string", "separator must be a string, got " .. typeof(config.separator))
	assert(typeof(config.buildClass) == "string", "buildClass must be a string, got " .. typeof(config.buildClass))

	local self: table = {
		_config = config;
	}

	setmetatable(self, Rapscallion)

	table.freeze(self)
	table.freeze(config)

	return self
end

function Rapscallion:buildRoute(startingPoint: Instance, route: string)
	local result = startingPoint
	local routeSegments = route:split(self._config.separator)

	for _, routeSegment in pairs(routeSegments) do
		local nextResult = result:FindFirstChild(routeSegment)
		if not nextResult then
			nextResult = Instance.new(self._config.buildClass)
			nextResult.Parent = result
			nextResult.Name = routeSegment
		end
		result = nextResult
	end

	return result
end

function Rapscallion:getRoute(startingPoint: Instance, route: string)
	local result = startingPoint
	local routeSegments = route:split(self._config.separator)

	for _, routeSegment in pairs(routeSegments) do
		result = result:FindFirstChild(routeSegment)
		if not result then
			return nil
		end
	end

	return result
end

function Rapscallion:waitForRoute(startingPoint: Instance, route: string, timeout: number?)
	local routeSegments = route:split(self._config.separator)
	local result = startingPoint
	local startingTime = tick()
	local success = false

	task.spawn(function()
		for _, routeSegment in pairs(routeSegments) do
			if result then
				result = result:WaitForChild(routeSegment, timeout)
			else
				break
			end
		end
		success = true
	end)

	repeat
		task.wait()
	until success or (timeout and tick() > startingTime + timeout)

	if success then
		return result
	else
		return nil
	end
end

return Rapscallion
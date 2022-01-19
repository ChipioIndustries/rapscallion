local configsToTest = {
	{
		name = "default config";
		config = nil;
	};
	{
		name = "empty config";
		config = {};
	};
	{
		name = "separator config";
		config = {
			separator = "/";
		};
	};
	{
		name = "build class config";
		config = {
			buildClass = "Model";
		}
	}
}

local configsToFail = {
	{
		name = "non-table config";
		config = "yeehaw";
	};
	{
		name = "non-string separator";
		config = {
			separator = 5;
		};
	};
	{
		name = "non-string build class";
		config = {
			buildClass = 5;
		}
	}
}
return function()
	describe("Rapscallion", function()
		local Rapscallion = require(script.Parent)

		describe("different configs", function()
			for _, config in pairs(configsToTest) do
				describe("should work with " .. config.name, function()
					local rapscallion = Rapscallion.new(config.config)

					expect(rapscallion).to.be.a("table")

					it("should build routes - " .. config.name, function()
						local testModel = Instance.new("Folder")
						testModel.Parent = script

						local sampleRoute = table.concat(
							{
								"Folder1";
								"Folder2";
								"Folder3";
							},
							rapscallion._config.separator
						)

						local sampleFolder = rapscallion:buildRoute(
							testModel,
							sampleRoute
						)

						local overlappingRoute = table.concat(
							{
								"Folder1";
								"Folder2";
								"Folder3";
								"Folder4";
							},
							rapscallion._config.separator
						)

						local overlappingFolder = rapscallion:buildRoute(
							testModel,
							overlappingRoute
						)

						local existingFolder = rapscallion:buildRoute(
							testModel,
							overlappingRoute
						)

						expect(sampleFolder).to.be.a("userdata")
						expect(sampleFolder:IsA(rapscallion._config.buildClass)).to.equal(true)
						expect(sampleFolder:IsDescendantOf(testModel)).to.equal(true)

						expect(overlappingFolder).to.be.a("userdata")
						expect(overlappingFolder:IsDescendantOf(sampleFolder)).to.equal(true)

						expect(existingFolder).to.equal(overlappingFolder)

						expect(#testModel:GetChildren()).to.equal(1)
						expect(testModel:FindFirstChild("Folder1")).to.be.ok()

						testModel:Destroy()
					end)

					it("should get routes - " .. config.name, function()
						local testModel = Instance.new("Folder")
						testModel.Parent = script

						local testModel2 = Instance.new("Folder")
						testModel2.Name = "Folder1"
						testModel2.Parent = testModel

						local testModel3 = Instance.new("Folder")
						testModel3.Name = "Folder2"
						testModel3.Parent = testModel2

						local sampleRoute = table.concat(
							{
								"Folder1";
								"Folder2";
							},
							rapscallion._config.separator
						)

						local nonexistentRoute = table.concat(
							{
								"Folder1";
								"Folder2";
								"Folder3";
							},
							rapscallion._config.separator
						)

						local sampleFolder = rapscallion:getRoute(
							testModel,
							sampleRoute
						)

						local nonexistentFolder = rapscallion:getRoute(
							testModel,
							nonexistentRoute
						)

						expect(sampleFolder).to.be.a("userdata")
						expect(nonexistentFolder).never.to.be.ok()

						testModel:Destroy()
					end)

					it("should wait for route - " .. config.name, function()
						local testModel = Instance.new("Folder")
						testModel.Parent = script

						local route = table.concat(
							{
								"Folder1";
								"Folder2";
							},
							rapscallion._config.separator
						)

						local timeoutFolder
						local doneRunning
						task.spawn(function()
							timeoutFolder = rapscallion:waitForRoute(
								testModel,
								route,
								0.2
							)
							doneRunning = true
						end)

						task.wait(0.3)

						expect(timeoutFolder).never.to.be.ok()
						expect(doneRunning).to.be.ok()

						local function testRouteNotYetExisting(timeout, skipDestroy)
							local notYetExistingFolder
							task.spawn(function()
								notYetExistingFolder = rapscallion:waitForRoute(
									testModel,
									route,
									timeout
								)
							end)

							task.wait(0.1)

							local testModel2 = Instance.new("Folder")
							testModel2.Name = "Folder1"
							testModel2.Parent = testModel

							local testModel3 = Instance.new("Folder")
							testModel3.Name = "Folder2"
							testModel3.Parent = testModel2

							task.wait(0.1)

							expect(notYetExistingFolder).to.equal(testModel3)

							if not skipDestroy then
								testModel2:Destroy()
							end
						end

						testRouteNotYetExisting(5)
						testRouteNotYetExisting(nil, true)

						local existingFolder
						task.spawn(function()
							existingFolder = rapscallion:waitForRoute(
								testModel,
								route,
								5
							)
						end)

						task.wait(0.1)

						expect(existingFolder).to.be.ok()

						testModel:Destroy()
					end)
				end)
			end
		end)

		describe("invalid configs", function()
			for _, config in pairs(configsToFail) do
				it("should fail with " .. config.name, function()
					expect(function()
						Rapscallion.new(config.config)
					end).to.throw()
				end)
			end
		end)
	end)
end
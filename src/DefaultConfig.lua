export type Config = {
	separator: string?;
	buildClass: string?;
}

local defaultConfig: Config = {
	separator = ".";
	buildClass = "Folder";
}

return defaultConfig
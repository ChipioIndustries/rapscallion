![Unit Tests](https://github.com/chipioindustries/rapscallion/workflows/Unit%20Tests/badge.svg)
![Create Release](https://github.com/chipioindustries/rapscallion/workflows/Create%20Release/badge.svg)

# Rapscallion

Rapscallion is a library for accessing paths which may or may not exist.

## Constructor

A constructor is provided to allow for multiple Rapscallion instances with different configurations.

`Rapscallion Rapscallion.new([table config])`

## Configuration

The constructor receives an optional configuration table. If a configuration option is not included in the table, a default value will be used instead.

|Type|Name|Description|
|-|-|-|
|string|separator|The character used to separate route segments.|

## API Reference

|Returns|Name|Description|
|-|-|-|
|Instance|buildRoute(Instance startingPoint, string route)|Returns the instance at the end of the route, filling in any missing segment of the route with Folders.|
|Instance|getRoute(Instance startingPoint, string route)|Returns the instance at the end of the route if it exists, otherwise nil.|
|Instance|waitForRoute(Instance startingPoint, string route[, number timeout])|Returns the instance at the end of the route if it comes into existence before the timeout elapses.|

## The Name

2022 is the year of nonsensical package names. Embrace it.

"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[827],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},u="Usage",c={unversionedId:"usage",id:"usage",title:"Usage",description:"Begin by requiring the module.",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/rapscallion/docs/usage",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/rapscallion/docs/installation"},next:{title:"Configuration",permalink:"/rapscallion/docs/configuration"}},s=[{value:"Routes",id:"routes",children:[],level:2},{value:"Getting a Route",id:"getting-a-route",children:[],level:2},{value:"Waiting for a Route",id:"waiting-for-a-route",children:[],level:2},{value:"Building a Route",id:"building-a-route",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Begin by requiring the module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal Rapscallion = require(ReplicatedStorage.Packages.Rapscallion)\n')),(0,o.kt)("p",null,"Rapscallion uses an object-oriented programming format to allow for multiple instances with different configurations. Call the constructor to create a new instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local rapscallion = Rapscallion.new()\n")),(0,o.kt)("p",null,"If a non-default configuration is desired, pass through the config dictionary as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = {\n    separator = "/";\n}\n\nlocal rapscallion = Rapscallion.new(config)\n')),(0,o.kt)("p",null,"If a configuration is missing from the provided dictionary, the default will be used instead."),(0,o.kt)("p",null,"In typical use, no special configuration is required, so the constructor can be called on the same line as the require to reduce clutter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal Rapscallion = require(ReplicatedStorage.Packages.Rapscallion).new()\n')),(0,o.kt)("h2",{id:"routes"},"Routes"),(0,o.kt)("p",null,"Routes are strings containing the location of the desired instance, with each segment divided by a separator (a period by default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local route = "PlayerGui.ScreenGui.Frame.TextButton"\n')),(0,o.kt)("p",null,"All functions receive a combination of a starting point instance and a route."),(0,o.kt)("h2",{id:"getting-a-route"},"Getting a Route"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getRoute")," function is ideal for checking if a route exists. If so, the instance at the end of the route will be returned. Otherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," will be returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local function onTouch(hit)\n    local description = Rapscallion:getRoute(hit.Parent, "Humanoid.HumanoidDescription")\n    if description then\n        -- use description object\n    end\nend\n')),(0,o.kt)("h2",{id:"waiting-for-a-route"},"Waiting for a Route"),(0,o.kt)("p",null,"Waiting for an instance to exist is a common use case, particularly for UI code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForRoute")," function will yield until either an instance comes into existence or the timeout is reached (if provided)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local textButton = Rapscallion:waitForRoute(game.Players.LocalPlayer, "PlayerGui.ScreenGui.Frame.TextButton", 5)\n\nif textButton then\n    --handle textButton\nelse\n    error("textButton hasn\'t loaded in 5 seconds")\nend\n')),(0,o.kt)("h2",{id:"building-a-route"},"Building a Route"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForRoute")," function has behavior identical to ",(0,o.kt)("inlineCode",{parentName:"p"},"getRoute"),", except when it encounters a nonexistent route segment, it will create the segment and continue as normal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local textButton = Rapscallion:waitForRoute(game.Players.LocalPlayer, "PlayerGui.ScreenGui.Frame.TextButton", 5)\n\nif textButton then\n    --handle textButton\nelse\n    error("textButton hasn\'t loaded in 5 seconds")\nend\n')))}d.isMDXComponent=!0}}]);
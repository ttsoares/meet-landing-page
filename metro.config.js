const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./global.css",
  getCSSForPlatform: () => Promise.resolve("./global.css"),
});

/*
const { getDefaultConfig } = require("expo/metro-config")

const config = getDefaultConfig(__dirname)

// Add support for NativeWind
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg")
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"]

module.exports = config
*/

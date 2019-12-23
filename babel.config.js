module.exports = function(api) {
  api.cache(false);
  const presets = [
    [
      "@babel/preset-env",
      {
        "modules": "cjs"
      }
    ],
    "@babel/preset-react"
  ];

  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    ["@babel/plugin-syntax-dynamic-import"]
  ];
  return {
    presets,
    plugins
  }
}
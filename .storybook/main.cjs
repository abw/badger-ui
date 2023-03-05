const path = require("path");
// import path from 'node:path';

// const config = {
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
//    "@storybook/addon-storysource"
  ],
  "typescript": {
    "check": false,
    "reactDocgen": false
  },
  "staticDirs": ['../public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push(".js", ".jsx");

    return config;
  }
}

// export default config

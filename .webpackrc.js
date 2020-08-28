const path = require("path");

export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
  ],
  alias: {
    Assets: path.resolve(__dirname, "./src/assets"),
    Api: path.resolve(__dirname, "./src/api"),
  },
};

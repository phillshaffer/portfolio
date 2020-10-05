const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      }
    ]
  }
};
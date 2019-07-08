const path = require("path");
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/serverCallback.ts",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "serverCallback.js",
    libraryTarget: "commonjs2",
    libraryExport: "default"
  },
  plugins: [
    new DefinePlugin({ NODE_ENV: JSON.stringify("production") }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};

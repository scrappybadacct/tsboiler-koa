const path = require("path");
const { DefinePlugin } = require("webpack");
const NodemonWebpackPlugin = require("nodemon-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "app.js"
  },
  plugins: [
    new DefinePlugin({ NODE_ENV: JSON.stringify("production") }),
    new CleanWebpackPlugin(),
    new NodemonWebpackPlugin()
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

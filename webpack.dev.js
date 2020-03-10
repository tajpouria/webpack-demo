const path = require("path");
const merge = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist/"),
    hot: true,
    port: 9000,
    overlay: true, // Emit errors on current window
  },
  plugins: [new HTMLWebpackPlugin({ template: "src/template.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Inject style as a style tag into DOM
          "css-loader", // Transpile css into CommonJS
          "sass-loader", // Turns sass into css
        ],
      },
    ],
  },
});

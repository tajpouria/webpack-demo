const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // setupThree: inject js style code as a <style> tag into the dom
          "css-loader", // stepTwo: turn css to common.js
          "sass-loader", // stepOne: turn scss to css
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[hash].[ext]",
            outputPath: "imgs/",
          },
        },
      },
    ],
  },
  plugins: [
    // Inject JS to DOM
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

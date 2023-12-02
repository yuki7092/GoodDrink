// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
    LOG: "./src/js/LOG.js",
    member: "./src/js/member.js",
    shop: "./src/js/shop.js",
    drink: "./src/js/drink.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/LOG.html",
      filename: "LOG.html",
      chunks: ["LOG"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/member.html",
      filename: "member.html",
      chunks: ["member"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/drink.html",
      filename: "drink.html",
      chunks: ["drink"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/shop.html",
      filename: "shop.html",
      chunks: ["shop"],
    }),
  ],
};

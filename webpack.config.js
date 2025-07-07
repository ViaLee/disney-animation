const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    // publickPath: "/", // 静态资源的公共路径
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development", // 开发模式
  devServer: {
    // webpack-dev-server插件选项配置
    open: true, // 打包以后是否自动启动
    host: "localhost", // 主机地址
    port: 3000, // 启动端口号
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 替换为你的实际路径
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

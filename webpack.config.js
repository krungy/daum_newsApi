const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".vue", ".js"], // 생략할 확장자를 명시
    alias: {
      "~": path.resolve(__dirname, "src"), // 루트 경로의 src 폴더로부터 시작
      // '@': path.resolve(__dirname, 'src')
    }, // 별칭 (주로 경로 별칭을 다룸)
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // .vue 로 끝나는 파일만 찾음
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"], // 순서 중요 ... 맨 마지막이 처음으로 실행 됨 (가장 먼저 sass -> css -> vue-style ...)
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ["file-loader"], // 이미지파일 -> js파일로 변환
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, "src/index.html"), // webpack 이 해석해야하는 html 파일이 어디에 있는지?
    }),
    new CopyPlugin({
      patterns: [
        { from: "static" }, // to 옵션은 기본적으로 output 으로 가게 됨 ... 생략
      ], // static 폴더에서 파일을 복사하여 dist 로 넣어줌
    }),
  ],
  // devServer: {
  //   port: 1234
  // }
};

const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const DIST_SRC = path.join(__dirname, '_demo');
const staticName = "vendors";

let webpackConfig = {
  mode: "development",
  entry: [ "@babel/polyfill", "./demo/index.jsx"],
  output: {
    path: DIST_SRC,
    filename: `[name].[hash].js`,
    publicPath: '/',
  },
  // bail: true,//构建异常，自动退出
  optimization: {},
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    symlinks: false
  },
  module: {
    rules: [{
      test: /\.(png|jpg|jpeg|gif|webp)$/,
      use: `url-loader?limit=16384&name=images/[name].[hash].[ext]`
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: `file-loader?name=fonts/[name].[hash].[ext]`
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }
      ]
    }, {
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.join(__dirname, "demo"), path.join(__dirname, "src")],
      use: {
        loader: "babel-loader",
      }
    }, {
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
        },
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin([DIST_SRC]),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: "index.html",
    })
  ],
  devtool: '#source-map',
  devServer: {
    contentBase: DIST_SRC,
    https: false,
    host: "0.0.0.0",
    port: 5021,
    overlay: true,
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    //如果使用dashboard则设置quiet去除掉devserver的log，交由dashboard管理
    // quiet: true
  }
};

module.exports = webpackConfig;

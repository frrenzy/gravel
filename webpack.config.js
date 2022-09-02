const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
    filename: '[name].[contenthash:8].js'
  },
  entry: {
    index: './src/index.pug',
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, './src/')
    },
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true
  },
  plugins: [
    new PugPlugin({
      extractCss: {
        filename: '[name].[contenthash:8].css',
      },
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render',
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

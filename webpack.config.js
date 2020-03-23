const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", 'scss', 'css'],
    alias: {
      assets: path.join(__dirname, './src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
          loader: "postcss-loader",
          options: {
            plugins: [
              require('cssnano')({ preset: 'default' })
            ],
          },
        }],
      },
      { test: /\.(tsx|ts)$/, loader: "babel-loader", exclude: /node_modules/, },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude: /node_modules/ },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new ForkTsCheckerWebpackPlugin() ],
};

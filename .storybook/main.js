const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async config => {
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.json', 'scss', 'css', 'svg');
    config.resolve.modules.push(path.resolve(__dirname, '../src'), 'node_modules');

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });


    config.module.rules.push({
      test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: "[name].[hash:8].[ext]",
      },
    });


    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  }
};

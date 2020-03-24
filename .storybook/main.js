const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async config => {
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
      sideEffects: true,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });


    // fix preview svg https://github.com/storybookjs/storybook/issues/6188
    config.module.rules = config.module.rules.map( data => {
      if (/svg\|/.test( String( data.test ) ))
        data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
      return data;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: 'url-loader' }
      ]
    });

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.json', 'scss', 'css', 'svg');

    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  }
};

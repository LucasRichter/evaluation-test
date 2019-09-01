require('dotenv').config();
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

// NEXT PLUGINS
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

// WEB PACK PLUGINS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = withPlugins([withCSS], {
  distDir: 'build',
  webpack: (config, { dev, isServer, defaultLoaders }) => {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      })
    );

    if (isServer || dev) {
      return config;
    }

    var isProduction = config.mode === 'production';

    if (!isProduction) {
      return config;
    }

    config.plugins.push(new CleanWebpackPlugin(['build', 'dist']));

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );

    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
});

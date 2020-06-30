/* eslint-disable @typescript-eslint/no-var-requires */
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
})

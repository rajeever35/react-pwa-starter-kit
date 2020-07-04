/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const config = require('../webpack/dev.config')

const app = express()
const port = process.env.PORT || 8080

const compiler = webpack(config)

if (process.env.NODE_ENV === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  )
} else {
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')))
}

app.get('*', (_, res) =>
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
)

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
)

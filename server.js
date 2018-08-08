// const express = require('express');
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const app = express();
// const config = require('./webpack.config.js')
// const compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))

// app.listen(3880, function() {
//   console.log('example app listening on port 3000!\n')
// })
const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000')
})
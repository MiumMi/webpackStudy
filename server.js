const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js')
const compile = webpack(config);

app.use(webpackDevMiddleware(compile, {
  publicPath: config.output.publicPath
}))

app.listen(3000, function() {
  console.log('example app listening on port 3000!\n')
})
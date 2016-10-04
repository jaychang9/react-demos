/**
 * Created by haibao on 2016/9/28.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

//config.plugins.push(new webpack.HotModuleReplacementPlugin());

console.log('publicPath',config.output.publicPath);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});
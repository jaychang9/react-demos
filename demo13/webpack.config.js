var path = require('path');
var webpack = require('webpack');

var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: isProduction ? null:'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: [/\.(js|jsx)$/],
                exclude: /node_modules/,
                loaders: ['babel?presets[]=es2015&presets[]=react']
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
   plugins:[
       new webpack.HotModuleReplacementPlugin()
   ]
};


// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     devtool: 'eval',
//     entry:[
//         'webpack-dev-server/client?http://0.0.0.0:3000',
//         'webpack/hot/only-dev-server',
//         './src/index'
//     ],
//     output:{
//         path: '/static/',
//         filename:'bundle.js',
//         publicPath:'/static/'
//     },
//     resolve:{
//         extensions:['','.js','.jsx']
//     },
//     plugins:[
//         new webpack.HotModuleReplacementPlugin()
//     ],
//     module:{
//         loaders:[
//             {
//                 test: /\.js[x]?$/,
//                 loaders: ['react-hot', 'babel'],
//                 include: path.join(__dirname, 'src')
//             },
//             {
//                 test: /\.js[x]?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel',
//                 query:{
//                     presets:['es2015','react']
//                 }
//             },
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     }
//
// };
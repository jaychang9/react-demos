/**
 * Created by haibao on 2016/8/28.
 */
var path = require('path');

module.exports = {
    entry:'./entry.js',
    output:{
        path:path.join(__dirname,'/build'),
        filename:'bundle.js'
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets:['es2015','react']
                }
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
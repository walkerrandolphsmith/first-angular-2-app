var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001/',
        'webpack/hot/only-dev-server',
        './app/client/index.js'
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.css', '.less']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: [nodeModulesPath] },
            { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] }
        ]
    }
};
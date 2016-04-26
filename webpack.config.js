var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextPluginConfig = new ExtractTextPlugin("dist/styles.css");
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'Jamie Allen',
    template: path.join(__dirname + '/public/index.html'),
    filename: 'index.html',
    inject: 'body'
})

var CopyWebpackPlugin = require('copy-webpack-plugin');
var CopyWebpackPluginConfig = new CopyWebpackPlugin([
    {
        from: './public/images/me.jpg',
        to: './dist/images'
    }
], {
    copyUnmodified: true
});


module.exports = {
    entry: [
        './public/js/script.js'
    ],
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        // This is required for webpack-dev-server. The path should
        // be an absolute path to your build destination.
        outputPath: path.join(__dirname + '/dist')
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.(css|less)$/, exclude: [ /public(\\|\/)js/ ], loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap!less?sourceMap")},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig,
        CopyWebpackPluginConfig
    ]
}

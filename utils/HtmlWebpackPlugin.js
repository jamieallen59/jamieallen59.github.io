import HtmlWebpackPlugin from 'html-webpack-plugin';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'Jamie Allen',
    hash: true,
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = HtmlWebpackPluginConfig;

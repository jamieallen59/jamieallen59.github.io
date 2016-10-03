import HtmlWebpackPlugin from 'html-webpack-plugin'

export default new HtmlWebpackPlugin({
    title: 'Jamie Allen',
    hash: true,
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

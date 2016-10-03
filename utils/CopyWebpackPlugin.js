import CopyWebpackPlugin from 'copy-webpack-plugin'

export default new CopyWebpackPlugin([{
    from: './src/images/me.jpg',
    to: './'
}], {
    copyUnmodified: true
})

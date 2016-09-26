import CopyWebpackPlugin from 'copy-webpack-plugin';

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: './src/images/me.jpg',
    to: './dist/images'
}], {
    copyUnmodified: true
})

module.exports = CopyWebpackPluginConfig;

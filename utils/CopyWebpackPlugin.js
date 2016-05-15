import CopyWebpackPlugin from 'copy-webpack-plugin';

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: './public/images/me.jpg',
    to: './dist/images'
}], {
    copyUnmodified: true
})

module.exports = CopyWebpackPluginConfig;

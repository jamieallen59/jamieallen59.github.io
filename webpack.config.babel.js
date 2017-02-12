/* eslint-disable max-len */
import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// use an index.js for these!
import HtmlWebpackPluginConfig from './utils/HtmlWebpackPlugin'
import CopyWebpackPluginConfig from './utils/CopyWebpackPlugin'

const env = process.env.NODE_ENV
const isProduction = env === 'production'

const config = {
	entry: [
		'./src/js/app.js'
	],
	output: {
		path: './',
		filename: './dist/index_bundle.js'
	},
	devServer: {
		hot: true,
		inline: true,
		// This is required for webpack-dev-server. The path should
		// be an absolute path to the build destination.
		contentBase: path.join(`${__dirname}/`),
		stats: {
			chunks: false
		}
	},
	devtool: 'source-map',
	module: {
		rules: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			enforce: 'pre',
			use: [ 'eslint-loader' ]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [ 'react-hot-loader', 'babel-loader' ]
		}, {
			test: /\.(css|less)$/,
			exclude: [ /src(\\|\/)js/ ],
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					'css-loader?sourceMap',
					'less-loader?sourceMap'
				]
			})
		}, {
			test: /\.(css|less)$/,
			include: [ /src(\\|\/)js/ ],
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'less-loader?outputStyle=expanded&sourceMap'
				]
			})
		}, {
			test: /\.(png|jpg)$/,
			use: [ 'url-loader?limit=8192&name=dist/assets/[hash].[ext]' ]
		} ] // inline base64 URLs for <=8k images, direct URLs for the rest
	},
	plugins: [
		new ExtractTextPlugin('./dist/[name].css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		HtmlWebpackPluginConfig,
		CopyWebpackPluginConfig
	]
}

if (isProduction) {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	)
}

if (!isProduction) {
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	)
}

// use export default
module.exports = config

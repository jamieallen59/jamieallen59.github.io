import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// use an index.js for these!
import HtmlWebpackPluginConfig from './utils/HtmlWebpackPlugin'
import CopyWebpackPluginConfig from './utils/CopyWebpackPlugin'

const env = process.env.NODE_ENV

const config = {
	entry: [
		'./src/js/app.js'
	],
	output: {
		path: './',
		filename: 'index_bundle.js'
	},
	devServer: {
		hot: true,
		inline: true,
		// This is required for webpack-dev-server. The path should
		// be an absolute path to the build destination.
		outputPath: path.join(`${__dirname}/`),
		stats: {
			chunks: false
		}
	},
	devtool: 'source-map',
	module: {
		preLoaders: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: [ 'eslint-loader' ]
		} ],
		loaders: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: [ 'react-hot', 'babel-loader' ]
		}, {
			test: /\.(css|less)$/,
			exclude: [ /src(\\|\/)js/ ],
			loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!less?sourceMap')
		}, {
			test: /\.(css|less)$/,
			include: [ /src(\\|\/)js/ ],
			loader: ExtractTextPlugin.extract(
				'style-loader',
				'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less?outputStyle=expanded&sourceMap')
		}, {
			test: /\.(png|jpg)$/,
			loaders: [ 'url-loader?limit=8192&name=assets/[hash].[ext]' ]
		} ] // inline base64 URLs for <=8k images, direct URLs for the rest
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(env)
		}),
		HtmlWebpackPluginConfig,
		CopyWebpackPluginConfig
	]
}

if (env === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	)
}

if (env !== 'production') {
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	)
}

// use export default
module.exports = config

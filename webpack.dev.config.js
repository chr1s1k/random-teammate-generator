const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = require('./webpack.common.config.js')
const path = require('path')

module.exports = webpackMerge(commonConfig, {
	mode: 'development',
	devtool: 'source-map',

	devServer: {
		host: '0.0.0.0', // umožní přístup i z jiných adres, než jen z localhostu
		port: 8080
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded',
							precision: 9,
							lineNumbers: true,
							sourceMap: true,
							includePaths: [
								path.resolve(__dirname, './node_modules/')
							]
						}
					}
				]
			}
		]
	},
})
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')
const path = require('path')

module.exports = webpackMerge(commonConfig, {
	mode: 'production',
	devtool: false,

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
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'compressed',
							precision: 9,
							includePaths: [
								path.resolve(__dirname, './node_modules/')
							]
						}
					}
				]
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: 'images/**/*', // vezmi celý adresář `${context}images` a všechno v něm
				to: './',
				force: true,
				context: './src/assets/'
			}
		])
	]
})
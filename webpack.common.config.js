const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
	entry: ['./src/index.js', './src/assets/stylesheets/main.scss'],

	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'js/bundle.min.js'
	},

	// https://medium.com/@stefanledin/solve-the-you-are-using-the-runtime-only-build-of-vue-error-e675031f2c50
	// https://vuejs.org/v2/guide/installation.html#Webpack
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			}
		]
	},

	plugins: [
		new VueLoaderPlugin(),

		// použití HTML šablony a include vygenerovaného bundle
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
			hash: true
		}),

		// kompilace SASSu a vytažení do jednoho souboru
		new MiniCssExtractPlugin({
			filename: 'css/[name].min.css'
		})
	]
}
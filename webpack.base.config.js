const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: '[name].js'
	},
	resolve: {
		modules: [path.resolve(__dirname, './'), 'node_modules'],  // adding ./ to work with absolute path from project
		extensions: ['.js', '.vue'],
		alias: {
			'@': path.resolve(__dirname, 'src/')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
				  compilerOptions: {
					preserveWhitespace: false
				  }
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
	  new VueLoaderPlugin()
	]
}
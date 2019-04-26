const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
	
  entry: './entry-server.js',
	
  // This allows webpack to handle dynamic imports in a Node-appropriate
  // fashion, and also tells `vue-loader` to emit server-oriented code when
  // compiling Vue components.
  target: 'node',
  
  // For bundle renderer source map support
  devtool: '#source-map',
  
    
  output: {
    filename: 'server-bundle.js',
	// output.libraryTarget: Configure how the library will be exposed.
	// commonjs2: The return value of the entry point will be assigned to the module.exports
	// cf https://stackoverflow.com/questions/38289019/require-webpack-bundle-returns-empty-object
	libraryTarget: 'commonjs2'
  }
});

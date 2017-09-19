const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	watch: true,

	devServer: {
		hot: true,
		contentBase: "./build"
	},

	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
	},

	module: {
		rules: [
	    	{
		    	test: /\.js$/,
		    	exclude: /(node_modules|bower_components)/,
		    	use: {
		        	loader: 'babel-loader',
		        	options: {
		          		presets: ['env', 'react']
		        	}
		    	}
		    },
		    {
		    	test: /\.jsx$/,
		    	exclude: /(node_modules|bower_components)/,
		    	use: {
		        	loader: 'babel-loader',
		        	options: {
		          		presets: ['env', 'react']
		        	}
		    	}
		    },
		    {
		        test: /\.css$/,
				use: [
					{ loader: "style-loader" },
	          		{ loader: "css-loader" }
          		],
				
		    }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({template: "index.html"}),
	]
}
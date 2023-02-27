const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const reactConfig = {
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/, 
				exclude: /node_modules/,
				loader: 'babel-loader' 
			},
			{
        		test: /\.css$/i,
        		use: ["style-loader", "css-loader"],
      },
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		})
		]
};

const serverConfig = {
	entry: './src/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: __dirname,
		filename: 'server.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/, 
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
		]
};

module.exports = [reactConfig, serverConfig];
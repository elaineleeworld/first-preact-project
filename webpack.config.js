// this config file contains the shared definition between dev and prod
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const devConfig = require('./webpack.config.dev')
const prodConfig = require('./webpack.config.prod')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
	dist: path.resolve(__dirname, 'dist'),
	source: path.resolve(__dirname, 'source'),
}

const config = {
	entry: path.resolve(PATHS.source, 'js/index.js'),
	output: {
		path: PATHS.dist,
		filename: 'bundle.[hash].js',
		chunkFilename: '[name].js',
	},
	optimization: {
		minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules\//,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
		        type: 'javascript/auto',
		        test: /\.json$/,
		        use: [
		            {
		              loader: 'file-loader',
		              options: {
		                  name: "./plugin-config/[name].[ext]"
		              }
		            }
		        ]
		      },
		      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
		],
	},
	resolve: {
		modules: ['node_modules'],
		 alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class',
            // Not necessary unless you consume a module requiring `react-dom-factories`
            'react-dom-factories': 'preact-compat/lib/react-dom-factories'
        }
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'source/index.html',
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(PATHS.source, 'assets/images/'),
				to: path.resolve(PATHS.dist, 'assets/images'),
				ignore: ['.gitkeep'],
				flatten: true,
			},
			{
				from: path.resolve(PATHS.source, 'assets/fonts/'),
				to: path.resolve(PATHS.dist, 'assets/fonts'),
				ignore: ['.gitkeep'],
				flatten: true,
			},
			{
				from: path.resolve(PATHS.source, 'favicon.ico'),
				to: PATHS.dist,
			},
		]),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
	],

	devServer: {
		contentBase: PATHS.dist,
		compress: true,
		inline: true,
		port: 8000,
		host: '0.0.0.0',
		hot: true,
	},
	devtool: 'cheap-source-map',
}

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production'
	const customConfig = isProduction ? prodConfig : devConfig
	const customRules = customConfig.getRules()
	const customPlugins = customConfig.getPlugins(PATHS)

	config.module.rules = [...config.module.rules, ...customRules]
	config.plugins = [...config.plugins, ...customPlugins]

	return config
}

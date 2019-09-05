const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const getStyleLoaders = require('../utils/getStyleLoaders.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './examples/sandbox/index.js'
        
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, '../../examples/build')
    },
    resolve: {
        alias: {
            "components": path.resolve(__dirname, "../../src/components")
        }
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties', '@babel/plugin-transform-react-jsx']
                    }
                }
            },
            {
                test: /\.css$/,
                use: getStyleLoaders({
                    importLoaders: 1
                }, true)
            },
            {
                test: /\.scss$/,
                use: getStyleLoaders({
                    importLoaders: 2,
                    sourceMap: true
                }, true, 'sass-loader')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/images',
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts',
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: `vendors.bundle`,
                    chunks: "all",
                    minChunks: 1
                }
            }
        }
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'sandbox',
            filename: 'index.html',
            template: './examples/sandbox/public/index.html',
            chunks: ['app', 'vendors.bundle']
        }),
    ],
    devServer: {
        port: 3000,
        hot: true
    },
    watchOptions: {
        ignored: /node_modules/
    }
}
const common = require('./webpack.common.js');
const htmlFiles = require('./views/viewArray.js');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const getStyleLoaders = require('./utils/getStyleLoaders.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let commonChunkName;

if(common.commonChunkName){
    commonChunkName = common.commonChunkName;
    delete common.commonChunkName;
}

module.exports = merge(common, {
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
                test: /\.(less|css)$/,
                use: getStyleLoaders({
                    importLoaders: 2,
                    sourceMap: true
                }, true, 'less-loader')
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
                    name: `${commonChunkName}.vendors`,
                    chunks: "all",
                    minChunks: commonChunkName ? 2 : 10000
                }
            }
        }
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].min.css"
        }),
        ...htmlFiles
    ],
    devServer: {
        port: 3000,
        hot: true
      },
    watchOptions: {
        ignored: /node_modules/
    }
});
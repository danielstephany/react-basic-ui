const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        title: 'docs',
        filename: 'index.html',
        template: './docs/public/index.html',
        chunks: ['app']
    }),
]
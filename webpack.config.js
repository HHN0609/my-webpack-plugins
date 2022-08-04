const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StampWebpackPlugin = require('./plugins/stamp-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: 'main.js',
        clean: true,
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, './index.html')
        }),
        new StampWebpackPlugin()
    ]
}
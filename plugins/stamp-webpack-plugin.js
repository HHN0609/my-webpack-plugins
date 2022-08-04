const HtmlWebpackPlugin = require('html-webpack-plugin');

function StampWebpackPlugin() {}

StampWebpackPlugin.prototype.apply = function(compiler) {
    compiler.hooks.compilation.tap('StampWebpackPlugin', (compilation, callback) => {

        // compilation.hooks.buildModule.tap('StampWebpackPlugin', (data, cb) => {
        
        
        // });
        
        HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tap('StampWebpackPlugin',
            (htmlPluginData, cb) => {
                console.log(htmlPluginData);
                let jsNameArr = htmlPluginData.assets.js;
                Array.prototype.forEach.call(jsNameArr, (name, index, arr) => {
                    arr[index] = `${name}?${new Date().getTime()}`;
                });

            }
        )
    });
}

module.exports = StampWebpackPlugin;
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
                // jsNameArr是一个数组，['xxx.js']
                Array.prototype.forEach.call(jsNameArr, (name, index, arr) => {
                    // 给插入html文件的script标签的url加上时间戳防止读到缓存
                    arr[index] = `${name}?${new Date().getTime()}`;
                });
            }
        )
    });
}

module.exports = StampWebpackPlugin;
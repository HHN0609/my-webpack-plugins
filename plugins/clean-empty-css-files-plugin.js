const PLUGINNAME = 'CleanEmptyCssFilesPlugin';
const cssPattern = /\.css$/;
/**
 * Only can be used in production mode!!!!
 */
class CleanEmptyCssFilesPlugin {
    apply(compiler){
        compiler.hooks.shouldEmit.tap(PLUGINNAME, ( compilation ) => {
            const cssFiles = compilation.getAssets().filter(({name}) => {
                return cssPattern.test(name); 
            });
            cssFiles.forEach((asset) => {
                if(asset.source._source._value === '' || asset.source._source._valueAsString === ''){
                    compilation.deleteAsset(asset.name);
                }
            });
            return true;
        })
    }
}

module.exports = CleanEmptyCssFilesPlugin;
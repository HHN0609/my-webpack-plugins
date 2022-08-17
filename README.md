# Some useful webpack plugins 
### 1. stamp-webpack-plugin  
> ！！ 这个插件需要和 `HtmlWebpackPlugin` 配合使用，因为在这个插件里面监听了 `HtmlWebpackPlugin` 提供的 `beforeAssetTagGeneration` 钩子，所以用这个插件前要先安装 `HtmlWebpackPlugin` (不过一般都会装这个插件……)。  

> 简单的介绍它的功能: 打包生成的 `js` 脚本被插 `HTML` 模板之前在 `<script>` 标签的 `src` 后面以`URL query`的方式添加一串时间戳，用来避免缓存。   

> 效果如下:    
`<script defer src="main.js?1659617723006"></script>`

### 2. clean-empty-css-files-plugin 
> 绝决一个痛点: 在`.vue`文件里，如果`<style>`标签内没有包含CSS样式 or 包含的css样式全部被注释了，在使用`purgecss-webpack-plugin`剔除无效CSS的时候，会产生空的CSS文件，这个插件就是用来删除这些空的CSS文件。

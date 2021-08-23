const path = require("path");
// const CompressionPlugin = require('compression-webpack-plugin')//如果用的是express后台服务器也得做处理
module.exports = {
    outputDir: 'dist',
    devServer: {
        // host:'localhost',
        port: 9000,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'https://www.inroyltd.com',//要跨域的域名
                secure: false, //如果是https接口，如要配置此参数
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'api'
                }
            }
        }
    },
    chainWebpack: (config) => {
        /* 添加分析工具*/
        if (process.env.NODE_ENV === 'production') {

            // config.mode = 'production'
            // return {
            //     plugins: [new CompressionPlugin({
            //         test: /\.js$|\.html$|\.css/, //匹配文件名
            //         threshold: 10240, //对超过10k的数据进行压缩
            //         deleteOriginalAssets: false //是否删除原文件
            //     })]
            // }


            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch'),

                config.plugin('prefetch').tap(options=>{
                    options[0].fileBlacklist = options[0].fileBlacklist || []
                    options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
                    return options
                })
                // import(/* webpackPrefetch :true */ './someAsyncComponent.vue')
            }
        } },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    lintOnSave: false
}
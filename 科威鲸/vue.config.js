//配置vue.config.js
const path = require("path");
// const pxtorem = require('postcss-pxtorem');
module.exports = {
    outputDir: 'dist',
    publicPath: './',
    assetsDir: './static',
    // publicPath: process.env.NODE_ENV === 'production' ? '/vant-music/' : '/',
    // css: {
    //     loaderOptions: {
    //         postcss: {
    //             plugins: [
    //                 pxtorem({
    //                     rootValue: 37.5,
    //                     propList: ['*']
    //                 })
    //             ]
    //         }
    //     }
    // },
    //前端跨域
    /* devServer: {
        proxy: {  //配置跨域
            '/api': {
                target: 'http://121.121.67.254:8185/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,  //允许跨域
                pathRewrite: {
                // 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                //     实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                '^/api': '' 
                }
            },
        }
    }, */
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
    lintOnSave: false
}
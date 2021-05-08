const requireDir = require("require-directory");
const Router = require("koa-router");
const static= require("koa-static");
const body = require("koa-body");
const cors = require("koa2-cors");
function initManage(app){
    /* 1.解析post请求，及图片上传 */
    app.use(body({
        multipart:true, // 支持文件上传
        // encoding:'gzip',
        formidable:{
        //   uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
        //   keepExtensions: true,    // 保持文件的后缀
            maxFieldsSize:20 * 1024 * 1024, // 文件上传大小
        //   onFileBegin:(name,file) => { // 文件上传前的设置
        //     // console.log(`name: ${name}`);
        //     // console.log(file);
        // },
            keepExtensions:true
        }}));
    /* 2.跨域 */
    app.use(cors({
        // origin:"http://192.168.4.88:8080",//是说这个地址是可以跨域访问cookies的
        origin:ctx=>{
            console.log(ctx.header.origin);
            return ctx.header.origin;//http://1localhost:8080
        },
        credentials:true
        //可以跨域访问cookie
    }));
    /* 3.静态资源 */
    app.use(static(`${process.cwd()}/images`))
    /* 4.路由的自动导入 */
    requireDir(module,`${process.cwd()}/routers`,{visit:loadRouter})
    function loadRouter(obj){
        // console.log(obj)
        if(obj instanceof Router){
            app.use(obj.routes())
        }
    }
    // console.log(app.env)//development
    /* app.use(async ctx=>{
        ctx.body="hello world"
    }) */
    
}
module.exports = initManage
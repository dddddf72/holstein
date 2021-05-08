const router = require("koa-router")();
// const UserModel = require("../../models/user");
router.post("/m1/login",async ctx=>{
    /* username=cheng,pass=123 */
    var {username,pass} = ctx.request.body;
    if(username=="cheng" && pass == "123"){
        ctx.cookies.set("loginAuth",true,{  //前后端都需要配置使跨域访问cookies
            httpOnly:false  //服务器端设置cookies使其可读
        })
        ctx.body= {
            code:200,
            auth:true,
            msg:"登录成功"
        }
    }else{
        ctx.body = {
            code:400,
            msg:"用户名或密码错误"
        }
    }
})
module.exports = router;
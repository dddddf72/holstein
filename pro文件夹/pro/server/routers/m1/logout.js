const router = require("koa-router")();
// const ArticleModel = require("../../models/article")
router.post("/m1/logout",async ctx=>{
    ctx.cookies.set("loginAuth","");
    ctx.body = {
        code:200,
        msg:"退出登录"
    }
})
module.exports = router
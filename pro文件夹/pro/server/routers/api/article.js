const router = require("koa-router")();
const ArticleModel = require("../../models/article")
router.get("/api/article",async ctx=>{
    var data = await ArticleModel.find({}).sort({_id:-1});//向前添加数据
    // console.log(data)
    ctx.body={
        code:200,
        res:data,
        msg:"文章相关的数据",
        request:"GET /article"
    }
})
module.exports = router
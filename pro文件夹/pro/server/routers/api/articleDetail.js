const router = require("koa-router")();
const ArticleModel = require("../../models/article")
//http://localhost:4000/api/detail?id=603f346335801719a4d8ff7b
router.get("/api/articleDetail",async ctx=>{
    var {id} = ctx.query;
    var res = await ArticleModel.find({_id:id})
    // console.log(res)
    ctx.body={
        code:200,
        res,
        total:res.length,
        msg:"文章详情"
    }
})
module.exports = router
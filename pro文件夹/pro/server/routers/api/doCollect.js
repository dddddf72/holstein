const router = require("koa-router")();
const ArticleModel = require("../../models/article")
router.post("/api/doCollect",async ctx=>{
    var {id,collected} = ctx.request.body;
    console.log(id,collected)
    try{
        await ArticleModel.updateOne({_id:id},{$set:{collected}});
        // console.log(data)
        ctx.body={
            code:200,
            msg:"修改收藏成功",
            request:"POST /api/doCollect"
        }
    }catch(err){
        // console.log(err)
        ctx.body={
            code:400,
            res:data,
            msg:"请求数据不合法",
            request:"POST /api/doCollect"
        }
    }
    
})
module.exports = router
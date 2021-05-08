const router = require("koa-router")();
const MovieModel = require("../../models/movie")
//http://localhost:4000/api/detail?id=60418facc29db040c49fd52b
router.get("/api/movieDetail",async ctx=>{
    var {id} = ctx.query;
    var tables = ["top250","inTheaters","comingSoon"];
    var details = [];
    for(var item of tables){
        var res = await MovieModel(item).find({_id:id})
        details.push(...res)
    }
    console.log(details)
    ctx.body={
        code:200,
        res:details,
        total:details.length,
        msg:"电影详情"
    }
})
module.exports = router
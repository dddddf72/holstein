const router = require("koa-router")();
const MovieModel = require("../../models/movie")
//http://localhost:4000/api/search?keyword=nihao
router.get("/api/search",async ctx=>{
    var {keyword} = ctx.query;
    // console.log(keyword)
    var reg = new RegExp(keyword)
    console.log(reg)
    var tables = ["top250","inTheaters","comingSoon"];
    var searchMovies = [];
    for(var item of tables){
        // var res = await MovieModel(item).find({title:{$regex:keyword}});
        var res = await MovieModel(item).find({title:reg})
        searchMovies.push(...res)
    }
    // console.log(searchMovies)
    ctx.body={
        code:200,
        res:searchMovies,
        total:searchMovies.length,
        msg:"搜索的数据"
    }
})
module.exports = router
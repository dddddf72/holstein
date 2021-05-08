/* 2.使用动态路由处理前端路由 */
const router = require("koa-router")();
const MovieModel = require("../../models/movie")
/* //http://localhost:4000/api/movie?m=inTheaters
router.get("/api/movie",async ctx=>{
    const {m} = ctx.query;
    try{
        var data = await MovieModel(m).find().sort({rating:-1});
        console.log(data)
        if(data.length){
            ctx.body={
                code:200,
                res:data,
                msg:m
            }
        }else{throw new Eror("输入的字段不合法")}
    }catch(err){
        ctx.body = {
            code:400,
            msg:"输入的字段不合法"
        }
    }
}) */
//http://localhost:4000/api/movie/top250
router.get("/api/movie/:m",async ctx=>{
    var {m} = ctx.request.params;
    var data = await MovieModel(m).find();
    // console.log(data)
    if(data.length){
        ctx.body={
            code:200,
            res:data,
            request:`请求成功${m}`
        }
    }else{
        ctx.body = {
            code:400,
            msg:"输入的字段不合法"
        }
    }
})
module.exports = router
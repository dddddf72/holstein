const router = require("koa-router")();
const MovieModel = require("../../models/movie")
const UserModel = require("../../models/user")
//http://localhost:4000/api/history?id=6041909ec29db040c49fd554&m=top250
router.get("/api/history",async ctx=>{
    var {id,m} = ctx.query;
    try{
        var data = await MovieModel(m).find({_id:id});
        var item = data[0];
        // console.log(item)
        //判断history中是否有这条数据
        // var res = await UserModel.updateOne({$push:{history:item}});
        // console.log(res);//{ n: 1, nModified: 1, ok: 1 }
        var isCollect = await UserModel.find({"history._id":id});
        // console.log(isCollect)
        if(isCollect.length ==0){
            await UserModel.updateOne({$push:{history:item}});
            ctx.body={
                code:200,
                msg:"添加到历史记录",
            }
        }else{
            ctx.body={
                code:400,
                msg:"历史记录中已存在",
            }
        }
    }catch(err){
        ctx.body = {
            code:400,
            msg:"参数不合法"
        }
    }
})
module.exports = router
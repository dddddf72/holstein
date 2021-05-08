const router = require("koa-router")();
const MovieModel = require("../../models/movie")
const UserModel = require("../../models/user")
router.post("/api/collectMovie/:m",async ctx=>{
    // console.log(ctx.request.params)//{m:top250}
    // console.log(ctx.request.body)//{ id: '1001', collected: true }
    var {m} = ctx.request.params;//error nModified  success:1
    var {id,collected} = ctx.request.body;
    try{
        var data = await MovieModel(m).updateOne({_id:id},{$set:{collected}});
        // console.log(data);
        if(data.nModified==0){
            throw new Error(`${m}这个传值不合法`)
        }else{
            //添加收藏数据到user
            var item = await MovieModel(m).find({_id:id})
            // console.log(item)
            /* var res = await UserModel.updateOne({},{$push:{collects:item[0]}})
            console.log(res) */
            if(collected){
                /* true,$push */
                await UserModel.updateOne({},{$push:{collects:item[0]}})
                ctx.body = {
                    code:200,
                    msg:"收藏成功"
                }
            }else{
                /* false,$pull */
                console.log(collected)
                await UserModel.updateOne({},{$pull:{collects:{_id:id}}})
                ctx.body = {
                    code:200,
                    msg:"取消收藏"
                }
            }
        }
    }catch(err){
        //id,collected 走catch
        // console.log(err)
        // console.log(Error)
        ctx.body = {
            code:400,
            msg:"输入的字段不合法"
        }
    }
})
module.exports = router
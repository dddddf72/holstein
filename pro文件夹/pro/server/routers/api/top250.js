/* const router = require("koa-router")();
const Top250Model = require("../../models/top250")
router.post("/api/top250",async ctx=>{
    var data = Top250Model.find().sort({rating:-1})
    ctx.body={
        code:200,
        res:data,
        request:"GET /api/top250"
    }
})
module.exports = router */
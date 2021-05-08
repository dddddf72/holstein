const {mongodb,Schema} = require("./baseDB/db-movies");
const schema = new Schema({
    name:String,
    /* Schema中定义模糊数组，可以添加但不能删除 */
    collects:[
        {
            _id:Schema.Types.ObjectId,
            pic:String,
            title:String,
            slogo:String,
            evaluate:String,
            rating:String,
            collected:Boolean,
            labels:Array
        }
    ],
    history:[
        {
            _id:Schema.Types.ObjectId,
            pic:String,
            title:String,
            slogo:String,
            evaluate:String,
            rating:String,
            collected:Boolean,
            labels:Array
        }
    ]
});
const UserModel = mongodb.model("user",schema,"user");
module.exports = UserModel
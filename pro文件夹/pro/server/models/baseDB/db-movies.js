const mongoose = require("mongoose");
/* 1.连接本地数据库 */
// var mongodb = mongoose.createConnection('mongodb://127.0.0.1:27017/movies', {
var mongodb = mongoose.createConnection('mongodb://test:123@124.71.191.216:27017/movies?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});
/* 3.创建数据模型,和数据库中的表映射,获取表   */
var Schema = mongoose.Schema;
// module.exports = mongoose;
module.exports = {
    mongodb,
    Schema
}
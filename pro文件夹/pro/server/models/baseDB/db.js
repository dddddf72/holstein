const mongoose = require("mongoose");
/* 1.连接本地数据库 */
// mongoose.connect('mongodb://127.0.0.1:27017/wechat', {
// mongoose.connect('mongodb://test:123@120.25.251.98:27017/wechat?authSource=admin', {
mongoose.connect('mongodb://test:123@124.71.191.216:27017/wechat?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});
/* 3.创建数据模型,和数据库中的表映射,获取表   */
module.exports = mongoose;
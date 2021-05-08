const koa = require("koa")
const app = new koa();
const initManage = require("./config");
initManage(app)
app.listen(4001)
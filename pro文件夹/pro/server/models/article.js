const mongoose = require("./baseDB/db");
const ArticleSchema = new mongoose.Schema({
    date: String,
    title: String,
    imgSrc: String,
    avatar: String,
    content: String,
    reading: String,
    collectNum: Number,
    headImgSrc: String,
    author: String,
    dateTime: String,
    detail: String,
    postId: Number,
    music: {
        url: String,
        title:String,
        coverImg: String
    },
    collected: Boolean
})
const ArticleModel = mongoose.model("Article",ArticleSchema,"article");
    module.exports = ArticleModel
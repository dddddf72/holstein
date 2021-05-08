/* 1.封装model */
// const mongoose = require("mongoose")
const {mongodb,Schema} = require("./baseDB/db-movies");
const bean = require("./Schema/MovieSchema")
const MovieSchema = new Schema(bean);
// const Top250Schema = mongoose.Schema(MovieSchema)
// const Top250Model = mongoose.model("Top250",Top250Schema,"top250");

function MovieModel(table){
    return mongodb.model(table,MovieSchema,table);
}
module.exports = MovieModel;
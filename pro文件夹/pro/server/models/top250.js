/* // const mongoose = require("mongoose")
const {mongodb,Schema} = require("./baseDB/db-movies");
const MovieSchema = require("./Schema/MovieSchema")
const Top250Schema = new Schema(MovieSchema);
// const Top250Schema = mongoose.Schema(MovieSchema)
// const Top250Model = mongoose.model("Top250",Top250Schema,"top250");
const Top250Model = mongodb.model("Top250",Top250Schema,"top250");
module.exports = Top250Model */
const mongoose=require("mongoose")

const movieSchema=mongoose.Schema({
    username:String,
    password:String,
    email:String,
})

const movieUser=mongoose.model("movieUser",movieSchema)

module.exports=movieUser
const mongoose=require("mongoose")

const movieSchema=mongoose.Schema({
    title:String,
    description:String,
    releaseDate:String,
    category:String,
    actors: [{ name: String }],
    image:String,
    ratings: [
      {
        value: Number,
      },
    ],
    comments: [
      {
        text: String,
      },
    ],
    addedBy: String,
})

const Movie=mongoose.model("movie",movieSchema)

module.exports=Movie
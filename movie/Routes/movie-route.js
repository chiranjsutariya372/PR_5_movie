const express=require("express")
const {addMovie, updateMovie, deleteMovie, ratingMovie, commentMovie, findeMovie} = require("../controllers/movie-controller")

const movie=express()

movie.post("/movie/create",addMovie)
movie.patch("/movie/update/:id",updateMovie)
movie.delete('/movie/delete/:id',deleteMovie)
movie.patch("/movie/rating/:id",ratingMovie)
movie.patch("/movie/comment/:id",commentMovie)
movie.get('/movie/filter',findeMovie)

module.exports=movie
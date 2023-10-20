const Movie = require("../Models/movie.schema")


const addMovie=async(req,res)=>{
    let added= await Movie.create(req.body)
    res.status(201).send(added)
}

const updateMovie=async(req,res)=>{
    let update= await Movie.findByIdAndUpdate(req.params.id,req.body)
    update = await  Movie.findById(req.params.id)
    res.status(200).send(update)
}

const deleteMovie=async(req,res)=>{
    let remove= await Movie.findByIdAndDelete(req.params.id)
    res.status(200).send({message:"Movie deleted"})
}

const ratingMovie=async(req,res)=>{
    let movie=await Movie.findById(req.params.id)
    if(!movie) return res.send({error: "movie not found"});
    movie.ratings.push({value:req.body.rating})
    res.send(movie)
}

const commentMovie=async(req,res)=>{
    let movie=await Movie.findById(req.params.id)
    if(!movie) return res.send({error: "movie not found"});
    
    movie.comments.push({text:req.body.text})
    res.send(movie)
}

const findeMovie=async(req,res)=>{
    let {title,addedBy,releaseDate,category}=req.query

    if(title||addedBy||releaseDate||category){
        const show=await Movie.find(req.query)
        res.send(...show)
    }

    let movie=await Movie.find()
    res.send(movie)
}

module.exports={addMovie,updateMovie,deleteMovie,ratingMovie,commentMovie,findeMovie}
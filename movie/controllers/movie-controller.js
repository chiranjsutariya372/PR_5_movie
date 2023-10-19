const Movie = require("../Models/movie.schema")


const addMovie=async(req,res)=>{
    const added= await Movie.create(req.body)
    res.status(201).send(added)
}

const updateMovie=async(req,res)=>{
    const updated= await Movie.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).send(updated)
}

const deleteMovie=async(req,res)=>{
    const remove= await Movie.findByIdAndDelete(req.params.id)
    res.status(200).send(remove)
}

const ratingMovie=async(req,res)=>{
    const movie=await Movie.findById(req.params.id)
    if(!movie) return res.send({error: "movie not found"});
    
    const ratings=await Movie.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"update Rating",ratings})
}

const commentMovie=async(req,res)=>{
    const movie=await Movie.findById(req.params.id)
    if(!movie) return res.send({error: "movie not found"});
    
    const comments=await Movie.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"update Rating",comments})
}

const findeMovie=async(req,res)=>{
    const {title,addedBy,releaseDate,category}=req.query

    if(title||addedBy||releaseDate||category){
        const show=await Movie.find(req.query)
        res.send(...show)
    }

    const movie=await Movie.find()
    res.send(movie)
}

module.exports={addMovie,updateMovie,deleteMovie,ratingMovie,commentMovie,findeMovie}
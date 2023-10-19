const express=require("express");
const connect = require("./config/db");
const user = require("./Routes/user.route");
const movie = require("./Routes/movie-route");
require("dotenv").config()
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome to the movie API")
})

app.use(user)
app.use(movie)

app.listen(process.env.PORT,()=>{
    console.log(`Connect To Port ${process.env.PORT}`);
    connect()
})
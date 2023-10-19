const express=require("express")
const {Register, Login, allUser, deleteUser} = require("../controllers/user.controller")
const userDetailes = require("../middlewares/user.middleware")

const user=express()

user.post("/user/signup",Register)
user.post("/user/login",userDetailes,Login)
user.get('/user',allUser)
user.delete('/user/delete/:id',deleteUser)

module.exports=user
const userDetailes=async(req,res,next)=>{
    const {username,password}=req.body
    if(!username || !password){
        res.status(400).send({error: "all fields are required"})
    }
    else{
        next();
    }
}

module.exports=userDetailes

const mongoose=require("mongoose")

const connect=async()=>{
    await mongoose.connect(process.env.db)
    console.log("Connect to database");
}

module.exports=connect
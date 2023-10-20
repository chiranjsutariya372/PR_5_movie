const movieUser = require("../Models/user.schema");

const Register = async (req, res) => {
  const user = await movieUser.create(req.body);
  res.status(201).send(user);
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  const usermatch = await movieUser.findOne({ username });
  if (!usermatch || usermatch.password != password)
    return res.status(401).json({ error: "Invalid username or password" });

    res.send({message:'Logged in successfully'})
};

const allUser=async(req,res)=>{
  const user=await movieUser.find()
  res.send(user)
}

const deleteUser=async(req,res)=>{
  await movieUser.findByIdAndDelete(req.params.id)
  res.send({message:'User deleted successfully'})
}

module.exports = { Register, Login,allUser,deleteUser };

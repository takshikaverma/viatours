const bcrypt = require('bcrypt')
const LoginModel = require('../../model/loginModel')
const Signup=(req,res)=>{
    // console.log("controlled -signup called");
    // console.log(req.body);
    bcrypt.hash (req.body.password,10, async (error,hash)=>{
        if(error){
            res.json({message:"invalid user",success:false})
        }
        else{
            let result = LoginModel({name:req.body.name, email: req.body.email, password:hash})
             let signupResponse = await result.save();
            //  console.log(signupResponse)
            res.json({message:"Signup successfully",success:true})
        }
    })
}
module.exports = Signup;
const mongoose = require("mongoose");
const emplyeeSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confpassword :{
        type:String,
        require:true 
    }

})
const Register = new mongoose.model("registers", emplyeeSchema);
module.exports= Register;
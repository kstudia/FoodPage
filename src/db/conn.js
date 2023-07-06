const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/home",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() =>{
    console.log(`connection succesfully`)
}).catch ((e) =>{
    console.log(`error ${e}`)
})
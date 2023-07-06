const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const mongoDB = async ()=>{
  try{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected ${conn.connection.host}`)
  }catch(error){
  console.log(error)
  process.exit(1)
  }
}
mongoose.connect("mongodb://localhost:27017/home",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() =>{
    
    console.log(`connection succesfully`)
}).catch ((e) =>{
    console.log(`error ${e}`)
})
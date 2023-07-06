const mongoose = require("mongoose");
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const Register = require('../models/registers')
mongoose.set('strictQuery', false)

const connectDB = async ()=>{
  try{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoDB connected ${conn.connection.host}`)
  }catch(error){
  console.log(error)
  process.exit(1)
  }
}

app.get('/', (req, res) =>{
  res.send({title:'books'});
});
connectDB().then(()=>{
  app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`)
  })
})

app.post("/register", async (req, res) => {
  try {
    const password = req.body.passwordd;
    const confpassword = req.body.confpassword;

    if (password === confpassword) {
      const registerClient = new Register({
        email: req.body.emailvalue,
        password: req.body.passwordd,
        confpassword: req.body.confpassword,
      });
      const registered = await registerClient.save();
      use = res.redirect("/")
    } else {
      res.send("password are not matching");
    }
  }catch (error) {
    res.status(400).send(error);
  }
});
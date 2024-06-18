const express = require("express");

const app = express();
const mongoose = require("mongoose");

const User = require("./models/registrationModel")

// middleware
app.use(express.json());

// database connection

mongoose.connect("mongodb+srv://nodejs:kjw2m4xSFLzJV6ev@cluster0.0ruzyeb.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("Database Connected");
})







// app.post("/registration", (req, res) => {


// const {name, email} = req.body;
// if(name == ""){
//   res.status(400).send("Name is required");
// } else if(email == ""){
//   res.status(400).send("Email is required");
// }  else{
//   let registration = new User ({
//     name: name,
//     email: email,

//   })
//   registration.save();

//   res.send(registration);
// }



// console.log(name)
// console.log(email)

// });

// create/post method

app.post("/createuser", (req, res) => {
 const {firstName, lastName, userName, email, designation  } = req.body;
 const registrationSchema = new User ({
   firstName: firstName,
   lastName: lastName,
   userName: firstName + lastName,
   email: email,
   designation: designation
 })


 res.send(registrationSchema)
});



  

app.listen("8000")
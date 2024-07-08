require('dotenv').config()

const express = require("express");

const app = express();

// database connection
const dbConnection = require("./helper/dbConnection")
dbConnection();

// middleware
const mongoose = require("mongoose");


// const User = require("./models/registrationModel")

const secureAPI = require("./middleware/secureAPI");
// const message = require ("./controller/message");
// const profile = require ("./controller/profile");
const registrationController = require ("./controller/registrationController");
const loginController = require("./controller/loginController");
const blogPostController = require("./controller/blogPostController");
const getAllBlogController = require("./controller/getAllBlogController");
const emailVerificationController = require("./controller/emailVerificationController");
const multer  = require('multer')


// middleware
app.use(express.json());



// database connection

// mongoose.connect("mongodb+srv://nodejs:kjw2m4xSFLzJV6ev@cluster0.0ruzyeb.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
//   console.log("Database Connected");
// })


// http functions for routing routes and controllers
// app.get('/', (req, res) => {
//   res.send("Hello World");
// });



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


/* CRUD Operation Start ->> 

app.post("/createuser", (req, res) => {
 const {firstName, lastName, userName, email, designation  } = req.body;
 const registrationSchema = new User ({
   firstName: firstName,
   lastName: lastName,
   userName: firstName + lastName,
   email: email,
   designation: designation
 })
//  store registration in database
 registrationSchema.save();

 res.send(registrationSchema)
});


// update/put method
app.put("/update/:id", async (req, res) => {

      try {
        const {id} = req.params

        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true})
      
        res.send(updateUser)

      } catch (error){
        console.log(error);
      }

 });

 // delete/delete method
 app.delete("/delete/:id", async (req, res) => {

      try {
        const {id} = req.params

        const deleteUser = await User.findByIdAndDelete(id)
      
        res.send(deleteUser)

      } catch (error){
        console.log(error);
      }

 });

 // get/get method
 app.get("/get/:id", async (req, res) => {

      try {
        const {id} = req.params

        const getUser = await User.findById(id)
      
        res.send(getUser)

      } catch (error){
        console.log(error);
      }

 });

 // get/get method
 

CRUD Operation End */



// 26.6.2024  Homework Class 6
/*
app.get("/message", secureAPI, function (req, res) {
  
  console.log("Hi there, I am from Homepage")

});

  */


// app.get("/message", secureAPI, message);
// app.get("/profile", secureAPI, profile);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })



app.post("/registration", secureAPI, registrationController);
app.post("/login", secureAPI, loginController);
app.post("/blogpost", secureAPI, upload.single('avatar'), blogPostController);
app.get("/blogpost", secureAPI, getAllBlogController );

app.get("/:email", emailVerificationController);







app.listen("8000");
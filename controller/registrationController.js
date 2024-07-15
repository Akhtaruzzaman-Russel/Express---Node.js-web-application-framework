const bcrypt = require('bcrypt');
const User = require("../models/userModel");
const nodemailer = require("nodemailer");


// Class o7 

let registrationController = async(req, res)=>{
    const {name, email, password} = req.body;
    // console.log(password.length);



    console.log(name, email, password);
    if (name == "" || name == undefined ){
       return res.status(400).send("Name is required");
    }
    if (email == "" || email == undefined){
        return  res.status(400).send("Email is required");
    }
    if (password == "" || password == undefined){
        return res.status(400).send("Password is required");
    }

    let existingUser = await User.findOne({email: email});
    
    if (existingUser != null){
        return res.status(400).send("Email already exists");
    }
   

    bcrypt.hash(password, 10,async function(err, hash) {
        // Store hash in your password DB.
        console.log(hash); // Prints: $2b$10$kG7i57SOMG5sV.i18e8W9.eI28t/05OPR.K8wQ4v19.9...
        // res.send(hash);
        // res.status(200).send("Registration successfully registered")

        let user = new User({
            name: name,
            email: email,
            password: hash
        });

        user.save()

        const transporter = nodemailer.createTransport({
                service: "gmail",
            auth: {
              user: "zaman.russel911@gmail.com",
              pass: "virn fwlf opwj caoj",
            },
          });
          

            const info = await transporter.sendMail({
              from: 'My Blog Site', // sender address
              to: user.email, // list of receivers
              subject: "Email Verification", // Subject line

              html: `<table border=0 cellpadding=0 cellspacing=0 role=presentation class=body><tr><td> <td class=container><div class=content><span class=preheader>This is preheader text. Some clients will show this text as a preview.</span><table border=0 cellpadding=0 cellspacing=0 role=presentation class=main><tr><td class=wrapper><p>Hi there<p>Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.<table border=0 cellpadding=0 cellspacing=0 role=presentation class="btn btn-primary"><tr><td align=left><table border=0 cellpadding=0 cellspacing=0 role=presentation><tr><td><h4> ${user.name} : <a href="http://localhost:8000/${user.email}" target=_blank> Verify Email Click Here</a></h4></table></table><p>This is a really simple email template. It's sole purpose is to get the recipient to click the button with no distractions.<p>Good luck! Hope it works.</table></div><td> </table>`, // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
     

       res.send({
        message: "Registration successful",
      
        id: user._id,
        name: user.name,
        email: user.email
       })
    });

};

/* Start Class 06

let registrationController = (req, res)=>{
    const {name, email, password} = req.body;

    let numerics = /(?=.*[0-9])/;
    let lowercase = /(?=.*[a-z])/;
    let uppercase = /(?=.*[A-Z])/;
    let symblechar = /(?=.*\W)/;
    let characters = /.{8,16}/;

    if (!numerics.test(password)) {
        return res.send("Need Numerics number");
    }
    if (!lowercase.test(password)) {
        return res.send("Need Lowercase character");
    }
    if (!uppercase.test(password)) {
        return res.send("Need Uppercase character");
    }
    if (!symblechar.test(password)) {
        return res.send("Need any symble");
    }
    if (!characters.test(password)) {
        return res.send(" the password must be 8-16 characters long");
    }

    End */

/* Start 

    let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/ ;
    if (!pattern.test(password)) {
        return res.send("Need Calital Lowercase Symble number Password");
    }

End */


    /* Start 

    console.log(password.length);
    if (password.length <6 ){
        res.send("Password must be at least 6 characters")
    }

   End */


    /* Start 

   let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  ;

   console.log(pattern.test(email));

    if (email == "" ){
        return  res.status(400).send("Email is required");
    }
    if (!pattern.test(email)){
        return res.status(400).send("Invalid email format");
    }

End */



/*
    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash); // Prints: $2b$10$kG7i57SOMG5sV.i18e8W9.eI28t/05OPR.K8wQ4v19.9...
        // res.send(hash);
        // res.status(200).send("Registration successfully registered")
    });

    bcrypt.compare(
        password, 
        "$2b$10$WQZa4ZpXJfzTKWYBQrx9j.hXjg4kRGzsyquvT3SnG7hsA7reS9yXu", 
        function(err, result) {
        // result == true
        console.log(result); // Prints: true
        // res.send(result);
        // res.status(200).send("Registration successfully registered")
    });
    */

 /*   Start

    console.log(name, email, password);
    if (name == "" ){
       return res.status(400).send("Name is required");
    }
    if (email == "" ){
        return  res.status(400).send("Email is required");
    }
    if (password == "" ){
        return res.status(400).send("Password is required");
    }

    res.status(200).send("Registration successfully registered")




};

  End  */



module.exports = registrationController;
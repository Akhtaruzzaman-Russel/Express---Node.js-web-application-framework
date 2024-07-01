const User = require("../models/userModel");
const bcrypt = require('bcrypt');

let login =async (req,res) => {
    // Logic for login authentication
    // Check if user exists in the database
    let {email, password} = req.body;

    let existingUser = await User.findOne({email: email});
    if (existingUser == null) {
        return res.status(404).send("User not found with this Email");
    }
    bcrypt.compare(password, existingUser.password, function(err, result) {
        // result == true
        if(result) {
                return res.status(200).send({
                    message: "Login Successful",
                  
                    id: existingUser._id,
                    name: existingUser.name,
                    email: existingUser.email
                   })
        }
        else {
            return res.status(401).send("Incorrect Password");
        }
    });
};

module.exports = login;
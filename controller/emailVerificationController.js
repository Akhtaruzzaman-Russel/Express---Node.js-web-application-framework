const User = require("../models/userModel");
const emailVerificationController =async (req,res)=>{
    // Validate the email format
    // console.log(req.params.email ); //
    let existingUser = await User.findOneAndUpdate({email: req.params.email}, {emailVerify: true},{new: true});

    // console.log(existingUser); //
    if(existingUser == null ){
        return res.send ("Email not found"); //
    }else {
        return res.send ("Email verified successfully"); //
    }
}

module.exports = emailVerificationController;
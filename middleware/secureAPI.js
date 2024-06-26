let secureAPI = (req, res, next)=> {
    console.log(req.headers.authorization)
    if (req.headers.authorization == "o4rw4ICDk6GQ2A2"){
        next();
    }else{
        res.send("Authorization Failed");
    }
    // console.log("I am from Secure API");
    // next();
};


module.exports = secureAPI;
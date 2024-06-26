let registrationController = (req, res)=>{
    const {name, email, password} = req.body;

    console.log(name, email, password);
    if (name == "" ){
        res.status(400).send("Name is required");
    }
    if (email == "" ){
        res.status(400).send("Email is required");
    }
    if (password == "" ){
        res.status(400).send("Password is required");
    }

    res.status(200).send("Registration successfully registered")
};

module.exports = registrationController;
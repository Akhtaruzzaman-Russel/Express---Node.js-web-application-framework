let Blog = require("../models/blogModel");


let blogPostController = (req,res) =>{

    // console.log("req.file",req.file.path);

    const {title, description,  postedBy} = req.body 

    let blog = new Blog({
        title: title,
        description: description,
        image: req.file.path,
        postedBy: postedBy
    })

    blog.save()

    res.send({message: "Blog post created successfully"});
}

module.exports = blogPostController
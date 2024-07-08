let Blog = require("../models/blogModel");


let blogPostController = (req,res) =>{
    const {title, description, image, postedBy} = req.body 

    let blog = new Blog({
        title: title,
        description: description,
        image: image,
        postedBy: postedBy
    })

    blog.save()

    res.send({message: "Blog post created successfully"});
}

module.exports = blogPostController
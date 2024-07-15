const Category = require("../models/categoryModel");


let categoryEditController =async (req, res) => {

    const {id, name, description} = req.body;

    let existingCategory = await Category.findOne({ _id: id });
    
    if (existingCategory == null){
        return res.send("Category not found");
    };

    let updateData = {
        name: name || existingCategory.name, 
        description: description || existingCategory.description,
    };

    let update = await Category.findByIdAndUpdate({_id: id}, updateData, {new:true} );

    res.send(update);

    // you can add more validation or error handling here as needed.

    // for example, if you want to validate that the name is not empty
    // if (!name) {
    //     return res.status(400).send("Name is required");
    // }

    // if you want to validate that the name is unique
    // let existingCategory = await Category.findOne({name: name.toLowerCase()});
    // if (existingCategory && existingCategory._id.toString()!== id) {
    //     return res.status(400).send("Category name already exists");
    // }

    // if you want to validate that the description is not empty
    // if (!description) {
    //     return res.status(400).send("Description is required");
    // }

    // if you want to validate that the description is not too long
    // if (description) 

}


module.exports = categoryEditController;
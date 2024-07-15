let Category = require("../models/categoryModel")

let categoryController =async (req, res) => {

    let {name, description} = req.body;

    console.log(name.toLowerCase());

    let existingCategory = await Category.findOne({name: name.toLowerCase()});
    
    if (existingCategory != null){
        return res.send("Category already exists");
    };
   
    let category = new Category({
        name: name.toLowerCase(),
        description: description,
    });

    category.save();
    res.send("Category Created successfully")
 
}

module.exports = categoryController;
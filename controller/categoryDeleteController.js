const Category = require("../models/categoryModel");


let categoryDeleteController =async (req, res) => {

    const {id} = req.params

    await Category.findOneAndDelete(id)

    res.send("Category deleted successfully")

    //  res.send(category)
 


}


module.exports = categoryDeleteController;
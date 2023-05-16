const Category = require("../models/category.js");

const getAllCategories = async (req, res) => {
  try {
    console.log("api hit")
    const categories = await Category.find({}).sort({ _id: -1 });
    if (!categories) {
      return res.status(404).json({
        message: "No Categories found",
      });
    }
    return res.status(200).json({
      categories,
    });
  } catch (error) {
    console.log(err);
  }
};

// get categories and subcategories
const getCategory = async (req, res) => {
  console.log(req.params)
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        error: "No such category exist",
      });
    }
    return res.status(200).json({
      category,
    });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      error: "server error",
    });
  }
};

// will be an admin route in future
const addCategory = async (req, res) => {
  // const images = req.files.map((file) => file.originalname);

  let { categoryName, subCatName } = req.body;

  if (!categoryName) {
    return res.status(400).json({
      message: "Provide all the data",
    });
  }
  if (!subCatName) {
    subCategories = [];
  }
  try {
    const category = await Category.create({
      name : categoryName,
      images: [],
      subCategories : subCatName !== undefined ? [{name: subCatName}] : [],
    });

    console.log(category);

    // need to handle subcategories
    return res.status(201).json({
      category
    });
  } catch (err) {
    console.log(err);
    return res.send("error");
  }
};

const updateCategory = async (req, res) => {

  const id = req.params;

  return res.status(200).json({
    message: "got the request"
  })
  
}

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  getCategory
};

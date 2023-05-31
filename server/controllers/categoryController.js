const Category = require("../models/category.js");
const {isValidObjectId} = require('../utils/functions.js')
const getAllCategories = async (req, res) => {
  console.log(req.userId);

  try {
    console.log("api hit");
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
  console.log(req.params);
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
    console.log(err);
    return res.status(500).json({
      error: "server error",
    });
  }
};

// will be an admin route in future
const addCategory = async (req, res) => {
  //   const images = req.files.map((file) => file.originalname);
  //   console.log(req)

  let { categoryName } = req.body;
  // console.log(req)
  if (req.file) {
    console.log("file", req.file);
  }

  const subCats = JSON.parse(req.body["sub-cats"]);
  console.log(categoryName, subCats);

  if (!categoryName) {
    return res.status(400).json({
      message: "Provide all the data",
    });
  }
  let subCategories = [];
  if (subCats.length !== 0) {
    subCategories = subCats.map((obj) => ({ name: obj.val }));
  }
//   console.log("subCategories", subCategories);
  const {originalname, mimetype} = req.file;
  const image = originalname.replace(originalname.split('.')[1],mimetype.split('/')[1]);
  console.log("image", image);

//   return res.send("ok");
      try {

        const isAlreadyExist = await Category.findOne({ name: categoryName})
        if(isAlreadyExist){
            return res.status(400).json({
                message: "Category already exist"
            })
        }

      const category = await Category.create({
        name : categoryName,
        images: [image],
        subCategories
      });

      console.log(category);

  //     // need to handle subcategories
      return res.status(200).json({
        category
      });
    } catch (err) {
      console.log(err);
      return res.send("error");
    }
};

const updateCategory = async (req, res) => {
  const {id} = req.params;
  if(!isValidObjectId(id)){
    return res.status(400).json({
        message: "Invalid id"
    })
  }
  console.log(id);
  const subCat = req.body['sub-category-name'];

  try{
    const cat = await Category.findById(id)
    if(!cat){
        return res.status(404).json({
            message: "No such category found"
        })
    }
    // if subCat already exist
    const isSubCatFound = cat.subCategories.find(subcat => subcat.name === subCat);
    if(isSubCatFound){
        return res.status(404).json({
            message: "This category already exist"
        })
    }
    cat.subCategories.push({name: subCat})
    const updatedCat = await cat.save();

    return res.status(202).json({
        updatedCategory : updatedCat
    })
  } catch(err) {
    console.log("updateCategory error", err)
    return res.status(500).json({
        message: "something went wrong on the server"
    })
  }



  return res.status(200).json({
    message: "got the request",
  });
};

const deleteCategory = async (req, res) => {
    const {id} = req.params;
    if(!isValidObjectId(id)){
        return res.status(402).json({
            message: "MalFormed Id" 
        })
    }
    try{
        const data = await Category.findByIdAndDelete(id);
        console.log(data);
        return res.status(204).json({
            message: "Category Deleted"
        })
    } catch(err){
        console.log("delete Category");
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  getCategory,
  deleteCategory
};

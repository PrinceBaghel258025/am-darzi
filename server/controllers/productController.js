const Product = require("../models/product");

// const getSuits = async (req, res) => {
const getByCategories = async (req, res) => {
  const { catId } = req.params;
  console.log("catId2", catId);
  // const {suit } = req.body;
  try {
    const products = await Product.find({ categories: { $in: [catId] } });
    // console.log(suits)
    // console.log(products);
    // if()
    if (products) {
      // console.log("found products")
      return res.status(200).json({
        products,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      error: "something got wrong",
    });
  }
};

const getAllProducts = async (req, res) => {
  console.log("got the getallproducts");
  try {
    const products = await Product.find();
    console.log("products", products);
    return res.status(200).json({
      products,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "get the error",
    });
  }
};

const addProduct = async (req, res) => {
  const product = new Product({
    ...req.body,
  });
  const updatedProduct = await product.save();

  return res.status(200).json({
    product: updatedProduct,
  });
};

module.exports = {
  getByCategories,
  getAllProducts,
  addProduct,
};

const Category = require("../models/category");
const Product = require("../models/product");

const getDesigns = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id)
  .populate(
    "categories",
    "name -_id"
  )
  // .populate("customs", " -_id variants");
  .populate({ path: "customs", populate: {path: "custom"} });

  return res.status(200).json({
    product,
  });
};

module.exports = {
  getDesigns,
};

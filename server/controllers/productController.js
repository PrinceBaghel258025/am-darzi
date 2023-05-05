const Product = require('../models/product')

// const getSuits = async (req, res) => {
const getByCategories = async (req, res) => {
    const { suit } = req.params;
    // const {suit } = req.body;
    const suits = await Product.find({categories: { "$in": [suit]} });
    // console.log(suits)
    console.log(suits);
    // if()
    return res.send("ok")
}

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    return res.status(200).json({
        suits: suits
    })
}

const addProduct = async (req, res) => {
    const product = new Product({
        ...req.body
    })
    const updatedProduct = await product.save()

    return res.status(200).json({
        product : updatedProduct,
    })
}

module.exports = {
    getByCategories,
    getAllProducts,
    addProduct
}
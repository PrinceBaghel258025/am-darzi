const express = require('express')
const router = express.Router();

// utils
const upload = require('../utils/upload.js')

// controllers
const categoryController  = require('../controllers/categoryController')
const productController = require('../controllers/productController.js')


router.post('/login', () => {})

router.get('/category', categoryController.getAllCategories)
router.get('/category/:id', categoryController.getCategory)
router.get('/category/products/:catId', productController.getByCategories)
router.patch('/category/:id', upload.array("images"), categoryController.updateCategory);

router.get('/products', productController.getAllProducts)

module.exports = router;
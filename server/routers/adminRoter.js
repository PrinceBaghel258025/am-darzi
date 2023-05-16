const express = require('express')
const router = express.Router();

// utils
const upload = require('../utils/upload.js')

// controllers
const categoryController  = require('../controllers/categoryController')
const productController = require('../controllers/productController.js')
const attributeController = require('../controllers/attributeControllers.js')
const customizationController = require('../controllers/customizationController.js')

router.post('/login', () => {})

router.get('/categories', categoryController.getAllCategories)
router.get('/categories/:id', categoryController.getCategory)
router.get('/categories/products/:catId', productController.getByCategories)
router.patch('/categories/:id', upload.array("images"), categoryController.updateCategory);
router.post('/categories', categoryController.addCategory);

router.get('/products', productController.getAllProducts)

router.get('/attributes', attributeController.getAttribute)
router.post('/attributes', attributeController.addAttribute)
router.post('/attributes/:id',upload.single('images'), attributeController.updateAttribute)

router.get('/customizations', customizationController.getCustomizations);
router.post('/customizations', customizationController.addCustomization);
router.patch('/customizations/:id',upload.single('images'), customizationController.updateCustomization);

module.exports = router;
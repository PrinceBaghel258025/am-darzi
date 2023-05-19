const express = require('express')
const multer = require('multer')
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
router.delete('/categories/:id', categoryController.deleteCategory);
// router.post('/categories', upload.single("primaryimage"), categoryController.addCategory);
// router.post('/categories', upload.fields([{name: "primaryimage"}, {name: 'sub-cats'}]), categoryController.addCategory);
router.post('/categories', upload.single('categoryImage'), categoryController.addCategory);

router.get('/products', productController.getAllProducts)

router.get('/attributes', attributeController.getAttributes)
router.post('/attributes', attributeController.addAttribute)
router.post('/attributes/:id',upload.single('images'), attributeController.updateAttribute)
router.delete('/attributes/:id', attributeController.deleteAttribute)

router.get('/customizations', customizationController.getCustomizations);
router.post('/customizations', customizationController.addCustomization);
router.patch('/customizations/:id',upload.single('images'), customizationController.updateCustomization);
router.patch('/customizations/:customId/:variantId', customizationController.deleteVariant);

module.exports = router;
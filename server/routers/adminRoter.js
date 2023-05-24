const express = require('express')
const multer = require('multer')
const router = express.Router();
const {verifyAdmin} = require('../utils/functions')
// utils
const upload = require('../utils/upload.js')

// controllers
const categoryController  = require('../controllers/categoryController')
const productController = require('../controllers/productController.js')
const attributeController = require('../controllers/attributeControllers.js')
const customizationController = require('../controllers/customizationController.js')
const orderController = require('../controllers/orderController.js')
const userController = require('../controllers/userController.js')
// Auth
router.post('/login', () => {})

// categories
router.get('/categories',verifyAdmin, categoryController.getAllCategories)
router.get('/categories/:id', categoryController.getCategory)
router.get('/categories/products/:catId', productController.getByCategories)
router.patch('/categories/:id', upload.array("images"), categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);
// router.post('/categories', upload.single("primaryimage"), categoryController.addCategory);
// router.post('/categories', upload.fields([{name: "primaryimage"}, {name: 'sub-cats'}]), categoryController.addCategory);
router.post('/categories', upload.single('categoryImage'), categoryController.addCategory);


// Products

router.get('/products', productController.getAllProducts)

// Attributes
router.get('/attributes', attributeController.getAttributes)
router.get('/attributes/:id', attributeController.getAttribute)
router.post('/attributes', attributeController.addAttribute)
router.post('/attributes/:id',upload.single('images'), attributeController.updateAttribute)
router.delete('/attributes/:id', attributeController.deleteAttribute)

// Customizations
router.get('/customizations', customizationController.getCustomizations);
router.get('/customizations/:id', customizationController.getCustomization);
router.post('/customizations', customizationController.addCustomization);
router.patch('/customizations/:id',upload.single('images'), customizationController.updateCustomization);
router.patch('/customizations/:customId/:variantId', customizationController.deleteVariant);


// Orders
router.get('/orders', orderController.getAllOrders)
router.post('/orders', orderController.createOrder)
router.get('/orders/:id', orderController.getOrderById)
// route for admin as well as a user can see all his orders
// router.get('/orders', orderController.getUserOrders)

// route for courier service
router.get('/orders', orderController.updateOrderToDelivered) // canceled may also be there
// require complex handling
router.get('/orders', orderController.updateOrderToPaid)


// Users
router.post('/sign-in', userController.userLogin)
router.get('/users', userController.getAllUsers)
router.post('/register', userController.userRegistration)
// router.get('users', userController.getAllUsers)


module.exports = router;
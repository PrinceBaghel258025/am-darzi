const router = require('express').Router();
const productController = require('../controllers/productController')


router.get('/', productController.getAllProducts)
// can use category id when refering category in product schema
router.get('/categoryName', productController.getByCategories)
router.post('/add', productController.addProduct)


module.exports = router;
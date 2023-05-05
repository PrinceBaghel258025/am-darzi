const express = require('express')
const router = express.Router();
const multer = require('multer')
const categoryController = require('../controllers/categoryController');
const { loginCheck, isAdmin } = require('../middleware/auth');

const path = require('path')

// Image Upload setting
const multerStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname);
      },
      filename: function(req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(null, `../public/${file.originalname.split('.')[0]}.${ext}`);
      },
});
  
  const upload = multer({ storage: multerStorage });




router.get('/all-category',  categoryController.getAllCategories);


// admin access
router.post('/add-category',
//  loginCheck,
//   isAdmin,
  // upload image
  upload.array('images'),
   categoryController.addCategory)

// router.patch('/:id',
//     // loginCheck,
//     // isAdmin,
//     categoryController.editCategory    
// )

// router.delete('/:id',
//     // loginCheck,
//     categoryController.deleteCategory
// )

module.exports = router;
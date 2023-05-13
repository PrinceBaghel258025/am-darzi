const router = require("express").Router();
const attributeController = require('../controllers/attributeControllers.js')
const path = require('path')
const multer = require('multer')


router.get('/get', attributeController.getAttribute)


// Image Upload setting
const multerStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname);
      },
      filename: function(req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(null, `../public/images/customs/${file.originalname.split('.')[0]}.${ext}`);
      },
});
  
const upload = multer({ storage: multerStorage });


// router.post('/add',upload.single("primary"), upload.array('images'), attributeController.addAttribute)
// router.post('/add', attributeController.addAttribute)

module.exports = router;
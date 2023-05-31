const multer = require('multer')
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

  module.exports = upload;
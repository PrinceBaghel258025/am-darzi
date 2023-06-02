const multer = require('multer')
const path = require('path')
const sharp = require('sharp');


// Image Upload setting
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname);
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(null, `../public/${file.originalname.split('.')[0]}.${ext}`);
    },
});

const upload = multer({ storage: multer.memoryStorage() });

const handleImage = async (req, res, next) => {
    console.log(req.file);
    const { buffer, originalname } = req.file;
    const ref = originalname.split('.')[0].split(' ').join('-') + ".webp";
    await sharp(buffer).webp({ quality: 20 }).toFile("./public/images/" + ref)

    // req.imgLink = `http://localhost:5000/images/${ref}`;
    // works only for single image
    req.imgLink = `/images/${ref}`;
    next();
}

module.exports = { upload, handleImage };
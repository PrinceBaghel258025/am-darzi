const multer = require('multer')
const path = require('path')
const sharp = require('sharp');
const cloudinary = require("cloudinary").v2;
const { Readable }  = require('stream')


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

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

    // upload to cloudinary
    const bufferToStream = (buffer) => {
        const readable = new Readable({
          read() {
            this.push(buffer);
            this.push(null);
          },
        });
        return readable;
      };

      const data = await sharp(buffer).webp({ quality: 20 }).resize(320, 240).toBuffer();

    
      const stream = cloudinary.uploader.upload_stream(
        { folder: "Dev" },
        (err, result) => {
          if (err) return console.log(err);
          req.imgLink=result.secure_url;
          next();
        }
      );
      bufferToStream(data).pipe(stream);


    // dist storage
        // const ref = originalname.split('.')[0].split(' ').join('-') + ".webp";
        // await sharp(buffer).webp({ quality: 20 }).toFile("./public/images/" + ref)

        // // req.imgLink = `http://localhost:5000/images/${ref}`;
        // // works only for single image
        // req.imgLink = `/images/${ref}`;
}

module.exports = { upload, handleImage };
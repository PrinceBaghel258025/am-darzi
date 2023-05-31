const { isValidObjectId } = require("mongoose");
const Attribute = require("../models/attribute");

const getAttributes = async (req, res) => {
  const attributes = await Attribute.find({});
  if (!attributes) {
    return res.status(404).json({
      error: "no data found",
    });
  }
  // will be better if we send images along
  return res.status(200).json({
    attributes,
  });
};

// const addAttribute = async (req, res) => {

//   // will also receive multipart/form-data

//   // const images = req.files.map((file) => file.originalname);

//   const data = JSON.parse(req.body.data);

//   const attributeName = Object.keys(data)[0];
//   const variants = data[attributeName].map((el) => ({
//     title: el.title,
//     imgSrc: '/public/images/custom/' +  el.title + '.jpg',
// }));
//   // const customName = JSON.parse(req.body.data)
//   console.log();
//   // return res.status(200).json({
//   //     message: "ok"
//   // }
//   // )

//   // let {name: customName, variants} = req.body;
//   // length of variants and images must be same

//   //   if (!customName) {
//   //     return res.status(400).json({
//   //       message: "Provide the name of the custom",
//   //     });
//   //   }
//   //   try {
//   //     // construct variants array

//   const attribute = await Attribute.create({
//     name: attributeName,
//     values,
//   });
//   return res.status(200).json({
//     attribute,
//   });
// };

const addAttribute = async (req, res) => {
  const { name: attributeName, images } = req.body;
  const isExist = await Attribute.findOne({ name: attributeName });
  console.log(isExist);
  if (isExist) {
    console.log("got in if");
    return res.status(406).json({
      message: "Attribute already available",
    });
  }
  console.log(req.body);

  try {
    const attribute = await Attribute.create({
      name: attributeName,
      hasImages: images,
      values: [],
    });

    return res.status(201).json({
      message: "attribute created",
      attribute,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "something went wrong on the server",
    });
  }
};


// not handling images
const updateAttribute = async (req, res) => {
  const { id } = req.params;
  // check if id is given
  if (!id) {
    return res.status(400).json({
      error: "please provide id of the attribute to be updated",
    });
  }
  // check if the id of type mongoose.ObjectId
  const isValid = isValidObjectId(id);
  if(!isValid){
    return res.status(400).json({
      error: "invalid attribute id"
    })
  }

  const { title } = req.body;
  const file = req.file;
  console.log(file)
  // console.log("body", title, images);
  // // console.log("typeof request", typeof req)
  let imgSrc = '';
  if (req.file) {
    imgSrc = file.originalname;
    console.log(file);
  }

  try {
    const attribute = await Attribute.findById(id);
    if (!attribute) {
      return res.status(400).json({
        error: "no such attribute exists",
      });
    }
    // check if the title is already available
    const isAlreadyAvailable = attribute.values.find(el => el.title === title);
    if(isAlreadyAvailable){
      return res.status(400).json({
        error: "this is already present in the current attribute"
      })
    }

    attribute.values.push({title, imgSrc})
    const updatedAttribute = await attribute.save();
    return res.status(200).json({
      updatedAttribute,
      file: req.file
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "something went wrong on the server",
    });
  }
};

const deleteAttribute = async (req, res) => {
    const {id} = req.params;
    if(!isValidObjectId(id)){
        return res.status(402).json({
            message: "MalFormed Id" 
        })
    }
    try{
        const data = await Attribute.findByIdAndDelete(id);
        console.log(data);
        return res.status(204).json({
            message: "Attribute Deleted"
        })
    } catch(err){
        console.log("delete Attribute");
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const getAttribute = async (req, res) => {
  const {id } = req.params;
  // console.log(id);
  if(!isValidObjectId(id)){
    return res.status(400).json({
      error: "invalid id"
    })
  }
  try{
    const attribute = await Attribute.findById(id);
  if (!attribute) {
    return res.status(404).json({
      error: "no data found",
    });
  }
  // will be better if we send images along
  return res.status(200).json({
    attribute,
  });
  } catch(err){
    console.log(err)
    return res.status(503)
  }
}


module.exports = {
  getAttributes,
  getAttribute,
  addAttribute,
  updateAttribute,
  deleteAttribute
};

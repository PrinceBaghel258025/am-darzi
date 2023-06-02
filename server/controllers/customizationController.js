const { isValidObjectId } = require("mongoose");
const Customization = require("../models/customization");

const getCustomizations = async (req, res) => {
  const customizations = await Customization.find({});
  if (!customizations) {
    return res.status(404).json({
      error: "no data found",
    });
  }
  // will be better if we send images along
  return res.status(200).json({
    customizations,
  });
};

// const addCustomization = async (req, res) => {

//   // will also receive multipart/form-data

//   // const images = req.files.map((file) => file.originalname);

//   const data = JSON.parse(req.body.data);

//   const customizationName = Object.keys(data)[0];
//   const variants = data[customizationName].map((el) => ({
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

//   const customization = await Customization.create({
//     name: customizationName,
//     values,
//   });
//   return res.status(200).json({
//     customization,
//   });
// };

const getCustomization = async (req,res) => {
  const {id} = req.params;

  if(!isValidObjectId(id)){
    return res.status(400).json({
      message: "Invalid Object Id"
    })
  }
  try{
    const customization = await Customization.findById(id);
    if(!customization) {
      return res.status(400).json({
        message: "No such customization exist"
      })
    }
    return res.status(200).json({
      customization
    })
  }catch(err){
    return res.status(500).json({
      message: "something went wrong on the server"
    })
  }
}

const addCustomization = async (req, res) => {
  //   const { name: customizationName, images } = req.body;
  const { name } = req.body;
  const isExist = await Customization.findOne({ name });
  console.log(isExist);
  if (isExist) {
    console.log("got in");
    return res.status(406).json({
      message: "Customization already available",
    });
  }
  console.log(req.body);

  try {
    const customization = await Customization.create({
      name,
      variants: [],
    });

    return res.status(201).json({
      //   message: "customization created",
      customization,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "something went wrong on the server",
    });
  }
};

// not handling images
const updateCustomization = async (req, res) => {
  const { id } = req.params;
  // check if id is given
  if (!id) {
    return res.status(400).json({
      error: "please provide id of the customization to be updated",
    });
  }
  // check if the id of type mongoose.ObjectId
  const isValid = isValidObjectId(id);
  if (!isValid) {
    return res.status(400).json({
      error: "invalid customization id",
    });
  }

  const { title } = req.body;
//   const file = req.file;
//   console.log(file);
  // console.log("body", title, images);
  // // console.log("typeof request", typeof req)
  let imgSrc = req.imgLink;

  try {
    const customization = await Customization.findById(id);
    if (!customization) {
      return res.status(400).json({
        error: "no such customization exists",
      });
    }
    // check if the title is already available
    const isAlreadyAvailable = customization.variants.find(
      (el) => el.title === title
    );
    if (isAlreadyAvailable) {
      return res.status(400).json({
        error: "this is already present in the current customization",
      });
    }

    customization.variants.push({ title, imgSrc });
    const updatedCustomization = await customization.save();
    return res.status(200).json({
      updatedCustomization
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "something went wrong on the server",
    });
  }
};

const deleteVariant = async (req, res) => {
  const { customId, variantId } = req.params;
  console.log(customId, variantId);
  try {
    let customization = await Customization.findById(customId);
    if (!customization) {
      return res.status(400).json({
        error: "No such customization exist",
      });
    }
    let update = customization.variants.filter((cus) =>
      cus._id.toString() !== variantId ? cus : null
    );
    // console.log(customization.variants[0]._id.toString())
    console.log("update", update);
    // customization = { ...customization, variants: update };
    // console.log("customization", customization);
    let updatedCustomization = await Customization.findByIdAndUpdate(
      customId,
      {variants: update}, {new : true}
    );
    // const updatedCustomization = await customization.save();
    return res.status(204).json({
      updatedCustomization,
    });
  } catch (err) {
    console.log("deleteVariant error", err);
    return res.status(400);
  }
  //   return res.status(200).send("ok");
};

module.exports = {
  getCustomizations,
  getCustomization,
  addCustomization,
  updateCustomization,
  deleteVariant,
};
